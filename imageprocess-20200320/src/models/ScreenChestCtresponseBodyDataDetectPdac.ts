// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataDetectPdacLesion } from "./ScreenChestCtresponseBodyDataDetectPdacLesion";


export class ScreenChestCTResponseBodyDataDetectPdac extends $dara.Model {
  lesion?: ScreenChestCTResponseBodyDataDetectPdacLesion;
  /**
   * @example
   * 1.2.239.200036.9116.2.6.1.44063.1805049129.1357480934.650139
   */
  seriesInstanceUID?: string;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
      seriesInstanceUID: 'SeriesInstanceUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenChestCTResponseBodyDataDetectPdacLesion,
      seriesInstanceUID: 'string',
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

