import { useState } from "react";
import { act } from "@testing-library/react";

function UserForm({ onUserAdd }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    act(() => {
      onUserAdd({ name, email });

      setEmail("");
      setName("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => {
            act(() => {
              setName(e.target.value);
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="email">Enter Email</label>
        <input
          id="email"
          value={email}
          onChange={(e) => {
            act(() => {
              setEmail(e.target.value);
            });
          }}
        />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
