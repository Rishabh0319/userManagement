import React from "react";
import { useState } from "react";
import "./userform.css";

const UserForm = ({ addUser, updateUser, userData, setUserData }) => {
  //error message State
  const [errorMsg, setErrorMsg] = useState("");

  // Handling form data input
  const inputHandler = (event) => {
    const { name, value } = event.target;

    setUserData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  // function for check email is valid or not
  function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // function for check phone number is valid or not
  function isValidPhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
  }

  // Add User Event
  const submitForm = (e) => {
    // to avoid default form submit behaviour
    e.preventDefault();

    // check conditions for meet all requirements which was mention in Assignment sheet
    if (!userData.username || !userData.email || !userData.phone) {
      setErrorMsg("Please fill in all fields");
      return;
    }
    if (!isValidEmail(userData.email)) {
      setErrorMsg("Please Enter Valid Email Id");
      return;
    }
    if (!isValidPhone(userData.phone)) {
      setErrorMsg("Please Enter Valid Phone number");
      return;
    }

    setErrorMsg("");

    // store Data in users Array
    if (userData.id) {
      console.log("user is Updated");
      updateUser(userData);
    } else {
      console.log("user is Added");
      addUser(userData);
    }

    // reset all input fields state after add user info
    setUserData({
      id: "",
      username: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="form-cont">
      <h1>user management</h1>
      <form className="form" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="name"
          required
          name="username"
          onChange={inputHandler}
          value={userData.username}
        />
        <input
          type="email"
          placeholder="email"
          required
          name="email"
          onChange={inputHandler}
          value={userData.email}
        />
        <input
          type="tel"
          placeholder="phone"
          required
          name="phone"
          onChange={inputHandler}
          value={userData.phone}
        />
        <button className="add-update-btn" type="submit">
          {userData.id ? (
            <>
              Update <ion-icon name="create-outline"></ion-icon>
            </>
          ) : (
            <>
              Add <ion-icon name="add-circle-outline"></ion-icon>{" "}
            </>
          )}
        </button>
        {errorMsg && alert(errorMsg)}
      </form>
    </div>
  );
};

export default UserForm;
