import './RoomComponent.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';


Room component
var App = React.createClass({
    render() {
      return (
        <div>
          <p>Rating component</p>
          <Rating />
          <p>Rating component (with set value that <strong>can</strong> be changed)</p>
          <Rating rating="2" />
          {/*
          <p>Rating component (with set value that <strong>can't</strong> be changed)</p>
          <Rating rating="1" disabled="true" />
          */}
        </div>
      );
    }
  });
      
  var Rating = React.createClass({
    propTypes: {
      disabled: React.PropTypes.bool
    },
    getInitialState() {
      return {
        rating: this.props.rating || null,
        temp_rating: null
      };
    },
    rate(rating) {
      this.setState({
        rating: rating,
        temp_rating: rating
      });
    },
    star_over(rating) {
      this.state.temp_rating = this.state.rating;
      this.state.rating = rating;
      
      this.setState({
        rating: this.state.rating,
        temp_rating: this.state.temp_rating
      });
    },
    star_out() {
      this.state.rating = this.state.temp_rating;
      
      this.setState({ rating: this.state.rating });
    },
    render() {
      var stars = [];
      
      for(var i = 0; i < 5; i++) {
        var klass = 'star-rating__star';
        
        if (this.state.rating >= i && this.state.rating != null) {
          klass += ' is-selected';
        }
  
        stars.push(
          <label
            className={klass}
            onClick={this.rate.bind(this, i)}
            onMouseOver={this.star_over.bind(this, i)}
            onMouseOut={this.star_out}>
            ●
          </label>
        );
      }
      
      return (
        <div className="star-rating">
          {stars}
        </div>
      );
    }
  });
      
  React.render(<App />, document.querySelector('#app'));