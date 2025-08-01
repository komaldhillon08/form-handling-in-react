/* import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: ""
  });

  // blur input  
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  // validation 
  const emailIsInvalid = didEdit.email && !enteredValue.email.includes("@")
  // const passworgIsInvalid = !enteredValue.email.includes("@")


  // submit function
  function handleSubmit(event) {
    event.preventDefault();
    // console.log("Submited >>>>>>");
    console.log("user email >>>>>> " + enteredValue.email);
    console.log("user password >>>>>> " + enteredValue.password);

    setEnteredValue({
      email: "",
      password: "",
    })

  }

  function handleInputChange(identifier, value) {
    setEnteredValue(prevValues => ({
      ...prevValues,
      [identifier]: value
    }))

    setDidEdit(prevBlur => ({
      ...prevBlur, [identifier]: false,
    }))
  }
  console.log(enteredValue);

  // blur input function 
  function handleInputBlur(identifier) {
    setDidEdit(prevBlur => ({
      ...prevBlur, [identifier]: true
    }))

  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValue.email}

          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email </p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange("password", event.target.value)}
            value={enteredValue.password}

          />
         

        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
} */




// second way using the useRef 
import { useRef, useState } from "react";
export default function Login() {
  const [emailIsInvalid , setEmailIsInvalid] = useState();

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log('User Email : ', enteredEmail, "; ,", "User Password ; ", enteredPassword);

    const emailIsValid = enteredEmail.includes("@")
    if (!emailIsValid) {
      setEmailIsInvalid(true)
      return ;
    }
    console.log("snding the http request ");
    



    /*      email.current.value = "";
        password.current.value = ""; */


  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}

          />
          <div className="control-error">{emailIsInvalid &&  <p>email is not valid </p> }</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}


          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
} 
