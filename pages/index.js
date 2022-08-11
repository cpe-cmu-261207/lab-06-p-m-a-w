import { useRef, useState } from "react";
import UserCard from "./card";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
  const inputValue = useRef();
  const genUsers = async () => {
    if (inputValue.current.value <= 0) {
      alert('Invalid number of user');
      return;
    }
    const resp = await axios.get(`https://randomuser.me/api/?results=${inputValue.current.value}`);
    const users = resp.data.results.map(result => {
      return {
        image: result.picture.large,
        name: `${result.name.first} ${result.name.last}`,
        email: result.email,
        address: `${result.location.city} ${result.location.state} ${result.location.country} ${result.location.postcode}`
      }
    })
    setUsers(users.map((user, index) => {
      return <UserCard key={index} image={user.image} name={user.name} email={user.email} address={user.address} />
    }))
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          ref={inputValue}
          defaultValue={1}
        />
        <button className="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>
      {users}
      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Perapol Pamoonchaer 640610655
      </p>
    </div>
  );
}
