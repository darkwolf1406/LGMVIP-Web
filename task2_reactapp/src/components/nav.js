import "../assets/nav.css";

const NavBar = (props) => {
    return (
        <>
            <div className="navbar">
                EXTRA RECORDS.CO
            </div>
            <div className="getBtn" onClick={async () => {
                    fetch("https://reqres.in/api/users?page=1")
                    .then(async (res) => {
                        const data = await res.json();
                        props.setUsers(data.data);
                    })
            }}>
                Get Users
            </div>
        </>
    )
}

export default NavBar;