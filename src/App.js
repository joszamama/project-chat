import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './includes/css/App.css';

// Simple function component
const App = () => {
    return (
        // We are going to pass different props to the ChatEngine component
        <ChatEngine
            height="100vh"
            projectID="4c8de590-bbac-40c7-8ba9-0c8274e1853c"
            userName="admin"
            userSecret="admin"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;