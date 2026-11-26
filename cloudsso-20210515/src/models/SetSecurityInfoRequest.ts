// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSecurityInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The security email address of the user.
   * 
   * The value can be up to 64 characters in length, must conform to the standard email format, and cannot contain whitespace characters. The security email address of each user in the same directory must be unique. The uniqueness check is case-insensitive, but the original case is preserved when the address is saved.
   * 
   * This parameter is required.
   * 
   * @example
   * Alice@example.com
   */
  securityEmail?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  /**
   * @remarks
   * The verification type for the security information. Valid values:
   * 
   * - SecurityEmail: security email address.
   * 
   * This parameter is required.
   * 
   * @example
   * SecurityEmail
   */
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      securityEmail: 'SecurityEmail',
      userId: 'UserId',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      securityEmail: 'string',
      userId: 'string',
      verifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

