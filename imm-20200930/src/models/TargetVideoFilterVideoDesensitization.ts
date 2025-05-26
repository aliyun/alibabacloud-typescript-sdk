// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TargetVideoFilterVideoDesensitizationFace } from "./TargetVideoFilterVideoDesensitizationFace";
import { TargetVideoFilterVideoDesensitizationLicensePlate } from "./TargetVideoFilterVideoDesensitizationLicensePlate";


export class TargetVideoFilterVideoDesensitization extends $dara.Model {
  face?: TargetVideoFilterVideoDesensitizationFace;
  licensePlate?: TargetVideoFilterVideoDesensitizationLicensePlate;
  static names(): { [key: string]: string } {
    return {
      face: 'Face',
      licensePlate: 'LicensePlate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      face: TargetVideoFilterVideoDesensitizationFace,
      licensePlate: TargetVideoFilterVideoDesensitizationLicensePlate,
    };
  }

  validate() {
    if(this.face && typeof (this.face as any).validate === 'function') {
      (this.face as any).validate();
    }
    if(this.licensePlate && typeof (this.licensePlate as any).validate === 'function') {
      (this.licensePlate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

