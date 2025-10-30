// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointServiceResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic resource allocation is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  autoAllocatedEnabled?: boolean;
  /**
   * @remarks
   * The IP address of the service resource.
   * 
   * @example
   * 192.168.10.23
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the region where the service resource is deployed.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The number of endpoints that are associated with the service resource that is smoothly migrated.
   * 
   * @example
   * 10
   */
  relatedDeprecatedEndpointCount?: number;
  /**
   * @remarks
   * The number of endpoints that are associated with the service resource.
   * 
   * @example
   * 10
   */
  relatedEndpointCount?: number;
  /**
   * @remarks
   * The service resource ID.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
  /**
   * @remarks
   * Indicates whether IPv6 is enabled for the endpoint service. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  resourceSupportIPv6?: boolean;
  /**
   * @remarks
   * The type of the service resource.
   * 
   * Only **slb** is returned. This value indicates a Classic Load Balancer (CLB) instance.
   * 
   * @example
   * slb
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the service resource belongs.
   * 
   * @example
   * vsw-hp3uf6045ljdhd5zr****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the service resource belongs.
   * 
   * @example
   * vpc-hp356stwkxg3fn2xe****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone to which the service resource belongs.
   * 
   * @example
   * cn-huhehaote-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoAllocatedEnabled: 'AutoAllocatedEnabled',
      ip: 'Ip',
      regionId: 'RegionId',
      relatedDeprecatedEndpointCount: 'RelatedDeprecatedEndpointCount',
      relatedEndpointCount: 'RelatedEndpointCount',
      resourceId: 'ResourceId',
      resourceSupportIPv6: 'ResourceSupportIPv6',
      resourceType: 'ResourceType',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAllocatedEnabled: 'boolean',
      ip: 'string',
      regionId: 'string',
      relatedDeprecatedEndpointCount: 'number',
      relatedEndpointCount: 'number',
      resourceId: 'string',
      resourceSupportIPv6: 'boolean',
      resourceType: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next requests are performed.
   * *   If a value is returned for **NextToken**, the value can be used in the next request to retrieve a new page of results.
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
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The service resources.
   */
  resources?: ListVpcEndpointServiceResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListVpcEndpointServiceResourcesResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

