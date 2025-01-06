import { Image, StyleSheet, View, Text } from "react-native";
import { courses } from "../assets/StudentsDb";
import { Card } from "react-native-paper";

export default function Courses({user}){
    
    const userCourse=courses.find((course) => course.id === user.course_id);
    return(
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image
                    style={styles.image}
                    source={require('../assets/Logo.png')}/>
            </View>
            <View style={styles.imageCard}>
                <Card style={{backgroundColor:"#ffffff"}}>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.nametext}>
                            {userCourse.name}
                        </Text>
                        <Text variant="bodyMedium" style={{textAlign:'center'}}>
                            Code: {userCourse.course_code} | Dept: {userCourse.department}
                        </Text>
                        <View style={styles.divider} />
                        <Text variant="titleLarge" style={styles.cardtitletext}>
                            Course Information
                        </Text>
                        <Text variant="bodyMedium">Code: {userCourse.course_code}</Text>
                        <Text variant="bodyMedium">Department: {userCourse.department}</Text>
                        <Text variant="bodyMedium">Duration: {userCourse.duration}</Text>
                        <Text variant="bodyMedium">Description: {userCourse.description}</Text>
                        <View style={styles.divider} />
                    </Card.Content>
                </Card>
            </View>
            <View style={styles.footer}>
                <Text style={{color:"#ffffff"}}>UoV © 2025</Text>
            </View>
        </View>
    )
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
        position: "absolute",
        bottom: 0,
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