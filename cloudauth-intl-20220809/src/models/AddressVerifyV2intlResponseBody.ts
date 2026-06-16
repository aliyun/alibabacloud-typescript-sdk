// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressVerifyV2IntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The verification result. Valid values:
   * - 1: Passed.
   * - 2: Failed (the device is in a prohibited region). 
   * - 3: Unable to determine.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The verification details, which include:
   * 
   * - distanceRange: the location range.   
   * - ispName: the ISP name.     
   * - phoneStatus: the phone status. A value of 0 indicates abnormal. A value of 1 indicates Normal. Otherwise, the status is unknown.
   * 
   * @example
   * {
   *   "distanceRange": "0-3000",
   *   "ispName": "CTCC",
   *   "phoneStatus": "1"
   * }
   */
  detail?: string;
  /**
   * @remarks
   * The authentication ID.
   * 
   * @example
   * hksb7ba1b28130d24e015d69********
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      detail: 'Detail',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      detail: 'string',
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

export class AddressVerifyV2IntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response message.
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
   * 7F971622-38C0-5F56-B2EC-315367979B4F
   */
  requestId?: string;
  /**
   * @remarks
   * The verification result.
   */
  result?: AddressVerifyV2IntlResponseBodyResult;
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
      result: AddressVerifyV2IntlResponseBodyResult,
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

