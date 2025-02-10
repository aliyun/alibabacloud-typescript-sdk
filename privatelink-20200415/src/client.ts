// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateVpcEndpointRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to add to the resource.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to add to the resource.
   * 
   * @example
   * prod
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

export class CreateVpcEndpointRequestZone extends $dara.Model {
  ipv6Address?: string;
  /**
   * @remarks
   * The ID of the vSwitch where you want to create the endpoint ENI in the zone. You can specify up to 10 vSwitch IDs.
   * 
   * @example
   * vsw-hp3uf6045ljdhd5zr****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone in which the endpoint is deployed.
   * 
   * You can specify up to 10 zone IDs.
   * 
   * @example
   * cn-huhehaote-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The IP address of the zone in which the endpoint is deployed.
   * 
   * You can specify up to 10 IP addresses.
   * 
   * @example
   * 192.168.XX.XX
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6Address: 'Ipv6Address',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      ip: 'ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceRequestResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the service resource that is added to the endpoint service. You can specify up to 20 service resource IDs.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the service resource that is added to the endpoint service. You can add up to 20 service resources to the endpoint service. Valid values:
   * 
   * *   **slb**: CLB instance
   * *   **alb**: ALB instance
   * *   **nlb**: NLB instance
   * 
   * >  In regions where PrivateLink is supported, CLB instances deployed in virtual private clouds (VPCs) can serve as the service resources of the endpoint service. You cannot access TCP/SSL listeners configured for NLB instances.
   * 
   * @example
   * slb
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-huhehaote-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
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

export class CreateVpcEndpointServiceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to add to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to add to the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * prod
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

export class DescribeRegionsResponseBodyRegionsRegionServiceResourceTypes extends $dara.Model {
  serviceResourceType?: string[];
  static names(): { [key: string]: string } {
    return {
      serviceResourceType: 'ServiceResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceResourceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceResourceType)) {
      $dara.Model.validateArray(this.serviceResourceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $dara.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * privatelink.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  serviceResourceTypes?: DescribeRegionsResponseBodyRegionsRegionServiceResourceTypes;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      serviceResourceTypes: 'ServiceResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
      serviceResourceTypes: DescribeRegionsResponseBodyRegionsRegionServiceResourceTypes,
    };
  }

  validate() {
    if(this.serviceResourceTypes && typeof (this.serviceResourceTypes as any).validate === 'function') {
      (this.serviceResourceTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZone extends $dara.Model {
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * Hangzhou Zone B
   */
  localName?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
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

export class DescribeZonesResponseBodyZones extends $dara.Model {
  zone?: DescribeZonesResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZone },
    };
  }

  validate() {
    if(Array.isArray(this.zone)) {
      $dara.Model.validateArray(this.zone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The tag key must start with a letter but cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The tag value must start with a letter but cannot start with `aliyun` or `acs:`. The tag value cannot contain `http://` or `https://`.
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

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * ep-hp3i05294c2d2d******
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **vpcendpoint**: endpoint
   * *   **vpcendpointservice**: endpoint service
   * 
   * @example
   * vpcendpoint
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of tag N added to the resource.
   * 
   * @example
   * endpoint
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N added to the resource.
   * 
   * @example
   * FinanceJoshua
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsResponseBodyConnectionsZones extends $dara.Model {
  /**
   * @remarks
   * The endpoint ENI ID.
   * 
   * @example
   * eni-hp32lk0pyv6o94hs****
   */
  eniId?: string;
  /**
   * @remarks
   * The ID of the replaced endpoint ENI in smooth migration scenarios.
   * 
   * @example
   * eni-hp32lk0pyv6o94hs****
   */
  replacedEniId?: string;
  /**
   * @remarks
   * The ID of the replaced service resource in smooth migration scenarios.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  replacedResourceId?: string;
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
   * The ID of the vSwitch to which the endpoint belongs.
   * 
   * @example
   * vsw-hp3uf6045ljdhd5zr****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The domain name of the zone.
   * 
   * @example
   * ep-hp34jaz8ykl0exwt****-cn-huhehaote.epsrv-hp3vpx8yqxblby3i****.cn-huhehaote-b.privatelink.aliyuncs.com
   */
  zoneDomain?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-huhehaote-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The state of the zone. Valid values:
   * 
   * *   **Creating**: The zone is being created.
   * *   **Wait**: The zone is to be connected.
   * *   **Connected**: The zone is connected.
   * *   **Deleting**: The zone is being deleted.
   * *   **Disconnecting**: The zone is being disconnected.
   * *   **Disconnected**: The zone is disconnected.
   * *   **Connecting**: The zone is being connected.
   * *   **Migrating**: The zone is being migrated.
   * *   **Migrated**: The zone is migrated.
   * 
   * @example
   * Connected
   */
  zoneStatus?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      replacedEniId: 'ReplacedEniId',
      replacedResourceId: 'ReplacedResourceId',
      resourceId: 'ResourceId',
      vSwitchId: 'VSwitchId',
      zoneDomain: 'ZoneDomain',
      zoneId: 'ZoneId',
      zoneStatus: 'ZoneStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      replacedEniId: 'string',
      replacedResourceId: 'string',
      resourceId: 'string',
      vSwitchId: 'string',
      zoneDomain: 'string',
      zoneId: 'string',
      zoneStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsResponseBodyConnections extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the endpoint connection. Valid values: **1024 to 10240**. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  bandwidth?: number;
  /**
   * @remarks
   * The state of the endpoint connection. Valid values:
   * 
   * *   **Pending**: The connection is being modified.
   * *   **Connecting**: The connection is being established.
   * *   **Connected**: The connection is established.
   * *   **Disconnecting**: The endpoint is being disconnected from the endpoint service.
   * *   **Disconnected**: The endpoint is disconnected from the endpoint service.
   * *   **Deleting**: The connection is being deleted.
   * *   **ServiceDeleted**: The corresponding endpoint service has been deleted.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the endpoint belongs.
   * 
   * @example
   * 25346073170691****
   */
  endpointOwnerId?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the endpoint belongs.
   * 
   * @example
   * vpc-hp356stwkxg3fn2xe****
   */
  endpointVpcId?: string;
  /**
   * @remarks
   * The time when the endpoint connection was modified.
   * 
   * @example
   * 2021-09-28T10:34:46Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the resource group to which the endpoint belongs.
   * 
   * @example
   * rg-acfmw353z35v***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the endpoint and the endpoint service belong to the same Alibaba Cloud account. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  resourceOwner?: boolean;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The zones.
   */
  zones?: ListVpcEndpointConnectionsResponseBodyConnectionsZones[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      connectionStatus: 'ConnectionStatus',
      endpointId: 'EndpointId',
      endpointOwnerId: 'EndpointOwnerId',
      endpointVpcId: 'EndpointVpcId',
      modifiedTime: 'ModifiedTime',
      resourceGroupId: 'ResourceGroupId',
      resourceOwner: 'ResourceOwner',
      serviceId: 'ServiceId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      connectionStatus: 'string',
      endpointId: 'string',
      endpointOwnerId: 'number',
      endpointVpcId: 'string',
      modifiedTime: 'string',
      resourceGroupId: 'string',
      resourceOwner: 'boolean',
      serviceId: 'string',
      zones: { 'type': 'array', 'itemType': ListVpcEndpointConnectionsResponseBodyConnectionsZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointSecurityGroupsResponseBodySecurityGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the security group that is associated with the endpoint.
   * 
   * @example
   * sg-hp33bw6ynvm2yb0e****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The associate status of the security group, valid values:
   * - Attaching: The security group is being attached.
   * - Attached: The security group is attached.
   * - Detaching: The security group is being detached.
   * 
   * @example
   * Attached
   */
  securityGroupStatus?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      securityGroupStatus: 'SecurityGroupStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      securityGroupStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListVpcEndpointServiceUsersResponseBodyUserARNs extends $dara.Model {
  /**
   * @remarks
   * The whitelist in the format of ARN.
   * 
   * @example
   * acs:ram:*::*
   */
  userARN?: string;
  static names(): { [key: string]: string } {
    return {
      userARN: 'UserARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account in the whitelist of the endpoint service.
   * 
   * @example
   * 12345678
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
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

export class ListVpcEndpointServicesResponseBodyServicesTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag added to the resource.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag added to the resource.
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

export class ListVpcEndpointServicesResponseBodyServices extends $dara.Model {
  addressIpVersion?: string;
  /**
   * @remarks
   * Indicates whether endpoint connection requests are automatically accepted. Valid values:
   * 
   * *   **true**: Endpoint connection requests are automatically accepted.
   * *   **false**: Endpoint connection requests are not automatically accepted.
   * 
   * @example
   * true
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The default maximum bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * The time when the endpoint service was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-09-24T17:15:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The maximum bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  maxBandwidth?: number;
  /**
   * @remarks
   * The minimum bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  minBandwidth?: number;
  /**
   * @remarks
   * The payer. Valid values:
   * 
   * *   **Endpoint**: service consumer
   * *   **EndpointService**: service provider
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @remarks
   * The region ID of the endpoint service.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service state of the endpoint service. Valid values:
   * 
   * *   **Normal**: The endpoint service runs as expected.
   * *   **FinancialLocked**: The endpoint service is locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  serviceBusinessStatus?: string;
  /**
   * @remarks
   * The description of the endpoint service.
   * 
   * @example
   * This is my EndpointService.
   */
  serviceDescription?: string;
  /**
   * @remarks
   * The domain name of the endpoint service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****.cn-huhehaote.privatelink.aliyuncs.com
   */
  serviceDomain?: string;
  /**
   * @remarks
   * The ID of the endpoint service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the service resource. Valid values:
   * 
   * *   **slb**: Classic Load Balancer (CLB) instance
   * *   **alb**: Application Load Balancer (ALB) instance
   * *   **nlb**: Network Load Balancer (NLB) instance
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * The state of the endpoint service. Valid values:
   * 
   * *   **Creating**: The endpoint service is being created.
   * *   **Pending**: The endpoint service is being modified.
   * *   **Active**: The endpoint service is available.
   * *   **Deleting**: The endpoint service is being deleted.
   * 
   * @example
   * Active
   */
  serviceStatus?: string;
  /**
   * @remarks
   * Indicates whether the endpoint service supports IPv6. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * The type of the endpoint service.
   * 
   * *   Only **Interface** may be returned. You can specify CLB, ALB, and NLB instances as the service resources of the endpoint service.
   * 
   * @example
   * Interface
   */
  serviceType?: string;
  /**
   * @remarks
   * The tags added to the resource.
   */
  tags?: ListVpcEndpointServicesResponseBodyServicesTags[];
  /**
   * @remarks
   * Indicates whether zone affinity is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      connectBandwidth: 'ConnectBandwidth',
      createTime: 'CreateTime',
      maxBandwidth: 'MaxBandwidth',
      minBandwidth: 'MinBandwidth',
      payer: 'Payer',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceBusinessStatus: 'ServiceBusinessStatus',
      serviceDescription: 'ServiceDescription',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceResourceType: 'ServiceResourceType',
      serviceStatus: 'ServiceStatus',
      serviceSupportIPv6: 'ServiceSupportIPv6',
      serviceType: 'ServiceType',
      tags: 'Tags',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      autoAcceptEnabled: 'boolean',
      connectBandwidth: 'number',
      createTime: 'string',
      maxBandwidth: 'number',
      minBandwidth: 'number',
      payer: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceBusinessStatus: 'string',
      serviceDescription: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceResourceType: 'string',
      serviceStatus: 'string',
      serviceSupportIPv6: 'boolean',
      serviceType: 'string',
      tags: { 'type': 'array', 'itemType': ListVpcEndpointServicesResponseBodyServicesTags },
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
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

export class ListVpcEndpointServicesByEndUserResponseBodyServicesTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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

export class ListVpcEndpointServicesByEndUserResponseBodyServices extends $dara.Model {
  addressIpVersion?: string;
  /**
   * @remarks
   * The payer. Valid values:
   * 
   * *   **Endpoint**: the service consumer
   * *   **EndpointService**: the service provider
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The domain name of the endpoint service that can be associated with the endpoint.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****.cn-huhehaote.privatelink.aliyuncs.com
   */
  serviceDomain?: string;
  /**
   * @remarks
   * The ID of the endpoint service that can be associated with the endpoint.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service that can be associated with the endpoint.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the service resource. Valid values:
   * 
   * *   **slb**: Classic Load Balancer (CLB) instance
   * *   **alb**: Application Load Balancer (ALB) instance
   * *   **nlb**: Network Load Balancer (NLB) instance
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * The type of the endpoint service.
   * 
   * Only **Interface** is returned, which indicates an interface endpoint. You can specify **CLB** and **ALB** instances as service resources.
   * 
   * @example
   * Interface
   */
  serviceType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListVpcEndpointServicesByEndUserResponseBodyServicesTags[];
  /**
   * @remarks
   * The zones of the endpoint service that can be associated with the endpoint.
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      payer: 'Payer',
      resourceGroupId: 'ResourceGroupId',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceResourceType: 'ServiceResourceType',
      serviceSupportIPv6: 'ServiceSupportIPv6',
      serviceType: 'ServiceType',
      tags: 'Tags',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      payer: 'string',
      resourceGroupId: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceResourceType: 'string',
      serviceSupportIPv6: 'boolean',
      serviceType: 'string',
      tags: { 'type': 'array', 'itemType': ListVpcEndpointServicesByEndUserResponseBodyServicesTags },
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointZonesResponseBodyZones extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint ENI.
   * 
   * @example
   * eni-hp3c8qj1tyct8aqy****
   */
  eniId?: string;
  /**
   * @remarks
   * The IP address of the endpoint ENI.
   * 
   * @example
   * 192.168.2.23
   */
  eniIp?: string;
  /**
   * @remarks
   * The region ID of the endpoint.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone. The system automatically creates an endpoint elastic network interface (ENI) in the vSwitch.
   * 
   * @example
   * vsw-hjkshjvdkdvd****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The domain name of the zone.
   * 
   * After the endpoint in the zone is connected to the endpoint service, you can access the service resources of the endpoint service by using the domain name of the zone.
   * 
   * @example
   * ep-hp3f033dp24c5yc9****-cn-huhehaote.epsrv-hp3itcpowf37m3d5****.cn-huhehaote-a.privatelink.aliyuncs.com
   */
  zoneDomain?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-huhehaote-a
   */
  zoneId?: string;
  /**
   * @remarks
   * Indicates whether the endpoint service supports IPv6. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  zoneIpv6Address?: string;
  /**
   * @remarks
   * The state of the zone. Valid values:
   * 
   * *   **Creating**: The zone is being created.
   * *   **Wait**: The zone is to be connected.
   * *   **Connected**: The zone is connected.
   * *   **Deleting**: The zone is being deleted.
   * *   **Disconnecting**: The zone is being disconnected.
   * *   **Disconnected**: The zone is disconnected.
   * *   **Connecting**: The zone is being connected.
   * 
   * @example
   * Wait
   */
  zoneStatus?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      eniIp: 'EniIp',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      zoneDomain: 'ZoneDomain',
      zoneId: 'ZoneId',
      zoneIpv6Address: 'ZoneIpv6Address',
      zoneStatus: 'ZoneStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      eniIp: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      zoneDomain: 'string',
      zoneId: 'string',
      zoneIpv6Address: 'string',
      zoneStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
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

export class ListVpcEndpointsResponseBodyEndpointsTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag added to the resource.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag added to the resource.
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

export class ListVpcEndpointsResponseBodyEndpoints extends $dara.Model {
  addressIpVersion?: string;
  /**
   * @remarks
   * The bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  bandwidth?: number;
  /**
   * @remarks
   * The state of the endpoint connection. Valid values:
   * 
   * *   **Pending**: The endpoint connection is being modified.
   * *   **Connecting**: The endpoint connection is being established.
   * *   **Connected**: The endpoint connection is established.
   * *   **Disconnecting**: The endpoint is being disconnected from the endpoint service.
   * *   **Disconnected**: The endpoint is disconnected from the endpoint service.
   * *   **Deleting**: The endpoint connection is being deleted.
   * *   **ServiceDeleted**: The corresponding service is deleted.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The time when the endpoint was created.
   * 
   * @example
   * 2021-09-24T18:00:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The service state of the endpoint. Valid values:
   * 
   * *   **Normal**: The endpoint runs as expected.
   * *   **FinancialLocked**: The endpoint is locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  endpointBusinessStatus?: string;
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * @example
   * This is my Endpoint.
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The domain name of the endpoint.
   * 
   * @example
   * ep-hp33b2e43fays7s8****.epsrv-hp3xdsq46ael67lo****.cn-huhehaote.privatelink.aliyuncs.com
   */
  endpointDomain?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The state of the endpoint. Valid values:
   * 
   * *   **Creating**: The endpoint is being created.
   * *   **Active**: The endpoint is available.
   * *   **Pending**: The endpoint is being modified.
   * *   **Deleting**: The endpoint is being deleted.
   * 
   * @example
   * Active
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Interface**: interface endpoint
   * *   **Reverse**: reverse endpoint
   * 
   * @example
   * Interface
   */
  endpointType?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) policy. For more information about policy definitions, see [Policy elements](https://help.aliyun.com/document_detail/93738.html).
   * 
   * @example
   * {\\n  \\"Version\\": \\"1\\",\\n  \\"Statement\\": [\\n    {\\n      \\"Effect\\": \\"Allow\\",\\n      \\"Action\\": \\"*\\",\\n      \\"Principal\\": \\"*\\",\\n      \\"Resource\\": \\"*\\"\\n    }\\n  ]\\n}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The region ID of the endpoint.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 1
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the endpoint and the endpoint service belong to the same Alibaba Cloud account. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  resourceOwner?: boolean;
  /**
   * @remarks
   * The ID of the endpoint service that is associated with the endpoint.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service that is associated with the endpoint.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3xdsq46ael67lo****
   */
  serviceName?: string;
  /**
   * @remarks
   * The tags added to the resource.
   */
  tags?: ListVpcEndpointsResponseBodyEndpointsTags[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the endpoint belongs.
   * 
   * @example
   * vpc-hp356stwkxg3fn2xe****
   */
  vpcId?: string;
  /**
   * @remarks
   * Indicates whether the domain name of the nearest endpoint that is associated with the endpoint service is resolved first. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      bandwidth: 'Bandwidth',
      connectionStatus: 'ConnectionStatus',
      createTime: 'CreateTime',
      endpointBusinessStatus: 'EndpointBusinessStatus',
      endpointDescription: 'EndpointDescription',
      endpointDomain: 'EndpointDomain',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointStatus: 'EndpointStatus',
      endpointType: 'EndpointType',
      policyDocument: 'PolicyDocument',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwner: 'ResourceOwner',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      tags: 'Tags',
      vpcId: 'VpcId',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      bandwidth: 'number',
      connectionStatus: 'string',
      createTime: 'string',
      endpointBusinessStatus: 'string',
      endpointDescription: 'string',
      endpointDomain: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      endpointType: 'string',
      policyDocument: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwner: 'boolean',
      serviceId: 'string',
      serviceName: 'string',
      tags: { 'type': 'array', 'itemType': ListVpcEndpointsResponseBodyEndpointsTags },
      vpcId: 'string',
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`.
   * 
   * This parameter is required.
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

export class AddUserToVpcEndpointServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the endpoint service. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The whitelist in the format of Aliyun Resource Name (ARN).
   * 
   * @example
   * acs:ram:*:<account-id>:*
   */
  userARN?: string;
  /**
   * @remarks
   * The account ID that you want to add to the whitelist.
   * 
   * @example
   * 132193271328****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      userARN: 'UserARN',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      serviceId: 'string',
      userARN: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToVpcEndpointServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToVpcEndpointServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserToVpcEndpointServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserToVpcEndpointServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneToVpcEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the endpoint to which you want to add the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  ipv6Address?: string;
  /**
   * @remarks
   * The region ID of the endpoint.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone that you want to add. The system automatically creates an endpoint ENI in the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-hjkshjvdkdvd****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone that you want to add.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The IP address of the endpoint elastic network interface (ENI) in the zone that you want to add.
   * 
   * @example
   * 192.XX.XX.32
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      ipv6Address: 'Ipv6Address',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      ip: 'ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      ipv6Address: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneToVpcEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneToVpcEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddZoneToVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddZoneToVpcEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachResourceToVpcEndpointServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
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
   * The region ID of the endpoint service to which you want to add the service resource.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the service resource. Valid values:
   * 
   * *   **slb**: Classic Load Balancer (CLB) instance
   * *   **alb**: Application Load Balancer (ALB) instance
   * *   **nlb**: Network Load Balancer (NLB) instance
   * 
   * >  You cannot access TCP/SSL listeners configured for NLB instances.
   * 
   * This parameter is required.
   * 
   * @example
   * slb
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the endpoint service to which you want to add the service resource.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The zone ID of the service resource.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      serviceId: 'ServiceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      serviceId: 'string',
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

export class AttachResourceToVpcEndpointServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachResourceToVpcEndpointServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachResourceToVpcEndpointServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachResourceToVpcEndpointServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSecurityGroupToVpcEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the endpoint with which you want to associate the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The region ID of the endpoint with which you want to associate with the security group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group with which you want to associate the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-hp3c8qj1tyct90ej****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      regionId: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSecurityGroupToVpcEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D778FF9-7640-4C13-BCD6-9265CA9A2F81
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSecurityGroupToVpcEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachSecurityGroupToVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachSecurityGroupToVpcEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The resource group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp3i05294c2d2d****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of resource. Valid values:
   * 
   * *   **VpcEndpoint**: endpoint
   * *   **VpcEndpointService**: endpoint service
   * 
   * @example
   * VpcEndpoint
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D8992C1-6712-423C-BAC5-E5E817484C6B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckProductOpenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D8992C1-6712-423C-BAC5-E5E817484C6B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether PrivateLink is activated.
   * 
   * Only **true** is returned. The value indicates that PrivateLink is activated.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckProductOpenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckProductOpenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckProductOpenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointRequest extends $dara.Model {
  addressIpVersion?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * The description must be 2 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my Endpoint.
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * The name must be 2 to 128 characters in length, and can contain digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The endpoint type. Valid values:
   * 
   * *   **Interface** You can specify an Application Load Balancer (ALB) instance, a Classic Load Balancer (CLB) instance, or a Network Load Balancer (NLB) instance.
   * *   **Reverse** You can specify a Virtual Private Cloud (VPC) NAT gateway.
   * 
   * >  Services that support reverse endpoints are provided by Alibaba Cloud or Alibaba Cloud partners. To create such a service on your own, contact your account manager.
   * 
   * @example
   * Interface
   */
  endpointType?: string;
  /**
   * @example
   * {
   *   "Version": "1",
   *   "Statement": [
   *     {
   *       "Effect": "Allow",
   *       "Action": [
   *         "oss:List*",
   *         "oss:PutObject",
   *         "oss:GetObject"
   *       ],
   *       "Resource": [
   *         "acs:oss:oss-*:*:pvl-policy-test/policy-test.txt"
   *       ],
   *       "Principal": {
   *         "RAM": [
   *           "acs:ram::14199xxxxxx:*"
   *         ]
   *       }
   *     }
   *   ]
   * }
   */
  policyDocument?: string;
  /**
   * @remarks
   * Specifies whether to enable user authentication. This parameter is available in Security Token Service (STS) mode. Valid values:
   * 
   * *   **true**: enables user authentication. After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
   * *   **false** (default): disables user authentication.
   * 
   * @example
   * false
   */
  protectedEnabled?: boolean;
  /**
   * @remarks
   * The region ID of the endpoint.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of security groups that are associated with the endpoint elastic network interface (ENI).
   * 
   * @example
   * sg-hp33bw6ynvm2yb0e****
   */
  securityGroupId?: string[];
  /**
   * @remarks
   * The ID of the endpoint service with which the endpoint is associated.
   * 
   * @example
   * epsrv-hp3xdsq46ael67lo****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service with which the endpoint is associated.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The tags to add to the resource.
   */
  tag?: CreateVpcEndpointRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the endpoint belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-hp356stwkxg3fn2xe****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zones where the endpoint is deployed.
   */
  zone?: CreateVpcEndpointRequestZone[];
  /**
   * @remarks
   * The number of private IP addresses that are assigned to an elastic network interface (ENI) in each zone. Set the value to **1**.
   * 
   * @example
   * 1
   */
  zonePrivateIpAddressCount?: number;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointDescription: 'EndpointDescription',
      endpointName: 'EndpointName',
      endpointType: 'EndpointType',
      policyDocument: 'PolicyDocument',
      protectedEnabled: 'ProtectedEnabled',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      tag: 'Tag',
      vpcId: 'VpcId',
      zone: 'Zone',
      zonePrivateIpAddressCount: 'ZonePrivateIpAddressCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointDescription: 'string',
      endpointName: 'string',
      endpointType: 'string',
      policyDocument: 'string',
      protectedEnabled: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
      serviceId: 'string',
      serviceName: 'string',
      tag: { 'type': 'array', 'itemType': CreateVpcEndpointRequestTag },
      vpcId: 'string',
      zone: { 'type': 'array', 'itemType': CreateVpcEndpointRequestZone },
      zonePrivateIpAddressCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupId)) {
      $dara.Model.validateArray(this.securityGroupId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.zone)) {
      $dara.Model.validateArray(this.zone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointResponseBody extends $dara.Model {
  addressIpVersion?: string;
  /**
   * @remarks
   * The bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 200
   */
  bandwidth?: number;
  /**
   * @remarks
   * The state of the endpoint connection. Valid values:
   * 
   * *   **Pending**: The connection is being modified.
   * *   **Connecting**: The connection is being established.
   * *   **Connected**: The connection is established.
   * *   **Disconnecting**: The endpoint is being disconnected from the endpoint service.
   * *   **Disconnected**: The endpoint is disconnected from the endpoint service.
   * *   **Deleting**: The connection is being deleted.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The time when the endpoint was created.
   * 
   * @example
   * 2022-01-02T19:11:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The service state of the endpoint. Valid values:
   * 
   * *   **Normal**: The endpoint runs as expected.
   * *   **FinancialLocked**: The endpoint is locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  endpointBusinessStatus?: string;
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * @example
   * This is my Endpoint.
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The domain name of the endpoint.
   * 
   * @example
   * ep-hp33b2e43fays7s8****.epsrv-hp3xdsq46ael67lo****.cn-huhehaote.privatelink.aliyuncs.com
   */
  endpointDomain?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The state of the endpoint. Valid values:
   * 
   * *   **Creating**: The endpoint is being created.
   * *   **Active**: The endpoint is available.
   * *   **Pending**: The endpoint is being modified.
   * *   **Deleting**: The endpoint is being deleted.
   * 
   * @example
   * Active
   */
  endpointStatus?: string;
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
   * The ID of the endpoint service with which the endpoint is associated.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service with which the endpoint is associated.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3xdsq46ael67lo****
   */
  serviceName?: string;
  /**
   * @remarks
   * The ID of the VPC to which the endpoint belongs.
   * 
   * @example
   * vpc-hp356stwkxg3fn2xe****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      bandwidth: 'Bandwidth',
      connectionStatus: 'ConnectionStatus',
      createTime: 'CreateTime',
      endpointBusinessStatus: 'EndpointBusinessStatus',
      endpointDescription: 'EndpointDescription',
      endpointDomain: 'EndpointDomain',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointStatus: 'EndpointStatus',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      bandwidth: 'number',
      connectionStatus: 'string',
      createTime: 'string',
      endpointBusinessStatus: 'string',
      endpointDescription: 'string',
      endpointDomain: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVpcEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceRequest extends $dara.Model {
  addressIpVersion?: string;
  /**
   * @remarks
   * Specifies whether to automatically accept endpoint connection requests. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request.
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The payer. Valid values:
   * 
   * *   **Endpoint**: service consumer
   * *   **EndpointService**: service provider
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @remarks
   * The region ID of the endpoint service.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The service resources of the endpoint service.
   */
  resource?: CreateVpcEndpointServiceRequestResource[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The description of the endpoint service.
   * 
   * @example
   * This is my EndpointService.
   */
  serviceDescription?: string;
  /**
   * @remarks
   * The type of the service resource. Valid values:
   * 
   * *   **slb**: Classic Load Balancer (CLB) instance
   * *   **alb**: Application Load Balancer (ALB) instance
   * *   **nlb**: Network Load Balancer (NLB) instance
   * 
   * >  You cannot access TCP/SSL listeners configured for NLB instances.
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6 for the endpoint service. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * The tags to add to the resource.
   */
  tag?: CreateVpcEndpointServiceRequestTag[];
  /**
   * @remarks
   * Specifies whether to first resolve the domain name of the nearest endpoint that is associated with the endpoint service. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      payer: 'Payer',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceGroupId: 'ResourceGroupId',
      serviceDescription: 'ServiceDescription',
      serviceResourceType: 'ServiceResourceType',
      serviceSupportIPv6: 'ServiceSupportIPv6',
      tag: 'Tag',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      autoAcceptEnabled: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      payer: 'string',
      regionId: 'string',
      resource: { 'type': 'array', 'itemType': CreateVpcEndpointServiceRequestResource },
      resourceGroupId: 'string',
      serviceDescription: 'string',
      serviceResourceType: 'string',
      serviceSupportIPv6: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateVpcEndpointServiceRequestTag },
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceResponseBody extends $dara.Model {
  addressIpVersion?: string;
  /**
   * @remarks
   * Indicates whether the endpoint service automatically accepts endpoint connection requests. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The time when the endpoint service was created.
   * 
   * @example
   * 2022-01-02T19:11:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D8992C1-6712-423C-BAC5-E5E817484C6B
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service state of the endpoint service. Valid values:
   * 
   * *   **Normal**: The endpoint service runs as expected.
   * *   **FinancialLocked**: The endpoint service is locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  serviceBusinessStatus?: string;
  /**
   * @remarks
   * The description of the endpoint service.
   * 
   * @example
   * This is my EndpointService.
   */
  serviceDescription?: string;
  /**
   * @remarks
   * The domain name of the endpoint service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****.cn-huhehaote.privatelink.aliyuncs.com
   */
  serviceDomain?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The state of the endpoint service. Valid values:
   * 
   * *   **Creating**: The endpoint service is being created.
   * *   **Pending**: The endpoint service is being modified.
   * *   **Active**: The endpoint service is available.
   * *   **Deleting**: The endpoint service is being deleted.
   * 
   * @example
   * Active
   */
  serviceStatus?: string;
  /**
   * @remarks
   * Indicates whether IPv6 was enabled for the endpoint service. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * Indicates whether the domain name of the nearest endpoint that is associated with the endpoint service is resolved first. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      createTime: 'CreateTime',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      serviceBusinessStatus: 'ServiceBusinessStatus',
      serviceDescription: 'ServiceDescription',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceStatus: 'ServiceStatus',
      serviceSupportIPv6: 'ServiceSupportIPv6',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      autoAcceptEnabled: 'boolean',
      createTime: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      serviceBusinessStatus: 'string',
      serviceDescription: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      serviceSupportIPv6: 'boolean',
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVpcEndpointServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVpcEndpointServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the endpoint that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The region ID of the endpoint that you want to delete. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D8992C1-6712-423C-BAC5-E5E817484C6B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVpcEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the endpoint service. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the endpoint service that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVpcEndpointServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVpcEndpointServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  serviceResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceResourceType: 'ServiceResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceResourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available regions.
   */
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 611CB80C-B6A9-43DB-9E38-0B0AC3D9B58F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the zone. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  serviceResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceResourceType: 'ServiceResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceResourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 611CB80C-B6A9-43DB-9E38-0B0AC3D9B58F
   */
  requestId?: string;
  /**
   * @remarks
   * The returned zones.
   */
  zones?: DescribeZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZonesResponseBodyZones,
    };
  }

  validate() {
    if(this.zones && typeof (this.zones as any).validate === 'function') {
      (this.zones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeZonesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachResourceFromVpcEndpointServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate a value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
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
   * The region ID of the endpoint.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the service resource. Valid values:
   * 
   * *   **slb**: a Classic Load Balancer (CLB) instance that supports PrivateLink. In addition, the CLB instance is deployed in a virtual private cloud (VPC).
   * *   **alb**: an Application Load Balancer (ALB) instance that supports PrivateLink. In addition, the ALB instance is deployed in a VPC.
   * 
   * @example
   * slb
   */
  resourceType?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the zone that you want to remove.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      serviceId: 'ServiceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      serviceId: 'string',
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

export class DetachResourceFromVpcEndpointServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachResourceFromVpcEndpointServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachResourceFromVpcEndpointServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachResourceFromVpcEndpointServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSecurityGroupFromVpcEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the endpoint that you want to disassociate from the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The region ID of the endpoint that you want to disassociate from the security group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group from which you want to disassociate the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-hp3c8qj1tyct90ej****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      regionId: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSecurityGroupFromVpcEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D778FF9-7640-4C13-BCD6-9265CA9A2F81
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSecurityGroupFromVpcEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachSecurityGroupFromVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachSecurityGroupFromVpcEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVpcEndpointConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the region where the connection request from the endpoint is rejected. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVpcEndpointConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVpcEndpointConnectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableVpcEndpointConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableVpcEndpointConnectionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVpcEndpointZoneConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the region where the connection request from the endpoint is rejected.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to close connections in the endpoint zone after migration. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * >  Set the value to true if you want to close connections in the endpoint zone after migration.
   * 
   * @example
   * false
   */
  replacedResource?: boolean;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the zone that is associated with the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
      replacedResource: 'ReplacedResource',
      serviceId: 'ServiceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      regionId: 'string',
      replacedResource: 'boolean',
      serviceId: 'string',
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

export class DisableVpcEndpointZoneConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVpcEndpointZoneConnectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableVpcEndpointZoneConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableVpcEndpointZoneConnectionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableVpcEndpointConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the endpoint connection. Unit: Mbit/s. Valid values: **3072 to 10240**.
   * 
   * >  The bandwidth of an endpoint connection is in the range of **100 to 10,240** Mbit/s. The default bandwidth is **3,072** Mbit/s. When the endpoint is connected to the endpoint service, the default bandwidth is the minimum bandwidth. In this case, the connection bandwidth range is **3,072 to 10,240** Mbit/s. If Classic Load Balancer (CLB) instances or Application Load Balancer (ALB) instances are specified as service resources, you can modify the endpoint connection bandwidth based on your business requirements. This parameter is invalid if Network Load Balancer (NLB) instances are specified as service resources.
   * 
   * @example
   * 1024
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the region where the connection request is accepted.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableVpcEndpointConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableVpcEndpointConnectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableVpcEndpointConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableVpcEndpointConnectionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableVpcEndpointZoneConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the region where the endpoint connection request is accepted. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the zone that is associated with the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      regionId: 'string',
      serviceId: 'string',
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

export class EnableVpcEndpointZoneConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableVpcEndpointZoneConnectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableVpcEndpointZoneConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableVpcEndpointZoneConnectionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint whose attributes you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The region ID of the endpoint whose attributes you want to query.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * *   **IPv4**
   * *   **DualStack**
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  bandwidth?: number;
  /**
   * @remarks
   * The state of the endpoint connection. Valid values:
   * 
   * *   **Pending**: The connection is being modified.
   * *   **Connecting**: The connection is being established.
   * *   **Connected**: The connection is established.
   * *   **Disconnecting**: The endpoint is being disconnected from the endpoint service.
   * *   **Disconnected**: The endpoint is disconnected from the endpoint service.
   * *   **Deleting**: The connection is being deleted.
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The time when the endpoint was created.
   * 
   * @example
   * 2021-09-24T18:00:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The service state of the endpoint. Valid values:
   * 
   * *   **Normal**: The endpoint runs as expected.
   * *   **FinancialLocked**: The endpoint is locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  endpointBusinessStatus?: string;
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * @example
   * This is my Endpoint.
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The domain name of the endpoint.
   * 
   * @example
   * ep-hp33b2e43fays7s8****.epsrv-hp3xdsq46ael67lo****.cn-huhehaote.privatelink.aliyuncs.com
   */
  endpointDomain?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The state of the endpoint. Valid values:
   * 
   * *   **Creating**: The endpoint is being created.
   * *   **Active**: The endpoint is available.
   * *   **Pending**: The endpoint is being modified.
   * *   **Deleting**: The endpoint is being deleted.
   * 
   * @example
   * Active
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The type of the endpoint.
   * 
   * **Interface** is returned. The value indicates the interface endpoint with which the Classic Load Balancer (CLB) instances are associated.
   * 
   * @example
   * Interface
   */
  endpointType?: string;
  /**
   * @remarks
   * The payer. Valid values:
   * 
   * *   **Endpoint**: the service consumer.
   * *   **EndpointService**: the service provider.
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @example
   * {
   *   "Version": "1",
   *   "Statement": [
   *     {
   *       "Effect": "Allow",
   *       "Action": [
   *         "oss:List*",
   *         "oss:PutObject",
   *         "oss:GetObject"
   *       ],
   *       "Resource": [
   *         "acs:oss:oss-*:*:pvl-policy-test/policy-test.txt"
   *       ],
   *       "Principal": {
   *         "RAM": [
   *           "acs:ram::14199xxxxxx:*"
   *         ]
   *       }
   *     }
   *   ]
   * }
   */
  policyDocument?: string;
  /**
   * @remarks
   * The region ID of the endpoint.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D8992C1-6712-423C-BAC5-E5E817484C6B
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmz7nocpei***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the endpoint and the endpoint service belong to the same Alibaba Cloud account. Valid values:
   * 
   * *   **true**: The endpoint and the endpoint service belong to the same Alibaba Cloud account.
   * *   **false**: The endpoint and the endpoint service do not belong to the same Alibaba Cloud account.
   * 
   * @example
   * true
   */
  resourceOwner?: boolean;
  /**
   * @remarks
   * The ID of the endpoint service with which the endpoint is associated.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service with which the endpoint is associated.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3xdsq46ael67lo****
   */
  serviceName?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the endpoint belongs.
   * 
   * @example
   * vpc-fdfhkjafhjvcvdjf****
   */
  vpcId?: string;
  /**
   * @remarks
   * Indicates whether the domain name of the nearest endpoint that is associated with the endpoint service is resolved first. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  zoneAffinityEnabled?: boolean;
  /**
   * @remarks
   * The number of private IP addresses that are assigned to an elastic network interface (ENI) in each zone. Only **1** is returned.
   * 
   * @example
   * 1
   */
  zonePrivateIpAddressCount?: number;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      bandwidth: 'Bandwidth',
      connectionStatus: 'ConnectionStatus',
      createTime: 'CreateTime',
      endpointBusinessStatus: 'EndpointBusinessStatus',
      endpointDescription: 'EndpointDescription',
      endpointDomain: 'EndpointDomain',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointStatus: 'EndpointStatus',
      endpointType: 'EndpointType',
      payer: 'Payer',
      policyDocument: 'PolicyDocument',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwner: 'ResourceOwner',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      vpcId: 'VpcId',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
      zonePrivateIpAddressCount: 'ZonePrivateIpAddressCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      bandwidth: 'number',
      connectionStatus: 'string',
      createTime: 'string',
      endpointBusinessStatus: 'string',
      endpointDescription: 'string',
      endpointDomain: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      endpointType: 'string',
      payer: 'string',
      policyDocument: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      resourceOwner: 'boolean',
      serviceId: 'string',
      serviceName: 'string',
      vpcId: 'string',
      zoneAffinityEnabled: 'boolean',
      zonePrivateIpAddressCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVpcEndpointAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVpcEndpointAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointServiceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the endpoint service.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointServiceAttributeResponseBody extends $dara.Model {
  addressIpVersion?: string;
  /**
   * @remarks
   * Indicates whether endpoint connection requests are automatically accepted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The default maximum bandwidth of the endpoint connection. Unit: Mbit/s. Valid values: **100** to 10240.
   * 
   * @example
   * 1024
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * The time when the endpoint service was created.
   * 
   * @example
   * 2020-01-02T19:11:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The maximum bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  maxBandwidth?: number;
  /**
   * @remarks
   * The minimum bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  minBandwidth?: number;
  /**
   * @remarks
   * The payer of the endpoint service. Valid values:
   * 
   * *   **Endpoint**: the service consumer.
   * *   **EndpointService**: the service provider.
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @remarks
   * The region ID of the endpoint service.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D8992C1-6712-423C-BAC5-E5E817484C6B
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service status of the endpoint service. Valid values:
   * 
   * *   **Normal**: The endpoint service runs as expected.
   * *   **FinancialLocked**: The endpoint service is locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  serviceBusinessStatus?: string;
  /**
   * @remarks
   * The description of the endpoint service.
   * 
   * @example
   * This is my EndpointService.
   */
  serviceDescription?: string;
  /**
   * @remarks
   * The domain name of the endpoint service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****.cn-huhehaote.privatelink.aliyuncs.com
   */
  serviceDomain?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the service resource. Valid values:
   * 
   * *   **slb**: a CLB instance.
   * *   **alb**: an ALB instance.
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * The state of the endpoint service. Valid values:
   * 
   * *   **Creating**: The endpoint service is being created.
   * *   **Pending**: The endpoint service is being modified.
   * *   **Active**: The endpoint service is available.
   * *   **Deleting**: The endpoint service is being deleted.
   * *   **Inactive**: The endpoint service is unavailable.
   * 
   * @example
   * Active
   */
  serviceStatus?: string;
  /**
   * @remarks
   * Specifies whether the endpoint service supports IPv6. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * The type of the endpoint.
   * 
   * Only **Interface** is returned. The value indicates the interface endpoint. Then, you can specify ALB and CLB instances as service resources for the endpoint service.
   * 
   * @example
   * Interface
   */
  serviceType?: string;
  /**
   * @remarks
   * Indicates whether the domain name of the nearest endpoint that is associated with the endpoint service is resolved first. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  zoneAffinityEnabled?: boolean;
  /**
   * @remarks
   * The zones to which the service resources belong.
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      connectBandwidth: 'ConnectBandwidth',
      createTime: 'CreateTime',
      maxBandwidth: 'MaxBandwidth',
      minBandwidth: 'MinBandwidth',
      payer: 'Payer',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      serviceBusinessStatus: 'ServiceBusinessStatus',
      serviceDescription: 'ServiceDescription',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceResourceType: 'ServiceResourceType',
      serviceStatus: 'ServiceStatus',
      serviceSupportIPv6: 'ServiceSupportIPv6',
      serviceType: 'ServiceType',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      autoAcceptEnabled: 'boolean',
      connectBandwidth: 'number',
      createTime: 'string',
      maxBandwidth: 'number',
      minBandwidth: 'number',
      payer: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      serviceBusinessStatus: 'string',
      serviceDescription: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceResourceType: 'string',
      serviceStatus: 'string',
      serviceSupportIPv6: 'boolean',
      serviceType: 'string',
      zoneAffinityEnabled: 'boolean',
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointServiceAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVpcEndpointServiceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVpcEndpointServiceAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * *   If this is your first request or no next requests are to be sent, you do not need to specify this parameter.
   * *   If a next request is to be sent, you must specify the token that is obtained from the previous request as the value of **NextToken**.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **vpcendpoint**: endpoint
   * *   **vpcendpointservice**: endpoint service
   * 
   * This parameter is required.
   * 
   * @example
   * vpcendpoint
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags to add to the resource.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If this is your first request and no next requests are to be performed, you do not need to specify this parameter.
   * *   If a next request is to be performed, set the parameter to the value of NextToken that is returned from the last call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D8992C1-6712-423C-BAC5-E5E817484C6B
   */
  requestId?: string;
  /**
   * @remarks
   * The resources to which the tags are added.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The state of the endpoint connection. Valid values:
   * 
   * *   **Pending**: The endpoint connection is being modified.
   * *   **Connecting**: The endpoint connection is being established.
   * *   **Connected**: The endpoint connection is established.
   * *   **Disconnecting**: The endpoint is being disconnected from the endpoint service.
   * *   **Disconnected**: The endpoint is disconnected from the endpoint service.
   * *   **Deleting**: The connection is being deleted.
   * *   **ServiceDeleted**: The corresponding endpoint service has been deleted.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the endpoint belongs.
   * 
   * @example
   * 25346073170691****
   */
  endpointOwnerId?: number;
  /**
   * @remarks
   * The ID of the endpoint elastic network interface (ENI).
   * 
   * @example
   * eni-hp32lk0pyv6o94hs****
   */
  eniId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **50**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If this is your first request and no next requests are to be performed, you do not need to specify this parameter.
   * *   If a next request is to be performed, set the value to the value of **NextToken** that is returned from the last call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the endpoint connection.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replaced service resource in smooth migration scenarios.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  replacedResourceId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the endpoint belongs.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
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
   * The endpoint service ID.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      endpointId: 'EndpointId',
      endpointOwnerId: 'EndpointOwnerId',
      eniId: 'EniId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      replacedResourceId: 'ReplacedResourceId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      endpointId: 'string',
      endpointOwnerId: 'number',
      eniId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      replacedResourceId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoint connections.
   */
  connections?: ListVpcEndpointConnectionsResponseBodyConnections[];
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
   * caeba0bbb2be03f84eb48b699f0a4883
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
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListVpcEndpointConnectionsResponseBodyConnections },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connections)) {
      $dara.Model.validateArray(this.connections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpcEndpointConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVpcEndpointConnectionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointSecurityGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:**1** to **50**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If this is your first request and no next requests are to be performed, you do not need to specify this parameter.
   * *   If a next request is to be performed, set the parameter to the value of **NextToken** that is returned from the last call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the endpoint that you want to query.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointSecurityGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
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
   * caeba0bbb2be03f84eb48b699f0a4883
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
   * The information about the security groups.
   */
  securityGroups?: ListVpcEndpointSecurityGroupsResponseBodySecurityGroups[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      securityGroups: { 'type': 'array', 'itemType': ListVpcEndpointSecurityGroupsResponseBodySecurityGroups },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointSecurityGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpcEndpointSecurityGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVpcEndpointSecurityGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **50**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If this is your first request and no next requests are to be performed, you do not need to specify this parameter.
   * *   If a next request is to be performed, set the parameter to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the service resource.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceId: 'string',
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

export class ListVpcEndpointServiceResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpcEndpointServiceResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVpcEndpointServiceResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1 to 50**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If this is your first request and no next requests are to be performed, you do not need to specify this parameter.
   * *   If a next request is to be performed, set the value to the value of **NextToken** that is returned from the last call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the endpoint service that you want to query.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account in the whitelist of the endpoint service.
   * 
   * @example
   * 12345678
   */
  userId?: number;
  /**
   * @remarks
   * The type of the user list in the whitelist of the endpoint service.
   * 
   * @example
   * Users
   */
  userListType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      userId: 'UserId',
      userListType: 'UserListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      userId: 'number',
      userListType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersResponseBody extends $dara.Model {
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
   * caeba0bbb2be03f84eb48b699f0a4883
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
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: string;
  /**
   * @remarks
   * The whitelists in the format of Aliyun Resource Name (ARN).
   */
  userARNs?: ListVpcEndpointServiceUsersResponseBodyUserARNs[];
  /**
   * @remarks
   * The Alibaba Cloud accounts in the whitelist of the endpoint service.
   */
  users?: ListVpcEndpointServiceUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userARNs: 'UserARNs',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
      userARNs: { 'type': 'array', 'itemType': ListVpcEndpointServiceUsersResponseBodyUserARNs },
      users: { 'type': 'array', 'itemType': ListVpcEndpointServiceUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.userARNs)) {
      $dara.Model.validateArray(this.userARNs);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpcEndpointServiceUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVpcEndpointServiceUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesRequest extends $dara.Model {
  addressIpVersion?: string;
  /**
   * @remarks
   * Specifies whether to automatically accept endpoint connection requests. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **50**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If this is your first request and no next requests are to be performed, you do not need to specify this parameter.
   * *   If a next request is to be performed, set the parameter to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the endpoint service.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
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
   * The service state of the endpoint service. Valid values:
   * 
   * *   **Normal**: The endpoint service runs as expected.
   * *   **FinancialLocked**: The endpoint service is locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  serviceBusinessStatus?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the service resource. Valid values:
   * 
   * *   **slb**: a Classic Load Balancer (CLB) instance
   * *   **alb**: an Application Load Balancer (ALB) instance
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * The state of the endpoint service. Valid values:
   * 
   * *   **Creating**: The endpoint service is being created.
   * *   **Pending**: The endpoint service is being modified.
   * *   **Active**: The endpoint service is available.
   * *   **Deleting**: The endpoint service is being deleted
   * 
   * @example
   * Active
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListVpcEndpointServicesRequestTag[];
  /**
   * @remarks
   * Specifies whether to first resolve the domain name of the nearest endpoint that is associated with the endpoint service. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      serviceBusinessStatus: 'ServiceBusinessStatus',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceResourceType: 'ServiceResourceType',
      serviceStatus: 'ServiceStatus',
      tag: 'Tag',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      autoAcceptEnabled: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      serviceBusinessStatus: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceResourceType: 'string',
      serviceStatus: 'string',
      tag: { 'type': 'array', 'itemType': ListVpcEndpointServicesRequestTag },
      zoneAffinityEnabled: 'boolean',
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

export class ListVpcEndpointServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
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
   * The endpoint services.
   */
  services?: ListVpcEndpointServicesResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListVpcEndpointServicesResponseBodyServices },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpcEndpointServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVpcEndpointServicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **50**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If this is your first request and no next requests are to be performed, you do not need to specify this parameter.
   * *   If a next request is to be performed, set the value to the value of **NextToken** that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the endpoint.
   * 
   * You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the endpoint service that you want to query.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service that you want to query.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3xdsq46ael67lo****
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the endpoint service.
   * 
   * Set the value to **Interface**. You can specify CLB and ALB instances as service resources for the endpoint service.
   * 
   * @example
   * Interface
   */
  serviceType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListVpcEndpointServicesByEndUserRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceType: 'string',
      tag: { 'type': 'array', 'itemType': ListVpcEndpointServicesByEndUserRequestTag },
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

export class ListVpcEndpointServicesByEndUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
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
   * The information about endpoint services.
   */
  services?: ListVpcEndpointServicesByEndUserResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 29
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListVpcEndpointServicesByEndUserResponseBodyServices },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpcEndpointServicesByEndUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVpcEndpointServicesByEndUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint for which you want to query zones.
   * 
   * After you specify an endpoint ID, the system queries the zones of the specified endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **50**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If this is your first request and no next requests are to be performed, you do not need to specify this parameter.
   * *   If a next request is to be performed, set the parameter to the value of **NextToken** that is returned from the last call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the endpoint.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointZonesResponseBody extends $dara.Model {
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
   * caeba0bbb2be03f84eb48b699f0a4883
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
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the zones.
   */
  zones?: ListVpcEndpointZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      zones: { 'type': 'array', 'itemType': ListVpcEndpointZonesResponseBodyZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointZonesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpcEndpointZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVpcEndpointZonesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsRequest extends $dara.Model {
  addressIpVersion?: string;
  /**
   * @remarks
   * The state of the endpoint connection. Valid values:
   * 
   * *   **Pending**: The endpoint connection is being modified.
   * *   **Connecting**: The endpoint connection is being established.
   * *   **Connected**: The endpoint connection is established.
   * *   **Disconnecting**: The endpoint is being disconnected from the endpoint service.
   * *   **Disconnected**: The endpoint is disconnected from the endpoint service.
   * *   **Deleting**: The connection is being deleted.
   * *   **ServiceDeleted**: The corresponding endpoint service has been deleted.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The state of the endpoint. Valid values:
   * 
   * *   **Creating**: The endpoint is being created.
   * *   **Active**: The endpoint is available.
   * *   **Pending**: The endpoint is being modified.
   * *   **Deleting**: The endpoint is being deleted.
   * 
   * @example
   * Active
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Interface**: interface endpoint
   * *   **Reverse**: reverse endpoint
   * 
   * @example
   * Interface
   */
  endpointType?: string;
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
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If this is your first request and no next requests are to be performed, you do not need to specify this parameter.
   * *   If a next request is to be performed, set the parameter to the value of **NextToken** that is returned from the last call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the endpoint.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 1
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the endpoint service with which the endpoint is associated.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListVpcEndpointsRequestTag[];
  /**
   * @remarks
   * The ID of the VPC to which the endpoint belongs.
   * 
   * @example
   * vpc-fdjkf789dfdfdfde****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      connectionStatus: 'ConnectionStatus',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointStatus: 'EndpointStatus',
      endpointType: 'EndpointType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceName: 'ServiceName',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      connectionStatus: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      endpointType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceName: 'string',
      tag: { 'type': 'array', 'itemType': ListVpcEndpointsRequestTag },
      vpcId: 'string',
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

export class ListVpcEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the endpoints.
   */
  endpoints?: ListVpcEndpointsResponseBodyEndpoints[];
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
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If this is your first request and no next requests are to be performed, you do not need to specify this parameter.
   * *   If a next request is to be performed, set the parameter to the value of **NextToken** that is returned from the last call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
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
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': ListVpcEndpointsResponseBodyEndpoints },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpcEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVpcEndpointsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenPrivateLinkServiceRequest extends $dara.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenPrivateLinkServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 3245****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenPrivateLinkServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenPrivateLinkServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenPrivateLinkServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromVpcEndpointServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the AccessKey pair, the permissions of the RAM user, and the required parameters. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the endpoint service for which you want to remove the account ID from the whitelist. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The whitelist in the format of Aliyun Resource Name (ARN).
   * 
   * @example
   * acs:ram:*:<account-id>:*
   */
  userARN?: string;
  /**
   * @remarks
   * The account ID that you want to remove from the whitelist.
   * 
   * @example
   * 12345678
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      userARN: 'UserARN',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      serviceId: 'string',
      userARN: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromVpcEndpointServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromVpcEndpointServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUserFromVpcEndpointServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveUserFromVpcEndpointServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveZoneFromVpcEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the endpoint for which you want to delete the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The region ID of the endpoint for which you want to delete the zone. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the zone that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      regionId: 'string',
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

export class RemoveZoneFromVpcEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveZoneFromVpcEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveZoneFromVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveZoneFromVpcEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token.******** The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the PrivateLink instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. Up to 50 resource IDs are supported.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of resource. Valid values:
   * 
   * *   **vpcendpoint**: endpoint
   * *   **vpcendpointservice**: endpoint service
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags to add to the resources.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B639225A0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resource. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If you specify both the All and TagKey.N parameters, the All parameter does not take effect.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token.******** The request ID may be different for each request.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a `2xx HTTP` status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the PrivateLink instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   **vpcendpoint**: endpoint
   * *   **vpcendpointservice**: endpoint service
   * 
   * This parameter is required.
   * 
   * @example
   * slb
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of the tags that you want to remove from the resources. You can specify up to 20 tag keys.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointAttributeRequest extends $dara.Model {
  addressIpVersion?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my Endpoint.
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The endpoint ID whose attributes you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @example
   * {
   *   "Version": "1",
   *   "Statement": [
   *     {
   *       "Effect": "Allow",
   *       "Action": [
   *         "oss:List*",
   *         "oss:PutObject",
   *         "oss:GetObject"
   *       ],
   *       "Resource": [
   *         "acs:oss:oss-*:*:pvl-policy-test/policy-test.txt"
   *       ],
   *       "Principal": {
   *         "RAM": [
   *           "acs:ram::14199xxxxxx:*"
   *         ]
   *       }
   *     }
   *   ]
   * }
   */
  policyDocument?: string;
  /**
   * @remarks
   * The region ID of the endpoint whose attributes you want to modify. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointDescription: 'EndpointDescription',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      policyDocument: 'PolicyDocument',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointDescription: 'string',
      endpointId: 'string',
      endpointName: 'string',
      policyDocument: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVpcEndpointAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVpcEndpointAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointConnectionAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the endpoint connection that you want to modify. Unit: Mbit/s. Valid values: **3072** to **10240**.
   * 
   * >  The bandwidth of an endpoint connection is in the range of **100** to **10,240** Mbit/s. The default bandwidth is **3,072** Mbit/s. When the endpoint is connected to the endpoint service, the default bandwidth is the minimum bandwidth. In this case, the connection bandwidth range is **3,072** to **10,240** Mbit/s. If Classic Load Balancer (CLB) instances or Application Load Balancer (ALB) instances are specified as service resources, you can modify the endpoint connection bandwidth based on your business requirements. This parameter is invalid if Network Load Balancer (NLB) instances are specified as service resources.
   * 
   * @example
   * 1000
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The region ID of the endpoint connection whose bandwidth you want to modify. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointConnectionAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointConnectionAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVpcEndpointConnectionAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVpcEndpointConnectionAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointServiceAttributeRequest extends $dara.Model {
  addressIpVersion?: string;
  /**
   * @remarks
   * Specifies whether to automatically accept endpoint connection requests. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The default maximum bandwidth of the endpoint connection. Unit: Mbit/s. Default value: **3072**.
   * 
   * Valid values: **100** to **10240**.
   * 
   * >  You can specify this parameter only if you specify Classic Load Balancer (CLB) instances or Application Load Balancer (ALB) instances as service resources.
   * 
   * @example
   * 200
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the endpoint service.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the endpoint service.
   * 
   * @example
   * This is my EndpointService.
   */
  serviceDescription?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * Specifies whether to first resolve the domain name of the nearest endpoint that is associated with the endpoint service. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      clientToken: 'ClientToken',
      connectBandwidth: 'ConnectBandwidth',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serviceDescription: 'ServiceDescription',
      serviceId: 'ServiceId',
      serviceSupportIPv6: 'ServiceSupportIPv6',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      autoAcceptEnabled: 'boolean',
      clientToken: 'string',
      connectBandwidth: 'number',
      dryRun: 'boolean',
      regionId: 'string',
      serviceDescription: 'string',
      serviceId: 'string',
      serviceSupportIPv6: 'boolean',
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointServiceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D8992C1-6712-423C-BAC5-E5E817484C6B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointServiceAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVpcEndpointServiceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVpcEndpointServiceAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointServiceResourceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic resource allocation. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoAllocatedEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and sends the request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the region where the service resource is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The zone ID of the service resource.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoAllocatedEnabled: 'AutoAllocatedEnabled',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      serviceId: 'ServiceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAllocatedEnabled: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceId: 'string',
      serviceId: 'string',
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

export class UpdateVpcEndpointServiceResourceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointServiceResourceAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVpcEndpointServiceResourceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVpcEndpointServiceResourceAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointZoneConnectionResourceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The region ID of the endpoint connection whose bandwidth you want to modify.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource allocation mode. You can change the resource allocation mode only if the endpoint connection is in the **Disconnected** state. Valid values:
   * 
   * *   **Auto**: automatically and randomly allocates service resources. In this mode, the specified service resource is deleted.
   * *   **Manual**: manually allocates service resources. If you set the value to Manual, you must also specify the **ResourceId** and **ResourceType** parameters.
   * 
   * @example
   * Auto
   */
  resourceAllocateMode?: string;
  /**
   * @remarks
   * The ID of the service resource that you want to manually allocate or migrate in the zone where the endpoint connection is deployed.
   * 
   * > If **ResourceAllocateMode** is set to **Mannual**, or **ResourceReplaceMode** is set, this parameter is required.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
  /**
   * @remarks
   * The migration mode of the service resource. Valid values:
   * 
   * *   **Graceful**: smooth migration. Service resources in the zone are smoothly migrated.
   * *   **Force**: forced migration. Service resources in the zone are forcefully migrated.
   * 
   * >  You need to specify this parameter only if you want to migrate service resources and the endpoint connection is in the **Connected** state. If you specify this parameter, you must also specify the **ResourceId** and **ResourceType** parameters.
   * 
   * @example
   * Graceful
   */
  resourceReplaceMode?: string;
  /**
   * @remarks
   * The type of the service resource. Valid values:
   * 
   * *   **slb**: a CLB instance that supports PrivateLink. In addition, the CLB instance is deployed in a VPC.
   * *   **alb**: an Application Load Balancer (ALB) instance that supports PrivateLink. In addition, the ALB instance is deployed in a VPC.
   * 
   * > If **ResourceAllocateMode** is set to **Mannual**, or **ResourceReplaceMode** is set, this parameter is required.
   * 
   * @example
   * slb
   */
  resourceType?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
      resourceAllocateMode: 'ResourceAllocateMode',
      resourceId: 'ResourceId',
      resourceReplaceMode: 'ResourceReplaceMode',
      resourceType: 'ResourceType',
      serviceId: 'ServiceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      regionId: 'string',
      resourceAllocateMode: 'string',
      resourceId: 'string',
      resourceReplaceMode: 'string',
      resourceType: 'string',
      serviceId: 'string',
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

export class UpdateVpcEndpointZoneConnectionResourceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointZoneConnectionResourceAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVpcEndpointZoneConnectionResourceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVpcEndpointZoneConnectionResourceAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("privatelink", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Adds an account ID to the whitelist of an endpoint service.
   * 
   * @remarks
   *   Before you add an account ID to the whitelist of an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **AddUserToVpcEndpointService** operation to add the ID of an Alibaba Cloud account to the whitelist of an endpoint service within a specified period of time.
   * 
   * @param request - AddUserToVpcEndpointServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToVpcEndpointServiceResponse
   */
  async addUserToVpcEndpointServiceWithOptions(request: AddUserToVpcEndpointServiceRequest, runtime: $dara.RuntimeOptions): Promise<AddUserToVpcEndpointServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.userARN)) {
      query["UserARN"] = request.userARN;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToVpcEndpointService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddUserToVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new AddUserToVpcEndpointServiceResponse({}));
    } else {
      return $dara.cast<AddUserToVpcEndpointServiceResponse>(await this.execute(params, req, runtime), new AddUserToVpcEndpointServiceResponse({}));
    }

  }

  /**
   * Adds an account ID to the whitelist of an endpoint service.
   * 
   * @remarks
   *   Before you add an account ID to the whitelist of an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **AddUserToVpcEndpointService** operation to add the ID of an Alibaba Cloud account to the whitelist of an endpoint service within a specified period of time.
   * 
   * @param request - AddUserToVpcEndpointServiceRequest
   * @returns AddUserToVpcEndpointServiceResponse
   */
  async addUserToVpcEndpointService(request: AddUserToVpcEndpointServiceRequest): Promise<AddUserToVpcEndpointServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
   * Adds a zone to an endpoint.
   * 
   * @remarks
   *   **AddZoneToVpcEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to query the state of the zone.
   *     *   If the zone is in the **Creating** state, the zone is being added.
   *     *   If the zone is in the Wait state, the zone is added.
   * *   You cannot repeatedly call the **AddZoneToVpcEndpoint** operation to add a zone to an endpoint within a specified period of time.
   * 
   * @param request - AddZoneToVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddZoneToVpcEndpointResponse
   */
  async addZoneToVpcEndpointWithOptions(request: AddZoneToVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<AddZoneToVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.ipv6Address)) {
      query["Ipv6Address"] = request.ipv6Address;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.ip)) {
      query["ip"] = request.ip;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddZoneToVpcEndpoint",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddZoneToVpcEndpointResponse>(await this.callApi(params, req, runtime), new AddZoneToVpcEndpointResponse({}));
    } else {
      return $dara.cast<AddZoneToVpcEndpointResponse>(await this.execute(params, req, runtime), new AddZoneToVpcEndpointResponse({}));
    }

  }

  /**
   * Adds a zone to an endpoint.
   * 
   * @remarks
   *   **AddZoneToVpcEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to query the state of the zone.
   *     *   If the zone is in the **Creating** state, the zone is being added.
   *     *   If the zone is in the Wait state, the zone is added.
   * *   You cannot repeatedly call the **AddZoneToVpcEndpoint** operation to add a zone to an endpoint within a specified period of time.
   * 
   * @param request - AddZoneToVpcEndpointRequest
   * @returns AddZoneToVpcEndpointResponse
   */
  async addZoneToVpcEndpoint(request: AddZoneToVpcEndpointRequest): Promise<AddZoneToVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addZoneToVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Adds a service resource to an endpoint service.
   * 
   * @remarks
   *   Before you add a service resource to an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **AttachResourceToVpcEndpointService** operation to add a service resource to an endpoint service within a specified period of time.
   * 
   * @param request - AttachResourceToVpcEndpointServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachResourceToVpcEndpointServiceResponse
   */
  async attachResourceToVpcEndpointServiceWithOptions(request: AttachResourceToVpcEndpointServiceRequest, runtime: $dara.RuntimeOptions): Promise<AttachResourceToVpcEndpointServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachResourceToVpcEndpointService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AttachResourceToVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new AttachResourceToVpcEndpointServiceResponse({}));
    } else {
      return $dara.cast<AttachResourceToVpcEndpointServiceResponse>(await this.execute(params, req, runtime), new AttachResourceToVpcEndpointServiceResponse({}));
    }

  }

  /**
   * Adds a service resource to an endpoint service.
   * 
   * @remarks
   *   Before you add a service resource to an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **AttachResourceToVpcEndpointService** operation to add a service resource to an endpoint service within a specified period of time.
   * 
   * @param request - AttachResourceToVpcEndpointServiceRequest
   * @returns AttachResourceToVpcEndpointServiceResponse
   */
  async attachResourceToVpcEndpointService(request: AttachResourceToVpcEndpointServiceRequest): Promise<AttachResourceToVpcEndpointServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachResourceToVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
   * Associates an endpoint with a security group.
   * 
   * @remarks
   *   **AttachSecurityGroupToVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpoints](https://help.aliyun.com/document_detail/183558.html) operation to query the state of the endpoint.
   *     *   If the endpoint is in the **Pending** state, the endpoint is being associated with the security group.
   *     *   If the endpoint is in the **Active** state, the endpoint is associated with the security group.
   * *   You cannot repeatedly call the **AttachSecurityGroupToVpcEndpoint** operation to associate an endpoint with a security group within a specified period of time.
   * 
   * @param request - AttachSecurityGroupToVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachSecurityGroupToVpcEndpointResponse
   */
  async attachSecurityGroupToVpcEndpointWithOptions(request: AttachSecurityGroupToVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<AttachSecurityGroupToVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachSecurityGroupToVpcEndpoint",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AttachSecurityGroupToVpcEndpointResponse>(await this.callApi(params, req, runtime), new AttachSecurityGroupToVpcEndpointResponse({}));
    } else {
      return $dara.cast<AttachSecurityGroupToVpcEndpointResponse>(await this.execute(params, req, runtime), new AttachSecurityGroupToVpcEndpointResponse({}));
    }

  }

  /**
   * Associates an endpoint with a security group.
   * 
   * @remarks
   *   **AttachSecurityGroupToVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpoints](https://help.aliyun.com/document_detail/183558.html) operation to query the state of the endpoint.
   *     *   If the endpoint is in the **Pending** state, the endpoint is being associated with the security group.
   *     *   If the endpoint is in the **Active** state, the endpoint is associated with the security group.
   * *   You cannot repeatedly call the **AttachSecurityGroupToVpcEndpoint** operation to associate an endpoint with a security group within a specified period of time.
   * 
   * @param request - AttachSecurityGroupToVpcEndpointRequest
   * @returns AttachSecurityGroupToVpcEndpointResponse
   */
  async attachSecurityGroupToVpcEndpoint(request: AttachSecurityGroupToVpcEndpointRequest): Promise<AttachSecurityGroupToVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachSecurityGroupToVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Modifies a resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
    } else {
      return $dara.cast<ChangeResourceGroupResponse>(await this.execute(params, req, runtime), new ChangeResourceGroupResponse({}));
    }

  }

  /**
   * Modifies a resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries whether PrivateLink is activated.
   * 
   * @param request - CheckProductOpenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckProductOpenResponse
   */
  async checkProductOpenWithOptions(runtime: $dara.RuntimeOptions): Promise<CheckProductOpenResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "CheckProductOpen",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckProductOpenResponse>(await this.callApi(params, req, runtime), new CheckProductOpenResponse({}));
    } else {
      return $dara.cast<CheckProductOpenResponse>(await this.execute(params, req, runtime), new CheckProductOpenResponse({}));
    }

  }

  /**
   * Queries whether PrivateLink is activated.
   * @returns CheckProductOpenResponse
   */
  async checkProductOpen(): Promise<CheckProductOpenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkProductOpenWithOptions(runtime);
  }

  /**
   * Creates an endpoint.
   * 
   * @remarks
   * *CreateVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to check whether the endpoint is created.
   * *   If the endpoint is in the **Creating** state, the endpoint is being created.
   * *   If the endpoint is in the **Active** state, the endpoint is created.
   * 
   * @param request - CreateVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcEndpointResponse
   */
  async createVpcEndpointWithOptions(request: CreateVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<CreateVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointDescription)) {
      query["EndpointDescription"] = request.endpointDescription;
    }

    if (!$dara.isNull(request.endpointName)) {
      query["EndpointName"] = request.endpointName;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!$dara.isNull(request.protectedEnabled)) {
      query["ProtectedEnabled"] = request.protectedEnabled;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zone)) {
      query["Zone"] = request.zone;
    }

    if (!$dara.isNull(request.zonePrivateIpAddressCount)) {
      query["ZonePrivateIpAddressCount"] = request.zonePrivateIpAddressCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpcEndpoint",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateVpcEndpointResponse>(await this.callApi(params, req, runtime), new CreateVpcEndpointResponse({}));
    } else {
      return $dara.cast<CreateVpcEndpointResponse>(await this.execute(params, req, runtime), new CreateVpcEndpointResponse({}));
    }

  }

  /**
   * Creates an endpoint.
   * 
   * @remarks
   * *CreateVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to check whether the endpoint is created.
   * *   If the endpoint is in the **Creating** state, the endpoint is being created.
   * *   If the endpoint is in the **Active** state, the endpoint is created.
   * 
   * @param request - CreateVpcEndpointRequest
   * @returns CreateVpcEndpointResponse
   */
  async createVpcEndpoint(request: CreateVpcEndpointRequest): Promise<CreateVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Creates an endpoint service.
   * 
   * @remarks
   *   Before you create an endpoint service, make sure that you have created a Server Load Balancer (SLB) instance that supports PrivateLink. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/174064.html).
   * *   **CreateVpcEndpointService** is an asynchronous operation. After a request is sent, the system returns a request ID and an instance ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/183542.html) operation to query the status of the endpoint service.
   *     *   If the endpoint service is in the **Creating** state, the endpoint service is being created.
   *     *   If the endpoint service is in the **Active** state, the endpoint service is created.
   * 
   * @param request - CreateVpcEndpointServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcEndpointServiceResponse
   */
  async createVpcEndpointServiceWithOptions(request: CreateVpcEndpointServiceRequest, runtime: $dara.RuntimeOptions): Promise<CreateVpcEndpointServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.autoAcceptEnabled)) {
      query["AutoAcceptEnabled"] = request.autoAcceptEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.payer)) {
      query["Payer"] = request.payer;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceDescription)) {
      query["ServiceDescription"] = request.serviceDescription;
    }

    if (!$dara.isNull(request.serviceResourceType)) {
      query["ServiceResourceType"] = request.serviceResourceType;
    }

    if (!$dara.isNull(request.serviceSupportIPv6)) {
      query["ServiceSupportIPv6"] = request.serviceSupportIPv6;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.zoneAffinityEnabled)) {
      query["ZoneAffinityEnabled"] = request.zoneAffinityEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpcEndpointService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new CreateVpcEndpointServiceResponse({}));
    } else {
      return $dara.cast<CreateVpcEndpointServiceResponse>(await this.execute(params, req, runtime), new CreateVpcEndpointServiceResponse({}));
    }

  }

  /**
   * Creates an endpoint service.
   * 
   * @remarks
   *   Before you create an endpoint service, make sure that you have created a Server Load Balancer (SLB) instance that supports PrivateLink. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/174064.html).
   * *   **CreateVpcEndpointService** is an asynchronous operation. After a request is sent, the system returns a request ID and an instance ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/183542.html) operation to query the status of the endpoint service.
   *     *   If the endpoint service is in the **Creating** state, the endpoint service is being created.
   *     *   If the endpoint service is in the **Active** state, the endpoint service is created.
   * 
   * @param request - CreateVpcEndpointServiceRequest
   * @returns CreateVpcEndpointServiceResponse
   */
  async createVpcEndpointService(request: CreateVpcEndpointServiceRequest): Promise<CreateVpcEndpointServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
   * Deletes an endpoint.
   * 
   * @remarks
   *   Before you delete an endpoint, you must delete the zones that are added to the endpoint.
   * *   **DeleteVpcEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to check whether the endpoint is deleted.
   *     *   If the endpoint is in the **Deleting** state, the endpoint is being deleted.
   *     *   If the endpoint cannot be queried, the endpoint is deleted.
   * 
   * @param request - DeleteVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcEndpointResponse
   */
  async deleteVpcEndpointWithOptions(request: DeleteVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<DeleteVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpcEndpoint",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteVpcEndpointResponse>(await this.callApi(params, req, runtime), new DeleteVpcEndpointResponse({}));
    } else {
      return $dara.cast<DeleteVpcEndpointResponse>(await this.execute(params, req, runtime), new DeleteVpcEndpointResponse({}));
    }

  }

  /**
   * Deletes an endpoint.
   * 
   * @remarks
   *   Before you delete an endpoint, you must delete the zones that are added to the endpoint.
   * *   **DeleteVpcEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to check whether the endpoint is deleted.
   *     *   If the endpoint is in the **Deleting** state, the endpoint is being deleted.
   *     *   If the endpoint cannot be queried, the endpoint is deleted.
   * 
   * @param request - DeleteVpcEndpointRequest
   * @returns DeleteVpcEndpointResponse
   */
  async deleteVpcEndpoint(request: DeleteVpcEndpointRequest): Promise<DeleteVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Deletes an endpoint service.
   * 
   * @remarks
   *   Before you delete an endpoint service, you must disconnect the endpoint from the endpoint service and remove the service resources.
   * *   **DeleteVpcEndpointService** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/183542.html) operation to check whether the endpoint service is deleted.
   *     *   If the endpoint service is in the **Deleting** state, the endpoint service is being deleted.
   *     *   If the endpoint service cannot be queried, the endpoint service is deleted.
   * *   You cannot repeatedly call the **DeleteVpcEndpointService** operation to delete an endpoint service that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - DeleteVpcEndpointServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcEndpointServiceResponse
   */
  async deleteVpcEndpointServiceWithOptions(request: DeleteVpcEndpointServiceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteVpcEndpointServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpcEndpointService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new DeleteVpcEndpointServiceResponse({}));
    } else {
      return $dara.cast<DeleteVpcEndpointServiceResponse>(await this.execute(params, req, runtime), new DeleteVpcEndpointServiceResponse({}));
    }

  }

  /**
   * Deletes an endpoint service.
   * 
   * @remarks
   *   Before you delete an endpoint service, you must disconnect the endpoint from the endpoint service and remove the service resources.
   * *   **DeleteVpcEndpointService** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/183542.html) operation to check whether the endpoint service is deleted.
   *     *   If the endpoint service is in the **Deleting** state, the endpoint service is being deleted.
   *     *   If the endpoint service cannot be queried, the endpoint service is deleted.
   * *   You cannot repeatedly call the **DeleteVpcEndpointService** operation to delete an endpoint service that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - DeleteVpcEndpointServiceRequest
   * @returns DeleteVpcEndpointServiceResponse
   */
  async deleteVpcEndpointService(request: DeleteVpcEndpointServiceRequest): Promise<DeleteVpcEndpointServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
   * Queries available regions and zones.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceResourceType)) {
      query["ServiceResourceType"] = request.serviceResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
    } else {
      return $dara.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
    }

  }

  /**
   * Queries available regions and zones.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of zones in a specified region.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceResourceType)) {
      query["ServiceResourceType"] = request.serviceResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeZonesResponse>(await this.callApi(params, req, runtime), new DescribeZonesResponse({}));
    } else {
      return $dara.cast<DescribeZonesResponse>(await this.execute(params, req, runtime), new DescribeZonesResponse({}));
    }

  }

  /**
   * Queries a list of zones in a specified region.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Removes a service resource from an endpoint service.
   * 
   * @remarks
   *   Before you remove a service resource from an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **DetachResourceFromVpcEndpointService** operation to remove a service resource from an endpoint service within a specified period of time.
   * 
   * @param request - DetachResourceFromVpcEndpointServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachResourceFromVpcEndpointServiceResponse
   */
  async detachResourceFromVpcEndpointServiceWithOptions(request: DetachResourceFromVpcEndpointServiceRequest, runtime: $dara.RuntimeOptions): Promise<DetachResourceFromVpcEndpointServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachResourceFromVpcEndpointService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetachResourceFromVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new DetachResourceFromVpcEndpointServiceResponse({}));
    } else {
      return $dara.cast<DetachResourceFromVpcEndpointServiceResponse>(await this.execute(params, req, runtime), new DetachResourceFromVpcEndpointServiceResponse({}));
    }

  }

  /**
   * Removes a service resource from an endpoint service.
   * 
   * @remarks
   *   Before you remove a service resource from an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **DetachResourceFromVpcEndpointService** operation to remove a service resource from an endpoint service within a specified period of time.
   * 
   * @param request - DetachResourceFromVpcEndpointServiceRequest
   * @returns DetachResourceFromVpcEndpointServiceResponse
   */
  async detachResourceFromVpcEndpointService(request: DetachResourceFromVpcEndpointServiceRequest): Promise<DetachResourceFromVpcEndpointServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachResourceFromVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
   * Disassociates an endpoint from a security group.
   * 
   * @remarks
   *   **DetachSecurityGroupFromVpcEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpoints](https://help.aliyun.com/document_detail/183558.html) to check whether the endpoint is disassociated from the security group.
   *     *   If the endpoint is in the **Pending** state, the endpoint is being disassociated from the security group.
   *     *   If you cannot query the endpoint in the security group, the endpoint is disassociated from the security group.
   * *   You cannot repeatedly call the **DetachSecurityGroupFromVpcEndpoint** operation to disassociate an endpoint from a security group within a specified period of time.
   * 
   * @param request - DetachSecurityGroupFromVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachSecurityGroupFromVpcEndpointResponse
   */
  async detachSecurityGroupFromVpcEndpointWithOptions(request: DetachSecurityGroupFromVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<DetachSecurityGroupFromVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachSecurityGroupFromVpcEndpoint",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetachSecurityGroupFromVpcEndpointResponse>(await this.callApi(params, req, runtime), new DetachSecurityGroupFromVpcEndpointResponse({}));
    } else {
      return $dara.cast<DetachSecurityGroupFromVpcEndpointResponse>(await this.execute(params, req, runtime), new DetachSecurityGroupFromVpcEndpointResponse({}));
    }

  }

  /**
   * Disassociates an endpoint from a security group.
   * 
   * @remarks
   *   **DetachSecurityGroupFromVpcEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpoints](https://help.aliyun.com/document_detail/183558.html) to check whether the endpoint is disassociated from the security group.
   *     *   If the endpoint is in the **Pending** state, the endpoint is being disassociated from the security group.
   *     *   If you cannot query the endpoint in the security group, the endpoint is disassociated from the security group.
   * *   You cannot repeatedly call the **DetachSecurityGroupFromVpcEndpoint** operation to disassociate an endpoint from a security group within a specified period of time.
   * 
   * @param request - DetachSecurityGroupFromVpcEndpointRequest
   * @returns DetachSecurityGroupFromVpcEndpointResponse
   */
  async detachSecurityGroupFromVpcEndpoint(request: DetachSecurityGroupFromVpcEndpointRequest): Promise<DetachSecurityGroupFromVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachSecurityGroupFromVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Rejects a connection request from an endpoint.
   * 
   * @remarks
   *   **DisableVpcEndpointConnection** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to query the state of the endpoint connection.
   *     *   If the endpoint connection is in the **Disconnecting** state, the endpoint is being disconnected from the endpoint service.
   *     *   If the endpoint connection is in the **Disconnected** state, the endpoint is disconnected from the endpoint service.
   * *   You cannot repeatedly call the **DisableVpcEndpointConnection** operation to allow an endpoint service to reject a connection request from an endpoint within a specified period of time.
   * 
   * @param request - DisableVpcEndpointConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableVpcEndpointConnectionResponse
   */
  async disableVpcEndpointConnectionWithOptions(request: DisableVpcEndpointConnectionRequest, runtime: $dara.RuntimeOptions): Promise<DisableVpcEndpointConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableVpcEndpointConnection",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableVpcEndpointConnectionResponse>(await this.callApi(params, req, runtime), new DisableVpcEndpointConnectionResponse({}));
    } else {
      return $dara.cast<DisableVpcEndpointConnectionResponse>(await this.execute(params, req, runtime), new DisableVpcEndpointConnectionResponse({}));
    }

  }

  /**
   * Rejects a connection request from an endpoint.
   * 
   * @remarks
   *   **DisableVpcEndpointConnection** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to query the state of the endpoint connection.
   *     *   If the endpoint connection is in the **Disconnecting** state, the endpoint is being disconnected from the endpoint service.
   *     *   If the endpoint connection is in the **Disconnected** state, the endpoint is disconnected from the endpoint service.
   * *   You cannot repeatedly call the **DisableVpcEndpointConnection** operation to allow an endpoint service to reject a connection request from an endpoint within a specified period of time.
   * 
   * @param request - DisableVpcEndpointConnectionRequest
   * @returns DisableVpcEndpointConnectionResponse
   */
  async disableVpcEndpointConnection(request: DisableVpcEndpointConnectionRequest): Promise<DisableVpcEndpointConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableVpcEndpointConnectionWithOptions(request, runtime);
  }

  /**
   * Closes connections in an endpoint zone.
   * 
   * @remarks
   *   You can call this operation only when the state of the endpoint is **Connected** and the state of the zone associated with the endpoint is **Connected** or **Migrated**.
   * *   **DisableVpcEndpointZoneConnection** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to query the status of the task.
   *     *   If the zone is in the **Disconnecting** state, the task is running.
   *     *   If the zone is in the **Disconnected** state, the task is successful.
   * *   You cannot repeatedly call the **DisableVpcEndpointZoneConnection** operation to allow an endpoint service to reject a connection request from the endpoint in the zone within a specified period of time.
   * 
   * @param request - DisableVpcEndpointZoneConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableVpcEndpointZoneConnectionResponse
   */
  async disableVpcEndpointZoneConnectionWithOptions(request: DisableVpcEndpointZoneConnectionRequest, runtime: $dara.RuntimeOptions): Promise<DisableVpcEndpointZoneConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replacedResource)) {
      query["ReplacedResource"] = request.replacedResource;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableVpcEndpointZoneConnection",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableVpcEndpointZoneConnectionResponse>(await this.callApi(params, req, runtime), new DisableVpcEndpointZoneConnectionResponse({}));
    } else {
      return $dara.cast<DisableVpcEndpointZoneConnectionResponse>(await this.execute(params, req, runtime), new DisableVpcEndpointZoneConnectionResponse({}));
    }

  }

  /**
   * Closes connections in an endpoint zone.
   * 
   * @remarks
   *   You can call this operation only when the state of the endpoint is **Connected** and the state of the zone associated with the endpoint is **Connected** or **Migrated**.
   * *   **DisableVpcEndpointZoneConnection** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to query the status of the task.
   *     *   If the zone is in the **Disconnecting** state, the task is running.
   *     *   If the zone is in the **Disconnected** state, the task is successful.
   * *   You cannot repeatedly call the **DisableVpcEndpointZoneConnection** operation to allow an endpoint service to reject a connection request from the endpoint in the zone within a specified period of time.
   * 
   * @param request - DisableVpcEndpointZoneConnectionRequest
   * @returns DisableVpcEndpointZoneConnectionResponse
   */
  async disableVpcEndpointZoneConnection(request: DisableVpcEndpointZoneConnectionRequest): Promise<DisableVpcEndpointZoneConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableVpcEndpointZoneConnectionWithOptions(request, runtime);
  }

  /**
   * Accepts connection requests from an endpoint.
   * 
   * @remarks
   *   **EnableVpcEndpointConnection** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to query the state of the endpoint connection.
   *     *   If the state is **Connecting**, the endpoint connection is being established.
   *     *   If the state is **Connected**, the endpoint connection is established.
   * *   You cannot repeatedly call the **EnableVpcEndpointConnection** operation to allow an endpoint service of an Alibaba Cloud account to accept a connection request from an endpoint within a specified period of time.
   * 
   * @param request - EnableVpcEndpointConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableVpcEndpointConnectionResponse
   */
  async enableVpcEndpointConnectionWithOptions(request: EnableVpcEndpointConnectionRequest, runtime: $dara.RuntimeOptions): Promise<EnableVpcEndpointConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableVpcEndpointConnection",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableVpcEndpointConnectionResponse>(await this.callApi(params, req, runtime), new EnableVpcEndpointConnectionResponse({}));
    } else {
      return $dara.cast<EnableVpcEndpointConnectionResponse>(await this.execute(params, req, runtime), new EnableVpcEndpointConnectionResponse({}));
    }

  }

  /**
   * Accepts connection requests from an endpoint.
   * 
   * @remarks
   *   **EnableVpcEndpointConnection** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](https://help.aliyun.com/document_detail/183568.html) operation to query the state of the endpoint connection.
   *     *   If the state is **Connecting**, the endpoint connection is being established.
   *     *   If the state is **Connected**, the endpoint connection is established.
   * *   You cannot repeatedly call the **EnableVpcEndpointConnection** operation to allow an endpoint service of an Alibaba Cloud account to accept a connection request from an endpoint within a specified period of time.
   * 
   * @param request - EnableVpcEndpointConnectionRequest
   * @returns EnableVpcEndpointConnectionResponse
   */
  async enableVpcEndpointConnection(request: EnableVpcEndpointConnectionRequest): Promise<EnableVpcEndpointConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableVpcEndpointConnectionWithOptions(request, runtime);
  }

  /**
   * Allows connections to endpoint zones.
   * 
   * @remarks
   *   You can call this operation only when the state of the endpoint is **Connected** and the state of the associated zone is **Disconnected**.
   * *   **EnableVpcEndpointZoneConnection** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to check whether the endpoint service accepts a connection request from the endpoint in the associated zone.
   *     *   If the zone is in the **Connecting** state, the endpoint service is accepting the connection request from the endpoint.
   *     *   If the zone is in the **Connected** state, the endpoint service has accepted the connection request from the endpoint.
   * *   You cannot repeatedly call the **EnableVpcEndpointZoneConnection** operation to allow an endpoint service to accept a connection request from an endpoint in the associated zone within a specified period of time.
   * 
   * @param request - EnableVpcEndpointZoneConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableVpcEndpointZoneConnectionResponse
   */
  async enableVpcEndpointZoneConnectionWithOptions(request: EnableVpcEndpointZoneConnectionRequest, runtime: $dara.RuntimeOptions): Promise<EnableVpcEndpointZoneConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableVpcEndpointZoneConnection",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableVpcEndpointZoneConnectionResponse>(await this.callApi(params, req, runtime), new EnableVpcEndpointZoneConnectionResponse({}));
    } else {
      return $dara.cast<EnableVpcEndpointZoneConnectionResponse>(await this.execute(params, req, runtime), new EnableVpcEndpointZoneConnectionResponse({}));
    }

  }

  /**
   * Allows connections to endpoint zones.
   * 
   * @remarks
   *   You can call this operation only when the state of the endpoint is **Connected** and the state of the associated zone is **Disconnected**.
   * *   **EnableVpcEndpointZoneConnection** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to check whether the endpoint service accepts a connection request from the endpoint in the associated zone.
   *     *   If the zone is in the **Connecting** state, the endpoint service is accepting the connection request from the endpoint.
   *     *   If the zone is in the **Connected** state, the endpoint service has accepted the connection request from the endpoint.
   * *   You cannot repeatedly call the **EnableVpcEndpointZoneConnection** operation to allow an endpoint service to accept a connection request from an endpoint in the associated zone within a specified period of time.
   * 
   * @param request - EnableVpcEndpointZoneConnectionRequest
   * @returns EnableVpcEndpointZoneConnectionResponse
   */
  async enableVpcEndpointZoneConnection(request: EnableVpcEndpointZoneConnectionRequest): Promise<EnableVpcEndpointZoneConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableVpcEndpointZoneConnectionWithOptions(request, runtime);
  }

  /**
   * Queries the attributes of an endpoint.
   * 
   * @param request - GetVpcEndpointAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpcEndpointAttributeResponse
   */
  async getVpcEndpointAttributeWithOptions(request: GetVpcEndpointAttributeRequest, runtime: $dara.RuntimeOptions): Promise<GetVpcEndpointAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVpcEndpointAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetVpcEndpointAttributeResponse>(await this.callApi(params, req, runtime), new GetVpcEndpointAttributeResponse({}));
    } else {
      return $dara.cast<GetVpcEndpointAttributeResponse>(await this.execute(params, req, runtime), new GetVpcEndpointAttributeResponse({}));
    }

  }

  /**
   * Queries the attributes of an endpoint.
   * 
   * @param request - GetVpcEndpointAttributeRequest
   * @returns GetVpcEndpointAttributeResponse
   */
  async getVpcEndpointAttribute(request: GetVpcEndpointAttributeRequest): Promise<GetVpcEndpointAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpcEndpointAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the attributes of an endpoint service.
   * 
   * @param request - GetVpcEndpointServiceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpcEndpointServiceAttributeResponse
   */
  async getVpcEndpointServiceAttributeWithOptions(request: GetVpcEndpointServiceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<GetVpcEndpointServiceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVpcEndpointServiceAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetVpcEndpointServiceAttributeResponse>(await this.callApi(params, req, runtime), new GetVpcEndpointServiceAttributeResponse({}));
    } else {
      return $dara.cast<GetVpcEndpointServiceAttributeResponse>(await this.execute(params, req, runtime), new GetVpcEndpointServiceAttributeResponse({}));
    }

  }

  /**
   * Queries the attributes of an endpoint service.
   * 
   * @param request - GetVpcEndpointServiceAttributeRequest
   * @returns GetVpcEndpointServiceAttributeResponse
   */
  async getVpcEndpointServiceAttribute(request: GetVpcEndpointServiceAttributeRequest): Promise<GetVpcEndpointServiceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpcEndpointServiceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resources.
   * 
   * @remarks
   *   You must specify **ResourceId.N** or **Tag.N** in the request to specify the object that you want to query.
   * *   **Tag.N** is a resource tag that consists of a key-value pair (Tag.N.Key and Tag.N.Value). If you specify only **Tag.N.Key**, all tag values that are associated with the specified key are returned. If you specify only **Tag.N.Value**, an error message is returned.
   * *   If you specify **Tag.N** and **ResourceId.N** to filter tags, **ResourceId.N** must match all specified key-value pairs.
   * *   If you specify multiple key-value pairs, resources that contain these key-value pairs are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * Queries the tags that are added to resources.
   * 
   * @remarks
   *   You must specify **ResourceId.N** or **Tag.N** in the request to specify the object that you want to query.
   * *   **Tag.N** is a resource tag that consists of a key-value pair (Tag.N.Key and Tag.N.Value). If you specify only **Tag.N.Key**, all tag values that are associated with the specified key are returned. If you specify only **Tag.N.Value**, an error message is returned.
   * *   If you specify **Tag.N** and **ResourceId.N** to filter tags, **ResourceId.N** must match all specified key-value pairs.
   * *   If you specify multiple key-value pairs, resources that contain these key-value pairs are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries endpoint connections.
   * 
   * @param request - ListVpcEndpointConnectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointConnectionsResponse
   */
  async listVpcEndpointConnectionsWithOptions(request: ListVpcEndpointConnectionsRequest, runtime: $dara.RuntimeOptions): Promise<ListVpcEndpointConnectionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStatus)) {
      query["ConnectionStatus"] = request.connectionStatus;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.endpointOwnerId)) {
      query["EndpointOwnerId"] = request.endpointOwnerId;
    }

    if (!$dara.isNull(request.eniId)) {
      query["EniId"] = request.eniId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replacedResourceId)) {
      query["ReplacedResourceId"] = request.replacedResourceId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpointConnections",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVpcEndpointConnectionsResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointConnectionsResponse({}));
    } else {
      return $dara.cast<ListVpcEndpointConnectionsResponse>(await this.execute(params, req, runtime), new ListVpcEndpointConnectionsResponse({}));
    }

  }

  /**
   * Queries endpoint connections.
   * 
   * @param request - ListVpcEndpointConnectionsRequest
   * @returns ListVpcEndpointConnectionsResponse
   */
  async listVpcEndpointConnections(request: ListVpcEndpointConnectionsRequest): Promise<ListVpcEndpointConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointConnectionsWithOptions(request, runtime);
  }

  /**
   * Queries the security groups that are associated with an endpoint.
   * 
   * @param request - ListVpcEndpointSecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointSecurityGroupsResponse
   */
  async listVpcEndpointSecurityGroupsWithOptions(request: ListVpcEndpointSecurityGroupsRequest, runtime: $dara.RuntimeOptions): Promise<ListVpcEndpointSecurityGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpointSecurityGroups",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVpcEndpointSecurityGroupsResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointSecurityGroupsResponse({}));
    } else {
      return $dara.cast<ListVpcEndpointSecurityGroupsResponse>(await this.execute(params, req, runtime), new ListVpcEndpointSecurityGroupsResponse({}));
    }

  }

  /**
   * Queries the security groups that are associated with an endpoint.
   * 
   * @param request - ListVpcEndpointSecurityGroupsRequest
   * @returns ListVpcEndpointSecurityGroupsResponse
   */
  async listVpcEndpointSecurityGroups(request: ListVpcEndpointSecurityGroupsRequest): Promise<ListVpcEndpointSecurityGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointSecurityGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the service resources that are added to an endpoint service.
   * 
   * @param request - ListVpcEndpointServiceResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointServiceResourcesResponse
   */
  async listVpcEndpointServiceResourcesWithOptions(request: ListVpcEndpointServiceResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListVpcEndpointServiceResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpointServiceResources",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVpcEndpointServiceResourcesResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointServiceResourcesResponse({}));
    } else {
      return $dara.cast<ListVpcEndpointServiceResourcesResponse>(await this.execute(params, req, runtime), new ListVpcEndpointServiceResourcesResponse({}));
    }

  }

  /**
   * Queries the service resources that are added to an endpoint service.
   * 
   * @param request - ListVpcEndpointServiceResourcesRequest
   * @returns ListVpcEndpointServiceResourcesResponse
   */
  async listVpcEndpointServiceResources(request: ListVpcEndpointServiceResourcesRequest): Promise<ListVpcEndpointServiceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointServiceResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the whitelist of an endpoint service.
   * 
   * @param request - ListVpcEndpointServiceUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointServiceUsersResponse
   */
  async listVpcEndpointServiceUsersWithOptions(request: ListVpcEndpointServiceUsersRequest, runtime: $dara.RuntimeOptions): Promise<ListVpcEndpointServiceUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userListType)) {
      query["UserListType"] = request.userListType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpointServiceUsers",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVpcEndpointServiceUsersResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointServiceUsersResponse({}));
    } else {
      return $dara.cast<ListVpcEndpointServiceUsersResponse>(await this.execute(params, req, runtime), new ListVpcEndpointServiceUsersResponse({}));
    }

  }

  /**
   * Queries the whitelist of an endpoint service.
   * 
   * @param request - ListVpcEndpointServiceUsersRequest
   * @returns ListVpcEndpointServiceUsersResponse
   */
  async listVpcEndpointServiceUsers(request: ListVpcEndpointServiceUsersRequest): Promise<ListVpcEndpointServiceUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointServiceUsersWithOptions(request, runtime);
  }

  /**
   * Queries a list of endpoint services.
   * 
   * @param request - ListVpcEndpointServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointServicesResponse
   */
  async listVpcEndpointServicesWithOptions(request: ListVpcEndpointServicesRequest, runtime: $dara.RuntimeOptions): Promise<ListVpcEndpointServicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.autoAcceptEnabled)) {
      query["AutoAcceptEnabled"] = request.autoAcceptEnabled;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.serviceBusinessStatus)) {
      query["ServiceBusinessStatus"] = request.serviceBusinessStatus;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceResourceType)) {
      query["ServiceResourceType"] = request.serviceResourceType;
    }

    if (!$dara.isNull(request.serviceStatus)) {
      query["ServiceStatus"] = request.serviceStatus;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.zoneAffinityEnabled)) {
      query["ZoneAffinityEnabled"] = request.zoneAffinityEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpointServices",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVpcEndpointServicesResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointServicesResponse({}));
    } else {
      return $dara.cast<ListVpcEndpointServicesResponse>(await this.execute(params, req, runtime), new ListVpcEndpointServicesResponse({}));
    }

  }

  /**
   * Queries a list of endpoint services.
   * 
   * @param request - ListVpcEndpointServicesRequest
   * @returns ListVpcEndpointServicesResponse
   */
  async listVpcEndpointServices(request: ListVpcEndpointServicesRequest): Promise<ListVpcEndpointServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointServicesWithOptions(request, runtime);
  }

  /**
   * Queries a list of endpoint services that can be associated with the endpoint created within the current account.
   * 
   * @param request - ListVpcEndpointServicesByEndUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointServicesByEndUserResponse
   */
  async listVpcEndpointServicesByEndUserWithOptions(request: ListVpcEndpointServicesByEndUserRequest, runtime: $dara.RuntimeOptions): Promise<ListVpcEndpointServicesByEndUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpointServicesByEndUser",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVpcEndpointServicesByEndUserResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointServicesByEndUserResponse({}));
    } else {
      return $dara.cast<ListVpcEndpointServicesByEndUserResponse>(await this.execute(params, req, runtime), new ListVpcEndpointServicesByEndUserResponse({}));
    }

  }

  /**
   * Queries a list of endpoint services that can be associated with the endpoint created within the current account.
   * 
   * @param request - ListVpcEndpointServicesByEndUserRequest
   * @returns ListVpcEndpointServicesByEndUserResponse
   */
  async listVpcEndpointServicesByEndUser(request: ListVpcEndpointServicesByEndUserRequest): Promise<ListVpcEndpointServicesByEndUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointServicesByEndUserWithOptions(request, runtime);
  }

  /**
   * Queries the zones of an endpoint.
   * 
   * @param request - ListVpcEndpointZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointZonesResponse
   */
  async listVpcEndpointZonesWithOptions(request: ListVpcEndpointZonesRequest, runtime: $dara.RuntimeOptions): Promise<ListVpcEndpointZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpointZones",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVpcEndpointZonesResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointZonesResponse({}));
    } else {
      return $dara.cast<ListVpcEndpointZonesResponse>(await this.execute(params, req, runtime), new ListVpcEndpointZonesResponse({}));
    }

  }

  /**
   * Queries the zones of an endpoint.
   * 
   * @param request - ListVpcEndpointZonesRequest
   * @returns ListVpcEndpointZonesResponse
   */
  async listVpcEndpointZones(request: ListVpcEndpointZonesRequest): Promise<ListVpcEndpointZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointZonesWithOptions(request, runtime);
  }

  /**
   * Queries a list of endpoints.
   * 
   * @param request - ListVpcEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointsResponse
   */
  async listVpcEndpointsWithOptions(request: ListVpcEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<ListVpcEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.connectionStatus)) {
      query["ConnectionStatus"] = request.connectionStatus;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.endpointName)) {
      query["EndpointName"] = request.endpointName;
    }

    if (!$dara.isNull(request.endpointStatus)) {
      query["EndpointStatus"] = request.endpointStatus;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcEndpoints",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVpcEndpointsResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointsResponse({}));
    } else {
      return $dara.cast<ListVpcEndpointsResponse>(await this.execute(params, req, runtime), new ListVpcEndpointsResponse({}));
    }

  }

  /**
   * Queries a list of endpoints.
   * 
   * @param request - ListVpcEndpointsRequest
   * @returns ListVpcEndpointsResponse
   */
  async listVpcEndpoints(request: ListVpcEndpointsRequest): Promise<ListVpcEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpcEndpointsWithOptions(request, runtime);
  }

  /**
   * Activates PrivateLink.
   * 
   * @param request - OpenPrivateLinkServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenPrivateLinkServiceResponse
   */
  async openPrivateLinkServiceWithOptions(request: OpenPrivateLinkServiceRequest, runtime: $dara.RuntimeOptions): Promise<OpenPrivateLinkServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenPrivateLinkService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OpenPrivateLinkServiceResponse>(await this.callApi(params, req, runtime), new OpenPrivateLinkServiceResponse({}));
    } else {
      return $dara.cast<OpenPrivateLinkServiceResponse>(await this.execute(params, req, runtime), new OpenPrivateLinkServiceResponse({}));
    }

  }

  /**
   * Activates PrivateLink.
   * 
   * @param request - OpenPrivateLinkServiceRequest
   * @returns OpenPrivateLinkServiceResponse
   */
  async openPrivateLinkService(request: OpenPrivateLinkServiceRequest): Promise<OpenPrivateLinkServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openPrivateLinkServiceWithOptions(request, runtime);
  }

  /**
   * Removes an account ID from the whitelist of an endpoint service.
   * 
   * @remarks
   *   Before you remove an account ID from the whitelist of an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **RemoveUserFromVpcEndpointService** operation to remove the ID of an Alibaba Cloud account from the whitelist of an endpoint service within a specified period of time.
   * 
   * @param request - RemoveUserFromVpcEndpointServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromVpcEndpointServiceResponse
   */
  async removeUserFromVpcEndpointServiceWithOptions(request: RemoveUserFromVpcEndpointServiceRequest, runtime: $dara.RuntimeOptions): Promise<RemoveUserFromVpcEndpointServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.userARN)) {
      query["UserARN"] = request.userARN;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserFromVpcEndpointService",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveUserFromVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new RemoveUserFromVpcEndpointServiceResponse({}));
    } else {
      return $dara.cast<RemoveUserFromVpcEndpointServiceResponse>(await this.execute(params, req, runtime), new RemoveUserFromVpcEndpointServiceResponse({}));
    }

  }

  /**
   * Removes an account ID from the whitelist of an endpoint service.
   * 
   * @remarks
   *   Before you remove an account ID from the whitelist of an endpoint service, make sure that the endpoint service is in the **Active** state. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to query the status of the endpoint service.
   * *   You cannot repeatedly call the **RemoveUserFromVpcEndpointService** operation to remove the ID of an Alibaba Cloud account from the whitelist of an endpoint service within a specified period of time.
   * 
   * @param request - RemoveUserFromVpcEndpointServiceRequest
   * @returns RemoveUserFromVpcEndpointServiceResponse
   */
  async removeUserFromVpcEndpointService(request: RemoveUserFromVpcEndpointServiceRequest): Promise<RemoveUserFromVpcEndpointServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserFromVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
   * Deletes a zone of an endpoint.
   * 
   * @remarks
   *   **RemoveZoneFromVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to check whether the zone of the endpoint is deleted.
   *     *   If the zone of the endpoint is in the **Deleting** state, the zone is being deleted.
   *     *   If the zone cannot be queried, the zone is deleted.
   * *   You cannot repeatedly call the **RemoveZoneFromVpcEndpoint** operation to delete a zone of an endpoint within a specified period of time.
   * 
   * @param request - RemoveZoneFromVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveZoneFromVpcEndpointResponse
   */
  async removeZoneFromVpcEndpointWithOptions(request: RemoveZoneFromVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<RemoveZoneFromVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveZoneFromVpcEndpoint",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveZoneFromVpcEndpointResponse>(await this.callApi(params, req, runtime), new RemoveZoneFromVpcEndpointResponse({}));
    } else {
      return $dara.cast<RemoveZoneFromVpcEndpointResponse>(await this.execute(params, req, runtime), new RemoveZoneFromVpcEndpointResponse({}));
    }

  }

  /**
   * Deletes a zone of an endpoint.
   * 
   * @remarks
   *   **RemoveZoneFromVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](https://help.aliyun.com/document_detail/183560.html) operation to check whether the zone of the endpoint is deleted.
   *     *   If the zone of the endpoint is in the **Deleting** state, the zone is being deleted.
   *     *   If the zone cannot be queried, the zone is deleted.
   * *   You cannot repeatedly call the **RemoveZoneFromVpcEndpoint** operation to delete a zone of an endpoint within a specified period of time.
   * 
   * @param request - RemoveZoneFromVpcEndpointRequest
   * @returns RemoveZoneFromVpcEndpointResponse
   */
  async removeZoneFromVpcEndpoint(request: RemoveZoneFromVpcEndpointRequest): Promise<RemoveZoneFromVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeZoneFromVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Adds tags to resources. You can call this API operation to add tags to one or more endpoints or endpoint services.
   * 
   * @remarks
   * > You can add up to 20 tags to an instance. Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number is reached, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * Adds tags to resources. You can call this API operation to add tags to one or more endpoints or endpoint services.
   * 
   * @remarks
   * > You can add up to 20 tags to an instance. Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number is reached, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from one or more endpoints or endpoint services at a time.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      body["All"] = request.all;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      bodyFlat["TagKey"] = request.tagKey;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * Removes tags from one or more endpoints or endpoint services at a time.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of an endpoint.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointAttribute** operation to modify the attributes of an endpoint that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVpcEndpointAttributeResponse
   */
  async updateVpcEndpointAttributeWithOptions(request: UpdateVpcEndpointAttributeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateVpcEndpointAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointDescription)) {
      query["EndpointDescription"] = request.endpointDescription;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.endpointName)) {
      query["EndpointName"] = request.endpointName;
    }

    if (!$dara.isNull(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVpcEndpointAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateVpcEndpointAttributeResponse>(await this.callApi(params, req, runtime), new UpdateVpcEndpointAttributeResponse({}));
    } else {
      return $dara.cast<UpdateVpcEndpointAttributeResponse>(await this.execute(params, req, runtime), new UpdateVpcEndpointAttributeResponse({}));
    }

  }

  /**
   * Modifies the attributes of an endpoint.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointAttribute** operation to modify the attributes of an endpoint that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointAttributeRequest
   * @returns UpdateVpcEndpointAttributeResponse
   */
  async updateVpcEndpointAttribute(request: UpdateVpcEndpointAttributeRequest): Promise<UpdateVpcEndpointAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVpcEndpointAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of an endpoint connection.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointConnectionAttribute** operation to modify the bandwidth of an endpoint connection that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointConnectionAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVpcEndpointConnectionAttributeResponse
   */
  async updateVpcEndpointConnectionAttributeWithOptions(request: UpdateVpcEndpointConnectionAttributeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateVpcEndpointConnectionAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVpcEndpointConnectionAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateVpcEndpointConnectionAttributeResponse>(await this.callApi(params, req, runtime), new UpdateVpcEndpointConnectionAttributeResponse({}));
    } else {
      return $dara.cast<UpdateVpcEndpointConnectionAttributeResponse>(await this.execute(params, req, runtime), new UpdateVpcEndpointConnectionAttributeResponse({}));
    }

  }

  /**
   * Modifies the attributes of an endpoint connection.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointConnectionAttribute** operation to modify the bandwidth of an endpoint connection that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointConnectionAttributeRequest
   * @returns UpdateVpcEndpointConnectionAttributeResponse
   */
  async updateVpcEndpointConnectionAttribute(request: UpdateVpcEndpointConnectionAttributeRequest): Promise<UpdateVpcEndpointConnectionAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVpcEndpointConnectionAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of an endpoint service.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointServiceAttribute** operation to modify the attributes of an endpoint service that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointServiceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVpcEndpointServiceAttributeResponse
   */
  async updateVpcEndpointServiceAttributeWithOptions(request: UpdateVpcEndpointServiceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateVpcEndpointServiceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!$dara.isNull(request.autoAcceptEnabled)) {
      query["AutoAcceptEnabled"] = request.autoAcceptEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectBandwidth)) {
      query["ConnectBandwidth"] = request.connectBandwidth;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceDescription)) {
      query["ServiceDescription"] = request.serviceDescription;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceSupportIPv6)) {
      query["ServiceSupportIPv6"] = request.serviceSupportIPv6;
    }

    if (!$dara.isNull(request.zoneAffinityEnabled)) {
      query["ZoneAffinityEnabled"] = request.zoneAffinityEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVpcEndpointServiceAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateVpcEndpointServiceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateVpcEndpointServiceAttributeResponse({}));
    } else {
      return $dara.cast<UpdateVpcEndpointServiceAttributeResponse>(await this.execute(params, req, runtime), new UpdateVpcEndpointServiceAttributeResponse({}));
    }

  }

  /**
   * Modifies the attributes of an endpoint service.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointServiceAttribute** operation to modify the attributes of an endpoint service that belongs to an Alibaba Cloud account within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointServiceAttributeRequest
   * @returns UpdateVpcEndpointServiceAttributeResponse
   */
  async updateVpcEndpointServiceAttribute(request: UpdateVpcEndpointServiceAttributeRequest): Promise<UpdateVpcEndpointServiceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVpcEndpointServiceAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a service resource that is added to an endpoint service.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointServiceResourceAttribute** operation to modify the attributes of a service resource that is added to an endpoint service within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointServiceResourceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVpcEndpointServiceResourceAttributeResponse
   */
  async updateVpcEndpointServiceResourceAttributeWithOptions(request: UpdateVpcEndpointServiceResourceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateVpcEndpointServiceResourceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoAllocatedEnabled)) {
      query["AutoAllocatedEnabled"] = request.autoAllocatedEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVpcEndpointServiceResourceAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateVpcEndpointServiceResourceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateVpcEndpointServiceResourceAttributeResponse({}));
    } else {
      return $dara.cast<UpdateVpcEndpointServiceResourceAttributeResponse>(await this.execute(params, req, runtime), new UpdateVpcEndpointServiceResourceAttributeResponse({}));
    }

  }

  /**
   * Modifies the attributes of a service resource that is added to an endpoint service.
   * 
   * @remarks
   * You cannot repeatedly call the **UpdateVpcEndpointServiceResourceAttribute** operation to modify the attributes of a service resource that is added to an endpoint service within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointServiceResourceAttributeRequest
   * @returns UpdateVpcEndpointServiceResourceAttributeResponse
   */
  async updateVpcEndpointServiceResourceAttribute(request: UpdateVpcEndpointServiceResourceAttributeRequest): Promise<UpdateVpcEndpointServiceResourceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVpcEndpointServiceResourceAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies a service resource of a zone to which an endpoint connection belongs.
   * 
   * @remarks
   * ### Prerequisites
   * By default, the feature of modifying a service resource of a zone to which an endpoint connection belongs is unavailable. To use this feature, log on to the [Quota Center console](https://quotas.console.aliyun.com/white-list-products/privatelink/quotas). Click Whitelist Quotas in the left-side navigation pane and click PrivateLink in the Networking section. On the page that appears, search for `privatelink_whitelist/svc_res_mgt_uat` and click Apply in the Actions column.
   * ### Usage notes
   * *   If the endpoint connection is in the **Disconnected** state, you can manually allocate the service resource in the zone.
   * *   If the endpoint connection is in the **Connected** state, you can manually migrate the service resource in the zone. In this case, the connection might be interrupted.
   * *   **UpdateVpcEndpointZoneConnectionResourceAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to check whether the service resource is modified.
   *     *   If the endpoint service is in the **Pending** state, the service resource is being modified.
   *     *   If the endpoint service is in the **Active** state, the service resource is modified.
   * *   You cannot repeatedly call the **UpdateVpcEndpointZoneConnectionResourceAttribute** operation to modify a service resource in the zone to which an endpoint connection belongs within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointZoneConnectionResourceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVpcEndpointZoneConnectionResourceAttributeResponse
   */
  async updateVpcEndpointZoneConnectionResourceAttributeWithOptions(request: UpdateVpcEndpointZoneConnectionResourceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateVpcEndpointZoneConnectionResourceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceAllocateMode)) {
      query["ResourceAllocateMode"] = request.resourceAllocateMode;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceReplaceMode)) {
      query["ResourceReplaceMode"] = request.resourceReplaceMode;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVpcEndpointZoneConnectionResourceAttribute",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateVpcEndpointZoneConnectionResourceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateVpcEndpointZoneConnectionResourceAttributeResponse({}));
    } else {
      return $dara.cast<UpdateVpcEndpointZoneConnectionResourceAttributeResponse>(await this.execute(params, req, runtime), new UpdateVpcEndpointZoneConnectionResourceAttributeResponse({}));
    }

  }

  /**
   * Modifies a service resource of a zone to which an endpoint connection belongs.
   * 
   * @remarks
   * ### Prerequisites
   * By default, the feature of modifying a service resource of a zone to which an endpoint connection belongs is unavailable. To use this feature, log on to the [Quota Center console](https://quotas.console.aliyun.com/white-list-products/privatelink/quotas). Click Whitelist Quotas in the left-side navigation pane and click PrivateLink in the Networking section. On the page that appears, search for `privatelink_whitelist/svc_res_mgt_uat` and click Apply in the Actions column.
   * ### Usage notes
   * *   If the endpoint connection is in the **Disconnected** state, you can manually allocate the service resource in the zone.
   * *   If the endpoint connection is in the **Connected** state, you can manually migrate the service resource in the zone. In this case, the connection might be interrupted.
   * *   **UpdateVpcEndpointZoneConnectionResourceAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](https://help.aliyun.com/document_detail/469330.html) operation to check whether the service resource is modified.
   *     *   If the endpoint service is in the **Pending** state, the service resource is being modified.
   *     *   If the endpoint service is in the **Active** state, the service resource is modified.
   * *   You cannot repeatedly call the **UpdateVpcEndpointZoneConnectionResourceAttribute** operation to modify a service resource in the zone to which an endpoint connection belongs within a specified period of time.
   * 
   * @param request - UpdateVpcEndpointZoneConnectionResourceAttributeRequest
   * @returns UpdateVpcEndpointZoneConnectionResourceAttributeResponse
   */
  async updateVpcEndpointZoneConnectionResourceAttribute(request: UpdateVpcEndpointZoneConnectionResourceAttributeRequest): Promise<UpdateVpcEndpointZoneConnectionResourceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVpcEndpointZoneConnectionResourceAttributeWithOptions(request, runtime);
  }

}
