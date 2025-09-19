// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnswerSqlSyntaxByMetaAgentResponseBodyData extends $dara.Model {
  /**
   * @example
   * mysql数据库类型下...
   */
  content?: string;
  /**
   * @example
   * f63a6eed-0e3c-4564-8533-b1295db8d6ff
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerSqlSyntaxByMetaAgentResponseBody extends $dara.Model {
  data?: AnswerSqlSyntaxByMetaAgentResponseBodyData;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AnswerSqlSyntaxByMetaAgentResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
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

