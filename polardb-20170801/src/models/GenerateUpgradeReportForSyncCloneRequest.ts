// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUpgradeReportForSyncCloneRequest extends $dara.Model {
  /**
   * @remarks
   * The product series. Valid values:
   * 
   * - **Normal**: Cluster Edition (default)
   * 
   * - **SENormal**: Standard Edition
   * 
   * See [Product series](https://help.aliyun.com/document_detail/183258.html).
   * 
   * @example
   * Normal
   */
  creationCategory?: string;
  /**
   * @remarks
   * The creation method. Valid values:
   * 
   * - **MigrationFromRDS**: Migrate data from an existing RDS instance to a new PolarDB cluster. The created PolarDB cluster is in read-only mode and has binary logging enabled by default. For operations in the console, see [Upgrade an ApsaraDB RDS for MySQL instance to PolarDB for MySQL](https://help.aliyun.com/document_detail/121582.html).
   * 
   * - **UpgradeFromPolarDB**: Upgrade and migrate data from a PolarDB cluster. See [Upgrade the major version](https://help.aliyun.com/document_detail/459712.html).
   * 
   * @example
   * MigrationFromRDS
   */
  creationOption?: string;
  /**
   * @remarks
   * The name of the database. You can specify only one database name.
   * 
   * > This parameter is supported only for PolarDB for PostgreSQL (Oracle Compatible) clusters.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * 
   * - **MySQL**
   * 
   * - **Oracle**
   * 
   * @example
   * PostgreSQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the destination database engine.
   * 
   * - Valid values for MySQL:
   * 
   *   - **5.6**
   * 
   *   - **5.7**
   * 
   *   - **8.0**
   * 
   * - Valid value for Oracle: **14**.
   * 
   * @example
   * 5.6
   */
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A reserved parameter in the JSON string format.
   * 
   * @example
   * {\\"targetTableMode\\":2}
   */
  reserve?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * pc-k2j96w169uhu868l8
   */
  sourceDBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      creationCategory: 'CreationCategory',
      creationOption: 'CreationOption',
      DBName: 'DBName',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      reserve: 'Reserve',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceDBClusterId: 'SourceDBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationCategory: 'string',
      creationOption: 'string',
      DBName: 'string',
      DBType: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      reserve: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceDBClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

