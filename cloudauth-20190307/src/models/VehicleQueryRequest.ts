// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VehicleQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - **normal**: Unencrypted.
   * - **md5**: MD5 encrypted.
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
   * > - If paramType is set to normal, enter the plaintext.
   * > - If paramType is set to md5, enter the plaintext of the license plate number excluding the last two characters, followed by the MD5 hash of the last two characters (32-character lowercase MD5).
   * 
   * @example
   * 陕A9****
   */
  vehicleNum?: string;
  /**
   * @remarks
   * The vehicle type.
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

