// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHttpIncomingRequestHeaderModificationRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. You can call the ListHttpIncomingRequestHeaderModificationRules operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 419717024278528
   */
  configId?: number;
  /**
   * @remarks
   * The configurations of modifying request headers. You can add, delete, or modify a request header.
   */
  requestHeaderModificationShrink?: string;
  /**
   * @remarks
   * The content of the rule. A conditional expression is used to match a user request. You do not need to set this parameter when you add global configurations. Use cases:
   * 
   * *   true: Match all incoming requests.
   * *   Set the value to a custom expression, for example, (http.host eq "video.example.com"): Match the specified request.
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. Valid values: You do not need to set this parameter when you add global configurations. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. You do not need to set this parameter when you add global configurations.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The order in which the rule is executed. A smaller value gives priority to the rule.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 568181195163328
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      requestHeaderModificationShrink: 'RequestHeaderModification',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      requestHeaderModificationShrink: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

