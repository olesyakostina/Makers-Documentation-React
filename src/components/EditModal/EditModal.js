import React, { useState } from "react";
import "./EditModal.css";

const EditModal = (props) => {
    let { title, description, img, id } = props.editTodo;

    const [editTitle, setEditTitle] = useState(title);
    const [editDescription, setEditDescription] = useState(description);
    const [editImg, setEditImg] = useState(img);

    const save = () => {
        let newObj = {
            title: editTitle,
            description: editDescription,
            img: editImg,
            id,
        };
        props.handleSaveModal(newObj);
    };
    return (
        <div>
            <div className="main-modal">
                <div className="inner-modal">
                    <div className="close"></div>

                    <input
                        type="text"
                        placeholder="название"
                        className="inp-edit"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="описание"
                        className="inp-edit"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="изображение"
                        className="inp-edit"
                        value={editImg}
                        onChange={(e) => setEditImg(e.target.value)}
                    />
                    <button onClick={() => save()} className="btn">
                        Сохранить
                    </button>
                    <button onClick={props.handleCloseModal} className="btn">
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
