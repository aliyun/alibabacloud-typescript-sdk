// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user. If this parameter is left empty, an access key is created for the current user by default.
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

