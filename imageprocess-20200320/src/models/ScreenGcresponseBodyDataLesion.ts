// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenGCResponseBodyDataLesion extends $dara.Model {
  /**
   * @example
   * 5.86
   */
  GCVolume?: string;
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen_gc/gc_11949981_stomach.nii.gz?Expires=1680678697&OSSAccessKeyId=LTAI4GC2dJzdf8ZvnC16****&Signature=EpKCTEPipWO0AiB3Uip85c%2BuMg****
   */
  mask?: string;
  /**
   * @example
   * 0.00
   */
  nonGCVolume?: string;
  /**
   * @example
   * ["0.1467", "0.8533", "0.0000"]
   */
  probabilities?: string;
  /**
   * @example
   * 508.79
   */
  stomachVolume?: string;
  static names(): { [key: string]: string } {
    return {
      GCVolume: 'GCVolume',
      mask: 'Mask',
      nonGCVolume: 'NonGCVolume',
      probabilities: 'Probabilities',
      stomachVolume: 'StomachVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GCVolume: 'string',
      mask: 'string',
      nonGCVolume: 'string',
      probabilities: 'string',
      stomachVolume: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

