# Book Management APIs documentation

### Setup .env file

```js
PORT=...
MONGO_DB_URI=...
JWT_SECRET=...
```

### Start the app

```shell
npm run start
```

### Book Management APIs:

####   Get a Particular Book
-   Method: GET
-   Endpoint: /api/book/{bookId}
-   Description: Retrieve details of a specific book by its ID.

####  Delete a Book
-   Method: DELETE
-   Endpoint: /api/book/{bookId}
-   Description: Delete a book from the system by its ID.
####   Update a Book
-  Method: PUT
-  Endpoint: /api/book/{bookId}
-  Description: Update information about a book.
####  Get All Books
-  Method: GET
-  Endpoint: /api/book/books
-  Description: Retrieve a list of all books in the database.
####  Create a New Book
-  Method: POST
-  Endpoint: /api/book/create
-  Description: Add a new book to the database.

eg Curl X-:
```
{
  "title":"title",
  "author":"author",
  "publish_year":  "2023-12-20"
}
```

### Auth APIs
#### Sign Up a User
-  Method: POST
-  Endpoint: /api/auth/signup
-  Description: Register a new user in the system.

eg Curl X-:
```
{
  "fullName":"",
  "username":"",
  "password":"",
  "confirmPassword":"",
  "gender":""
}
```
#### Log In a User
-  Method: POST
-  Endpoint: /api/auth/login
-  Description: Authenticate and log in a user.
eg Curl X-:
```
{
  "username":"",
  "password":""
}
```
#### Log Out a User
-  Method: POST
-  Endpoint: /api/auth/logout
-  Description: Log out a currently authenticated user.

# Example: Get a particular book
curl -X GET http://localhost:5000/api/book/6628c65d015502a224165de2

