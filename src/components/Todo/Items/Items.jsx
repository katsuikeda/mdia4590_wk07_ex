import { useState } from "react";

import './Items.css';

import ButtonGroup from '../../../components/ButtonGroup/ButtonGroup';

/**
 * TodoItems displays a list of items passed from the parent and then run through a .filter and .sort
 * It takes two props:
 *      the unfiltered/unsorted entries list
 *      a reference to the delete function in the parent
 * We also use the ButtonGroup component for the filter/sort buttons since they effectively do the same thing
 */
export default function TodoItems({ entries, delRef }) {
    // the filter state, as well as the list of filter values
    const [currFilter, setCurrFilter] = useState('all');
    const filterList = ['all', 'home', 'work', 'school', 'other'];

    // the sort state, as well as the list of sort values
    const [currSort, setCurrSort] = useState('date');
    const sortList = ['date', 'text'];

    // the entries prop has the full list, but we'll display the filtered and sorted version
    const fEntries = sortAndFilterList(entries, currFilter, currSort);
    
    return (
        <>
            <h2>Todo Items</h2>
            <div className="filter-grp">
                <div>
                    Sort: <ButtonGroup valList={sortList} currState={currSort} callBackState={setCurrSort} />
                </div>
                <div>
                    Filter: <ButtonGroup valList={filterList} currState={currFilter} callBackState={setCurrFilter} />
                </div>

            </div>

            <ul className="the-list">
                {fEntries.length > 0 ? fEntries.map((item) => drawTask(item, delRef)) : <li>No items to display</li>}
            </ul>
        </>

    );

}

// draw a todo item, since we want to delete we need to pass a ref to the delete in the parent component
function drawTask(item, delRef){
    return (
        <li key={item.id}>
            <div>
                <div>
                    {retDateString(item.date)}
                </div>
                <div>
                    <em>{item.cat}</em> - {item.text}
                </div>

            </div>
            <div>
                <button
                    type="button"
                    className="delete-btn"
                    onClick={() => delRef(item.id)}
                >
                    X
                </button>
            </div>
        </li>
    );
}

function sortAndFilterList(entries, currFilter, currSort) {
    return entries
        .filter((cItem) => {
            return cItem.cat === currFilter || currFilter === 'all';
        })
        .sort((a, b) => {
            if (currSort === "text") {
                if (a.text > b.text)
                    return 1;
                else if (a.text === b.text)
                    return 0;
                else
                    return -1;
            }
            else {
                if (a.date > b.date)
                    return 1;
                else if (a.date === b.date)
                    return 0;
                else
                    return -1;
            }

        })
}

function retDateString(timestamp) {

    const cDate = new Date(timestamp);
    return cDate.toDateString() + ' at ' + cDate.getHours() + ':' + cDate.getMinutes() + ':' + cDate.getSeconds();

}




