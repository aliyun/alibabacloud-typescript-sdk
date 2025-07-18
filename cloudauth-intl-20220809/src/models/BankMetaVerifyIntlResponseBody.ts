// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BankMetaVerifyIntlResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Verification result code.
   * - 1: Consistent (charged)
   * - 2: Inconsistent (charged)
   * - 3: No record found (not charged)
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
   * - **202**: Authentication information does not match, bank card has not been activated for authenticated payments.
   * - **203**: Authentication information does not match, bank card has expired.
   * - **204**: Authentication information does not match, bank card is a restricted card.
   * - **205**: Authentication information does not match, this card has been confiscated.
   * - **206**: Authentication information does not match, bank card is invalid.
   * - **207**: Authentication information does not match, this card has no corresponding issuing bank.
   * - **208**: Authentication information does not match, this card is uninitialized or dormant.
   * - **209**: Authentication information does not match, this card is a cheating card or swallowed card.
   * - **210**: Authentication information does not match, this card has been reported lost.
   * - **211**: Authentication information does not match, password error limit exceeded.
   * - **212**: Authentication information does not match, issuing bank does not support this transaction.
   * - **213**: Authentication information does not match, card status is abnormal or card is invalid.
   * - **214**: Authentication information does not match, no phone number reserved.
   * - **215**: Authentication information does not match, entered password, expiration date, or CVN2 is incorrect.
   * - **216**: Authentication information does not match, other card anomalies.
   * - **301**: Unable to verify, bank card does not support this service.
   * - **302**: Unable to verify, verification failed or bank refused verification, please contact the issuing bank.
   * - **303**: Unable to verify, bank card does not currently support phone number verification.
   * - **304**: Unable to verify, bank card number is incorrect.
   * - **305**: Unable to verify, other reasons.
   * - **306**: Unable to verify, verification attempt limit exceeded.
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
   * Return code: 200 for success, others for failure.
   * 
   * @example
   * 200
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
   * Request ID.
   * 
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information
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

