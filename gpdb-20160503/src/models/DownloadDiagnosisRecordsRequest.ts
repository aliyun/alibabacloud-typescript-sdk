// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadDiagnosisRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to view the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
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
   * The language of the downloaded file. Valid values:
   * 
   * - **zh**: Simplified Chinese.
   * - **en**: English.
   * - **ja**: Japanese.
   * - **zh-tw**: Traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The query filter conditions in JSON format. Valid values:
   * 
   * - `{"Type":"maxCost", "Value":"100"}`: The 100 queries with the longest execution duration.
   * - `{"Type":"status","Value":"finished"}`: Completed queries.
   * - `{"Type":"status","Value":"running"}`: Running queries.
   * - `{"Type":"cost","Max":"200"}`: Short-duration queries, which are queries with an execution duration of less than 200 milliseconds.
   * - `{"Type":"cost","Min":"200","Max":"60000"}`: Medium-duration queries, which are queries with an execution duration of 200 milliseconds or more but less than 1 minute.
   * - `{"Type":"cost","Min":"60000"}`: Long-duration queries, which are queries with an execution duration of 1 minute or more.
   * - `{"Type":"cost","Min":"30","Max":"50"}`: Custom-duration queries. You can specify the minimum and maximum execution duration of the queries. **Min** specifies the minimum execution duration, and **Max** specifies the maximum execution duration. Unit: milliseconds.
   * 
   * @example
   * { "Type":"maxCost", "Value":"100" }
   */
  queryCondition?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  resourceGroupId?: string;
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
      lang: 'Lang',
      queryCondition: 'QueryCondition',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      lang: 'string',
      queryCondition: 'string',
      resourceGroupId: 'string',
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

