import { useState } from "react";
import TodoList from "./To-Do-List";
import "./Todo.css"

const ToDo = () => {
    const [inputValue , setInputValue] = useState("");
    const [todoList , setToDoList] = useState([]); // listeyi dizi olarak ayarladık

    const handleChange = ( event) =>{
        // console.log(event.target.value)
        setInputValue(event.target.value)
    }
    
    const handleKeyPress = (event) =>{
        if(event.key === 'Enter' && inputValue.trim()){
            setToDoList([...todoList,{text:inputValue,completed:false}]); // input değerini listeye ekle ve her biri için completed durumu ekledik 
            setInputValue(""); // input alanını temizle
        }
    }

    const toggleComplete = (index) => {
        const updatedList = todoList.map((todo,i)=>
            i === index ?{...todo,completed:!todo.completed}:todo
        );
        setToDoList(updatedList) // Listesinin tamamlama durumunu güncelledik
    }



    return (
        <div className="container">
            <div className="main">
                <header>To Do App</header>
                <div>
                    <input className="in_value"
                    placeholder="What needs to be done ?"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    />
                </div>
                {/* listeleme */}
                <TodoList 
                    list={todoList}
                    toggleComplete = {toggleComplete}
                />
            </div>
        </div>
    )

}

export default ToDo;




