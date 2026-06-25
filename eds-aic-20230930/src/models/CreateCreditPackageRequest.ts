// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCreditPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable auto-payment. Valid values:
   * 
   * - **true**: Enables auto-payment. Make sure that your account has a sufficient balance.
   * 
   * - **false** (Default): Creates an unpaid order.
   * 
   * > If your account has an insufficient balance, you can set this parameter to false. This generates an unpaid order. You can then pay for the order in the Wuying Cloud Phone management console.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
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
   * The subscription duration. The PeriodUnit parameter specifies the unit for the duration.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * Valid values:
   * 
   * - **Month**: The period is measured in months.
   * 
   * - **Year**: The period is measured in years.
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
   * 50003308011****
   */
  promotionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      creditAmount: 'CreditAmount',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      creditAmount: 'string',
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

