// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
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
   * The end date of the query. The end date must be later than or equal to the start date, and the interval between the start date and the end date cannot exceed 31 days. Format: <i>yyyy-MM-dd</i>Z (UTC).
   * 
   * > If the end date is the same as the start date, the query starts from 08:00 on the start date and covers up to 24 hours of slow query log statistics.
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
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type.
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
   * The sorting criterion. Valid values:
   * * **TotalExecutionCounts**: sorted by total number of executions in descending order.
   * * **TotalQueryTimes**: sorted by total execution duration in descending order.
   * * **TotalLogicalReads**: sorted by total number of logical reads in descending order.
   * * **TotalPhysicalReads**: sorted by total number of physical reads in descending order.
   * 
   * > This parameter is supported only for SQL Server 2008 R2 instances.
   * 
   * @example
   * TotalExecutionCounts
   */
  sortKey?: string;
  /**
   * @remarks
   * The start date of the query. Format: <i>yyyy-MM-dd</i>Z (UTC).
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

