// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelResponseBodyDataCapabilities extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the model supports audio input or output.
   */
  audio?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports document input.
   */
  document?: boolean;
  /**
   * @remarks
   * Specifies whether the model is able to invoke multiple tools in a single response.
   */
  multiToolCall?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports reasoning capabilities.
   */
  reasoning?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports streaming tool calling.
   */
  streamToolCall?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports tool calling.
   */
  toolCall?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports video input.
   */
  video?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports image input.
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

export class CreateModelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The model capability configuration.
   */
  capabilities?: CreateModelResponseBodyDataCapabilities;
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
   * The resource creation time in RFC 3339 UTC format.
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
   * The maximum number of output tokens supported per model generation.
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
   * The resource last update time in RFC 3339 UTC format.
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
      capabilities: CreateModelResponseBodyDataCapabilities,
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

export class CreateModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value SUCCESS indicates success.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The model information after creation.
   */
  data?: CreateModelResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. The value 200 indicates success.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
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
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateModelResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

