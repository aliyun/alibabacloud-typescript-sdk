// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to modify the expected number of instances. Valid values:
   * 
   * - true: After the ECS instances are removed from the scaling group, the expected number of instances is decreased by the number of removed instances.
   * - false: After the ECS instances are removed from the scaling group, the expected number of instances remains unchanged.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  decreaseDesiredCapacity?: boolean;
  /**
   * @remarks
   * Specifies whether to ignore invalid instances when removing a batch of instances from the scaling group. Valid values:
   * - true: Invalid instances are ignored when removing a batch of instances from the scaling group. If invalid instances exist and valid instances are successfully removed, the execution status of the scaling activity is displayed as Warning. You can view the invalid instances in the scaling activity details.
   * - false: Invalid instances are not ignored when removing a batch of instances from the scaling group. If invalid instances exist in the batch, an error is reported.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  ignoreInvalidInstance?: boolean;
  /**
   * @remarks
   * The IDs of the ECS instances to be removed.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The context information of the lifecycle hook.
   */
  lifecycleHookContextShrink?: string;
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
  /**
   * @remarks
   * Specifies the action for the removed ECS instances. Valid values:
   * 
   * - recycle: The ECS instances are stopped in economical mode.
   * 
   *     > This value takes effect only when `ScalingPolicy` is set to `recycle`.
   * - release: The ECS instances are released.
   * 
   * The ScalingPolicy parameter of CreateScalingGroup specifies the reclaim mode of the scaling group, but the specific action when an instance is removed is determined by the RemovePolicy parameter of RemoveInstances. Examples:
   * 
   * - If ScalingPolicy is set to recycle and RemovePolicy is set to recycle, the ECS instances are stopped in economical mode.
   * - If ScalingPolicy is set to recycle and RemovePolicy is set to release, the ECS instances are released.
   * - If ScalingPolicy is set to release and RemovePolicy is set to recycle, the ECS instances are released.
   * - If ScalingPolicy is set to release and RemovePolicy is set to release, the ECS instances are released.
   * 
   * Default value: release.
   * 
   * @example
   * release
   */
  removePolicy?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The timeout period for waiting for the ECS instances to be successfully stopped during the scale-in process. Unit: seconds.
   * Valid values: 30 to 240.
   * 
   * > - By default, this parameter inherits the value from the scaling group. You can also reset it when calling RemoveInstances.
   * > - This parameter takes effect only in the scale-in process when RemovePolicy is set to release.  
   * > - If this parameter is set, the system waits for a maximum of the StopInstanceTimeout period for the instances to be successfully stopped. After the timeout period, the scale-in process continues regardless of whether the instances are successfully stopped.  
   * > - If this parameter is not set, the system waits for a long time for the instances to be successfully stopped. The scale-in process continues only after the instances are successfully stopped. If the instances fail to be stopped, the scale-in process is rolled back and the scale-in fails.
   * 
   * @example
   * 60
   */
  stopInstanceTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      decreaseDesiredCapacity: 'DecreaseDesiredCapacity',
      ignoreInvalidInstance: 'IgnoreInvalidInstance',
      instanceIds: 'InstanceIds',
      lifecycleHookContextShrink: 'LifecycleHookContext',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      removePolicy: 'RemovePolicy',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      stopInstanceTimeout: 'StopInstanceTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      decreaseDesiredCapacity: 'boolean',
      ignoreInvalidInstance: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleHookContextShrink: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      removePolicy: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      stopInstanceTimeout: 'number',
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

