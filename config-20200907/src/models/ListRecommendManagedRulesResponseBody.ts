// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecommendManagedRulesResponseBodyRecommendedManagedRulesRecommendedManagedRuleList extends $dara.Model {
  configRuleName?: string;
  description?: string;
  /**
   * @example
   * rds-instance-expired-check
   */
  identifier?: string;
  /**
   * @example
   * ACS::RDS::Instance
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

export class ListRecommendManagedRulesResponseBodyRecommendedManagedRules extends $dara.Model {
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
  recommendedManagedRuleList?: ListRecommendManagedRulesResponseBodyRecommendedManagedRulesRecommendedManagedRuleList[];
  /**
   * @example
   * 39
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
      recommendedManagedRuleList: { 'type': 'array', 'itemType': ListRecommendManagedRulesResponseBodyRecommendedManagedRulesRecommendedManagedRuleList },
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

export class ListRecommendManagedRulesResponseBody extends $dara.Model {
  recommendedManagedRules?: ListRecommendManagedRulesResponseBodyRecommendedManagedRules;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DC300244-FCE3-5061-8214-C27ECB668487
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
      recommendedManagedRules: ListRecommendManagedRulesResponseBodyRecommendedManagedRules,
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

