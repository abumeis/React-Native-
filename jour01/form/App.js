import React from 'react';
import {  StyleSheet, Text, View, TextInput } from 'react-native';
  
  class Form extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        password: '',
      };
    }
  
  
