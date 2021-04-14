import React, { useState } from "react";
import "./ContactList.css";
const Contact = (props) => {
    console.log(props.contact);
    const [condition, setCondition] = useState(false);
    const [idButton, setIdButton] = useState("");
    function handleCondition(e, id) {
        setIdButton(id);
        setCondition(e.target.isConnected);
    }
    function closeInfo() {
        setCondition(false);
    }
    let arr = props.render();

    return (
        <div className="contact-list">
            {arr.map((item, index) => {
                return (
                    <div className="btn-info">
                        <button
                            key={index}
                            className="btn-title"
                            onClick={(e) => handleCondition(e, item.id)}
                            id={item.id}
                            style={{ marginLeft: 50 }}
                        >
                            {item.title}
                        </button>
                        {condition && item.id == idButton ? (
                            <div
                                key={index + "-lastname"}
                                className="btn__title"
                                id={item.id}
                            >
                                <img src={item.img} />
                                <br></br>
                                {item.title}
                                <br></br>
                                <div className="description">
                                    {item.description}
                                </div>
                                <br></br>
                                <button
                                    onClick={() => props.delete(item.id)}
                                    className="delete"
                                >
                                    <i>Удалить</i>
                                </button>
                                <button
                                    onClick={() => props.handleEdit(index)}
                                    className="edit"
                                >
                                    <i>Изменить</i>
                                </button>
                                <button onClick={closeInfo} className="close">
                                    <i>Закрыть</i>
                                </button>
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};
export default Contact;
