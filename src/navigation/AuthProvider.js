
import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          login: async (email, password) => {
            try {
              await auth().signInWithEmailAndPassword(email.trim(), password);
            } catch (e) {
              console.log(e);
              Alert.alert('Error', e+"")

            }
          },
          register: async (email, password) => {
            try {
              await auth().createUserWithEmailAndPassword(email.trim(), password);
            } catch (e) {
            console.log(e+"");
              Alert.alert('Error', e+"")
            }
          },
          logout: async () => {
            try {
              await auth().signOut();
            } catch (e) {
              console.error(e);
            }
          }
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };