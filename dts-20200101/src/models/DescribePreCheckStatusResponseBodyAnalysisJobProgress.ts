// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePreCheckStatusResponseBodyAnalysisJobProgressLogs } from "./DescribePreCheckStatusResponseBodyAnalysisJobProgressLogs";


export class DescribePreCheckStatusResponseBodyAnalysisJobProgress extends $dara.Model {
  /**
   * @remarks
   * The specific project start time, formatted as <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * 
   * @example
   * 2022-03-16T08:01:31.000+00:00
   */
  bootTime?: string;
  /**
   * @remarks
   * Whether to support skipping this sub-item.
   * 
   * @example
   * true
   */
  canSkip?: boolean;
  /**
   * @remarks
   * The number of currently running subtasks.
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
   * Error details when the project encounters an error.
   * 
   * @example
   * ANALYSIS_MYSQL
   */
  errDetail?: string;
  /**
   * @remarks
   * Specific error message.
   * 
   * @example
   * ANALYSIS_
   */
  errMsg?: string;
  /**
   * @remarks
   * The end time of the evaluation task, formatted as <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * 
   * @example
   * 2022-03-16T08:01:31.000+00:00
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of this evaluation item in the database.
   * 
   * @example
   * 123123
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
   * Name of the evaluation item
   * 
   * @example
   * ANALYSIS_MYSQL_4_ITEM
   */
  item?: string;
  /**
   * @remarks
   * The ID of the evaluation task.
   * 
   * @example
   * 11234234xc
   */
  jobId?: string;
  /**
   * @remarks
   * Sub-assessment item.
   */
  logs?: DescribePreCheckStatusResponseBodyAnalysisJobProgressLogs[];
  /**
   * @remarks
   * Name of the evaluation item
   * 
   * @example
   * ANALYSIS_MYSQL_4_DETAIL
   */
  names?: string;
  /**
   * @remarks
   * The number of the evaluation item.
   * 
   * @example
   * 10
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
   * Remediation method for the evaluation item.
   * 
   * @example
   * ANALYSIS_
   */
  repairMethod?: string;
  /**
   * @remarks
   * If this evaluation item fails, whether you set to skip this item. Return values: * **true**: Yes * **false**: No
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
   * The result of the evaluation, with return values being: - **Failed**: Failure. - **Success**: Success.
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
   * testTable
   */
  targetNames?: string;
  /**
   * @remarks
   * The total number of specific items in the sub-task.
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
      logs: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyAnalysisJobProgressLogs },
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

