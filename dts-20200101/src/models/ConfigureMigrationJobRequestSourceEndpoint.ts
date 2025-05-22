// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureMigrationJobRequestSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the source database.
   * 
   * >  You must specify the endpoint only if the **SourceEndpoint.InstanceType** parameter is set to **LocalInstance** or **Express**.
   * 
   * @example
   * dtstestdatabase
   */
  databaseName?: string;
  /**
   * @remarks
   * The instance type of the source database. Valid values:
   * 
   * *   **RDS**: ApsaraDB RDS instance
   * *   **ECS**: self-managed database that is hosted on ECS
   * *   **LocalInstance**: self-managed database with a public IP address
   * *   **Express**: self-managed database that is connected over Express Connect, VPN Gateway, or Smart Access Gateway
   * *   **dg**: self-managed database that is connected over Database Gateway
   * *   **cen**: self-managed database that is connected over Cloud Enterprise Network (CEN)
   * *   **MongoDB**: ApsaraDB for MongoDB instance
   * *   **POLARDB**: PolarDB for MySQL cluster or PolarDB for PostgreSQL cluster
   * *   **PolarDB_o**: PolarDB O Edition cluster
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * rm-bp1i99e8l7913****
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * dtsl3m1213ye7l****
   * 
   * @example
   * The name of the data migration task. The name can be up to 32 characters in length. We recommend that you specify an informative name to identify the task. You do not need to use a unique task name.
   */
  instanceID?: string;
  /**
   * @remarks
   * The ID of the data migration instance. You can call the **DescribeMigrationJobs** operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The region ID of the source database.
   * 
   * >  If the **SourceEndpoint.InstanceType** parameter is set to **LocalInstance**, you can enter **cn-hangzhou** or the ID of the region closest to the self-managed database. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The name of the source database or the authentication database.
   * 
   * > 
   * *   You must specify the database name only if the **SourceEndpoint.EngineName** parameter is set to **PostgreSQL** or **MongoDB**.
   * *   If the **SourceEndpoint.EngineName** parameter is set to **PostgreSQL**, specify the name of the source database. If the SourceEndpoint.EngineName parameter is set to **MongoDB**, specify the name of the authentication database.
   * 
   * @example
   * 140692647406****
   */
  ownerID?: string;
  /**
   * @remarks
   * The system ID (SID) of the Oracle database.
   * 
   * >  You must specify this parameter only if the **SourceEndpoint.EngineName** parameter is set to **Oracle** and the **Oracle** database is deployed in a non-RAC architecture.
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * The engine type of the source database. Valid values: **MySQL**, **TiDB**, **SQLServer**, **PostgreSQL**, **Oracle**, **MongoDB**, **Redis**, **POLARDB**, and **polardb_pg**.
   * 
   * >  You must specify the engine type only if the **DestinationEndpoint.InstanceType** parameter is set to **RDS**, **POLARDB**, **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the instance that hosts the source database.
   * 
   * > 
   * *   You must specify the instance ID only if the **SourceEndpoint.InstanceType** parameter is set to **RDS**, **ECS**, **Express**, **MongoDB**, **POLARDB**, or **PolarDB_o**. For example, if the SourceEndpoint.InstanceType parameter is set to **ECS**, you must specify the ID of the ECS instance.
   * *   If the **SourceEndpoint.InstanceType** parameter is set to **Express**, you must specify the ID of the virtual private cloud (VPC).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The database account of the source database.
   * 
   * >  The permissions that are required for database accounts vary with the migration scenario. For more information, see [Overview of data migration scenarios](https://help.aliyun.com/document_detail/26618.html).
   * 
   * @example
   * ram-for-dts
   */
  role?: string;
  /**
   * @remarks
   * The service port number of the source database.
   * 
   * >  You must specify the service port number only if the **SourceEndpoint.InstanceType** parameter is set to **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * dtstestaccount
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      IP: 'IP',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      oracleSID: 'OracleSID',
      ownerID: 'OwnerID',
      password: 'Password',
      port: 'Port',
      region: 'Region',
      role: 'Role',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      IP: 'string',
      instanceID: 'string',
      instanceType: 'string',
      oracleSID: 'string',
      ownerID: 'string',
      password: 'string',
      port: 'string',
      region: 'string',
      role: 'string',
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

