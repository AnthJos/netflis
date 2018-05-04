import React, {Component} from 'react'
import{
  Text,
  View,
  Image,
} from 'react-native'

import Swiper from 'react-native-swiper'

const Slider = props => (
  <Image style={styles.image} source={props.uri}/>
)

const styles = {
  image: {
    flex: 1,
    width:null,
    height: null,
    resizeMode: 'cover'
  }
}

export default class extends Component{
  constructor(props){
    super(props)
    this.state = {
      imagesSlider:[
        require('../images/1.jpg'),
        require('../images/2.jpg'),
        require('../images/3.jpg')
      ]
    }
  }
  render(){
    return(
        <Swiper
          autoplay
          height={200}
          style={{flex:1,justifyContent: 'center',width: null}}
        >
        {
          this.state.imagesSlider.map((item, i) => <Slider
            uri={item}
            key={i}
          />)
        }
        </Swiper>
    )
  }
}
