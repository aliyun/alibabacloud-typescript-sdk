// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceGroupPriceForRenewRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance group IDs.
   * 
   * This parameter is required.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The subscription period of the resource. The unit is specified by PeriodUnit. Valid values: 1 month, 2 months, 3 months, 6 months, and 1 year.
   * 
   * @example
   * 3
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * - **Month**: month
   * - **Year**: year
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
      instanceGroupIds: 'InstanceGroupIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

