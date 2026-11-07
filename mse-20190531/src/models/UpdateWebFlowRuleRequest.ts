// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWebFlowRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want the results to be displayed. Valid values: zh and en. zh indicates Chinese, which is the default value. en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * hkhon1****@c3df23522******
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
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
   * The timeout period. Unit: milliseconds. This parameter is required if the ControlBehavior parameter is set to 2.
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
   * {"fieldName":"key","matchStrategy":2,"parseStrategy":2,"pattern":"value"}
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
  resourceMode?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ruleId?: number;
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
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      burst: 'Burst',
      controlBehavior: 'ControlBehavior',
      enable: 'Enable',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      metricType: 'MetricType',
      namespace: 'Namespace',
      paramItem: 'ParamItem',
      regionId: 'RegionId',
      resourceMode: 'ResourceMode',
      ruleId: 'RuleId',
      statIntervalMs: 'StatIntervalMs',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      burst: 'number',
      controlBehavior: 'number',
      enable: 'boolean',
      maxQueueingTimeMs: 'number',
      metricType: 'number',
      namespace: 'string',
      paramItem: 'string',
      regionId: 'string',
      resourceMode: 'number',
      ruleId: 'number',
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

