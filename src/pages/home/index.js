import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { Image } from 'react-native'
import Slider from '@react-native-community/slider'
import { useState } from 'react'
import { ModalPassWord } from '../../assets/components/modal'

let charset = "abcdefghijlmnopqrstuvxzABCDEFGHIJLMNOPQRSTUVXZ123456789"

export function Home() {
  const [size, setSize] = useState(15)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password)
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/WhatsApp Image 2024-02-06 at 16.28.00.jpeg")}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} Carcteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={1}
          maximumValue={30}
          maximumTrackTintColor='#20dbbe'
          minimumTrackTintColor='#20dbd8'
          thumbTintColor='#04ef85'
          value={size}
          onValueChange={(value) => setSize(parseInt(value)) }
        />
      </View>


      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassWord password={passwordValue} handleClose={() => setModalVisible(false)} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: "#20dbbe",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  }
})
