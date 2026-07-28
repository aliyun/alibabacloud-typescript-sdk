// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The new IPv4 CIDR block of the VPC.
   * 
   * You can expand or shrink the CIDR block within the original IPv4 CIDR block of the VPC. The recommended subnet mask is 16 to 28 bits. If you shrink the IPv4 CIDR block of the VPC and IP addresses that are already in use fall outside the target CIDR block, the modification fails.
   * 
   * > Modifying the IPv4 CIDR block of a VPC does not affect existing services.
   * 
   * @example
   * 192.168.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The new description of the VPC.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my VPC.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the DNS hostname feature. Valid values:
   * 
   * - **false** (default): Disabled.
   * - **true**: Enabled.
   * 
   * @example
   * false
   */
  enableDnsHostname?: boolean;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * - **false** (default): Disabled.
   * - **true**: Enabled.
   * 
   * @example
   * false
   */
  enableIPv6?: boolean;
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC.
   * When you enable IPv6 for a VPC, the system will assign an IPv6 CIDR block. To specify an IPv6 CIDR block, invoke the [AllocateVpcIpv6Cidr](https://help.aliyun.com/document_detail/448916.html) operation to reserve a specific IPv6 CIDR block first, and then pass it in.
   * > For a VPC that already has IPv6 enabled, you cannot modify the IPv6 CIDR block by passing in this parameter.
   * 
   * @example
   * 2408:XXXX:0:6a::/56
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The type of the IPv6 CIDR block of the VPC. Valid values:
   * 
   * - **BGP** (default): Alibaba Cloud BGP IPv6.
   * - **ChinaMobile**: China Mobile (single ISP).
   * - **ChinaUnicom**: China Unicom (single ISP).
   * - **ChinaTelecom**: China Telecom (single ISP).
   * 
   * > If you are a user who has the single-ISP bandwidth whitelist enabled, you can set this parameter to **ChinaTelecom** (China Telecom), **ChinaUnicom** (China Unicom), or **ChinaMobile** (China Mobile).
   * 
   * @example
   * BGP
   */
  ipv6Isp?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VPC that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1qtbach57ywecf****
   */
  vpcId?: string;
  /**
   * @remarks
   * The new name of the VPC.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * Vpc-1
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      enableDnsHostname: 'EnableDnsHostname',
      enableIPv6: 'EnableIPv6',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ipv6Isp: 'Ipv6Isp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      enableDnsHostname: 'boolean',
      enableIPv6: 'boolean',
      ipv6CidrBlock: 'string',
      ipv6Isp: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

