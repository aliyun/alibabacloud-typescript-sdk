// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMobileAgentPackagePriceRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  amount?: string;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * 1000
   */
  creditAmount?: number;
  /**
   * @example
   * advanced
   */
  mobileAgentPackageSpec?: string;
  /**
   * @example
   * 1
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

