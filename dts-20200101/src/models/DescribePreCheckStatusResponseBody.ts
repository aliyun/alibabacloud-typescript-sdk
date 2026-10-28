// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckStatusResponseBodyAnalysisJobProgressLogs extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Modify the object
   */
  errData?: string;
  /**
   * @remarks
   * The DTS error message when the specific item fails.
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
   * The log level.
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
   * The start time of the specific item, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2022-03-16T08:01:31.000+00:00
   */
  bootTime?: string;
  /**
   * @remarks
   * Indicates whether the sub-item can be skipped.
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
   * The executed DDL operation.
   * 
   * @example
   * CREATE TABLE ****
   */
  ddlSql?: string;
  /**
   * @remarks
   * The task latency.
   * 
   * @example
   * 0
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The name of the database to which the migrated object belongs in the destination instance.
   * 
   * @example
   * dest
   */
  destSchema?: string;
  /**
   * @remarks
   * This parameter will be deprecated soon.
   * 
   * @example
   * 1
   */
  diffRow?: number;
  /**
   * @remarks
   * The error details when the item fails.
   * 
   * @example
   * ANALYSIS_MYSQL
   */
  errDetail?: string;
  /**
   * @remarks
   * The specific error message.
   * 
   * @example
   * ANALYSIS_
   */
  errMsg?: string;
  /**
   * @remarks
   * The end time of the evaluation task, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2022-03-16T08:01:31.000+00:00
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the evaluation item in the database.
   * 
   * @example
   * 123123
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the specific item is directly ignored to proceed to the next specific item. Valid values:
   * - **N**: No.
   * - **Y**: Yes.
   * 
   * @example
   * N
   */
  ignoreFlag?: string;
  /**
   * @remarks
   * The name of the evaluation item.
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
   * The sub-evaluation items.
   */
  logs?: DescribePreCheckStatusResponseBodyAnalysisJobProgressLogs[];
  /**
   * @remarks
   * The name of the evaluation item.
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
   * This parameter will be deprecated soon.
   * 
   * @example
   * demo
   */
  parentObj?: string;
  /**
   * @remarks
   * The solution for the evaluation item.
   * 
   * @example
   * ANALYSIS_
   */
  repairMethod?: string;
  /**
   * @remarks
   * Indicates whether the evaluation item is configured to be skipped after it fails. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  skip?: boolean;
  /**
   * @remarks
   * The name of the database to which the migrated object belongs in the source instance.
   * 
   * @example
   * dtstestdata
   */
  sourceSchema?: string;
  /**
   * @remarks
   * The result of the evaluation item. Valid values:
   * - **Failed**: Failed.
   * - **Success**: Successful.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The progress of the sub-items of the specific item.
   * > If <b>[]</b> is returned, no sub-items exist.
   * 
   * @example
   * []
   */
  sub?: string;
  /**
   * @remarks
   * The names of the destination objects.
   * 
   * @example
   * testTable
   */
  targetNames?: string;
  /**
   * @remarks
   * The total number of specific items for the subtask.
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
   * The error record.
   * 
   * @example
   * CREATE TABLE `dtstestdata`.`customer` ****
   */
  errData?: string;
  /**
   * @remarks
   * The specific error message.
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
   * The log level.
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
   * The start time of the specific item, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2022-03-30T03:36:11.000+00:00
   */
  bootTime?: string;
  /**
   * @remarks
   * Indicates whether DTS supports skipping the item after it fails. Valid values:
   * * **true**: Yes.
   * * **false**: No.
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
   * The executed DDL operation.
   * 
   * @example
   * CREATE TABLE ****
   */
  ddlSql?: string;
  /**
   * @remarks
   * The task latency.
   * 
   * @example
   * 0
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The name of the database to which the migrated object belongs in the destination instance.
   * 
   * @example
   * dest
   */
  destSchema?: string;
  /**
   * @remarks
   * This parameter will be deprecated soon.
   * 
   * @example
   * 1
   */
  diffRow?: number;
  /**
   * @remarks
   * The error details when the specific item fails.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ_DETAIL
   */
  errDetail?: string;
  /**
   * @remarks
   * The error message when the specific item fails.
   * 
   * @example
   * ODPS project does not exist odps.`huijin
   */
  errMsg?: string;
  /**
   * @remarks
   * The task completion time. The time follows the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-31T03:36:11.000+00:00
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the record in the metadatabase.
   * 
   * @example
   * 922305811766881****
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the specific item is directly ignored to proceed to the next specific item. Valid values:
   * - **N**: No.
   * - **Y**: Yes.
   * 
   * @example
   * N
   */
  ignoreFlag?: string;
  /**
   * @remarks
   * The name of the specific item.
   * 
   * @example
   * CHECK_CONN_SRC
   */
  item?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * l3m1213ye7l****
   */
  jobId?: string;
  /**
   * @remarks
   * The execution log information for errors.
   */
  logs?: DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgressLogs[];
  /**
   * @remarks
   * The name of the specific item.
   * 
   * @example
   * CHECK_CONN_SRC_DETAIL
   */
  names?: string;
  /**
   * @remarks
   * The item number.
   * 
   * @example
   * 1
   */
  orderNum?: number;
  /**
   * @remarks
   * This parameter will be deprecated soon.
   * 
   * @example
   * demo
   */
  parentObj?: string;
  /**
   * @remarks
   * The solution to a precheck failure.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ_REPAIR
   */
  repairMethod?: string;
  /**
   * @remarks
   * Indicates whether the specific item is configured to be skipped after it fails. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  skip?: boolean;
  /**
   * @remarks
   * The name of the database to which the migrated object belongs in the source instance.
   * 
   * @example
   * dtstestdata
   */
  sourceSchema?: string;
  /**
   * @remarks
   * The check result. Valid values:
   * - **Failed**: The check failed.
   * - **Success**: The check succeeded.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The progress of the sub-items of the specific item.
   * > If <b>[]</b> is returned, no sub-items exist.
   * 
   * @example
   * []
   */
  sub?: string;
  /**
   * @remarks
   * The names of the destination objects.
   * 
   * @example
   * order
   */
  targetNames?: string;
  /**
   * @remarks
   * The total number of items.
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
   * The task code. A value of **01** indicates a precheck.
   * 
   * @example
   * 01
   */
  code?: string;
  /**
   * @remarks
   * The region ID of the destination CIDR block.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * @example
   * 100.104.XX.XXX/XX
   */
  destRegionCidr?: string;
  /**
   * @remarks
   * The connection method of the destination instance. Valid values:
   * - **ALIYUN**: Alibaba Cloud instance.
   * - **OTHER**: Public IP address.
   * - **ECS**: Self-managed database hosted on ECS.
   * - **EXPRESS**: Express Connect circuit, VPN gateway, or Smart Access Gateway.
   * - **CEN**: Cloud Enterprise Network (CEN).
   * - **DG**: Database Gateway.
   * 
   * @example
   * CEN
   */
  destinationEndpointType?: string;
  /**
   * @remarks
   * The number of items that failed the precheck.
   * 
   * @example
   * 0
   */
  errorItem?: number;
  /**
   * @remarks
   * The region ID of the node where the instance runs.
   * 
   * @example
   * cn-hangzhou
   */
  hostRegion?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * l3m1213ye7l****
   */
  jobId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * dts.step.fullnetcheck
   */
  jobName?: string;
  /**
   * @remarks
   * The list of specific items and the execution progress of each item for the task.
   */
  jobProgress?: DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgress[];
  /**
   * @remarks
   * The connection method of the source instance. Valid values:
   * - **ALIYUN**: Alibaba Cloud instance.
   * - **OTHER**: Public IP address.
   * - **ECS**: Self-managed database hosted on ECS.
   * - **EXPRESS**: Express Connect circuit, VPN gateway, or Smart Access Gateway.
   * - **CEN**: Cloud Enterprise Network (CEN).
   * - **DG**: Database Gateway.
   * 
   * @example
   * CEN
   */
  sourceEndpointType?: string;
  /**
   * @remarks
   * The region ID of the source CIDR block.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 100.104.XX.XXX/XX
   */
  srcRegionCidr?: string;
  /**
   * @remarks
   * The check result. Valid values:
   * - **Failed**: The check failed.
   * - **Success**: The check succeeded.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The total number of items.
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
   * The DTS error message when the specific item fails.
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
   * The log level.
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
   * The start time of the specific item, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2022-03-16T08:01:31.000+00:00
   */
  bootTime?: string;
  /**
   * @remarks
   * Indicates whether DTS supports skipping the specific item after it fails.
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
   * The executed DDL operation.
   * 
   * @example
   * CREATE TABLE `dtstestdata`.`order` (\\n`orderid`  int(11)     COMMENT \\"\\"   NOT NULL   , \\n`username`  char(32)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NULL   , \\n`ordertime`  datetime     COMMENT \\"\\"   NULL   , \\n`commodity`  varchar(32)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NULL   , \\n`phonenumber`  int(11)     COMMENT \\"\\"   NULL   , \\n`address`  text  CHARSET `utf8mb4` COLLATE `utf8mb4_general_ci`    COMMENT \\"\\"   NULL   \\n, PRIMARY KEY (`orderid`)) engine=InnoDB DEFAULT CHARSET=`gbk` DEFAULT COLLATE `gbk_chinese_ci` ROW_FORMAT= Dynamic comment = \\"\\" ;\\n
   */
  ddlSql?: string;
  /**
   * @remarks
   * The incremental migration or synchronization latency.
   * 
   * @example
   * 0
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The name of the database to which the migrated object belongs in the destination instance.
   * 
   * @example
   * dtstestdata_new
   */
  destSchema?: string;
  /**
   * @remarks
   * This parameter will be deprecated soon.
   * 
   * @example
   * 1
   */
  diffRow?: number;
  /**
   * @remarks
   * The error details when the specific item fails.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ_DETAIL
   */
  errDetail?: string;
  /**
   * @remarks
   * The error message when the specific item fails.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ
   */
  errMsg?: string;
  /**
   * @remarks
   * The completion time of the specific item, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>ZZ format (UTC).
   * 
   * @example
   * 2022-03-16T08:01:34.000+00:00
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID recorded in the metadatabase.
   * 
   * @example
   * 5632
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the specific item is directly ignored to proceed to the next specific item. Valid values:
   * - **N**: No.
   * - **Y**: Yes.
   * 
   * @example
   * N
   */
  ignoreFlag?: string;
  /**
   * @remarks
   * The short name of the specific item.
   * 
   * @example
   * CHECK_CONN_DEST
   */
  item?: string;
  /**
   * @remarks
   * The ID of the subtask.
   * 
   * @example
   * fj1c33ro168****
   */
  jobId?: string;
  /**
   * @remarks
   * The execution logs of the specific error.
   */
  logs?: DescribePreCheckStatusResponseBodyJobProgressLogs[];
  /**
   * @remarks
   * The name of the specific item.
   * 
   * @example
   * CHECK_CONN_DEST_DETAIL
   */
  names?: string;
  /**
   * @remarks
   * The item number.
   * 
   * @example
   * 10
   */
  orderNum?: number;
  /**
   * @remarks
   * This parameter will be deprecated soon.
   * 
   * @example
   * demo
   */
  parentObj?: string;
  /**
   * @remarks
   * The solution if the specific item fails.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ_REPAIR
   */
  repairMethod?: string;
  /**
   * @remarks
   * Indicates whether the specific item is configured to be skipped after it fails. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  skip?: boolean;
  /**
   * @remarks
   * The name of the database to which the migrated object belongs in the source instance.
   * 
   * @example
   * dtstestdata
   */
  sourceSchema?: string;
  /**
   * @remarks
   * The execution progress status of the specific item. Valid values:
   * - **NotStarted**: Not started.
   * - **Checking**: Checking.
   * - **Migrating**: Migrating.
   * - **Failed**: Failed.
   * - **Warning**: Warning.
   * - **Success**: Successful.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The progress of the sub-items of the specific item.
   * > If <b>[]</b> is returned, no sub-items exist.
   * 
   * @example
   * []
   */
  sub?: string;
  /**
   * @remarks
   * The names of the objects to be migrated or synchronized.
   * 
   * @example
   * order
   */
  targetNames?: string;
  /**
   * @remarks
   * The total number of specific items for the subtask.
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
   * The documentation URL for the China site.
   * 
   * @example
   * https://***.ali***.com/document_detail/470447.html
   */
  cnDocUrl?: string;
  /**
   * @remarks
   * The diagnosis code.
   * 
   * @example
   * dts.kunlun.diagnosis.network.express_doc
   */
  code?: string;
  /**
   * @remarks
   * The endpoint type. Valid values:
   * - **source**: The source endpoint.
   * - **destination**: The destination endpoint.
   * - **unknown**: Unknown.
   * 
   * @example
   * source
   */
  endpointType?: string;
  /**
   * @remarks
   * The documentation URL for regions outside China.
   * 
   * @example
   * https://www.ali***.com/help/en/data-transmission-service/latest/how-to-solve-an-error-when-accessing-a-database-instance-to-dts-using-vpn
   */
  internationalDocUrl?: string;
  /**
   * @remarks
   * The reserved field for the diagnosis result. Default value: empty.
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
   * The network diagnostic report.
   */
  diagnosis?: DescribePreCheckStatusResponseBodyNetworkDiagnosisResultDiagnosis[];
  /**
   * @remarks
   * The version of the diagnosis model.
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
   * The error record.
   * 
   * @example
   * CREATE TABLE `dtstestdata`.`customer` (\\n`runoob_id` int(10) unsigned auto_increment COMMENT \\"\\" NOT NULL , \\n`runoob_title` varchar(100) CHARSET `utf8` COLLATE `utf8_general_ci` COMMENT \\"\\" NOT NULL , \\n`runoob_author1216` varchar(40) CHARSET `utf8` COLLATE `utf8_general_ci` COMMENT \\"\\" NOT NULL , \\n`submission_date1216` date COMMENT \\"\\" NULL \\n, PRIMARY KEY (`runoob_id`)) engine=InnoDB AUTO_INCREMENT=200001 DEFAULT CHARSET=`utf8` DEFAULT COLLATE `utf8_general_ci` ROW_FORMAT= Dynamic comment = \\"\\" ;\\n
   */
  errData?: string;
  /**
   * @remarks
   * The specific error message.
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
   * The log level.
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
   * The start time of the specific item, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2022-03-30T03:36:11.000+00:00
   */
  bootTime?: string;
  /**
   * @remarks
   * Indicates whether DTS supports skipping the item after it fails. Valid values:
   * * **true**: Yes.
   * * **false**: No.
   * 
   * @example
   * false
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
   * The executed DDL operation.
   * 
   * @example
   * None
   */
  ddlSql?: string;
  /**
   * @remarks
   * The incremental data migration or synchronization latency.
   * 
   * @example
   * 0
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The name of the database to which the migrated object belongs in the destination instance.
   * 
   * @example
   * databasetest
   */
  destSchema?: string;
  /**
   * @remarks
   * This parameter will be deprecated soon.
   * 
   * @example
   * None
   */
  diffRow?: number;
  /**
   * @remarks
   * The error details when the specific item fails.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ_DETAIL
   */
  errDetail?: string;
  /**
   * @remarks
   * The error message when the specific item fails.
   * 
   * @example
   * ODPS project does not exist odps.`huijin
   */
  errMsg?: string;
  /**
   * @remarks
   * The completion time. The time follows the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-31T03:36:11.000+00:00
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the record in the metadatabase.
   * 
   * @example
   * 3890****
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the specific item is directly ignored to proceed to the next specific item. Valid values:
   * - **N**: No.
   * - **Y**: Yes.
   * 
   * @example
   * N
   */
  ignoreFlag?: string;
  /**
   * @remarks
   * The name of the specific item.
   * 
   * @example
   * login_common_time
   */
  item?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * l3m1213ye7l****
   */
  jobId?: string;
  /**
   * @remarks
   * The execution log information for errors.
   */
  logs?: DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgressLogs[];
  /**
   * @remarks
   * The name of the specific item.
   * 
   * @example
   * metricRuleTargets-20180308houe
   */
  names?: string;
  /**
   * @remarks
   * The item number.
   * 
   * @example
   * 1
   */
  orderNum?: number;
  /**
   * @remarks
   * This parameter will be deprecated soon.
   * 
   * @example
   * None
   */
  parentObj?: string;
  /**
   * @remarks
   * The solution to a precheck failure.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ_REPAIR
   */
  repairMethod?: string;
  /**
   * @remarks
   * Indicates whether the task is skipped. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  skip?: boolean;
  /**
   * @remarks
   * The name of the database to which the migrated object belongs in the source instance.
   * 
   * @example
   * databasetest
   */
  sourceSchema?: string;
  /**
   * @remarks
   * The execution status of the subtask. Valid values:
   * - **NotStarted**: Not started.
   * - **Suspending**: Suspending.
   * - **Checking**: Checking.
   * - **Migrating**: Migrating.
   * - **Failed**: Failed.
   * - **Catched**: Incremental migration or synchronization in progress.
   * - **Finished**: Finished.
   * 
   * @example
   * Finished
   */
  state?: string;
  /**
   * @remarks
   * The progress of the sub-items of the specific item.
   * > If <b>[]</b> is returned, no sub-items exist.
   * 
   * @example
   * []
   */
  sub?: string;
  /**
   * @remarks
   * The names of the destination objects.
   * 
   * @example
   * order
   */
  targetNames?: string;
  /**
   * @remarks
   * The total number of items.
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
   * The task code, which indicates the type of the queried subtask. Valid values:
   * 
   * - **01**: Precheck.
   * - **02**: Schema migration or initial schema synchronization.
   * - **03**: Full data migration or initial full data synchronization.
   * - **04**: Incremental data migration or incremental data synchronization.
   * 
   * @example
   * 02
   */
  code?: string;
  /**
   * @remarks
   * The number of failed tasks.
   * 
   * @example
   * 0
   */
  errorItem?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * n0gm1682j6563np
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the distributed subtask associated with the task.
   * 
   * @example
   * dts.step.struct.load
   */
  jobName?: string;
  /**
   * @remarks
   * The list of specific items and the execution progress of each item for the subtask.
   */
  jobProgress?: DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgress[];
  /**
   * @remarks
   * The execution status of the subtask. Valid values:
   * - **NotStarted**: Not started.
   * - **Suspending**: Suspending.
   * - **Checking**: Checking.
   * - **Migrating**: Migrating.
   * - **Failed**: Failed.
   * - **Catched**: Incremental migration or synchronization in progress.
   * - **Finished**: Finished.
   * 
   * @example
   * Finished
   */
  state?: string;
  /**
   * @remarks
   * The total number of returned records.
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
   * The list of evaluation tasks.
   */
  analysisJobProgress?: DescribePreCheckStatusResponseBodyAnalysisJobProgress[];
  /**
   * @remarks
   * The task code, which represents the queried subtask. Valid values:
   * - **01**: Precheck.
   * - **02**: Schema migration or initialization.
   * - **03**: Full data migration or initialization.
   * - **04**: Incremental migration or synchronization.
   * 
   * @example
   * 01
   */
  code?: string;
  /**
   * @remarks
   * The number of items that failed the evaluation.
   * 
   * @example
   * 0
   */
  errorAnalysisItem?: number;
  /**
   * @remarks
   * The number of specific items that caused the subtask to fail.
   * 
   * @example
   * 0
   */
  errorItem?: number;
  /**
   * @remarks
   * The check result for all CIDR blocks.
   */
  fullNetCheckJobStatus?: DescribePreCheckStatusResponseBodyFullNetCheckJobStatus[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the migration or synchronization task.
   * 
   * @example
   * b4my3zg929a****
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the queried subtask.
   * 
   * @example
   * Precheck
   */
  jobName?: string;
  /**
   * @remarks
   * The list of specific items and the execution progress of each item for the subtask.
   */
  jobProgress?: DescribePreCheckStatusResponseBodyJobProgress[];
  /**
   * @remarks
   * The network diagnosis result.
   */
  networkDiagnosisResult?: DescribePreCheckStatusResponseBodyNetworkDiagnosisResult;
  /**
   * @remarks
   * The page number. Valid values: an integer greater than **0** and less than or equal to the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of records that can be displayed on the current page.
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
   * The execution status of the subtask. Valid values:
   * - **NotStarted**: Not started.
   * - **Suspending**: Suspending.
   * - **Checking**: Checking.
   * - **Migrating**: Migrating.
   * - **Failed**: Failed.
   * - **Catched**: Incremental migration or synchronization in progress.
   * - **Finished**: Finished.
   * 
   * @example
   * Finished
   */
  state?: string;
  /**
   * @remarks
   * The details of the distributed subtask.
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
   * The total number of records.
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

