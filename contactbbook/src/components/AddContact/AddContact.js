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

        setTitle("");
        setDescription("");
        setImg("");

        props.handleClick(obj);
    };

    return (
        <>
            <input
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                type="text"
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
            <button className="add-table" onClick={handleSave}>
                Добавить
            </button>
        </>
    );
};

export default AddCont;
