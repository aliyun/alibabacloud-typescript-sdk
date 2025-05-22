// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodySourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * Indicates whether the password can be modified. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  canModifyPassword?: boolean;
  /**
   * @remarks
   * The name of the database from which the objects are migrated in the source instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The database engine of the source instance.
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The source instance ID.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  instanceID?: string;
  /**
   * @remarks
   * The type of the source instance.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The endpoint of the source instance.
   * 
   * @example
   * 172.16.88.***
   */
  ip?: string;
  /**
   * @remarks
   * The system ID (SID) of the Oracle database.
   * 
   * > This parameter is returned only if the return value of **EngineName** of the source instance is **Oracle** and the Oracle database is deployed in a non-Real Application Cluster (RAC) architecture.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The database service port of the source instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account to which the source instance belongs.
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
   * The database account of the source instance.
   * 
   * @example
   * dtstest
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      canModifyPassword: 'CanModifyPassword',
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
      canModifyPassword: 'boolean',
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

