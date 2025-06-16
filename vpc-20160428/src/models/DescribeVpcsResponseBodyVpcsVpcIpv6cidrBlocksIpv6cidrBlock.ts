// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsResponseBodyVpcsVpcIpv6CidrBlocksIpv6CidrBlock extends $dara.Model {
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC.
   * 
   * @example
   * 2408:XXXX:0:a600::/56
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The type of IPv6 CIDR block. Valid values:
   * 
   * *   **BGP**
   * *   **ChinaMobile**
   * *   **ChinaUnicom**
   * *   **ChinaTelecom**
   * 
   * >  If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set this parameter to **ChinaTelecom**, **ChinaUnicom**, or **ChinaMobile**.
   * 
   * @example
   * BGP
   */
  ipv6Isp?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ipv6Isp: 'Ipv6Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6CidrBlock: 'string',
      ipv6Isp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

