// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * If this parameter is empty, the AccessKey pairs of the current user are queried.
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

