// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeDataTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * * **sqlExecuteCount**: the number of executions of slow SQL queries.
   * * **sqlExecuteCountDiff**: the difference in the number of executions of slow SQL queries compared to the previous day.
   * * **sqlCount**: the number of slow SQL templates.
   * * **sqlCountDiff**: the difference in the number of slow SQL templates compared to the previous day.
   * * **optimizedSqlExecuteCount**: the number of optimizable executions of slow SQL queries.
   * * **optimizedSqlExecuteCountDiff**: the difference in the number of optimizable executions of slow SQL queries compared to the previous day.
   * * **optimizedSqlCount**: the number of optimizable slow SQL templates.
   * * **optimizedSqlCountDiff**: the difference in the number of optimizable slow SQL templates compared to the previous day.
   * 
   * @example
   * sqlExecuteCount
   */
  kpi?: string;
  /**
   * @remarks
   * The data timestamp. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1643040000000
   */
  timestamp?: number;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1000
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      kpi: 'Kpi',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kpi: 'string',
      timestamp: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataTrendResponseBodyData extends $dara.Model {
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
   * The details of the trend data.
   */
  list?: GetQueryOptimizeDataTrendResponseBodyDataList[];
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  pageNo?: number;
  /**
   * @remarks
   * The reserved parameter.
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
   * 10
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
      list: { 'type': 'array', 'itemType': GetQueryOptimizeDataTrendResponseBodyDataList },
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

export class GetQueryOptimizeDataTrendResponseBody extends $dara.Model {
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
  data?: GetQueryOptimizeDataTrendResponseBodyData;
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
      data: GetQueryOptimizeDataTrendResponseBodyData,
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

