// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConfigureMigrationJobRequestDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * 待迁入的数据库名称或鉴权数据库名称。 
   * > - 当**DestinationEndpoint.EngineName**取值为**PostgreSQL**、**DRDS**或**MongoDB**时，本参数才可用且必须传入。
   * - 当**DestinationEndpoint.EngineName**取值为**PostgreSQL**或**DRDS**时，传入待迁移的数据库名称；取值为**MongoDB**时，传入数据库账号的鉴权数据库名称。
   * 
   * @example
   * dtstestdatabase
   */
  dataBaseName?: string;
  /**
   * @remarks
   * 目标库的数据库类型。取值：**MySQL**、**DRDS**、**SQLServer**、**PostgreSQL**、**PPAS**、**MongoDB**、**Redis**、**POLARDB**、**polardb_pg**
   * > 当**DestinationEndpoint.InstanceType**取值为**RDS**、**POLARDB**、**ECS**、**LocalInstance**或**Express**时，本参数才可用且必须传入。
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * 目标库的连接地址。
   * > 当**DestinationEndpoint.InstanceType**取值为**LocalInstance**或**Express**时，本参数才可用且必须传入。
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * 目标实例ID。
   * > 当**DestinationEndpoint.InstanceType**取值为**RDS**、**ECS**、**MongoDB**、**Redis**、**DRDS**、**PetaData**、**OceanBase**、**POLARDB**、**PolarDB_o**、**AnalyticDB**或**Greenplum**时，本参数才可用且必须传入对应的实例ID（例如取值为**ECS**，则需要传入ECS实例ID）。
   * 
   * @example
   * rm-bp1r46452ai50****
   */
  instanceID?: string;
  /**
   * @remarks
   * 目标库的实例类型，取值：
   * - **ECS**：ECS上的自建数据库。
   * - **LocalInstance**：有公网IP的自建数据库。
   * - **RDS**：阿里云RDS实例。
   * - **DRDS**：阿里云PolarDB-X实例。
   * - **MongoDB**：阿里云MongoDB实例。
   * - **Redis**：阿里云Redis实例。
   * - **PetaData**：阿里云HybridDB for MySQL实例。
   * - **POLARDB**：阿里云PolarDB MySQL、PolarDB PostgreSQL。
   * - **PolarDB_o**：阿里云PolarDB O引擎集群。
   * - **AnalyticDB**：阿里云云原生数据仓库AnalyticDB MySQL 3.0和2.0版本。
   * - **Greenplum**：阿里云云原生数据仓库AnalyticDB PostgreSQL。
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * Oracle数据库的SID信息。
   * > 当**DestinationEndpoint.EngineName**取值为**Oracle**，且**Oracle**数据库为非RAC实例时，本参数才可用且必须传入。
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * 目标库数据库账号的密码。
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * 目标库的服务端口。
   * > 当**DestinationEndpoint.InstanceType**取值为**ECS**、**LocalInstance**或**Express**时，本参数才可用且必须传入。
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * 目标库所属的地域ID。
   * > 当**DestinationEndpoint.InstanceType**取值为**LocalInstance**时，您可以传入**cn-hangzhou**或者离自建数据库地物理距离最近的地域ID，详情请参见[支持的地域列表](https://help.aliyun.com/document_detail/141033.html)。
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * 目标库的数据库账号。
   * 
   * 说明 迁移不同的数据库所需的权限有所差异，详情请参见迁移方案概览中对应的配置案例。
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
   * 是否进行全量数据迁移，取值：
   * - **true**：是。
   * - **false**：否。
   * 
   * > DTS对全量数据迁移的支持情况因数据库类型不同而有所差异，详情请参见[支持的数据库和迁移类型](https://help.aliyun.com/document_detail/26618.html)。
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataIntialization?: boolean;
  /**
   * @remarks
   * 是否进行增量数据迁移，取值：
   * - **true**：是。
   * - **false**：否。
   * 
   * > DTS对增量数据迁移的支持情况因数据库类型不同而有所差异，详情请参见[支持的数据库和迁移类型](https://help.aliyun.com/document_detail/26618.html)。
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * 是否进行结构迁移，取值：
   * - **true**：是。
   * - **false**：否。
   * 
   * > DTS对结构迁移的支持情况因数据库类型不同而有所差异，详情请参见[支持的数据库和迁移类型](https://help.aliyun.com/document_detail/26618.html)。
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
   * 待迁移的数据库名称或鉴权数据库名称。
   * > - 当**SourceEndpoint.EngineName**取值为**PostgreSQL**或**MongoDB**时，本参数才可用且必须传入。
   * - 当**SourceEndpoint.EngineName**取值为**PostgreSQL**时，传入待迁移的数据库名称；取值为**MongoDB**时，传入数据库账号的鉴权数据库名称。
   * 
   * @example
   * dtstestdatabase
   */
  databaseName?: string;
  /**
   * @remarks
   * 源库的数据库类型，取值：**MySQL**、**TiDB**、**SQLServer**、**PostgreSQL**、**Oracle**、**MongoDB**、**Redis**、**POLARDB**、**polardb_pg**。
   * > 当**DestinationEndpoint.InstanceType**取值为**RDS**、**POLARDB**、**ECS**、**LocalInstance**或**Express**时，本参数才可用且必须传入。
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * 源库的连接地址。
   * > 当**SourceEndpoint.InstanceType**取值为**LocalInstance**或**Express**时，本参数才可用且必须传入。
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * 源库的实例ID。
   * > - 当**SourceEndpoint.InstanceType**取值为**RDS**、**ECS**、**Express**、**MongoDB**、**POLARDB**或**PolarDB_o**时，本参数才可用且必须传入对应的实例ID（例如取值为**ECS**，则本参数传入ECS实例的ID）。
   * - 当**SourceEndpoint.InstanceType**取值为**Express**时，本参数传入VPC ID（即专有网络ID）。
   * 
   * @example
   * bp-rmxxxxxxxx
   */
  instanceID?: string;
  /**
   * @remarks
   * 源库的实例类型，取值：
   * - **RDS**：阿里云RDS实例。
   * - **ECS**：ECS上的自建数据库。
   * - **LocalInstance**：有公网IP的自建数据库。
   * - **Express**：通过专线/VPN网关/智能接入网关接入的自建数据库。
   * - **dg**：通过数据库网关DG接入的自建数据库。
   * - **cen**：通过云企业网CEN接入的自建数据库。
   * - **MongoDB**：阿里云MongoDB实例。
   * - **POLARDB**：阿里云PolarDB MySQL、PolarDB PostgreSQL。
   * - **PolarDB_o**：阿里云PolarDB O引擎集群。
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * Oracle数据库的SID信息。
   * > 当**SourceEndpoint.EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，本参数才可用且必须传入。
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * 源实例所属的阿里云账号ID。
   * > 仅在配置跨阿里云账号的数据迁移时本参数才可用，且必须传入。
   * 
   * @example
   * 140692647406****
   */
  ownerID?: string;
  /**
   * @remarks
   * 源库数据库账号对应的密码。
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * 源库的服务端口。
   * > 当**SourceEndpoint.InstanceType**取值为**ECS**、**LocalInstance**或**Express**时，本参数才可用且必须传入。
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * 源库所属的地域ID。
   * > 当**SourceEndpoint.InstanceType**取值为**LocalInstance**时，您可以传入**cn-hangzhou**或者离自建数据库地物理距离最近的地域ID，详情请参见[支持的地域列表](https://help.aliyun.com/document_detail/141033.html)。
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * 当源实例与目标实例所属阿里云账号不同时，需传入该参数，来指定源实例的授权角色，以允许目标实例阿里云账号访问源实例的实例信息。
   * > 角色所需的权限及授权方式，请参见[跨阿里云账号数据迁移或同步时如何配置RAM授权](https://help.aliyun.com/document_detail/48468.html)。
   * 
   * @example
   * ram-for-dts
   */
  role?: string;
  /**
   * @remarks
   * 源库的数据库账号。
   * 
   * 说明 迁移不同的数据库所需的权限有所差异，详情请参见迁移方案概览中对应的配置案例。
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
   * The Alibaba Cloud account ID. You do not need to specify this parameter because it will be deprecated.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The start position of incremental data migration. The value is a UNIX timestamp in seconds.
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
   * The name of the migration task. The name can be up to 32 characters in length. Specify a descriptive name for easy identification. Uniqueness is not required.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL_TO_RDS
   */
  migrationJobName?: string;
  /**
   * @remarks
   * The objects to be migrated. The value is a JSON string that supports regular expressions. For more information, see [Migration object configuration](~141901~).
   * 
   * This parameter is required.
   * 
   * @example
   * [{"DBName":"dtstestdata","TableIncludes":[{"TableName":"customer"}]}]
   */
  migrationObject?: string;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet special requirements, such as whether to automatically start the precheck. For more information, see [MigrationReserved parameter description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {     "autoStartModulesAfterConfig": "none",     "targetTableMode": 2 }
   */
  migrationReserved?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID of the data migration instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > The region ID must be the same as the region ID of the destination database.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
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

