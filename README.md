COD-TECH-TASK 2
---

# Simple Blog Application

## Overview

This is a simple blog application built using a Full Stack approach. It allows users to create, read, update, and delete blog posts. The application follows a traditional blog structure, with features for managing blog content and displaying it in a user-friendly interface.

## Technologies Used

- **Frontend**: React (or your preferred frontend library/framework)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Styling**: CSS/SCSS, Bootstrap/Tailwind (if applicable)

## Features

- **CRUD Operations**: Create, read, update, and delete blog posts.
- **Responsive Design**: Accessible and usable on various devices.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following software installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: [Download and install MongoDB](https://www.mongodb.com/try/download/community) (or use a cloud service like MongoDB Atlas)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/simple-blog-app.git
   cd simple-blog-app
   ```

2. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `backend` directory with the following content:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/simple-blog
   JWT_SECRET=your_jwt_secret
   ```

   Update the `frontend/.env` if needed for API URLs or other environment-specific settings.

5. **Start the development servers:**

   - **Backend**: Navigate to the `backend` directory and start the server:

     ```bash
     npm start
     ```

   - **Frontend**: Navigate to the `frontend` directory and start the development server:

     ```bash
     npm start
     ```

   The frontend application will typically be accessible at `http://localhost:3000` and the backend at `http://localhost:5000` (or your configured ports).

## Usage

1. **Create a User Account:**

   - Navigate to the registration page and create a new user account.
   - Log in to access blog management features.

2. **Manage Blog Posts:**

   - **Create Post**: Use the "Create Post" button to add new blog posts.
   - **View Posts**: Browse through existing blog posts.
   - **Edit Post**: Click the "Edit" button on a post to modify it.
   - **Delete Post**: Click the "Delete" button to remove a post.

3. **Search and Filter:**

   - Use the search bar to find posts by keywords.
   - Filter posts by categories or tags.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/YourFeature`)
3. **Commit your changes** (`git commit -am 'Add some feature'`)
4. **Push to the branch** (`git push origin feature/YourFeature`)
5. **Create a new Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **[React](https://reactjs.org/)**: For building the user interface.
- **[Node.js](https://nodejs.org/)**: For the backend server.
- **[MongoDB](https://www.mongodb.com/)**: For the database.

---
Here is the output
![WhatsApp Image 2024-08-31 at 3 45 25 PM](https://github.com/user-attachments/assets/99113061-fb4d-4d46-824f-6b83b804c206)
