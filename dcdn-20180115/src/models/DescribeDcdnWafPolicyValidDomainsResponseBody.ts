// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafPolicyValidDomainsResponseBodyDomainsPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 10000002
   */
  id?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * test2
   */
  name?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyValidDomainsResponseBodyDomains extends $dara.Model {
  /**
   * @remarks
   * The protected domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The policy that is bound to the domain name.
   */
  policies?: DescribeDcdnWafPolicyValidDomainsResponseBodyDomainsPolicies[];
  /**
   * @remarks
   * The ID of the protection policy.
   * 
   * @example
   * 1000001
   */
  policyId?: number;
  /**
   * @remarks
   * The name of the protection policy.
   * 
   * @example
   * test1
   */
  policyName?: string;
  /**
   * @remarks
   * Indicates whether the protection policy is the default policy. Valid values:
   * 
   * *   default: The protection policy is the default policy.
   * *   custom: The protection policy is not the default policy.
   * 
   * @example
   * default
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      policies: 'Policies',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      policies: { 'type': 'array', 'itemType': DescribeDcdnWafPolicyValidDomainsResponseBodyDomainsPolicies },
      policyId: 'number',
      policyName: 'string',
      policyType: 'string',
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

export class DescribeDcdnWafPolicyValidDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the protected domain names.
   */
  domains?: DescribeDcdnWafPolicyValidDomainsResponseBodyDomains[];
  /**
   * @remarks
   * The page number of the returned page, which is the same as the PageNumber parameter in request parameters.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of domain names returned per page, which is the same as the PageSize parameter in request parameters.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92C630
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of domain names returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDcdnWafPolicyValidDomainsResponseBodyDomains },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

