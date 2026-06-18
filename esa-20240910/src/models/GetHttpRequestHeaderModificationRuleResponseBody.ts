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
   * The operation to perform. Valid values:
   * 
   * - add: Adds a header.
   * 
   * - del: Deletes a header.
   * 
   * - modify: Modifies a header.
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The type of the value. Valid values:
   * 
   * - static: A static value.
   * 
   * - dynamic: A dynamic value.
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
   * The configuration ID.
   * 
   * @example
   * 3528160969****
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type. Valid values:
   * 
   * - global: A global configuration.
   * 
   * - rule: A rule-based configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * The request header modifications. The add, delete, and modify operations are supported.
   */
  requestHeaderModification?: GetHttpRequestHeaderModificationRuleResponseBodyRequestHeaderModification[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The content of the rule, which uses a conditional expression to match user requests. This parameter is not required for global configurations. There are two scenarios:
   * 
   * - To match all incoming requests, set the value to true.
   * 
   * - To match specific requests, set the value to a custom expression, such as (http.host eq "video.example.com").
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. This parameter is not required for global configurations. Valid values:
   * 
   * - on: The rule is enabled.
   * 
   * - off: The rule is disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. This parameter is not required for global configurations.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule. Rules with smaller values are executed first.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with version management enabled, this parameter specifies the site version to which the configuration applies. The default value is 0.
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

