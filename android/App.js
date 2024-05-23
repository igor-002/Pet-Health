import React, { Component } from "react";
import { View, Image, StyleSheet, Text, TextInput, Pressable } from "react-native";

class App extends Component {
  render() {
    return (

      <View style={styles.container}>



        <View >
          <Image source={require('./src/img/logo.svg')} />
        </View>

        <View style={styles.txtlog}>
        <Text style={styles.texto}> Login  </Text>
        </View>

        <View style={styles.container_login} >

 

          <TextInput
            style={styles.input}
            placeholder="Informe o e-mail "
            keyboardType="email-address"
            autoCompleteType="email"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Digite a senha "
            autoCapitalize="none"
            secureTextEntry
          />




            <View style={styles.bntlogin}>
              <Pressable style={styles.BntCadastro} onPress={() => alert('Seu cadastro foi concluido')}>
                <Text style={styles.botaoTexto}>Login</Text>
              </Pressable>
            </View>

          

          <View style={{ flexDirection: "row",justifyContent:'space-between' }}>


            <Pressable style={styles.BntSenha} onPress={() => alert('nao sei passar de uma tela pra outra desculpa 😥')}>
              <Text style={styles.botaoTexto}>fazer cadatro</Text>
            </Pressable>

            <Pressable style={styles.BntSenha} onPress={() => alert('nao sei passar de uma tela pra outra desculpa 😥')}>
              <Text style={styles.botaoTexto}>Esquei minha senha </Text>
            </Pressable>

          </View>

          <View style={{ flexDirection: "row",}}>

            <Image source={require('./src/img/google.svg')}></Image>


          </View>

        </View>

        






      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#7E57C2',
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal:20
    


  },

  container_login:{
    alignItems:'center'
  
  },

  txtlog:{

    textAlign:'left'
  },

  

  texto: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
  },



  BntCadastro: {
    backgroundColor: '#27AE60',
    marginTop: 20,
    borderRadius: 24,
    paddingVertical:10,

    
  },

  bntlogin:{
    width:350

  },

  BntSenha: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  botaoTexto: {
    textAlign:'center',
    color: '#fff',
    fontSize: 18,
  },
  input: {
    width: 350,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 24,
    marginTop: 10,
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default App;
