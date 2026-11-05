// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyLastUsedRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access key to query.
   * 
   * This parameter is required.
   * 
   * @example
   * LTAI*******************
   */
  userAccessKeyId?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user. If this parameter is left empty, the access keys of the current user are queried by default.
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

