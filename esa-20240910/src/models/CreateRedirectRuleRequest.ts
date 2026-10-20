// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRedirectRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retain the query string. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  reserveQueryString?: string;
  /**
   * @remarks
   * The rule content, which uses a conditional expression to match user requests. You do not need to set this parameter when adding a global configuration. This parameter applies to the following scenarios:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq \\"video.example.com\\").
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. You do not need to set this parameter when adding a global configuration. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. You do not need to set this parameter when adding a global configuration.
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
   * The ID of the site. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with configuration version management enabled, you can use this parameter to specify the site version for which the configuration takes effect. Default value: 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * The HTTP status code used by the node to respond to the client with the redirect URL. Valid values:
   * - 301
   * - 302
   * - 303
   * - 307
   * - 308
   * 
   * This parameter is required.
   * 
   * @example
   * 301
   */
  statusCode?: string;
  /**
   * @remarks
   * The destination URL after the redirect.
   * 
   * This parameter is required.
   * 
   * @example
   * http://www.exapmle.com/index.html
   */
  targetUrl?: string;
  /**
   * @remarks
   * The redirect type. Valid values:
   * 
   * - static: Static pattern.
   * - dynamic: Dynamic pattern.
   * 
   * This parameter is required.
   * 
   * @example
   * static
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      reserveQueryString: 'ReserveQueryString',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      statusCode: 'StatusCode',
      targetUrl: 'TargetUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reserveQueryString: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
      siteVersion: 'number',
      statusCode: 'string',
      targetUrl: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

