// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus } from "./DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus";
import { DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus } from "./DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus";
import { DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint } from "./DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint";
import { DescribeDtsJobsResponseBodyDtsJobListReverseJobErrorDetails } from "./DescribeDtsJobsResponseBodyDtsJobListReverseJobErrorDetails";
import { DescribeDtsJobsResponseBodyDtsJobListReverseJobFullDataCheckStatus } from "./DescribeDtsJobsResponseBodyDtsJobListReverseJobFullDataCheckStatus";
import { DescribeDtsJobsResponseBodyDtsJobListReverseJobIncDataCheckStatus } from "./DescribeDtsJobsResponseBodyDtsJobListReverseJobIncDataCheckStatus";
import { DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode } from "./DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode";
import { DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance } from "./DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance";
import { DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus } from "./DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus";
import { DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint } from "./DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint";
import { DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureDataCheckStatus } from "./DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureDataCheckStatus";
import { DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus } from "./DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus";


export class DescribeDtsJobsResponseBodyDtsJobListReverseJob extends $dara.Model {
  /**
   * @remarks
   * The start offset of incremental data synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1616980369
   */
  checkpoint?: string;
  /**
   * @remarks
   * The CPU utilization of the instance. Unit: percentage.
   * 
   * @example
   * 90
   */
  cpuUsage?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The state of initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus;
  /**
   * @remarks
   * The state of incremental data synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus;
  /**
   * @remarks
   * The schema of the objects that you want to synchronize. The value is a JSON string and can contain regular expressions. For more information, see Objects of DTS tasks.
   * 
   * @example
   * {"dtstestdata": { "name": "dtstestdata", "all": true }}
   */
  dbObject?: string;
  /**
   * @remarks
   * The ID of the DTS dedicated cluster on which a DTS task runs.
   * 
   * @example
   * dtscluster_dpwl3**********
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The latency of incremental data synchronization. Unit: seconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The connection settings of the destination instance.
   */
  destinationEndpoint?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint;
  /**
   * @remarks
   * The ID of the data synchronization instance.
   * 
   * @example
   * dtsi03e3zty16i****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The instance class. 
   * 
   * > For more information about the test performance of each instance class, see [Specifications of data synchronization instances](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * large
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. **Reverse** is returned.
   * 
   * @example
   * Reverse
   */
  dtsJobDirection?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * i03e3zty16i****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the data synchronization task.
   * 
   * @example
   * RDS_TO_RDS_MIGRATION
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The number of DUs that have been used.
   * 
   * @example
   * 15
   */
  duUsage?: number;
  /**
   * @remarks
   * The error message returned.
   */
  errorDetails?: DescribeDtsJobsResponseBodyDtsJobListReverseJobErrorDetails[];
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
   * The checkpoint of the ETL task.
   * 
   * @example
   * 1610540493
   */
  etlSafeCheckpoint?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC. 
   * 
   * > This parameter is returned only if the returned value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2023-03-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The state information about the full data verification task.
   */
  fullDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobFullDataCheckStatus;
  /**
   * @remarks
   * The state information about the incremental data verification task.
   */
  incDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobIncDataCheckStatus;
  /**
   * @remarks
   * Upper limit of DU.
   * 
   * > Only supported by Serverless instances.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The memory that has been used. Unit: MB.
   * 
   * @example
   * 500
   */
  memUsage?: string;
  /**
   * @remarks
   * The initial synchronization types.
   */
  migrationMode?: DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode;
  /**
   * @remarks
   * Lower limit of DU.
   * 
   * > Only supported by Serverless instances.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The billing method of the DTS instance. Valid values:
   * 
   * - **PrePaid**: subscription
   * - **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance of the data synchronization instance.
   */
  performance?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance;
  /**
   * @remarks
   * The precheck state.
   */
  precheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, for example, whether to automatically start a precheck. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint;
  /**
   * @remarks
   * The state of the DTS instance. For more information about the valid values, see the description of the request parameter **Status**.
   * 
   * @example
   * Synchronizing
   */
  status?: string;
  structureDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureDataCheckStatus;
  /**
   * @remarks
   * The state of initial schema synchronization.
   */
  structureInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      cpuUsage: 'CpuUsage',
      createTime: 'CreateTime',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      dbObject: 'DbObject',
      dedicatedClusterId: 'DedicatedClusterId',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      duUsage: 'DuUsage',
      errorDetails: 'ErrorDetails',
      errorMessage: 'ErrorMessage',
      etlSafeCheckpoint: 'EtlSafeCheckpoint',
      expireTime: 'ExpireTime',
      fullDataCheckStatus: 'FullDataCheckStatus',
      incDataCheckStatus: 'IncDataCheckStatus',
      maxDu: 'MaxDu',
      memUsage: 'MemUsage',
      migrationMode: 'MigrationMode',
      minDu: 'MinDu',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureDataCheckStatus: 'StructureDataCheckStatus',
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      cpuUsage: 'string',
      createTime: 'string',
      dataInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus,
      dbObject: 'string',
      dedicatedClusterId: 'string',
      delay: 'number',
      destinationEndpoint: DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      duUsage: 'number',
      errorDetails: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListReverseJobErrorDetails },
      errorMessage: 'string',
      etlSafeCheckpoint: 'string',
      expireTime: 'string',
      fullDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobFullDataCheckStatus,
      incDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobIncDataCheckStatus,
      maxDu: 'number',
      memUsage: 'string',
      migrationMode: DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode,
      minDu: 'number',
      payType: 'string',
      performance: DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance,
      precheckStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus,
      reserved: 'string',
      sourceEndpoint: DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint,
      status: 'string',
      structureDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureDataCheckStatus,
      structureInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus,
    };
  }

  validate() {
    if(this.dataInitializationStatus && typeof (this.dataInitializationStatus as any).validate === 'function') {
      (this.dataInitializationStatus as any).validate();
    }
    if(this.dataSynchronizationStatus && typeof (this.dataSynchronizationStatus as any).validate === 'function') {
      (this.dataSynchronizationStatus as any).validate();
    }
    if(this.destinationEndpoint && typeof (this.destinationEndpoint as any).validate === 'function') {
      (this.destinationEndpoint as any).validate();
    }
    if(Array.isArray(this.errorDetails)) {
      $dara.Model.validateArray(this.errorDetails);
    }
    if(this.fullDataCheckStatus && typeof (this.fullDataCheckStatus as any).validate === 'function') {
      (this.fullDataCheckStatus as any).validate();
    }
    if(this.incDataCheckStatus && typeof (this.incDataCheckStatus as any).validate === 'function') {
      (this.incDataCheckStatus as any).validate();
    }
    if(this.migrationMode && typeof (this.migrationMode as any).validate === 'function') {
      (this.migrationMode as any).validate();
    }
    if(this.performance && typeof (this.performance as any).validate === 'function') {
      (this.performance as any).validate();
    }
    if(this.precheckStatus && typeof (this.precheckStatus as any).validate === 'function') {
      (this.precheckStatus as any).validate();
    }
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    if(this.structureDataCheckStatus && typeof (this.structureDataCheckStatus as any).validate === 'function') {
      (this.structureDataCheckStatus as any).validate();
    }
    if(this.structureInitializationStatus && typeof (this.structureInitializationStatus as any).validate === 'function') {
      (this.structureInitializationStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

