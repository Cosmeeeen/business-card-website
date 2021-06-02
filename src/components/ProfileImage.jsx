import React , { useState } from 'react';

const ProfileImage = ( props ) => {

    const [contactActive, setContactActive] = useState(false);

    return (
        <div className="profileImageContainer">
            <div 
            className={`profileDiv${contactActive?" flipped":""}`}
            style={{backgroundImage:`url(${props.image})`}}
            > 
                {
                    contactActive===true &&
                    <div className="contactFormContainer">
                        <h1>Hello world</h1>
                    </div>
                }
                <div 
                className="contactButtonContainer"
                onClick={()=>{setContactActive(!contactActive)}}>
                    <i class="fas fa-paper-plane"></i>
                </div>
            </div>
        </div>
    );
}

export default ProfileImage;