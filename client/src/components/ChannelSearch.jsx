import React, { useState, useEffect} from "react";
import { useChatContext } from "stream-chat-react";

import './All_css_files/ChannelSearch.css';


const ChannelSearch = () => {
    const[query ,setQuery] = useState('');
    const[loading, setLoading]= useState(false);

    const getChannels = async (text) => {
        try{
            //TODO: fetch channels
        } catch(error){
            setQuery('')
        }
    }

    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value)
    }

    return(
        <div className="channel-search_container">
            <div className="channel-search_input_wrapper">
                {/* <div className="channel-search_icon">
                    <img src={searchIcon}/>
                </div> */}
                <input
                className="channel-search_input_text"
                placeholder='Search'
                type="text"
                value ={query}
                onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default ChannelSearch;