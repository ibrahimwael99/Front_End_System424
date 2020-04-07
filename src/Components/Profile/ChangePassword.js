import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Profile.css';
import Footer from '../Footer/Footer.js'
import Navbar from '../Navigation/Navbar.js'

class ChangePassword extends Component {
    constructor() {
        super()
        this.state = {
          user:{},
          successMessage: false,
          failMessgae: false
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/users/1/')
            .then(res => {
              this.setState({user: res.data})
            })
        this.setState(()=> ({ 
            successMessage: false,
            failMessage: false,
        }))
    }
    changePasswordHandle(currentPassword,newPassword,repeatPassword){
        if(newPassword===repeatPassword)
        {
            axios.put('/me/changePassword',{
                "newPassword": newPassword,
                "passwordConfirmation": currentPassword
            },
            {
                headers: {
                    "authorization": localStorage.getItem("token")
            }
        }
        )   
        .then(res => {
            if(res.data.status === 204 || res.data.status === 200)
            {
                this.setState({
                    successMessage: true,
                    failMessage: false
                })
            }
            else if(res.data.status === 401)
            {
                localStorage.removeItem("loginType");
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("token");
                localStorage.removeItem("userID");
            }
            else{
                this.setState({
                    successMessage: false,
                    failMessage: true
                })
            }

        })
        console.log(localStorage.getItem("loginType"))
            /*console.log('if')
            this.setState(prevState => ({
                user: {                   
                    ...prevState.user,    
                    password: newPassword,
                },
                successMessage: true,
                failMessage: false
            }))*/
        }
        else
        {
            console.log('else')
            this.setState(() => ({
                failMessage: true,
                successMessage: false,
            }))
        }
    };

    render()
    {
        {document.title ="Edit profile - Spotify"}

    return(
        <div className="bg-dark-clr">
            
        
        <div id="change-password" className="container editProfile">
            <div className="row">
                <SideBar img={this.state.user.image}/>
                <div className="col-lg-9 password-section">
                    <div className="password-div">
                        { this.state.successMessage && <div class="alert alert-success">
                        <p>Password changed</p>
                        </div> }
                        { this.state.failMessage && <div class="alert alert-danger">
                        <p>Error</p>
                        </div> }
                        <h1 className="page-header">Change your password</h1>
                        <div className="password-info">  
                        <   div className="current-password">
                                <label className="labels">Current password</label>
                                <input type="password" ref="current" className="current-password-text-box"></input>
                            </div>   
                            <div className="new-password">
                                <label className="labels">New password</label>
                                <input type="password" ref="new" className="new-password-text-box"></input>
                            </div>
                            <div className="repeat-password">
                                <label className="labels">Repeat new Password</label>
                                <input type="password" ref="repeat" className="repeat-password-text-box"></input>
                            </div>
                            <div className="buttons">
                                <Link to="/account-overview" className="cancel-button">CANCEL</Link>
                                <button onClick={()=>{this.changePasswordHandle(this.refs.current.value,this.refs.new.value,this.refs.repeat.value)}}className="btn-sm btn btn-success set-new-password-button">SET NEW PASSWORD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
    }
}

export default ChangePassword;