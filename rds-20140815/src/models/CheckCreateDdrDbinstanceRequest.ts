// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCreateDdrDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set used for restoration from a backup set. You can call the DescribeCrossRegionBackups operation to query the backup set ID.
   * > This parameter is required when **RestoreType** is set to **0**.
   * 
   * @example
   * 14358
   */
  backupSetId?: string;
  /**
   * @remarks
   * The instance type of the destination instance. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rds.mysql.s1.small
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance storage of the destination instance. Valid values: **5 to 2000**. The value is incremented in steps of 5 GB. Unit: GB. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The type of the destination database engine. Valid values:
   * * **MySQL**
   * * **SQLServer**
   * * **PostgreSQL**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The version of the destination database engine. The valid values vary based on the value of **Engine**.
   * 
   * - MySQL: **5.5/5.6/5.7/8.0**
   * - SQL Server: **2008r2 (instances with Premium Local SSDs, discontinued)/08r2_ent_ha (instances with cloud disks, discontinued)/2012/2012_ent_ha/2012_std_ha/2012_web/2014_std_ha/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent/2019_std_ha/2019_ent**
   * - PostgreSQL: **10.0/11.0/12.0/13.0/14.0/15.0**
   * 
   * > For SQL Server instances, `_ent` indicates Enterprise Cluster Edition, `_ent_ha` indicates Enterprise Edition, `_std_ha` indicates Standard Edition, and `_web` indicates Web Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.6
   */
  engineVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the destination instance. You can call the DescribeRegions operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore data when you restore data to a point in time. The point in time must be earlier than the current time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > This parameter is required when **RestoreType** is set to **1**.
   * 
   * @example
   * 2019-05-30T03:29:10Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The restoration method. Valid values:
   * 
   * - **0** (default): restores data from a backup set. If you set this parameter to 0, you must also specify **BackupSetId**.
   * - **1**: restores data to a point in time. If you set this parameter to 1, you must also specify **RestoreTime**, **SourceRegion**, and **SourceDBInstanceName**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  restoreType?: string;
  /**
   * @remarks
   * The ID of the source instance when you restore data to a point in time.
   * > This parameter is required when **RestoreType** is set to **1**.
   * 
   * @example
   * rm-uf6wjk5****
   */
  sourceDBInstanceName?: string;
  /**
   * @remarks
   * The ID of the source region when you restore data to a point in time.
   * > This parameter is required when **RestoreType** is set to **1**.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegion?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorage: 'DBInstanceStorage',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
      sourceDBInstanceName: 'SourceDBInstanceName',
      sourceRegion: 'SourceRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      DBInstanceClass: 'string',
      DBInstanceStorage: 'number',
      engine: 'string',
      engineVersion: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
      sourceDBInstanceName: 'string',
      sourceRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

