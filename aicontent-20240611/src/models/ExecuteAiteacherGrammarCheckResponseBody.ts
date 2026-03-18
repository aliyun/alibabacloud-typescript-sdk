// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherGrammarCheckResponseBodyData extends $dara.Model {
  /**
   * @example
   * 主语 "I" 对应的动词应该是 "am" 而不是 "is"。
   */
  analysis?: string;
  /**
   * @example
   * I am good.
   */
  correction?: string;
  /**
   * @example
   * Has_Error
   */
  correctionStatus?: string;
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
   * @example
   * []
   */
  data?: ExecuteAITeacherGrammarCheckResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
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

