import React, { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import ErrorModal from "../components/ErrorModal";
import classes from "./AddUser.module.css";
import UserList from "./UserList";

const AddUser = (props) => {
  const [user, setUser] = useState([]);

  const [addUser, setAddUser] = useState("");
  const [addAge, setAddAge] = useState("");

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (addUser.length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid name",
      });
      return setAddUser("");
    }
    if (+addAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid age",
      });
      return setAddAge("");
    }
    let number = user.length + 1;
    setUser([...user, { name: addUser, age: addAge, id: number }]);
    setAddUser("");
    setAddAge("");
  };

  const usernameChangeHandler = (event) => {
    setAddUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAddAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const deleteHandler = (id) => {
    let filter = user.filter((user) => user.id !== id);
    setUser(filter);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={addUser}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={addAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      <UserList users={user} deleteHandler={deleteHandler} />
    </>
  );
};

export default AddUser;
