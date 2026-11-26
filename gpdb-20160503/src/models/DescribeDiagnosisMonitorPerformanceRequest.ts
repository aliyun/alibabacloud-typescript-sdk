// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisMonitorPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in the specified region, including instance IDs.
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
   * The end time of the query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * @example
   * 2022-05-07T07:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The filter conditions for the query. The value must be in JSON format. Valid values:
   * 
   * - `{"Type":"maxCost", "Value":"100"}`: The 100 queries that take the longest time to execute.
   * - `{"Type":"status","Value":"finished"}`: Completed queries.
   * - `{"Type":"status","Value":"running"}`: Running queries.
   * - `{"Type":"cost","Min":"30","Max":"50"}`: Queries with custom execution durations. You can specify the minimum and maximum execution durations. **Min** specifies the minimum execution duration. **Max** specifies the maximum execution duration. Unit: milliseconds.
   *     - If you specify only **Min**, the system returns queries whose execution duration is greater than the specified value.
   *     - If you specify only **Max**, the system returns queries whose execution duration is less than the specified value.
   *     - If you specify both **Min** and **Max**, the system returns queries whose execution duration is greater than or equal to the value of **Min** and less than or equal to the value of **Max**.
   * 
   * @example
   * {"Type":"maxCost", "Value":"100"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * @example
   * 2022-05-07T06:59Z
   */
  startTime?: string;
  /**
   * @remarks
   * The username.
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

