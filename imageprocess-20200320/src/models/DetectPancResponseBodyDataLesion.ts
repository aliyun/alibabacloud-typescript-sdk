// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectPancResponseBodyDataLesion extends $dara.Model {
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen-pdac/2022-05-25_14%3A33%3A30/4CA2BF25-BCDB-9C6C-B14C-EB41E8266588.nii.gz?Expires=1653462210&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=8t%2FknUrQyyyCU2p7QhMC%2BXBCR****
   */
  mask?: string;
  /**
   * @example
   * 0
   */
  nonPdacVol?: string;
  /**
   * @example
   * 0
   */
  pancVol?: string;
  /**
   * @example
   * 0
   */
  pdacVol?: string;
  possibilities?: string[];
  static names(): { [key: string]: string } {
    return {
      mask: 'Mask',
      nonPdacVol: 'NonPdacVol',
      pancVol: 'PancVol',
      pdacVol: 'PdacVol',
      possibilities: 'Possibilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mask: 'string',
      nonPdacVol: 'string',
      pancVol: 'string',
      pdacVol: 'string',
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

