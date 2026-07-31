// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRelatedDefenseRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The protection scenario of the protection rule. For more information, refer to the **DefenseScene** parameter in [DescribeDefenseRules](https://help.aliyun.com/document_detail/461426.html).
   * 
   * @example
   * custom_acl
   */
  defenseScene?: string;
  /**
   * @remarks
   * The type of the protection rule. Valid values:
   * 
   * - **template** (default): a template-based protection rule.
   * 
   * - **resource**: a protection object-level rule.
   * 
   * - **global**: a global-level rule.
   * 
   * @example
   * template
   */
  defenseType?: string;
  /**
   * @remarks
   * The ID of the protection rule.
   * 
   * @example
   * 2456789
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the protection rule.
   * 
   * @example
   * ruleTest
   */
  ruleName?: string;
  /**
   * @remarks
   * The ID of the protection rule template.
   * 
   * @example
   * 81501
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseType: 'DefenseType',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseType: 'string',
      ruleId: 'number',
      ruleName: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRelatedDefenseRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token (**Token**) for the next page. If a next page exists, this field has a return value.
   * 
   * > If this parameter has a return value, a next page exists. Use the returned **NextToken** as a request parameter to obtain the data on the next page. Repeat this process until no value is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D****E840
   */
  requestId?: string;
  /**
   * @remarks
   * The list of associated rules.
   */
  rules?: DescribeRelatedDefenseRulesResponseBodyRules[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeRelatedDefenseRulesResponseBodyRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

