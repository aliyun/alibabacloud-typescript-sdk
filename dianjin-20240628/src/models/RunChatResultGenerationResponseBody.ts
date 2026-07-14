// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunChatResultGenerationResponseBodyChoicesMessage extends $dara.Model {
  /**
   * @remarks
   * Message content.
   * 
   * @example
   * 你是谁
   */
  content?: string;
  /**
   * @remarks
   * Role.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * List of tool calls.
   */
  toolCalls?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
      toolCalls: 'toolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
      toolCalls: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.toolCalls)) {
      $dara.Model.validateArray(this.toolCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationResponseBodyChoices extends $dara.Model {
  /**
   * @remarks
   * Three possible values:
   * 
   * - null while generating;
   * 
   * - "stop" if generation ends due to a stop condition in the input parameters;
   * 
   * - "length" if generation ends because the output is too long.
   * 
   * @example
   * null
   */
  finishReason?: string;
  /**
   * @remarks
   * Sequence number of the generated result. Default is 0.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * Chat message.
   */
  message?: RunChatResultGenerationResponseBodyChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      index: 'index',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      index: 'number',
      message: RunChatResultGenerationResponseBodyChoicesMessage,
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationResponseBodyUsage extends $dara.Model {
  /**
   * @remarks
   * Number of images. Returned by models such as wanx.
   * 
   * @example
   * 0
   */
  imageCount?: number;
  /**
   * @remarks
   * Image tokens. Returned by models such as qwen-vl.
   * 
   * @example
   * 0
   */
  imageTokens?: number;
  /**
   * @remarks
   * Input tokens.
   * 
   * @example
   * 200
   */
  inputTokens?: number;
  /**
   * @remarks
   * Output tokens.
   * 
   * @example
   * 300
   */
  outputTokens?: number;
  /**
   * @remarks
   * Total tokens.
   * 
   * @example
   * 500
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      imageCount: 'imageCount',
      imageTokens: 'imageTokens',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCount: 'number',
      imageTokens: 'number',
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the model-generated content.
   */
  choices?: RunChatResultGenerationResponseBodyChoices[];
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1720602203
   */
  created?: number;
  /**
   * @remarks
   * Request identifier.
   * 
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  id?: string;
  /**
   * @remarks
   * Large Language Model (LLM) ID.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  requestId?: string;
  /**
   * @remarks
   * Timestamp.
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  /**
   * @remarks
   * Total tokens.
   * 
   * @example
   * 500
   */
  totalTokens?: number;
  /**
   * @remarks
   * Usage.
   */
  usage?: RunChatResultGenerationResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      modelId: 'modelId',
      requestId: 'requestId',
      time: 'time',
      totalTokens: 'totalTokens',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': RunChatResultGenerationResponseBodyChoices },
      created: 'number',
      id: 'string',
      modelId: 'string',
      requestId: 'string',
      time: 'string',
      totalTokens: 'number',
      usage: RunChatResultGenerationResponseBodyUsage,
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

