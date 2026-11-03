// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VehicleMetaVerifyV2Request extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * This parameter is required when VerifyMetaType is set to VEHICLE_3_META.
   * 
   * > 
   * > - When paramType is set to normal, enter the plaintext.
   * > - When paramType is set to md5, enter the first 6 digits of the ID card number in plaintext + the 32-bit lowercase MD5 hash of the birth date + the last 4 digits of the ID card number.
   * 
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * - normal: not encrypted.
   * - md5: MD5 encrypted.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The name.
   * > 
   * > - When paramType is set to normal, enter the plaintext.
   * > - When paramType is set to md5, enter the 32-bit lowercase MD5 hash of the first character of the name + the rest of the name in plaintext.
   * 
   * @example
   * Zhang*
   */
  userName?: string;
  /**
   * @remarks
   * The license plate number.
   * 
   * > 
   * > - When paramType is set to normal, enter the plaintext.
   * > - When paramType is set to md5, enter the license plate number except the last two characters in plaintext + the 32-bit lowercase MD5 hash of the last two characters of the license plate.
   * 
   * @example
   * Shaanxi A9****
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
  /**
   * @remarks
   * The verification type. Valid values:
   * > 
   * > - VEHICLE_2_META: two-element verification, which verifies the name and license plate number.
   * > - VEHICLE_3_META: three-element verification, which verifies the name, license plate number, and ID card number.
   * 
   * @example
   * VEHICLE_3_META
   */
  verifyMetaType?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      paramType: 'ParamType',
      userName: 'UserName',
      vehicleNum: 'VehicleNum',
      vehicleType: 'VehicleType',
      verifyMetaType: 'VerifyMetaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
      paramType: 'string',
      userName: 'string',
      vehicleNum: 'string',
      vehicleType: 'string',
      verifyMetaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

