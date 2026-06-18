// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpIncomingRequestHeaderModificationRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * An array of objects, where each object defines a modification to a request header.
   * 
   * This parameter is required.
   */
  requestHeaderModificationShrink?: string;
  /**
   * @remarks
   * The conditional expression that the Rule uses to match incoming requests. This parameter is not required for a Global configuration. There are two use cases:
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, use a custom expression. For example: `(http.host eq "video.example.com")`
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the Rule is enabled. This parameter is not required for a Global configuration. Valid values:
   * 
   * - `on`: The Rule is enabled.
   * 
   * - `off`: The Rule is disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the Rule. This parameter is not required for a Global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the Rule. A lower value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The ID of the Site. You can obtain this value by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 478016908379824
   */
  siteId?: number;
  /**
   * @remarks
   * The Version of the Site configuration. For Sites with configuration versioning enabled, this parameter specifies the Version to which the Rule applies. The default value is 0.
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

