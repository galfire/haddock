// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from 'react-360-web';

import HLSVideoPlayer from './HLSVideoPlayer';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    customVideoPlayers: [HLSVideoPlayer],
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Hello360', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  const player = r360.compositor.createVideoPlayer('myplayer');

  // const url = r360.getAssetURL('video.mp4');
  // const format = 'mp4';
  const url = 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8';
  const format = 'm3u8';

  player.setSource(url, '3D', format);
  // player.setMuted(false);

  // Load the initial environment
  // r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
  r360.compositor.setBackgroundVideo('myplayer');

  player.play();
}

window.React360 = {init};
