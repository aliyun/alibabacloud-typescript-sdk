// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRedirectRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Configuration ID.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type. Possible values:
   * - global: Global configuration.
   * - rule: Rule-based configuration.
   * 
   * @example
   * rule
   */
  configType?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * Preserve query string. Possible values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  reserveQueryString?: string;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, e.g., (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Possible values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter is not required when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * Rule execution order. The smaller the value, the higher the priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with version management enabled, this parameter can specify the effective version of the site, defaulting to version 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * Response status code used by the node to respond to the client with the redirect address. Possible values:
   * - 301
   * - 302
   * - 303
   * - 307
   * - 308
   * 
   * @example
   * 301
   */
  statusCode?: string;
  /**
   * @remarks
   * Target URL after redirection.
   * 
   * @example
   * http://www.exapmle.com/index.html
   */
  targetUrl?: string;
  /**
   * @remarks
   * Redirect type. Possible values:
   * - static: Static mode.
   * - dynamic: Dynamic mode.
   * 
   * @example
   * static
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      requestId: 'RequestId',
      reserveQueryString: 'ReserveQueryString',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
      statusCode: 'StatusCode',
      targetUrl: 'TargetUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      configType: 'string',
      requestId: 'string',
      reserveQueryString: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
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

