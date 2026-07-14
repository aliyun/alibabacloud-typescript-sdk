// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelOperatorApiKeysResponseBodyApiKeys extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'ApiKeyId',
      createTime: 'CreateTime',
      description: 'Description',
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      createTime: 'string',
      description: 'string',
      endpoint: 'string',
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
   * The list of API keys.
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
   * The number of records on the current page.
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
   * The total number of records.
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

