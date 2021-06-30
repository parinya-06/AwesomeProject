/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {SafeAreaView, ScrollView, Text,TextInput} from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

import firestore from '@react-native-firebase/firestore'
 
 const App: () => Node = () => {

  firestore().collection('Users').doc('ABC').get().then((user) => {
    console.log(user)
  });

   return (
     
     <SafeAreaView >
      <ScrollView > 
      <Text style = {{fontSize:20}} >Keng Parinya</Text>
      <Input placeholder='Hint'/>

            <Button
        title="Solid Button"
      />
            <Button
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        iconRight
        title="Button with right icon"
      />
      <Button
  icon={{
    name: "arrow-right",
    size: 15,
    color: "white"
  }}
  title="Button with icon object"
/>

    <Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  title="Button with icon component"
/>

     <TextInput
     style= {{backgroundColor:'#DDDDDD'}}
     keyboardType='phone-pad'></TextInput>


<Image
  source={{ uri: 'https://fu.lnwfile.com/13gzyr.jpg' }}
  style={{ width: 200, height: 200 }}
/>
<Image
  source={{ uri: 'https://cu.lnwfile.com/xet3ld.jpg' }}
  style={{ width: 200, height: 200 }}
  
/>
<Image
  source={{ uri: 'https://cu.lnwfile.com/cd0wig.jpg' }}
  style={{ width: 200, height: 200 }}
  
/>
<Image
  source={{ uri: 'https://cu.lnwfile.com/12dqqn.jpg' }}
  style={{ width: 200, height: 200 }}
  
/>
<Image
  source={{ uri: 'https://cu.lnwfile.com/3mqsyo.jpg' }}
  style={{ width: 200, height: 200 }}
  
/>
<Image
  source={{ uri: 'https://images.goodsmile.info/cgm/images/product/20181226/7952/57121/large/f6aec9b398a19ebd925616db447700b3.jpg' }}
  style={{ width: 200, height: 200 }}
  
/>
</ScrollView>
</SafeAreaView>

     
   );
   
 };
 
 
 
 export default App;
 