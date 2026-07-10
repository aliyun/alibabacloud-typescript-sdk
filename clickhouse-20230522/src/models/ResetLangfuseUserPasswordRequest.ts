// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetLangfuseUserPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The Langfuse instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lfs-****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * john@company.com
   */
  email?: string;
  /**
   * @remarks
   * The new user password. The password must meet the following rules:
   * 
   * The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * The supported special characters are !@#$%^&*()_+-=.
   * 
   * The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 2F9e9@******
   */
  newPassword?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      email: 'Email',
      newPassword: 'NewPassword',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      email: 'string',
      newPassword: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

