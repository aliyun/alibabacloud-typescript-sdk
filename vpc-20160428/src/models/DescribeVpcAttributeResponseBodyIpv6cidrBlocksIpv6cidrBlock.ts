// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcAttributeResponseBodyIpv6CidrBlocksIpv6CidrBlock extends $dara.Model {
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC.
   * 
   * @example
   * 2408:XXXX:0:6a::/56
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The IPv6 CIDR block type of the VPC. Valid values:
   * 
   * *   **BGP** (default)
   * *   **ChinaMobile**
   * *   **ChinaUnicom**
   * *   **ChinaTelecom**
   * 
   * >  If you are allowed to use single-ISP bandwidth, valid values are **ChinaTelecom**, **ChinaUnicom**, and **ChinaMobile**
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

