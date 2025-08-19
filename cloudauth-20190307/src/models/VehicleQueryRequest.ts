// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VehicleQueryRequest extends $dara.Model {
  /**
   * @remarks
   * Parameter type:
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
   * License plate number
   * 
   * > 
   * > - When paramType is set to normal, enter the plain text.
   * > - When paramType is set to md5, enter the unencrypted part of the license plate number except for the last two characters + the MD5 (32 lowercase) encryption of the last two characters of the license plate.
   * 
   * @example
   * 陕A9****
   */
  vehicleNum?: string;
  /**
   * @remarks
   * Vehicle type
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

