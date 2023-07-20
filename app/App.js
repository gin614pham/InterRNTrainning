import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
// import { MyButton } from "../components/MyButton";
// import { Counter } from "../components/Counter";
import  UserList from "../components/UserList";

const App = () => (
  <View style={styles.container}>
  {/* <Text style={styles.title}>Hello, React Native!</Text>
  <MyButton buttonTitle="新規登録" buttonColor="salmon" />
  <MyButton buttonTitle="ログイン" buttonColor="mediumseagreen" />
  <FlatList 
      data={users}
      renderItem={({item}) => <Text style={styles.title} > {item.name} </Text>}
      keyExtractor={(item) => item.id}
      extraData={{users}}
    />
  <Counter /> */}
  <UserList />
</View>

)

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'honeydew',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
})

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
  },
];
