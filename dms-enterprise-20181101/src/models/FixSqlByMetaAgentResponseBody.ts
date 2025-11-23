// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FixSqlByMetaAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The answer.
   * 
   * @example
   * SQL修复结果...
   */
  content?: string;
  /**
   * @remarks
   * The session ID.
   * 
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

export class FixSqlByMetaAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: FixSqlByMetaAgentResponseBodyData;
  /**
   * @remarks
   * The error code that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
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
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
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
      data: FixSqlByMetaAgentResponseBodyData,
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

