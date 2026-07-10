// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Vehicle5ItemQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - **normal**: Not encrypted.
   * - **md5**: MD5-encrypted.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The license plate number.
   * 
   * > 
   * > - If ParamType is set to normal, enter the plaintext value.
   * > - If ParamType is set to md5, enter the plaintext of the license plate number excluding the last two characters, concatenated with the MD5-encrypted last two characters (32-bit lowercase MD5).
   * 
   * @example
   * 陕A9****
   */
  vehicleNum?: string;
  /**
   * @remarks
   * The vehicle type.
   * 
   * > 
   * > - 02: standard passenger car
   * > - 52: new energy passenger car.
   * 
   * @example
   * 02
   */
  vehicleType?: string;
  static names(): { [key: string]: string } {
    return {
      paramType: 'ParamType',
      vehicleNum: 'VehicleNum',
      vehicleType: 'VehicleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramType: 'string',
      vehicleNum: 'string',
      vehicleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

