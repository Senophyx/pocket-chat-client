import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import {ENDPOINT} from '../Chat/Chat.js'

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h1>Server :</h1>
            <h2 className="server">{ENDPOINT}</h2>
            <p>&nbsp;</p>
            <h1>Members :</h1>
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
