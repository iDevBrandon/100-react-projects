import {
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Modal,
} from "@material-ui/core";
import "./Todo.css";
import React, { useState } from "react";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo({ todo }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updateTodo = () => {
    //update the todo with the new input text

    db.collection("todos").doc(todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>I am a modal</h1>
          <input
            placeholder={todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update me</Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemText
            primary={todo.todo}
            secondary="Dummy deadline"
          ></ListItemText>
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <DeleteForeverIcon
          onClick={(event) => db.collection("todos").doc(todo.id).delete()}
        />
      </List>
    </>
  );
}

export default Todo;
