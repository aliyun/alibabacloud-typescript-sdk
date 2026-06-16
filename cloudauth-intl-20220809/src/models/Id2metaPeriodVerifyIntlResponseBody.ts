// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaPeriodVerifyIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The final authentication result. Valid values:
   * 
   * *  Y: Passed.
   * 
   * * N: Not passed.
   * 
   * @example
   * Y
   */
  passed?: string;
  /**
   * @remarks
   * The description of the authentication result. For more information, see the ResultObject.SubCode error code description.
   * 
   * @example
   * 200
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      passed: 'Passed',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passed: 'string',
      subCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaPeriodVerifyIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. For more information about response codes, see the description of response codes and messages.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The response message of the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B97D932-7FF5-517D-BF39-7CA1BEE3CDD9
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: Id2MetaPeriodVerifyIntlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: Id2MetaPeriodVerifyIntlResponseBodyResult,
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

