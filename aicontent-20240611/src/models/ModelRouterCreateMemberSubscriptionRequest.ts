// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateMemberSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The subscription amount.
   * 
   * @example
   * 100.00
   */
  amount?: number;
  /**
   * @remarks
   * The balance type. Valid values:
   * 
   * - permanent: permanent balance.
   * - monthly: monthly balance.
   * 
   * @example
   * monthly
   */
  balanceType?: string;
  /**
   * @remarks
   * The effective period in UNIX timestamp (seconds).
   * 
   * @example
   * 1753858800
   */
  effectiveTime?: number;
  /**
   * @remarks
   * The idempotency key. UUID v4 format is recommended.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  idempotencyKey?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      balanceType: 'balanceType',
      effectiveTime: 'effectiveTime',
      idempotencyKey: 'idempotencyKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      balanceType: 'string',
      effectiveTime: 'number',
      idempotencyKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

