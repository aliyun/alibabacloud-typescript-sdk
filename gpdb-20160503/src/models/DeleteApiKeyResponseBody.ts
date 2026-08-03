// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * API KEY ID。
   * 
   * @example
   * api-xxxxxx
   */
  keyId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

