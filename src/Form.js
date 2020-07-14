import React from 'react';
import {  Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button ,Label  } from 'reactstrap';
import {  Col, Row } from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
import firebase from 'firebase';
import {withRouter} from 'react-router-dom';


var firebaseConfig = {
    apiKey: "AIzaSyAlMsV_JLDMGJBY2G-09ox8IiUTWTmfLIs",
    authDomain: "recruitement-form.firebaseapp.com",
    databaseURL: "https://recruitement-form.firebaseio.com",
    projectId: "recruitement-form",
    storageBucket: "recruitement-form.appspot.com",
    messagingSenderId: "169882003379",
    appId: "1:169882003379:web:a7a75905e361f54949cdc6",
    measurementId: "G-5CMX3R81JF"
  };
  firebase.initializeApp(firebaseConfig);

  var Ref = firebase.database().ref('Submitions');

  function SaveSubmit(name,telnum,email,github,subdomainT,subdomainC,subdomainD,rate,message,why,main,year,branch){
      var newSubmit = Ref.push();
      newSubmit.set({
          name : name,
          telnum : telnum,
          email : email,
          github : github,
          subdomainT : subdomainT,
          subdomainC : subdomainC,
          subdomainD : subdomainD,
          rate : rate,
          message : message,
          why : why,
          main : main,
          year : year,
          branch : branch
        
      });
  }



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Form extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            name : '',
            telnum : '',
            email : '',
            github : '',
            tech : false,
            corp : false,
            des : false,
            subdomainT : 'None',
            subdomainC : 'None',
            subdomainD : 'None',
            main : 'None',
            rate : '5',
            message : '',
            why : '',
            year : '2',
            branch : '',
        
            
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.tech = this.tech.bind(this);
        this.des = this.des.bind(this);
        this.corp = this.corp.bind(this);
      
    }

   
   
    handleSubmit(values) {

      
        var N = this.state.name;
        var T = this.state.telnum;
        var E = this.state.email;
        var G = this.state.github;
        var Tech = this.state.subdomainT;
        var Corp = this.state.subdomainC;
        var Des = this.state.subdomainD;
        var R = this.state.rate;
        var M = this.state.message;
        var W = this.state.why;
        var Main = this.state.main;
        var Y = this.state.year;
        var B = this.state.branch;
        
      


        SaveSubmit(N,T,E,G,Tech,Corp,Des,R,M,W,Main,Y,B);
       
        this.props.history.push('/thanks');
       // window.location.reload(false);

     

        
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    fileUpload(e){
       const File = e.target.files[0];
       const storage = firebase.storage().ref('Resumes');
       const fileRef = storage.child(File.name);
       fileRef.put(File);
    }

    tech(e){
        this.setState({
            tech : !this.state.tech,
            
        })
    }
    corp(e){
        this.setState({
            corp : !this.state.corp
        })
    }
    des(e){
        this.setState({
            des : !this.state.des
        })
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
                 
                       Recruitments
                        <hr className="my-4"></hr>
                        2020-21
                   

                    </h1>
               
         
     </Jumbotron>

            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            <Row className="form-group mt-3 mb-3">
                        <Label htmlFor="name" className="font-weight-bold" md={2}>Name</Label>
                        <Col md={10}>
                            <Control.text model=".firstname" id="name" name="name"
                            onChange = {this.handleChange}
                            value = {this.state.name}
                                placeholder="Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".firstname"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    minLength: '| Must be greater than 2 characters ',
                                    maxLength: '| Must be 15 characters or less '
                                }}
                             />
                        </Col>
                    </Row>
                  
                    <Row className="form-group mt-3 mb-3">
                    <Label htmlFor="year" className="font-weight-bold"  md={2}>Year of College</Label>
                    <Col md={10}>
                      
                               <Control.select model=".year" name="year" id="year"
                                onChange = {this.handleChange}
                                value = {this.state.year}
                                className="form-control custom-select">
                                   
                                   <option>2</option>
                                   <option>3</option>
                                   <option>4</option>
                                   
                                  
                               </Control.select>
                               <Errors
                                className="text-danger"
                                model=".year"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                
                                }}
                               />
                         </Col>
                       </Row>
                       <Row className="form-group mt-3 mb-3">
                        <Label htmlFor="branch" className="font-weight-bold" md={2}>Branch and Specialization</Label>
                        <Col md={10}>
                            <Control.text model=".branch" id="branch" name="branch"
                             onChange = {this.handleChange}
                             value = {this.state.branch}
                                placeholder="CSE Core"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".branch"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                
                                }}
                             />
                        </Col>
                    </Row>

                    <Row className="form-group mt-3 mb-3">
                        <Label htmlFor="telnum" className="font-weight-bold" md={2}>Mobile Number</Label>
                        <Col md={10}>
                            <Control.text model=".telnum" id="telnum" name="telnum"
                             onChange = {this.handleChange}
                             value = {this.state.telnum}
                                placeholder="Number"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".telnum"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    minLength: '| Must be greater than 2 numbers ',
                                    maxLength: '| Must be 15 numbers or less ',
                                    isNumber: '| Must be a number'
                                }}
                             />
                        </Col>
                    </Row>
                    <Row className="form-group mt-3 mb-3">
                        <Label htmlFor="email" className="font-weight-bold" md={2}>Email ID</Label>
                        <Col md={10}>
                            <Control.text model=".email" id="email" name="email"
                             onChange = {this.handleChange}
                             value = {this.state.email}
                                placeholder="Email"
                                className="form-control"
                                validators={{
                                    required, validEmail
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    validEmail: '| Invalid Email Address '
                                }}
                             />
                        </Col>
                    </Row>
                    <Row className="form-group mt-3 mb-3">
                        <Label htmlFor="github" className="font-weight-bold" md={2}>GitHub ID</Label>
                        <Col md={10}>
                            <Control.text model=".github" id="github" name="github"
                             onChange = {this.handleChange}
                             value = {this.state.github}
                                placeholder="Github ID"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".github"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                
                                }}
                             />
                        </Col>
                    </Row>

                    <Row className="form-group mt-3 mb-3">
                        <Label htmlFor="upload" className="font-weight-bold" md={2}>Resume</Label>
                        <Col md={7}>
                            <Control.file model=".upload" id="ipload" name="upload"
                            
                                onChange = {this.fileUpload}
                               
                                className="form-control"
                                validators={{
                                    required
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".upload"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                
                                }}
                             />
                        </Col>
                        
                    </Row>

                    <Row className="form-group mt-3 mb-3">
                    <Label htmlFor="domain" className="font-weight-bold mb-2"  md={2}>Domain Name</Label>
                   
                    <div class="custom-control custom-switch  pt-2"> 
                        <div className="col-10 col-sm">
                            <Control.checkbox model=".tech" name="tech" id="tech"
                            onChange = {this.tech , this.handleChange}
                       
                            className="form-control custom-control-input">   
                            </Control.checkbox><Label className="custom-control-label" htmlFor="tech"> Technical</Label> 
                        </div>
                    </div>

                    <div class="custom-control custom-switch pt-2"> 
                    <div className="col-12 col-sm">
                    <Control.checkbox model=".corp" name="corp" id="corp"
                      onChange = {this.corp , this.handleChange}
               
                    className="form-control custom-control-input">
                       
                    </Control.checkbox><Label className="custom-control-label" htmlFor="corp"> Corporate</Label>
                   </div>
                   </div>

                   <div class="custom-control custom-switch pt-2"> 
                    <div className="col-12 col-sm">
            
                    <Control.checkbox model=".des" name="des" id="des"
                       onChange = {this.des  , this.handleChange}
                 
                    className="form-control custom-control-input">
                       
                    </Control.checkbox><Label className="custom-control-label" htmlFor="des"> Design and Creatives</Label>
                   </div>
                   </div>
                   
                   
                    </Row>
                    {
                        this.state.tech ?
                        <Row className="form-group mt-3 mb-3">
                   
                        <Label htmlFor="subdomain1" className="font-weight-bold"  md={2}>Sub Domain(Technical)</Label>
                        <Col md={10}>
                        
                                <Control.select model=".subdomainT" name="subdomainT" id="subdomainT"
                                 onChange = {this.handleChange}
                                 value = {this.state.subdomainT}
                                 validators={{
                                    required
                                }}
                                    className="form-control custom-select">
                                         <option>None</option>
                                    <option>App/Web Development</option>
                                    <option>Data Science</option>
                                    <option>Competetive Coding</option>
                                  
                                </Control.select>
                                <Errors
                                className="text-danger"
                                model=".subdomainT"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                
                                }}
                             />
                          </Col>
                        </Row> : null

                    }
                   {
                       this.state.corp ?
                       <Row className="form-group mt-3 mb-3">
                   
                       <Label htmlFor="subdomain2" className="font-weight-bold"  md={2}>Sub Domain(Corporate)</Label>
                       <Col md={10}>
                       
                               <Control.select model=".subdomainC" name="subdomainC" id="subdomainC"
                                onChange = {this.handleChange}
                                value = {this.state.subdomainC}
                                validators={{
                                    required
                                }}
                                   className="form-control custom-select">
                                    <option>None</option>
                                   <option>Sponsorship</option>
                                   <option>Marketing</option>
                                   <option>Event Management</option>
                                  
                               </Control.select>
                               <Errors
                                className="text-danger"
                                model=".subdomainC"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                
                                }}
                             />
                         </Col>
                       </Row>
                       : null
                   }
                    {
                       this.state.des ?
                       <Row className="form-group mt-3 mb-3">
                   
                       <Label htmlFor="subdomain3" className="font-weight-bold"  md={2}>Sub Domain(Design and Creatives)</Label>
                       <Col md={10}>
                       
                               <Control.select model=".subdomainD" name="subdomainD" id="subdomainD"
                                onChange = {this.handleChange}
                                value = {this.state.subdomainD}
                                validators={{
                                    required
                                }}
                                   className="form-control custom-select">
                                    <option>None</option>
                                   <option>Content Writing</option>
                                   <option>Video Editing</option>
                                   <option>Graphic Designing</option>
                                  
                               </Control.select>
                               <Errors
                                className="text-danger"
                                model=".subdomainD"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                
                                }}
                             />
                         </Col>
                       </Row>
                       : null
                   }
                   <Row className="form-group mt-3 mb-3">
                   
                   <Label htmlFor="main" className="font-weight-bold"  md={2}>Main Preference</Label>
                   <Col md={10}>
                   
                           <Control.select model=".main" name="main" id="main"
                            onChange = {this.handleChange}
                            value = {this.state.main}
                            validators={{
                                required
                            }}
                               className="form-control custom-select">
                               <option>None</option>
                               <option>Technical</option>
                               <option>Corporate</option>
                               <option>Design and Creatives</option>
                              
                           </Control.select>
                           <Errors
                                className="text-danger"
                                model=".main"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                
                                }}
                             />
                     </Col>
                   </Row>
                  
                    <Row className="form-group mt-3 mb-3">
                    <Label htmlFor="rate" className="font-weight-bold"  md={2}>Rate : Your Experience in the selected domain</Label>
                    <Col md={10}>
                      
                               <Control.select model=".rate" name="rate" id="rate"
                                onChange = {this.handleChange}
                                value = {this.state.rate}
                                validators={{
                                    required
                                }}
                                   className="form-control custom-select">
                                   <option>1</option>
                                   <option>2</option>
                                   <option>3</option>
                                   <option>4</option>
                                   <option>5</option>
                                  
                               </Control.select>
                               <Errors
                                className="text-danger"
                                model=".rate"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                
                                }}
                             />
                         </Col>
                       </Row>
                    <Row className="form-group mt-3 mb-3">
                        <Label htmlFor="message" className="font-weight-bold" md={2}>About You</Label>
                        <Col md={10}>
                            <Control.textarea model=".message" id="message" name="message"
                             onChange = {this.handleChange}
                             value = {this.state.message}
                                rows="12"
                                className="form-control"
                                validators={{
                                    required
                                }} />
                                  <Errors
                                className="text-danger"
                                model=".message"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                
                                }}
                             />
                        </Col>
                    </Row>
                    <Row className="form-group mt-3 mb-3">
                        <Label htmlFor="why" className="font-weight-bold" md={2}>Why do you want to join CodeChef SRM?</Label>
                        <Col md={10}>
                            <Control.textarea model=".why" id="why" name="why"
                             onChange = {this.handleChange}
                             value = {this.state.why}
                                rows="12"
                                className="form-control" 
                                validators={{
                                    required
                                }}/>
                                  <Errors
                                className="text-danger"
                                model=".why"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                
                                }}
                             />
                        </Col>
                    </Row>

               
                        <Row className="form-group mt-3 mb-3">
                        <Col md={{size:10, offset: 2}}>
                            <Button onClick={this.handleSubmit} color="primary">
                           Submit
                            </Button>
                        </Col>
                         </Row>
                      

                  
                </LocalForm>
             
           </div>
            
        );
    }
}

export default withRouter(Form) ;