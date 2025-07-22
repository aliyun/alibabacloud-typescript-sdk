// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBlockingDetailListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The batch ID.
   * 
   * @example
   * 1683530096156
   */
  batchId?: number;
  /**
   * @remarks
   * The client name.
   * 
   * @example
   * .Net SqlClient Data Provider
   */
  clientAppName?: string;
  /**
   * @remarks
   * The time when the blocking data was collected. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1700065800000
   */
  currentCollectionTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * school
   */
  dataBase?: string;
  /**
   * @remarks
   * The client hostname.
   * 
   * @example
   * ALLBNMGTAPPRD01
   */
  hostName?: string;
  /**
   * @remarks
   * The username that is used for the logon.
   * 
   * @example
   * Cheney603
   */
  loginId?: string;
  /**
   * @remarks
   * The hash value of the SQL statement.
   * 
   * @example
   * 6977DD06CD9CAFF2
   */
  queryHash?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 1717
   */
  spid?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * select * from test1
   */
  sqlText?: string;
  /**
   * @remarks
   * The time when the execution started. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1608888296000
   */
  startTime?: string;
  /**
   * @remarks
   * The duration of the blocking. Unit: milliseconds.
   * 
   * @example
   * 30000
   */
  waitTimeMs?: number;
  /**
   * @remarks
   * The wait type. For more information about wait types, see [sys.dm_os_wait_stats (Transact-SQL)](https://learn.microsoft.com/en-us/sql/relational-databases/system-dynamic-management-views/sys-dm-os-wait-stats-transact-sql?view=sql-server-ver15).
   * 
   * @example
   * MISCELLANEOUS
   */
  waitType?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      clientAppName: 'ClientAppName',
      currentCollectionTime: 'CurrentCollectionTime',
      dataBase: 'DataBase',
      hostName: 'HostName',
      loginId: 'LoginId',
      queryHash: 'QueryHash',
      spid: 'Spid',
      sqlText: 'SqlText',
      startTime: 'StartTime',
      waitTimeMs: 'WaitTimeMs',
      waitType: 'WaitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      clientAppName: 'string',
      currentCollectionTime: 'number',
      dataBase: 'string',
      hostName: 'string',
      loginId: 'string',
      queryHash: 'string',
      spid: 'string',
      sqlText: 'string',
      startTime: 'string',
      waitTimeMs: 'number',
      waitType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlockingDetailListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the data returned.
   */
  list?: GetBlockingDetailListResponseBodyDataList[];
  /**
   * @remarks
   * The page number of the page returned.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 19
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetBlockingDetailListResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlockingDetailListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetBlockingDetailListResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request is successful, **Successful** is returned. Otherwise, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBlockingDetailListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

