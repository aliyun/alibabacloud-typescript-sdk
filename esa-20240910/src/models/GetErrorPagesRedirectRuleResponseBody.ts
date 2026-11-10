// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErrorPagesRedirectRuleResponseBodyErrorPagesRedirect extends $dara.Model {
  /**
   * @remarks
   * The response status code used by the node when responding to the client with a redirect address. Valid values:
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
   * @example
   * 400
   */
  statusCode?: string;
  /**
   * @remarks
   * The target URL after the redirect.
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

export class GetErrorPagesRedirectRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration. You can call the [ListCompressionRules](https://help.aliyun.com/document_detail/2867498.html) operation to obtain the configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type. You can use this parameter to query global configurations or rule configurations. Valid values:
   * - global: queries global configurations
   * - rule: queries rule configurations
   * 
   * This parameter is optional. If you do not specify this parameter, global and rule configurations are not distinguished. This parameter takes effect only when the functionName parameter is specified.
   * 
   * @example
   * rule
   */
  configType?: string;
  /**
   * @remarks
   * The error code redirect.
   */
  errorPagesRedirect?: GetErrorPagesRedirectRuleResponseBodyErrorPagesRedirect[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB1A380B-09F0-41BB-280B-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The rule content, which uses conditional expressions to match user requests. You do not need to set this parameter when adding a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq \\"video.example.com\\").
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. You do not need to set this parameter when adding a global configuration. Valid values:
   * - on: enables the rule
   * - off: disables the rule
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
   * The version number of the site configuration. For sites with configuration version management enabled, you can use this parameter to specify the site version for which the configuration takes effect. Default value: 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      errorPagesRedirect: 'ErrorPagesRedirect',
      requestId: 'RequestId',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      configType: 'string',
      errorPagesRedirect: { 'type': 'array', 'itemType': GetErrorPagesRedirectRuleResponseBodyErrorPagesRedirect },
      requestId: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteVersion: 'number',
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

