// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The ID of the scaling rule to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * r-d01a1cac4081s****
   */
  scalingRuleId?: string;
  /**
   * @remarks
   * The trigger type.
   * 
   * This parameter is required.
   * 
   * @example
   * TIME_TRIGGER
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeGroupId: 'NodeGroupId',
      scalingRuleId: 'ScalingRuleId',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

