// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAccessKeyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The network access restriction policy.
   * 
   * A JSON-formatted string. For more information, see the AccessKeyPolicy structure description.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Status":"Inactive","Statements":[{"Value":"AllowAllVPC","Type":"VPCWhiteList","IPList":["::/0","0.0.0.0/0"]}]}
   */
  accessKeyPolicy?: string;
  /**
   * @remarks
   * The AccessKey ID.
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
   * If this parameter is left empty, the network access restriction policy is set for the specified AccessKey pair of the current user by default.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyPolicy: 'AccessKeyPolicy',
      userAccessKeyId: 'UserAccessKeyId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPolicy: 'string',
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

