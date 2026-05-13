// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BillingBillSummaryPointDTO extends $dara.Model {
  /**
   * @example
   * 1700000000
   */
  timestamp?: number;
  /**
   * @example
   * 1.23
   */
  totalAmount?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'timestamp',
      totalAmount: 'totalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      totalAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

