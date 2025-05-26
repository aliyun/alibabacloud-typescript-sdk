// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Boundary } from "./Boundary";
import { LicensePlate } from "./LicensePlate";


export class Car extends $dara.Model {
  boundary?: Boundary;
  carColor?: string;
  carColorConfidence?: number;
  carType?: string;
  carTypeConfidence?: number;
  confidence?: number;
  licensePlates?: LicensePlate[];
  static names(): { [key: string]: string } {
    return {
      boundary: 'Boundary',
      carColor: 'CarColor',
      carColorConfidence: 'CarColorConfidence',
      carType: 'CarType',
      carTypeConfidence: 'CarTypeConfidence',
      confidence: 'Confidence',
      licensePlates: 'LicensePlates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: Boundary,
      carColor: 'string',
      carColorConfidence: 'number',
      carType: 'string',
      carTypeConfidence: 'number',
      confidence: 'number',
      licensePlates: { 'type': 'array', 'itemType': LicensePlate },
    };
  }

  validate() {
    if(this.boundary && typeof (this.boundary as any).validate === 'function') {
      (this.boundary as any).validate();
    }
    if(Array.isArray(this.licensePlates)) {
      $dara.Model.validateArray(this.licensePlates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

