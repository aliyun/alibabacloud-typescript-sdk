// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPasskeysResponseBodyPasskeys extends $dara.Model {
  /**
   * @remarks
   * The time when the passkey was created. The value is a timestamp.
   * 
   * @example
   * 1737450279
   */
  createDate?: string;
  /**
   * @remarks
   * The time when the passkey was last used. The value is a timestamp.
   * 
   * @example
   * 1737450390
   */
  lastUseDate?: string;
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
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      lastUseDate: 'LastUseDate',
      passkeyId: 'PasskeyId',
      passkeyName: 'PasskeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      lastUseDate: 'string',
      passkeyId: 'string',
      passkeyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPasskeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the passkeys.
   */
  passkeys?: ListPasskeysResponseBodyPasskeys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passkeys: 'Passkeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passkeys: { 'type': 'array', 'itemType': ListPasskeysResponseBodyPasskeys },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.passkeys)) {
      $dara.Model.validateArray(this.passkeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

