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
   * The type. Valid values:
   * - Constant: constant.
   * - PassThrough: output of a parameter node.
   * - System: variable.
   * - NodeOutput: script output.
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
   * The type. Valid values:
   * - Constant: constant.
   * - PassThrough: output of a parameter node.
   * - System: variable.
   * - NodeOutput: script output.
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
   * The machine on which the task runs.
   * 
   * @example
   * cn-shanghai.1.2
   */
  gateway?: string;
  /**
   * @remarks
   * The unique ID of the run.
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
   * The compute unit (CU) consumption configured for the task.
   * 
   * @example
   * 0.25
   */
  cu?: string;
  /**
   * @remarks
   * The image ID configured for the task.
   * 
   * @example
   * i-xxxxxx
   */
  image?: string;
  /**
   * @remarks
   * The identifier of the schedule resource group configured for the task.
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
   * The script content.
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
   * The label key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The label value.
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
   * The business date.
   * 
   * @example
   * 1710239005403
   */
  bizdate?: number;
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
   * The account ID of the user who created the instance.
   * 
   * @example
   * 1000
   */
  createUser?: string;
  /**
   * @remarks
   * The data source information associated with the instance.
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
   * The completion time.
   * 
   * @example
   * 1710239005403
   */
  finishedTime?: number;
  /**
   * @remarks
   * The unique identifier of the node instance.
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
   * The modification time.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the user who modified the instance.
   * 
   * @example
   * 1000
   */
  modifyUser?: string;
  /**
   * @remarks
   * The type of the most recent operation on the instance.
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
   * The account ID of the node owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The period number. Indicates which scheduling cycle of the day the task instance is in.
   * 
   * @example
   * 1
   */
  periodNumber?: number;
  /**
   * @remarks
   * The running priority of the task. Minimum value: 1. Maximum value: 8. A larger value indicates a higher priority. Default value: 1.
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
   * The rerun configuration of the task. Valid values:
   * - AllDenied: reruns are not allowed regardless of whether the task fails or succeeds.
   * - AllAllowed: reruns are allowed regardless of whether the task fails or succeeds.
   * - FailureAllowed: reruns are allowed only when the task fails.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The current run number. The value starts from 1 by default.
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
   * The resource group information associated with the instance.
   */
  runtimeResource?: GetTaskInstanceResponseBodyTaskInstanceRuntimeResource;
  /**
   * @remarks
   * The running script information.
   */
  script?: GetTaskInstanceResponseBodyTaskInstanceScript;
  /**
   * @remarks
   * The start time of the run.
   * 
   * @example
   * 1710239005403
   */
  startedTime?: number;
  /**
   * @remarks
   * The instance running status. Valid values:
   * - NotRun: Not run.
   * - Running: Running.
   * - WaitTime: Waiting for the TriggerTime to arrive.
   * - CheckingCondition: Checking branch conditions.
   * - WaitResource: Waiting for resources.
   * - Failure: Execution failed.
   * - Success: Execution succeeded.
   * - Checking: Submitted for data quality check.
   * - WaitTrigger: Waiting for an external trigger. Trigger-based nodes enter this status after the waiting time elapses.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The list of node tags.
   */
  tags?: GetTaskInstanceResponseBodyTaskInstanceTags[];
  /**
   * @remarks
   * The ID of the corresponding task.
   * 
   * @example
   * 1234
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the corresponding task.
   * 
   * @example
   * SQL node
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the corresponding task.
   * 
   * @example
   * ODPS_SQL
   */
  taskType?: string;
  /**
   * @remarks
   * The timeout period for task execution. Unit: seconds.
   * 
   * Note: The scheduling system rounds the configured value to the nearest hour.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The running mode when triggered. This parameter takes effect when TriggerType is set to Scheduler. Valid values:
   * 
   * - Normal: a normal scheduled task that is scheduled on a regular basis.
   * - Manual: a manual task that is not scheduled on a regular basis.
   * - Pause: a paused task that is scheduled on a regular basis but is set to failed when scheduling starts.
   * - Skip: a dry-run task that is scheduled on a regular basis but is set to succeeded when scheduling starts.
   * - SkipUnchoose: a task that is not selected in a temporary workflow. This value exists only in temporary workflows. The task is set to succeeded when scheduling starts.
   * - SkipCycle: a weekly or monthly task whose running cycle has not arrived. The task is scheduled on a regular basis but is set to succeeded when scheduling starts.
   * - ConditionUnchoose: a downstream node that is not selected by an upstream branch (IF) node. The task directly becomes a dry run.
   * - RealtimeDeprecated: an expired periodic instance generated in real time. The task is set to succeeded.
   * - PauseCalendar: the instance is paused because a calendar is referenced.
   * - SkipCalendar: the instance is a dry run because a calendar is referenced.
   * 
   * @example
   * Normal
   */
  triggerRecurrence?: string;
  /**
   * @remarks
   * The scheduled trigger time.
   * 
   * @example
   * 1710239005403
   */
  triggerTime?: number;
  /**
   * @remarks
   * The trigger type. You can obtain the trigger type from the Trigger.Type response parameter of the GetTask operation. Valid values:
   * - Scheduler: triggered by a scheduling cycle.
   * - Manual: manually triggered.
   * 
   * @example
   * Scheduler
   */
  triggerType?: string;
  /**
   * @remarks
   * The unified workflow instance ID. All task instances within the same business date under a single trigger share the same value for this field.
   * 
   * @example
   * 1234
   */
  unifiedWorkflowInstanceId?: number;
  /**
   * @remarks
   * The time when the instance entered the waiting-for-resource state.
   * 
   * @example
   * 1710239005403
   */
  waitingResourceTime?: number;
  /**
   * @remarks
   * The time when the instance entered the waiting-for-scheduled-time state.
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
   * - SmokeTest: test.
   * - SupplementData: data backfill.
   * - Manual: manual task.
   * - ManualWorkflow: manual workflow.
   * - Normal: periodic scheduling.
   * - ManualFlow: manually executed business flow.
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
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77****
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed information about the task instance.
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

