import './App.css';

function App() {

    const [movies, setMovies] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Movie Rater</h1>
            </header>
            <div className="layout">
                <div>Movie list</div>
                <div>Movie details</div> 
            </div>
        </div>
  );
}

export default App;