import React, { useState, useContext } from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import { View, StyleSheet ,Alert} from 'react-native';
import { Title, IconButton } from 'react-native-paper';
import FormInput from '../component/FormInput';
import FormButton from '../component/FormButton';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
// const checkNewUser = () =>{
//   if (password.length < 4)
// }
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Register to chat</Title>
      <FormInput
        labelName='Email'
        value={email}
        autoCapitalize='none'
        onChangeText={userEmail => setEmail(userEmail)}
      />
      <FormInput
        labelName='Password'
        value={password}
        secureTextEntry={true}
        onChangeText={userPassword => setPassword(userPassword)}
      />
      <FormButton
        title='Signup'
        modeValue='contained'
        labelStyle={styles.loginButtonLabel}
        onPress={() => register(email, password) }
      />
      <IconButton
         icon='keyboard-backspace'
        size={30}
        style={styles.navButton}
        color='#6646ee'
        //onPress={() => navigation.navigate('Login')}
        onPress={() => navigation.goBack()}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10
  },
  loginButtonLabel: {
    fontSize: 22
  },
  navButtonText: {
    fontSize: 18
  },
  navButton: {
    marginTop: 10
  }
});