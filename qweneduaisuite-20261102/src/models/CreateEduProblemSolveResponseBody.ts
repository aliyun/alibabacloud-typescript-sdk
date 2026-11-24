// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEduProblemSolveResponseBodyItemsThinking extends $dara.Model {
  /**
   * @remarks
   * The current thinking content.
   * 
   * @example
   * 8ci7nsj9WPYXvQb9MJfA
   */
  content?: string;
  /**
   * @remarks
   * The thinking status. Valid values:
   * - processing: The thinking process is in progress.
   * - complete: The thinking process is complete.
   * 
   * @example
   * 200
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEduProblemSolveResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The complete question resolution content in Markdown format, including the deduction process and the final result.
   * 
   * @example
   * {}
   */
  content?: string;
  /**
   * @remarks
   * The URL of the unique image for the current question. The URL may be time-sensitive. If the question is not associated with an image resource and no request URL is available for fallback, an empty string is returned.
   * 
   * @example
   * https://xxx.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The question identifier. The value is the question title, such as Question 1. The server does not return a separate title field. If the downstream service does not provide a question title, which is always the case in single-question scenarios, titles such as Question 1 and Question 2 are generated in the order of the questions.
   * 
   * @example
   * 50a10e43a33e36179e355556d319ebd5
   */
  questionId?: string;
  /**
   * @remarks
   * The current question status. Valid values:
   * - processing: The question is being processed.
   * - complete: The question processing is complete.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * The thinking process. This field is returned only when result_type is single. It is not returned for multiple questions.
   */
  thinking?: CreateEduProblemSolveResponseBodyItemsThinking;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      imageUrl: 'imageUrl',
      questionId: 'questionId',
      status: 'status',
      thinking: 'thinking',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      imageUrl: 'string',
      questionId: 'string',
      status: 'string',
      thinking: CreateEduProblemSolveResponseBodyItemsThinking,
    };
  }

  validate() {
    if(this.thinking && typeof (this.thinking as any).validate === 'function') {
      (this.thinking as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEduProblemSolveResponseBodyUsage extends $dara.Model {
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 1024
   */
  completionTokens?: number;
  /**
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 1024
   */
  promptTokens?: number;
  static names(): { [key: string]: string } {
    return {
      completionTokens: 'completionTokens',
      promptTokens: 'promptTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completionTokens: 'number',
      promptTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEduProblemSolveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API data identifier.
   * 
   * @example
   * change_batch
   */
  code?: string;
  /**
   * @remarks
   * Specifies whether the response is the final full snapshot. This value is fixed to true in the complete event.
   */
  finished?: boolean;
  /**
   * @remarks
   * The current list of complete question results.
   */
  items?: CreateEduProblemSolveResponseBodyItems[];
  /**
   * @remarks
   * The actual message returned by the request.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Echo request ID echoed from echo request.
   * 
   * @example
   * 098E23F7-A74C-5584-87A1-39734D5B83CE
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the question resolution result. Valid values:
   * - single: A single question.
   * - multiple: Multiple questions.
   * 
   * @example
   * single
   */
  resultType?: string;
  /**
   * @remarks
   * Specifies whether the error is retryable. Default value: true.
   */
  retryable?: boolean;
  /**
   * @remarks
   * The token usage. Only the complete event carries the final value. This field is not returned in message events.
   */
  usage?: CreateEduProblemSolveResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      finished: 'finished',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
      resultType: 'resultType',
      retryable: 'retryable',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      finished: 'boolean',
      items: { 'type': 'array', 'itemType': CreateEduProblemSolveResponseBodyItems },
      message: 'string',
      requestId: 'string',
      resultType: 'string',
      retryable: 'boolean',
      usage: CreateEduProblemSolveResponseBodyUsage,
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
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

