// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelOperatorApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API key ID.
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
  /**
   * @remarks
   * The acceptance status of the creation request. If the request is successfully accepted, the value is always Creating, which does not indicate that the API key is available. Call DescribeModelOperatorApiKey or ListModelOperatorApiKeys to query the subsequent status. You can obtain the endpoint only when the status is Running, and obtain the plaintext key by calling DescribeModelOperatorApiKey. Each call to this operation creates a new API key. Do not repeatedly call this operation to check the progress.
   * 
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'ApiKeyId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

