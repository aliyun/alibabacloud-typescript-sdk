// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the VPC.
   * 
   * - We recommend that you use an IPv4 address specified in RFC 1918 as the primary IPv4 CIDR block of the VPC. The subnet mask must be 16 to 28 bits in length. Examples: 10.0.0.0/16, 172.16.0.0/16, and 192.168.0.0/16.
   * - You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, 169.254.0.0/16, or their subnets as the primary IPv4 CIDR block of the virtual private cloud (VPC).
   * 
   * @example
   * 172.16.0.0/12
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the VPC.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my first Vpc
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without creating the VPC. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a Normal request and sends the request. If the request passes the check, an HTTP 2xx status code is returned and the system proceeds to create a VPC.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the DNS hostname feature. Valid values:
   * 
   * - **false** (default): disabled.
   * - **true**: enabled.
   * 
   * @example
   * false
   */
  enableDnsHostname?: boolean;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * - **false** (default): disabled.
   * - **true**: enabled.
   * 
   * @example
   * false
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The subnet mask used to allocate a CIDR block from the IPAM pool to the VPC.
   * 
   * > When you create a VPC by specifying an IPAM pool, you must specify at least one of CidrBlock or Ipv4CidrMask.
   * 
   * @example
   * 12
   */
  ipv4CidrMask?: number;
  /**
   * @remarks
   * The instance ID of the IPv4 IPAM pool.
   * 
   * @example
   * ipam-pool-sycmt3p2a9v63i****
   */
  ipv4IpamPoolId?: string;
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC. When you enable IPv6 for the VPC, the system will assign an IPv6 CIDR block. To specify an IPv6 CIDR block, you need to first invoke the [AllocateVpcIpv6Cidr](https://help.aliyun.com/document_detail/448916.html) operation to reserve the specified IPv6 CIDR block, and then pass it in.
   * 
   * @example
   * 2408:XXXX:0:6a::/56
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The subnet mask used to add an IPv6 CIDR block to the VPC from the IPAM pool.
   * 
   * @example
   * 56
   */
  ipv6CidrMask?: number;
  /**
   * @remarks
   * The instance ID of the IPv6 IPAM pool.
   * 
   * @example
   * ipam-pool-bp1aq51kkfh477z03****
   */
  ipv6IpamPoolId?: string;
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
   * The region ID of the VPC.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/2381067.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreateVpcRequestTag[];
  /**
   * @remarks
   * The user CIDR block. Separate multiple CIDR blocks with commas (,). You can specify up to three CIDR blocks.
   * 
   * For more information about user CIDR blocks, see the `What is a user CIDR block?` section in [virtual private cloud (VPC) FAQ](https://help.aliyun.com/document_detail/185311.html).
   * 
   * @example
   * 192.168.0.0/12
   */
  userCidr?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      enableDnsHostname: 'EnableDnsHostname',
      enableIpv6: 'EnableIpv6',
      ipv4CidrMask: 'Ipv4CidrMask',
      ipv4IpamPoolId: 'Ipv4IpamPoolId',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ipv6CidrMask: 'Ipv6CidrMask',
      ipv6IpamPoolId: 'Ipv6IpamPoolId',
      ipv6Isp: 'Ipv6Isp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      userCidr: 'UserCidr',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      enableDnsHostname: 'boolean',
      enableIpv6: 'boolean',
      ipv4CidrMask: 'number',
      ipv4IpamPoolId: 'string',
      ipv6CidrBlock: 'string',
      ipv6CidrMask: 'number',
      ipv6IpamPoolId: 'string',
      ipv6Isp: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateVpcRequestTag },
      userCidr: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

