import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Employee = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const fetchMessages = async () => {
        const response = await axios.get('http://localhost:5000/api/messages');
        setMessages(response.data);
    };

    const sendMessage = async () => {
        await axios.post('http://localhost:5000/api/messages', { text: newMessage, role: 'employee' });
        setNewMessage('');
        fetchMessages();
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <div className=" mx-auto p-4 ml-[200px] w-[600px] mt-20 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Employee Chat</h2>
            <div className="message-container  bg-white p-5   max-h-96 overflow-y-auto mb-4 flex flex-col">
                {messages.map((msg, index) => (
                    <div key={index} className={`p-2 my-1 rounded-lg ${msg.role === 'employee' ? "bg-blue-200 self-end" : "bg-green-200 self-start"}`}
                    style={{ display: "inline-block" }}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <input
                className="border rounded-lg p-2 w-full"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message"
            />
            <button
                className="mt-2 bg-blue-500 text-white rounded-lg p-2 w-full"
                onClick={sendMessage}
            >
                Send
            </button>
        </div>
    );
};

export default Employee;
