import './App.css';
import UserForm from './components/UserForm';
import Users from './components/Users';
import './components/UserFormStyle.css'
import UserNotAttending from './components/UserNotAttending'
import Nav from './components/nav';

function App() {
  return (
    <div>
      <Nav/>
      <UserForm />
      <br/><br/>
    <div className="App">
      
      <Users />
      <UserNotAttending/>
      
    </div>
    </div>
  );
}

export default App;
