// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
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

export class CreateVpcEndpointRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointDescription?: string;
  endpointName?: string;
  regionId?: string;
  securityGroupId?: string[];
  serviceId?: string;
  serviceName?: string;
  vpcId?: string;
  zone?: CreateVpcEndpointRequestZone[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointDescription: 'EndpointDescription',
      endpointName: 'EndpointName',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      vpcId: 'VpcId',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointDescription: 'string',
      endpointName: 'string',
      regionId: 'string',
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
      serviceId: 'string',
      serviceName: 'string',
      vpcId: 'string',
      zone: { 'type': 'array', 'itemType': CreateVpcEndpointRequestZone },
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

export class CreateVpcEndpointServiceRequest extends $tea.Model {
  autoAcceptEnabled?: boolean;
  clientToken?: string;
  dryRun?: boolean;
  payer?: string;
  regionId?: string;
  resource?: CreateVpcEndpointServiceRequestResource[];
  serviceDescription?: string;
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
  payer?: string;
  regionId?: string;
  requestId?: string;
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
      payer: 'Payer',
      regionId: 'RegionId',
      requestId: 'RequestId',
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
      payer: 'string',
      regionId: 'string',
      requestId: 'string',
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
  serviceStatus?: string;
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
      serviceStatus: 'ServiceStatus',
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
      serviceStatus: 'string',
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

export class ListVpcEndpointConnectionsRequest extends $tea.Model {
  connectionStatus?: string;
  endpointId?: string;
  endpointOwnerId?: number;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      endpointId: 'EndpointId',
      endpointOwnerId: 'EndpointOwnerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      endpointId: 'string',
      endpointOwnerId: 'number',
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

export class ListVpcEndpointConnectionsResponseBody extends $tea.Model {
  connections?: ListVpcEndpointConnectionsResponseBodyConnections[];
  maxResults?: string;
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
      maxResults: 'string',
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
  maxResults?: string;
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
      maxResults: 'string',
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
  maxResults?: string;
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
      maxResults: 'string',
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
  maxResults?: string;
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
      maxResults: 'string',
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
  autoAcceptEnabled?: boolean;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  serviceBusinessStatus?: string;
  serviceId?: string;
  serviceName?: string;
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
      serviceStatus: 'string',
      zoneAffinityEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesResponseBody extends $tea.Model {
  maxResults?: string;
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
      maxResults: 'string',
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

export class ListVpcEndpointServicesByEndUserRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  serviceId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserResponseBody extends $tea.Model {
  maxResults?: string;
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
      maxResults: 'string',
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
  maxResults?: string;
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
      maxResults: 'string',
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

export class ListVpcEndpointsRequest extends $tea.Model {
  connectionStatus?: string;
  endpointId?: string;
  endpointName?: string;
  endpointStatus?: string;
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
  maxResults?: string;
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
      maxResults: 'string',
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
  resourceId?: string;
  vSwitchId?: string;
  zoneDomain?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      resourceId: 'ResourceId',
      vSwitchId: 'VSwitchId',
      zoneDomain: 'ZoneDomain',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      resourceId: 'string',
      vSwitchId: 'string',
      zoneDomain: 'string',
      zoneId: 'string',
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
  ip?: string;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      regionId: 'string',
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
  serviceStatus?: string;
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
      serviceStatus: 'ServiceStatus',
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
      serviceStatus: 'string',
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
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      payer: 'Payer',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payer: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddUserToVpcEndpointServiceResponse>(await this.doRPCRequest("AddUserToVpcEndpointService", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddUserToVpcEndpointServiceResponse({}));
  }

  async addUserToVpcEndpointService(request: AddUserToVpcEndpointServiceRequest): Promise<AddUserToVpcEndpointServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToVpcEndpointServiceWithOptions(request, runtime);
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

  async checkProductOpenWithOptions(runtime: $Util.RuntimeOptions): Promise<CheckProductOpenResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<CheckProductOpenResponse>(await this.doRPCRequest("CheckProductOpen", "2020-04-15", "HTTPS", "POST", "AK", "json", req, runtime), new CheckProductOpenResponse({}));
  }

  async checkProductOpen(): Promise<CheckProductOpenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkProductOpenWithOptions(runtime);
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

}
