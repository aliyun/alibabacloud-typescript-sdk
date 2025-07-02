// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ManagedScalingConstraints } from "./ManagedScalingConstraints";
import { ScalingRule } from "./ScalingRule";


export class ScalingPolicy extends $dara.Model {
  clusterId?: string;
  constraints?: ManagedScalingConstraints;
  disabled?: boolean;
  nodeGroupId?: string;
  nodeGroupName?: string;
  scalingPolicyId?: string;
  /**
   * @example
   * AUTO / MANAGED
   */
  scalingPolicyType?: string;
  scalingRules?: ScalingRule[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      constraints: 'Constraints',
      disabled: 'Disabled',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      scalingPolicyId: 'ScalingPolicyId',
      scalingPolicyType: 'ScalingPolicyType',
      scalingRules: 'ScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      constraints: ManagedScalingConstraints,
      disabled: 'boolean',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      scalingPolicyId: 'string',
      scalingPolicyType: 'string',
      scalingRules: { 'type': 'array', 'itemType': ScalingRule },
    };
  }

  validate() {
    if(this.constraints && typeof (this.constraints as any).validate === 'function') {
      (this.constraints as any).validate();
    }
    if(Array.isArray(this.scalingRules)) {
      $dara.Model.validateArray(this.scalingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

