// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalQuestionResponseBodyGlobalQuestion extends $dara.Model {
  answers?: string;
  /**
   * @example
   * f160ec2e-94f2-4c03-87be-ece5b52d5dd9
   */
  globalQuestionId?: string;
  globalQuestionName?: string;
  /**
   * @example
   * COMMON
   */
  globalQuestionType?: string;
  questions?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  globalQuestion?: DescribeGlobalQuestionResponseBodyGlobalQuestion;
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

