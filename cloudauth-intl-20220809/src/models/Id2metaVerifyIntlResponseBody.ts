// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The verification result:
   * 
   * - 1: The information is consistent. This result is billable.
   * 
   * - 2: The information is inconsistent. This result is billable.
   * 
   * - 3: No record is found. This result is not billable.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * [Status codes](https://www.alibabacloud.com/help/en/ekyc/latest/ok4bwxwmu1n94o76?spm=a2c63.p38356.0.i54#942707fca218x).
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The detailed description of the response code.
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
   * EFA11401-C961-5E89-A2D3-BF9883E5CC3D
   */
  requestId?: string;
  /**
   * @remarks
   * Return result
   */
  result?: Id2MetaVerifyIntlResponseBodyResult;
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
      result: Id2MetaVerifyIntlResponseBodyResult,
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

