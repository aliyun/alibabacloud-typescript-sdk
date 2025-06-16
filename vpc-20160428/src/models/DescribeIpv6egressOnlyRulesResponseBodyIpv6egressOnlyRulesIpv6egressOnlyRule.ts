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

