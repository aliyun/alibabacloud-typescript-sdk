// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScalingActivitiesResponseBodyScalingActivitiesErrorMessages } from "./DescribeScalingActivitiesResponseBodyScalingActivitiesErrorMessages";
import { DescribeScalingActivitiesResponseBodyScalingActivitiesLifecycleHookContext } from "./DescribeScalingActivitiesResponseBodyScalingActivitiesLifecycleHookContext";


export class DescribeScalingActivitiesResponseBodyScalingActivities extends $dara.Model {
  /**
   * @remarks
   * The metadata of the scaling activity.
   * 
   * @example
   * {\\"goatscaler.io/managed\\":\\"true\\"}
   */
  activityMetadata?: string;
  /**
   * @remarks
   * The total number of instances that are manually added to the scaling group after the scaling activity is complete.
   * 
   * @example
   * 0
   */
  attachedCapacity?: string;
  /**
   * @remarks
   * The total number of instances that are created by Auto Scaling after the scaling activity was complete.
   * 
   * @example
   * 2
   */
  autoCreatedCapacity?: string;
  /**
   * @remarks
   * The reason why the scaling activity was triggered.
   * 
   * @example
   * A user requests to execute scaling rule \\"asr-bp12tcnol686y1ik****\\", changing the Total Capacity from \\"1\\" to \\"2\\".
   */
  cause?: string;
  /**
   * @remarks
   * The number of instances that are created during the scale-out event.
   * 
   * @example
   * 1
   */
  createdCapacity?: number;
  /**
   * @remarks
   * The instances that are created during the scale-out event.
   */
  createdInstances?: string[];
  /**
   * @remarks
   * The description of the scaling activity.
   * 
   * @example
   * Add \\"1\\" ECS instance
   */
  description?: string;
  /**
   * @remarks
   * The number of instances that are released during the scale-in event.
   * 
   * @example
   * 1
   */
  destroyedCapacity?: number;
  /**
   * @remarks
   * The instances that are released during the scale-in event.
   */
  destroyedInstances?: string[];
  /**
   * @remarks
   * Details of the scaling activity.
   * 
   * @example
   * "new ECS instances "i-j6c8ilerw, i-j6c8iler4mx" are created."
   */
  detail?: string;
  /**
   * @remarks
   * The time when the scaling activity was complete.
   * 
   * @example
   * 2020-09-10T09:54Z
   */
  endTime?: string;
  /**
   * @remarks
   * The error code that is returned when the scaling activity failed.
   * 
   * @example
   * OperationDenied.NoStock
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned when the scaling activity failed.
   * 
   * @example
   * The specified ECS resource is out of stock in this region. Please try again later.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The error messages that are returned when the scaling activities failed or are partially successful.
   */
  errorMessages?: DescribeScalingActivitiesResponseBodyScalingActivitiesErrorMessages[];
  /**
   * @remarks
   * The ID of the instance refresh task.
   * 
   * @example
   * ir-asdf12adsxg*****
   */
  instanceRefreshTaskId?: string;
  /**
   * @remarks
   * The context of the lifecycle hook.
   */
  lifecycleHookContext?: DescribeScalingActivitiesResponseBodyScalingActivitiesLifecycleHookContext;
  /**
   * @remarks
   * The execution progress of the scaling activity.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the scaling activity.
   * 
   * @example
   * asa-bp161xudmuxdzofe****
   */
  scalingActivityId?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * *   If you query a scale-out activity, the value of this parameter indicates the number of instances that are created or the number of instances that are started from Economical Mode.
   * *   If you query a scale-in activity, the value of this parameter indicates the number of instances that are deleted or the number of instances that are stopped in Economical Mode.
   * 
   * @example
   * 1
   */
  scalingInstanceNumber?: number;
  /**
   * @remarks
   * The time when the scaling activity was started.
   * 
   * @example
   * 2020-09-10T09:54Z
   */
  startTime?: string;
  /**
   * @remarks
   * The number of instances that are started from the Economical Mode during the scale-out event.
   * 
   * @example
   * 1
   */
  startedCapacity?: number;
  /**
   * @remarks
   * The instances that are started from the Economical Mode during the scale-out event.
   */
  startedInstances?: string[];
  /**
   * @remarks
   * The status of the scaling activity. Valid values:
   * 
   * *   Successful: The scaling activity is successful.
   * *   Warning: The scaling activity is partially successful.
   * *   Failed: The scaling activity failed.
   * *   InProgress: The scaling activity is in progress.
   * *   Rejected: The request to trigger the scaling activity is rejected.
   * 
   * @example
   * Successful
   */
  statusCode?: string;
  /**
   * @remarks
   * The status message of the scaling activity.
   * 
   * @example
   * \\"1\\" ECS instances are added
   */
  statusMessage?: string;
  /**
   * @remarks
   * The number of instances that are stopped in the Economical Mode during the scale-in event.
   * 
   * @example
   * 1
   */
  stoppedCapacity?: number;
  /**
   * @remarks
   * The instances that are stopped in the Economical Mode during the scale-in event.
   */
  stoppedInstances?: string[];
  /**
   * @remarks
   * The total number of instances in the scaling group after the scaling activity was complete.
   * 
   * @example
   * 2
   */
  totalCapacity?: string;
  /**
   * @remarks
   * The ID of the trigger source of the scaling activity. Valid values:
   * 
   * *   If the scaling activity is triggered by an event-triggered task, the ID of the trigger source is the ID of the event-triggered task.
   * *   If the scaling activity is triggered by calling an API operation, the ID of the trigger source is the ID of the Alibaba Cloud account or Resource Access Management (RAM) user that you use to call the API operation.
   * *   If the scaling activity is triggered by Auto Scaling, the ID of the trigger source is null.
   * 
   * @example
   * 2346366580*****
   */
  triggerSourceId?: string;
  /**
   * @remarks
   * The type of the trigger source of the scaling activity. Valid values:
   * 
   * *   Cms: The scaling activity is triggered by an event-triggered task.
   * *   APIs: The scaling activity is triggered by calling an API operation.
   * *   Ess: The scaling activity is triggered by Auto Scaling.
   * 
   * @example
   * Api
   */
  triggerSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      activityMetadata: 'ActivityMetadata',
      attachedCapacity: 'AttachedCapacity',
      autoCreatedCapacity: 'AutoCreatedCapacity',
      cause: 'Cause',
      createdCapacity: 'CreatedCapacity',
      createdInstances: 'CreatedInstances',
      description: 'Description',
      destroyedCapacity: 'DestroyedCapacity',
      destroyedInstances: 'DestroyedInstances',
      detail: 'Detail',
      endTime: 'EndTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorMessages: 'ErrorMessages',
      instanceRefreshTaskId: 'InstanceRefreshTaskId',
      lifecycleHookContext: 'LifecycleHookContext',
      progress: 'Progress',
      scalingActivityId: 'ScalingActivityId',
      scalingGroupId: 'ScalingGroupId',
      scalingInstanceNumber: 'ScalingInstanceNumber',
      startTime: 'StartTime',
      startedCapacity: 'StartedCapacity',
      startedInstances: 'StartedInstances',
      statusCode: 'StatusCode',
      statusMessage: 'StatusMessage',
      stoppedCapacity: 'StoppedCapacity',
      stoppedInstances: 'StoppedInstances',
      totalCapacity: 'TotalCapacity',
      triggerSourceId: 'TriggerSourceId',
      triggerSourceType: 'TriggerSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityMetadata: 'string',
      attachedCapacity: 'string',
      autoCreatedCapacity: 'string',
      cause: 'string',
      createdCapacity: 'number',
      createdInstances: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destroyedCapacity: 'number',
      destroyedInstances: { 'type': 'array', 'itemType': 'string' },
      detail: 'string',
      endTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      errorMessages: { 'type': 'array', 'itemType': DescribeScalingActivitiesResponseBodyScalingActivitiesErrorMessages },
      instanceRefreshTaskId: 'string',
      lifecycleHookContext: DescribeScalingActivitiesResponseBodyScalingActivitiesLifecycleHookContext,
      progress: 'number',
      scalingActivityId: 'string',
      scalingGroupId: 'string',
      scalingInstanceNumber: 'number',
      startTime: 'string',
      startedCapacity: 'number',
      startedInstances: { 'type': 'array', 'itemType': 'string' },
      statusCode: 'string',
      statusMessage: 'string',
      stoppedCapacity: 'number',
      stoppedInstances: { 'type': 'array', 'itemType': 'string' },
      totalCapacity: 'string',
      triggerSourceId: 'string',
      triggerSourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.createdInstances)) {
      $dara.Model.validateArray(this.createdInstances);
    }
    if(Array.isArray(this.destroyedInstances)) {
      $dara.Model.validateArray(this.destroyedInstances);
    }
    if(Array.isArray(this.errorMessages)) {
      $dara.Model.validateArray(this.errorMessages);
    }
    if(this.lifecycleHookContext && typeof (this.lifecycleHookContext as any).validate === 'function') {
      (this.lifecycleHookContext as any).validate();
    }
    if(Array.isArray(this.startedInstances)) {
      $dara.Model.validateArray(this.startedInstances);
    }
    if(Array.isArray(this.stoppedInstances)) {
      $dara.Model.validateArray(this.stoppedInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

