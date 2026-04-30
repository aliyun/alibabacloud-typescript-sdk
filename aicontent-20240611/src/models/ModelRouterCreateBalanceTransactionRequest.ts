// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateBalanceTransactionRequest extends $dara.Model {
  /**
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @example
   * 充值
   */
  remark?: string;
  /**
   * @example
   * recharge
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      remark: 'remark',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      remark: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

