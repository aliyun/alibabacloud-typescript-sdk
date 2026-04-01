// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * RDS_MySQL
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. The time span between the start time and the end time cannot exceed 31 days. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*Z format. The time must be in UTC.
   * 
   * >  If the end date of the query is the same as the start date of the query, you can query the logs that are generated at 08:00 on the start date of the query. You can query the slow logs within a maximum time range of 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 2011-05-30Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **30** to **100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The dimension based on which the system sorts the entries to return. Valid values:
   * 
   * *   **TotalExecutionCounts**: The system sorts the entries to return based on the number of times that SQL statements are executed.
   * *   **TotalQueryTimes**: The system sorts the entries to return based on the total execution duration.
   * *   **TotalLogicalReads**: The system sorts the entries to return based on the total number of logical reads.
   * *   **TotalPhysicalReads**: The system sorts the entries to return based on the total number of physical reads.
   * 
   * > This parameter is supported only for instances that run SQL Server 2008 R2.
   * 
   * @example
   * TotalExecutionCounts
   */
  sortKey?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2011-05-01Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sortKey: 'SortKey',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sortKey: 'string',
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

