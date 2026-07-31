// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateBalanceTransactionRequest extends $dara.Model {
  /**
   * @remarks
   * The transaction amount.
   * 
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @remarks
   * The target balance pool type. Default value: permanent. Valid values:
   * 
   * - permanent: permanent balance pool. The balance never expires.
   * - monthly: monthly balance pool. The balance is automatically reset to zero at the beginning of each month.
   * 
   * @example
   * amount
   */
  balanceType?: string;
  /**
   * @remarks
   * The idempotency key. UUID v4 format is recommended. Maximum length: 32 characters. Duplicate submissions with the same key are not executed repeatedly.
   * 
   * @example
   * 550e8400e29b41d4a716446655440000
   */
  idempotencyKey?: string;
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * Top-up
   */
  remark?: string;
  /**
   * @remarks
   * The transaction type.
   * 
   * @example
   * recharge
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      balanceType: 'balanceType',
      idempotencyKey: 'idempotencyKey',
      remark: 'remark',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      balanceType: 'string',
      idempotencyKey: 'string',
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

