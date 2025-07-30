// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckStatusResponseBodyAnalysisJobProgressLogs extends $dara.Model {
  /**
   * @remarks
   * Error message
   * 
   * @example
   * Please modify this object
   */
  errData?: string;
  /**
   * @remarks
   * Error message from DTS when a specific project encounters an error.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: Table \\"customer\\" already exists
   */
  errMsg?: string;
  /**
   * @remarks
   * Error type.
   * 
   * @example
   * ForeignKey
   */
  errType?: string;
  /**
   * @remarks
   * The level of the log.
   * 
   * @example
   * ERROR
   */
  logLevel?: string;
  static names(): { [key: string]: string } {
    return {
      errData: 'ErrData',
      errMsg: 'ErrMsg',
      errType: 'ErrType',
      logLevel: 'LogLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errData: 'string',
      errMsg: 'string',
      errType: 'string',
      logLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgressLogs extends $dara.Model {
  /**
   * @remarks
   * Error record.
   * 
   * @example
   * CREATE TABLE `dtstestdata`.`customer` ****
   */
  errData?: string;
  /**
   * @remarks
   * Specific error message.
   * 
   * @example
   * get metric list fail
   */
  errMsg?: string;
  /**
   * @remarks
   * Type of error.
   * 
   * @example
   * ForeignKey
   */
  errType?: string;
  /**
   * @remarks
   * The level of the log.
   * 
   * @example
   * INFO
   */
  logLevel?: string;
  static names(): { [key: string]: string } {
    return {
      errData: 'ErrData',
      errMsg: 'ErrMsg',
      errType: 'ErrType',
      logLevel: 'LogLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errData: 'string',
      errMsg: 'string',
      errType: 'string',
      logLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribePreCheckStatusResponseBodyFullNetCheckJobStatus extends $dara.Model {
  /**
   * @remarks
   * Task code, **01** represents pre-check.
   * 
   * @example
   * 01
   */
  code?: string;
  /**
   * @remarks
   * ID of the region to which the target network segment belongs.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * Destination network segment.
   * 
   * @example
   * 100.104.XX.XXX/XX
   */
  destRegionCidr?: string;
  /**
   * @remarks
   * The access method of the target instance, with return values as follows: - **ALIYUN**: Access method is **cloud instance**. - **OTHER**: Access method is **public IP**. - **ECS**: Access method is **ECS self-built database**. - **EXPRESS**: Access method is **Express Connect / VPN Gateway / Smart Gateway**. - **CEN**: Access method is **Cloud Enterprise Network (CEN)**. - **DG**: Access method is **Database Gateway (DG)**.
   * 
   * @example
   * CEN
   */
  destinationEndpointType?: string;
  /**
   * @remarks
   * Number of pre-check failed items
   * 
   * @example
   * 0
   */
  errorItem?: number;
  /**
   * @remarks
   * The region ID of the instance\\"s running node.
   * 
   * @example
   * cn-hangzhou
   */
  hostRegion?: string;
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
   * Task name.
   * 
   * @example
   * dts.step.fullnetcheck
   */
  jobName?: string;
  /**
   * @remarks
   * A list of specific items for the task and their execution progress.
   */
  jobProgress?: DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgress[];
  /**
   * @remarks
   * The access method of the source instance, with return values as follows: - **ALIYUN**: Access method is **cloud instance**. - **OTHER**: Access method is **public IP**. - **ECS**: Access method is **ECS self-built database**. - **EXPRESS**: Access method is **dedicated line/VPN gateway/smart gateway**. - **CEN**: Access method is **Cloud Enterprise Network CEN**. - **DG**: Access method is **Database Gateway DG**.
   * 
   * @example
   * CEN
   */
  sourceEndpointType?: string;
  /**
   * @remarks
   * ID of the region to which the source network segment belongs.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * Source network segment.
   * 
   * @example
   * 100.104.XX.XXX/XX
   */
  srcRegionCidr?: string;
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
   * Total number of items in the project.
   * 
   * @example
   * 11
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      destRegion: 'DestRegion',
      destRegionCidr: 'DestRegionCidr',
      destinationEndpointType: 'DestinationEndpointType',
      errorItem: 'ErrorItem',
      hostRegion: 'HostRegion',
      jobId: 'JobId',
      jobName: 'JobName',
      jobProgress: 'JobProgress',
      sourceEndpointType: 'SourceEndpointType',
      srcRegion: 'SrcRegion',
      srcRegionCidr: 'SrcRegionCidr',
      state: 'State',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      destRegion: 'string',
      destRegionCidr: 'string',
      destinationEndpointType: 'string',
      errorItem: 'number',
      hostRegion: 'string',
      jobId: 'string',
      jobName: 'string',
      jobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgress },
      sourceEndpointType: 'string',
      srcRegion: 'string',
      srcRegionCidr: 'string',
      state: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobProgress)) {
      $dara.Model.validateArray(this.jobProgress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodyJobProgressLogs extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * CREATE TABLE `dtstestdata`.`customer` (\\n`runoob_id`  int(10) unsigned   auto_increment  COMMENT \\"\\"   NOT NULL   , \\n`runoob_title`  varchar(100)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NOT NULL   , \\n`runoob_author1216`  varchar(40)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NOT NULL   , \\n`submission_date1216`  date     COMMENT \\"\\"   NULL   \\n, PRIMARY KEY (`runoob_id`)) engine=InnoDB AUTO_INCREMENT=200001 DEFAULT CHARSET=`utf8` DEFAULT COLLATE `utf8_general_ci` ROW_FORMAT= Dynamic comment = \\"\\" ;\\n
   */
  errData?: string;
  /**
   * @remarks
   * The error message that is returned when an error occurs on the subtask.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: Table \\"customer\\" already exists
   */
  errMsg?: string;
  /**
   * @remarks
   * The error type.
   * 
   * @example
   * ForeignKey
   */
  errType?: string;
  /**
   * @remarks
   * The level of logs.
   * 
   * @example
   * ERROR
   */
  logLevel?: string;
  static names(): { [key: string]: string } {
    return {
      errData: 'ErrData',
      errMsg: 'ErrMsg',
      errType: 'ErrType',
      logLevel: 'LogLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errData: 'string',
      errMsg: 'string',
      errType: 'string',
      logLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribePreCheckStatusResponseBodyNetworkDiagnosisResultDiagnosis extends $dara.Model {
  /**
   * @remarks
   * Document address for China region.
   * 
   * @example
   * https://***.ali***.com/document_detail/470447.html
   */
  cnDocUrl?: string;
  /**
   * @remarks
   * Diagnostic code.
   * 
   * @example
   * dts.kunlun.diagnosis.network.express_doc
   */
  code?: string;
  /**
   * @remarks
   * Access point, the return values are: - **source**: source end. - **destination**: destination end. - **unknown**: unknown.
   * 
   * @example
   * source
   */
  endpointType?: string;
  /**
   * @remarks
   * Overseas region document address.
   * 
   * @example
   * https://www.ali***.com/help/en/data-transmission-service/latest/how-to-solve-an-error-when-accessing-a-database-instance-to-dts-using-vpn
   */
  internationalDocUrl?: string;
  /**
   * @remarks
   * Reserved field for diagnostic results, default is empty.
   * 
   * @example
   * none
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      cnDocUrl: 'CnDocUrl',
      code: 'Code',
      endpointType: 'EndpointType',
      internationalDocUrl: 'InternationalDocUrl',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnDocUrl: 'string',
      code: 'string',
      endpointType: 'string',
      internationalDocUrl: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodyNetworkDiagnosisResult extends $dara.Model {
  /**
   * @remarks
   * Network diagnostic report
   */
  diagnosis?: DescribePreCheckStatusResponseBodyNetworkDiagnosisResultDiagnosis[];
  /**
   * @remarks
   * Diagnose model version.
   * 
   * @example
   * network-v0.2
   */
  modelVersion?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosis: 'Diagnosis',
      modelVersion: 'ModelVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosis: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyNetworkDiagnosisResultDiagnosis },
      modelVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnosis)) {
      $dara.Model.validateArray(this.diagnosis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgressLogs extends $dara.Model {
  /**
   * @remarks
   * The record of errors.
   * 
   * @example
   * CREATE TABLE `dtstestdata`.`customer` (\\n`runoob_id` int(10) unsigned auto_increment COMMENT \\"\\" NOT NULL , \\n`runoob_title` varchar(100) CHARSET `utf8` COLLATE `utf8_general_ci` COMMENT \\"\\" NOT NULL , \\n`runoob_author1216` varchar(40) CHARSET `utf8` COLLATE `utf8_general_ci` COMMENT \\"\\" NOT NULL , \\n`submission_date1216` date COMMENT \\"\\" NULL \\n, PRIMARY KEY (`runoob_id`)) engine=InnoDB AUTO_INCREMENT=200001 DEFAULT CHARSET=`utf8` DEFAULT COLLATE `utf8_general_ci` ROW_FORMAT= Dynamic comment = \\"\\" ;\\n
   */
  errData?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * get metric list fail
   */
  errMsg?: string;
  /**
   * @remarks
   * The error type.
   * 
   * @example
   * ForeignKey
   */
  errType?: string;
  /**
   * @remarks
   * The level of logs.
   * 
   * @example
   * INFO
   */
  logLevel?: string;
  static names(): { [key: string]: string } {
    return {
      errData: 'ErrData',
      errMsg: 'ErrMsg',
      errType: 'ErrType',
      logLevel: 'LogLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errData: 'string',
      errMsg: 'string',
      errType: 'string',
      logLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribePreCheckStatusResponseBodySubDistributedJobStatus extends $dara.Model {
  /**
   * @remarks
   * The task code that indicates the type of the subtask. Valid values:
   * 
   * *   **01**: precheck.
   * *   **02**: schema migration or initial schema synchronization.
   * *   **03**: full data migration or initial full data synchronization.
   * *   **04**: incremental data migration or synchronization.
   * 
   * @example
   * 02
   */
  code?: string;
  /**
   * @remarks
   * The number of subtasks that failed.
   * 
   * @example
   * 0
   */
  errorItem?: number;
  /**
   * @remarks
   * The subtask ID.
   * 
   * @example
   * n0gm1682j6563np
   */
  jobId?: string;
  /**
   * @remarks
   * The name of distributed subtasks associated with the subtask.
   * 
   * @example
   * dts.step.struct.load
   */
  jobName?: string;
  /**
   * @remarks
   * The subtasks and the progress of each subtask.
   */
  jobProgress?: DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress[];
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
   * The total number of entries that are returned.
   * 
   * @example
   * 11
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorItem: 'ErrorItem',
      jobId: 'JobId',
      jobName: 'JobName',
      jobProgress: 'JobProgress',
      state: 'State',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorItem: 'number',
      jobId: 'string',
      jobName: 'string',
      jobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress },
      state: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobProgress)) {
      $dara.Model.validateArray(this.jobProgress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Display list of evaluation tasks
   */
  analysisJobProgress?: DescribePreCheckStatusResponseBodyAnalysisJobProgress[];
  /**
   * @remarks
   * The task code that indicates the type of the subtask. Valid values:
   * 
   * *   **01**: precheck.
   * *   **02**: schema migration or initial schema synchronization.
   * *   **03**: full data migration or initial full data synchronization.
   * *   **04**: incremental data migration or synchronization.
   * 
   * @example
   * 01
   */
  code?: string;
  /**
   * @remarks
   * Number of failed evaluation items
   * 
   * @example
   * 0
   */
  errorAnalysisItem?: number;
  /**
   * @remarks
   * The total number of subtask failures.
   * 
   * @example
   * 0
   */
  errorItem?: number;
  /**
   * @remarks
   * Network-wide inspection results.
   */
  fullNetCheckJobStatus?: DescribePreCheckStatusResponseBodyFullNetCheckJobStatus[];
  /**
   * @remarks
   * The status code that is returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the data migration or synchronization task.
   * 
   * @example
   * b4my3zg929a****
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the subtask.
   * 
   * @example
   * dtstest
   */
  jobName?: string;
  /**
   * @remarks
   * The subtasks and the progress of each subtask.
   */
  jobProgress?: DescribePreCheckStatusResponseBodyJobProgress[];
  /**
   * @remarks
   * Network diagnosis result
   */
  networkDiagnosisResult?: DescribePreCheckStatusResponseBodyNetworkDiagnosisResult;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C096FA97-B6BA-4575-899D-61E12B59****
   */
  requestId?: string;
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
   * The information about the distributed subtasks.
   */
  subDistributedJobStatus?: DescribePreCheckStatusResponseBodySubDistributedJobStatus[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of subtasks.
   * 
   * @example
   * 0
   */
  total?: number;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 100
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      analysisJobProgress: 'AnalysisJobProgress',
      code: 'Code',
      errorAnalysisItem: 'ErrorAnalysisItem',
      errorItem: 'ErrorItem',
      fullNetCheckJobStatus: 'FullNetCheckJobStatus',
      httpStatusCode: 'HttpStatusCode',
      jobId: 'JobId',
      jobName: 'JobName',
      jobProgress: 'JobProgress',
      networkDiagnosisResult: 'NetworkDiagnosisResult',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      state: 'State',
      subDistributedJobStatus: 'SubDistributedJobStatus',
      success: 'Success',
      total: 'Total',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyAnalysisJobProgress },
      code: 'string',
      errorAnalysisItem: 'number',
      errorItem: 'number',
      fullNetCheckJobStatus: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyFullNetCheckJobStatus },
      httpStatusCode: 'number',
      jobId: 'string',
      jobName: 'string',
      jobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyJobProgress },
      networkDiagnosisResult: DescribePreCheckStatusResponseBodyNetworkDiagnosisResult,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      state: 'string',
      subDistributedJobStatus: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodySubDistributedJobStatus },
      success: 'boolean',
      total: 'number',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.analysisJobProgress)) {
      $dara.Model.validateArray(this.analysisJobProgress);
    }
    if(Array.isArray(this.fullNetCheckJobStatus)) {
      $dara.Model.validateArray(this.fullNetCheckJobStatus);
    }
    if(Array.isArray(this.jobProgress)) {
      $dara.Model.validateArray(this.jobProgress);
    }
    if(this.networkDiagnosisResult && typeof (this.networkDiagnosisResult as any).validate === 'function') {
      (this.networkDiagnosisResult as any).validate();
    }
    if(Array.isArray(this.subDistributedJobStatus)) {
      $dara.Model.validateArray(this.subDistributedJobStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

