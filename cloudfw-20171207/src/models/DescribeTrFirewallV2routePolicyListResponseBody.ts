// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePolicies } from "./DescribeTrFirewallV2routePolicyListResponseBodyTrFirewallRoutePolicies";


export class DescribeTrFirewallV2RoutePolicyListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95EB5F3A-67FE-5780-92BD-5ECBA772AB7E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  /**
   * @remarks
   * The routing policies.
   */
  trFirewallRoutePolicies?: DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePolicies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trFirewallRoutePolicies: 'TrFirewallRoutePolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'string',
      trFirewallRoutePolicies: { 'type': 'array', 'itemType': DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePolicies },
    };
  }

  validate() {
    if(Array.isArray(this.trFirewallRoutePolicies)) {
      $dara.Model.validateArray(this.trFirewallRoutePolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

