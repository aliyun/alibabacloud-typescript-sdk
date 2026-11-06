// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskDataSource extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * mysql_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The number of compute units (CUs) consumed during task execution.
   * 
   * @example
   * 0.25
   */
  cu?: string;
  /**
   * @remarks
   * The ID of the image configured for task execution.
   * 
   * @example
   * i-xxxxxx
   */
  image?: string;
  /**
   * @remarks
   * The identifier of the scheduling resource group configured for task execution.
   * 
   * @example
   * S_res_group_524258031846018_1684XXXXXXXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      image: 'Image',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
      image: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskTrigger extends $dara.Model {
  /**
   * @remarks
   * The cron expression. This parameter takes effect only when Type is set to Scheduler.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The expiration time of periodic triggering. This parameter takes effect only when Type is set to Scheduler.
   * 
   * The format is `yyyy-MM-dd HH:mm:ss`, such as `9999-01-01 00:00:00`. The example does not include a time zone identifier.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The execution mode when the task is triggered. This parameter takes effect only when Type is set to Scheduler. Valid values:
   * - Pause: Paused.
   * - Skip: Dry run.
   * - Normal: Normal execution.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The effective time of periodic triggering. This parameter takes effect only when Type is set to Scheduler.
   * 
   * The format is `yyyy-MM-dd HH:mm:ss`, such as `1970-01-01 00:00:00`. The example does not include a time zone identifier.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * - Scheduler: Triggered by a scheduling cycle.
   * - Manual: Manually triggered.
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      recurrence: 'Recurrence',
      startTime: 'StartTime',
      timezone: 'Timezone',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      recurrence: 'string',
      startTime: 'string',
      timezone: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTask extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The account ID of the user who created the task.
   * 
   * @example
   * 1000
   */
  createUser?: string;
  /**
   * @remarks
   * The associated data source information.
   */
  dataSource?: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskDataSource;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod: Production.
   * - Dev: Development.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The unique identifier of the task.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The instance generation mode. Valid values:
   * - T+1: Generated on the next day.
   * - Immediately: Generated immediately.
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * The update time.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the user who updated the task.
   * 
   * @example
   * 1000
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * SQL node
   */
  name?: string;
  /**
   * @remarks
   * The account ID of the task owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The task priority. Valid values: 1 to 8.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The retry interval, in seconds.
   * 
   * @example
   * 60
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The rerun configuration of the task. Valid values:
   * - AllDenied: The task cannot be rerun regardless of whether it succeeds or fails.
   * - FailureAllowed: The task can be rerun only when it fails.
   * - AllAllowed: The task can be rerun regardless of whether it succeeds or fails.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of retries. This parameter takes effect only when the task is configured to be rerunnable.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The runtime environment configuration, such as the resource group information.
   */
  runtimeResource?: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskRuntimeResource;
  /**
   * @remarks
   * The task execution timeout period, in seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The trigger method of the task.
   */
  trigger?: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskTrigger;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * ODPS_SQL
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workflow to which the task belongs.
   * 
   * @example
   * 1234
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataSource: 'DataSource',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      instanceMode: 'InstanceMode',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      runtimeResource: 'RuntimeResource',
      timeout: 'Timeout',
      trigger: 'Trigger',
      type: 'Type',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      createTime: 'number',
      createUser: 'string',
      dataSource: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskDataSource,
      description: 'string',
      envType: 'string',
      id: 'number',
      instanceMode: 'string',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      runtimeResource: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskRuntimeResource,
      timeout: 'number',
      trigger: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTaskTrigger,
      type: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownstreamTasksResponseBodyPagingInfoDownstreamTasks extends $dara.Model {
  /**
   * @remarks
   * The dependency type. Valid values:
   * - Normal: Same-cycle dependency.
   * - CrossCycle: Cross-cycle dependency.
   * 
   * @example
   * Normal
   */
  dependencyType?: string;
  /**
   * @remarks
   * The details of the task.
   */
  task?: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTask;
  static names(): { [key: string]: string } {
    return {
      dependencyType: 'DependencyType',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencyType: 'string',
      task: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownstreamTasksResponseBodyPagingInfoTasksDataSource extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * mysql_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownstreamTasksResponseBodyPagingInfoTasksRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The number of compute units (CUs) consumed during task execution.
   * 
   * @example
   * 0.25
   */
  cu?: string;
  /**
   * @remarks
   * The ID of the image configured for task execution.
   * 
   * @example
   * i-xxxxxx
   */
  image?: string;
  /**
   * @remarks
   * The identifier of the scheduling resource group configured for task execution.
   * 
   * @example
   * S_res_group_524258031846018_1684XXXXXXXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      image: 'Image',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
      image: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownstreamTasksResponseBodyPagingInfoTasksTrigger extends $dara.Model {
  /**
   * @remarks
   * The cron expression. This parameter takes effect only when Type is set to Scheduler.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The expiration time of periodic triggering. This parameter takes effect only when Type is set to Scheduler.
   * 
   * The format is `yyyy-MM-dd HH:mm:ss`, such as `9999-01-01 00:00:00`. The example does not include a time zone identifier.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The running mode when the task is triggered. This parameter takes effect only when Type is set to Scheduler.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The effective time of periodic triggering. This parameter takes effect only when Type is set to Scheduler.
   * 
   * The format is `yyyy-MM-dd HH:mm:ss`, such as `1970-01-01 00:00:00`. The example does not include a time zone identifier.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The trigger type.
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      recurrence: 'Recurrence',
      startTime: 'StartTime',
      timezone: 'Timezone',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      recurrence: 'string',
      startTime: 'string',
      timezone: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownstreamTasksResponseBodyPagingInfoTasks extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The account ID of the user who created the task.
   * 
   * @example
   * 1000
   */
  createUser?: string;
  /**
   * @remarks
   * The associated data source information.
   */
  dataSource?: ListDownstreamTasksResponseBodyPagingInfoTasksDataSource;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod: Production.
   * - Dev: Development.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The unique identifier of the task.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The instance generation mode. Valid values:
   * - T+1: Generated on the next day.
   * - Immediately: Generated immediately.
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * The update time.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the user who updated the task.
   * 
   * @example
   * 1000
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * SQL node
   */
  name?: string;
  /**
   * @remarks
   * The account ID of the task owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The task priority. Valid values: 1 to 8. A larger value indicates a higher priority. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * **[Deprecated]** The project environment. Use EnvType instead.
   * 
   * @example
   * Prod
   * 
   * @deprecated
   */
  projectEnv?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The retry interval, in seconds.
   * 
   * @example
   * 60
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The rerun configuration of the task.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of retries. This parameter takes effect only when the task is configured to be rerunnable.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The runtime environment configuration, such as the resource group information.
   */
  runtimeResource?: ListDownstreamTasksResponseBodyPagingInfoTasksRuntimeResource;
  /**
   * @remarks
   * The dependency type. Valid values:
   * - Normal: Same-cycle dependency.
   * - CrossCycle: Cross-cycle dependency.
   * 
   * @example
   * Normal
   */
  stepType?: string;
  /**
   * @remarks
   * The task execution timeout period, in seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The trigger method of the task.
   */
  trigger?: ListDownstreamTasksResponseBodyPagingInfoTasksTrigger;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * ODPS_SQL
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workflow to which the task belongs.
   * 
   * @example
   * 1234
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataSource: 'DataSource',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      instanceMode: 'InstanceMode',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      owner: 'Owner',
      priority: 'Priority',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      runtimeResource: 'RuntimeResource',
      stepType: 'StepType',
      timeout: 'Timeout',
      trigger: 'Trigger',
      type: 'Type',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      createTime: 'number',
      createUser: 'string',
      dataSource: ListDownstreamTasksResponseBodyPagingInfoTasksDataSource,
      description: 'string',
      envType: 'string',
      id: 'number',
      instanceMode: 'string',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      owner: 'string',
      priority: 'number',
      projectEnv: 'string',
      projectId: 'number',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      runtimeResource: ListDownstreamTasksResponseBodyPagingInfoTasksRuntimeResource,
      stepType: 'string',
      timeout: 'number',
      trigger: ListDownstreamTasksResponseBodyPagingInfoTasksTrigger,
      type: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownstreamTasksResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of downstream tasks.
   */
  downstreamTasks?: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasks[];
  /**
   * @remarks
   * The page number.
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
   * **[Deprecated]** The list of tasks. Use DownstreamTasks instead.
   */
  tasks?: ListDownstreamTasksResponseBodyPagingInfoTasks[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      downstreamTasks: 'DownstreamTasks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downstreamTasks: { 'type': 'array', 'itemType': ListDownstreamTasksResponseBodyPagingInfoDownstreamTasks },
      pageNumber: 'number',
      pageSize: 'number',
      tasks: { 'type': 'array', 'itemType': ListDownstreamTasksResponseBodyPagingInfoTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.downstreamTasks)) {
      $dara.Model.validateArray(this.downstreamTasks);
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownstreamTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListDownstreamTasksResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. You can use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDownstreamTasksResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

