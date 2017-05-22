/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'

// import React, { Component } from 'react';
// import {
//     Text, View,
// } from 'react-native';
import {
    TabNavigator
} from 'react-navigation';

import { TabOneNavigation } from "./tab/TabOneNavigation";
import { TabTwoNavigation } from "./TabTwoNavigation";
import { TabThreeNavigation } from "./TabThreeNavigation";

import { Icon } from "react-native-elements";

//
// tabs
//

const NavTab = TabNavigator(
    // route config
    {
        TabOneRoute: { screen: TabOneNavigation },
        TabTwoRoute: { screen: TabTwoNavigation },
        TabThreeRoute: { screen: TabThreeNavigation },
    },
    // navigator config
    {
        lazy: true, // render the tabs lazily
        tabBarPosition: 'bottom', // where are the tabs shown
        backBehavior: 'none', // back button doesn't take you to the initial tab
        //tabBarOptions: css.tabs,
        // tint color is passed to text and icons (if enabled) on the tab bar
        activeTintColor: 'white',
        inactiveTintColor: 'blue',
        // background color is for the tab component
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'white',
    },
);

export default NavTab;