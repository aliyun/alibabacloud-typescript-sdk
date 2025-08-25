// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class ConvertHdrVideoAdvanceRequest extends $dara.Model {
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
  videoURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      videoURLObject: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      HDRFormat: 'string',
      maxIlluminance: 'number',
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

