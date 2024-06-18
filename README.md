# User API

A simple Express User API.

## Installation
 
npm install


## Install dependencies:

 
npm install

## Start the server:
 
npm start

## API Endpoints
Register User
URL: /api/user/register
Method: POST
Request Body:
json
 


{
  "username": "string",
  "email": "string",
  "password": "string"
}

## API Endpoints
** Register User
URL: /api/user/register
Method: POST
Request Body:
json
 


{
  "username": "string",
  "email": "string",
  "password": "string"
}

## Responses:
201: User registered successfully
400: User already exists

## Fetch User

URL: /api/user/fetch
Method: GET
Query Parameters:
username: string

## Responses:
200: User details fetched successfully
404: User not found

## API Documentation
Access the API documentation at /api-docs.


## CURL Commands
Register User
 curl -X POST http://localhost:3000/api/user/register -H "Content-Type: application/json" -d '{"username":"john_doe","email":"john@example.com","password":"password123"}'


## Fetch User
 
 


curl -X GET "http://localhost:3000/api/user/fetch?username=john_doe"
vbnet
  