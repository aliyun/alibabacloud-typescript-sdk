// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile2MetaVerifyIntlResponseBodyResult extends $dara.Model {
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
  /**
   * @remarks
   * The name of the telecommunications service provider. Valid values:
   * 
   * - CMCC: China Mobile
   * - CUCC: China Unicom
   * - CTCC: China Telecom.
   * 
   * @example
   * CMCC
   */
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      ispName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile2MetaVerifyIntlResponseBody extends $dara.Model {
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
   * Id of the request
   * 
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: Mobile2MetaVerifyIntlResponseBodyResult;
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
      result: Mobile2MetaVerifyIntlResponseBodyResult,
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

