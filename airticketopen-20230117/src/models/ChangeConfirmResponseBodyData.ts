// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeConfirmResponseBodyData extends $dara.Model {
  /**
   * @example
   * 30
   */
  payAmount?: number;
  /**
   * @example
   * hkduendkd-2023-dj0
   */
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      payAmount: 'pay_amount',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payAmount: 'number',
      transactionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

