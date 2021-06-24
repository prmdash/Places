import React from "react";

import "./UsersList.css";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card />
        <h2>No users found.</h2>
        <Card />
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((u) => (
        <UserItem
          key={u.id}
          id={u.id}
          name={u.name}
          image={u.image}
          placeCount={u.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
