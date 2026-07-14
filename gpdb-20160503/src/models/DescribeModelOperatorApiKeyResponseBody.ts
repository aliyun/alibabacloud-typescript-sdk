// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOperatorApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API key content.
   * 
   * @example
   * QEDGOTAJOG
   */
  apiKey?: string;
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
   * The creation time.
   * 
   * @example
   * 2026-06-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test-apikey
   */
  description?: string;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * https://xxxx
   */
  endpoint?: string;
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
      apiKey: 'ApiKey',
      apiKeyId: 'ApiKeyId',
      createTime: 'CreateTime',
      description: 'Description',
      endpoint: 'Endpoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      apiKeyId: 'number',
      createTime: 'string',
      description: 'string',
      endpoint: 'string',
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

