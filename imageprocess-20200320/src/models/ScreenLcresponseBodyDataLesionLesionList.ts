// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenLCResponseBodyDataLesionLesionListScoreAllClassesProb } from "./ScreenLcresponseBodyDataLesionLesionListScoreAllClassesProb";


export class ScreenLCResponseBodyDataLesionLesionList extends $dara.Model {
  diameter?: number[];
  /**
   * @example
   * 100
   */
  keySlice?: number;
  /**
   * @example
   * 0.9375
   */
  malignancy?: number;
  recistEndpoints?: number[];
  scoreAllClassesProb?: ScreenLCResponseBodyDataLesionLesionListScoreAllClassesProb;
  /**
   * @example
   * HCC
   */
  type?: string;
  /**
   * @example
   * 305.3661
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      diameter: 'Diameter',
      keySlice: 'KeySlice',
      malignancy: 'Malignancy',
      recistEndpoints: 'RecistEndpoints',
      scoreAllClassesProb: 'ScoreAllClassesProb',
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
      scoreAllClassesProb: ScreenLCResponseBodyDataLesionLesionListScoreAllClassesProb,
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
    if(this.scoreAllClassesProb && typeof (this.scoreAllClassesProb as any).validate === 'function') {
      (this.scoreAllClassesProb as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

