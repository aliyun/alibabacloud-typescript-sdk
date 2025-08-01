// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCircuitBreakerRulesResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * hkhon1po62@c3df23522bXXXXX
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * Indicates whether the rule was enabled.
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
   * "{\\"appName\\":\\"spring-cloud-a\\",\\"fallbackBehavior\\":{\\"webFallbackMode\\":0,\\"webRespContentType\\":0,\\"webRespMessage\\":\\"Blocked\\",\\"webRespStatusCode\\":429},\\"id\\":977,\\"name\\":\\"Fallback\\",\\"namespace\\":\\"default\\",\\"resourceClassification\\":1}"
   */
  fallbackObject?: string;
  /**
   * @remarks
   * The minimum number of requests that can be passed in each step after circuit breaking recovers.
   * 
   * @example
   * 5
   */
  halfOpenBaseAmountPerStep?: number;
  /**
   * @remarks
   * The number of circuit breaking recovery steps.
   * 
   * @example
   * 1
   */
  halfOpenRecoveryStepNum?: number;
  /**
   * @remarks
   * The maximum RT. Unit: milliseconds. If the RT of a request is greater than the value of this parameter, a slow call is counted. If you set Strategy to 0, you must specify this parameter.
   * 
   * @example
   * 200
   */
  maxAllowedRtMs?: number;
  /**
   * @remarks
   * The minimum number of requests to trigger circuit breaking. If the number of requests in the current time window is less than the value of this parameter, circuit breaking is not triggered even if the circuit breaking rule is met.
   * 
   * @example
   * 10
   */
  minRequestAmount?: number;
  /**
   * @remarks
   * The microservice namespace to which the application belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the interface to which the rule is applicable. The interface name must be the same as the name on the interface details page in the console.
   * 
   * @example
   * /a
   */
  resource?: string;
  resourceType?: number;
  /**
   * @remarks
   * The period in which circuit breaking is implemented. Unit: milliseconds. If circuit breaking is implemented on the requests for the route, the calls to all the requests for the route fail in the configured circuit breaking period.
   * 
   * @example
   * 10000
   */
  retryTimeoutMs?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  /**
   * @remarks
   * The length of the time window. Unit: milliseconds. The valid range is from 1 second to 120 minutes.
   * 
   * @example
   * 20000
   */
  statIntervalMs?: number;
  /**
   * @remarks
   * The threshold type.
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
   *     slow call proportion
   * 
   *     <!-- -->
   * 
   * *   1
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     abnormal proportion
   * 
   *     <!-- -->
   * 
   * @example
   * 0
   */
  strategy?: number;
  /**
   * @remarks
   * A percentage threshold for triggering circuit breaking. Valid values: 0-1. These values represent 0% to 100%.
   * 
   * @example
   * 0.8
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      enable: 'Enable',
      fallbackObject: 'FallbackObject',
      halfOpenBaseAmountPerStep: 'HalfOpenBaseAmountPerStep',
      halfOpenRecoveryStepNum: 'HalfOpenRecoveryStepNum',
      maxAllowedRtMs: 'MaxAllowedRtMs',
      minRequestAmount: 'MinRequestAmount',
      namespace: 'Namespace',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceType: 'ResourceType',
      retryTimeoutMs: 'RetryTimeoutMs',
      ruleId: 'RuleId',
      statIntervalMs: 'StatIntervalMs',
      strategy: 'Strategy',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      enable: 'boolean',
      fallbackObject: 'string',
      halfOpenBaseAmountPerStep: 'number',
      halfOpenRecoveryStepNum: 'number',
      maxAllowedRtMs: 'number',
      minRequestAmount: 'number',
      namespace: 'string',
      regionId: 'string',
      resource: 'string',
      resourceType: 'number',
      retryTimeoutMs: 'number',
      ruleId: 'number',
      statIntervalMs: 'number',
      strategy: 'number',
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

export class ListCircuitBreakerRulesResponseBodyData extends $dara.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListCircuitBreakerRulesResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 3
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
      result: { 'type': 'array', 'itemType': ListCircuitBreakerRulesResponseBodyDataResult },
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

export class ListCircuitBreakerRulesResponseBody extends $dara.Model {
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
   * The details of the rule.
   */
  data?: ListCircuitBreakerRulesResponseBodyData;
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
   * 4E9FDCFE-0738-493B-B801-82BDFBCB****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: ListCircuitBreakerRulesResponseBodyData,
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

