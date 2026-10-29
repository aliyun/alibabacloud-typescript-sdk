// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMobileAgentPackagePriceForRenewRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the MobileAgent resource plans.
   */
  mobileAgentPackageIds?: string[];
  /**
   * @remarks
   * The subscription period of the resource. The unit is specified by PeriodUnit. Valid values: 1 month, 2 months, 3 months, 6 months, and 1 year.
   * 
   * @example
   * 3
   */
  period?: string;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * - **Month**: Month.
   * - **Year**: Year.
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

