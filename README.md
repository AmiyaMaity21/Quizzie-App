
# Quizzie

Quizzie is a quiz builder app, where a user can create quiz and then share that quiz with their friends and they can take the quiz without being logged in.


## Features

- play quiz

- At the end of Q&A quiz user can see his score

- Login and register

- Create quiz(There are two types of quiz, poll type quiz and Q&A type quiz)

- Add timer to any particular question in the quiz

- Share quiz

- User can view trending quizzes on his dashboard

- analytics for the different quizzes

- Edit quiz

- Delete quiz


## Prerequisite

&nbsp;&nbsp;1. React.js

&nbsp;&nbsp;2. Redux Toolkit

&nbsp;&nbsp;3. Node.js

&nbsp;&nbsp;4. Express.js

&nbsp;&nbsp;5. MongoDB


## Install Dependencies

For Backend - `cd backend` `npm i`

For Frontend - `cd frontend` `npm i`


## Environment Variables

Make Sure to Create a .env file in backend and frontend directory and add appropriate variables in order to use the app.

For Backend - PORT = MONGODB_URI = JWT_SECRET = JWT_EXPIRES_IN = ALLOW_ORIGIN =

For Frontend - REACT_APP_BACKEND_URL = REACT_APP_FRONTEND_URL = fill each filed with your info respectively.


## Client-side usage(PORT: 3000)

$ cd frontend&nbsp;&nbsp;// go to frontend folder

$ npm i&nbsp;&nbsp;// npm install packages

$ npm start&nbsp;&nbsp;// run it locally


## Server-side usage(PORT: 8000)

$ cd backend&nbsp;&nbsp;// go to backend folder

$ npm start&nbsp;&nbsp;//  run it locally