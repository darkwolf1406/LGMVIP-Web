import { useState } from "react";
import "../assets/forms.css";

const RegistrationForm = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [packages, setPackages] = useState("");

    return (
        <div className="container">
            <form>
                <table>
                    <tr>
                        <td>Name: </td>
                        <td><input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td><input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td><input type="text" vaalue={address} onChange={(e) => { setAddress(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td>Contact: </td>
                        <td><input type="text" value={contact} onChange={(e) => { setContact(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td>Package: </td>
                        <td>
                            <select style={{ width: '100px' }} value={packages} onChange={(e) => { setPackages(e.target.value) }}>
                                <option>1 Month</option>
                                <option>3 Month</option>
                                <option>6 Month</option>
                                <option>12 Month</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <div className="getBtn" onClick={
                    () => {
                        const newRegistration = {
                            name: name,
                            email: email,
                            address: address,
                            contact: contact,
                            package: packages
                        }
                        // const temp = [];
                        // temp.push(newRegistration);
                        props.users.push(newRegistration)
                        props.setUsers([...props.users]);
                    }}
                >
                    Register
                </div>
            </form>
        </div>

    )
}

export default RegistrationForm;