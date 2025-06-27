// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan } from "./DescribeGtmRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan";


export class DescribeGtmRecoveryPlansResponseBodyRecoveryPlans extends $dara.Model {
  recoveryPlan?: DescribeGtmRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan[];
  static names(): { [key: string]: string } {
    return {
      recoveryPlan: 'RecoveryPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recoveryPlan: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan },
    };
  }

  validate() {
    if(Array.isArray(this.recoveryPlan)) {
      $dara.Model.validateArray(this.recoveryPlan);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

