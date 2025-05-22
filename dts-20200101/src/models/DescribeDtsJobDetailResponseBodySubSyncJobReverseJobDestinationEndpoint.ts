// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The name of the database to which the objects are migrated in the destination instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The database engine of the destination instance.
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The destination instance ID.
   * 
   * @example
   * rm-bp1f9guj5rhzq****
   */
  instanceID?: string;
  /**
   * @remarks
   * The type of the destination instance.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The endpoint of the destination instance.
   * 
   * @example
   * 192.168.XX,XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * 
   * > This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The database service port of the destination instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the RAM role configured for the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **DISABLE**: SSL encryption is disabled.
   * *   **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
   * *   **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
   * *   **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.
   * 
   * @example
   * DISABLE
   */
  sslSolutionEnum?: string;
  /**
   * @remarks
   * The database account of the destination instance.
   * 
   * @example
   * dtstest
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
      sslSolutionEnum: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

