import React, { useEffect, useState } from 'react'

import './List.css'
import Card from '../Card/Card'


// let cardCount=0;
export default function List(props) {

    const [cardCount, setCardCount] = useState(0);

    useEffect(() => {
        let count = 0;
        props.ticketDetails.forEach((ticket) => {
        if (ticket.status === props.listTitle || ticket.priority === props.listTitle || ticket.userObj.name === props.listTitle) {
            count++;
        }
        });
        setCardCount(count);
    }, [props.ticketDetails, props.listTitle]);

  return (
    <>
        <div className="list-container">
            <div className="list-header">
                <div className="list-header-left">
                    {
                        {
                            'status' : <>{
                                {
                                    'Backlog': <div className="list-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="magenta" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m4 8l8 4l8-4l-8-4z"/><path fill="gray" d="m12 16l-4-2l-4 2l8 4l8-4l-4-2l-4 2z"/><path d="m8 10l-4 2l4 2m8 0l4-2l-4-2"/></g></svg>
                                    </div>,
                                    'Todo': <div className="list-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3"/></svg>
                                    </div>,
                                    'In progress': <div className="list-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="#fdc000" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8V4Z"/></g></svg>
                                    </div>,
                                    'Done': <div className="list-icon">
                                    <svg width="22" height="22" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path fill="blue" d="m48,9c-21.54,0-39,17.46-39,39s17.46,39 39,39 39-17.46 39-39-17.46-39-39-39zm21.774,27.921l-28.458,28.455c-.714,.711-1.869,.711-2.583,0l-.573-.573-.003,.003-15.657-15.768c-.714-.714-.714-1.872 0-2.586l3.882-3.879c.714-.714 1.872-.714 2.586,0l11.067,11.148 23.268-23.268c.714-.714 1.872-.714 2.586,0l3.882,3.882c.717,.711 .717,1.869 .003,2.586z"/></svg>
                                    </div>,
                                    'Cancelled': <div className="list-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="red" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59z"/></svg>
                                    </div>
                                }[props.listTitle]
                            } </>,
                            'user': <></>,
                            'priority' : <>{
                                {
                                    0: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1024 1024"><path fill="currentColor" d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"/></svg></div>,
                                    1: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"><g fill="currentColor"><path fill-rule="evenodd" d="M35 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4Zm-1 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21Zm3-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1h-4Z" clip-rule="evenodd"/><path d="M6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z"/></g></svg></div>,
                                    2: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"><g fill="currentColor"><path d="M19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z"/><path fill-rule="evenodd" d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9Zm3-1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4Z" clip-rule="evenodd"/></g></svg></div>,
                                    3: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"><path fill="currentColor" d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM9 30a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H9Z"/></svg></div>,
                                    4: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"><path fill="red" d="M5.96 4.457a2.075 2.075 0 1 1 4.08 0l-.856 4.56a1.205 1.205 0 0 1-2.368 0l-.855-4.56ZM9.5 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"/></svg></div>
                                }[props.listTitle]
                            } </>
                        }[props.groupValue]
                    }
                    
                    <div className="list-title">
                        {
                            {
                                'priority' : <>{
                                                props.priorityList? props.priorityList.map(priorityProperty => (
                                                        priorityProperty.priority === props.listTitle
                                                        ? <>{priorityProperty.name}</>
                                                        : null)): null
                                                }</>,
                                'status' : <>{props.listTitle}</>,
                                'user' : <>{props.listTitle}</>
                            }[props.groupValue]
                        }
                    </div>
                    <div className="list-sum">{cardCount}</div>
                </div>
                <div className="list-header-right">
                    <div className="list-add-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"/></svg>
                    </div>
                    <div className="list-option-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm-7 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 3 7.8zm14 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 17 7.8z"/></svg>
                    </div>
                </div>
            </div>

            <div className="list-card-items">
                
            <div className="list-card-items">
                {props.ticketDetails.map((ticket) => {
                    if (ticket.status === props.listTitle || ticket.priority === props.listTitle || ticket.userObj.name === props.listTitle) {
                    return <Card cardDetails={ticket} />;
                    }
                    return null;
                })}
                </div>
            </div>
            <div className="list-count">Cards: {cardCount}</div>
        </div>
    </>
  )
}
