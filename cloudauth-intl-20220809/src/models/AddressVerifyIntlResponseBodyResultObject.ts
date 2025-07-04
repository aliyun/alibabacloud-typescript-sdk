// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddressVerifyIntlResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 0-3000
   */
  addressInfo?: string;
  /**
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @example
   * Y
   */
  passed?: string;
  /**
   * @example
   * 200
   */
  subCode?: string;
  /**
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

