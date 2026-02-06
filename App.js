import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.tudo}>
      
      {/* Esse quadrado eu nao consegui deixar igual, mas botei um emoji */}
      <View style={styles.quadrado}>
        <Text style={{fontSize: 50}}>🎓</Text>
      </View>

      <Text style={styles.textoGrande}>Bem-vindo de volta</Text>
      <Text style={styles.textoCinza}>Acesse sua conta do SENAI</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput 
        style={styles.input} 
        placeholder="seu@email.com"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput 
        style={styles.input} 
        placeholder="********"
        secureTextEntry={true}
      />

      <Text style={styles.esqueci}>Esqueci minha senha</Text>

      {/* Botao que eu fiz com View porque nao sabia o Touchable direito */}
      <TouchableOpacity style={styles.botaoRoxo}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Entrar</Text>
      </TouchableOpacity>

      <Text style={{marginTop: 20, textAlign: 'center'}}>Ou entre com</Text>

      {/* Tentei fazer as bolinhas mas ficaram quadradas kkk */}
      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
        <View style={styles.bolinha}><Text>G</Text></View>
        <View style={styles.bolinha}><Text>F</Text></View>
        <View style={styles.bolinha}><Text>A</Text></View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 30, justifyContent: 'center'}}>
        <Text>Não tem conta?</Text>
        <Text style={{color: 'blue', marginLeft: 5}}>Cadastre-se</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  tudo: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    paddingTop: 80, // pra nao ficar em cima da camera do celular
  },
  quadrado: {
    width: 80,
    height: 80,
    backgroundColor: '#eee',
    alignSelf: 'center', // joga pro meio
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textoGrande: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textoCinza: {
    color: 'gray',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black', // cor basica
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  esqueci: {
    textAlign: 'right',
    color: 'purple',
    marginBottom: 20,
  },
  botaoRoxo: {
    backgroundColor: 'purple',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  bolinha: {
    width: 40,
    height: 40,
    borderWidth: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});