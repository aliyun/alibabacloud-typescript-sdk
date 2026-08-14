// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 32732****
   */
  backupId?: string;
  /**
   * @remarks
   * The RAM role name of the backup set owner\\"s Alibaba Cloud account.
   * 
   * > Specify this parameter only when backing up across Alibaba Cloud accounts.
   * 
   * @example
   * role-for-xxx
   */
  crossRole?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the backup set owner.
   * 
   * > Specify this parameter only when backing up across Alibaba Cloud accounts.
   * 
   * @example
   * 195****
   */
  crossUid?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * > Call [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) to list cluster IDs in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp18934i73vb5****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. It must be later than the start time. Format: yyyy-MM-ddTHH:mmZ.
   * 
   * @example
   * 2022-06-02T16:00Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: positive integers greater than 0 and no larger than the maximum value of the integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30** (default)
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
   * The region ID.
   * 
   * > Call [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) to list supported regions and zones for AnalyticDB for MySQL, including region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time of the query. Format: yyyy-MM-ddTHH:mmZ.
   * 
   * @example
   * 2022-06-01T16:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      crossRole: 'CrossRole',
      crossUid: 'CrossUid',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      crossRole: 'string',
      crossUid: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

