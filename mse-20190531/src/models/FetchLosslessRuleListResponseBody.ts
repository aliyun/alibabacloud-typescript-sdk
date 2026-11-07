// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchLosslessRuleListResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable completing service registration before passing the readiness check.
   * 
   * @example
   * true
   */
  aligned?: boolean;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * hkhon1po62@24810bf4364a***
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
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
   * The delayed registration time in seconds.
   * 
   * @example
   * 60
   */
  delayTime?: number;
  /**
   * @remarks
   * The enabling status of graceful start. Valid values:
   * 
   * - `true`: Enabled.
   * - `false`: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The slope of the warm-up curve.
   * 
   * @example
   * 2
   */
  funcType?: number;
  /**
   * @remarks
   * Specifies whether to enable the processing details for graceful start and shutdown.
   * 
   * @example
   * false
   */
  lossLessDetail?: boolean;
  /**
   * @remarks
   * Specifies whether to enable proactive notifications.
   * 
   * @example
   * true
   */
  notice?: boolean;
  /**
   * @remarks
   * Specifies whether to enable completing service warm-up before passing the readiness check.
   * 
   * @example
   * false
   */
  related?: boolean;
  /**
   * @remarks
   * The warm-up duration in seconds.
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
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
   * The total number of entries.
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
   * The response code.
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
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 56D9E600-6348-4260-B35F-583413F****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * - `true`: The request is successful.
   * - `false`: The request fails.
   * 
   * @example
   * true
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

