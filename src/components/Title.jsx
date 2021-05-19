import React from 'react';


const Title = ( props ) => {
    return (
        <div className="titleContainer">
            {props.children}
        </div>
    );
}

export default Title;