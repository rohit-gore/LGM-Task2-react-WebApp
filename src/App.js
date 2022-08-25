import {useState } from "react";
import "./App.css";

function App() {
  const [inp, setInp] = useState(true);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);

  const getInp = () => {
    setInp(false);
    fetchData();
  }

  const fetchData = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setUsers(data.data);
          setLoading(false);
        }, 500);
      });
  };

  return (
    <div className="main">
      {inp ? (
        <header className="head">
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">LGM Task-2</a>
            <form class="d-flex" action="/" method="get">
              <button class="btn btn-outline-success" className="button" onClick={getInp} type="submit">Get Users</button>
            </form>
          </div>
        </nav>
        </header>
      ) : (
        <>
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div className="container">
              {users.map((item, key) => {
                return <div className="card_item" key={key}>
                  <div className="card_inner">
                    <img src={item.avatar} alt="Avatar" />
                      <div className="username">Name : {item.first_name} {item.last_name}</div>
                      <div className="email">Email : {item.email}</div>
                    </div>
                  </div>
                })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
