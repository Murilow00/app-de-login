import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Container2}>
        <Ionicons name="school" size={40} color="purple" />
      </View>
      
      <Text style={styles.titulo}>Bem vindo de volta</Text>
      <Text style={styles.subtitulo}>Acesse sua conta SENAI</Text>
      
      <Text style={styles.encima}>E-mail</Text>
      <View style={styles.quadrado}>
        <Ionicons name="mail" size={24} color="black" style={styles.iconedentro}/>
        <TextInput 
            style={{flex: 1}} 
            placeholder="seu@email.com" 
        />
      </View>

      <Text style={styles.encima}>Senha</Text>
      <View style={styles.quadrado}>
        <AntDesign name="lock" size={24} color="black" style={styles.iconedentro}/>
        <TextInput 
            style={{flex: 1}} 
            placeholder="*******"
            secureTextEntry={true}
        />
        <AntDesign name="eye" size={24} color="black" style={styles.olho}/>
      </View>

      <Text style={styles.esqueci}>Esqueci minha senha</Text>
      
      <TouchableOpacity style={styles.botaoEntrar}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.pai}>
        <View style={styles.linha}></View>
        <Text style={{marginHorizontal: 10}}>Tente entrar com:</Text>
        <View style={styles.linha}></View>
      </View>

      <View style={styles.botoesContainer}>
        <View style={styles.bolinha}>
            <Ionicons name="logo-google" size={24} color="black" />
        </View>
        <View style={styles.bolinha}>
            <Ionicons name="logo-facebook" size={24} color="black" />
        </View>
        <View style={styles.bolinha}>
            <Ionicons name="logo-github" size={24} color="black" />
        </View>
      </View>
      <View style={styles.mae}>
      <Text style={styles.final}>Não tem conta?</Text>
      <Text style={styles.roxo}>Cadastre-se</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Container2:{
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius:20,
    marginBottom: 20,
    shadowColor: '#8A2BE2',   
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  titulo:{
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  subtitulo:{
    fontSize: 15,
    marginBottom: 20,
    alignItems: 'flex-start',
    fontWeight: '200'
  },
  encima:{
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 5
  },
  quadrado:{
    backgroundColor: 'white', 
    width: '80%',             
    height: 50,               
    flexDirection: 'row',     
    alignItems: 'center',     
    borderRadius: 12,         
    borderWidth: 1,           
    borderColor: '#ddd',      
    paddingHorizontal: 15, 
    marginBottom: 10
  },
  iconedentro:{
    marginRight: 10
  },
  olho:{
    
  },
  esqueci:{
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginRight: '10%'
  },
  botaoEntrar: {
    backgroundColor: 'purple', 
    width: '80%',              
    height: 50,                
    alignItems: 'center',      
    justifyContent: 'center',  
    borderRadius: 12,        
    marginTop: 20,             
  },
  textoBotao: {
    color: 'white',            
    fontWeight: 'bold',        
    fontSize: 18,              
  },
  pai:{
    marginTop: 30,
    flexDirection:'row',
    alignItems: 'center'
  },
  linha:{
    backgroundColor: 'grey',
    width: 80,
    height: 3,
  },
  botoesContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20
  },
  bolinha:{
    width: 60,
    height: 60,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },

  mae:{
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 70
  },

  final:{
    fontSize: 17
  },

  roxo:{
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 18
  }
});