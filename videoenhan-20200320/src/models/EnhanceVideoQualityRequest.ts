// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnhanceVideoQualityRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  bitrate?: number;
  /**
   * @example
   * 50
   */
  frameRate?: number;
  /**
   * @example
   * PQ
   */
  HDRFormat?: string;
  /**
   * @example
   * 600
   */
  maxIlluminance?: number;
  /**
   * @example
   * 200
   */
  outPutHeight?: number;
  /**
   * @example
   * 200
   */
  outPutWidth?: number;
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
      frameRate: 'FrameRate',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      outPutHeight: 'OutPutHeight',
      outPutWidth: 'OutPutWidth',
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      frameRate: 'number',
      HDRFormat: 'string',
      maxIlluminance: 'number',
      outPutHeight: 'number',
      outPutWidth: 'number',
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

