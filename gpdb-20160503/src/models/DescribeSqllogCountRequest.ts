// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogCountRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
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
   * The end time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * > The end time must be later than the start time. The time span between the start time and the end time cannot exceed seven days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-12-14T11:22Z
   */
  endTime?: string;
  /**
   * @remarks
   * The execution duration. Unit: seconds.
   * 
   * @example
   * 100
   */
  executeCost?: string;
  /**
   * @remarks
   * The execution state. Valid values:
   * 
   * - 1: success
   * - 0: failure
   * - 0,1 or 1,0: all
   * 
   * @example
   * 1
   */
  executeState?: string;
  /**
   * @remarks
   * The maximum execution duration of slow SQL queries. The value must be greater than or equal to 0. Unit: seconds.
   * 
   * @example
   * 1000
   */
  maxExecuteCost?: string;
  /**
   * @remarks
   * The minimum execution duration of slow SQL queries. The value must be greater than or equal to 0. Unit: seconds.
   * 
   * @example
   * 10
   */
  minExecuteCost?: string;
  /**
   * @remarks
   * The operation class. Valid values:
   * 
   * - **DQL**
   * - **DML**
   * - **DDL**
   * - **DCL**
   * - **TCL**
   * 
   * @example
   * DQL
   */
  operationClass?: string;
  /**
   * @remarks
   * The type of the executed SQL statement.
   * 
   * >- If the **OperationClass** parameter is specified, the value of **OperationType** must belong to the corresponding language type. For example, if **OperationClass** is set to **DQL**, the value of **OperationType** must be a DQL-type SQL statement, such as **SELECT**.
   * >- If the **OperationClass** parameter is not specified, the value of **OperationType** can be any type of SQL statement.
   * >- If neither the **OperationClass** nor the **OperationType** parameter is specified, all types of SQL statements are returned.
   * 
   * @example
   * SELECT
   */
  operationType?: string;
  /**
   * @remarks
   * The query keywords.
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
   * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-12-12T11:22Z
   */
  startTime?: string;
  /**
   * @remarks
   * The database username.
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

