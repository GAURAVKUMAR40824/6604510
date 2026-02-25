  import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Index() {

 const [password, setPassword] = useState("");
 const [length, setLength] = useState("8");

 const [useNumber, setUseNumber] = useState(true);
 const [useChar, setUseChar] = useState(true);
 const [useUppercase, setUseUppercase] = useState(true);

 const generatePassword = (length) => {

  const empPassword = Number(length)

  let lowercase = "abcdefghijklmnopqrstuvwxyz"
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numbers = "0123456789"
  let symbols = "!@#$%^&*()"

  let finalString = lowercase

  if (useUppercase) {
    finalString += uppercase
  }

  if (useNumber) {
    finalString += numbers
  }

  if (useChar) {
    finalString += symbols
  }

  let newPassword = ""

  for (let i = 0; i < empPassword; i++) {
    const index = Math.floor(Math.random() * finalString.length)
    newPassword += finalString[index]
  }

  setPassword(newPassword)
 }

 return (
   <View style={{marginTop:50, alignItems:"center"}}>

     <Text>Password:</Text>

     <Text style={{fontSize:20, fontWeight:"bold", margin:10}}>
       {password}
     </Text>

     <Button
       title="Generate Password"
       onPress={() => generatePassword(length)}
     />

   </View>
 );
}