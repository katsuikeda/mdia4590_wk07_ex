import './ButtonGroup.css';

/**
 * component to render a set of buttons where only one can be selected
 * requires three props:
 *      valList: an array of values to display as well as the value that will be returned
 *      currState: a ref to the state that holds which button is currently selected, needs to match one of the list values
 *      callBackState: a reference to the state fn to update the state
 * all classes are in the local CSS file
 */
export default function ButtonGroup({ valList, currState, callBackState }) {

    const drawGroup = (item) => {
        return (
            <button
                key={item}
                className={(currState === item) ? 'selected grp-button' : 'grp-button'}
                onClick={() => { callBackState(item) }}
            >{item}</button>
        );
    }

    return (
        <>
            {valList.map(drawGroup)}
        </>
    );
}