// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogsV2Request extends $dara.Model {
  /**
   * @remarks
   * The ID of instance.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query details of all AnalyticDB for PostgreSQL instances in a specific region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adbpgadmin
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time. The interval cannot be more than 24 hours.
   * 
   * @example
   * 2022-03-17T06:30Z
   */
  endTime?: string;
  /**
   * @remarks
   * The execution duration of the SQL statement. Unit: seconds.
   * 
   * @example
   * 1
   */
  executeCost?: string;
  /**
   * @remarks
   * The execution status of the SQL statement. Valid values:
   * 
   * *   **1**: successful.
   * *   **0**: failed.
   * 
   * @example
   * success
   */
  executeState?: string;
  /**
   * @remarks
   * The maximum amount of time consumed by a slow query. Minimum value: 0. Unit: seconds.
   * 
   * @example
   * 1000
   */
  maxExecuteCost?: string;
  /**
   * @remarks
   * The minimum amount of time consumed by a slow query. Minimum value: 0. Unit: seconds.
   * 
   * @example
   * 1
   */
  minExecuteCost?: string;
  /**
   * @remarks
   * The type of the query language. Valid values:
   * 
   * *   **DQL**
   * *   **DML**
   * *   **DDL**
   * *   **DCL**
   * *   **TCL**
   * 
   * @example
   * DQL
   */
  operationClass?: string;
  /**
   * @remarks
   * The type of the SQL statement.
   * 
   * > *   If the **OperationClass** parameter is specified, the **OperationType** value must belong to the corresponding query language. For example, if the **OperationClass** value is **DQL**, the **OperationType** value must be a **DQL** SQL statement such as **SELECT**.
   * >*   If the **OperationClass** parameter is not specified, the **OperationType** value can be an SQL statement of all query languages.
   * >*   If neither of the **OperationClass** and **OperationType** parameters is specified, all types of SQL statements are returned.
   * 
   * @example
   * SELECT
   */
  operationType?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of the page to return. The maximum value is 200.
   * 
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @remarks
   * The keywords of the SQL statement.
   * 
   * @example
   * select 1
   */
  queryKeywords?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 100.XX.XX.90
   */
  sourceIP?: string;
  /**
   * @remarks
   * The beginning of the time range. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
   * 
   * @example
   * 2022-03-10T06:30Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * testadmin
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      executeCost: 'ExecuteCost',
      executeState: 'ExecuteState',
      maxExecuteCost: 'MaxExecuteCost',
      minExecuteCost: 'MinExecuteCost',
      operationClass: 'OperationClass',
      operationType: 'OperationType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceIP: 'SourceIP',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      executeCost: 'string',
      executeState: 'string',
      maxExecuteCost: 'string',
      minExecuteCost: 'string',
      operationClass: 'string',
      operationType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      queryKeywords: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceIP: 'string',
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

