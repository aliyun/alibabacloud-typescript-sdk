// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWebFlowRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * hkhon1XXXX@54e1f42f37cXXXX
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
   * The number of additional requests allowed for burst requests. The effect is equivalent to the maximum number of tokens for the token bucket algorithm.
   * 
   * @example
   * 0
   */
  burst?: number;
  /**
   * @remarks
   * The flow control method. Valid values:
   * 
   * - 0: fast failure
   * 
   * - 2: wait in queue
   * 
   * @example
   * 0
   */
  controlBehavior?: number;
  /**
   * @remarks
   * The rule status. Valid values:
   * 
   * - true (enabled)
   * 
   * - false (disabled)
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
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The timeout period for queuing when the ControlBehavior parameter is set to 2. Unit: milliseconds.
   * 
   * @example
   * 200
   */
  maxQueueingTimeMs?: number;
  /**
   * @remarks
   * The threshold type. Valid values:
   * 
   * - 1: number of requests
   * 
   * @example
   * 1
   */
  metricType?: number;
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
   * The parameter description item, which is a JSON string containing the following key-value pairs:
   * 
   * - parseStrategy: the parameter property (0: client IP address. 1: remote host. 2: header. 3: URL parameter)
   * 
   * - fieldName: the header name or URL parameter name. You must specify this key only if parseStrategy is set to 2 or 3
   * 
   * - matchStrategy: the method to match the property value. You must specify this key only if parseStrategy is set to 2 or 3 and the property value is matched. Valid values: 0 (exact match), 2 (regular expression match), and 3 (substring match)
   * 
   * - pattern: the match string. You must specify this key only if parseStrategy is set to 2 or 3 and the property value is matched
   * 
   * @example
   * {"fieldName":"testKey","matchStrategy":2,"parseStrategy":2,"pattern":"testValue"}
   */
  paramItem?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource mode. Valid values:
   * 
   * - 0: resource name mode
   * 
   * @example
   * 0
   */
  reourceMode?: number;
  /**
   * @remarks
   * The interface resource name.
   * 
   * @example
   * /flow
   */
  resource?: string;
  /**
   * @remarks
   * The length of the time window. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  statIntervalMs?: number;
  /**
   * @remarks
   * The threshold.
   * 
   * @example
   * 20
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      burst: 'Burst',
      controlBehavior: 'ControlBehavior',
      enable: 'Enable',
      id: 'Id',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      metricType: 'MetricType',
      namespace: 'Namespace',
      paramItem: 'ParamItem',
      regionId: 'RegionId',
      reourceMode: 'ReourceMode',
      resource: 'Resource',
      statIntervalMs: 'StatIntervalMs',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      burst: 'number',
      controlBehavior: 'number',
      enable: 'boolean',
      id: 'number',
      maxQueueingTimeMs: 'number',
      metricType: 'number',
      namespace: 'string',
      paramItem: 'string',
      regionId: 'string',
      reourceMode: 'number',
      resource: 'string',
      statIntervalMs: 'number',
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

export class UpdateWebFlowRuleResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: UpdateWebFlowRuleResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54973C90-F379-4372-9AA5-053A3F7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
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
      data: UpdateWebFlowRuleResponseBodyData,
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

