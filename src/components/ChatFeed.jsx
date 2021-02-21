import React from 'react';

import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
    // In this way we are able to distructure from props
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];

    // Funcional component for rendering messages
    const renderReadReceipts = (message, isMyMessage) => {
        // We will render the code inside the map if the person has read the message
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div
                className="read-receipt"
                key={`read_${index}`}
                style={{ float: isMyMessage ? 'right' : 'left', backgroundImage: `url(${person?.person?.avatar})` }}
            />
        ))
    }

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                                ? <MyMessage message={message} />
                                : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receips" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            );
        })
    }

    if (!chat) return 'Loading ...';

    return (
        <div>
            <div className="chat-feed">
                <div className="chat-title-container">
                    <div className="chat-title">
                        {chat?.title}
                    </div>
                    <div className="chat-subtitle">
                        {chat.people.map((person) => ` ${person.person.username}`)}
                    </div>
                </div>
            </div>
            {renderMessages()}

            <div style={{ height: '100px' }} />

            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>

        </div>
    );
}

export default ChatFeed;