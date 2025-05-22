// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConnectionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **Oracle**. Valid values:
   * 
   * *   **SID**: non-RAC architecture
   * *   **RAC**: Real Application Cluster (RAC) architecture
   * 
   * >  This parameter is optional. The data type of this parameter is String.
   * 
   * @example
   * SID
   */
  destinationEndpointArchitecture?: string;
  /**
   * @remarks
   * The name of the destination database or the authentication database.
   * 
   * > 
   * *   You must specify this parameter if the **DestinationEndpointEngineName** parameter is set to **PostgreSQL**, **DRDS**, or **MongoDB**. You must also specify this parameter if the **DestinationEndpointInstanceType** parameter is set to **PolarDB_o**.
   * *   If the **DestinationEndpointEngineName** parameter is set to **PostgreSQL** or **DRDS**, specify the name of the destination database. If the DestinationEndpointEngineName parameter is set to **MongoDB**, specify the name of the authentication database.
   * *   If the **DestinationEndpointInstanceType** parameter is set to **PolarDB_o**, specify the name of the destination database.
   * 
   * @example
   * dtstestdata
   */
  destinationEndpointDatabaseName?: string;
  /**
   * @remarks
   * The engine type of the destination database. Valid values: **MySQL**, **DRDS**, **SQLServer**, **PostgreSQL**, **PPAS**, **MongoDB**, and **Redis**.
   * 
   * >  You must specify this parameter only if the **DestinationEndpointInstanceType** parameter is set to **RDS**, **DRDS**, **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * MySQL
   */
  destinationEndpointEngineName?: string;
  /**
   * @remarks
   * The endpoint of the destination database.
   * 
   * >  You must specify this parameter only if the **DestinationEndpointInstanceType** parameter is set to **LocalInstance** or **Express**.
   * 
   * @example
   * 172.16.88.***
   */
  destinationEndpointIP?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * testsid
   */
  destinationEndpointInstanceID?: string;
  /**
   * @remarks
   * The instance type of the destination database. Valid values:
   * 
   * > 
   * *   **ECS**: self-managed database that is hosted on Elastic Compute Service (ECS)
   * *   **LocalInstance**: self-managed database with a public IP address
   * *   **RDS**: ApsaraDB RDS instance
   * *   **DRDS**: PolarDB-X instance
   * *   **MongoDB**: ApsaraDB for MongoDB instance
   * *   **Redis**: ApsaraDB for Redis instance
   * *   **PetaData**: HybridDB for MySQL instance
   * *   **POLARDB**: PolarDB for MySQL cluster
   * *   **PolarDB_o**: PolarDB for Oracle cluster
   * *   **AnalyticDB**: AnalyticDB for MySQL cluster V3.0 or V2.0
   * *   **Greenplum**: AnalyticDB for PostgreSQL instance
   * 
   * This parameter is required.
   * 
   * @example
   * PolarDB_o
   */
  destinationEndpointInstanceType?: string;
  /**
   * @remarks
   * You must specify this parameter only if the **DestinationEndpointEngineName** parameter is set to **Oracle**. Valid values:
   * 
   * *   **SID**: non-RAC architecture
   * *   **RAC**: RAC architecture
   * 
   * >  This parameter is optional. The data type of this parameter is String.
   * 
   * @example
   * SID
   */
  destinationEndpointOracleSID?: string;
  /**
   * @remarks
   * The password of the destination database account.
   * 
   * @example
   * Test123456
   */
  destinationEndpointPassword?: string;
  /**
   * @remarks
   * The service port number of the source database.
   * 
   * >  You must specify this parameter only if the **SourceEndpointInstanceType** parameter is set to **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * 3306
   */
  destinationEndpointPort?: string;
  /**
   * @remarks
   * The ID of the region where the destination instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  destinationEndpointRegion?: string;
  /**
   * @remarks
   * The database account of the destination database.
   * 
   * >  The permissions that are required for database accounts vary with the migration or synchronization scenario. For more information, see [Overview of data migration scenarios](https://help.aliyun.com/document_detail/26618.html) and [Overview of data synchronization scenarios](https://help.aliyun.com/document_detail/130744.html).
   * 
   * @example
   * dtstest
   */
  destinationEndpointUserName?: string;
  /**
   * @remarks
   * The ID of the region where the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **Oracle**. Valid values:
   * 
   * *   **SID**: non-RAC architecture
   * *   **RAC**: RAC architecture
   * 
   * >  This parameter is optional.
   * 
   * @example
   * SID
   */
  sourceEndpointArchitecture?: string;
  /**
   * @remarks
   * The name of the source database or the authentication database.
   * 
   * > 
   * *   You must specify this parameter if the **SourceEndpointEngineName** parameter is set to **PostgreSQL** or **MongoDB**. You must also specify this parameter if the **SourceEndpointInstanceType** parameter is set to **PolarDB_o**.
   * *   If the **SourceEndpointEngineName** parameter is set to **PostgreSQL** or **DRDS**, specify the name of the source database. If the SourceEndpointEngineName parameter is set to **MongoDB**, specify the name of the authentication database.
   * *   If the **SourceEndpointInstanceType** parameter is set to **PolarDB_o**, specify the name of the source database.
   * 
   * @example
   * dtstestdata
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The engine type of the source database. Valid values: **MySQL**, **TiDB**, **SQLServer**, **PostgreSQL**, **Oracle**, **MongoDB**, and **Redis**.
   * 
   * >  Default value: **MySQL**.
   * 
   * @example
   * MySQL
   */
  sourceEndpointEngineName?: string;
  /**
   * @remarks
   * The endpoint of the source database.
   * 
   * >  You must specify this parameter only if the **SourceEndpointInstanceType** parameter is set to **LocalInstance** or **Express**.
   * 
   * @example
   * 172.16.88.***
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * rm-bp1imrtn6fq7h****
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * 
   * *   **RDS**: ApsaraDB RDS instance
   * *   **LocalInstance**: self-managed database with a public IP address
   * *   **ECS**: self-managed database that is hosted on ECS
   * *   **Express**: self-managed database that is connected over Express Connect
   * *   **dg**: self-managed database that is connected over Database Gateway
   * *   **MongoDB**: ApsaraDB for MongoDB instance
   * *   **POLARDB**: PolarDB for MySQL cluster
   * *   **PolarDB_o**: PolarDB for Oracle cluster
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * 
   * >  You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **Oracle** and the Oracle database is deployed in a non-RAC architecture.
   * 
   * @example
   * testsid
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The password of the source database account.
   * 
   * @example
   * Test123456
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The service port number of the source database.
   * 
   * >  You must specify this parameter only if the **SourceEndpointInstanceType** parameter is set to **ECS**, **LocalInstance**, or **Express**.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: string;
  /**
   * @remarks
   * The ID of the region where the source instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The database account of the source database.
   * 
   * >  The permissions that are required for database accounts vary with the migration or synchronization scenario. For more information, see [Overview of data migration scenarios](https://help.aliyun.com/document_detail/26618.html) and [Overview of data synchronization scenarios](https://help.aliyun.com/document_detail/130744.html).
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

