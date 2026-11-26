// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveSQLRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to view the details of all AnalyticDB for PostgreSQL instances in the target region, including the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name. Default value: all databases.
   * 
   * @example
   * testdb
   */
  database?: string;
  /**
   * @remarks
   * The end time of the query. Format: `yyyy-MM-ddTHH:mm:ssZ`. The end time must be later than the start time.
   * 
   * @example
   * 2022-05-07T07:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The query keyword.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum execution duration, in seconds.
   * 
   * @example
   * 600
   */
  maxDuration?: string;
  /**
   * @remarks
   * The minimum execution duration, in seconds. For example, a value of 100 specifies queries that run for more than 100 seconds.
   * 
   * @example
   * 300
   */
  minDuration?: string;
  /**
   * @remarks
   * The sort field and sort order.
   * 
   * Default value: `{"Field":"StartTime","Type":"Desc"}`, which indicates sorting by start time in descending order. Other sort fields and sort orders are not supported.
   * 
   * @example
   * {"Field":"StartTime","Type":"Desc"}
   */
  order?: string;
  /**
   * @remarks
   * The start time of the query. Format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2021-08-03T09:30Z
   */
  startTime?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * testuser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      keyword: 'Keyword',
      maxDuration: 'MaxDuration',
      minDuration: 'MinDuration',
      order: 'Order',
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
      maxDuration: 'string',
      minDuration: 'string',
      order: 'string',
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

