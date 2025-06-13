// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRuleRequestRuleActions } from "./CreateRuleRequestRuleActions";
import { CreateRuleRequestRuleConditions } from "./CreateRuleRequestRuleConditions";
import { CreateRuleRequestTag } from "./CreateRuleRequestTag";


export class CreateRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The direction to which the forwarding rule is applied. Valid values:
   * 
   * *   **Request** (default): The forwarding rule is applied to the requests received by ALB.
   * *   **Response**: The forwarding rule is applied to the responses returned by backend servers.
   * 
   * > Basic ALB instances do not support the **Response** value.
   * 
   * @example
   * Request
   */
  direction?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a `2xx HTTP` status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The listener ID of the ALB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The priority of the forwarding rule. Valid values: **1 to 10000**. A smaller value indicates a higher priority.
   * 
   * > The priorities of the forwarding rules created for the same listener must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The actions of the forwarding rule.
   * 
   * This parameter is required.
   */
  ruleActions?: CreateRuleRequestRuleActions[];
  /**
   * @remarks
   * The match conditions of the forwarding rule.
   * 
   * This parameter is required.
   */
  ruleConditions?: CreateRuleRequestRuleConditions[];
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * *   The name must be 2 to 128 characters in length.
   * *   It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-doc
   */
  ruleName?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateRuleRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      direction: 'Direction',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleName: 'RuleName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      direction: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': CreateRuleRequestRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': CreateRuleRequestRuleConditions },
      ruleName: 'string',
      tag: { 'type': 'array', 'itemType': CreateRuleRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.ruleActions)) {
      $dara.Model.validateArray(this.ruleActions);
    }
    if(Array.isArray(this.ruleConditions)) {
      $dara.Model.validateArray(this.ruleConditions);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

