// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The business date. Typically, this is 00:00:00 of the day before the scheduled time of the scheduled instance, in the format of a millisecond-level timestamp, such as 1743350400000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1710239005403
   */
  bizdate?: number;
  /**
   * @remarks
   * The filter conditions. The value must be in JSON format. Multiple filter conditions are connected by the logical AND operator. Supported fields: `startedTimeStart`, `startedTimeEnd`, `finishedTimeStart`, `finishedTimeEnd`, `createTimeStart`, and `createTimeEnd`.
   * 
   * @example
   * {
   *     "startedTimeStart": "1763481600000",
   *     "startedTimeEnd": "1763481600000",
   *     "finishedTimeStart": "1763481600000",
   *     "finishedTimeEnd": "1763481600000",
   *     "createTimeStart": "1763481600000",
   *     "createTimeEnd": "1763481600000"
   * }
   */
  filter?: string;
  /**
   * @remarks
   * The task instance ID. Task instances may be rerun. If you specify this parameter, the response includes historical information about reruns. Each piece of historical information is distinguished by RunNumber.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The list of task instance IDs. You can use this parameter to query multiple task instances in batches based on task instance IDs.
   */
  ids?: number[];
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
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 500.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The project environment.
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
   * This parameter is required.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group information. Specify the identifier of the scheduling resource group.
   * 
   * @example
   * S_res_group_524258031846018_1684XXXXXXXXX
   */
  runtimeResource?: string;
  /**
   * @remarks
   * The sort field. Fields such as scheduled time and start time are supported. The format is "Sort field + Sort order (Desc/Asc)" (Asc can be omitted). The valid values for the sort field are as follows:
   * 
   * - `TriggerTime (Desc/Asc)`
   * 
   * - `StartedTime (Desc/Asc)`
   * 
   * - `FinishedTime (Desc/Asc)`
   * 
   * - `CreateTime (Desc/Asc)`
   * 
   * - `Id (Desc/Asc)`
   * 
   *   Default value: `Id Desc`.
   * 
   * @example
   * Id Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The status of the task instance. Valid values:
   * - `NotRun`: Not run.
   * - `Running`: Running.
   * - `Failure`: Failed.
   * - `Success`: Successful.
   * - `WaitTime`: Waiting for scheduled time.
   * - `WaitResource`: Waiting for resources.
   * 
   * @example
   * Success
   */
  status?: string;
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
   * The list of task IDs. You can use this parameter to query task instances in batches based on task IDs.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The name of the task. Fuzzy match is supported.
   * 
   * @example
   * SQL node
   */
  taskName?: string;
  /**
   * @remarks
   * The task type. For the valid values of TaskType for different nodes, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * ODPS_SQL
   */
  taskType?: string;
  /**
   * @remarks
   * The running mode upon triggering. This parameter takes effect only when TriggerType is set to Scheduler.
   * - Pause: Paused.
   * - Skip: Dry run.
   * - Normal: Normal execution.
   * 
   * @example
   * Normal
   */
  triggerRecurrence?: string;
  /**
   * @remarks
   * The trigger type.
   * - Scheduler: Triggered by periodic scheduling.
   * - Manual: Triggered manually.
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
   * The ID of the workflow to which the task belongs.
   * 
   * @example
   * 1234
   */
  workflowId?: number;
  /**
   * @remarks
   * The ID of the workflow instance.
   * 
   * @example
   * 1234
   */
  workflowInstanceId?: number;
  /**
   * @remarks
   * The type of the workflow instance.
   * - SmokeTest: Test.
   * - Manual: Manual task.
   * - SupplementData: Data backfill.
   * - ManualWorkflow: Manual workflow.
   * - Normal: Periodic scheduling.
   * - TriggerWorkflow: Triggered workflow.
   * 
   * @example
   * Normal
   */
  workflowInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      filter: 'Filter',
      id: 'Id',
      ids: 'Ids',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      runtimeResource: 'RuntimeResource',
      sortBy: 'SortBy',
      status: 'Status',
      taskId: 'TaskId',
      taskIds: 'TaskIds',
      taskName: 'TaskName',
      taskType: 'TaskType',
      triggerRecurrence: 'TriggerRecurrence',
      triggerType: 'TriggerType',
      unifiedWorkflowInstanceId: 'UnifiedWorkflowInstanceId',
      workflowId: 'WorkflowId',
      workflowInstanceId: 'WorkflowInstanceId',
      workflowInstanceType: 'WorkflowInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'number',
      filter: 'string',
      id: 'number',
      ids: { 'type': 'array', 'itemType': 'number' },
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectEnv: 'string',
      projectId: 'number',
      runtimeResource: 'string',
      sortBy: 'string',
      status: 'string',
      taskId: 'number',
      taskIds: { 'type': 'array', 'itemType': 'number' },
      taskName: 'string',
      taskType: 'string',
      triggerRecurrence: 'string',
      triggerType: 'string',
      unifiedWorkflowInstanceId: 'number',
      workflowId: 'number',
      workflowInstanceId: 'number',
      workflowInstanceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

