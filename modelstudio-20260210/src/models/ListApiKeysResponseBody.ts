// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysResponseBodyApiKeys extends $dara.Model {
  /**
   * @remarks
   * API Key ID。
   * 
   * @example
   * 2965964
   */
  apiKeyId?: number;
  /**
   * @example
   * sk-ws-djI.8O7d*****2aICctnid4u4
   */
  apiKeyValue?: string;
  /**
   * @example
   * 1378030599924858
   */
  createdBy?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 0
   */
  disabled?: number;
  /**
   * @example
   * 1774338222000
   */
  gmtCreate?: number;
  /**
   * @example
   * ws-950f9aca7e76c816
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      apiKeyValue: 'apiKeyValue',
      createdBy: 'createdBy',
      description: 'description',
      disabled: 'disabled',
      gmtCreate: 'gmtCreate',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      apiKeyValue: 'string',
      createdBy: 'string',
      description: 'string',
      disabled: 'number',
      gmtCreate: 'number',
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
  apiKeys?: ListApiKeysResponseBodyApiKeys[];
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * lwytFRtLdNk=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E4C14AE6-E987-5C2F-9230-9960AB48F4F2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 4
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

