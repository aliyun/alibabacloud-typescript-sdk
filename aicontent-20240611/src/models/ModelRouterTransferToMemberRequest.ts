// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterTransferToMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The transfer amount.
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
   * The monthly refresh quota for monthly-type transfers.
   * 
   * @example
   * 0
   */
  monthlyQuota?: number;
  /**
   * @remarks
   * The remark for the transfer.
   * 
   * @example
   * Transfer
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      balanceType: 'balanceType',
      idempotencyKey: 'idempotencyKey',
      monthlyQuota: 'monthlyQuota',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      balanceType: 'string',
      idempotencyKey: 'string',
      monthlyQuota: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

