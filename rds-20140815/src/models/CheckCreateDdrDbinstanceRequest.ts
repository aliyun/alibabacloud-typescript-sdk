// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCreateDdrDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set that is used for the restoration. You can call the DescribeCrossRegionBackups operation to query the backup set ID.
   * 
   * >  This parameter must be specified when the **RestoreType** parameter is set to **0**.
   * 
   * @example
   * 14358
   */
  backupSetId?: string;
  /**
   * @remarks
   * The instance type of the destination instance. For more information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rds.mysql.s1.small
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The storage capacity of the destination instance. Valid values: **5 to 2000**. Unit: GB. You can increase the storage capacity in increments of 5 GB. For more information, see [Primary instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The database engine of the destination instance. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * *   **PostgreSQL**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The major engine version of the destination instance. The value of this parameter varies based on the value of **Engine**.
   * 
   * *   Valid values when Engine is set to MySQL: **5.5, 5.6, 5.7, and 8.0**
   * *   Valid values when Engine is set to SQLServer: **2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent**
   * *   PostgreSQL: **10.0, 11.0, 12.0, 13.0, 14.0, and 15.0**
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
   * The region ID of the destination instance. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute to query the resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore data. The point in time that you specify must be earlier than the current time. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > If you set **RestoreType** to **1**, you must also specify this parameter.
   * 
   * @example
   * 2019-05-30T03:29:10Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The method that is used to restore data. Valid values:
   * 
   * *   **0**: restores data from a backup set. If you set this parameter to 0, you must also specify the **BackupSetId** parameter.
   * *   **1**: restores data to a point in time. If you set this parameter to 1, you must also specify the **RestoreTime**, **SourceRegion**, and **SourceDBInstanceName** parameters.
   * 
   * Default value: **0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  restoreType?: string;
  /**
   * @remarks
   * The ID of the source instance if you want to restore data to a point in time.
   * 
   * >  This parameter must be specified when the **RestoreType** parameter is set to **1**.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  sourceDBInstanceName?: string;
  /**
   * @remarks
   * The region ID of the source instance if you want to restore data to a point in time.
   * 
   * > If you set **RestoreType** to **1**, you must also specify this parameter.
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

