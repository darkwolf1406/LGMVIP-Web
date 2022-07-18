import "../assets/todolist.css";
import { useState } from "react";

const ToDoList = (props) => {

    const [srNo, setSrNo] = useState(0);
    const [listItems, setListItems] = useState([]);
    const [currItem, setCurrItem] = useState("");

    return (
        <div className="container">
            <div className="listInput">
                <div>
                    My Todo List
                </div>
                <div>
                    <input type="text" value={currItem} onChange={(e) => { setCurrItem(e.target.value) }} /> <span onClick={() => {
                        const i = {
                            id: srNo + 1,
                            data: currItem
                        }
                        setSrNo(srNo + 1);
                        listItems.push(i);
                        setListItems([...listItems]);
                    }}>add</span>
                </div>
            </div>
            <div className="listItems">
                {listItems.map((list) => {
                    return (
                        <div key={list.id} id={list.id} className="item">
                            <div className="done" onClick={() => {
                                document.getElementById(list.id).style.opacity = 0.1;
                            }}>done</div>
                            <div>{list.data}</div>
                            <div className="remove" onClick={() => {
                                const index = listItems.indexOf(list);
                                listItems.splice(index, 1);
                                setListItems([...listItems]);
                            }}>remove</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ToDoList;