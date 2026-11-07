// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersByConfigResponseBodyListeners extends $dara.Model {
  /**
   * @remarks
   * IP。
   * 
   * @example
   * 1.1.1.1
   */
  ip?: string;
  /**
   * @remarks
   * The labels of the listener.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The name of the canary release rule matched by the current listener.
   * 
   * @example
   * Name of the matched canary release rule
   */
  matchRuleName?: string;
  /**
   * @remarks
   * The type of the matched canary release rule.
   * 
   * @example
   * Beta
   */
  matchRuleType?: string;
  /**
   * @remarks
   * The checksum string.
   * 
   * @example
   * 23sdfdf
   */
  md5?: string;
  /**
   * @remarks
   * Indicates whether the push is successful.
   * 
   * @example
   * true
   */
  status?: string;
  /**
   * @remarks
   * The current version of the listener. Valid values: gray (canary release version) or normal (production version).
   * 
   * @example
   * gray
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      labels: 'Labels',
      matchRuleName: 'MatchRuleName',
      matchRuleType: 'MatchRuleType',
      md5: 'Md5',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      matchRuleName: 'string',
      matchRuleType: 'string',
      md5: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 202
   */
  httpCode?: string;
  /**
   * @remarks
   * The listener information.
   */
  listeners?: ListListenersByConfigResponseBodyListeners[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The size of the current page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75E1442F-11EC-567A-9CF0-5A36F7904F39
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * - `true`: The request was successful.
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      listeners: 'Listeners',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      listeners: { 'type': 'array', 'itemType': ListListenersByConfigResponseBodyListeners },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.listeners)) {
      $dara.Model.validateArray(this.listeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

