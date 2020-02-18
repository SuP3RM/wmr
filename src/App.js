import React from 'react';
import './App.css';
import Content from './components/Content';
import Rooms from './components/Rooms';
import FoodService from './components/FoodService';
import AVEquipment from './components/AVEquipment';
import HousingTravelInfo from './components/HousingTravelInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Headquarters Meeting Request Web Form
      </header>
      <Content/>
      <Rooms/>
      <FoodService/>
      <AVEquipment/>
      <HousingTravelInfo/>
    </div>
  );
}

export default App;
