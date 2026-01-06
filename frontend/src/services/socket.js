import { io } from "socket.io-client";

const URL=window.location.hostname.includes("localhost")
    ? "http://localhost:3001"
    : "https://final-poker-casino.onrender.com";


const socket = io(URL);
export default socket;