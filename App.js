/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import SideMenu from 'react-native-side-menu'

import List from './components/List'
import Slide from './components/Slider'
import Header from './components/Header'

import Menu from './components/Menu'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }
  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateMenu(isOpen){
    this.setState({isOpen})
  }
  render() {
    return (
      <View style={[{flex: 1}, styles.container]}>
        <SideMenu
            menu={<Menu />}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenu(isOpen)}
          >
            <Header navigator={this.props.navigator} toggle={this.toggle.bind(this)}/>
            <ScrollView style={styles.scrollFull}>
                  <Slide/>
                  <List navigator={this.props.navigator}/>
            </ScrollView>
        </SideMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  scrollFull:{
    backgroundColor:'#191919'
  }
})

export default App
