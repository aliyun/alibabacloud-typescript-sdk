// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * >  You must specify only one of the following parameters: `UserPrincipalName` and `UserId`.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * >  You must specify only one of the following parameters: `UserPrincipalName` and `UserId`.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

