// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEduProblemSolveResponseBodyDataItemsThinking extends $dara.Model {
  /**
   * @example
   * 8ci7nsj9WPYXvQb9MJfA
   */
  content?: string;
  /**
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

export class CreateEduProblemSolveResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * {}
   */
  content?: string;
  imageUrl?: string;
  questionId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  thinking?: CreateEduProblemSolveResponseBodyDataItemsThinking;
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
      thinking: CreateEduProblemSolveResponseBodyDataItemsThinking,
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

export class CreateEduProblemSolveResponseBodyDataUsage extends $dara.Model {
  completionTokens?: number;
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

export class CreateEduProblemSolveResponseBodyData extends $dara.Model {
  /**
   * @example
   * change_batch
   */
  code?: string;
  finished?: boolean;
  items?: CreateEduProblemSolveResponseBodyDataItems[];
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 098E23F7-A74C-5584-87A1-39734D5B83CE
   */
  requestId?: string;
  resultType?: string;
  retryable?: boolean;
  usage?: CreateEduProblemSolveResponseBodyDataUsage;
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
      items: { 'type': 'array', 'itemType': CreateEduProblemSolveResponseBodyDataItems },
      message: 'string',
      requestId: 'string',
      resultType: 'string',
      retryable: 'boolean',
      usage: CreateEduProblemSolveResponseBodyDataUsage,
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

export class CreateEduProblemSolveResponseBody extends $dara.Model {
  data?: CreateEduProblemSolveResponseBodyData;
  /**
   * @example
   * message
   */
  event?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      event: 'event',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateEduProblemSolveResponseBodyData,
      event: 'string',
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

