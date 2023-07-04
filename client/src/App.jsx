import React, {useState} from 'react'
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './App.css';
import 'stream-chat-react/dist/css/index.css';


import {ChannelListContainer, ChannelContainer, Auth} from './components';

const apikey = 'j9yu763mcurm'; //we will get this after making an account on stream

const cookies = new Cookies();

const client = StreamChat.getInstance(apikey);


const authToken = cookies.get("token");
if(authToken) {
  client.connectUser({
      id: cookies.get('userId'),
      name: cookies.get('username'),
      fullName: cookies.get('fullName'),
      image: cookies.get('avatarURL'),
      hashedPassword: cookies.get('hashedPassword'),
      phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}


const App = () => {
  
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if(!authToken) return <Auth />
  
    return (
    <div className='app_wrapper'>
        <Chat client={client} >
          <div className="ChannelListContainer">
            <ChannelListContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
            />
          </div>
          <div className="ChannelContainer">
            <ChannelContainer 
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            createType={createType}
            />
          </div>
          
        </Chat>

    </div>
    )
}

export default App;