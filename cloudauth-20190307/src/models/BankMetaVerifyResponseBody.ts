// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BankMetaVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification result.
   * 
   * - 1: verification passed (billed).
   * - 2: verification failed (billed).
   * - 3: no records found (not billed).
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The verification details.
   * 
   * - **101**: verification passed.
   * - **201**: verification failed. The cardholder information is incorrect.
   * - **202**: verification failed. Authentication payment is not enabled for the bank card.
   * - **203**: verification failed. The bank card has expired.
   * - **204**: verification failed. The bank card is restricted.
   * - **205**: verification failed. The card has been confiscated.
   * - **206**: verification failed. The bank card is invalid.
   * - **207**: verification failed. No matching issuing bank exists.
   * - **208**: verification failed. The card is not initialized or is a dormant card.
   * - **209**: verification failed. The card is fraudulent or has been retained.
   * - **210**: verification failed. The card has been reported lost.
   * - **211**: verification failed. The maximum number of password attempts has been exceeded.
   * - **212**: verification failed. The issuing bank does not support this transaction.
   * - **213**: verification failed. The card status is abnormal or the card is invalid.
   * - **214**: verification failed. No mobile phone number is registered.
   * - **215**: verification failed. The password, expiration date, or CVN2 is incorrect.
   * - **216**: verification failed. Other card exceptions.
   * - **301**: unable to verify. The bank card does not support this service.
   * - **302**: unable to verify. Verification failed or the bank refused verification. Contact the issuing bank.
   * - **303**: unable to verify. The bank card does not support mobile phone number verification.
   * - **304**: unable to verify. The bank card number is incorrect.
   * - **305**: unable to verify. Other reasons.
   * - **306**: unable to verify. The maximum number of verification attempts has been exceeded.
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

export class BankMetaVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. 200 indicates success. Other values indicate failure.
   * 
   * @example
   * 200
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
   * The request ID.
   * 
   * @example
   * 473469C7-A***B-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The verification result.
   */
  resultObject?: BankMetaVerifyResponseBodyResultObject;
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
      resultObject: BankMetaVerifyResponseBodyResultObject,
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

