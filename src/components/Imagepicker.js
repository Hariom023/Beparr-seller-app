import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import images from '../themes/images';

const Imagepicker = () => {
  const [imageUri, setImageUri] = useState(null);

  const handleSelectFromGallery = () => {
    const options = {
      title: 'Select Image',
      mediaType: 'photo',
      quality: 0.5,
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (!response.didCancel) {
        setImageUri(response.uri);
      }
    });
  };

  const handleCaptureFromCamera = () => {
    const options = {
      title: 'Capture Image',
      mediaType: 'photo',
      quality: 0.5,
    };

    ImagePicker.launchCamera(options, response => {
      if (!response.didCancel) {
        setImageUri(response.uri);
      }
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {imageUri ? (
        <Image
          source={{uri: imageUri}}
          style={{width: 200, height: 200, marginBottom: 20}}
        />
      ) : null}

      <TouchableOpacity
        onPress={handleSelectFromGallery}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.Icon} source={images.GalleryIcon} />
        <Text>Select from Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleCaptureFromCamera}
        style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Image style={styles.Icon} source={images.GalleryIcon} />
        <Text>Capture from Camera</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Imagepicker;
const styles = StyleSheet.create({
  Icon: {
    height: 60,
    width: 60,
    marginVertical: 20,
    borderRadius: 45,
    marginLeft: '5%',
  },
});
