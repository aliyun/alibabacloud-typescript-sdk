// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHttpIncomingRequestHeaderModificationRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration. To obtain this ID, call the ListHttpIncomingRequestHeaderModificationRules API.
   * 
   * This parameter is required.
   * 
   * @example
   * 419717024278528
   */
  configId?: number;
  /**
   * @remarks
   * An array of objects that defines the request header modifications. Supported operations include `add`, `del`, and `modify`.
   */
  requestHeaderModificationShrink?: string;
  /**
   * @remarks
   * The rule expression, a conditional expression that matches user requests. This parameter is not required for a global configuration. You can use this parameter in two ways:
   * 
   * - To match all incoming requests, set this value to `true`.
   * 
   * - To match specific requests, provide a custom expression, such as `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * The status of the rule. This parameter is not required for a global configuration. Valid values:
   * 
   * - `on`: The rule is enabled.
   * 
   * - `off`: The rule is disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. This parameter is not required for a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * Specifies the rule\\"s priority. Rules with a lower value are executed first.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The ID of the site. To obtain this ID, call the [ListSites](~~ListSites~~) API.
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

