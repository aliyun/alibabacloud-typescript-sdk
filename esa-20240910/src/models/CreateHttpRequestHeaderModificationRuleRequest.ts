// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpRequestHeaderModificationRuleRequestRequestHeaderModification extends $dara.Model {
  /**
   * @remarks
   * The name of the request header.
   * 
   * This parameter is required.
   * 
   * @example
   * headername
   */
  name?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * - add: Adds a header.
   * - del: Deletes a header.
   * - modify: Modifies a header.
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The value type. Valid values:
   * - static: Static pattern.
   * - dynamic: Dynamic pattern.
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
   * headervalue
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

export class CreateHttpRequestHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The request header modifications. Supports adding, deleting, and modifying headers.
   * 
   * This parameter is required.
   */
  requestHeaderModification?: CreateHttpRequestHeaderModificationRuleRequestRequestHeaderModification[];
  /**
   * @remarks
   * The rule content. Uses a conditional expression to match user requests. You do not need to specify this parameter when adding a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq "video.example.com").
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. You do not need to specify this parameter when adding a global configuration. Valid values:
   * - on: Enables the rule.
   * - off: Disables the rule.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. You do not need to specify this parameter when adding a global configuration.
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
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5407498413****
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with configuration version management enabled, you can use this parameter to specify the site version to which the configuration applies. Default value: 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      requestHeaderModification: 'RequestHeaderModification',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestHeaderModification: { 'type': 'array', 'itemType': CreateHttpRequestHeaderModificationRuleRequestRequestHeaderModification },
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
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

