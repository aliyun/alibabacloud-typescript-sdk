// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VehicleMetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * This parameter is required when VerifyMetaType is set to VEHICLE_3_META.
   * > 
   * > - When paramType is set to normal, enter the plaintext.
   * > - When paramType is set to md5, enter the first 6 digits of the ID card number in plaintext + the MD5-encrypted date of birth (32-bit lowercase MD5) + the last 4 digits of the ID card number.
   * 
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - normal: not encrypted.
   * - md5: MD5-encrypted.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The name.
   * 
   * > Note
   * > - When paramType is set to normal, enter the plaintext.
   * > - When paramType is set to md5, enter the MD5-encrypted first character of the name (32-bit lowercase MD5) + the remaining characters of the name in plaintext.
   * 
   * @example
   * 张**
   */
  userName?: string;
  /**
   * @remarks
   * The license plate number.
   * 
   * > 
   * > - When paramType is set to normal, enter the plaintext.
   * > - When paramType is set to md5, enter the characters of the license plate number except the last two in plaintext + the MD5-encrypted last two characters (32-bit lowercase MD5).
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
  /**
   * @remarks
   * The verification type.
   * 
   * > 
   * > - VEHICLE_2_META: two-element verification. Verifies the name and license plate number.
   * > - VEHICLE_3_META: three-element verification. Verifies the name, license plate number, and ID card number.
   * 
   * @example
   * VEHICLE_2_META
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

