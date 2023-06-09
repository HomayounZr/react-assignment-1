import { useEffect, useState } from "react"
import UserCard from "../../components/userCard";

import './index.css';
import LoadingIndicator from "../../components/loadingIndicator";

export default function HomePage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
    }

    const renderUsers = () => {
        return users.map((user) => {
            return (
                <UserCard
                    user={user}
                />
            )
        })
    }

    return (
        <div className="container">
            {
                users.length() === 0
                ? <LoadingIndicator />
                : renderUsers()
            }
        </div>
    )
}