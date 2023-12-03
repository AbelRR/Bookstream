# BookStream: Replit README

![image](bookstream.png)

## Overview
BookStream is a voice-driven application that provides personalized book recommendations. This solution offers a unique, hands-free way to discover new books tailored to users' preferences.

Users call in, mention their favorite book, and get similar book suggestions through a seamless integration of Weaviate's vector search, Pulze.ai's model selection (optimizing for speed), Twilio's Voice API for phone calls, and Eleven Labs' TTS API, all hosted on Replit.

The application is deployed and hosted on Replit here: 

This README provides an in-depth look at the project, including setup instructions and usage details on Replit.

## Problem Addressed
BookStream leverages Vector Search to address the challenge of finding relevant and engaging new books in a vast and ever-growing literary landscape. It solves the problem of choice overload and the time-consuming process of searching for books that align with a reader's personal taste. 

## Key Demo Features
- Interactive Phone Call: Users initiate the process by making a phone call and mentioning their favorite book.
- Vector-Based Book Recommendations: Employs ![Weaviate's](https://weaviate.io/) vector search for finding similar books.
- Speed Optimization with ![Pulze.ai](Pulze.ai): Enhances performance speed by selecting the optimal language model.
- TTS and Phone-based Voice Integration with Eleven Labs and Twilio API: Processes recommendations and delivers them via Twilio API using Eleven Labs TTS.

## Prerequisites
- Node.js (v14.8.0 or higher if using top-level await)
npm package manager

## The Technology Stack
- Twilio account for API integration.
- Weaviate vector search engine access.
- Pulze.ai account for speed optimization.
- 11 Labs access for voice.
- Replit account for hosting and running the application.

## Installation on Replit
1. Fork the Replit:
Visit the Replit project URL and click on 'Fork' to create your own copy of the project.
3. Install Dependencies:
Dependencies are automatically handled by Replit; ensure the replit.nix file includes all necessary packages.
4. Set Up Environment Variables:
Use Replit's Secrets tab to add environment variables for Twilio API keys, Weaviate endpoint, Pulze.ai credentials, and Eleven Labs API Key.

## Usage
1. Running the Application:
Click 'Run' on Replit to start the server script.
2. User Interaction:
Users call the provided Twilio number and input their favorite book as instructed.
3. Recommendation Process:
Input is sent to Weaviate for vector search.
Results are optimized by Pulze.ai.
11 Labs processes the output, which is then relayed via Twilio API.
4. Receiving Book Suggestions:
The user gets book recommendations through the ongoing phone call.

## Configuration
- Customize Weaviate search settings in config/weaviate_config.py.
- Configure Pulze.ai optimization in config/pulze_config.py.
- Adjust Twilio and 11 Labs integration in their respective configuration files on Replit.

---
### Contributors
- Abel Regalado, 
- Kevin Leffew, 
- Lorenze Hernandez

