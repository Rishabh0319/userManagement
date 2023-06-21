import React from "react";
import "./App.css";
import UserForm from "./components/UserForm.jsx";
import { useState } from "react";

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

  return (
    <>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        userData={userData}
        setUserData={setUserData}
      />
    </>
  );
};

export default App;
