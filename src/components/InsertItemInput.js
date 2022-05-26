import React from 'react';

import '../stylesheet/components-style/InsertItemInput.css'

function InsertItemInput({ arrayList, setArrayList }) {

    const [inputValue, setInputValue] = React.useState("");

    return (
        <div className='boxWrapper'>

            <input type="text" placeholder='Digite...' onChange={(e) => setInputValue(e.target.value)}/>

            <button
            onClick={() => {
                let arrayClone = arrayList.concat(inputValue);
                setArrayList(arrayClone)
            }}
            >
                <img src="images/ic-add.png" alt="add"/>
            </button>

        </div>
    );
}

export default InsertItemInput;