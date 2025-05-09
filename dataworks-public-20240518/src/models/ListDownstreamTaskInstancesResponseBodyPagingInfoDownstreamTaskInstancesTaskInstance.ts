// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstanceDataSource } from "./ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstanceDataSource";
import { ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstanceRuntime } from "./ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstanceRuntime";
import { ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstanceRuntimeResource } from "./ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstanceRuntimeResource";


export class ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstance extends $dara.Model {
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
  dataSource?: ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstanceDataSource;
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
   * The environment in which the data source is used. Valid values:
   * 
   * *   Dev
   * *   Prod
   * 
   * @example
   * Prod
   */
  envType?: string;
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
   * The account ID of the modifier.
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
   * The workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The rerun mode.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of times the instance is run. By default, the value starts from 1.
   * 
   * @example
   * 1
   */
  runNumber?: number;
  /**
   * @remarks
   * The runtime information about the instance.
   */
  runtime?: ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstanceRuntime;
  /**
   * @remarks
   * The configurations of the runtime environment, such as the resource group information.
   */
  runtimeResource?: ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstanceRuntimeResource;
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
   * The status of the instance. Valid values:
   * 
   * *   NotRun: The instance is not run.
   * *   Running: The instance is running.
   * *   WaitTime: The instance is waiting for the scheduling time to arrive.
   * *   CheckingCondition: Branch conditions are being checked for the instance.
   * *   WaitResource: The instance is waiting for resources.
   * *   Failure: The instance fails to be run.
   * *   Success: The instance is successfully run.
   * *   Checking: Data quality is being checked for the instance.
   * *   WaitTrigger: The instance is waiting to be triggered by external scheduling systems.
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
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The running mode of the instance after it is triggered. This parameter takes effect only if the TriggerType parameter is set to Scheduler. Valid values:
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
   * The trigger type. Valid values:
   * 
   * *   Scheduler: scheduling cycle-based trigger
   * *   Manual: manual trigger
   * 
   * @example
   * Scheduler
   */
  triggerType?: string;
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
   * The type of the workflow instance. Valid values:
   * 
   * *   Normal
   * *   Manual
   * *   SmokeTest
   * *   SupplementData
   * *   ManualWorkflow
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
      envType: 'EnvType',
      finishedTime: 'FinishedTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      owner: 'Owner',
      periodNumber: 'PeriodNumber',
      priority: 'Priority',
      projectId: 'ProjectId',
      rerunMode: 'RerunMode',
      runNumber: 'RunNumber',
      runtime: 'Runtime',
      runtimeResource: 'RuntimeResource',
      startedTime: 'StartedTime',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
      timeout: 'Timeout',
      triggerRecurrence: 'TriggerRecurrence',
      triggerTime: 'TriggerTime',
      triggerType: 'TriggerType',
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
      dataSource: ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstanceDataSource,
      description: 'string',
      envType: 'string',
      finishedTime: 'number',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      owner: 'string',
      periodNumber: 'number',
      priority: 'number',
      projectId: 'number',
      rerunMode: 'string',
      runNumber: 'number',
      runtime: ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstanceRuntime,
      runtimeResource: ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstanceRuntimeResource,
      startedTime: 'number',
      status: 'string',
      taskId: 'number',
      taskName: 'string',
      taskType: 'string',
      timeout: 'number',
      triggerRecurrence: 'string',
      triggerTime: 'number',
      triggerType: 'string',
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

