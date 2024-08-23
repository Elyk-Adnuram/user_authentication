# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Server

Express.js, which is our Node.js web application framework.
bcrypt, which helps us hash the user's password.
cookie-parser is the the cookie-parser middleware that handles cookie-based sessions. It extracts information from cookies that may be required for authentication or other purposes.
nodemon is a tool used to automatically restart a Node.js application whenever changes are made to the code.
CORS is a middleware used to enable Cross-Origin Resource Sharing (CORS) for an Express.js application.
jsonwebtoken helps us create and verify JSON Web Tokens.
dotenv allows you to store configuration data in a .env file, which is typically not committed to version control, to separate sensitive information from your codebase. This file contains key-value pairs that represent the environment variables.
