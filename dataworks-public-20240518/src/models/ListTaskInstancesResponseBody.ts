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
   * The host for running.
   * 
   * @example
   * cn-shanghai.1.2
   */
  gateway?: string;
  /**
   * @remarks
   * The instance run ID.
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
   * The data timestamp.
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
   * The account ID of the user who creates the instance.
   * 
   * @example
   * 1000
   */
  createUser?: string;
  /**
   * @remarks
   * The information about the associated data source.
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
   * @example
   * 1710239005403
   */
  finishedTime?: number;
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
   * The modification time.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the user who modifies the instance.
   * 
   * @example
   * 1000
   */
  modifyUser?: string;
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
   * The sequence number of the cycle. This parameter indicates the cycle of the task instance on the current day.
   * 
   * @example
   * 1
   */
  periodNumber?: number;
  /**
   * @remarks
   * The priority of the task. Minimum value: 1. Maximum value: 8. A larger value indicates a higher priority. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The environment of the workspace.
   * 
   * Valid values:
   * 
   * *   Prod: production environment
   * *   Dev: development environment
   * 
   * @example
   * Prod
   */
  projectEnv?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The rerun mode
   * 
   * Valid values:
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
   * The number of times the task is run. By default, the value starts from 1.
   * 
   * @example
   * 1
   */
  runNumber?: number;
  /**
   * @remarks
   * The runtime information about the instance.
   */
  runtime?: ListTaskInstancesResponseBodyPagingInfoTaskInstancesRuntime;
  /**
   * @remarks
   * The information about the resource group with which the instance is associated.
   */
  runtimeResource?: ListTaskInstancesResponseBodyPagingInfoTaskInstancesRuntimeResource;
  /**
   * @example
   * para1=val1 para2=val2
   */
  scriptParameters?: string;
  /**
   * @remarks
   * The time when the instance started to run.
   * 
   * @example
   * 1710239005403
   */
  startedTime?: number;
  /**
   * @remarks
   * The status of the instance.
   * 
   * Valid values:
   * 
   * *   NotRun: The instance is not run.
   * *   Running: The instance is running.
   * *   WaitTime: The instance is waiting for the scheduling time to arrive.
   * *   CheckingCondition: Branch conditions are being checked for the instance.
   * *   WaitResource: The instance is waiting for resources.
   * *   Failure: The instance fails to be run.
   * *   Success: The instance is successfully run.
   * *   Checking: Data quality is being checked for the instance.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task for which the instance is generated.
   * 
   * @example
   * 1234
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the task for which the instance is generated.
   * 
   * @example
   * SQL node
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task for which the instance is generated.
   * 
   * @example
   * ODPS_SQL
   */
  taskType?: string;
  /**
   * @remarks
   * The timeout period of task running. Unit: seconds.
   * 
   * Note: The value of this parameter is rounded up by hour.
   * 
   * @example
   * 1
   */
  timeout?: number;
  /**
   * @remarks
   * The running mode of the instance after it is triggered. This parameter takes effect only if the TriggerType parameter is set to Scheduler.
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
  triggerRecurrence?: string;
  /**
   * @remarks
   * The scheduling time.
   * 
   * @example
   * 1710239005403
   */
  triggerTime?: number;
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
  triggerType?: string;
  /**
   * @example
   * 1710239005403
   */
  waitingResourceTime?: number;
  /**
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
   * The workflow instance ID.
   * 
   * @example
   * 1234
   */
  workflowInstanceId?: number;
  /**
   * @remarks
   * The type of the workflow instance.
   * 
   * Valid values:
   * 
   * *   SmokeTest
   * *   SupplementData
   * *   Manual
   * *   ManualWorkflow
   * *   Normal
   * *   ManualFlow
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
   * The total number of entries returned.
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
   * The pagination details.
   */
  pagingInfo?: ListTaskInstancesResponseBodyPagingInfo;
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

