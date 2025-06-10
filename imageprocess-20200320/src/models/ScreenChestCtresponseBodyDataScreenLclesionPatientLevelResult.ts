// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTResponseBodyDataScreenLCLesionPatientLevelResult extends $dara.Model {
  benignNonCystProb?: string;
  benignProb?: string;
  calcProb?: string;
  cystProb?: string;
  HCCProb?: string;
  malignantNonHCCProb?: string;
  malignantProb?: string;
  static names(): { [key: string]: string } {
    return {
      benignNonCystProb: 'BenignNonCystProb',
      benignProb: 'BenignProb',
      calcProb: 'CalcProb',
      cystProb: 'CystProb',
      HCCProb: 'HCCProb',
      malignantNonHCCProb: 'MalignantNonHCCProb',
      malignantProb: 'MalignantProb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benignNonCystProb: 'string',
      benignProb: 'string',
      calcProb: 'string',
      cystProb: 'string',
      HCCProb: 'string',
      malignantNonHCCProb: 'string',
      malignantProb: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

