// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The verification result code. Valid values:
   * - 1: Consistent.
   * - 2: Inconsistent.
   * - 3: No record found.
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
   * The return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The return message.
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
   * The verification result.
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

