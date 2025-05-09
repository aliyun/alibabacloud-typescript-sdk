// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the local VPC.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The instance ID of the next hop for the local VPC.
   * 
   * @example
   * vrt-m5eb5me6c3l5sezae****
   */
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

