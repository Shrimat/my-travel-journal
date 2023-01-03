import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from "./components/NavigationBar";
import TravelCard from "./components/TravelCard";
import data from "./data";
import { CardGroup, Stack } from "react-bootstrap";

function App() {
  const travelCards = data.map(card => {
    return <TravelCard key={card.id} {...card}/>
  })
  return (
    <div className="App">
      <Stack gap={3}>
        <NavigationBar />
        <CardGroup>
          {travelCards}
        </CardGroup>
      </Stack>
    </div>
  );
}

export default App;
