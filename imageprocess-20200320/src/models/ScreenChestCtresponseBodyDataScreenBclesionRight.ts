// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTResponseBodyDataScreenBCLesionRight extends $dara.Model {
  BCVolume?: string;
  breastVolume?: string;
  probabilities?: string[];
  static names(): { [key: string]: string } {
    return {
      BCVolume: 'BCVolume',
      breastVolume: 'BreastVolume',
      probabilities: 'Probabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      BCVolume: 'string',
      breastVolume: 'string',
      probabilities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.probabilities)) {
      $dara.Model.validateArray(this.probabilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

