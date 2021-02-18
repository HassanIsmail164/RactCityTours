import './App.scss'; // Syntactically Awesome Style Sheets) is a pre-processor
// scripting language that will be compiled or interpreted into CSS.
import NavBar from './components/NavBar/NavBar';
import TourList from './components/TourList'

function App() {
  return (
    <main>
      <NavBar />
      <TourList />
    </main>
  );
}

export default App;
