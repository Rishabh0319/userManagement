import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm.jsx";
import UserList from "./components/UserList";

const App = () => {
  // State for save the record of Users Data
  const [users, setUsers] = useState([]);

  // form data state management
  const [userData, setUserData] = useState({
    id: "",
    username: "",
    email: "",
    phone: "",
  });

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now().toString() }]);
  };

  const updateUser = (updatedUser) => {
    // update user by iterate over the users array and find by id
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );

    setUserData({
      id: "",
      username: "",
      email: "",
      phone: "",
    });
  };

  const editUser = (user) => {
    setUserData(user);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        userData={userData}
        setUserData={setUserData}
      />
      <UserList editUser={editUser} deleteUser={deleteUser} users={users} />
    </>
  );
};

export default App;
