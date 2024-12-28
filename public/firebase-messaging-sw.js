importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize Firebase app with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyCb2mgZG-iLYEIYgnxbF57HUpSN5ntNJtA",
    authDomain: "dealchap-6c64d.firebaseapp.com",
    projectId: "dealchap-6c64d",
    storageBucket: "dealchap-6c64d.firebasestorage.app",
    messagingSenderId: "267078783832",
    appId: "1:267078783832:web:b69a8eab61a931d6ce0b2d",
    measurementId: "G-J0RBZL323D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();

// Log to verify service worker is installed
self.addEventListener('install', function (event) {
    console.log('Service Worker installed.');
});

// Handle incoming push notifications when the app is in the background
self.addEventListener('push', function (event) {
    const payload = event.data.json(); // Get notification payload

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/firebase-logo.png', // Optional: Add a default icon
        badge: '/firebase-logo.png', // Optional: Add a badge icon
    };

    // Show notification
    event.waitUntil(
        self.registration.showNotification(notificationTitle, notificationOptions)
    );
});
