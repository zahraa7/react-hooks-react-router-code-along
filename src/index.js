import React from "react";
import ReactDOM from "react-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to import */
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Routes,
} from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

/* add the navbar component */
function Navbar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/message"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Message
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>

      <NavLink
        to="/signup"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        SignUp
      </NavLink>
    </div>
  );
}

function Home() {
  return <h1>Home!</h1>;
}

function About() {
  return <h1>This is my about component!</h1>;
}

function Login() {
  return (
    <form>
      <h1>Login</h1>
      <div>
        <input type="text" name="username" placeholder="Username" />
        <label htmlFor="username">Username</label>
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
        <label htmlFor="password">Password</label>
      </div>
      <input type="submit" value="Login" />
    </form>
  );
}

function SignUp() {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" className="username"></input>
      <label htmlFor="email">Email</label>
      <input type="email" className="email"></input>
      <label htmlFor="" />
      <label>Password</label>
      <input type="password" className="password"></input>
    </form>
  );
}

function Message() {
  return (
    <div>
      <input type="textarea"></input>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  </Router>,
  document.getElementById("root"),
);