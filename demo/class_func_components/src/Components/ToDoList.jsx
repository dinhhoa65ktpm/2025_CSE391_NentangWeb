import { useState } from "react";

function List({tasks}){
    return(
        <>
        {tasks.map((task,id)=>(<li key={id}>{task}</li>))}
        </>
    )
}

function ToDoList(){
    const [tasks, setTask]= useState([]);
    const [input, setInput]=useState("");
    function handleChange(e){
        setInput(e.target.value);
    };
    function handleClick(){
        setTask([...tasks,...input.split(",")]);
        setInput("");
    };
    return(
        <div>
            <h3>Your Todolist</h3>
            <div>
                <input type="text" value={input} onChange={handleChange}/>
                <button type="submit" onClick={handleClick}>Add</button>
            </div>
            <ul><List tasks={tasks}/></ul>
        </div>
    )
}

export default ToDoList;