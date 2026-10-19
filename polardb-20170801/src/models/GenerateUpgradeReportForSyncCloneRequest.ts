// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUpgradeReportForSyncCloneRequest extends $dara.Model {
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * * **Normal**: Cluster Edition (default)
   * * **SENormal**: Standard Edition
   * 
   * For more information about cluster editions, see [Product editions](https://help.aliyun.com/document_detail/183258.html).
   * 
   * @example
   * Normal
   */
  creationCategory?: string;
  /**
   * @remarks
   * The creation pattern. Valid values: 
   * 
   * * **MigrationFromRDS**: migrates data from an existing ApsaraDB RDS instance to a new PolarDB cluster. The created PolarDB cluster is in read-only mode and has binary logging enabled by default. For more information about the console operation, see [Upgrade an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/121582.html).
   * 
   * * **UpgradeFromPolarDB**: performs instance migration from PolarDB. For more information about the console operation, see [Major engine version upgrade](https://help.aliyun.com/document_detail/459712.html).
   * 
   * @example
   * MigrationFromRDS
   */
  creationOption?: string;
  /**
   * @remarks
   * The name of the database. You can specify only one database name.
   * 
   * > Only PolarDB for PostgreSQL (Compatible with Oracle) clusters support this parameter.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * - **MySQL**
   * - **Oracle**
   * 
   * @example
   * PostgreSQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version number of the destination database DPI engine.
   * * Valid values for MySQL: 
   *     * **5.6**
   *     * **5.7**
   *     * **8.0**
   * * Valid value for Oracle: **14**.
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
   * The reserved parameter. The value is a JSON string.
   * 
   * @example
   * {\\"targetTableMode\\":2}
   */
  reserve?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source instance ID.
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

