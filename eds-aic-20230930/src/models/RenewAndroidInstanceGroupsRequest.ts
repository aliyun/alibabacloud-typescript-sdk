// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewAndroidInstanceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the auto-payment feature.
   * 
   * Valid values:
   * 
   * *   true: enables the auto-payment feature. Ensure your account has sufficient balance to use this feature.
   * *   false: disables the auto-payment feature. You need to manually complete the payment process.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The IDs of the instance groups.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The duration of the renewal, measured in units defined by PeriodUnit.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal duration. Default value: Month.
   * 
   * Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  promotionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      instanceGroupIds: 'InstanceGroupIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
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

