// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecommendManagedRulesResponseBodyRecommendedManagedRulesRecommendedManagedRuleList extends $dara.Model {
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * oss-bucket-referer-limit
   */
  configRuleName?: string;
  /**
   * @remarks
   * The description of the managed rule.
   * 
   * @example
   * If the hotlink protection feature is enabled for the OSS bucket and the Referer is added to a specified whitelist, the configuration is considered compliant.
   */
  description?: string;
  /**
   * @remarks
   * The rule identifier.
   * 
   * @example
   * oss-bucket-referer-limit
   */
  identifier?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::OSS::Bucket
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
   * @remarks
   * The maximum number of entries returned for the request.
   * 
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to initiate the next query.
   * 
   * > If this parameter is left empty, no more results are returned.
   * 
   * @example
   * zXZXbg4Mra0kOrhpwl21****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of managed rules.
   */
  recommendedManagedRuleList?: ListRecommendManagedRulesResponseBodyRecommendedManagedRulesRecommendedManagedRuleList[];
  /**
   * @remarks
   * The total number of rules.
   * 
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
  /**
   * @remarks
   * The list of rules.
   */
  recommendedManagedRules?: ListRecommendManagedRulesResponseBodyRecommendedManagedRules;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC300244-FCE3-5061-8214-C27ECB66****
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

