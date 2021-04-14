import React, { useState } from "react";
import AddCont from "./components/AddContact/AddContact";
import Contact from "./components/Contact/ContactList";
import EditModal from "./components/EditModal/EditModal";

function App() {
    let [contact, setContact] = useState([]);
    let [modal, setModal] = useState(false);
    let [editTodo, setEditTodo] = useState({});

    function handleClick(obj) {
        let newContact = [...contact];
        newContact.push(obj);
        setContact(newContact);
    }

    //-------delete
    function handelDelete(id) {
        let newContact = contact.filter((item) => item.id !== id);
        setContact(newContact);
    }

    function handleEdit(index) {
        setModal(true);
        setEditTodo(contact[index]);
        console.log(contact[index]);
    }
    function handleCloseModal() {
        setModal(false);
    }
    function handleSaveModal(newC) {
        console.log(newC);
        let newContact = contact.map((item) => {
            if (item.id === newC.id) {
                return newC;
            }
            return item;
        });
        setContact(newContact);
    }

    return (
        <div className="App">
            <AddCont handleClick={handleClick} />
            <Contact
                handleEdit={handleEdit}
                delete={handelDelete}
                contact={contact}
            />
            {modal ? (
                <EditModal
                    editTodo={editTodo}
                    handleCloseModal={handleCloseModal}
                    handleSaveModal={handleSaveModal}
                />
            ) : null}
        </div>
    );
}
export default App;
