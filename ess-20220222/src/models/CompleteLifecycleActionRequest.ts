// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteLifecycleActionRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request.
   * 
   * You can generate a parameter value from your client to ensure that the value is unique across different requests. The value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The next action to perform after the wait state of the lifecycle hook ends. Valid values:
   * - CONTINUE: Continues the scale-out activity and adds the ECS instance to the scaling group, or continues the scale-in activity and removes the ECS instance from the scaling group.
   * - ABANDON: Terminates the scale-out activity and releases the created ECS instance, or continues the scale-in activity and removes the ECS instance from the scaling group.
   * - ROLLBACK: Rejects the release of the ECS instance and performs a rollback for a scale-in activity. For a scale-out activity, the effect is the same as ABANDON.
   * 
   * If you do not specify this parameter, the next action after the wait state of the lifecycle hook ends remains the `DefaultResult` value configured for the lifecycle hook.
   * 
   * If multiple lifecycle hooks exist in the scaling group and are triggered simultaneously, the final next action is determined as follows:
   * - For a scale-in activity, when the wait state triggered by an ABANDON or ROLLBACK lifecycle hook ends, the wait states of subsequent lifecycle hooks are ended in advance.
   * - If the lifecycle hook that suspends the scale-in activity is of the CONTINUE type, or for a scale-out activity, subsequent lifecycle hooks continue to suspend the scaling activity until the wait state triggered by the last lifecycle hook ends. The final next action is determined by the type of the last lifecycle hook that ends the wait state.
   * 
   * @example
   * CONTINUE
   */
  lifecycleActionResult?: string;
  /**
   * @remarks
   * The identifier of the wait state for the scaling activity. You can obtain this value from the Message Service (MNS) queue or MNS topic specified by the lifecycle hook.
   * 
   * This parameter is required.
   * 
   * @example
   * aaaa-bbbbb-cccc-ddddd
   */
  lifecycleActionToken?: string;
  /**
   * @remarks
   * The ID of the lifecycle hook.
   * 
   * This parameter is required.
   * 
   * @example
   * ash-bp14g3ee6bt3sc98****
   */
  lifecycleHookId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lifecycleActionResult: 'LifecycleActionResult',
      lifecycleActionToken: 'LifecycleActionToken',
      lifecycleHookId: 'LifecycleHookId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lifecycleActionResult: 'string',
      lifecycleActionToken: 'string',
      lifecycleHookId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

