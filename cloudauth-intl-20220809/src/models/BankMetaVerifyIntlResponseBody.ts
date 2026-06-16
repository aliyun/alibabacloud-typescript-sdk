// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BankMetaVerifyIntlResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification result code. Valid values:
   * - 1: Verification consistent (billable).
   * - 2: Verification inconsistent (billable).
   * - 3: No record found (not billable).
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The verification details. Valid values:
   * 
   * - **101**: Verification passed.
   * - **201**: Authentication information inconsistent. The cardholder information is incorrect.
   * - **202**: Authentication information inconsistent. The bank card has not enabled authenticated payment.
   * - **203**: Authentication information inconsistent. The bank card has expired.
   * - **204**: Authentication information inconsistent. The bank card is restricted.
   * - **205**: Authentication information inconsistent. The card has been confiscated.
   * - **206**: Authentication information inconsistent. The bank card is invalid.
   * - **207**: Authentication information inconsistent. No issuing bank found for this card.
   * - **208**: Authentication information inconsistent. The card is not initialized or is a dormant card.
   * - **209**: Authentication information inconsistent. The card is a fraudulent or retained card.
   * - **210**: Authentication information inconsistent. The card has been reported lost.
   * - **211**: Authentication information inconsistent. The number of incorrect password attempts has exceeded the limit.
   * - **212**: Authentication information inconsistent. The issuing bank does not support this transaction.
   * - **213**: Authentication information inconsistent. The card status is abnormal or the card is invalid.
   * - **214**: Authentication information inconsistent. No phone number is registered with the card.
   * - **215**: Authentication information inconsistent. The password, expiration date, or CVN2 is incorrect.
   * - **216**: Authentication information inconsistent. Other card exceptions.
   * - **301**: Verification unavailable. The bank card does not support this service.
   * - **302**: Verification unavailable. Verification failed or the bank rejected the verification. Contact the issuing bank.
   * - **303**: Verification unavailable. The bank card does not currently support phone number verification.
   * - **304**: Verification unavailable. The bank card number is incorrect.
   * - **305**: Verification unavailable. Other reasons.
   * - **306**: Verification unavailable. The number of verification attempts has exceeded the limit.
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
   * The response code. A value of 200 indicates success. Other values indicate failure.
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
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * The result information.
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

