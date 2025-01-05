// screens/Dashboard.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Dashboard({ route, navigation }) {
  const { student } = route.params;

  return (
    <View style={styles.container}>
      <Image source={student.profile_pic} style={styles.profilePic} />
      <Text style={styles.name}>{student.name}</Text>
      <Text>Age: {student.age}</Text>
      <Text>Email: {student.email}</Text>
      <Text>Phone: {student.phone}</Text>
      <Text>Gender: {student.gender}</Text>
      <Text>Blood Group: {student.blood_group}</Text>

      <Button
        title="View Course Details"
        onPress={() => navigation.navigate('CourseDetails', { courseId: student.course_id })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  profilePic: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
