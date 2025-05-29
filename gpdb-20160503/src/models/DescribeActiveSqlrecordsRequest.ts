// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveSQLRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
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
   * @example
   * testdb
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The end time must be later than the start time.
   * 
   * @example
   * 2022-05-07T07:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword used to filter queries.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The maxmum amount of time consumed by traces. Unit: milliseconds.
   * 
   * @example
   * 600
   */
  maxDuration?: string;
  /**
   * @remarks
   * The minimum amount of time consumed by traces. Unit: milliseconds.
   * 
   * @example
   * 300
   */
  minDuration?: string;
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
   * The beginning of the time range to query. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * @example
   * 2021-08-03T09:30Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the database account.
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

