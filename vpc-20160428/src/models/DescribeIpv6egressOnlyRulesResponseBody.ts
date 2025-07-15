// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpv6EgressOnlyRulesResponseBodyIpv6EgressOnlyRulesIpv6EgressOnlyRule extends $dara.Model {
  /**
   * @remarks
   * The description of the egress-only rule.
   * 
   * @example
   * ruledescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance to which the egress-only rule applies.
   * 
   * @example
   * ipv6gw-bp1rhhs9zjlxukc5e****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance to which the egress-only rule applies.
   * 
   * @example
   * Ipv6Address
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the egress-only rule.
   * 
   * @example
   * ipv6py-bp1rr7fq1md8pbb3k****
   */
  ipv6EgressOnlyRuleId?: string;
  /**
   * @remarks
   * The name of the egress-only rule.
   * 
   * @example
   * rulename
   */
  name?: string;
  /**
   * @remarks
   * The status of the egress-only rule.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ipv6EgressOnlyRuleId: 'Ipv6EgressOnlyRuleId',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      instanceType: 'string',
      ipv6EgressOnlyRuleId: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6EgressOnlyRulesResponseBodyIpv6EgressOnlyRules extends $dara.Model {
  ipv6EgressOnlyRule?: DescribeIpv6EgressOnlyRulesResponseBodyIpv6EgressOnlyRulesIpv6EgressOnlyRule[];
  static names(): { [key: string]: string } {
    return {
      ipv6EgressOnlyRule: 'Ipv6EgressOnlyRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6EgressOnlyRule: { 'type': 'array', 'itemType': DescribeIpv6EgressOnlyRulesResponseBodyIpv6EgressOnlyRulesIpv6EgressOnlyRule },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6EgressOnlyRule)) {
      $dara.Model.validateArray(this.ipv6EgressOnlyRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6EgressOnlyRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the egress-only rules.
   */
  ipv6EgressOnlyRules?: DescribeIpv6EgressOnlyRulesResponseBodyIpv6EgressOnlyRules;
  /**
   * @remarks
   * The number of the returned page. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E16671B7-DEA6-48E0-8E9C-41913DAD44DD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipv6EgressOnlyRules: 'Ipv6EgressOnlyRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6EgressOnlyRules: DescribeIpv6EgressOnlyRulesResponseBodyIpv6EgressOnlyRules,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ipv6EgressOnlyRules && typeof (this.ipv6EgressOnlyRules as any).validate === 'function') {
      (this.ipv6EgressOnlyRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

