// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfiguration extends $dara.Model {
  /**
   * @remarks
   * The ID of the image file that provides the image resource for Auto Scaling to create instances.
   * 
   * @example
   * m-uf6g5noisr****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the scaling configuration.
   * 
   * @example
   * asc-wz91ibkhfor****
   */
  scalingConfigurationId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      scalingConfigurationId: 'ScalingConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      scalingConfigurationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRefreshesResponseBodyInstanceRefreshTasks extends $dara.Model {
  /**
   * @remarks
   * The desired configurations of the instance refresh task.
   */
  desiredConfiguration?: DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfiguration;
  /**
   * @remarks
   * The reason why the instance refresh task failed to be executed.
   * 
   * @example
   * The task exceeded its maximum run time of one week. So the task failed.
   */
  detail?: string;
  /**
   * @remarks
   * The end time of the instance refresh task.
   * 
   * @example
   * 2024-08-22T02:09:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The refreshed number of instances in the scaling group.
   * 
   * @example
   * 10
   */
  finishedUpdateCapacity?: number;
  /**
   * @remarks
   * The ID of the instance refresh task.
   * 
   * @example
   * ir-1adfa123****
   */
  instanceRefreshTaskId?: string;
  /**
   * @remarks
   * The ratio by which the number of instances in the scaling group can exceed the upper limit for the number of instances in the scaling group during instance refresh.
   * 
   * @example
   * 120
   */
  maxHealthyPercentage?: number;
  /**
   * @remarks
   * The ratio of the number of instances that provide services to the total number of instances in the scaling group during instance refresh.
   * 
   * @example
   * 80
   */
  minHealthyPercentage?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp16pbfcr8j9*****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * Indicates whether instances that match the desired scaling configuration are skipped.
   * 
   * >  The system determines the match based on the ID of the desired scaling configuration rather than individual configuration items.
   * 
   * Valid values:
   * 
   * *   true: Instances that match the desired scaling configuration are skipped. When you initiate an instance refresh task, the system checks the configurations of all instances. The refresh operation is skipped for instances created based on the desired scaling configuration.
   * *   false: Instances that match the desired scaling configuration are not skipped. When an instance refresh task is initiated, all instances in the scaling group at the time of initiation are refreshed.
   * 
   * @example
   * true
   */
  skipMatching?: boolean;
  /**
   * @remarks
   * The start time of the instance refresh task.
   * 
   * @example
   * 2024-08-22T01:09:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the instance refresh task. Valid values:
   * 
   * *   Pending: The instance refresh task is created and is waiting to be scheduled.
   * *   InProgress: The instance refresh task is being executed.
   * *   Paused: The instance refresh task is suspended.
   * *   Failed: The instance refresh task failed to be executed.
   * *   Successful: The instance refresh task is successful.
   * *   Cancelling: The instance refresh task is being canceled.
   * *   Cancelled: The instance refresh task is canceled.
   * *   RollbackInProgress: The instance refresh task is being rolled back.
   * *   RollbackSuccessful: The instance refresh task is rolled back.
   * *   RollbackFailed: The instance refresh task fails to be rolled back.
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The total number of instances whose configurations are refreshed.
   * 
   * @example
   * 20
   */
  totalNeedUpdateCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      desiredConfiguration: 'DesiredConfiguration',
      detail: 'Detail',
      endTime: 'EndTime',
      finishedUpdateCapacity: 'FinishedUpdateCapacity',
      instanceRefreshTaskId: 'InstanceRefreshTaskId',
      maxHealthyPercentage: 'MaxHealthyPercentage',
      minHealthyPercentage: 'MinHealthyPercentage',
      regionId: 'RegionId',
      scalingGroupId: 'ScalingGroupId',
      skipMatching: 'SkipMatching',
      startTime: 'StartTime',
      status: 'Status',
      totalNeedUpdateCapacity: 'TotalNeedUpdateCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredConfiguration: DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfiguration,
      detail: 'string',
      endTime: 'string',
      finishedUpdateCapacity: 'number',
      instanceRefreshTaskId: 'string',
      maxHealthyPercentage: 'number',
      minHealthyPercentage: 'number',
      regionId: 'string',
      scalingGroupId: 'string',
      skipMatching: 'boolean',
      startTime: 'string',
      status: 'string',
      totalNeedUpdateCapacity: 'number',
    };
  }

  validate() {
    if(this.desiredConfiguration && typeof (this.desiredConfiguration as any).validate === 'function') {
      (this.desiredConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRefreshesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance refresh tasks.
   */
  instanceRefreshTasks?: DescribeInstanceRefreshesResponseBodyInstanceRefreshTasks[];
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instance refresh tasks.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceRefreshTasks: 'InstanceRefreshTasks',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRefreshTasks: { 'type': 'array', 'itemType': DescribeInstanceRefreshesResponseBodyInstanceRefreshTasks },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceRefreshTasks)) {
      $dara.Model.validateArray(this.instanceRefreshTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

