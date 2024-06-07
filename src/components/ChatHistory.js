import React from 'react';
import './ChatHistory.css'; // Import the CSS file for styling

const ChatHistory = ({ chats, onSelectChat }) => {
  return (
    <div className="chat-history">
      {chats.map((chat, index) => (
        <div 
          key={index} 
          className="chat-item" 
          onClick={() => onSelectChat(chat.id)}
        >
          {'>'} Chat {chat.id + 1} {/* Prefix with '>' to mimic terminal command list */}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
