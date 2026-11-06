// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowResponseBodyWorkflowDependencies extends $dara.Model {
  /**
   * @remarks
   * The dependency type. Valid values:
   * - CrossCycleDependsOnChildren: cross-cycle dependency on first-level child nodes
   * - CrossCycleDependsOnSelf: cross-cycle dependency on the node itself
   * - CrossCycleDependsOnOtherNode: cross-cycle dependency on other nodes
   * - Normal: same-cycle dependency
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The output identifier of the upstream task. This field is returned when the dependency type is same-cycle dependency and the input content is configured.
   * 
   * @example
   * pre.odps_sql_demo_0
   */
  upstreamOutput?: string;
  /**
   * @remarks
   * The ID of the upstream task. This field is returned when the dependency type is cross-cycle dependency on other nodes or same-cycle dependency without input content configured. It is not returned in other cases.
   * 
   * @example
   * 1234
   */
  upstreamTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      upstreamOutput: 'UpstreamOutput',
      upstreamTaskId: 'UpstreamTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      upstreamOutput: 'string',
      upstreamTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowResponseBodyWorkflowOutputsTaskOutputs extends $dara.Model {
  /**
   * @remarks
   * The output identifier.
   * 
   * @example
   * pre.odps_sql_demo_0
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowResponseBodyWorkflowOutputs extends $dara.Model {
  /**
   * @remarks
   * The list of task output definitions.
   */
  taskOutputs?: GetWorkflowResponseBodyWorkflowOutputsTaskOutputs[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': GetWorkflowResponseBodyWorkflowOutputsTaskOutputs },
    };
  }

  validate() {
    if(Array.isArray(this.taskOutputs)) {
      $dara.Model.validateArray(this.taskOutputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowResponseBodyWorkflowTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetWorkflowResponseBodyWorkflowTasksDataSource extends $dara.Model {
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

export class GetWorkflowResponseBodyWorkflowTasksRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The CU consumption configured for task execution.
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
   * The identifier of the resource group for scheduling configured for task execution.
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

export class GetWorkflowResponseBodyWorkflowTasks extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The client unique code of the task, which is used to implement asynchronous and idempotent operations. If you do not specify this parameter when creating the task, the system automatically generates a code and uniquely binds it to the resource ID. If you specify this parameter when updating or deleting the resource, it must be the same as the client unique code used during creation.
   * 
   * @example
   * Task_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
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
  dataSource?: GetWorkflowResponseBodyWorkflowTasksDataSource;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod: Production environment.
   * - Dev: Development environment.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 1234
   */
  id?: number;
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
   * The ID of the project.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The retry time interval, in seconds.
   * 
   * @example
   * 60
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The configuration that specifies whether the task can be rerun. Valid values:
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
  runtimeResource?: GetWorkflowResponseBodyWorkflowTasksRuntimeResource;
  /**
   * @remarks
   * The timeout period for task execution, in seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The running mode when the trigger is fired. Valid values:
   * - Pause: paused
   * - Skip: dry run
   * - Normal: normal execution
   * 
   * @example
   * Normal
   */
  triggerRecurrence?: string;
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
      clientUniqueCode: 'ClientUniqueCode',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataSource: 'DataSource',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
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
      triggerRecurrence: 'TriggerRecurrence',
      type: 'Type',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      clientUniqueCode: 'string',
      createTime: 'number',
      createUser: 'string',
      dataSource: GetWorkflowResponseBodyWorkflowTasksDataSource,
      description: 'string',
      envType: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      runtimeResource: GetWorkflowResponseBodyWorkflowTasksRuntimeResource,
      timeout: 'number',
      triggerRecurrence: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowResponseBodyWorkflowTrigger extends $dara.Model {
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
   * The expiration time of the periodic trigger. This parameter takes effect only when Type is set to Scheduler.
   * 
   * The format is `yyyy-MM-dd HH:mm:ss`, such as `1970-01-01 00:00:00`. The example does not include a time zone identifier.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The running mode when the trigger is fired. This parameter takes effect only when Type is set to Scheduler. Valid values:
   * - Pause: paused
   * - Skip: dry run
   * - Normal: normal execution
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The time when periodic triggering takes effect. This parameter takes effect only when Type is set to Scheduler.
   * 
   * The format is `yyyy-MM-dd HH:mm:ss`, such as `1970-01-01 00:00:00`. The example does not include a time zone identifier.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the trigger method. Valid values:
   * - Scheduler: triggered by a scheduling cycle
   * - Manual: triggered manually
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
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      recurrence: 'string',
      startTime: 'string',
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

export class GetWorkflowResponseBodyWorkflow extends $dara.Model {
  /**
   * @remarks
   * The client unique code of the workflow, which is used to implement asynchronous and idempotent operations. If you do not specify this parameter when creating the workflow, the system automatically generates a code and uniquely binds it to the resource ID. If you specify this parameter when updating or deleting the resource, it must be the same as the client unique code used during creation.
   * 
   * @example
   * Workflow_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
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
   * The account ID of the user who created the workflow.
   * 
   * @example
   * 1000
   */
  createUser?: string;
  /**
   * @remarks
   * The dependency information.
   */
  dependencies?: GetWorkflowResponseBodyWorkflowDependencies[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Test workflow
   */
  description?: string;
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod: Production environment.
   * - Dev: Development environment.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The unique identifier of the workflow.
   * 
   * @example
   * 1234
   */
  id?: number;
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
   * The account ID of the user who updated the workflow.
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
   * Workflow
   */
  name?: string;
  /**
   * @remarks
   * The output information.
   */
  outputs?: GetWorkflowResponseBodyWorkflowOutputs;
  /**
   * @remarks
   * The account ID of the owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The list of parameters.
   * 
   * @example
   * para1=$bizdate para2=$[yyyymmdd]
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the project.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: GetWorkflowResponseBodyWorkflowTags[];
  /**
   * @remarks
   * The list of tasks.
   */
  tasks?: GetWorkflowResponseBodyWorkflowTasks[];
  /**
   * @remarks
   * The trigger configuration.
   */
  trigger?: GetWorkflowResponseBodyWorkflowTrigger;
  static names(): { [key: string]: string } {
    return {
      clientUniqueCode: 'ClientUniqueCode',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dependencies: 'Dependencies',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      parameters: 'Parameters',
      projectId: 'ProjectId',
      tags: 'Tags',
      tasks: 'Tasks',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUniqueCode: 'string',
      createTime: 'number',
      createUser: 'string',
      dependencies: { 'type': 'array', 'itemType': GetWorkflowResponseBodyWorkflowDependencies },
      description: 'string',
      envType: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      outputs: GetWorkflowResponseBodyWorkflowOutputs,
      owner: 'string',
      parameters: 'string',
      projectId: 'number',
      tags: { 'type': 'array', 'itemType': GetWorkflowResponseBodyWorkflowTags },
      tasks: { 'type': 'array', 'itemType': GetWorkflowResponseBodyWorkflowTasks },
      trigger: GetWorkflowResponseBodyWorkflowTrigger,
    };
  }

  validate() {
    if(Array.isArray(this.dependencies)) {
      $dara.Model.validateArray(this.dependencies);
    }
    if(this.outputs && typeof (this.outputs as any).validate === 'function') {
      (this.outputs as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
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

export class GetWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the workflow.
   */
  workflow?: GetWorkflowResponseBodyWorkflow;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflow: 'Workflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflow: GetWorkflowResponseBodyWorkflow,
    };
  }

  validate() {
    if(this.workflow && typeof (this.workflow as any).validate === 'function') {
      (this.workflow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

