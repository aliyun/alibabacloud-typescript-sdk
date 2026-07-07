// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserWafRulesetShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the WAF ruleset.
   * 
   * @example
   * this is a test ruleset.
   */
  description?: string;
  /**
   * @remarks
   * The match expression of the WAF ruleset. Rules in this ruleset are evaluated only when a request matches this expression.
   * 
   * Examples:
   * - `http.host eq "example.com"` — Only requests with the host example.com enter this ruleset.
   * - `starts_with(http.uri.path, "/api/")` — Only requests with the /api/ prefix enter this ruleset.
   * 
   * > The complete expression syntax and available field set are subject to the server-side wirefilter dialect.
   * 
   * This parameter is required.
   * 
   * @example
   * ip.src == 1.1.1.1
   */
  expression?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-site-ads11w
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the WAF ruleset.
   * 
   * **Naming suggestion**: Use a combination of letters, digits, and underscores for easy reference. The specific character set, maximum length, and uniqueness constraints are subject to the WAF ruleset service naming conventions.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The phase to which the WAF ruleset belongs. Valid values:
   * 
   * - http_whitelist: whitelist rules
   * - http_custom: custom rules
   * - http_managed: managed rules
   * - http_anti_scan: scan protection rules
   * - http_ratelimit: rate limiting rules
   * 
   * > Note: The supported fields (Expression match fields, Action values, and others) vary by phase. For more information, refer to the rule configuration documentation for the corresponding phase.
   * 
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * The list of rule configurations in the WAF ruleset. Each element corresponds to a rule.
   * 
   * - The field structure of each rule is subject to the `WafRuleConfig` data structure, which includes Expression, Action, Name, and other fields.
   */
  rulesShrink?: string;
  /**
   * @remarks
   * The shared fields across multiple rules in this ruleset, such as a unified Action or Name prefix.
   * 
   * > The field structure is subject to the `WafBatchRuleShared` data structure. If you do not need to share properties, you can leave this parameter empty.
   */
  sharedShrink?: string;
  /**
   * @remarks
   * The status of the WAF ruleset. Valid values:
   * 
   * - on: Enabled. The rules in the ruleset participate in matching and blocking.
   * - off: Disabled. The ruleset is retained but does not participate in matching.
   * 
   * > The complete set of valid values is subject to the server-side enum.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expression: 'Expression',
      instanceId: 'InstanceId',
      name: 'Name',
      phase: 'Phase',
      rulesShrink: 'Rules',
      sharedShrink: 'Shared',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      instanceId: 'string',
      name: 'string',
      phase: 'string',
      rulesShrink: 'string',
      sharedShrink: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

