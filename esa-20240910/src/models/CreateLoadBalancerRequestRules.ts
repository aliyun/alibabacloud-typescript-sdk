// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateLoadBalancerRequestRulesFixedResponse } from "./CreateLoadBalancerRequestRulesFixedResponse";


export class CreateLoadBalancerRequestRules extends $dara.Model {
  /**
   * @remarks
   * Execute a specified response after matching the rule.
   * 
   * @example
   * {"content_type": "application/json", "location": "www.example.com", "message_body": "Testing Hello", "status_code": 0}
   */
  fixedResponse?: CreateLoadBalancerRequestRulesFixedResponse;
  /**
   * @remarks
   * Modify the corresponding load balancing configuration after matching the rule. The fields in the configuration will override the corresponding fields in the load balancer configuration.
   * 
   * @example
   * {
   *             "adaptive_routing": {
   *                 "failover_across_pools": true
   *             },
   *             "sub_region_pools": {
   *                 "AL,AT": [
   *                     92298024898****,
   *                     92304347804****
   *                 ],
   *                 "BG,BY": [
   *                     92298024898****
   *                 ]
   *             },
   *             "default_pools": [
   *                 92298024898****,
   *                 92304347804****
   *             ],
   *             "fallback_pool": 92298024898****,
   *             "location_strategy": {
   *                 "mode": "resolver_ip",
   *                 "prefer_ecs": "always"
   *             },
   *             "random_steering": {
   *                 "default_weight": 0.3,
   *                 "pool_weights": {
   *                     "92298024898****": 0.7,
   *                     "92304347804****": 0.8
   *                 }
   *             },
   *             "region_pools": {
   *                 "CN,SEAS": [
   *                     92298024898****,
   *                     92304347804****
   *                 ],
   *                 "SAF,SAS": [
   *                     92304347804****
   *                 ]
   *             },
   *             "session_affinity": "ip",
   *             "steering_policy": "geo",
   *             "ttl": 30
   *         }
   */
  overrides?: any;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter does not need to be set when adding global configurations. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, e.g., (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.request.method eq "GET" and http.request.version eq "HTTP/1.0") or (ip.geoip.country eq "CN") or (http.host eq "www.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter does not need to be set when adding global configurations. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter does not need to be set when adding global configurations.
   * 
   * @example
   * rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule. It can be left blank, in which case the rules will be executed in the order they appear in the list. If specified, it should be an integer greater than 0, with higher values indicating a higher priority for execution.
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
   * - false: No, default value.
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
      fixedResponse: CreateLoadBalancerRequestRulesFixedResponse,
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

