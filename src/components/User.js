import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>count: {count}</h1>
      <h1>{name}</h1>
      <h2>Location: Ayodhya</h2>
      <h3>Contact: 9125184883</h3>
    </div>
  );
};

export default User;
