// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENI that belongs to the VPC.
   * 
   * @example
   * eni-8vbhfosfqv2rff42****
   */
  eniId?: string;
  /**
   * @remarks
   * The private IP address of the ENI that belongs to the VPC.
   * 
   * @example
   * 192.168.XX.XX
   */
  eniPrivateIpAddress?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the ENI is connected.
   * 
   * @example
   * vsw-wz9viido7j436b0n1****
   */
  eniVSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      eniPrivateIpAddress: 'EniPrivateIpAddress',
      eniVSwitchId: 'EniVSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      eniPrivateIpAddress: 'string',
      eniVSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

