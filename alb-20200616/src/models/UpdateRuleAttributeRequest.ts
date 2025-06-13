// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRuleAttributeRequestRuleActions } from "./UpdateRuleAttributeRequestRuleActions";
import { UpdateRuleAttributeRequestRuleConditions } from "./UpdateRuleAttributeRequestRuleConditions";


export class UpdateRuleAttributeRequest extends $dara.Model {
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
   * The priority of the forwarding rule. Valid values: **1 to 10000**. A lower value specifies a higher priority.
   * 
   * > The priorities of the forwarding rules created for the same listener must be unique.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The actions of the forwarding rule.
   */
  ruleActions?: UpdateRuleAttributeRequestRuleActions[];
  /**
   * @remarks
   * The match conditions of the forwarding rule.
   */
  ruleConditions?: UpdateRuleAttributeRequestRuleConditions[];
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-4dp5i6ea****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * rule-instance-test
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleConditions },
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleActions)) {
      $dara.Model.validateArray(this.ruleActions);
    }
    if(Array.isArray(this.ruleConditions)) {
      $dara.Model.validateArray(this.ruleConditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

