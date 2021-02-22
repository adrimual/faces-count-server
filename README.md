# Faces-Count


## Description
A simple project made with React, NodeJS, Express and PostgreSQL to consolidate my bases and knowledge about React, NodeJs and SQL.
Create an account and start analizing faces. Each user has a counter to see who is the person with most entries.

## User Stories

- **Signup:** As an anon I can create an account to enter the platform.
- **Login:** As a user I can login to the platform so that I can start analazing faces.
- **Logout:** As a user I can end my current session from the platform.
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


## Deployment 

**Link** : https://faces-count.herokuapp.com/
