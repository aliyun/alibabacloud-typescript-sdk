// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRelatedDefenseRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The protection scenario of the rule. For more information, see the description of the **DefenseScene** parameter in [DescribeDefenseRules](https://help.aliyun.com/document_detail/461426.html).
   * 
   * @example
   * custom_acl
   */
  defenseScene?: string;
  /**
   * @remarks
   * The type of the protection rule. Valid values:
   * 
   * - **template** (default): a template rule.
   * 
   * - **resource**: a rule for a protected object.
   * 
   * - **global**: a global rule.
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
   * The ID of the protection template.
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
   * The number of entries to return on each page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to query the next page of results. If more results are available, this parameter is returned.
   * 
   * > If this parameter is returned, more results are available. Use the returned NextToken value as a request parameter to retrieve the next page of data. Repeat this process until the **NextToken** parameter is not returned. This indicates that all data has been retrieved.
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

