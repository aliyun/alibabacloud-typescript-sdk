// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecordLifecycleActionHeartbeatRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The time window during which the ECS instance stays in a Pending state. When the time window ends, Auto Scaling executes the default action. Valid values: 30 to 21600. Unit: seconds.
   * 
   * After you create a lifecycle hook, you can call this operation to extend the time window during which the ECS instance stays in a Pending state. You can also call the [CompleteLifecycleAction](https://help.aliyun.com/document_detail/459335.html) operation to remove the ECS instance from the Pending state ahead of schedule.
   * 
   * Default value: 600.
   * 
   * @example
   * 600
   */
  heartbeatTimeout?: number;
  /**
   * @remarks
   * The action token of the lifecycle hook. You can obtain the token from the details page of the Simple Message Queue (SMQ, formerly MNS) queue specified for the lifecycle hook.
   * 
   * You can also call the [DescribeLifecycleActions](https://help.aliyun.com/document_detail/459333.html) operation to obtain the action token of the lifecycle hook.
   * 
   * If you specified an SMQ topic for the lifecycle hook, you can obtain the token from the MNS topic.
   * 
   * This parameter is required.
   * 
   * @example
   * F324B880-900E-4968-85DD-81691113****
   */
  lifecycleActionToken?: string;
  /**
   * @remarks
   * The ID of the lifecycle hook.
   * 
   * This parameter is required.
   * 
   * @example
   * ash-bp1fxuqyi98w0aib****
   */
  lifecycleHookId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      heartbeatTimeout: 'heartbeatTimeout',
      lifecycleActionToken: 'lifecycleActionToken',
      lifecycleHookId: 'lifecycleHookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      heartbeatTimeout: 'number',
      lifecycleActionToken: 'string',
      lifecycleHookId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

