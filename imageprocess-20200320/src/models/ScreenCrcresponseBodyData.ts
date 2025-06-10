// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenCRCResponseBodyDataLesion } from "./ScreenCrcresponseBodyDataLesion";


export class ScreenCRCResponseBodyData extends $dara.Model {
  lesion?: ScreenCRCResponseBodyDataLesion;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenCRCResponseBodyDataLesion,
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

