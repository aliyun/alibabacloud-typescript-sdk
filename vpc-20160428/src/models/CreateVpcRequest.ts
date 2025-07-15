// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be at most 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length, but cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.
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
   * *   We recommend using the private IPv4 address specified in RFC 1918 as the primary IPv4 CIDR block of the VPC with a recommended mask length of 16 to 28 bits. For example, 10.0.0.0/16, 172.16.0.0/16, and 192.168.0.0/16.
   * *   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, 169.254.0.0/16, or their subnets as the primary IPv4 CIDR block.
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
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
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
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Whether to enable the DNS hostname feature. Values:
   * - **false** (default): Not enabled. 
   * - **true**: Enabled.
   * 
   * @example
   * false
   */
  enableDnsHostname?: boolean;
  /**
   * @remarks
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * *   **false** (default): disabled.
   * *   **true**: enabled.
   * 
   * @example
   * false
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * Allocate VPC from the IPAM address pool by inputting a mask.
   * > When creating a VPC with a specified IPAM address pool, at least one of the parameters CidrBlock or Ipv4CidrMask must be provided.
   * 
   * @example
   * 12
   */
  ipv4CidrMask?: number;
  /**
   * @remarks
   * The ID of the IP Address Manager (IPAM) pool of the IPv4 type.
   * 
   * @example
   * ipam-pool-sycmt3p2a9v63i****
   */
  ipv4IpamPoolId?: string;
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC. If you enable IPv6 for a VPC, the system allocates an IPv6 CIDR block. To specify an IPv6 CIDR block, you must call the [AllocateVpcIpv6Cidr](https://help.aliyun.com/document_detail/448916.html) operation to reserve the specified IPv6 CIDR block.
   * 
   * @example
   * 2408:XXXX:0:6a::/56
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The type of the IPv6 CIDR block of the VPC. Valid values:
   * 
   * *   **BGP** (default)
   * *   **ChinaMobile**
   * *   **ChinaUnicom**
   * *   **ChinaTelecom**
   * 
   * >  If you are allowed to use single-ISP bandwidth, you can set the value to **ChinaTelecom**, **ChinaUnicom**, or **ChinaMobile**.
   * 
   * @example
   * BGP
   */
  ipv6Isp?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the VPC belongs.
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
   * The ID of the resource group.
   * 
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag of the resource.
   */
  tag?: CreateVpcRequestTag[];
  /**
   * @remarks
   * The user CIDR block. Separate user CIDR blocks with commas (,). You can specify up to three user CIDR blocks.
   * 
   * For more information about user CIDR blocks, see the `What is a user CIDR block?` section in [VPC FAQ](https://help.aliyun.com/document_detail/185311.html).
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

