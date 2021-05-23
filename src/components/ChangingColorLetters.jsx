import React from 'react';

const ChangingColorsLetters = ( props ) => {
    var content = props.children;

    content = content.replace(/(?![^<]*>)[^<]/g, c => `<span>${c}</span>`);
    
    return (
        <div className="changingColorLettersContainer">
            <h1 dangerouslySetInnerHTML={{__html: content}}></h1>
        </div>
    );
}

export default ChangingColorsLetters