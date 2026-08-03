// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API key content.
   * 
   * @example
   * sk-xxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * API KEY ID。
   * 
   * @example
   * api-xxxxxxx
   */
  keyId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      keyId: 'KeyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
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

