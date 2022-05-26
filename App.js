import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';



export default function App() {
  const [memes, setMemes] = React.useState(["", "null"]);
  const [data, setData] = React.useState([]);
  var id = 0;
  async function getJoke() {



    /* const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
        'X-RapidAPI-Key': '5009249013msh10500308327bc30p1ef796jsncc35fbfb5d77'
      }
    };
    console.log("------------------")
    console.log(memes)
    console.log(memes.content)
    console.log("------------------")
    return await fetch(url, options)
      .then(res => res.json())
      .then((json) => setMemes(json))
      */
    console.log(memes)
    id = Math.floor(Math.random() * 1600);
    return await fetch("https://type.fit/api/quotes").then((res) => res.json()).then((json) => setMemes(json[id]))



  }


  useEffect(() => { getJoke() }, []);


  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: "#A8E6CF" }}>
      <Memes memes={memes.text} author={memes.author ? memes.author : "Unknown"} />
      <Pressable style={{ backgroundColor: '#E5CB9F', alignItems: 'center', justifyContent: 'center', padding: 10, paddingHorizontal: 15, margin: 10, borderRadius: 10, elevation: 5, }} onPress={() => { getJoke() }} android_ripple={{ color: '#F68989', borderless: "False", radius: 38 }} >

        <Text style={{ fontWeight: 'bold' }}>Reload</Text>

      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const Memes = (props) => (
  <View style={{ backgroundColor: '#E5CB9F', borderRadius: 20, alignItems: 'center', justifyContent: 'center', paddingVertical: 40, margin: 20, paddingHorizontal: 10, minWidth: "90%", elevation: 5 }} >

    <Text style={{ fontWeight: 'bold', fontSize: 17, color: "#F9F3DF" }}>{props.memes}</Text>
    <Text></Text>
    <Text style={{ fontWeight: 'bold', fontSize: 17, right: "-15%", color: '#8FBDD3' }}>- {props.author}</Text>
  </View >
)

