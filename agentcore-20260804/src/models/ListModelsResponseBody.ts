// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelsResponseBodyItemsCapabilities extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the model supports audio input or output.
   */
  audio?: boolean;
  /**
   * @remarks
   * Indicates whether the model supports document input.
   */
  document?: boolean;
  /**
   * @remarks
   * Indicates whether the model supports invoking multiple tools in a single response.
   */
  multiToolCall?: boolean;
  /**
   * @remarks
   * Indicates whether the model supports reasoning capabilities.
   */
  reasoning?: boolean;
  /**
   * @remarks
   * Indicates whether the model supports streaming tool calling.
   */
  streamToolCall?: boolean;
  /**
   * @remarks
   * Indicates whether the model supports tool calling.
   */
  toolCall?: boolean;
  /**
   * @remarks
   * Indicates whether the model supports video input.
   */
  video?: boolean;
  /**
   * @remarks
   * Indicates whether the model supports image input.
   */
  vision?: boolean;
  static names(): { [key: string]: string } {
    return {
      audio: 'audio',
      document: 'document',
      multiToolCall: 'multiToolCall',
      reasoning: 'reasoning',
      streamToolCall: 'streamToolCall',
      toolCall: 'toolCall',
      video: 'video',
      vision: 'vision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'boolean',
      document: 'boolean',
      multiToolCall: 'boolean',
      reasoning: 'boolean',
      streamToolCall: 'boolean',
      toolCall: 'boolean',
      video: 'boolean',
      vision: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The model capability configuration.
   */
  capabilities?: ListModelsResponseBodyItemsCapabilities;
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
   * The model context window size, in tokens. The value must be a positive integer.
   * 
   * @example
   * 128000
   */
  contextSize?: number;
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
   * The model description. Maximum length: 255 characters.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of output tokens supported by the model in a single generation.
   * 
   * @example
   * 131072
   */
  maxTokens?: number;
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
      capabilities: 'capabilities',
      connectionId: 'connectionId',
      contextSize: 'contextSize',
      createdAt: 'createdAt',
      description: 'description',
      maxTokens: 'maxTokens',
      modelId: 'modelId',
      modelName: 'modelName',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: ListModelsResponseBodyItemsCapabilities,
      connectionId: 'string',
      contextSize: 'number',
      createdAt: 'string',
      description: 'string',
      maxTokens: 'number',
      modelId: 'string',
      modelName: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.capabilities && typeof (this.capabilities as any).validate === 'function') {
      (this.capabilities as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBody extends $dara.Model {
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
   * The list of models.
   */
  items?: ListModelsResponseBodyItems[];
  /**
   * @remarks
   * The number of results per page. Valid values: 0 to 100. If this parameter is not set or set to 0, the default value 10 is used.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The message of the request processing result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token. Pass the token returned from the previous query. An empty response indicates that no more pages are available.
   * 
   * @example
   * bW9kZWwtbWFuYWdlbWVudC1vZmZzZXQ6bW9kZWw6MTA
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
      items: { 'type': 'array', 'itemType': ListModelsResponseBodyItems },
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

