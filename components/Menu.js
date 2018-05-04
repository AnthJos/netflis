import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image
} from 'react-native'

import Icon  from 'react-native-vector-icons/FontAwesome'
import IonIcons  from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window')

class Menu extends Component {
  render() {
    return(
      <View style={styles.menu}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarImage}>
            <Image
                style={styles.avatar}
                source={require('../images/user.png')}
            />
            <Text style= {styles.text}>Juan Perez</Text>
          </View>
          <Icon
              name='exchange'
              color = 'white'
              size = {25}
          />
        </View>
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.textWithIcon}>
                <View style={styles.withIcon}>
                    <Icon
                        style={styles.iconWithText}
                        name='download'
                        color='white'
                        size={28}
                    />
                    <Text style={styles.text}>Mi Descargas</Text>
                </View>
                <Icon
                    style={styles.rightIcons}
                    name='angle-right'
                    color='white'
                    size={25}
                 />
            </View>
            <View style={styles.textWithIcon}>
                <View style={styles.withIcon}>
                    <IonIcons
                        style={styles.iconWithText}
                        name='md-checkmark'
                        color='white'
                        size={28}
                    />
                    <Text style={styles.text}>Mi Listas</Text>
                </View>
                <Icon
                    style={styles.rightIcons}
                    name='angle-right'
                    color='white'
                    size={25}
                 />
            </View>
            <View style={[styles.item, styles.itemSelected]}>
                <Text style={styles.text}>Home</Text>
            </View>
            <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Available for download</Text>
            </View>
            <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Netflix original</Text>
            </View>
            <View style={styles.noSelectedItems}>
                <Text style={styles.text}>TV Shows</Text>
            </View>
            <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Action & Adventure</Text>
            </View>
            <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Children & Family Movies</Text>
            </View>
            <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Comedies</Text>
            </View>
            <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Documentaries</Text>
            </View>
            <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Dramas</Text>
            </View>
            <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Independent Movies</Text>
            </View>
            <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Indian Movies</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    menu: {
      flex: 1,
      width: width,
      height: height,
      backgroundColor: '#191919'
    },
    avatarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: width / 2 + 50,
      borderColor: '#000',
      borderBottomWidth: 3,
      paddingHorizontal: 20,
      paddingVertical: 20
    },
    avatar:{
      width : 60,
      height : 60,
      marginRight: 20
    },
    avatarImage:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    text:{
      color:'#b3b3b3',
      fontSize: 14
    },
    textWithIcon:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 20,
      borderColor: '#000',
      borderBottomWidth: 3
    },
    withIcon:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    scrollContainer:{
      width: width / 2 + 50,
    },
    rightIcons:{
      paddingRight: 20
    },
    iconWithText:{
      marginRight:10,
      paddingLeft:20
    },
    item:{
      paddingVertical: 15,
      paddingLeft: 20,
      marginTop: 5
    },
    itemSelected:{
      borderLeftWidth: 5,
      borderColor: 'red'
    },
    noSelectedItems:{
      paddingVertical: 10,
      paddingLeft: 25,
      marginTop:5
    }
})

export default Menu