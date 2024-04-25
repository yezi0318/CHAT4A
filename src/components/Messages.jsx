import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';
import Message from './Message';

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      senderId: 1,
      date: '15:30',
      img: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1200',
      text: 'pretty?',
    },
    { id: 2, senderId: 2, date: '16:00', text: 'sure' },
  ]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (data?.text) {
      const arr = [...messages];
      arr.push({
        id: Date.now(),
        date: '11:00',
        text: data?.text,
        senderId: 1,
      });
      setMessages(arr);
    }
    // const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
    //   doc.exists() && setMessages(doc.data().messages);
    // });

    // return () => {
    //   unSub();
    // };
  }, [data]);

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
