// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Compute group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * ID of the scaling rule to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * r-d01a1cac4081s****
   */
  scalingRuleId?: string;
  /**
   * @remarks
   * Trigger type.
   * 
   * This parameter is required.
   * 
   * @example
   * TIME_TRIGGER
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      scalingRuleId: 'ScalingRuleId',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      scalingRuleId: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

