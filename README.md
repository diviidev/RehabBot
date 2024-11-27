



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


![Screenshot (1953)](https://github.com/user-attachments/assets/a9c35232-36e5-4c7c-909a-05987b4c282a)
![Screenshot (1956)](https://github.com/user-attachments/assets/77aeea84-2665-48f5-b867-ca210c8e9c6e)
![Screenshot (1955)](https://github.com/user-attachments/assets/31e080ba-cb59-43df-91b1-7522e632925e)
![Screenshot (1954)](https://github.com/user-attachments/assets/efcc28a1-7f89-45d6-a067-68b91ae18f0c)
