// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BankMetaVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Verification result.
   * 
   * - 1: Consistent (billable)
   * - 2: Inconsistent (billable)
   * - 3: No record found (non-billable)
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * Verification details:
   * 
   * - **101**: Verification passed.
   * - **201**: Authentication information does not match, cardholder information is incorrect.
   * - **202**: Authentication information does not match, bank card has not enabled authentication payment.
   * - **203**: Authentication information does not match, bank card has expired.
   * - **204**: Authentication information does not match, bank card is a restricted card.
   * - **205**: Authentication information does not match, this card has been confiscated.
   * - **206**: Authentication information does not match, bank card is invalid.
   * - **207**: Authentication information does not match, this card has no corresponding issuing bank.
   * - **208**: Authentication information does not match, the card is uninitialized or a dormant card.
   * - **209**: Authentication information does not match, this card is a cheating card or swallowed card.
   * - **210**: Authentication information does not match, this card has been reported lost.
   * - **211**: Authentication information does not match, the number of password errors exceeds the limit.
   * - **212**: Authentication information does not match, the issuing bank does not support this transaction.
   * - **213**: Authentication information does not match, the card status is abnormal or the card is invalid.
   * - **214**: Authentication information does not match, no mobile phone number reserved.
   * - **215**: Authentication information does not match, the entered password, expiration date, or CVN2 is incorrect.
   * - **216**: Authentication information does not match, other card anomalies.
   * - **301**: Unable to verify, the bank card does not support this service.
   * - **302**: Unable to verify, verification failed or the bank refused to verify, please contact the issuing bank.
   * - **303**: Unable to verify, the bank card does not currently support mobile phone number verification.
   * - **304**: Unable to verify, the bank card number is incorrect.
   * - **305**: Unable to verify, other reasons.
   * - **306**: Unable to verify, the number of verifications exceeds the limit.
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
   * Return code: 200 for success, others for failure.
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
   * 473469C7-A***B-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information
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

