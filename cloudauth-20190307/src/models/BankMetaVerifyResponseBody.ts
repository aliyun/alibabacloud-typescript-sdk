// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BankMetaVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * - 1: Consistent (billable).
   * - 2: Inconsistent (billable).
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
   * - **201**: Verification information is inconsistent. The cardholder information is incorrect.
   * - **202**: Verification information is inconsistent. The bank card has not enabled authenticated payment.
   * - **203**: Verification information is inconsistent. The bank card has expired.
   * - **204**: Verification information is inconsistent. The bank card is restricted.
   * - **205**: Verification information is inconsistent. The card has been confiscated.
   * - **206**: Verification information is inconsistent. The bank card is invalid.
   * - **207**: Verification information is inconsistent. No issuing bank found for this card.
   * - **208**: Verification information is inconsistent. The card has not been initialized or is a dormant card.
   * - **209**: Verification information is inconsistent. The card is a fraudulent or retained card.
   * - **210**: Verification information is inconsistent. The card has been reported lost.
   * - **211**: Verification information is inconsistent. The number of incorrect password attempts has exceeded the limit.
   * - **212**: Verification information is inconsistent. The issuing bank does not support this transaction.
   * - **213**: Verification information is inconsistent. The card status is abnormal or the card is invalid.
   * - **214**: Verification information is inconsistent. No phone number is registered with the card.
   * - **215**: Verification information is inconsistent. The password, expiration date, or CVN2 is incorrect.
   * - **216**: Verification information is inconsistent. Other card exceptions.
   * - **301**: Unable to verify. The bank card does not support this service.
   * - **302**: Unable to verify. Verification failed or the bank rejected the verification. Contact the issuing bank.
   * - **303**: Unable to verify. The bank card does not support phone number verification.
   * - **304**: Unable to verify. The bank card number is incorrect.
   * - **305**: Unable to verify. Other reasons.
   * - **306**: Unable to verify. The number of verification attempts has exceeded the limit.
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
   * The return code. A value of 200 indicates success. Other values indicate failure.
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
   * The result information.
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

