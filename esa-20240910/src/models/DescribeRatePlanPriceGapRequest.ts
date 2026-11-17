// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRatePlanPriceGapRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the target plan. You can obtain it by calling the [DescribeRatePlanPrice](~~DescribeRatePlanPrice~~) operation.
   * 
   * @example
   * entranceplan
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the specification change. Valid values:
   * - DOWNGRADE: Downgrade.
   * - UPGRADE: Upgrade.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  /**
   * @remarks
   * The code of the target plan for the specification change.
   * 
   * @example
   * standardplan
   */
  targetPlanCode?: string;
  /**
   * @remarks
   * The name of the target plan for the specification change.
   * 
   * @example
   * entranceplan
   */
  targetPlanName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderType: 'OrderType',
      targetPlanCode: 'TargetPlanCode',
      targetPlanName: 'TargetPlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

