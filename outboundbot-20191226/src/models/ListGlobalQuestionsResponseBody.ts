// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGlobalQuestionsResponseBodyGlobalQuestionsList extends $dara.Model {
  answers?: string;
  /**
   * @example
   * 53c27755-d41e-46a6-bb3c-4f66f257d50c
   */
  globalQuestionId?: string;
  globalQuestionName?: string;
  /**
   * @example
   * SYSTEM
   */
  globalQuestionType?: string;
  questions?: string;
  /**
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
  list?: ListGlobalQuestionsResponseBodyGlobalQuestionsList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 12
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
   * @example
   * OK
   */
  code?: string;
  globalQuestions?: ListGlobalQuestionsResponseBodyGlobalQuestions;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
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

