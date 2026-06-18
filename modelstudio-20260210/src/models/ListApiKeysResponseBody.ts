// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysResponseBodyApiKeysAuth extends $dara.Model {
  /**
   * @remarks
   * IP access whitelist.
   */
  accessIps?: string[];
  /**
   * @remarks
   * All: All permissions; Custom: Custom permissions.
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
   * API Key ID.
   * 
   * @example
   * 2965964
   */
  apiKeyId?: number;
  /**
   * @remarks
   * Value of the API Key.
   * 
   * @example
   * sk-ws-djI.8O7d*****2aICctnid4u4
   */
  apiKeyValue?: string;
  /**
   * @remarks
   * Permission settings.
   */
  auth?: ListApiKeysResponseBodyApiKeysAuth;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * 1378030599924858
   */
  createdBy?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Whether the API Key is disabled.
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
   * Creation time.
   * 
   * @example
   * 1774338222000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Workspace ID.
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
   * List of API Keys.
   */
  apiKeys?: ListApiKeysResponseBodyApiKeys[];
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Used to return more results. This parameter is not required for the first query. The token required for subsequent queries can be obtained from the returned results.
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
   * Whether the API call is successful:
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
   * Total number of records.
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

