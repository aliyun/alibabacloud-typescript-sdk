// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressVerifyIntlResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Address verification details.
   * 
   * @example
   * 0-3000
   */
  addressInfo?: string;
  /**
   * @remarks
   * Operator name:
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
   * Verification result, values:
   * - Y: Yes, the verified address distance is less than or equal to 10KM.
   * - N: No, the verified address distance is greater than 10KM.
   * 
   * @example
   * Y
   */
  passed?: string;
  /**
   * @remarks
   * Authentication result description.
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * Unique identifier for the authentication request.
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
   * Return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 86C40EC3-5940-5F47-995C-BFE90B70E540
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information.
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

