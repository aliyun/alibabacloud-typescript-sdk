// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class ToneSdrVideoAdvanceRequest extends $dara.Model {
  /**
   * @example
   * 30
   */
  bitrate?: number;
  /**
   * @example
   * auto_l2
   */
  recolorModel?: string;
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
      recolorModel: 'RecolorModel',
      videoURLObject: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      recolorModel: 'string',
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

