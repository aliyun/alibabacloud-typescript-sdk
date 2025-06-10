// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenLCResponseBodyDataLesion } from "./ScreenLcresponseBodyDataLesion";


export class ScreenLCResponseBodyData extends $dara.Model {
  lesion?: ScreenLCResponseBodyDataLesion;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenLCResponseBodyDataLesion,
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

