// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCreditPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: Enables automatic payment. Make sure that your account balance is sufficient.
   * - **false** (default): Generates an order without deducting payment.
   * 
   * 
   * 
   * 
   * > If the balance of your payment method is insufficient, set this parameter to false. An unpaid order is generated. You can log on to the WUYING Cloud Phone console to complete the payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  channelCookie?: string;
  /**
   * @remarks
   * The number of credits.
   * 
   * @example
   * 1000
   */
  creditAmount?: string;
  packageAmount?: string;
  /**
   * @remarks
   * The subscription duration of the purchased resource. The unit is specified by PeriodUnit.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration for the purchased resource. Valid values:
   * - **Month**: Month.
   * - **Year**: Year.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the promotion.
   * 
   * @example
   * 50003308011****
   */
  promotionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      channelCookie: 'ChannelCookie',
      creditAmount: 'CreditAmount',
      packageAmount: 'PackageAmount',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      channelCookie: 'string',
      creditAmount: 'string',
      packageAmount: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

