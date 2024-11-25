



# RehabBot

A React-based chatbot interface designed to facilitate conversations related to addiction. This application communicates with a backend server to generate responses and maintains a chat history.

## Features

- **Dynamic Chat Interface**: User-friendly chat interface with role-based message styling (User/Bot).
- **State Management**: Utilizes React's `useState` for managing form inputs, chat history, loading states, and errors.
- **Backend Integration**: Sends user messages to a backend server for bot responses.
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS for styling.
- **Error Handling**: Displays user-friendly error messages for server issues.

---

## Tech Stack

- **Frontend**: React.js, Axios
- **Styling**: Tailwind CSS

---

## Prerequisites

1. Node.js installed on your system.
2. A backend server running at `http://127.0.0.1:8000/addiction/chat`.

---

## Getting Started

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

---

## Usage

1. Enter a username in the input field.
2. Type a message and click **Send Message**.
3. The chatbot will respond, and the conversation history will appear in the chat window.

---

## Backend Integration

The application expects a backend server endpoint at `http://127.0.0.1:8000/addiction/chat`. 

### Expected Payload

#### Request:
```json
{
  "username": "string",
  "user_message": "string"
}
```

#### Response:
```json
{
  "response": "string"
}
```

---

## Error Handling

- If the backend server is unavailable or returns an error, the application will display a message: *"Error fetching response from the server."*

---

## Styling

The application uses **Tailwind CSS** for a modern, responsive design:
- **Gradient Background**: From `gray-800` to `black`.
- **Chat Bubble Styling**:
  - User: Blue background, white text.
  - Bot: Purple background, light-gray text.

---

## Future Improvements

- Add user authentication for personalized conversations.
- Implement advanced error recovery for backend failures.
- Enhance styling for a more interactive user experience.

---

## Screenshots

> Include screenshots of the UI showcasing chat interactions.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

![Screenshot (1953)](https://github.com/user-![Screenshot (1954)](https://github.com/user-attachments/assets/34a5deef-d898-4156-ba21-00ee09df514e)
attachments/assets/d7b3930e-51a4-4d9e-9706-f75e94a8f2b1)
![Screenshot (1955)](https://github.com/user-attachments/assets/c75cf855-adaf-47da-bbb6-8b6a5ec16623)
![Screenshot (1956)](https://github.com/user-attachments/assets/c88c8694-773a-49a6-b3c2-03c8d948fd52)
