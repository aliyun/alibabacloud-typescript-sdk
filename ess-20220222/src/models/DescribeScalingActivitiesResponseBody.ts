// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingActivitiesResponseBodyScalingActivitiesErrorMessages extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the scaling activity fails or is partially successful.
   * 
   * @example
   * OperationDenied.NoStock
   */
  code?: string;
  /**
   * @remarks
   * The exception description of the scaling activity.
   * 
   * @example
   * Fail to create instances into scaling group.
   */
  description?: string;
  /**
   * @remarks
   * The list of failed instance ID.
   */
  failedInstanceIds?: string[];
  /**
   * @remarks
   * The error messages returned when the scaling activity fails or is partially successful.
   * 
   * @example
   * The resource is out of stock in the specified zone. Please try other types, or choose other regions and zones.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      failedInstanceIds: 'FailedInstanceIds',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      failedInstanceIds: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failedInstanceIds)) {
      $dara.Model.validateArray(this.failedInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivitiesResponseBodyScalingActivitiesLifecycleHookContext extends $dara.Model {
  /**
   * @remarks
   * Specifies whether all lifecycle hooks are disabled for the scaling activity. Valid values:
   * 
   * - true: Disabled.
   * - false: Not disabled.
   * 
   * @example
   * false
   */
  disableLifecycleHook?: boolean;
  /**
   * @remarks
   * The list of IDs of the lifecycle hooks disabled for the scaling activity.
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
   * The total number of manually added instances in the scaling group after the scaling activity is completed.
   * 
   * @example
   * 0
   */
  attachedCapacity?: string;
  /**
   * @remarks
   * The total number of instances in the scaling group that are generated through automatic creation after you execute the scaling activity.
   * 
   * @example
   * 2
   */
  autoCreatedCapacity?: string;
  /**
   * @remarks
   * The cause that triggered the scaling activity.
   * 
   * @example
   * A user requests to execute scaling rule \\"asr-bp12tcnol686y1ik****\\", changing the Total Capacity from \\"1\\" to \\"2\\".
   */
  cause?: string;
  /**
   * @remarks
   * The number of instances created during the current scaling activity.
   * 
   * @example
   * 1
   */
  createdCapacity?: number;
  /**
   * @remarks
   * The list of instances created during the current scaling activity.
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
   * The number of instances released during the current scaling activity.
   * 
   * @example
   * 1
   */
  destroyedCapacity?: number;
  /**
   * @remarks
   * The list of instances released during the current scaling activity.
   */
  destroyedInstances?: string[];
  /**
   * @remarks
   * The details of the scaling activity.
   * 
   * @example
   * "new ECS instances "i-j6c8ilerw, i-j6c8iler4mx" are created."
   */
  detail?: string;
  /**
   * @remarks
   * The end time of the scaling activity. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mmZ format.
   * 
   * @example
   * 2020-09-10T09:54Z
   */
  endTime?: string;
  /**
   * @remarks
   * The error code returned when the scaling activity fails.
   * 
   * @example
   * OperationDenied.NoStock
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the scaling activity fails.
   * 
   * @example
   * The specified ECS resource is out of stock in this region. Please try again later.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The error messages returned when the scaling activity fails or is partially successful.
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
   * The context information of the lifecycle hook.
   */
  lifecycleHookContext?: DescribeScalingActivitiesResponseBodyScalingActivitiesLifecycleHookContext;
  /**
   * @remarks
   * The progress of the scaling activity.
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
   * - If the scaling activity is a scale-out activity, this parameter indicates the number of instances that are created or started from the stopped and reclaimed state during the scaling activity.
   * 
   * - If the scaling activity is a scale-in activity, this parameter indicates the number of instances that are deleted or enter the stopped and reclaimed state during the scaling activity.
   * 
   * @example
   * 1
   */
  scalingInstanceNumber?: number;
  /**
   * @remarks
   * The start time of the scaling activity. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mmZ format.
   * 
   * @example
   * 2020-09-10T09:54Z
   */
  startTime?: string;
  /**
   * @remarks
   * The number of instances started from the economical mode during the current scaling activity.
   * 
   * @example
   * 1
   */
  startedCapacity?: number;
  /**
   * @remarks
   * The list of instances started from the economical mode during the current scaling activity.
   */
  startedInstances?: string[];
  /**
   * @remarks
   * The status of the scaling activity. Valid values:
   *  
   * - Successful: The scaling activity is successful. 
   * - Warning: The scaling activity is partially successful. 
   * - Failed: The scaling activity failed. 
   * - InProgress: The scaling activity is in progress. 
   * - Rejected: The request to execute the scaling activity is rejected.
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
   * The number of instances that entered the economical mode during the current scaling activity.
   * 
   * @example
   * 1
   */
  stoppedCapacity?: number;
  /**
   * @remarks
   * The list of instances that entered the economical mode during the current scaling activity.
   */
  stoppedInstances?: string[];
  /**
   * @remarks
   * The total number of instances in the scaling group after the scaling activity is completed.
   * 
   * @example
   * 2
   */
  totalCapacity?: string;
  /**
   * @remarks
   * The ID of the trigger source for the scaling activity. Valid values:
   * - Cms trigger source ID: displayed as the event-triggered task ID.
   * - Api trigger source ID: displayed as the Alibaba Cloud account ID or RAM user ID.
   * - Ess trigger source ID: displayed as empty.
   * 
   * @example
   * 2346366580*****
   */
  triggerSourceId?: string;
  /**
   * @remarks
   * The type of the trigger source for the scaling activity. Valid values:
   * - Cms: The scaling activity is triggered by an event-triggered task.
   * - Api: The scaling activity is triggered by a user through an API call.
   * - Ess: The scaling activity is triggered by a system task.
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

export class DescribeScalingActivitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC107349-57B7-4405-B1BF-9BF5AF7F****
   */
  requestId?: string;
  /**
   * @remarks
   * The collection of scaling activity information.
   */
  scalingActivities?: DescribeScalingActivitiesResponseBodyScalingActivities[];
  /**
   * @remarks
   * The total number of scaling activity records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingActivities: 'ScalingActivities',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingActivities: { 'type': 'array', 'itemType': DescribeScalingActivitiesResponseBodyScalingActivities },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scalingActivities)) {
      $dara.Model.validateArray(this.scalingActivities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

