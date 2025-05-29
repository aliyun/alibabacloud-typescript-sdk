// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadDiagnosisRecordsRequest extends $dara.Model {
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
   * The end of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * @example
   * 2022-05-07T07:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the file that contains the query diagnostic information. Valid values:
   * 
   * *   **zh**: simplified Chinese
   * *   **en**: English
   * *   **ja**: Japanese
   * *   **zh-tw**: traditional Chinese
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The filter condition on queries. The value is in the JSON format. Valid values:
   * 
   * *   `{"Type":"maxCost", "Value":"100"}`: filters the top 100 queries that are the most time-consuming.
   * *   `{"Type":"status","Value":"finished"}`: filters completed queries.
   * *   `{"Type":"status","Value":"running"}`: filters running queries.
   * *   `{"Type":"cost","Max":"200"}`: filters the queries that consume less than 200 milliseconds.
   * *   `{"Type":"cost","Min":"200","Max":"60000"}`: filters the queries that consume 200 milliseconds or more and less than 1 minute.
   * *   `{"Type":"cost","Min":"60000"}`: filters the queries that consume 1 minute or more.
   * *   `{"Type":"cost","Min":"30","Max":"50"}`: filters the queries that consume 30 milliseconds or more and less than 50 milliseconds. You can customize a filter condition by setting **Min** and **Max**.
   * 
   * @example
   * { "Type":"maxCost", "Value":"100" }
   */
  queryCondition?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. For more information about how to obtain the ID of a resource group, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
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

