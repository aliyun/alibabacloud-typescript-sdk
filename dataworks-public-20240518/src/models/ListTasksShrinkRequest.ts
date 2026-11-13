// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of task IDs. You can query multiple tasks at a time by specifying task IDs.
   */
  idsShrink?: string;
  /**
   * @remarks
   * The name. Fuzzy match is supported.
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
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 1000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The project environment.
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
   * The sort field. You can sort by fields such as modification time and creation time. The format is "Sort field + Sort order (Desc/Asc)". Asc can be omitted. Valid values for the sort field:
   * 
   * - `ModifyTime (Desc/Asc)`
   * - `CreateTime (Desc/Asc)`
   * - `Id (Desc/Asc)`
   * 
   * Default value: `Id Desc`.
   * 
   * @example
   * Id Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The task type. Examples:
   * 
   * - ODPS_SQL
   * - SPARK
   * - PY_ODPS
   * - PY_ODPS3
   * - ODPS_SCRIPT
   * - ODPS_MR
   * - COMPONENT_SQL
   * - EMR_HIVE
   * - EMR_MR
   * - EMR_SPARK_SQL
   * - EMR_SPARK
   * - EMR_SHELL
   * - EMR_PRESTO
   * - EMR_IMPALA
   * - SPARK_STREAMING
   * - EMR_KYUUBI
   * - EMR_TRINO
   * - HOLOGRES_SQL
   * - HOLOGRES_SYNC_DDL
   * - HOLOGRES_SYNC_DATA
   * 
   * @example
   * ODPS_SQL
   */
  taskType?: string;
  /**
   * @remarks
   * The running mode upon triggering. This parameter takes effect only when TriggerType is set to Scheduler.
   * 
   * @example
   * Normal
   */
  triggerRecurrence?: string;
  /**
   * @remarks
   * The trigger type.
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

