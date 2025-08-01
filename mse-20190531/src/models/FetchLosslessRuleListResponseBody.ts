// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchLosslessRuleListResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * Indicates whether service registration is complete before readiness probe.
   * 
   * @example
   * true
   */
  aligned?: boolean;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * hkhon1po62@24810bf4364aea1
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * echo-demo
   */
  appName?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The registration latency. Unit: seconds.
   * 
   * @example
   * 60
   */
  delayTime?: number;
  /**
   * @remarks
   * Indicates whether graceful start is enabled. Valid values:
   * 
   * *   `true`: enabled
   * *   `false`: disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The slope of the prefetching curve.
   * 
   * @example
   * 2
   */
  funcType?: number;
  /**
   * @remarks
   * Indicates whether online and offline processing details are displayed.
   * 
   * @example
   * false
   */
  lossLessDetail?: boolean;
  /**
   * @remarks
   * Indicates whether notification is enabled.
   * 
   * @example
   * true
   */
  notice?: boolean;
  /**
   * @remarks
   * Indicates whether service prefetching is complete before readiness probe.
   * 
   * @example
   * false
   */
  related?: boolean;
  /**
   * @remarks
   * The prefetching duration. Unit: seconds.
   * 
   * @example
   * 60
   */
  warmupTime?: number;
  static names(): { [key: string]: string } {
    return {
      aligned: 'Aligned',
      appId: 'AppId',
      appName: 'AppName',
      count: 'Count',
      delayTime: 'DelayTime',
      enable: 'Enable',
      funcType: 'FuncType',
      lossLessDetail: 'LossLessDetail',
      notice: 'Notice',
      related: 'Related',
      warmupTime: 'WarmupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aligned: 'boolean',
      appId: 'string',
      appName: 'string',
      count: 'number',
      delayTime: 'number',
      enable: 'boolean',
      funcType: 'number',
      lossLessDetail: 'boolean',
      notice: 'boolean',
      related: 'boolean',
      warmupTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLosslessRuleListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned data.
   */
  results?: FetchLosslessRuleListResponseBodyDataResults[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 36
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      results: 'Results',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      results: { 'type': 'array', 'itemType': FetchLosslessRuleListResponseBodyDataResults },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLosslessRuleListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned result.
   */
  data?: FetchLosslessRuleListResponseBodyData;
  /**
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 56D9E600-6348-4260-B35F-583413F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: FetchLosslessRuleListResponseBodyData,
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

