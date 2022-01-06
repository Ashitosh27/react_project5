import axios from "axios";
import { useState } from "react";
export default function App() {
  return (
    <div>
      <One />
    </div>
  );
}

function One() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [list, setlist] = useState([]);

  const changeusername = (e) => {
    setusername(e.target.value);
  };

  const changepassword = (e) => {
    setpassword(e.target.value);
  };

  const changeemail = (e) => {
    setemail(e.target.value);
  };

  /*const register = () => {
    const user = {
      username: username,
      password: password,
      email: email,
    };

    const newlist = [user, ...list];
    setlist(newlist);

    setusername("");
    setpassword("");
    setemail("");
  };*/

  const addUser = async () => {
    const url = "http://localhost:4000/add-user";
    const user = {
      username: username,
      password: password,
      email: email,
    };
    await axios.post(url, user);
    const newlist = [user, ...list];
    setlist(newlist);
  };

  const showUser =async () => {
    const url = "http://localhost:4000/users";

    const result = await axios.get(url);
    const list=result.data;
    const newlist=[...list];
    setlist(newlist);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={changeusername}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={changepassword}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={changeemail}
        />
      </div>
      <div>
        <input type="button" value="Add User Here" onClick={addUser} />
      </div>
      <div>
        <input type="button" value="show Here" onClick={showUser} />
      </div>
      <div>
        {list.map((item) => (
          <div>
            {item.username},{item.password},{item.email}
          </div>
        ))}
      </div>
    </div>
  );
}
