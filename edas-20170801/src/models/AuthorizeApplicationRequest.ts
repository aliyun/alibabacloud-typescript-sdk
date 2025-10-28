// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can specify multiple IDs. Separate multiple IDs with semicolons (;). If you leave this parameter empty, the permissions on the application are revoked.
   * 
   * This parameter is required.
   * 
   * @example
   * 5fdf50e8-*****;696-******
   */
  appIds?: string;
  /**
   * @remarks
   * The ID of the RAM user to be authorized. The value of the parameter is in the `sub-account name@primary account UID` format.
   * 
   * This parameter is required.
   * 
   * @example
   * test@133434434****
   */
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      targetUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

