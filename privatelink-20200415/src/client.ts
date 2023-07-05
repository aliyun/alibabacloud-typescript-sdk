// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddUserToVpcEndpointServiceRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  serviceId?: string;
  userARN?: string;
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
  statusCode: number;
  body: AddUserToVpcEndpointServiceResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneToVpcEndpointRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointId?: string;
  regionId?: string;
  vSwitchId?: string;
  zoneId?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
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
      regionId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      ip: 'string',
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
  statusCode: number;
  body: AddZoneToVpcEndpointResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachResourceToVpcEndpointServiceRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  serviceId?: string;
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
  statusCode: number;
  body: AttachResourceToVpcEndpointServiceResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSecurityGroupToVpcEndpointRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointId?: string;
  regionId?: string;
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
  statusCode: number;
  body: AttachSecurityGroupToVpcEndpointResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  resourceGroupId?: string;
  resourceId?: string;
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeResourceGroupResponseBody;
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
  statusCode: number;
  body: CheckProductOpenResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceSupportOperateRequest extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceSupportOperateResponseBody extends $tea.Model {
  requestId?: string;
  resourceCanBeDowngraded?: boolean;
  resourceZoneCanBeDeleted?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceCanBeDowngraded: 'ResourceCanBeDowngraded',
      resourceZoneCanBeDeleted: 'ResourceZoneCanBeDeleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceCanBeDowngraded: 'boolean',
      resourceZoneCanBeDeleted: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceSupportOperateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckResourceSupportOperateResponseBody;
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
      body: CheckResourceSupportOperateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointDescription?: string;
  endpointName?: string;
  endpointType?: string;
  protectedEnabled?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string[];
  serviceId?: string;
  serviceName?: string;
  tag?: CreateVpcEndpointRequestTag[];
  vpcId?: string;
  zone?: CreateVpcEndpointRequestZone[];
  zonePrivateIpAddressCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointDescription: 'EndpointDescription',
      endpointName: 'EndpointName',
      endpointType: 'EndpointType',
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
      clientToken: 'string',
      dryRun: 'boolean',
      endpointDescription: 'string',
      endpointName: 'string',
      endpointType: 'string',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointResponseBody extends $tea.Model {
  bandwidth?: number;
  connectionStatus?: string;
  createTime?: string;
  endpointBusinessStatus?: string;
  endpointDescription?: string;
  endpointDomain?: string;
  endpointId?: string;
  endpointName?: string;
  endpointStatus?: string;
  requestId?: string;
  serviceId?: string;
  serviceName?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateVpcEndpointResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceRequest extends $tea.Model {
  autoAcceptEnabled?: boolean;
  clientToken?: string;
  dryRun?: boolean;
  payer?: string;
  regionId?: string;
  resource?: CreateVpcEndpointServiceRequestResource[];
  resourceGroupId?: string;
  serviceDescription?: string;
  serviceResourceType?: string;
  serviceSupportIPv6?: boolean;
  tag?: CreateVpcEndpointServiceRequestTag[];
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceResponseBody extends $tea.Model {
  autoAcceptEnabled?: boolean;
  createTime?: string;
  requestId?: string;
  resourceGroupId?: string;
  serviceBusinessStatus?: string;
  serviceDescription?: string;
  serviceDomain?: string;
  serviceId?: string;
  serviceName?: string;
  serviceStatus?: string;
  serviceSupportIPv6?: boolean;
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateVpcEndpointServiceResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointId?: string;
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
  statusCode: number;
  body: DeleteVpcEndpointResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointServiceRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
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
  statusCode: number;
  body: DeleteVpcEndpointServiceResponseBody;
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
  regions?: DescribeRegionsResponseBodyRegions;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
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
  statusCode: number;
  body: DescribeZonesResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachResourceFromVpcEndpointServiceRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  serviceId?: string;
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
  statusCode: number;
  body: DetachResourceFromVpcEndpointServiceResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSecurityGroupFromVpcEndpointRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointId?: string;
  regionId?: string;
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
  statusCode: number;
  body: DetachSecurityGroupFromVpcEndpointResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVpcEndpointConnectionRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointId?: string;
  regionId?: string;
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
  statusCode: number;
  body: DisableVpcEndpointConnectionResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVpcEndpointZoneConnectionRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointId?: string;
  regionId?: string;
  replacedResource?: boolean;
  serviceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVpcEndpointZoneConnectionResponseBody extends $tea.Model {
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

export class DisableVpcEndpointZoneConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableVpcEndpointZoneConnectionResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableVpcEndpointConnectionRequest extends $tea.Model {
  bandwidth?: number;
  clientToken?: string;
  dryRun?: boolean;
  endpointId?: string;
  regionId?: string;
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
  statusCode: number;
  body: EnableVpcEndpointConnectionResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableVpcEndpointZoneConnectionRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointId?: string;
  regionId?: string;
  serviceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableVpcEndpointZoneConnectionResponseBody extends $tea.Model {
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

export class EnableVpcEndpointZoneConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableVpcEndpointZoneConnectionResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointAttributeRequest extends $tea.Model {
  endpointId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointAttributeResponseBody extends $tea.Model {
  bandwidth?: number;
  connectionStatus?: string;
  createTime?: string;
  endpointBusinessStatus?: string;
  endpointDescription?: string;
  endpointDomain?: string;
  endpointId?: string;
  endpointName?: string;
  endpointStatus?: string;
  endpointType?: string;
  payer?: string;
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  resourceOwner?: boolean;
  serviceId?: string;
  serviceName?: string;
  vpcId?: string;
  zoneAffinityEnabled?: boolean;
  zonePrivateIpAddressCount?: number;
  static names(): { [key: string]: string } {
    return {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVpcEndpointAttributeResponseBody;
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
  autoAcceptEnabled?: boolean;
  connectBandwidth?: number;
  createTime?: string;
  maxBandwidth?: number;
  minBandwidth?: number;
  payer?: string;
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  serviceBusinessStatus?: string;
  serviceDescription?: string;
  serviceDomain?: string;
  serviceId?: string;
  serviceName?: string;
  serviceResourceType?: string;
  serviceStatus?: string;
  serviceSupportIPv6?: boolean;
  serviceType?: string;
  zoneAffinityEnabled?: boolean;
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointServiceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVpcEndpointServiceAttributeResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsRequest extends $tea.Model {
  connectionId?: number;
  connectionStatus?: string;
  endpointId?: string;
  endpointOwnerId?: number;
  eniId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  replacedResourceId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
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
      connectionId: 'number',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsResponseBody extends $tea.Model {
  connections?: ListVpcEndpointConnectionsResponseBodyConnections[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVpcEndpointConnectionsResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointSecurityGroupsRequest extends $tea.Model {
  endpointId?: string;
  maxResults?: number;
  nextToken?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointSecurityGroupsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  securityGroups?: ListVpcEndpointSecurityGroupsResponseBodySecurityGroups[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      securityGroups: { 'type': 'array', 'itemType': ListVpcEndpointSecurityGroupsResponseBodySecurityGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointSecurityGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVpcEndpointSecurityGroupsResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceResourcesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceResourcesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVpcEndpointServiceResourcesResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  serviceId?: string;
  userId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: string;
  userARNs?: ListVpcEndpointServiceUsersResponseBodyUserARNs[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVpcEndpointServiceUsersResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesRequest extends $tea.Model {
  autoAcceptEnabled?: boolean;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  serviceBusinessStatus?: string;
  serviceId?: string;
  serviceName?: string;
  serviceResourceType?: string;
  serviceStatus?: string;
  tag?: ListVpcEndpointServicesRequestTag[];
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  services?: ListVpcEndpointServicesResponseBodyServices[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVpcEndpointServicesResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  serviceId?: string;
  serviceName?: string;
  serviceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  services?: ListVpcEndpointServicesByEndUserResponseBodyServices[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVpcEndpointServicesByEndUserResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointZonesRequest extends $tea.Model {
  endpointId?: string;
  maxResults?: number;
  nextToken?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointZonesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  zones?: ListVpcEndpointZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': ListVpcEndpointZonesResponseBodyZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVpcEndpointZonesResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsRequest extends $tea.Model {
  connectionStatus?: string;
  endpointId?: string;
  endpointName?: string;
  endpointStatus?: string;
  endpointType?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  serviceName?: string;
  tag?: ListVpcEndpointsRequestTag[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponseBody extends $tea.Model {
  endpoints?: ListVpcEndpointsResponseBodyEndpoints[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVpcEndpointsResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyResourceAddressFamilyRequest extends $tea.Model {
  addressFamily?: string;
  ipv6Address?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      addressFamily: 'AddressFamily',
      ipv6Address: 'Ipv6Address',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFamily: 'string',
      ipv6Address: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyResourceAddressFamilyResponseBody extends $tea.Model {
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

export class NotifyResourceAddressFamilyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: NotifyResourceAddressFamilyResponseBody;
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
      body: NotifyResourceAddressFamilyResponseBody,
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
  orderId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenPrivateLinkServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenPrivateLinkServiceResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromVpcEndpointServiceRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  serviceId?: string;
  userARN?: string;
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
  statusCode: number;
  body: RemoveUserFromVpcEndpointServiceResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveZoneFromVpcEndpointRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointId?: string;
  regionId?: string;
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
  statusCode: number;
  body: RemoveZoneFromVpcEndpointResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
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

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointDescription?: string;
  endpointId?: string;
  endpointName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointDescription: 'EndpointDescription',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointDescription: 'string',
      endpointId: 'string',
      endpointName: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: UpdateVpcEndpointAttributeResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointConnectionAttributeRequest extends $tea.Model {
  bandwidth?: number;
  clientToken?: string;
  dryRun?: boolean;
  endpointId?: string;
  regionId?: string;
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
  statusCode: number;
  body: UpdateVpcEndpointConnectionAttributeResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointServiceAttributeRequest extends $tea.Model {
  autoAcceptEnabled?: boolean;
  clientToken?: string;
  connectBandwidth?: number;
  dryRun?: boolean;
  regionId?: string;
  serviceDescription?: string;
  serviceId?: string;
  serviceSupportIPv6?: boolean;
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
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
  statusCode: number;
  body: UpdateVpcEndpointServiceAttributeResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointServiceResourceAttributeRequest extends $tea.Model {
  autoAllocatedEnabled?: boolean;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  resourceId?: string;
  serviceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointServiceResourceAttributeResponseBody extends $tea.Model {
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

export class UpdateVpcEndpointServiceResourceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateVpcEndpointServiceResourceAttributeResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointZoneConnectionResourceAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointId?: string;
  regionId?: string;
  resourceAllocateMode?: string;
  resourceId?: string;
  resourceReplaceMode?: string;
  resourceType?: string;
  serviceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcEndpointZoneConnectionResourceAttributeResponseBody extends $tea.Model {
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

export class UpdateVpcEndpointZoneConnectionResourceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateVpcEndpointZoneConnectionResourceAttributeResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointRequestTag extends $tea.Model {
  key?: string;
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

export class CreateVpcEndpointServiceRequestResource extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceRequestTag extends $tea.Model {
  key?: string;
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

export class ListVpcEndpointConnectionsResponseBodyConnectionsZones extends $tea.Model {
  connectionId?: number;
  connectionStringId?: string;
  eniId?: string;
  replacedEniId?: string;
  replacedResourceId?: string;
  resourceId?: string;
  vSwitchId?: string;
  zoneDomain?: string;
  zoneId?: string;
  zoneStatus?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      connectionStringId: 'ConnectionStringId',
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
      connectionId: 'number',
      connectionStringId: 'string',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointConnectionsResponseBodyConnections extends $tea.Model {
  bandwidth?: number;
  connectionStatus?: string;
  endpointId?: string;
  endpointOwnerId?: number;
  endpointVpcId?: string;
  modifiedTime?: string;
  resourceGroupId?: string;
  resourceOwner?: boolean;
  serviceId?: string;
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

export class ListVpcEndpointServiceResourcesResponseBodyResources extends $tea.Model {
  autoAllocatedEnabled?: boolean;
  ip?: string;
  regionId?: string;
  relatedDeprecatedEndpointCount?: number;
  relatedEndpointCount?: number;
  resourceId?: string;
  resourceSupportIPv6?: boolean;
  resourceType?: string;
  vSwitchId?: string;
  vpcId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersResponseBodyUserARNs extends $tea.Model {
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

export class ListVpcEndpointServicesRequestTag extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesResponseBodyServicesTags extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesResponseBodyServices extends $tea.Model {
  autoAcceptEnabled?: boolean;
  connectBandwidth?: number;
  createTime?: string;
  maxBandwidth?: number;
  minBandwidth?: number;
  payer?: string;
  regionId?: string;
  resourceGroupId?: string;
  serviceBusinessStatus?: string;
  serviceDescription?: string;
  serviceDomain?: string;
  serviceId?: string;
  serviceName?: string;
  serviceResourceType?: string;
  serviceStatus?: string;
  serviceSupportIPv6?: boolean;
  serviceType?: string;
  tags?: ListVpcEndpointServicesResponseBodyServicesTags[];
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserRequestTag extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserResponseBodyServicesTags extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserResponseBodyServices extends $tea.Model {
  payer?: string;
  resourceGroupId?: string;
  serviceDomain?: string;
  serviceId?: string;
  serviceName?: string;
  serviceResourceType?: string;
  serviceSupportIPv6?: boolean;
  serviceType?: string;
  tags?: ListVpcEndpointServicesByEndUserResponseBodyServicesTags[];
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointZonesResponseBodyZones extends $tea.Model {
  eniId?: string;
  eniIp?: string;
  regionId?: string;
  serviceStatus?: string;
  vSwitchId?: string;
  zoneDomain?: string;
  zoneId?: string;
  zoneIpv6Address?: string;
  zoneStatus?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      eniIp: 'EniIp',
      regionId: 'RegionId',
      serviceStatus: 'ServiceStatus',
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
      serviceStatus: 'string',
      vSwitchId: 'string',
      zoneDomain: 'string',
      zoneId: 'string',
      zoneIpv6Address: 'string',
      zoneStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsRequestTag extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponseBodyEndpointsTags extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponseBodyEndpoints extends $tea.Model {
  bandwidth?: number;
  connectionStatus?: string;
  createTime?: string;
  endpointBusinessStatus?: string;
  endpointDescription?: string;
  endpointDomain?: string;
  endpointId?: string;
  endpointName?: string;
  endpointStatus?: string;
  endpointType?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwner?: boolean;
  serviceId?: string;
  serviceName?: string;
  tags?: ListVpcEndpointsResponseBodyEndpointsTags[];
  vpcId?: string;
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  key?: string;
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

  /**
    * You cannot repeatedly call the **AddUserToVpcEndpointService** operation to add the ID of an Alibaba Cloud account to a service whitelist within a specified period of time.
    *
    * @param request AddUserToVpcEndpointServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddUserToVpcEndpointServiceResponse
   */
  async addUserToVpcEndpointServiceWithOptions(request: AddUserToVpcEndpointServiceRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToVpcEndpointServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.userARN)) {
      query["UserARN"] = request.userARN;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddUserToVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new AddUserToVpcEndpointServiceResponse({}));
  }

  /**
    * You cannot repeatedly call the **AddUserToVpcEndpointService** operation to add the ID of an Alibaba Cloud account to a service whitelist within a specified period of time.
    *
    * @param request AddUserToVpcEndpointServiceRequest
    * @return AddUserToVpcEndpointServiceResponse
   */
  async addUserToVpcEndpointService(request: AddUserToVpcEndpointServiceRequest): Promise<AddUserToVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
    * The request ID.
    *
    * @param request AddZoneToVpcEndpointRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddZoneToVpcEndpointResponse
   */
  async addZoneToVpcEndpointWithOptions(request: AddZoneToVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<AddZoneToVpcEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!Util.isUnset(request.ip)) {
      query["ip"] = request.ip;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddZoneToVpcEndpointResponse>(await this.callApi(params, req, runtime), new AddZoneToVpcEndpointResponse({}));
  }

  /**
    * The request ID.
    *
    * @param request AddZoneToVpcEndpointRequest
    * @return AddZoneToVpcEndpointResponse
   */
  async addZoneToVpcEndpoint(request: AddZoneToVpcEndpointRequest): Promise<AddZoneToVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addZoneToVpcEndpointWithOptions(request, runtime);
  }

  /**
    * You cannot repeatedly call the **AttachResourceToVpcEndpointService** operation to add a service resource to an endpoint service within a specified period of time.
    *
    * @param request AttachResourceToVpcEndpointServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AttachResourceToVpcEndpointServiceResponse
   */
  async attachResourceToVpcEndpointServiceWithOptions(request: AttachResourceToVpcEndpointServiceRequest, runtime: $Util.RuntimeOptions): Promise<AttachResourceToVpcEndpointServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AttachResourceToVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new AttachResourceToVpcEndpointServiceResponse({}));
  }

  /**
    * You cannot repeatedly call the **AttachResourceToVpcEndpointService** operation to add a service resource to an endpoint service within a specified period of time.
    *
    * @param request AttachResourceToVpcEndpointServiceRequest
    * @return AttachResourceToVpcEndpointServiceResponse
   */
  async attachResourceToVpcEndpointService(request: AttachResourceToVpcEndpointServiceRequest): Promise<AttachResourceToVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachResourceToVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
    * *   **AttachSecurityGroupToVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpoints](~~183558~~) operation to query the state of the endpoint.
    *     *   If the endpoint is in the **Pending** state, the endpoint is being associated with the security group.
    *     *   If the endpoint is in the **Active** state, the endpoint is associated with the security group.
    * *   You cannot repeatedly call the **AttachSecurityGroupToVpcEndpoint** operation to associate an endpoint with a security group within a specified period of time.
    *
    * @param request AttachSecurityGroupToVpcEndpointRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AttachSecurityGroupToVpcEndpointResponse
   */
  async attachSecurityGroupToVpcEndpointWithOptions(request: AttachSecurityGroupToVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<AttachSecurityGroupToVpcEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AttachSecurityGroupToVpcEndpointResponse>(await this.callApi(params, req, runtime), new AttachSecurityGroupToVpcEndpointResponse({}));
  }

  /**
    * *   **AttachSecurityGroupToVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpoints](~~183558~~) operation to query the state of the endpoint.
    *     *   If the endpoint is in the **Pending** state, the endpoint is being associated with the security group.
    *     *   If the endpoint is in the **Active** state, the endpoint is associated with the security group.
    * *   You cannot repeatedly call the **AttachSecurityGroupToVpcEndpoint** operation to associate an endpoint with a security group within a specified period of time.
    *
    * @param request AttachSecurityGroupToVpcEndpointRequest
    * @return AttachSecurityGroupToVpcEndpointResponse
   */
  async attachSecurityGroupToVpcEndpoint(request: AttachSecurityGroupToVpcEndpointRequest): Promise<AttachSecurityGroupToVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachSecurityGroupToVpcEndpointWithOptions(request, runtime);
  }

  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  async checkProductOpenWithOptions(runtime: $Util.RuntimeOptions): Promise<CheckProductOpenResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CheckProductOpenResponse>(await this.callApi(params, req, runtime), new CheckProductOpenResponse({}));
  }

  async checkProductOpen(): Promise<CheckProductOpenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkProductOpenWithOptions(runtime);
  }

  async checkResourceSupportOperateWithOptions(request: CheckResourceSupportOperateRequest, runtime: $Util.RuntimeOptions): Promise<CheckResourceSupportOperateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckResourceSupportOperate",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckResourceSupportOperateResponse>(await this.callApi(params, req, runtime), new CheckResourceSupportOperateResponse({}));
  }

  async checkResourceSupportOperate(request: CheckResourceSupportOperateRequest): Promise<CheckResourceSupportOperateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkResourceSupportOperateWithOptions(request, runtime);
  }

  /**
    * The region ID of the endpoint.
    * You can call the [DescribeRegions](~~120468~~) operation to query the most recent region list.
    *
    * @param request CreateVpcEndpointRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateVpcEndpointResponse
   */
  async createVpcEndpointWithOptions(request: CreateVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointDescription)) {
      query["EndpointDescription"] = request.endpointDescription;
    }

    if (!Util.isUnset(request.endpointName)) {
      query["EndpointName"] = request.endpointName;
    }

    if (!Util.isUnset(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!Util.isUnset(request.protectedEnabled)) {
      query["ProtectedEnabled"] = request.protectedEnabled;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zone)) {
      query["Zone"] = request.zone;
    }

    if (!Util.isUnset(request.zonePrivateIpAddressCount)) {
      query["ZonePrivateIpAddressCount"] = request.zonePrivateIpAddressCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateVpcEndpointResponse>(await this.callApi(params, req, runtime), new CreateVpcEndpointResponse({}));
  }

  /**
    * The region ID of the endpoint.
    * You can call the [DescribeRegions](~~120468~~) operation to query the most recent region list.
    *
    * @param request CreateVpcEndpointRequest
    * @return CreateVpcEndpointResponse
   */
  async createVpcEndpoint(request: CreateVpcEndpointRequest): Promise<CreateVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcEndpointWithOptions(request, runtime);
  }

  /**
    * The resource group ID.
    *
    * @param request CreateVpcEndpointServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateVpcEndpointServiceResponse
   */
  async createVpcEndpointServiceWithOptions(request: CreateVpcEndpointServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcEndpointServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoAcceptEnabled)) {
      query["AutoAcceptEnabled"] = request.autoAcceptEnabled;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.payer)) {
      query["Payer"] = request.payer;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceDescription)) {
      query["ServiceDescription"] = request.serviceDescription;
    }

    if (!Util.isUnset(request.serviceResourceType)) {
      query["ServiceResourceType"] = request.serviceResourceType;
    }

    if (!Util.isUnset(request.serviceSupportIPv6)) {
      query["ServiceSupportIPv6"] = request.serviceSupportIPv6;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.zoneAffinityEnabled)) {
      query["ZoneAffinityEnabled"] = request.zoneAffinityEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new CreateVpcEndpointServiceResponse({}));
  }

  /**
    * The resource group ID.
    *
    * @param request CreateVpcEndpointServiceRequest
    * @return CreateVpcEndpointServiceResponse
   */
  async createVpcEndpointService(request: CreateVpcEndpointServiceRequest): Promise<CreateVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
    * **DeleteVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](~~183568~~) operation to check whether the endpoint is deleted.
    * *   If the endpoint is in the **Deleting** state, the endpoint is being deleted.
    * *   If the endpoint cannot be queried, the endpoint is deleted.
    *
    * @param request DeleteVpcEndpointRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteVpcEndpointResponse
   */
  async deleteVpcEndpointWithOptions(request: DeleteVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteVpcEndpointResponse>(await this.callApi(params, req, runtime), new DeleteVpcEndpointResponse({}));
  }

  /**
    * **DeleteVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](~~183568~~) operation to check whether the endpoint is deleted.
    * *   If the endpoint is in the **Deleting** state, the endpoint is being deleted.
    * *   If the endpoint cannot be queried, the endpoint is deleted.
    *
    * @param request DeleteVpcEndpointRequest
    * @return DeleteVpcEndpointResponse
   */
  async deleteVpcEndpoint(request: DeleteVpcEndpointRequest): Promise<DeleteVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcEndpointWithOptions(request, runtime);
  }

  /**
    * *   **DeleteVpcEndpointService** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](~~183542~~) operation to check whether the endpoint service is deleted.
    *     *   If the endpoint service is in the **Deleting** state, the endpoint service is being deleted.
    *     *   If the endpoint service cannot be queried, the endpoint service is deleted.
    * *   You cannot repeatedly call the **DeleteVpcEndpointService** operation to delete an endpoint service that belongs to an Alibaba Cloud account within a specified period of time.
    *
    * @param request DeleteVpcEndpointServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteVpcEndpointServiceResponse
   */
  async deleteVpcEndpointServiceWithOptions(request: DeleteVpcEndpointServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcEndpointServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new DeleteVpcEndpointServiceResponse({}));
  }

  /**
    * *   **DeleteVpcEndpointService** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](~~183542~~) operation to check whether the endpoint service is deleted.
    *     *   If the endpoint service is in the **Deleting** state, the endpoint service is being deleted.
    *     *   If the endpoint service cannot be queried, the endpoint service is deleted.
    * *   You cannot repeatedly call the **DeleteVpcEndpointService** operation to delete an endpoint service that belongs to an Alibaba Cloud account within a specified period of time.
    *
    * @param request DeleteVpcEndpointServiceRequest
    * @return DeleteVpcEndpointServiceResponse
   */
  async deleteVpcEndpointService(request: DeleteVpcEndpointServiceRequest): Promise<DeleteVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcEndpointServiceWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeZonesResponse>(await this.callApi(params, req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async detachResourceFromVpcEndpointServiceWithOptions(request: DetachResourceFromVpcEndpointServiceRequest, runtime: $Util.RuntimeOptions): Promise<DetachResourceFromVpcEndpointServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DetachResourceFromVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new DetachResourceFromVpcEndpointServiceResponse({}));
  }

  async detachResourceFromVpcEndpointService(request: DetachResourceFromVpcEndpointServiceRequest): Promise<DetachResourceFromVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachResourceFromVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
    * 671231
    *
    * @param request DetachSecurityGroupFromVpcEndpointRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DetachSecurityGroupFromVpcEndpointResponse
   */
  async detachSecurityGroupFromVpcEndpointWithOptions(request: DetachSecurityGroupFromVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DetachSecurityGroupFromVpcEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DetachSecurityGroupFromVpcEndpointResponse>(await this.callApi(params, req, runtime), new DetachSecurityGroupFromVpcEndpointResponse({}));
  }

  /**
    * 671231
    *
    * @param request DetachSecurityGroupFromVpcEndpointRequest
    * @return DetachSecurityGroupFromVpcEndpointResponse
   */
  async detachSecurityGroupFromVpcEndpoint(request: DetachSecurityGroupFromVpcEndpointRequest): Promise<DetachSecurityGroupFromVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachSecurityGroupFromVpcEndpointWithOptions(request, runtime);
  }

  /**
    * *   **DisableVpcEndpointConnection** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](~~183568~~) operation to query the state of the endpoint connection.
    *     *   If the endpoint connection is in the **Disconnecting** state, the endpoint is being disconnected from the endpoint service.
    *     *   If the endpoint connection is in the **Disconnected** state, the endpoint is disconnected from the endpoint service.
    * *   You cannot repeatedly call the **DisableVpcEndpointConnection** operation to allow an endpoint service to reject a connection request from an endpoint within a specified period of time.
    *
    * @param request DisableVpcEndpointConnectionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableVpcEndpointConnectionResponse
   */
  async disableVpcEndpointConnectionWithOptions(request: DisableVpcEndpointConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DisableVpcEndpointConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DisableVpcEndpointConnectionResponse>(await this.callApi(params, req, runtime), new DisableVpcEndpointConnectionResponse({}));
  }

  /**
    * *   **DisableVpcEndpointConnection** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](~~183568~~) operation to query the state of the endpoint connection.
    *     *   If the endpoint connection is in the **Disconnecting** state, the endpoint is being disconnected from the endpoint service.
    *     *   If the endpoint connection is in the **Disconnected** state, the endpoint is disconnected from the endpoint service.
    * *   You cannot repeatedly call the **DisableVpcEndpointConnection** operation to allow an endpoint service to reject a connection request from an endpoint within a specified period of time.
    *
    * @param request DisableVpcEndpointConnectionRequest
    * @return DisableVpcEndpointConnectionResponse
   */
  async disableVpcEndpointConnection(request: DisableVpcEndpointConnectionRequest): Promise<DisableVpcEndpointConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableVpcEndpointConnectionWithOptions(request, runtime);
  }

  /**
    * Specifies whether to only precheck the request. Valid values:
    * *   **true**: only prechecks the API request without performing the operation. The system checks whether your AccessKey pair is valid, whether the Resource Access Management (RAM) user is authorized, and whether required parameters are set. If the request fails to pass the precheck, an error code is returned. If the request passes the check, the `DryRunOperation` error code is returned.
    * *   **false** (default): sends the request. If the request passes the precheck, a 2xx HTTP status code is returned and the operation is performed.
    *
    * @param request DisableVpcEndpointZoneConnectionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableVpcEndpointZoneConnectionResponse
   */
  async disableVpcEndpointZoneConnectionWithOptions(request: DisableVpcEndpointZoneConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DisableVpcEndpointZoneConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replacedResource)) {
      query["ReplacedResource"] = request.replacedResource;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DisableVpcEndpointZoneConnectionResponse>(await this.callApi(params, req, runtime), new DisableVpcEndpointZoneConnectionResponse({}));
  }

  /**
    * Specifies whether to only precheck the request. Valid values:
    * *   **true**: only prechecks the API request without performing the operation. The system checks whether your AccessKey pair is valid, whether the Resource Access Management (RAM) user is authorized, and whether required parameters are set. If the request fails to pass the precheck, an error code is returned. If the request passes the check, the `DryRunOperation` error code is returned.
    * *   **false** (default): sends the request. If the request passes the precheck, a 2xx HTTP status code is returned and the operation is performed.
    *
    * @param request DisableVpcEndpointZoneConnectionRequest
    * @return DisableVpcEndpointZoneConnectionResponse
   */
  async disableVpcEndpointZoneConnection(request: DisableVpcEndpointZoneConnectionRequest): Promise<DisableVpcEndpointZoneConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableVpcEndpointZoneConnectionWithOptions(request, runtime);
  }

  /**
    * *   **EnableVpcEndpointConnection** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](~~183568~~) operation to query the state of the endpoint connection.
    *     *   If the state is **Connecting**, the endpoint connection is being established.
    *     *   If the state is **Connected**, the endpoint connection is established.
    * *   You cannot repeatedly call the **EnableVpcEndpointConnection** operation to allow an endpoint service of an Alibaba Cloud account to accept a connection request from an endpoint within a specified period of time.
    *
    * @param request EnableVpcEndpointConnectionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnableVpcEndpointConnectionResponse
   */
  async enableVpcEndpointConnectionWithOptions(request: EnableVpcEndpointConnectionRequest, runtime: $Util.RuntimeOptions): Promise<EnableVpcEndpointConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<EnableVpcEndpointConnectionResponse>(await this.callApi(params, req, runtime), new EnableVpcEndpointConnectionResponse({}));
  }

  /**
    * *   **EnableVpcEndpointConnection** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointAttribute](~~183568~~) operation to query the state of the endpoint connection.
    *     *   If the state is **Connecting**, the endpoint connection is being established.
    *     *   If the state is **Connected**, the endpoint connection is established.
    * *   You cannot repeatedly call the **EnableVpcEndpointConnection** operation to allow an endpoint service of an Alibaba Cloud account to accept a connection request from an endpoint within a specified period of time.
    *
    * @param request EnableVpcEndpointConnectionRequest
    * @return EnableVpcEndpointConnectionResponse
   */
  async enableVpcEndpointConnection(request: EnableVpcEndpointConnectionRequest): Promise<EnableVpcEndpointConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableVpcEndpointConnectionWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation only when the state of the endpoint is **Connected** and the state of the associated zone is **Disconnected**.
    * *   **EnableVpcEndpointZoneConnection** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](~~183560~~) operation to check whether the endpoint service accepts a connection request from the endpoint in the associated zone.
    *     *   If the zone is in the **Connecting** state, the endpoint service is accepting the connection request from the endpoint.
    *     *   If the zone is in the **Connected** state, the endpoint service has accepted the connection request from the endpoint.
    * *   You cannot repeatedly call the **EnableVpcEndpointZoneConnection** operation to allow an endpoint service to accept a connection request from an endpoint in the associated zone within a specified period of time.
    *
    * @param request EnableVpcEndpointZoneConnectionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnableVpcEndpointZoneConnectionResponse
   */
  async enableVpcEndpointZoneConnectionWithOptions(request: EnableVpcEndpointZoneConnectionRequest, runtime: $Util.RuntimeOptions): Promise<EnableVpcEndpointZoneConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<EnableVpcEndpointZoneConnectionResponse>(await this.callApi(params, req, runtime), new EnableVpcEndpointZoneConnectionResponse({}));
  }

  /**
    * *   You can call this operation only when the state of the endpoint is **Connected** and the state of the associated zone is **Disconnected**.
    * *   **EnableVpcEndpointZoneConnection** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](~~183560~~) operation to check whether the endpoint service accepts a connection request from the endpoint in the associated zone.
    *     *   If the zone is in the **Connecting** state, the endpoint service is accepting the connection request from the endpoint.
    *     *   If the zone is in the **Connected** state, the endpoint service has accepted the connection request from the endpoint.
    * *   You cannot repeatedly call the **EnableVpcEndpointZoneConnection** operation to allow an endpoint service to accept a connection request from an endpoint in the associated zone within a specified period of time.
    *
    * @param request EnableVpcEndpointZoneConnectionRequest
    * @return EnableVpcEndpointZoneConnectionResponse
   */
  async enableVpcEndpointZoneConnection(request: EnableVpcEndpointZoneConnectionRequest): Promise<EnableVpcEndpointZoneConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableVpcEndpointZoneConnectionWithOptions(request, runtime);
  }

  async getVpcEndpointAttributeWithOptions(request: GetVpcEndpointAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetVpcEndpointAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetVpcEndpointAttributeResponse>(await this.callApi(params, req, runtime), new GetVpcEndpointAttributeResponse({}));
  }

  async getVpcEndpointAttribute(request: GetVpcEndpointAttributeRequest): Promise<GetVpcEndpointAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVpcEndpointAttributeWithOptions(request, runtime);
  }

  async getVpcEndpointServiceAttributeWithOptions(request: GetVpcEndpointServiceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetVpcEndpointServiceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetVpcEndpointServiceAttributeResponse>(await this.callApi(params, req, runtime), new GetVpcEndpointServiceAttributeResponse({}));
  }

  async getVpcEndpointServiceAttribute(request: GetVpcEndpointServiceAttributeRequest): Promise<GetVpcEndpointServiceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVpcEndpointServiceAttributeWithOptions(request, runtime);
  }

  async listVpcEndpointConnectionsWithOptions(request: ListVpcEndpointConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointConnectionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionId)) {
      query["ConnectionId"] = request.connectionId;
    }

    if (!Util.isUnset(request.connectionStatus)) {
      query["ConnectionStatus"] = request.connectionStatus;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.endpointOwnerId)) {
      query["EndpointOwnerId"] = request.endpointOwnerId;
    }

    if (!Util.isUnset(request.eniId)) {
      query["EniId"] = request.eniId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replacedResourceId)) {
      query["ReplacedResourceId"] = request.replacedResourceId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListVpcEndpointConnectionsResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointConnectionsResponse({}));
  }

  async listVpcEndpointConnections(request: ListVpcEndpointConnectionsRequest): Promise<ListVpcEndpointConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointConnectionsWithOptions(request, runtime);
  }

  async listVpcEndpointSecurityGroupsWithOptions(request: ListVpcEndpointSecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointSecurityGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListVpcEndpointSecurityGroupsResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointSecurityGroupsResponse({}));
  }

  async listVpcEndpointSecurityGroups(request: ListVpcEndpointSecurityGroupsRequest): Promise<ListVpcEndpointSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointSecurityGroupsWithOptions(request, runtime);
  }

  async listVpcEndpointServiceResourcesWithOptions(request: ListVpcEndpointServiceResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointServiceResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListVpcEndpointServiceResourcesResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointServiceResourcesResponse({}));
  }

  async listVpcEndpointServiceResources(request: ListVpcEndpointServiceResourcesRequest): Promise<ListVpcEndpointServiceResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointServiceResourcesWithOptions(request, runtime);
  }

  async listVpcEndpointServiceUsersWithOptions(request: ListVpcEndpointServiceUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointServiceUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userListType)) {
      query["UserListType"] = request.userListType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListVpcEndpointServiceUsersResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointServiceUsersResponse({}));
  }

  async listVpcEndpointServiceUsers(request: ListVpcEndpointServiceUsersRequest): Promise<ListVpcEndpointServiceUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointServiceUsersWithOptions(request, runtime);
  }

  async listVpcEndpointServicesWithOptions(request: ListVpcEndpointServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointServicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoAcceptEnabled)) {
      query["AutoAcceptEnabled"] = request.autoAcceptEnabled;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.serviceBusinessStatus)) {
      query["ServiceBusinessStatus"] = request.serviceBusinessStatus;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceResourceType)) {
      query["ServiceResourceType"] = request.serviceResourceType;
    }

    if (!Util.isUnset(request.serviceStatus)) {
      query["ServiceStatus"] = request.serviceStatus;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.zoneAffinityEnabled)) {
      query["ZoneAffinityEnabled"] = request.zoneAffinityEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListVpcEndpointServicesResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointServicesResponse({}));
  }

  async listVpcEndpointServices(request: ListVpcEndpointServicesRequest): Promise<ListVpcEndpointServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointServicesWithOptions(request, runtime);
  }

  async listVpcEndpointServicesByEndUserWithOptions(request: ListVpcEndpointServicesByEndUserRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointServicesByEndUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListVpcEndpointServicesByEndUserResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointServicesByEndUserResponse({}));
  }

  async listVpcEndpointServicesByEndUser(request: ListVpcEndpointServicesByEndUserRequest): Promise<ListVpcEndpointServicesByEndUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointServicesByEndUserWithOptions(request, runtime);
  }

  async listVpcEndpointZonesWithOptions(request: ListVpcEndpointZonesRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListVpcEndpointZonesResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointZonesResponse({}));
  }

  async listVpcEndpointZones(request: ListVpcEndpointZonesRequest): Promise<ListVpcEndpointZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointZonesWithOptions(request, runtime);
  }

  async listVpcEndpointsWithOptions(request: ListVpcEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionStatus)) {
      query["ConnectionStatus"] = request.connectionStatus;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.endpointName)) {
      query["EndpointName"] = request.endpointName;
    }

    if (!Util.isUnset(request.endpointStatus)) {
      query["EndpointStatus"] = request.endpointStatus;
    }

    if (!Util.isUnset(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListVpcEndpointsResponse>(await this.callApi(params, req, runtime), new ListVpcEndpointsResponse({}));
  }

  async listVpcEndpoints(request: ListVpcEndpointsRequest): Promise<ListVpcEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointsWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request NotifyResourceAddressFamilyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return NotifyResourceAddressFamilyResponse
   */
  async notifyResourceAddressFamilyWithOptions(request: NotifyResourceAddressFamilyRequest, runtime: $Util.RuntimeOptions): Promise<NotifyResourceAddressFamilyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressFamily)) {
      query["AddressFamily"] = request.addressFamily;
    }

    if (!Util.isUnset(request.ipv6Address)) {
      query["Ipv6Address"] = request.ipv6Address;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "NotifyResourceAddressFamily",
      version: "2020-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<NotifyResourceAddressFamilyResponse>(await this.callApi(params, req, runtime), new NotifyResourceAddressFamilyResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request NotifyResourceAddressFamilyRequest
    * @return NotifyResourceAddressFamilyResponse
   */
  async notifyResourceAddressFamily(request: NotifyResourceAddressFamilyRequest): Promise<NotifyResourceAddressFamilyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.notifyResourceAddressFamilyWithOptions(request, runtime);
  }

  async openPrivateLinkServiceWithOptions(request: OpenPrivateLinkServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenPrivateLinkServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<OpenPrivateLinkServiceResponse>(await this.callApi(params, req, runtime), new OpenPrivateLinkServiceResponse({}));
  }

  async openPrivateLinkService(request: OpenPrivateLinkServiceRequest): Promise<OpenPrivateLinkServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openPrivateLinkServiceWithOptions(request, runtime);
  }

  /**
    * You cannot repeatedly call the **RemoveUserFromVpcEndpointService** operation to remove the ID of an Alibaba Cloud account from the whitelist of an endpoint service within a specified period of time.
    *
    * @param request RemoveUserFromVpcEndpointServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveUserFromVpcEndpointServiceResponse
   */
  async removeUserFromVpcEndpointServiceWithOptions(request: RemoveUserFromVpcEndpointServiceRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserFromVpcEndpointServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.userARN)) {
      query["UserARN"] = request.userARN;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RemoveUserFromVpcEndpointServiceResponse>(await this.callApi(params, req, runtime), new RemoveUserFromVpcEndpointServiceResponse({}));
  }

  /**
    * You cannot repeatedly call the **RemoveUserFromVpcEndpointService** operation to remove the ID of an Alibaba Cloud account from the whitelist of an endpoint service within a specified period of time.
    *
    * @param request RemoveUserFromVpcEndpointServiceRequest
    * @return RemoveUserFromVpcEndpointServiceResponse
   */
  async removeUserFromVpcEndpointService(request: RemoveUserFromVpcEndpointServiceRequest): Promise<RemoveUserFromVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromVpcEndpointServiceWithOptions(request, runtime);
  }

  /**
    * *   **RemoveZoneFromVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](~~183560~~) operation to check whether the zone of the endpoint is deleted.
    *     *   If the zone of the endpoint is in the **Deleting** state, the zone is being deleted.
    *     *   If the zone cannot be queried, the zone is deleted.
    * *   You cannot repeatedly call the **RemoveZoneFromVpcEndpoint** operation to delete a zone of an endpoint within a specified period of time.
    *
    * @param request RemoveZoneFromVpcEndpointRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveZoneFromVpcEndpointResponse
   */
  async removeZoneFromVpcEndpointWithOptions(request: RemoveZoneFromVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<RemoveZoneFromVpcEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RemoveZoneFromVpcEndpointResponse>(await this.callApi(params, req, runtime), new RemoveZoneFromVpcEndpointResponse({}));
  }

  /**
    * *   **RemoveZoneFromVpcEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListVpcEndpointZones](~~183560~~) operation to check whether the zone of the endpoint is deleted.
    *     *   If the zone of the endpoint is in the **Deleting** state, the zone is being deleted.
    *     *   If the zone cannot be queried, the zone is deleted.
    * *   You cannot repeatedly call the **RemoveZoneFromVpcEndpoint** operation to delete a zone of an endpoint within a specified period of time.
    *
    * @param request RemoveZoneFromVpcEndpointRequest
    * @return RemoveZoneFromVpcEndpointResponse
   */
  async removeZoneFromVpcEndpoint(request: RemoveZoneFromVpcEndpointRequest): Promise<RemoveZoneFromVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeZoneFromVpcEndpointWithOptions(request, runtime);
  }

  /**
    * > You can add up to 20 tags to an instance. Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number is reached, an error message is returned.
    *
    * @param request TagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
    * > You can add up to 20 tags to an instance. Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number is reached, an error message is returned.
    *
    * @param request TagResourcesRequest
    * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
    * You cannot repeatedly call the **UpdateVpcEndpointAttribute** operation to modify the attributes of an endpoint that belongs to an Alibaba Cloud account within a specified period of time.
    *
    * @param request UpdateVpcEndpointAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateVpcEndpointAttributeResponse
   */
  async updateVpcEndpointAttributeWithOptions(request: UpdateVpcEndpointAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVpcEndpointAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointDescription)) {
      query["EndpointDescription"] = request.endpointDescription;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.endpointName)) {
      query["EndpointName"] = request.endpointName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateVpcEndpointAttributeResponse>(await this.callApi(params, req, runtime), new UpdateVpcEndpointAttributeResponse({}));
  }

  /**
    * You cannot repeatedly call the **UpdateVpcEndpointAttribute** operation to modify the attributes of an endpoint that belongs to an Alibaba Cloud account within a specified period of time.
    *
    * @param request UpdateVpcEndpointAttributeRequest
    * @return UpdateVpcEndpointAttributeResponse
   */
  async updateVpcEndpointAttribute(request: UpdateVpcEndpointAttributeRequest): Promise<UpdateVpcEndpointAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpcEndpointAttributeWithOptions(request, runtime);
  }

  /**
    * The ID of the endpoint service.
    *
    * @param request UpdateVpcEndpointConnectionAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateVpcEndpointConnectionAttributeResponse
   */
  async updateVpcEndpointConnectionAttributeWithOptions(request: UpdateVpcEndpointConnectionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVpcEndpointConnectionAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateVpcEndpointConnectionAttributeResponse>(await this.callApi(params, req, runtime), new UpdateVpcEndpointConnectionAttributeResponse({}));
  }

  /**
    * The ID of the endpoint service.
    *
    * @param request UpdateVpcEndpointConnectionAttributeRequest
    * @return UpdateVpcEndpointConnectionAttributeResponse
   */
  async updateVpcEndpointConnectionAttribute(request: UpdateVpcEndpointConnectionAttributeRequest): Promise<UpdateVpcEndpointConnectionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpcEndpointConnectionAttributeWithOptions(request, runtime);
  }

  /**
    * You cannot repeatedly call the **UpdateVpcEndpointServiceAttribute** operation to modify the attributes of an endpoint service that belongs to an Alibaba Cloud account within a specified period of time.
    *
    * @param request UpdateVpcEndpointServiceAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateVpcEndpointServiceAttributeResponse
   */
  async updateVpcEndpointServiceAttributeWithOptions(request: UpdateVpcEndpointServiceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVpcEndpointServiceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoAcceptEnabled)) {
      query["AutoAcceptEnabled"] = request.autoAcceptEnabled;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectBandwidth)) {
      query["ConnectBandwidth"] = request.connectBandwidth;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceDescription)) {
      query["ServiceDescription"] = request.serviceDescription;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceSupportIPv6)) {
      query["ServiceSupportIPv6"] = request.serviceSupportIPv6;
    }

    if (!Util.isUnset(request.zoneAffinityEnabled)) {
      query["ZoneAffinityEnabled"] = request.zoneAffinityEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateVpcEndpointServiceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateVpcEndpointServiceAttributeResponse({}));
  }

  /**
    * You cannot repeatedly call the **UpdateVpcEndpointServiceAttribute** operation to modify the attributes of an endpoint service that belongs to an Alibaba Cloud account within a specified period of time.
    *
    * @param request UpdateVpcEndpointServiceAttributeRequest
    * @return UpdateVpcEndpointServiceAttributeResponse
   */
  async updateVpcEndpointServiceAttribute(request: UpdateVpcEndpointServiceAttributeRequest): Promise<UpdateVpcEndpointServiceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpcEndpointServiceAttributeWithOptions(request, runtime);
  }

  /**
    * You cannot repeatedly call the **UpdateVpcEndpointServiceResourceAttribute** operation to modify the attributes of a service resource that is added to an endpoint service within a specified period of time.
    *
    * @param request UpdateVpcEndpointServiceResourceAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateVpcEndpointServiceResourceAttributeResponse
   */
  async updateVpcEndpointServiceResourceAttributeWithOptions(request: UpdateVpcEndpointServiceResourceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVpcEndpointServiceResourceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoAllocatedEnabled)) {
      query["AutoAllocatedEnabled"] = request.autoAllocatedEnabled;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateVpcEndpointServiceResourceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateVpcEndpointServiceResourceAttributeResponse({}));
  }

  /**
    * You cannot repeatedly call the **UpdateVpcEndpointServiceResourceAttribute** operation to modify the attributes of a service resource that is added to an endpoint service within a specified period of time.
    *
    * @param request UpdateVpcEndpointServiceResourceAttributeRequest
    * @return UpdateVpcEndpointServiceResourceAttributeResponse
   */
  async updateVpcEndpointServiceResourceAttribute(request: UpdateVpcEndpointServiceResourceAttributeRequest): Promise<UpdateVpcEndpointServiceResourceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpcEndpointServiceResourceAttributeWithOptions(request, runtime);
  }

  /**
    * ### Prerequisites
    * By default, the feature of modifying a service resource of a zone to which an endpoint connection belongs is unavailable. To use this feature, log on to the [Quota Center console](https://quotas.console.aliyun.com/white-list-products/privatelink/quotas). Click Whitelist Quotas in the left-side navigation pane and click PrivateLink in the Networking section. On the page that appears, search for `privatelink_whitelist/svc_res_mgt_uat` and click Apply in the Actions column.
    * ### Usage notes
    * *   If the endpoint connection is in the **Disconnected** state, you can manually allocate the service resource in the zone.
    * *   If the endpoint connection is in the **Connected** state, you can manually migrate the service resource in the zone. In this case, the connection might be interrupted.
    * *   **UpdateVpcEndpointZoneConnectionResourceAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](~~469330~~) operation to check whether the service resource is modified.
    *     *   If the endpoint service is in the **Pending** state, the service resource is being modified.
    *     *   If the endpoint service is in the **Active** state, the service resource is modified.
    * *   You cannot repeatedly call the **UpdateVpcEndpointZoneConnectionResourceAttribute** operation to modify a service resource in the zone to which an endpoint connection belongs within a specified period of time.
    *
    * @param request UpdateVpcEndpointZoneConnectionResourceAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateVpcEndpointZoneConnectionResourceAttributeResponse
   */
  async updateVpcEndpointZoneConnectionResourceAttributeWithOptions(request: UpdateVpcEndpointZoneConnectionResourceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVpcEndpointZoneConnectionResourceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceAllocateMode)) {
      query["ResourceAllocateMode"] = request.resourceAllocateMode;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceReplaceMode)) {
      query["ResourceReplaceMode"] = request.resourceReplaceMode;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateVpcEndpointZoneConnectionResourceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateVpcEndpointZoneConnectionResourceAttributeResponse({}));
  }

  /**
    * ### Prerequisites
    * By default, the feature of modifying a service resource of a zone to which an endpoint connection belongs is unavailable. To use this feature, log on to the [Quota Center console](https://quotas.console.aliyun.com/white-list-products/privatelink/quotas). Click Whitelist Quotas in the left-side navigation pane and click PrivateLink in the Networking section. On the page that appears, search for `privatelink_whitelist/svc_res_mgt_uat` and click Apply in the Actions column.
    * ### Usage notes
    * *   If the endpoint connection is in the **Disconnected** state, you can manually allocate the service resource in the zone.
    * *   If the endpoint connection is in the **Connected** state, you can manually migrate the service resource in the zone. In this case, the connection might be interrupted.
    * *   **UpdateVpcEndpointZoneConnectionResourceAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcEndpointServiceAttribute](~~469330~~) operation to check whether the service resource is modified.
    *     *   If the endpoint service is in the **Pending** state, the service resource is being modified.
    *     *   If the endpoint service is in the **Active** state, the service resource is modified.
    * *   You cannot repeatedly call the **UpdateVpcEndpointZoneConnectionResourceAttribute** operation to modify a service resource in the zone to which an endpoint connection belongs within a specified period of time.
    *
    * @param request UpdateVpcEndpointZoneConnectionResourceAttributeRequest
    * @return UpdateVpcEndpointZoneConnectionResourceAttributeResponse
   */
  async updateVpcEndpointZoneConnectionResourceAttribute(request: UpdateVpcEndpointZoneConnectionResourceAttributeRequest): Promise<UpdateVpcEndpointZoneConnectionResourceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpcEndpointZoneConnectionResourceAttributeWithOptions(request, runtime);
  }

}
