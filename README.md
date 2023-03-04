# Social-Network-API

## Objective

The objective of this task was to create an API where users can share their thoughts, react to other people's thoughts on the website, update and delete their own thoughts and reactions to other users thoughts. This project made use of the MongoDB database as well as the library from Mongoose.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

Since this project dosen't have a website url, you will need to do the following

```md
1. Clone this github repository
2. Open the terminal and perform the command `npm i` to install all of the needed repositories
3. Type `npm run start` to seed the database and then open up either Insomnia or Postman to view all of the fields
```

## Screenshots of working application

![screenshot](./assets/images/Screenshot%231.png)

![screenshot](./assets/images/Screenshot%232.png)

![screenshot](./assets/images/Screenshot%20%233.png)

## Walkthrough video

Here is a video tutorial on how to use this application: https://drive.google.com/file/d/12kRjOErYIJ08Nbo-X_b28ggHfiI2w77I/view

