// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWebFlowRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want the results to be displayed. Valid values: zh (default): Chinese. en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application ID
   * 
   * @example
   * hkhon1****@c3df23522******
   */
  appId?: string;
  /**
   * @remarks
   * The application name
   * 
   * This parameter is required.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * The number of additional requests allowed for burst requests. The effect is equivalent to the maximum number of tokens of the token bucket algorithm.
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
   * - true: enabled
   * 
   * - false: disabled
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
   * - 1 (number of requests)
   * 
   * @example
   * 1
   */
  metricType?: number;
  /**
   * @remarks
   * The namespace
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The parameter description, which is a JSON string containing the following key-value pairs:
   * 
   * - parseStrategy: the parameter property (0: client IP address, 1: remote host, 2: header, 3: URL parameter)
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The interface name: The application resources to which the rule applies. The interface name must be the same as the name on the interface details page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * /flow
   */
  resource?: string;
  /**
   * @remarks
   * Resource mode
   * 
   * - 0: resource name mode
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  resourceMode?: number;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - 0: custom interface
   * 
   * - 1: WEB
   * 
   * - 2: RPC
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * The length of the time window. Unit: milliseconds. The default value is 1000, which indicates 1 second.
   * 
   * @example
   * 1000
   */
  statIntervalMs?: number;
  /**
   * @remarks
   * Threshold
   * 
   * This parameter is required.
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
      resource: 'Resource',
      resourceMode: 'ResourceMode',
      resourceType: 'ResourceType',
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
      resource: 'string',
      resourceMode: 'number',
      resourceType: 'number',
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

