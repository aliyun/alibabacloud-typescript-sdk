// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelConnectionsResponseBodyItemsModels extends $dara.Model {
  /**
   * @example
   * model-1
   */
  modelId?: string;
  /**
   * @example
   * qwen-max
   */
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'modelId',
      modelName: 'modelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      modelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelConnectionsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 1
   */
  apiKeyCount?: number;
  /**
   * @example
   * mc-1
   */
  connectionId?: string;
  /**
   * @example
   * 2026-08-09T00:00:00Z
   */
  createdAt?: string;
  credentialConfigured?: boolean;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  endpoint?: string;
  models?: ListModelConnectionsResponseBodyItemsModels[];
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * OpenAI/v1
   */
  protocol?: string;
  /**
   * @example
   * qwen
   */
  providerType?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * GatewayOperationException
   */
  statusReason?: string;
  /**
   * @example
   * 2026-08-09T00:00:00Z
   */
  updatedAt?: string;
  /**
   * @example
   * ws-1
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyCount: 'apiKeyCount',
      connectionId: 'connectionId',
      createdAt: 'createdAt',
      credentialConfigured: 'credentialConfigured',
      description: 'description',
      endpoint: 'endpoint',
      models: 'models',
      name: 'name',
      protocol: 'protocol',
      providerType: 'providerType',
      status: 'status',
      statusReason: 'statusReason',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyCount: 'number',
      connectionId: 'string',
      createdAt: 'string',
      credentialConfigured: 'boolean',
      description: 'string',
      endpoint: 'string',
      models: { 'type': 'array', 'itemType': ListModelConnectionsResponseBodyItemsModels },
      name: 'string',
      protocol: 'string',
      providerType: 'string',
      status: 'string',
      statusReason: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelConnectionsResponseBody extends $dara.Model {
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
  items?: ListModelConnectionsResponseBodyItems[];
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
   * bW9kZWwtbWFuYWdlbWVudC1vZmZzZXQ6bW9kZWwtY29ubmVjdGlvbjoxMA
   */
  nextToken?: string;
  /**
   * @example
   * request-1
   */
  requestId?: string;
  success?: boolean;
  /**
   * @example
   * 1
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
      items: { 'type': 'array', 'itemType': ListModelConnectionsResponseBodyItems },
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

