import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { courses, subjects } from '../assets/StudentsDb';

export default function CourseDetails({ route }) {
  const { courseId } = route.params;
  const course = courses.find((c) => c.id === courseId);
  const relatedSubjects = subjects.filter((s) => s.course_id === courseId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.name}</Text>
      <Text>Duration: {course.duration}</Text>
      <Text>Department: {course.department}</Text>
      <Text>Course Code: {course.course_code}</Text>

      <Text style={styles.subtitle}>Subjects:</Text>
      <FlatList
        data={relatedSubjects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>- {item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 20, marginTop: 20, marginBottom: 10 },
});
