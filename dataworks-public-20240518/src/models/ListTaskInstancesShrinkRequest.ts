// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business date. This is typically 00:00:00 of the day before the scheduled time of the periodic instance. The value is a millisecond-level timestamp, such as 1743350400000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1710239005403
   */
  bizdate?: number;
  /**
   * @remarks
   * The filter. The value is in JSON format. Multiple filter conditions are combined with AND logic. Currently supported fields: `startedTimeStart, startedTimeEnd, finishedTimeStart, finishedTimeEnd, createTimeStart, createTimeEnd`
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
   * The instance ID. If an instance has been rerun, specifying this parameter returns the historical information including reruns. You can use RunNumber to distinguish each historical record.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The list of instance IDs. You can use this parameter to query multiple instances in a batch.
   */
  idsShrink?: string;
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
   * This parameter is required.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The schedule resource information. Specify the identifier of the schedule resource group.
   * 
   * @example
   * S_res_group_524258031846018_1684XXXXXXXXX
   */
  runtimeResource?: string;
  /**
   * @remarks
   * The sort field. Supports fields such as scheduled time and start time. The format is "sort field + sort order (Desc/Asc)". Asc can be omitted. Valid values:
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
   * The status of the instance. Valid values:
   * - `NotRun`: not run.
   * - `Running`: running.
   * - `Failure`: failed.
   * - `Success`: succeeded.
   * - `WaitTime`: waiting for the scheduled time.
   * - `WaitResource`: waiting for resources.
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
   * The list of node IDs. You can use this parameter to query instances of multiple nodes in a batch.
   */
  taskIdsShrink?: string;
  /**
   * @remarks
   * The name of the corresponding node. Fuzzy match is supported.
   * 
   * @example
   * SQL node
   */
  taskName?: string;
  /**
   * @remarks
   * The node type. For the TaskType values of each node, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * ODPS_SQL
   */
  taskType?: string;
  /**
   * @remarks
   * The run mode at the time of triggering. This parameter takes effect only when TriggerType is set to Scheduler. Valid values:
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
   * The trigger type. Valid values:
   * - Scheduler: triggered by periodic scheduling.
   * - Manual: manually triggered.
   * 
   * @example
   * Normal
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
   * - SmokeTest: test.
   * - Manual: manual node.
   * - SupplementData: data backfill.
   * - ManualWorkflow: manual workflow.
   * - Normal: periodic scheduling.
   * - TriggerWorkflow: trigger-based workflow.
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

