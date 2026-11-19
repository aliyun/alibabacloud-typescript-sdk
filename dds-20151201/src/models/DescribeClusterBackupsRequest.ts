// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster backup ID.
   * 
   * @example
   * 5664****
   */
  backupId?: string;
  /**
   * @remarks
   * The backup job ID.
   * 
   * @example
   * 775051
   */
  backupJobId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp16cb162771****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region where the cross-region backup resides.
   * 
   * > This parameter is required when you query cross-region backups.
   * 
   * @example
   * cn-shanghai
   */
  destRegion?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * > This parameter does not take effect when BackupId is specified.
   * 
   * @example
   * 2019-03-14T13:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to query the information about child nodes in the cluster backup. Valid values:
   * - **true**: returns only the basic information about the cluster backup and does not return the backup information about all child nodes.
   * - **false** (default): returns the backup information about all child nodes.
   * 
   * @example
   * true
   */
  isOnlyGetClusterBackUp?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**. Valid values: positive integers.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30** (default)
   * - **50**
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
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
   * > - This parameter is required when you query cross-region backups.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * > This parameter does not take effect when BackupId is specified.
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

