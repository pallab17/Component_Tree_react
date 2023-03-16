import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  // id ta esegehe deleteitem r kache
  function deleteItem(id) {
    // setItems ke call diyechi bolchi je baba setItems
    // tui ekta kaj kor tui prevItems r array tar modhe jehkhane sob tasks gulo ache
    // setar modhe je task take click korchi setake baad diye
    //  baki tasks guno ke ui te show kora aar jei task take click korchi setake array theke bar kore de
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            // <li>{todoItem}</li>
            <ToDoItem
              key={index}
              id={index}
              pall={todoItem}
              onChecked={deleteItem}
              // task r id te esegeche unchecked r kache
              // ebar unchecked id take transfer korche deleteiTem bole fn take
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

/*
what are we trying to do ?
ami chaichi je which i click on a task which is added should vanish from the list
and ui te jeno na dekhte pawa jaye




*/
