// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsActionLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the logs to be queried. Specify the time in the ISO 8601 standard in the **yyyy-MM-ddTHH:mmZ** format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time. The maximum time range that can be specified is 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-11T09:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword that you want to use for fuzzy match in the query.
   * 
   * @example
   * table_test
   */
  keyword?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
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
   * The phase during which the logs to be queried were generated. Valid values:
   * 
   * *   **StructureMigrate**: schema migration.
   * *   **FullDataSync**: full data synchronization.
   * *   **IncrementalSync**: incremental data synchronization.
   * 
   * >  If you do not specify this parameter, logs of all the phases are queried.
   * 
   * @example
   * FullDataSync
   */
  stage?: string;
  /**
   * @remarks
   * The start time of the logs to be queried. Specify the time in the ISO 8601 standard in the **yyyy-MM-ddTHH:mmZ** format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-11T08:30:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The types of the logs. Separate multiple log types with commas (,). Valid values:
   * 
   * *   **INFO**
   * *   **WARN**
   * *   **ERROR**
   * 
   * >  If you do not specify this parameter, logs of all types are queried.
   * 
   * @example
   * INFO,WARN,ERROR
   */
  state?: string;
  /**
   * @remarks
   * The ID of the real-time data ingestion job.
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

