// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLosslessRuleByAppResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether service registration is completed before the readiness check is passed.
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
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
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
   * Indicates whether the processing details for graceful start and shutdown are enabled.
   * 
   * @example
   * true
   */
  lossLessDetail?: boolean;
  /**
   * @remarks
   * Indicates whether proactive notification is enabled.
   * 
   * @example
   * false
   */
  notice?: boolean;
  /**
   * @remarks
   * Indicates whether service warm-up is completed before the readiness check is passed.
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
   * 120
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

export class GetLosslessRuleByAppResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: GetLosslessRuleByAppResponseBodyData;
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
   * The response message.
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
   * DC34E4A3-5F1C-4E40-86EA-02EDF967****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: The request succeeded.
   * - false: The request failed.
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
      data: GetLosslessRuleByAppResponseBodyData,
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

