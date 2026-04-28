// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoMediaVideoStream extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the video stream. Unit: bit/s.
   * 
   * @example
   * 108420
   */
  bitrate?: string;
  /**
   * @remarks
   * The video encoding mode.
   * 
   * @example
   * h264
   */
  codeName?: string;
  /**
   * @remarks
   * The duration of the video stream. Unit: seconds.
   * 
   * @example
   * 22.88
   */
  duration?: string;
  /**
   * @remarks
   * The number of video frames.
   * 
   * @example
   * 90
   */
  frameCount?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'bitrate',
      codeName: 'code_name',
      duration: 'duration',
      frameCount: 'frame_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      codeName: 'string',
      duration: 'string',
      frameCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

