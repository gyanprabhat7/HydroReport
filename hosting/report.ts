import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyD4S8p3luYZavoni3WlL-CPT3Vktdtsx3E",
    authDomain: "projecthydroreport.firebaseapp.com",
    databaseURL: "https://projecthydroreport-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "projecthydroreport",
    storageBucket: "projecthydroreport.appspot.com",
    messagingSenderId: "45585808372",
    appId: "1:45585808372:web:097aecc95d12542fd5d7a1",
    measurementId: "G-PLCBLY233Z"
  });

  const firestore = getFirestore();

  const reports = doc(firestore, 'reports/');





  /* Form Submission and Data Saving */

const reportForm = document.getElementById('report-form');

reportForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const description = document.getElementById('description').value;
  const problemType = document.getElementById('problem-type').value;
  const userId = firebase.auth().currentUser.uid;
  const latitude = 1000.2222;
  const longitude = 1000.2222;
  const imageFile = document.getElementById('image').files[0];

  const storageRef = firebase.storage().ref('images/' + userId + '/' + imageFile.name);
  const uploadTask = storageRef.put(imageFile);

  uploadTask.on('state_changed', function (snapshot) {
    // Handle progress or state changes if needed
  }, function (error) {
    console.error('Image upload error:', error);
  }, function () {
    console.log('Image uploaded successfully');

    // Get the download URL for the image.
    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
      // Save the problem data with the download URL.
      saveProblem(userId, latitude, longitude, description, problemType, downloadURL);
    });
  });
});

