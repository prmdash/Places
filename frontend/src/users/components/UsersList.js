import React from "react";

import "./UsersList.css";

import UserItem from "./UserItem";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
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
