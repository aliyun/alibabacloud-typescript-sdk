// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CalcCACSResponseBodyDataDetections extends $dara.Model {
  calciumCenter?: number[];
  /**
   * @example
   * 1
   */
  calciumId?: number;
  /**
   * @example
   * 19.22474
   */
  calciumScore?: number;
  /**
   * @example
   * 28.837109
   */
  calciumVolume?: number;
  static names(): { [key: string]: string } {
    return {
      calciumCenter: 'CalciumCenter',
      calciumId: 'CalciumId',
      calciumScore: 'CalciumScore',
      calciumVolume: 'CalciumVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calciumCenter: { 'type': 'array', 'itemType': 'number' },
      calciumId: 'number',
      calciumScore: 'number',
      calciumVolume: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.calciumCenter)) {
      $dara.Model.validateArray(this.calciumCenter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

