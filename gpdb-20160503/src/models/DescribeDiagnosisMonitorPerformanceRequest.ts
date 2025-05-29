// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisMonitorPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including instance IDs.
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
   * The filter condition on queries. Specify the value in the JSON format. Valid values:
   * 
   * *   `{"Type":"maxCost", "Value":"100"}`: filters the top 100 queries that are the most time-consuming.
   * 
   * *   `{"Type":"status","Value":"finished"}`: filters completed queries.
   * 
   * *   `{"Type":"status","Value":"running"}`: filters running queries.
   * 
   * *   `{"Type":"cost","Min":"30","Max":"50"}`: filters the queries that consume 30 milliseconds or more and less than 50 milliseconds. You can customize a filter condition by setting **Min** and **Max**.
   * 
   *     *   If only **Min** is specified, the queries that consume a period of time that is greater than or equal to the Min value are filtered.
   *     *   If only **Max** is specified, the queries that consume a period of time that is less than the Max value are filtered.
   *     *   If both **Min** and **Max** are specified, the queries that consume a period of time that is greater than or equal to the **Min** value and less than the **Max** value are filtered.
   * 
   * @example
   * {"Type":"maxCost", "Value":"100"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
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

