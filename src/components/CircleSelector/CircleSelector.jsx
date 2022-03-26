import React from "react";
import './CircleSelector.css'

function circleSelector(props) {
    return (
        <div className="CircleSelector">
            <button>{props.selected}</button>
            <button>Select Circle 2</button>
            <button>Select Circle 3</button>
            <button>Select Circle 4</button>
        </div>
    )
}
export default circleSelector;