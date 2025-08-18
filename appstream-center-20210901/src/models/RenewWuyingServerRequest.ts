// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewWuyingServerRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @example
   * ws-0bw2f11****dial
   */
  wuyingServerId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      wuyingServerId: 'WuyingServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      wuyingServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

