// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpamPoolRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. A maximum of 20 tag keys are supported. Once this value is specified, it cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and must start with a letter or Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * > You must specify at least one of the **ResourceId.N** and **Tag.N** (**Tag.N.Key** and **Tag.N.Value**) parameters.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. A maximum of 20 tag values are supported. Once this value is specified, it can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * > You must specify at least one of the **ResourceId.N** and **Tag.N** (**Tag.N.Key** and **Tag.N.Value**) parameters.
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

export class CreateIpamPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The default CIDR mask for allocations from the IPAM address pool.
   * 
   * > The IPv4 CIDR mask ranges from **0** to **32** bits. The IPv6 CIDR mask ranges from **0** to **128** bits.
   * 
   * @example
   * 28
   */
  allocationDefaultCidrMask?: number;
  /**
   * @remarks
   * The maximum CIDR mask for allocations from the IPAM address pool.
   * 
   * > The IPv4 CIDR mask ranges from **0** to **32** bits. The IPv6 CIDR mask ranges from **0** to **128** bits.
   * 
   * @example
   * 32
   */
  allocationMaxCidrMask?: number;
  /**
   * @remarks
   * The minimum CIDR mask for allocations from the IPAM address pool.
   * 
   * > The IPv4 CIDR mask ranges from **0** to **32** bits. The IPv6 CIDR mask ranges from **0** to **128** bits.
   * 
   * @example
   * 8
   */
  allocationMinCidrMask?: number;
  /**
   * @remarks
   * Specifies whether to enable the auto-import feature for the address pool.
   * 
   * @example
   * true
   */
  autoImport?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * - **true**: performs only a dry run. The system checks the request for potential issues, including missing required parameters, request format, and instance status. If the request fails the dry run, an error message is returned. If the request passes the dry run, DryRunOperation is returned.
   * - **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is directly performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The IP address protocol version. Valid values:
   * 
   * - **IPv4**: IPv4.
   * 
   * - **IPv6**: IPv6.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The description of the IPAM address pool.
   * 
   * The description must be 1 to 256 characters in length and must start with an uppercase or lowercase English letter or a Chinese character. It cannot start with `http://` or `https://`. If this parameter is not specified, the description is empty by default.
   * 
   * @example
   * test description
   */
  ipamPoolDescription?: string;
  /**
   * @remarks
   * The name of the IPAM address pool.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  ipamPoolName?: string;
  /**
   * @remarks
   * The instance ID of the IPAM scope.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @remarks
   * The type of IPv6 CIDR block. This parameter takes effect only for public IPv6 address pools. Valid values:
   * 
   * - **BGP** (default): Alibaba Cloud BGP IPv6.
   * - **ChinaMobile**: China Mobile (single-line).
   * - **ChinaUnicom**: China Unicom (single-line).
   * - **ChinaTelecom**: China Telecom (single-line).
   * 
   * > If you are a user who has activated the single-line bandwidth whitelist, this field can be set to **ChinaTelecom** (China Telecom), **ChinaUnicom** (China Unicom), or **ChinaMobile** (China Mobile).
   * 
   * @example
   * BGP
   */
  ipv6Isp?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the IPAM address pool takes effect.
   * 
   * @example
   * cn-hangzhou
   */
  poolRegionId?: string;
  /**
   * @remarks
   * The region ID of the IPAM. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) API to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the IPAM address pool.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The instance ID of the source IPAM address pool.
   * 
   * > If this parameter is not specified, the created address pool is a parent address pool.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  sourceIpamPoolId?: string;
  /**
   * @remarks
   * The tag list.
   */
  tag?: CreateIpamPoolRequestTag[];
  static names(): { [key: string]: string } {
    return {
      allocationDefaultCidrMask: 'AllocationDefaultCidrMask',
      allocationMaxCidrMask: 'AllocationMaxCidrMask',
      allocationMinCidrMask: 'AllocationMinCidrMask',
      autoImport: 'AutoImport',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipVersion: 'IpVersion',
      ipamPoolDescription: 'IpamPoolDescription',
      ipamPoolName: 'IpamPoolName',
      ipamScopeId: 'IpamScopeId',
      ipv6Isp: 'Ipv6Isp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolRegionId: 'PoolRegionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIpamPoolId: 'SourceIpamPoolId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationDefaultCidrMask: 'number',
      allocationMaxCidrMask: 'number',
      allocationMinCidrMask: 'number',
      autoImport: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      ipVersion: 'string',
      ipamPoolDescription: 'string',
      ipamPoolName: 'string',
      ipamScopeId: 'string',
      ipv6Isp: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      poolRegionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceIpamPoolId: 'string',
      tag: { 'type': 'array', 'itemType': CreateIpamPoolRequestTag },
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

