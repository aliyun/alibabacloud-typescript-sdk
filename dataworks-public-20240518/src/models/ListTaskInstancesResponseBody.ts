// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskInstancesResponseBodyPagingInfoTaskInstancesDataSource extends $dara.Model {
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

export class ListTaskInstancesResponseBodyPagingInfoTaskInstancesRuntime extends $dara.Model {
  /**
   * @remarks
   * The machine on which the instance runs.
   * 
   * @example
   * cn-shanghai.1.2
   */
  gateway?: string;
  /**
   * @remarks
   * The unique run ID.
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

export class ListTaskInstancesResponseBodyPagingInfoTaskInstancesRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The compute unit (CU) consumption configured for the node.
   * 
   * @example
   * 0.25
   */
  cu?: string;
  /**
   * @remarks
   * The image ID configured for the node.
   * 
   * @example
   * i-xxxxxx
   */
  image?: string;
  /**
   * @remarks
   * The identifier of the schedule resource group configured for the node.
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

export class ListTaskInstancesResponseBodyPagingInfoTaskInstances extends $dara.Model {
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
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  bizdate?: number;
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
  dataSource?: ListTaskInstancesResponseBodyPagingInfoTaskInstancesDataSource;
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
   * The time when the instance finished running.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
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
   * The modification time.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the user who last modified the instance.
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
   * The account ID of the node owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The period number. Indicates which scheduling cycle of the day the instance belongs to.
   * 
   * @example
   * 1
   */
  periodNumber?: number;
  /**
   * @remarks
   * The run priority of the node. Minimum value: 1. Maximum value: 8. A larger value indicates a higher priority. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod: production.
   * - Dev: development.
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
   * The rerun configuration for the node. Valid values:
   * - AllDenied: rerun is not allowed regardless of success or failure.
   * - FailureAllowed: rerun is allowed only upon failure.
   * - AllAllowed: rerun is allowed regardless of success or failure.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The current run number, starting from 1 by default.
   * 
   * @example
   * 1
   */
  runNumber?: number;
  /**
   * @remarks
   * The runtime information of the instance.
   */
  runtime?: ListTaskInstancesResponseBodyPagingInfoTaskInstancesRuntime;
  /**
   * @remarks
   * The resource group information associated with the instance.
   */
  runtimeResource?: ListTaskInstancesResponseBodyPagingInfoTaskInstancesRuntimeResource;
  /**
   * @remarks
   * The list of script parameters.
   * 
   * @example
   * para1=val1 para2=val2
   */
  scriptParameters?: string;
  /**
   * @remarks
   * The time when the instance started running.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  startedTime?: number;
  /**
   * @remarks
   * The run status of the instance. Valid values:
   * - NotRun: not run.
   * - Running: running.
   * - WaitTime: waiting for the TriggerTime to arrive.
   * - CheckingCondition: checking branch conditions.
   * - WaitResource: waiting for resources.
   * - Failure: execution failed.
   * - Success: execution succeeded.
   * - Checking: submitted for qualityrule check.
   * - WaitTrigger: waiting for an external trigger. Trigger-based nodes enter this status after the waiting period.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the corresponding node.
   * 
   * @example
   * 1234
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the corresponding node.
   * 
   * @example
   * SQL node
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the corresponding node.
   * 
   * @example
   * ODPS_SQL
   */
  taskType?: string;
  /**
   * @remarks
   * The timeout period for node execution, in seconds.
   * 
   * Note: The scheduling system rounds the configured value to the nearest hour.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The run mode at the time of triggering. This parameter takes effect when TriggerType is set to Scheduler. Valid values:
   * - Pause: paused.
   * - Skip: dry run.
   * - Normal: normal run.
   * 
   * @example
   * Normal
   */
  triggerRecurrence?: string;
  /**
   * @remarks
   * The scheduled trigger time.
   * 
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  triggerTime?: number;
  /**
   * @remarks
   * The trigger type. Valid values:
   * - Scheduler: triggered by a scheduling cycle.
   * - Manual: manually triggered.
   * 
   * @example
   * Scheduler
   */
  triggerType?: string;
  /**
   * @remarks
   * The unified workflow instance ID. All instances within the same business date under a single trigger share the same value for this field.
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
   * The value is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  waitingTriggerTime?: number;
  /**
   * @remarks
   * The ID of the workflow to which the instance belongs.
   * 
   * @example
   * 1234
   */
  workflowId?: number;
  /**
   * @remarks
   * The ID of the workflow instance to which the instance belongs.
   * 
   * @example
   * 1234
   */
  workflowInstanceId?: number;
  /**
   * @remarks
   * The type of the workflow instance to which the instance belongs. Valid values:
   * - SmokeTest: smoke test.
   * - SupplementData: data backfill.
   * - Manual: manually triggered.
   * - ManualWorkflow: manual workflow.
   * - Normal: periodic scheduling.
   * - ManualFlow: manually triggered workflow.
   * 
   * @example
   * Normal
   */
  workflowInstanceType?: string;
  /**
   * @remarks
   * The name of the workflow to which the instance belongs.
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
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      operationType: 'OperationType',
      owner: 'Owner',
      periodNumber: 'PeriodNumber',
      priority: 'Priority',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      rerunMode: 'RerunMode',
      runNumber: 'RunNumber',
      runtime: 'Runtime',
      runtimeResource: 'RuntimeResource',
      scriptParameters: 'ScriptParameters',
      startedTime: 'StartedTime',
      status: 'Status',
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
      dataSource: ListTaskInstancesResponseBodyPagingInfoTaskInstancesDataSource,
      description: 'string',
      finishedTime: 'number',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      operationType: 'string',
      owner: 'string',
      periodNumber: 'number',
      priority: 'number',
      projectEnv: 'string',
      projectId: 'number',
      rerunMode: 'string',
      runNumber: 'number',
      runtime: ListTaskInstancesResponseBodyPagingInfoTaskInstancesRuntime,
      runtimeResource: ListTaskInstancesResponseBodyPagingInfoTaskInstancesRuntimeResource,
      scriptParameters: 'string',
      startedTime: 'number',
      status: 'string',
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
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
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

export class ListTaskInstancesResponseBodyPagingInfo extends $dara.Model {
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
   * The list of task instances.
   */
  taskInstances?: ListTaskInstancesResponseBodyPagingInfoTaskInstances[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskInstances: 'TaskInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      taskInstances: { 'type': 'array', 'itemType': ListTaskInstancesResponseBodyPagingInfoTaskInstances },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskInstances)) {
      $dara.Model.validateArray(this.taskInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListTaskInstancesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
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
      pagingInfo: ListTaskInstancesResponseBodyPagingInfo,
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

