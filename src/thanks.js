import React from 'react';
import {Navbar,NavbarBrand, Jumbotron} from 'reactstrap';


class Thanks extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
         <div className = "container">
                 <Navbar className="navbar navbar-expand-lg">
            <NavbarBrand>
                <img src="https://avatars1.githubusercontent.com/u/11960354?s=400&u=a77c97db3237e61ac0548a9d887f35c74c7e595e&v=4" height="50" width="50" ></img>
                
            </NavbarBrand>
        </Navbar>

        </div>
        
            <Jumbotron>
             <h1 className = "text-success display-4">
                 Your Form was successfully submitted <span className="fa fa-thumbs-up fa-lg"></span>
             </h1>
             </Jumbotron>
            
             <div className = "container">
             
             <p className="lead">You'll shortly be contacted by us in a few days based on your submition</p>
            

             <h4>Go checkout our social media handles</h4>
            <div className = "row row-content bg bg-light mt-4 pt-2 pb-2 pr-2 pl-2">
                <div className="col-12 col-md-3 mt-2 mb-2"><a href = "https://www.instagram.com/codechefsrm/"><span className = "fa fa-instagram fa-3x"></span><span className="d-none d-sm-block">Instagram</span></a></div>
                <div className="col-12 col-md-3 mt-2 mb-2"><a href = "https://www.facebook.com/CodeChefSRM"><span className = "fa fa-facebook fa-3x"></span><span className="d-none d-sm-block"> Facebook</span></a></div>
                <div className="col-12 col-md-3 mt-2 mb-2"><a href = "https://twitter.com/CodeChefSRM"><span className = "fa fa-twitter fa-3x"></span><span className="d-none d-sm-block"> Twitter</span></a></div>
                <div className="col-12 col-md-3 mt-2 mb-2"><a href = "https://www.linkedin.com/company/ccscsrm/"><span className = "fa fa-linkedin fa-3x"></span><span className="d-none d-sm-block"> LinkedIn</span></a></div>
            </div>
            <h5 className="mt-4">For any doubts contact us</h5>

            <a href = "mailto: codechefsrm@gmail.com" className="btn btn-outline-danger btn-lg mt-2 mb-2 pl-2 pr-2"><span className="fa fa-envelope fa-lg"></span> Send Email</a>
         </div>  
         </div>
        );
    }
}
export default Thanks;