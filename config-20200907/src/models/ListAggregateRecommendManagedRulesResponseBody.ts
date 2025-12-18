// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateRecommendManagedRulesResponseBodyRecommendedManagedRulesRecommendedManagedRuleList extends $dara.Model {
  /**
   * @example
   * TagPolicy-1759141226889097
   */
  configRuleName?: string;
  description?: string;
  /**
   * @example
   * ram-user-last-login-expired-check
   */
  identifier?: string;
  /**
   * @example
   * ACS::RAM::User
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
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * zXZXbg4Mra0kOrhpwl21Lw==
   */
  nextToken?: string;
  recommendedManagedRuleList?: ListAggregateRecommendManagedRulesResponseBodyRecommendedManagedRulesRecommendedManagedRuleList[];
  /**
   * @example
   * 0
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
  recommendedManagedRules?: ListAggregateRecommendManagedRulesResponseBodyRecommendedManagedRules;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6CE4ABA1-9A57-41A9-8EA9-E8B17D4671CD
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

