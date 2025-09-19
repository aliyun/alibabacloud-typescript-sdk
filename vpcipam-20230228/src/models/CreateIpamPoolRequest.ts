// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpamPoolRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The tag key must start with a letter but cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It cannot start with a `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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
   * The default network mask assigned by the IPAM address pool.  
   * 
   * > The IPv4 network mask value range is 0 to 32 bits, and the IPv6 network mask value range is 0 to 128 bits.
   * 
   * @example
   * 28
   */
  allocationDefaultCidrMask?: number;
  /**
   * @remarks
   * The maximum network mask assigned by the IPAM address pool.  
   * > The IPv4 network mask value range is **0 to 32** bits, and the IPv6 network mask value range is **0 to 128** bits.
   * 
   * @example
   * 32
   */
  allocationMaxCidrMask?: number;
  /**
   * @remarks
   * The minimum network mask assigned by the IPAM address pool.  
   * > The IPv4 network mask value range is **0 to 32** bits, and the IPv6 network mask value range is **0 to 128** bits.
   * 
   * @example
   * 8
   */
  allocationMinCidrMask?: number;
  /**
   * @remarks
   * Whether the pool has the auto-import feature enabled.
   * 
   * @example
   * true
   */
  autoImport?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * IP address protocol version. Values:
   * - **IPv4**: IPv4 protocol.
   * - **IPv6**: IPv6 protocol.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * Description of the IPAM address pool. 
   * The length should be between 1 to 256 characters, and it must start with an uppercase or lowercase English letter or a Chinese character, but cannot begin with `http://` or `https://`. If left blank, the default value is empty.
   * 
   * @example
   * test description
   */
  ipamPoolDescription?: string;
  /**
   * @remarks
   * The name of the IPAM pool.
   * 
   * It must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  ipamPoolName?: string;
  /**
   * @remarks
   * The ID of the IPAM scope.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
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
   * The effective region of the IPAM pool.
   * 
   * @example
   * cn-hangzhou
   */
  poolRegionId?: string;
  /**
   * @remarks
   * The ID of the region where the IPAM instance is hosted. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the source IPAM pool.
   * 
   * >  If you do not specify this parameter, the pool is a parent pool.
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

