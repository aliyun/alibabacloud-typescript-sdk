// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRedirectRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration ID. It can be obtained by calling the [ListRedirectRules](https://help.aliyun.com/document_detail/2867474.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 3528160969****
   */
  configId?: number;
  /**
   * @remarks
   * Preserve query string. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  reserveQueryString?: string;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Value range:
   * - on: Enable.
   * - off: Disable.
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
   * The response status code used by the node to respond with the redirect address to the client. Value range:
   * 
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
   * The target URL after redirection.
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
   * @example
   * static
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      reserveQueryString: 'ReserveQueryString',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      statusCode: 'StatusCode',
      targetUrl: 'TargetUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      reserveQueryString: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
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

