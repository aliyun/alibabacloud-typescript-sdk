// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatFirewallListResponseBodyNatFirewallList } from "./DescribeNatFirewallListResponseBodyNatFirewallList";


export class DescribeNatFirewallListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The NAT firewalls.
   */
  natFirewallList?: DescribeNatFirewallListResponseBodyNatFirewallList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15FCCC52-1E23-57AE-B5EF-3E00A3******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of NAT firewalls.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      natFirewallList: 'NatFirewallList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natFirewallList: { 'type': 'array', 'itemType': DescribeNatFirewallListResponseBodyNatFirewallList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.natFirewallList)) {
      $dara.Model.validateArray(this.natFirewallList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

