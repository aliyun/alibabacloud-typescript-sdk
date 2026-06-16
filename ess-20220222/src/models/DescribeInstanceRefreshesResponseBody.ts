// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksCheckpoints extends $dara.Model {
  /**
   * @remarks
   * The percentage of new instances relative to the total instances in the scaling group. The task automatically pauses when this percentage is reached.
   * 
   * @example
   * 60
   */
  percentage?: number;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfigurationContainersEnvironmentVars extends $dara.Model {
  /**
   * @remarks
   * >This parameter is not available for use.
   * 
   * @example
   * fieldPath
   */
  fieldRefFieldPath?: string;
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * @example
   * /usr/local/bin
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRefFieldPath: 'FieldRefFieldPath',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRefFieldPath: 'string',
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfigurationContainers extends $dara.Model {
  /**
   * @remarks
   * The arguments for the container startup commands.
   */
  args?: string[];
  /**
   * @remarks
   * The container startup commands.
   */
  commands?: string[];
  /**
   * @remarks
   * The environment variable information.
   */
  environmentVars?: DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfigurationContainersEnvironmentVars[];
  /**
   * @remarks
   * The container image.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:latest
   */
  image?: string;
  /**
   * @remarks
   * The custom container name.
   * 
   * @example
   * name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      commands: 'Commands',
      environmentVars: 'EnvironmentVars',
      image: 'Image',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      environmentVars: { 'type': 'array', 'itemType': DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfigurationContainersEnvironmentVars },
      image: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    if(Array.isArray(this.environmentVars)) {
      $dara.Model.validateArray(this.environmentVars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfigurationLaunchTemplateOverrides extends $dara.Model {
  /**
   * @remarks
   * The instance type that overrides the instance type specified in the launch template.
   * 
   * @example
   * ecs.sn1ne.large
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of containers included in the instance.
   */
  containers?: DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfigurationContainers[];
  /**
   * @remarks
   * The ID of the image file used for automatic creation of instances.
   * 
   * @example
   * m-uf6g5noisr****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the launch template from which the scaling group obtains launch configuration information.
   * 
   * @example
   * lt-2ze5x4mp*****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The instance type information that overrides the launch template.
   */
  launchTemplateOverrides?: DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfigurationLaunchTemplateOverrides[];
  /**
   * @remarks
   * The version of the launch template. Valid values:
   * 
   * - A fixed template version number.
   * - Default: always uses the default version of the template.
   * - Latest: always uses the latest version of the template.
   * 
   * @example
   * Latest
   */
  launchTemplateVersion?: string;
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
      containers: 'Containers',
      imageId: 'ImageId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateOverrides: 'LaunchTemplateOverrides',
      launchTemplateVersion: 'LaunchTemplateVersion',
      scalingConfigurationId: 'ScalingConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containers: { 'type': 'array', 'itemType': DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfigurationContainers },
      imageId: 'string',
      launchTemplateId: 'string',
      launchTemplateOverrides: { 'type': 'array', 'itemType': DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfigurationLaunchTemplateOverrides },
      launchTemplateVersion: 'string',
      scalingConfigurationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    if(Array.isArray(this.launchTemplateOverrides)) {
      $dara.Model.validateArray(this.launchTemplateOverrides);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRefreshesResponseBodyInstanceRefreshTasks extends $dara.Model {
  /**
   * @remarks
   * The duration for which the task pauses when a checkpoint is reached. Unit: minutes.
   * 
   * @example
   * 30
   */
  checkpointPauseTime?: number;
  /**
   * @remarks
   * The checkpoints for the refresh task. A checkpoint specifies that the task automatically pauses for CheckpointPauseTime minutes when the proportion of new instances reaches the specified value during the instance refresh.
   */
  checkpoints?: DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksCheckpoints[];
  /**
   * @remarks
   * The desired configuration for the instance refresh.
   */
  desiredConfiguration?: DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfiguration;
  /**
   * @remarks
   * The failure reason when the instance refresh task fails.
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
   * The capacity that has been refreshed.
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
   * The maximum percentage by which the number of instances in the scaling group can exceed the scaling group capacity during the instance refresh.
   * 
   * @example
   * 120
   */
  maxHealthyPercentage?: number;
  /**
   * @remarks
   * The minimum percentage of instances that must remain in service in the scaling group during the instance refresh.
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
   * Indicates whether instances that already match the desired configuration are skipped.
   * 
   * > The system determines whether an instance matches based on the ID of the desired scaling configuration, not by comparing individual configuration items.
   * 
   * Valid values:
   * 
   * - true: Skipped. When the instance refresh task starts, the system checks the configuration of each instance. Instances that were already created with the desired configuration are not refreshed.
   * - false: Not skipped. After the instance refresh task starts, all instances in the scaling group are refreshed.
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
   * The current status of the instance refresh task. Valid values:
   * - Pending: The instance refresh task is created and waiting to be scheduled.
   * - InProgress: The instance refresh task is in progress.
   * - Paused: The instance refresh task is paused.
   * - CheckpointPause: The instance refresh task is paused because the task progress reached a checkpoint (`Checkpoint.Percentage`).
   * - Failed: The instance refresh task failed.
   * - Successful: The instance refresh task succeeded.
   * - Cancelling: The instance refresh task is being canceled.
   * - Cancelled: The instance refresh task is canceled.
   * - RollbackInProgress: The instance refresh task is being rolled back.
   * - RollbackSuccessful: The instance refresh task is rolled back.
   * - RollbackFailed: The rollback of the instance refresh task failed.
   * 
   * @example
   * InProgress
   */
  status?: string;
  strategy?: string;
  /**
   * @remarks
   * The total capacity that needs to be refreshed.
   * 
   * @example
   * 20
   */
  totalNeedUpdateCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      checkpointPauseTime: 'CheckpointPauseTime',
      checkpoints: 'Checkpoints',
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
      strategy: 'Strategy',
      totalNeedUpdateCapacity: 'TotalNeedUpdateCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpointPauseTime: 'number',
      checkpoints: { 'type': 'array', 'itemType': DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksCheckpoints },
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
      strategy: 'string',
      totalNeedUpdateCapacity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.checkpoints)) {
      $dara.Model.validateArray(this.checkpoints);
    }
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
   * The list of instance refresh tasks.
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
   * The pagination token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
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

