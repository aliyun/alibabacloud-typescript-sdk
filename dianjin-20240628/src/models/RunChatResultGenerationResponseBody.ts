// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunChatResultGenerationResponseBodyChoicesMessage extends $dara.Model {
  content?: string;
  /**
   * @example
   * user
   */
  role?: string;
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
   * @example
   * null
   */
  finishReason?: string;
  /**
   * @example
   * 0
   */
  index?: number;
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
   * @example
   * 0
   */
  imageCount?: number;
  /**
   * @example
   * 0
   */
  imageTokens?: number;
  /**
   * @example
   * 200
   */
  inputTokens?: number;
  /**
   * @example
   * 300
   */
  outputTokens?: number;
  /**
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
  choices?: RunChatResultGenerationResponseBodyChoices[];
  /**
   * @example
   * 1720602203
   */
  created?: number;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  id?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  requestId?: string;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  /**
   * @example
   * 500
   */
  totalTokens?: number;
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

