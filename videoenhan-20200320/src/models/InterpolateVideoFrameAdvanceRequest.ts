// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class InterpolateVideoFrameAdvanceRequest extends $dara.Model {
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
  videoURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      frameRate: 'FrameRate',
      videoURLObject: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      frameRate: 'number',
      videoURLObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

