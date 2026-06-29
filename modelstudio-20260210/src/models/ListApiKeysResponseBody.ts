// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysResponseBodyApiKeysAuth extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist.
   */
  accessIps?: string[];
  /**
   * @remarks
   * All: all permissions. Custom: custom permissions.
   * 
   * @example
   * Custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessIps: 'accessIps',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIps: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessIps)) {
      $dara.Model.validateArray(this.accessIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * @remarks
   * The value of the API key.
   * 
   * @example
   * sk-ws-djI.8O7d*****2aICctnid4u4
   */
  apiKeyValue?: string;
  /**
   * @remarks
   * The permission settings.
   */
  auth?: ListApiKeysResponseBodyApiKeysAuth;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 1378030599924858
   */
  createdBy?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the API key is disabled. Valid values:
   * 
   * - **0**: Active.
   * - **1**: Disabled.
   * 
   * @example
   * 0
   */
  disabled?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1774338222000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-950f9aca7e76c816
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      apiKeyValue: 'apiKeyValue',
      auth: 'auth',
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
      auth: ListApiKeysResponseBodyApiKeysAuth,
      createdBy: 'string',
      description: 'string',
      disabled: 'number',
      gmtCreate: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.auth && typeof (this.auth as any).validate === 'function') {
      (this.auth as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of API keys.
   */
  apiKeys?: ListApiKeysResponseBodyApiKeys[];
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token used to retrieve more results. You do not need to provide this parameter for the first query. For subsequent queries, use the token obtained from the previous response.
   * 
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
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
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

