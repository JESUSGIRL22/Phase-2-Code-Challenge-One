import React, { useState , useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = "http://localhost:8002/bots";

function BotsPage() {
  //start here with your code for step one

  const [bots, setBots] = useState([]);
  
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setBots(data))
  },[bots])

  function enlistBot(bot){
    console.log(bot);
    setBots(bots.map(b => b.id === bot.id ? {...b, army:true} : b));
  }

  function removeBot(bot){
    console.log(bot);
    setBots(bots.map(b => b.id === bot.id ? {...b, army:false} : b));
  }

  function deleteBot(bot){
    // console.log("You're fired.")
    fetch(`${API}/${bot.id}`, {method:"DELETE"})
  }
  return (
    <div>
      <YourBotArmy 
      bots={bots.filter(b => b.army)}
      removeBot ={removeBot}
      deleteBot={deleteBot}
      />

      <BotCollection 
      bots={bots}
      enlistBot={enlistBot}
      deleteBot={deleteBot}
      />
    </div>
  )
}

export default BotsPage;