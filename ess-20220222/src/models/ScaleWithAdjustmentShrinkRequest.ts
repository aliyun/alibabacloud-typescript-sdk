// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleWithAdjustmentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The metadata for the scaling activity.
   * 
   * @example
   * {"key":"value"}
   */
  activityMetadata?: string;
  /**
   * @remarks
   * The method used to adjust the number of instances in a scaling activity. Valid values:
   * 
   * - `QuantityChangeInCapacity`: Adds or removes a specified number of ECS instances.
   * 
   * - `PercentChangeInCapacity`: Adds or removes a specified percentage of ECS instances.
   * 
   * - `TotalCapacity`: Adjusts the number of ECS instances in the scaling group to a specified number.
   * 
   * This parameter is required.
   * 
   * @example
   * QuantityChangeInCapacity
   */
  adjustmentType?: string;
  /**
   * @remarks
   * The adjustment value for the scaling activity. A single adjustment cannot add or remove more than 1,000 ECS instances. The valid range depends on `AdjustmentType`:
   * 
   * - `QuantityChangeInCapacity`: -1000 to 1000.
   * 
   * - `PercentChangeInCapacity`: -100 to 10000.
   * 
   * - `TotalCapacity`: 0 to 2000.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * A client-generated token to ensure the idempotence of the request. This token must be a unique string of up to 64 ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * - `None`: Executes a standard scaling activity.
   * 
   * - `PlanOnly`: Only performs elastic planning and returns the results in `PlanResult` without triggering the scaling activity. The results include details such as instance types, availability zones, billing methods, and the number of new instances.
   * 
   * Default value: None.
   * 
   * @example
   * PlanOnly
   */
  executionMode?: string;
  /**
   * @remarks
   * The lifecycle hook context.
   */
  lifecycleHookContextShrink?: string;
  /**
   * @remarks
   * The minimum number of instances to adjust in a scaling activity. This parameter takes effect only when `AdjustmentType` is set to `PercentChangeInCapacity`.
   * 
   * @example
   * 1
   */
  minAdjustmentMagnitude?: number;
  /**
   * @remarks
   * The parameters to override when scaling out an ECI scaling group.
   */
  overridesShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether the current scaling activity supports concurrency.
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
   * Specifies whether to execute the scaling activity synchronously. This parameter applies only to scaling groups that are configured with an expected number of instances. Valid values:
   * 
   * - `true`: Synchronous execution. The scaling activity is triggered immediately.
   * 
   * - `false`: Asynchronous execution. The call updates the expected number of instances without immediately triggering the scaling activity. The activity occurs when the system detects a discrepancy between the new expected number and the current number of instances.
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

