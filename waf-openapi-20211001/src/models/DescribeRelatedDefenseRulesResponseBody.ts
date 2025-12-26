// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRelatedDefenseRulesResponseBodyRules extends $dara.Model {
  /**
   * @example
   * custom_acl
   */
  defenseScene?: string;
  /**
   * @example
   * template
   */
  defenseType?: string;
  /**
   * @example
   * 2456789
   */
  ruleId?: number;
  /**
   * @example
   * ruleTest
   */
  ruleName?: string;
  /**
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
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D****E840
   */
  requestId?: string;
  rules?: DescribeRelatedDefenseRulesResponseBodyRules[];
  /**
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

