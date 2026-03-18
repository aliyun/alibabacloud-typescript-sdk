// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantTranslateResponseBodyDataResult extends $dara.Model {
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

export class ExecuteTextbookAssistantTranslateResponseBodyData extends $dara.Model {
  result?: ExecuteTextbookAssistantTranslateResponseBodyDataResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ExecuteTextbookAssistantTranslateResponseBodyDataResult,
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

export class ExecuteTextbookAssistantTranslateResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantTranslateResponseBodyData;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ""
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9EB79C1E-36C2-5777-BED6-C23A98DF0637
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
      data: ExecuteTextbookAssistantTranslateResponseBodyData,
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

