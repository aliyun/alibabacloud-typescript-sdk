// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewWuyingServerRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The renewal duration.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit for the renewal period.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The workstation ID.
   * 
   * > 
   * > - A workstation can be renewed only after the order payment is completed (AutoPay=true during creation or manual payment is made through the console payment page). Calling this API for an unpaid workstation returns WuyingServerError.NotFound.
   * 
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

