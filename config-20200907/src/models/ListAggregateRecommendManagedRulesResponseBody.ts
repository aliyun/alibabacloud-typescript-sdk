// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateRecommendManagedRulesResponseBodyRecommendedManagedRulesRecommendedManagedRuleList extends $dara.Model {
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * ram-policy-in-use-check
   */
  configRuleName?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * If the permission policy is bound to one or more RAM user groups, RAM roles, or RAM users, the configuration is considered compliant.
   */
  description?: string;
  /**
   * @remarks
   * The identifier of the rule.
   * 
   * @example
   * ram-policy-in-use-check
   */
  identifier?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::RAM::Policy
   */
  resourceTypeScope?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleName: 'ConfigRuleName',
      description: 'Description',
      identifier: 'Identifier',
      resourceTypeScope: 'ResourceTypeScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleName: 'string',
      description: 'string',
      identifier: 'string',
      resourceTypeScope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateRecommendManagedRulesResponseBodyRecommendedManagedRules extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @remarks
   * If the return results are truncated, you can use NextToken to initiate another request to retrieve the remaining results.
   * 
   * @example
   * zXZXbg4Mra0kOrhpwl21****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of managed rules.
   */
  recommendedManagedRuleList?: ListAggregateRecommendManagedRulesResponseBodyRecommendedManagedRulesRecommendedManagedRuleList[];
  /**
   * @remarks
   * The total number of rule templates.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      recommendedManagedRuleList: 'RecommendedManagedRuleList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      recommendedManagedRuleList: { 'type': 'array', 'itemType': ListAggregateRecommendManagedRulesResponseBodyRecommendedManagedRulesRecommendedManagedRuleList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recommendedManagedRuleList)) {
      $dara.Model.validateArray(this.recommendedManagedRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateRecommendManagedRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of rules.
   */
  recommendedManagedRules?: ListAggregateRecommendManagedRulesResponseBodyRecommendedManagedRules;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CE4ABA1-9A57-41A9-8EA9-E8B17D46****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recommendedManagedRules: 'RecommendedManagedRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendedManagedRules: ListAggregateRecommendManagedRulesResponseBodyRecommendedManagedRules,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recommendedManagedRules && typeof (this.recommendedManagedRules as any).validate === 'function') {
      (this.recommendedManagedRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

