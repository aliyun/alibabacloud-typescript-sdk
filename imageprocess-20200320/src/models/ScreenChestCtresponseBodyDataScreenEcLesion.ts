// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataScreenEcLesionLesionList } from "./ScreenChestCtresponseBodyDataScreenEcLesionLesionList";
import { ScreenChestCTResponseBodyDataScreenEcLesionOrganList } from "./ScreenChestCtresponseBodyDataScreenEcLesionOrganList";


export class ScreenChestCTResponseBodyDataScreenEcLesion extends $dara.Model {
  benignVolume?: string;
  ecVolume?: string;
  egjVolume?: string;
  esoVolume?: string;
  lesionList?: ScreenChestCTResponseBodyDataScreenEcLesionLesionList[];
  mask?: string;
  organList?: ScreenChestCTResponseBodyDataScreenEcLesionOrganList[];
  possibilities?: string[];
  static names(): { [key: string]: string } {
    return {
      benignVolume: 'BenignVolume',
      ecVolume: 'EcVolume',
      egjVolume: 'EgjVolume',
      esoVolume: 'EsoVolume',
      lesionList: 'LesionList',
      mask: 'Mask',
      organList: 'OrganList',
      possibilities: 'Possibilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benignVolume: 'string',
      ecVolume: 'string',
      egjVolume: 'string',
      esoVolume: 'string',
      lesionList: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataScreenEcLesionLesionList },
      mask: 'string',
      organList: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataScreenEcLesionOrganList },
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

