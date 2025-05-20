// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudBenchTasksResponseBodyDataListCloudbenchTasks extends $dara.Model {
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
   * The name of the table that was archived to Object Storage Service (OSS).
   * 
   * @example
   * custins15546355_161604665****
   */
  archiveOssTableName?: string;
  /**
   * @remarks
   * The archiving status of the file that stores the analysis result of full SQL statistics. Valid values:
   * 
   * * **0**: The file archiving is not started.
   * * **1**: The file is archived.
   * * **2**: An error occurred.
   * * **3**: The file is being archived.
   * * **4**: The archived file does not need to be downloaded.
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
   * * **TIMESTAMP**: Data is restored to the state at a specific point in time.
   * * **BACKUPID**: Data is restored from a backup set that is identified by an ID.
   * 
   * @example
   * TIMESTAMP
   */
  backupType?: string;
  /**
   * @remarks
   * The substep in the stress testing task. Valid values:
   * 
   * * **NEW**: Initialize the stress testing task.
   * * **WAIT_BUY_ECS**: Purchase an ECS instance.
   * * **WAIT_START_ECS**: Start the ECS instance.
   * * **WAIT_INSTALL_JDK**: Install the Java Development Kit (JDK).
   * * **WAIT_INSTALL_DBGATEWAY**: Install the database gateway (DBGateway).
   * * **ADD_SECURITY_IPS_STEP**: Configure the whitelist of the security group.
   * * **ARCHIVE**: Archive the file that stores the analysis results of full SQL statistics.
   * * **DOWNLOAD**: Download the file that stores the analysis result of full SQL statistics.
   * * **PROCEED**: Preprocess the file that stores the analysis result of full SQL statistics.
   * * **PRE_LOAD**: Preload the file that stores the analysis result of full SQL statistics.
   * * **VALIDATE**: Verify the functionality of stress testing.
   * * **PRESSURE**: Start the stress testing task.
   * 
   * @example
   * PROCEED
   */
  benchStep?: string;
  /**
   * @remarks
   * The status that indicates the substep performed for the stress testing task. Valid values:
   * 
   * * **NEW**: The task is being initialized.
   * * **RUNNING**: The task is running.
   * * **FAILED**: The task failed.
   * * **FINISHED**: The task is complete.
   * * **Terminated**: The task is terminated.
   * * **Deleted**: The task is deleted.
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
   * * **ECS**: indicates that you must prepare the DBGateway.
   * * **DAS_ECS**: indicates that DAS automatically purchases and deploys an ECS instance for stress testing.
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
   * * **Instance** (default): the instance ID.
   * * **ConnectionString**: the endpoint of the instance.
   * 
   * @example
   * Instance
   */
  dstType?: string;
  /**
   * @remarks
   * The specification of the DTS instance.
   * 
   * > For more information about the specifications of DTS instances and the test performance of each instance, see [Specifications of data migration instances](https://help.aliyun.com/document_detail/26606.html).
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
   * The name of the Data Transmission Service (DTS) migration task.
   * 
   * @example
   * RDS_TO_RDS_MIGRATION
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The status of the DTS migration task. Valid values:
   * 
   * * **NOT_STARTED**: The task is not started.
   * * **PRE_CHECKING**: The task is in precheck.
   * * **PRE_CHECK_FAILED**: The precheck failed.
   * * **CHECKING**: The task is being checked.
   * * **MIGRATING**: The data is being migrated.
   * * **CATCHED**: The data is migrated from the source instance to the destination instance.
   * * **SUSPENDING**: The task is suspended.
   * * **MIGRATION_FAILED**: The data failed to be migrated.
   * * **FINISHED**: The task is complete.
   * * **INITIALIZING**: The synchronization is being initialized.
   * * **INITIALIZE_FAILED**: The synchronization failed to be initialized.
   * * **SYNCHRONIZING**: The data is being synchronized.
   * * **MODIFYING**: The roles of the instances are being changed.
   * * **SWITCHING**: The roles of the instances are being switched.
   * * **FAILED**: The task failed.
   * 
   * @example
   * CHECKING
   */
  dtsJobState?: number;
  /**
   * @remarks
   * The status of the DTS migration task. Valid values:
   * 
   * * **NOT_STARTED**: The task is not started.
   * * **PRE_CHECKING**: The task is in precheck.
   * * **PRE_CHECK_FAILED**: The precheck failed.
   * * **CHECKING**: The task is being checked.
   * * **MIGRATING**: The data is being migrated.
   * * **CATCHED**: The data is migrated from the source instance to the destination instance.
   * * **SUSPENDING**: The task is suspended.
   * * **MIGRATION_FAILED**: The data failed to be migrated.
   * * **FINISHED**: The task is complete.
   * * **INITIALIZING**: The synchronization is being initialized.
   * * **INITIALIZE_FAILED**: The synchronization failed to be initialized.
   * * **SYNCHRONIZING**: The data is being synchronized.
   * * **MODIFYING**: The roles of the instances are being changed.
   * * **SWITCHING**: The roles of the instances are being switched.
   * * **FAILED**: The task failed.
   * 
   * @example
   * PRE_CHECK_FAILED
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
   * The state that indicates the last operation performed for the stress testing task. Valid values:
   * 
   * * **WAIT_TARGET**: prepares the destination instance.
   * * **WAIT_DBGATEWAY**: prepares the DBGateway.
   * * **WAIT_SQL**: prepares the full SQL statistics.
   * * **WAIT_LOGIC**: prepares to replay the traffic.
   * 
   * > When the state of a stress testing task changes to the state that is specified by the EndState parameter, the stress testing task is complete.
   * 
   * @example
   * WAIT_TARGET
   */
  endState?: string;
  /**
   * @remarks
   * The error code returned for the substep of the stress testing task.
   * 
   * @example
   * 10109
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the task failed.
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
   * The rate at which the stress testing task replayed the traffic. This value is a positive integer. Valid values: **0** to **30**. Default value: **1**.
   * 
   * @example
   * 1
   */
  rate?: number;
  /**
   * @remarks
   * The duration of the stress testing task. Unit: millisecond.
   * 
   * @example
   * 86400000
   */
  requestDuration?: number;
  /**
   * @remarks
   * The duration of the stress testing task of the smart pressure test type. Unit: millisecond.
   * 
   * @example
   * 86400000
   */
  smartPressureTime?: number;
  /**
   * @remarks
   * The source of the task. Valid values:
   * 
   * * **DAS**
   * * **OPEN_API**
   * 
   * @example
   * DAS
   */
  source?: string;
  /**
   * @remarks
   * The reused information about the analysis result of full SQL statistics.
   * 
   * @example
   * {"sqlUuid":"task_a37d2f07-45cb-4413-a2a6-c66c68****","metaUuid":"task_211e2561-5c0c-486b-864c-56b511****","sqlFile":"cl-1620057600000-1800626.sc","metaFile":"cl-1620057600000-1800626.meta"}
   */
  sqlCompleteReuse?: string;
  /**
   * @remarks
   * The database engine of the source instance. Valid values:
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
   * hdm_3063db6792965c080a4bcb6e6304****
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
   * * **WAIT_TARGET**: prepares the destination instance.
   * * **WAIT_DBGATEWAY**: prepares the DBGateway.
   * * **WAIT_SQL**: prepares the full SQL statistics.
   * * **WAIT_LOGIC**: prepares to replay the traffic.
   * 
   * @example
   * WAIT_TARGET
   */
  state?: string;
  /**
   * @remarks
   * The status of the stress testing task. Valid values:
   * 
   * * **SUCCESS**: The task was successful.
   * * **IGNORED**: The task was ignored.
   * * **RUNNING**: The task is running.
   * * **EXCEPTION**: The task is abnormal.
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
   * * **pressure test** (default): A task of this type replays the traffic that is captured from the source instance on the destination instance at the maximum playback rate that is supported by the destination instance.
   * * **smart pressure test**: A task of this type analyzes the traffic that is captured from the source instance over a short period of time and generates traffic on the destination instance for continuous stress testing. The business model based on which the traffic is generated on the destination instance and the traffic distribution are consistent with those on the source instance. Stress testing tasks of this type can help you reduce the amount of time that is consumed to collect data from the source instance and reduce storage costs and performance overheads.
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
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1091411816252****
   */
  userId?: string;
  /**
   * @remarks
   * The version of the stress testing task. Valid values:
   * 
   * * **V2.0**
   * * **V3.0**
   * 
   * @example
   * V3.0
   */
  version?: string;
  /**
   * @remarks
   * The path of the temporary directory that is generated for stress testing.
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

