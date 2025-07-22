// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudbenchTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the archiving task.
   * 
   * @example
   * \\"202105211430070112231480820340758****
   */
  archiveJobId?: string;
  /**
   * @remarks
   * The name of the table that was archived to Object Storage Service (OSS).
   * 
   * @example
   * custins15546355_161604665****
   */
  archiveOssTableName?: string;
  /**
   * @remarks
   * The archiving state of the file that stores the analysis result of full SQL statistics. Valid values:
   * 
   * *   **0**: The file archiving is not started.
   * *   **1**: The file is archived.
   * *   **2**: An error occurred.
   * *   **3**: The file is being archived.
   * *   **4**: The archived file does not need to be downloaded.
   * 
   * @example
   * 1
   */
  archiveState?: number;
  /**
   * @remarks
   * The ID of the backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/26273.html) operation to query the ID of the backup set.
   * 
   * @example
   * 229132
   */
  backupId?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   **TIMESTAMP**
   * *   **BACKUPID**
   * 
   * @example
   * TIMESTAMP
   */
  backupType?: string;
  /**
   * @remarks
   * The substep in the stress testing task. Valid values:
   * 
   * *   **NEW**: initializes the stress testing task.
   * *   **WAIT_BUY_ECS**: purchases an ECS instance.
   * *   **WAIT_START_ECS**: starts an ECS instance.
   * *   **WAIT_INSTALL_JDK**: installs the Java Development Kit (JDK).
   * *   **WAIT_INSTALL_DBGATEWAY**: installs the database gateway (DBGateway).
   * *   **ADD_SECURITY_IPS_STEP**: configure a security group whitelist.
   * *   **ARCHIVE**: archives the full SQL statistics.
   * *   **DOWNLOAD**: downloads the file that stores the analysis result of full SQL statistics.
   * *   **PROCEED**: preprocesses the file that stores the analysis result of full SQL statistics.
   * *   **PRE_LOAD**: preloads the file that stores the analysis result of full SQL statistics.
   * *   **VALIDATE**: verifies the functionality of stress testing.
   * *   **PRESSURE**: starts the stress testing task.
   * 
   * @example
   * PROCEED
   */
  benchStep?: string;
  /**
   * @remarks
   * The status that indicates the substep performed on the stress testing task. Valid values:
   * 
   * *   **NEW**: The task is being initialized.
   * *   **RUNNING**: The task is running.
   * *   **FAILED**: The task failed.
   * *   **FINISHED**: The task is complete.
   * *   **Terminated**: The task is terminated.
   * *   **Deleted**: The task is deleted.
   * 
   * @example
   * FINISHED
   */
  benchStepStatus?: string;
  /**
   * @remarks
   * The DBGateway ID of the stress testing client.
   * 
   * @example
   * 58598b2af48a0193dfc16fc6964ef****
   */
  clientGatewayId?: string;
  /**
   * @remarks
   * The type of the stress testing client. Valid values:
   * 
   * *   **ECS**: indicates that you must create the [DBGateway](https://help.aliyun.com/document_detail/64905.html).
   * *   **DAS_ECS**: indicates that DAS automatically purchases and deploys an ECS instance for stress testing.
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
   * The UUID of the destination instance.
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
   * The port number of the destination instance.
   * 
   * @example
   * 3306
   */
  dstPort?: number;
  /**
   * @remarks
   * The type of the identifier that is used to indicate the destination instance. Valid values:
   * 
   * *   **Instance** (default): the instance ID.
   * *   **ConnectionString**: the endpoint of the instance.
   * 
   * @example
   * Instance
   */
  dstType?: string;
  /**
   * @remarks
   * The specification of the DTS task.
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
   * RDS_TO_RDS_MIGRATION
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The state of the DTS task. Valid values:
   * 
   * *   **NOT_STARTED**: The task is not started.
   * *   **PRE_CHECKING**: The task is in precheck.
   * *   **PRE_CHECK_FAILED**: The precheck failed.
   * *   **CHECKING**: The task is being checked.
   * *   **MIGRATING**: The data is being migrated.
   * *   **CATCHED**: The data is migrated from the source instance to the destination instance.
   * *   **SUSPENDING**: The task is suspended.
   * *   **MIGRATION_FAILED**: The data failed to be migrated.
   * *   **FINISHED**: The task is complete.
   * *   **INITIALIZING**: The synchronization is being initialized.
   * *   **INITIALIZE_FAILED**: The synchronization failed to be initialized.
   * *   **SYNCHRONIZING**: The data is being synchronized.
   * *   **MODIFYING**: The objects to be synchronized are being changed.
   * *   **SWITCHING**: The roles of the instances are being switched.
   * *   **FAILED**: The task failed.
   * 
   * @example
   * CHECKING
   */
  dtsJobState?: number;
  /**
   * @remarks
   * The state of the DTS task. Valid values:
   * 
   * *   **NOT_STARTED**: The task is not started.
   * *   **PRE_CHECKING**: The task is in precheck.
   * *   **PRE_CHECK_FAILED**: The precheck failed.
   * *   **CHECKING**: The task is being checked.
   * *   **MIGRATING**: The data is being migrated.
   * *   **CATCHED**: The data is migrated from the source instance to the destination instance.
   * *   **SUSPENDING**: The task is suspended.
   * *   **MIGRATION_FAILED**: The data failed to be migrated.
   * *   **FINISHED**: The task is complete.
   * *   **INITIALIZING**: The synchronization is being initialized.
   * *   **INITIALIZE_FAILED**: The synchronization failed to be initialized.
   * *   **SYNCHRONIZING**: The data is being synchronized.
   * *   **MODIFYING**: The objects to be synchronized are being changed.
   * *   **SWITCHING**: The roles of the instances are being switched.
   * *   **FAILED**: The task failed.
   * 
   * @example
   * PRE_CHECKING
   */
  dtsJobStatus?: string;
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) instance.
   * 
   * @example
   * i-bp1ecr5go2go1****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The state that specifies the last operation that is performed for the stress testing task. Valid values:
   * 
   * *   **WAIT_TARGET**: prepares the destination instance.
   * *   **WAIT_DBGATEWAY**: prepares the DBGateway.
   * *   **WAIT_SQL**: prepares the full SQL statistics.
   * *   **WAIT_LOGIC**: prepares to replay the traffic.
   * 
   * >  When the state of a stress testing task changes to the state that is specified by the EndState parameter, the stress testing task becomes completed.
   * 
   * @example
   * WAIT_LOGIC
   */
  endState?: string;
  /**
   * @remarks
   * The error code returned for the substep of the stress testing task.
   * 
   * @example
   * 10910
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
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
   * The rate at which the stress testing task replayed the traffic. The value is a positive integer. Valid values:**1** to **30**. Default value: **1**.
   * 
   * @example
   * 1
   */
  rate?: number;
  /**
   * @remarks
   * The duration of the stress testing task for which traffic was captured from the source instance.
   * 
   * @example
   * 864000
   */
  requestDuration?: number;
  /**
   * @remarks
   * The duration of the stress testing task for which the traffic was generated on the destination instance. Unit: milliseconds.
   * 
   * @example
   * 86400000
   */
  smartPressureTime?: number;
  /**
   * @remarks
   * The source of the task. Valid values:
   * 
   * *   **DAS**
   * *   **OPEN_API**
   * 
   * @example
   * DAS
   */
  source?: string;
  /**
   * @remarks
   * The reuse information about the analysis result of full SQL statistics.
   * 
   * @example
   * {"sqlUuid":"task_a37d2f07-45cb-****-a2a6-c66c62****","metaUuid":"task_211e2561-5c0c-486b-864c-56b511****","sqlFile":"cl-1620057600000-1800626.sc","metaFile":"cl-1620057600000-180****.meta"}
   */
  sqlCompleteReuse?: string;
  /**
   * @remarks
   * The database type of the source instance. Valid values:
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
   * The state that indicates the operation performed for the stress testing task. Valid values:
   * 
   * *   **WAIT_TARGET**: prepares the destination instance.
   * *   **WAIT_DBGATEWAY**: prepares the DBGateway.
   * *   **WAIT_SQL**: prepares the full SQL statistics.
   * *   **WAIT_LOGIC**: prepares to replay the traffic.
   * 
   * @example
   * WAIT_TARGET
   */
  state?: string;
  /**
   * @remarks
   * The state of the stress testing task. Valid values:
   * 
   * *   **SUCCESS**: The task is successful.
   * *   **IGNORED**: The task is ignored.
   * *   **RUNNING**: The task is running.
   * *   **EXCEPTION**: An error occurred.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The name of the table that is used for stress testing.
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
   * 
   * *   **pressure test** (default): A task of this type replays the traffic that is captured from the source instance on the destination instance at the maximum playback rate that is supported by the destination instance.
   * *   **smart pressure test**: A task of this type analyzes the traffic that is captured from the source instance over a short period of time and generates traffic on the destination instance for continuous stress testing. The business model based on which the traffic is generated on the destination instance and the traffic distribution are consistent with those on the source instance. Stress testing tasks of this type can help you reduce the amount of time that is consumed to collect data from the source instance and reduce storage costs and performance overheads.
   * 
   * @example
   * pressure test
   */
  taskType?: string;
  /**
   * @remarks
   * The topic that contains the consumed data. This topic is a topic in Message Queue for Apache Kafka.
   * 
   * @example
   * das
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 109141182625****
   */
  userId?: string;
  /**
   * @remarks
   * The version of the stress testing task. Valid values:
   * 
   * *   **V2.0**
   * *   **V3.0**
   * 
   * @example
   * V3.0
   */
  version?: string;
  /**
   * @remarks
   * The temporary directory generated for stress testing.
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
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The detailed information, including the error codes and the number of entries that are returned.
   */
  data?: DescribeCloudbenchTaskResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
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

