// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenLCResponseBodyDataLesionLesionList } from "./ScreenLcresponseBodyDataLesionLesionList";
import { ScreenLCResponseBodyDataLesionPatientLevelResult } from "./ScreenLcresponseBodyDataLesionPatientLevelResult";


export class ScreenLCResponseBodyDataLesion extends $dara.Model {
  lesionList?: ScreenLCResponseBodyDataLesionLesionList[];
  /**
   * @example
   * 1364.9468
   */
  liverVolume?: number;
  /**
   * @example
   * 20-050_0000.nii.gz
   */
  mask?: string;
  patientLevelProb?: number;
  patientLevelResult?: ScreenLCResponseBodyDataLesionPatientLevelResult;
  static names(): { [key: string]: string } {
    return {
      lesionList: 'LesionList',
      liverVolume: 'LiverVolume',
      mask: 'Mask',
      patientLevelProb: 'PatientLevelProb',
      patientLevelResult: 'PatientLevelResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesionList: { 'type': 'array', 'itemType': ScreenLCResponseBodyDataLesionLesionList },
      liverVolume: 'number',
      mask: 'string',
      patientLevelProb: 'number',
      patientLevelResult: ScreenLCResponseBodyDataLesionPatientLevelResult,
    };
  }

  validate() {
    if(Array.isArray(this.lesionList)) {
      $dara.Model.validateArray(this.lesionList);
    }
    if(this.patientLevelResult && typeof (this.patientLevelResult as any).validate === 'function') {
      (this.patientLevelResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

