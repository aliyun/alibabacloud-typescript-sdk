// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrFirewallsV2ListResponseBodyVpcTrFirewalls } from "./DescribeTrFirewallsV2listResponseBodyVpcTrFirewalls";


export class DescribeTrFirewallsV2ListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1471E2EC-F706-5F11-A79B-BD583ACB8297
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: string;
  /**
   * @remarks
   * The information about the VPC firewalls.
   */
  vpcTrFirewalls?: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewalls[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcTrFirewalls: 'VpcTrFirewalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'string',
      vpcTrFirewalls: { 'type': 'array', 'itemType': DescribeTrFirewallsV2ListResponseBodyVpcTrFirewalls },
    };
  }

  validate() {
    if(Array.isArray(this.vpcTrFirewalls)) {
      $dara.Model.validateArray(this.vpcTrFirewalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

