// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataDetectLymphLesions } from "./ScreenChestCtresponseBodyDataDetectLymphLesions";


export class ScreenChestCTResponseBodyDataDetectLymph extends $dara.Model {
  lesions?: ScreenChestCTResponseBodyDataDetectLymphLesions[];
  /**
   * @example
   * 1.2.568.200036.9116.2.6.1.44063.1805049129.1357480934.650139
   */
  seriesInstanceUID?: string;
  static names(): { [key: string]: string } {
    return {
      lesions: 'Lesions',
      seriesInstanceUID: 'SeriesInstanceUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesions: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataDetectLymphLesions },
      seriesInstanceUID: 'string',
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

