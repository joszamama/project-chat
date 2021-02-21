import React from 'react';

const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img
                className="message-image"
                src={message.attachments[0].file}
                alt="message-attachment"
                style={{ float: 'right' }}
            />
        );
    }

    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3D2A50' }}>
            {message.text}
        </div>
    )
}

export default MyMessage
