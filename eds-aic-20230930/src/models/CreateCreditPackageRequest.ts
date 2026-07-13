// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCreditPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: enables automatic payment. Make sure that your account balance is sufficient.
   * - **false** (default): generates an order without charging your account.
   * 
   * 
   * 
   * 
   * > If your payment method has an insufficient balance, set this parameter to false. An unpaid order is generated, and you can log on to the Elastic Cloud Phone console to complete the payment.
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
   * The duration for which you want to purchase the resource. The unit is specified by PeriodUnit.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The unit of the duration for which you want to purchase the resource.
   * 
   * Valid values:
   * - **Month**: month.
   * - **Year**: year.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the promotional campaign.
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

