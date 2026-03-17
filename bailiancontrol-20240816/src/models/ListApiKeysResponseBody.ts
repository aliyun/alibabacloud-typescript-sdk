// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysResponseBodyApiKeys extends $dara.Model {
  apiKeyValue?: string;
  apikeyId?: string;
  blocked?: number;
  createTime?: number;
  creator?: string;
  description?: string;
  expireTime?: number;
  extData?: string;
  parentUid?: string;
  type?: number;
  uid?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyValue: 'apiKeyValue',
      apikeyId: 'apikeyId',
      blocked: 'blocked',
      createTime: 'createTime',
      creator: 'creator',
      description: 'description',
      expireTime: 'expireTime',
      extData: 'extData',
      parentUid: 'parentUid',
      type: 'type',
      uid: 'uid',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyValue: 'string',
      apikeyId: 'string',
      blocked: 'number',
      createTime: 'number',
      creator: 'string',
      description: 'string',
      expireTime: 'number',
      extData: 'string',
      parentUid: 'string',
      type: 'number',
      uid: 'string',
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
   * apiKey
   */
  apiKeys?: ListApiKeysResponseBodyApiKeys[];
  code?: string;
  httpStatusCode?: number;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  success?: boolean;
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

