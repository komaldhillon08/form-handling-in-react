 import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: ""
  });
  // submit function
  function handleSubmit(event) {
    event.preventDefault();
    // console.log("Submited >>>>>>");
    console.log("user email >>>>>> " + enteredValue.email);
    console.log("user password >>>>>> " + enteredValue.password);

    setEnteredValue({
      email : "",
      password : "",
    })

  }

  function handleInputChange(identifier, value) {
    setEnteredValue(prevValues => ({
      ...prevValues,
      [identifier]: value
    }))
  }
  console.log(enteredValue);
  

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
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValue.email}
          />
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
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
 



// second way using the useRef 
/* import { useRef } from "react";
export default function Login() {

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log('User Email : ', enteredEmail ,"; ," ,  "User Password ; ",  enteredPassword);


     email.current.value = "";
    password.current.value = "";


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
} */
