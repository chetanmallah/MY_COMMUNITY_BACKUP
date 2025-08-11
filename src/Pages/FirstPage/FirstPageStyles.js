
// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f7f9fc',
//     padding: 20,
//   },
//   title: {
//     fontSize: 32,  // Larger size for the community name
//     fontWeight: '900',
//     color: 'Black',
//     marginBottom: 40,
//     textAlign: 'center',
//     letterSpacing: 1,  // Adding some letter spacing for a cleaner look
//   },
//   pickerContainer: {
//     height:'8%',
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     borderColor: '#212529',
//     borderWidth: 2,
//     marginBottom: 30,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     elevation: 3,  // Subtle shadow for the picker container
//   },
//   icon: {
//     marginRight: 10,
//   },
//   picker: {
//     flex: 1,
//     height: 60,  // Ensuring picker items are well aligned and visible
//     color: '#212529',
//     fontSize: 16,
//     borderRadius: 10,
//     paddingVertical: 10,  // Padding to ensure text is centered properly
//   },
//   button: {
//     // backgroundColor: '#3498db',
//     backgroundColor: '#212529',

//     paddingVertical: 16,
//     paddingHorizontal: 40,
//     borderRadius: 12,
//     marginBottom: 20,
//     elevation: 5,
//     shadowColor: '#2980b9',  // Slight shadow to make the button pop
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 15,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 18,
//   },
//   changeLanguageButton: {
//     backgroundColor: '#ecf0f1',
//     // backgroundColor: '#5c677d',

//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     borderRadius: 8,
//     marginTop: 20,
//     elevation: 3,
//     shadowColor: '#bdc3c7',  // Subtle shadow for language button
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//   },
//   changeLanguageText: {
//     fontSize: 16,
//     color: '#212529',
//     fontWeight: '600',
//     textAlign: 'center',
//   },
// });

// export default styles;

// styling more /// 11-08-2025 .. ok hai neeche wala but more ui teting kar rhe

import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f9fc',
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#000',
    marginBottom: Platform.OS === 'android' ? 30 : 40,
    textAlign: 'center',
    letterSpacing: 1,
  },
  pickerContainer: {
    height: Platform.OS === 'android' ? 60 : 150,
    width: Platform.OS === 'android' ? '90%' : '85%',
    backgroundColor: '#fff',
    borderRadius: 14,
    borderColor: '#212529',
    borderWidth: 2,
    marginBottom: 35,
    paddingHorizontal: 18,
    paddingVertical: Platform.OS === 'android' ? 8 : 22,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: Platform.OS === 'android' ? 7 : 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: Platform.OS === 'android' ? 7 : 3 },
    shadowOpacity: Platform.OS === 'android' ? 0.3 : 0.15,
    shadowRadius: Platform.OS === 'android' ? 8 : 5,
  },
  icon: {
    marginRight: 15,
  },
  picker: {
    flex: 1,
    height: Platform.OS === 'android' ? 55 : 130,
    color: '#212529',
    fontSize: Platform.OS === 'android' ? 18 : 17,
  },
  button: {
    backgroundColor: '#212529',
    paddingVertical: Platform.OS === 'android' ? 20 : 18,
    paddingHorizontal: Platform.OS === 'android' ? 50 : 45,
    borderRadius: 14,
    marginBottom: 25,
    elevation: Platform.OS === 'android' ? 9 : 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: Platform.OS === 'android' ? 12 : 10 },
    shadowOpacity: 0.28,
    shadowRadius: 18,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: Platform.OS === 'android' ? 20 : 19,
    textAlign: 'center',
  },
  changeLanguageButton: {
    backgroundColor: '#ecf0f1',
    paddingVertical: Platform.OS === 'android' ? 16 : 14,
    paddingHorizontal: Platform.OS === 'android' ? 40 : 36,
    borderRadius: 12,
    elevation: Platform.OS === 'android' ? 6 : 3,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: Platform.OS === 'android' ? 7 : 5 },
    shadowOpacity: 0.22,
    shadowRadius: 10,
  },
  changeLanguageText: {
    fontSize: Platform.OS === 'android' ? 18 : 17,
    color: '#212529',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default styles;