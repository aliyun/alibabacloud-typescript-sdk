// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenLCResponseBodyDataLesionPatientLevelResult extends $dara.Model {
  /**
   * @example
   * 0.0077
   */
  benignNonCystProb?: string;
  benignProb?: number;
  calcProb?: number;
  /**
   * @example
   * 0.9233
   */
  cystProb?: number;
  /**
   * @example
   * 0.9941
   */
  HCCProb?: number;
  /**
   * @example
   * 0.0073
   */
  malignantNonHCCProb?: number;
  malignantProb?: number;
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
      benignProb: 'number',
      calcProb: 'number',
      cystProb: 'number',
      HCCProb: 'number',
      malignantNonHCCProb: 'number',
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

