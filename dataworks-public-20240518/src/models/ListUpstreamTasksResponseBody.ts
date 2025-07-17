// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUpstreamTasksResponseBodyPagingInfoTasksDataSource extends $dara.Model {
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

export class ListUpstreamTasksResponseBodyPagingInfoTasksRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The default number of compute units (CUs) configured for task running.
   * 
   * @example
   * 0.25
   */
  cu?: string;
  /**
   * @remarks
   * The ID of the image configured for task running.
   * 
   * @example
   * i-xxxxxx
   */
  image?: string;
  /**
   * @remarks
   * The ID of the resource group for scheduling configured for task running.
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

export class ListUpstreamTasksResponseBodyPagingInfoTasksTrigger extends $dara.Model {
  /**
   * @remarks
   * The CRON expression of the task. This parameter takes effect only if the Type parameter is set to Scheduler.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The end time of the time range during which the task is periodically scheduled. This parameter takes effect only if the Type parameter is set to Scheduler.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The running mode of the task after it is triggered. This parameter takes effect only if the Type parameter is set to Scheduler.
   * 
   * Valid values:
   * 
   * *   Pause
   * *   Skip
   * *   Normal
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The start time of the time range during which the task is periodically scheduled. This parameter takes effect only if the Type parameter is set to Scheduler.
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
   * Valid values:
   * 
   * *   Scheduler: scheduling cycle-based trigger
   * *   Manual: manual trigger
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

export class ListUpstreamTasksResponseBodyPagingInfoTasks extends $dara.Model {
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
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The account ID of the creator.
   * 
   * @example
   * 1000
   */
  createUser?: string;
  /**
   * @remarks
   * The information about the associated data source.
   */
  dataSource?: ListUpstreamTasksResponseBodyPagingInfoTasksDataSource;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The environment of the workspace. Valid values:
   * 
   * *   Prod
   * *   Dev
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The instance generation mode. Valid values:
   * 
   * *   T+1
   * *   Immediately
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the modifier.
   * 
   * @example
   * 1000
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name of the task.
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
   * The priority of the task. Valid values: 1 to 8. A larger value indicates a higher priority. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The environment of the workspace. This parameter is deprecated and replaced by the EnvType parameter.
   * 
   * Valid values:
   * 
   * *   Prod
   * *   Dev
   * 
   * @example
   * Prod
   * 
   * @deprecated
   */
  projectEnv?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The rerun interval. Unit: seconds.
   * 
   * @example
   * 60
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The rerun mode.
   * 
   * Valid values:
   * 
   * *   AllDenied: The task cannot be rerun regardless of whether it is successfully run or fails to run.
   * *   FailureAllowed: The task can be rerun only after it fails to run.
   * *   AllAllowed: The task can be rerun regardless of whether it is successfully run or fails to run.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of times that the task is rerun. This parameter takes effect only if the RerunMode parameter is set to AllAllowed or FailureAllowed.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The configurations of the runtime environment, such as the resource group information.
   */
  runtimeResource?: ListUpstreamTasksResponseBodyPagingInfoTasksRuntimeResource;
  /**
   * @remarks
   * The scheduling dependency type. Valid values:
   * 
   * *   Normal: same-cycle scheduling dependency
   * *   CrossCycle: cross-cycle scheduling dependency
   * 
   * @example
   * Normal
   */
  stepType?: string;
  /**
   * @remarks
   * The timeout period of task running. Unit: seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The method to trigger task scheduling.
   */
  trigger?: ListUpstreamTasksResponseBodyPagingInfoTasksTrigger;
  /**
   * @remarks
   * The type of the task.
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
      dataSource: ListUpstreamTasksResponseBodyPagingInfoTasksDataSource,
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
      runtimeResource: ListUpstreamTasksResponseBodyPagingInfoTasksRuntimeResource,
      stepType: 'string',
      timeout: 'number',
      trigger: ListUpstreamTasksResponseBodyPagingInfoTasksTrigger,
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

export class ListUpstreamTasksResponseBodyPagingInfoUpstreamTasksTaskDataSource extends $dara.Model {
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

export class ListUpstreamTasksResponseBodyPagingInfoUpstreamTasksTaskRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The default number of compute units (CUs) configured for task running.
   * 
   * @example
   * 0.25
   */
  cu?: string;
  /**
   * @remarks
   * The ID of the image configured for task running.
   * 
   * @example
   * i-xxxxxx
   */
  image?: string;
  /**
   * @remarks
   * The ID of the resource group for scheduling configured for task running.
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

export class ListUpstreamTasksResponseBodyPagingInfoUpstreamTasksTaskTrigger extends $dara.Model {
  /**
   * @remarks
   * The CRON expression. This parameter takes effect only if the Type parameter is set to Scheduler.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The end time of the time range during which the task is periodically scheduled. This parameter takes effect only if the Type parameter is set to Scheduler.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The running mode of the task after it is triggered. This parameter takes effect only if the Type parameter is set to Scheduler. Valid values:
   * 
   * *   Pause
   * *   Skip
   * *   Normal
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The start time of the time range during which the task is periodically scheduled. This parameter takes effect only if the Type parameter is set to Scheduler.
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
   * 
   * *   Scheduler: scheduling cycle-based trigger
   * *   Manual: manual trigger
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

export class ListUpstreamTasksResponseBodyPagingInfoUpstreamTasksTask extends $dara.Model {
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
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The account ID of the creator.
   * 
   * @example
   * 1000
   */
  createUser?: string;
  /**
   * @remarks
   * The information about the associated data source.
   */
  dataSource?: ListUpstreamTasksResponseBodyPagingInfoUpstreamTasksTaskDataSource;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The environment of the workspace. Valid values:
   * 
   * *   Prod
   * *   Dev
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The instance generation mode. Valid values:
   * 
   * *   T+1
   * *   Immediately
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the modifier.
   * 
   * @example
   * 1000
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name of the task.
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
   * The priority of the task. Valid values: 1 to 8.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The rerun interval. Unit: seconds.
   * 
   * @example
   * 60
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The rerun mode. Valid values:
   * 
   * *   AllDenied: The task cannot be rerun regardless of whether the task is successfully run or fails to run.
   * *   FailureAllowed: The task can be rerun only after it fails to run.
   * *   AllAllowed: The task can be rerun regardless of whether the task is successfully run or fails to run.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of times that the task is rerun. This parameter takes effect only if the RerunMode parameter is set to AllAllowed or FailureAllowed.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The configurations of the runtime environment, such as the resource group information.
   */
  runtimeResource?: ListUpstreamTasksResponseBodyPagingInfoUpstreamTasksTaskRuntimeResource;
  /**
   * @remarks
   * The timeout period of task running. Unit: seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The trigger method.
   */
  trigger?: ListUpstreamTasksResponseBodyPagingInfoUpstreamTasksTaskTrigger;
  /**
   * @remarks
   * The type of the task.
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
      dataSource: ListUpstreamTasksResponseBodyPagingInfoUpstreamTasksTaskDataSource,
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
      runtimeResource: ListUpstreamTasksResponseBodyPagingInfoUpstreamTasksTaskRuntimeResource,
      timeout: 'number',
      trigger: ListUpstreamTasksResponseBodyPagingInfoUpstreamTasksTaskTrigger,
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

export class ListUpstreamTasksResponseBodyPagingInfoUpstreamTasks extends $dara.Model {
  /**
   * @remarks
   * The scheduling dependency type. Valid values:
   * 
   * *   Normal: same-cycle scheduling dependency
   * *   CrossCycle: cross-cycle scheduling dependency
   * 
   * @example
   * Normal
   */
  dependencyType?: string;
  /**
   * @remarks
   * The information about the task.
   */
  task?: ListUpstreamTasksResponseBodyPagingInfoUpstreamTasksTask;
  static names(): { [key: string]: string } {
    return {
      dependencyType: 'DependencyType',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencyType: 'string',
      task: ListUpstreamTasksResponseBodyPagingInfoUpstreamTasksTask,
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

export class ListUpstreamTasksResponseBodyPagingInfo extends $dara.Model {
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
   * The tasks. This parameter is deprecated and replaced by the UpstreamTasks parameter.
   */
  tasks?: ListUpstreamTasksResponseBodyPagingInfoTasks[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The ancestor tasks.
   */
  upstreamTasks?: ListUpstreamTasksResponseBodyPagingInfoUpstreamTasks[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
      upstreamTasks: 'UpstreamTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tasks: { 'type': 'array', 'itemType': ListUpstreamTasksResponseBodyPagingInfoTasks },
      totalCount: 'number',
      upstreamTasks: { 'type': 'array', 'itemType': ListUpstreamTasksResponseBodyPagingInfoUpstreamTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    if(Array.isArray(this.upstreamTasks)) {
      $dara.Model.validateArray(this.upstreamTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListUpstreamTasksResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
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
      pagingInfo: ListUpstreamTasksResponseBodyPagingInfo,
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

