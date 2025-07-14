// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserMFAInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The logon name of the RAM user. This parameter is differently set in the following scenarios:
   * 
   * *   If you use a RAM user to call this operation, this parameter can be left empty. If you do not specify this parameter, information about the MFA device that is bound to the RAM user is queried.
   * *   If you use an Alibaba Cloud account to call this operation, you must set this parameter to the logon name of the RAM user that you want to query.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

