// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The data timestamp. The value of this parameter is 00:00:00 of the day before the scheduling time of the instance. The value is a UNIX timestamp. Unit: milliseconds. Example: 1743350400000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1710239005403
   */
  bizdate?: number;
  /**
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
   * The ID of the instance. The instance may be rerun. If the instance is rerun and you configure this parameter, the system returns the historical information of the instance, including the rerun information. You can use the RunNumber parameter to distinguish each entry in the historical information.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The IDs of the instances. You can query multiple instances at a time by instance ID.
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
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
  projectEnv?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The information about the resource group. Set this parameter to the identifier of a resource group for scheduling.
   * 
   * @example
   * S_res_group_524258031846018_1684XXXXXXXXX
   */
  runtimeResource?: string;
  /**
   * @remarks
   * The field used for sorting. Fields such as TriggerTime and StartedTime are supported. The value of this parameter is in the Sort field + Sort by (Desc/Asc) format. By default, results are sorted in ascending order. Valid values:
   * 
   * *   `TriggerTime (Desc/Asc)`
   * 
   * *   `StartedTime (Desc/Asc)`
   * 
   * *   `FinishedTime (Desc/Asc)`
   * 
   * *   `CreateTime (Desc/Asc)`
   * 
   * *   `Id (Desc/Asc)`
   * 
   *     Default value: `Id Desc`.
   * 
   * @example
   * Id Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The status of the task instance.
   * 
   * *   `NotRun`: Not started
   * *   `Running`
   * *   `Failure`
   * *   `Success`
   * *   `WaitTime`: Awaiting scheduled time
   * *   `WaitResource`: Awaiting resources
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
   * The IDs of the tasks. You can query multiple instances at a time by task ID.
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
   * The type of the task for which the instance is generated.
   * 
   * @example
   * ODPS_SQL
   */
  taskType?: string;
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
   * The trigger type. Valid values:
   * 
   * *   Scheduler: scheduling cycle-based trigger
   * *   Manual: manual trigger
   * 
   * @example
   * Normal
   */
  triggerType?: string;
  /**
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
   * *   SmokeTest: Testing
   * *   Manual: Manually triggered node
   * *   SupplementData: Data backfill
   * *   ManualWorkflow: Manually triggered workflow
   * *   Normal: Scheduled execution
   * *   TriggerWorkflow: Triggered Workflow
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

