// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * If this parameter is empty, an AccessKey pair is created for the current user.
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

