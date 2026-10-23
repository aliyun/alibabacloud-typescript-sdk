// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMobileAgentPackagePriceForRenewRequest extends $dara.Model {
  mobileAgentPackageIds?: string[];
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
      mobileAgentPackageIds: 'MobileAgentPackageIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobileAgentPackageIds: { 'type': 'array', 'itemType': 'string' },
      period: 'string',
      periodUnit: 'string',
      promotionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mobileAgentPackageIds)) {
      $dara.Model.validateArray(this.mobileAgentPackageIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

