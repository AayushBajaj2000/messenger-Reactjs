import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import "./App.css";
import db from "./firebase.js";
import Message from "./Message";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");

  //For getting the database at the start of the app
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );

        //Go to the bottom of the message interface
        var div = document.getElementById("UserInterface");
        div.scrollTop = div.scrollHeight - div.clientHeight;
      });
  }, []);

  //For getting the name of the user at the start
  useEffect(() => {
    const name = prompt("Enter your name please");

    if (name === "") {
      setUser("unknown user");
    } else {
      setUser(name);
    }
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessages([...messages, { user: user, message: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1 className="center">Messaging App</h1>
      {/* messages */}

      <div id="UserInterface" className="App__messages">
        <FlipMove>
          {messages.map(({ id, message }) => {
            return <Message key={id} user={user} message={message}></Message>;
          })}
        </FlipMove>
      </div>

      {/* form */}
      <div className="centerDiv">
        <form className="Input" onSubmit={sendMessage}>
          <TextField
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="Input__text"
            id="standard-basic"
            label="Enter your message here.."
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!input}
            className="Input__button"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
