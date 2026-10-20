// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpRequestHeaderModificationRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request header modifications. Supports adding, deleting, and modifying headers.
   * 
   * This parameter is required.
   */
  requestHeaderModificationShrink?: string;
  /**
   * @remarks
   * The rule content. Uses a conditional expression to match user requests. You do not need to specify this parameter when adding a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq "video.example.com").
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. You do not need to specify this parameter when adding a global configuration. Valid values:
   * - on: Enables the rule.
   * - off: Disables the rule.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. You do not need to specify this parameter when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution sequence of the rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5407498413****
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with configuration version management enabled, you can use this parameter to specify the site version to which the configuration applies. Default value: 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      requestHeaderModificationShrink: 'RequestHeaderModification',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestHeaderModificationShrink: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

