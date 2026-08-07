// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterApiKeysResponseBodyApiKeys extends $dara.Model {
  /**
   * @remarks
   * The API key of the model service.
   * 
   * @example
   * Scxxx-xxx-x-xxWW
   */
  apiKey?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-04-09T03:19:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the API key.
   * 
   * @example
   * my api key
   */
  description?: string;
  /**
   * @remarks
   * ApiKey ID
   * 
   * @example
   * 573
   */
  id?: string;
  /**
   * @remarks
   * The status of the API key.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      createTime: 'string',
      description: 'string',
      id: 'string',
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

export class DescribeAIDBClusterApiKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * API Keys。
   */
  apiKeys?: DescribeAIDBClusterApiKeysResponseBodyApiKeys[];
  pageNumber?: string;
  pageSize?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7F2007D3-7E74-4ECB-89A8-BF130D******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeys: 'ApiKeys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: { 'type': 'array', 'itemType': DescribeAIDBClusterApiKeysResponseBodyApiKeys },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
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

