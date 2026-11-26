// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWaitingSQLRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in the specified region.
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
   * The end time of the query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * If you do not specify this parameter, no end time is set, and all lock diagnosis information after the start time is returned. If the start time is also not specified, all lock diagnosis information is returned.
   * 
   * @example
   * 2022-08-20T07:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword for the query.
   * 
   * @example
   * table
   */
  keyword?: string;
  /**
   * @remarks
   * The sort field and sort order.
   * 
   * Default value: `{"Field":"StartTime","Type":"Desc"}`, which indicates that the results are sorted by start time in descending order. Other sort fields and sort orders are not supported.
   * 
   * @example
   * {"Field":"StartTime","Type":"Desc"}
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of the Integer type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **30**
   * - **50**
   * - **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The filter condition for the query. Valid values:
   * 
   * - `{"Type":"maxCost","Value":"10"}`: the top 10 queries with the longest wait time.
   * - `{"Type":"status","Value":"LockWaiting"}`: queries that are waiting for locks.
   * - `{"Type":"status","Value":"ResourceWaiting"}`: queries that are waiting for resources.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Type":"maxCost","Value":"10"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * If you do not specify this parameter, no start time is set, and all lock diagnosis information before the end time is returned. If the end time is also not specified, all lock diagnosis information is returned.
   * 
   * @example
   * 2022-08-15T06:59Z
   */
  startTime?: string;
  /**
   * @remarks
   * The username. If you do not specify this parameter, the lock wait information of all users is queried.
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

