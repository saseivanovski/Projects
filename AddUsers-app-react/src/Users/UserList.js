import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <React.Fragment key={user.id}>
              <li>
                {user.name} is {user.age} years old.
              </li>
              <Button onClick={() => props.deleteHandler(user.id)}>
                Delete
              </Button>
            </React.Fragment>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
