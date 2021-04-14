import React from "react";
import "./ContactList.css";

const Contact = (props) => {
    console.log("contactlist", props);
    return (
        <ul className="contact-list">
            {props.contact.map((item, index) => (
                <li
                    key={index + "-lastname"}
                    className="list-item"
                    style={{ border: "1px solid black" }}
                >
                    <img src={item.img} />
                    <br></br>
                    {item.title}
                    <br></br>
                    {item.description}
                    <br></br>
                    <button
                        onClick={() => props.delete(item.id)}
                        className="delete"
                    >
                        DELETE
                    </button>
                    <button
                        onClick={() => props.handleEdit(index)}
                        className="edit"
                    >
                        EDIT
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Contact;
