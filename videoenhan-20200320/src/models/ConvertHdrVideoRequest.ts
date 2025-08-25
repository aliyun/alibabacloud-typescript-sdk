// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertHdrVideoRequest extends $dara.Model {
  /**
   * @example
   * 30
   */
  bitrate?: number;
  /**
   * @example
   * HLG
   */
  HDRFormat?: string;
  /**
   * @example
   * 1000
   */
  maxIlluminance?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://invi-label.oss-cn-shanghai.aliyuncs.com/label/temp/faceswap/test_for_api/xxxx.mp4
   */
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      HDRFormat: 'string',
      maxIlluminance: 'number',
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

