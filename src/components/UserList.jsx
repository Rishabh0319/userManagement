import React from "react";
import "./userlist.css";

const UserList = ({ editUser, deleteUser, users }) => {
  return (
    <>
      <h1 className="userlist-heading">Users List</h1>
      <div className="userlist-cont">
        {users.map((user) => (
          <div key={user.id} className="card">
            <div className="info">
              <span>
                <big>Name:</big> {user.username}
              </span>
              <span>
                <big>email:</big> {user.email}
              </span>
              <span>
                <big>phone:</big> {user.phone}
              </span>
            </div>
            <div className="btns-port">
              <button className="edit-btn" onClick={() => editUser(user)}>
                Edit <ion-icon name="create-outline"></ion-icon>
              </button>
              <button className="del-btn" onClick={() => deleteUser(user.id)}>
                Delete <ion-icon name="trash-outline"></ion-icon>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
