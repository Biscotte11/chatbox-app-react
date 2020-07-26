import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Connexion extends Component {

 state = {
 pseudo: '', 
 goRoute: false
 }

 handleChange = event => {
  const pseudo = event.target.value
  this.setState({ pseudo })
 }

 handleSubmit = event => {
  event.preventDefault()
  this.setState({ goRoute: true })
 }

    render() {

        if (this.state.goRoute === true) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }

            return (
            <div className="connexionBox">
               <form className="connexion" onSubmit={this.handleSubmit}>
               <input type="text" placeholder="pseudo" 
               value={this.state.pseudo}
               onChange={this.handleChange}
               required
               />
               <button type="submit">Envoyer</button>
               </form> 
            </div>
        );
    }
}

export default Connexion;
