// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingConstraints } from "./ScalingConstraints";
import { ScalingRule } from "./ScalingRule";


export class PutAutoScalingPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The constraints on the maximum and minimum numbers of nodes in a node group.
   */
  constraints?: ScalingConstraints;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description list of auto scaling rules. Number of elements in the array: 0 to 100.
   */
  scalingRules?: ScalingRule[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      constraints: 'Constraints',
      nodeGroupId: 'NodeGroupId',
      regionId: 'RegionId',
      scalingRules: 'ScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      constraints: ScalingConstraints,
      nodeGroupId: 'string',
      regionId: 'string',
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

