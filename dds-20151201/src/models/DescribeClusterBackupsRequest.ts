// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster backup set.
   * 
   * @example
   * 5664****
   */
  backupId?: string;
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
   * The region where cross-region backups reside.
   * 
   * >  This parameter is required if you want to query cross-region backups.
   * 
   * @example
   * cn-shanghai
   */
  destRegion?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC. The end time must be later than the start time.
   * 
   * @example
   * 2019-03-14T13:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to query information about child nodes in the cluster backup. Valid values:
   * 
   * *   **true**: The system returns only the basic information of the cluster backup.
   * *   **false** (default): The system returns the backup information of all child nodes.
   * 
   * @example
   * true
   */
  isOnlyGetClusterBackUp?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**. The page number must be a positive integer.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > 
   * 
   * *   This parameter is required if you want to query the backup sets of a released instance.
   * 
   * *   This parameter is required if you want to query cross-region backups.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * @example
   * 2019-03-13T12:11:14Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBInstanceId: 'DBInstanceId',
      destRegion: 'DestRegion',
      endTime: 'EndTime',
      isOnlyGetClusterBackUp: 'IsOnlyGetClusterBackUp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      srcRegion: 'SrcRegion',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBInstanceId: 'string',
      destRegion: 'string',
      endTime: 'string',
      isOnlyGetClusterBackUp: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
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

