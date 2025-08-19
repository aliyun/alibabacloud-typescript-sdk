// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VehicleMetaVerifyV2Request extends $dara.Model {
  /**
   * @remarks
   * ID number.
   * 
   * This is a required field when VerifyMetaType is VEHICLE_3_META.
   * 
   * > 
   * > - When paramType is normal, enter plain text.
   * > - When paramType is md5, enter the first 6 digits in plain text + MD5 (32 lowercase) of the birth date + the last 4 digits in plain text.
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
   * - md5: Md5 encrypted.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * Name
   * > 
   * > - When paramType is normal, enter plain text.
   * > - When paramType is md5, enter the first character of the name as MD5 (32 lowercase) + the rest of the name in plain text.
   * 
   * @example
   * 张*
   */
  userName?: string;
  /**
   * @remarks
   * License plate number
   * 
   * > 
   * > - When paramType is normal, enter plain text.
   * > - When paramType is md5, enter all but the last two characters in plain text + the last two characters as MD5 (32 lowercase).
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
   * > - VEHICLE_2_META: Two-element verification, name + license plate number verification;
   * > - VEHICLE_3_META: Three-element verification, name + license plate number + ID number verification;
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

