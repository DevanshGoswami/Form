import React from 'react';
import {Jumbotron , Button, Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e){

    }

    render(){
        return(
            <div className="container">
                  <Navbar className="navbar navbar-expand-lg">
            <NavbarBrand>
                <img src="https://avatars1.githubusercontent.com/u/11960354?s=400&u=a77c97db3237e61ac0548a9d887f35c74c7e595e&v=4" height="50" width="50" ></img>
                
            </NavbarBrand>
            
        </Navbar>

        <Jumbotron>
            <h1 className="display-4">
                Welcome Chefs!
            </h1>
        </Jumbotron>
        <h4 className="mb-4">We are finally recruiting</h4>
        <h5 className="mb-4 lead">The next page will present you a form which will require you to fill in the following information</h5>
        <div className="d-flex justify-content-center mr-5">
            <ul className="list-gorup">
                <li className="list-group-item">Your Name , Phone Number and Email Address</li>
                <li className="list-group-item">Your LinkedIn and Resume(name it using your full-name)</li>
                <li className="list-group-item">The domain you want to enter , the subdomain and your main preference (You can fill in multiple domains)</li>
                <li className="list-group-item">2 Questions to be answered with atleast 150 words.</li>
            </ul>
        </div>       
        <h5 className="text-danger lead mr-1"><strong>*Note that all these sections must be filled carefully as they will determine the chances of your selection.</strong></h5>
        <h3 className="text-primary mt-3 mb-2 lead"><strong>Best of Luck!</strong></h3>

      
    <Link to="/form" className="btn btn-outline-success btn-lg mt-4 pl-5 pr-5 mb-4">Start</Link>
            </div>
        );
    }
}

export default Welcome ;