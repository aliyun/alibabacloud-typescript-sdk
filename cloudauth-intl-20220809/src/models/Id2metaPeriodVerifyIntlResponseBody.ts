// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaPeriodVerifyIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The final authentication result. Valid values:
   * 
   * - **Y**, via
   * 
   * - **N**: The authentication is not passed.
   * 
   * @example
   * Y
   */
  passed?: string;
  /**
   * @remarks
   * A description of the authentication result. For more information, see [ResultObject.SubCode error codes](https://www.alibabacloud.com/help/en/ekyc/latest/dateverify?spm=a2c63.p38356.0.i32#d1f36d445az8i).
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
   * [Return to Code](https://www.alibabacloud.com/help/en/ekyc/latest/dateverify?spm=a2c63.p38356.0.i32#22facb6ab6ui1).
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * A detailed description of the response code.
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
   * Return result
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

