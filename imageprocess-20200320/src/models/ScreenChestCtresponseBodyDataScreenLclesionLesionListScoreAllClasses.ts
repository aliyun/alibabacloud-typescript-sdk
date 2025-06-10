// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTResponseBodyDataScreenLCLesionLesionListScoreAllClasses extends $dara.Model {
  benignProb?: number;
  calcProb?: number;
  cystProb?: number;
  malignantProb?: number;
  static names(): { [key: string]: string } {
    return {
      benignProb: 'BenignProb',
      calcProb: 'CalcProb',
      cystProb: 'CystProb',
      malignantProb: 'MalignantProb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benignProb: 'number',
      calcProb: 'number',
      cystProb: 'number',
      malignantProb: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

