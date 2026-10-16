// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelRequestBodyCapabilities extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the model supports audio input or output. Valid values:
   * - true: Supported.
   * - false: Not supported.
   */
  audio?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports document input. Valid values:
   * - true: Supported.
   * - false: Not supported.
   */
  document?: boolean;
  /**
   * @remarks
   * Specifies whether the model is able to invoke tool calling multiple times in a single response. Valid values:
   * - true: Supported.
   * - false: Not supported.
   */
  multiToolCall?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports reasoning capabilities. Valid values:
   * - true: Supported.
   * - false: Not supported.
   * This field is a capability flag and is not used to set the reasoning intensity or reasoning token budget.
   */
  reasoning?: boolean;
  /**
   * @remarks
   * Specifies whether the model is able to invoke streaming tool calling. Valid values:
   * - true: Supported.
   * - false: Not supported.
   */
  streamToolCall?: boolean;
  /**
   * @remarks
   * Specifies whether the model is able to invoke tool calling. Valid values:
   * - true: Supported.
   * - false: Not supported.
   */
  toolCall?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports video input. Valid values:
   * - true: Supported.
   * - false: Not supported.
   */
  video?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports image input. Valid values:
   * - true: Supported.
   * - false: Not supported.
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

export class UpdateModelRequestBody extends $dara.Model {
  /**
   * @remarks
   * The model capability configuration. When an object is passed, the original capability configuration is replaced as a whole. Capability fields that are not specified in the object are treated as false. Passing an empty object {} sets all capabilities to false. If this parameter is not passed or is set to null, the original configuration is retained.
   */
  capabilities?: UpdateModelRequestBodyCapabilities;
  /**
   * @remarks
   * The context token limit of the model. The minimum value is 1000. The updated value must not be less than maxTokens. If maxTokens is not specified in the current request, the existing value is used for validation. If this parameter is not passed or is set to null, the original value is retained.
   * 
   * @example
   * 131072
   */
  contextSize?: number;
  /**
   * @remarks
   * The model description. The maximum length is 255 characters after leading and trailing whitespace is removed. Passing an empty string clears the description. If this parameter is not passed or is set to null, the original value is retained. Modifying only the description does not refresh the model configurations of associated agents.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of output tokens for a single generation of the model. The value must be a positive integer. If contextSize is configured, the updated maxTokens must not be greater than contextSize. If contextSize is not specified in the current request, the existing value is used for validation. If this parameter is not passed or is set to null, the original value is retained.
   * 
   * @example
   * 8192
   */
  maxTokens?: number;
  static names(): { [key: string]: string } {
    return {
      capabilities: 'capabilities',
      contextSize: 'contextSize',
      description: 'description',
      maxTokens: 'maxTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: UpdateModelRequestBodyCapabilities,
      contextSize: 'number',
      description: 'string',
      maxTokens: 'number',
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

export class UpdateModelRequest extends $dara.Model {
  /**
   * @remarks
   * The model update request body. You must specify at least one non-null parameter among description, contextSize, maxTokens, and capabilities.
   */
  body?: UpdateModelRequestBody;
  /**
   * @remarks
   * The client token used for idempotence. This parameter is not supported.
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
      body: UpdateModelRequestBody,
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

