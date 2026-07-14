// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelOperatorApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * API KEY ID。
   * 
   * @example
   * 1
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'ApiKeyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
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

