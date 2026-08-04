// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateMemberBalanceTransactionRequest extends $dara.Model {
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
   * The balance type. Valid values:
   * 
   * - permanent
   * - monthly
   * 
   * Default value: permanent.
   * 
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @remarks
   * The idempotency key. UUID v4 format is recommended.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  idempotencyKey?: string;
  /**
   * @remarks
   * The remark for the transaction.
   * 
   * @example
   * Recharge
   */
  remark?: string;
  /**
   * @remarks
   * The transaction type. Valid values: recharge, deduct, and transfer.
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

