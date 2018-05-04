import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
  Image
} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome'
const {width, height} = Dimensions.get('window')
const shows_first = [
  {
      key: 1,
      name:'Suits',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg'
  },
  {
      key: 2,
      name:'Modern Family',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg'
  },
  {
      key: 3,
      name:'The Flash',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg'
  },
  {
      key: 4,
      name:'Supergirl',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg'
  },
    {
      key: 5,
      name: 'Deception',
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/147/367898.jpg'
    },
    {
      key: 6,
      name: 'The Walking Dead',
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/136/340444.jpg'
    }
]
const shows_second = [
    {
      key: 7,
      name: 'Siren',
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/146/365393.jpg'
    },
    {
      key: 8,
      name: 'The Magicians',
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/136/342489.jpg'
    },
    {
      key: 9,
      name: 'Game of Thrones',
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/143/359013.jpg'
    },
    {
      key: 10,
      name: 'Knight Squad',
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/146/366699.jpg'
    },
    {
      key: 11,
      name: 'Dragon Ball Super',
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/12/32185.jpg'
    },
    {
      key: 12,
      name: 'Stranger Things',
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/132/330543.jpg'
    }
]

class Search extends Component {
  constructor(props){
    super(props)
      this.state={
        text: "",
        data: ""
      }
  }
  filter(text){
      const newData = shows_first.filter(function(item){
          const itemData = item.name.toUpperCase()
          const textData = text.toUpperCase()
          return itemData.indexOf(textData) > -1
      })
      this.setState({
        data: newData,
        text: text
      })
  }
  deleteData(){
    this.setState({text: '', data: ''})
  }
  _renderItem(item){
    return(
      <Image key={item.key} style={styles.image} source={{uri: item.image}}/>
    )
  }
  render() {
    console.log('nada');
    return(
      <View style={styles.container}>
          <View style={styles.header}>
              <Icon
                name='search'
                color='grey'
                size={18}
                style={styles.searchIcon}
              />
              <TextInput
                value={this.state.text}
                onChangeText={(text) => this.filter(text)}
                style={styles.input}
                placeholder="Search"
                placeholderTextColor="grey"
                keyboardAppearance= "dark"
                autoFocus={true}
              />
              {this.state.text ?
              <TouchableWithoutFeedback onPress={() => this.deleteData()}>
                  <Icon
                    name='times-circle'
                    color='grey'
                    size={18}
                    style={styles.iconInputClose}
                  />
              </TouchableWithoutFeedback>
              : null}
              <TouchableWithoutFeedback style={styles.cancelButton} onPress={() => this.props.navigator.pop()}>
                  <View style={styles.containerButton}>
                      <Text style={styles.cancelButtonText}>Cancel</Text>
                  </View>
              </TouchableWithoutFeedback>
          </View>
          <ScrollView>
              <FlatList
                  style={{marginHorizontal: 5}}
                  data={this.state.data}
                  numColumns={3}
                  columnWrapperStyle={{marginTop:5}}
                  renderItem={({item}) => this._renderItem(item)}
              />
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#181818'
  },
  header : {
    height : 45,
    backgroundColor: '#181818',
    borderBottomWidth: 1,
    borderColor: '#3a3a3a',
    paddingBottom: 5,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  input : {
      width: width - (width / 4),
      height: 40,
      backgroundColor: '#323232',
      marginHorizontal: 10,
      paddingLeft: 30,
      borderRadius: 3
  },
  cancelButtonText : {
    color: 'white'
  },
  searchIcon :{
    position: 'absolute',
    top: 8,
    left: 15,
    zIndex:1,
    backgroundColor:'transparent'
  },
  iconInputClose:{
    position: 'absolute',
    right: 85,
    top:8
  },
  image : {
    marginRight: 5,
    width: 115,
    height:170
  }
})
export default Search
