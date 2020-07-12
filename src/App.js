import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Thanks from './thanks';
import Welcome from './welcome';
import {Switch , Route ,BrowserRouter as Router , withRouter} from 'react-router-dom';

class App extends React.Component {
constructor(props){
  super(props);
}

render(){
  return (
<Router>
    <div className="App">
 
      <Switch location = {this.props.location}>
        <Route path="/" exact component ={Welcome}/>
        <Route path="/form" component = {Form}/>
        <Route path = "/thanks" component = {Thanks}/>
      </Switch> 

    </div>
 </Router>
  );
}
}

export default App ;
