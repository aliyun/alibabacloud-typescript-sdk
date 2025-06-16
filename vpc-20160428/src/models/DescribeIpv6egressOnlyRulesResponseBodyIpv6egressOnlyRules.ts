// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpv6EgressOnlyRulesResponseBodyIpv6EgressOnlyRulesIpv6EgressOnlyRule } from "./DescribeIpv6egressOnlyRulesResponseBodyIpv6egressOnlyRulesIpv6egressOnlyRule";


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

