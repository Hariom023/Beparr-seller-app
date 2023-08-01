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

const Otp = ({navigation}) => {
  const [email, setEmail] = useState(0);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.beparr_logo_app} />

      <Text style={styles.forgotpassHead}>{strings.forgot_pass}</Text>

      <Text style={styles.forgotPassTextShow}>{strings.forgotPassText}</Text>

      <View style={styles.inputView}>
        <Image style={styles.Icon} source={images.profile_Icon} />

        <TextInput
          style={styles.TextInput}
          placeholder={strings.manufacturer_email}
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <TouchableOpacity style={styles.send_otp_btn}>
        <Text style={styles.send_otp_text}>{strings.send}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.back_login_btn}>{strings.Back_to_login}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputView: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    // to show the place holder in center
    // alignItems: 'flex-end',
    // justifyContent:'space-evenly',
    marginVertical: 15,
    height: 70,
    width: ' 90%',
    // marginLeft: 10,
    borderWidth: 0,
    borderColor: '#dcdcdc ',
    borderRadius: 10,
    // padding:10,
  },
  TextInput: {
    fontSize: 15,
  },
  Icon: {
    height: 33,
    width: 35,
    marginLeft: 10,
    marginTop: 15,
    borderRadius: 20,
  },
  image: {
    height: '18%',
    width: '35%',
    borderRadius: 130,
    marginVertical: 50,
  },
  send_otp_btn: {
    height: 60,
    width: '90%',
    backgroundColor: '#000080',

    marginVertical: '10%',
    marginTop: 60,
    borderColor: '#000000 ',
    borderRadius: 15,
  },
  send_otp_text: {
    color: '#f0ffff',
    marginLeft: '45%',
    fontSize: 20,
    marginTop: 10,
  },
  back_login_btn: {
    color: '#0000cd',
    fontSize: 15,
    marginTop: 60,
  },
  forgotPassTextShow: {
    fontSize: 15,
    width: '70%',
    marginRight: '18%',
    marginVertical: 15,
  },
  forgotpassHead: {
    fontSize: 28,
    color: '#000000',
    marginRight: '37%',
  },
});
