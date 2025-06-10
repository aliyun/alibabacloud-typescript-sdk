// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectLymphResponseBodyDataLesions } from "./DetectLymphResponseBodyDataLesions";


export class DetectLymphResponseBodyData extends $dara.Model {
  lesions?: DetectLymphResponseBodyDataLesions[];
  static names(): { [key: string]: string } {
    return {
      lesions: 'Lesions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesions: { 'type': 'array', 'itemType': DetectLymphResponseBodyDataLesions },
    };
  }

  validate() {
    if(Array.isArray(this.lesions)) {
      $dara.Model.validateArray(this.lesions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

