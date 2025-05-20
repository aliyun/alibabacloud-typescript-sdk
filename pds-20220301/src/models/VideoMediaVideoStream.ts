// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoMediaVideoStream extends $dara.Model {
  /**
   * @example
   * 108420
   */
  bitrate?: string;
  /**
   * @example
   * h264
   */
  codeName?: string;
  /**
   * @example
   * 22.88
   */
  duration?: string;
  /**
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

