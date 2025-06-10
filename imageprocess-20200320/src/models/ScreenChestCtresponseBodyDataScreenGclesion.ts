// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataScreenGCLesionLesionList } from "./ScreenChestCtresponseBodyDataScreenGclesionLesionList";
import { ScreenChestCTResponseBodyDataScreenGCLesionOrganList } from "./ScreenChestCtresponseBodyDataScreenGclesionOrganList";


export class ScreenChestCTResponseBodyDataScreenGCLesion extends $dara.Model {
  GCVolume?: string;
  lesionList?: ScreenChestCTResponseBodyDataScreenGCLesionLesionList[];
  mask?: string;
  nonGCVolume?: string;
  organList?: ScreenChestCTResponseBodyDataScreenGCLesionOrganList[];
  probabilities?: string[];
  stomachVolume?: string;
  static names(): { [key: string]: string } {
    return {
      GCVolume: 'GCVolume',
      lesionList: 'LesionList',
      mask: 'Mask',
      nonGCVolume: 'NonGCVolume',
      organList: 'OrganList',
      probabilities: 'Probabilities',
      stomachVolume: 'StomachVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GCVolume: 'string',
      lesionList: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataScreenGCLesionLesionList },
      mask: 'string',
      nonGCVolume: 'string',
      organList: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataScreenGCLesionOrganList },
      probabilities: { 'type': 'array', 'itemType': 'string' },
      stomachVolume: 'string',
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

