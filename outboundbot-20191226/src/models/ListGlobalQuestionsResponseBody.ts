// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGlobalQuestionsResponseBodyGlobalQuestionsList extends $dara.Model {
  /**
   * @remarks
   * The replies to the global question.
   * 
   * @example
   * ["你好,您可以再说一遍吗","不好意思我刚才没有听清"]
   */
  answers?: string;
  /**
   * @remarks
   * The global question ID.
   * 
   * @example
   * 53c27755-d41e-46a6-bb3c-4f66f257d50c
   */
  globalQuestionId?: string;
  /**
   * @remarks
   * The name of the global question.
   * 
   * @example
   * 未识别
   */
  globalQuestionName?: string;
  /**
   * @remarks
   * The type of the global question.
   * 
   * - SYSTEM: System-defined
   * 
   * - COMMON: General
   * 
   * @example
   * SYSTEM
   */
  globalQuestionType?: string;
  /**
   * @remarks
   * The list of global questions.
   * 
   * @example
   * ["测试问题1","测试问题2"]
   */
  questions?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * aa279896-64a6-4182-864c-4f2b04ec8d17
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      globalQuestionId: 'GlobalQuestionId',
      globalQuestionName: 'GlobalQuestionName',
      globalQuestionType: 'GlobalQuestionType',
      questions: 'Questions',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: 'string',
      globalQuestionId: 'string',
      globalQuestionName: 'string',
      globalQuestionType: 'string',
      questions: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalQuestionsResponseBodyGlobalQuestions extends $dara.Model {
  /**
   * @remarks
   * The array of global questions.
   */
  list?: ListGlobalQuestionsResponseBodyGlobalQuestionsList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListGlobalQuestionsResponseBodyGlobalQuestionsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalQuestionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The global question data.
   */
  globalQuestions?: ListGlobalQuestionsResponseBodyGlobalQuestions;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      globalQuestions: 'GlobalQuestions',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      globalQuestions: ListGlobalQuestionsResponseBodyGlobalQuestions,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.globalQuestions && typeof (this.globalQuestions as any).validate === 'function') {
      (this.globalQuestions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

