// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a specific region.
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
   * The end time of the query. Specify the time in the <i>YYYY-MM-DDThh:mmZ</i> format. The time must be in UTC.
   * 
   * > The end time must be later than the start time. The interval between the start time and the end time cannot exceed seven days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-03-17T06:30Z
   */
  endTime?: string;
  /**
   * @remarks
   * The execution duration. Unit: seconds.
   * 
   * @example
   * 1
   */
  executeCost?: string;
  /**
   * @remarks
   * The execution state. Valid values:
   * 
   * - **1**: Successful.
   * - **0**: Failed.
   * 
   * @example
   * 1
   */
  executeState?: string;
  /**
   * @remarks
   * The maximum execution duration of slow SQL statements. The value must be greater than or equal to 0. Unit: seconds.
   * 
   * @example
   * 1000
   */
  maxExecuteCost?: string;
  /**
   * @remarks
   * The minimum execution duration of slow SQL statements. The value must be greater than or equal to 0. Unit: seconds.
   * 
   * @example
   * 1
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
   * >- If the **OperationClass** parameter is specified, the value of **OperationType** must belong to the corresponding language type. For example, if the value of **OperationClass** is **DQL**, the value of **OperationType** must be a DQL statement, such as **SELECT**.
   * - If the **OperationClass** parameter is not specified, the value of **OperationType** can be any type of SQL statement.
   * - If neither the **OperationClass** parameter nor the **OperationType** parameter is specified, all types of SQL statements are returned.
   * 
   * @example
   * SELECT
   */
  operationType?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of the Integer type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30**
   * - **50**
   * - **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The SQL keyword.
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
   * The start time of the query. Specify the time in the <i>YYYY-MM-DDThh:mmZ</i> format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-03-10T06:30Z
   */
  startTime?: string;
  /**
   * @remarks
   * The username.
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

