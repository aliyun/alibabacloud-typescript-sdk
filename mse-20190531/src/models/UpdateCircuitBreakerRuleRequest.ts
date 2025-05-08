// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCircuitBreakerRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh-CN and en-US. Default value: zh-CN. The value zh-CN indicates Chinese, and the value en-US indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
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
   * This parameter is required.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule.
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
   * The minimum number of requests that can be passed in each step after circuit breaking recovers. Default value: 1.
   * 
   * @example
   * 5
   */
  halfOpenBaseAmountPerStep?: number;
  /**
   * @remarks
   * The number of circuit breaking recovery steps. Default value: 1.
   * 
   * @example
   * 1
   */
  halfOpenRecoveryStepNum?: number;
  /**
   * @remarks
   * The maximum response time (RT). Unit: milliseconds. If the RT of a request is greater than the value of this parameter, a slow call is counted. If you set Strategy to 0, you must specify this parameter.
   * 
   * @example
   * 200
   */
  maxAllowedRtMs?: number;
  /**
   * @remarks
   * The minimum number of requests to trigger circuit breaking. If the number of requests in the current time window is less than the value of this parameter, circuit breaking is not triggered even if the circuit breaking rule is met. Default value: 10.
   * 
   * @example
   * 10
   */
  minRequestAmount?: number;
  /**
   * @remarks
   * The microservice namespace to which the application belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The period in which circuit breaking is implemented. Unit: milliseconds. If circuit breaking is implemented on the requests for the route, the calls to all the requests for the route fail in the configured circuit breaking period. The value must be an integral multiple of 1,000. Default value: 10000. This value indicates 10 seconds.
   * 
   * @example
   * 10000
   */
  retryTimeoutMs?: number;
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
   * The length of the time window. Unit: milliseconds. The valid range is from 1 second to 120 minutes. The default value is 20000. This value indicates 20 seconds.
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
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      enable: 'Enable',
      halfOpenBaseAmountPerStep: 'HalfOpenBaseAmountPerStep',
      halfOpenRecoveryStepNum: 'HalfOpenRecoveryStepNum',
      maxAllowedRtMs: 'MaxAllowedRtMs',
      minRequestAmount: 'MinRequestAmount',
      namespace: 'Namespace',
      retryTimeoutMs: 'RetryTimeoutMs',
      ruleId: 'RuleId',
      statIntervalMs: 'StatIntervalMs',
      strategy: 'Strategy',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      enable: 'boolean',
      halfOpenBaseAmountPerStep: 'number',
      halfOpenRecoveryStepNum: 'number',
      maxAllowedRtMs: 'number',
      minRequestAmount: 'number',
      namespace: 'string',
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

