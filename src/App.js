import './App.css';
import Player from './components/Player';


function App() {
  const songs = [
    {
      "songName": "Kalighat",
      "Src": "./sounds/Kalighat.mp3",
      "imgSrc": "./images/Kalighat.jpg"

    },
    {
      "songName": "Barowari_Pujo",
      "Src": "./sounds/Barowari_Pujo.mp3",
      "imgSrc": "./images/Barowari_Pujo.jpg"
    },
    {
      "songName": "Tram",
      "Src": "./sounds/Tram.mp3",
      "imgSrc": "./images/Tram.jpg"
    },
    {

      "songName": "Maidan",
      "Src": "./sounds/Maidan.mp3",
      "imgSrc": "./images/Maidan.jpg"

    },
    {
      "songName": "ParkStreet",
      "Src": "./sounds/Park_Street.mp3",
      "imgSrc": "./images/Park_Street.jpg"
    },
    {
      "songName": "Victoria Memorial",
      "Src": "./sounds/Victoria_Memorial.mp3",
      "imgSrc": "./images/Victoria_Memorial.jpg"
    },
    {
      "songName": "Writers Building",
      "Src": "./sounds/Writers_Building.mp3",
      "imgSrc": "./images/Writers_Building.jpg"
    }
  ]
  return (

    <div >
      <Player songs={songs} />
      <footer className=" md:px-12 md:flex md:justify-start md:flex-col  m-3">
        <p className="mt-8 mb-3 md:mt-0 md:mb-0 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-slate-800">Suggestions !</p>
        <div className="mb-8 md:mb-2">
          Suggest me features
          by connecting with me through these socials.

        </div>
        <ul className="mb-4 flex text-sky-600 flex-row">
          <li className="mr-3 decoration-1"><a className="" href="https://github.com/madSENSE0107">github</a></li>
          <li className="mr-3  decoration-1"><a className="" href="https://www.linkedin.com/in/saptarsi-chakrabarty/">linkedin</a></li>
          <li className="mr-3  decoration-1"><a className="" href="https://mail.google.com/mail/?view=cm&fs=1&to=saptarsi2000@google.com">Email</a></li>
        </ul>
      </footer>
    </div>


  );
}

export default App;
