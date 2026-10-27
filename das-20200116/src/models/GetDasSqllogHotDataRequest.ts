// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDasSQLLogHotDataRequest extends $dara.Model {
  /**
   * @remarks
   * The database account.
   * 
   * > You can use multiple database accounts for a combined query. Separate multiple database accounts with spaces. Example: `user1 user2 user3`.
   * 
   * @example
   * testuser
   */
  accountName?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * > For a PolarDB for MySQL instance, you must specify the node ID.
   * 
   * @example
   * pi-bp179lg03445l****
   */
  childDBInstanceIDs?: string;
  /**
   * @remarks
   * The database name.
   * 
   * > You can use multiple database names for a combined query. Separate multiple database names with spaces. Example: `DB1 DB2 DB3`.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The end time of the query. The time is in the UNIX timestamp format. Unit: milliseconds.
   * 
   * > The end time must be later than the start time, and the interval between the start time and the end time cannot exceed 1 day.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684820697000
   */
  end?: number;
  /**
   * @remarks
   * The error code returned when the SQL statement is executed. You can call the [GetAsyncErrorRequestStatByCode](https://help.aliyun.com/document_detail/409804.html) operation to obtain the error code.
   * 
   * @example
   * 1064
   */
  fail?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * > You can use multiple client IP addresses for a combined query. Separate multiple client IP addresses with spaces. Example: `IP1 IP2 IP3`.
   * 
   * @example
   * 47.100.XX.XX
   */
  hostAddress?: string;
  /**
   * @remarks
   * The database instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The logical relationship between multiple keywords. Valid values:
   * - **or**: OR.
   * - **and**: AND.
   * 
   * @example
   * or
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The maximum execution duration. Unit: microseconds. This parameter is used to query SQL statements whose execution duration is less than the specified value.
   * 
   * @example
   * 100
   */
  maxLatancy?: number;
  /**
   * @remarks
   * The maximum number of records per page for the paging query. Valid values: 5 to 100.
   * 
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  maxRows?: number;
  /**
   * @remarks
   * The maximum number of scanned rows. This parameter is used to query SQL statements whose number of scanned rows is less than the specified value.
   * 
   * @example
   * 10000
   */
  maxScanRows?: number;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  maxSpillCnt?: number;
  /**
   * @remarks
   * The minimum execution duration. Unit: microseconds. This parameter is used to query SQL statements whose execution duration is greater than or equal to the specified value.
   * 
   * @example
   * 10
   */
  minLatancy?: number;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  minRows?: number;
  /**
   * @remarks
   * The minimum number of scanned rows. This parameter is used to query SQL statements whose number of scanned rows is greater than or equal to the specified value.
   * 
   * @example
   * 10
   */
  minScanRows?: number;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  minSpillCnt?: number;
  /**
   * @remarks
   * The page number for the paging query. Pages start from 1. Default value: 1.
   * 
   * @example
   * 2
   */
  pageNumbers?: number;
  /**
   * @remarks
   * The keyword.
   * 
   * > Fuzzy match is supported. You can use a maximum of 10 keywords for a combined query. Separate multiple keywords with spaces. Example: a1 b2 c3.
   * 
   * @example
   * a1 b2
   */
  queryKeyword?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  role?: string;
  /**
   * @remarks
   * The sort key. Valid values:
   * - **ScanRows**: the number of scanned rows.
   * - **UpdateRows**: the number of updated rows.
   * - **Consume**: the execution duration.
   * - **OriginTime**: the execution time.
   * - **ReturnRows**: the number of returned rows.
   * 
   * @example
   * ScanRows
   */
  sortKey?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - **ASC**: ascending order.
   * - **DESC**: descending order.
   * 
   * @example
   * ASC
   */
  sortMethod?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * - **select**
   * - **update**
   * - **delete**
   * 
   * @example
   * select
   */
  sqlType?: string;
  /**
   * @remarks
   * The start time of the query. The time is in the UNIX timestamp format. Unit: milliseconds.
   * 
   * > You can only query data generated after DAS Enterprise Edition is enabled. The start time cannot be more than 7 days earlier than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684734297000
   */
  start?: number;
  /**
   * @remarks
   * The execution result. If you enter **0**, the system queries SQL statements that are successfully executed. You can also enter a specific error code to query the corresponding SQL statements.
   * 
   * @example
   * 0
   */
  state?: string;
  /**
   * @remarks
   * The thread ID.
   * 
   * > You can use multiple thread IDs for a combined query. Separate multiple thread IDs with spaces. Example: `ThreadID1 ThreadID2 ThreadID3`.
   * 
   * @example
   * 657
   */
  threadID?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  traceId?: string;
  /**
   * @remarks
   * The transaction ID.
   * 
   * @example
   * 0
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      childDBInstanceIDs: 'ChildDBInstanceIDs',
      DBName: 'DBName',
      end: 'End',
      fail: 'Fail',
      hostAddress: 'HostAddress',
      instanceId: 'InstanceId',
      logicalOperator: 'LogicalOperator',
      maxLatancy: 'MaxLatancy',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      maxRows: 'MaxRows',
      maxScanRows: 'MaxScanRows',
      maxSpillCnt: 'MaxSpillCnt',
      minLatancy: 'MinLatancy',
      minRows: 'MinRows',
      minScanRows: 'MinScanRows',
      minSpillCnt: 'MinSpillCnt',
      pageNumbers: 'PageNumbers',
      queryKeyword: 'QueryKeyword',
      role: 'Role',
      sortKey: 'SortKey',
      sortMethod: 'SortMethod',
      sqlType: 'SqlType',
      start: 'Start',
      state: 'State',
      threadID: 'ThreadID',
      traceId: 'TraceId',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      childDBInstanceIDs: 'string',
      DBName: 'string',
      end: 'number',
      fail: 'string',
      hostAddress: 'string',
      instanceId: 'string',
      logicalOperator: 'string',
      maxLatancy: 'number',
      maxRecordsPerPage: 'number',
      maxRows: 'number',
      maxScanRows: 'number',
      maxSpillCnt: 'number',
      minLatancy: 'number',
      minRows: 'number',
      minScanRows: 'number',
      minSpillCnt: 'number',
      pageNumbers: 'number',
      queryKeyword: 'string',
      role: 'string',
      sortKey: 'string',
      sortMethod: 'string',
      sqlType: 'string',
      start: 'number',
      state: 'string',
      threadID: 'string',
      traceId: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

