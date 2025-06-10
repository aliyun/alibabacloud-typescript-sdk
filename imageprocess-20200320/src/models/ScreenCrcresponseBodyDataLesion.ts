// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenCRCResponseBodyDataLesion extends $dara.Model {
  /**
   * @example
   * 7.83
   */
  CRCVolume?: string;
  /**
   * @example
   * 255.93
   */
  colorectumVolume?: string;
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen_crc/crc_case2_pre.nii.gz?Expires=1680766116&OSSAccessKeyId=LTAI4GC2dJzdf8ZvnC16MFC7&Signature=9n9C%2B2MnyvLwAC%2FwFyxgY********
   */
  mask?: string;
  /**
   * @example
   * 0.0779, 0.9221
   */
  probabilities?: string;
  static names(): { [key: string]: string } {
    return {
      CRCVolume: 'CRCVolume',
      colorectumVolume: 'ColorectumVolume',
      mask: 'Mask',
      probabilities: 'Probabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CRCVolume: 'string',
      colorectumVolume: 'string',
      mask: 'string',
      probabilities: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

