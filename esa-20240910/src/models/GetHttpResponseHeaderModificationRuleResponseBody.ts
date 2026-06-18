// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpResponseHeaderModificationRuleResponseBodyResponseHeaderModification extends $dara.Model {
  /**
   * @remarks
   * The response header name.
   * 
   * @example
   * headerName
   */
  name?: string;
  /**
   * @remarks
   * The operation. Valid values:
   * 
   * - `add`: Adds a header.
   * 
   * - `del`: Deletes a header.
   * 
   * - `modify`: Modifies a header.
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The value type. Valid values:
   * 
   * - `static`: static mode.
   * 
   * - `dynamic`: dynamic mode.
   * 
   * @example
   * static
   */
  type?: string;
  /**
   * @remarks
   * The response header value.
   * 
   * @example
   * headerValue
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

export class GetHttpResponseHeaderModificationRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type. Valid values:
   * 
   * - `global`: global configuration.
   * 
   * - `rule`: rule configuration.
   * 
   * @example
   * rule
   */
  configType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  /**
   * @remarks
   * A list of modifications to apply to the response header.
   */
  responseHeaderModification?: GetHttpResponseHeaderModificationRuleResponseBodyResponseHeaderModification[];
  /**
   * @remarks
   * The rule content, a conditional expression used to match user requests. This parameter applies only to rule configurations. The expression can be:
   * 
   * - `true`: Matches all incoming requests.
   * 
   * - A custom expression, such as `(http.host eq "video.example.com")`: Matches specific requests.
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. This parameter applies only to rule configurations. Valid values:
   * 
   * - `on`: The rule is enabled.
   * 
   * - `off`: The rule is disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. This parameter applies only to rule configurations.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule execution order. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The version of the site configuration. If configuration versioning is enabled for the site, this parameter specifies the version to which this configuration applies. The default value is 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      requestId: 'RequestId',
      responseHeaderModification: 'ResponseHeaderModification',
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
      requestId: 'string',
      responseHeaderModification: { 'type': 'array', 'itemType': GetHttpResponseHeaderModificationRuleResponseBodyResponseHeaderModification },
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.responseHeaderModification)) {
      $dara.Model.validateArray(this.responseHeaderModification);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

