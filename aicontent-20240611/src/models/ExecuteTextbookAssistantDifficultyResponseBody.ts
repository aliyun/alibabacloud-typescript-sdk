// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantDifficultyResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * Let\\"s look at the text again. Mike says, \\"I\\"m Mike Black.\\" Can you try saying it like Mike?
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

export class ExecuteTextbookAssistantDifficultyResponseBodyData extends $dara.Model {
  result?: ExecuteTextbookAssistantDifficultyResponseBodyDataResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ExecuteTextbookAssistantDifficultyResponseBodyDataResult,
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

export class ExecuteTextbookAssistantDifficultyResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantDifficultyResponseBodyData;
  /**
   * @example
   * null
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
   * 0D7D382F-9475-572E-BE83-DDFBF5C5EB24
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
      data: ExecuteTextbookAssistantDifficultyResponseBodyData,
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

