import './App.css';
import Component from './Component';

function App() {

    const url1 = 'http://localhost:7070/data';
    const url2 = 'http://localhost:7070/error';
    const url3 = 'http://localhost:7070/loading';
    
    return (
        <div className="App">
            <Component url={url1} />
            <Component url={url2} />
            <Component url={url3} />
        </div>
    );
}

export default App;
