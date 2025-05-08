// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRedirectRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Preserve query string. Value range:
   * 
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
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - To match all incoming requests: Set the value to true
   * - To match specific requests: Set the value to a custom expression, e.g., (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Value range:
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
  sequence?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Version number of the site configuration. For sites with version management enabled, you can use this parameter to specify the version of the site for which the configuration will take effect. The default is version 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * Response status code used by the node to respond to the client with the redirect address. Value range:
   * 
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
   * Target URL after redirection.
   * 
   * This parameter is required.
   * 
   * @example
   * http://www.exapmle.com/index.html
   */
  targetUrl?: string;
  /**
   * @remarks
   * Redirect type. Value range:
   * 
   * - static: Static mode.
   * - dynamic: Dynamic mode.
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

