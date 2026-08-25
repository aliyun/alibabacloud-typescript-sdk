// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2
   */
  boundAgentsCounts?: number;
  /**
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @example
   * cred-123456
   */
  credentialId?: string;
  /**
   * @example
   * {"apiKey":"****************"}
   */
  credentialMetadata?: string;
  /**
   * @example
   * apiKey
   */
  credentialType?: string;
  /**
   * @example
   * 线上环境调用模型服务使用的 API Key
   */
  description?: string;
  /**
   * @example
   * model-api-key
   */
  name?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  /**
   * @example
   * ws-123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      boundAgentsCounts: 'boundAgentsCounts',
      createdAt: 'createdAt',
      credentialId: 'credentialId',
      credentialMetadata: 'credentialMetadata',
      credentialType: 'credentialType',
      description: 'description',
      name: 'name',
      regionId: 'regionId',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundAgentsCounts: 'number',
      createdAt: 'string',
      credentialId: 'string',
      credentialMetadata: 'string',
      credentialType: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      updatedAt: 'string',
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

export class ListCredentialsResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  items?: ListCredentialsResponseBodyItems[];
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
   * 10
   */
  nextToken?: string;
  /**
   * @example
   * request-123456
   */
  requestId?: string;
  success?: boolean;
  /**
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
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
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListCredentialsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

