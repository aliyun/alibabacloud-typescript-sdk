// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmStreamChatResponseBodyChoicesDelta extends $dara.Model {
  content?: string;
  /**
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
  delta?: LlmStreamChatResponseBodyChoicesDelta;
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  /**
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
   * @example
   * data_inspection_failed
   */
  code?: string;
  /**
   * @example
   * Input data may contain inappropriate content.
   */
  message?: string;
  /**
   * @example
   * null
   */
  param?: string;
  /**
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
  choices?: LlmStreamChatResponseBodyChoices[];
  /**
   * @example
   * 1750990728
   */
  created?: number;
  error?: LlmStreamChatResponseBodyError;
  /**
   * @example
   * chatcmpl-777bce52-93d3-9f8c-89c3-e99884f4f57f
   */
  id?: string;
  /**
   * @example
   * deepseek-v3
   */
  model?: string;
  /**
   * @example
   * chat.completion.chunk
   */
  object?: string;
  /**
   * @example
   * 21d296d6-594e-97de-812f-925ec6e05673
   */
  requestId?: string;
  /**
   * @example
   * null
   */
  systemFingerprint?: string;
  /**
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

