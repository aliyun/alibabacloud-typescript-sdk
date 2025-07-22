// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeExecErrorStatsResponseBodyDataList extends $dara.Model {
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
   * The error code returned if the request failed.
   * 
   * @example
   * 1146
   */
  errorCode?: string;
  /**
   * @remarks
   * The number of errors.
   * 
   * @example
   * 10
   */
  errorCount?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The alias of the database instance.
   * 
   * @example
   * test01
   */
  instanceName?: string;
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
   * The content of the SQL template.
   * 
   * @example
   * select * from test1
   */
  sqlText?: string;
  static names(): { [key: string]: string } {
    return {
      dbname: 'Dbname',
      errorCode: 'ErrorCode',
      errorCount: 'ErrorCount',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      sqlId: 'SqlId',
      sqlText: 'SqlText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbname: 'string',
      errorCode: 'string',
      errorCount: 'number',
      instanceId: 'string',
      instanceName: 'string',
      sqlId: 'string',
      sqlText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeExecErrorStatsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  extra?: string;
  /**
   * @remarks
   * The information about the SQL templates that failed to execute.
   */
  list?: GetQueryOptimizeExecErrorStatsResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
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
      list: { 'type': 'array', 'itemType': GetQueryOptimizeExecErrorStatsResponseBodyDataList },
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

export class GetQueryOptimizeExecErrorStatsResponseBody extends $dara.Model {
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
   * The detailed information, including the error codes and the number of entries that are returned.
   */
  data?: GetQueryOptimizeExecErrorStatsResponseBodyData;
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
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
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
      data: GetQueryOptimizeExecErrorStatsResponseBodyData,
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

