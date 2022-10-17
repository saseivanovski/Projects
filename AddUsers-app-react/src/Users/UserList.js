import React from "react";
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
            </React.Fragment>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
