// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRatePlanSpecRequest extends $dara.Model {
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
   * The billing type. Valid values:
   * - PREPAY: Subscription.
   * - POSTPAY: Pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * xcdn-91fknmb80f0g
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of specification change. Valid values:
   * - UPGRADE: Upgrade.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  /**
   * @remarks
   * The code of the target plan.
   * 
   * Alibaba Cloud China Website (www.aliyun.com)
   * 
   * - Free Edition: entranceplan
   * - Basic Edition: basicplan
   * - Standard Edition: standardplan
   * - Premium Edition: advancedplan
   * 
   * Alibaba Cloud International Website (www.alibabacloud.com)
   * 
   * - Entrance: entranceplan
   * - Pro: standardplan
   * - Premium: advancedpla.
   * 
   * @example
   * entranceplan
   */
  targetPlanCode?: string;
  /**
   * @remarks
   * The name of the target plan.
   * 
   * Alibaba Cloud China Website (www.aliyun.com)
   * 
   * - Free Edition: entranceplan
   * - Basic Edition: basic
   * - Standard Edition: medium
   * - Premium Edition: high
   * 
   * Alibaba Cloud International Website (www.alibabacloud.com)
   * 
   * - Entrance: entranceplan_intl
   * - Pro: basicplan_intl
   * - Premium: vipplan_intl.
   * 
   * @example
   * basic
   */
  targetPlanName?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      chargeType: 'ChargeType',
      instanceId: 'InstanceId',
      orderType: 'OrderType',
      targetPlanCode: 'TargetPlanCode',
      targetPlanName: 'TargetPlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      chargeType: 'string',
      instanceId: 'string',
      orderType: 'string',
      targetPlanCode: 'string',
      targetPlanName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

