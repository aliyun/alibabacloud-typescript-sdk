// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateNetworkCidrBlockRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address version. Valid values:
   * - IPV4: IPv4 address.
   * - IPV6: IPv6 address.
   * 
   * @example
   * IPV6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The ISP of the IPv6 CIDR block. Valid values:
   * - cmcc
   * - unicom
   * - telecom
   * 
   * @example
   * telecom
   */
  ipv6Isp?: string;
  /**
   * @remarks
   * The network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * n-257gqcdfvx6n****
   */
  networkId?: string;
  /**
   * @remarks
   * The secondary IPv4 CIDR block to be added. The CIDR block must meet the following requirements:
   * - The CIDR block must be within the 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16 range.
   * - The secondary CIDR block must not overlap with the primary CIDR block or existing secondary CIDR blocks of the network.
   * 
   * @example
   * 10.XX.XX.0/24
   */
  secondaryCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      ipv6Isp: 'Ipv6Isp',
      networkId: 'NetworkId',
      secondaryCidrBlock: 'SecondaryCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'string',
      ipv6Isp: 'string',
      networkId: 'string',
      secondaryCidrBlock: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

