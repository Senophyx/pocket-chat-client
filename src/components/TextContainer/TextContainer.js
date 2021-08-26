import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>WebChat is Realtime Chat Application</h1>
      <h2>Created with React, Express, Node, Socket.IO And <span role="img" aria-label="emoji">❤️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Online :</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
