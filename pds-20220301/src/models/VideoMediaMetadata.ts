// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoMediaAudioStream } from "./VideoMediaAudioStream";
import { VideoMediaVideoStream } from "./VideoMediaVideoStream";


export class VideoMediaMetadata extends $dara.Model {
  /**
   * @remarks
   * The height of the video image. Unit: pixel.
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * The information about the audio stream.
   */
  videoMediaAudioStream?: VideoMediaAudioStream[];
  /**
   * @remarks
   * The information about the video stream.
   */
  videoMediaVideoStream?: VideoMediaVideoStream[];
  /**
   * @remarks
   * The width of the video image. Unit: pixel.
   * 
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

