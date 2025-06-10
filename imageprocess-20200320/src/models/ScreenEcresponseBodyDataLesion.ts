// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenECResponseBodyDataLesion extends $dara.Model {
  /**
   * @example
   * 0
   */
  benignVolume?: string;
  /**
   * @example
   * 0
   */
  ecVolume?: string;
  /**
   * @example
   * 26814
   */
  esoVolume?: string;
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen-pdac/2022-05-25_14%3A33%3A30/4CA2BF25-BCDB-9C6C-B14C-EB41E8266588.nii.gz?Expires=1653462210&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=8t%2FknUrQyyyCU2p7QhMC%2BXBCR****
   */
  mask?: string;
  possibilities?: string[];
  static names(): { [key: string]: string } {
    return {
      benignVolume: 'BenignVolume',
      ecVolume: 'EcVolume',
      esoVolume: 'EsoVolume',
      mask: 'Mask',
      possibilities: 'Possibilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benignVolume: 'string',
      ecVolume: 'string',
      esoVolume: 'string',
      mask: 'string',
      possibilities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.possibilities)) {
      $dara.Model.validateArray(this.possibilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

