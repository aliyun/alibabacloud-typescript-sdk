// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRatePlanPriceGapRequest extends $dara.Model {
  /**
   * @remarks
   * The target plan name. You can obtain this value from the [DescribeRatePlanPrice](~~DescribeRatePlanPrice~~) operation.
   * 
   * @example
   * entranceplan
   */
  instanceId?: string;
  /**
   * @remarks
   * The specification change type. Valid values:
   * - DOWNGRADE: downgrade.
   * - UPGRADE: upgrade.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  /**
   * @remarks
   * The specification change type. Valid values:
   * - DOWNGRADE: downgrade.
   * - UPGRADE: upgrade.
   * 
   * @example
   * UPGRADE
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

