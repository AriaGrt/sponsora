import React, {Component} from 'react'
import './HeaderPopup.css'
import {Divider} from 'semantic-ui-react'

export default class HeaderPopup extends Component{
  render(){
    return(
      <div id='header-popup'>
        <h4>REGISTER</h4>
          <div className="ui buttons">
            <button className="ui button">Sponsor</button>
            <div className="or" data-text="-"></div>
            <button className="ui button">Sponsee</button>
          </div>
          <Divider horizontal inverted>Or</Divider>
          <button className="ui inverted button">Log In</button>
      </div>
    )
  }
}
