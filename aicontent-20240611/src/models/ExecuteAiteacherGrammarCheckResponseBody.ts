// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherGrammarCheckResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error analysis.
   * 
   * @example
   * 主语 "I" 对应的动词应该是 "am" 而不是 "is"。
   */
  analysis?: string;
  /**
   * @remarks
   * The corrected sentence.
   * 
   * @example
   * I am good.
   */
  correction?: string;
  /**
   * @remarks
   * The result of the grammar check.
   * 
   * @example
   * Has_Error
   */
  correctionStatus?: string;
  /**
   * @remarks
   * The error reason.
   * 
   * @example
   * 暂无返回
   */
  errorReason?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      correction: 'correction',
      correctionStatus: 'correctionStatus',
      errorReason: 'errorReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'string',
      correction: 'string',
      correctionStatus: 'string',
      errorReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherGrammarCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object that contains the result.
   * 
   * @example
   * []
   */
  data?: ExecuteAITeacherGrammarCheckResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 未知错误
   */
  errMessage?: string;
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
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
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
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExecuteAITeacherGrammarCheckResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

