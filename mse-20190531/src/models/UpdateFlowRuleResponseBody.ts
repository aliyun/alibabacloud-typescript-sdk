// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFlowRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * hpn9ac29kz@e31a4b871******
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
   * Indicates whether the rule was enabled.
   * 
   * Valid value:
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
   * The rule ID.
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
   * The name of the API resource.
   * 
   * @example
   * /c
   */
  resource?: string;
  /**
   * @remarks
   * The throttling threshold.
   * 
   * @example
   * 5
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

export class UpdateFlowRuleResponseBody extends $dara.Model {
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
   * The data of the node.
   */
  data?: UpdateFlowRuleResponseBodyData;
  /**
   * @remarks
   * The returned message.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52BA6DA6-A702-4362-A32F-DFF79655****
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
   *     :
   * 
   *     <!-- -->
   * 
   *     The request was successful.
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The request failed.
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
      data: UpdateFlowRuleResponseBodyData,
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

