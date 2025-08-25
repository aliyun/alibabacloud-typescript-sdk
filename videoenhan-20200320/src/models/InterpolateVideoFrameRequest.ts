// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InterpolateVideoFrameRequest extends $dara.Model {
  /**
   * @example
   * 30
   */
  bitrate?: number;
  /**
   * @example
   * 70
   */
  frameRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/InterpolateVideoFrame/InterpolateVideoFrame3.mp4
   */
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      frameRate: 'FrameRate',
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      frameRate: 'number',
      videoURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

