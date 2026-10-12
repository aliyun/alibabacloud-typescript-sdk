// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business date. Typically, this is 00:00:00 of the day before the scheduled time of the periodic instance, in the format of a millisecond-level timestamp, such as 1743350400000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1710239005403
   */
  bizdate?: number;
  /**
   * @remarks
   * The filter conditions in JSON format. Multiple filter conditions are combined with the AND logical operator. Supported fields: `startedTimeStart`, `startedTimeEnd`, `finishedTimeStart`, `finishedTimeEnd`, `createTimeStart`, and `createTimeEnd`.
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
   * The task instance ID. A task instance may be rerun. If you specify this parameter, the response includes historical rerun records, which are distinguished by RunNumber.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The task instance IDs. You can specify multiple task instance IDs to query task instances in batches.
   */
  idsShrink?: string;
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
   * The project environment. Valid values:
   * - Prod: production
   * - Dev: development
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
   * The sort field. Fields such as scheduled time and start time are supported. The format is \\"Sort field + Sort order (Desc/Asc)\\", where Asc can be omitted. Valid values for the sort field:
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
   *   Default value: `Id Desc`
   * 
   * @example
   * Id Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The status of the task instance. Valid values:
   * - `NotRun`: not run
   * - `Running`: running
   * - `Failure`: failed
   * - `Success`: successful
   * - `WaitTime`: waiting for scheduled time
   * - `WaitResource`: waiting for resources
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
   * The task IDs. You can specify multiple task IDs to query task instances in batches.
   */
  taskIdsShrink?: string;
  /**
   * @remarks
   * The task name. Fuzzy match is supported.
   * 
   * @example
   * SQL node
   */
  taskName?: string;
  /**
   * @remarks
   * The task type. For the valid values of TaskType for each node, see [DataWorks node types](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * ODPS_SQL
   */
  taskType?: string;
  /**
   * @remarks
   * The run mode upon triggering. This parameter takes effect only when TriggerType is set to Scheduler. Valid values:
   * - Pause: pause
   * - Skip: dry run
   * - Normal: normal run
   * 
   * @example
   * Normal
   */
  triggerRecurrence?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * - Scheduler: periodic scheduling
   * - Manual: manual
   * 
   * @example
   * Normal
   */
  triggerType?: string;
  /**
   * @remarks
   * The unified workflow instance ID. This value is the same for all task instances within a specific business date under a single trigger.
   * 
   * @example
   * 1234
   */
  unifiedWorkflowInstanceId?: number;
  /**
   * @remarks
   * The ID of the associated workflow.
   * 
   * @example
   * 1234
   */
  workflowId?: number;
  /**
   * @remarks
   * The ID of the associated workflow instance.
   * 
   * @example
   * 1234
   */
  workflowInstanceId?: number;
  /**
   * @remarks
   * The type of the workflow instance. Valid values:
   * - SmokeTest: test
   * - Manual: manual task
   * - SupplementData: data backfill
   * - ManualWorkflow: manual workflow
   * - Normal: periodic scheduling
   * - TriggerWorkflow: triggered workflow
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
      idsShrink: 'Ids',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      runtimeResource: 'RuntimeResource',
      sortBy: 'SortBy',
      status: 'Status',
      taskId: 'TaskId',
      taskIdsShrink: 'TaskIds',
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
      idsShrink: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectEnv: 'string',
      projectId: 'number',
      runtimeResource: 'string',
      sortBy: 'string',
      status: 'string',
      taskId: 'number',
      taskIdsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

