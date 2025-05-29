// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances within a region.
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
   * > The end time must be later than the start time. The maximum time range that can be specified is seven days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-03-17T06:30Z
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
   * The maximum amount of time consumed by a slow query. Unit: seconds. Minimum value: 0.
   * 
   * @example
   * 1000
   */
  maxExecuteCost?: string;
  /**
   * @remarks
   * The minimum amount of time consumed by a slow query. Unit: seconds. Minimum value: 0.
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
   * > 
   * 
   * *   If **OperationClass** is specified, the value of **OperationType** must belong to the corresponding query language. For example, if **OperationClass** is set to **DQL**, the value of **OperationType** must be a **DQL** statement such as **SELECT**.
   * 
   * *   If **OperationClass** is not specified, the value of **OperationType** can be an SQL statement of any query language.
   * *   If **OperationClass** and **OperationType** are not specified, all types of SQL statements are returned.
   * 
   * @example
   * SELECT
   */
  operationType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
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
   * The keywords of the SQL statement.
   * 
   * @example
   * select 1
   */
  queryKeywords?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 100.**.**.90
   */
  sourceIP?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-03-10T06:30Z
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
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
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

