// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpRequestHeaderModificationRuleResponseBodyRequestHeaderModification extends $dara.Model {
  /**
   * @remarks
   * The name of the request header.
   * 
   * @example
   * headerName
   */
  name?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - add: Add.
   * - del: Delete.
   * - modify: Modify.
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The value type. Valid values:
   * - static: Static pattern.
   * - dynamic: Dynamic schema.
   * 
   * @example
   * static
   */
  type?: string;
  /**
   * @remarks
   * The value of the request header.
   * 
   * @example
   * headValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operation: 'Operation',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operation: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHttpRequestHeaderModificationRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * 3528160969****
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type. Valid values:
   * - global: Global configuration.
   * - rule: Rule configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * The request header modification settings. Add, delete, and modify operations are supported.
   */
  requestHeaderModification?: GetHttpRequestHeaderModificationRuleResponseBodyRequestHeaderModification[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The rule content, which uses a conditional expression to match user requests. You do not need to set this parameter when adding a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq "video.example.com").
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. You do not need to set this parameter when adding a global configuration. Valid values:
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
      requestHeaderModification: 'RequestHeaderModification',
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
      requestHeaderModification: { 'type': 'array', 'itemType': GetHttpRequestHeaderModificationRuleResponseBodyRequestHeaderModification },
      requestId: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.requestHeaderModification)) {
      $dara.Model.validateArray(this.requestHeaderModification);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

