// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafGroupsResponseBodyWafGroupsPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 30000165
   */
  id?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * wasm-testmaster
   */
  name?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **custom**: a custom policy
   * *   **default**: the default policy
   * 
   * @example
   * default
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

export class DescribeDcdnWafGroupsResponseBodyWafGroups extends $dara.Model {
  /**
   * @remarks
   * The time when the WAF rule group was modified.
   * 
   * @example
   * 2020-04-12 22:25:11
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the custom WAF rule group.
   * 
   * @example
   * 30000156
   */
  id?: number;
  /**
   * @remarks
   * The name of the WAF rule.
   * 
   * @example
   * DCDN-test-operation-reports-1
   */
  name?: string;
  /**
   * @remarks
   * The policy that is associated with the WAF rule group.
   */
  policies?: DescribeDcdnWafGroupsResponseBodyWafGroupsPolicies[];
  /**
   * @remarks
   * The number of WAF rules.
   * 
   * @example
   * 452
   */
  ruleCount?: number;
  /**
   * @remarks
   * Indicates whether to enable subscription. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  subscribe?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 1012
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      policies: 'Policies',
      ruleCount: 'RuleCount',
      subscribe: 'Subscribe',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      policies: { 'type': 'array', 'itemType': DescribeDcdnWafGroupsResponseBodyWafGroupsPolicies },
      ruleCount: 'number',
      subscribe: 'string',
      templateId: 'number',
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

export class DescribeDcdnWafGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The number of WAF rule groups.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of WAF rule groups.
   */
  wafGroups?: DescribeDcdnWafGroupsResponseBodyWafGroups[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      wafGroups: 'WafGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      wafGroups: { 'type': 'array', 'itemType': DescribeDcdnWafGroupsResponseBodyWafGroups },
    };
  }

  validate() {
    if(Array.isArray(this.wafGroups)) {
      $dara.Model.validateArray(this.wafGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

