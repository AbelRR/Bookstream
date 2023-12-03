import weaviate, { ApiKey } from 'weaviate-ts-client';

let weaviateAPIKey = process.env['WEAVIATE-API-KEY'] || '';
weaviateAPIKey = weaviateAPIKey!.replace(/\s+/g, '') as string
const weaviateHost = process.env['WEAVIATE_ENDPOINT'] || '';
// NOTE: Don't include the https:// in the secret
const openAIAPIKey = process.env['OPENAI-API-KEY'] || '';


// export const client = weaviate.client({
//   scheme: 'https',
//   host: weaviateHost,
//   // apiKey: new ApiKey(`"${weaviateAPIKey}"`),
//   apiKey: new ApiKey(weaviateAPIKey),
//   headers: { 'X-OpenAI-Api-Key': openAIAPIKey },
// });


export function getWeaviateClient(){
  return  weaviate.client({
    scheme: 'https',
    host: weaviateHost,
    // apiKey: new ApiKey(`"${weaviateAPIKey}"`),
    apiKey: new ApiKey(weaviateAPIKey),
    headers: { 'X-OpenAI-Api-Key': openAIAPIKey },
  });
}