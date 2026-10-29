// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditPackagePriceRequest extends $dara.Model {
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
   * The number of credit boost packages to purchase. Valid values: 1 to 99.
   * 
   * @example
   * 1
   */
  packageAmount?: string;
  /**
   * @remarks
   * The subscription period of the resource. The unit is specified by PeriodUnit. Valid values: 3 months, 6 months, and 1 year.
   * 
   * @example
   * 3
   */
  period?: string;
  /**
   * @remarks
   * The billing time unit of the subscription Billable methods. Valid values:
   * - **Year**: year
   * - **Month** (default): month
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
      creditAmount: 'CreditAmount',
      packageAmount: 'PackageAmount',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditAmount: 'number',
      packageAmount: 'string',
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

