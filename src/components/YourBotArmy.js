import React from "react";
import BotCard from "./BotCard"

function YourBotArmy({ bots, removeBot , deleteBot }) {
  //your bot army code here...

  const mapBots = bots.map(bot => 
    <BotCard 
    key={bot.id}
    bot={bot}
    clickEvent={removeBot}
    deleteBot={deleteBot}
    />)

  return (
    <div className="ui segment inverted olive bot-army">
      <h1>Your Bot Army</h1>
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {mapBots}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;