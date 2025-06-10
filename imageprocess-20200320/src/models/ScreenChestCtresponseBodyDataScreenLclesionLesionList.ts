// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataScreenLCLesionLesionListScoreAllClasses } from "./ScreenChestCtresponseBodyDataScreenLclesionLesionListScoreAllClasses";


export class ScreenChestCTResponseBodyDataScreenLCLesionLesionList extends $dara.Model {
  diameter?: number[];
  keySlice?: number;
  malignancy?: number;
  recistEndpoints?: number[];
  scoreAllClasses?: ScreenChestCTResponseBodyDataScreenLCLesionLesionListScoreAllClasses;
  type?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      diameter: 'Diameter',
      keySlice: 'KeySlice',
      malignancy: 'Malignancy',
      recistEndpoints: 'RecistEndpoints',
      scoreAllClasses: 'ScoreAllClasses',
      type: 'Type',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diameter: { 'type': 'array', 'itemType': 'number' },
      keySlice: 'number',
      malignancy: 'number',
      recistEndpoints: { 'type': 'array', 'itemType': 'number' },
      scoreAllClasses: ScreenChestCTResponseBodyDataScreenLCLesionLesionListScoreAllClasses,
      type: 'string',
      volume: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.diameter)) {
      $dara.Model.validateArray(this.diameter);
    }
    if(Array.isArray(this.recistEndpoints)) {
      $dara.Model.validateArray(this.recistEndpoints);
    }
    if(this.scoreAllClasses && typeof (this.scoreAllClasses as any).validate === 'function') {
      (this.scoreAllClasses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

