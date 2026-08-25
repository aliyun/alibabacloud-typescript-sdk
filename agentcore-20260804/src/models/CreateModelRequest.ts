// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelRequestBodyCapabilities extends $dara.Model {
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

export class CreateModelRequestBody extends $dara.Model {
  /**
   * @remarks
   * The model capability configuration.
   */
  capabilities?: CreateModelRequestBodyCapabilities;
  /**
   * @remarks
   * The model connection ID.
   * 
   * This parameter is required.
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
   * The upstream model name.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      capabilities: 'capabilities',
      connectionId: 'connectionId',
      contextSize: 'contextSize',
      description: 'description',
      maxTokens: 'maxTokens',
      modelName: 'modelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: CreateModelRequestBodyCapabilities,
      connectionId: 'string',
      contextSize: 'number',
      description: 'string',
      maxTokens: 'number',
      modelName: 'string',
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

export class CreateModelRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: CreateModelRequestBody;
  /**
   * @remarks
   * The client token for idempotence. Not currently supported.
   * 
   * @example
   * client-token-1
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateModelRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

