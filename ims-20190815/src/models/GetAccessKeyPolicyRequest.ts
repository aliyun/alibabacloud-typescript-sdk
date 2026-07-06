// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The access key ID.
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
   * If this parameter is left empty, the network access restriction policy of the specified access key for the current user is returned by default.
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

