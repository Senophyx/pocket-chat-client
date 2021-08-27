import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
       <div className="joinOuterContainer">
        <div className="joinInnerContainer">
         <div class="header">
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
          </style>
          <h1 className="head_logo">WEBCHAT</h1>
          <p> </p>
          <h1 className="heading">Join or Create Room</h1>
        </div>
        <div>
          <input placeholder="Nickname" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room Name" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Let's GO!</button>
        </Link>
        <p> </p>
          <h1 className="heading">Introducing</h1>
           <div className="doc">
            <p>WebChat is Realtime Chat Application</p>
            <p>Created with React, Express, Node, Socket.IO And <span role="img" aria-label="emoji">❤️</span></p>
           </div>
          <p> </p>
          <h1 className="heading">Documentation</h1>
            <ul>
            <p> Open Source :</p>
            <li> Client :  <a href="https://github.com/LyQuid12/webchat-client/" target="_blank">Here</a></li>
            <li> Server : Soon!</li>
          </ul>
        </div>
        <a href="https://webchat.betteruptime.com/" target="_blank">Status</a>
      </div>
  );
}
