// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPredefinedModelsResponseBodyDataCapabilities extends $dara.Model {
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
   * Indicates whether the model is able to invoke multiple tool calling requests in a single response.
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

export class ListPredefinedModelsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The model capability configuration.
   */
  capabilities?: ListPredefinedModelsResponseBodyDataCapabilities;
  /**
   * @remarks
   * The model context window size in tokens. The value must be a positive integer.
   * 
   * @example
   * 128000
   */
  contextSize?: number;
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
   * The upstream model name.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The model release date in the format of YYYY-MM-DD.
   * 
   * @example
   * 2025-02-01
   */
  releaseDate?: string;
  static names(): { [key: string]: string } {
    return {
      capabilities: 'capabilities',
      contextSize: 'contextSize',
      maxTokens: 'maxTokens',
      modelName: 'modelName',
      releaseDate: 'releaseDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: ListPredefinedModelsResponseBodyDataCapabilities,
      contextSize: 'number',
      maxTokens: 'number',
      modelName: 'string',
      releaseDate: 'string',
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

export class ListPredefinedModelsResponseBody extends $dara.Model {
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
   * The list of predefined models.
   */
  data?: ListPredefinedModelsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListPredefinedModelsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

