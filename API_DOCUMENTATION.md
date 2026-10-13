# API Documentation

## Base URL

```
http://localhost:5000
```

---

# Authentication APIs

## 1. User Signup

### Endpoint

```
POST /api/auth/signup
```

### Description

Creates a new user account.

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### Success Response

```json
{
  "message": "Signup successful!"
}
```

### Error Responses

```json
{
  "message": "All fields are required."
}
```

```json
{
  "message": "Invalid email address."
}
```

```json
{
  "message": "Password must be at least 6 characters."
}
```

```json
{
  "message": "User already exists."
}
```

---

# 2. User Login

### Endpoint

```
POST /api/auth/login
```

### Description

Authenticates a registered user and returns a JWT token.

### Request Body

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

### Success Response

```json
{
  "message": "Login successful!",
  "token": "JWT_TOKEN",
  "user": {
    "id": "USER_ID",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Error Responses

```json
{
  "message": "Email and password are required."
}
```

```json
{
  "message": "Invalid email or password."
}
```

---

# 3. Forgot Password

### Endpoint

```
POST /api/auth/forgot-password
```

### Description

Generates a password reset token for the registered user.

### Request Body

```json
{
  "email": "john@example.com"
}
```

### Success Response

```json
{
  "message": "Reset token generated successfully.",
  "resetToken": "generated_token"
}
```

### Error Response

```json
{
  "message": "User not found."
}
```

---

# 4. Reset Password

### Endpoint

```
POST /api/auth/reset-password
```

### Description

Resets the user's password using a valid reset token.

### Request Body

```json
{
  "token": "generated_token",
  "password": "newpassword123"
}
```

### Success Response

```json
{
  "message": "Password reset successful!"
}
```

### Error Response

```json
{
  "message": "Invalid or expired reset token."
}
```

---

# 5. AI Code Review

### Endpoint

```
POST /review
```

### Description

Analyzes source code using Google's Gemini AI, performs static analysis, calculates code complexity, and returns improvement suggestions.

### Request Body

```json
{
  "code": "function add(a,b){ return a+b; }"
}
```

### Success Response

```json
{
  "review": "AI-generated review...",
  "issues": [
    "Use const instead of var",
    "Improve variable naming"
  ],
  "complexity": {
    "lines": 5,
    "functions": 1,
    "classes": 0,
    "characters": 45,
    "score": "Low"
  }
}
```

### Error Response

```json
{
  "error": "Something went wrong."
}
```

---

# HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Request Successful |
| 201 | User Created Successfully |
| 400 | Bad Request |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

# Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- Google Gemini AI API
- JWT Authentication
- bcrypt.js

---

# API Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Authenticate user |
| POST | `/api/auth/forgot-password` | Generate password reset token |
| POST | `/api/auth/reset-password` | Reset user password |
| POST | `/review` | AI-powered code review |