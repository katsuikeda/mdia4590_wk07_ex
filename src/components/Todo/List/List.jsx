import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import TodoItems from "../Items";

import './List.css';

/**
 * TodoList contains the list of entries along with functionality to add or delete items
 * There's two useEffects that work with localStorage
 *      the first will check localStorage for a todo_data key and if it exists will use it to set items on first mount
 *      the second will update localStorage anytime items changes
 */
export default function TodoList() {
    const [items, setItems] = useState([]);
    const [textVal, setTextVal] = useState('');

    const [catVal, setCatVal] = useState('other');

    // we have two useEffects because the first we ONLY want to run on first mount and the second whenever items is updated
    useEffect(() => {
        // on first mount, check to see if localStorage exists
        // might also check to see if it fits format, and possibly clear
        const storedData = localStorage.getItem('todo_data');

        if(storedData !== null){
            setItems(JSON.parse(storedData));
        }
        
    }, []);

    useEffect(() => {        
        // whenever the list changes, update localStorage
        localStorage.setItem('todo_data', JSON.stringify(items));
        
    }, [items]);

    // our addItem function, we could move this out of scope but would have to pass refs to the state vars
    const addItem = () => {
        // check that something was entered
        if (textVal !== "") {
            // create a new item
            var newItem = {
                id: uuidv4(),
                text: textVal,
                cat: catVal,
                date: Date.now()
            };

            // previous state (list before) is concatenated with the new item      
            setItems(items.concat(newItem));

            // simple way to check the state variable
            let temp = items;

            // clear the input field, by setting the bound text
            setTextVal('');
        }
    }

    // our delItem function, we could move this out of scope but would have to pass refs to the state vars
    const delItem = (key) => {  

        // we can use .filter to return the list with the matching id filtered out
        let filteredItems = items.filter(function (item) {
            return (item.id !== key);
        });

        // then we update the list with the filtered version, effectively deleting the item
        setItems(filteredItems);       
    }

    return (
        <div className="todo-list-main">
            <div>
                <h2>Add Todo Item</h2>
                <div className="todo-form">
                    <div>
                        <label>Task:</label>
                        <input
                            value={textVal}
                            onChange={(event) => {
                                setTextVal(event.target.value);
                            }}
                            placeholder="enter task">
                        </input>
                    </div>
                    <div>
                        <label>Category:</label>
                        <select
                            value={catVal}
                            onChange={event => {
                                setCatVal(event.target.value)
                            }}
                        >
                            {/* Could build this dynamically like the button group but then we'd have to keep the cats in scope */}
                            <option value="home">Home</option>
                            <option value="school">School</option>
                            <option value="work">Work</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        onClick={() => addItem()}
                    >
                        add
                    </button>
                </div>
            </div>

            <div>
                <TodoItems
                    entries={items}
                    delRef={delItem}
                />
            </div>
        </div>
    );
}