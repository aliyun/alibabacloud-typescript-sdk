// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectPancResponseBodyDataLesion } from "./DetectPancResponseBodyDataLesion";


export class DetectPancResponseBodyData extends $dara.Model {
  lesion?: DetectPancResponseBodyDataLesion;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: DetectPancResponseBodyDataLesion,
    };
  }

  validate() {
    if(this.lesion && typeof (this.lesion as any).validate === 'function') {
      (this.lesion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

