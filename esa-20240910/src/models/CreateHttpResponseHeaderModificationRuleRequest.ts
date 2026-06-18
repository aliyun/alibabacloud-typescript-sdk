// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpResponseHeaderModificationRuleRequestResponseHeaderModification extends $dara.Model {
  /**
   * @remarks
   * The name of the response header.
   * 
   * This parameter is required.
   * 
   * @example
   * headername
   */
  name?: string;
  /**
   * @remarks
   * The modification to perform on the header. Valid values:
   * 
   * - `add`: Adds a header.
   * 
   * - `del`: Deletes a header.
   * 
   * - `modify`: Modifies a header.
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
   * 
   * - `static`: Static value.
   * 
   * - `dynamic`: Dynamic value.
   * 
   * @example
   * static
   */
  type?: string;
  /**
   * @remarks
   * The value to assign to the header. This parameter is not required when the `Operation` is `del`.
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

export class CreateHttpResponseHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * An array of objects that specify modifications to the response header. The supported operations are `add`, `del`, and `modify`.
   * 
   * This parameter is required.
   */
  responseHeaderModification?: CreateHttpResponseHeaderModificationRuleRequestResponseHeaderModification[];
  /**
   * @remarks
   * Specifies the conditional expression that an incoming request must match for the rule to apply. This parameter is not required when adding a Global Configuration. You can set the value in one of the following ways:
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, set the value to a custom expression. For example: `(http.host eq "video.example.com")`
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. This parameter is not required when adding a Global Configuration. Valid values:
   * 
   * - `on`: Enables the rule.
   * 
   * - `off`: Disables the rule.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. This parameter is not required when adding a Global Configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule\\"s execution order. A lower value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The Site ID. You can get this ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456******
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the Site configuration. For sites with Configuration Version Management enabled, this parameter specifies the configuration version that the Rule applies to. If omitted, this parameter defaults to version 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      responseHeaderModification: 'ResponseHeaderModification',
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
      responseHeaderModification: { 'type': 'array', 'itemType': CreateHttpResponseHeaderModificationRuleRequestResponseHeaderModification },
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
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

