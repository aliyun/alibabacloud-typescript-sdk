// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMobileAgentPackagePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of MobileAgent packages.
   * 
   * @example
   * 1
   */
  amount?: string;
  /**
   * @remarks
   * The region ID for the purchase.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The number of credits.
   * 
   * @example
   * 1000
   */
  creditAmount?: number;
  /**
   * @remarks
   * The specifications of the MobileAgent package.
   * 
   * @example
   * advanced
   */
  mobileAgentPackageSpec?: string;
  /**
   * @remarks
   * The subscription duration of the purchased resource. The unit is specified by PeriodUnit. Valid value: 1 month.
   * 
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * The duration unit of the subscription billing method. Valid values:
   * - **Year**: Year.
   * - **Month** (default): Month.
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
      amount: 'Amount',
      bizRegionId: 'BizRegionId',
      creditAmount: 'CreditAmount',
      mobileAgentPackageSpec: 'MobileAgentPackageSpec',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      bizRegionId: 'string',
      creditAmount: 'number',
      mobileAgentPackageSpec: 'string',
      period: 'string',
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

