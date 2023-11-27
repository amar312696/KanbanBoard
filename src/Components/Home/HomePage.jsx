
import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';

import './HomePage.css'

import List from '../List/List'
import Navbar from '../Navbar/Navbar';


/*
 {"tickets":[
    {"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},
    {"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},
    {"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},
    {"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},
    {"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In progress","priority":0},
    {"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},
    {"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},
    {"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In progress","priority":3},
    {"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},
    {"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog","priority":1}
  ],
  
  "users":[
      {"id":"usr-1","name":"Anoop sharma","available":false},
      {"id":"usr-2","name":"Yogesh","available":true},
      {"id":"usr-3","name":"Shankar Kumar","available":true},
      {"id":"usr-4","name":"Ramesh","available":true},
      {"id":"usr-5","name":"Suresh","available":true}
    ]
  }
*/

export default function HomePage(){

  const statusList = ['Backlog','Todo','In progress', 'Done', 'Cancelled']
  const userList = ['Anoop sharma', 'Yogesh', 'Shankar Kumar', 'Ramesh', 'Suresh']
  const priorityList = [{name:'No priority', priority: 0},{name:'Urgent', priority: 4},{name:'High', priority: 3},{name:'Medium', priority: 2},{name:'Low', priority: 1}]

  const [groupValue, setgroupValue] = useState(getStateFromLocalStorage('groupValue') || 'status')
  const [orderValue, setorderValue] = useState(getStateFromLocalStorage('orderValue') || 'title');
  const [ticketDetails, setticketDetails] = useState([]);



  const orderDataByValue = useCallback(async (cardsArry) => {
    if (orderValue === 'priority') {
      cardsArry.sort((a, b) => b.priority - a.priority);
    } else if (orderValue === 'title') {
      cardsArry.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (titleA < titleB) {
          return -1;
        } else if (titleA > titleB) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    await setticketDetails(cardsArry);
  }, [orderValue, setticketDetails]);


  function saveStateToLocalStorage(key, state) {
    localStorage.setItem(key, JSON.stringify(state));
  }

  function getStateFromLocalStorage(key) {
    const storedState = localStorage.getItem(key);
    if (storedState) {
      return JSON.parse(storedState);
    }
    return null;
  }


  useEffect(() => {
    
 
    saveStateToLocalStorage('groupValue',groupValue);
    saveStateToLocalStorage('orderValue', orderValue);
      
    async function fetchData() {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      await refactorData(response);
  
    }
    fetchData();
    async function refactorData(response){
      let ticketArray = []
        if(response.status  === 200){
          for(let i=0; i<response.data.tickets.length; i++){
            for(let j=0; j<response.data.users.length; j++){
              if(response.data.tickets[i].userId === response.data.users[j].id){
                let ticketJson = {...response.data.tickets[i], userObj: response.data.users[j]}
                ticketArray.push(ticketJson)
              }
            }
          }
        }
      await setticketDetails(ticketArray)
      orderDataByValue(ticketArray)
    }
    
  }, [orderDataByValue, groupValue,orderValue]);

  

  function handleGroupValue(value){
    setgroupValue(value);
  }

  function handleOrderValue(value){
    setorderValue(value);
  }
  
  return (
    <>
      <Navbar
        groupValue={groupValue}
        orderValue={orderValue}
        handleGroupValue={handleGroupValue}
        handleOrderValue={handleOrderValue}
      />
      <section className="board-details">
        <div className="board-details-list">
          {
            {
              'status' : <>
                {
                  statusList.map((listItem) => {
                    return(<List
                      groupValue='status'
                      orderValue={orderValue}
                      listTitle={listItem}
                      listIcon=''
                      statusList={statusList}
                      ticketDetails={ticketDetails}
                    />)
                  })
                }
              </>,
              'user' : <>
              {
                userList.map((listItem) => {
                  return(<List
                    groupValue='user'
                    orderValue={orderValue}
                    listTitle={listItem}
                    listIcon=''
                    userList={userList}
                    ticketDetails={ticketDetails}
                  />)
                })
              }
              </>,
              'priority' : <>
              {
                priorityList.map((listItem) => {
                  return(<List
                    groupValue='priority'
                    orderValue={orderValue}
                    listTitle={listItem.priority}
                    listIcon=''
                    priorityList={priorityList}
                    ticketDetails={ticketDetails}
                  />)
                })
              }
            </>
            }[groupValue]
          }
        </div>
      </section>
    </>
  );
}