import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import images from '../../themes/images';
import strings from '../../themes/strings';
import ImagePicker from 'react-native-image-picker';
import SignatureCaptureScreen from '../../components/SignatureCaptureScreen';
const FirstRoute = ({navigation}) => {
  const [name, setname] = useState(0);
  const [email, setemail] = useState(0);
  const [password, setpassword] = useState(0);
  const [number, setnumber] = useState(0);
  const [seePassword, setseePassword] = useState(true);
  return (
    <View style={styles.firsttab}>
      {/* <Image
        source={images.beparr_logo_app}
        style={{width: 200, height: 200}}
      /> */}
      <Text style={styles.head}> {strings.Manufacturer_details}</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={strings.manufacturer_name}
          placeholderTextColor="#003f5c"
          required
          onChangeText={name => setname(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={strings.email}
          placeholderTextColor="#003f5c"
          required
          onChangeText={email => setemail(email)}
        />
      </View>
      <Text style={styles.pass_guide_text}>{strings.password_guideline}</Text>
      <View style={styles.pass_View}>
        <View style={styles.rowinputView}>
          <TextInput
            style={styles.TextInput}
            placeholder={strings.password}
            placeholderTextColor="#003f5c"
            secureTextEntry={seePassword}
            required
            onChangeText={password => setpassword(password)}
          />
          <TouchableOpacity
            style={styles.hideShow_pass_Icon}
            onPress={() => setseePassword(!seePassword)}>
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
        <View style={styles.rowinputView}>
          <TextInput
            style={styles.TextInput}
            placeholder={strings.number}
            placeholderTextColor="#003f5c"
            required
            onChangeText={number => setnumber(number)}
          />
        </View>
      </View>
      <View style={styles.inputView}>
        <Text>category</Text>
      </View>
      <View style={styles.inputView}>
        <Text>city</Text>
      </View>
      <TouchableOpacity onPress={this.SecondRoute}>
        <View style={styles.nextbtnview}>
          <Text>{strings.next}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const SecondRoute = () => {
  const [GSTnumber, setGSTnumber] = useState(0);
  const [starting_price, setstarting_price] = useState(0);
  const [MaxPrice, setMaxPrice] = useState(0);
  const [MinOrderAmount, setMinOrderAmount] = useState(0);
  console.warn(GSTnumber);
  const [image, setImage] = useState(null);

  const handleImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        setImage(response.uri);
      }
    });
  };

  return (
    <ScrollView>
      <View style={styles.secondtab}>
        <Text style={styles.head}> {strings.GSTdetail}</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder={strings.GSTNumber}
            placeholderTextColor="#003f5c"
            required
            onChangeText={GSTnumber => setGSTnumber(GSTnumber)}
          />
        </View>
        <Text style={styles.head}> {strings.GSTcetificate}</Text>
        <View style={styles.GSTView}>
          {/* upload gst Certificate logic write here */}
          {image && (
            <Image source={{uri: image}} style={{width: 50, height: 50}} />
          )}
          <View style={styles.GSTView}>
            <TouchableOpacity onPress={handleImagePicker}>
              <Image style={styles.Icon} source={images.GalleryIcon} />
            </TouchableOpacity>
            <Text style={{fontSize: 15}}> Or</Text>
            <TouchableOpacity onPress={handleImagePicker}>
              <Image style={styles.Icon} source={images.CameraIconIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.head}> {strings.signature}</Text>
        <View style={styles.signatureView}>
          {/* write signature upload logic here */}
          <Text style={{fontSize: 20, color: 'black'}}>
            {strings.digital_signature}
          </Text>
          <SignatureCaptureScreen />
        </View>
        <View style={styles.pass_View}>
          <View style={styles.rowinputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Starting Price"
              placeholderTextColor="#003f5c"
              required
              onChangeText={starting_price => setstarting_price(starting_price)}
            />
          </View>
          <View style={styles.rowinputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Max Price"
              placeholderTextColor="#003f5c"
              required
              onChangeText={MaxPrice => setMaxPrice(MaxPrice)}
            />
          </View>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Min Order Amount"
            placeholderTextColor="#003f5c"
            required
            onChangeText={MinOrderAmount => setMinOrderAmount(MinOrderAmount)}
          />
        </View>
        <View style={styles.PreviousNextBtnView}>
          <TouchableOpacity>
            <View style={styles.btnview}>
              <Text>{strings.previous}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.btnview}>
              <Text>{strings.next}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const ThirdRoute = () => {
  const [shopname, setshopname] = useState(0);
  const [shopnumber, setshopnumber] = useState(0);
  const [colonyname, setcolonyname] = useState(0);
  const [pincode, setpincode] = useState(0);
  console.warn(shopname);
  return (
    <ScrollView>
      <View style={styles.thirdtab}>
        <Text style={styles.head}> {strings.Pickup_address}</Text>
        <View style={styles.ProfilePicView}>
          <Text style={styles.uploadpictext}>{strings.profile_pic}</Text>
          {/* upload select profile pic logic write here */}
          <View style={styles.profile_picIcon}>
            <TouchableOpacity>
              <Image style={styles.Icon} source={images.GalleryIcon} />
            </TouchableOpacity>
            <Text style={{fontSize: 15}}> Or</Text>
            <TouchableOpacity>
              <Image style={styles.Icon} source={images.CameraIconIcon} />
            </TouchableOpacity>
          </View>
          {/* here end the logic */}
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder={strings.Company_Name}
            placeholderTextColor="#003f5c"
            required
            onChangeText={shopname => setshopname(shopname)}
          />
        </View>
        <View style={styles.pass_View}>
          <View style={styles.rowinputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Shop Name"
              placeholderTextColor="#003f5c"
              required
              onChangeText={shopname => setshopname(shopname)}
            />
          </View>
          <View style={styles.rowinputView}>
            <TextInput
              style={styles.TextInput}
              placeholder={strings.shopnumber}
              placeholderTextColor="#003f5c"
              required
              onChangeText={shopnumber => setshopnumber(shopnumber)}
            />
          </View>
        </View>
        <View style={styles.pass_View}>
          <View style={styles.rowinputView}>
            <TextInput
              style={styles.TextInput}
              placeholder={strings.colonyname}
              placeholderTextColor="#003f5c"
              required
              onChangeText={colonyname => setcolonyname(colonyname)}
            />
          </View>
          <View style={styles.rowinputView}>
            <TextInput
              style={styles.TextInput}
              placeholder={strings.landmark_name}
              placeholderTextColor="#003f5c"
              required
            />
          </View>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder={strings.pincode}
            placeholderTextColor="#003f5c"
            required
            onChangeText={pincode => setpincode(pincode)}
          />
        </View>
        <View style={styles.inputView}>
          <Text>state</Text>
        </View>
        <View style={styles.inputView}>
          <Text>city</Text>
        </View>

        <View style={styles.PreviousNextBtnView}>
          <TouchableOpacity>
            <View style={styles.btnview}>
              <Text>{strings.previous}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.btnview}>
              <Text>Save Details</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: FirstRoute,
  2: SecondRoute,
  3: ThirdRoute,
});

export default function Signup() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Supplier Details'},
    {key: '2', title: 'GST Details'},
    {key: '3', title: 'Pickup Address'},
  ]);

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        tabStyle={styles.tabStyle}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    marginTop: 30,
  },
  TabView: {},
  // for first tab design
  firsttab: {
    flex: 1,
    backgroundColor: '#f0fff0',
  },
  pass_View: {
    flexDirection: 'row',
  },
  rowinputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    // to show the place holder in center
    // alignItems: 'flex-end',
    // justifyContent:'space-evenly',
    marginVertical: 15,
    height: 60,
    width: ' 45%',
    padding: 10,
    marginLeft: '3%',
    borderWidth: 0,
    borderColor: '#dcdcdc ',
    borderRadius: 15,
  },
  nextbtnview: {
    height: 45,
    width: '90%',
    borderColor: '#0000cd',
    borderWidth: 1,
    alignItems: 'center',
    // padding: 5,
    justifyContent: 'center',
    marginLeft: '3%',
    borderRadius: 10,
  },

  head: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    color: '#00008b',
    marginLeft: '3%',
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
    padding: 12,
    marginLeft: 25,
    borderWidth: 0,
    borderColor: '#dcdcdc ',
    borderRadius: 10,
    // padding:10,
  },

  TextInput: {
    fontSize: 15,
  },
  pass_guide_text: {
    color: '#0000cd',
    alignSelf: 'center',
  },
  hideShow_pass_Icon: {
    marginRight: 10,

    height: 20,
    width: 20,
    marginTop: 5,
    borderRadius: 20,
  },

  //for second tab design
  secondtab: {
    flex: 1,
    backgroundColor: '#f0fff0',
  },
  GSTView: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    // to show the place holder in center
    // alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    height: 120,
    width: ' 90%',
    marginLeft: '5%',
    borderWidth: 0,
    borderColor: '#dcdcdc ',
    borderRadius: 10,
  },
  signatureView: {
    // flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: 10,
    marginVertical: 20,
    height: 220,
    width: ' 91%',
    margintop: 10,
    marginLeft: '5%',
    borderWidth: 0,
    borderColor: '#dcdcdc ',
    borderRadius: 10,
    // padding:10,
  },

  btnview: {
    height: 40,
    width: 120,
    color: '#f8f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0000cd',
    borderRadius: 10,
  },
  PreviousNextBtnView: {
    height: 100,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // alignItems: 'center',
    marginLeft: '5%',
    marginVertical: 40,
  },
  Icon: {
    height: 60,
    width: 60,
    marginVertical: 20,
    borderRadius: 45,
    marginLeft: '5%',
  },

  //for third tab design
  profile_picIcon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  thirdtab: {
    flex: 1,
    backgroundColor: '#f0fff0',
  },
  ProfilePicView: {
    // flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    // to show the place holder in center
    // alignItems: 'flex-end',
    // justifyContent:'space-evenly',
    marginVertical: 15,
    height: 120,
    width: ' 90%',
    padding: 12,
    marginLeft: 25,
    borderWidth: 0,
    borderColor: '#dcdcdc ',
    borderRadius: 10,
    // padding:10,
  },
  uploadpictext: {
    fontSize: 18,
    color: '#000000',
  },
  tabStyle: {
    backgroundColor: 'white',
  },
});
