// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VehicleInsureQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter type. Valid values:
   * - **normal**: No encryption.
   * - **md5**: MD5 encryption.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The license plate number.
   * > 
   * > - If paramType is set to normal, enter the plaintext.
   * > - If paramType is set to md5, enter the plaintext of the license plate number excluding the last two characters, followed by the MD5 hash (32-character lowercase) of the last two characters.
   * 
   * @example
   * 陕A9****
   */
  vehicleNum?: string;
  /**
   * @remarks
   * The permitted vehicle type of the driver\\"s license.
   * 
   * @example
   * 02
   */
  vehicleType?: string;
  /**
   * @remarks
   * The vehicle identification number (VIN).
   * > 
   * > - If paramType is set to normal, enter the plaintext.
   * > - If paramType is set to md5, enter the plaintext of the VIN excluding the last four characters, followed by the MD5 hash (32-character lowercase) of the last four characters.
   * 
   * @example
   * LB**************
   */
  vin?: string;
  static names(): { [key: string]: string } {
    return {
      paramType: 'ParamType',
      vehicleNum: 'VehicleNum',
      vehicleType: 'VehicleType',
      vin: 'Vin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramType: 'string',
      vehicleNum: 'string',
      vehicleType: 'string',
      vin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

