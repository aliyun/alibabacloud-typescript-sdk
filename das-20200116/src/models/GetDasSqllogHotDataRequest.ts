// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDasSQLLogHotDataRequest extends $dara.Model {
  /**
   * @remarks
   * The database account.
   * 
   * > You can specify multiple database accounts. Separate multiple accounts with a space. For example: `user1 user2 user3`.
   * 
   * @example
   * testuser
   */
  accountName?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * > This parameter is required if the database instance is a PolarDB for MySQL cluster.
   * 
   * @example
   * pi-bp179lg03445l****
   */
  childDBInstanceIDs?: string;
  /**
   * @remarks
   * The database name.
   * 
   * > You can specify multiple database names. Separate multiple names with a space. For example: `DB1 DB2 DB3`.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. This value must be a Unix timestamp in milliseconds.
   * 
   * > The end time must be later than the start time. The time range cannot exceed one day.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684820697000
   */
  end?: number;
  /**
   * @remarks
   * The SQL execution error code. You can call the [GetAsyncErrorRequestStatByCode](https://help.aliyun.com/document_detail/409804.html) operation to obtain the error code.
   * 
   * @example
   * 1064
   */
  fail?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * > You can specify multiple client IP addresses. Separate multiple IP addresses with a space. For example: `IP1 IP2 IP3`.
   * 
   * @example
   * 47.100.XX.XX
   */
  hostAddress?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The logical operator to use with multiple keywords. Valid values:
   * 
   * - **or**
   * 
   * - **and**
   * 
   * @example
   * or
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The maximum execution time in microseconds. Returns SQL statements that have an execution time less than this value.
   * 
   * @example
   * 100
   */
  maxLatancy?: number;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 5 to 100.
   * 
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  maxRows?: number;
  /**
   * @remarks
   * The maximum number of scanned rows. Returns SQL statements that scanned fewer than this number of rows.
   * 
   * @example
   * 10000
   */
  maxScanRows?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  maxSpillCnt?: number;
  /**
   * @remarks
   * The minimum execution time in microseconds. Returns SQL statements with an execution time greater than or equal to this value.
   * 
   * @example
   * 10
   */
  minLatancy?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  minRows?: number;
  /**
   * @remarks
   * The minimum number of scanned rows. Returns SQL statements that scanned at least this number of rows.
   * 
   * @example
   * 10
   */
  minScanRows?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  minSpillCnt?: number;
  /**
   * @remarks
   * The page number to return. Pages start from 1. The default value is 1.
   * 
   * @example
   * 2
   */
  pageNumbers?: number;
  /**
   * @remarks
   * The query keyword.
   * 
   * > Fuzzy search is supported. You can specify up to 10 keywords. Separate multiple keywords with a space. For example: a1 b2 c3.
   * 
   * @example
   * a1 b2
   */
  queryKeyword?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  role?: string;
  /**
   * @remarks
   * The sort key. Valid values:
   * 
   * - **ScanRows**: scanned rows.
   * 
   * - **UpdateRows**: updated rows.
   * 
   * - **Consume**: execution time.
   * 
   * - **OriginTime**: The execution start time.
   * 
   * - **ReturnRows**: returned rows.
   * 
   * @example
   * ScanRows
   */
  sortKey?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **ASC**: ascending
   * 
   * - **DESC**: descending
   * 
   * @example
   * ASC
   */
  sortMethod?: string;
  /**
   * @remarks
   * The SQL type.
   * 
   * @example
   * select
   */
  sqlType?: string;
  /**
   * @remarks
   * The start of the time range to query. This value must be a Unix timestamp in milliseconds.
   * 
   * > You can query only data that is generated after you enable DAS Enterprise Edition. The start time cannot be earlier than seven days before the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684734297000
   */
  start?: number;
  /**
   * @remarks
   * The execution state. Set this parameter to **0** to query for successfully executed SQL statements. You can also specify an error code to query for the corresponding SQL statements.
   * 
   * @example
   * 0
   */
  state?: string;
  /**
   * @remarks
   * The thread ID.
   * 
   * > You can specify multiple thread IDs. Separate multiple IDs with a space. For example: `657 658 659`.
   * 
   * @example
   * 657
   */
  threadID?: string;
  /**
   * @remarks
   * A reserved parameter.
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

