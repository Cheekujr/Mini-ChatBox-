const mongoose = require("mongoose");
const Chat = require("./Models/chat.js");



main()
    .then(()=>{
        console.log("Connection Successfull");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChats  = [
    {
    from: "Anushka",
    to: "Prateek",
    message: "Kuch nahi class mai soo rehi",
    created_at: new Date()
    },
    {
    from: "Manmath",
    to: "Veer",
    message: "Lucknow konse train se ja rehe?",
    created_at: new Date()
    },
    {
    from: "Veer",
    to: "Manmath",
    message: "Tajes se jaa reha hu.",
    created_at: new Date()
    },
    {
    from: "Prateek",
    to: "Tanish",
    message: "Milk lete ana tum.",
    created_at: new Date()
    },
    {
    from: "Tanish",
    to: "Prateek",
    message: "Theek hai lete aunga.",
    created_at: new Date()
    },
];

Chat.insertMany(allChats);


