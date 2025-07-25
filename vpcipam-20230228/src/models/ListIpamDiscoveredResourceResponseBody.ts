// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResourcesIpCountDetail extends $dara.Model {
  freeIpCount?: string;
  totalIpCount?: string;
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
   * The ID of the Alibaba Cloud account.
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
   * >  If the resource has not been modified since it was created, the discovery time remains unchanged.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  discoveryTime?: string;
  ipCountDetail?: ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResourcesIpCountDetail;
  /**
   * @remarks
   * The IP usage in decimal form.
   * 
   * @example
   * 0
   */
  ipUsage?: string;
  /**
   * @remarks
   * The ID of resource discovery instance.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * vpc-uf611fp465c7dyb4z****
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 132193271328****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the region to which the resource belongs.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   **VPC**
   * *   **VSwitch**
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
   * The ID of the VPC to which the resource belongs.
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
   * The maximum number of entries on each page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of resources.
   */
  ipamDiscoveredResources?: ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResources[];
  /**
   * @remarks
   * The maximum number of entries on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, there is no next page.
   * *   If a value of **NextToken** is returned, it indicates the token that is used for the next query.
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
   * The total number of entries returned.
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

