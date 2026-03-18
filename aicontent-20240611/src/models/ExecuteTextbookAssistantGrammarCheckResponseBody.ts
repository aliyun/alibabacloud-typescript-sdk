// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantGrammarCheckResponseBodyDataResult extends $dara.Model {
  analysis?: string;
  /**
   * @example
   * I am you.
   */
  correction?: string;
  /**
   * @example
   * Has_Error
   */
  correctionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      correction: 'correction',
      correctionStatus: 'correctionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'string',
      correction: 'string',
      correctionStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantGrammarCheckResponseBodyData extends $dara.Model {
  result?: ExecuteTextbookAssistantGrammarCheckResponseBodyDataResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ExecuteTextbookAssistantGrammarCheckResponseBodyDataResult,
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

export class ExecuteTextbookAssistantGrammarCheckResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantGrammarCheckResponseBodyData;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * null
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
   * 0bc1e96d17091734639835114e12c8
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
      data: ExecuteTextbookAssistantGrammarCheckResponseBodyData,
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

