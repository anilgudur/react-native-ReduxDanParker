/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import NavTab from "./src/app";

const weatherApp = () => {
  return (
    <NavTab />
  );
}

AppRegistry.registerComponent('ReduxDanParker', () => weatherApp);