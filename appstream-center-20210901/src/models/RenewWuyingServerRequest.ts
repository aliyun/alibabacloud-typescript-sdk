// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewWuyingServerRequest extends $dara.Model {
  /**
   * @remarks
   * Automatic payment.
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
   * The unit of the renewal time.
   * 
   * Valid values:
   * 
   * *   Month: month.
   * *   Year: year.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The discount ID.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The ID of the workstation.
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

