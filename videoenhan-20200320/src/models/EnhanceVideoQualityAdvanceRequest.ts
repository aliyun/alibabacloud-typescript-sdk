// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class EnhanceVideoQualityAdvanceRequest extends $dara.Model {
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
  videoURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      frameRate: 'FrameRate',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      outPutHeight: 'OutPutHeight',
      outPutWidth: 'OutPutWidth',
      videoURLObject: 'VideoURL',
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

