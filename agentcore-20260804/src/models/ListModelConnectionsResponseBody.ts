// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelConnectionsResponseBodyItemsModels extends $dara.Model {
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * model-1
   */
  modelId?: string;
  /**
   * @remarks
   * The upstream model name.
   * 
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
   * @remarks
   * The number of API keys configured for the model connection.
   * 
   * @example
   * 1
   */
  apiKeyCount?: number;
  /**
   * @remarks
   * The model connection ID.
   * 
   * @example
   * mc-1
   */
  connectionId?: string;
  /**
   * @remarks
   * The time when the resource was created, in RFC 3339 UTC format.
   * 
   * @example
   * 2026-08-09T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Indicates whether access credentials have been configured for the model connection.
   */
  credentialConfigured?: boolean;
  /**
   * @remarks
   * The description of the model connection. Maximum length: 255 characters.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The absolute HTTP or HTTPS address of the upstream model service. Maximum length: 1024 characters.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  endpoint?: string;
  /**
   * @remarks
   * The list of model summaries associated with the model connection.
   */
  models?: ListModelConnectionsResponseBodyItemsModels[];
  /**
   * @remarks
   * The model connection name. The name must be 1 to 128 non-whitespace characters in length.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The model invocation protocol. Currently only OpenAI/v1 is supported. If not configured in Settings when the model connection is created, this default value is used.
   * 
   * @example
   * OpenAI/v1
   */
  protocol?: string;
  /**
   * @remarks
   * The model provider type.
   * 
   * @example
   * qwen
   */
  providerType?: string;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The failure summary returned when the model connection fails to be published or fails to be deleted but remains in the Deleting state. This value is empty for other states.
   * 
   * @example
   * GatewayOperationException
   */
  statusReason?: string;
  /**
   * @remarks
   * The time when the resource was last updated, in RFC 3339 UTC format.
   * 
   * @example
   * 2026-08-09T00:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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
   * @remarks
   * The business status code. A value of SUCCESS indicates success.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of model connections.
   */
  items?: ListModelConnectionsResponseBodyItems[];
  /**
   * @remarks
   * The number of records per page. Valid values: 0 to 100. If this parameter is not set or is set to 0, the default value 10 is used.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The request processing result message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token. Pass the token returned in the previous query. An empty response indicates that no more pages are available.
   * 
   * @example
   * bW9kZWwtbWFuYWdlbWVudC1vZmZzZXQ6bW9kZWwtY29ubmVjdGlvbjoxMA
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of resources that match the query conditions.
   * 
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

