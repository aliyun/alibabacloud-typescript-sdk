// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsActionLogsRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The ID of the cluster. The cluster must be of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the logs. Specify the time in the **yyyy-MM-ddTHH:mmZ** format. The time must be in UTC.
   * 
   * > When you query logs, the end time must be later than the start time, and the time span between the start time and the end time cannot exceed 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-11T09:30Z
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword for the query. Fuzzy matching is applied during log query.
   * 
   * @example
   * table_test
   */
  keyword?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be a positive integer that is greater than 0 and does not exceed the maximum value of the Integer data type. Default value: 1.
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
   * - **50**
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
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the region ID.
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
   * The task stage. Valid values:
   * 
   * - **StructureMigrate**: Schema migration.
   * - **FullDataSync**: Full data synchronization.
   * - **IncrementalSync**: Incremental data synchronization.
   * 
   * > If you do not specify this parameter, logs of all task stages are queried by default.
   * 
   * @example
   * FullDataSync
   */
  stage?: string;
  /**
   * @remarks
   * The start time of the logs. Specify the time in the **yyyy-MM-ddTHH:mmZ** format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-11T08:30Z
   */
  startTime?: string;
  /**
   * @remarks
   * The log type. Separate multiple log types with commas (,). Valid values:
   * 
   * - **INFO**: Information.
   * - **WARN**: Warning.
   * - **ERROR**: Error.
   * 
   * > If you do not specify this parameter, logs of all types are queried by default.
   * 
   * @example
   * INFO,WARN,ERROR
   */
  state?: string;
  /**
   * @remarks
   * The ID of the data link task.
   * 
   * This parameter is required.
   * 
   * @example
   * aps-hz109vpvt4fg8528d****
   */
  workloadId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      keyword: 'Keyword',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      stage: 'Stage',
      startTime: 'StartTime',
      state: 'State',
      workloadId: 'WorkloadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      keyword: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      stage: 'string',
      startTime: 'string',
      state: 'string',
      workloadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

