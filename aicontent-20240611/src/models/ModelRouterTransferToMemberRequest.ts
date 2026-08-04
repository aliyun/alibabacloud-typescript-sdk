// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterTransferToMemberRequest extends $dara.Model {
  /**
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  idempotencyKey?: string;
  /**
   * @example
   * 0
   */
  monthlyQuota?: number;
  /**
   * @example
   * 转账
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

