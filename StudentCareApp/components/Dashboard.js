import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Profile from './Profile';
import Course from './Course';
import Subjects from './Subjects';

export default function Main({route}){
    const {user}=route.params;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline'},
    { key: 'course', title: 'Courses', focusedIcon: 'school' , unfocusedIcon: 'school-outline'},
    { key: 'subjects', title: 'Subjects', focusedIcon: 'book-open' , unfocusedIcon: 'book-open-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    profile:()=> <Profile user={user}/>,
    course:()=> <Course user={user}/>,
    subjects:()=> <Subjects user={user}/>,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      keyExtractor={(item) => item.key}
    />
  );
};