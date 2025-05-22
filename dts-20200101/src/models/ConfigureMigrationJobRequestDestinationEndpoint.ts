// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConfigureMigrationJobRequestDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The region ID of the destination database.
   * 
   * >  If the **DestinationEndpoint.InstanceType** parameter is set to **LocalInstance**, you can enter **cn-hangzhou** or the ID of the region closest to the self-managed database. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * dtstestdatabase
   */
  dataBaseName?: string;
  /**
   * @remarks
   * The authorized RAM role of the source instance. You must specify the RAM role only if the source instance and the destination instance belong to different Alibaba Cloud accounts. You can use the RAM role to allow the Alibaba Cloud account that owns the destination instance to access the source instance.
   * 
   * >  For information about the permissions and authorization methods of the RAM role, see [Configure RAM authorization for cross-account data migration and synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The ID of the instance that hosts the destination database.
   * 
   * >  You must specify the instance ID only if the **DestinationEndpoint.InstanceType** parameter is set to **RDS**, **ECS**, **MongoDB**, **Redis**, **DRDS**, **PetaData**, **OceanBase**, **POLARDB**, **PolarDB_o**, **AnalyticDB**, or **Greenplum**. For example, if the DestinationEndpoint.InstanceType parameter is set to **ECS**, you must specify the ID of the ECS instance.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the source instance belongs.
   * 
   * >  You must specify this parameter only when you configure data migration across different Alibaba Cloud accounts.
   * 
   * @example
   * rm-bp1r46452ai50****
   */
  instanceID?: string;
  /**
   * @remarks
   * The password of the source database account.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet special requirements, for example, whether to automatically start a precheck. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The service port number of the destination database.
   * 
   * >  You must specify the service port number only if the **DestinationEndpoint.InstanceType** parameter is set to **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * The engine type of the destination database. Valid values: **MySQL**, **DRDS**, **SQLServer**, **PostgreSQL**, **PPAS**, **MongoDB**, **Redis**, **POLARDB**, and **polardb_pg**.
   * 
   * >  You must specify the engine type only if the **DestinationEndpoint.InstanceType** parameter is set to **RDS**, **POLARDB**, **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The instance type of the destination database. Valid values:
   * 
   * *   **ECS**: self-managed database that is hosted on Elastic Compute Service (ECS)
   * *   **LocalInstance**: self-managed database with a public IP address
   * *   **RDS**: ApsaraDB RDS instance
   * *   **DRDS**: PolarDB-X instance
   * *   **MongoDB**: ApsaraDB for MongoDB instance
   * *   **Redis**: ApsaraDB for Redis instance
   * *   **PetaData**: HybridDB for MySQL instance
   * *   **POLARDB**: PolarDB for MySQL cluster or PolarDB for PostgreSQL cluster
   * *   **PolarDB_o**: PolarDB O Edition cluster
   * *   **AnalyticDB**: AnalyticDB for MySQL cluster V3.0 or V2.0
   * *   **Greenplum**: AnalyticDB for PostgreSQL instance
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The endpoint of the destination database.
   * 
   * >  You must specify the endpoint only if the **DestinationEndpoint.InstanceType** parameter is set to **LocalInstance** or **Express**.
   * 
   * @example
   * dtstestaccount
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dataBaseName: 'DataBaseName',
      engineName: 'EngineName',
      IP: 'IP',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      oracleSID: 'OracleSID',
      password: 'Password',
      port: 'Port',
      region: 'Region',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataBaseName: 'string',
      engineName: 'string',
      IP: 'string',
      instanceID: 'string',
      instanceType: 'string',
      oracleSID: 'string',
      password: 'string',
      port: 'string',
      region: 'string',
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

