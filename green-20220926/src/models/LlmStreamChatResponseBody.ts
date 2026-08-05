// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmStreamChatResponseBodyChoicesDelta extends $dara.Model {
  /**
   * @remarks
   * The text content generated in real time.
   * 
   * @example
   * I am Deepseek-V3. How can I help you?
   */
  content?: string;
  /**
   * @remarks
   * The role identifier.
   * 
   * @example
   * assistant
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

export class LlmStreamChatResponseBodyChoices extends $dara.Model {
  /**
   * @remarks
   * The incremental content object.
   */
  delta?: LlmStreamChatResponseBodyChoicesDelta;
  /**
   * @remarks
   * During streaming output, this value is null while content is being generated. When generation is complete, the value is stop if the generation ended due to a stop token.
   * 
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @remarks
   * The stream sequence number.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The token probability information.
   * 
   * @example
   * null
   */
  logprobs?: string;
  static names(): { [key: string]: string } {
    return {
      delta: 'Delta',
      finishReason: 'FinishReason',
      index: 'Index',
      logprobs: 'Logprobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: LlmStreamChatResponseBodyChoicesDelta,
      finishReason: 'string',
      index: 'number',
      logprobs: 'string',
    };
  }

  validate() {
    if(this.delta && typeof (this.delta as any).validate === 'function') {
      (this.delta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LlmStreamChatResponseBodyError extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * data_inspection_failed
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Input data may contain inappropriate content.
   */
  message?: string;
  /**
   * @remarks
   * The parameter that caused the error.
   * 
   * @example
   * null
   */
  param?: string;
  /**
   * @remarks
   * The error type.
   * 
   * @example
   * data_inspection_failed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      param: 'Param',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      param: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LlmStreamChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of model generation results.
   */
  choices?: LlmStreamChatResponseBodyChoices[];
  /**
   * @remarks
   * The timestamp when the session was created.
   * 
   * @example
   * 1750990728
   */
  created?: number;
  /**
   * @remarks
   * The fault information content in the streaming response.
   */
  error?: LlmStreamChatResponseBodyError;
  /**
   * @remarks
   * The unique ID of this session.
   * 
   * @example
   * chatcmpl-777bce52-93d3-9f8c-89c3-e99884f4f57f
   */
  id?: string;
  /**
   * @remarks
   * The model identifier.
   * 
   * @example
   * deepseek-v3
   */
  model?: string;
  /**
   * @remarks
   * The response type.
   * 
   * @example
   * chat.completion.chunk
   */
  object?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 21d296d6-594e-97de-812f-925ec6e05673
   */
  requestId?: string;
  /**
   * @remarks
   * The system fingerprint.
   * 
   * @example
   * null
   */
  systemFingerprint?: string;
  /**
   * @remarks
   * The token usage information.
   * 
   * @example
   * null
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      choices: 'Choices',
      created: 'Created',
      error: 'Error',
      id: 'Id',
      model: 'Model',
      object: 'Object',
      requestId: 'RequestId',
      systemFingerprint: 'SystemFingerprint',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': LlmStreamChatResponseBodyChoices },
      created: 'number',
      error: LlmStreamChatResponseBodyError,
      id: 'string',
      model: 'string',
      object: 'string',
      requestId: 'string',
      systemFingerprint: 'string',
      usage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

