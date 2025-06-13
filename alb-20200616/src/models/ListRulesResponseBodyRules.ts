// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRulesResponseBodyRulesRuleActions } from "./ListRulesResponseBodyRulesRuleActions";
import { ListRulesResponseBodyRulesRuleConditions } from "./ListRulesResponseBodyRulesRuleConditions";
import { ListRulesResponseBodyRulesTags } from "./ListRulesResponseBodyRulesTags";


export class ListRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The direction to which the forwarding rule is applied. Valid values:
   * 
   * *   Request (default): The forwarding rule is applied to requests. The forwarding action is performed on packets that are forwarded from clients to ALB.
   * *   Responses: The forwarding rule is applied to responses. The forwarding action is performed on packets that are returned from backend servers to ALB.
   * 
   * >  Basic ALB instances support only the Response direction.
   * 
   * @example
   * Request
   */
  direction?: string;
  /**
   * @remarks
   * The ID of the listener that is associated with the forwarding rule.
   * 
   * @example
   * lsn-i35udpz3pxsmnf****
   */
  listenerId?: string;
  /**
   * @remarks
   * The ID of the Application Load Balancer (ALB) instance that is associated with the forwarding rule.
   * 
   * @example
   * alb-x30o38azsuj0sx****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The priority of the forwarding rule. Valid values: **1 to 10000**. A smaller value indicates a higher priority.
   * 
   * >  The priority of each forwarding rule added to a listener must be unique.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The action of the forwarding rule.
   */
  ruleActions?: ListRulesResponseBodyRulesRuleActions[];
  /**
   * @remarks
   * The conditions of the forwarding rule.
   */
  ruleConditions?: ListRulesResponseBodyRulesRuleConditions[];
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * rule-bpn0kn908w4nbw****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule. The name must be 2 to 128 letters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * rule-instance-test
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the forwarding rule. Valid values:
   * 
   * *   **Provisioning**: The forwarding rule is being created.
   * *   **Configuring**: The forwarding rule is being modified.
   * *   **Available**: The forwarding rule is available.
   * 
   * @example
   * Available
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListRulesResponseBodyRulesTags[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      listenerId: 'ListenerId',
      loadBalancerId: 'LoadBalancerId',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      listenerId: 'string',
      loadBalancerId: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleConditions },
      ruleId: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
      tags: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesTags },
    };
  }

  validate() {
    if(Array.isArray(this.ruleActions)) {
      $dara.Model.validateArray(this.ruleActions);
    }
    if(Array.isArray(this.ruleConditions)) {
      $dara.Model.validateArray(this.ruleConditions);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

