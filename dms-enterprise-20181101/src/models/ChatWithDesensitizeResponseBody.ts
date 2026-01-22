// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithDesensitizeResponseBodyDataChoicesMessage extends $dara.Model {
  /**
   * @remarks
   * The content of the model\\"s response.
   * 
   * @example
   * 你好呀！
   */
  content?: string;
  /**
   * @remarks
   * The internal reasoning content of the model.
   * 
   * @example
   * 嗯，用户发了个“你好”，看起来是想打招呼...
   */
  reasoningContent?: string;
  /**
   * @remarks
   * Message role.
   * 
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
   * @remarks
   * Finish reason: ● stop: The model reached a natural stop point or a specified stop sequence. ● length: Generation ended because the maximum number of tokens was reached. ● tool_calls: The model stopped because it needs to call a tool to proceed.
   * 
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @remarks
   * Token probability information of model output.
   * 
   * @example
   * {}
   */
  logprobs?: { [key: string]: any };
  /**
   * @remarks
   * The message body output by the model.
   */
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
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 10
   */
  completionTokens?: string;
  /**
   * @remarks
   * Fine-grained classification of output tokens when using the Qwen-VL model.
   * 
   * @example
   * {}
   */
  completionTokensDetails?: { [key: string]: string };
  /**
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 9
   */
  promptTokens?: string;
  /**
   * @remarks
   * Fine-grained classification of input tokens.
   * 
   * @example
   * {}
   */
  promptTokensDetails?: { [key: string]: string };
  /**
   * @remarks
   * The total number of tokens consumed.
   * 
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
  /**
   * @remarks
   * The candidate array for model-generated content.
   */
  choices?: ChatWithDesensitizeResponseBodyDataChoices[];
  /**
   * @remarks
   * The Unix timestamp (in seconds) when the request was created.
   * 
   * @example
   * 1763710100
   */
  created?: string;
  /**
   * @remarks
   * Error message, provided when StatusCode is not 200.
   * 
   * @example
   * InvalidParameter
   */
  message?: string;
  /**
   * @remarks
   * The model used for this request.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * Error code, 200 for normal calls, others for exceptions.
   * 
   * @example
   * 200
   */
  statusCode?: string;
  /**
   * @remarks
   * Error type.
   * 
   * @example
   * invalid_request_error
   */
  type?: string;
  /**
   * @remarks
   * The token consumption information of this request.
   */
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
  /**
   * @remarks
   * The data returned.
   */
  data?: ChatWithDesensitizeResponseBodyData;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request fails.
   * 
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

