// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOperatorApiKeyResponseBody extends $dara.Model {
  /**
   * @example
   * QEDGOTAJOG
   */
  apiKey?: string;
  /**
   * @example
   * 1
   */
  apiKeyId?: number;
  /**
   * @example
   * 2026-06-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * test-apikey
   */
  description?: string;
  /**
   * @example
   * https://xxxx
   */
  endpoint?: string;
  /**
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

