// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataScreenLCLesion } from "./ScreenChestCtresponseBodyDataScreenLclesion";


export class ScreenChestCTResponseBodyDataScreenLC extends $dara.Model {
  lesion?: ScreenChestCTResponseBodyDataScreenLCLesion;
  seriesInstanceUid?: string;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
      seriesInstanceUid: 'SeriesInstanceUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenChestCTResponseBodyDataScreenLCLesion,
      seriesInstanceUid: 'string',
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

