// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskInstanceResponseBodyTaskInstanceDataSource extends $dara.Model {
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

export class GetTaskInstanceResponseBodyTaskInstanceInputsVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * Key1
   */
  name?: string;
  /**
   * @remarks
   * The type of the variable. Valid values:
   * - Constant: The variable is a constant.
   * - PassThrough: The variable is the output of a parameter node.
   * - System: The variable is a system variable.
   * - NodeOutput: The variable is the script output.
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

export class GetTaskInstanceResponseBodyTaskInstanceInputs extends $dara.Model {
  /**
   * @remarks
   * The list of variable definitions.
   */
  variables?: GetTaskInstanceResponseBodyTaskInstanceInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': GetTaskInstanceResponseBodyTaskInstanceInputsVariables },
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

export class GetTaskInstanceResponseBodyTaskInstanceOutputsTaskOutputs extends $dara.Model {
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

export class GetTaskInstanceResponseBodyTaskInstanceOutputsVariables extends $dara.Model {
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
   * The type of the variable. Valid values:
   * - Constant: The variable is a constant.
   * - PassThrough: The variable is the output of a parameter node.
   * - System: The variable is a system variable.
   * - NodeOutput: The variable is the script output.
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

export class GetTaskInstanceResponseBodyTaskInstanceOutputs extends $dara.Model {
  /**
   * @remarks
   * The list of task output definitions.
   */
  taskOutputs?: GetTaskInstanceResponseBodyTaskInstanceOutputsTaskOutputs[];
  /**
   * @remarks
   * The list of variable definitions.
   */
  variables?: GetTaskInstanceResponseBodyTaskInstanceOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': GetTaskInstanceResponseBodyTaskInstanceOutputsTaskOutputs },
      variables: { 'type': 'array', 'itemType': GetTaskInstanceResponseBodyTaskInstanceOutputsVariables },
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

export class GetTaskInstanceResponseBodyTaskInstanceRuntime extends $dara.Model {
  /**
   * @remarks
   * The machine on which the task is executed.
   * 
   * @example
   * cn-shanghai.1.2
   */
  gateway?: string;
  /**
   * @remarks
   * The unique ID of the execution process.
   * 
   * @example
   * T3_123
   */
  processId?: string;
  static names(): { [key: string]: string } {
    return {
      gateway: 'Gateway',
      processId: 'ProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateway: 'string',
      processId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskInstanceResponseBodyTaskInstanceRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The compute unit (CU) consumption configured for task execution.
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

export class GetTaskInstanceResponseBodyTaskInstanceScript extends $dara.Model {
  /**
   * @remarks
   * The content of the script.
   * 
   * @example
   * echo "helloWorld"
   */
  content?: string;
  /**
   * @remarks
   * The list of script parameters.
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

export class GetTaskInstanceResponseBodyTaskInstanceTags extends $dara.Model {
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

export class GetTaskInstanceResponseBodyTaskInstance extends $dara.Model {
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
   * The business date. The value is a 13-digit UNIX timestamp in milliseconds.
   * 
   * @example
   * 1710239005403
   */
  bizdate?: number;
  /**
   * @remarks
   * The creation time. The value is a 13-digit UNIX timestamp in milliseconds.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The account ID of the user who created the instance.
   * 
   * @example
   * 1000
   */
  createUser?: string;
  /**
   * @remarks
   * The information about the data source associated with the instance.
   */
  dataSource?: GetTaskInstanceResponseBodyTaskInstanceDataSource;
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
   * The completion time. The value is a 13-digit UNIX timestamp in milliseconds.
   * 
   * @example
   * 1710239005403
   */
  finishedTime?: number;
  /**
   * @remarks
   * The unique identifier of the task instance.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The input information.
   */
  inputs?: GetTaskInstanceResponseBodyTaskInstanceInputs;
  /**
   * @remarks
   * The update time. The value is a 13-digit UNIX timestamp in milliseconds.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the user who updated the instance.
   * 
   * @example
   * 1000
   */
  modifyUser?: string;
  /**
   * @remarks
   * The type of the latest operation on the instance.
   * 
   * @example
   * TriggerDqc
   */
  operationType?: string;
  /**
   * @remarks
   * The output information.
   */
  outputs?: GetTaskInstanceResponseBodyTaskInstanceOutputs;
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
   * The period number. This indicates the sequence of the execution cycle for the task instance on the current day.
   * 
   * @example
   * 1
   */
  periodNumber?: number;
  /**
   * @remarks
   * The execution priority of the task. Valid values: 1 to 8. A larger value indicates a higher priority. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod: Production.
   * - Dev: Development.
   * 
   * @example
   * Prod
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
   * The configuration that specifies whether the task can be rerun. Valid values:
   * - AllDenied: The task cannot be rerun regardless of whether it fails or succeeds.
   * - AllAllowed: The task can be rerun regardless of whether it fails or succeeds.
   * - FailureAllowed: The task can be rerun only if it fails.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The current number of runs. Default value: 1.
   * 
   * @example
   * 1
   */
  runNumber?: number;
  /**
   * @remarks
   * The runtime information of the instance.
   */
  runtime?: GetTaskInstanceResponseBodyTaskInstanceRuntime;
  /**
   * @remarks
   * The information about the resource group associated with the instance.
   */
  runtimeResource?: GetTaskInstanceResponseBodyTaskInstanceRuntimeResource;
  /**
   * @remarks
   * The information about the execution script.
   */
  script?: GetTaskInstanceResponseBodyTaskInstanceScript;
  /**
   * @remarks
   * The start time. The value is a 13-digit UNIX timestamp in milliseconds.
   * 
   * @example
   * 1710239005403
   */
  startedTime?: number;
  /**
   * @remarks
   * The running status of the instance. Valid values:
   * - NotRun: Not run.
   * - Running: Running.
   * - WaitTime: Waiting for the trigger time.
   * - CheckingCondition: Checking branch conditions.
   * - WaitResource: Waiting for resources.
   * - Failure: Execution failed.
   * - Success: Execution succeeded.
   * - Checking: Submitted for data quality check.
   * - WaitTrigger: Waiting for an external trigger. Triggered nodes change to this status after the waiting time.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The list of task tags.
   */
  tags?: GetTaskInstanceResponseBodyTaskInstanceTags[];
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 1234
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * SQL node
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * ODPS_SQL
   */
  taskType?: string;
  /**
   * @remarks
   * The timeout period for task execution, in seconds.
   * 
   * Note: The scheduling system rounds the configured value to the nearest hour.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The run mode upon trigger. This parameter takes effect only when TriggerType is set to Scheduler. Valid values:
   * 
   * - Normal: The task is a normal scheduled task and is scheduled on a daily basis.
   * - Manual: The task is a manual task and is not scheduled on a daily basis.
   * - Pause: The task is paused. It is scheduled on a daily basis, but is directly set to failed when the scheduling is triggered.
   * - Skip: The task performs a dry run. It is scheduled on a daily basis, but is directly set to successful when the scheduling is triggered.
   * - SkipUnchoose: The task is an unselected task in a temporary workflow. It exists only in temporary workflows and is directly set to successful when the scheduling is triggered.
   * - SkipCycle: The task is a weekly or monthly task that has not reached its execution cycle. It is scheduled on a daily basis, but is directly set to successful when the scheduling is triggered.
   * - ConditionUnchoose: The downstream node is not selected by an upstream branch (IF) node. The task is directly set to a dry run.
   * - RealtimeDeprecated: The task is an expired periodic instance generated in real time. It is directly set to successful.
   * - PauseCalendar: The instance is paused due to a referenced calendar.
   * - SkipCalendar: The instance performs a dry run due to a referenced calendar.
   * 
   * @example
   * Normal
   */
  triggerRecurrence?: string;
  /**
   * @remarks
   * The scheduled trigger time. The value is a 13-digit UNIX timestamp in milliseconds.
   * 
   * @example
   * 1710239005403
   */
  triggerTime?: number;
  /**
   * @remarks
   * The trigger type. You can obtain the trigger type from the Trigger.Type response parameter of the GetTask operation. Valid values:
   * - Scheduler: The task is triggered by a scheduling cycle.
   * - Manual: The task is triggered manually.
   * 
   * @example
   * Scheduler
   */
  triggerType?: string;
  /**
   * @remarks
   * The unified workflow instance ID. The value of this field is the same for all task instances within a specific business date under a single trigger.
   * 
   * @example
   * 1234
   */
  unifiedWorkflowInstanceId?: number;
  /**
   * @remarks
   * The time when the instance starts waiting for resources.
   * 
   * @example
   * 1710239005403
   */
  waitingResourceTime?: number;
  /**
   * @remarks
   * The time when the instance starts waiting for the scheduled trigger. The value is a 13-digit UNIX timestamp in milliseconds.
   * 
   * @example
   * 1710239005403
   */
  waitingTriggerTime?: number;
  /**
   * @remarks
   * The ID of the workflow to which the task instance belongs.
   * 
   * @example
   * 1234
   */
  workflowId?: number;
  /**
   * @remarks
   * The ID of the workflow instance to which the task instance belongs.
   * 
   * @example
   * 1234
   */
  workflowInstanceId?: number;
  /**
   * @remarks
   * The type of the workflow instance to which the task instance belongs. Valid values:
   * - SmokeTest: The instance is a smoke test.
   * - SupplementData: The instance is for data backfill.
   * - Manual: The instance is a manual task.
   * - ManualWorkflow: The instance is a manual workflow.
   * - Normal: The instance uses periodic scheduling.
   * - ManualFlow: The instance is a manually executed business flow.
   * 
   * @example
   * Normal
   */
  workflowInstanceType?: string;
  /**
   * @remarks
   * The name of the workflow to which the task instance belongs.
   * 
   * @example
   * Test workflow
   */
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      bizdate: 'Bizdate',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataSource: 'DataSource',
      description: 'Description',
      finishedTime: 'FinishedTime',
      id: 'Id',
      inputs: 'Inputs',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      operationType: 'OperationType',
      outputs: 'Outputs',
      owner: 'Owner',
      periodNumber: 'PeriodNumber',
      priority: 'Priority',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      rerunMode: 'RerunMode',
      runNumber: 'RunNumber',
      runtime: 'Runtime',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      startedTime: 'StartedTime',
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
      timeout: 'Timeout',
      triggerRecurrence: 'TriggerRecurrence',
      triggerTime: 'TriggerTime',
      triggerType: 'TriggerType',
      unifiedWorkflowInstanceId: 'UnifiedWorkflowInstanceId',
      waitingResourceTime: 'WaitingResourceTime',
      waitingTriggerTime: 'WaitingTriggerTime',
      workflowId: 'WorkflowId',
      workflowInstanceId: 'WorkflowInstanceId',
      workflowInstanceType: 'WorkflowInstanceType',
      workflowName: 'WorkflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      bizdate: 'number',
      createTime: 'number',
      createUser: 'string',
      dataSource: GetTaskInstanceResponseBodyTaskInstanceDataSource,
      description: 'string',
      finishedTime: 'number',
      id: 'number',
      inputs: GetTaskInstanceResponseBodyTaskInstanceInputs,
      modifyTime: 'number',
      modifyUser: 'string',
      operationType: 'string',
      outputs: GetTaskInstanceResponseBodyTaskInstanceOutputs,
      owner: 'string',
      periodNumber: 'number',
      priority: 'number',
      projectEnv: 'string',
      projectId: 'number',
      rerunMode: 'string',
      runNumber: 'number',
      runtime: GetTaskInstanceResponseBodyTaskInstanceRuntime,
      runtimeResource: GetTaskInstanceResponseBodyTaskInstanceRuntimeResource,
      script: GetTaskInstanceResponseBodyTaskInstanceScript,
      startedTime: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetTaskInstanceResponseBodyTaskInstanceTags },
      taskId: 'number',
      taskName: 'string',
      taskType: 'string',
      timeout: 'number',
      triggerRecurrence: 'string',
      triggerTime: 'number',
      triggerType: 'string',
      unifiedWorkflowInstanceId: 'number',
      waitingResourceTime: 'number',
      waitingTriggerTime: 'number',
      workflowId: 'number',
      workflowInstanceId: 'number',
      workflowInstanceType: 'string',
      workflowName: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.inputs && typeof (this.inputs as any).validate === 'function') {
      (this.inputs as any).validate();
    }
    if(this.outputs && typeof (this.outputs as any).validate === 'function') {
      (this.outputs as any).validate();
    }
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
    }
    if(this.script && typeof (this.script as any).validate === 'function') {
      (this.script as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the task instance.
   */
  taskInstance?: GetTaskInstanceResponseBodyTaskInstance;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInstance: 'TaskInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInstance: GetTaskInstanceResponseBodyTaskInstance,
    };
  }

  validate() {
    if(this.taskInstance && typeof (this.taskInstance as any).validate === 'function') {
      (this.taskInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

