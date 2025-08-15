// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaVerifyIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Verification result code.
   * - 1: Verification consistent
   * - 2: Verification inconsistent
   * - 3: No record found
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * ISP name
   * 
   * - CMCC: China Mobile
   * - CUCC: China Unicom
   * - CTCC: China Telecom
   * 
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @remarks
   * Detailed verification results
   * 
   * - 101: Verification passed 
   * - 201: Mobile number and name do not match, mobile number and ID number do not match 
   * - 202: Mobile number and name match, but mobile number and ID number do not match 
   * - 203: Mobile number and ID number match, but mobile number and name do not match 
   * - 204: Other inconsistencies
   * - 301: No record found
   * 
   * @example
   * 101
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      ispName: 'IspName',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      ispName: 'string',
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

export class Mobile3MetaVerifyIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * D241532C-4EE9-5A2A-A5A5-C1FD98CE2EDD
   */
  requestId?: string;
  /**
   * @remarks
   * Return result
   */
  result?: Mobile3MetaVerifyIntlResponseBodyResult;
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
      result: Mobile3MetaVerifyIntlResponseBodyResult,
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

