// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The new IPv4 CIDR block of the VPC.
   * 
   * You can specify a larger or smaller IPv4 CIDR block than the IPv4 CIDR block of the VPC. The subnet mask must be 8 to 28 bits in length. If you specify a smaller IPv4 CIDR block and existing IP addresses do not fall within the CIDR block, the modification fails.
   * 
   * >  If you modify the CIDR block of a VPC, your existing services are not affected.
   * 
   * @example
   * 192.168.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The new description of the VPC.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my VPC.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the DNS hostname feature is enabled. Valid values:
   * 
   * *   **false** (default): disabled.
   * *   **true**: enabled.
   * 
   * @example
   * false
   */
  enableDnsHostname?: boolean;
  /**
   * @remarks
   * Specifies whether to enable IPv6 CIDR blocks. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  enableIPv6?: boolean;
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
   * The type of IPv6 CIDR block. Valid values:
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

