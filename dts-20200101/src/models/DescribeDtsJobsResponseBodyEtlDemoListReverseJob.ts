// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataInitializationStatus } from "./DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataInitializationStatus";
import { DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataSynchronizationStatus } from "./DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataSynchronizationStatus";
import { DescribeDtsJobsResponseBodyEtlDemoListReverseJobDestinationEndpoint } from "./DescribeDtsJobsResponseBodyEtlDemoListReverseJobDestinationEndpoint";
import { DescribeDtsJobsResponseBodyEtlDemoListReverseJobMigrationMode } from "./DescribeDtsJobsResponseBodyEtlDemoListReverseJobMigrationMode";
import { DescribeDtsJobsResponseBodyEtlDemoListReverseJobPerformance } from "./DescribeDtsJobsResponseBodyEtlDemoListReverseJobPerformance";
import { DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatus } from "./DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatus";
import { DescribeDtsJobsResponseBodyEtlDemoListReverseJobSourceEndpoint } from "./DescribeDtsJobsResponseBodyEtlDemoListReverseJobSourceEndpoint";
import { DescribeDtsJobsResponseBodyEtlDemoListReverseJobStructureInitializationStatus } from "./DescribeDtsJobsResponseBodyEtlDemoListReverseJobStructureInitializationStatus";


export class DescribeDtsJobsResponseBodyEtlDemoListReverseJob extends $dara.Model {
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
   * The time when the task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-16T08:01:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The state of initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataInitializationStatus;
  /**
   * @remarks
   * The state of incremental data synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataSynchronizationStatus;
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
  destinationEndpoint?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDestinationEndpoint;
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
   * The time when the instance expires. The time follows the ISO 8601 standard in the* yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC. 
   * 
   * > This parameter is returned only if the returned value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The migration types or initial synchronization types.
   */
  migrationMode?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobMigrationMode;
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
   * The performance of the data migration or synchronization instance.
   */
  performance?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPerformance;
  /**
   * @remarks
   * The precheck state.
   */
  precheckStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatus;
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
  sourceEndpoint?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobSourceEndpoint;
  /**
   * @remarks
   * The state of the DTS instance. For more information about the valid values, see the description of the request parameter **Status**.
   * 
   * @example
   * Synchronizing
   */
  status?: string;
  /**
   * @remarks
   * The state of initial schema synchronization.
   */
  structureInitializationStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobStructureInitializationStatus;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      createTime: 'CreateTime',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      dbObject: 'DbObject',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      errorMessage: 'ErrorMessage',
      etlSafeCheckpoint: 'EtlSafeCheckpoint',
      expireTime: 'ExpireTime',
      migrationMode: 'MigrationMode',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      createTime: 'string',
      dataInitializationStatus: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataSynchronizationStatus,
      dbObject: 'string',
      delay: 'number',
      destinationEndpoint: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      errorMessage: 'string',
      etlSafeCheckpoint: 'string',
      expireTime: 'string',
      migrationMode: DescribeDtsJobsResponseBodyEtlDemoListReverseJobMigrationMode,
      payType: 'string',
      performance: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPerformance,
      precheckStatus: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatus,
      reserved: 'string',
      sourceEndpoint: DescribeDtsJobsResponseBodyEtlDemoListReverseJobSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobsResponseBodyEtlDemoListReverseJobStructureInitializationStatus,
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
    if(this.structureInitializationStatus && typeof (this.structureInitializationStatus as any).validate === 'function') {
      (this.structureInitializationStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

