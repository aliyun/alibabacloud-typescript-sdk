// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoMediaAudioStream } from "./VideoMediaAudioStream";
import { VideoMediaVideoStream } from "./VideoMediaVideoStream";


export class VideoMediaMetadata extends $dara.Model {
  /**
   * @example
   * 1080
   */
  height?: number;
  videoMediaAudioStream?: VideoMediaAudioStream[];
  videoMediaVideoStream?: VideoMediaVideoStream[];
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      videoMediaAudioStream: 'video_media_audio_stream',
      videoMediaVideoStream: 'video_media_video_stream',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      videoMediaAudioStream: { 'type': 'array', 'itemType': VideoMediaAudioStream },
      videoMediaVideoStream: { 'type': 'array', 'itemType': VideoMediaVideoStream },
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.videoMediaAudioStream)) {
      $dara.Model.validateArray(this.videoMediaAudioStream);
    }
    if(Array.isArray(this.videoMediaVideoStream)) {
      $dara.Model.validateArray(this.videoMediaVideoStream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

