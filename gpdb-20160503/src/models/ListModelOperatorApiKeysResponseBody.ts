// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelOperatorApiKeysResponseBodyApiKeys extends $dara.Model {
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
   * The complete HTTP(S) endpoint for calling the model operator service. This field is returned only when Status is Running. This field is not returned for other statuses. The list operation does not return the plaintext API key. To obtain the plaintext API key, call DescribeModelOperatorApiKey.
   * 
   * @example
   * https://xxxx
   */
  endpoint?: string;
  /**
   * @remarks
   * The status of the API key. The statuses returned in the list include:
   * 
   * - Creating: The API key is being created.
   * - Running: The API key is running.
   * - Locked: The API key is locked and cannot be used to call the model operator service. This status may also be displayed when the API key is being locked or unlocked.
   * 
   * API keys for which a deletion request has been accepted no longer appear in the list. You can call DescribeModelOperatorApiKey to query the Deleting status. After the cleanup is complete, a detail query returns a resource not found error. The status indicates the processing result on the control plane. A short propagation delay may occur before the status takes effect on the data plane.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'ApiKeyId',
      createTime: 'CreateTime',
      description: 'Description',
      endpoint: 'Endpoint',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      createTime: 'string',
      description: 'string',
      endpoint: 'string',
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

export class ListModelOperatorApiKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of API keys for which no deletion request has been initiated. After a deletion request is accepted, the key no longer appears in this list.
   */
  apiKeys?: ListModelOperatorApiKeysResponseBodyApiKeys[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
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
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeys: 'ApiKeys',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: { 'type': 'array', 'itemType': ListModelOperatorApiKeysResponseBodyApiKeys },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

