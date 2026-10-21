// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePasskeyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the passkey.
   * 
   * This parameter is actually required. If you do not specify this parameter, the call fails and the error code `MissingPasskeyId` is returned.
   * 
   * @example
   * PASSKEY-CuZjEHhWcr7GIQOMGvkS
   */
  passkeyId?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      passkeyId: 'PasskeyId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passkeyId: 'string',
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

