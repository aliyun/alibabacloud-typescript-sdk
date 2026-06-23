// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateVpcCidrBlockRequest extends $dara.Model {
  /**
   * @remarks
   * The specified IPv6 CIDR block of the VPC.
   * 
   * > You cannot specify both **SecondaryCidrBlock** and **Ipv6CidrBlock**.
   * 
   * @example
   * 2408:XXXX:0:6a::/56
   */
  IPv6CidrBlock?: string;
  /**
   * @remarks
   * The version of the IP address. Valid values:
   * 
   * - **IPV4**: IPv4 address.
   * - **IPV6**: IPv6 address. When **IpVersion** is set to **IPV6** and **SecondaryCidrBlock** is not specified, a secondary IPv6 CIDR block is added to the VPC.
   * 
   * @example
   * IPV4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The instance ID of the IPAM pool.
   * 
   * @example
   * ipam-pool-sycmt3p2a9v63i****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * The subnet mask used to add an IPv6 CIDR block from an IPAM pool to the VPC.
   * 
   * > When you use an IPAM pool to add a secondary IPv6 CIDR block to the VPC, you must specify at least one of IPv6CidrBlock and Ipv6CidrMask.
   * 
   * @example
   * 56
   */
  ipv6CidrMask?: number;
  /**
   * @remarks
   * The type of the IPv6 CIDR block of the VPC. Valid values:
   * 
   * - **BGP** (default): Alibaba Cloud BGP IPv6.
   * - **ChinaMobile**: China Mobile (single ISP).
   * - **ChinaUnicom**: China Unicom (single ISP).
   * - **ChinaTelecom**: China Telecom (single ISP).
   * 
   * > If your account is included in the China single-ISP bandwidth whitelist, you can set this parameter to **ChinaTelecom** (China Telecom), **ChinaUnicom** (China Unicom), or **ChinaMobile** (China Mobile).
   * 
   * @example
   * BGP
   */
  ipv6Isp?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC to which you want to add a secondary CIDR block. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * ch-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The secondary IPv4 CIDR block to add. The CIDR block must meet the following requirements:
   * 
   * - Use a private IPv4 address specified in RFC 1918 as the secondary IPv4 CIDR block of the VPC. The subnet mask is recommended to be 16 to 28 bits in length. Examples: 10.0.0.0/16, 172.16.0.0/16, and 192.168.0.0/16.
   * - You can use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, 169.254.0.0/16, or their subnets as the secondary IPv4 CIDR block of the virtual private cloud (VPC).
   * 
   * Configuration limits:
   * 
   * - The CIDR block cannot start with 0. The subnet mask is recommended to be 16 to 28 bits in length.
   * 
   * - The secondary CIDR block cannot overlap with the primary CIDR block or existing secondary CIDR blocks of the VPC.
   * 
   * > If you do not use an IPAM pool to add a secondary CIDR block to the VPC, you must specify either the **SecondaryCidrBlock** parameter or the **Ipv6CidrBlock** parameter, but not both.
   * 
   * @example
   * 192.168.0.0/16
   */
  secondaryCidrBlock?: string;
  /**
   * @remarks
   * The subnet mask used to add a secondary IPv4 CIDR block from an IPAM pool to the VPC.
   * 
   * > When you use an IPAM pool to add a secondary IPv4 CIDR block to the VPC, you must specify at least one of SecondaryCidrBlock and SecondaryCidrMask.
   * 
   * @example
   * 16
   */
  secondaryCidrMask?: number;
  /**
   * @remarks
   * The ID of the VPC to which you want to add a secondary CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-o6wrloqsdqc9io3mg****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      IPv6CidrBlock: 'IPv6CidrBlock',
      ipVersion: 'IpVersion',
      ipamPoolId: 'IpamPoolId',
      ipv6CidrMask: 'Ipv6CidrMask',
      ipv6Isp: 'Ipv6Isp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secondaryCidrBlock: 'SecondaryCidrBlock',
      secondaryCidrMask: 'SecondaryCidrMask',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv6CidrBlock: 'string',
      ipVersion: 'string',
      ipamPoolId: 'string',
      ipv6CidrMask: 'number',
      ipv6Isp: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secondaryCidrBlock: 'string',
      secondaryCidrMask: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

