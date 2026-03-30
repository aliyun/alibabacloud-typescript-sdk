// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccessKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AccessKey pair that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * LTAI*******************
   */
  userAccessKeyId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * If this parameter is empty, the AccessKey pair of the current user is deleted.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userAccessKeyId: 'UserAccessKeyId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userAccessKeyId: 'string',
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

