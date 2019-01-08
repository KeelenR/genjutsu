import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './SignIn.css';


class SignIn extends React.Component {
 constructor(){
     super();


     this.state = {
         isLoggedIn: false,
         userID: '',
         name: '',
         email: '',
         picture: ''
     }

     const methods = [
        'componentClicked',
        'responseFacebook',
        'profileClicked'
    ]

    methods.forEach(method => (this[method] = this[method].bind(this)));

 }

    profileClicked(){
        const { name } = this.state
        console.log(`Hello ${name}, personalized features will be coming soon :)`)
    }

    componentClicked() {
        console.log('im clicked')
    }

    responseFacebook(response) {
       this.setState({
           isLoggedIn: true,
           userID: response.userID,
           name: response.name,
           email: response.email,
           picture: response.picture.data.url
       });
    }

    render() {
        const { isLoggedIn, picture, name } = this.state;
        let FbContent;

        if (isLoggedIn) {
            FbContent = (
                <div>
                    <img 
                    src={picture} 
                    alt={name} 
                    className="Logged-in" 
                    onClick={this.profileClicked}
                    />
                </div>
            );
        } else {
            FbContent =(
                <FacebookLogin
                appId="357344211717315"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            );
        }

        return (
            <div>{FbContent}</div>
        );
    }
} 

export default SignIn;