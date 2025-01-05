import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Course from './Course';

export default function Dashboard({ route, navigation }) {
  const { student } = route.params;
  const Tab = createBottomTabNavigator();
  return (

    <View style={styles.container}>
      
      <Image source={student.profile_pic} style={styles.profilePic} />
      <Text style={styles.name}>{student.name}</Text>
      <Text><b>Contact Information</b></Text><br></br>
      <Text>Email: {student.email}</Text>
      <Text>Phone: {student.phone}</Text><br></br>

      <Text><b>Biological Information</b></Text>
      <Text>Age: {student.age}</Text>
      <Text>Gender: {student.gender}</Text>
      <Text>Blood Group: {student.blood_group}</Text>

      <Button
        title="View Course Details"
        onPress={() => navigation.navigate('Course', { courseId: student.course_id })}
      />
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Dashboard} />
      <Tab.Screen name="Course" component={Course} />
      <Tab.Screen name="Subject" component={Dashboard} />
    </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'left', padding: 20 },
  profilePic: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
