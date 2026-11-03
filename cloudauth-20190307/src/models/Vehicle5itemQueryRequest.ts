// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Vehicle5ItemQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - **normal**: no encryption
   * - **md5**: MD5 encryption
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The license plate number.
   * 
   * - When paramType is set to normal, enter the plaintext.
   * - When paramType is set to md5, enter the plaintext of the license plate number excluding the last two characters, followed by the 32-bit lowercase MD5 hash of the last two characters.
   * 
   * @example
   * 陕A9****
   */
  vehicleNum?: string;
  /**
   * @remarks
   * The vehicle type. Valid values:
   * 
   * - 02: regular small passenger vehicle
   * - 52: new energy small passenger vehicle
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

