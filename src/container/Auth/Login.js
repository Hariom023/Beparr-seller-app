import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

import images from '../../themes/images';
import strings from '../../themes/strings';
import FunctionUtils from '../../utils/FunctionUtils';
const Login = ({navigation}) => {
  const [Email, setEmail] = useState('abc12@gmail.com');
  const [password, setpassword] = useState('');
  // console.warn(Email);
  const [seePassword, setseePassword] = useState(true);

  const handleLogin = () => {
    if (Email === '' || password === '') {
      console.warn('Please Enter both email and password.');
      return;
    } else if (!FunctionUtils.validateEmail('abc12@gmail.com')) {
      console.warn('Error', 'Please enter a valid email address');
      return;
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.beparr_logo_app} />

      <Text style={styles.head}>{strings.loginHead}</Text>

      <View style={styles.inputView}>
        <Image style={styles.Icon} source={images.profile_Icon} />

        <TextInput
          style={styles.TextInput}
          placeholder={strings.loginHead}
          placeholderTextColor="#003f5c"
          onChangeText={Email => setEmail(Email)}
        />
      </View>
      {/* {validateEmail ? (
        <Text>wrong format email</Text>
      ) : (
        <Text>email success</Text>
      )} */}

      <View style={styles.inputView}>
        <Image style={styles.Icon} source={images.password_Icon} />
        <TextInput
          style={styles.TextInput}
          placeholder={strings.password}
          placeholderTextColor="#003f5c"
          secureTextEntry={seePassword}
          onChangeText={password => setpassword(password)}
        />

        <TouchableOpacity
          style={styles.hideShow_pass_Icon}
          onPress={() => {
            setseePassword(!seePassword);
          }}>
          <Image
            style={styles.hideShow_pass_Icon}
            source={
              seePassword
                ? images.hide_password_Icon
                : images.Show_password_Icon
            }
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.forgotBtn}
        onPress={() => navigation.navigate('Otp')}>
        <Text style={styles.forgotText}>{strings.forgot_pass} ?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signinBtn}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signinText}>{strings.create_account}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginbtn} onPress={handleLogin}>
        <Text style={styles.loginText}>{strings.loginHead}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {},
  image: {
    height: '20%',
    width: '30%',
    marginVertical: '5%',
    marginLeft: '35%',
    borderRadius: 150,
  },
  head: {
    fontSize: 35,
    color: '#000000',
    marginVertical: 20,
    marginLeft: 22,
  },
  inputView: {
    flexDirection: 'row',

    backgroundColor: '#f5f5f5',
    // to show the place holder in center
    // alignItems: 'flex-end',
    // justifyContent:'space-evenly',
    marginVertical: 15,
    height: 60,
    width: ' 90%',

    marginLeft: 25,
    borderWidth: 0,
    borderColor: '#dcdcdc ',
    borderRadius: 10,
    // padding:10,
  },
  TextInput: {
    marginLeft: 20,
    fontSize: 15,
  },
  forgotBtn: {
    marginLeft: '65%',
  },
  forgotText: {
    fontSize: 15,
    color: '#0000cd',
  },
  signinBtn: {
    marginLeft: '55%',
  },
  signinText: {
    fontSize: 18,

    color: '#0000cd',
    marginVertical: 10,
  },
  loginbtn: {
    height: 60,
    width: '90%',
    backgroundColor: '#000080',
    marginLeft: '5%',
    marginVertical: '10%',

    borderColor: '#000000 ',
    borderRadius: 15,
  },
  loginText: {
    textTransform: 'capitalize',
    color: `#f5f5f5`,
    fontSize: 19,

    marginLeft: '40%',
    padding: 15,
    // borderColor: '#000000 ',
  },

  Icon: {
    height: 32,
    width: 35,
    marginLeft: 10,
    marginTop: 15,
    borderRadius: 20,
  },

  hideShow_pass_Icon: {
    marginRight: 10,
    marginLeft: '45%',
    height: 30,
    width: 30,
    marginTop: 8,
    borderRadius: 20,
  },
});
