// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveInstancesRequestLifecycleHookContext extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the lifecycle hook. Valid Values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  disableLifecycleHook?: boolean;
  /**
   * @remarks
   * The IDs of the lifecycle hooks that you want to disable.
   */
  ignoredLifecycleHookIds?: string[];
  static names(): { [key: string]: string } {
    return {
      disableLifecycleHook: 'DisableLifecycleHook',
      ignoredLifecycleHookIds: 'IgnoredLifecycleHookIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableLifecycleHook: 'boolean',
      ignoredLifecycleHookIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ignoredLifecycleHookIds)) {
      $dara.Model.validateArray(this.ignoredLifecycleHookIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to adjust the expected number of ECS instances in the scaling group. Valid values:
   * 
   * *   true: After ECS instances are removed from the scaling group, the expected number of ECS instances in the scaling group decreases.
   * *   false: After ECS instances are removed from the scaling group, the expected number of ECS instances in the scaling group remains unchanged.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  decreaseDesiredCapacity?: boolean;
  /**
   * @remarks
   * Specifies whether to ignore invalid instances when you remove a batch of instances from the scaling group. Valid values:
   * 
   * *   true: ignores invalid instances. If invalid instances exist and valid instances are deleted, the corresponding scaling activity enters the Warning state. You can check the scaling activity details to view the invalid instances that are ignored.
   * *   false: does not ignore invalid instances. If invalid instances exist in the batch of instances that you want to remove from the scaling group, an error is reported.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  ignoreInvalidInstance?: boolean;
  /**
   * @remarks
   * The IDs of the ECS instances that you want to remove from the scaling group.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The context of the lifecycle hook.
   */
  lifecycleHookContext?: RemoveInstancesRequestLifecycleHookContext;
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
   * The action subsequent to the removal of the Elastic Compute Service (ECS) instances. Valid values:
   * 
   * *   recycle: The ECS instances enter the Economical Mode.
   * 
   *     **
   * 
   *     **Note** This setting is applicable only if you set `ScalingPolicy` to `recycle`.
   * 
   * *   release: The ECS instances are released.
   * 
   * ScalingPolicy of the CreateScalingGroup operation specifies the reclaim mode of the scaling group while RemovePolicy of the RemoveInstances operation specifies the subsequent action when an ECS instance is removed from the scaling group. Examples:
   * 
   * *   If you set ScalingPolicy and RemovePolicy to recycle, the ECS instances enter the Economical Mode when they are removed.
   * *   If you set ScalingPolicy to recycle and RemovePolicy to release, the ECS instances are released when they are removed.
   * *   If you set ScalingPolicy to release and RemovePolicy to recycle, the ECS instances are released when they are removed.
   * *   If you set ScalingPolicy and RemovePolicy to release, the ECS instances are released when they are removed.
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
   * The period of time required by the ECS instance to enter the Stopped state. Unit: seconds. Valid values: 30 to 240.
   * 
   * > 
   * 
   * *   By default, this parameter inherits the value of StopInstanceTimeout specified in the CreateScalingGroup or ModifyScalingGroup operation. You can also specify a different value for this parameter in the RemoveInstances operation.
   * 
   * *   This parameter takes effect only if you set RemovePolicy to release.
   * 
   * *   If you specify this parameter, the system waits for the ECS instance to enter the Stopped state only for up to the specified period of time before continuing with the scale-in operation, regardless of the status of the ECS instance.
   * 
   * *   If you do not specify this parameter, the system continues with the scale-in operation until the ECS instance enters the Stopped state. If the ECS instance is not successfully stopped, the scale-in process is rolled back and considered failed.
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
      lifecycleHookContext: 'LifecycleHookContext',
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
      lifecycleHookContext: RemoveInstancesRequestLifecycleHookContext,
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
    if(this.lifecycleHookContext && typeof (this.lifecycleHookContext as any).validate === 'function') {
      (this.lifecycleHookContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

