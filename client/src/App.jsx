import React, {useState} from 'react'
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './App.css';


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
        <Chat client={client} theme='team light'>
            <ChannelListContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
            />
            <ChannelContainer 
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            createType={createType}
            />
          
        </Chat>

    </div>
    )
}

export default App;