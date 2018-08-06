import React, { Component } from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import RoomInfo from '../../components/RoomInfo/RoomInfo';
import TimeFinish from '../../components/TimeFinish/TimeFinish';
import ApptCalendar from '../../components/ApptCalendar/ApptCalendar';

const mapStateToProps = state => ({
    user: state.user,
});

const styles = {
    view: {
        backgroundColor: 'lightgrey',
    },
};

class ApptTimeSelectView extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.view}>
                <ContactInfo className={classes.contact} />
                {/* <RoomInfo className={classes.room} /> */}
                <TimeFinish className={classes.time} />
                <ApptCalendar className={classes.calendar} />
            </div>
        );
    }
}

ApptTimeSelectView.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default compose(withStyles(styles),connect(mapStateToProps))(ApptTimeSelectView);