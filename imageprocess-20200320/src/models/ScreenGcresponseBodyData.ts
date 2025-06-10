// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenGCResponseBodyDataLesion } from "./ScreenGcresponseBodyDataLesion";


export class ScreenGCResponseBodyData extends $dara.Model {
  lesion?: ScreenGCResponseBodyDataLesion;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenGCResponseBodyDataLesion,
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

