
# BookWorm

BookWorm is a Node.js backend application that provides a RESTful API for managing books. Users can perform CRUD operations on book records, such as creating, reading, updating, and deleting books. This API uses MongoDB as the database to store book data.

## Features

1. **Create a New Book**
   - **Endpoint:** `POST /api/books`
   - **Description:** Create a new book by providing its title, author, and a summary.

2. **Get a List of All Books**
   - **Endpoint:** `GET /api/books`
   - **Description:** Retrieve a list of all available books.

3. **Get Details of a Specific Book**
   - **Endpoint:** `GET /api/books/:bookId`
   - **Description:** Retrieve the details of a specific book by providing its unique ID.

4. **Update Book Details**
   - **Endpoint:** `PUT /api/books/:bookId`
   - **Description:** Update the details of a specific book by providing its ID and the updated information.

5. **Delete a Book**
   - **Endpoint:** `DELETE /api/books/:bookId`
   - **Description:** Delete a specific book by providing its ID.

## Prerequisites

Before you run the application locally or deploy it, make sure you have the following prerequisites:

- Node.js and npm installed
- MongoDB instance set up either locally or using a cloud-based solution like MongoDB Atlas
- Environment variables configured (e.g., DB_URL for MongoDB connection)

## Setting Up and Running the Application Locally

Follow these steps to set up and run the application locally on your machine:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yogitabhargava02/BookWorm.git
   ```

2. Navigate to the project directory:

   ```bash
   cd BookWorm
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Created a `.env` file in the root directory of the project and set your environment variables.

   ```env
 
   ```

   Replace `DB_URL` with your MongoDB connection string.

5. Start the application:

   ```bash
   npm start
   ```

6. The API will be accessible at `http://localhost:3000`.

## Error Handling

This application handles errors gracefully by returning appropriate HTTP status codes and error messages in the responses. Here are some common error scenarios:

- **Book Not Found (GET, PUT, DELETE):** If a requested book does not exist, the API will return a `404 Not Found` response with a corresponding error message.

- **Invalid Request (POST, PUT):** If the request data is incomplete or invalid, the API will return a `400 Bad Request` response with a corresponding error message.

- **Database Connection Error:** If there is an issue connecting to the MongoDB database, the API will return a `500 Internal Server Error` response with an appropriate error message.

- **Server Error:** For any other unexpected errors, the API will return a `500 Internal Server Error` response with a generic error message.


## Assumptions and Decisions

- This application assumes that MongoDB is used as the database for storing book data.
- The API follows RESTful principles for CRUD operations.
- I have used atlas created env file.
- Environment variables are used for configuring database and server settings.
