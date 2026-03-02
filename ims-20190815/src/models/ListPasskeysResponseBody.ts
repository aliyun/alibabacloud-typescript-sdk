// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPasskeysResponseBodyPasskeys extends $dara.Model {
  createDate?: string;
  lastUseDate?: string;
  passkeyId?: string;
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
  passkeys?: ListPasskeysResponseBodyPasskeys[];
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

