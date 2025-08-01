// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * hkhon1po62@54e1f42f3******
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
   * The throttling effect.
   * 
   * Valid values:
   * 
   * *   0
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     fast failure
   * 
   *     <!-- -->
   * 
   * *   2
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     in queue
   * 
   *     <!-- -->
   * 
   * @example
   * 0
   */
  controlBehavior?: number;
  /**
   * @remarks
   * Indicates whether the rule is enabled.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 12
   */
  id?: number;
  limitApp?: string;
  /**
   * @remarks
   * The timeout period for queuing when the value of ControlBehavior is set to 2. Unit: milliseconds.
   * 
   * @example
   * 500
   */
  maxQueueingTimeMs?: number;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the API resource.
   * 
   * @example
   * app
   */
  resource?: string;
  /**
   * @remarks
   * The throttling threshold.
   * 
   * @example
   * 200
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      controlBehavior: 'ControlBehavior',
      enable: 'Enable',
      id: 'Id',
      limitApp: 'LimitApp',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      namespace: 'Namespace',
      regionId: 'RegionId',
      resource: 'Resource',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      controlBehavior: 'number',
      enable: 'boolean',
      id: 'number',
      limitApp: 'string',
      maxQueueingTimeMs: 'number',
      namespace: 'string',
      regionId: 'string',
      resource: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateFlowRuleResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69AD2AA7-DB47-449B-941B-B14409DF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  success?: boolean;
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
      data: CreateFlowRuleResponseBodyData,
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

