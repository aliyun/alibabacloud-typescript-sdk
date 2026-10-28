// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConnectionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required only when **SourceEndpointEngineName** is set to **Oracle**. Valid values:
   * - **SID**: Non-cluster architecture.
   * - **RAC**: Cluster architecture.
   * 
   * > The value must be of the String type. This parameter is optional.
   * 
   * @example
   * SID
   */
  destinationEndpointArchitecture?: string;
  /**
   * @remarks
   * The name of the destination database or the authentication database.
   * > - This parameter is available and required only when **DestinationEndpointEngineName** is set to **PostgreSQL**, **DRDS**, or **MongoDB**, or when **DestinationEndpointInstanceType** is set to **PolarDB_o**.
   * - If **DestinationEndpointEngineName** is set to **PostgreSQL** or **DRDS**, specify the name of the database to be migrated. If it is set to **MongoDB**, specify the name of the authentication database for the database account.
   * - If **DestinationEndpointInstanceType** is set to **PolarDB_o**, specify the name of the database to be migrated.
   * 
   * @example
   * dtstestdata
   */
  destinationEndpointDatabaseName?: string;
  /**
   * @remarks
   * The database engine type of the destination database. Valid values: **MySQL**, **DRDS**, **SQLServer**, **PostgreSQL**, **PPAS**, **MongoDB**, and **Redis**.
   * > This parameter is available and required only when **DestinationEndpointInstanceType** is set to **RDS**, **DRDS**, **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * MySQL
   */
  destinationEndpointEngineName?: string;
  /**
   * @remarks
   * The endpoint of the destination database.
   * > This parameter is available and required only when **DestinationEndpointInstanceType** is set to **LocalInstance** or **Express**.
   * 
   * @example
   * 172.16.88.***
   */
  destinationEndpointIP?: string;
  /**
   * @remarks
   * The instance ID of the destination instance.
   * 
   * @example
   * testsid
   */
  destinationEndpointInstanceID?: string;
  /**
   * @remarks
   * The instance type of the destination database. Valid values:
   * > - **ECS**: Self-managed database hosted on ECS.
   * - **LocalInstance**: Self-managed database with a public IP address.
   * - **RDS**: ApsaraDB RDS instance.
   * - **DRDS**: PolarDB-X instance.
   * - **MongoDB**: ApsaraDB for MongoDB instance.
   * - **Redis**: ApsaraDB for Redis instance.
   * - **PetaData**: HybridDB for MySQL instance.
   * - **POLARDB**: PolarDB for MySQL cluster.
   * - **PolarDB_o**: PolarDB for Oracle cluster.
   * - **AnalyticDB**: AnalyticDB for MySQL cluster of version 3.0 or 2.0.
   * - **Greenplum**: AnalyticDB for PostgreSQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * PolarDB_o
   */
  destinationEndpointInstanceType?: string;
  /**
   * @remarks
   * This parameter is required only when **DestinationEndpointEngineName** is set to **Oracle**. Valid values:
   * 
   * - **SID**: Non-cluster architecture.
   * - **RAC**: Cluster architecture.
   * 
   * 
   * > The value must be of the String type. This parameter is optional.
   * 
   * @example
   * SID
   */
  destinationEndpointOracleSID?: string;
  /**
   * @remarks
   * The password of the database account for the destination database.
   * 
   * @example
   * Test123456
   */
  destinationEndpointPassword?: string;
  /**
   * @remarks
   * The service port of the destination database.
   * > This parameter is available and required only when **SourceEndpointInstanceType** is set to **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * 3306
   */
  destinationEndpointPort?: string;
  /**
   * @remarks
   * The region where the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  destinationEndpointRegion?: string;
  /**
   * @remarks
   * The database account of the destination database.
   * 
   * @example
   * dtstest
   */
  destinationEndpointUserName?: string;
  /**
   * @remarks
   * The region where the DTS instance resides. For details, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
  /**
   * @remarks
   * This parameter is required only when **SourceEndpointEngineName** is set to **Oracle**. Valid values:
   * 
   * - **SID**: Non-cluster architecture.
   * - **RAC**: Cluster architecture.
   * 
   * 
   * > This parameter is optional.
   * 
   * @example
   * SID
   */
  sourceEndpointArchitecture?: string;
  /**
   * @remarks
   * The name of the database to be migrated or the authentication database.
   * >- This parameter is available and required only when **SourceEndpointEngineName** is set to **PostgreSQL** or **MongoDB**, or when **SourceEndpointInstanceType** is set to **PolarDB_o**.
   * - If **SourceEndpointEngineName** is set to **PostgreSQL** or **DRDS**, specify the name of the database to be migrated. If it is set to **MongoDB**, specify the name of the authentication database for the database account.
   * - If **SourceEndpointInstanceType** is set to **PolarDB_o**, specify the name of the database to be migrated.
   * 
   * @example
   * dtstestdata
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The database engine type of the source instance. Valid values: **MySQL**, **TiDB**, **SQLServer**, **PostgreSQL**, **Oracle**, **MongoDB**, and **Redis**.
   * 
   * > Default value: **MySQL**.
   * 
   * @example
   * MySQL
   */
  sourceEndpointEngineName?: string;
  /**
   * @remarks
   * The endpoint of the source database.
   * > This parameter is available and required only when **SourceEndpointInstanceType** is set to **LocalInstance** or **Express**.
   * 
   * @example
   * 172.16.88.***
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The instance ID of the source instance.
   * 
   * @example
   * rm-bp1imrtn6fq7h****
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * - **RDS**: ApsaraDB RDS instance.
   * - **LocalInstance**: Self-managed database.
   * - **ECS**: Self-managed database hosted on Elastic Compute Service (ECS).
   * - **Express**: Self-managed database connected over Express Connect.
   * - **dg**: Self-managed database connected over Database Gateway.
   * - **MongoDB**: ApsaraDB for MongoDB instance.
   * - **POLARDB**: PolarDB for MySQL cluster.
   * - **PolarDB_o**: PolarDB for Oracle cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * The system ID (SID) of the Oracle database.
   * > This parameter is available and required only when **SourceEndpointEngineName** is set to **Oracle** and the Oracle database is a non-RAC instance.
   * 
   * @example
   * testsid
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The password of the database account for the source database.
   * 
   * @example
   * Test123456
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The service port of the source database.
   * > This parameter is available and required only when **SourceEndpointInstanceType** is set to **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: string;
  /**
   * @remarks
   * The region where the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The database account of the source database.
   * 
   * @example
   * dtstest
   */
  sourceEndpointUserName?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpointArchitecture: 'DestinationEndpointArchitecture',
      destinationEndpointDatabaseName: 'DestinationEndpointDatabaseName',
      destinationEndpointEngineName: 'DestinationEndpointEngineName',
      destinationEndpointIP: 'DestinationEndpointIP',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      destinationEndpointPassword: 'DestinationEndpointPassword',
      destinationEndpointPort: 'DestinationEndpointPort',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointArchitecture: 'SourceEndpointArchitecture',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointEngineName: 'SourceEndpointEngineName',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointUserName: 'SourceEndpointUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpointArchitecture: 'string',
      destinationEndpointDatabaseName: 'string',
      destinationEndpointEngineName: 'string',
      destinationEndpointIP: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointInstanceType: 'string',
      destinationEndpointOracleSID: 'string',
      destinationEndpointPassword: 'string',
      destinationEndpointPort: 'string',
      destinationEndpointRegion: 'string',
      destinationEndpointUserName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceEndpointArchitecture: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointEngineName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

