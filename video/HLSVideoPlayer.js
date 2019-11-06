import {BrowserVideoPlayer} from 'react-360-web';

import Hls from 'hls.js';

export default class HLSVideoPlayer extends BrowserVideoPlayer {
  static getSupportedFormats(): Array<string> {
    return ['m3u8']
  }

  constructor() {
    super();
  }

  setSource(src: string, stereoFormat: string, fileFormat: string, layout?: string) {
    super.setSource('', stereoFormat, fileFormat);
    const hls = new Hls({enableWorker:false});
    hls.attachMedia(this._element);
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      console.log("video and hls.js are now bound together !");
      hls.loadSource(src);
      // hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      //   console.log("manifest loaded, found " + data.levels.length + " quality level");
      // });
    });
  }

  destroy() {
    // this.player.reset();
    super.dispose();
  }
}
