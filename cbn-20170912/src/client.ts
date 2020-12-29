// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActiveFlowLogRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  flowLogId?: string;
  cenId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
      cenId: 'CenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      flowLogId: 'string',
      cenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveFlowLogResponseBody extends $tea.Model {
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ActiveFlowLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ActiveFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateCenBandwidthPackageRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  cenBandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      cenBandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateCenBandwidthPackageResponseBody extends $tea.Model {
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

export class AssociateCenBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateCenBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateCenBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCenChildInstanceRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  childInstanceId?: string;
  childInstanceType?: string;
  childInstanceRegionId?: string;
  childInstanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceType: 'ChildInstanceType',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceType: 'string',
      childInstanceRegionId: 'string',
      childInstanceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCenChildInstanceResponseBody extends $tea.Model {
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

export class AttachCenChildInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachCenChildInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachCenChildInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  name?: string;
  description?: string;
  protectionLevel?: string;
  ipv6Level?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      name: 'Name',
      description: 'Description',
      protectionLevel: 'ProtectionLevel',
      ipv6Level: 'Ipv6Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      name: 'string',
      description: 'string',
      protectionLevel: 'string',
      ipv6Level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenResponseBody extends $tea.Model {
  requestId?: string;
  cenId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cenId: 'CenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenBandwidthPackageRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  name?: string;
  description?: string;
  bandwidth?: number;
  geographicRegionAId?: string;
  geographicRegionBId?: string;
  bandwidthPackageChargeType?: string;
  period?: number;
  pricingCycle?: string;
  autoPay?: boolean;
  autoRenew?: boolean;
  autoRenewDuration?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      name: 'Name',
      description: 'Description',
      bandwidth: 'Bandwidth',
      geographicRegionAId: 'GeographicRegionAId',
      geographicRegionBId: 'GeographicRegionBId',
      bandwidthPackageChargeType: 'BandwidthPackageChargeType',
      period: 'Period',
      pricingCycle: 'PricingCycle',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      name: 'string',
      description: 'string',
      bandwidth: 'number',
      geographicRegionAId: 'string',
      geographicRegionBId: 'string',
      bandwidthPackageChargeType: 'string',
      period: 'number',
      pricingCycle: 'string',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenBandwidthPackageResponseBody extends $tea.Model {
  requestId?: string;
  cenBandwidthPackageId?: string;
  cenBandwidthPackageOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      cenBandwidthPackageOrderId: 'CenBandwidthPackageOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cenBandwidthPackageId: 'string',
      cenBandwidthPackageOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCenBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCenBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenChildInstanceRouteEntryToCenRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  childInstanceId?: string;
  childInstanceType?: string;
  childInstanceRegionId?: string;
  childInstanceAliUid?: number;
  routeTableId?: string;
  destinationCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceType: 'ChildInstanceType',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceAliUid: 'ChildInstanceAliUid',
      routeTableId: 'RouteTableId',
      destinationCidrBlock: 'DestinationCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceType: 'string',
      childInstanceRegionId: 'string',
      childInstanceAliUid: 'number',
      routeTableId: 'string',
      destinationCidrBlock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenChildInstanceRouteEntryToCenResponseBody extends $tea.Model {
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

export class CreateCenChildInstanceRouteEntryToCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCenChildInstanceRouteEntryToCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCenChildInstanceRouteEntryToCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenRouteMapRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  cenRegionId?: string;
  transmitDirection?: string;
  description?: string;
  priority?: number;
  mapResult?: string;
  nextPriority?: number;
  cidrMatchMode?: string;
  asPathMatchMode?: string;
  communityMatchMode?: string;
  communityOperateMode?: string;
  preference?: number;
  sourceInstanceIdsReverseMatch?: boolean;
  destinationInstanceIdsReverseMatch?: boolean;
  gatewayZoneId?: string;
  systemPolicy?: boolean;
  matchAddressType?: string;
  sourceInstanceIds?: string[];
  destinationInstanceIds?: string[];
  sourceRouteTableIds?: string[];
  destinationRouteTableIds?: string[];
  sourceRegionIds?: string[];
  sourceChildInstanceTypes?: string[];
  destinationChildInstanceTypes?: string[];
  destinationCidrBlocks?: string[];
  routeTypes?: string[];
  matchAsns?: number[];
  matchCommunitySet?: string[];
  operateCommunitySet?: string[];
  prependAsPath?: number[];
  destinationRegionIds?: string[];
  sourceZoneIds?: string[];
  originalRouteTableIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      transmitDirection: 'TransmitDirection',
      description: 'Description',
      priority: 'Priority',
      mapResult: 'MapResult',
      nextPriority: 'NextPriority',
      cidrMatchMode: 'CidrMatchMode',
      asPathMatchMode: 'AsPathMatchMode',
      communityMatchMode: 'CommunityMatchMode',
      communityOperateMode: 'CommunityOperateMode',
      preference: 'Preference',
      sourceInstanceIdsReverseMatch: 'SourceInstanceIdsReverseMatch',
      destinationInstanceIdsReverseMatch: 'DestinationInstanceIdsReverseMatch',
      gatewayZoneId: 'GatewayZoneId',
      systemPolicy: 'SystemPolicy',
      matchAddressType: 'MatchAddressType',
      sourceInstanceIds: 'SourceInstanceIds',
      destinationInstanceIds: 'DestinationInstanceIds',
      sourceRouteTableIds: 'SourceRouteTableIds',
      destinationRouteTableIds: 'DestinationRouteTableIds',
      sourceRegionIds: 'SourceRegionIds',
      sourceChildInstanceTypes: 'SourceChildInstanceTypes',
      destinationChildInstanceTypes: 'DestinationChildInstanceTypes',
      destinationCidrBlocks: 'DestinationCidrBlocks',
      routeTypes: 'RouteTypes',
      matchAsns: 'MatchAsns',
      matchCommunitySet: 'MatchCommunitySet',
      operateCommunitySet: 'OperateCommunitySet',
      prependAsPath: 'PrependAsPath',
      destinationRegionIds: 'DestinationRegionIds',
      sourceZoneIds: 'SourceZoneIds',
      originalRouteTableIds: 'OriginalRouteTableIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      cenRegionId: 'string',
      transmitDirection: 'string',
      description: 'string',
      priority: 'number',
      mapResult: 'string',
      nextPriority: 'number',
      cidrMatchMode: 'string',
      asPathMatchMode: 'string',
      communityMatchMode: 'string',
      communityOperateMode: 'string',
      preference: 'number',
      sourceInstanceIdsReverseMatch: 'boolean',
      destinationInstanceIdsReverseMatch: 'boolean',
      gatewayZoneId: 'string',
      systemPolicy: 'boolean',
      matchAddressType: 'string',
      sourceInstanceIds: { 'type': 'array', 'itemType': 'string' },
      destinationInstanceIds: { 'type': 'array', 'itemType': 'string' },
      sourceRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      destinationRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      sourceRegionIds: { 'type': 'array', 'itemType': 'string' },
      sourceChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      destinationChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      destinationCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      routeTypes: { 'type': 'array', 'itemType': 'string' },
      matchAsns: { 'type': 'array', 'itemType': 'number' },
      matchCommunitySet: { 'type': 'array', 'itemType': 'string' },
      operateCommunitySet: { 'type': 'array', 'itemType': 'string' },
      prependAsPath: { 'type': 'array', 'itemType': 'number' },
      destinationRegionIds: { 'type': 'array', 'itemType': 'string' },
      sourceZoneIds: { 'type': 'array', 'itemType': 'string' },
      originalRouteTableIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenRouteMapResponseBody extends $tea.Model {
  requestId?: string;
  routeMapId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeMapId: 'RouteMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeMapId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenRouteMapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCenRouteMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCenRouteMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowlogRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  flowLogName?: string;
  description?: string;
  cenId?: string;
  projectName?: string;
  logStoreName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      flowLogName: 'FlowLogName',
      description: 'Description',
      cenId: 'CenId',
      projectName: 'ProjectName',
      logStoreName: 'LogStoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      flowLogName: 'string',
      description: 'string',
      cenId: 'string',
      projectName: 'string',
      logStoreName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowlogResponseBody extends $tea.Model {
  requestId?: string;
  flowLogId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowLogId: 'FlowLogId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowLogId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowlogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowlogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowlogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveFlowLogRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  flowLogId?: string;
  cenId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
      cenId: 'CenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      flowLogId: 'string',
      cenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveFlowLogResponseBody extends $tea.Model {
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeactiveFlowLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeactiveFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenResponseBody extends $tea.Model {
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

export class DeleteCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenBandwidthPackageRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenBandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenBandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenBandwidthPackageResponseBody extends $tea.Model {
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

export class DeleteCenBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCenBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCenBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenChildInstanceRouteEntryToCenRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  childInstanceId?: string;
  childInstanceType?: string;
  childInstanceRegionId?: string;
  childInstanceAliUid?: number;
  routeTableId?: string;
  destinationCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceType: 'ChildInstanceType',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceAliUid: 'ChildInstanceAliUid',
      routeTableId: 'RouteTableId',
      destinationCidrBlock: 'DestinationCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceType: 'string',
      childInstanceRegionId: 'string',
      childInstanceAliUid: 'number',
      routeTableId: 'string',
      destinationCidrBlock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenChildInstanceRouteEntryToCenResponseBody extends $tea.Model {
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

export class DeleteCenChildInstanceRouteEntryToCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCenChildInstanceRouteEntryToCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCenChildInstanceRouteEntryToCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenRouteMapRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  cenRegionId?: string;
  routeMapId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      routeMapId: 'RouteMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      cenRegionId: 'string',
      routeMapId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenRouteMapResponseBody extends $tea.Model {
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

export class DeleteCenRouteMapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCenRouteMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCenRouteMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowlogRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  flowLogId?: string;
  cenId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
      cenId: 'CenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      flowLogId: 'string',
      cenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowlogResponseBody extends $tea.Model {
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowlogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowlogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowlogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteServiceInCenRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  host?: string;
  hostRegionId?: string;
  accessRegionId?: string;
  hostVpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      host: 'Host',
      hostRegionId: 'HostRegionId',
      accessRegionId: 'AccessRegionId',
      hostVpcId: 'HostVpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      host: 'string',
      hostRegionId: 'string',
      accessRegionId: 'string',
      hostVpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteServiceInCenResponseBody extends $tea.Model {
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

export class DeleteRouteServiceInCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRouteServiceInCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRouteServiceInCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  childInstanceId?: string;
  childInstanceType?: string;
  childInstanceRegionId?: string;
  includeRouteTable?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceType: 'ChildInstanceType',
      childInstanceRegionId: 'ChildInstanceRegionId',
      includeRouteTable: 'IncludeRouteTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceType: 'string',
      childInstanceRegionId: 'string',
      includeRouteTable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeResponseBody extends $tea.Model {
  status?: string;
  childInstanceType?: string;
  requestId?: string;
  cenId?: string;
  childInstanceAttachTime?: string;
  childInstanceOwnerId?: number;
  childInstanceName?: string;
  childInstanceId?: string;
  childInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      childInstanceType: 'ChildInstanceType',
      requestId: 'RequestId',
      cenId: 'CenId',
      childInstanceAttachTime: 'ChildInstanceAttachTime',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceName: 'ChildInstanceName',
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      childInstanceType: 'string',
      requestId: 'string',
      cenId: 'string',
      childInstanceAttachTime: 'string',
      childInstanceOwnerId: 'number',
      childInstanceName: 'string',
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCenAttachedChildInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCenAttachedChildInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstancesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  cenId?: string;
  childInstanceType?: string;
  childInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      cenId: 'CenId',
      childInstanceType: 'ChildInstanceType',
      childInstanceRegionId: 'ChildInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      cenId: 'string',
      childInstanceType: 'string',
      childInstanceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstancesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  childInstances?: DescribeCenAttachedChildInstancesResponseBodyChildInstances[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      childInstances: 'ChildInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      childInstances: { 'type': 'array', 'itemType': DescribeCenAttachedChildInstancesResponseBodyChildInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCenAttachedChildInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCenAttachedChildInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesRequest extends $tea.Model {
  includeReservationData?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  isOrKey?: boolean;
  filter?: DescribeCenBandwidthPackagesRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      includeReservationData: 'IncludeReservationData',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      isOrKey: 'IsOrKey',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeReservationData: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      isOrKey: 'boolean',
      filter: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  cenBandwidthPackages?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      cenBandwidthPackages: 'CenBandwidthPackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      cenBandwidthPackages: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCenBandwidthPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCenBandwidthPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  childInstanceId?: string;
  childInstanceType?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  childInstanceRegionId?: string;
  childInstanceRouteTableId?: string;
  destinationCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceType: 'ChildInstanceType',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      destinationCidrBlock: 'DestinationCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceType: 'string',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      childInstanceRegionId: 'string',
      childInstanceRouteTableId: 'string',
      destinationCidrBlock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  cenRouteEntries?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntries[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      cenRouteEntries: 'CenRouteEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      cenRouteEntries: { 'type': 'array', 'itemType': DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCenChildInstanceRouteEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCenChildInstanceRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpanRemainingBandwidthRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  cenId?: string;
  geographicRegionAId?: string;
  geographicRegionBId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      cenId: 'CenId',
      geographicRegionAId: 'GeographicRegionAId',
      geographicRegionBId: 'GeographicRegionBId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      cenId: 'string',
      geographicRegionAId: 'string',
      geographicRegionBId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpanRemainingBandwidthResponseBody extends $tea.Model {
  requestId?: string;
  remainingBandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      remainingBandwidth: 'RemainingBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      remainingBandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpanRemainingBandwidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCenGeographicSpanRemainingBandwidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCenGeographicSpanRemainingBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpansRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  geographicSpanId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      geographicSpanId: 'GeographicSpanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      geographicSpanId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpansResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  geographicSpanModels?: DescribeCenGeographicSpansResponseBodyGeographicSpanModels[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      geographicSpanModels: 'GeographicSpanModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      geographicSpanModels: { 'type': 'array', 'itemType': DescribeCenGeographicSpansResponseBodyGeographicSpanModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpansResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCenGeographicSpansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCenGeographicSpansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenInterRegionBandwidthLimitsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  cenId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      cenId: 'CenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      cenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenInterRegionBandwidthLimitsResponseBody extends $tea.Model {
  cenInterRegionBandwidthLimits?: DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimits[];
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      cenInterRegionBandwidthLimits: 'CenInterRegionBandwidthLimits',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenInterRegionBandwidthLimits: { 'type': 'array', 'itemType': DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimits },
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenInterRegionBandwidthLimitsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCenInterRegionBandwidthLimitsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCenInterRegionBandwidthLimitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenPrivateZoneRoutesRequest extends $tea.Model {
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  cenId?: string;
  accessRegionId?: string;
  hostRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      cenId: 'CenId',
      accessRegionId: 'AccessRegionId',
      hostRegionId: 'HostRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      cenId: 'string',
      accessRegionId: 'string',
      hostRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenPrivateZoneRoutesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  privateZoneInfos?: DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfos[];
  pageNumber?: number;
  cenId?: string;
  privateZoneDnsServers?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      privateZoneInfos: 'PrivateZoneInfos',
      pageNumber: 'PageNumber',
      cenId: 'CenId',
      privateZoneDnsServers: 'PrivateZoneDnsServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      privateZoneInfos: { 'type': 'array', 'itemType': DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfos },
      pageNumber: 'number',
      cenId: 'string',
      privateZoneDnsServers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenPrivateZoneRoutesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCenPrivateZoneRoutesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCenPrivateZoneRoutesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  cenRegionId?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  destinationCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      destinationCidrBlock: 'DestinationCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      cenRegionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      destinationCidrBlock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  cenRouteEntries?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntries[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      cenRouteEntries: 'CenRouteEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      cenRouteEntries: { 'type': 'array', 'itemType': DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCenRegionDomainRouteEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCenRegionDomainRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  cenId?: string;
  routeMapId?: string;
  cenRegionId?: string;
  transmitDirection?: string;
  filter?: DescribeCenRouteMapsRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      cenId: 'CenId',
      routeMapId: 'RouteMapId',
      cenRegionId: 'CenRegionId',
      transmitDirection: 'TransmitDirection',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      cenId: 'string',
      routeMapId: 'string',
      cenRegionId: 'string',
      transmitDirection: 'string',
      filter: { 'type': 'array', 'itemType': DescribeCenRouteMapsRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  routeMaps?: DescribeCenRouteMapsResponseBodyRouteMaps[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      routeMaps: 'RouteMaps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      routeMaps: { 'type': 'array', 'itemType': DescribeCenRouteMapsResponseBodyRouteMaps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCenRouteMapsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCenRouteMapsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  filter?: DescribeCensRequestFilter[];
  tag?: DescribeCensRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filter: 'Filter',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      filter: { 'type': 'array', 'itemType': DescribeCensRequestFilter },
      tag: { 'type': 'array', 'itemType': DescribeCensRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  cens?: DescribeCensResponseBodyCens[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      cens: 'Cens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      cens: { 'type': 'array', 'itemType': DescribeCensResponseBodyCens },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCensResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCensResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenVbrHealthCheckRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  vbrInstanceRegionId?: string;
  vbrInstanceId?: string;
  vbrInstanceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      vbrInstanceRegionId: 'VbrInstanceRegionId',
      vbrInstanceId: 'VbrInstanceId',
      vbrInstanceOwnerId: 'VbrInstanceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      vbrInstanceRegionId: 'string',
      vbrInstanceId: 'string',
      vbrInstanceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenVbrHealthCheckResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  vbrHealthChecks?: DescribeCenVbrHealthCheckResponseBodyVbrHealthChecks[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      vbrHealthChecks: 'VbrHealthChecks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      vbrHealthChecks: { 'type': 'array', 'itemType': DescribeCenVbrHealthCheckResponseBodyVbrHealthChecks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenVbrHealthCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCenVbrHealthCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCenVbrHealthCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChildInstanceRegionsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  productType?: string;
  childInstanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      productType: 'ProductType',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      productType: 'string',
      childInstanceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChildInstanceRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeChildInstanceRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeChildInstanceRegionsResponseBodyRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChildInstanceRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeChildInstanceRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeChildInstanceRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowlogsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  flowLogName?: string;
  flowLogId?: string;
  description?: string;
  cenId?: string;
  projectName?: string;
  logStoreName?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      flowLogName: 'FlowLogName',
      flowLogId: 'FlowLogId',
      description: 'Description',
      cenId: 'CenId',
      projectName: 'ProjectName',
      logStoreName: 'LogStoreName',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      flowLogName: 'string',
      flowLogId: 'string',
      description: 'string',
      cenId: 'string',
      projectName: 'string',
      logStoreName: 'string',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowlogsResponseBody extends $tea.Model {
  totalCount?: string;
  flowLogs?: DescribeFlowlogsResponseBodyFlowLogs[];
  pageSize?: string;
  requestId?: string;
  pageNumber?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      flowLogs: 'FlowLogs',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      flowLogs: { 'type': 'array', 'itemType': DescribeFlowlogsResponseBodyFlowLogs },
      pageSize: 'string',
      requestId: 'string',
      pageNumber: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowlogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowlogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowlogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeographicRegionMembershipRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  geographicRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      geographicRegionId: 'GeographicRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      geographicRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeographicRegionMembershipResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  regionIds?: DescribeGeographicRegionMembershipResponseBodyRegionIds[];
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      regionIds: 'RegionIds',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      regionIds: { 'type': 'array', 'itemType': DescribeGeographicRegionMembershipResponseBodyRegionIds },
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeographicRegionMembershipResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGeographicRegionMembershipResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGeographicRegionMembershipResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  cenId?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      cenId: 'CenId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      cenId: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenResponseBody extends $tea.Model {
  requestId?: string;
  grantRules?: DescribeGrantRulesToCenResponseBodyGrantRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      grantRules: 'GrantRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      grantRules: { 'type': 'array', 'itemType': DescribeGrantRulesToCenResponseBodyGrantRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGrantRulesToCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGrantRulesToCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesRequest extends $tea.Model {
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  cenId?: string;
  childInstanceId?: string;
  childInstanceType?: string;
  childInstanceRegionId?: string;
  childInstanceRouteTableId?: string;
  destinationCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceType: 'ChildInstanceType',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      destinationCidrBlock: 'DestinationCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceType: 'string',
      childInstanceRegionId: 'string',
      childInstanceRouteTableId: 'string',
      destinationCidrBlock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  publishedRouteEntries?: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      publishedRouteEntries: 'PublishedRouteEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      publishedRouteEntries: { 'type': 'array', 'itemType': DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePublishedRouteEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePublishedRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteConflictRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  childInstanceId?: string;
  childInstanceType?: string;
  childInstanceRegionId?: string;
  childInstanceRouteTableId?: string;
  destinationCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      childInstanceId: 'ChildInstanceId',
      childInstanceType: 'ChildInstanceType',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      destinationCidrBlock: 'DestinationCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      childInstanceId: 'string',
      childInstanceType: 'string',
      childInstanceRegionId: 'string',
      childInstanceRouteTableId: 'string',
      destinationCidrBlock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteConflictResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  routeConflicts?: DescribeRouteConflictResponseBodyRouteConflicts[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      routeConflicts: 'RouteConflicts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      routeConflicts: { 'type': 'array', 'itemType': DescribeRouteConflictResponseBodyRouteConflicts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteConflictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRouteConflictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRouteConflictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteServicesInCenRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  cenId?: string;
  host?: string;
  hostRegionId?: string;
  accessRegionId?: string;
  hostVpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      cenId: 'CenId',
      host: 'Host',
      hostRegionId: 'HostRegionId',
      accessRegionId: 'AccessRegionId',
      hostVpcId: 'HostVpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      cenId: 'string',
      host: 'string',
      hostRegionId: 'string',
      accessRegionId: 'string',
      hostVpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteServicesInCenResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  routeServiceEntries?: DescribeRouteServicesInCenResponseBodyRouteServiceEntries[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      routeServiceEntries: 'RouteServiceEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      routeServiceEntries: { 'type': 'array', 'itemType': DescribeRouteServicesInCenResponseBodyRouteServiceEntries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteServicesInCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRouteServicesInCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRouteServicesInCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCenChildInstanceRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  childInstanceId?: string;
  childInstanceType?: string;
  childInstanceRegionId?: string;
  childInstanceOwnerId?: number;
  cenOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceType: 'ChildInstanceType',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      cenOwnerId: 'CenOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceType: 'string',
      childInstanceRegionId: 'string',
      childInstanceOwnerId: 'number',
      cenOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCenChildInstanceResponseBody extends $tea.Model {
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

export class DetachCenChildInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachCenChildInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachCenChildInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableCenVbrHealthCheckRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  vbrInstanceRegionId?: string;
  vbrInstanceId?: string;
  vbrInstanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      vbrInstanceRegionId: 'VbrInstanceRegionId',
      vbrInstanceId: 'VbrInstanceId',
      vbrInstanceOwnerId: 'VbrInstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      vbrInstanceRegionId: 'string',
      vbrInstanceId: 'string',
      vbrInstanceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableCenVbrHealthCheckResponseBody extends $tea.Model {
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

export class DisableCenVbrHealthCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableCenVbrHealthCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableCenVbrHealthCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCenVbrHealthCheckRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  vbrInstanceRegionId?: string;
  vbrInstanceId?: string;
  healthCheckSourceIp?: string;
  healthCheckTargetIp?: string;
  vbrInstanceOwnerId?: number;
  healthCheckInterval?: number;
  healthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      vbrInstanceRegionId: 'VbrInstanceRegionId',
      vbrInstanceId: 'VbrInstanceId',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      vbrInstanceOwnerId: 'VbrInstanceOwnerId',
      healthCheckInterval: 'HealthCheckInterval',
      healthyThreshold: 'HealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      vbrInstanceRegionId: 'string',
      vbrInstanceId: 'string',
      healthCheckSourceIp: 'string',
      healthCheckTargetIp: 'string',
      vbrInstanceOwnerId: 'number',
      healthCheckInterval: 'number',
      healthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCenVbrHealthCheckResponseBody extends $tea.Model {
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

export class EnableCenVbrHealthCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableCenVbrHealthCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableCenVbrHealthCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  nextToken?: string;
  pageSize?: number;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      nextToken: 'string',
      pageSize: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCenAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  name?: string;
  description?: string;
  protectionLevel?: string;
  ipv6Level?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      name: 'Name',
      description: 'Description',
      protectionLevel: 'ProtectionLevel',
      ipv6Level: 'Ipv6Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      name: 'string',
      description: 'string',
      protectionLevel: 'string',
      ipv6Level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCenAttributeResponseBody extends $tea.Model {
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

export class ModifyCenAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCenAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCenAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCenBandwidthPackageAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  name?: string;
  description?: string;
  cenBandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      name: 'Name',
      description: 'Description',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      name: 'string',
      description: 'string',
      cenBandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCenBandwidthPackageAttributeResponseBody extends $tea.Model {
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

export class ModifyCenBandwidthPackageAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCenBandwidthPackageAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCenBandwidthPackageAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCenBandwidthPackageSpecRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenBandwidthPackageId?: string;
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenBandwidthPackageId: 'string',
      bandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCenBandwidthPackageSpecResponseBody extends $tea.Model {
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

export class ModifyCenBandwidthPackageSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCenBandwidthPackageSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCenBandwidthPackageSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCenRouteMapRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  cenRegionId?: string;
  routeMapId?: string;
  description?: string;
  mapResult?: string;
  nextPriority?: number;
  cidrMatchMode?: string;
  asPathMatchMode?: string;
  communityMatchMode?: string;
  communityOperateMode?: string;
  preference?: number;
  priority?: number;
  sourceInstanceIdsReverseMatch?: boolean;
  destinationInstanceIdsReverseMatch?: boolean;
  gatewayZoneId?: string;
  matchAddressType?: string;
  sourceInstanceIds?: string[];
  destinationInstanceIds?: string[];
  sourceRouteTableIds?: string[];
  destinationRouteTableIds?: string[];
  sourceRegionIds?: string[];
  sourceChildInstanceTypes?: string[];
  destinationChildInstanceTypes?: string[];
  destinationCidrBlocks?: string[];
  routeTypes?: string[];
  matchAsns?: number[];
  matchCommunitySet?: string[];
  operateCommunitySet?: string[];
  prependAsPath?: number[];
  destinationRegionIds?: string[];
  sourceZoneIds?: string[];
  originalRouteTableIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      routeMapId: 'RouteMapId',
      description: 'Description',
      mapResult: 'MapResult',
      nextPriority: 'NextPriority',
      cidrMatchMode: 'CidrMatchMode',
      asPathMatchMode: 'AsPathMatchMode',
      communityMatchMode: 'CommunityMatchMode',
      communityOperateMode: 'CommunityOperateMode',
      preference: 'Preference',
      priority: 'Priority',
      sourceInstanceIdsReverseMatch: 'SourceInstanceIdsReverseMatch',
      destinationInstanceIdsReverseMatch: 'DestinationInstanceIdsReverseMatch',
      gatewayZoneId: 'GatewayZoneId',
      matchAddressType: 'MatchAddressType',
      sourceInstanceIds: 'SourceInstanceIds',
      destinationInstanceIds: 'DestinationInstanceIds',
      sourceRouteTableIds: 'SourceRouteTableIds',
      destinationRouteTableIds: 'DestinationRouteTableIds',
      sourceRegionIds: 'SourceRegionIds',
      sourceChildInstanceTypes: 'SourceChildInstanceTypes',
      destinationChildInstanceTypes: 'DestinationChildInstanceTypes',
      destinationCidrBlocks: 'DestinationCidrBlocks',
      routeTypes: 'RouteTypes',
      matchAsns: 'MatchAsns',
      matchCommunitySet: 'MatchCommunitySet',
      operateCommunitySet: 'OperateCommunitySet',
      prependAsPath: 'PrependAsPath',
      destinationRegionIds: 'DestinationRegionIds',
      sourceZoneIds: 'SourceZoneIds',
      originalRouteTableIds: 'OriginalRouteTableIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      cenRegionId: 'string',
      routeMapId: 'string',
      description: 'string',
      mapResult: 'string',
      nextPriority: 'number',
      cidrMatchMode: 'string',
      asPathMatchMode: 'string',
      communityMatchMode: 'string',
      communityOperateMode: 'string',
      preference: 'number',
      priority: 'number',
      sourceInstanceIdsReverseMatch: 'boolean',
      destinationInstanceIdsReverseMatch: 'boolean',
      gatewayZoneId: 'string',
      matchAddressType: 'string',
      sourceInstanceIds: { 'type': 'array', 'itemType': 'string' },
      destinationInstanceIds: { 'type': 'array', 'itemType': 'string' },
      sourceRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      destinationRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      sourceRegionIds: { 'type': 'array', 'itemType': 'string' },
      sourceChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      destinationChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      destinationCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      routeTypes: { 'type': 'array', 'itemType': 'string' },
      matchAsns: { 'type': 'array', 'itemType': 'number' },
      matchCommunitySet: { 'type': 'array', 'itemType': 'string' },
      operateCommunitySet: { 'type': 'array', 'itemType': 'string' },
      prependAsPath: { 'type': 'array', 'itemType': 'number' },
      destinationRegionIds: { 'type': 'array', 'itemType': 'string' },
      sourceZoneIds: { 'type': 'array', 'itemType': 'string' },
      originalRouteTableIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCenRouteMapResponseBody extends $tea.Model {
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

export class ModifyCenRouteMapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCenRouteMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCenRouteMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowLogAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  flowLogName?: string;
  description?: string;
  regionId?: string;
  flowLogId?: string;
  cenId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      flowLogName: 'FlowLogName',
      description: 'Description',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
      cenId: 'CenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      flowLogName: 'string',
      description: 'string',
      regionId: 'string',
      flowLogId: 'string',
      cenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowLogAttributeResponseBody extends $tea.Model {
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowLogAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowLogAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowLogAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRouteEntriesRequest extends $tea.Model {
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  childInstanceId?: string;
  childInstanceType?: string;
  childInstanceRegionId?: string;
  childInstanceRouteTableId?: string;
  destinationCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceType: 'ChildInstanceType',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      destinationCidrBlock: 'DestinationCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceType: 'string',
      childInstanceRegionId: 'string',
      childInstanceRouteTableId: 'string',
      destinationCidrBlock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRouteEntriesResponseBody extends $tea.Model {
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

export class PublishRouteEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishRouteEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResolveAndRouteServiceInCenRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  cenId?: string;
  host?: string;
  hostRegionId?: string;
  updateInterval?: number;
  hostVpcId?: string;
  description?: string;
  accessRegionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      cenId: 'CenId',
      host: 'Host',
      hostRegionId: 'HostRegionId',
      updateInterval: 'UpdateInterval',
      hostVpcId: 'HostVpcId',
      description: 'Description',
      accessRegionIds: 'AccessRegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      cenId: 'string',
      host: 'string',
      hostRegionId: 'string',
      updateInterval: 'number',
      hostVpcId: 'string',
      description: 'string',
      accessRegionIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResolveAndRouteServiceInCenResponseBody extends $tea.Model {
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

export class ResolveAndRouteServiceInCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResolveAndRouteServiceInCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResolveAndRouteServiceInCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoutePrivateZoneInCenToVpcRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  accessRegionId?: string;
  hostRegionId?: string;
  hostVpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      accessRegionId: 'AccessRegionId',
      hostRegionId: 'HostRegionId',
      hostVpcId: 'HostVpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      accessRegionId: 'string',
      hostRegionId: 'string',
      hostVpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoutePrivateZoneInCenToVpcResponseBody extends $tea.Model {
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

export class RoutePrivateZoneInCenToVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RoutePrivateZoneInCenToVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RoutePrivateZoneInCenToVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCenInterRegionBandwidthLimitRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  localRegionId?: string;
  oppositeRegionId?: string;
  bandwidthLimit?: number;
  bandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      localRegionId: 'LocalRegionId',
      oppositeRegionId: 'OppositeRegionId',
      bandwidthLimit: 'BandwidthLimit',
      bandwidthPackageId: 'BandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      localRegionId: 'string',
      oppositeRegionId: 'string',
      bandwidthLimit: 'number',
      bandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCenInterRegionBandwidthLimitResponseBody extends $tea.Model {
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

export class SetCenInterRegionBandwidthLimitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetCenInterRegionBandwidthLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetCenInterRegionBandwidthLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempUpgradeCenBandwidthPackageSpecRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenBandwidthPackageId?: string;
  bandwidth?: number;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      bandwidth: 'Bandwidth',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenBandwidthPackageId: 'string',
      bandwidth: 'number',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempUpgradeCenBandwidthPackageSpecResponseBody extends $tea.Model {
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

export class TempUpgradeCenBandwidthPackageSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TempUpgradeCenBandwidthPackageSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TempUpgradeCenBandwidthPackageSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateCenBandwidthPackageRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  cenBandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      cenBandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateCenBandwidthPackageResponseBody extends $tea.Model {
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

export class UnassociateCenBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnassociateCenBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnassociateCenBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnroutePrivateZoneInCenToVpcRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  accessRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      accessRegionId: 'AccessRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      accessRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnroutePrivateZoneInCenToVpcResponseBody extends $tea.Model {
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

export class UnroutePrivateZoneInCenToVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnroutePrivateZoneInCenToVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnroutePrivateZoneInCenToVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
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

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawPublishedRouteEntriesRequest extends $tea.Model {
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenId?: string;
  childInstanceId?: string;
  childInstanceType?: string;
  childInstanceRegionId?: string;
  childInstanceRouteTableId?: string;
  destinationCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceType: 'ChildInstanceType',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      destinationCidrBlock: 'DestinationCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceType: 'string',
      childInstanceRegionId: 'string',
      childInstanceRouteTableId: 'string',
      destinationCidrBlock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawPublishedRouteEntriesResponseBody extends $tea.Model {
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

export class WithdrawPublishedRouteEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: WithdrawPublishedRouteEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: WithdrawPublishedRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstancesResponseBodyChildInstances extends $tea.Model {
  childInstanceType?: string;
  status?: string;
  childInstanceRegionId?: string;
  childInstanceOwnerId?: number;
  childInstanceId?: string;
  cenId?: string;
  childInstanceAttachTime?: string;
  static names(): { [key: string]: string } {
    return {
      childInstanceType: 'ChildInstanceType',
      status: 'Status',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceId: 'ChildInstanceId',
      cenId: 'CenId',
      childInstanceAttachTime: 'ChildInstanceAttachTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstanceType: 'string',
      status: 'string',
      childInstanceRegionId: 'string',
      childInstanceOwnerId: 'number',
      childInstanceId: 'string',
      cenId: 'string',
      childInstanceAttachTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesRequestFilter extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesOrginInterRegionBandwidthLimits extends $tea.Model {
  oppositeRegionId?: string;
  geographicSpanId?: string;
  localRegionId?: string;
  bandwidthLimit?: string;
  static names(): { [key: string]: string } {
    return {
      oppositeRegionId: 'OppositeRegionId',
      geographicSpanId: 'GeographicSpanId',
      localRegionId: 'LocalRegionId',
      bandwidthLimit: 'BandwidthLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oppositeRegionId: 'string',
      geographicSpanId: 'string',
      localRegionId: 'string',
      bandwidthLimit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages extends $tea.Model {
  creationTime?: string;
  status?: string;
  reservationActiveTime?: string;
  reservationOrderType?: string;
  bandwidthPackageChargeType?: string;
  cenBandwidthPackageId?: string;
  orginInterRegionBandwidthLimits?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesOrginInterRegionBandwidthLimits[];
  cenIds?: string[];
  geographicRegionAId?: string;
  ratio?: string;
  reservationInternetChargeType?: string;
  typeFor95?: string;
  bandwidth?: number;
  description?: string;
  expiredTime?: string;
  reservationBandwidth?: string;
  geographicSpanId?: string;
  geographicRegionBId?: string;
  isCrossBorder?: boolean;
  businessStatus?: string;
  name?: string;
  hasReservationData?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      reservationActiveTime: 'ReservationActiveTime',
      reservationOrderType: 'ReservationOrderType',
      bandwidthPackageChargeType: 'BandwidthPackageChargeType',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      orginInterRegionBandwidthLimits: 'OrginInterRegionBandwidthLimits',
      cenIds: 'CenIds',
      geographicRegionAId: 'GeographicRegionAId',
      ratio: 'Ratio',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      typeFor95: 'TypeFor95',
      bandwidth: 'Bandwidth',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      reservationBandwidth: 'ReservationBandwidth',
      geographicSpanId: 'GeographicSpanId',
      geographicRegionBId: 'GeographicRegionBId',
      isCrossBorder: 'IsCrossBorder',
      businessStatus: 'BusinessStatus',
      name: 'Name',
      hasReservationData: 'HasReservationData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      reservationActiveTime: 'string',
      reservationOrderType: 'string',
      bandwidthPackageChargeType: 'string',
      cenBandwidthPackageId: 'string',
      orginInterRegionBandwidthLimits: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesOrginInterRegionBandwidthLimits },
      cenIds: { 'type': 'array', 'itemType': 'string' },
      geographicRegionAId: 'string',
      ratio: 'string',
      reservationInternetChargeType: 'string',
      typeFor95: 'string',
      bandwidth: 'number',
      description: 'string',
      expiredTime: 'string',
      reservationBandwidth: 'string',
      geographicSpanId: 'string',
      geographicRegionBId: 'string',
      isCrossBorder: 'boolean',
      businessStatus: 'string',
      name: 'string',
      hasReservationData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesConflicts extends $tea.Model {
  status?: string;
  destinationCidrBlock?: string;
  instanceId?: string;
  instanceType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      destinationCidrBlock: 'DestinationCidrBlock',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      destinationCidrBlock: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteMapRecords extends $tea.Model {
  routeMapId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      routeMapId: 'RouteMapId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeMapId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntries extends $tea.Model {
  status?: string;
  type?: string;
  publishStatus?: string;
  nextHopType?: string;
  operationalMode?: boolean;
  nextHopRegionId?: string;
  nextHopInstanceId?: string;
  routeTableId?: string;
  asPaths?: string[];
  conflicts?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesConflicts[];
  communities?: string[];
  destinationCidrBlock?: string;
  cenRouteMapRecords?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteMapRecords[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      publishStatus: 'PublishStatus',
      nextHopType: 'NextHopType',
      operationalMode: 'OperationalMode',
      nextHopRegionId: 'NextHopRegionId',
      nextHopInstanceId: 'NextHopInstanceId',
      routeTableId: 'RouteTableId',
      asPaths: 'AsPaths',
      conflicts: 'Conflicts',
      communities: 'Communities',
      destinationCidrBlock: 'DestinationCidrBlock',
      cenRouteMapRecords: 'CenRouteMapRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      publishStatus: 'string',
      nextHopType: 'string',
      operationalMode: 'boolean',
      nextHopRegionId: 'string',
      nextHopInstanceId: 'string',
      routeTableId: 'string',
      asPaths: { 'type': 'array', 'itemType': 'string' },
      conflicts: { 'type': 'array', 'itemType': DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesConflicts },
      communities: { 'type': 'array', 'itemType': 'string' },
      destinationCidrBlock: 'string',
      cenRouteMapRecords: { 'type': 'array', 'itemType': DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteMapRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpansResponseBodyGeographicSpanModels extends $tea.Model {
  geographicSpanId?: string;
  oppositeGeoRegionId?: string;
  localGeoRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      geographicSpanId: 'GeographicSpanId',
      oppositeGeoRegionId: 'OppositeGeoRegionId',
      localGeoRegionId: 'LocalGeoRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      geographicSpanId: 'string',
      oppositeGeoRegionId: 'string',
      localGeoRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimits extends $tea.Model {
  status?: string;
  bandwidthPackageId?: string;
  oppositeRegionId?: string;
  geographicSpanId?: string;
  cenId?: string;
  localRegionId?: string;
  bandwidthLimit?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      bandwidthPackageId: 'BandwidthPackageId',
      oppositeRegionId: 'OppositeRegionId',
      geographicSpanId: 'GeographicSpanId',
      cenId: 'CenId',
      localRegionId: 'LocalRegionId',
      bandwidthLimit: 'BandwidthLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      bandwidthPackageId: 'string',
      oppositeRegionId: 'string',
      geographicSpanId: 'string',
      cenId: 'string',
      localRegionId: 'string',
      bandwidthLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfos extends $tea.Model {
  status?: string;
  hostVpcId?: string;
  accessRegionId?: string;
  hostRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      hostVpcId: 'HostVpcId',
      accessRegionId: 'AccessRegionId',
      hostRegionId: 'HostRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      hostVpcId: 'string',
      accessRegionId: 'string',
      hostRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenOutRouteMapRecords extends $tea.Model {
  routeMapId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      routeMapId: 'RouteMapId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeMapId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteMapRecords extends $tea.Model {
  routeMapId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      routeMapId: 'RouteMapId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeMapId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntries extends $tea.Model {
  type?: string;
  status?: string;
  cenOutRouteMapRecords?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenOutRouteMapRecords[];
  nextHopType?: string;
  nextHopInstanceId?: string;
  nextHopRegionId?: string;
  asPaths?: string[];
  toOtherRegionStatus?: string;
  communities?: string[];
  destinationCidrBlock?: string;
  preference?: number;
  cenRouteMapRecords?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteMapRecords[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      cenOutRouteMapRecords: 'CenOutRouteMapRecords',
      nextHopType: 'NextHopType',
      nextHopInstanceId: 'NextHopInstanceId',
      nextHopRegionId: 'NextHopRegionId',
      asPaths: 'AsPaths',
      toOtherRegionStatus: 'ToOtherRegionStatus',
      communities: 'Communities',
      destinationCidrBlock: 'DestinationCidrBlock',
      preference: 'Preference',
      cenRouteMapRecords: 'CenRouteMapRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      cenOutRouteMapRecords: { 'type': 'array', 'itemType': DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenOutRouteMapRecords },
      nextHopType: 'string',
      nextHopInstanceId: 'string',
      nextHopRegionId: 'string',
      asPaths: { 'type': 'array', 'itemType': 'string' },
      toOtherRegionStatus: 'string',
      communities: { 'type': 'array', 'itemType': 'string' },
      destinationCidrBlock: 'string',
      preference: 'number',
      cenRouteMapRecords: { 'type': 'array', 'itemType': DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteMapRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsRequestFilter extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMaps extends $tea.Model {
  status?: string;
  sourceInstanceIdsReverseMatch?: boolean;
  sourceRegionIds?: string[];
  matchCommunitySet?: string[];
  priority?: number;
  communityOperateMode?: string;
  prependAsPath?: string[];
  routeTypes?: string[];
  description?: string;
  destinationInstanceIds?: string[];
  matchAsns?: string[];
  destinationInstanceIdsReverseMatch?: boolean;
  operateCommunitySet?: string[];
  nextPriority?: number;
  routeMapId?: string;
  transmitDirection?: string;
  sourceChildInstanceTypes?: string[];
  destinationRouteTableIds?: string[];
  sourceInstanceIds?: string[];
  cenRegionId?: string;
  destinationCidrBlocks?: string[];
  cenId?: string;
  sourceRouteTableIds?: string[];
  mapResult?: string;
  communityMatchMode?: string;
  destinationChildInstanceTypes?: string[];
  asPathMatchMode?: string;
  preference?: number;
  cidrMatchMode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sourceInstanceIdsReverseMatch: 'SourceInstanceIdsReverseMatch',
      sourceRegionIds: 'SourceRegionIds',
      matchCommunitySet: 'MatchCommunitySet',
      priority: 'Priority',
      communityOperateMode: 'CommunityOperateMode',
      prependAsPath: 'PrependAsPath',
      routeTypes: 'RouteTypes',
      description: 'Description',
      destinationInstanceIds: 'DestinationInstanceIds',
      matchAsns: 'MatchAsns',
      destinationInstanceIdsReverseMatch: 'DestinationInstanceIdsReverseMatch',
      operateCommunitySet: 'OperateCommunitySet',
      nextPriority: 'NextPriority',
      routeMapId: 'RouteMapId',
      transmitDirection: 'TransmitDirection',
      sourceChildInstanceTypes: 'SourceChildInstanceTypes',
      destinationRouteTableIds: 'DestinationRouteTableIds',
      sourceInstanceIds: 'SourceInstanceIds',
      cenRegionId: 'CenRegionId',
      destinationCidrBlocks: 'DestinationCidrBlocks',
      cenId: 'CenId',
      sourceRouteTableIds: 'SourceRouteTableIds',
      mapResult: 'MapResult',
      communityMatchMode: 'CommunityMatchMode',
      destinationChildInstanceTypes: 'DestinationChildInstanceTypes',
      asPathMatchMode: 'AsPathMatchMode',
      preference: 'Preference',
      cidrMatchMode: 'CidrMatchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      sourceInstanceIdsReverseMatch: 'boolean',
      sourceRegionIds: { 'type': 'array', 'itemType': 'string' },
      matchCommunitySet: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      communityOperateMode: 'string',
      prependAsPath: { 'type': 'array', 'itemType': 'string' },
      routeTypes: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destinationInstanceIds: { 'type': 'array', 'itemType': 'string' },
      matchAsns: { 'type': 'array', 'itemType': 'string' },
      destinationInstanceIdsReverseMatch: 'boolean',
      operateCommunitySet: { 'type': 'array', 'itemType': 'string' },
      nextPriority: 'number',
      routeMapId: 'string',
      transmitDirection: 'string',
      sourceChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      destinationRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceIds: { 'type': 'array', 'itemType': 'string' },
      cenRegionId: 'string',
      destinationCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      cenId: 'string',
      sourceRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      mapResult: 'string',
      communityMatchMode: 'string',
      destinationChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      asPathMatchMode: 'string',
      preference: 'number',
      cidrMatchMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensRequestFilter extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensRequestTag extends $tea.Model {
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

export class DescribeCensResponseBodyCensTags extends $tea.Model {
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

export class DescribeCensResponseBodyCens extends $tea.Model {
  status?: string;
  creationTime?: string;
  cenBandwidthPackageIds?: string[];
  description?: string;
  cenId?: string;
  protectionLevel?: string;
  tags?: DescribeCensResponseBodyCensTags[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      cenBandwidthPackageIds: 'CenBandwidthPackageIds',
      description: 'Description',
      cenId: 'CenId',
      protectionLevel: 'ProtectionLevel',
      tags: 'Tags',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      cenBandwidthPackageIds: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      cenId: 'string',
      protectionLevel: 'string',
      tags: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensTags },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenVbrHealthCheckResponseBodyVbrHealthChecks extends $tea.Model {
  healthCheckTargetIp?: string;
  vbrInstanceId?: string;
  vbrInstanceRegionId?: string;
  cenId?: string;
  healthyThreshold?: number;
  healthCheckInterval?: number;
  healthCheckSourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckTargetIp: 'HealthCheckTargetIp',
      vbrInstanceId: 'VbrInstanceId',
      vbrInstanceRegionId: 'VbrInstanceRegionId',
      cenId: 'CenId',
      healthyThreshold: 'HealthyThreshold',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckSourceIp: 'HealthCheckSourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTargetIp: 'string',
      vbrInstanceId: 'string',
      vbrInstanceRegionId: 'string',
      cenId: 'string',
      healthyThreshold: 'number',
      healthCheckInterval: 'number',
      healthCheckSourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChildInstanceRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowlogsResponseBodyFlowLogs extends $tea.Model {
  status?: string;
  creationTime?: string;
  flowLogName?: string;
  description?: string;
  projectName?: string;
  cenId?: string;
  logStoreName?: string;
  regionId?: string;
  flowLogId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      flowLogName: 'FlowLogName',
      description: 'Description',
      projectName: 'ProjectName',
      cenId: 'CenId',
      logStoreName: 'LogStoreName',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      flowLogName: 'string',
      description: 'string',
      projectName: 'string',
      cenId: 'string',
      logStoreName: 'string',
      regionId: 'string',
      flowLogId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeographicRegionMembershipResponseBodyRegionIds extends $tea.Model {
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

export class DescribeGrantRulesToCenResponseBodyGrantRules extends $tea.Model {
  childInstanceType?: string;
  childInstanceRegionId?: string;
  childInstanceOwnerId?: number;
  childInstanceId?: string;
  cenId?: string;
  static names(): { [key: string]: string } {
    return {
      childInstanceType: 'ChildInstanceType',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceId: 'ChildInstanceId',
      cenId: 'CenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstanceType: 'string',
      childInstanceRegionId: 'string',
      childInstanceOwnerId: 'number',
      childInstanceId: 'string',
      cenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesConflicts extends $tea.Model {
  status?: string;
  destinationCidrBlock?: string;
  instanceId?: string;
  instanceType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      destinationCidrBlock: 'DestinationCidrBlock',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      destinationCidrBlock: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries extends $tea.Model {
  nextHopId?: string;
  conflicts?: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesConflicts[];
  publishStatus?: string;
  childInstanceRouteTableId?: string;
  nextHopType?: string;
  operationalMode?: boolean;
  destinationCidrBlock?: string;
  routeType?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopId: 'NextHopId',
      conflicts: 'Conflicts',
      publishStatus: 'PublishStatus',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      nextHopType: 'NextHopType',
      operationalMode: 'OperationalMode',
      destinationCidrBlock: 'DestinationCidrBlock',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopId: 'string',
      conflicts: { 'type': 'array', 'itemType': DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesConflicts },
      publishStatus: 'string',
      childInstanceRouteTableId: 'string',
      nextHopType: 'string',
      operationalMode: 'boolean',
      destinationCidrBlock: 'string',
      routeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteConflictResponseBodyRouteConflicts extends $tea.Model {
  status?: string;
  destinationCidrBlock?: string;
  instanceId?: string;
  instanceType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      destinationCidrBlock: 'DestinationCidrBlock',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      destinationCidrBlock: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteServicesInCenResponseBodyRouteServiceEntries extends $tea.Model {
  status?: string;
  host?: string;
  description?: string;
  hostVpcId?: string;
  cidrs?: string[];
  cenId?: string;
  accessRegionId?: string;
  hostRegionId?: string;
  updateInterval?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      host: 'Host',
      description: 'Description',
      hostVpcId: 'HostVpcId',
      cidrs: 'Cidrs',
      cenId: 'CenId',
      accessRegionId: 'AccessRegionId',
      hostRegionId: 'HostRegionId',
      updateInterval: 'UpdateInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      host: 'string',
      description: 'string',
      hostVpcId: 'string',
      cidrs: { 'type': 'array', 'itemType': 'string' },
      cenId: 'string',
      accessRegionId: 'string',
      hostRegionId: 'string',
      updateInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
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
    this._endpointMap = {
      'cn-qingdao': "cbn.aliyuncs.com",
      'cn-beijing': "cbn.aliyuncs.com",
      'cn-chengdu': "cbn.aliyuncs.com",
      'cn-zhangjiakou': "cbn.aliyuncs.com",
      'cn-huhehaote': "cbn.aliyuncs.com",
      'cn-hangzhou': "cbn.aliyuncs.com",
      'cn-shanghai': "cbn.aliyuncs.com",
      'cn-shenzhen': "cbn.aliyuncs.com",
      'cn-heyuan': "cbn.aliyuncs.com",
      'cn-wulanchabu': "cbn.aliyuncs.com",
      'cn-hongkong': "cbn.aliyuncs.com",
      'ap-southeast-1': "cbn.aliyuncs.com",
      'ap-southeast-2': "cbn.aliyuncs.com",
      'ap-southeast-3': "cbn.aliyuncs.com",
      'ap-southeast-5': "cbn.aliyuncs.com",
      'ap-northeast-1': "cbn.aliyuncs.com",
      'eu-west-1': "cbn.aliyuncs.com",
      'us-west-1': "cbn.aliyuncs.com",
      'us-east-1': "cbn.aliyuncs.com",
      'eu-central-1': "cbn.aliyuncs.com",
      'me-east-1': "cbn.aliyuncs.com",
      'ap-south-1': "cbn.aliyuncs.com",
      'cn-shanghai-finance-1': "cbn.aliyuncs.com",
      'cn-shenzhen-finance-1': "cbn.aliyuncs.com",
      'cn-north-2-gov-1': "cbn.aliyuncs.com",
      'ap-northeast-2-pop': "cbn.aliyuncs.com",
      'cn-beijing-finance-1': "cbn.aliyuncs.com",
      'cn-beijing-finance-pop': "cbn.aliyuncs.com",
      'cn-beijing-gov-1': "cbn.aliyuncs.com",
      'cn-beijing-nu16-b01': "cbn.aliyuncs.com",
      'cn-edge-1': "cbn.aliyuncs.com",
      'cn-fujian': "cbn.aliyuncs.com",
      'cn-haidian-cm12-c01': "cbn.aliyuncs.com",
      'cn-hangzhou-bj-b01': "cbn.aliyuncs.com",
      'cn-hangzhou-finance': "cbn.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "cbn.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "cbn.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "cbn.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "cbn.aliyuncs.com",
      'cn-hangzhou-test-306': "cbn.aliyuncs.com",
      'cn-hongkong-finance-pop': "cbn.aliyuncs.com",
      'cn-huhehaote-nebula-1': "cbn.aliyuncs.com",
      'cn-qingdao-nebula': "cbn.aliyuncs.com",
      'cn-shanghai-et15-b01': "cbn.aliyuncs.com",
      'cn-shanghai-et2-b01': "cbn.aliyuncs.com",
      'cn-shanghai-inner': "cbn.aliyuncs.com",
      'cn-shanghai-internal-test-1': "cbn.aliyuncs.com",
      'cn-shenzhen-inner': "cbn.aliyuncs.com",
      'cn-shenzhen-st4-d01': "cbn.aliyuncs.com",
      'cn-shenzhen-su18-b01': "cbn.aliyuncs.com",
      'cn-wuhan': "cbn.aliyuncs.com",
      'cn-yushanfang': "cbn.aliyuncs.com",
      'cn-zhangbei': "cbn.aliyuncs.com",
      'cn-zhangbei-na61-b01': "cbn.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "cbn.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "cbn.aliyuncs.com",
      'eu-west-1-oxs': "cbn.aliyuncs.com",
      'rus-west-1-pop': "cbn-share.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cbn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async activeFlowLogWithOptions(request: ActiveFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<ActiveFlowLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ActiveFlowLogResponse>(await this.doRPCRequest("ActiveFlowLog", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new ActiveFlowLogResponse({}));
  }

  async activeFlowLog(request: ActiveFlowLogRequest): Promise<ActiveFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeFlowLogWithOptions(request, runtime);
  }

  async associateCenBandwidthPackageWithOptions(request: AssociateCenBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<AssociateCenBandwidthPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateCenBandwidthPackageResponse>(await this.doRPCRequest("AssociateCenBandwidthPackage", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateCenBandwidthPackageResponse({}));
  }

  async associateCenBandwidthPackage(request: AssociateCenBandwidthPackageRequest): Promise<AssociateCenBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateCenBandwidthPackageWithOptions(request, runtime);
  }

  async attachCenChildInstanceWithOptions(request: AttachCenChildInstanceRequest, runtime: $Util.RuntimeOptions): Promise<AttachCenChildInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachCenChildInstanceResponse>(await this.doRPCRequest("AttachCenChildInstance", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new AttachCenChildInstanceResponse({}));
  }

  async attachCenChildInstance(request: AttachCenChildInstanceRequest): Promise<AttachCenChildInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachCenChildInstanceWithOptions(request, runtime);
  }

  async createCenWithOptions(request: CreateCenRequest, runtime: $Util.RuntimeOptions): Promise<CreateCenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCenResponse>(await this.doRPCRequest("CreateCen", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCenResponse({}));
  }

  async createCen(request: CreateCenRequest): Promise<CreateCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCenWithOptions(request, runtime);
  }

  async createCenBandwidthPackageWithOptions(request: CreateCenBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<CreateCenBandwidthPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCenBandwidthPackageResponse>(await this.doRPCRequest("CreateCenBandwidthPackage", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCenBandwidthPackageResponse({}));
  }

  async createCenBandwidthPackage(request: CreateCenBandwidthPackageRequest): Promise<CreateCenBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCenBandwidthPackageWithOptions(request, runtime);
  }

  async createCenChildInstanceRouteEntryToCenWithOptions(request: CreateCenChildInstanceRouteEntryToCenRequest, runtime: $Util.RuntimeOptions): Promise<CreateCenChildInstanceRouteEntryToCenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCenChildInstanceRouteEntryToCenResponse>(await this.doRPCRequest("CreateCenChildInstanceRouteEntryToCen", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCenChildInstanceRouteEntryToCenResponse({}));
  }

  async createCenChildInstanceRouteEntryToCen(request: CreateCenChildInstanceRouteEntryToCenRequest): Promise<CreateCenChildInstanceRouteEntryToCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCenChildInstanceRouteEntryToCenWithOptions(request, runtime);
  }

  async createCenRouteMapWithOptions(request: CreateCenRouteMapRequest, runtime: $Util.RuntimeOptions): Promise<CreateCenRouteMapResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCenRouteMapResponse>(await this.doRPCRequest("CreateCenRouteMap", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCenRouteMapResponse({}));
  }

  async createCenRouteMap(request: CreateCenRouteMapRequest): Promise<CreateCenRouteMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCenRouteMapWithOptions(request, runtime);
  }

  async createFlowlogWithOptions(request: CreateFlowlogRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowlogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowlogResponse>(await this.doRPCRequest("CreateFlowlog", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowlogResponse({}));
  }

  async createFlowlog(request: CreateFlowlogRequest): Promise<CreateFlowlogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowlogWithOptions(request, runtime);
  }

  async deactiveFlowLogWithOptions(request: DeactiveFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<DeactiveFlowLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeactiveFlowLogResponse>(await this.doRPCRequest("DeactiveFlowLog", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeactiveFlowLogResponse({}));
  }

  async deactiveFlowLog(request: DeactiveFlowLogRequest): Promise<DeactiveFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactiveFlowLogWithOptions(request, runtime);
  }

  async deleteCenWithOptions(request: DeleteCenRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCenResponse>(await this.doRPCRequest("DeleteCen", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCenResponse({}));
  }

  async deleteCen(request: DeleteCenRequest): Promise<DeleteCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCenWithOptions(request, runtime);
  }

  async deleteCenBandwidthPackageWithOptions(request: DeleteCenBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCenBandwidthPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCenBandwidthPackageResponse>(await this.doRPCRequest("DeleteCenBandwidthPackage", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCenBandwidthPackageResponse({}));
  }

  async deleteCenBandwidthPackage(request: DeleteCenBandwidthPackageRequest): Promise<DeleteCenBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCenBandwidthPackageWithOptions(request, runtime);
  }

  async deleteCenChildInstanceRouteEntryToCenWithOptions(request: DeleteCenChildInstanceRouteEntryToCenRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCenChildInstanceRouteEntryToCenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCenChildInstanceRouteEntryToCenResponse>(await this.doRPCRequest("DeleteCenChildInstanceRouteEntryToCen", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCenChildInstanceRouteEntryToCenResponse({}));
  }

  async deleteCenChildInstanceRouteEntryToCen(request: DeleteCenChildInstanceRouteEntryToCenRequest): Promise<DeleteCenChildInstanceRouteEntryToCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCenChildInstanceRouteEntryToCenWithOptions(request, runtime);
  }

  async deleteCenRouteMapWithOptions(request: DeleteCenRouteMapRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCenRouteMapResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCenRouteMapResponse>(await this.doRPCRequest("DeleteCenRouteMap", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCenRouteMapResponse({}));
  }

  async deleteCenRouteMap(request: DeleteCenRouteMapRequest): Promise<DeleteCenRouteMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCenRouteMapWithOptions(request, runtime);
  }

  async deleteFlowlogWithOptions(request: DeleteFlowlogRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowlogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowlogResponse>(await this.doRPCRequest("DeleteFlowlog", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowlogResponse({}));
  }

  async deleteFlowlog(request: DeleteFlowlogRequest): Promise<DeleteFlowlogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowlogWithOptions(request, runtime);
  }

  async deleteRouteServiceInCenWithOptions(request: DeleteRouteServiceInCenRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRouteServiceInCenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRouteServiceInCenResponse>(await this.doRPCRequest("DeleteRouteServiceInCen", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRouteServiceInCenResponse({}));
  }

  async deleteRouteServiceInCen(request: DeleteRouteServiceInCenRequest): Promise<DeleteRouteServiceInCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRouteServiceInCenWithOptions(request, runtime);
  }

  async describeCenAttachedChildInstanceAttributeWithOptions(request: DescribeCenAttachedChildInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenAttachedChildInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCenAttachedChildInstanceAttributeResponse>(await this.doRPCRequest("DescribeCenAttachedChildInstanceAttribute", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCenAttachedChildInstanceAttributeResponse({}));
  }

  async describeCenAttachedChildInstanceAttribute(request: DescribeCenAttachedChildInstanceAttributeRequest): Promise<DescribeCenAttachedChildInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenAttachedChildInstanceAttributeWithOptions(request, runtime);
  }

  async describeCenAttachedChildInstancesWithOptions(request: DescribeCenAttachedChildInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenAttachedChildInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCenAttachedChildInstancesResponse>(await this.doRPCRequest("DescribeCenAttachedChildInstances", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCenAttachedChildInstancesResponse({}));
  }

  async describeCenAttachedChildInstances(request: DescribeCenAttachedChildInstancesRequest): Promise<DescribeCenAttachedChildInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenAttachedChildInstancesWithOptions(request, runtime);
  }

  async describeCenBandwidthPackagesWithOptions(request: DescribeCenBandwidthPackagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenBandwidthPackagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCenBandwidthPackagesResponse>(await this.doRPCRequest("DescribeCenBandwidthPackages", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCenBandwidthPackagesResponse({}));
  }

  async describeCenBandwidthPackages(request: DescribeCenBandwidthPackagesRequest): Promise<DescribeCenBandwidthPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenBandwidthPackagesWithOptions(request, runtime);
  }

  async describeCenChildInstanceRouteEntriesWithOptions(request: DescribeCenChildInstanceRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenChildInstanceRouteEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCenChildInstanceRouteEntriesResponse>(await this.doRPCRequest("DescribeCenChildInstanceRouteEntries", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCenChildInstanceRouteEntriesResponse({}));
  }

  async describeCenChildInstanceRouteEntries(request: DescribeCenChildInstanceRouteEntriesRequest): Promise<DescribeCenChildInstanceRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenChildInstanceRouteEntriesWithOptions(request, runtime);
  }

  async describeCenGeographicSpanRemainingBandwidthWithOptions(request: DescribeCenGeographicSpanRemainingBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenGeographicSpanRemainingBandwidthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCenGeographicSpanRemainingBandwidthResponse>(await this.doRPCRequest("DescribeCenGeographicSpanRemainingBandwidth", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCenGeographicSpanRemainingBandwidthResponse({}));
  }

  async describeCenGeographicSpanRemainingBandwidth(request: DescribeCenGeographicSpanRemainingBandwidthRequest): Promise<DescribeCenGeographicSpanRemainingBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenGeographicSpanRemainingBandwidthWithOptions(request, runtime);
  }

  async describeCenGeographicSpansWithOptions(request: DescribeCenGeographicSpansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenGeographicSpansResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCenGeographicSpansResponse>(await this.doRPCRequest("DescribeCenGeographicSpans", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCenGeographicSpansResponse({}));
  }

  async describeCenGeographicSpans(request: DescribeCenGeographicSpansRequest): Promise<DescribeCenGeographicSpansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenGeographicSpansWithOptions(request, runtime);
  }

  async describeCenInterRegionBandwidthLimitsWithOptions(request: DescribeCenInterRegionBandwidthLimitsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenInterRegionBandwidthLimitsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCenInterRegionBandwidthLimitsResponse>(await this.doRPCRequest("DescribeCenInterRegionBandwidthLimits", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCenInterRegionBandwidthLimitsResponse({}));
  }

  async describeCenInterRegionBandwidthLimits(request: DescribeCenInterRegionBandwidthLimitsRequest): Promise<DescribeCenInterRegionBandwidthLimitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenInterRegionBandwidthLimitsWithOptions(request, runtime);
  }

  async describeCenPrivateZoneRoutesWithOptions(request: DescribeCenPrivateZoneRoutesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenPrivateZoneRoutesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCenPrivateZoneRoutesResponse>(await this.doRPCRequest("DescribeCenPrivateZoneRoutes", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCenPrivateZoneRoutesResponse({}));
  }

  async describeCenPrivateZoneRoutes(request: DescribeCenPrivateZoneRoutesRequest): Promise<DescribeCenPrivateZoneRoutesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenPrivateZoneRoutesWithOptions(request, runtime);
  }

  async describeCenRegionDomainRouteEntriesWithOptions(request: DescribeCenRegionDomainRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenRegionDomainRouteEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCenRegionDomainRouteEntriesResponse>(await this.doRPCRequest("DescribeCenRegionDomainRouteEntries", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCenRegionDomainRouteEntriesResponse({}));
  }

  async describeCenRegionDomainRouteEntries(request: DescribeCenRegionDomainRouteEntriesRequest): Promise<DescribeCenRegionDomainRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenRegionDomainRouteEntriesWithOptions(request, runtime);
  }

  async describeCenRouteMapsWithOptions(request: DescribeCenRouteMapsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenRouteMapsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCenRouteMapsResponse>(await this.doRPCRequest("DescribeCenRouteMaps", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCenRouteMapsResponse({}));
  }

  async describeCenRouteMaps(request: DescribeCenRouteMapsRequest): Promise<DescribeCenRouteMapsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenRouteMapsWithOptions(request, runtime);
  }

  async describeCensWithOptions(request: DescribeCensRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCensResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCensResponse>(await this.doRPCRequest("DescribeCens", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCensResponse({}));
  }

  async describeCens(request: DescribeCensRequest): Promise<DescribeCensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCensWithOptions(request, runtime);
  }

  async describeCenVbrHealthCheckWithOptions(request: DescribeCenVbrHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenVbrHealthCheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCenVbrHealthCheckResponse>(await this.doRPCRequest("DescribeCenVbrHealthCheck", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCenVbrHealthCheckResponse({}));
  }

  async describeCenVbrHealthCheck(request: DescribeCenVbrHealthCheckRequest): Promise<DescribeCenVbrHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenVbrHealthCheckWithOptions(request, runtime);
  }

  async describeChildInstanceRegionsWithOptions(request: DescribeChildInstanceRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChildInstanceRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeChildInstanceRegionsResponse>(await this.doRPCRequest("DescribeChildInstanceRegions", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeChildInstanceRegionsResponse({}));
  }

  async describeChildInstanceRegions(request: DescribeChildInstanceRegionsRequest): Promise<DescribeChildInstanceRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChildInstanceRegionsWithOptions(request, runtime);
  }

  async describeFlowlogsWithOptions(request: DescribeFlowlogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowlogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowlogsResponse>(await this.doRPCRequest("DescribeFlowlogs", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowlogsResponse({}));
  }

  async describeFlowlogs(request: DescribeFlowlogsRequest): Promise<DescribeFlowlogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowlogsWithOptions(request, runtime);
  }

  async describeGeographicRegionMembershipWithOptions(request: DescribeGeographicRegionMembershipRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGeographicRegionMembershipResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGeographicRegionMembershipResponse>(await this.doRPCRequest("DescribeGeographicRegionMembership", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGeographicRegionMembershipResponse({}));
  }

  async describeGeographicRegionMembership(request: DescribeGeographicRegionMembershipRequest): Promise<DescribeGeographicRegionMembershipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGeographicRegionMembershipWithOptions(request, runtime);
  }

  async describeGrantRulesToCenWithOptions(request: DescribeGrantRulesToCenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGrantRulesToCenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGrantRulesToCenResponse>(await this.doRPCRequest("DescribeGrantRulesToCen", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGrantRulesToCenResponse({}));
  }

  async describeGrantRulesToCen(request: DescribeGrantRulesToCenRequest): Promise<DescribeGrantRulesToCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGrantRulesToCenWithOptions(request, runtime);
  }

  async describePublishedRouteEntriesWithOptions(request: DescribePublishedRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePublishedRouteEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePublishedRouteEntriesResponse>(await this.doRPCRequest("DescribePublishedRouteEntries", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePublishedRouteEntriesResponse({}));
  }

  async describePublishedRouteEntries(request: DescribePublishedRouteEntriesRequest): Promise<DescribePublishedRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePublishedRouteEntriesWithOptions(request, runtime);
  }

  async describeRouteConflictWithOptions(request: DescribeRouteConflictRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRouteConflictResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRouteConflictResponse>(await this.doRPCRequest("DescribeRouteConflict", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRouteConflictResponse({}));
  }

  async describeRouteConflict(request: DescribeRouteConflictRequest): Promise<DescribeRouteConflictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRouteConflictWithOptions(request, runtime);
  }

  async describeRouteServicesInCenWithOptions(request: DescribeRouteServicesInCenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRouteServicesInCenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRouteServicesInCenResponse>(await this.doRPCRequest("DescribeRouteServicesInCen", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRouteServicesInCenResponse({}));
  }

  async describeRouteServicesInCen(request: DescribeRouteServicesInCenRequest): Promise<DescribeRouteServicesInCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRouteServicesInCenWithOptions(request, runtime);
  }

  async detachCenChildInstanceWithOptions(request: DetachCenChildInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DetachCenChildInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachCenChildInstanceResponse>(await this.doRPCRequest("DetachCenChildInstance", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DetachCenChildInstanceResponse({}));
  }

  async detachCenChildInstance(request: DetachCenChildInstanceRequest): Promise<DetachCenChildInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachCenChildInstanceWithOptions(request, runtime);
  }

  async disableCenVbrHealthCheckWithOptions(request: DisableCenVbrHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<DisableCenVbrHealthCheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableCenVbrHealthCheckResponse>(await this.doRPCRequest("DisableCenVbrHealthCheck", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new DisableCenVbrHealthCheckResponse({}));
  }

  async disableCenVbrHealthCheck(request: DisableCenVbrHealthCheckRequest): Promise<DisableCenVbrHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableCenVbrHealthCheckWithOptions(request, runtime);
  }

  async enableCenVbrHealthCheckWithOptions(request: EnableCenVbrHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<EnableCenVbrHealthCheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableCenVbrHealthCheckResponse>(await this.doRPCRequest("EnableCenVbrHealthCheck", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new EnableCenVbrHealthCheckResponse({}));
  }

  async enableCenVbrHealthCheck(request: EnableCenVbrHealthCheckRequest): Promise<EnableCenVbrHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableCenVbrHealthCheckWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyCenAttributeWithOptions(request: ModifyCenAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCenAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCenAttributeResponse>(await this.doRPCRequest("ModifyCenAttribute", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCenAttributeResponse({}));
  }

  async modifyCenAttribute(request: ModifyCenAttributeRequest): Promise<ModifyCenAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCenAttributeWithOptions(request, runtime);
  }

  async modifyCenBandwidthPackageAttributeWithOptions(request: ModifyCenBandwidthPackageAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCenBandwidthPackageAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCenBandwidthPackageAttributeResponse>(await this.doRPCRequest("ModifyCenBandwidthPackageAttribute", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCenBandwidthPackageAttributeResponse({}));
  }

  async modifyCenBandwidthPackageAttribute(request: ModifyCenBandwidthPackageAttributeRequest): Promise<ModifyCenBandwidthPackageAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCenBandwidthPackageAttributeWithOptions(request, runtime);
  }

  async modifyCenBandwidthPackageSpecWithOptions(request: ModifyCenBandwidthPackageSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCenBandwidthPackageSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCenBandwidthPackageSpecResponse>(await this.doRPCRequest("ModifyCenBandwidthPackageSpec", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCenBandwidthPackageSpecResponse({}));
  }

  async modifyCenBandwidthPackageSpec(request: ModifyCenBandwidthPackageSpecRequest): Promise<ModifyCenBandwidthPackageSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCenBandwidthPackageSpecWithOptions(request, runtime);
  }

  async modifyCenRouteMapWithOptions(request: ModifyCenRouteMapRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCenRouteMapResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCenRouteMapResponse>(await this.doRPCRequest("ModifyCenRouteMap", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCenRouteMapResponse({}));
  }

  async modifyCenRouteMap(request: ModifyCenRouteMapRequest): Promise<ModifyCenRouteMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCenRouteMapWithOptions(request, runtime);
  }

  async modifyFlowLogAttributeWithOptions(request: ModifyFlowLogAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowLogAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowLogAttributeResponse>(await this.doRPCRequest("ModifyFlowLogAttribute", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowLogAttributeResponse({}));
  }

  async modifyFlowLogAttribute(request: ModifyFlowLogAttributeRequest): Promise<ModifyFlowLogAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowLogAttributeWithOptions(request, runtime);
  }

  async publishRouteEntriesWithOptions(request: PublishRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<PublishRouteEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishRouteEntriesResponse>(await this.doRPCRequest("PublishRouteEntries", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new PublishRouteEntriesResponse({}));
  }

  async publishRouteEntries(request: PublishRouteEntriesRequest): Promise<PublishRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishRouteEntriesWithOptions(request, runtime);
  }

  async resolveAndRouteServiceInCenWithOptions(request: ResolveAndRouteServiceInCenRequest, runtime: $Util.RuntimeOptions): Promise<ResolveAndRouteServiceInCenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResolveAndRouteServiceInCenResponse>(await this.doRPCRequest("ResolveAndRouteServiceInCen", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new ResolveAndRouteServiceInCenResponse({}));
  }

  async resolveAndRouteServiceInCen(request: ResolveAndRouteServiceInCenRequest): Promise<ResolveAndRouteServiceInCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resolveAndRouteServiceInCenWithOptions(request, runtime);
  }

  async routePrivateZoneInCenToVpcWithOptions(request: RoutePrivateZoneInCenToVpcRequest, runtime: $Util.RuntimeOptions): Promise<RoutePrivateZoneInCenToVpcResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RoutePrivateZoneInCenToVpcResponse>(await this.doRPCRequest("RoutePrivateZoneInCenToVpc", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new RoutePrivateZoneInCenToVpcResponse({}));
  }

  async routePrivateZoneInCenToVpc(request: RoutePrivateZoneInCenToVpcRequest): Promise<RoutePrivateZoneInCenToVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.routePrivateZoneInCenToVpcWithOptions(request, runtime);
  }

  async setCenInterRegionBandwidthLimitWithOptions(request: SetCenInterRegionBandwidthLimitRequest, runtime: $Util.RuntimeOptions): Promise<SetCenInterRegionBandwidthLimitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetCenInterRegionBandwidthLimitResponse>(await this.doRPCRequest("SetCenInterRegionBandwidthLimit", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new SetCenInterRegionBandwidthLimitResponse({}));
  }

  async setCenInterRegionBandwidthLimit(request: SetCenInterRegionBandwidthLimitRequest): Promise<SetCenInterRegionBandwidthLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCenInterRegionBandwidthLimitWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async tempUpgradeCenBandwidthPackageSpecWithOptions(request: TempUpgradeCenBandwidthPackageSpecRequest, runtime: $Util.RuntimeOptions): Promise<TempUpgradeCenBandwidthPackageSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TempUpgradeCenBandwidthPackageSpecResponse>(await this.doRPCRequest("TempUpgradeCenBandwidthPackageSpec", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new TempUpgradeCenBandwidthPackageSpecResponse({}));
  }

  async tempUpgradeCenBandwidthPackageSpec(request: TempUpgradeCenBandwidthPackageSpecRequest): Promise<TempUpgradeCenBandwidthPackageSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tempUpgradeCenBandwidthPackageSpecWithOptions(request, runtime);
  }

  async unassociateCenBandwidthPackageWithOptions(request: UnassociateCenBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateCenBandwidthPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnassociateCenBandwidthPackageResponse>(await this.doRPCRequest("UnassociateCenBandwidthPackage", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new UnassociateCenBandwidthPackageResponse({}));
  }

  async unassociateCenBandwidthPackage(request: UnassociateCenBandwidthPackageRequest): Promise<UnassociateCenBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateCenBandwidthPackageWithOptions(request, runtime);
  }

  async unroutePrivateZoneInCenToVpcWithOptions(request: UnroutePrivateZoneInCenToVpcRequest, runtime: $Util.RuntimeOptions): Promise<UnroutePrivateZoneInCenToVpcResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnroutePrivateZoneInCenToVpcResponse>(await this.doRPCRequest("UnroutePrivateZoneInCenToVpc", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new UnroutePrivateZoneInCenToVpcResponse({}));
  }

  async unroutePrivateZoneInCenToVpc(request: UnroutePrivateZoneInCenToVpcRequest): Promise<UnroutePrivateZoneInCenToVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unroutePrivateZoneInCenToVpcWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async withdrawPublishedRouteEntriesWithOptions(request: WithdrawPublishedRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<WithdrawPublishedRouteEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<WithdrawPublishedRouteEntriesResponse>(await this.doRPCRequest("WithdrawPublishedRouteEntries", "2017-09-12", "HTTPS", "POST", "AK", "json", req, runtime), new WithdrawPublishedRouteEntriesResponse({}));
  }

  async withdrawPublishedRouteEntries(request: WithdrawPublishedRouteEntriesRequest): Promise<WithdrawPublishedRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.withdrawPublishedRouteEntriesWithOptions(request, runtime);
  }

}
