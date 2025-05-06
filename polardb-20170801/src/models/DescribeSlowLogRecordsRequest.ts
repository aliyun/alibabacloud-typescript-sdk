// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) interface to view all cluster information in the target region, including the Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Database name.
   * 
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @remarks
   * End time of the query, which must be later than the start time, and the time interval between the start and end times must not exceed 24 hours. The format is `YYYY-MM-DDThh:mmZ` (UTC time).
   * 
   * > The input is UTC time (i.e., 0 timezone). If your service is currently in a different timezone, please perform a time conversion. For example, if the current timezone of your service is Beijing Time (UTC+8) at 12:00, and you need to query the slow logs between 08:00-12:00 Beijing Time, you should input 00:00-04:00.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-11-16T04:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * pi-**********
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) interface to view the available regions under the target account, including the Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Unique identifier of the SQL statement in the slow log statistics, which can be used to obtain the detailed slow logs for that SQL statement.
   * 
   * @example
   * U2FsdGVk****
   */
  SQLHASH?: string;
  /**
   * @remarks
   * Start time of the query. The format is `YYYY-MM-DDThh:mmZ` (UTC time).
   * 
   * > * Supports viewing slow log information up to 30 days.
   * > * The input is UTC time (i.e., 0 timezone). If your service is currently in a different timezone, please perform a time conversion. For example, if the current timezone of your service is Beijing Time (UTC+8) at 12:00, and you need to query the slow logs between 08:00-12:00 Beijing Time, you should input 00:00-04:00.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-11-15T16:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      endTime: 'EndTime',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SQLHASH: 'SQLHASH',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      endTime: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SQLHASH: 'string',
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

