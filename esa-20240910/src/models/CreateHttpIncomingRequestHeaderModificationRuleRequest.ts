// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpIncomingRequestHeaderModificationRuleRequestRequestHeaderModification extends $dara.Model {
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
   * The action. Valid values:
   * 
   * *   add: adds a response header.
   * *   del: deletes a response header.
   * *   modify: modifies a response header.
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The type of the value. Valid values:
   * 
   * *   static
   * *   dynamic
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
   * headvalue
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

export class CreateHttpIncomingRequestHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of modifying request headers. You can add, delete, or modify a request header.
   * 
   * This parameter is required.
   */
  requestHeaderModification?: CreateHttpIncomingRequestHeaderModificationRuleRequestRequestHeaderModification[];
  /**
   * @remarks
   * The content of the rule. A conditional expression is used to match a user request. You do not need to set this parameter when you add global configuration. Use cases:
   * 
   * *   true: Match all incoming requests.
   * *   Set the value to a custom expression, for example: (http.host eq "video.example.com"): Match the specified request
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. Valid values: You do not need to set this parameter when you add global configuration. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. You do not need to set this parameter when you add global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The order in which the rule is executed. A smaller value gives priority to the rule.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 478016908379824
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the website configurations. You can use this parameter to specify a version of your website to apply the feature settings. By default, version 0 is used.
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
      requestHeaderModification: { 'type': 'array', 'itemType': CreateHttpIncomingRequestHeaderModificationRuleRequestRequestHeaderModification },
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

