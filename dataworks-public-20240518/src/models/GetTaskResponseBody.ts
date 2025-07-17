// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResponseBodyTaskDataSource extends $dara.Model {
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

export class GetTaskResponseBodyTaskDependencies extends $dara.Model {
  /**
   * @remarks
   * The dependency type. Valid values:
   * 
   * *   CrossCycleDependsOnChildren: cross-cycle dependency on level-1 descendant nodes
   * *   CrossCycleDependsOnSelf: cross-cycle dependency on the current node
   * *   CrossCycleDependsOnOtherNode: cross-cycle dependency on other nodes
   * *   Normal: same-cycle scheduling dependency
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The identifier of the output of the ancestor task. This parameter is returned only if `same-cycle scheduling dependencies` and the node input are configured.
   * 
   * @example
   * pre.odps_sql_demo_0
   */
  upstreamOutput?: string;
  /**
   * @remarks
   * The ancestor task ID. This parameter is returned only if `cross-cycle scheduling dependencies` or `same-cycle scheduling dependencies` and the node input are not configured.
   * 
   * @example
   * 1234
   */
  upstreamTaskId?: string;
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
      upstreamTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskInputsVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * key1
   */
  name?: string;
  /**
   * @remarks
   * The type. Valid values:
   * 
   * *   Constant: constant
   * *   PassThrough: node output
   * *   System: variable
   * *   NodeOutput: script output
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * The value of the variable.
   * 
   * @example
   * Value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
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

export class GetTaskResponseBodyTaskInputs extends $dara.Model {
  /**
   * @remarks
   * The variables.
   */
  variables?: GetTaskResponseBodyTaskInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskInputsVariables },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskOutputsTaskOutputs extends $dara.Model {
  /**
   * @remarks
   * The identifier of the output.
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

export class GetTaskResponseBodyTaskOutputsVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * key1
   */
  name?: string;
  /**
   * @remarks
   * The type. Valid values:
   * 
   * *   Constant: constant
   * *   PassThrough: node output
   * *   System: variable
   * *   NodeOutput: script output
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * The value of the variable.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
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

export class GetTaskResponseBodyTaskOutputs extends $dara.Model {
  /**
   * @remarks
   * The task outputs.
   */
  taskOutputs?: GetTaskResponseBodyTaskOutputsTaskOutputs[];
  /**
   * @remarks
   * The variables.
   */
  variables?: GetTaskResponseBodyTaskOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskOutputsTaskOutputs },
      variables: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskOutputsVariables },
    };
  }

  validate() {
    if(Array.isArray(this.taskOutputs)) {
      $dara.Model.validateArray(this.taskOutputs);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskRuntimeResource extends $dara.Model {
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

export class GetTaskResponseBodyTaskScript extends $dara.Model {
  /**
   * @remarks
   * The script content.
   * 
   * @example
   * echo "helloWorld"
   */
  content?: string;
  /**
   * @remarks
   * The script parameters.
   * 
   * @example
   * para1=$bizdate
   */
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      parameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskSubTasksSubTasksDataSource extends $dara.Model {
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

export class GetTaskResponseBodyTaskSubTasksSubTasksRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The default number of CUs configured for task running.
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

export class GetTaskResponseBodyTaskSubTasksSubTasksTrigger extends $dara.Model {
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
   * The trigger type. Valid values:
   * 
   * *   Scheduler: periodic scheduling
   * *   Manual: manual scheduling
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

export class GetTaskResponseBodyTaskSubTasksSubTasks extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * The baseline ID.
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
  dataSource?: GetTaskResponseBodyTaskSubTasksSubTasksDataSource;
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
   * *   Prod: production environment
   * *   Dev: development environment
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
   * The environment of the workspace. This parameter is deprecated and replaced by the EnvType parameter. Valid values:
   * 
   * *   Prod: production environment
   * *   Dev: development environment
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
   * 180
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The rerun mode. Valid values:
   * 
   * *   AllDenied: The task cannot be rerun regardless of whether the task is successfully run or fails to be run.
   * *   FailureAllowed: The task can be rerun only after it fails to be run.
   * *   AllAllowed: The task can be rerun regardless of whether the task is successfully run or fails to be run.
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
   * The runtime environment configuration of the task, such as the resource group.
   */
  runtimeResource?: GetTaskResponseBodyTaskSubTasksSubTasksRuntimeResource;
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
  trigger?: GetTaskResponseBodyTaskSubTasksSubTasksTrigger;
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
      dataSource: GetTaskResponseBodyTaskSubTasksSubTasksDataSource,
      description: 'string',
      envType: 'string',
      id: 'number',
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
      runtimeResource: GetTaskResponseBodyTaskSubTasksSubTasksRuntimeResource,
      timeout: 'number',
      trigger: GetTaskResponseBodyTaskSubTasksSubTasksTrigger,
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

export class GetTaskResponseBodyTaskSubTasks extends $dara.Model {
  /**
   * @remarks
   * The subtasks.
   */
  subTasks?: GetTaskResponseBodyTaskSubTasksSubTasks[];
  /**
   * @remarks
   * The type of the subtask. Valid values:
   * 
   * *   DoWhile: do-while node
   * *   Combined: node group
   * *   ForEach: for-each node
   * 
   * @example
   * Combined
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      subTasks: 'SubTasks',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subTasks: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskSubTasksSubTasks },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subTasks)) {
      $dara.Model.validateArray(this.subTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskTags extends $dara.Model {
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

export class GetTaskResponseBodyTaskTrigger extends $dara.Model {
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
   * The trigger type. Valid values:
   * 
   * *   Scheduler: periodic scheduling
   * *   Manual: manual scheduling
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

export class GetTaskResponseBodyTask extends $dara.Model {
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
  dataSource?: GetTaskResponseBodyTaskDataSource;
  /**
   * @remarks
   * The dependency information.
   */
  dependencies?: GetTaskResponseBodyTaskDependencies[];
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
   * *   Prod: production environment
   * *   Dev: development environment
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The input information.
   * 
   * **if can be null:**
   * false
   */
  inputs?: GetTaskResponseBodyTaskInputs;
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
   * The output information.
   */
  outputs?: GetTaskResponseBodyTaskOutputs;
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
   * The environment of the workspace. This parameter is deprecated and replaced by the EnvType parameter. Valid values:
   * 
   * *   Prod: production environment
   * *   Dev: development environment
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
   * The rerun mode. Valid values:
   * 
   * *   AllDenied: The task cannot be rerun regardless of whether the task is successfully run or fails to be run.
   * *   FailureAllowed: The task can be rerun only after it fails to be run.
   * *   AllAllowed: The task can be rerun regardless of whether the task is successfully run or fails to be run.
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
  runtimeResource?: GetTaskResponseBodyTaskRuntimeResource;
  /**
   * @remarks
   * The script information.
   */
  script?: GetTaskResponseBodyTaskScript;
  /**
   * @remarks
   * The configurations of the subtasks, such as a do-while node.
   */
  subTasks?: GetTaskResponseBodyTaskSubTasks;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetTaskResponseBodyTaskTags[];
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
  trigger?: GetTaskResponseBodyTaskTrigger;
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
   * The workflow ID.
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
      dependencies: 'Dependencies',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      inputs: 'Inputs',
      instanceMode: 'InstanceMode',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      priority: 'Priority',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      subTasks: 'SubTasks',
      tags: 'Tags',
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
      dataSource: GetTaskResponseBodyTaskDataSource,
      dependencies: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskDependencies },
      description: 'string',
      envType: 'string',
      id: 'number',
      inputs: GetTaskResponseBodyTaskInputs,
      instanceMode: 'string',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      outputs: GetTaskResponseBodyTaskOutputs,
      owner: 'string',
      priority: 'number',
      projectEnv: 'string',
      projectId: 'number',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      runtimeResource: GetTaskResponseBodyTaskRuntimeResource,
      script: GetTaskResponseBodyTaskScript,
      subTasks: GetTaskResponseBodyTaskSubTasks,
      tags: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskTags },
      timeout: 'number',
      trigger: GetTaskResponseBodyTaskTrigger,
      type: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(Array.isArray(this.dependencies)) {
      $dara.Model.validateArray(this.dependencies);
    }
    if(this.inputs && typeof (this.inputs as any).validate === 'function') {
      (this.inputs as any).validate();
    }
    if(this.outputs && typeof (this.outputs as any).validate === 'function') {
      (this.outputs as any).validate();
    }
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
    }
    if(this.script && typeof (this.script as any).validate === 'function') {
      (this.script as any).validate();
    }
    if(this.subTasks && typeof (this.subTasks as any).validate === 'function') {
      (this.subTasks as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

export class GetTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the task.
   */
  task?: GetTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetTaskResponseBodyTask,
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

