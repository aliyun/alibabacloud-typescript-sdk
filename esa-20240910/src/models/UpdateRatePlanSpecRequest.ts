// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRatePlanSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @example
   * xcdn-91fknmb80f0g
   */
  instanceId?: string;
  /**
   * @remarks
   * The specification update type. Valid values:
   * 
   * *   DOWNGRADE
   * *   UPGRADE
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  /**
   * @example
   * entranceplan
   */
  targetPlanCode?: string;
  /**
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

