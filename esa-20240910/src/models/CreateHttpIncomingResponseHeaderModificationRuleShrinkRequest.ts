// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpIncomingResponseHeaderModificationRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the modifications for a response header. The supported operations are `add`, `del`, and `modify`.
   * 
   * This parameter is required.
   */
  responseHeaderModificationShrink?: string;
  /**
   * @remarks
   * The conditional expression used to match an incoming request. This parameter is not required when adding a Global configuration. Two scenarios are supported:
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
   * Indicates if the Rule is enabled. This parameter is not required when adding a Global configuration. Valid values:
   * 
   * - `on`: Enables the Rule.
   * 
   * - `off`: Disables the Rule.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The Rule name. This parameter is not required when adding a Global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The Rule execution order. A smaller value indicates a higher priority, and the Rule is executed sooner.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The unique identifier for the Site. To get this ID, call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 608665779308176
   */
  siteId?: number;
  /**
   * @remarks
   * The configuration Version for the Site. If version management is enabled, this parameter specifies the target Version. Defaults to 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      responseHeaderModificationShrink: 'ResponseHeaderModification',
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
      responseHeaderModificationShrink: 'string',
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

