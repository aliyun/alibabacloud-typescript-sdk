// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataScreenCRCLesionLesionList } from "./ScreenChestCtresponseBodyDataScreenCrclesionLesionList";
import { ScreenChestCTResponseBodyDataScreenCRCLesionOrganList } from "./ScreenChestCtresponseBodyDataScreenCrclesionOrganList";


export class ScreenChestCTResponseBodyDataScreenCRCLesion extends $dara.Model {
  colorectumVolume?: string;
  lesionList?: ScreenChestCTResponseBodyDataScreenCRCLesionLesionList[];
  mask?: string;
  organList?: ScreenChestCTResponseBodyDataScreenCRCLesionOrganList[];
  probabilities?: string[];
  static names(): { [key: string]: string } {
    return {
      colorectumVolume: 'ColorectumVolume',
      lesionList: 'LesionList',
      mask: 'Mask',
      organList: 'OrganList',
      probabilities: 'Probabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorectumVolume: 'string',
      lesionList: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataScreenCRCLesionLesionList },
      mask: 'string',
      organList: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataScreenCRCLesionOrganList },
      probabilities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.lesionList)) {
      $dara.Model.validateArray(this.lesionList);
    }
    if(Array.isArray(this.organList)) {
      $dara.Model.validateArray(this.organList);
    }
    if(Array.isArray(this.probabilities)) {
      $dara.Model.validateArray(this.probabilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

