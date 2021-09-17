import "./App.css";
import Api from "./api";
import React, { useState, useEffect } from "react";
import Users from "./components/users";

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        Api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const filterUsers = (usersId) => {
        const newUsers = users.filter((user) => user._id !== usersId);
        setUsers(newUsers);
    };
    const changeBookmark = (Id) => {
        const newUsers = [...users];
        const user = newUsers.find((us) => us._id === Id);
        user.status = !user.status;
        setUsers(newUsers);
    };
    return (
        <div>
            <Users
                users={users}
                onDelete={filterUsers}
                onBookMark={changeBookmark}
            />
        </div>
    );
}

export default App;
