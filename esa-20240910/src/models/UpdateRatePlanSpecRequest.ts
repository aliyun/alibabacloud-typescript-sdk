// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRatePlanSpecRequest extends $dara.Model {
  autoPay?: boolean;
  chargeType?: string;
  instanceId?: string;
  orderType?: string;
  targetPlanCode?: string;
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

