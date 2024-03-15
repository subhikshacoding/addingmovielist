import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import {Route,Routes,Link,BrowserRouter as Router,NavLink,useNavigate,Navigate,} from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';



const Initial_Movie_List = [
  
  {
    name:"Kolaiyuthir Kaalam",
    poster:"https://m.media-amazon.com/images/M/MV5BZGQ5MTY5M2EtN2YwOC00ZWEyLWE5NmQtNDk2MzhiZTg1ZWMwXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
    rating:8,
    summary:"Shruthi, a girl who grew up in an orphanage in Chennai, is declared the legal heir to a millionaire's British estate. After reaching Britain, she finds herself pursued in her new mansion by a masked murderer."

  },
  {
    name : "leo",
    poster :"https://i.pinimg.com/originals/39/f3/9d/39f39dc13ef218c04e57942bf8db54a6.jpg",
    rating: 8,
    summary:"The film follows Parthi, a café owner and animal rescuer in Theog,who is pursued by gangsters Antony and Harold Das who suspect him to be Antony's estranged son, Leo."
  },
  {
    name:"Harry Potter",
    poster:"https://images.moviesanywhere.com/51d05e3bd56acb23ba41a4db49633d98/743b4280-5ea4-4468-8d63-d565d480bee2.jpg",
    rating:9,
    summary:" A mysterious elf tells Harry to expect trouble during his second year at Hogwarts, but nothing can prepare him for trees that fight back, flying cars, spiders that talk and deadly warnings written in blood on the walls of the school.",
    },
  {
    name : "the squid game",
    poster:"https://m.media-amazon.com/images/I/51gsIdyCIqL._AC_UF894,1000_QL80_.jpg",
    rating:7,
    summary:"A story of people who fail at life for various reasons, but suddenly receive a mysterious invitation to participate in a survival game to win more than 38 million US dollars. The game takes place on an isolated island and the participants are locked up until there is a final winner."

  },
  {
    name:"chittha",
    poster:"https://media-cache.cinematerial.com/p/500x/ddwxcuph/chithha-french-movie-poster.jpg?v=1695368143",
    rating:8,
    summary:"A man is raising his niece like his own daughter, and everything appears normal in their life until the little girl goes missing."

  },
  {
    name:"the wednesday",
    poster:"https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    rating:7,
    summary:"Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents"

  },
  {
    name:"Ratatouille",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbtGa1wQA0XQjBV1OMV3UhJeueYa0rOPdOfm1xvoGrQ&s",
    rating:9,
    summary:"Remy dreams of becoming a great chef, despite being a rat in a definitely rodent-phobic profession. He moves to Paris to follow his dream, and with the help of hapless garbage boy Linguini he puts his culinary skills to the test in the kitchen but he has to stay in hiding at the same time, with hilarious consequences."
  },
  {
    name:" avengers infinity war ",
    poster:"https://rukminim1.flixcart.com/image/850/1000/ky90scw0/sticker/a/a/x/medium-avengers-infinity-war-decorative-for-poster-18-ps-32-original-imagagzvhmsudcfg.jpeg?q=90",
    rating:8,
    summary:"Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. "

    },
    {
      name:"connect",
      poster:"https://timesofindia.indiatimes.com/photo/87803468.cms",
      rating :8,
      summary:"In a country where the government has imposed a national curfew, single mother Nayanthara notices eerie changes in her daughter's behavior. She seeks virtual help from a pastor, who proposes an online exorcism."

    },
    


];


function App() {
  return (
    <div className="App">
          <AddMovie />
     </div>
  );
}

function AddMovie() {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [movieList, setMovieList] = useState(Initial_Movie_List);

  return (
    <div className='project'>
      <div className='textfield'>
      <TextField  style={{marginTop:"30px",width:"15rem",background:"white",marginLeft:"80px"}}id="filled-basic" label="Enter movie name" variant="filled" onChange={(event) => setName(event.target.value)} />
      <TextField  style={{marginTop:"30px",width:"15rem",background:"grey"}}id="filled-basic" label="Enter movie summary" variant="filled" onChange={(event) => setSummary(event.target.value)} />
      <TextField  style={{marginTop:"30px",width:"15rem",background:"white"}}id="filled-basic" label="Enter movie rating" variant="filled" onChange={(event) => setRating(event.target.value)} />
      <TextField style={{marginTop:"30px",width:"15rem",background:"grey"}} id="filled-basic" label=" movie poster link" variant="filled" onChange={(event) => setPoster(event.target.value)} />
    </div>
      <Button style={{marginLeft:"400px",width:"300px",borderRadius:"2rem"}}variant="contained" color="success" onClick={() => {
        const newMovie = {
          name: name,
          poster: poster,
          summary: summary,
          rating: rating,
        };
        setMovieList([...movieList, newMovie]);
      }}>
        Add Movie
      </Button>

      <div className="movieList">
        {movieList.map((mov, index) => (
          <Movie key={index} movie={mov} />
        ))}
      </div>
    </div>
  );
}

function Movie({ movie }) {
  const [show, setShow] = useState(true);

  const toggleSummary = () => {
    setShow(!show);
  };

  const summaryStyles = {
    display: show ? "block" : "none",
  };

  return (
    <div className='content'>
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-specs">
        <h2>{movie.name}</h2>
        <p className="movie-rating">{movie.rating} ⭐</p>
      </div>
      <IconButton aria-label="toggle-summary" onClick={toggleSummary}>
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <p className="movie-summary" style={summaryStyles}>{movie.summary}</p>
      <Counter />
    </div>
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  return (
    <div>
      <IconButton color="primary" aria-label="like" onClick={() => setLike(like + 1)}>
        👍<Badge badgeContent={like} color="success"  />
      </IconButton>
      <IconButton color="primary" aria-label="dislike" onClick={() => setDisLike(dislike + 1)}>
        👎<Badge badgeContent={dislike} color="error" />
      </IconButton>
    </div>
  );
}
export default App;