// export const firebaseConfig = {
//   apiKey: "AIzaSyCmJUmRNKpM4uJyOIdcZsPtmXrS4Sxbmbg",
//   authDomain: "test-3bba8.firebaseapp.com",
//   databaseURL: "https://test-3bba8-default-rtdb.firebaseio.com",
//   projectId: "test-3bba8",
//   storageBucket: "test-3bba8.appspot.com",
//   messagingSenderId: "867079202225",
//   appId: "1:867079202225:web:79ca6bc26cba870c6d4990",
// };
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
