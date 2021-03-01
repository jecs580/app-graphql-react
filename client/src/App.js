import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MessageList from './components/MessageList'
import MessageForm from './components/MessageForm'
import NavBar from './components/NavBar'
import "bootswatch/dist/lux/bootstrap.min.css";
function App() {
  return (
    <Router>
      <NavBar/>
      <div className="contaner p-4">
      <Switch>
        <Route exact path="/" component={MessageList}/>
        <Route exact path="/new-message" component={MessageForm}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
