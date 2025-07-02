// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingGroupConfigMultiAvailablePolicyPolicyParam } from "./ScalingGroupConfigMultiAvailablePolicyPolicyParam";


export class ScalingGroupConfigMultiAvailablePolicy extends $dara.Model {
  /**
   * @remarks
   * 资源可用性策略(成本优化参数)。
   */
  policyParam?: ScalingGroupConfigMultiAvailablePolicyPolicyParam;
  /**
   * @remarks
   * 策略类型。
   * 
   * @example
   * PRIORITY
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      policyParam: 'PolicyParam',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyParam: ScalingGroupConfigMultiAvailablePolicyPolicyParam,
      policyType: 'string',
    };
  }

  validate() {
    if(this.policyParam && typeof (this.policyParam as any).validate === 'function') {
      (this.policyParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

