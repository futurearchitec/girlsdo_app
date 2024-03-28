import { FunctionComponent } from "react"
import { View, StyleSheet, Text, ImageBackground, Pressable } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

type NavigationProps = {
  navigationCallback: React.Dispatch<React.SetStateAction<string>>,
}

export const WelcomeMenu: FunctionComponent<NavigationProps> = ({ navigationCallback }) =>
  <View style={styles.container}>
    <ImageBackground source={require('../../assets/icon.png')} resizeMode="center" style={styles.image}>
      <Pressable style={styles.button} onPress={() => { navigationCallback('Create'); }}>
        <Text style={styles.buttontext}>Neues ToDo anlegen</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => { navigationCallback('List'); }}>
        <Text style={styles.buttontext}>Meine ToDo Übersicht</Text>
      </Pressable>
    </ImageBackground>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  buttontext: {
    color: 'white',
    fontSize: 28,
    lineHeight: 64,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingVertical: 12,
    //paddingHorizontal: 32,
    marginTop: 10,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'purple',
  },
});
