// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeExecErrorSampleResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb01
   */
  dbname?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * 1146
   */
  errorCode?: string;
  /**
   * @remarks
   * The IP address of the client that executes the SQL statement.
   * 
   * @example
   * 100.104.XX.XX
   */
  origHost?: string;
  /**
   * @remarks
   * The SQL template ID.
   * 
   * @example
   * 2e8147b5ca2dfc640dfd5e43d96a****
   */
  sqlId?: string;
  /**
   * @remarks
   * The content of the SQL statement that failed to be executed.
   * 
   * @example
   * select * from test1
   */
  sqlText?: string;
  /**
   * @remarks
   * The point in time when the failed SQL statement was executed. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1643020306739
   */
  timestamp?: number;
  /**
   * @remarks
   * The username of the client that executes the SQL statement.
   * 
   * @example
   * test01
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      dbname: 'Dbname',
      errorCode: 'ErrorCode',
      origHost: 'OrigHost',
      sqlId: 'SqlId',
      sqlText: 'SqlText',
      timestamp: 'Timestamp',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbname: 'string',
      errorCode: 'string',
      origHost: 'string',
      sqlId: 'string',
      sqlText: 'string',
      timestamp: 'number',
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

export class GetQueryOptimizeExecErrorSampleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  extra?: string;
  /**
   * @remarks
   * The queried data.
   */
  list?: GetQueryOptimizeExecErrorSampleResponseBodyDataList[];
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  pageNo?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetQueryOptimizeExecErrorSampleResponseBodyDataList },
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

export class GetQueryOptimizeExecErrorSampleResponseBody extends $dara.Model {
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
   * The detailed information.
   */
  data?: GetQueryOptimizeExecErrorSampleResponseBodyData;
  /**
   * @remarks
   * The returned message.
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
      data: GetQueryOptimizeExecErrorSampleResponseBodyData,
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

