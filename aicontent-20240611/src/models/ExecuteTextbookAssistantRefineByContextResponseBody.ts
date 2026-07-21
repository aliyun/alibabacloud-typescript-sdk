// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantRefineByContextResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The refined sentence.
   * 
   * @example
   * Good evening! From the book, how does Mike Black introduce himself?
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantRefineByContextResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The result data.
   */
  result?: ExecuteTextbookAssistantRefineByContextResponseBodyDataResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ExecuteTextbookAssistantRefineByContextResponseBodyDataResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantRefineByContextResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: ExecuteTextbookAssistantRefineByContextResponseBodyData;
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * null
   */
  errMessage?: number;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 6F73C114-A76E-51AD-99E3-BC7B941B69E0
   */
  requestId?: string;
  /**
   * @remarks
   * A value of `true` indicates that the request succeeded.
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
      data: ExecuteTextbookAssistantRefineByContextResponseBodyData,
      errCode: 'string',
      errMessage: 'number',
      httpStatusCode: 'string',
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

