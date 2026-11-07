// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebFlowRulesResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * hkhon1XXXX@c3df23522bXXXXX
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
   * Indicates whether the rule is enabled or disabled.
   * 
   * - `true`: enabled.
   * 
   * - `false`: disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The behavior that was bound to the rule.
   * 
   * @example
   * {\\"appName\\":\\"spring-cloud-a\\",\\"fallbackBehavior\\":{\\"webFallbackMode\\":0,\\"webRespContentType\\":0,\\"webRespMessage\\":\\"Blocked\\",\\"webRespStatusCode\\":429},\\"id\\":977,\\"name\\":\\"Fallback\\",\\"namespace\\":\\"default\\",\\"resourceClassification\\":1}
   */
  fallbackObject?: string;
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the interface resource.
   * 
   * @example
   * /flow
   */
  resource?: string;
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
   * The resource type
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
   * The rule ID.
   * 
   * @example
   * 1
   */
  ruleId?: string;
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
      fallbackObject: 'FallbackObject',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      metricType: 'MetricType',
      namespace: 'Namespace',
      paramItem: 'ParamItem',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceMode: 'ResourceMode',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
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
      fallbackObject: 'string',
      maxQueueingTimeMs: 'number',
      metricType: 'number',
      namespace: 'string',
      paramItem: 'string',
      regionId: 'string',
      resource: 'string',
      resourceMode: 'number',
      resourceType: 'number',
      ruleId: 'string',
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

export class ListWebFlowRulesResponseBodyData extends $dara.Model {
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListWebFlowRulesResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of queried rules.
   * 
   * @example
   * 36
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListWebFlowRulesResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebFlowRulesResponseBody extends $dara.Model {
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
   * The data returned.
   */
  data?: ListWebFlowRulesResponseBodyData;
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
   * The returned message.
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
   * 4AE73569-304C-5AA9-AE11-C1D99C7D1689
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListWebFlowRulesResponseBodyData,
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

