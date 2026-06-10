// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalQuestionResponseBodyGlobalQuestion extends $dara.Model {
  /**
   * @remarks
   * The answers to the global question.
   * 
   * @example
   * ["你好,我是你的专属客服顾问."]
   */
  answers?: string;
  /**
   * @remarks
   * The ID of the global question.
   * 
   * @example
   * f160ec2e-94f2-4c03-87be-ece5b52d5dd9
   */
  globalQuestionId?: string;
  /**
   * @remarks
   * The name of the global question.
   * 
   * @example
   * 你是谁-全局问题
   */
  globalQuestionName?: string;
  /**
   * @remarks
   * The type of the global question.
   * 
   * @example
   * COMMON
   */
  globalQuestionType?: string;
  /**
   * @remarks
   * The questions mapped to this global question.
   * 
   * @example
   * ["你是谁","你叫什么"]
   */
  questions?: string;
  /**
   * @remarks
   * The ID of the script.
   * 
   * @example
   * 290e06a5-6de2-4cc8-8a9c-72b7c152256c
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

export class DescribeGlobalQuestionResponseBody extends $dara.Model {
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
   * The details of the global question.
   */
  globalQuestion?: DescribeGlobalQuestionResponseBodyGlobalQuestion;
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
   * The returned message.
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
      globalQuestion: 'GlobalQuestion',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      globalQuestion: DescribeGlobalQuestionResponseBodyGlobalQuestion,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.globalQuestion && typeof (this.globalQuestion as any).validate === 'function') {
      (this.globalQuestion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

