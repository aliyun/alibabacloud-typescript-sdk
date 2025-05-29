// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadSQLLogsRecordsRequest extends $dara.Model {
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
   * @example
   * testdb
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-08T06:59Z
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
   * The execution status of the SQL statement.
   * 
   * *   **1**: successful.
   * *   **0**: failed.
   * 
   * @example
   * 1
   */
  executeState?: string;
  /**
   * @remarks
   * The language of the file that contains the query diagnostic information. Valid values:
   * 
   * *   **zh**: simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum amount of time consumed by a slow query. Unit: seconds. Minimum value: 0.
   * 
   * @example
   * 999
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
   * The type of the query language. Example: DQL, DML, or DDL.
   * 
   * @example
   * DQL
   */
  operationClass?: string;
  /**
   * @remarks
   * The type of the SQL statement. Example: SELECT.
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
   * The keywords that are used for query.
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
   * 100.XX.XX.90
   */
  sourceIP?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-07T06:59Z
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
      executeCost: 'ExecuteCost',
      executeState: 'ExecuteState',
      lang: 'Lang',
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
      lang: 'string',
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

