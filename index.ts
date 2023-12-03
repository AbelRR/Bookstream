import { getWeaviateClient } from "./utils/client";
import * as http from 'http';
const express = require('express');
const bodyParser = require('body-parser');
const Database = require('@replit/database');
const { OpenAI } = require("openai");
const db = new Database();

const app = express();
const port = 3000;

const client = getWeaviateClient()

async function nearTextQuery() {
  const res = await client.graphql
    .get()
    .withClassName('BookRecs2')
    .withFields('categories description')
    // .withNearText({concepts: ['fiction']})
    .withLimit(2)
    .do();

  console.log(JSON.stringify(res, null, 2));
  return res;
}


app.use(bodyParser.json());

app.get('/', async (req, res) => {
  const data = await nearTextQuery();
  res.json(data);
});


// const server = http.createServer((_req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// const port = 3000;
// const hostname = "0.0.0.0"

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
