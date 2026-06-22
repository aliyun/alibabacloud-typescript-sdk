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
   * The maximum and minimum size constraints for the node group.
   */
  constraints?: ScalingConstraints;
  /**
   * @remarks
   * The node group ID.
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
   * The scaling rules. The number of elements in the array can be from 0 to 100.
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

