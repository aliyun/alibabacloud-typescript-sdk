// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateVpcCidrBlockRequest extends $dara.Model {
  /**
   * @remarks
   * The IPv6 CIDR block that you want to add to the VPC.
   * 
   * >  You can specify only one of **SecondaryCidrBlock** and **Ipv6CidrBlock**.
   * 
   * @example
   * 2408:XXXX:0:6a::/56
   */
  IPv6CidrBlock?: string;
  /**
   * @remarks
   * The version of the IP address. Valid values:
   * 
   * *   **IPV4**: the IPv4 address.
   * *   **IPV6**: the IPv6 address. If you set **IpVersion** to **IPV6** and do not specify **SecondaryCidrBlock**, you can add a secondary IPv6 CIDR block to the VPC.
   * 
   * @example
   * IPV4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The ID of the IPAM pool.
   * 
   * @example
   * ipam-pool-sycmt3p2a9v63i****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * Add an IPv6 CIDR block from the IPAM pool to the VPC by entering a mask.
   * 
   * >  To add an IPv6 CIDR block to a VPC, specify at least one of the IPv6CidrBlock and Ipv6CidrMask parameters.
   * 
   * @example
   * 56
   */
  ipv6CidrMask?: number;
  /**
   * @remarks
   * The type of the IPv6 CIDR block. Valid values:
   * 
   * *   **BGP** (default)
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
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC to which you want to add a secondary CIDR block.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * @example
   * ch-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IPv4 CIDR block to be added. Take note of the following requirements:
   * 
   * *   You can specify one of the following standard IPv4 CIDR blocks or their subnets as the secondary IPv4 CIDR block of the VPC: 192.168.0.0/16, 172.16.0.0/12, and 10.0.0.0/8.
   * *   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, 169.254.0.0/16, or their subnets as the secondary IPv4 CIDR block of the VPC.
   * 
   * The CIDR block must meet the following requirements:
   * 
   * *   The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
   * *   The CIDR block cannot overlap with the primary CIDR block or an existing secondary CIDR block of the VPC.
   * 
   * >  You must and can specify only one of **SecondaryCidrBlock** and **Ipv6CidrBlock**.
   * 
   * @example
   * 192.168.0.0/16
   */
  secondaryCidrBlock?: string;
  /**
   * @remarks
   * Add an IPv4 CIDR block from the IPAM pool to the VPC by specifying a mask.
   * 
   * >  If you use an IPAM pool, you must specify at least one of SecondaryCidrBlock and SecondaryCidrMask.
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

