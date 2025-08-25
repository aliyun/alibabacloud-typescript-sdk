// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AdjustVideoColorRequest extends $dara.Model {
  /**
   * @example
   * LogC
   */
  mode?: string;
  /**
   * @example
   * 20
   */
  videoBitrate?: number;
  /**
   * @example
   * h264
   */
  videoCodec?: string;
  /**
   * @example
   * mp4
   */
  videoFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/AdjustVideoColor/AdjustVideoColor1.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      videoFormat: 'VideoFormat',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      videoBitrate: 'number',
      videoCodec: 'string',
      videoFormat: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

