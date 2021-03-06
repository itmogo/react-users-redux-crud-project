//import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './components/form.css';

function App() {
  return (
    <div style={{                 
      backgroundImage: `url("background.jpg")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"     
    }}>
    <div className="container">
      <div className="row">
        <div className="col-md-5">
        <h4>Users Form</h4>
          <UserForm />
        </div>

        <div className="col-md-7">
        <h4>Users List</h4>
          <UserList />
        </div>
      </div>
    </div>
    </div>

  );
}

export default App;
