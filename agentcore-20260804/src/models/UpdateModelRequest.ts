// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelRequestBodyCapabilities extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the model supports audio input or output. A value of true indicates that it is supported. A value of false indicates that it is not supported.
   */
  audio?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports document input. A value of true indicates that it is supported. A value of false indicates that it is not supported.
   */
  document?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports invoking multiple tools in a single response. A value of true indicates that it is supported. A value of false indicates that it is not supported.
   */
  multiToolCall?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports reasoning. A value of true indicates that it is supported. A value of false indicates that it is not supported. This field is a capability marker and is not used to set reasoning intensity or reasoning token budget.
   */
  reasoning?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports streaming tool invocation. A value of true indicates that it is supported. A value of false indicates that it is not supported.
   */
  streamToolCall?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports tool invocation. A value of true indicates that it is supported. A value of false indicates that it is not supported.
   */
  toolCall?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports video input. A value of true indicates that it is supported. A value of false indicates that it is not supported.
   */
  video?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports image input. A value of true indicates that it is supported. A value of false indicates that it is not supported.
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
   * The model capability configuration. When an object is provided, it replaces the existing capability configuration as a whole. Capability fields not included in the object are treated as false. Providing an empty object {} sets all capabilities to false. If this parameter is not provided or set to null, the original configuration is retained.
   */
  capabilities?: UpdateModelRequestBodyCapabilities;
  /**
   * @remarks
   * The context token limit of the model. The minimum value is 1000. The updated value must not be less than maxTokens. If maxTokens is not provided in this request, the existing value is used for validation. If this parameter is not provided or set to null, the original value is retained.
   * 
   * @example
   * 131072
   */
  contextSize?: number;
  /**
   * @remarks
   * The model description. The maximum length is 255 characters after leading and trailing whitespace is removed. Providing an empty string clears the description. If this parameter is not provided or set to null, the original value is retained. Modifying only the description does not refresh the model configuration of associated Agents.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of output tokens per generation. The value must be a positive integer. If contextSize is configured, the updated maxTokens must not exceed contextSize. If contextSize is not provided in this request, the existing value is used for validation. If this parameter is not provided or set to null, the original value is retained.
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
   * The model update request body. At least one non-null parameter must be provided among description, contextSize, maxTokens, and capabilities.
   */
  body?: UpdateModelRequestBody;
  /**
   * @remarks
   * The client token for idempotency. Not currently supported.
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

