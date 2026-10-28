// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConfigureMigrationJobRequestDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the destination database or the authentication database. 
   * > - This parameter is available and required only when **DestinationEndpoint.EngineName** is set to **PostgreSQL**, **DRDS**, or **MongoDB**.
   * - When **DestinationEndpoint.EngineName** is set to **PostgreSQL** or **DRDS**, specify the name of the database to be migrated. When it is set to **MongoDB**, specify the name of the authentication database for the database account.
   * 
   * @example
   * dtstestdatabase
   */
  dataBaseName?: string;
  /**
   * @remarks
   * The database engine of the destination database. Valid values: **MySQL**, **DRDS**, **SQLServer**, **PostgreSQL**, **PPAS**, **MongoDB**, **Redis**, **POLARDB**, and **polardb_pg**.
   * > This parameter is available and required only when **DestinationEndpoint.InstanceType** is set to **RDS**, **POLARDB**, **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The endpoint of the destination database.
   * > This parameter is available and required only when **DestinationEndpoint.InstanceType** is set to **LocalInstance** or **Express**.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * > This parameter is available and required only when **DestinationEndpoint.InstanceType** is set to **RDS**, **ECS**, **MongoDB**, **Redis**, **DRDS**, **PetaData**, **OceanBase**, **POLARDB**, **PolarDB_o**, **AnalyticDB**, or **Greenplum**. You must specify the corresponding instance ID. For example, if the value is **ECS**, specify the ID of the ECS instance.
   * 
   * @example
   * rm-bp1r46452ai50****
   */
  instanceID?: string;
  /**
   * @remarks
   * The instance type of the destination database. Valid values:
   * - **ECS**: Self-managed database hosted on ECS.
   * - **LocalInstance**: Self-managed database with a public IP address.
   * - **RDS**: ApsaraDB RDS instance.
   * - **DRDS**: PolarDB-X instance.
   * - **MongoDB**: ApsaraDB for MongoDB instance.
   * - **Redis**: ApsaraDB for Redis instance.
   * - **PetaData**: HybridDB for MySQL instance.
   * - **POLARDB**: PolarDB for MySQL or PolarDB for PostgreSQL cluster.
   * - **PolarDB_o**: PolarDB for Oracle cluster.
   * - **AnalyticDB**: AnalyticDB for MySQL 3.0 or 2.0 cluster.
   * - **Greenplum**: AnalyticDB for PostgreSQL cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is available and required only when **DestinationEndpoint.EngineName** is set to **Oracle** and the Oracle database is a non-Real Application Cluster instance.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The password of the destination database account.
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * The service port number of the destination database.
   * > This parameter is available and required only when **DestinationEndpoint.InstanceType** is set to **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the region where the destination database resides.
   * > When **DestinationEndpoint.InstanceType** is set to **LocalInstance**, you can specify **cn-hangzhou** or the ID of the region that is closest to your self-managed database. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The database account of the destination database.
   * 
   * Note: The required permissions vary based on the database engine. For more information, see the corresponding configuration examples in the migration overview.
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

export class ConfigureMigrationJobRequestMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform full data migration. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > The support for full data migration varies based on the database engine. For more information, see [Supported databases and migration types](https://help.aliyun.com/document_detail/26618.html).
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataIntialization?: boolean;
  /**
   * @remarks
   * Specifies whether to perform incremental data migration. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > The support for incremental data migration varies based on the database engine. For more information, see [Supported databases and migration types](https://help.aliyun.com/document_detail/26618.html).
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Specifies whether to perform schema migration. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > The support for schema migration varies based on the database engine. For more information, see [Supported databases and migration types](https://help.aliyun.com/document_detail/26618.html).
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  structureIntialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataIntialization: 'DataIntialization',
      dataSynchronization: 'DataSynchronization',
      structureIntialization: 'StructureIntialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIntialization: 'boolean',
      dataSynchronization: 'boolean',
      structureIntialization: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureMigrationJobRequestSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to be migrated or the authentication database.
   * > - This parameter is available and required only when **SourceEndpoint.EngineName** is set to **PostgreSQL** or **MongoDB**.
   * - When **SourceEndpoint.EngineName** is set to **PostgreSQL**, specify the name of the database to be migrated. When it is set to **MongoDB**, specify the name of the authentication database for the database account.
   * 
   * @example
   * dtstestdatabase
   */
  databaseName?: string;
  /**
   * @remarks
   * The database engine of the source database. Valid values: **MySQL**, **TiDB**, **SQLServer**, **PostgreSQL**, **Oracle**, **MongoDB**, **Redis**, **POLARDB**, and **polardb_pg**.
   * > This parameter is available and required only when **DestinationEndpoint.InstanceType** is set to **RDS**, **POLARDB**, **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The endpoint of the source database.
   * > This parameter is available and required only when **SourceEndpoint.InstanceType** is set to **LocalInstance** or **Express**.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * > - This parameter is available and required only when **SourceEndpoint.InstanceType** is set to **RDS**, **ECS**, **Express**, **MongoDB**, **POLARDB**, or **PolarDB_o**. You must specify the corresponding instance ID. For example, if the value is **ECS**, specify the ID of the ECS instance.
   * - When **SourceEndpoint.InstanceType** is set to **Express**, specify the VPC ID.
   * 
   * @example
   * bp-rmxxxxxxxx
   */
  instanceID?: string;
  /**
   * @remarks
   * The instance type of the source database. Valid values:
   * - **RDS**: ApsaraDB RDS instance.
   * - **ECS**: Self-managed database hosted on Elastic Compute Service (ECS).
   * - **LocalInstance**: Self-managed database with a public IP address.
   * - **Express**: Self-managed database connected over Express Connect, VPN Gateway, or Smart Access Gateway.
   * - **dg**: Self-managed database connected over Database Gateway.
   * - **cen**: Self-managed database connected over Cloud Enterprise Network (CEN).
   * - **MongoDB**: ApsaraDB for MongoDB instance.
   * - **POLARDB**: PolarDB for MySQL or PolarDB for PostgreSQL cluster.
   * - **PolarDB_o**: PolarDB for Oracle cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The system ID (SID) of the Oracle database.
   * > This parameter is available and required only when **SourceEndpoint.EngineName** is set to **Oracle** and the Oracle database is a non-Real Application Cluster instance.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the source instance belongs.
   * > This parameter is active and required only when you configure a cross-account data migration task.
   * 
   * @example
   * 140692647406****
   */
  ownerID?: string;
  /**
   * @remarks
   * The password of the source database account.
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * The service port number of the source database.
   * > This parameter is available and required only when **SourceEndpoint.InstanceType** is set to **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the region where the source database resides.
   * > When **SourceEndpoint.InstanceType** is set to **LocalInstance**, you can specify **cn-hangzhou** or the ID of the region that is closest to your self-managed database. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The RAM role that is authorized to the destination Alibaba Cloud account to access the source instance. This parameter is required when the source and destination instances belong to different Alibaba Cloud accounts.
   * > For more information about the required permissions and authorization method, see [Configure RAM authorization for cross-account data migration or synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  role?: string;
  /**
   * @remarks
   * The database account of the source database.
   * 
   * Note: The required permissions vary based on the database engine. For more information, see the corresponding configuration examples in the migration overview.
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

export class ConfigureMigrationJobRequest extends $dara.Model {
  destinationEndpoint?: ConfigureMigrationJobRequestDestinationEndpoint;
  migrationMode?: ConfigureMigrationJobRequestMigrationMode;
  sourceEndpoint?: ConfigureMigrationJobRequestSourceEndpoint;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter. This parameter is pending deprecation.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The start checkpoint for incremental data migration. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 111
   */
  checkpoint?: string;
  /**
   * @remarks
   * The ID of the data migration instance. You can call the **DescribeMigrationJobs** operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsxxxxxxxx
   */
  migrationJobId?: string;
  /**
   * @remarks
   * The name of the migration task. The name can be up to 32 characters in length. Specify a descriptive name for easy identification. The name does not need to be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL_TO_RDS
   */
  migrationJobName?: string;
  /**
   * @remarks
   * The objects to be migrated. The value is a JSON string and supports specific regular expressions. For more information, see [Configure migration objects](~141901~).
   * 
   * This parameter is required.
   * 
   * @example
   * [{"DBName":"dtstestdata","TableIncludes":[{"TableName":"customer"}]}]
   */
  migrationObject?: string;
  /**
   * @remarks
   * The reserved parameters of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, such as specifying whether to automatically start a precheck. For more information, see [MigrationReserved parameter description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {     "autoStartModulesAfterConfig": "none",     "targetTableMode": 2 }
   */
  migrationReserved?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the region where the data migration instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > The region ID must be the same as the region ID of the destination database.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpoint: 'DestinationEndpoint',
      migrationMode: 'MigrationMode',
      sourceEndpoint: 'SourceEndpoint',
      accountId: 'AccountId',
      checkpoint: 'Checkpoint',
      migrationJobId: 'MigrationJobId',
      migrationJobName: 'MigrationJobName',
      migrationObject: 'MigrationObject',
      migrationReserved: 'MigrationReserved',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpoint: ConfigureMigrationJobRequestDestinationEndpoint,
      migrationMode: ConfigureMigrationJobRequestMigrationMode,
      sourceEndpoint: ConfigureMigrationJobRequestSourceEndpoint,
      accountId: 'string',
      checkpoint: 'string',
      migrationJobId: 'string',
      migrationJobName: 'string',
      migrationObject: 'string',
      migrationReserved: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(this.destinationEndpoint && typeof (this.destinationEndpoint as any).validate === 'function') {
      (this.destinationEndpoint as any).validate();
    }
    if(this.migrationMode && typeof (this.migrationMode as any).validate === 'function') {
      (this.migrationMode as any).validate();
    }
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

