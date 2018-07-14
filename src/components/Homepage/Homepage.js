import React, {Component} from 'react'
import './Homepage.css'
import { Button, Header } from "semantic-ui-react"
import HeaderPopup from "../HeaderPopup/HeaderPopup"
import {toggleHeaderPopupAction} from "../../actions/index"
import {connect} from "react-redux"

class Homepage extends Component{
  render(){
    return(
      <div>
        <section id="header">
          <img id="sponsora-logo" src="logo.png" alt="Sponsora Logo"/>
          <span onClick={this.props.togglePopup}>
            <i className="fa fa-user user-header-icon" ></i>
          </span>
      </section>
        { this.props.popupToggled === true ? (<HeaderPopup/>) : null}
        <section id="first-section">
          <div className="container">
            <h1 className="ui header" id="homepage-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget ultricies nisl. </h1>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  popupToggled: state.header.headerPopupToggled
})

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(toggleHeaderPopupAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
