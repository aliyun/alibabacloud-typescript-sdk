// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamPoolsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys. The key cannot be an empty string.
   * 
   * The key can be up to 64 characters in length. It must start with a letter and can contain digits, periods (.), underscores (_), and hyphens (-). The key cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The value can be an empty string.
   * 
   * The value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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

export class ListIpamPoolsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * - **IPv4**
   * 
   * - **IPv6**
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * A list of IPAM pool IDs. You can specify up to 100 IDs.
   */
  ipamPoolIds?: string[];
  /**
   * @remarks
   * The name of the IPAM pool.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  ipamPoolName?: string;
  /**
   * @remarks
   * The ID of the IPAM scope.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @remarks
   * The line type of the IPv6 CIDR block. This parameter is valid only for public IPv6 address pools. Valid values:
   * 
   * - **BGP** (default): Alibaba Cloud BGP IPv6.
   * 
   * - **ChinaMobile**
   * 
   * - **ChinaUnicom**
   * 
   * - **ChinaTelecom**
   * 
   * > If your account is whitelisted for single-line bandwidth, you can set this parameter to **ChinaTelecom**, **ChinaUnicom**, or **ChinaMobile**.
   * 
   * @example
   * BGP
   */
  ipv6Isp?: string;
  /**
   * @remarks
   * Specifies whether the address pool is a shared pool.
   * 
   * @example
   * true
   */
  isShared?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Valid values:
   * 
   * - You do not need to specify this parameter for the first call.
   * 
   * - Set this parameter to the value of NextToken that was returned in the previous call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the IPAM pool is available.
   * 
   * @example
   * cn-hangzhou
   */
  poolRegionId?: string;
  /**
   * @remarks
   * The ID of the managed region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPAM pool belongs.
   * 
   * @example
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the source IPAM pool.
   * 
   * @example
   * ipam-pool-lfnwi4jok1ss0g****
   */
  sourceIpamPoolId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListIpamPoolsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      ipamPoolIds: 'IpamPoolIds',
      ipamPoolName: 'IpamPoolName',
      ipamScopeId: 'IpamScopeId',
      ipv6Isp: 'Ipv6Isp',
      isShared: 'IsShared',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolRegionId: 'PoolRegionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIpamPoolId: 'SourceIpamPoolId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'string',
      ipamPoolIds: { 'type': 'array', 'itemType': 'string' },
      ipamPoolName: 'string',
      ipamScopeId: 'string',
      ipv6Isp: 'string',
      isShared: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      poolRegionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceIpamPoolId: 'string',
      tags: { 'type': 'array', 'itemType': ListIpamPoolsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.ipamPoolIds)) {
      $dara.Model.validateArray(this.ipamPoolIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

