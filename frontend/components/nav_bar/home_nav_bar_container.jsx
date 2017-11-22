import React from 'react';
import { connect } from 'react-redux';
import HomeNavBar from './home_nav_bar';
import { login } from './../../actions/session';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavBar);