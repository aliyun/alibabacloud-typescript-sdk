// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAutoScalingPolicyResponseBodyScalingPolicyConstraints } from "./GetAutoScalingPolicyResponseBodyScalingPolicyConstraints";
import { GetAutoScalingPolicyResponseBodyScalingPolicyScalingRules } from "./GetAutoScalingPolicyResponseBodyScalingPolicyScalingRules";


export class GetAutoScalingPolicyResponseBodyScalingPolicy extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The maximum and minimum number of nodes in the node group.
   */
  constraints?: GetAutoScalingPolicyResponseBodyScalingPolicyConstraints;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The ID of the scaling policy.
   * 
   * @example
   * asp-asduwe23znl***
   */
  scalingPolicyId?: string;
  /**
   * @remarks
   * The auto scaling rules.
   */
  scalingRules?: GetAutoScalingPolicyResponseBodyScalingPolicyScalingRules[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      constraints: 'Constraints',
      nodeGroupId: 'NodeGroupId',
      scalingPolicyId: 'ScalingPolicyId',
      scalingRules: 'ScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      constraints: GetAutoScalingPolicyResponseBodyScalingPolicyConstraints,
      nodeGroupId: 'string',
      scalingPolicyId: 'string',
      scalingRules: { 'type': 'array', 'itemType': GetAutoScalingPolicyResponseBodyScalingPolicyScalingRules },
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

