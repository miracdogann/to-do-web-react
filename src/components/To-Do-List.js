import React , {useState} from "react";
import "./ToDoList.css" ; 

const TodoList  =  ({list, toggleComplete}) =>{

    const [hoveredIndex,setHoveredIndex] = useState(null) // hangi  elemanın üzerine geldiğini takip etmek için

    return(

        <div>
            <ul>
                {list.map((todo,index) => (
                   <li
                    key={index}
                    className="todo-item"
                    onMouseEnter={() =>setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                   >
                    <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
                        {todo.text}
                    </span>
                    {hoveredIndex === index && (
                        <button
                         className={`todo-button ${todo.completed ? "completed" : ""}`}
                         onClick={() => toggleComplete(index)}
                        >
                            {todo.completed ?  "✖" :"✔" }
                        </button>
                    )}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default TodoList;