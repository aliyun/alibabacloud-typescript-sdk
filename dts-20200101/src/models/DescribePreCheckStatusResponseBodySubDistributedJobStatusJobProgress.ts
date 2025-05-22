// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgressLogs } from "./DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgressLogs";


export class DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress extends $dara.Model {
  /**
   * @remarks
   * The time when the subtask was started. The time is displayed in the *yyyy-MM-dd*T*HH:mm:ss*Z format in UTC.
   * 
   * @example
   * 2022-03-30T03:36:11.000+00:00
   */
  bootTime?: string;
  /**
   * @remarks
   * Indicates whether the subtask can be ignored if it fails. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  canSkip?: boolean;
  /**
   * @remarks
   * The number of the subtasks that are running.
   * 
   * @example
   * 0
   */
  current?: string;
  /**
   * @remarks
   * The DDL statements.
   * 
   * @example
   * None
   */
  ddlSql?: string;
  /**
   * @remarks
   * The latency of incremental data migration or synchronization.
   * 
   * @example
   * 0
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The name of the database to which the object in the destination instance belongs.
   * 
   * @example
   * databasetest
   */
  destSchema?: string;
  /**
   * @remarks
   * This parameter will be removed in the future.
   * 
   * @example
   * None
   */
  diffRow?: number;
  /**
   * @remarks
   * The error details of the subtask failure.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ_DETAIL
   */
  errDetail?: string;
  /**
   * @remarks
   * The error message of the subtask failure.
   * 
   * @example
   * ODPS project does not exist odps.`huijin
   */
  errMsg?: string;
  /**
   * @remarks
   * The time when the subtask was complete. The time is displayed in the *yyyy-MM-dd*T*HH:mm:ss*Z format in UTC.
   * 
   * @example
   * 2022-03-31T03:36:11.000+00:00
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the entry in the metadatabase.
   * 
   * @example
   * 3890
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether DTS ignores the subtask and proceeds with the next subtask. Valid values:
   * 
   * *   **N**: no.
   * *   **Y**: yes.
   * 
   * @example
   * N
   */
  ignoreFlag?: string;
  /**
   * @remarks
   * The name of the subtask.
   * 
   * @example
   * login_common_time
   */
  item?: string;
  /**
   * @remarks
   * The subtask ID.
   * 
   * @example
   * l3m1213ye7l****
   */
  jobId?: string;
  /**
   * @remarks
   * The operations logs of errors.
   */
  logs?: DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgressLogs[];
  /**
   * @remarks
   * The name of the subtask.
   * 
   * @example
   * metricRuleTargets-20180308houe
   */
  names?: string;
  /**
   * @remarks
   * The serial number of the subtask.
   * 
   * @example
   * 1
   */
  orderNum?: number;
  /**
   * @remarks
   * This parameter will be removed in the future.
   * 
   * @example
   * None
   */
  parentObj?: string;
  /**
   * @remarks
   * The method to fix a precheck failure.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ_REPAIR
   */
  repairMethod?: string;
  /**
   * @remarks
   * Indicates whether the subtask was ignored. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * True
   */
  skip?: boolean;
  /**
   * @remarks
   * The name of the database to which the object in the source instance belongs.
   * 
   * @example
   * databasetest
   */
  sourceSchema?: string;
  /**
   * @remarks
   * The status of the subtask. Valid values:
   * 
   * *   **NotStarted**: The subtask is not started.
   * *   **Suspending**: The subtask is paused.
   * *   **Checking**: The subtask is being checked.
   * *   **Migrating**: The subtask is in progress. Data is being migrated.
   * *   **Failed**: The subtask failed.
   * *   **Catched**: The subtask is in progress. Incremental data is being migrated or synchronized.
   * *   **Finished**: The subtask is complete.
   * 
   * @example
   * Finished
   */
  state?: string;
  /**
   * @remarks
   * The sub-item progress of the subtask.
   * 
   * > If \\*\\*[]\\*\\* is returned, the subtask has no sub-item.
   * 
   * @example
   * []
   */
  sub?: string;
  /**
   * @remarks
   * The names of the objects that are migrated or synchronized.
   * 
   * @example
   * order
   */
  targetNames?: string;
  /**
   * @remarks
   * The total number of subtasks.
   * 
   * @example
   * 11
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      bootTime: 'BootTime',
      canSkip: 'CanSkip',
      current: 'Current',
      ddlSql: 'DdlSql',
      delaySeconds: 'DelaySeconds',
      destSchema: 'DestSchema',
      diffRow: 'DiffRow',
      errDetail: 'ErrDetail',
      errMsg: 'ErrMsg',
      finishTime: 'FinishTime',
      id: 'Id',
      ignoreFlag: 'IgnoreFlag',
      item: 'Item',
      jobId: 'JobId',
      logs: 'Logs',
      names: 'Names',
      orderNum: 'OrderNum',
      parentObj: 'ParentObj',
      repairMethod: 'RepairMethod',
      skip: 'Skip',
      sourceSchema: 'SourceSchema',
      state: 'State',
      sub: 'Sub',
      targetNames: 'TargetNames',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootTime: 'string',
      canSkip: 'boolean',
      current: 'string',
      ddlSql: 'string',
      delaySeconds: 'number',
      destSchema: 'string',
      diffRow: 'number',
      errDetail: 'string',
      errMsg: 'string',
      finishTime: 'string',
      id: 'string',
      ignoreFlag: 'string',
      item: 'string',
      jobId: 'string',
      logs: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgressLogs },
      names: 'string',
      orderNum: 'number',
      parentObj: 'string',
      repairMethod: 'string',
      skip: 'boolean',
      sourceSchema: 'string',
      state: 'string',
      sub: 'string',
      targetNames: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

