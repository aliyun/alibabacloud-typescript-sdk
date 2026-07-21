// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateSubscriptionRequest extends $dara.Model {
  /**
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @example
   * 1719792000
   */
  effectiveTime?: number;
  /**
   * @example
   * 550e8400e29b41d4a716446655440000
   */
  idempotencyKey?: string;
  /**
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

