// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCircuitBreakerRuleResponseBodyData extends $dara.Model {
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
   * Indicates whether the rule is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
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
   * The ID of the rule.
   * 
   * @example
   * 1
   */
  id?: number;
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
   *     Slow call ratio
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
   *     Abnormal proportion
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
      halfOpenBaseAmountPerStep: 'HalfOpenBaseAmountPerStep',
      halfOpenRecoveryStepNum: 'HalfOpenRecoveryStepNum',
      id: 'Id',
      maxAllowedRtMs: 'MaxAllowedRtMs',
      minRequestAmount: 'MinRequestAmount',
      namespace: 'Namespace',
      regionId: 'RegionId',
      resource: 'Resource',
      retryTimeoutMs: 'RetryTimeoutMs',
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
      halfOpenBaseAmountPerStep: 'number',
      halfOpenRecoveryStepNum: 'number',
      id: 'number',
      maxAllowedRtMs: 'number',
      minRequestAmount: 'number',
      namespace: 'string',
      regionId: 'string',
      resource: 'string',
      retryTimeoutMs: 'number',
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

