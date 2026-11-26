// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityInfoRequest extends $dara.Model {
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
   * The verification type of the security information. Valid values:
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
      userId: 'UserId',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
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

