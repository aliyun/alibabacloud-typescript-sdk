// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePreCheckStatusResponseBodyJobProgressLogs } from "./DescribePreCheckStatusResponseBodyJobProgressLogs";


export class DescribePreCheckStatusResponseBodyJobProgress extends $dara.Model {
  /**
   * @remarks
   * The time when the subtask was started. The time is displayed in the yyyy-MM-ddTHH:mm:ssZ format in UTC.
   * 
   * @example
   * 2021-03-16T08:01:31.000+00:00
   */
  bootTime?: string;
  /**
   * @remarks
   * Indicates whether the subtask can be ignored if it fails.
   * 
   * @example
   * true
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
   * CREATE TABLE `dtstestdata`.`order` (\\n`orderid`  int(11)     COMMENT \\"\\"   NOT NULL   , \\n`username`  char(32)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NULL   , \\n`ordertime`  datetime     COMMENT \\"\\"   NULL   , \\n`commodity`  varchar(32)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NULL   , \\n`phonenumber`  int(11)     COMMENT \\"\\"   NULL   , \\n`address`  text  CHARSET `utf8mb4` COLLATE `utf8mb4_general_ci`    COMMENT \\"\\"   NULL   \\n, PRIMARY KEY (`orderid`)) engine=InnoDB DEFAULT CHARSET=`gbk` DEFAULT COLLATE `gbk_chinese_ci` ROW_FORMAT= Dynamic comment = \\"\\" ;\\n
   */
  ddlSql?: string;
  /**
   * @remarks
   * The latency of incremental data migration or synchronization.
   * 
   * > If you query data migration tasks, the unit of this parameter is milliseconds. If you query data synchronization tasks, the unit of this parameter is seconds.
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
   * dtstestdata_new
   */
  destSchema?: string;
  /**
   * @remarks
   * This parameter will be removed in the future.
   * 
   * @example
   * 1
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
   * CHECK__ERROR_SAME_OBJ
   */
  errMsg?: string;
  /**
   * @remarks
   * The time when the subtask was complete. The time is displayed in the yyyy-MM-ddTHH:mm:ssZ format in UTC.
   * 
   * @example
   * 2021-03-16T08:01:34.000+00:00
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the entry in the metadatabase.
   * 
   * @example
   * 5632
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
   * The shortened name of the subtask.
   * 
   * @example
   * CHECK_CONN_DEST
   */
  item?: string;
  /**
   * @remarks
   * The subtask ID.
   * 
   * @example
   * fj1c33ro168****
   */
  jobId?: string;
  /**
   * @remarks
   * The logs of subtask failures.
   */
  logs?: DescribePreCheckStatusResponseBodyJobProgressLogs[];
  /**
   * @remarks
   * The name of the subtask.
   * 
   * @example
   * CHECK_CONN_DEST_DETAIL
   */
  names?: string;
  /**
   * @remarks
   * The serial number of the subtask.
   * 
   * @example
   * 10
   */
  orderNum?: number;
  /**
   * @remarks
   * This parameter will be removed in the future.
   * 
   * @example
   * demo
   */
  parentObj?: string;
  /**
   * @remarks
   * The method to fix the subtask failure.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ_REPAIR
   */
  repairMethod?: string;
  /**
   * @remarks
   * Indicates whether the subtask is ignored if it fails. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  skip?: boolean;
  /**
   * @remarks
   * The name of the database to which the object in the source instance belongs.
   * 
   * @example
   * dtstestdata
   */
  sourceSchema?: string;
  /**
   * @remarks
   * The status of the subtask. Valid values:
   * 
   * *   **NotStarted**: The subtask is not started.
   * *   **Checking**: The subtask is being checked.
   * *   **Migrating**: The subtask is in progress. Data is being migrated.
   * *   **Failed**: The subtask failed.
   * *   **Warning**: The subtask encounters an exception.
   * *   **Success**: The subtask is complete.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The sub-item progress of the subtask.
   * 
   * > If \\*\\*[]\\*\\* is returned, the subtask has no sub-items.
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
   * The total number of sub-items of the subtask.
   * 
   * @example
   * 1
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
      logs: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyJobProgressLogs },
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

