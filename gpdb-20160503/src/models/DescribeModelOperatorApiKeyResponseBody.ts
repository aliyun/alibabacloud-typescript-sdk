// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOperatorApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The plaintext API key. This field is returned only when Status is Running.
   * 
   * @example
   * QEDGOTAJOG
   */
  apiKey?: string;
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
   * The endpoint of the model operator service. This field is returned only when Status is Running.
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
  /**
   * @remarks
   * The status of the API key. Valid values:
   * 
   * - Creating: The API key is being created.
   * - Running: The API key is running.
   * - Locked: The API key is locked and cannot be used to call the model operator service.
   * - Deleting: The API key is being deleted. You can still query it by calling this operation, but it is no longer displayed in the results of ListModelOperatorApiKeys.
   * 
   * The plaintext API key and endpoint are returned only when Status is Running. After the deletion is complete, this operation returns a resource not found error. The status indicates the processing result of the control plane. A short propagation delay may occur before the status takes effect on the data plane.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      apiKeyId: 'ApiKeyId',
      createTime: 'CreateTime',
      description: 'Description',
      endpoint: 'Endpoint',
      requestId: 'RequestId',
      status: 'Status',
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

