import React, { useEffect, useState } from "react";
import AddCont from "./components/AddContact/AddContact";
import Contact from "./components/Contact/ContactList";
import EditModal from "./components/EditModal/EditModal";
import mojs from "@mojs/core";
import Footer from "./components/Footer/Footer";
import "./App.css";
function App() {
    let [contact, setContact] = useState();
    let [modal, setModal] = useState(false);
    let [editTodo, setEditTodo] = useState({});
    useEffect(() => {
        if (!localStorage.getItem("tasks-data")) {
            localStorage.setItem("tasks-data", "[]");
        }
        setContact(JSON.parse(localStorage.getItem("tasks-data")));
    }, []);
    function handleClick(obj) {
        let newContact = [...contact];
        newContact.push(obj);
        setContact(newContact);
        setItemToStorage(obj);
    }
    function setItemToStorage(task) {
        if (!localStorage.getItem("tasks-data")) {
            localStorage.setItem("tasks-data", "[]");
        }
        let data = JSON.parse(localStorage.getItem("tasks-data"));
        data.push(task);
        localStorage.setItem("tasks-data", JSON.stringify(data));
    }
    //-------delete
    function handelDelete(id) {
        let data = JSON.parse(localStorage.getItem("tasks-data"));
        let newContact = contact.filter((item) => item.id !== id);
        setContact(newContact);
        localStorage.setItem("tasks-data", JSON.stringify(newContact));
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
        let data = JSON.parse(localStorage.getItem("tasks-data"));
        let i = contact.findIndex((item) => item.id === newC.id);
        data.splice(i, 1, newC);
        setContact(data);
        localStorage.setItem("tasks-data", JSON.stringify(data));
    }
    function render() {
        if (!localStorage.getItem("tasks-data")) {
            localStorage.setItem("tasks-data", "[]");
        }
        let newData = JSON.parse(localStorage.getItem("tasks-data"));
        return newData;
    }
    const circle = new mojs.Shape({
        left: 0,
        top: 0,
        strokeWidth: 8,
        fill: "none",
        radius: 60,
        scale: { 0: 1 },
        opacity: { 10: 0 },
        shape: "circle",
        stroke: "lightblue",
        strokeWidth: 8,
        fill: "none",
        duration: 500,
    });
    const burst = new mojs.Burst({
        count: 10,
        left: 0,
        top: 0,
        children: {
            shape: ["circle", "rect", "curve"],
            fill: ["yellow", "red", "darkblue"],
            degreeShift: "rand(-360,360)",
            delay: "stagger(0,30)",
        },
        duration: 400,
    });
    function eventClick(e) {
        const postion = {
            x: e.pageX,
            y: e.pageY,
        };
        console.log(postion.x);
        console.log("click");
        circle.tune(postion);
        circle.replay();
        burst.tune(postion);
        burst.replay();
    }
    return (
        <div className="App" onClick={eventClick}>
            <div id="stars1"></div>
            <div id="stars2"></div>
            <div id="stars3"> </div>
            <AddCont handleClick={handleClick} />
            <Contact
                handleEdit={handleEdit}
                delete={handelDelete}
                contact={contact}
                render={render}
            />
            {modal ? (
                <EditModal
                    editTodo={editTodo}
                    handleCloseModal={handleCloseModal}
                    handleSaveModal={handleSaveModal}
                />
            ) : null}
            <Footer />
        </div>
    );
}
export default App;
