// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogCountRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
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
   * testdb
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * > The end time must be later than the start time. The maximum time range that can be specified is seven days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-12-14T11:22Z
   */
  endTime?: string;
  /**
   * @remarks
   * The execution duration of the SQL statement. Unit: seconds.
   * 
   * @example
   * 100
   */
  executeCost?: string;
  /**
   * @remarks
   * The execution status of the query. Valid values:
   * 
   * *   1: successful.
   * *   0: failed.
   * *   0,1 or 1,0: all.
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
   * 10
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
   * *   If you specify **OperationClass**, the value of **OperationType** must be of the corresponding query language. For example, if you set **OperationClass** to **DQL**, the value of **OperationType** must be a **DQL** statement such as **SELECT**.
   * 
   * *   If you leave **OperationClass** empty, the value of **OperationType** can be an SQL statement of any query language.
   * 
   * *   If you leave **OperationClass** and **OperationType** empty, all types of SQL statements are returned.
   * 
   * @example
   * SELECT
   */
  operationType?: string;
  /**
   * @remarks
   * The keywords that are used to query audit logs.
   * 
   * @example
   * test
   */
  queryKeywords?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 10.**.**.13
   */
  sourceIP?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-12-12T11:22Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the database account that is used to connect to the database.
   * 
   * @example
   * adbpgadmin
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

