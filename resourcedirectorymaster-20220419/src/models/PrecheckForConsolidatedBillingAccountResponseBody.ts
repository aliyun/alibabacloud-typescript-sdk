// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrecheckForConsolidatedBillingAccountResponseBodyReasons extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * PaymentAccountEnterpriseInvoiceError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * No enterprise invoice header information is set for the payment account.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrecheckForConsolidatedBillingAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cause of the check failure.
   */
  reasons?: PrecheckForConsolidatedBillingAccountResponseBodyReasons[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E6B6CA8-9E7A-521F-A743-AA582714727E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the check was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      reasons: 'Reasons',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasons: { 'type': 'array', 'itemType': PrecheckForConsolidatedBillingAccountResponseBodyReasons },
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.reasons)) {
      $dara.Model.validateArray(this.reasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

