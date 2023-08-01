import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import SignatureCapture from 'react-native-signature-capture';
const SignatureCaptureScreen = () => {
  let signatureRef = null;

  const handleSave = () => {
    if (signatureRef) {
      alert('Signature Captured Successfully.');
      signatureRef.saveImage();
    }
  };

  const handleReset = () => {
    if (signatureRef) {
      signatureRef.resetImage();
    }
  };

  return (
    <View style={styles.SignatureView}>
      <SignatureCapture
        style={styles.Signature}
        ref={ref => (signatureRef = ref)}
        showNativeButtons={false}
      />
      <View style={styles.SignatureContainer}>
        <View style={styles.SaveResetBtn}>
          <TouchableOpacity style={styles.SaveBtn} onPress={handleSave}>
            <Text style={styles.SaveResetBtnText}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SaveResetBtn}>
          <TouchableOpacity style={styles.ResetBtn} onPress={handleReset}>
            <Text style={styles.SaveResetBtnText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignatureCaptureScreen;

const styles = StyleSheet.create({
  Signature: {
    width: 300,
    height: 130,
    marginTop: 10,
    borderColor: 'blue',
    marginLeft: '5%',
    borderWidth: 1,
  },
  SignatureView: {
    marginTop: 0,
  },
  NoteText: {
    fontSize: 15,
    color: 'black',
  },
  SaveBtn: {
    borderColor: '#00ced1',
    color: '#1e90ff',
  },
  SaveResetBtn: {
    flexDirection: 'row',
    height: 35,
    width: 150,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'bleck',
    backgroundColor: '#dcdcdc',
  },
  SaveResetBtnText: {
    fontSize: 20,
    color: '#00008b',
  },
  SignatureContainer: {
    width: 320,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
