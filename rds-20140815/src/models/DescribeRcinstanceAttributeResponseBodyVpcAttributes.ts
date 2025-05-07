// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress } from "./DescribeRcinstanceAttributeResponseBodyVpcAttributesPrivateIpAddress";


export class DescribeRCInstanceAttributeResponseBodyVpcAttributes extends $dara.Model {
  /**
   * @remarks
   * The network address translation (NAT) IP address of the instance. The NAT IP address is used by instances in different VPCs for communication.
   * 
   * @example
   * None
   */
  natIpAddress?: string;
  /**
   * @remarks
   * The private IP addresses of the instance.
   */
  privateIpAddress?: DescribeRCInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1nt15muovrc5qdj****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2zeu747v4765aw2id****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      natIpAddress: 'NatIpAddress',
      privateIpAddress: 'PrivateIpAddress',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natIpAddress: 'string',
      privateIpAddress: DescribeRCInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress,
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.privateIpAddress && typeof (this.privateIpAddress as any).validate === 'function') {
      (this.privateIpAddress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

