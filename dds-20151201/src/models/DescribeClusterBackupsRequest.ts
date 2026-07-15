// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster backup.
   * 
   * @example
   * 5664****
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * @example
   * 775051
   */
  backupJobId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp16cb162771****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region where the geo-redundant backup resides.
   * 
   * > This parameter is required when you query geo-redundant backups.
   * 
   * @example
   * cn-shanghai
   */
  destRegion?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * > This parameter is invalid if you specify the BackupId parameter.
   * 
   * @example
   * 2019-03-14T13:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to query the information about the child nodes in the cluster backup. Valid values:
   * 
   * - **true**: Returns only the basic information about the cluster backup, not the backup information about all child nodes.
   * 
   * - **false** (Default): Returns the backup information about all child nodes.
   * 
   * @example
   * true
   */
  isOnlyGetClusterBackUp?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be a positive integer. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - **30** (Default)
   * 
   * - **50**
   * 
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * > - This parameter is required when you query the backup sets of a released instance.
   * >
   * > - This parameter is required when you query geo-redundant backups.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in Coordinated Universal Time (UTC).
   * 
   * > This parameter is invalid if you specify the BackupId parameter.
   * 
   * @example
   * 2019-03-13T12:11Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupJobId: 'BackupJobId',
      DBInstanceId: 'DBInstanceId',
      destRegion: 'DestRegion',
      endTime: 'EndTime',
      isOnlyGetClusterBackUp: 'IsOnlyGetClusterBackUp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      srcRegion: 'SrcRegion',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupJobId: 'string',
      DBInstanceId: 'string',
      destRegion: 'string',
      endTime: 'string',
      isOnlyGetClusterBackUp: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      srcRegion: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

