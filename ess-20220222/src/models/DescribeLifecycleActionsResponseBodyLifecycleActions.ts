// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecycleActionsResponseBodyLifecycleActions extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ECS instances on which the lifecycle hook takes effect
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The subsequent action that Auto Scaling performs after the lifecycle hook times out. Valid values:
   * 
   * *   CONTINUE: Auto Scaling continues to respond to a scale-in or scale-out request.
   * *   ABANDON: Auto Scaling releases ECS instances that are created during scale-out events, or removes ECS instances from the scaling group during scale-in events.
   * 
   * @example
   * CONTINUE
   */
  lifecycleActionResult?: string;
  /**
   * @remarks
   * The status of the lifecycle hook action.
   * 
   * @example
   * Pending
   */
  lifecycleActionStatus?: string;
  /**
   * @remarks
   * The token of the lifecycle hook action.
   * 
   * @example
   * 9C2E9DA7-F794-449A-ACF6-CEE24444F7BB
   */
  lifecycleActionToken?: string;
  /**
   * @remarks
   * The ID of the lifecycle hook.
   * 
   * @example
   * ash-bp18uoft0deax0f7****
   */
  lifecycleHookId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      lifecycleActionResult: 'LifecycleActionResult',
      lifecycleActionStatus: 'LifecycleActionStatus',
      lifecycleActionToken: 'LifecycleActionToken',
      lifecycleHookId: 'LifecycleHookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleActionResult: 'string',
      lifecycleActionStatus: 'string',
      lifecycleActionToken: 'string',
      lifecycleHookId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

