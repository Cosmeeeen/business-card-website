import React from 'react';

const ProfileImage = ( props ) => {
    return (
        <div className="profileImageContainer">
            <div className="profileDiv" style={{backgroundImage:`url(${props.image})`}}></div>
        </div>
    );
}

export default ProfileImage;