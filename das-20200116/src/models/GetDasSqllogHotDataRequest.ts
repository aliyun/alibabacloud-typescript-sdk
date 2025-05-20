// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDasSQLLogHotDataRequest extends $dara.Model {
  /**
   * @remarks
   * The account of the database.
   * 
   * >  You can specify multiple database accounts that are separated by spaces. Example: `user1 user2 user3`.
   * 
   * @example
   * testuser
   */
  accountName?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  This parameter must be specified if the database instance is a PolarDB for MySQL cluster.
   * 
   * @example
   * pi-bp179lg03445l****
   */
  childDBInstanceIDs?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * >  You can specify multiple database names that are separated by spaces. Example: `DB1 DB2 DB3`.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time. The interval between the start time and the end time cannot exceed 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684820697000
   */
  end?: number;
  /**
   * @remarks
   * The error code of SQL execution. You can call the [GetAsyncErrorRequestStatByCode](https://help.aliyun.com/document_detail/409804.html) operation to query MySQL error codes in SQL Explorer data.
   * 
   * @example
   * 1064
   */
  fail?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * >  You can specify multiple IP addresses that are separated by spaces. Example: `IP1 IP2 IP3`.
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
   * The logical relationship among multiple keywords.
   * 
   * *   **or**
   * *   **and**
   * 
   * @example
   * or
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The maximum execution duration. Unit: microseconds. You can specify this parameter to query the SQL statements whose execution duration is smaller than the value of this parameter.
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
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  maxRows?: number;
  /**
   * @remarks
   * The maximum number of scanned rows. You can specify this parameter to query the SQL statements that scan a smaller number of rows than the value of this parameter.
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
   * The minimum execution duration. Unit: microseconds. You can specify this parameter to query the SQL statements whose execution duration is greater than or equal to the value of this parameter.
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
   * The minimum number of scanned rows. You can specify this parameter to query the SQL statements that scan a larger or an equal number of rows than the value of this parameter.
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
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 2
   */
  pageNumbers?: number;
  /**
   * @remarks
   * The keyword that is used for the query.
   * 
   * >  Fuzzy search is not supported. You can query data by using multiple keywords. Separate keywords with spaces.
   * 
   * @example
   * test
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
   * The basis on which you want to sort the query results.
   * 
   * *   **SCAN_ROWS**: the number of scanned rows.
   * *   **UPDATE_ROWS**: the number of updated rows.
   * *   **CONSUME**: the time consumed.
   * *   **ORIGIN_TIME**: the execution duration.
   * 
   * @example
   * SCAN_ROWS
   */
  sortKey?: string;
  /**
   * @remarks
   * The order in which you want to sort the query results.
   * 
   * *   **ase**: ascending order.
   * *   **desc**: descending order.
   * 
   * @example
   * ase
   */
  sortMethod?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * 
   * *   **SELECT**
   * *   **UPDATE**
   * *   **DELETE**
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The beginning of the time range to query must be later than the time when DAS Enterprise Edition is enabled, and can be up to seven days earlier than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684734297000
   */
  start?: number;
  /**
   * @remarks
   * The execution results. You can specify **0** to query the SQL statements that are successfully executed. You can also specify an error code to query the corresponding SQL statements that fail to be executed.
   * 
   * @example
   * 0
   */
  state?: string;
  /**
   * @remarks
   * The thread ID.
   * 
   * >  You can specify multiple thread IDs that are separated by spaces. Example: `Thread ID1 Thread ID2 Thread ID3`.
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

