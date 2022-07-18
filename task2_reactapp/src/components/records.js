import "../assets/records.css";

const Records = (props) => {
    return (
        <div className="records">
                {props.users.map((user) => {
                    return (
                        <div key={user.id} className="userCard"> 
                            <p><span style={{fontWeight: 'bold'}}>Name:</span> {user.first_name} {user.last_name}</p>
                            <p><span style={{fontWeight: 'bold'}}>Email:</span> {user.email}</p>
                            <img src={user.avatar} alt="" />
                        </div>
                    )
                })}
        </div>
    )
}

export default Records;