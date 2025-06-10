// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataScreenBCLesionLeft } from "./ScreenChestCtresponseBodyDataScreenBclesionLeft";
import { ScreenChestCTResponseBodyDataScreenBCLesionLesionList } from "./ScreenChestCtresponseBodyDataScreenBclesionLesionList";
import { ScreenChestCTResponseBodyDataScreenBCLesionOrganList } from "./ScreenChestCtresponseBodyDataScreenBclesionOrganList";
import { ScreenChestCTResponseBodyDataScreenBCLesionRight } from "./ScreenChestCtresponseBodyDataScreenBclesionRight";


export class ScreenChestCTResponseBodyDataScreenBCLesion extends $dara.Model {
  left?: ScreenChestCTResponseBodyDataScreenBCLesionLeft;
  lesionList?: ScreenChestCTResponseBodyDataScreenBCLesionLesionList[];
  mask?: string;
  organList?: ScreenChestCTResponseBodyDataScreenBCLesionOrganList[];
  right?: ScreenChestCTResponseBodyDataScreenBCLesionRight;
  static names(): { [key: string]: string } {
    return {
      left: 'Left',
      lesionList: 'LesionList',
      mask: 'Mask',
      organList: 'OrganList',
      right: 'Right',
    };
  }

  static types(): { [key: string]: any } {
    return {
      left: ScreenChestCTResponseBodyDataScreenBCLesionLeft,
      lesionList: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataScreenBCLesionLesionList },
      mask: 'string',
      organList: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataScreenBCLesionOrganList },
      right: ScreenChestCTResponseBodyDataScreenBCLesionRight,
    };
  }

  validate() {
    if(this.left && typeof (this.left as any).validate === 'function') {
      (this.left as any).validate();
    }
    if(Array.isArray(this.lesionList)) {
      $dara.Model.validateArray(this.lesionList);
    }
    if(Array.isArray(this.organList)) {
      $dara.Model.validateArray(this.organList);
    }
    if(this.right && typeof (this.right as any).validate === 'function') {
      (this.right as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

