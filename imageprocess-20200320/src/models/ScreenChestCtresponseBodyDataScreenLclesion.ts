// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataScreenLCLesionLesionList } from "./ScreenChestCtresponseBodyDataScreenLclesionLesionList";
import { ScreenChestCTResponseBodyDataScreenLCLesionPatientLevelResult } from "./ScreenChestCtresponseBodyDataScreenLclesionPatientLevelResult";


export class ScreenChestCTResponseBodyDataScreenLCLesion extends $dara.Model {
  lesionList?: ScreenChestCTResponseBodyDataScreenLCLesionLesionList[];
  liverVolume?: string;
  mask?: string;
  patientLevelProb?: number;
  patientLevelResult?: ScreenChestCTResponseBodyDataScreenLCLesionPatientLevelResult;
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
      lesionList: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataScreenLCLesionLesionList },
      liverVolume: 'string',
      mask: 'string',
      patientLevelProb: 'number',
      patientLevelResult: ScreenChestCTResponseBodyDataScreenLCLesionPatientLevelResult,
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

