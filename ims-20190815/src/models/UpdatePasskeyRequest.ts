// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePasskeyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the passkey.
   * 
   * @example
   * PASSKEY-CuZjEHhWcr7GIQOMGvkS
   */
  passkeyId?: string;
  /**
   * @remarks
   * The name of the passkey.
   * 
   * @example
   * device1
   */
  passkeyName?: string;
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
      passkeyName: 'PasskeyName',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passkeyId: 'string',
      passkeyName: 'string',
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

