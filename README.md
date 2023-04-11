## Installation

```bash
$ yarn install
```

## Running the app

```bash
$ yarn run start
```

## API

You can use the following endpoints to perform CRUD operations:

### Get a list of all users:

    [GET] http://localhost:3000/users

---
### Create a new user:

    [POST] http://localhost:3000/users

With the request body in JSON format, for example:

```json
{
    "name": "Perry Alexander",
    "email": "perry.alexander@example.com",
    "phone": "(765) 705-4859"
}
```
---

### Change user data:

    [PUT] http://localhost:3000/users/:id

With the request body in JSON format, for example:

```json
{
    "name": "Perry Alexander",
    "email": "perry.alexander@example.com",
    "phone": "(765) 705-4859"
}
```

---
### Search for users by name:

    [GET] http://localhost:3000/users/search?name=John

where name is the part of the name searched for.

---

### Filtering users by email:

    [GET] http://localhost:3000/users/filter?email=johndoe@example.com

where email is the email to filter.