import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Root } from './Root';
import { authorization } from '../modules/authorization';

export let navigationDispatchService;

class AppNavigator extends Component {
    componentDidMount() {
        console.log('enter');
        const { dispatch } = this.props;
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        dispatch(authorization());
        navigationDispatchService = dispatch;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    /**
     * Function to update Navigation
     */

    /**
     * Method calls on android hardware back press.
     * Dispatched to previous screen if available.
     */
    onBackPress = () => {
        // const { dispatch, nav } = this.props;
        // if (nav.index === 0 && (checkUndefinedValues(nav.routes[0].index) ||  nav.routes[0].index === 0)) {
        //     return false;
        // }
        // dispatch(NavigationActions.back());
        // return true;
    };


    render() {
        return (
            <Root />
        );
    }
}

AppNavigator.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppNavigator);
