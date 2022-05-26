import React from 'react';

import '../stylesheet/components-style/ContentList.css';

function ContentList({ arrayList, setArrayList }) {

    const removeItem = (index) => {
        let arrayClone = arrayList;
        arrayClone.splice(index, 1)
        setArrayList([...arrayClone])   
    }

    return (

        <div className='contentWrapper'>

            {
                arrayList.length == 0 ?

                    <div className='contentWrapper__emptyList'>
                        Nenhum item cadastrado
                    </div>

                    :

                    arrayList.map((item, key) => {
                        return (
                            <div key={key} className='contentWrapper__listItem'>
                                <span>{item}</span>
                                <img 
                                src="images/ic-delete.png" 
                                alt="delete"
                                onClick={() => removeItem(key)}
                                />
                            </div>
                        )
                    })

            }

        </div>

    );
}

export default ContentList;