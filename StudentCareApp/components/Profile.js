import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { Avatar, Card } from "react-native-paper";

export default function Profile({ user }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image style={styles.image} source={require("../assets/images/Logo.png")} />
        </View>
        <View style={styles.card}>
            <Card  style={{backgroundColor:"#ffffff"}}>
                <Card.Content>
                    <View style={{ alignItems: "center" }}>
                        <Avatar.Image size={150} source={user.profile_pic}/>
                    </View>
                    <Text variant="titleLarge" style={styles.nametext}>
                        {user.name}
                    </Text>
                    <Text variant="bodyMedium" style={{textAlign:'center'}}>
                        Age: {user.age} | Gender: {user.gender}
                    </Text>
                    <View style={styles.divider} />
                    <Text variant="titleLarge" style={styles.cardtitletext}>
                        Contact Information
                    </Text>
                    <Text variant="bodyMedium">Email: {user.email}</Text>
                    <Text variant="bodyMedium">Phone: {user.phone}</Text>
                    <Text variant="bodyMedium">Address: {user.address}</Text>
                    <View style={styles.divider} />
                    <Text variant="titleLarge" style={styles.cardtitletext}>
                        Biological Information
                    </Text>
                    <Text variant="bodyMedium">Gender: {user.gender}</Text>
                    <Text variant="bodyMedium">Age: {user.age}</Text>
                    <Text variant="bodyMedium">Blood Group: {user.blood_group}</Text>
                </Card.Content>
            </Card>
        </View>
        <View style={styles.footer}>
            <Text style={{color: "#ffffff"}}>UoV © 2025</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scrollContent: {
      flexGrow: 1,
    },
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#fff",
      paddingBottom: 30,
    },
    banner: {
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10,
    },
    image: {
      width: 250,
      height: 65,
    },
    card: {
      marginVertical: 10,
      width: "90%",
      alignSelf: "center"
    },  
    divider: {
      height: 1,
      backgroundColor: "#ccc",
      marginVertical: 15,
    },
    footer: {
      backgroundColor: "#520f4e",
      width: "100%",
      alignItems: "center",
      height: 50,
      justifyContent: "center",
    },
    cardtitletext: {
      fontSize: 28,
      marginTop: 10,
      textAlign: "left",
    },    
    nametext: {
        fontSize: 28,
        marginTop: 10,
        textAlign: "center",
    },
});
  