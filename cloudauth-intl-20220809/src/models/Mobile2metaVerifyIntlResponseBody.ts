// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile2MetaVerifyIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The verification result:
   * 
   * - 1: The information is consistent. (Billed)
   * 
   * - 2: The information is inconsistent. (Billed)
   * 
   * - 3: No record is found. (Not billed)
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The carrier name:
   * 
   * - CMCC: China Mobile
   * 
   * - CUCC: China Unicom
   * 
   * - CTCC: China Telecom
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
   * [Status codes](https://www.alibabacloud.com/help/en/ekyc/latest/mobile-2meta?spm=a2c63.p38356.0.i13#cbf2539971xzr).
   * 
   * @example
   * Success
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
   * Id of the request
   * 
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * Return result
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

