// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreDdrTableRequest extends $dara.Model {
  /**
   * @remarks
   * The cross-region backup set ID. You can call the DescribeCrossRegionBackups operation to query the IDs of the backup sets that are available to an instance.
   * 
   * >  If you set the **RestoreType** parameter to **0**, you must also specify the BackupId parameter.
   * 
   * @example
   * 279563
   */
  backupId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The source instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bpxxxxx
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the destination instance. You can call the DescribeRegions operation to query the most recent region list.
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
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore data. The point in time that you specify must be earlier than the current time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > If **RestoreType** is set to **BackupTime**, you must specify this parameter.
   * 
   * @example
   * 2020-04-25T16:00:00Z
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
   * The ID of the source instance whose data you want to restore to a point in time.
   * 
   * >  If you set the **RestoreType** parameter to **1**, you must also specify the SourceDBInstanceName parameter.
   * 
   * @example
   * rm-bpxxxxx
   */
  sourceDBInstanceName?: string;
  /**
   * @remarks
   * The region ID of the source instance if you want to restore data to a point in time.
   * 
   * > : If you set **RestoreType** to **1**, you must also specify this parameter.
   * 
   * @example
   * cn-beijing
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The names of the databases and tables that you want to restore. The value is in the following format: `[{"type":"db","name":"<The name of Database 1 on the source instance>","newname":"<The name of Database 1 on the destination instance>","tables":[{"type":"table","name":"<The name of Table 1 in Database 1 on the source instance>","newname":"<The name of Table 1 in Database 1 on the destination instance>"},{"type":"table","name":"<The name of Table 2 in Database 1 on the source instance>","newname":"<The name of Table 2 in Database 1 on the destination instance>"}]},{"type":"db","name":"<The name of Database 2 on the source instance>","newname":"<The name of Database 2 on the destination instance>","tables":[{"type":"table","name":"<The name of Table 3 in Database 2 on the source instance>","newname":"<The name of Table 3 in Database 2 on the destination instance>"},{"type":"table","name":"<The name of Table 4 in Database 2 on the source instance>","newname":"<The name of Table 4 in Database 2 on the destination instance>"}]}]`
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

