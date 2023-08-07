import logo from './logo.svg';
import './App.css';
import ListTask from './components/ListTask';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="todo-app">
      <AddTask/>
     <ListTask/>
     
    </div>
  );
}

export default App;
