// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafPoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The type of the protection policy, which is the same as the DefenseScenes field in the QueryArgs parameter.
   * 
   * @example
   * custom_acl
   */
  defenseScene?: string;
  /**
   * @remarks
   * The number of domain names that use the protection policy.
   * 
   * @example
   * 22
   */
  domainCount?: number;
  /**
   * @remarks
   * The time when the protection policy was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-29T17:08:45Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the protection policy.
   * 
   * @example
   * 100001
   */
  policyId?: number;
  /**
   * @remarks
   * The name of the protection policy.
   * 
   * @example
   * policy_test
   */
  policyName?: string;
  /**
   * @remarks
   * The status of the protection policy, which is the same as the PolicyStatus field in the QueryArgs parameter.
   * 
   * @example
   * on
   */
  policyStatus?: string;
  /**
   * @remarks
   * Indicates whether this protection policy is the default policy, which is the same as the PolicyType field in the QueryArgs parameter.
   * 
   * @example
   * default
   */
  policyType?: string;
  /**
   * @remarks
   * The number of protection rules in the protection policy.
   * 
   * @example
   * 9
   */
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      domainCount: 'DomainCount',
      gmtModified: 'GmtModified',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      policyType: 'PolicyType',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      domainCount: 'number',
      gmtModified: 'string',
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
      policyType: 'string',
      ruleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page. Valid values: **1** to **100000**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of protection policies returned per page. Valid values: an integer from **1** to **500**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The information about protection policies.
   */
  policies?: DescribeDcdnWafPoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 153ca2cd-3c01-44be-2e83-64dbc6c88630
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of protection policies.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policies: { 'type': 'array', 'itemType': DescribeDcdnWafPoliciesResponseBodyPolicies },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

