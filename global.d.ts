declare module 'react-confetti';
declare module 'react-use';
declare global {
    interface Window {
      Spotify: any; // Declare the Spotify SDK on the window object
    }
  }
  
  export {}; // Required to make this file a module