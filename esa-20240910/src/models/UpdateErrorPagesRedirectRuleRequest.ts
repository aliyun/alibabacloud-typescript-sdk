// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateErrorPagesRedirectRuleRequestErrorPagesRedirect extends $dara.Model {
  /**
   * @remarks
   * The response status code used by the node when responding to the client with a redirect address. Valid values:
   * 
   * - 400
   * - 403
   * - 404
   * - 405
   * - 414
   * - 416
   * - 500
   * - 501
   * - 502
   * - 503
   * - 504
   * 
   * This parameter is required.
   * 
   * @example
   * 400
   */
  statusCode?: string;
  /**
   * @remarks
   * The target URL after the redirect.
   * 
   * This parameter is required.
   * 
   * @example
   * http://example.com/test
   */
  targetURL?: string;
  static names(): { [key: string]: string } {
    return {
      statusCode: 'StatusCode',
      targetURL: 'TargetURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusCode: 'string',
      targetURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateErrorPagesRedirectRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * The error code redirect.
   */
  errorPagesRedirect?: UpdateErrorPagesRedirectRuleRequestErrorPagesRedirect[];
  /**
   * @remarks
   * The rule content, which uses conditional expressions to match user requests. You do not need to specify this parameter when adding a global configuration. This parameter applies to the following scenarios:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq \\"video.example.com\\").
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. You do not need to specify this parameter when adding a global configuration. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. You do not need to specify this parameter when adding a global configuration.
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
   * The site ID. You can obtain the site ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 5407498413****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      errorPagesRedirect: 'ErrorPagesRedirect',
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
      errorPagesRedirect: { 'type': 'array', 'itemType': UpdateErrorPagesRedirectRuleRequestErrorPagesRedirect },
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.errorPagesRedirect)) {
      $dara.Model.validateArray(this.errorPagesRedirect);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

