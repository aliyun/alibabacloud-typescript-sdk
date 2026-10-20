// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHttpResponseHeaderModificationRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. You can obtain the ID by calling the [ListHttpResponseHeaderModificationRules](https://help.aliyun.com/document_detail/2867483.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * The response header modifications. You can add, delete, or modify response headers.
   */
  responseHeaderModificationShrink?: string;
  /**
   * @remarks
   * The rule content, which uses a conditional expression to match user requests. You do not need to specify this parameter when you add a global configuration. This parameter applies to the following two scenarios:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq "video.example.com").
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. You do not need to specify this parameter when you add a global configuration. Valid values:
   * - on: enabled
   * - off: disabled
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. You do not need to specify this parameter when you add a global configuration.
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
   * The ID of the site. You can obtain the ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456******
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      responseHeaderModificationShrink: 'ResponseHeaderModification',
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
      responseHeaderModificationShrink: 'string',
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

