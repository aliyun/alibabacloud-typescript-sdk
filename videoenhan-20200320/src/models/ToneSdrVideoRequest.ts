// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ToneSdrVideoRequest extends $dara.Model {
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
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      recolorModel: 'RecolorModel',
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      recolorModel: 'string',
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

