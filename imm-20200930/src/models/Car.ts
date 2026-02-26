// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Boundary } from "./Boundary";
import { LicensePlate } from "./LicensePlate";


export class Car extends $dara.Model {
  /**
   * @remarks
   * The boundary information.
   */
  boundary?: Boundary;
  /**
   * @remarks
   * The vehicle color. Valid values
   * 
   * *   white
   * *   grey
   * *   yellow
   * *   red
   * *   green
   * *   blue
   * *   black
   * *   purple
   * *   brown
   * 
   * @example
   * white
   */
  carColor?: string;
  /**
   * @remarks
   * The confidence level of the vehicle color. Valid values: 0 to 1. The value 0 indicates the lowest confidence level. The value 1 indicates the highest confidence level.
   * 
   * @example
   * 0.604
   */
  carColorConfidence?: number;
  /**
   * @remarks
   * The vehicle type. Valid values:
   * 
   * *   car
   * *   bus
   * *   truck
   * *   van
   * 
   * @example
   * van
   */
  carType?: string;
  /**
   * @remarks
   * The confidence level of the vehicle type. Valid values: 0 to 1. The value 0 indicates the lowest confidence level. The value 1 indicates the highest confidence level.
   * 
   * @example
   * 0.516
   */
  carTypeConfidence?: number;
  /**
   * @remarks
   * The confidence level of the vehicle detection result. Valid values: 0 to 1. The value 0 indicates the lowest confidence level. The value 1 indicates the highest confidence level.
   * 
   * @example
   * 0.999
   */
  confidence?: number;
  /**
   * @remarks
   * The license plates.
   */
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

