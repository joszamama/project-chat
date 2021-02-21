import React from 'react'
import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { sendOutlined, PictureOutlined, SendOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
    const { chatId, creds } = props
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Avoids refreshing the website on sending message

        const text = value.trim();

        if (text.length > 0) sendMessage(creds, chatId, { text });
        setValue('');

    }

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId)
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Type here"
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined
                        className="picture-icon"
                    />
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
            <button className="send-button" type="submit">
                <SendOutlined
                    className="send-icon"
                />
            </button>
        </form>
    );
}

export default MessageForm
