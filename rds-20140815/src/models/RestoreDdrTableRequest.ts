// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreDdrTableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cross-region backup set. You can call the DescribeCrossRegionBackups operation to query the ID.
   * >This parameter is required when **RestoreType** is set to **0**.
   * 
   * @example
   * 279563
   */
  backupId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain a maximum of 64 ASCII characters and cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID of the existing instance to be recovered.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp****
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the destination region. You can call the DescribeRegions operation to query region IDs.
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
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore data. The specified point in time must be earlier than the current time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * >This parameter is required when **RestoreType** is set to **1**.
   * 
   * @example
   * 2020-04-25T16:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The restoration method. Valid values:
   * * **0**: restores data based on a backup set. If you set this parameter to 0, you must also specify the **BackupId** parameter.
   * * **1**: restores data to a point in time. If you set this parameter to 1, you must also specify the **RestoreTime**, **SourceRegion**, and **SourceDBInstanceName** parameters.
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
   * The instance ID of the source instance to recover data to a point in time.
   * >This parameter is required when **RestoreType** is set to **1**.
   * 
   * @example
   * rm-bp****
   */
  sourceDBInstanceName?: string;
  /**
   * @remarks
   * The ID of the source region for point-in-time restoration.
   * >This parameter is required when **RestoreType** is set to **1**.
   * 
   * @example
   * cn-beijing
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The databases and tables that you want to restore. Format:
   * ```[{"type":"db","name":"<Name of database 1>","newname":"<New name of database 1>","tables":[{"type":"table","name":"<Name of table 1 in database 1>","newname":"<New name of table 1>"},{"type":"table","name":"<Name of table 2 in database 1>","newname":"<New name of table 2>"}]},{"type":"db","name":"<Name of database 2>","newname":"<New name of database 2>","tables":[{"type":"table","name":"<Name of table 3 in database 2>","newname":"<New name of table 3>"},{"type":"table","name":"<Name of table 4 in database 2>","newname":"<New name of table 4>"}]}]```
   * 
   * This parameter is required.
   * 
   * @example
   * [{"type":"db","name":"testdb1","newname":"testdb1","tables":[{"type":"table","name":"test1","newname":"test1_backup"},{"type":"table","name":"test2","newname":"test2_backup"}]}]
   */
  tableMeta?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
      sourceDBInstanceName: 'SourceDBInstanceName',
      sourceRegion: 'SourceRegion',
      tableMeta: 'TableMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
      sourceDBInstanceName: 'string',
      sourceRegion: 'string',
      tableMeta: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

