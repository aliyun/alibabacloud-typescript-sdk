// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VehicleInsureQueryRequest extends $dara.Model {
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
   * > 
   * > - When `paramType` is set to `normal`, enter the plain text.
   * > - When `paramType` is set to `md5`, enter the plain text of all but the last two characters of the license plate + the MD5 encryption (32 lowercase characters) of the last two characters of the license plate.
   * 
   * @example
   * 陕A9****
   */
  vehicleNum?: string;
  /**
   * @remarks
   * Driver\\"s license vehicle type.
   * 
   * @example
   * 02
   */
  vehicleType?: string;
  /**
   * @remarks
   * Vehicle identification code, i.e., the vehicle VIN
   * 
   * 
   * > 
   * > - When `paramType` is set to `normal`, enter the plain text.
   * > - When `paramType` is set to `md5`, enter the plain text of all but the last four characters of the VIN + the MD5 encryption (32 lowercase characters) of the last four characters of the VIN.
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

