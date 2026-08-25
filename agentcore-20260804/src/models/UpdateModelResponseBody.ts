// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelResponseBodyDataCapabilities extends $dara.Model {
  audio?: boolean;
  document?: boolean;
  multiToolCall?: boolean;
  reasoning?: boolean;
  streamToolCall?: boolean;
  toolCall?: boolean;
  video?: boolean;
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

export class UpdateModelResponseBodyData extends $dara.Model {
  capabilities?: UpdateModelResponseBodyDataCapabilities;
  /**
   * @example
   * mc-1
   */
  connectionId?: string;
  /**
   * @example
   * 128000
   */
  contextSize?: number;
  /**
   * @example
   * 2026-08-09T00:00:00Z
   */
  createdAt?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * 131072
   */
  maxTokens?: number;
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
      capabilities: UpdateModelResponseBodyDataCapabilities,
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

export class UpdateModelResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: UpdateModelResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * request-1
   */
  requestId?: string;
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
      data: UpdateModelResponseBodyData,
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

