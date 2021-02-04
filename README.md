# Smart Brain


## Description
A simple project made with React, NodeJS and Express to consolidate my bases and knowledge about React and NodeJs.
Create an account and start analizing faces. Each user has a counter to see who is the person with most entries.

## User Stories

- **Signup:** As an anon I can sign up in the platform so that I can start searching for events
- **Login:** As a user I can login to the platform so that I can search, create and join new events
- **Logout:** As a user I can logout from the platform so no one else can use it
- **Search Face:** As a user I can put an image URL and get face detection from the image
- **User Ranking:** As a user I can increase my ranking for every face detected.


## Endpoints


| Method | Path                                | Body                                                         | Description                          |
| ------ | ----------------------------------- | ------------------------------------------------------------ | ------------------------------------ |
| get    | /                                   |                                                              | Home page                            |
| post   | /signin                             |  {email, password}                                           | Signin                               |
| post   | /register                           |  {email, name, password}                                     | Create new user                      |
| get    | /profile/:id                        |  via req.params -> {id}                                      | Get the user ID                      |
| put    | /image                              |  {id}                                                        | Increases the entries counter        |
