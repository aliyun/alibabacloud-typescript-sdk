// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   */
  idsShrink?: string;
  /**
   * @remarks
   * The name of the task. Fuzzy match is supported.
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
   * The workspace environment.
   * 
   * Valid values:
   * 
   * *   Prod
   * *   Dev
   * 
   * @example
   * Prod
   */
  projectEnv?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The information about the resource group. Set this parameter to the ID of a resource group for scheduling.
   * 
   * @example
   * S_res_group_524258031846018_1684XXXXXXXXX
   */
  runtimeResource?: string;
  /**
   * @remarks
   * The field that is used to sort tasks. This parameter is configured in the format of "Sorting field Sorting order". You can set the sorting order to Desc or Asc. If you do not specify the sorting order, Asc is used by default. Valid values:
   * 
   * *   `ModifyTime (Desc/Asc)`
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
   * The type of the task. Valid values:
   * 
   * *   ODPS_SQL
   * *   SPARK
   * *   PY_ODPS
   * *   PY_ODPS3
   * *   ODPS_SCRIPT
   * *   ODPS_MR
   * *   COMPONENT_SQL
   * *   EMR_HIVE
   * *   EMR_MR
   * *   EMR_SPARK_SQL
   * *   EMR_SPARK
   * *   EMR_SHELL
   * *   EMR_PRESTO
   * *   EMR_IMPALA
   * *   SPARK_STREAMING
   * *   EMR_KYUUBI
   * *   EMR_TRINO
   * *   HOLOGRES_SQL
   * *   HOLOGRES_SYNC_DDL
   * *   HOLOGRES_SYNC_DATA
   * 
   * @example
   * ODPS_SQL
   */
  taskType?: string;
  /**
   * @remarks
   * The run mode when triggered. Valid only if TriggerType is Scheduler.
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
   * The trigger type.
   * 
   * Valid values:
   * 
   * *   Scheduler: Triggered by schedule.
   * *   Manual: Triggered manually.
   * 
   * @example
   * Scheduler
   */
  triggerType?: string;
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
      idsShrink: 'Ids',
      name: 'Name',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      runtimeResource: 'RuntimeResource',
      sortBy: 'SortBy',
      taskType: 'TaskType',
      triggerRecurrence: 'TriggerRecurrence',
      triggerType: 'TriggerType',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idsShrink: 'string',
      name: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectEnv: 'string',
      projectId: 'number',
      runtimeResource: 'string',
      sortBy: 'string',
      taskType: 'string',
      triggerRecurrence: 'string',
      triggerType: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

