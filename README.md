# Realtime Chat App

"Realtime Chat App" is a dynamic and feature-rich messaging platform that utilizes cutting-edge technologies to provide users with a real-time communication experience. The frontend is developed using Next.js and Typescript, while the backend relies on Prisma as an ORM to seamlessly interact with a MongoDB database hosted on MongoDB Atlas, a cloud-based database service. While not a full replica of applications like WhatsApp or Messenger, the "Realtime Chat App" aims to encapsulate key features of modern messaging apps.

## Key Features

- **Real-time Messaging**: Experience seamless real-time messaging capabilities through the integration of Pusher, allowing users to engage in instant conversations.

- **Message Notifications and Alerts**: Stay informed with message notifications and alerts, ensuring you never miss an important conversation.

- **Sleek UI with Tailwind Design**: Enjoy a sleek and user-friendly interface with Tailwind design, enhancing the visual appeal of the application.

- **Animations and Transitions**: Elevate the user experience with Tailwind animations and smooth transition effects, providing a modern and engaging interface.

- **Full Responsiveness**: Access the "Realtime Chat App" on any device, thanks to its full responsiveness design catering to various screen sizes.

- **Authentication with NextAuth**: Ensure secure access with credential authentication powered by NextAuth, supporting Google and GitHub authentication integration.

- **File and Image Uploads**: Facilitate efficient communication with file and image upload capabilities using Cloudinary CDN.

- **Client Form Validation**: Implement robust client form validation and handling using react-hook-form, enhancing the user input experience.

- **Server Error Handling**: Enhance user experience with server error handling using react-toast, ensuring users are informed about any issues.

- **Message Read Receipts**: Know when your messages have been read with message read receipts, enhancing communication clarity.

- **User Status**: Stay informed about the online/offline status of users, enabling effective communication timing.

- **Group Chats and One-on-One Messaging**: Engage in both group chats and private one-on-one messaging, catering to various communication needs.

- **Message Attachments and Sharing**: Share files and attachments within conversations, promoting efficient information exchange.

- **User Profile Customization**: Personalize your user profile and customize settings to match your preferences.

"Realtime Chat App" doesn't replicate the complete functionalities of apps like WhatsApp or Messenger but brings a subset of their features to users in an elegant and interactive environment.

## Tech Stack

- **Frontend**: Developed using Next.js and Typescript, the frontend offers an efficient and responsive user interface.

- **Backend**: Utilizes Prisma as an ORM to communicate with a MongoDB database hosted on MongoDB Atlas, ensuring efficient data handling.

## Key Concepts Covered

- Handling real-time messaging
- Authentication integration
- File uploads and CDN usage
- Responsive UI design
- Data fetching in server React components
- Server error handling
- User status tracking
- Group chats and private messaging
- User profile customization

Explore the next generation of messaging with "Realtime Chat App." Communicate, connect, and collaborate in real time.

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/codewithmawais/realtime-chat-app.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
NEXTAUTH_SECRET=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

## Contributing

We welcome contributions to enhance Realtime Chat Application. If you find issues or have ideas for improvements, feel free to create a pull request or submit an issue in the repository.

## License

This project is not licensed.

---
