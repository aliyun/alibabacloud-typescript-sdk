// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWaitingSQLRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the instance IDs of all AnalyticDB for PostgreSQL instances in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC. The end time must be later than the start time.
   * 
   * If this parameter is not specified, all lock diagnostics records that are generated after the query start time are returned. If the query start time is not specified either, all lock diagnostics records are returned.
   * 
   * @example
   * 2022-08-20T07:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword used to filter queries.
   * 
   * @example
   * table
   */
  keyword?: string;
  /**
   * @remarks
   * The field used to sort lock diagnostics records and the sorting order.
   * 
   * Default value: `{"Field":"StartTime","Type":"Desc"}`, which indicates that lock diagnostics records are sorted by the start time in descending order. No other values are supported.
   * 
   * @example
   * {"Field":"StartTime","Type":"Desc"}
   */
  order?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
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
   * The filter condition on queries. Valid values:
   * 
   * *   `{"Type":"maxCost","Value":"10"}`: filters the top 10 longest-waiting queries.
   * *   `{"Type":"status","Value":"LockWaiting"}`: filters lock-waiting queries.
   * *   `{"Type":"status","Value":"ResourceWaiting"}`: filters resource-waiting queries.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Type":"maxCost","Value":"10"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * If this parameter is not specified, all lock diagnostics records that are generated before the query end time are returned. If the query end time is not specified either, all lock diagnostics records are returned.
   * 
   * @example
   * 2022-08-15T06:59Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the database account. If this parameter is not specified, the lock diagnostics records of all database accounts are queried.
   * 
   * @example
   * testUser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      keyword: 'Keyword',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryCondition: 'QueryCondition',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      keyword: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryCondition: 'string',
      startTime: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

