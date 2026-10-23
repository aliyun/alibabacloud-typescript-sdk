// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCreditPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: enables automatic payment. Make sure that your account balance is sufficient.
   * - **false** (default): generates an unpaid order without deducting fees.
   * 
   * > If the balance of your payment method is insufficient, you can change the Settings of this parameter to false to generate an unpaid order. Then, you can log on to the WUYING Cloud Phone console to complete the payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The channel cookie. This parameter is passed through to the sales system when you place an order.
   * 
   * @example
   * channel-cookie-credit
   */
  channelCookie?: string;
  /**
   * @remarks
   * The number of credits.
   * 
   * @example
   * 1000
   */
  creditAmount?: string;
  /**
   * @remarks
   * The number of credit packages to purchase.
   * 
   * @example
   * 1
   */
  packageAmount?: string;
  /**
   * @remarks
   * The subscription period of the resource. The unit is specified by PeriodUnit.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * - **Month**: months.
   * - **Year**: years.
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

