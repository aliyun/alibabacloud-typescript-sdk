// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditPackagePriceRequest extends $dara.Model {
  /**
   * @example
   * 1000
   */
  creditAmount?: number;
  /**
   * @example
   * 1
   */
  packageAmount?: string;
  /**
   * @example
   * 3
   */
  period?: string;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  /**
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

