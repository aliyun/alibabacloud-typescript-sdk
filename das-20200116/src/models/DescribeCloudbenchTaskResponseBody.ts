// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudbenchTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The archiving task ID.
   * 
   * @example
   * \\"202105211430070112231480820340758****
   */
  archiveJobId?: string;
  /**
   * @remarks
   * The name of the archived OSS table.
   * 
   * @example
   * custins15546355_161604665****
   */
  archiveOssTableName?: string;
  /**
   * @remarks
   * The SQL archiving state. Valid values:
   * 
   * - **0**: not started.
   * - **1**: completed.
   * - **2**: error.
   * - **3**: running.
   * - **4**: no download required.
   * 
   * @example
   * 1
   */
  archiveState?: number;
  /**
   * @remarks
   * The backup set ID. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/26273.html) operation to obtain the backup set ID.
   * 
   * @example
   * 229132
   */
  backupId?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * - **TIMESTAMP**: by backup time.
   * - **BACKUPID**: by backup set ID.
   * 
   * @example
   * TIMESTAMP
   */
  backupType?: string;
  /**
   * @remarks
   * The substep of the stress testing task. Valid values:
   * 
   * - **NEW**: task initialization.
   * - **WAIT_BUY_ECS**: purchasing an ECS instance.
   * - **WAIT_START_ECS**: starting the ECS instance.
   * - **WAIT_INSTALL_JDK**: installing JDK.
   * - **WAIT_INSTALL_DBGATEWAY**: installing DBGateway.
   * - **ADD_SECURITY_IPS_STEP**: configuring the security group whitelist.
   * - **ARCHIVE**: archiving full SQL.
   * - **DOWNLOAD**: downloading the full SQL file.
   * - **PROCEED**: preprocessing the full SQL file.
   * - **PRE_LOAD**: preloading the full SQL file.
   * - **VALIDATE**: functional verification.
   * - **PRESSURE**: performance stress testing.
   * 
   * @example
   * PROCEED
   */
  benchStep?: string;
  /**
   * @remarks
   * The status of the stress testing substep. Valid values:
   * 
   * - **NEW**: task initialization.
   * - **RUNNING**: running.
   * - **FAILED**: failed.
   * - **FINISHED**: completed.
   * - **Terminated**: terminated.
   * - **Deleted**: deleted.
   * 
   * @example
   * FINISHED
   */
  benchStepStatus?: string;
  /**
   * @remarks
   * The database gateway ID of the stress testing machine.
   * 
   * @example
   * 58598b2af48a0193dfc16fc6964ef****
   */
  clientGatewayId?: string;
  /**
   * @remarks
   * The type of the stress testing machine. Valid values:
   * 
   * - **ECS**: You need to prepare the [Database Gateway](https://help.aliyun.com/document_detail/64905.html) on your own.
   * - **DAS_ECS**: an ECS instance automatically purchased and deployed by DAS.
   * 
   * @example
   * ECS
   */
  clientType?: string;
  /**
   * @remarks
   * The description of the stress testing task.
   * 
   * @example
   * test-das-bench-0501
   */
  description?: string;
  /**
   * @remarks
   * The unique identity of the target instance.
   * 
   * @example
   * hdm_d887b5ccf99fa0dc9a1e5aaac368****
   */
  dstInstanceUuid?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  dstIp?: string;
  /**
   * @remarks
   * The port of the target instance.
   * 
   * @example
   * 3306
   */
  dstPort?: number;
  /**
   * @remarks
   * The type of the target instance. Valid values:
   * - **Instance** (default): instance ID.
   * - **ConnectionString**: endpoint of the instance.
   * 
   * @example
   * Instance
   */
  dstType?: string;
  /**
   * @remarks
   * The DTS task specification.
   * 
   * @example
   * medium
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The ID of the DTS migration task.
   * 
   * @example
   * i03e3zty16i****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the Data Transmission Service (DTS) task.
   * 
   * @example
   * Migration between RDS instances
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The DTS task state. Valid values:
   * 
   * - **NOT_STARTED**: not started.
   * - **PRE_CHECKING**: precheck in progress.
   * - **PRE_CHECK_FAILED**: precheck failed.
   * - **CHECKING**: checking.
   * - **MIGRATING**: migrating.
   * - **CATCHED**: caught up.
   * - **SUSPENDING**: suspending.
   * - **MIGRATION_FAILED**: migration failed.
   * - **FINISHED**: completed.
   * - **INITIALIZING**: synchronization initializing.
   * - **INITIALIZE_FAILED**: synchronization initialization failed.
   * - **SYNCHRONIZING**: synchronizing.
   * - **MODIFYING**: modifying synchronization objects.
   * - **SWITCHING**: switching.
   * - **FAILED**: failed.
   * 
   * @example
   * CHECKING
   */
  dtsJobState?: number;
  /**
   * @remarks
   * The DTS task state. Valid values:
   * 
   * - **NOT_STARTED**: not started.
   * - **PRE_CHECKING**: precheck in progress.
   * - **PRE_CHECK_FAILED**: precheck failed.
   * - **CHECKING**: checking.
   * - **MIGRATING**: migrating.
   * - **CATCHED**: caught up.
   * - **SUSPENDING**: suspending.
   * - **MIGRATION_FAILED**: migration failed.
   * - **FINISHED**: completed.
   * - **INITIALIZING**: synchronization initializing.
   * - **INITIALIZE_FAILED**: synchronization initialization failed.
   * - **SYNCHRONIZING**: synchronizing.
   * - **MODIFYING**: modifying synchronization objects.
   * - **SWITCHING**: switching.
   * - **FAILED**: failed.
   * 
   * @example
   * PRE_CHECKING
   */
  dtsJobStatus?: string;
  /**
   * @remarks
   * The ECS instance ID.
   * 
   * @example
   * i-bp1ecr5go2go1****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The state after the stress testing task ends. Valid values:
   * 
   * - **WAIT_TARGET**: preparing the target instance for stress testing.
   * - **WAIT_DBGATEWAY**: preparing the stress testing deployment.
   * - **WAIT_SQL**: preparing full SQL.
   * - **WAIT_LOGIC**: preparing to start traffic replay.
   * 
   * >After the stress testing task executes the state specified by EndState, the task directly reaches the completed state.
   * 
   * @example
   * WAIT_LOGIC
   */
  endState?: string;
  /**
   * @remarks
   * The error code returned by the internal stress testing task.
   * 
   * @example
   * 10910
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the task fails.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * Null
   */
  external?: string;
  /**
   * @remarks
   * The stress testing rate multiplier. The replay rate must be a positive integer. Valid values: **0** to **30**. Default value: **1**.
   * 
   * @example
   * 1
   */
  rate?: number;
  /**
   * @remarks
   * The duration of the stress testing task.
   * 
   * @example
   * 864000
   */
  requestDuration?: number;
  /**
   * @remarks
   * The generated stress testing duration. Unit: milliseconds.
   * 
   * @example
   * 86400000
   */
  smartPressureTime?: number;
  /**
   * @remarks
   * The task source. Valid values:
   * 
   * - **DAS**.
   * - **OPEN_API**.
   * 
   * @example
   * DAS
   */
  source?: string;
  /**
   * @remarks
   * The reuse information of the full SQL.
   * 
   * @example
   * {"sqlUuid":"task_a37d2f07-45cb-****-a2a6-c66c62****","metaUuid":"task_211e2561-5c0c-486b-864c-56b511****","sqlFile":"cl-1620057600000-1800626.sc","metaFile":"cl-1620057600000-180****.meta"}
   */
  sqlCompleteReuse?: string;
  /**
   * @remarks
   * The database type of the source instance.
   * 
   * @example
   * RDS
   */
  srcInstanceArea?: string;
  /**
   * @remarks
   * The UUID of the source instance.
   * 
   * @example
   * a364e414-e68b-4e5c-9166-65b3a153****
   */
  srcInstanceUuid?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  srcPublicIp?: string;
  /**
   * @remarks
   * The current state of the stress testing task. Valid values:
   * 
   * - **WAIT_TARGET**: preparing the target instance for stress testing.
   * - **WAIT_DBGATEWAY**: preparing the stress testing deployment.
   * - **WAIT_SQL**: preparing full SQL.
   * - **WAIT_LOGIC**: preparing to start traffic replay.
   * 
   * @example
   * WAIT_TARGET
   */
  state?: string;
  /**
   * @remarks
   * The running status of the stress testing task. Valid values:
   * 
   * - **SUCCESS**: successful.
   * - **IGNORED**: ignored.
   * - **RUNNING**: running.
   * - **EXCEPTION**: abnormal.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The table names involved in the stress testing task.
   * 
   * @example
   * [{"TABLE_NAME":"customer1","TABLE_SCHEMA":"tpcc"}]
   */
  tableSchema?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * e5cec704-0518-430f-8263-76f4dcds****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the stress testing task. Valid values:
   * - **pressure test** (default): intelligent stress testing. The traffic captured from the target instance is replayed on the destination instance at the maximum speed supported by the destination instance specifications.
   * - **smart pressure test**: generated stress testing. By analyzing and learning the traffic captured from the target instance within a short period of time, traffic that is consistent with the business model and traffic distribution of the original traffic is generated for continuous stress testing. This reduces the time required to collect data from the target instance and lowers storage costs and performance overhead.
   * 
   * @example
   * pressure test
   */
  taskType?: string;
  /**
   * @remarks
   * The Kafka consumption topic.
   * 
   * @example
   * das
   */
  topic?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 109141182625****
   */
  userId?: string;
  /**
   * @remarks
   * The version of the stress testing task. Valid values:
   * 
   * - **V2.0**
   * - **V3.0**
   * 
   * @example
   * V3.0
   */
  version?: string;
  /**
   * @remarks
   * The temporary directory generated by the stress testing task.
   * 
   * @example
   * /tmp/bench/
   */
  workDir?: string;
  static names(): { [key: string]: string } {
    return {
      archiveJobId: 'ArchiveJobId',
      archiveOssTableName: 'ArchiveOssTableName',
      archiveState: 'ArchiveState',
      backupId: 'BackupId',
      backupType: 'BackupType',
      benchStep: 'BenchStep',
      benchStepStatus: 'BenchStepStatus',
      clientGatewayId: 'ClientGatewayId',
      clientType: 'ClientType',
      description: 'Description',
      dstInstanceUuid: 'DstInstanceUuid',
      dstIp: 'DstIp',
      dstPort: 'DstPort',
      dstType: 'DstType',
      dtsJobClass: 'DtsJobClass',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      dtsJobState: 'DtsJobState',
      dtsJobStatus: 'DtsJobStatus',
      ecsInstanceId: 'EcsInstanceId',
      endState: 'EndState',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      external: 'External',
      rate: 'Rate',
      requestDuration: 'RequestDuration',
      smartPressureTime: 'SmartPressureTime',
      source: 'Source',
      sqlCompleteReuse: 'SqlCompleteReuse',
      srcInstanceArea: 'SrcInstanceArea',
      srcInstanceUuid: 'SrcInstanceUuid',
      srcPublicIp: 'SrcPublicIp',
      state: 'State',
      status: 'Status',
      tableSchema: 'TableSchema',
      taskId: 'TaskId',
      taskType: 'TaskType',
      topic: 'Topic',
      userId: 'UserId',
      version: 'Version',
      workDir: 'WorkDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveJobId: 'string',
      archiveOssTableName: 'string',
      archiveState: 'number',
      backupId: 'string',
      backupType: 'string',
      benchStep: 'string',
      benchStepStatus: 'string',
      clientGatewayId: 'string',
      clientType: 'string',
      description: 'string',
      dstInstanceUuid: 'string',
      dstIp: 'string',
      dstPort: 'number',
      dstType: 'string',
      dtsJobClass: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      dtsJobState: 'number',
      dtsJobStatus: 'string',
      ecsInstanceId: 'string',
      endState: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      external: 'string',
      rate: 'number',
      requestDuration: 'number',
      smartPressureTime: 'number',
      source: 'string',
      sqlCompleteReuse: 'string',
      srcInstanceArea: 'string',
      srcInstanceUuid: 'string',
      srcPublicIp: 'string',
      state: 'string',
      status: 'string',
      tableSchema: 'string',
      taskId: 'string',
      taskType: 'string',
      topic: 'string',
      userId: 'string',
      version: 'string',
      workDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudbenchTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The detailed information, including the total number of entries and error codes.
   */
  data?: DescribeCloudbenchTaskResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * >If the request is successful, **Successful** is returned. If the request fails, an error message is returned, such as an error code.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeCloudbenchTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

