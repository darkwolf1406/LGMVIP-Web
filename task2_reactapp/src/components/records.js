import "../assets/records.css";

const Records = (props) => {
    return (
        <div className="records">
            {props.users.map((user) => {
                return (
                    <div key={user.id}>
                        <p>Name: {user.first_name} {user.last_name}</p>
                        <img src={user.avatar} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default Records;