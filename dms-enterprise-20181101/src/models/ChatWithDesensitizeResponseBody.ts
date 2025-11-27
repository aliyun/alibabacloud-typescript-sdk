// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithDesensitizeResponseBodyDataChoicesMessage extends $dara.Model {
  /**
   * @example
   * 你好呀！
   */
  content?: string;
  /**
   * @example
   * 嗯，用户发了个“你好”，看起来是想打招呼...
   */
  reasoningContent?: string;
  /**
   * @example
   * system
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      reasoningContent: 'ReasoningContent',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      reasoningContent: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithDesensitizeResponseBodyDataChoices extends $dara.Model {
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * {}
   */
  logprobs?: { [key: string]: any };
  message?: ChatWithDesensitizeResponseBodyDataChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'FinishReason',
      logprobs: 'Logprobs',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      logprobs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: ChatWithDesensitizeResponseBodyDataChoicesMessage,
    };
  }

  validate() {
    if(this.logprobs) {
      $dara.Model.validateMap(this.logprobs);
    }
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithDesensitizeResponseBodyDataUsage extends $dara.Model {
  /**
   * @example
   * 10
   */
  completionTokens?: string;
  /**
   * @example
   * {}
   */
  completionTokensDetails?: { [key: string]: string };
  /**
   * @example
   * 9
   */
  promptTokens?: string;
  /**
   * @example
   * {}
   */
  promptTokensDetails?: { [key: string]: string };
  /**
   * @example
   * 19
   */
  totalTokens?: string;
  static names(): { [key: string]: string } {
    return {
      completionTokens: 'CompletionTokens',
      completionTokensDetails: 'CompletionTokensDetails',
      promptTokens: 'PromptTokens',
      promptTokensDetails: 'PromptTokensDetails',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completionTokens: 'string',
      completionTokensDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      promptTokens: 'string',
      promptTokensDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      totalTokens: 'string',
    };
  }

  validate() {
    if(this.completionTokensDetails) {
      $dara.Model.validateMap(this.completionTokensDetails);
    }
    if(this.promptTokensDetails) {
      $dara.Model.validateMap(this.promptTokensDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithDesensitizeResponseBodyData extends $dara.Model {
  choices?: ChatWithDesensitizeResponseBodyDataChoices[];
  /**
   * @example
   * 1763710100
   */
  created?: string;
  message?: string;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @example
   * 200
   */
  statusCode?: string;
  type?: string;
  usage?: ChatWithDesensitizeResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      choices: 'Choices',
      created: 'Created',
      message: 'Message',
      model: 'Model',
      statusCode: 'StatusCode',
      type: 'Type',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': ChatWithDesensitizeResponseBodyDataChoices },
      created: 'string',
      message: 'string',
      model: 'string',
      statusCode: 'string',
      type: 'string',
      usage: ChatWithDesensitizeResponseBodyDataUsage,
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

export class ChatWithDesensitizeResponseBody extends $dara.Model {
  data?: ChatWithDesensitizeResponseBodyData;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ChatWithDesensitizeResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
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

