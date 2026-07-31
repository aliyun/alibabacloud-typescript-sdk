// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The balance pool to which the recharge is applied. Valid values:
   * - permanent: the permanent balance pool.
   * - monthly: the monthly balance pool.
   * 
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @remarks
   * The effective period, in UNIX timestamp (seconds). Range: from 00:00 of today to 00:00 of the first day of the next month (Asia/Shanghai).
   * 
   * @example
   * 1719792000
   */
  effectiveTime?: number;
  /**
   * @remarks
   * The idempotency key. UUID v4 format without hyphens is recommended. This prevents duplicate subscription creation.
   * 
   * @example
   * 550e8400e29b41d4a716446655440000
   */
  idempotencyKey?: string;
  /**
   * @remarks
   * The subscription recharge amount.
   * 
   * @example
   * 100.00
   */
  subscriptionAmount?: number;
  static names(): { [key: string]: string } {
    return {
      balanceType: 'balanceType',
      effectiveTime: 'effectiveTime',
      idempotencyKey: 'idempotencyKey',
      subscriptionAmount: 'subscriptionAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balanceType: 'string',
      effectiveTime: 'number',
      idempotencyKey: 'string',
      subscriptionAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

