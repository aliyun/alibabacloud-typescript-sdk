// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHttpResponseHeaderModificationRuleRequestResponseHeaderModification extends $dara.Model {
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
   * The operation type. Valid values:
   * 
   * - add: Adds a response header.
   * - del: Deletes a response header.
   * - modify: Modifies a response header.
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
   * - static: static pattern
   * - dynamic: dynamic pattern
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

export class UpdateHttpResponseHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. You can obtain the ID by calling the [ListHttpResponseHeaderModificationRules](https://help.aliyun.com/document_detail/2867483.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * The response header modifications. You can add, delete, or modify response headers.
   */
  responseHeaderModification?: UpdateHttpResponseHeaderModificationRuleRequestResponseHeaderModification[];
  /**
   * @remarks
   * The rule content, which uses a conditional expression to match user requests. You do not need to specify this parameter when you add a global configuration. This parameter applies to the following two scenarios:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq "video.example.com").
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. You do not need to specify this parameter when you add a global configuration. Valid values:
   * - on: enabled
   * - off: disabled
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
   * The ID of the site. You can obtain the ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456******
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
      responseHeaderModification: { 'type': 'array', 'itemType': UpdateHttpResponseHeaderModificationRuleRequestResponseHeaderModification },
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

