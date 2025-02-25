import { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Ошибка:", err));
  }, []);

  return (
    <div className="container">
      <h1>🌍 LearnPeer</h1>
      <h2>📌 Топ пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} — XP: {user.xp} | PRP: {user.prp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;