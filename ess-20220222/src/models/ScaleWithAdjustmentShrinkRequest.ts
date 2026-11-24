// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleWithAdjustmentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The metadata of the scaling activity.
   * 
   * @example
   * {"key":"value"}
   */
  activityMetadata?: string;
  /**
   * @remarks
   * The adjustment method for the scaling activity. Valid values:
   * 
   * - QuantityChangeInCapacity: Increases or decreases a specified number of ECS instances.
   * - PercentChangeInCapacity: Increases or decreases a specified percentage of ECS instances.
   * - TotalCapacity: Adjusts the number of ECS instances in the current scaling group to a specified number.
   * 
   * This parameter is required.
   * 
   * @example
   * QuantityChangeInCapacity
   */
  adjustmentType?: string;
  /**
   * @remarks
   * The adjustment value for the scaling activity. In all cases, the number of ECS instances adjusted in a single operation cannot exceed 1,000. Otherwise, the adjustment fails. Valid values vary based on the adjustment method:
   * - QuantityChangeInCapacity: -1,000 to 1,000.
   * - PercentChangeInCapacity: -100 to 10,000.
   * - TotalCapacity: 0 to 2,000.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. The value cannot contain non-ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * - None: Not specified. Normal scaling is performed.
   * - PlanOnly: Does not trigger scaling. Only elastic planning is executed. The planning results, including instance types, zone IDs, billing methods, and the number of instances to be created, are returned in PlanResult.
   * 
   * Default value: None.
   * 
   * @example
   * PlanOnly
   */
  executionMode?: string;
  /**
   * @remarks
   * The context information of the lifecycle hook.
   */
  lifecycleHookContextShrink?: string;
  /**
   * @remarks
   * The minimum number of instances to be adjusted in the scaling activity. This parameter takes effect only when `AdjustmentType` is set to `PercentChangeInCapacity`.
   * 
   * @example
   * 1
   */
  minAdjustmentMagnitude?: number;
  /**
   * @remarks
   * The override parameters specified for scaling out an Elastic Container Instance (ECI) scaling group.
   */
  overridesShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether the current scaling task supports concurrent execution.
   * 
   * @example
   * false
   */
  parallelTask?: boolean;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-j6c1o397427hyjdc****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * Specifies whether to synchronously execute the scaling activity. This parameter is valid only for scaling groups that have the expected number of instances configured. Valid values:
   * 
   * - true: Synchronous process. When the scaling rule is executed, the scale-out or scale-in activity of the scaling group is directly triggered.
   * - false: Asynchronous process. When the expected number of instances in the scaling group is modified, the actual scale-out or scale-in activity of the scaling group is not immediately triggered. The system automatically detects the difference between the expected number of instances and the current number of instances in the scaling group, and then triggers the scale-out or scale-in activity.
   * 
   * > For more information about the expected number of instances, see [Expected number of instances](https://help.aliyun.com/document_detail/146231.html).
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  syncActivity?: boolean;
  static names(): { [key: string]: string } {
    return {
      activityMetadata: 'ActivityMetadata',
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      clientToken: 'ClientToken',
      executionMode: 'ExecutionMode',
      lifecycleHookContextShrink: 'LifecycleHookContext',
      minAdjustmentMagnitude: 'MinAdjustmentMagnitude',
      overridesShrink: 'Overrides',
      ownerId: 'OwnerId',
      parallelTask: 'ParallelTask',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      syncActivity: 'SyncActivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityMetadata: 'string',
      adjustmentType: 'string',
      adjustmentValue: 'number',
      clientToken: 'string',
      executionMode: 'string',
      lifecycleHookContextShrink: 'string',
      minAdjustmentMagnitude: 'number',
      overridesShrink: 'string',
      ownerId: 'number',
      parallelTask: 'boolean',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      syncActivity: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

