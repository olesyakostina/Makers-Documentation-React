import React, { useState } from "react";
import "./AddContact.css";
const AddCont = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const handleSave = () => {
        const obj = {
            title,
            description,
            img,
            id: Date.now(),
        };

        props.handleClick(obj);
        setTitle("");
        setDescription("");
        setImg("");
    };

    return (
        <>
            <div className="header">
                <div className="header-title">
                    <h1 className="makers-title">Makers Documentation</h1>
                    <div className="header-inp">
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            name="title"
                            type="text"
                            id="input1"
                            value={title}
                            placeholder="название"
                            className="add-table"
                        />
                        <br></br>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            name="description"
                            type="text"
                            value={description}
                            placeholder="описание"
                            className="add-table"
                        />
                        <br></br>
                        <input
                            onChange={(e) => setImg(e.target.value)}
                            name="img"
                            type="text"
                            value={img}
                            placeholder="изображение"
                            className="add-table"
                        />
                        <button
                            className="add__table_btn "
                            onClick={handleSave}
                        >
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AddCont;
