// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * 1679758862
   */
  backupId?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all clusters in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp18934i73vb5****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the \\`yyyy-MM-ddTHH:mmZ\\` format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-20T02:30Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - 30
   * 
   * - 50
   * 
   * - 100
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to query only cross-region backups. Set the value to true to query only cross-region backups. Set the value to false to query only local backups.
   * 
   * @example
   * false
   */
  remote?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the \\`yyyy-MM-ddTHH:mmZ\\` format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2011-06-01T16:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remote: 'Remote',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      remote: 'boolean',
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

