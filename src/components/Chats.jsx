import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch, data } = useContext(ChatContext);

  useEffect(() => {
    // const getChats = () => {
    //   const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
    //     setChats(doc.data());
    //   });
    //   return () => {
    //     unsub();
    //   };
    // };
    // currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: 'CHANGE_USER', payload: u });
  };

  return (
    <div className="chats">
      {[
        {
          key: 1,
          text: 'hi',
          displayName: 'lucy',
          url: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1200',
        },
        {
          key: 2,
          text: 'hello',
          displayName: 'jack',
          url: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1200',
        },
        {
          key: 3,
          text: 'good',
          displayName: 'james',
          url: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1200',
        },
      ].map((chat) => (
        <div className="userChat" key={chat['key']}>
          <img src={chat.url} alt="" />
          <div className="userChatInfo">
            <span>{chat?.displayName}</span>
            <p>{chat.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
