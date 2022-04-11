import React from "react";
import './CircleSelector.css'

function circleSelector(props) {

    const handleSelection = event => {
        props.onClick(event.target.value)
      }

    return (
        <div className="CircleSelector">
            <button className={props.selected === '1' ? 'selected' : null} value='1' onClick={handleSelection}>{props.selected === '1' ? 'Circle 1 Selected' : 'Select Circle 1'}</button>
            <button className={props.selected === '2' ? 'selected' : null} value='2' onClick={handleSelection}>{props.selected === '2' ? 'Circle 2 Selected' : 'Select Circle 2'}</button>
            <button className={props.selected === '3' ? 'selected' : null} value='3' onClick={handleSelection}>{props.selected === '3' ? 'Circle 3 Selected' : 'Select Circle 3'}</button>
            <button className={props.selected === '4' ? 'selected' : null} value='4' onClick={handleSelection}>{props.selected === '4' ? 'Circle 4 Selected' : 'Select Circle 4'}</button>
        </div>
    )
}
export default circleSelector;