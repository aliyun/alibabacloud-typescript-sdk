// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewAndroidInstanceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The list of instance group IDs.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The redirect URL to the payment success page.
   * 
   * @example
   * wya.wuying.aliyun.com/instanceGroup
   */
  paidCallBackUrl?: string;
  /**
   * @remarks
   * Specifies the renewal duration. The unit is specified by the PeriodUnit parameter.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal duration, which is the unit of the Period parameter. Default value: Month.
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
      instanceGroupIds: 'InstanceGroupIds',
      paidCallBackUrl: 'PaidCallBackUrl',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      paidCallBackUrl: 'string',
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

