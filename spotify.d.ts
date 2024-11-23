// spotify.d.ts
declare module "spotify-web-playback-sdk" {
    export = Spotify;
  }
  
  declare global {
    interface Window {
      Spotify: typeof Spotify; 
    }
  }