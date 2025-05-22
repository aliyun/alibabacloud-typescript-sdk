// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgressLogs } from "./DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgressLogs";


export class DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgress extends $dara.Model {
  /**
   * @remarks
   * The specific project start time, formatted as <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * 
   * @example
   * 2022-03-30T03:36:11.000+00:00
   */
  bootTime?: string;
  /**
   * @remarks
   * Whether DTS supports skipping a project after it fails. Return values: * **true**: Yes * **false**: No
   * 
   * @example
   * false
   */
  canSkip?: boolean;
  /**
   * @remarks
   * The number of currently running tasks.
   * 
   * @example
   * 0
   */
  current?: string;
  /**
   * @remarks
   * The DDL operation to be executed.
   * 
   * @example
   * CREATE TABLE ****
   */
  ddlSql?: string;
  /**
   * @remarks
   * Task delay time
   * 
   * @example
   * 0
   */
  delaySeconds?: number;
  /**
   * @remarks
   * Name of the database to which the migration objects in the target instance belong.
   * 
   * @example
   * dest
   */
  destSchema?: string;
  /**
   * @remarks
   * This parameter will be deprecated.
   * 
   * @example
   * 1
   */
  diffRow?: number;
  /**
   * @remarks
   * Details of the error when a specific project fails.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ_DETAIL
   */
  errDetail?: string;
  /**
   * @remarks
   * Error message prompt when a specific project encounters an error.
   * 
   * @example
   * ODPS project does not exist odps.`huijin
   */
  errMsg?: string;
  /**
   * @remarks
   * Task completion time, formatted as yyyy-MM-ddTHH:mm:ssZ (UTC time).
   * 
   * @example
   * 2022-03-31T03:36:11.000+00:00
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the record in the metadata database.
   * 
   * @example
   * 922305811766881****
   */
  id?: string;
  /**
   * @remarks
   * Whether to directly ignore this specific item and move to the next one. Return values:
   * - **N**: No. - **Y**: Yes.
   * 
   * @example
   * N
   */
  ignoreFlag?: string;
  /**
   * @remarks
   * Specific project name.
   * 
   * @example
   * CHECK_CONN_SRC
   */
  item?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * l3m1213ye7l****
   */
  jobId?: string;
  /**
   * @remarks
   * Error execution log information.
   */
  logs?: DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgressLogs[];
  /**
   * @remarks
   * Specific project name.
   * 
   * @example
   * CHECK_CONN_SRC_DETAIL
   */
  names?: string;
  /**
   * @remarks
   * Project number.
   * 
   * @example
   * 1
   */
  orderNum?: number;
  /**
   * @remarks
   * This parameter will be deprecated.
   * 
   * @example
   * demo
   */
  parentObj?: string;
  /**
   * @remarks
   * The corresponding remediation method when the pre-check fails.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ_REPAIR
   */
  repairMethod?: string;
  /**
   * @remarks
   * After this specific item fails, do you set to skip this item. Return values: * **true**: Yes * **false**: No
   * 
   * @example
   * false
   */
  skip?: boolean;
  /**
   * @remarks
   * Name of the database to which the migration objects in the source instance belong.
   * 
   * @example
   * dtstestdata
   */
  sourceSchema?: string;
  /**
   * @remarks
   * Check result, the return value is: - **Failed**: Failure. - **Success**: Completed.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * Progress of sub-projects under a specific project. > If it returns <b>[]</b>, it indicates there are no sub-projects.
   * 
   * @example
   * []
   */
  sub?: string;
  /**
   * @remarks
   * Name of the target object
   * 
   * @example
   * order
   */
  targetNames?: string;
  /**
   * @remarks
   * The total number of projects.
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
      logs: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgressLogs },
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

