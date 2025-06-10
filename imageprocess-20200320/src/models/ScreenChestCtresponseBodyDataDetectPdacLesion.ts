// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataDetectPdacLesionLesionList } from "./ScreenChestCtresponseBodyDataDetectPdacLesionLesionList";
import { ScreenChestCTResponseBodyDataDetectPdacLesionOrganList } from "./ScreenChestCtresponseBodyDataDetectPdacLesionOrganList";


export class ScreenChestCTResponseBodyDataDetectPdacLesion extends $dara.Model {
  lesionList?: ScreenChestCTResponseBodyDataDetectPdacLesionLesionList[];
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
  organList?: ScreenChestCTResponseBodyDataDetectPdacLesionOrganList[];
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
      lesionList: 'LesionList',
      mask: 'Mask',
      nonPdacVol: 'NonPdacVol',
      organList: 'OrganList',
      pancVol: 'PancVol',
      pdacVol: 'PdacVol',
      possibilities: 'Possibilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesionList: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataDetectPdacLesionLesionList },
      mask: 'string',
      nonPdacVol: 'string',
      organList: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataDetectPdacLesionOrganList },
      pancVol: 'string',
      pdacVol: 'string',
      possibilities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.lesionList)) {
      $dara.Model.validateArray(this.lesionList);
    }
    if(Array.isArray(this.organList)) {
      $dara.Model.validateArray(this.organList);
    }
    if(Array.isArray(this.possibilities)) {
      $dara.Model.validateArray(this.possibilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

