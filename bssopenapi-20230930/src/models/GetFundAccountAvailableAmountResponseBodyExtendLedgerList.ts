// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountAvailableAmountResponseBodyExtendLedgerList extends $dara.Model {
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 应付对冲账本
   */
  ledgerName?: string;
  /**
   * @example
   * 50
   */
  originalAmount?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      ledgerName: 'LedgerName',
      originalAmount: 'OriginalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      ledgerName: 'string',
      originalAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

