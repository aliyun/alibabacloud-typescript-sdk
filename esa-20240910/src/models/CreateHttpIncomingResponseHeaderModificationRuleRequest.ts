// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpIncomingResponseHeaderModificationRuleRequestResponseHeaderModification extends $dara.Model {
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
   * The operation to perform on the header. Valid values:
   * 
   * - `add`: Adds the header.
   * 
   * - `del`: Deletes the header.
   * 
   * - `modify`: Modifies the header.
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The type of the header value. Valid values:
   * 
   * - `static`: The `Value` is a fixed string.
   * 
   * - `dynamic`: The `Value` can contain variables.
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

export class CreateHttpIncomingResponseHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the modifications for a response header. The supported operations are `add`, `del`, and `modify`.
   * 
   * This parameter is required.
   */
  responseHeaderModification?: CreateHttpIncomingResponseHeaderModificationRuleRequestResponseHeaderModification[];
  /**
   * @remarks
   * The conditional expression used to match an incoming request. This parameter is not required when adding a Global configuration. Two scenarios are supported:
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, use a custom expression. For example: `(http.host eq "video.example.com")`
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Indicates if the Rule is enabled. This parameter is not required when adding a Global configuration. Valid values:
   * 
   * - `on`: Enables the Rule.
   * 
   * - `off`: Disables the Rule.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The Rule name. This parameter is not required when adding a Global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The Rule execution order. A smaller value indicates a higher priority, and the Rule is executed sooner.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The unique identifier for the Site. To get this ID, call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 608665779308176
   */
  siteId?: number;
  /**
   * @remarks
   * The configuration Version for the Site. If version management is enabled, this parameter specifies the target Version. Defaults to 0.
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
      responseHeaderModification: { 'type': 'array', 'itemType': CreateHttpIncomingResponseHeaderModificationRuleRequestResponseHeaderModification },
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

