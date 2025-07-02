// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesConstraints } from "./GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesConstraints";
import { GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesScalingRules } from "./GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesScalingRules";


export class GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPolicies extends $dara.Model {
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
  constraints?: GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesConstraints;
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The name of the node group.
   * 
   * @example
   * emr-etltask
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The ID of the auto scaling policy.
   * 
   * @example
   * asp-asduwe23znl***
   */
  scalingPolicyId?: string;
  /**
   * @remarks
   * The type of the auto scaling policy.
   */
  scalingPolicyType?: string;
  /**
   * @remarks
   * The auto scaling rules.
   */
  scalingRules?: GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesScalingRules[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      constraints: 'Constraints',
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
      constraints: GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesConstraints,
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      scalingPolicyId: 'string',
      scalingPolicyType: 'string',
      scalingRules: { 'type': 'array', 'itemType': GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesScalingRules },
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

