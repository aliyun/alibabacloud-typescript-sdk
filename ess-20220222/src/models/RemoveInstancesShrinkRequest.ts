// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token to ensure request idempotence. This token must be unique for each request, contain only ASCII characters, and not exceed 64 characters. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to decrease the desired capacity of the scaling group. Valid values:
   * 
   * - `true`: Decreases the desired capacity of the scaling group by the number of removed instances.
   * 
   * - `false`: The desired capacity of the scaling group remains unchanged.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  decreaseDesiredCapacity?: boolean;
  /**
   * @remarks
   * Specifies whether to ignore invalid instances when you remove multiple instances from a scaling group. Valid values:
   * 
   * - `true`: Invalid instances are ignored. If valid instances are removed while invalid ones are present, the scaling activity status is set to Warning. The invalid instances are listed in the scaling activity details.
   * 
   * - `false`: The request is rejected and an error is returned if it contains any invalid instances.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  ignoreInvalidInstance?: boolean;
  /**
   * @remarks
   * The IDs of the ECS instances to remove.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The context of the lifecycle hook.
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
   * Specifies the action to take on removed ECS instances. Valid values:
   * 
   * - recycle: The ECS instances enter the economical mode.
   * 
   *   > This value takes effect only when the `ScalingPolicy` parameter of the scaling group is set to `recycle`.
   * 
   * - release: The ECS instances are released.
   * 
   * The `ScalingPolicy` parameter of the `CreateScalingGroup` operation specifies the reclamation mode of a scaling group. However, the `RemovePolicy` parameter of the `RemoveInstances` operation determines the action taken when an instance is removed. For example:
   * 
   * - If `ScalingPolicy` is `recycle` and `RemovePolicy` is `recycle`, the ECS instances enter the economical mode.
   * 
   * - If `ScalingPolicy` is `recycle` and `RemovePolicy` is `release`, the ECS instances are released.
   * 
   * - If `ScalingPolicy` is `release` and `RemovePolicy` is `recycle`, the ECS instances are released.
   * 
   * - If `ScalingPolicy` is `release` and `RemovePolicy` is `release`, the ECS instances are released.
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
   * The timeout period, in seconds, for an ECS instance to stop during a scale-in. Valid values: 30 to 240.
   * 
   * > - By default, this parameter inherits its value from the scaling group, but you can override it when calling the `RemoveInstances` operation.
   * >
   * > - This parameter takes effect only during scale-in events where `RemovePolicy` is set to `release`.
   * >
   * > - If this parameter is set, the system waits for the specified duration for the instance to stop. The scale-in process continues after the timeout expires, regardless of the instance\\"s state.
   * >
   * > - If this parameter is not set, the system waits until the instance stops before continuing the scale-in process. If the instance fails to stop, the scale-in operation is rolled back and fails.
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

