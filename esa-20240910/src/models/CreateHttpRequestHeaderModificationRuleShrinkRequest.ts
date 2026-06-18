// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpRequestHeaderModificationRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * An array of objects that define Request Header modifications. Supported operations include add, del, and modify.
   * 
   * This parameter is required.
   */
  requestHeaderModificationShrink?: string;
  /**
   * @remarks
   * The content of the Rule, which uses a Conditional Expression to match user requests. This parameter is not required when you add a global configuration. Supports two Use Cases:
   * 
   * - To match all incoming requests, set the value to true.
   * 
   * - To match specific requests, set the value to a custom expression, for example, (http.host eq "video.example.com").
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the Rule. This parameter is not required when you add a global configuration. Valid values are:
   * 
   * - on: Enables the Rule.
   * 
   * - off: Disables the Rule.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the Rule. This parameter is not required when you add a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the Rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The ID of the Site. You can get this ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 5407498413****
   */
  siteId?: number;
  /**
   * @remarks
   * The Version of the Site configuration. For a Site with configuration versioning enabled, this parameter specifies the configuration\\"s target Version. The default value is 0.
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

