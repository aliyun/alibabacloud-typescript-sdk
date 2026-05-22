// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHttpIncomingResponseHeaderModificationRuleRequestResponseHeaderModification extends $dara.Model {
  /**
   * @remarks
   * The name of the response header.
   * 
   * This parameter is required.
   * 
   * @example
   * headerName
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
   * The value type of the column. Valid values:
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
   * The value of the response header.
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

export class UpdateHttpIncomingResponseHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration. You can call the ListHttpIncomingResponseHeaderModificationRules operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Modifies a response header. You can add, delete, or modify a request header.
   */
  responseHeaderModification?: UpdateHttpIncomingResponseHeaderModificationRuleRequestResponseHeaderModification[];
  /**
   * @remarks
   * The content of the rule. A conditional expression is used to match a user request. You do not need to set this parameter when you add global configuration. Use cases:
   * 
   * *   true: Match all incoming requests.
   * *   Set the value to a custom expression, for example, (http.host eq "video.example.com"): Match the specified request.
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
   * 498607398028944
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      responseHeaderModification: 'ResponseHeaderModification',
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
      responseHeaderModification: { 'type': 'array', 'itemType': UpdateHttpIncomingResponseHeaderModificationRuleRequestResponseHeaderModification },
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
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

