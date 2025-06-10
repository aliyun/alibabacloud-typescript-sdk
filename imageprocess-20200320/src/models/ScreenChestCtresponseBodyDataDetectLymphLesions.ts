// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTResponseBodyDataDetectLymphLesions extends $dara.Model {
  boxes?: number[];
  diametermm?: number[];
  /**
   * @example
   * 7
   */
  keySlice?: number;
  recist?: number[][];
  /**
   * @example
   * 0.6298
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      diametermm: 'Diametermm',
      keySlice: 'KeySlice',
      recist: 'Recist',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      diametermm: { 'type': 'array', 'itemType': 'number' },
      keySlice: 'number',
      recist: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      score: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.boxes)) {
      $dara.Model.validateArray(this.boxes);
    }
    if(Array.isArray(this.diametermm)) {
      $dara.Model.validateArray(this.diametermm);
    }
    if(Array.isArray(this.recist)) {
      $dara.Model.validateArray(this.recist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

