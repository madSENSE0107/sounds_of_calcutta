import './App.css';
import Player from './components/Player';
import bgImg from "./images//alternating-arrowhead (1).svg"

function App() {
  const songs=[
    {
      "songName":"Kalighat",
      "Src":"./sounds/Kalighat.mp3",
      "imgSrc":"./images/Kalighat.jpg"

    },
    {
      "songName":"Barowari_Pujo",
      "Src":"./sounds/Barowari_Pujo.mp3",
      "imgSrc":"./images/Barowari_Pujo.jpg"
    },
    {
      "songName":"Tram",
      "Src":"./sounds/Tram.mp3",
      "imgSrc":"./images/Tram.jpg"
    },
    {
    
      "songName":"Maidan",
      "Src":"./sounds/Maidan.mp3",
      "imgSrc":"./images/Maidan.jpg"
      
    },
    {
      "songName":"ParkStreet",
      "Src":"./sounds/Park_Street.mp3",
      "imgSrc":"./images/Park_Street.jpg"
    },
    {
      "songName":"Victoria Memorial",
      "Src":"./sounds/Victoria_Memorial.mp3",
      "imgSrc":"./images/Victoria_Memorial.jpg" 
    },
    {
      "songName":"Writers Building",
      "Src":"./sounds/Writers_Building.mp3",
      "imgSrc":"./images/Writers_Building.jpg" 
    }
  ]
  return (
    <div className="h-screen font-sans md:m-48 md:rounded-3xl md:shadow-2xl md:h-auto" style={{ backgroundImage: `url('${bgImg}')` }} >
     <div >
        <Player songs={songs}/>
     </div>
     
    </div>
  );
}

export default App;
