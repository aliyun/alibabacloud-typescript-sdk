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
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      serviceId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      serviceId: 'ServiceId',
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

export class CreateVpcEndpointRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointDescription?: string;
  endpointName?: string;
  endpointType?: string;
  protectedEnabled?: boolean;
  regionId?: string;
  securityGroupId?: string[];
  serviceId?: string;
  serviceName?: string;
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
      securityGroupId: 'SecurityGroupId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
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
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
      serviceId: 'string',
      serviceName: 'string',
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
  serviceDescription?: string;
  serviceResourceType?: string;
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoAcceptEnabled: 'AutoAcceptEnabled',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      payer: 'Payer',
      regionId: 'RegionId',
      resource: 'Resource',
      serviceDescription: 'ServiceDescription',
      serviceResourceType: 'ServiceResourceType',
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
      serviceDescription: 'string',
      serviceResourceType: 'string',
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
  serviceBusinessStatus?: string;
  serviceDescription?: string;
  serviceDomain?: string;
  serviceId?: string;
  serviceName?: string;
  serviceStatus?: string;
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoAcceptEnabled: 'AutoAcceptEnabled',
      createTime: 'CreateTime',
      requestId: 'RequestId',
      serviceBusinessStatus: 'ServiceBusinessStatus',
      serviceDescription: 'ServiceDescription',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceStatus: 'ServiceStatus',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAcceptEnabled: 'boolean',
      createTime: 'string',
      requestId: 'string',
      serviceBusinessStatus: 'string',
      serviceDescription: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      serviceId: 'ServiceId',
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
  serviceBusinessStatus?: string;
  serviceDescription?: string;
  serviceDomain?: string;
  serviceId?: string;
  serviceName?: string;
  serviceResourceType?: string;
  serviceStatus?: string;
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
      serviceBusinessStatus: 'ServiceBusinessStatus',
      serviceDescription: 'ServiceDescription',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceResourceType: 'ServiceResourceType',
      serviceStatus: 'ServiceStatus',
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
      serviceBusinessStatus: 'string',
      serviceDescription: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceResourceType: 'string',
      serviceStatus: 'string',
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
  connectionStatus?: string;
  endpointId?: string;
  endpointOwnerId?: number;
  eniId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  replacedResourceId?: string;
  resourceId?: string;
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
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListVpcEndpointConnectionsResponseBodyConnections },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      userId: 'number',
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
  users?: ListVpcEndpointServiceUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
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
  serviceBusinessStatus?: string;
  serviceId?: string;
  serviceName?: string;
  serviceResourceType?: string;
  serviceStatus?: string;
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoAcceptEnabled: 'AutoAcceptEnabled',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceBusinessStatus: 'ServiceBusinessStatus',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceResourceType: 'ServiceResourceType',
      serviceStatus: 'ServiceStatus',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAcceptEnabled: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceBusinessStatus: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceResourceType: 'string',
      serviceStatus: 'string',
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
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListVpcEndpointServicesResponseBodyServices },
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
  serviceId?: string;
  serviceName?: string;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceType: 'string',
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
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListVpcEndpointServicesByEndUserResponseBodyServices },
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
  serviceName?: string;
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
      serviceName: 'ServiceName',
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
      serviceName: 'string',
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
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': ListVpcEndpointsResponseBodyEndpoints },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
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
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      serviceId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      autoAllocatedEnabled: 'AutoAllocatedEnabled',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      serviceId: 'ServiceId',
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
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
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
  connectBandwidth?: number;
  createTime?: string;
  maxBandwidth?: number;
  minBandwidth?: number;
  payer?: string;
  regionId?: string;
  serviceBusinessStatus?: string;
  serviceDescription?: string;
  serviceDomain?: string;
  serviceId?: string;
  serviceName?: string;
  serviceResourceType?: string;
  serviceStatus?: string;
  serviceType?: string;
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
      serviceBusinessStatus: 'ServiceBusinessStatus',
      serviceDescription: 'ServiceDescription',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceResourceType: 'ServiceResourceType',
      serviceStatus: 'ServiceStatus',
      serviceType: 'ServiceType',
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
      serviceBusinessStatus: 'string',
      serviceDescription: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceResourceType: 'string',
      serviceStatus: 'string',
      serviceType: 'string',
      zoneAffinityEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserResponseBodyServices extends $tea.Model {
  payer?: string;
  serviceDomain?: string;
  serviceId?: string;
  serviceName?: string;
  serviceType?: string;
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      payer: 'Payer',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payer: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceType: 'string',
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
      zoneStatus: 'string',
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
  resourceOwner?: boolean;
  serviceId?: string;
  serviceName?: string;
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
      resourceOwner: 'ResourceOwner',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
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
      resourceOwner: 'boolean',
      serviceId: 'string',
      serviceName: 'string',
      vpcId: 'string',
      zoneAffinityEnabled: 'boolean',
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

  async addUserToVpcEndpointService(request: AddUserToVpcEndpointServiceRequest): Promise<AddUserToVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToVpcEndpointServiceWithOptions(request, runtime);
  }

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

  async addZoneToVpcEndpoint(request: AddZoneToVpcEndpointRequest): Promise<AddZoneToVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addZoneToVpcEndpointWithOptions(request, runtime);
  }

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

  async attachResourceToVpcEndpointService(request: AttachResourceToVpcEndpointServiceRequest): Promise<AttachResourceToVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachResourceToVpcEndpointServiceWithOptions(request, runtime);
  }

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

  async attachSecurityGroupToVpcEndpoint(request: AttachSecurityGroupToVpcEndpointRequest): Promise<AttachSecurityGroupToVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachSecurityGroupToVpcEndpointWithOptions(request, runtime);
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

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
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

  async createVpcEndpoint(request: CreateVpcEndpointRequest): Promise<CreateVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcEndpointWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.serviceDescription)) {
      query["ServiceDescription"] = request.serviceDescription;
    }

    if (!Util.isUnset(request.serviceResourceType)) {
      query["ServiceResourceType"] = request.serviceResourceType;
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

  async createVpcEndpointService(request: CreateVpcEndpointServiceRequest): Promise<CreateVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcEndpointServiceWithOptions(request, runtime);
  }

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

  async deleteVpcEndpoint(request: DeleteVpcEndpointRequest): Promise<DeleteVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcEndpointWithOptions(request, runtime);
  }

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

  async detachSecurityGroupFromVpcEndpoint(request: DetachSecurityGroupFromVpcEndpointRequest): Promise<DetachSecurityGroupFromVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachSecurityGroupFromVpcEndpointWithOptions(request, runtime);
  }

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

  async disableVpcEndpointConnection(request: DisableVpcEndpointConnectionRequest): Promise<DisableVpcEndpointConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableVpcEndpointConnectionWithOptions(request, runtime);
  }

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

  async disableVpcEndpointZoneConnection(request: DisableVpcEndpointZoneConnectionRequest): Promise<DisableVpcEndpointZoneConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableVpcEndpointZoneConnectionWithOptions(request, runtime);
  }

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

  async enableVpcEndpointConnection(request: EnableVpcEndpointConnectionRequest): Promise<EnableVpcEndpointConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableVpcEndpointConnectionWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
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

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
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

  async removeUserFromVpcEndpointService(request: RemoveUserFromVpcEndpointServiceRequest): Promise<RemoveUserFromVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromVpcEndpointServiceWithOptions(request, runtime);
  }

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

  async removeZoneFromVpcEndpoint(request: RemoveZoneFromVpcEndpointRequest): Promise<RemoveZoneFromVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeZoneFromVpcEndpointWithOptions(request, runtime);
  }

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

  async updateVpcEndpointAttribute(request: UpdateVpcEndpointAttributeRequest): Promise<UpdateVpcEndpointAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpcEndpointAttributeWithOptions(request, runtime);
  }

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

  async updateVpcEndpointConnectionAttribute(request: UpdateVpcEndpointConnectionAttributeRequest): Promise<UpdateVpcEndpointConnectionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpcEndpointConnectionAttributeWithOptions(request, runtime);
  }

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

  async updateVpcEndpointServiceAttribute(request: UpdateVpcEndpointServiceAttributeRequest): Promise<UpdateVpcEndpointServiceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpcEndpointServiceAttributeWithOptions(request, runtime);
  }

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

  async updateVpcEndpointServiceResourceAttribute(request: UpdateVpcEndpointServiceResourceAttributeRequest): Promise<UpdateVpcEndpointServiceResourceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpcEndpointServiceResourceAttributeWithOptions(request, runtime);
  }

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

  async updateVpcEndpointZoneConnectionResourceAttribute(request: UpdateVpcEndpointZoneConnectionResourceAttributeRequest): Promise<UpdateVpcEndpointZoneConnectionResourceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVpcEndpointZoneConnectionResourceAttributeWithOptions(request, runtime);
  }

}
