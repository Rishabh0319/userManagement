import React from "react";

const UserList = ({ editUser, deleteUser, users }) => {
  return (
    <div>
      <h1>Users List</h1>
      {users.map((user) => (
        <div key={user.id} className="card">
          <span>Name: {user.username}</span>
          <span>email: {user.email}</span>
          <span>phone: {user.phone}</span>
          <button onClick={() => editUser(user)}>edit</button>
          <button onClick={() => deleteUser(user.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
