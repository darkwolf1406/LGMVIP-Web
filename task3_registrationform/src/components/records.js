import "../assets/records.css";
import Avatar from "../assets/img_avatar.png";

const Records = (props) => {
    return (
        <div className="records">
                {props.users.map((user) => {
                    return (
                        <div key={user.name} className="userCard"> 
                            <span style={{fontWeight: 'bold'}}>Name</span>{user.name}<br/>
                            <span style={{fontWeight: 'bold'}}>Email</span>{user.email}<br/>
                            <span style={{fontWeight: 'bold'}}>Address</span>{user.address}<br/>
                            <span style={{fontWeight: 'bold'}}>Contact</span>{user.contact}<br/>
                            <span style={{fontWeight: 'bold'}}>Package</span>{user.package}<br/>
                            <img src={Avatar} alt="" width="100px" />
                        </div>
                    )
                })}
        </div>
    )
}

export default Records;