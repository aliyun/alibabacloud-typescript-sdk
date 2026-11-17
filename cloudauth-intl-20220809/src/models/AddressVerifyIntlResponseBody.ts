// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressVerifyIntlResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The details of the address verification.
   * 
   * @example
   * 0-3000
   */
  addressInfo?: string;
  /**
   * @remarks
   * The name of the carrier. Valid values:
   * - CMCC: China Mobile
   * - CTCC: China Telecom
   * - CUCC: China Unicom
   * 
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @remarks
   * The verification result. Valid values:
   * - Y: Yes. The distance to the verified address is less than or equal to 10 km.
   * - N: No. The distance to the verified address is greater than 10 km.
   * 
   * @example
   * Y
   */
  passed?: string;
  /**
   * @remarks
   * The description of the authentication result.
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * The unique identifier of the authentication request.
   * 
   * @example
   * hksb7ba1b28130d24e015d69********
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      addressInfo: 'AddressInfo',
      ispName: 'IspName',
      passed: 'Passed',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfo: 'string',
      ispName: 'string',
      passed: 'string',
      subCode: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddressVerifyIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
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
   * 86C40EC3-5940-5F47-995C-BFE90B70E540
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result information.
   */
  resultObject?: AddressVerifyIntlResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: AddressVerifyIntlResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

