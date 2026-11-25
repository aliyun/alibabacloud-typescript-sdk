// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the compute node. This field is available only for compute nodes (CN).
   * 
   * @example
   * pxc-i-xxxx
   */
  CNname?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * dcdev
   */
  DBName?: string;
  /**
   * @remarks
   * The extended field. This field is available only for compute nodes (CN).
   * 
   * @example
   * tddl:5.4.19-20240927
   */
  extension?: string;
  /**
   * @remarks
   * Indicates whether the execution failed. This field is available only for compute nodes (CN).
   * 
   * @example
   * 0
   */
  fail?: string;
  /**
   * @remarks
   * The number of fetched rows. This field is available only for compute nodes (CN).
   * 
   * @example
   * 1
   */
  frows?: string;
  /**
   * @remarks
   * The name and address of the client that connects to the database.
   * 
   * @example
   * ****[****] @ [1XX.XX.XX.XX]
   */
  hostAddress?: string;
  /**
   * @remarks
   * The name of the instance. This field is available only for storage nodes (DN).
   * 
   * @example
   * pxc-xdb-s-xxxx
   */
  insName?: string;
  /**
   * @remarks
   * Indicates whether the Prepare mode is used. This field is available only for compute nodes (CN).
   * 
   * @example
   * 0
   */
  isBind?: string;
  /**
   * @remarks
   * The lock duration. Unit: milliseconds. This field is available only for storage nodes (DN).
   * 
   * @example
   * 1
   */
  lockTimeMS?: string;
  /**
   * @remarks
   * The parameters in the Prepare mode. This field is available only for compute nodes (CN).
   * 
   * @example
   * ["1"]
   */
  params?: string;
  /**
   * @remarks
   * The number of scanned rows. This field is available only for storage nodes (DN).
   * 
   * @example
   * 10
   */
  parseRowCounts?: string;
  /**
   * @remarks
   * The timestamp. Specify the time in the YYYY-MM-ddTHH:mm.ss.SSSZ format. The time must be in UTC.
   * 
   * - In the slow query logs of compute nodes (CN), this field indicates the start time of the execution.
   * - In the slow query logs of storage nodes (DN), this field indicates the completion time of the execution.
   * 
   * @example
   * 2024-11-22T02:22:22.444Z
   */
  queryStartTime?: string;
  /**
   * @remarks
   * The execution duration of the SQL statement. Unit: seconds.
   * 
   * @example
   * 3.000
   */
  queryTime?: string;
  /**
   * @remarks
   * The execution duration of the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 3000.000
   */
  queryTimeMS?: string;
  /**
   * @remarks
   * The number of returned rows. This field is available only for storage nodes (DN).
   * 
   * @example
   * 20
   */
  returnRowCounts?: string;
  /**
   * @remarks
   * The number of affected or returned rows. This field is available only for compute nodes (CN).
   * 
   * @example
   * 1
   */
  rows?: string;
  /**
   * @remarks
   * The number of physical SQL statements. This field is available only for compute nodes (CN).
   * 
   * @example
   * 1
   */
  SCNT?: string;
  /**
   * @remarks
   * The unique identifier of the SQL statement in the slow query log statistics.
   * 
   * @example
   * c8df07e5d45cd68da8b4771c2016e20b
   */
  SQLHash?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * select * from test
   */
  SQLText?: string;
  /**
   * @remarks
   * The type of the SQL statement. This field is available only for compute nodes (CN).
   * 
   * @example
   * select
   */
  sqlType?: string;
  /**
   * @remarks
   * The kernel template ID. This field is available only for compute nodes (CN).
   * 
   * @example
   * af33ffee
   */
  templateId?: string;
  /**
   * @remarks
   * Indicates whether the SQL statement is too long. This field is available only for compute nodes (CN).
   * 
   * @example
   * 0
   */
  tooLong?: string;
  /**
   * @remarks
   * The trace ID. This field is available only for compute nodes (CN).
   * 
   * @example
   * 17a5c5c840006000
   */
  traceId?: string;
  /**
   * @remarks
   * The transaction policy. This field is available only for compute nodes (CN).
   * 
   * @example
   * XA
   */
  transactionPolicy?: string;
  /**
   * @remarks
   * The transaction ID. This field is available only for compute nodes (CN).
   * 
   * @example
   * 17a5c5c840006000
   */
  trxId?: string;
  /**
   * @remarks
   * The workload type. This field is available only for compute nodes (CN).
   * 
   * @example
   * TP
   */
  WT?: string;
  static names(): { [key: string]: string } {
    return {
      CNname: 'CNname',
      DBName: 'DBName',
      extension: 'Extension',
      fail: 'Fail',
      frows: 'Frows',
      hostAddress: 'HostAddress',
      insName: 'InsName',
      isBind: 'IsBind',
      lockTimeMS: 'LockTimeMS',
      params: 'Params',
      parseRowCounts: 'ParseRowCounts',
      queryStartTime: 'QueryStartTime',
      queryTime: 'QueryTime',
      queryTimeMS: 'QueryTimeMS',
      returnRowCounts: 'ReturnRowCounts',
      rows: 'Rows',
      SCNT: 'SCNT',
      SQLHash: 'SQLHash',
      SQLText: 'SQLText',
      sqlType: 'SqlType',
      templateId: 'TemplateId',
      tooLong: 'TooLong',
      traceId: 'TraceId',
      transactionPolicy: 'TransactionPolicy',
      trxId: 'TrxId',
      WT: 'WT',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CNname: 'string',
      DBName: 'string',
      extension: 'string',
      fail: 'string',
      frows: 'string',
      hostAddress: 'string',
      insName: 'string',
      isBind: 'string',
      lockTimeMS: 'string',
      params: 'string',
      parseRowCounts: 'string',
      queryStartTime: 'string',
      queryTime: 'string',
      queryTimeMS: 'string',
      returnRowCounts: 'string',
      rows: 'string',
      SCNT: 'string',
      SQLHash: 'string',
      SQLText: 'string',
      sqlType: 'string',
      templateId: 'string',
      tooLong: 'string',
      traceId: 'string',
      transactionPolicy: 'string',
      trxId: 'string',
      WT: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-********
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The details of the slow query logs.
   */
  items?: DescribeSlowLogRecordsResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      items: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItems },
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

