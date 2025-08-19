// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VehicleMetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * ID number.
   * 
   * This is a required field when VerifyMetaType is set to VEHICLE_3_META.
   * > 
   * > - When paramType is set to normal, enter the plain text.
   * > - When paramType is set to md5, enter the first 6 digits in plain text + the birth date encrypted with MD5 (32 lowercase characters) + the last 4 digits in plain text.
   * 
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @remarks
   * Parameter type:
   * 
   * - normal: Unencrypted.
   * - md5: Encrypted with MD5.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * Name
   * 
   * > This is an explanation
   * > - When paramType is set to normal, enter the plain text.
   * > - When paramType is set to md5, encrypt the first character of the name with MD5 (32 lowercase characters) + the rest of the name in plain text.
   * 
   * @example
   * 张**
   */
  userName?: string;
  /**
   * @remarks
   * Vehicle license plate
   * 
   * > 
   * > - When paramType is set to normal, enter the plain text.
   * > - When paramType is set to md5, enter the part of the license plate except for the last two characters in plain text + the last two characters of the license plate encrypted with MD5 (32 lowercase characters).
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
  /**
   * @remarks
   * Verification type
   * 
   * > 
   * > - VEHICLE_2_META: Two-element verification, name + vehicle license plate verification;
   * > - VEHICLE_3_META: Three-element verification, name + vehicle license plate + ID number verification;
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

