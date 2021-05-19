import React from 'react';

const ContactInformation = ( props ) => {
    return (
        <div className="contactInformationContainer">
            <a href={`mailto:${props.email}`}>
                <i className="fas fa-envelope"></i>
                {props.email}
            </a>
            <a href={`tel: ${props.phone}`}>
                <i className="fas fa-phone-alt"></i>
                {props.phone}
            </a>
        </div>
    );
}

export default ContactInformation;