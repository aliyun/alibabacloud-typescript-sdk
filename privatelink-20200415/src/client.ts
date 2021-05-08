// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class RemoveZoneFromVpcEndpointRequest extends $tea.Model {
  regionId?: string;
  zoneId?: string;
  endpointId?: string;
  dryRun?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      endpointId: 'EndpointId',
      dryRun: 'DryRun',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      endpointId: 'string',
      dryRun: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveZoneFromVpcEndpointResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveZoneFromVpcEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveZoneFromVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveZoneFromVpcEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointSecurityGroupsRequest extends $tea.Model {
  regionId?: string;
  nextToken?: string;
  maxResults?: number;
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      endpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointSecurityGroupsResponseBody extends $tea.Model {
  securityGroups?: ListVpcEndpointSecurityGroupsResponseBodySecurityGroups[];
  nextToken?: string;
  requestId?: string;
  maxResults?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroups: 'SecurityGroups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroups: { 'type': 'array', 'itemType': ListVpcEndpointSecurityGroupsResponseBodySecurityGroups },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointSecurityGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpcEndpointSecurityGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpcEndpointSecurityGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserRequest extends $tea.Model {
  regionId?: string;
  nextToken?: string;
  maxResults?: number;
  serviceId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      serviceId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserResponseBody extends $tea.Model {
  services?: ListVpcEndpointServicesByEndUserResponseBodyServices[];
  nextToken?: string;
  requestId?: string;
  maxResults?: string;
  static names(): { [key: string]: string } {
    return {
      services: 'Services',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': ListVpcEndpointServicesByEndUserResponseBodyServices },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpcEndpointServicesByEndUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpcEndpointServicesByEndUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsRequest extends $tea.Model {
  regionId?: string;
  nextToken?: string;
  maxResults?: number;
  endpointId?: string;
  serviceName?: string;
  vpcId?: string;
  endpointName?: string;
  endpointStatus?: string;
  connectionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      endpointId: 'EndpointId',
      serviceName: 'ServiceName',
      vpcId: 'VpcId',
      endpointName: 'EndpointName',
      endpointStatus: 'EndpointStatus',
      connectionStatus: 'ConnectionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      endpointId: 'string',
      serviceName: 'string',
      vpcId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      connectionStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponseBody extends $tea.Model {
  endpoints?: ListVpcEndpointsResponseBodyEndpoints[];
  nextToken?: string;
  requestId?: string;
  maxResults?: string;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': ListVpcEndpointsResponseBodyEndpoints },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpcEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpcEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVpcEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenPrivateLinkServiceRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenPrivateLinkServiceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenPrivateLinkServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenPrivateLinkServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenPrivateLinkServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableVpcEndpointConnectionRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  serviceId?: string;
  endpointId?: string;
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      serviceId: 'ServiceId',
      endpointId: 'EndpointId',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      serviceId: 'string',
      endpointId: 'string',
      bandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableVpcEndpointConnectionResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableVpcEndpointConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableVpcEndpointConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableVpcEndpointConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToVpcEndpointServiceRequest extends $tea.Model {
  regionId?: string;
  userId?: number;
  serviceId?: string;
  dryRun?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      userId: 'UserId',
      serviceId: 'ServiceId',
      dryRun: 'DryRun',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      userId: 'number',
      serviceId: 'string',
      dryRun: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToVpcEndpointServiceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToVpcEndpointServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddUserToVpcEndpointServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddUserToVpcEndpointServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointConnectionAttributeRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  serviceId?: string;
  endpointId?: string;
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      serviceId: 'ServiceId',
      endpointId: 'EndpointId',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      serviceId: 'string',
      endpointId: 'string',
      bandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointConnectionAttributeResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointConnectionAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateVpcEndpointConnectionAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVpcEndpointConnectionAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointServiceAttributeRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  serviceId?: string;
  serviceDescription?: string;
  autoAcceptEnabled?: boolean;
  connectBandwidth?: number;
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      serviceId: 'ServiceId',
      serviceDescription: 'ServiceDescription',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      connectBandwidth: 'ConnectBandwidth',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      serviceId: 'string',
      serviceDescription: 'string',
      autoAcceptEnabled: 'boolean',
      connectBandwidth: 'number',
      zoneAffinityEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointServiceAttributeResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointServiceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateVpcEndpointServiceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVpcEndpointServiceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersRequest extends $tea.Model {
  regionId?: string;
  nextToken?: string;
  maxResults?: number;
  serviceId?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      serviceId: 'ServiceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      serviceId: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  maxResults?: string;
  users?: ListVpcEndpointServiceUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'string',
      users: { 'type': 'array', 'itemType': ListVpcEndpointServiceUsersResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpcEndpointServiceUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpcEndpointServiceUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesRequest extends $tea.Model {
  regionId?: string;
  nextToken?: string;
  maxResults?: number;
  serviceId?: string;
  serviceName?: string;
  autoAcceptEnabled?: boolean;
  serviceStatus?: string;
  serviceBusinessStatus?: string;
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      serviceStatus: 'ServiceStatus',
      serviceBusinessStatus: 'ServiceBusinessStatus',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      serviceId: 'string',
      serviceName: 'string',
      autoAcceptEnabled: 'boolean',
      serviceStatus: 'string',
      serviceBusinessStatus: 'string',
      zoneAffinityEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesResponseBody extends $tea.Model {
  services?: ListVpcEndpointServicesResponseBodyServices[];
  nextToken?: string;
  requestId?: string;
  maxResults?: string;
  static names(): { [key: string]: string } {
    return {
      services: 'Services',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': ListVpcEndpointServicesResponseBodyServices },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpcEndpointServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpcEndpointServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneToVpcEndpointRequest extends $tea.Model {
  regionId?: string;
  zoneId?: string;
  vSwitchId?: string;
  ip?: string;
  endpointId?: string;
  dryRun?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      vSwitchId: 'VSwitchId',
      ip: 'ip',
      endpointId: 'EndpointId',
      dryRun: 'DryRun',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      vSwitchId: 'string',
      ip: 'string',
      endpointId: 'string',
      dryRun: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneToVpcEndpointResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneToVpcEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddZoneToVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddZoneToVpcEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsRequest extends $tea.Model {
  regionId?: string;
  nextToken?: string;
  maxResults?: number;
  serviceId?: string;
  endpointId?: string;
  connectionStatus?: string;
  endpointOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      serviceId: 'ServiceId',
      endpointId: 'EndpointId',
      connectionStatus: 'ConnectionStatus',
      endpointOwnerId: 'EndpointOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      serviceId: 'string',
      endpointId: 'string',
      connectionStatus: 'string',
      endpointOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsResponseBody extends $tea.Model {
  connections?: ListVpcEndpointConnectionsResponseBodyConnections[];
  nextToken?: string;
  requestId?: string;
  maxResults?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListVpcEndpointConnectionsResponseBodyConnections },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpcEndpointConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpcEndpointConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  endpointName?: string;
  endpointDescription?: string;
  vpcId?: string;
  serviceId?: string;
  serviceName?: string;
  zone?: CreateVpcEndpointRequestZone[];
  securityGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointName: 'EndpointName',
      endpointDescription: 'EndpointDescription',
      vpcId: 'VpcId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      zone: 'Zone',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointName: 'string',
      endpointDescription: 'string',
      vpcId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      zone: { 'type': 'array', 'itemType': CreateVpcEndpointRequestZone },
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointResponseBody extends $tea.Model {
  endpointDomain?: string;
  requestId?: string;
  createTime?: string;
  endpointBusinessStatus?: string;
  endpointDescription?: string;
  serviceId?: string;
  endpointStatus?: string;
  vpcId?: string;
  endpointName?: string;
  serviceName?: string;
  bandwidth?: number;
  endpointId?: string;
  connectionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endpointDomain: 'EndpointDomain',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      endpointBusinessStatus: 'EndpointBusinessStatus',
      endpointDescription: 'EndpointDescription',
      serviceId: 'ServiceId',
      endpointStatus: 'EndpointStatus',
      vpcId: 'VpcId',
      endpointName: 'EndpointName',
      serviceName: 'ServiceName',
      bandwidth: 'Bandwidth',
      endpointId: 'EndpointId',
      connectionStatus: 'ConnectionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointDomain: 'string',
      requestId: 'string',
      createTime: 'string',
      endpointBusinessStatus: 'string',
      endpointDescription: 'string',
      serviceId: 'string',
      endpointStatus: 'string',
      vpcId: 'string',
      endpointName: 'string',
      serviceName: 'string',
      bandwidth: 'number',
      endpointId: 'string',
      connectionStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVpcEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSecurityGroupFromVpcEndpointRequest extends $tea.Model {
  regionId?: string;
  securityGroupId?: string;
  endpointId?: string;
  dryRun?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      endpointId: 'EndpointId',
      dryRun: 'DryRun',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityGroupId: 'string',
      endpointId: 'string',
      dryRun: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSecurityGroupFromVpcEndpointResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSecurityGroupFromVpcEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachSecurityGroupFromVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachSecurityGroupFromVpcEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckProductOpenResponseBody extends $tea.Model {
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckProductOpenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckProductOpenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckProductOpenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointServiceAttributeRequest extends $tea.Model {
  regionId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointServiceAttributeResponseBody extends $tea.Model {
  payer?: string;
  requestId?: string;
  serviceDescription?: string;
  createTime?: string;
  maxBandwidth?: number;
  minBandwidth?: number;
  serviceDomain?: string;
  autoAcceptEnabled?: boolean;
  zoneAffinityEnabled?: boolean;
  serviceId?: string;
  zones?: string[];
  serviceBusinessStatus?: string;
  serviceName?: string;
  serviceStatus?: string;
  connectBandwidth?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      payer: 'Payer',
      requestId: 'RequestId',
      serviceDescription: 'ServiceDescription',
      createTime: 'CreateTime',
      maxBandwidth: 'MaxBandwidth',
      minBandwidth: 'MinBandwidth',
      serviceDomain: 'ServiceDomain',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
      serviceId: 'ServiceId',
      zones: 'Zones',
      serviceBusinessStatus: 'ServiceBusinessStatus',
      serviceName: 'ServiceName',
      serviceStatus: 'ServiceStatus',
      connectBandwidth: 'ConnectBandwidth',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payer: 'string',
      requestId: 'string',
      serviceDescription: 'string',
      createTime: 'string',
      maxBandwidth: 'number',
      minBandwidth: 'number',
      serviceDomain: 'string',
      autoAcceptEnabled: 'boolean',
      zoneAffinityEnabled: 'boolean',
      serviceId: 'string',
      zones: { 'type': 'array', 'itemType': 'string' },
      serviceBusinessStatus: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      connectBandwidth: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointServiceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVpcEndpointServiceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVpcEndpointServiceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromVpcEndpointServiceRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  userId?: number;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      userId: 'UserId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      userId: 'number',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromVpcEndpointServiceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromVpcEndpointServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveUserFromVpcEndpointServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveUserFromVpcEndpointServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointServiceRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointServiceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVpcEndpointServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVpcEndpointServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVpcEndpointConnectionRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  serviceId?: string;
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      serviceId: 'ServiceId',
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      serviceId: 'string',
      endpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVpcEndpointConnectionResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVpcEndpointConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableVpcEndpointConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableVpcEndpointConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointAttributeRequest extends $tea.Model {
  regionId?: string;
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      endpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointAttributeResponseBody extends $tea.Model {
  payer?: string;
  endpointDomain?: string;
  requestId?: string;
  createTime?: string;
  resourceOwner?: boolean;
  endpointBusinessStatus?: string;
  endpointDescription?: string;
  serviceId?: string;
  endpointStatus?: string;
  vpcId?: string;
  endpointName?: string;
  serviceName?: string;
  bandwidth?: number;
  endpointId?: string;
  regionId?: string;
  connectionStatus?: string;
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      payer: 'Payer',
      endpointDomain: 'EndpointDomain',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      resourceOwner: 'ResourceOwner',
      endpointBusinessStatus: 'EndpointBusinessStatus',
      endpointDescription: 'EndpointDescription',
      serviceId: 'ServiceId',
      endpointStatus: 'EndpointStatus',
      vpcId: 'VpcId',
      endpointName: 'EndpointName',
      serviceName: 'ServiceName',
      bandwidth: 'Bandwidth',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
      connectionStatus: 'ConnectionStatus',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payer: 'string',
      endpointDomain: 'string',
      requestId: 'string',
      createTime: 'string',
      resourceOwner: 'boolean',
      endpointBusinessStatus: 'string',
      endpointDescription: 'string',
      serviceId: 'string',
      endpointStatus: 'string',
      vpcId: 'string',
      endpointName: 'string',
      serviceName: 'string',
      bandwidth: 'number',
      endpointId: 'string',
      regionId: 'string',
      connectionStatus: 'string',
      zoneAffinityEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVpcEndpointAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVpcEndpointAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointZonesRequest extends $tea.Model {
  regionId?: string;
  nextToken?: string;
  maxResults?: number;
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      endpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointZonesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  maxResults?: string;
  zones?: ListVpcEndpointZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'string',
      zones: { 'type': 'array', 'itemType': ListVpcEndpointZonesResponseBodyZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpcEndpointZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpcEndpointZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSecurityGroupToVpcEndpointRequest extends $tea.Model {
  regionId?: string;
  securityGroupId?: string;
  endpointId?: string;
  dryRun?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      endpointId: 'EndpointId',
      dryRun: 'DryRun',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityGroupId: 'string',
      endpointId: 'string',
      dryRun: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSecurityGroupToVpcEndpointResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSecurityGroupToVpcEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachSecurityGroupToVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachSecurityGroupToVpcEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachResourceFromVpcEndpointServiceRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  resourceId?: string;
  serviceId?: string;
  dryRun?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      serviceId: 'ServiceId',
      dryRun: 'DryRun',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      resourceId: 'string',
      serviceId: 'string',
      dryRun: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachResourceFromVpcEndpointServiceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachResourceFromVpcEndpointServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachResourceFromVpcEndpointServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachResourceFromVpcEndpointServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachResourceToVpcEndpointServiceRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  resourceId?: string;
  serviceId?: string;
  dryRun?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      serviceId: 'ServiceId',
      dryRun: 'DryRun',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      resourceId: 'string',
      serviceId: 'string',
      dryRun: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachResourceToVpcEndpointServiceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachResourceToVpcEndpointServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachResourceToVpcEndpointServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachResourceToVpcEndpointServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceResourcesRequest extends $tea.Model {
  regionId?: string;
  nextToken?: string;
  maxResults?: number;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  maxResults?: string;
  resources?: ListVpcEndpointServiceResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'string',
      resources: { 'type': 'array', 'itemType': ListVpcEndpointServiceResourcesResponseBodyResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpcEndpointServiceResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpcEndpointServiceResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointAttributeRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  endpointId?: string;
  endpointName?: string;
  endpointDescription?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointDescription: 'EndpointDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      endpointName: 'string',
      endpointDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointAttributeResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateVpcEndpointAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVpcEndpointAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  serviceDescription?: string;
  autoAcceptEnabled?: boolean;
  payer?: string;
  zoneAffinityEnabled?: boolean;
  resource?: CreateVpcEndpointServiceRequestResource[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      serviceDescription: 'ServiceDescription',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      payer: 'Payer',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      serviceDescription: 'string',
      autoAcceptEnabled: 'boolean',
      payer: 'string',
      zoneAffinityEnabled: 'boolean',
      resource: { 'type': 'array', 'itemType': CreateVpcEndpointServiceRequestResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceResponseBody extends $tea.Model {
  serviceBusinessStatus?: string;
  requestId?: string;
  serviceName?: string;
  serviceStatus?: string;
  serviceDescription?: string;
  createTime?: string;
  serviceDomain?: string;
  zoneAffinityEnabled?: boolean;
  autoAcceptEnabled?: boolean;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceBusinessStatus: 'ServiceBusinessStatus',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      serviceStatus: 'ServiceStatus',
      serviceDescription: 'ServiceDescription',
      createTime: 'CreateTime',
      serviceDomain: 'ServiceDomain',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceBusinessStatus: 'string',
      requestId: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      serviceDescription: 'string',
      createTime: 'string',
      serviceDomain: 'string',
      zoneAffinityEnabled: 'boolean',
      autoAcceptEnabled: 'boolean',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVpcEndpointServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVpcEndpointServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointSecurityGroupsResponseBodySecurityGroups extends $tea.Model {
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserResponseBodyServices extends $tea.Model {
  payer?: string;
  serviceDomain?: string;
  zones?: string[];
  serviceId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      payer: 'Payer',
      serviceDomain: 'ServiceDomain',
      zones: 'Zones',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payer: 'string',
      serviceDomain: 'string',
      zones: { 'type': 'array', 'itemType': 'string' },
      serviceId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponseBodyEndpoints extends $tea.Model {
  vpcId?: string;
  endpointName?: string;
  createTime?: string;
  serviceId?: string;
  zoneAffinityEnabled?: boolean;
  endpointDomain?: string;
  endpointStatus?: string;
  regionId?: string;
  resourceOwner?: boolean;
  bandwidth?: number;
  connectionStatus?: string;
  endpointDescription?: string;
  endpointId?: string;
  endpointBusinessStatus?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      endpointName: 'EndpointName',
      createTime: 'CreateTime',
      serviceId: 'ServiceId',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
      endpointDomain: 'EndpointDomain',
      endpointStatus: 'EndpointStatus',
      regionId: 'RegionId',
      resourceOwner: 'ResourceOwner',
      bandwidth: 'Bandwidth',
      connectionStatus: 'ConnectionStatus',
      endpointDescription: 'EndpointDescription',
      endpointId: 'EndpointId',
      endpointBusinessStatus: 'EndpointBusinessStatus',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      endpointName: 'string',
      createTime: 'string',
      serviceId: 'string',
      zoneAffinityEnabled: 'boolean',
      endpointDomain: 'string',
      endpointStatus: 'string',
      regionId: 'string',
      resourceOwner: 'boolean',
      bandwidth: 'number',
      connectionStatus: 'string',
      endpointDescription: 'string',
      endpointId: 'string',
      endpointBusinessStatus: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZone extends $tea.Model {
  localName?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersResponseBodyUsers extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesResponseBodyServices extends $tea.Model {
  autoAcceptEnabled?: boolean;
  serviceId?: string;
  createTime?: string;
  minBandwidth?: number;
  maxBandwidth?: number;
  serviceStatus?: string;
  zoneAffinityEnabled?: boolean;
  regionId?: string;
  serviceDomain?: string;
  payer?: string;
  serviceBusinessStatus?: string;
  connectBandwidth?: number;
  serviceName?: string;
  serviceDescription?: string;
  static names(): { [key: string]: string } {
    return {
      autoAcceptEnabled: 'AutoAcceptEnabled',
      serviceId: 'ServiceId',
      createTime: 'CreateTime',
      minBandwidth: 'MinBandwidth',
      maxBandwidth: 'MaxBandwidth',
      serviceStatus: 'ServiceStatus',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
      regionId: 'RegionId',
      serviceDomain: 'ServiceDomain',
      payer: 'Payer',
      serviceBusinessStatus: 'ServiceBusinessStatus',
      connectBandwidth: 'ConnectBandwidth',
      serviceName: 'ServiceName',
      serviceDescription: 'ServiceDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAcceptEnabled: 'boolean',
      serviceId: 'string',
      createTime: 'string',
      minBandwidth: 'number',
      maxBandwidth: 'number',
      serviceStatus: 'string',
      zoneAffinityEnabled: 'boolean',
      regionId: 'string',
      serviceDomain: 'string',
      payer: 'string',
      serviceBusinessStatus: 'string',
      connectBandwidth: 'number',
      serviceName: 'string',
      serviceDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsResponseBodyConnectionsZones extends $tea.Model {
  vSwitchId?: string;
  zoneId?: string;
  resourceId?: string;
  eniId?: string;
  zoneDomain?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      resourceId: 'ResourceId',
      eniId: 'EniId',
      zoneDomain: 'ZoneDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
      resourceId: 'string',
      eniId: 'string',
      zoneDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsResponseBodyConnections extends $tea.Model {
  resourceOwner?: boolean;
  zones?: ListVpcEndpointConnectionsResponseBodyConnectionsZones[];
  modifiedTime?: string;
  bandwidth?: number;
  endpointOwnerId?: number;
  serviceId?: string;
  connectionStatus?: string;
  endpointId?: string;
  endpointVpcId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwner: 'ResourceOwner',
      zones: 'Zones',
      modifiedTime: 'ModifiedTime',
      bandwidth: 'Bandwidth',
      endpointOwnerId: 'EndpointOwnerId',
      serviceId: 'ServiceId',
      connectionStatus: 'ConnectionStatus',
      endpointId: 'EndpointId',
      endpointVpcId: 'EndpointVpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwner: 'boolean',
      zones: { 'type': 'array', 'itemType': ListVpcEndpointConnectionsResponseBodyConnectionsZones },
      modifiedTime: 'string',
      bandwidth: 'number',
      endpointOwnerId: 'number',
      serviceId: 'string',
      connectionStatus: 'string',
      endpointId: 'string',
      endpointVpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointRequestZone extends $tea.Model {
  vSwitchId?: string;
  zoneId?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      ip: 'ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointZonesResponseBodyZones extends $tea.Model {
  vSwitchId?: string;
  eniIp?: string;
  zoneStatus?: string;
  zoneId?: string;
  serviceStatus?: string;
  eniId?: string;
  zoneDomain?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      eniIp: 'EniIp',
      zoneStatus: 'ZoneStatus',
      zoneId: 'ZoneId',
      serviceStatus: 'ServiceStatus',
      eniId: 'EniId',
      zoneDomain: 'ZoneDomain',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      eniIp: 'string',
      zoneStatus: 'string',
      zoneId: 'string',
      serviceStatus: 'string',
      eniId: 'string',
      zoneDomain: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceResourcesResponseBodyResources extends $tea.Model {
  vpcId?: string;
  vSwitchId?: string;
  resourceType?: string;
  zoneId?: string;
  ip?: string;
  resourceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      resourceType: 'ResourceType',
      zoneId: 'ZoneId',
      ip: 'Ip',
      resourceId: 'ResourceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vSwitchId: 'string',
      resourceType: 'string',
      zoneId: 'string',
      ip: 'string',
      resourceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceRequestResource extends $tea.Model {
  resourceType?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("privatelink", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async removeZoneFromVpcEndpointWithOptions(request: RemoveZoneFromVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<RemoveZoneFromVpcEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveZoneFromVpcEndpointResponse>(await this.doRPCRequest("RemoveZoneFromVpcEndpoint", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveZoneFromVpcEndpointResponse({}));
  }

  async removeZoneFromVpcEndpoint(request: RemoveZoneFromVpcEndpointRequest): Promise<RemoveZoneFromVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeZoneFromVpcEndpointWithOptions(request, runtime);
  }

  async listVpcEndpointSecurityGroupsWithOptions(request: ListVpcEndpointSecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointSecurityGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVpcEndpointSecurityGroupsResponse>(await this.doRPCRequest("ListVpcEndpointSecurityGroups", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListVpcEndpointSecurityGroupsResponse({}));
  }

  async listVpcEndpointSecurityGroups(request: ListVpcEndpointSecurityGroupsRequest): Promise<ListVpcEndpointSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointSecurityGroupsWithOptions(request, runtime);
  }

  async listVpcEndpointServicesByEndUserWithOptions(request: ListVpcEndpointServicesByEndUserRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointServicesByEndUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVpcEndpointServicesByEndUserResponse>(await this.doRPCRequest("ListVpcEndpointServicesByEndUser", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListVpcEndpointServicesByEndUserResponse({}));
  }

  async listVpcEndpointServicesByEndUser(request: ListVpcEndpointServicesByEndUserRequest): Promise<ListVpcEndpointServicesByEndUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointServicesByEndUserWithOptions(request, runtime);
  }

  async listVpcEndpointsWithOptions(request: ListVpcEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVpcEndpointsResponse>(await this.doRPCRequest("ListVpcEndpoints", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListVpcEndpointsResponse({}));
  }

  async listVpcEndpoints(request: ListVpcEndpointsRequest): Promise<ListVpcEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointsWithOptions(request, runtime);
  }

  async deleteVpcEndpointWithOptions(request: DeleteVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVpcEndpointResponse>(await this.doRPCRequest("DeleteVpcEndpoint", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVpcEndpointResponse({}));
  }

  async deleteVpcEndpoint(request: DeleteVpcEndpointRequest): Promise<DeleteVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcEndpointWithOptions(request, runtime);
  }

  async openPrivateLinkServiceWithOptions(request: OpenPrivateLinkServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenPrivateLinkServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenPrivateLinkServiceResponse>(await this.doRPCRequest("OpenPrivateLinkService", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new OpenPrivateLinkServiceResponse({}));
  }

  async openPrivateLinkService(request: OpenPrivateLinkServiceRequest): Promise<OpenPrivateLinkServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openPrivateLinkServiceWithOptions(request, runtime);
  }

  async enableVpcEndpointConnectionWithOptions(request: EnableVpcEndpointConnectionRequest, runtime: $Util.RuntimeOptions): Promise<EnableVpcEndpointConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableVpcEndpointConnectionResponse>(await this.doRPCRequest("EnableVpcEndpointConnection", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new EnableVpcEndpointConnectionResponse({}));
  }

  async enableVpcEndpointConnection(request: EnableVpcEndpointConnectionRequest): Promise<EnableVpcEndpointConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableVpcEndpointConnectionWithOptions(request, runtime);
  }

  async addUserToVpcEndpointServiceWithOptions(request: AddUserToVpcEndpointServiceRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToVpcEndpointServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddUserToVpcEndpointServiceResponse>(await this.doRPCRequest("AddUserToVpcEndpointService", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddUserToVpcEndpointServiceResponse({}));
  }

  async addUserToVpcEndpointService(request: AddUserToVpcEndpointServiceRequest): Promise<AddUserToVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToVpcEndpointServiceWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async updateVpcEndpointConnectionAttributeWithOptions(request: UpdateVpcEndpointConnectionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVpcEndpointConnectionAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVpcEndpointConnectionAttributeResponse>(await this.doRPCRequest("UpdateVpcEndpointConnectionAttribute", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVpcEndpointConnectionAttributeResponse({}));
  }

  async updateVpcEndpointConnectionAttribute(request: UpdateVpcEndpointConnectionAttributeRequest): Promise<UpdateVpcEndpointConnectionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpcEndpointConnectionAttributeWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeZonesResponse>(await this.doRPCRequest("DescribeZones", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async updateVpcEndpointServiceAttributeWithOptions(request: UpdateVpcEndpointServiceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVpcEndpointServiceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVpcEndpointServiceAttributeResponse>(await this.doRPCRequest("UpdateVpcEndpointServiceAttribute", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVpcEndpointServiceAttributeResponse({}));
  }

  async updateVpcEndpointServiceAttribute(request: UpdateVpcEndpointServiceAttributeRequest): Promise<UpdateVpcEndpointServiceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpcEndpointServiceAttributeWithOptions(request, runtime);
  }

  async listVpcEndpointServiceUsersWithOptions(request: ListVpcEndpointServiceUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointServiceUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVpcEndpointServiceUsersResponse>(await this.doRPCRequest("ListVpcEndpointServiceUsers", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListVpcEndpointServiceUsersResponse({}));
  }

  async listVpcEndpointServiceUsers(request: ListVpcEndpointServiceUsersRequest): Promise<ListVpcEndpointServiceUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointServiceUsersWithOptions(request, runtime);
  }

  async listVpcEndpointServicesWithOptions(request: ListVpcEndpointServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointServicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVpcEndpointServicesResponse>(await this.doRPCRequest("ListVpcEndpointServices", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListVpcEndpointServicesResponse({}));
  }

  async listVpcEndpointServices(request: ListVpcEndpointServicesRequest): Promise<ListVpcEndpointServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointServicesWithOptions(request, runtime);
  }

  async addZoneToVpcEndpointWithOptions(request: AddZoneToVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<AddZoneToVpcEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddZoneToVpcEndpointResponse>(await this.doRPCRequest("AddZoneToVpcEndpoint", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddZoneToVpcEndpointResponse({}));
  }

  async addZoneToVpcEndpoint(request: AddZoneToVpcEndpointRequest): Promise<AddZoneToVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addZoneToVpcEndpointWithOptions(request, runtime);
  }

  async listVpcEndpointConnectionsWithOptions(request: ListVpcEndpointConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointConnectionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVpcEndpointConnectionsResponse>(await this.doRPCRequest("ListVpcEndpointConnections", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListVpcEndpointConnectionsResponse({}));
  }

  async listVpcEndpointConnections(request: ListVpcEndpointConnectionsRequest): Promise<ListVpcEndpointConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointConnectionsWithOptions(request, runtime);
  }

  async createVpcEndpointWithOptions(request: CreateVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVpcEndpointResponse>(await this.doRPCRequest("CreateVpcEndpoint", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVpcEndpointResponse({}));
  }

  async createVpcEndpoint(request: CreateVpcEndpointRequest): Promise<CreateVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcEndpointWithOptions(request, runtime);
  }

  async detachSecurityGroupFromVpcEndpointWithOptions(request: DetachSecurityGroupFromVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DetachSecurityGroupFromVpcEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachSecurityGroupFromVpcEndpointResponse>(await this.doRPCRequest("DetachSecurityGroupFromVpcEndpoint", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new DetachSecurityGroupFromVpcEndpointResponse({}));
  }

  async detachSecurityGroupFromVpcEndpoint(request: DetachSecurityGroupFromVpcEndpointRequest): Promise<DetachSecurityGroupFromVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachSecurityGroupFromVpcEndpointWithOptions(request, runtime);
  }

  async checkProductOpenWithOptions(runtime: $Util.RuntimeOptions): Promise<CheckProductOpenResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<CheckProductOpenResponse>(await this.doRPCRequest("CheckProductOpen", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new CheckProductOpenResponse({}));
  }

  async checkProductOpen(): Promise<CheckProductOpenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkProductOpenWithOptions(runtime);
  }

  async getVpcEndpointServiceAttributeWithOptions(request: GetVpcEndpointServiceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetVpcEndpointServiceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVpcEndpointServiceAttributeResponse>(await this.doRPCRequest("GetVpcEndpointServiceAttribute", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetVpcEndpointServiceAttributeResponse({}));
  }

  async getVpcEndpointServiceAttribute(request: GetVpcEndpointServiceAttributeRequest): Promise<GetVpcEndpointServiceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVpcEndpointServiceAttributeWithOptions(request, runtime);
  }

  async removeUserFromVpcEndpointServiceWithOptions(request: RemoveUserFromVpcEndpointServiceRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserFromVpcEndpointServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveUserFromVpcEndpointServiceResponse>(await this.doRPCRequest("RemoveUserFromVpcEndpointService", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveUserFromVpcEndpointServiceResponse({}));
  }

  async removeUserFromVpcEndpointService(request: RemoveUserFromVpcEndpointServiceRequest): Promise<RemoveUserFromVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromVpcEndpointServiceWithOptions(request, runtime);
  }

  async deleteVpcEndpointServiceWithOptions(request: DeleteVpcEndpointServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcEndpointServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVpcEndpointServiceResponse>(await this.doRPCRequest("DeleteVpcEndpointService", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVpcEndpointServiceResponse({}));
  }

  async deleteVpcEndpointService(request: DeleteVpcEndpointServiceRequest): Promise<DeleteVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcEndpointServiceWithOptions(request, runtime);
  }

  async disableVpcEndpointConnectionWithOptions(request: DisableVpcEndpointConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DisableVpcEndpointConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableVpcEndpointConnectionResponse>(await this.doRPCRequest("DisableVpcEndpointConnection", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new DisableVpcEndpointConnectionResponse({}));
  }

  async disableVpcEndpointConnection(request: DisableVpcEndpointConnectionRequest): Promise<DisableVpcEndpointConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableVpcEndpointConnectionWithOptions(request, runtime);
  }

  async getVpcEndpointAttributeWithOptions(request: GetVpcEndpointAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetVpcEndpointAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVpcEndpointAttributeResponse>(await this.doRPCRequest("GetVpcEndpointAttribute", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetVpcEndpointAttributeResponse({}));
  }

  async getVpcEndpointAttribute(request: GetVpcEndpointAttributeRequest): Promise<GetVpcEndpointAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVpcEndpointAttributeWithOptions(request, runtime);
  }

  async listVpcEndpointZonesWithOptions(request: ListVpcEndpointZonesRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVpcEndpointZonesResponse>(await this.doRPCRequest("ListVpcEndpointZones", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListVpcEndpointZonesResponse({}));
  }

  async listVpcEndpointZones(request: ListVpcEndpointZonesRequest): Promise<ListVpcEndpointZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointZonesWithOptions(request, runtime);
  }

  async attachSecurityGroupToVpcEndpointWithOptions(request: AttachSecurityGroupToVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<AttachSecurityGroupToVpcEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachSecurityGroupToVpcEndpointResponse>(await this.doRPCRequest("AttachSecurityGroupToVpcEndpoint", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new AttachSecurityGroupToVpcEndpointResponse({}));
  }

  async attachSecurityGroupToVpcEndpoint(request: AttachSecurityGroupToVpcEndpointRequest): Promise<AttachSecurityGroupToVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachSecurityGroupToVpcEndpointWithOptions(request, runtime);
  }

  async detachResourceFromVpcEndpointServiceWithOptions(request: DetachResourceFromVpcEndpointServiceRequest, runtime: $Util.RuntimeOptions): Promise<DetachResourceFromVpcEndpointServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachResourceFromVpcEndpointServiceResponse>(await this.doRPCRequest("DetachResourceFromVpcEndpointService", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new DetachResourceFromVpcEndpointServiceResponse({}));
  }

  async detachResourceFromVpcEndpointService(request: DetachResourceFromVpcEndpointServiceRequest): Promise<DetachResourceFromVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachResourceFromVpcEndpointServiceWithOptions(request, runtime);
  }

  async attachResourceToVpcEndpointServiceWithOptions(request: AttachResourceToVpcEndpointServiceRequest, runtime: $Util.RuntimeOptions): Promise<AttachResourceToVpcEndpointServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachResourceToVpcEndpointServiceResponse>(await this.doRPCRequest("AttachResourceToVpcEndpointService", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new AttachResourceToVpcEndpointServiceResponse({}));
  }

  async attachResourceToVpcEndpointService(request: AttachResourceToVpcEndpointServiceRequest): Promise<AttachResourceToVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachResourceToVpcEndpointServiceWithOptions(request, runtime);
  }

  async listVpcEndpointServiceResourcesWithOptions(request: ListVpcEndpointServiceResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointServiceResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVpcEndpointServiceResourcesResponse>(await this.doRPCRequest("ListVpcEndpointServiceResources", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListVpcEndpointServiceResourcesResponse({}));
  }

  async listVpcEndpointServiceResources(request: ListVpcEndpointServiceResourcesRequest): Promise<ListVpcEndpointServiceResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointServiceResourcesWithOptions(request, runtime);
  }

  async updateVpcEndpointAttributeWithOptions(request: UpdateVpcEndpointAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVpcEndpointAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVpcEndpointAttributeResponse>(await this.doRPCRequest("UpdateVpcEndpointAttribute", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVpcEndpointAttributeResponse({}));
  }

  async updateVpcEndpointAttribute(request: UpdateVpcEndpointAttributeRequest): Promise<UpdateVpcEndpointAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpcEndpointAttributeWithOptions(request, runtime);
  }

  async createVpcEndpointServiceWithOptions(request: CreateVpcEndpointServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcEndpointServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVpcEndpointServiceResponse>(await this.doRPCRequest("CreateVpcEndpointService", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVpcEndpointServiceResponse({}));
  }

  async createVpcEndpointService(request: CreateVpcEndpointServiceRequest): Promise<CreateVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcEndpointServiceWithOptions(request, runtime);
  }

}
