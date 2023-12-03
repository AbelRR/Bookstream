

import fetch from 'node-fetch';
import { getWeaviateClient } from './client';


export async function main() {
  try {
    // CREATE THE WEAVIATE CLIENT
    const client = getWeaviateClient()

    console.log(await client.misc.readyChecker())

    // CREATE THE SCHEMA

    await client.schema
      .classDeleter()
      .withClassName('BookRecs')
      .do();

    const classObj = {
      'class': 'BookRecs',
      'vectorizer': 'text2vec-openai',
      'moduleConfig': {
        'text2vec-openai': {},
        'generative-openai': {}
      },
     
     
    };

    async function addSchema() {
      const res = await client.schema.classCreator().withClass(classObj).do();
      console.log(res);
    }

    await addSchema();



    // IMPORT DATA 

    async function getJsonData() {
      const file = await fetch('https://raw.githubusercontent.com/lorenzejay/ai-hack-party-dataset/main/books.json');
      return file.json();
    }

    async function importBooks() {
      // Get the questions directly from the URL
      const data = await getJsonData();

      // Prepare a batcher
      let batcher = client.batch.objectsBatcher();
      let counter = 0;
      const batchSize = 100;


      for (const book of data) {

        // Construct an object with a class and properties 'answer' and 'question'
     
        const obj = {
          class: 'BookRecs',
          properties: {
            title: book.title,
            categories: book.categories,
            description: book.description,
          },
        };

        // add the object to the batch queue
        // batcher = batcher.withObject(obj);
        // add the object to the batch queue
        batcher = batcher.withObject({
          'class': 'BookRecs',
          'properties': {
            'title': book.title,
            'categories': book.categories,
            'description': book.description
          }
        });

        // When the batch counter reaches batchSize, push the objects to Weaviate
        if (counter++ == batchSize) {
          // flush the batch queue
          const res = await batcher.do();
          console.log(res);

          for (const item of res) {
            if (item.result.status == "FAILED") {
              console.log(JSON.stringify(item.result.errors));
            }
          }

          // restart the batch queue
          counter = 0;
          batcher = client.batch.objectsBatcher();
        }

      }

      // Flush the remaining objects
      const res = await batcher.do();
      console.log(res);
    }

    await importBooks();


  } catch (err) {
    console.log('err', err)
  }

}


// main()