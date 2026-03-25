// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysResponseBodyApiKeys extends $dara.Model {
  /**
   * @remarks
   * API Key ID。
   * 
   * @example
   * 3536766
   */
  apiKeyId?: number;
  /**
   * @remarks
   * API Key Value。
   * 
   * @example
   * sk-f83898fqwer340049bae6209cbb0bc29
   */
  apiKeyValue?: string;
  /**
   * @example
   * 1378030599924858
   */
  creator?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 1774338222000
   */
  gmtCreate?: number;
  /**
   * @example
   * false
   */
  isBlocked?: number;
  /**
   * @example
   * llm-u6857quj723rf51z
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      apiKeyValue: 'apiKeyValue',
      creator: 'creator',
      description: 'description',
      gmtCreate: 'gmtCreate',
      isBlocked: 'isBlocked',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      apiKeyValue: 'string',
      creator: 'string',
      description: 'string',
      gmtCreate: 'number',
      isBlocked: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * API Key。
   */
  apiKeys?: ListApiKeysResponseBodyApiKeys[];
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * otqqmWigyzM=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9B9650D6-68B0-55CC-845D-E8C1E5BED38B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeys: 'apiKeys',
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: { 'type': 'array', 'itemType': ListApiKeysResponseBodyApiKeys },
      code: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

