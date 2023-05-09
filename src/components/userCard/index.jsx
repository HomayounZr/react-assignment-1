import './index.css';

export default function UserCard({ user }) {

    const getUserAvatar = () => {
        return `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`
    }

    const getAddress = () => {
        let address = user.address;
        return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`
    }

    return (
        <div className="user-card">
            <img
                src={getUserAvatar()}
                alt="no pic found"
                className="user-card__avatar"
            />
            <div>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Company: {user.company.name}</p>
                <p>Website: {user.website}</p>
                <p>Addres: {getAddress(user.address)}</p>
            </div>
        </div>
    );
}