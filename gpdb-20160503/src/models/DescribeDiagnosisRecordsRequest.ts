// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
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
   * adbtest
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC. The end time must be later than the start time.
   * 
   * @example
   * 2022-05-07T07:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword of the SQL statement.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The order of fields in the console. You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
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
   * The filter condition on queries. Specify the value in the JSON format. Valid values:
   * 
   * *   `{"Type":"maxCost", "Value":"100"}`: filters the top 100 queries that are the most time-consuming.
   * 
   * *   `{"Type":"status","Value":"finished"}`: filters completed queries.
   * 
   * *   `{"Type":"status","Value":"running"}`: filters running queries.
   * 
   * *   `{"Type":"cost","Min":"30","Max":"50"}`: filters the queries that consume a period of 30 milliseconds to less than 50 milliseconds. You can customize a filter condition by setting **Min** and **Max**.
   * 
   *     *   If only **Min** is specified, the queries that consume a period of time that is greater than the Min value are filtered.
   *     *   If only **Max** is specified, the queries that consume a period of time that is less than the Max value are filtered.
   *     *   If both **Min** and **Max** are specified, the queries that consume a period of time that is greater than or equal to the **Min** value and less than or equal to the **Max** value are filtered.
   * 
   * @example
   * { "Type":"maxCost", "Value":"100" }
   */
  queryCondition?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * @example
   * 2022-05-07T06:59Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * adbpguser
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

