// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLoadBalancersResponseBodyLoadBalancersRulesFixedResponse } from "./ListLoadBalancersResponseBodyLoadBalancersRulesFixedResponse";


export class ListLoadBalancersResponseBodyLoadBalancersRules extends $dara.Model {
  /**
   * @remarks
   * Executes a specified response after matching the rule.
   */
  fixedResponse?: ListLoadBalancersResponseBodyLoadBalancersRulesFixedResponse;
  /**
   * @remarks
   * Modifies the corresponding load balancer configuration after matching the rule. The fields in this configuration will override the corresponding fields in the load balancer configuration.
   * 
   * @example
   * {
   *             "adaptive_routing": {
   *                 "failover_across_pools": true
   *             },
   *             "sub_region_pools": {
   *                 "GB": [
   *                     96228666776****
   *                 ],
   *                 "US": [
   *                     96228666776****
   *                 ]
   *             },
   *             "default_pools": [
   *                 96228666776****,
   *                 96228666776****
   *             ],
   *             "fallback_pool": 96228666776****,
   *             "location_strategy": {
   *                 "mode": "resolver_ip",
   *                 "prefer_ecs": "always"
   *             },
   *             "random_steering": {
   *                 "default_weight": 30,
   *                 "pool_weights": {
   *                     "96228666776****": 70,
   *                     "96228666776****": 80
   *                 }
   *             },
   *             "region_pools": {
   *                 "ENAM": [
   *                     96228666776****,
   *                     92843536908****
   *                 ],
   *                 "WNAM": [
   *                     92843536908****
   *                 ]
   *             },
   *             "session_affinity": "cookie",
   *             "session_affinity_attributes": {
   *                 "drain_duration": 100,
   *                 "headers": ["none"],
   *                 "require_all_headers": false,
   *                 "samesite": "Auto",
   *                 "secure": "Auto",
   *                 "zero_downtime_failover": "sticky"
   *             },
   *             "session_affinity_ttl": 1800,
   *             "steering_policy": "dynamic_latency",
   *             "ttl": 30
   *         }
   */
  overrides?: any;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding global configurations. There are two usage scenarios: 
   * - Match all incoming requests: set the value to true 
   * - Match specific requests: set the value to a custom expression, for example: (http.host eq "video.example.com")
   * 
   * @example
   * http.request.uri.path contains "/testing"
   */
  rule?: string;
  /**
   * @remarks
   * The switch for the rule. This parameter is not required when adding a global configuration. Possible values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. This parameter is not required when adding a global configuration.
   * 
   * @example
   * r2
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule. The higher the value, the higher the priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Whether to terminate the execution of subsequent rules.
   * 
   * - true: Yes.
   * - false: No, which is the default value.
   * 
   * @example
   * true
   */
  terminates?: boolean;
  static names(): { [key: string]: string } {
    return {
      fixedResponse: 'FixedResponse',
      overrides: 'Overrides',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      terminates: 'Terminates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedResponse: ListLoadBalancersResponseBodyLoadBalancersRulesFixedResponse,
      overrides: 'any',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      terminates: 'boolean',
    };
  }

  validate() {
    if(this.fixedResponse && typeof (this.fixedResponse as any).validate === 'function') {
      (this.fixedResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

