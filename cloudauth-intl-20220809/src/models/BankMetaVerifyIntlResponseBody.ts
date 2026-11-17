// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BankMetaVerifyIntlResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification result code. Valid values:
   * - 1: The verification is consistent. You are billed for this call.
   * - 2: The verification is inconsistent. You are billed for this call.
   * - 3: No record is found. You are not billed for this call.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The verification details. Valid values:
   * 
   * - **101**: The verification is successful.
   * - **201**: The authentication information is inconsistent. The cardholder information is incorrect.
   * - **202**: The authentication information is inconsistent. The bank card is not enabled for authenticated payment.
   * - **203**: The authentication information is inconsistent. The bank card has expired.
   * - **204**: The authentication information is inconsistent. The bank card is restricted.
   * - **205**: The authentication information is inconsistent. The bank card has been confiscated.
   * - **206**: The authentication information is inconsistent. The bank card is invalid.
   * - **207**: The authentication information is inconsistent. The bank card has no corresponding issuing bank.
   * - **208**: The authentication information is inconsistent. The bank card is not initialized or is a dormant card.
   * - **209**: The authentication information is inconsistent. The bank card is a fraudulent or captured card.
   * - **210**: The authentication information is inconsistent. The bank card has been reported as lost.
   * - **211**: The authentication information is inconsistent. The number of incorrect password attempts has exceeded the limit.
   * - **212**: The authentication information is inconsistent. The issuing bank does not support this transaction.
   * - **213**: The authentication information is inconsistent. The card status is abnormal or the card is invalid.
   * - **214**: The authentication information is inconsistent. No mobile phone number is reserved.
   * - **215**: The authentication information is inconsistent. The entered password, expiration date, or CVN2 is incorrect.
   * - **216**: The authentication information is inconsistent. Other card exceptions occurred.
   * - **301**: The verification cannot be performed. The bank card does not support this service.
   * - **302**: The verification cannot be performed. The verification failed or the bank rejected the verification. Contact the issuing bank.
   * - **303**: The verification cannot be performed. The bank card does not support mobile phone number verification.
   * - **304**: The verification cannot be performed. The bank card number is incorrect.
   * - **305**: The verification cannot be performed. Other reasons.
   * - **306**: The verification cannot be performed. The number of verification attempts has exceeded the limit.
   * 
   * @example
   * 101
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
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

export class BankMetaVerifyIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success, and other values indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
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
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result information.
   */
  resultObject?: BankMetaVerifyIntlResponseBodyResultObject;
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
      resultObject: BankMetaVerifyIntlResponseBodyResultObject,
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

