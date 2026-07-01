// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResourcesIpCountDetail extends $dara.Model {
  /**
   * @remarks
   * The number of available IP addresses.
   */
  freeIpCount?: string;
  /**
   * @remarks
   * The total number of IP addresses.
   */
  totalIpCount?: string;
  /**
   * @remarks
   * The number of allocated IP addresses.
   */
  usedIpCount?: string;
  static names(): { [key: string]: string } {
    return {
      freeIpCount: 'FreeIpCount',
      totalIpCount: 'TotalIpCount',
      usedIpCount: 'UsedIpCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeIpCount: 'string',
      totalIpCount: 'string',
      usedIpCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResources extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 132193271328****
   */
  aliUid?: number;
  /**
   * @remarks
   * The CIDR block of the resource.
   * 
   * @example
   * 192.168.1.0/32
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the resource was discovered.
   * 
   * > If the resource has not been modified since it was created, the discovery time remains unchanged.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  discoveryTime?: string;
  /**
   * @remarks
   * The details of the resource IP address count.
   */
  ipCountDetail?: ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResourcesIpCountDetail;
  /**
   * @remarks
   * The IP utilization rate, in decimal format.
   * 
   * @example
   * 0
   */
  ipUsage?: string;
  /**
   * @remarks
   * The resource discovery instance ID.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * vpc-uf611fp465c7dyb4z****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   */
  resourceName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the resource ownership.
   * 
   * @example
   * 132193271328****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the resource ownership.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - **VPC**: VPC.
   * 
   * - **VSwitch**: vSwitch.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 192.168.1.0/24
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance to which the resource belongs.
   * 
   * @example
   * vpc-uf611fp465c7dyb4z****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      cidr: 'Cidr',
      discoveryTime: 'DiscoveryTime',
      ipCountDetail: 'IpCountDetail',
      ipUsage: 'IpUsage',
      ipamResourceDiscoveryId: 'IpamResourceDiscoveryId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      sourceCidr: 'SourceCidr',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      cidr: 'string',
      discoveryTime: 'string',
      ipCountDetail: ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResourcesIpCountDetail,
      ipUsage: 'string',
      ipamResourceDiscoveryId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceOwnerId: 'number',
      resourceRegionId: 'string',
      resourceType: 'string',
      sourceCidr: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.ipCountDetail && typeof (this.ipCountDetail as any).validate === 'function') {
      (this.ipCountDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamDiscoveredResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The resources.
   */
  ipamDiscoveredResources?: ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResources[];
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * - If **NextToken** is empty, no subsequent query exists.
   * - If **NextToken** has a return value, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3748DEFF-68BE-5EED-9937-7C1D0C21BAB4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the query conditions.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamDiscoveredResources: 'IpamDiscoveredResources',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamDiscoveredResources: { 'type': 'array', 'itemType': ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResources },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamDiscoveredResources)) {
      $dara.Model.validateArray(this.ipamDiscoveredResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

