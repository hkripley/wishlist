import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Background from './img/workshop.jpg'
import items from './data/items.json';
import Card from './components/Card'

let cards = items.map( (item) => {
  return <Card id={item.id} key={item.id} data={item}></Card>
}
);

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <span className="navbar-brand">
          <h1 className='title'>Hannah's Christmas List - 2023 Edition</h1>
        </span>
      </nav>
      <div className='content' style={{ 
            backgroundImage: `url(${Background})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
      }}>
        <div className='cards'>
          {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
