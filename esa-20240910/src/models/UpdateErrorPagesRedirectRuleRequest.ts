// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateErrorPagesRedirectRuleRequestErrorPagesRedirect extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code used by the node when responding to the client with a redirect address. Valid values:
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
   * The destination URL after the redirect.
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
   * The error code redirect configuration.
   */
  errorPagesRedirect?: UpdateErrorPagesRedirectRuleRequestErrorPagesRedirect[];
  /**
   * @remarks
   * The content of the rule, which uses a conditional expression to match user requests. You do not need to specify this parameter when you add a global configuration. This parameter applies to the following scenarios:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq \\"video.example.com\\").
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. You do not need to specify this parameter when you add a global configuration. Valid values:
   * - on: Enabled.
   * - off: Disabled.
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
   * The ID of the site. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
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

