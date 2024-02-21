// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActiveFlowLogRequest extends $tea.Model {
  cenId?: string;
  clientToken?: string;
  flowLogId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      flowLogId: 'FlowLogId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      flowLogId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActiveFlowLogResponseBody;
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
      body: ActiveFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTrafficMatchRuleToTrafficMarkingPolicyRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficMarkingPolicyId?: string;
  trafficMatchRules?: AddTrafficMatchRuleToTrafficMarkingPolicyRequestTrafficMatchRules[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
      trafficMatchRules: 'TrafficMatchRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyId: 'string',
      trafficMatchRules: { 'type': 'array', 'itemType': AddTrafficMatchRuleToTrafficMarkingPolicyRequestTrafficMatchRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTrafficMatchRuleToTrafficMarkingPolicyResponseBody extends $tea.Model {
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

export class AddTrafficMatchRuleToTrafficMarkingPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTrafficMatchRuleToTrafficMarkingPolicyResponseBody;
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
      body: AddTrafficMatchRuleToTrafficMarkingPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTraficMatchRuleToTrafficMarkingPolicyRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficMarkingPolicyId?: string;
  trafficMatchRules?: AddTraficMatchRuleToTrafficMarkingPolicyRequestTrafficMatchRules[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
      trafficMatchRules: 'TrafficMatchRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyId: 'string',
      trafficMatchRules: { 'type': 'array', 'itemType': AddTraficMatchRuleToTrafficMarkingPolicyRequestTrafficMatchRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTraficMatchRuleToTrafficMarkingPolicyResponseBody extends $tea.Model {
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

export class AddTraficMatchRuleToTrafficMarkingPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTraficMatchRuleToTrafficMarkingPolicyResponseBody;
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
      body: AddTraficMatchRuleToTrafficMarkingPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateCenBandwidthPackageRequest extends $tea.Model {
  cenBandwidthPackageId?: string;
  cenId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      cenId: 'CenId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackageId: 'string',
      cenId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateCenBandwidthPackageResponseBody;
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
      body: AssociateCenBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateTransitRouterAttachmentWithRouteTableRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentId?: string;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentId: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateTransitRouterAttachmentWithRouteTableResponseBody extends $tea.Model {
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

export class AssociateTransitRouterAttachmentWithRouteTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateTransitRouterAttachmentWithRouteTableResponseBody;
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
      body: AssociateTransitRouterAttachmentWithRouteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateTransitRouterMulticastDomainRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentId?: string;
  transitRouterMulticastDomainId?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentId: 'string',
      transitRouterMulticastDomainId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateTransitRouterMulticastDomainResponseBody extends $tea.Model {
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

export class AssociateTransitRouterMulticastDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateTransitRouterMulticastDomainResponseBody;
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
      body: AssociateTransitRouterMulticastDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCenChildInstanceRequest extends $tea.Model {
  cenId?: string;
  childInstanceId?: string;
  childInstanceOwnerId?: number;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachCenChildInstanceResponseBody;
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
      body: AttachCenChildInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTransitRouterServiceRequest extends $tea.Model {
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTransitRouterServiceResponseBody extends $tea.Model {
  enabled?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTransitRouterServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckTransitRouterServiceResponseBody;
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
      body: CheckTransitRouterServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  protectionLevel?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: CreateCenRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      protectionLevel: 'ProtectionLevel',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      protectionLevel: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateCenRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenResponseBody extends $tea.Model {
  cenId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCenResponseBody;
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
      body: CreateCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenBandwidthPackageRequest extends $tea.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  autoRenewDuration?: number;
  bandwidth?: number;
  bandwidthPackageChargeType?: string;
  clientToken?: string;
  description?: string;
  geographicRegionAId?: string;
  geographicRegionBId?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  period?: number;
  pricingCycle?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: CreateCenBandwidthPackageRequestTag[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      bandwidth: 'Bandwidth',
      bandwidthPackageChargeType: 'BandwidthPackageChargeType',
      clientToken: 'ClientToken',
      description: 'Description',
      geographicRegionAId: 'GeographicRegionAId',
      geographicRegionBId: 'GeographicRegionBId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      pricingCycle: 'PricingCycle',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      bandwidth: 'number',
      bandwidthPackageChargeType: 'string',
      clientToken: 'string',
      description: 'string',
      geographicRegionAId: 'string',
      geographicRegionBId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      pricingCycle: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateCenBandwidthPackageRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenBandwidthPackageResponseBody extends $tea.Model {
  cenBandwidthPackageId?: string;
  cenBandwidthPackageOrderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      cenBandwidthPackageOrderId: 'CenBandwidthPackageOrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackageId: 'string',
      cenBandwidthPackageOrderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenBandwidthPackageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCenBandwidthPackageResponseBody;
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
      body: CreateCenBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenChildInstanceRouteEntryToAttachmentRequest extends $tea.Model {
  cenId?: string;
  clientToken?: string;
  destinationCidrBlock?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeTableId?: string;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      destinationCidrBlock: 'DestinationCidrBlock',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableId: 'RouteTableId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      destinationCidrBlock: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableId: 'string',
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenChildInstanceRouteEntryToAttachmentResponseBody extends $tea.Model {
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

export class CreateCenChildInstanceRouteEntryToAttachmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCenChildInstanceRouteEntryToAttachmentResponseBody;
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
      body: CreateCenChildInstanceRouteEntryToAttachmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenChildInstanceRouteEntryToCenRequest extends $tea.Model {
  cenId?: string;
  childInstanceAliUid?: number;
  childInstanceId?: string;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  destinationCidrBlock?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceAliUid: 'ChildInstanceAliUid',
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      destinationCidrBlock: 'DestinationCidrBlock',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceAliUid: 'number',
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      destinationCidrBlock: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCenChildInstanceRouteEntryToCenResponseBody;
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
      body: CreateCenChildInstanceRouteEntryToCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenInterRegionTrafficQosPolicyRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficQosPolicyDescription?: string;
  trafficQosPolicyName?: string;
  trafficQosQueues?: CreateCenInterRegionTrafficQosPolicyRequestTrafficQosQueues[];
  transitRouterAttachmentId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficQosPolicyDescription: 'TrafficQosPolicyDescription',
      trafficQosPolicyName: 'TrafficQosPolicyName',
      trafficQosQueues: 'TrafficQosQueues',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficQosPolicyDescription: 'string',
      trafficQosPolicyName: 'string',
      trafficQosQueues: { 'type': 'array', 'itemType': CreateCenInterRegionTrafficQosPolicyRequestTrafficQosQueues },
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenInterRegionTrafficQosPolicyResponseBody extends $tea.Model {
  requestId?: string;
  trafficQosPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficQosPolicyId: 'TrafficQosPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficQosPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenInterRegionTrafficQosPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCenInterRegionTrafficQosPolicyResponseBody;
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
      body: CreateCenInterRegionTrafficQosPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenInterRegionTrafficQosQueueRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  dscps?: number[];
  ownerAccount?: string;
  ownerId?: number;
  qosQueueDescription?: string;
  qosQueueName?: string;
  remainBandwidthPercent?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficQosPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      dscps: 'Dscps',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosQueueDescription: 'QosQueueDescription',
      qosQueueName: 'QosQueueName',
      remainBandwidthPercent: 'RemainBandwidthPercent',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficQosPolicyId: 'TrafficQosPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      dscps: { 'type': 'array', 'itemType': 'number' },
      ownerAccount: 'string',
      ownerId: 'number',
      qosQueueDescription: 'string',
      qosQueueName: 'string',
      remainBandwidthPercent: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficQosPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenInterRegionTrafficQosQueueResponseBody extends $tea.Model {
  qosQueueId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qosQueueId: 'QosQueueId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosQueueId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenInterRegionTrafficQosQueueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCenInterRegionTrafficQosQueueResponseBody;
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
      body: CreateCenInterRegionTrafficQosQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenRouteMapRequest extends $tea.Model {
  asPathMatchMode?: string;
  cenId?: string;
  cenRegionId?: string;
  cidrMatchMode?: string;
  communityMatchMode?: string;
  communityOperateMode?: string;
  description?: string;
  destinationChildInstanceTypes?: string[];
  destinationCidrBlocks?: string[];
  destinationInstanceIds?: string[];
  destinationInstanceIdsReverseMatch?: boolean;
  destinationRouteTableIds?: string[];
  mapResult?: string;
  matchAddressType?: string;
  matchAsns?: number[];
  matchCommunitySet?: string[];
  nextPriority?: number;
  operateCommunitySet?: string[];
  ownerAccount?: string;
  ownerId?: number;
  preference?: number;
  prependAsPath?: number[];
  priority?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeTypes?: string[];
  sourceChildInstanceTypes?: string[];
  sourceInstanceIds?: string[];
  sourceInstanceIdsReverseMatch?: boolean;
  sourceRegionIds?: string[];
  sourceRouteTableIds?: string[];
  transitRouterRouteTableId?: string;
  transmitDirection?: string;
  static names(): { [key: string]: string } {
    return {
      asPathMatchMode: 'AsPathMatchMode',
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      cidrMatchMode: 'CidrMatchMode',
      communityMatchMode: 'CommunityMatchMode',
      communityOperateMode: 'CommunityOperateMode',
      description: 'Description',
      destinationChildInstanceTypes: 'DestinationChildInstanceTypes',
      destinationCidrBlocks: 'DestinationCidrBlocks',
      destinationInstanceIds: 'DestinationInstanceIds',
      destinationInstanceIdsReverseMatch: 'DestinationInstanceIdsReverseMatch',
      destinationRouteTableIds: 'DestinationRouteTableIds',
      mapResult: 'MapResult',
      matchAddressType: 'MatchAddressType',
      matchAsns: 'MatchAsns',
      matchCommunitySet: 'MatchCommunitySet',
      nextPriority: 'NextPriority',
      operateCommunitySet: 'OperateCommunitySet',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preference: 'Preference',
      prependAsPath: 'PrependAsPath',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTypes: 'RouteTypes',
      sourceChildInstanceTypes: 'SourceChildInstanceTypes',
      sourceInstanceIds: 'SourceInstanceIds',
      sourceInstanceIdsReverseMatch: 'SourceInstanceIdsReverseMatch',
      sourceRegionIds: 'SourceRegionIds',
      sourceRouteTableIds: 'SourceRouteTableIds',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
      transmitDirection: 'TransmitDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPathMatchMode: 'string',
      cenId: 'string',
      cenRegionId: 'string',
      cidrMatchMode: 'string',
      communityMatchMode: 'string',
      communityOperateMode: 'string',
      description: 'string',
      destinationChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      destinationCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      destinationInstanceIds: { 'type': 'array', 'itemType': 'string' },
      destinationInstanceIdsReverseMatch: 'boolean',
      destinationRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      mapResult: 'string',
      matchAddressType: 'string',
      matchAsns: { 'type': 'array', 'itemType': 'number' },
      matchCommunitySet: { 'type': 'array', 'itemType': 'string' },
      nextPriority: 'number',
      operateCommunitySet: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      preference: 'number',
      prependAsPath: { 'type': 'array', 'itemType': 'number' },
      priority: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTypes: { 'type': 'array', 'itemType': 'string' },
      sourceChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceIds: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceIdsReverseMatch: 'boolean',
      sourceRegionIds: { 'type': 'array', 'itemType': 'string' },
      sourceRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteTableId: 'string',
      transmitDirection: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCenRouteMapResponseBody;
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
      body: CreateCenRouteMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowlogRequest extends $tea.Model {
  cenId?: string;
  clientToken?: string;
  description?: string;
  flowLogName?: string;
  interval?: number;
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  projectName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: CreateFlowlogRequestTag[];
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      description: 'Description',
      flowLogName: 'FlowLogName',
      interval: 'Interval',
      logStoreName: 'LogStoreName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      description: 'string',
      flowLogName: 'string',
      interval: 'number',
      logStoreName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      projectName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateFlowlogRequestTag },
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowlogResponseBody extends $tea.Model {
  flowLogId?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowlogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFlowlogResponseBody;
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
      body: CreateFlowlogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficMarkingPolicyRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  markingDscp?: number;
  ownerAccount?: string;
  ownerId?: number;
  priority?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficMarkingPolicyDescription?: string;
  trafficMarkingPolicyName?: string;
  trafficMatchRules?: CreateTrafficMarkingPolicyRequestTrafficMatchRules[];
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      markingDscp: 'MarkingDscp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyDescription: 'TrafficMarkingPolicyDescription',
      trafficMarkingPolicyName: 'TrafficMarkingPolicyName',
      trafficMatchRules: 'TrafficMatchRules',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      markingDscp: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      priority: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyDescription: 'string',
      trafficMarkingPolicyName: 'string',
      trafficMatchRules: { 'type': 'array', 'itemType': CreateTrafficMarkingPolicyRequestTrafficMatchRules },
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficMarkingPolicyResponseBody extends $tea.Model {
  requestId?: string;
  trafficMarkingPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficMarkingPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficMarkingPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTrafficMarkingPolicyResponseBody;
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
      body: CreateTrafficMarkingPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouteTableAggregationRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouteTableAggregationCidr?: string;
  transitRouteTableAggregationDescription?: string;
  transitRouteTableAggregationName?: string;
  transitRouteTableAggregationScope?: string;
  transitRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouteTableAggregationCidr: 'TransitRouteTableAggregationCidr',
      transitRouteTableAggregationDescription: 'TransitRouteTableAggregationDescription',
      transitRouteTableAggregationName: 'TransitRouteTableAggregationName',
      transitRouteTableAggregationScope: 'TransitRouteTableAggregationScope',
      transitRouteTableId: 'TransitRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouteTableAggregationCidr: 'string',
      transitRouteTableAggregationDescription: 'string',
      transitRouteTableAggregationName: 'string',
      transitRouteTableAggregationScope: 'string',
      transitRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouteTableAggregationResponseBody extends $tea.Model {
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

export class CreateTransitRouteTableAggregationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTransitRouteTableAggregationResponseBody;
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
      body: CreateTransitRouteTableAggregationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterRequest extends $tea.Model {
  cenId?: string;
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  supportMulticast?: boolean;
  tag?: CreateTransitRouterRequestTag[];
  transitRouterCidrList?: CreateTransitRouterRequestTransitRouterCidrList[];
  transitRouterDescription?: string;
  transitRouterName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      supportMulticast: 'SupportMulticast',
      tag: 'Tag',
      transitRouterCidrList: 'TransitRouterCidrList',
      transitRouterDescription: 'TransitRouterDescription',
      transitRouterName: 'TransitRouterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      supportMulticast: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterRequestTag },
      transitRouterCidrList: { 'type': 'array', 'itemType': CreateTransitRouterRequestTransitRouterCidrList },
      transitRouterDescription: 'string',
      transitRouterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterShrinkRequest extends $tea.Model {
  cenId?: string;
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  supportMulticast?: boolean;
  tag?: CreateTransitRouterShrinkRequestTag[];
  transitRouterCidrListShrink?: string;
  transitRouterDescription?: string;
  transitRouterName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      supportMulticast: 'SupportMulticast',
      tag: 'Tag',
      transitRouterCidrListShrink: 'TransitRouterCidrList',
      transitRouterDescription: 'TransitRouterDescription',
      transitRouterName: 'TransitRouterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      supportMulticast: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterShrinkRequestTag },
      transitRouterCidrListShrink: 'string',
      transitRouterDescription: 'string',
      transitRouterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterResponseBody extends $tea.Model {
  requestId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTransitRouterResponseBody;
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
      body: CreateTransitRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterCidrRequest extends $tea.Model {
  cidr?: string;
  clientToken?: string;
  description?: string;
  dryRun?: boolean;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  publishCidrRoute?: boolean;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      publishCidrRoute: 'PublishCidrRoute',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      publishCidrRoute: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterCidrResponseBody extends $tea.Model {
  requestId?: string;
  transitRouterCidrId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterCidrId: 'TransitRouterCidrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterCidrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterCidrResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTransitRouterCidrResponseBody;
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
      body: CreateTransitRouterCidrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterMulticastDomainRequest extends $tea.Model {
  cenId?: string;
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: CreateTransitRouterMulticastDomainRequestTag[];
  transitRouterId?: string;
  transitRouterMulticastDomainDescription?: string;
  transitRouterMulticastDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      transitRouterMulticastDomainDescription: 'TransitRouterMulticastDomainDescription',
      transitRouterMulticastDomainName: 'TransitRouterMulticastDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterMulticastDomainRequestTag },
      transitRouterId: 'string',
      transitRouterMulticastDomainDescription: 'string',
      transitRouterMulticastDomainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterMulticastDomainResponseBody extends $tea.Model {
  requestId?: string;
  transitRouterMulticastDomainId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterMulticastDomainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterMulticastDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTransitRouterMulticastDomainResponseBody;
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
      body: CreateTransitRouterMulticastDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterPeerAttachmentRequest extends $tea.Model {
  autoPublishRouteEnabled?: boolean;
  bandwidth?: number;
  bandwidthType?: string;
  cenBandwidthPackageId?: string;
  cenId?: string;
  clientToken?: string;
  defaultLinkType?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  peerTransitRouterId?: string;
  peerTransitRouterRegionId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: CreateTransitRouterPeerAttachmentRequestTag[];
  transitRouterAttachmentDescription?: string;
  transitRouterAttachmentName?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      cenId: 'CenId',
      clientToken: 'ClientToken',
      defaultLinkType: 'DefaultLinkType',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerTransitRouterId: 'PeerTransitRouterId',
      peerTransitRouterRegionId: 'PeerTransitRouterRegionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      bandwidth: 'number',
      bandwidthType: 'string',
      cenBandwidthPackageId: 'string',
      cenId: 'string',
      clientToken: 'string',
      defaultLinkType: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      peerTransitRouterId: 'string',
      peerTransitRouterRegionId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterPeerAttachmentRequestTag },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterPeerAttachmentResponseBody extends $tea.Model {
  requestId?: string;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterPeerAttachmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTransitRouterPeerAttachmentResponseBody;
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
      body: CreateTransitRouterPeerAttachmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterPrefixListAssociationRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  nextHop?: string;
  nextHopType?: string;
  ownerAccount?: string;
  ownerId?: number;
  ownerUid?: number;
  prefixListId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterId?: string;
  transitRouterTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      nextHop: 'NextHop',
      nextHopType: 'NextHopType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      ownerUid: 'OwnerUid',
      prefixListId: 'PrefixListId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterId: 'TransitRouterId',
      transitRouterTableId: 'TransitRouterTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      nextHop: 'string',
      nextHopType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      ownerUid: 'number',
      prefixListId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterId: 'string',
      transitRouterTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterPrefixListAssociationResponseBody extends $tea.Model {
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

export class CreateTransitRouterPrefixListAssociationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTransitRouterPrefixListAssociationResponseBody;
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
      body: CreateTransitRouterPrefixListAssociationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterRouteEntryRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterRouteEntryDescription?: string;
  transitRouterRouteEntryDestinationCidrBlock?: string;
  transitRouterRouteEntryName?: string;
  transitRouterRouteEntryNextHopId?: string;
  transitRouterRouteEntryNextHopType?: string;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterRouteEntryDescription: 'TransitRouterRouteEntryDescription',
      transitRouterRouteEntryDestinationCidrBlock: 'TransitRouterRouteEntryDestinationCidrBlock',
      transitRouterRouteEntryName: 'TransitRouterRouteEntryName',
      transitRouterRouteEntryNextHopId: 'TransitRouterRouteEntryNextHopId',
      transitRouterRouteEntryNextHopType: 'TransitRouterRouteEntryNextHopType',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterRouteEntryDescription: 'string',
      transitRouterRouteEntryDestinationCidrBlock: 'string',
      transitRouterRouteEntryName: 'string',
      transitRouterRouteEntryNextHopId: 'string',
      transitRouterRouteEntryNextHopType: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterRouteEntryResponseBody extends $tea.Model {
  requestId?: string;
  transitRouterRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterRouteEntryId: 'TransitRouterRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterRouteEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterRouteEntryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTransitRouterRouteEntryResponseBody;
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
      body: CreateTransitRouterRouteEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterRouteTableRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeTableOptions?: CreateTransitRouterRouteTableRequestRouteTableOptions;
  tag?: CreateTransitRouterRouteTableRequestTag[];
  transitRouterId?: string;
  transitRouterRouteTableDescription?: string;
  transitRouterRouteTableName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableOptions: 'RouteTableOptions',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      transitRouterRouteTableDescription: 'TransitRouterRouteTableDescription',
      transitRouterRouteTableName: 'TransitRouterRouteTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableOptions: CreateTransitRouterRouteTableRequestRouteTableOptions,
      tag: { 'type': 'array', 'itemType': CreateTransitRouterRouteTableRequestTag },
      transitRouterId: 'string',
      transitRouterRouteTableDescription: 'string',
      transitRouterRouteTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterRouteTableResponseBody extends $tea.Model {
  requestId?: string;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterRouteTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTransitRouterRouteTableResponseBody;
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
      body: CreateTransitRouterRouteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterVbrAttachmentRequest extends $tea.Model {
  autoPublishRouteEnabled?: boolean;
  cenId?: string;
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: CreateTransitRouterVbrAttachmentRequestTag[];
  transitRouterAttachmentDescription?: string;
  transitRouterAttachmentName?: string;
  transitRouterId?: string;
  vbrId?: string;
  vbrOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
      vbrId: 'VbrId',
      vbrOwnerId: 'VbrOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      cenId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterVbrAttachmentRequestTag },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      vbrId: 'string',
      vbrOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterVbrAttachmentResponseBody extends $tea.Model {
  requestId?: string;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterVbrAttachmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTransitRouterVbrAttachmentResponseBody;
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
      body: CreateTransitRouterVbrAttachmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterVpcAttachmentRequest extends $tea.Model {
  autoPublishRouteEnabled?: boolean;
  cenId?: string;
  chargeType?: string;
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: CreateTransitRouterVpcAttachmentRequestTag[];
  transitRouterAttachmentDescription?: string;
  transitRouterAttachmentName?: string;
  transitRouterId?: string;
  vpcId?: string;
  vpcOwnerId?: number;
  zoneMappings?: CreateTransitRouterVpcAttachmentRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
      vpcId: 'VpcId',
      vpcOwnerId: 'VpcOwnerId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      cenId: 'string',
      chargeType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterVpcAttachmentRequestTag },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      vpcId: 'string',
      vpcOwnerId: 'number',
      zoneMappings: { 'type': 'array', 'itemType': CreateTransitRouterVpcAttachmentRequestZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterVpcAttachmentResponseBody extends $tea.Model {
  requestId?: string;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterVpcAttachmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTransitRouterVpcAttachmentResponseBody;
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
      body: CreateTransitRouterVpcAttachmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterVpnAttachmentRequest extends $tea.Model {
  autoPublishRouteEnabled?: boolean;
  cenId?: string;
  chargeType?: string;
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: CreateTransitRouterVpnAttachmentRequestTag[];
  transitRouterAttachmentDescription?: string;
  transitRouterAttachmentName?: string;
  transitRouterId?: string;
  vpnId?: string;
  vpnOwnerId?: number;
  zone?: CreateTransitRouterVpnAttachmentRequestZone[];
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
      vpnId: 'VpnId',
      vpnOwnerId: 'VpnOwnerId',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      cenId: 'string',
      chargeType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterVpnAttachmentRequestTag },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      vpnId: 'string',
      vpnOwnerId: 'number',
      zone: { 'type': 'array', 'itemType': CreateTransitRouterVpnAttachmentRequestZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterVpnAttachmentResponseBody extends $tea.Model {
  requestId?: string;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterVpnAttachmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTransitRouterVpnAttachmentResponseBody;
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
      body: CreateTransitRouterVpnAttachmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveFlowLogRequest extends $tea.Model {
  cenId?: string;
  clientToken?: string;
  flowLogId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      flowLogId: 'FlowLogId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      flowLogId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeactiveFlowLogResponseBody;
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
      body: DeactiveFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenRequest extends $tea.Model {
  cenId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCenResponseBody;
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
      body: DeleteCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenBandwidthPackageRequest extends $tea.Model {
  cenBandwidthPackageId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackageId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCenBandwidthPackageResponseBody;
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
      body: DeleteCenBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenChildInstanceRouteEntryToAttachmentRequest extends $tea.Model {
  cenId?: string;
  clientToken?: string;
  destinationCidrBlock?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeTableId?: string;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      destinationCidrBlock: 'DestinationCidrBlock',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableId: 'RouteTableId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      destinationCidrBlock: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableId: 'string',
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenChildInstanceRouteEntryToAttachmentResponseBody extends $tea.Model {
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

export class DeleteCenChildInstanceRouteEntryToAttachmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCenChildInstanceRouteEntryToAttachmentResponseBody;
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
      body: DeleteCenChildInstanceRouteEntryToAttachmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenChildInstanceRouteEntryToCenRequest extends $tea.Model {
  cenId?: string;
  childInstanceAliUid?: number;
  childInstanceId?: string;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  destinationCidrBlock?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceAliUid: 'ChildInstanceAliUid',
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      destinationCidrBlock: 'DestinationCidrBlock',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceAliUid: 'number',
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      destinationCidrBlock: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCenChildInstanceRouteEntryToCenResponseBody;
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
      body: DeleteCenChildInstanceRouteEntryToCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenInterRegionTrafficQosPolicyRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficQosPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficQosPolicyId: 'TrafficQosPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficQosPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenInterRegionTrafficQosPolicyResponseBody extends $tea.Model {
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

export class DeleteCenInterRegionTrafficQosPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCenInterRegionTrafficQosPolicyResponseBody;
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
      body: DeleteCenInterRegionTrafficQosPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenInterRegionTrafficQosQueueRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  qosQueueId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosQueueId: 'QosQueueId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      qosQueueId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenInterRegionTrafficQosQueueResponseBody extends $tea.Model {
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

export class DeleteCenInterRegionTrafficQosQueueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCenInterRegionTrafficQosQueueResponseBody;
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
      body: DeleteCenInterRegionTrafficQosQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCenRouteMapRequest extends $tea.Model {
  cenId?: string;
  cenRegionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeMapId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeMapId: 'RouteMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenRegionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCenRouteMapResponseBody;
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
      body: DeleteCenRouteMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowlogRequest extends $tea.Model {
  cenId?: string;
  clientToken?: string;
  flowLogId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      flowLogId: 'FlowLogId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      flowLogId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFlowlogResponseBody;
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
      body: DeleteFlowlogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteServiceInCenRequest extends $tea.Model {
  accessRegionId?: string;
  cenId?: string;
  host?: string;
  hostRegionId?: string;
  hostVpcId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      cenId: 'CenId',
      host: 'Host',
      hostRegionId: 'HostRegionId',
      hostVpcId: 'HostVpcId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      cenId: 'string',
      host: 'string',
      hostRegionId: 'string',
      hostVpcId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRouteServiceInCenResponseBody;
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
      body: DeleteRouteServiceInCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficMarkingPolicyRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficMarkingPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficMarkingPolicyResponseBody extends $tea.Model {
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

export class DeleteTrafficMarkingPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTrafficMarkingPolicyResponseBody;
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
      body: DeleteTrafficMarkingPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouteTableAggregationRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouteTableAggregationCidr?: string;
  transitRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouteTableAggregationCidr: 'TransitRouteTableAggregationCidr',
      transitRouteTableId: 'TransitRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouteTableAggregationCidr: 'string',
      transitRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouteTableAggregationResponseBody extends $tea.Model {
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

export class DeleteTransitRouteTableAggregationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTransitRouteTableAggregationResponseBody;
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
      body: DeleteTransitRouteTableAggregationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterResponseBody extends $tea.Model {
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

export class DeleteTransitRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTransitRouterResponseBody;
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
      body: DeleteTransitRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterCidrRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterCidrId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterCidrId: 'TransitRouterCidrId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterCidrId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterCidrResponseBody extends $tea.Model {
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

export class DeleteTransitRouterCidrResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTransitRouterCidrResponseBody;
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
      body: DeleteTransitRouterCidrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterMulticastDomainRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterMulticastDomainId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterMulticastDomainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterMulticastDomainResponseBody extends $tea.Model {
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

export class DeleteTransitRouterMulticastDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTransitRouterMulticastDomainResponseBody;
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
      body: DeleteTransitRouterMulticastDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterPeerAttachmentRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  force?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      force: 'Force',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      force: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterPeerAttachmentResponseBody extends $tea.Model {
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

export class DeleteTransitRouterPeerAttachmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTransitRouterPeerAttachmentResponseBody;
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
      body: DeleteTransitRouterPeerAttachmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterPrefixListAssociationRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  nextHop?: string;
  nextHopType?: string;
  ownerAccount?: string;
  ownerId?: number;
  prefixListId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterId?: string;
  transitRouterTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      nextHop: 'NextHop',
      nextHopType: 'NextHopType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      prefixListId: 'PrefixListId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterId: 'TransitRouterId',
      transitRouterTableId: 'TransitRouterTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      nextHop: 'string',
      nextHopType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      prefixListId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterId: 'string',
      transitRouterTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterPrefixListAssociationResponseBody extends $tea.Model {
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

export class DeleteTransitRouterPrefixListAssociationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTransitRouterPrefixListAssociationResponseBody;
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
      body: DeleteTransitRouterPrefixListAssociationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterRouteEntryRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterRouteEntryDestinationCidrBlock?: string;
  transitRouterRouteEntryId?: string;
  transitRouterRouteEntryNextHopId?: string;
  transitRouterRouteEntryNextHopType?: string;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterRouteEntryDestinationCidrBlock: 'TransitRouterRouteEntryDestinationCidrBlock',
      transitRouterRouteEntryId: 'TransitRouterRouteEntryId',
      transitRouterRouteEntryNextHopId: 'TransitRouterRouteEntryNextHopId',
      transitRouterRouteEntryNextHopType: 'TransitRouterRouteEntryNextHopType',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterRouteEntryDestinationCidrBlock: 'string',
      transitRouterRouteEntryId: 'string',
      transitRouterRouteEntryNextHopId: 'string',
      transitRouterRouteEntryNextHopType: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterRouteEntryResponseBody extends $tea.Model {
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

export class DeleteTransitRouterRouteEntryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTransitRouterRouteEntryResponseBody;
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
      body: DeleteTransitRouterRouteEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterRouteTableRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterRouteTableResponseBody extends $tea.Model {
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

export class DeleteTransitRouterRouteTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTransitRouterRouteTableResponseBody;
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
      body: DeleteTransitRouterRouteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterVbrAttachmentRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  force?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      force: 'Force',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      force: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterVbrAttachmentResponseBody extends $tea.Model {
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

export class DeleteTransitRouterVbrAttachmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTransitRouterVbrAttachmentResponseBody;
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
      body: DeleteTransitRouterVbrAttachmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterVpcAttachmentRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  force?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      force: 'Force',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      force: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterVpcAttachmentResponseBody extends $tea.Model {
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

export class DeleteTransitRouterVpcAttachmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTransitRouterVpcAttachmentResponseBody;
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
      body: DeleteTransitRouterVpcAttachmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterVpnAttachmentRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  force?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      force: 'Force',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      force: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransitRouterVpnAttachmentResponseBody extends $tea.Model {
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

export class DeleteTransitRouterVpnAttachmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTransitRouterVpnAttachmentResponseBody;
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
      body: DeleteTransitRouterVpnAttachmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterTransitRouterMulticastGroupMembersRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  groupIpAddress?: string;
  networkInterfaceIds?: string[];
  ownerAccount?: string;
  ownerId?: number;
  peerTransitRouterMulticastDomains?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterMulticastDomainId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      groupIpAddress: 'GroupIpAddress',
      networkInterfaceIds: 'NetworkInterfaceIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerTransitRouterMulticastDomains: 'PeerTransitRouterMulticastDomains',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      groupIpAddress: 'string',
      networkInterfaceIds: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      peerTransitRouterMulticastDomains: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterMulticastDomainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterTransitRouterMulticastGroupMembersResponseBody extends $tea.Model {
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

export class DeregisterTransitRouterMulticastGroupMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeregisterTransitRouterMulticastGroupMembersResponseBody;
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
      body: DeregisterTransitRouterMulticastGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterTransitRouterMulticastGroupSourcesRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  groupIpAddress?: string;
  networkInterfaceIds?: string[];
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterMulticastDomainId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      groupIpAddress: 'GroupIpAddress',
      networkInterfaceIds: 'NetworkInterfaceIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      groupIpAddress: 'string',
      networkInterfaceIds: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterMulticastDomainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterTransitRouterMulticastGroupSourcesResponseBody extends $tea.Model {
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

export class DeregisterTransitRouterMulticastGroupSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeregisterTransitRouterMulticastGroupSourcesResponseBody;
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
      body: DeregisterTransitRouterMulticastGroupSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeRequest extends $tea.Model {
  cenId?: string;
  childInstanceId?: string;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeResponseBody extends $tea.Model {
  cenId?: string;
  childInstanceAttachTime?: string;
  childInstanceAttributes?: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributes;
  childInstanceId?: string;
  childInstanceName?: string;
  childInstanceOwnerId?: number;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceAttachTime: 'ChildInstanceAttachTime',
      childInstanceAttributes: 'ChildInstanceAttributes',
      childInstanceId: 'ChildInstanceId',
      childInstanceName: 'ChildInstanceName',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceAttachTime: 'string',
      childInstanceAttributes: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributes,
      childInstanceId: 'string',
      childInstanceName: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCenAttachedChildInstanceAttributeResponseBody;
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
      body: DescribeCenAttachedChildInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstancesRequest extends $tea.Model {
  cenId?: string;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstancesResponseBody extends $tea.Model {
  childInstances?: DescribeCenAttachedChildInstancesResponseBodyChildInstances;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      childInstances: 'ChildInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstances: DescribeCenAttachedChildInstancesResponseBodyChildInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCenAttachedChildInstancesResponseBody;
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
      body: DescribeCenAttachedChildInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesRequest extends $tea.Model {
  filter?: DescribeCenBandwidthPackagesRequestFilter[];
  includeReservationData?: boolean;
  isOrKey?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: DescribeCenBandwidthPackagesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      includeReservationData: 'IncludeReservationData',
      isOrKey: 'IsOrKey',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesRequestFilter },
      includeReservationData: 'boolean',
      isOrKey: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBody extends $tea.Model {
  cenBandwidthPackages?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackages: 'CenBandwidthPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackages: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCenBandwidthPackagesResponseBody;
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
      body: DescribeCenBandwidthPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesRequest extends $tea.Model {
  cenId?: string;
  childInstanceId?: string;
  childInstanceRegionId?: string;
  childInstanceRouteTableId?: string;
  childInstanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      childInstanceType: 'ChildInstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
      childInstanceRouteTableId: 'string',
      childInstanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBody extends $tea.Model {
  cenRouteEntries?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntries;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cenRouteEntries: 'CenRouteEntries',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenRouteEntries: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntries,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCenChildInstanceRouteEntriesResponseBody;
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
      body: DescribeCenChildInstanceRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpanRemainingBandwidthRequest extends $tea.Model {
  cenId?: string;
  geographicRegionAId?: string;
  geographicRegionBId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      geographicRegionAId: 'GeographicRegionAId',
      geographicRegionBId: 'GeographicRegionBId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      geographicRegionAId: 'string',
      geographicRegionBId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpanRemainingBandwidthResponseBody extends $tea.Model {
  remainingBandwidth?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remainingBandwidth: 'RemainingBandwidth',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainingBandwidth: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpanRemainingBandwidthResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCenGeographicSpanRemainingBandwidthResponseBody;
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
      body: DescribeCenGeographicSpanRemainingBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpansRequest extends $tea.Model {
  geographicSpanId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      geographicSpanId: 'GeographicSpanId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      geographicSpanId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpansResponseBody extends $tea.Model {
  geographicSpanModels?: DescribeCenGeographicSpansResponseBodyGeographicSpanModels;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      geographicSpanModels: 'GeographicSpanModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      geographicSpanModels: DescribeCenGeographicSpansResponseBodyGeographicSpanModels,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpansResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCenGeographicSpansResponseBody;
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
      body: DescribeCenGeographicSpansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenInterRegionBandwidthLimitsRequest extends $tea.Model {
  cenId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trRegionId: 'TrRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenInterRegionBandwidthLimitsResponseBody extends $tea.Model {
  cenInterRegionBandwidthLimits?: DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimits;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cenInterRegionBandwidthLimits: 'CenInterRegionBandwidthLimits',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenInterRegionBandwidthLimits: DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimits,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenInterRegionBandwidthLimitsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCenInterRegionBandwidthLimitsResponseBody;
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
      body: DescribeCenInterRegionBandwidthLimitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenPrivateZoneRoutesRequest extends $tea.Model {
  accessRegionId?: string;
  cenId?: string;
  hostRegionId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      cenId: 'CenId',
      hostRegionId: 'HostRegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      cenId: 'string',
      hostRegionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenPrivateZoneRoutesResponseBody extends $tea.Model {
  cenId?: string;
  pageNumber?: number;
  pageSize?: number;
  privateZoneDnsServers?: string;
  privateZoneInfos?: DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfos;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateZoneDnsServers: 'PrivateZoneDnsServers',
      privateZoneInfos: 'PrivateZoneInfos',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      privateZoneDnsServers: 'string',
      privateZoneInfos: DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfos,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenPrivateZoneRoutesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCenPrivateZoneRoutesResponseBody;
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
      body: DescribeCenPrivateZoneRoutesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesRequest extends $tea.Model {
  cenId?: string;
  cenRegionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenRegionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBody extends $tea.Model {
  cenRouteEntries?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntries;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cenRouteEntries: 'CenRouteEntries',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenRouteEntries: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntries,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCenRegionDomainRouteEntriesResponseBody;
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
      body: DescribeCenRegionDomainRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsRequest extends $tea.Model {
  cenId?: string;
  cenRegionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeMapId?: string;
  transitRouterRouteTableId?: string;
  transmitDirection?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeMapId: 'RouteMapId',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
      transmitDirection: 'TransmitDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenRegionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeMapId: 'string',
      transitRouterRouteTableId: 'string',
      transmitDirection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  routeMaps?: DescribeCenRouteMapsResponseBodyRouteMaps;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      routeMaps: 'RouteMaps',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routeMaps: DescribeCenRouteMapsResponseBodyRouteMaps,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCenRouteMapsResponseBody;
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
      body: DescribeCenRouteMapsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenVbrHealthCheckRequest extends $tea.Model {
  cenId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vbrInstanceId?: string;
  vbrInstanceOwnerId?: number;
  vbrInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vbrInstanceId: 'VbrInstanceId',
      vbrInstanceOwnerId: 'VbrInstanceOwnerId',
      vbrInstanceRegionId: 'VbrInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vbrInstanceId: 'string',
      vbrInstanceOwnerId: 'number',
      vbrInstanceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenVbrHealthCheckResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vbrHealthChecks?: DescribeCenVbrHealthCheckResponseBodyVbrHealthChecks;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vbrHealthChecks: 'VbrHealthChecks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vbrHealthChecks: DescribeCenVbrHealthCheckResponseBodyVbrHealthChecks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenVbrHealthCheckResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCenVbrHealthCheckResponseBody;
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
      body: DescribeCenVbrHealthCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensRequest extends $tea.Model {
  filter?: DescribeCensRequestFilter[];
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: DescribeCensRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeCensRequestFilter },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeCensRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBody extends $tea.Model {
  cens?: DescribeCensResponseBodyCens;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cens: 'Cens',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cens: DescribeCensResponseBodyCens,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCensResponseBody;
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
      body: DescribeCensResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChildInstanceRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  ownerAccount?: string;
  ownerId?: number;
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChildInstanceRegionsResponseBody extends $tea.Model {
  regions?: DescribeChildInstanceRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeChildInstanceRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChildInstanceRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChildInstanceRegionsResponseBody;
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
      body: DescribeChildInstanceRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowlogsRequest extends $tea.Model {
  cenId?: string;
  clientToken?: string;
  description?: string;
  flowLogId?: string;
  flowLogName?: string;
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  projectName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  tag?: DescribeFlowlogsRequestTag[];
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      description: 'Description',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      logStoreName: 'LogStoreName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      description: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      logStoreName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeFlowlogsRequestTag },
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowlogsResponseBody extends $tea.Model {
  flowLogs?: DescribeFlowlogsResponseBodyFlowLogs;
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  success?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      flowLogs: 'FlowLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogs: DescribeFlowlogsResponseBodyFlowLogs,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowlogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFlowlogsResponseBody;
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
      body: DescribeFlowlogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeographicRegionMembershipRequest extends $tea.Model {
  geographicRegionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      geographicRegionId: 'GeographicRegionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      geographicRegionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeographicRegionMembershipResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionIds?: DescribeGeographicRegionMembershipResponseBodyRegionIds;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIds: 'RegionIds',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionIds: DescribeGeographicRegionMembershipResponseBodyRegionIds,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeographicRegionMembershipResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGeographicRegionMembershipResponseBody;
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
      body: DescribeGeographicRegionMembershipResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenRequest extends $tea.Model {
  cenId?: string;
  childInstanceId?: string;
  childInstanceOwnerId?: number;
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  productType?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productType: 'ProductType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceOwnerId: 'number',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenResponseBody extends $tea.Model {
  grantRules?: DescribeGrantRulesToCenResponseBodyGrantRules;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      grantRules: 'GrantRules',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRules: DescribeGrantRulesToCenResponseBodyGrantRules,
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

export class DescribeGrantRulesToCenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGrantRulesToCenResponseBody;
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
      body: DescribeGrantRulesToCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToResourceRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  productType?: string;
  regionId?: string;
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productType: 'ProductType',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productType: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToResourceResponseBody extends $tea.Model {
  grantRules?: DescribeGrantRulesToResourceResponseBodyGrantRules[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      grantRules: 'GrantRules',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRules: { 'type': 'array', 'itemType': DescribeGrantRulesToResourceResponseBodyGrantRules },
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

export class DescribeGrantRulesToResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGrantRulesToResourceResponseBody;
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
      body: DescribeGrantRulesToResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesRequest extends $tea.Model {
  cenId?: string;
  childInstanceId?: string;
  childInstanceRegionId?: string;
  childInstanceRouteTableId?: string;
  childInstanceType?: string;
  destinationCidrBlock?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      childInstanceType: 'ChildInstanceType',
      destinationCidrBlock: 'DestinationCidrBlock',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
      childInstanceRouteTableId: 'string',
      childInstanceType: 'string',
      destinationCidrBlock: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  publishedRouteEntries?: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publishedRouteEntries: 'PublishedRouteEntries',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      publishedRouteEntries: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePublishedRouteEntriesResponseBody;
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
      body: DescribePublishedRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteConflictRequest extends $tea.Model {
  childInstanceId?: string;
  childInstanceRegionId?: string;
  childInstanceRouteTableId?: string;
  childInstanceType?: string;
  destinationCidrBlock?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      childInstanceType: 'ChildInstanceType',
      destinationCidrBlock: 'DestinationCidrBlock',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
      childInstanceRouteTableId: 'string',
      childInstanceType: 'string',
      destinationCidrBlock: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteConflictResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  routeConflicts?: DescribeRouteConflictResponseBodyRouteConflicts;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      routeConflicts: 'RouteConflicts',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routeConflicts: DescribeRouteConflictResponseBodyRouteConflicts,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteConflictResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRouteConflictResponseBody;
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
      body: DescribeRouteConflictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteServicesInCenRequest extends $tea.Model {
  accessRegionId?: string;
  cenId?: string;
  host?: string;
  hostRegionId?: string;
  hostVpcId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      cenId: 'CenId',
      host: 'Host',
      hostRegionId: 'HostRegionId',
      hostVpcId: 'HostVpcId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      cenId: 'string',
      host: 'string',
      hostRegionId: 'string',
      hostVpcId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteServicesInCenResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  routeServiceEntries?: DescribeRouteServicesInCenResponseBodyRouteServiceEntries;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      routeServiceEntries: 'RouteServiceEntries',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routeServiceEntries: DescribeRouteServicesInCenResponseBodyRouteServiceEntries,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteServicesInCenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRouteServicesInCenResponseBody;
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
      body: DescribeRouteServicesInCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouteTableAggregationRequest extends $tea.Model {
  clientToken?: string;
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouteTableAggregationCidr?: string;
  transitRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouteTableAggregationCidr: 'TransitRouteTableAggregationCidr',
      transitRouteTableId: 'TransitRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouteTableAggregationCidr: 'string',
      transitRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouteTableAggregationResponseBody extends $tea.Model {
  count?: number;
  data?: DescribeTransitRouteTableAggregationResponseBodyData[];
  nextToken?: string;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': DescribeTransitRouteTableAggregationResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouteTableAggregationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTransitRouteTableAggregationResponseBody;
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
      body: DescribeTransitRouteTableAggregationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouteTableAggregationDetailRequest extends $tea.Model {
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouteTableAggregationCidr?: string;
  transitRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouteTableAggregationCidr: 'TransitRouteTableAggregationCidr',
      transitRouteTableId: 'TransitRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouteTableAggregationCidr: 'string',
      transitRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouteTableAggregationDetailResponseBody extends $tea.Model {
  count?: number;
  data?: DescribeTransitRouteTableAggregationDetailResponseBodyData[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': DescribeTransitRouteTableAggregationDetailResponseBodyData },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouteTableAggregationDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTransitRouteTableAggregationDetailResponseBody;
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
      body: DescribeTransitRouteTableAggregationDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCenChildInstanceRequest extends $tea.Model {
  cenId?: string;
  cenOwnerId?: number;
  childInstanceId?: string;
  childInstanceOwnerId?: number;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      childInstanceId: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachCenChildInstanceResponseBody;
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
      body: DetachCenChildInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableCenVbrHealthCheckRequest extends $tea.Model {
  cenId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vbrInstanceId?: string;
  vbrInstanceOwnerId?: number;
  vbrInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vbrInstanceId: 'VbrInstanceId',
      vbrInstanceOwnerId: 'VbrInstanceOwnerId',
      vbrInstanceRegionId: 'VbrInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vbrInstanceId: 'string',
      vbrInstanceOwnerId: 'number',
      vbrInstanceRegionId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableCenVbrHealthCheckResponseBody;
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
      body: DisableCenVbrHealthCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableTransitRouterRouteTablePropagationRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentId?: string;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentId: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableTransitRouterRouteTablePropagationResponseBody extends $tea.Model {
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

export class DisableTransitRouterRouteTablePropagationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableTransitRouterRouteTablePropagationResponseBody;
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
      body: DisableTransitRouterRouteTablePropagationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateTransitRouterMulticastDomainRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentId?: string;
  transitRouterMulticastDomainId?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentId: 'string',
      transitRouterMulticastDomainId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateTransitRouterMulticastDomainResponseBody extends $tea.Model {
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

export class DisassociateTransitRouterMulticastDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisassociateTransitRouterMulticastDomainResponseBody;
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
      body: DisassociateTransitRouterMulticastDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateTransitRouterAttachmentFromRouteTableRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentId?: string;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentId: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateTransitRouterAttachmentFromRouteTableResponseBody extends $tea.Model {
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

export class DissociateTransitRouterAttachmentFromRouteTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DissociateTransitRouterAttachmentFromRouteTableResponseBody;
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
      body: DissociateTransitRouterAttachmentFromRouteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCenVbrHealthCheckRequest extends $tea.Model {
  cenId?: string;
  description?: string;
  healthCheckInterval?: number;
  healthCheckOnly?: boolean;
  healthCheckSourceIp?: string;
  healthCheckTargetIp?: string;
  healthyThreshold?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vbrInstanceId?: string;
  vbrInstanceOwnerId?: number;
  vbrInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      description: 'Description',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckOnly: 'HealthCheckOnly',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      healthyThreshold: 'HealthyThreshold',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vbrInstanceId: 'VbrInstanceId',
      vbrInstanceOwnerId: 'VbrInstanceOwnerId',
      vbrInstanceRegionId: 'VbrInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      description: 'string',
      healthCheckInterval: 'number',
      healthCheckOnly: 'boolean',
      healthCheckSourceIp: 'string',
      healthCheckTargetIp: 'string',
      healthyThreshold: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vbrInstanceId: 'string',
      vbrInstanceOwnerId: 'number',
      vbrInstanceRegionId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableCenVbrHealthCheckResponseBody;
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
      body: EnableCenVbrHealthCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableTransitRouterRouteTablePropagationRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentId?: string;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentId: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableTransitRouterRouteTablePropagationResponseBody extends $tea.Model {
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

export class EnableTransitRouterRouteTablePropagationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableTransitRouterRouteTablePropagationResponseBody;
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
      body: EnableTransitRouterRouteTablePropagationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantInstanceToTransitRouterRequest extends $tea.Model {
  cenId?: string;
  cenOwnerId?: number;
  instanceId?: string;
  instanceType?: string;
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      instanceId: 'string',
      instanceType: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantInstanceToTransitRouterResponseBody extends $tea.Model {
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

export class GrantInstanceToTransitRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantInstanceToTransitRouterResponseBody;
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
      body: GrantInstanceToTransitRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenChildInstanceRouteEntriesToAttachmentRequest extends $tea.Model {
  cenId?: string;
  childInstanceRouteTableId?: string;
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeFilter?: ListCenChildInstanceRouteEntriesToAttachmentRequestRouteFilter[];
  serviceType?: string;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeFilter: 'RouteFilter',
      serviceType: 'ServiceType',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceRouteTableId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeFilter: { 'type': 'array', 'itemType': ListCenChildInstanceRouteEntriesToAttachmentRequestRouteFilter },
      serviceType: 'string',
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenChildInstanceRouteEntriesToAttachmentResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  routeEntry?: ListCenChildInstanceRouteEntriesToAttachmentResponseBodyRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeEntry: 'RouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      routeEntry: { 'type': 'array', 'itemType': ListCenChildInstanceRouteEntriesToAttachmentResponseBodyRouteEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenChildInstanceRouteEntriesToAttachmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCenChildInstanceRouteEntriesToAttachmentResponseBody;
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
      body: ListCenChildInstanceRouteEntriesToAttachmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenInterRegionTrafficQosPoliciesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficQosPolicyDescription?: string;
  trafficQosPolicyId?: string;
  trafficQosPolicyName?: string;
  transitRouterAttachmentId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficQosPolicyDescription: 'TrafficQosPolicyDescription',
      trafficQosPolicyId: 'TrafficQosPolicyId',
      trafficQosPolicyName: 'TrafficQosPolicyName',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficQosPolicyDescription: 'string',
      trafficQosPolicyId: 'string',
      trafficQosPolicyName: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenInterRegionTrafficQosPoliciesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  trafficQosPolicies?: ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPolicies[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficQosPolicies: 'TrafficQosPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      trafficQosPolicies: { 'type': 'array', 'itemType': ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenInterRegionTrafficQosPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCenInterRegionTrafficQosPoliciesResponseBody;
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
      body: ListCenInterRegionTrafficQosPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenInterRegionTrafficQosQueuesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficQosPolicyId?: string;
  trafficQosQueueDescription?: string;
  trafficQosQueueId?: string;
  trafficQosQueueName?: string;
  transitRouterAttachmentId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficQosPolicyId: 'TrafficQosPolicyId',
      trafficQosQueueDescription: 'TrafficQosQueueDescription',
      trafficQosQueueId: 'TrafficQosQueueId',
      trafficQosQueueName: 'TrafficQosQueueName',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficQosPolicyId: 'string',
      trafficQosQueueDescription: 'string',
      trafficQosQueueId: 'string',
      trafficQosQueueName: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenInterRegionTrafficQosQueuesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  trafficQosQueues?: ListCenInterRegionTrafficQosQueuesResponseBodyTrafficQosQueues[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      trafficQosQueues: 'TrafficQosQueues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      trafficQosQueues: { 'type': 'array', 'itemType': ListCenInterRegionTrafficQosQueuesResponseBodyTrafficQosQueues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenInterRegionTrafficQosQueuesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCenInterRegionTrafficQosQueuesResponseBody;
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
      body: ListCenInterRegionTrafficQosQueuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGrantVSwitchEnisRequest extends $tea.Model {
  cenId?: string;
  maxResults?: number;
  networkInterfaceId?: string[];
  networkInterfaceName?: string;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  primaryIpAddress?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      maxResults: 'MaxResults',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      primaryIpAddress: 'PrimaryIpAddress',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      maxResults: 'number',
      networkInterfaceId: { 'type': 'array', 'itemType': 'string' },
      networkInterfaceName: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      primaryIpAddress: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGrantVSwitchEnisResponseBody extends $tea.Model {
  grantVSwitchEnis?: ListGrantVSwitchEnisResponseBodyGrantVSwitchEnis[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      grantVSwitchEnis: 'GrantVSwitchEnis',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantVSwitchEnis: { 'type': 'array', 'itemType': ListGrantVSwitchEnisResponseBodyGrantVSwitchEnis },
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

export class ListGrantVSwitchEnisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGrantVSwitchEnisResponseBody;
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
      body: ListGrantVSwitchEnisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGrantVSwitchesToCenRequest extends $tea.Model {
  cenId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGrantVSwitchesToCenResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vSwitches?: ListGrantVSwitchesToCenResponseBodyVSwitches[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vSwitches: { 'type': 'array', 'itemType': ListGrantVSwitchesToCenResponseBodyVSwitches },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGrantVSwitchesToCenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGrantVSwitchesToCenResponseBody;
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
      body: ListGrantVSwitchesToCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageSize?: number;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
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
  tagResources?: ListTagResourcesResponseBodyTagResources;
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
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficMarkingPoliciesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficMarkingPolicyDescription?: string;
  trafficMarkingPolicyId?: string;
  trafficMarkingPolicyName?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyDescription: 'TrafficMarkingPolicyDescription',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
      trafficMarkingPolicyName: 'TrafficMarkingPolicyName',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyDescription: 'string',
      trafficMarkingPolicyId: 'string',
      trafficMarkingPolicyName: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficMarkingPoliciesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  trafficMarkingPolicies?: ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPolicies[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficMarkingPolicies: 'TrafficMarkingPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      trafficMarkingPolicies: { 'type': 'array', 'itemType': ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficMarkingPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrafficMarkingPoliciesResponseBody;
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
      body: ListTrafficMarkingPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterAvailableResourceRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  supportMulticast?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      supportMulticast: 'SupportMulticast',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      supportMulticast: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterAvailableResourceResponseBody extends $tea.Model {
  availableZones?: string[];
  masterZones?: string[];
  requestId?: string;
  slaveZones?: string[];
  supportMulticast?: boolean;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      masterZones: 'MasterZones',
      requestId: 'RequestId',
      slaveZones: 'SlaveZones',
      supportMulticast: 'SupportMulticast',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': 'string' },
      masterZones: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      slaveZones: { 'type': 'array', 'itemType': 'string' },
      supportMulticast: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterAvailableResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterAvailableResourceResponseBody;
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
      body: ListTransitRouterAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterCidrRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterCidrId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterCidrId: 'TransitRouterCidrId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterCidrId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterCidrResponseBody extends $tea.Model {
  cidrLists?: ListTransitRouterCidrResponseBodyCidrLists[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrLists: 'CidrLists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrLists: { 'type': 'array', 'itemType': ListTransitRouterCidrResponseBodyCidrLists },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterCidrResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterCidrResponseBody;
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
      body: ListTransitRouterCidrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterCidrAllocationRequest extends $tea.Model {
  attachmentId?: string;
  attachmentName?: string;
  cidr?: string;
  cidrBlock?: string;
  clientToken?: string;
  dedicatedOwnerId?: string;
  dryRun?: boolean;
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterCidrId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentId: 'AttachmentId',
      attachmentName: 'AttachmentName',
      cidr: 'Cidr',
      cidrBlock: 'CidrBlock',
      clientToken: 'ClientToken',
      dedicatedOwnerId: 'DedicatedOwnerId',
      dryRun: 'DryRun',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterCidrId: 'TransitRouterCidrId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentId: 'string',
      attachmentName: 'string',
      cidr: 'string',
      cidrBlock: 'string',
      clientToken: 'string',
      dedicatedOwnerId: 'string',
      dryRun: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterCidrId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterCidrAllocationResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  transitRouterCidrAllocations?: ListTransitRouterCidrAllocationResponseBodyTransitRouterCidrAllocations[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterCidrAllocations: 'TransitRouterCidrAllocations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterCidrAllocations: { 'type': 'array', 'itemType': ListTransitRouterCidrAllocationResponseBodyTransitRouterCidrAllocations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterCidrAllocationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterCidrAllocationResponseBody;
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
      body: ListTransitRouterCidrAllocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastDomainAssociationsRequest extends $tea.Model {
  clientToken?: string;
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  transitRouterAttachmentId?: string;
  transitRouterMulticastDomainId?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterMulticastDomainId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastDomainAssociationsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  transitRouterMulticastAssociations?: ListTransitRouterMulticastDomainAssociationsResponseBodyTransitRouterMulticastAssociations[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterMulticastAssociations: 'TransitRouterMulticastAssociations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterMulticastAssociations: { 'type': 'array', 'itemType': ListTransitRouterMulticastDomainAssociationsResponseBodyTransitRouterMulticastAssociations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastDomainAssociationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterMulticastDomainAssociationsResponseBody;
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
      body: ListTransitRouterMulticastDomainAssociationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastDomainVSwitchesRequest extends $tea.Model {
  cenId?: string;
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vSwitchIds?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastDomainVSwitchesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastDomainVSwitchesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterMulticastDomainVSwitchesResponseBody;
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
      body: ListTransitRouterMulticastDomainVSwitchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastDomainsRequest extends $tea.Model {
  cenId?: string;
  clientToken?: string;
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: ListTransitRouterMulticastDomainsRequestTag[];
  transitRouterId?: string;
  transitRouterMulticastDomainId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': ListTransitRouterMulticastDomainsRequestTag },
      transitRouterId: 'string',
      transitRouterMulticastDomainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastDomainsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  transitRouterMulticastDomains?: ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomains[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterMulticastDomains: 'TransitRouterMulticastDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterMulticastDomains: { 'type': 'array', 'itemType': ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomains },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterMulticastDomainsResponseBody;
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
      body: ListTransitRouterMulticastDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastGroupsRequest extends $tea.Model {
  clientToken?: string;
  groupIpAddress?: string;
  isGroupMember?: boolean;
  isGroupSource?: boolean;
  maxResults?: number;
  networkInterfaceIds?: string[];
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  peerTransitRouterMulticastDomains?: string[];
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  transitRouterAttachmentId?: string;
  transitRouterMulticastDomainId?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      groupIpAddress: 'GroupIpAddress',
      isGroupMember: 'IsGroupMember',
      isGroupSource: 'IsGroupSource',
      maxResults: 'MaxResults',
      networkInterfaceIds: 'NetworkInterfaceIds',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerTransitRouterMulticastDomains: 'PeerTransitRouterMulticastDomains',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      groupIpAddress: 'string',
      isGroupMember: 'boolean',
      isGroupSource: 'boolean',
      maxResults: 'number',
      networkInterfaceIds: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peerTransitRouterMulticastDomains: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterMulticastDomainId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastGroupsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  transitRouterMulticastGroups?: ListTransitRouterMulticastGroupsResponseBodyTransitRouterMulticastGroups[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterMulticastGroups: 'TransitRouterMulticastGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterMulticastGroups: { 'type': 'array', 'itemType': ListTransitRouterMulticastGroupsResponseBodyTransitRouterMulticastGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterMulticastGroupsResponseBody;
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
      body: ListTransitRouterMulticastGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterPeerAttachmentsRequest extends $tea.Model {
  cenId?: string;
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: ListTransitRouterPeerAttachmentsRequestTag[];
  transitRouterAttachmentId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': ListTransitRouterPeerAttachmentsRequestTag },
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterPeerAttachmentsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  transitRouterAttachments?: ListTransitRouterPeerAttachmentsResponseBodyTransitRouterAttachments[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterAttachments: 'TransitRouterAttachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterAttachments: { 'type': 'array', 'itemType': ListTransitRouterPeerAttachmentsResponseBodyTransitRouterAttachments },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterPeerAttachmentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterPeerAttachmentsResponseBody;
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
      body: ListTransitRouterPeerAttachmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterPrefixListAssociationRequest extends $tea.Model {
  nextHop?: string;
  nextHopInstanceId?: string;
  nextHopType?: string;
  ownerAccount?: string;
  ownerId?: number;
  ownerUid?: number;
  pageNumber?: number;
  pageSize?: number;
  prefixListId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  transitRouterId?: string;
  transitRouterTableId?: string;
  static names(): { [key: string]: string } {
    return {
      nextHop: 'NextHop',
      nextHopInstanceId: 'NextHopInstanceId',
      nextHopType: 'NextHopType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      ownerUid: 'OwnerUid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      prefixListId: 'PrefixListId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      transitRouterId: 'TransitRouterId',
      transitRouterTableId: 'TransitRouterTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHop: 'string',
      nextHopInstanceId: 'string',
      nextHopType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      ownerUid: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      prefixListId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      transitRouterId: 'string',
      transitRouterTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterPrefixListAssociationResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  prefixLists?: ListTransitRouterPrefixListAssociationResponseBodyPrefixLists[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      prefixLists: 'PrefixLists',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      prefixLists: { 'type': 'array', 'itemType': ListTransitRouterPrefixListAssociationResponseBodyPrefixLists },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterPrefixListAssociationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterPrefixListAssociationResponseBody;
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
      body: ListTransitRouterPrefixListAssociationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteEntriesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  prefixListId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeFilter?: ListTransitRouterRouteEntriesRequestRouteFilter[];
  transitRouterRouteEntryDestinationCidrBlock?: string;
  transitRouterRouteEntryIds?: string[];
  transitRouterRouteEntryNames?: string[];
  transitRouterRouteEntryNextHopId?: string;
  transitRouterRouteEntryNextHopResourceId?: string;
  transitRouterRouteEntryNextHopResourceType?: string;
  transitRouterRouteEntryNextHopType?: string;
  transitRouterRouteEntryOriginResourceId?: string;
  transitRouterRouteEntryOriginResourceType?: string;
  transitRouterRouteEntryStatus?: string;
  transitRouterRouteEntryType?: string;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      prefixListId: 'PrefixListId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeFilter: 'RouteFilter',
      transitRouterRouteEntryDestinationCidrBlock: 'TransitRouterRouteEntryDestinationCidrBlock',
      transitRouterRouteEntryIds: 'TransitRouterRouteEntryIds',
      transitRouterRouteEntryNames: 'TransitRouterRouteEntryNames',
      transitRouterRouteEntryNextHopId: 'TransitRouterRouteEntryNextHopId',
      transitRouterRouteEntryNextHopResourceId: 'TransitRouterRouteEntryNextHopResourceId',
      transitRouterRouteEntryNextHopResourceType: 'TransitRouterRouteEntryNextHopResourceType',
      transitRouterRouteEntryNextHopType: 'TransitRouterRouteEntryNextHopType',
      transitRouterRouteEntryOriginResourceId: 'TransitRouterRouteEntryOriginResourceId',
      transitRouterRouteEntryOriginResourceType: 'TransitRouterRouteEntryOriginResourceType',
      transitRouterRouteEntryStatus: 'TransitRouterRouteEntryStatus',
      transitRouterRouteEntryType: 'TransitRouterRouteEntryType',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      prefixListId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeFilter: { 'type': 'array', 'itemType': ListTransitRouterRouteEntriesRequestRouteFilter },
      transitRouterRouteEntryDestinationCidrBlock: 'string',
      transitRouterRouteEntryIds: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteEntryNames: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteEntryNextHopId: 'string',
      transitRouterRouteEntryNextHopResourceId: 'string',
      transitRouterRouteEntryNextHopResourceType: 'string',
      transitRouterRouteEntryNextHopType: 'string',
      transitRouterRouteEntryOriginResourceId: 'string',
      transitRouterRouteEntryOriginResourceType: 'string',
      transitRouterRouteEntryStatus: 'string',
      transitRouterRouteEntryType: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteEntriesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  transitRouterRouteEntries?: ListTransitRouterRouteEntriesResponseBodyTransitRouterRouteEntries[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterRouteEntries: 'TransitRouterRouteEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterRouteEntries: { 'type': 'array', 'itemType': ListTransitRouterRouteEntriesResponseBodyTransitRouterRouteEntries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterRouteEntriesResponseBody;
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
      body: ListTransitRouterRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTableAssociationsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  transitRouterAttachmentId?: string;
  transitRouterAttachmentResourceId?: string;
  transitRouterAttachmentResourceType?: string;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentResourceId: 'TransitRouterAttachmentResourceId',
      transitRouterAttachmentResourceType: 'TransitRouterAttachmentResourceType',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentResourceId: 'string',
      transitRouterAttachmentResourceType: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTableAssociationsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  transitRouterAssociations?: ListTransitRouterRouteTableAssociationsResponseBodyTransitRouterAssociations[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterAssociations: 'TransitRouterAssociations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterAssociations: { 'type': 'array', 'itemType': ListTransitRouterRouteTableAssociationsResponseBodyTransitRouterAssociations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTableAssociationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterRouteTableAssociationsResponseBody;
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
      body: ListTransitRouterRouteTableAssociationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablePropagationsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  transitRouterAttachmentId?: string;
  transitRouterAttachmentResourceId?: string;
  transitRouterAttachmentResourceType?: string;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentResourceId: 'TransitRouterAttachmentResourceId',
      transitRouterAttachmentResourceType: 'TransitRouterAttachmentResourceType',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentResourceId: 'string',
      transitRouterAttachmentResourceType: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablePropagationsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  transitRouterPropagations?: ListTransitRouterRouteTablePropagationsResponseBodyTransitRouterPropagations[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterPropagations: 'TransitRouterPropagations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterPropagations: { 'type': 'array', 'itemType': ListTransitRouterRouteTablePropagationsResponseBodyTransitRouterPropagations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablePropagationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterRouteTablePropagationsResponseBody;
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
      body: ListTransitRouterRouteTablePropagationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeTableOptions?: ListTransitRouterRouteTablesRequestRouteTableOptions;
  tag?: ListTransitRouterRouteTablesRequestTag[];
  transitRouterId?: string;
  transitRouterRouteTableIds?: string[];
  transitRouterRouteTableNames?: string[];
  transitRouterRouteTableStatus?: string;
  transitRouterRouteTableType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableOptions: 'RouteTableOptions',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      transitRouterRouteTableIds: 'TransitRouterRouteTableIds',
      transitRouterRouteTableNames: 'TransitRouterRouteTableNames',
      transitRouterRouteTableStatus: 'TransitRouterRouteTableStatus',
      transitRouterRouteTableType: 'TransitRouterRouteTableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableOptions: ListTransitRouterRouteTablesRequestRouteTableOptions,
      tag: { 'type': 'array', 'itemType': ListTransitRouterRouteTablesRequestTag },
      transitRouterId: 'string',
      transitRouterRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteTableNames: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteTableStatus: 'string',
      transitRouterRouteTableType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  transitRouterRouteTables?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterRouteTables: 'TransitRouterRouteTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterRouteTables: { 'type': 'array', 'itemType': ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterRouteTablesResponseBody;
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
      body: ListTransitRouterRouteTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVbrAttachmentsRequest extends $tea.Model {
  cenId?: string;
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: ListTransitRouterVbrAttachmentsRequestTag[];
  transitRouterAttachmentId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': ListTransitRouterVbrAttachmentsRequestTag },
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVbrAttachmentsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  transitRouterAttachments?: ListTransitRouterVbrAttachmentsResponseBodyTransitRouterAttachments[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterAttachments: 'TransitRouterAttachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterAttachments: { 'type': 'array', 'itemType': ListTransitRouterVbrAttachmentsResponseBodyTransitRouterAttachments },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVbrAttachmentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterVbrAttachmentsResponseBody;
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
      body: ListTransitRouterVbrAttachmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVpcAttachmentsRequest extends $tea.Model {
  cenId?: string;
  maxResults?: number;
  nextToken?: string;
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  tag?: ListTransitRouterVpcAttachmentsRequestTag[];
  transitRouterAttachmentId?: string;
  transitRouterId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListTransitRouterVpcAttachmentsRequestTag },
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVpcAttachmentsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  transitRouterAttachments?: ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachments[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterAttachments: 'TransitRouterAttachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterAttachments: { 'type': 'array', 'itemType': ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachments },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVpcAttachmentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterVpcAttachmentsResponseBody;
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
      body: ListTransitRouterVpcAttachmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVpnAttachmentsRequest extends $tea.Model {
  cenId?: string;
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: ListTransitRouterVpnAttachmentsRequestTag[];
  transitRouterAttachmentId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': ListTransitRouterVpnAttachmentsRequestTag },
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVpnAttachmentsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  transitRouterAttachments?: ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachments[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterAttachments: 'TransitRouterAttachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterAttachments: { 'type': 'array', 'itemType': ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachments },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVpnAttachmentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRouterVpnAttachmentsResponseBody;
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
      body: ListTransitRouterVpnAttachmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRoutersRequest extends $tea.Model {
  cenId?: string;
  featureFilter?: ListTransitRoutersRequestFeatureFilter[];
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  tag?: ListTransitRoutersRequestTag[];
  transitRouterId?: string;
  transitRouterName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      featureFilter: 'FeatureFilter',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      transitRouterName: 'TransitRouterName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      featureFilter: { 'type': 'array', 'itemType': ListTransitRoutersRequestFeatureFilter },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListTransitRoutersRequestTag },
      transitRouterId: 'string',
      transitRouterName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRoutersResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  transitRouters?: ListTransitRoutersResponseBodyTransitRouters[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouters: 'TransitRouters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      transitRouters: { 'type': 'array', 'itemType': ListTransitRoutersResponseBodyTransitRouters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRoutersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTransitRoutersResponseBody;
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
      body: ListTransitRoutersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCenAttributeRequest extends $tea.Model {
  cenId?: string;
  description?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  protectionLevel?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      protectionLevel: 'ProtectionLevel',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      protectionLevel: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCenAttributeResponseBody;
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
      body: ModifyCenAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCenBandwidthPackageAttributeRequest extends $tea.Model {
  cenBandwidthPackageId?: string;
  description?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackageId: 'string',
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCenBandwidthPackageAttributeResponseBody;
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
      body: ModifyCenBandwidthPackageAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCenBandwidthPackageSpecRequest extends $tea.Model {
  bandwidth?: number;
  cenBandwidthPackageId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cenBandwidthPackageId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCenBandwidthPackageSpecResponseBody;
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
      body: ModifyCenBandwidthPackageSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCenRouteMapRequest extends $tea.Model {
  asPathMatchMode?: string;
  cenId?: string;
  cenRegionId?: string;
  cidrMatchMode?: string;
  communityMatchMode?: string;
  communityOperateMode?: string;
  description?: string;
  destinationChildInstanceTypes?: string[];
  destinationCidrBlocks?: string[];
  destinationInstanceIds?: string[];
  destinationInstanceIdsReverseMatch?: boolean;
  destinationRouteTableIds?: string[];
  mapResult?: string;
  matchAddressType?: string;
  matchAsns?: number[];
  matchCommunitySet?: string[];
  nextPriority?: number;
  operateCommunitySet?: string[];
  ownerAccount?: string;
  ownerId?: number;
  preference?: number;
  prependAsPath?: number[];
  priority?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeMapId?: string;
  routeTypes?: string[];
  sourceChildInstanceTypes?: string[];
  sourceInstanceIds?: string[];
  sourceInstanceIdsReverseMatch?: boolean;
  sourceRegionIds?: string[];
  sourceRouteTableIds?: string[];
  static names(): { [key: string]: string } {
    return {
      asPathMatchMode: 'AsPathMatchMode',
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      cidrMatchMode: 'CidrMatchMode',
      communityMatchMode: 'CommunityMatchMode',
      communityOperateMode: 'CommunityOperateMode',
      description: 'Description',
      destinationChildInstanceTypes: 'DestinationChildInstanceTypes',
      destinationCidrBlocks: 'DestinationCidrBlocks',
      destinationInstanceIds: 'DestinationInstanceIds',
      destinationInstanceIdsReverseMatch: 'DestinationInstanceIdsReverseMatch',
      destinationRouteTableIds: 'DestinationRouteTableIds',
      mapResult: 'MapResult',
      matchAddressType: 'MatchAddressType',
      matchAsns: 'MatchAsns',
      matchCommunitySet: 'MatchCommunitySet',
      nextPriority: 'NextPriority',
      operateCommunitySet: 'OperateCommunitySet',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preference: 'Preference',
      prependAsPath: 'PrependAsPath',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeMapId: 'RouteMapId',
      routeTypes: 'RouteTypes',
      sourceChildInstanceTypes: 'SourceChildInstanceTypes',
      sourceInstanceIds: 'SourceInstanceIds',
      sourceInstanceIdsReverseMatch: 'SourceInstanceIdsReverseMatch',
      sourceRegionIds: 'SourceRegionIds',
      sourceRouteTableIds: 'SourceRouteTableIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPathMatchMode: 'string',
      cenId: 'string',
      cenRegionId: 'string',
      cidrMatchMode: 'string',
      communityMatchMode: 'string',
      communityOperateMode: 'string',
      description: 'string',
      destinationChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      destinationCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      destinationInstanceIds: { 'type': 'array', 'itemType': 'string' },
      destinationInstanceIdsReverseMatch: 'boolean',
      destinationRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      mapResult: 'string',
      matchAddressType: 'string',
      matchAsns: { 'type': 'array', 'itemType': 'number' },
      matchCommunitySet: { 'type': 'array', 'itemType': 'string' },
      nextPriority: 'number',
      operateCommunitySet: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      preference: 'number',
      prependAsPath: { 'type': 'array', 'itemType': 'number' },
      priority: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeMapId: 'string',
      routeTypes: { 'type': 'array', 'itemType': 'string' },
      sourceChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceIds: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceIdsReverseMatch: 'boolean',
      sourceRegionIds: { 'type': 'array', 'itemType': 'string' },
      sourceRouteTableIds: { 'type': 'array', 'itemType': 'string' },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCenRouteMapResponseBody;
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
      body: ModifyCenRouteMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowLogAttributeRequest extends $tea.Model {
  cenId?: string;
  clientToken?: string;
  description?: string;
  flowLogId?: string;
  flowLogName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      description: 'Description',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      description: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFlowLogAttributeResponseBody;
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
      body: ModifyFlowLogAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTransitRouterCidrRequest extends $tea.Model {
  cidr?: string;
  clientToken?: string;
  description?: string;
  dryRun?: boolean;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  publishCidrRoute?: boolean;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterCidrId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      publishCidrRoute: 'PublishCidrRoute',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterCidrId: 'TransitRouterCidrId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      publishCidrRoute: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterCidrId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTransitRouterCidrResponseBody extends $tea.Model {
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

export class ModifyTransitRouterCidrResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTransitRouterCidrResponseBody;
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
      body: ModifyTransitRouterCidrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTransitRouterMulticastDomainRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterMulticastDomainDescription?: string;
  transitRouterMulticastDomainId?: string;
  transitRouterMulticastDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterMulticastDomainDescription: 'TransitRouterMulticastDomainDescription',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      transitRouterMulticastDomainName: 'TransitRouterMulticastDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterMulticastDomainDescription: 'string',
      transitRouterMulticastDomainId: 'string',
      transitRouterMulticastDomainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTransitRouterMulticastDomainResponseBody extends $tea.Model {
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

export class ModifyTransitRouterMulticastDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTransitRouterMulticastDomainResponseBody;
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
      body: ModifyTransitRouterMulticastDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  newResourceGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      newResourceGroupId: 'NewResourceGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      newResourceGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
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

export class MoveResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceGroupResponseBody;
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
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenTransitRouterServiceRequest extends $tea.Model {
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenTransitRouterServiceResponseBody extends $tea.Model {
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

export class OpenTransitRouterServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenTransitRouterServiceResponseBody;
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
      body: OpenTransitRouterServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRouteEntriesRequest extends $tea.Model {
  cenId?: string;
  childInstanceId?: string;
  childInstanceRegionId?: string;
  childInstanceRouteTableId?: string;
  childInstanceType?: string;
  destinationCidrBlock?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      childInstanceType: 'ChildInstanceType',
      destinationCidrBlock: 'DestinationCidrBlock',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
      childInstanceRouteTableId: 'string',
      childInstanceType: 'string',
      destinationCidrBlock: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishRouteEntriesResponseBody;
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
      body: PublishRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshTransitRouteTableAggregationRequest extends $tea.Model {
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouteTableAggregationCidr?: string;
  transitRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouteTableAggregationCidr: 'TransitRouteTableAggregationCidr',
      transitRouteTableId: 'TransitRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouteTableAggregationCidr: 'string',
      transitRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshTransitRouteTableAggregationResponseBody extends $tea.Model {
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

export class RefreshTransitRouteTableAggregationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshTransitRouteTableAggregationResponseBody;
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
      body: RefreshTransitRouteTableAggregationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterTransitRouterMulticastGroupMembersRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  groupIpAddress?: string;
  networkInterfaceIds?: string[];
  ownerAccount?: string;
  ownerId?: number;
  peerTransitRouterMulticastDomains?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterMulticastDomainId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      groupIpAddress: 'GroupIpAddress',
      networkInterfaceIds: 'NetworkInterfaceIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerTransitRouterMulticastDomains: 'PeerTransitRouterMulticastDomains',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      groupIpAddress: 'string',
      networkInterfaceIds: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      peerTransitRouterMulticastDomains: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterMulticastDomainId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterTransitRouterMulticastGroupMembersResponseBody extends $tea.Model {
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

export class RegisterTransitRouterMulticastGroupMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterTransitRouterMulticastGroupMembersResponseBody;
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
      body: RegisterTransitRouterMulticastGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterTransitRouterMulticastGroupSourcesRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  groupIpAddress?: string;
  networkInterfaceIds?: string[];
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterMulticastDomainId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      groupIpAddress: 'GroupIpAddress',
      networkInterfaceIds: 'NetworkInterfaceIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      groupIpAddress: 'string',
      networkInterfaceIds: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterMulticastDomainId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterTransitRouterMulticastGroupSourcesResponseBody extends $tea.Model {
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

export class RegisterTransitRouterMulticastGroupSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterTransitRouterMulticastGroupSourcesResponseBody;
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
      body: RegisterTransitRouterMulticastGroupSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTrafficMatchRuleFromTrafficMarkingPolicyRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficMarkRuleIds?: string[];
  trafficMarkingPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkRuleIds: 'TrafficMarkRuleIds',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkRuleIds: { 'type': 'array', 'itemType': 'string' },
      trafficMarkingPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponseBody extends $tea.Model {
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

export class RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponseBody;
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
      body: RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTraficMatchRuleFromTrafficMarkingPolicyRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficMarkRuleIds?: string[];
  trafficMarkingPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkRuleIds: 'TrafficMarkRuleIds',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkRuleIds: { 'type': 'array', 'itemType': 'string' },
      trafficMarkingPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTraficMatchRuleFromTrafficMarkingPolicyResponseBody extends $tea.Model {
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

export class RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveTraficMatchRuleFromTrafficMarkingPolicyResponseBody;
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
      body: RemoveTraficMatchRuleFromTrafficMarkingPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceTransitRouterRouteTableAssociationRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentId?: string;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentId: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceTransitRouterRouteTableAssociationResponseBody extends $tea.Model {
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

export class ReplaceTransitRouterRouteTableAssociationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReplaceTransitRouterRouteTableAssociationResponseBody;
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
      body: ReplaceTransitRouterRouteTableAssociationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResolveAndRouteServiceInCenRequest extends $tea.Model {
  accessRegionIds?: string[];
  cenId?: string;
  clientToken?: string;
  description?: string;
  host?: string;
  hostRegionId?: string;
  hostVpcId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessRegionIds: 'AccessRegionIds',
      cenId: 'CenId',
      clientToken: 'ClientToken',
      description: 'Description',
      host: 'Host',
      hostRegionId: 'HostRegionId',
      hostVpcId: 'HostVpcId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionIds: { 'type': 'array', 'itemType': 'string' },
      cenId: 'string',
      clientToken: 'string',
      description: 'string',
      host: 'string',
      hostRegionId: 'string',
      hostVpcId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResolveAndRouteServiceInCenResponseBody;
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
      body: ResolveAndRouteServiceInCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromTransitRouterRequest extends $tea.Model {
  cenId?: string;
  cenOwnerId?: number;
  instanceId?: string;
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      instanceId: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromTransitRouterResponseBody extends $tea.Model {
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

export class RevokeInstanceFromTransitRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeInstanceFromTransitRouterResponseBody;
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
      body: RevokeInstanceFromTransitRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoutePrivateZoneInCenToVpcRequest extends $tea.Model {
  accessRegionId?: string;
  cenId?: string;
  hostRegionId?: string;
  hostVpcId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      cenId: 'CenId',
      hostRegionId: 'HostRegionId',
      hostVpcId: 'HostVpcId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      cenId: 'string',
      hostRegionId: 'string',
      hostVpcId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RoutePrivateZoneInCenToVpcResponseBody;
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
      body: RoutePrivateZoneInCenToVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCenInterRegionBandwidthLimitRequest extends $tea.Model {
  bandwidthLimit?: number;
  cenId?: string;
  localRegionId?: string;
  oppositeRegionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      cenId: 'CenId',
      localRegionId: 'LocalRegionId',
      oppositeRegionId: 'OppositeRegionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'number',
      cenId: 'string',
      localRegionId: 'string',
      oppositeRegionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetCenInterRegionBandwidthLimitResponseBody;
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
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempUpgradeCenBandwidthPackageSpecRequest extends $tea.Model {
  bandwidth?: number;
  cenBandwidthPackageId?: string;
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cenBandwidthPackageId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TempUpgradeCenBandwidthPackageSpecResponseBody;
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
      body: TempUpgradeCenBandwidthPackageSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateCenBandwidthPackageRequest extends $tea.Model {
  cenBandwidthPackageId?: string;
  cenId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      cenId: 'CenId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackageId: 'string',
      cenId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnassociateCenBandwidthPackageResponseBody;
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
      body: UnassociateCenBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnroutePrivateZoneInCenToVpcRequest extends $tea.Model {
  accessRegionId?: string;
  cenId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      cenId: 'CenId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      cenId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnroutePrivateZoneInCenToVpcResponseBody;
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
      body: UnroutePrivateZoneInCenToVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCenInterRegionTrafficQosPolicyAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficQosPolicyDescription?: string;
  trafficQosPolicyId?: string;
  trafficQosPolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficQosPolicyDescription: 'TrafficQosPolicyDescription',
      trafficQosPolicyId: 'TrafficQosPolicyId',
      trafficQosPolicyName: 'TrafficQosPolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficQosPolicyDescription: 'string',
      trafficQosPolicyId: 'string',
      trafficQosPolicyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCenInterRegionTrafficQosPolicyAttributeResponseBody extends $tea.Model {
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

export class UpdateCenInterRegionTrafficQosPolicyAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCenInterRegionTrafficQosPolicyAttributeResponseBody;
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
      body: UpdateCenInterRegionTrafficQosPolicyAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCenInterRegionTrafficQosQueueAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  dscps?: number[];
  ownerAccount?: string;
  ownerId?: number;
  qosQueueDescription?: string;
  qosQueueId?: string;
  qosQueueName?: string;
  remainBandwidthPercent?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      dscps: 'Dscps',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosQueueDescription: 'QosQueueDescription',
      qosQueueId: 'QosQueueId',
      qosQueueName: 'QosQueueName',
      remainBandwidthPercent: 'RemainBandwidthPercent',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      dscps: { 'type': 'array', 'itemType': 'number' },
      ownerAccount: 'string',
      ownerId: 'number',
      qosQueueDescription: 'string',
      qosQueueId: 'string',
      qosQueueName: 'string',
      remainBandwidthPercent: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCenInterRegionTrafficQosQueueAttributeResponseBody extends $tea.Model {
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

export class UpdateCenInterRegionTrafficQosQueueAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCenInterRegionTrafficQosQueueAttributeResponseBody;
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
      body: UpdateCenInterRegionTrafficQosQueueAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficMarkingPolicyAttributeRequest extends $tea.Model {
  addTrafficMatchRules?: UpdateTrafficMarkingPolicyAttributeRequestAddTrafficMatchRules[];
  clientToken?: string;
  deleteTrafficMatchRules?: UpdateTrafficMarkingPolicyAttributeRequestDeleteTrafficMatchRules[];
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  trafficMarkingPolicyDescription?: string;
  trafficMarkingPolicyId?: string;
  trafficMarkingPolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      addTrafficMatchRules: 'AddTrafficMatchRules',
      clientToken: 'ClientToken',
      deleteTrafficMatchRules: 'DeleteTrafficMatchRules',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyDescription: 'TrafficMarkingPolicyDescription',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
      trafficMarkingPolicyName: 'TrafficMarkingPolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTrafficMatchRules: { 'type': 'array', 'itemType': UpdateTrafficMarkingPolicyAttributeRequestAddTrafficMatchRules },
      clientToken: 'string',
      deleteTrafficMatchRules: { 'type': 'array', 'itemType': UpdateTrafficMarkingPolicyAttributeRequestDeleteTrafficMatchRules },
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyDescription: 'string',
      trafficMarkingPolicyId: 'string',
      trafficMarkingPolicyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficMarkingPolicyAttributeResponseBody extends $tea.Model {
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

export class UpdateTrafficMarkingPolicyAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTrafficMarkingPolicyAttributeResponseBody;
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
      body: UpdateTrafficMarkingPolicyAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterDescription?: string;
  transitRouterId?: string;
  transitRouterName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterDescription: 'TransitRouterDescription',
      transitRouterId: 'TransitRouterId',
      transitRouterName: 'TransitRouterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterDescription: 'string',
      transitRouterId: 'string',
      transitRouterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterResponseBody extends $tea.Model {
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

export class UpdateTransitRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTransitRouterResponseBody;
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
      body: UpdateTransitRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterPeerAttachmentAttributeRequest extends $tea.Model {
  autoPublishRouteEnabled?: boolean;
  bandwidth?: number;
  bandwidthType?: string;
  cenBandwidthPackageId?: string;
  clientToken?: string;
  defaultLinkType?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentDescription?: string;
  transitRouterAttachmentId?: string;
  transitRouterAttachmentName?: string;
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      clientToken: 'ClientToken',
      defaultLinkType: 'DefaultLinkType',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      bandwidth: 'number',
      bandwidthType: 'string',
      cenBandwidthPackageId: 'string',
      clientToken: 'string',
      defaultLinkType: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterPeerAttachmentAttributeResponseBody extends $tea.Model {
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

export class UpdateTransitRouterPeerAttachmentAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTransitRouterPeerAttachmentAttributeResponseBody;
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
      body: UpdateTransitRouterPeerAttachmentAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterRouteEntryRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterRouteEntryDescription?: string;
  transitRouterRouteEntryId?: string;
  transitRouterRouteEntryName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterRouteEntryDescription: 'TransitRouterRouteEntryDescription',
      transitRouterRouteEntryId: 'TransitRouterRouteEntryId',
      transitRouterRouteEntryName: 'TransitRouterRouteEntryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterRouteEntryDescription: 'string',
      transitRouterRouteEntryId: 'string',
      transitRouterRouteEntryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterRouteEntryResponseBody extends $tea.Model {
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

export class UpdateTransitRouterRouteEntryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTransitRouterRouteEntryResponseBody;
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
      body: UpdateTransitRouterRouteEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterRouteTableRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeTableOptions?: UpdateTransitRouterRouteTableRequestRouteTableOptions;
  transitRouterRouteTableDescription?: string;
  transitRouterRouteTableId?: string;
  transitRouterRouteTableName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableOptions: 'RouteTableOptions',
      transitRouterRouteTableDescription: 'TransitRouterRouteTableDescription',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
      transitRouterRouteTableName: 'TransitRouterRouteTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableOptions: UpdateTransitRouterRouteTableRequestRouteTableOptions,
      transitRouterRouteTableDescription: 'string',
      transitRouterRouteTableId: 'string',
      transitRouterRouteTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterRouteTableResponseBody extends $tea.Model {
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

export class UpdateTransitRouterRouteTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTransitRouterRouteTableResponseBody;
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
      body: UpdateTransitRouterRouteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterVbrAttachmentAttributeRequest extends $tea.Model {
  autoPublishRouteEnabled?: boolean;
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentDescription?: string;
  transitRouterAttachmentId?: string;
  transitRouterAttachmentName?: string;
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterVbrAttachmentAttributeResponseBody extends $tea.Model {
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

export class UpdateTransitRouterVbrAttachmentAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTransitRouterVbrAttachmentAttributeResponseBody;
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
      body: UpdateTransitRouterVbrAttachmentAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterVpcAttachmentAttributeRequest extends $tea.Model {
  autoPublishRouteEnabled?: boolean;
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentDescription?: string;
  transitRouterAttachmentId?: string;
  transitRouterAttachmentName?: string;
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterVpcAttachmentAttributeResponseBody extends $tea.Model {
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

export class UpdateTransitRouterVpcAttachmentAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTransitRouterVpcAttachmentAttributeResponseBody;
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
      body: UpdateTransitRouterVpcAttachmentAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterVpcAttachmentZonesRequest extends $tea.Model {
  addZoneMappings?: UpdateTransitRouterVpcAttachmentZonesRequestAddZoneMappings[];
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  removeZoneMappings?: UpdateTransitRouterVpcAttachmentZonesRequestRemoveZoneMappings[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      addZoneMappings: 'AddZoneMappings',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      removeZoneMappings: 'RemoveZoneMappings',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addZoneMappings: { 'type': 'array', 'itemType': UpdateTransitRouterVpcAttachmentZonesRequestAddZoneMappings },
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      removeZoneMappings: { 'type': 'array', 'itemType': UpdateTransitRouterVpcAttachmentZonesRequestRemoveZoneMappings },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterVpcAttachmentZonesResponseBody extends $tea.Model {
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

export class UpdateTransitRouterVpcAttachmentZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTransitRouterVpcAttachmentZonesResponseBody;
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
      body: UpdateTransitRouterVpcAttachmentZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterVpnAttachmentAttributeRequest extends $tea.Model {
  autoPublishRouteEnabled?: boolean;
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transitRouterAttachmentDescription?: string;
  transitRouterAttachmentId?: string;
  transitRouterAttachmentName?: string;
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterVpnAttachmentAttributeResponseBody extends $tea.Model {
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

export class UpdateTransitRouterVpnAttachmentAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTransitRouterVpnAttachmentAttributeResponseBody;
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
      body: UpdateTransitRouterVpnAttachmentAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawPublishedRouteEntriesRequest extends $tea.Model {
  cenId?: string;
  childInstanceId?: string;
  childInstanceRegionId?: string;
  childInstanceRouteTableId?: string;
  childInstanceType?: string;
  destinationCidrBlock?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      childInstanceType: 'ChildInstanceType',
      destinationCidrBlock: 'DestinationCidrBlock',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
      childInstanceRouteTableId: 'string',
      childInstanceType: 'string',
      destinationCidrBlock: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WithdrawPublishedRouteEntriesResponseBody;
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
      body: WithdrawPublishedRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTrafficMatchRuleToTrafficMarkingPolicyRequestTrafficMatchRules extends $tea.Model {
  dstCidr?: string;
  dstPortRange?: number[];
  matchDscp?: number;
  protocol?: string;
  srcCidr?: string;
  srcPortRange?: number[];
  trafficMatchRuleDescription?: string;
  trafficMatchRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidr: 'DstCidr',
      dstPortRange: 'DstPortRange',
      matchDscp: 'MatchDscp',
      protocol: 'Protocol',
      srcCidr: 'SrcCidr',
      srcPortRange: 'SrcPortRange',
      trafficMatchRuleDescription: 'TrafficMatchRuleDescription',
      trafficMatchRuleName: 'TrafficMatchRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidr: 'string',
      dstPortRange: { 'type': 'array', 'itemType': 'number' },
      matchDscp: 'number',
      protocol: 'string',
      srcCidr: 'string',
      srcPortRange: { 'type': 'array', 'itemType': 'number' },
      trafficMatchRuleDescription: 'string',
      trafficMatchRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTraficMatchRuleToTrafficMarkingPolicyRequestTrafficMatchRules extends $tea.Model {
  dstCidr?: string;
  dstPortRange?: number[];
  matchDscp?: number;
  protocol?: string;
  srcCidr?: string;
  srcPortRange?: number[];
  trafficMatchRuleDescription?: string;
  trafficMatchRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidr: 'DstCidr',
      dstPortRange: 'DstPortRange',
      matchDscp: 'MatchDscp',
      protocol: 'Protocol',
      srcCidr: 'SrcCidr',
      srcPortRange: 'SrcPortRange',
      trafficMatchRuleDescription: 'TrafficMatchRuleDescription',
      trafficMatchRuleName: 'TrafficMatchRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidr: 'string',
      dstPortRange: { 'type': 'array', 'itemType': 'number' },
      matchDscp: 'number',
      protocol: 'string',
      srcCidr: 'string',
      srcPortRange: { 'type': 'array', 'itemType': 'number' },
      trafficMatchRuleDescription: 'string',
      trafficMatchRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCenRequestTag extends $tea.Model {
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

export class CreateCenBandwidthPackageRequestTag extends $tea.Model {
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

export class CreateCenInterRegionTrafficQosPolicyRequestTrafficQosQueues extends $tea.Model {
  dscps?: number[];
  qosQueueDescription?: string;
  qosQueueName?: string;
  remainBandwidthPercent?: string;
  static names(): { [key: string]: string } {
    return {
      dscps: 'Dscps',
      qosQueueDescription: 'QosQueueDescription',
      qosQueueName: 'QosQueueName',
      remainBandwidthPercent: 'RemainBandwidthPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dscps: { 'type': 'array', 'itemType': 'number' },
      qosQueueDescription: 'string',
      qosQueueName: 'string',
      remainBandwidthPercent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowlogRequestTag extends $tea.Model {
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

export class CreateTrafficMarkingPolicyRequestTrafficMatchRules extends $tea.Model {
  dstCidr?: string;
  dstPortRange?: number[];
  matchDscp?: number;
  protocol?: string;
  srcCidr?: string;
  srcPortRange?: number[];
  trafficMatchRuleDescription?: string;
  trafficMatchRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidr: 'DstCidr',
      dstPortRange: 'DstPortRange',
      matchDscp: 'MatchDscp',
      protocol: 'Protocol',
      srcCidr: 'SrcCidr',
      srcPortRange: 'SrcPortRange',
      trafficMatchRuleDescription: 'TrafficMatchRuleDescription',
      trafficMatchRuleName: 'TrafficMatchRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidr: 'string',
      dstPortRange: { 'type': 'array', 'itemType': 'number' },
      matchDscp: 'number',
      protocol: 'string',
      srcCidr: 'string',
      srcPortRange: { 'type': 'array', 'itemType': 'number' },
      trafficMatchRuleDescription: 'string',
      trafficMatchRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterRequestTag extends $tea.Model {
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

export class CreateTransitRouterRequestTransitRouterCidrList extends $tea.Model {
  cidr?: string;
  description?: string;
  name?: string;
  publishCidrRoute?: boolean;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
      name: 'Name',
      publishCidrRoute: 'PublishCidrRoute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
      name: 'string',
      publishCidrRoute: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterShrinkRequestTag extends $tea.Model {
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

export class CreateTransitRouterMulticastDomainRequestTag extends $tea.Model {
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

export class CreateTransitRouterPeerAttachmentRequestTag extends $tea.Model {
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

export class CreateTransitRouterRouteTableRequestRouteTableOptions extends $tea.Model {
  multiRegionECMP?: string;
  static names(): { [key: string]: string } {
    return {
      multiRegionECMP: 'MultiRegionECMP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiRegionECMP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterRouteTableRequestTag extends $tea.Model {
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

export class CreateTransitRouterVbrAttachmentRequestTag extends $tea.Model {
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

export class CreateTransitRouterVpcAttachmentRequestTag extends $tea.Model {
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

export class CreateTransitRouterVpcAttachmentRequestZoneMappings extends $tea.Model {
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterVpnAttachmentRequestTag extends $tea.Model {
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

export class CreateTransitRouterVpnAttachmentRequestZone extends $tea.Model {
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6CidrBlocksIpv6CidrBlock extends $tea.Model {
  ipv6CidrBlock?: string;
  ipv6Isp?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ipv6Isp: 'Ipv6Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6CidrBlock: 'string',
      ipv6Isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6CidrBlocks extends $tea.Model {
  ipv6CidrBlock?: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6CidrBlocksIpv6CidrBlock[];
  static names(): { [key: string]: string } {
    return {
      ipv6CidrBlock: 'ipv6CidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6CidrBlock: { 'type': 'array', 'itemType': DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6CidrBlocksIpv6CidrBlock },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesSecondaryCidrBlocks extends $tea.Model {
  secondaryCidrBlock?: string[];
  static names(): { [key: string]: string } {
    return {
      secondaryCidrBlock: 'secondaryCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondaryCidrBlock: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributes extends $tea.Model {
  cidrBlock?: string;
  ipv6CidrBlock?: string;
  ipv6CidrBlocks?: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6CidrBlocks;
  secondaryCidrBlocks?: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesSecondaryCidrBlocks;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ipv6CidrBlocks: 'Ipv6CidrBlocks',
      secondaryCidrBlocks: 'SecondaryCidrBlocks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      ipv6CidrBlock: 'string',
      ipv6CidrBlocks: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6CidrBlocks,
      secondaryCidrBlocks: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesSecondaryCidrBlocks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstancesResponseBodyChildInstancesChildInstance extends $tea.Model {
  cenId?: string;
  childInstanceAttachTime?: string;
  childInstanceId?: string;
  childInstanceOwnerId?: number;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceAttachTime: 'ChildInstanceAttachTime',
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceAttachTime: 'string',
      childInstanceId: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstancesResponseBodyChildInstances extends $tea.Model {
  childInstance?: DescribeCenAttachedChildInstancesResponseBodyChildInstancesChildInstance[];
  static names(): { [key: string]: string } {
    return {
      childInstance: 'ChildInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstance: { 'type': 'array', 'itemType': DescribeCenAttachedChildInstancesResponseBodyChildInstancesChildInstance },
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

export class DescribeCenBandwidthPackagesRequestTag extends $tea.Model {
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

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageCenIds extends $tea.Model {
  cenId?: string[];
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimitsOrginInterRegionBandwidthLimit extends $tea.Model {
  bandwidthLimit?: string;
  geographicSpanId?: string;
  localRegionId?: string;
  oppositeRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      geographicSpanId: 'GeographicSpanId',
      localRegionId: 'LocalRegionId',
      oppositeRegionId: 'OppositeRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'string',
      geographicSpanId: 'string',
      localRegionId: 'string',
      oppositeRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimits extends $tea.Model {
  orginInterRegionBandwidthLimit?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimitsOrginInterRegionBandwidthLimit[];
  static names(): { [key: string]: string } {
    return {
      orginInterRegionBandwidthLimit: 'OrginInterRegionBandwidthLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orginInterRegionBandwidthLimit: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimitsOrginInterRegionBandwidthLimit },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTagsTag extends $tea.Model {
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

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTags extends $tea.Model {
  tag?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackage extends $tea.Model {
  bandwidth?: number;
  bandwidthPackageChargeType?: string;
  businessStatus?: string;
  cenBandwidthPackageId?: string;
  cenIds?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageCenIds;
  creationTime?: string;
  description?: string;
  expiredTime?: string;
  geographicRegionAId?: string;
  geographicRegionBId?: string;
  geographicSpanId?: string;
  hasReservationData?: string;
  isCrossBorder?: boolean;
  name?: string;
  orginInterRegionBandwidthLimits?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimits;
  reservationActiveTime?: string;
  reservationBandwidth?: string;
  reservationInternetChargeType?: string;
  reservationOrderType?: string;
  resourceGroupId?: string;
  status?: string;
  tags?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTags;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bandwidthPackageChargeType: 'BandwidthPackageChargeType',
      businessStatus: 'BusinessStatus',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      cenIds: 'CenIds',
      creationTime: 'CreationTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      geographicRegionAId: 'GeographicRegionAId',
      geographicRegionBId: 'GeographicRegionBId',
      geographicSpanId: 'GeographicSpanId',
      hasReservationData: 'HasReservationData',
      isCrossBorder: 'IsCrossBorder',
      name: 'Name',
      orginInterRegionBandwidthLimits: 'OrginInterRegionBandwidthLimits',
      reservationActiveTime: 'ReservationActiveTime',
      reservationBandwidth: 'ReservationBandwidth',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      reservationOrderType: 'ReservationOrderType',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      bandwidthPackageChargeType: 'string',
      businessStatus: 'string',
      cenBandwidthPackageId: 'string',
      cenIds: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageCenIds,
      creationTime: 'string',
      description: 'string',
      expiredTime: 'string',
      geographicRegionAId: 'string',
      geographicRegionBId: 'string',
      geographicSpanId: 'string',
      hasReservationData: 'string',
      isCrossBorder: 'boolean',
      name: 'string',
      orginInterRegionBandwidthLimits: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimits,
      reservationActiveTime: 'string',
      reservationBandwidth: 'string',
      reservationInternetChargeType: 'string',
      reservationOrderType: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages extends $tea.Model {
  cenBandwidthPackage?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackage[];
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackage: 'CenBandwidthPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackage: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths extends $tea.Model {
  asPath?: string[];
  static names(): { [key: string]: string } {
    return {
      asPath: 'AsPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPath: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecordsCenRouteMapRecord extends $tea.Model {
  regionId?: string;
  routeMapId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routeMapId: 'RouteMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routeMapId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords extends $tea.Model {
  cenRouteMapRecord?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecordsCenRouteMapRecord[];
  static names(): { [key: string]: string } {
    return {
      cenRouteMapRecord: 'CenRouteMapRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenRouteMapRecord: { 'type': 'array', 'itemType': DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecordsCenRouteMapRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities extends $tea.Model {
  community?: string[];
  static names(): { [key: string]: string } {
    return {
      community: 'Community',
    };
  }

  static types(): { [key: string]: any } {
    return {
      community: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflictsConflict extends $tea.Model {
  destinationCidrBlock?: string;
  instanceId?: string;
  instanceType?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflicts extends $tea.Model {
  conflict?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflictsConflict[];
  static names(): { [key: string]: string } {
    return {
      conflict: 'Conflict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflict: { 'type': 'array', 'itemType': DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflictsConflict },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry extends $tea.Model {
  asPaths?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths;
  cenRouteMapRecords?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords;
  communities?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities;
  conflicts?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflicts;
  destinationCidrBlock?: string;
  nextHopInstanceId?: string;
  nextHopRegionId?: string;
  nextHopType?: string;
  operationalMode?: boolean;
  publishStatus?: string;
  routeTableId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      asPaths: 'AsPaths',
      cenRouteMapRecords: 'CenRouteMapRecords',
      communities: 'Communities',
      conflicts: 'Conflicts',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopInstanceId: 'NextHopInstanceId',
      nextHopRegionId: 'NextHopRegionId',
      nextHopType: 'NextHopType',
      operationalMode: 'OperationalMode',
      publishStatus: 'PublishStatus',
      routeTableId: 'RouteTableId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPaths: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths,
      cenRouteMapRecords: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords,
      communities: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities,
      conflicts: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflicts,
      destinationCidrBlock: 'string',
      nextHopInstanceId: 'string',
      nextHopRegionId: 'string',
      nextHopType: 'string',
      operationalMode: 'boolean',
      publishStatus: 'string',
      routeTableId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntries extends $tea.Model {
  cenRouteEntry?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      cenRouteEntry: 'CenRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenRouteEntry: { 'type': 'array', 'itemType': DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpansResponseBodyGeographicSpanModelsGeographicSpanModel extends $tea.Model {
  geographicSpanId?: string;
  localGeoRegionId?: string;
  oppositeGeoRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      geographicSpanId: 'GeographicSpanId',
      localGeoRegionId: 'LocalGeoRegionId',
      oppositeGeoRegionId: 'OppositeGeoRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      geographicSpanId: 'string',
      localGeoRegionId: 'string',
      oppositeGeoRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpansResponseBodyGeographicSpanModels extends $tea.Model {
  geographicSpanModel?: DescribeCenGeographicSpansResponseBodyGeographicSpanModelsGeographicSpanModel[];
  static names(): { [key: string]: string } {
    return {
      geographicSpanModel: 'GeographicSpanModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      geographicSpanModel: { 'type': 'array', 'itemType': DescribeCenGeographicSpansResponseBodyGeographicSpanModelsGeographicSpanModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimitsCenInterRegionBandwidthLimit extends $tea.Model {
  bandwidthLimit?: number;
  bandwidthPackageId?: string;
  cenId?: string;
  geographicSpanId?: string;
  localRegionId?: string;
  oppositeRegionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      bandwidthPackageId: 'BandwidthPackageId',
      cenId: 'CenId',
      geographicSpanId: 'GeographicSpanId',
      localRegionId: 'LocalRegionId',
      oppositeRegionId: 'OppositeRegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'number',
      bandwidthPackageId: 'string',
      cenId: 'string',
      geographicSpanId: 'string',
      localRegionId: 'string',
      oppositeRegionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimits extends $tea.Model {
  cenInterRegionBandwidthLimit?: DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimitsCenInterRegionBandwidthLimit[];
  static names(): { [key: string]: string } {
    return {
      cenInterRegionBandwidthLimit: 'CenInterRegionBandwidthLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenInterRegionBandwidthLimit: { 'type': 'array', 'itemType': DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimitsCenInterRegionBandwidthLimit },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfosPrivateZoneInfo extends $tea.Model {
  accessRegionId?: string;
  hostRegionId?: string;
  hostVpcId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      hostRegionId: 'HostRegionId',
      hostVpcId: 'HostVpcId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      hostRegionId: 'string',
      hostVpcId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfos extends $tea.Model {
  privateZoneInfo?: DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfosPrivateZoneInfo[];
  static names(): { [key: string]: string } {
    return {
      privateZoneInfo: 'PrivateZoneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateZoneInfo: { 'type': 'array', 'itemType': DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfosPrivateZoneInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths extends $tea.Model {
  asPath?: string[];
  static names(): { [key: string]: string } {
    return {
      asPath: 'AsPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPath: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecordsCenOutRouteMapRecord extends $tea.Model {
  regionId?: string;
  routeMapId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routeMapId: 'RouteMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routeMapId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecords extends $tea.Model {
  cenOutRouteMapRecord?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecordsCenOutRouteMapRecord[];
  static names(): { [key: string]: string } {
    return {
      cenOutRouteMapRecord: 'CenOutRouteMapRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenOutRouteMapRecord: { 'type': 'array', 'itemType': DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecordsCenOutRouteMapRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecordsCenRouteMapRecord extends $tea.Model {
  regionId?: string;
  routeMapId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routeMapId: 'RouteMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routeMapId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords extends $tea.Model {
  cenRouteMapRecord?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecordsCenRouteMapRecord[];
  static names(): { [key: string]: string } {
    return {
      cenRouteMapRecord: 'CenRouteMapRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenRouteMapRecord: { 'type': 'array', 'itemType': DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecordsCenRouteMapRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities extends $tea.Model {
  community?: string[];
  static names(): { [key: string]: string } {
    return {
      community: 'Community',
    };
  }

  static types(): { [key: string]: any } {
    return {
      community: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry extends $tea.Model {
  asPaths?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths;
  cenOutRouteMapRecords?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecords;
  cenRouteMapRecords?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords;
  communities?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities;
  destinationCidrBlock?: string;
  nextHopInstanceId?: string;
  nextHopRegionId?: string;
  nextHopType?: string;
  preference?: number;
  status?: string;
  toOtherRegionStatus?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      asPaths: 'AsPaths',
      cenOutRouteMapRecords: 'CenOutRouteMapRecords',
      cenRouteMapRecords: 'CenRouteMapRecords',
      communities: 'Communities',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopInstanceId: 'NextHopInstanceId',
      nextHopRegionId: 'NextHopRegionId',
      nextHopType: 'NextHopType',
      preference: 'Preference',
      status: 'Status',
      toOtherRegionStatus: 'ToOtherRegionStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPaths: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths,
      cenOutRouteMapRecords: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecords,
      cenRouteMapRecords: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords,
      communities: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities,
      destinationCidrBlock: 'string',
      nextHopInstanceId: 'string',
      nextHopRegionId: 'string',
      nextHopType: 'string',
      preference: 'number',
      status: 'string',
      toOtherRegionStatus: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntries extends $tea.Model {
  cenRouteEntry?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      cenRouteEntry: 'CenRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenRouteEntry: { 'type': 'array', 'itemType': DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationChildInstanceTypes extends $tea.Model {
  destinationChildInstanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationChildInstanceType: 'DestinationChildInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationChildInstanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationCidrBlocks extends $tea.Model {
  destinationCidrBlock?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationInstanceIds extends $tea.Model {
  destinationInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationInstanceId: 'DestinationInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationRouteTableIds extends $tea.Model {
  destinationRouteTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationRouteTableId: 'DestinationRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRouteTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchAsns extends $tea.Model {
  matchAsn?: string[];
  static names(): { [key: string]: string } {
    return {
      matchAsn: 'MatchAsn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchAsn: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchCommunitySet extends $tea.Model {
  matchCommunity?: string[];
  static names(): { [key: string]: string } {
    return {
      matchCommunity: 'MatchCommunity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCommunity: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapOperateCommunitySet extends $tea.Model {
  operateCommunity?: string[];
  static names(): { [key: string]: string } {
    return {
      operateCommunity: 'OperateCommunity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCommunity: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapPrependAsPath extends $tea.Model {
  asPath?: string[];
  static names(): { [key: string]: string } {
    return {
      asPath: 'AsPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPath: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapRouteTypes extends $tea.Model {
  routeType?: string[];
  static names(): { [key: string]: string } {
    return {
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceChildInstanceTypes extends $tea.Model {
  sourceChildInstanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceChildInstanceType: 'SourceChildInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceChildInstanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceInstanceIds extends $tea.Model {
  sourceInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRegionIds extends $tea.Model {
  sourceRegionId?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceRegionId: 'SourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceRegionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRouteTableIds extends $tea.Model {
  sourceRouteTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceRouteTableId: 'SourceRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceRouteTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMap extends $tea.Model {
  asPathMatchMode?: string;
  cenId?: string;
  cenRegionId?: string;
  cidrMatchMode?: string;
  communityMatchMode?: string;
  communityOperateMode?: string;
  description?: string;
  destinationChildInstanceTypes?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationChildInstanceTypes;
  destinationCidrBlocks?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationCidrBlocks;
  destinationInstanceIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationInstanceIds;
  destinationInstanceIdsReverseMatch?: boolean;
  destinationRouteTableIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationRouteTableIds;
  mapResult?: string;
  matchAddressType?: string;
  matchAsns?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchAsns;
  matchCommunitySet?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchCommunitySet;
  nextPriority?: number;
  operateCommunitySet?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapOperateCommunitySet;
  preference?: number;
  prependAsPath?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapPrependAsPath;
  priority?: number;
  routeMapId?: string;
  routeTypes?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapRouteTypes;
  sourceChildInstanceTypes?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceChildInstanceTypes;
  sourceInstanceIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceInstanceIds;
  sourceInstanceIdsReverseMatch?: boolean;
  sourceRegionIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRegionIds;
  sourceRouteTableIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRouteTableIds;
  status?: string;
  transitRouterRouteTableId?: string;
  transmitDirection?: string;
  static names(): { [key: string]: string } {
    return {
      asPathMatchMode: 'AsPathMatchMode',
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      cidrMatchMode: 'CidrMatchMode',
      communityMatchMode: 'CommunityMatchMode',
      communityOperateMode: 'CommunityOperateMode',
      description: 'Description',
      destinationChildInstanceTypes: 'DestinationChildInstanceTypes',
      destinationCidrBlocks: 'DestinationCidrBlocks',
      destinationInstanceIds: 'DestinationInstanceIds',
      destinationInstanceIdsReverseMatch: 'DestinationInstanceIdsReverseMatch',
      destinationRouteTableIds: 'DestinationRouteTableIds',
      mapResult: 'MapResult',
      matchAddressType: 'MatchAddressType',
      matchAsns: 'MatchAsns',
      matchCommunitySet: 'MatchCommunitySet',
      nextPriority: 'NextPriority',
      operateCommunitySet: 'OperateCommunitySet',
      preference: 'Preference',
      prependAsPath: 'PrependAsPath',
      priority: 'Priority',
      routeMapId: 'RouteMapId',
      routeTypes: 'RouteTypes',
      sourceChildInstanceTypes: 'SourceChildInstanceTypes',
      sourceInstanceIds: 'SourceInstanceIds',
      sourceInstanceIdsReverseMatch: 'SourceInstanceIdsReverseMatch',
      sourceRegionIds: 'SourceRegionIds',
      sourceRouteTableIds: 'SourceRouteTableIds',
      status: 'Status',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
      transmitDirection: 'TransmitDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPathMatchMode: 'string',
      cenId: 'string',
      cenRegionId: 'string',
      cidrMatchMode: 'string',
      communityMatchMode: 'string',
      communityOperateMode: 'string',
      description: 'string',
      destinationChildInstanceTypes: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationChildInstanceTypes,
      destinationCidrBlocks: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationCidrBlocks,
      destinationInstanceIds: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationInstanceIds,
      destinationInstanceIdsReverseMatch: 'boolean',
      destinationRouteTableIds: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationRouteTableIds,
      mapResult: 'string',
      matchAddressType: 'string',
      matchAsns: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchAsns,
      matchCommunitySet: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchCommunitySet,
      nextPriority: 'number',
      operateCommunitySet: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapOperateCommunitySet,
      preference: 'number',
      prependAsPath: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapPrependAsPath,
      priority: 'number',
      routeMapId: 'string',
      routeTypes: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapRouteTypes,
      sourceChildInstanceTypes: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceChildInstanceTypes,
      sourceInstanceIds: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceInstanceIds,
      sourceInstanceIdsReverseMatch: 'boolean',
      sourceRegionIds: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRegionIds,
      sourceRouteTableIds: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRouteTableIds,
      status: 'string',
      transitRouterRouteTableId: 'string',
      transmitDirection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMaps extends $tea.Model {
  routeMap?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMap[];
  static names(): { [key: string]: string } {
    return {
      routeMap: 'RouteMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeMap: { 'type': 'array', 'itemType': DescribeCenRouteMapsResponseBodyRouteMapsRouteMap },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenVbrHealthCheckResponseBodyVbrHealthChecksVbrHealthCheck extends $tea.Model {
  cenId?: string;
  description?: string;
  healthCheckInterval?: number;
  healthCheckOnly?: boolean;
  healthCheckSourceIp?: string;
  healthCheckTargetIp?: string;
  healthyThreshold?: number;
  vbrInstanceId?: string;
  vbrInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      description: 'Description',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckOnly: 'HealthCheckOnly',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      healthyThreshold: 'HealthyThreshold',
      vbrInstanceId: 'VbrInstanceId',
      vbrInstanceRegionId: 'VbrInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      description: 'string',
      healthCheckInterval: 'number',
      healthCheckOnly: 'boolean',
      healthCheckSourceIp: 'string',
      healthCheckTargetIp: 'string',
      healthyThreshold: 'number',
      vbrInstanceId: 'string',
      vbrInstanceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenVbrHealthCheckResponseBodyVbrHealthChecks extends $tea.Model {
  vbrHealthCheck?: DescribeCenVbrHealthCheckResponseBodyVbrHealthChecksVbrHealthCheck[];
  static names(): { [key: string]: string } {
    return {
      vbrHealthCheck: 'VbrHealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vbrHealthCheck: { 'type': 'array', 'itemType': DescribeCenVbrHealthCheckResponseBodyVbrHealthChecksVbrHealthCheck },
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

export class DescribeCensResponseBodyCensCenCenBandwidthPackageIds extends $tea.Model {
  cenBandwidthPackageId?: string[];
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackageId: 'CenBandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBodyCensCenTagsTag extends $tea.Model {
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

export class DescribeCensResponseBodyCensCenTags extends $tea.Model {
  tag?: DescribeCensResponseBodyCensCenTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensCenTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBodyCensCen extends $tea.Model {
  cenBandwidthPackageIds?: DescribeCensResponseBodyCensCenCenBandwidthPackageIds;
  cenId?: string;
  creationTime?: string;
  description?: string;
  ipv6Level?: string;
  name?: string;
  protectionLevel?: string;
  resourceGroupId?: string;
  status?: string;
  tags?: DescribeCensResponseBodyCensCenTags;
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackageIds: 'CenBandwidthPackageIds',
      cenId: 'CenId',
      creationTime: 'CreationTime',
      description: 'Description',
      ipv6Level: 'Ipv6Level',
      name: 'Name',
      protectionLevel: 'ProtectionLevel',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackageIds: DescribeCensResponseBodyCensCenCenBandwidthPackageIds,
      cenId: 'string',
      creationTime: 'string',
      description: 'string',
      ipv6Level: 'string',
      name: 'string',
      protectionLevel: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeCensResponseBodyCensCenTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBodyCens extends $tea.Model {
  cen?: DescribeCensResponseBodyCensCen[];
  static names(): { [key: string]: string } {
    return {
      cen: 'Cen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cen: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensCen },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChildInstanceRegionsResponseBodyRegionsRegion extends $tea.Model {
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

export class DescribeChildInstanceRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeChildInstanceRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeChildInstanceRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowlogsRequestTag extends $tea.Model {
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

export class DescribeFlowlogsResponseBodyFlowLogsFlowLogTagsTag extends $tea.Model {
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

export class DescribeFlowlogsResponseBodyFlowLogsFlowLogTags extends $tea.Model {
  tag?: DescribeFlowlogsResponseBodyFlowLogsFlowLogTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeFlowlogsResponseBodyFlowLogsFlowLogTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowlogsResponseBodyFlowLogsFlowLog extends $tea.Model {
  cenId?: string;
  creationTime?: string;
  description?: string;
  flowLogId?: string;
  flowLogName?: string;
  interval?: number;
  logStoreName?: string;
  projectName?: string;
  regionId?: string;
  status?: string;
  tags?: DescribeFlowlogsResponseBodyFlowLogsFlowLogTags;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      creationTime: 'CreationTime',
      description: 'Description',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      interval: 'Interval',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      status: 'Status',
      tags: 'Tags',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      creationTime: 'string',
      description: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      interval: 'number',
      logStoreName: 'string',
      projectName: 'string',
      regionId: 'string',
      status: 'string',
      tags: DescribeFlowlogsResponseBodyFlowLogsFlowLogTags,
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowlogsResponseBodyFlowLogs extends $tea.Model {
  flowLog?: DescribeFlowlogsResponseBodyFlowLogsFlowLog[];
  static names(): { [key: string]: string } {
    return {
      flowLog: 'FlowLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLog: { 'type': 'array', 'itemType': DescribeFlowlogsResponseBodyFlowLogsFlowLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeographicRegionMembershipResponseBodyRegionIdsRegionId extends $tea.Model {
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

export class DescribeGeographicRegionMembershipResponseBodyRegionIds extends $tea.Model {
  regionId?: DescribeGeographicRegionMembershipResponseBodyRegionIdsRegionId[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: { 'type': 'array', 'itemType': DescribeGeographicRegionMembershipResponseBodyRegionIdsRegionId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenResponseBodyGrantRulesGrantRule extends $tea.Model {
  cenId?: string;
  cenOwnerId?: number;
  childInstanceId?: string;
  childInstanceOwnerId?: number;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  createTime?: number;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      createTime: 'CreateTime',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      childInstanceId: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      createTime: 'number',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenResponseBodyGrantRules extends $tea.Model {
  grantRule?: DescribeGrantRulesToCenResponseBodyGrantRulesGrantRule[];
  static names(): { [key: string]: string } {
    return {
      grantRule: 'GrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRule: { 'type': 'array', 'itemType': DescribeGrantRulesToCenResponseBodyGrantRulesGrantRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToResourceResponseBodyGrantRules extends $tea.Model {
  cenId?: string;
  cenOwnerId?: number;
  createTime?: string;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      createTime: 'CreateTime',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      createTime: 'string',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflictsConflict extends $tea.Model {
  destinationCidrBlock?: string;
  instanceId?: string;
  instanceType?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflicts extends $tea.Model {
  conflict?: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflictsConflict[];
  static names(): { [key: string]: string } {
    return {
      conflict: 'Conflict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflict: { 'type': 'array', 'itemType': DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflictsConflict },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntry extends $tea.Model {
  childInstanceRouteTableId?: string;
  conflicts?: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflicts;
  destinationCidrBlock?: string;
  nextHopId?: string;
  nextHopType?: string;
  operationalMode?: boolean;
  publishStatus?: string;
  routeType?: string;
  static names(): { [key: string]: string } {
    return {
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      conflicts: 'Conflicts',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      operationalMode: 'OperationalMode',
      publishStatus: 'PublishStatus',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstanceRouteTableId: 'string',
      conflicts: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflicts,
      destinationCidrBlock: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      operationalMode: 'boolean',
      publishStatus: 'string',
      routeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries extends $tea.Model {
  publishedRouteEntry?: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      publishedRouteEntry: 'PublishedRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishedRouteEntry: { 'type': 'array', 'itemType': DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteConflictResponseBodyRouteConflictsRouteConflict extends $tea.Model {
  destinationCidrBlock?: string;
  instanceId?: string;
  instanceType?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteConflictResponseBodyRouteConflicts extends $tea.Model {
  routeConflict?: DescribeRouteConflictResponseBodyRouteConflictsRouteConflict[];
  static names(): { [key: string]: string } {
    return {
      routeConflict: 'RouteConflict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeConflict: { 'type': 'array', 'itemType': DescribeRouteConflictResponseBodyRouteConflictsRouteConflict },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntryCidrs extends $tea.Model {
  cidr?: string[];
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntry extends $tea.Model {
  accessRegionId?: string;
  cenId?: string;
  cidrs?: DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntryCidrs;
  description?: string;
  host?: string;
  hostRegionId?: string;
  hostVpcId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      cenId: 'CenId',
      cidrs: 'Cidrs',
      description: 'Description',
      host: 'Host',
      hostRegionId: 'HostRegionId',
      hostVpcId: 'HostVpcId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      cenId: 'string',
      cidrs: DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntryCidrs,
      description: 'string',
      host: 'string',
      hostRegionId: 'string',
      hostVpcId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteServicesInCenResponseBodyRouteServiceEntries extends $tea.Model {
  routeServiceEntry?: DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntry[];
  static names(): { [key: string]: string } {
    return {
      routeServiceEntry: 'RouteServiceEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeServiceEntry: { 'type': 'array', 'itemType': DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouteTableAggregationResponseBodyData extends $tea.Model {
  description?: string;
  name?: string;
  routeType?: string;
  scope?: string;
  status?: string;
  trRouteTableId?: string;
  transitRouteTableAggregationCidr?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      routeType: 'RouteType',
      scope: 'Scope',
      status: 'Status',
      trRouteTableId: 'TrRouteTableId',
      transitRouteTableAggregationCidr: 'TransitRouteTableAggregationCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      routeType: 'string',
      scope: 'string',
      status: 'string',
      trRouteTableId: 'string',
      transitRouteTableAggregationCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouteTableAggregationDetailResponseBodyData extends $tea.Model {
  description?: string;
  instanceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenChildInstanceRouteEntriesToAttachmentRequestRouteFilter extends $tea.Model {
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

export class ListCenChildInstanceRouteEntriesToAttachmentResponseBodyRouteEntry extends $tea.Model {
  cenId?: string;
  childInstanceRouteTableId?: string;
  destinationCidrBlock?: string;
  serviceType?: string;
  status?: string;
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      destinationCidrBlock: 'DestinationCidrBlock',
      serviceType: 'ServiceType',
      status: 'Status',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceRouteTableId: 'string',
      destinationCidrBlock: 'string',
      serviceType: 'string',
      status: 'string',
      transitRouterAttachmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPoliciesTrafficQosQueues extends $tea.Model {
  dscps?: number[];
  qosQueueDescription?: string;
  qosQueueId?: string;
  qosQueueName?: string;
  remainBandwidthPercent?: number;
  static names(): { [key: string]: string } {
    return {
      dscps: 'Dscps',
      qosQueueDescription: 'QosQueueDescription',
      qosQueueId: 'QosQueueId',
      qosQueueName: 'QosQueueName',
      remainBandwidthPercent: 'RemainBandwidthPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dscps: { 'type': 'array', 'itemType': 'number' },
      qosQueueDescription: 'string',
      qosQueueId: 'string',
      qosQueueName: 'string',
      remainBandwidthPercent: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPolicies extends $tea.Model {
  trafficQosPolicyDescription?: string;
  trafficQosPolicyId?: string;
  trafficQosPolicyName?: string;
  trafficQosPolicyStatus?: string;
  trafficQosQueues?: ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPoliciesTrafficQosQueues[];
  transitRouterAttachmentId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      trafficQosPolicyDescription: 'TrafficQosPolicyDescription',
      trafficQosPolicyId: 'TrafficQosPolicyId',
      trafficQosPolicyName: 'TrafficQosPolicyName',
      trafficQosPolicyStatus: 'TrafficQosPolicyStatus',
      trafficQosQueues: 'TrafficQosQueues',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficQosPolicyDescription: 'string',
      trafficQosPolicyId: 'string',
      trafficQosPolicyName: 'string',
      trafficQosPolicyStatus: 'string',
      trafficQosQueues: { 'type': 'array', 'itemType': ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPoliciesTrafficQosQueues },
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenInterRegionTrafficQosQueuesResponseBodyTrafficQosQueues extends $tea.Model {
  dscps?: number[];
  remainBandwidthPercent?: number;
  status?: string;
  trafficQosPolicyId?: string;
  trafficQosQueueDescription?: string;
  trafficQosQueueId?: string;
  trafficQosQueueName?: string;
  transitRouterAttachmentId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      dscps: 'Dscps',
      remainBandwidthPercent: 'RemainBandwidthPercent',
      status: 'Status',
      trafficQosPolicyId: 'TrafficQosPolicyId',
      trafficQosQueueDescription: 'TrafficQosQueueDescription',
      trafficQosQueueId: 'TrafficQosQueueId',
      trafficQosQueueName: 'TrafficQosQueueName',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dscps: { 'type': 'array', 'itemType': 'number' },
      remainBandwidthPercent: 'number',
      status: 'string',
      trafficQosPolicyId: 'string',
      trafficQosQueueDescription: 'string',
      trafficQosQueueId: 'string',
      trafficQosQueueName: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGrantVSwitchEnisResponseBodyGrantVSwitchEnis extends $tea.Model {
  description?: string;
  networkInterfaceId?: string;
  networkInterfaceName?: string;
  primaryIpAddress?: string;
  transitRouterFlag?: boolean;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      primaryIpAddress: 'PrimaryIpAddress',
      transitRouterFlag: 'TransitRouterFlag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      primaryIpAddress: 'string',
      transitRouterFlag: 'boolean',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGrantVSwitchesToCenResponseBodyVSwitches extends $tea.Model {
  vSwitchId?: string;
  vSwitchName?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
      zoneId: 'string',
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPoliciesTrafficMatchRules extends $tea.Model {
  dstCidr?: string;
  dstPortRange?: number[];
  matchDscp?: number;
  protocol?: string;
  srcCidr?: string;
  srcPortRange?: number[];
  trafficMatchRuleDescription?: string;
  trafficMatchRuleId?: string;
  trafficMatchRuleName?: string;
  trafficMatchRuleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidr: 'DstCidr',
      dstPortRange: 'DstPortRange',
      matchDscp: 'MatchDscp',
      protocol: 'Protocol',
      srcCidr: 'SrcCidr',
      srcPortRange: 'SrcPortRange',
      trafficMatchRuleDescription: 'TrafficMatchRuleDescription',
      trafficMatchRuleId: 'TrafficMatchRuleId',
      trafficMatchRuleName: 'TrafficMatchRuleName',
      trafficMatchRuleStatus: 'TrafficMatchRuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidr: 'string',
      dstPortRange: { 'type': 'array', 'itemType': 'number' },
      matchDscp: 'number',
      protocol: 'string',
      srcCidr: 'string',
      srcPortRange: { 'type': 'array', 'itemType': 'number' },
      trafficMatchRuleDescription: 'string',
      trafficMatchRuleId: 'string',
      trafficMatchRuleName: 'string',
      trafficMatchRuleStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPolicies extends $tea.Model {
  markingDscp?: number;
  priority?: number;
  trafficMarkingPolicyDescription?: string;
  trafficMarkingPolicyId?: string;
  trafficMarkingPolicyName?: string;
  trafficMarkingPolicyStatus?: string;
  trafficMatchRules?: ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPoliciesTrafficMatchRules[];
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      markingDscp: 'MarkingDscp',
      priority: 'Priority',
      trafficMarkingPolicyDescription: 'TrafficMarkingPolicyDescription',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
      trafficMarkingPolicyName: 'TrafficMarkingPolicyName',
      trafficMarkingPolicyStatus: 'TrafficMarkingPolicyStatus',
      trafficMatchRules: 'TrafficMatchRules',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markingDscp: 'number',
      priority: 'number',
      trafficMarkingPolicyDescription: 'string',
      trafficMarkingPolicyId: 'string',
      trafficMarkingPolicyName: 'string',
      trafficMarkingPolicyStatus: 'string',
      trafficMatchRules: { 'type': 'array', 'itemType': ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPoliciesTrafficMatchRules },
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterCidrResponseBodyCidrLists extends $tea.Model {
  cidr?: string;
  description?: string;
  family?: string;
  name?: string;
  publishCidrRoute?: boolean;
  transitRouterCidrId?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
      family: 'Family',
      name: 'Name',
      publishCidrRoute: 'PublishCidrRoute',
      transitRouterCidrId: 'TransitRouterCidrId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
      family: 'string',
      name: 'string',
      publishCidrRoute: 'boolean',
      transitRouterCidrId: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterCidrAllocationResponseBodyTransitRouterCidrAllocations extends $tea.Model {
  allocatedCidrBlock?: string;
  attachmentId?: string;
  attachmentName?: string;
  cidr?: string;
  transitRouterCidrId?: string;
  static names(): { [key: string]: string } {
    return {
      allocatedCidrBlock: 'AllocatedCidrBlock',
      attachmentId: 'AttachmentId',
      attachmentName: 'AttachmentName',
      cidr: 'Cidr',
      transitRouterCidrId: 'TransitRouterCidrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedCidrBlock: 'string',
      attachmentId: 'string',
      attachmentName: 'string',
      cidr: 'string',
      transitRouterCidrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastDomainAssociationsResponseBodyTransitRouterMulticastAssociations extends $tea.Model {
  resourceId?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  status?: string;
  transitRouterAttachmentId?: string;
  transitRouterMulticastDomainId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      status: 'Status',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      status: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterMulticastDomainId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastDomainsRequestTag extends $tea.Model {
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

export class ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsTags extends $tea.Model {
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

export class ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomains extends $tea.Model {
  cenId?: string;
  regionId?: string;
  status?: string;
  tags?: ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsTags[];
  transitRouterId?: string;
  transitRouterMulticastDomainDescription?: string;
  transitRouterMulticastDomainId?: string;
  transitRouterMulticastDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      regionId: 'RegionId',
      status: 'Status',
      tags: 'Tags',
      transitRouterId: 'TransitRouterId',
      transitRouterMulticastDomainDescription: 'TransitRouterMulticastDomainDescription',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      transitRouterMulticastDomainName: 'TransitRouterMulticastDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      regionId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsTags },
      transitRouterId: 'string',
      transitRouterMulticastDomainDescription: 'string',
      transitRouterMulticastDomainId: 'string',
      transitRouterMulticastDomainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastGroupsResponseBodyTransitRouterMulticastGroups extends $tea.Model {
  groupIpAddress?: string;
  groupMember?: boolean;
  groupSource?: boolean;
  memberType?: string;
  networkInterfaceId?: string;
  peerTransitRouterMulticastDomainId?: string;
  resourceId?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  sourceType?: string;
  status?: string;
  transitRouterAttachmentId?: string;
  transitRouterMulticastDomainId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      groupIpAddress: 'GroupIpAddress',
      groupMember: 'GroupMember',
      groupSource: 'GroupSource',
      memberType: 'MemberType',
      networkInterfaceId: 'NetworkInterfaceId',
      peerTransitRouterMulticastDomainId: 'PeerTransitRouterMulticastDomainId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      sourceType: 'SourceType',
      status: 'Status',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIpAddress: 'string',
      groupMember: 'boolean',
      groupSource: 'boolean',
      memberType: 'string',
      networkInterfaceId: 'string',
      peerTransitRouterMulticastDomainId: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      sourceType: 'string',
      status: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterMulticastDomainId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterPeerAttachmentsRequestTag extends $tea.Model {
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

export class ListTransitRouterPeerAttachmentsResponseBodyTransitRouterAttachmentsTags extends $tea.Model {
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

export class ListTransitRouterPeerAttachmentsResponseBodyTransitRouterAttachments extends $tea.Model {
  autoPublishRouteEnabled?: boolean;
  bandwidth?: number;
  bandwidthType?: string;
  cenBandwidthPackageId?: string;
  cenId?: string;
  creationTime?: string;
  defaultLinkType?: string;
  geographicSpanId?: string;
  peerTransitRouterId?: string;
  peerTransitRouterOwnerId?: number;
  peerTransitRouterRegionId?: string;
  regionId?: string;
  resourceType?: string;
  status?: string;
  tags?: ListTransitRouterPeerAttachmentsResponseBodyTransitRouterAttachmentsTags[];
  transitRouterAttachmentDescription?: string;
  transitRouterAttachmentId?: string;
  transitRouterAttachmentName?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      cenId: 'CenId',
      creationTime: 'CreationTime',
      defaultLinkType: 'DefaultLinkType',
      geographicSpanId: 'GeographicSpanId',
      peerTransitRouterId: 'PeerTransitRouterId',
      peerTransitRouterOwnerId: 'PeerTransitRouterOwnerId',
      peerTransitRouterRegionId: 'PeerTransitRouterRegionId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      status: 'Status',
      tags: 'Tags',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      bandwidth: 'number',
      bandwidthType: 'string',
      cenBandwidthPackageId: 'string',
      cenId: 'string',
      creationTime: 'string',
      defaultLinkType: 'string',
      geographicSpanId: 'string',
      peerTransitRouterId: 'string',
      peerTransitRouterOwnerId: 'number',
      peerTransitRouterRegionId: 'string',
      regionId: 'string',
      resourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTransitRouterPeerAttachmentsResponseBodyTransitRouterAttachmentsTags },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterPrefixListAssociationResponseBodyPrefixLists extends $tea.Model {
  nextHop?: string;
  nextHopInstanceId?: string;
  nextHopType?: string;
  ownerUid?: number;
  prefixListId?: string;
  status?: string;
  transitRouterId?: string;
  transitRouterTableId?: string;
  static names(): { [key: string]: string } {
    return {
      nextHop: 'NextHop',
      nextHopInstanceId: 'NextHopInstanceId',
      nextHopType: 'NextHopType',
      ownerUid: 'OwnerUid',
      prefixListId: 'PrefixListId',
      status: 'Status',
      transitRouterId: 'TransitRouterId',
      transitRouterTableId: 'TransitRouterTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHop: 'string',
      nextHopInstanceId: 'string',
      nextHopType: 'string',
      ownerUid: 'number',
      prefixListId: 'string',
      status: 'string',
      transitRouterId: 'string',
      transitRouterTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteEntriesRequestRouteFilter extends $tea.Model {
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

export class ListTransitRouterRouteEntriesResponseBodyTransitRouterRouteEntriesPathAttributes extends $tea.Model {
  asPaths?: string[];
  communities?: string[];
  originInstanceId?: string;
  originInstanceType?: string;
  originRouteType?: string;
  preference?: number;
  static names(): { [key: string]: string } {
    return {
      asPaths: 'AsPaths',
      communities: 'Communities',
      originInstanceId: 'OriginInstanceId',
      originInstanceType: 'OriginInstanceType',
      originRouteType: 'OriginRouteType',
      preference: 'Preference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPaths: { 'type': 'array', 'itemType': 'string' },
      communities: { 'type': 'array', 'itemType': 'string' },
      originInstanceId: 'string',
      originInstanceType: 'string',
      originRouteType: 'string',
      preference: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteEntriesResponseBodyTransitRouterRouteEntries extends $tea.Model {
  createTime?: string;
  operationalMode?: boolean;
  pathAttributes?: ListTransitRouterRouteEntriesResponseBodyTransitRouterRouteEntriesPathAttributes;
  prefixListId?: string;
  tag?: string;
  transitRouterRouteEntryDescription?: string;
  transitRouterRouteEntryDestinationCidrBlock?: string;
  transitRouterRouteEntryId?: string;
  transitRouterRouteEntryName?: string;
  transitRouterRouteEntryNextHopId?: string;
  transitRouterRouteEntryNextHopResourceId?: string;
  transitRouterRouteEntryNextHopResourceType?: string;
  transitRouterRouteEntryNextHopType?: string;
  transitRouterRouteEntryOriginResourceId?: string;
  transitRouterRouteEntryOriginResourceType?: string;
  transitRouterRouteEntryStatus?: string;
  transitRouterRouteEntryType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      operationalMode: 'OperationalMode',
      pathAttributes: 'PathAttributes',
      prefixListId: 'PrefixListId',
      tag: 'Tag',
      transitRouterRouteEntryDescription: 'TransitRouterRouteEntryDescription',
      transitRouterRouteEntryDestinationCidrBlock: 'TransitRouterRouteEntryDestinationCidrBlock',
      transitRouterRouteEntryId: 'TransitRouterRouteEntryId',
      transitRouterRouteEntryName: 'TransitRouterRouteEntryName',
      transitRouterRouteEntryNextHopId: 'TransitRouterRouteEntryNextHopId',
      transitRouterRouteEntryNextHopResourceId: 'TransitRouterRouteEntryNextHopResourceId',
      transitRouterRouteEntryNextHopResourceType: 'TransitRouterRouteEntryNextHopResourceType',
      transitRouterRouteEntryNextHopType: 'TransitRouterRouteEntryNextHopType',
      transitRouterRouteEntryOriginResourceId: 'TransitRouterRouteEntryOriginResourceId',
      transitRouterRouteEntryOriginResourceType: 'TransitRouterRouteEntryOriginResourceType',
      transitRouterRouteEntryStatus: 'TransitRouterRouteEntryStatus',
      transitRouterRouteEntryType: 'TransitRouterRouteEntryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      operationalMode: 'boolean',
      pathAttributes: ListTransitRouterRouteEntriesResponseBodyTransitRouterRouteEntriesPathAttributes,
      prefixListId: 'string',
      tag: 'string',
      transitRouterRouteEntryDescription: 'string',
      transitRouterRouteEntryDestinationCidrBlock: 'string',
      transitRouterRouteEntryId: 'string',
      transitRouterRouteEntryName: 'string',
      transitRouterRouteEntryNextHopId: 'string',
      transitRouterRouteEntryNextHopResourceId: 'string',
      transitRouterRouteEntryNextHopResourceType: 'string',
      transitRouterRouteEntryNextHopType: 'string',
      transitRouterRouteEntryOriginResourceId: 'string',
      transitRouterRouteEntryOriginResourceType: 'string',
      transitRouterRouteEntryStatus: 'string',
      transitRouterRouteEntryType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTableAssociationsResponseBodyTransitRouterAssociations extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  status?: string;
  transitRouterAttachmentId?: string;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablePropagationsResponseBodyTransitRouterPropagations extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  status?: string;
  transitRouterAttachmentId?: string;
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablesRequestRouteTableOptions extends $tea.Model {
  multiRegionECMP?: string;
  static names(): { [key: string]: string } {
    return {
      multiRegionECMP: 'MultiRegionECMP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiRegionECMP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablesRequestTag extends $tea.Model {
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

export class ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions extends $tea.Model {
  multiRegionECMP?: string;
  static names(): { [key: string]: string } {
    return {
      multiRegionECMP: 'MultiRegionECMP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiRegionECMP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesTags extends $tea.Model {
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

export class ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables extends $tea.Model {
  createTime?: string;
  regionId?: string;
  routeTableOptions?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions;
  tags?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesTags[];
  transitRouterId?: string;
  transitRouterRouteTableDescription?: string;
  transitRouterRouteTableId?: string;
  transitRouterRouteTableName?: string;
  transitRouterRouteTableStatus?: string;
  transitRouterRouteTableType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      regionId: 'RegionId',
      routeTableOptions: 'RouteTableOptions',
      tags: 'Tags',
      transitRouterId: 'TransitRouterId',
      transitRouterRouteTableDescription: 'TransitRouterRouteTableDescription',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
      transitRouterRouteTableName: 'TransitRouterRouteTableName',
      transitRouterRouteTableStatus: 'TransitRouterRouteTableStatus',
      transitRouterRouteTableType: 'TransitRouterRouteTableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      regionId: 'string',
      routeTableOptions: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions,
      tags: { 'type': 'array', 'itemType': ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesTags },
      transitRouterId: 'string',
      transitRouterRouteTableDescription: 'string',
      transitRouterRouteTableId: 'string',
      transitRouterRouteTableName: 'string',
      transitRouterRouteTableStatus: 'string',
      transitRouterRouteTableType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVbrAttachmentsRequestTag extends $tea.Model {
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

export class ListTransitRouterVbrAttachmentsResponseBodyTransitRouterAttachmentsTags extends $tea.Model {
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

export class ListTransitRouterVbrAttachmentsResponseBodyTransitRouterAttachments extends $tea.Model {
  autoPublishRouteEnabled?: boolean;
  cenId?: string;
  creationTime?: string;
  orderType?: string;
  resourceType?: string;
  status?: string;
  tags?: ListTransitRouterVbrAttachmentsResponseBodyTransitRouterAttachmentsTags[];
  transitRouterAttachmentDescription?: string;
  transitRouterAttachmentId?: string;
  transitRouterAttachmentName?: string;
  transitRouterId?: string;
  vbrId?: string;
  vbrOwnerId?: number;
  vbrRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
      creationTime: 'CreationTime',
      orderType: 'OrderType',
      resourceType: 'ResourceType',
      status: 'Status',
      tags: 'Tags',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
      vbrId: 'VbrId',
      vbrOwnerId: 'VbrOwnerId',
      vbrRegionId: 'VbrRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      cenId: 'string',
      creationTime: 'string',
      orderType: 'string',
      resourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTransitRouterVbrAttachmentsResponseBodyTransitRouterAttachmentsTags },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      vbrId: 'string',
      vbrOwnerId: 'number',
      vbrRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVpcAttachmentsRequestTag extends $tea.Model {
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

export class ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsTags extends $tea.Model {
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

export class ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsZoneMappings extends $tea.Model {
  networkInterfaceId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachments extends $tea.Model {
  autoPublishRouteEnabled?: boolean;
  cenId?: string;
  chargeType?: string;
  creationTime?: string;
  orderType?: string;
  resourceType?: string;
  status?: string;
  tags?: ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsTags[];
  transitRouterAttachmentDescription?: string;
  transitRouterAttachmentId?: string;
  transitRouterAttachmentName?: string;
  transitRouterId?: string;
  vpcId?: string;
  vpcOwnerId?: number;
  vpcRegionId?: string;
  zoneMappings?: ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      orderType: 'OrderType',
      resourceType: 'ResourceType',
      status: 'Status',
      tags: 'Tags',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
      vpcId: 'VpcId',
      vpcOwnerId: 'VpcOwnerId',
      vpcRegionId: 'VpcRegionId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      cenId: 'string',
      chargeType: 'string',
      creationTime: 'string',
      orderType: 'string',
      resourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsTags },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      vpcId: 'string',
      vpcOwnerId: 'number',
      vpcRegionId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVpnAttachmentsRequestTag extends $tea.Model {
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

export class ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsTags extends $tea.Model {
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

export class ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsZones extends $tea.Model {
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachments extends $tea.Model {
  autoPublishRouteEnabled?: boolean;
  cenId?: string;
  chargeType?: string;
  creationTime?: string;
  resourceType?: string;
  status?: string;
  tags?: ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsTags[];
  transitRouterAttachmentDescription?: string;
  transitRouterAttachmentId?: string;
  transitRouterAttachmentName?: string;
  transitRouterId?: string;
  vpnId?: string;
  vpnOwnerId?: number;
  vpnRegionId?: string;
  zones?: ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsZones[];
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      resourceType: 'ResourceType',
      status: 'Status',
      tags: 'Tags',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
      vpnId: 'VpnId',
      vpnOwnerId: 'VpnOwnerId',
      vpnRegionId: 'VpnRegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      cenId: 'string',
      chargeType: 'string',
      creationTime: 'string',
      resourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsTags },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      vpnId: 'string',
      vpnOwnerId: 'number',
      vpnRegionId: 'string',
      zones: { 'type': 'array', 'itemType': ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRoutersRequestFeatureFilter extends $tea.Model {
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

export class ListTransitRoutersRequestTag extends $tea.Model {
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

export class ListTransitRoutersResponseBodyTransitRoutersTags extends $tea.Model {
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

export class ListTransitRoutersResponseBodyTransitRoutersTransitRouterCidrList extends $tea.Model {
  cidr?: string;
  description?: string;
  name?: string;
  publishCidrRoute?: boolean;
  transitRouterCidrId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
      name: 'Name',
      publishCidrRoute: 'PublishCidrRoute',
      transitRouterCidrId: 'TransitRouterCidrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
      name: 'string',
      publishCidrRoute: 'boolean',
      transitRouterCidrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRoutersResponseBodyTransitRouters extends $tea.Model {
  aliUid?: number;
  cenId?: string;
  creationTime?: string;
  regionId?: string;
  status?: string;
  supportMulticast?: boolean;
  tags?: ListTransitRoutersResponseBodyTransitRoutersTags[];
  transitRouterCidrList?: ListTransitRoutersResponseBodyTransitRoutersTransitRouterCidrList[];
  transitRouterDescription?: string;
  transitRouterId?: string;
  transitRouterName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      cenId: 'CenId',
      creationTime: 'CreationTime',
      regionId: 'RegionId',
      status: 'Status',
      supportMulticast: 'SupportMulticast',
      tags: 'Tags',
      transitRouterCidrList: 'TransitRouterCidrList',
      transitRouterDescription: 'TransitRouterDescription',
      transitRouterId: 'TransitRouterId',
      transitRouterName: 'TransitRouterName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      cenId: 'string',
      creationTime: 'string',
      regionId: 'string',
      status: 'string',
      supportMulticast: 'boolean',
      tags: { 'type': 'array', 'itemType': ListTransitRoutersResponseBodyTransitRoutersTags },
      transitRouterCidrList: { 'type': 'array', 'itemType': ListTransitRoutersResponseBodyTransitRoutersTransitRouterCidrList },
      transitRouterDescription: 'string',
      transitRouterId: 'string',
      transitRouterName: 'string',
      type: 'string',
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

export class UpdateTrafficMarkingPolicyAttributeRequestAddTrafficMatchRules extends $tea.Model {
  dstCidr?: string;
  dstPortRange?: number[];
  matchDscp?: number;
  protocol?: string;
  srcCidr?: string;
  srcPortRange?: number[];
  trafficMatchRuleDescription?: string;
  trafficMatchRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidr: 'DstCidr',
      dstPortRange: 'DstPortRange',
      matchDscp: 'MatchDscp',
      protocol: 'Protocol',
      srcCidr: 'SrcCidr',
      srcPortRange: 'SrcPortRange',
      trafficMatchRuleDescription: 'TrafficMatchRuleDescription',
      trafficMatchRuleName: 'TrafficMatchRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidr: 'string',
      dstPortRange: { 'type': 'array', 'itemType': 'number' },
      matchDscp: 'number',
      protocol: 'string',
      srcCidr: 'string',
      srcPortRange: { 'type': 'array', 'itemType': 'number' },
      trafficMatchRuleDescription: 'string',
      trafficMatchRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficMarkingPolicyAttributeRequestDeleteTrafficMatchRules extends $tea.Model {
  dstCidr?: string;
  dstPortRange?: number[];
  matchDscp?: number;
  protocol?: string;
  srcCidr?: string;
  srcPortRange?: number[];
  trafficMatchRuleDescription?: string;
  trafficMatchRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidr: 'DstCidr',
      dstPortRange: 'DstPortRange',
      matchDscp: 'MatchDscp',
      protocol: 'Protocol',
      srcCidr: 'SrcCidr',
      srcPortRange: 'SrcPortRange',
      trafficMatchRuleDescription: 'TrafficMatchRuleDescription',
      trafficMatchRuleName: 'TrafficMatchRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidr: 'string',
      dstPortRange: { 'type': 'array', 'itemType': 'number' },
      matchDscp: 'number',
      protocol: 'string',
      srcCidr: 'string',
      srcPortRange: { 'type': 'array', 'itemType': 'number' },
      trafficMatchRuleDescription: 'string',
      trafficMatchRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterRouteTableRequestRouteTableOptions extends $tea.Model {
  multiRegionECMP?: string;
  static names(): { [key: string]: string } {
    return {
      multiRegionECMP: 'MultiRegionECMP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiRegionECMP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterVpcAttachmentZonesRequestAddZoneMappings extends $tea.Model {
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterVpcAttachmentZonesRequestRemoveZoneMappings extends $tea.Model {
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
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

  /**
    * *   After you create a flow log, it is enabled by default. You can call this operation to enable a disabled flow log.
    * *   `ActiveFlowLog` is an asynchronous operation. After you send a request, the system returns a**request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
    *     *   If a flow log is in the **Modifying** state, the flow log is being enabled. In this case, you can query the flow log but cannot perform other operations.
    *     *   If a flow log is in the **Active** state, the flow log is enabled.
    *
    * @param request ActiveFlowLogRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ActiveFlowLogResponse
   */
  async activeFlowLogWithOptions(request: ActiveFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<ActiveFlowLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ActiveFlowLog",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActiveFlowLogResponse>(await this.callApi(params, req, runtime), new ActiveFlowLogResponse({}));
  }

  /**
    * *   After you create a flow log, it is enabled by default. You can call this operation to enable a disabled flow log.
    * *   `ActiveFlowLog` is an asynchronous operation. After you send a request, the system returns a**request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
    *     *   If a flow log is in the **Modifying** state, the flow log is being enabled. In this case, you can query the flow log but cannot perform other operations.
    *     *   If a flow log is in the **Active** state, the flow log is enabled.
    *
    * @param request ActiveFlowLogRequest
    * @return ActiveFlowLogResponse
   */
  async activeFlowLog(request: ActiveFlowLogRequest): Promise<ActiveFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeFlowLogWithOptions(request, runtime);
  }

  /**
    * **AddTrafficMatchRuleToTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic classification rule.
    * *   If a traffic classification rule is in the **Creating** state, the traffic classification rule is being created. In this case, you can query the traffic classification rule but cannot perform other operations.
    * *   If a traffic classification rule is in the **Active** state, the traffic classification rule is added to the traffic marking policy.
    *
    * @param request AddTrafficMatchRuleToTrafficMarkingPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddTrafficMatchRuleToTrafficMarkingPolicyResponse
   */
  async addTrafficMatchRuleToTrafficMarkingPolicyWithOptions(request: AddTrafficMatchRuleToTrafficMarkingPolicyRequest, runtime: $Util.RuntimeOptions): Promise<AddTrafficMatchRuleToTrafficMarkingPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    if (!Util.isUnset(request.trafficMatchRules)) {
      query["TrafficMatchRules"] = request.trafficMatchRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTrafficMatchRuleToTrafficMarkingPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTrafficMatchRuleToTrafficMarkingPolicyResponse>(await this.callApi(params, req, runtime), new AddTrafficMatchRuleToTrafficMarkingPolicyResponse({}));
  }

  /**
    * **AddTrafficMatchRuleToTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic classification rule.
    * *   If a traffic classification rule is in the **Creating** state, the traffic classification rule is being created. In this case, you can query the traffic classification rule but cannot perform other operations.
    * *   If a traffic classification rule is in the **Active** state, the traffic classification rule is added to the traffic marking policy.
    *
    * @param request AddTrafficMatchRuleToTrafficMarkingPolicyRequest
    * @return AddTrafficMatchRuleToTrafficMarkingPolicyResponse
   */
  async addTrafficMatchRuleToTrafficMarkingPolicy(request: AddTrafficMatchRuleToTrafficMarkingPolicyRequest): Promise<AddTrafficMatchRuleToTrafficMarkingPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTrafficMatchRuleToTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
    * @deprecated : AddTraficMatchRuleToTrafficMarkingPolicy is deprecated, please use Cbn::2017-09-12::AddTrafficMatchRuleToTrafficMarkingPolicy instead.
    * The ID of the request.
    *
    * @param request AddTraficMatchRuleToTrafficMarkingPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddTraficMatchRuleToTrafficMarkingPolicyResponse
   */
  // Deprecated
  async addTraficMatchRuleToTrafficMarkingPolicyWithOptions(request: AddTraficMatchRuleToTrafficMarkingPolicyRequest, runtime: $Util.RuntimeOptions): Promise<AddTraficMatchRuleToTrafficMarkingPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    if (!Util.isUnset(request.trafficMatchRules)) {
      query["TrafficMatchRules"] = request.trafficMatchRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTraficMatchRuleToTrafficMarkingPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTraficMatchRuleToTrafficMarkingPolicyResponse>(await this.callApi(params, req, runtime), new AddTraficMatchRuleToTrafficMarkingPolicyResponse({}));
  }

  /**
    * @deprecated : AddTraficMatchRuleToTrafficMarkingPolicy is deprecated, please use Cbn::2017-09-12::AddTrafficMatchRuleToTrafficMarkingPolicy instead.
    * The ID of the request.
    *
    * @param request AddTraficMatchRuleToTrafficMarkingPolicyRequest
    * @return AddTraficMatchRuleToTrafficMarkingPolicyResponse
   */
  // Deprecated
  async addTraficMatchRuleToTrafficMarkingPolicy(request: AddTraficMatchRuleToTrafficMarkingPolicyRequest): Promise<AddTraficMatchRuleToTrafficMarkingPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTraficMatchRuleToTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
    * You can associate multiple bandwidth plans with a CEN instance. However, the pair of areas connected by each bandwidth plan must be unique.
    * For example, if a CEN instance is associated with a bandwidth plan that connects networks in the Chinese mainland, you cannot associate another bandwidth plan that also connects networks in the Chinese mainland with the CEN instance. However, you can associate a bandwidth plan that connects the Chinese mainland to North America with the CEN instance.
    *
    * @param request AssociateCenBandwidthPackageRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AssociateCenBandwidthPackageResponse
   */
  async associateCenBandwidthPackageWithOptions(request: AssociateCenBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<AssociateCenBandwidthPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateCenBandwidthPackage",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateCenBandwidthPackageResponse>(await this.callApi(params, req, runtime), new AssociateCenBandwidthPackageResponse({}));
  }

  /**
    * You can associate multiple bandwidth plans with a CEN instance. However, the pair of areas connected by each bandwidth plan must be unique.
    * For example, if a CEN instance is associated with a bandwidth plan that connects networks in the Chinese mainland, you cannot associate another bandwidth plan that also connects networks in the Chinese mainland with the CEN instance. However, you can associate a bandwidth plan that connects the Chinese mainland to North America with the CEN instance.
    *
    * @param request AssociateCenBandwidthPackageRequest
    * @return AssociateCenBandwidthPackageResponse
   */
  async associateCenBandwidthPackage(request: AssociateCenBandwidthPackageRequest): Promise<AssociateCenBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateCenBandwidthPackageWithOptions(request, runtime);
  }

  /**
    * After you create a network instance connection on a transit router, you can configure an associated forwarding correlation to associate the network instance connection with the route table of an Enterprise Edition transit router. The Enterprise Edition transit router forwards traffic for the network instance based on the routes in the route table. Before you begin, we recommend that you take note of the following rules:
    * *   Only route tables of an Enterprise Edition transit router support associated forwarding correlations. For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](~~181681~~)
    * *   Each network instance connection can have an associated forwarding correlation with one route tables of Enterprise Edition transit router.
    * *   **AssociateTransitRouterAttachmentWithRouteTable** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTableAssociations** operation to query the status of an associated forwarding correlation.
    *     *   If an associated forwarding correlation is in the **Associating** state, the associated forwarding correlation is being created. You can query the associated forwarding correlation but cannot perform other operations.
    *     *   If an associated forwarding correlation is in the **Active** state, the associated forwarding correlation is created.
    *
    * @param request AssociateTransitRouterAttachmentWithRouteTableRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AssociateTransitRouterAttachmentWithRouteTableResponse
   */
  async associateTransitRouterAttachmentWithRouteTableWithOptions(request: AssociateTransitRouterAttachmentWithRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<AssociateTransitRouterAttachmentWithRouteTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateTransitRouterAttachmentWithRouteTable",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateTransitRouterAttachmentWithRouteTableResponse>(await this.callApi(params, req, runtime), new AssociateTransitRouterAttachmentWithRouteTableResponse({}));
  }

  /**
    * After you create a network instance connection on a transit router, you can configure an associated forwarding correlation to associate the network instance connection with the route table of an Enterprise Edition transit router. The Enterprise Edition transit router forwards traffic for the network instance based on the routes in the route table. Before you begin, we recommend that you take note of the following rules:
    * *   Only route tables of an Enterprise Edition transit router support associated forwarding correlations. For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](~~181681~~)
    * *   Each network instance connection can have an associated forwarding correlation with one route tables of Enterprise Edition transit router.
    * *   **AssociateTransitRouterAttachmentWithRouteTable** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTableAssociations** operation to query the status of an associated forwarding correlation.
    *     *   If an associated forwarding correlation is in the **Associating** state, the associated forwarding correlation is being created. You can query the associated forwarding correlation but cannot perform other operations.
    *     *   If an associated forwarding correlation is in the **Active** state, the associated forwarding correlation is created.
    *
    * @param request AssociateTransitRouterAttachmentWithRouteTableRequest
    * @return AssociateTransitRouterAttachmentWithRouteTableResponse
   */
  async associateTransitRouterAttachmentWithRouteTable(request: AssociateTransitRouterAttachmentWithRouteTableRequest): Promise<AssociateTransitRouterAttachmentWithRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateTransitRouterAttachmentWithRouteTableWithOptions(request, runtime);
  }

  async associateTransitRouterMulticastDomainWithOptions(request: AssociateTransitRouterMulticastDomainRequest, runtime: $Util.RuntimeOptions): Promise<AssociateTransitRouterMulticastDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!Util.isUnset(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateTransitRouterMulticastDomain",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateTransitRouterMulticastDomainResponse>(await this.callApi(params, req, runtime), new AssociateTransitRouterMulticastDomainResponse({}));
  }

  async associateTransitRouterMulticastDomain(request: AssociateTransitRouterMulticastDomainRequest): Promise<AssociateTransitRouterMulticastDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
    * CEN allows you to attach a network instance that belongs to another Alibaba Cloud account to your CEN instance. Before you attach the network instance, CEN must acquire permissions to access the network instance that belongs to another Alibaba Cloud account.
    * *   For more information about how to grant CEN permissions on virtual private clouds (VPCs) that belong to another Alibaba Cloud account, see [GrantInstanceToCen](~~126224~~).
    * *   For more information about how to grant CEN permissions on Cloud Connect Network (CCN) instances that belong to another Alibaba Cloud account, see [GrantInstanceToCbn](~~126141~~).
    * *   By default, you cannot grant permissions on virtual border routers (VBRs) that belong to another Alibaba Cloud account to a CEN instance. If you need to use this feature, contact your account manager.
    *
    * @param request AttachCenChildInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AttachCenChildInstanceResponse
   */
  async attachCenChildInstanceWithOptions(request: AttachCenChildInstanceRequest, runtime: $Util.RuntimeOptions): Promise<AttachCenChildInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceOwnerId)) {
      query["ChildInstanceOwnerId"] = request.childInstanceOwnerId;
    }

    if (!Util.isUnset(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachCenChildInstance",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachCenChildInstanceResponse>(await this.callApi(params, req, runtime), new AttachCenChildInstanceResponse({}));
  }

  /**
    * CEN allows you to attach a network instance that belongs to another Alibaba Cloud account to your CEN instance. Before you attach the network instance, CEN must acquire permissions to access the network instance that belongs to another Alibaba Cloud account.
    * *   For more information about how to grant CEN permissions on virtual private clouds (VPCs) that belong to another Alibaba Cloud account, see [GrantInstanceToCen](~~126224~~).
    * *   For more information about how to grant CEN permissions on Cloud Connect Network (CCN) instances that belong to another Alibaba Cloud account, see [GrantInstanceToCbn](~~126141~~).
    * *   By default, you cannot grant permissions on virtual border routers (VBRs) that belong to another Alibaba Cloud account to a CEN instance. If you need to use this feature, contact your account manager.
    *
    * @param request AttachCenChildInstanceRequest
    * @return AttachCenChildInstanceResponse
   */
  async attachCenChildInstance(request: AttachCenChildInstanceRequest): Promise<AttachCenChildInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachCenChildInstanceWithOptions(request, runtime);
  }

  async checkTransitRouterServiceWithOptions(request: CheckTransitRouterServiceRequest, runtime: $Util.RuntimeOptions): Promise<CheckTransitRouterServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckTransitRouterService",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckTransitRouterServiceResponse>(await this.callApi(params, req, runtime), new CheckTransitRouterServiceResponse({}));
  }

  async checkTransitRouterService(request: CheckTransitRouterServiceRequest): Promise<CheckTransitRouterServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkTransitRouterServiceWithOptions(request, runtime);
  }

  /**
    * **CreateCen** is an asynchronous operation. After you send a request, the system returns the CEN instance ID but the operation is still being performed in the system background. You can call **DescribeCens** to query the status of a CEN instance.
    * * If a CEN instance is in the **Creating** state, the CEN instance is being created. You can query the CEN instance but cannot perform other operations.
    * * If a CEN instance is in the **Active** state, the CEN instance is created.
    *
    * @param request CreateCenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCenResponse
   */
  async createCenWithOptions(request: CreateCenRequest, runtime: $Util.RuntimeOptions): Promise<CreateCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.protectionLevel)) {
      query["ProtectionLevel"] = request.protectionLevel;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCenResponse>(await this.callApi(params, req, runtime), new CreateCenResponse({}));
  }

  /**
    * **CreateCen** is an asynchronous operation. After you send a request, the system returns the CEN instance ID but the operation is still being performed in the system background. You can call **DescribeCens** to query the status of a CEN instance.
    * * If a CEN instance is in the **Creating** state, the CEN instance is being created. You can query the CEN instance but cannot perform other operations.
    * * If a CEN instance is in the **Active** state, the CEN instance is created.
    *
    * @param request CreateCenRequest
    * @return CreateCenResponse
   */
  async createCen(request: CreateCenRequest): Promise<CreateCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCenWithOptions(request, runtime);
  }

  /**
    * *   You must specify the areas to be connected when you create a bandwidth plan. An area contains one or more Alibaba Cloud regions. When you select areas for a bandwidth plan, make sure that the areas contain the regions that you want to connect. For more information about the supported areas and regions, see [Purchase a bandwidth plan](~~181560~~).
    * *   For more information about the billing rules, see [Billing](~~189836~~).
    * *   **CreateCenBandwidthPackage** is an asynchronous operation. After you send a request, the system returns a bandwidth plan instance ID and runs the task in the background. You can call the **DescribeCenBandwidthPackages** operation to query the status of a bandwidth plan. If a bandwidth plan is in the **Idle** or **InUse** state, the bandwidth plan is created.
    *
    * @param request CreateCenBandwidthPackageRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCenBandwidthPackageResponse
   */
  async createCenBandwidthPackageWithOptions(request: CreateCenBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<CreateCenBandwidthPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewDuration)) {
      query["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.bandwidthPackageChargeType)) {
      query["BandwidthPackageChargeType"] = request.bandwidthPackageChargeType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.geographicRegionAId)) {
      query["GeographicRegionAId"] = request.geographicRegionAId;
    }

    if (!Util.isUnset(request.geographicRegionBId)) {
      query["GeographicRegionBId"] = request.geographicRegionBId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCenBandwidthPackage",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCenBandwidthPackageResponse>(await this.callApi(params, req, runtime), new CreateCenBandwidthPackageResponse({}));
  }

  /**
    * *   You must specify the areas to be connected when you create a bandwidth plan. An area contains one or more Alibaba Cloud regions. When you select areas for a bandwidth plan, make sure that the areas contain the regions that you want to connect. For more information about the supported areas and regions, see [Purchase a bandwidth plan](~~181560~~).
    * *   For more information about the billing rules, see [Billing](~~189836~~).
    * *   **CreateCenBandwidthPackage** is an asynchronous operation. After you send a request, the system returns a bandwidth plan instance ID and runs the task in the background. You can call the **DescribeCenBandwidthPackages** operation to query the status of a bandwidth plan. If a bandwidth plan is in the **Idle** or **InUse** state, the bandwidth plan is created.
    *
    * @param request CreateCenBandwidthPackageRequest
    * @return CreateCenBandwidthPackageResponse
   */
  async createCenBandwidthPackage(request: CreateCenBandwidthPackageRequest): Promise<CreateCenBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCenBandwidthPackageWithOptions(request, runtime);
  }

  /**
    * *   You can add routes only to virtual private clouds (VPCs) or virtual border routers (VBRs) that are connected to an Enterprise Edition transit router.
    * *   By default, the next hop of the routes is the **transit router connection**, which is the connection between the VBR and the Enterprise Edition transit router. You cannot modify the next hop.
    * *   **CreateCenChildInstanceRouteEntryToAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeRouteEntryList** operation to query the status of a route.
    *     *   If a route is in the **Pending** state, the route is being created. You can query the route but cannot perform other operations.
    *     *   If a route is in the **Available** state, the route is created.
    *
    * @param request CreateCenChildInstanceRouteEntryToAttachmentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCenChildInstanceRouteEntryToAttachmentResponse
   */
  async createCenChildInstanceRouteEntryToAttachmentWithOptions(request: CreateCenChildInstanceRouteEntryToAttachmentRequest, runtime: $Util.RuntimeOptions): Promise<CreateCenChildInstanceRouteEntryToAttachmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCenChildInstanceRouteEntryToAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCenChildInstanceRouteEntryToAttachmentResponse>(await this.callApi(params, req, runtime), new CreateCenChildInstanceRouteEntryToAttachmentResponse({}));
  }

  /**
    * *   You can add routes only to virtual private clouds (VPCs) or virtual border routers (VBRs) that are connected to an Enterprise Edition transit router.
    * *   By default, the next hop of the routes is the **transit router connection**, which is the connection between the VBR and the Enterprise Edition transit router. You cannot modify the next hop.
    * *   **CreateCenChildInstanceRouteEntryToAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeRouteEntryList** operation to query the status of a route.
    *     *   If a route is in the **Pending** state, the route is being created. You can query the route but cannot perform other operations.
    *     *   If a route is in the **Available** state, the route is created.
    *
    * @param request CreateCenChildInstanceRouteEntryToAttachmentRequest
    * @return CreateCenChildInstanceRouteEntryToAttachmentResponse
   */
  async createCenChildInstanceRouteEntryToAttachment(request: CreateCenChildInstanceRouteEntryToAttachmentRequest): Promise<CreateCenChildInstanceRouteEntryToAttachmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCenChildInstanceRouteEntryToAttachmentWithOptions(request, runtime);
  }

  /**
    * ## Limits
    * *   By default, the CreateCenChildInstanceRouteEntryToCen operation is unavailable. To call this operation, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    * *   You cannot add a route entry to an Enterprise Edition transit router by calling the CreateCenChildInstanceRouteEntryToCen operation.
    * *   By default, the next hop of the route entry is the regional gateway of the CEN instance. You cannot modify the next hop.
    *
    * @param request CreateCenChildInstanceRouteEntryToCenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCenChildInstanceRouteEntryToCenResponse
   */
  async createCenChildInstanceRouteEntryToCenWithOptions(request: CreateCenChildInstanceRouteEntryToCenRequest, runtime: $Util.RuntimeOptions): Promise<CreateCenChildInstanceRouteEntryToCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.childInstanceAliUid)) {
      query["ChildInstanceAliUid"] = request.childInstanceAliUid;
    }

    if (!Util.isUnset(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCenChildInstanceRouteEntryToCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCenChildInstanceRouteEntryToCenResponse>(await this.callApi(params, req, runtime), new CreateCenChildInstanceRouteEntryToCenResponse({}));
  }

  /**
    * ## Limits
    * *   By default, the CreateCenChildInstanceRouteEntryToCen operation is unavailable. To call this operation, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    * *   You cannot add a route entry to an Enterprise Edition transit router by calling the CreateCenChildInstanceRouteEntryToCen operation.
    * *   By default, the next hop of the route entry is the regional gateway of the CEN instance. You cannot modify the next hop.
    *
    * @param request CreateCenChildInstanceRouteEntryToCenRequest
    * @return CreateCenChildInstanceRouteEntryToCenResponse
   */
  async createCenChildInstanceRouteEntryToCen(request: CreateCenChildInstanceRouteEntryToCenRequest): Promise<CreateCenChildInstanceRouteEntryToCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCenChildInstanceRouteEntryToCenWithOptions(request, runtime);
  }

  /**
    * *   Only inter-region connections created on Enterprise Edition transit routers support QoS policies.
    *         If your inter-region connection uses test bandwidth, you cannot create QoS policies for the inter-region connection. 
    * *   QoS policies apply only to outbound traffic on Enterprise Edition transit routers.
    *         If you create an inter-region connection between the China (Hangzhou) region and the China (Qingdao) region, and create QoS policies for the transit router in the China (Hangzhou) region and the transit router in the China (Qingdao) region, the QoS policies apply only to the network traffic that flows from China (Hangzhou) to China (Qingdao). QoS policies allocate bandwidth resources to different services. 
    * *   **CreateCenInterRegionTrafficQosPolicy** is an asynchronous operation. After you send a request, the system returns a QoS policy ID and runs the task in the system background. You can call **ListCenInterRegionTrafficQosPolicies** to query the status of a QoS policy.
    *     *   If a QoS policy is in the **Creating** state, the QoS policy is being created. You can query the QoS policy but cannot perform other operations.
    *     *   If a QoS policy is in the **Active** state, the QoS policy is created.
    * ### Prerequisites
    * Make sure that the following requirements are met before you call the **CreateCenInterRegionTrafficQosPolicy** operation:
    * *   An inter-region connection is created. For more information, see [CreateTransitRouterPeerAttachment](~~261363~~).
    * *   A traffic marking policy is created. For more information, see [CreateTrafficMarkingPolicy](~~419025~~).
    *
    * @param request CreateCenInterRegionTrafficQosPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCenInterRegionTrafficQosPolicyResponse
   */
  async createCenInterRegionTrafficQosPolicyWithOptions(request: CreateCenInterRegionTrafficQosPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateCenInterRegionTrafficQosPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficQosPolicyDescription)) {
      query["TrafficQosPolicyDescription"] = request.trafficQosPolicyDescription;
    }

    if (!Util.isUnset(request.trafficQosPolicyName)) {
      query["TrafficQosPolicyName"] = request.trafficQosPolicyName;
    }

    if (!Util.isUnset(request.trafficQosQueues)) {
      query["TrafficQosQueues"] = request.trafficQosQueues;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCenInterRegionTrafficQosPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCenInterRegionTrafficQosPolicyResponse>(await this.callApi(params, req, runtime), new CreateCenInterRegionTrafficQosPolicyResponse({}));
  }

  /**
    * *   Only inter-region connections created on Enterprise Edition transit routers support QoS policies.
    *         If your inter-region connection uses test bandwidth, you cannot create QoS policies for the inter-region connection. 
    * *   QoS policies apply only to outbound traffic on Enterprise Edition transit routers.
    *         If you create an inter-region connection between the China (Hangzhou) region and the China (Qingdao) region, and create QoS policies for the transit router in the China (Hangzhou) region and the transit router in the China (Qingdao) region, the QoS policies apply only to the network traffic that flows from China (Hangzhou) to China (Qingdao). QoS policies allocate bandwidth resources to different services. 
    * *   **CreateCenInterRegionTrafficQosPolicy** is an asynchronous operation. After you send a request, the system returns a QoS policy ID and runs the task in the system background. You can call **ListCenInterRegionTrafficQosPolicies** to query the status of a QoS policy.
    *     *   If a QoS policy is in the **Creating** state, the QoS policy is being created. You can query the QoS policy but cannot perform other operations.
    *     *   If a QoS policy is in the **Active** state, the QoS policy is created.
    * ### Prerequisites
    * Make sure that the following requirements are met before you call the **CreateCenInterRegionTrafficQosPolicy** operation:
    * *   An inter-region connection is created. For more information, see [CreateTransitRouterPeerAttachment](~~261363~~).
    * *   A traffic marking policy is created. For more information, see [CreateTrafficMarkingPolicy](~~419025~~).
    *
    * @param request CreateCenInterRegionTrafficQosPolicyRequest
    * @return CreateCenInterRegionTrafficQosPolicyResponse
   */
  async createCenInterRegionTrafficQosPolicy(request: CreateCenInterRegionTrafficQosPolicyRequest): Promise<CreateCenInterRegionTrafficQosPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCenInterRegionTrafficQosPolicyWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request CreateCenInterRegionTrafficQosQueueRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCenInterRegionTrafficQosQueueResponse
   */
  async createCenInterRegionTrafficQosQueueWithOptions(request: CreateCenInterRegionTrafficQosQueueRequest, runtime: $Util.RuntimeOptions): Promise<CreateCenInterRegionTrafficQosQueueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.dscps)) {
      query["Dscps"] = request.dscps;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qosQueueDescription)) {
      query["QosQueueDescription"] = request.qosQueueDescription;
    }

    if (!Util.isUnset(request.qosQueueName)) {
      query["QosQueueName"] = request.qosQueueName;
    }

    if (!Util.isUnset(request.remainBandwidthPercent)) {
      query["RemainBandwidthPercent"] = request.remainBandwidthPercent;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficQosPolicyId)) {
      query["TrafficQosPolicyId"] = request.trafficQosPolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCenInterRegionTrafficQosQueue",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCenInterRegionTrafficQosQueueResponse>(await this.callApi(params, req, runtime), new CreateCenInterRegionTrafficQosQueueResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request CreateCenInterRegionTrafficQosQueueRequest
    * @return CreateCenInterRegionTrafficQosQueueResponse
   */
  async createCenInterRegionTrafficQosQueue(request: CreateCenInterRegionTrafficQosQueueRequest): Promise<CreateCenInterRegionTrafficQosQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCenInterRegionTrafficQosQueueWithOptions(request, runtime);
  }

  /**
    * Routing policies are sorted by priority. A smaller value indicates a higher priority. Each routing policy is a collection of conditional statements and execution statements. Starting from the routing policy with the highest priority, the system matches routes against the match conditions specified by routing policies. If a route meets all the match conditions of a routing policy, the system permits or denies the route based on the action specified in the routing policy. You can also modify the attributes of permitted routes. By default, the system permits routes that meet none of the match conditions. For more information, see [Routing policy overview](~~124157~~).
    * `CreateCenRouteMap` is an asynchronous operation. After you send a request, the routing policy ID is returned but the operation is still being performed in the system background. You can call `DescribeCenRouteMaps` to query the status of a routing policy.
    * *   If a routing policy is in the **Creating** state, the routing policy is being created. In this case, you can query the routing policy but cannot perform other operations.
    * *   If a routing policy is in the **Active** state, the routing policy is created.
    *
    * @param request CreateCenRouteMapRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCenRouteMapResponse
   */
  async createCenRouteMapWithOptions(request: CreateCenRouteMapRequest, runtime: $Util.RuntimeOptions): Promise<CreateCenRouteMapResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asPathMatchMode)) {
      query["AsPathMatchMode"] = request.asPathMatchMode;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenRegionId)) {
      query["CenRegionId"] = request.cenRegionId;
    }

    if (!Util.isUnset(request.cidrMatchMode)) {
      query["CidrMatchMode"] = request.cidrMatchMode;
    }

    if (!Util.isUnset(request.communityMatchMode)) {
      query["CommunityMatchMode"] = request.communityMatchMode;
    }

    if (!Util.isUnset(request.communityOperateMode)) {
      query["CommunityOperateMode"] = request.communityOperateMode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destinationChildInstanceTypes)) {
      query["DestinationChildInstanceTypes"] = request.destinationChildInstanceTypes;
    }

    if (!Util.isUnset(request.destinationCidrBlocks)) {
      query["DestinationCidrBlocks"] = request.destinationCidrBlocks;
    }

    if (!Util.isUnset(request.destinationInstanceIds)) {
      query["DestinationInstanceIds"] = request.destinationInstanceIds;
    }

    if (!Util.isUnset(request.destinationInstanceIdsReverseMatch)) {
      query["DestinationInstanceIdsReverseMatch"] = request.destinationInstanceIdsReverseMatch;
    }

    if (!Util.isUnset(request.destinationRouteTableIds)) {
      query["DestinationRouteTableIds"] = request.destinationRouteTableIds;
    }

    if (!Util.isUnset(request.mapResult)) {
      query["MapResult"] = request.mapResult;
    }

    if (!Util.isUnset(request.matchAddressType)) {
      query["MatchAddressType"] = request.matchAddressType;
    }

    if (!Util.isUnset(request.matchAsns)) {
      query["MatchAsns"] = request.matchAsns;
    }

    if (!Util.isUnset(request.matchCommunitySet)) {
      query["MatchCommunitySet"] = request.matchCommunitySet;
    }

    if (!Util.isUnset(request.nextPriority)) {
      query["NextPriority"] = request.nextPriority;
    }

    if (!Util.isUnset(request.operateCommunitySet)) {
      query["OperateCommunitySet"] = request.operateCommunitySet;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.preference)) {
      query["Preference"] = request.preference;
    }

    if (!Util.isUnset(request.prependAsPath)) {
      query["PrependAsPath"] = request.prependAsPath;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeTypes)) {
      query["RouteTypes"] = request.routeTypes;
    }

    if (!Util.isUnset(request.sourceChildInstanceTypes)) {
      query["SourceChildInstanceTypes"] = request.sourceChildInstanceTypes;
    }

    if (!Util.isUnset(request.sourceInstanceIds)) {
      query["SourceInstanceIds"] = request.sourceInstanceIds;
    }

    if (!Util.isUnset(request.sourceInstanceIdsReverseMatch)) {
      query["SourceInstanceIdsReverseMatch"] = request.sourceInstanceIdsReverseMatch;
    }

    if (!Util.isUnset(request.sourceRegionIds)) {
      query["SourceRegionIds"] = request.sourceRegionIds;
    }

    if (!Util.isUnset(request.sourceRouteTableIds)) {
      query["SourceRouteTableIds"] = request.sourceRouteTableIds;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    if (!Util.isUnset(request.transmitDirection)) {
      query["TransmitDirection"] = request.transmitDirection;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCenRouteMap",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCenRouteMapResponse>(await this.callApi(params, req, runtime), new CreateCenRouteMapResponse({}));
  }

  /**
    * Routing policies are sorted by priority. A smaller value indicates a higher priority. Each routing policy is a collection of conditional statements and execution statements. Starting from the routing policy with the highest priority, the system matches routes against the match conditions specified by routing policies. If a route meets all the match conditions of a routing policy, the system permits or denies the route based on the action specified in the routing policy. You can also modify the attributes of permitted routes. By default, the system permits routes that meet none of the match conditions. For more information, see [Routing policy overview](~~124157~~).
    * `CreateCenRouteMap` is an asynchronous operation. After you send a request, the routing policy ID is returned but the operation is still being performed in the system background. You can call `DescribeCenRouteMaps` to query the status of a routing policy.
    * *   If a routing policy is in the **Creating** state, the routing policy is being created. In this case, you can query the routing policy but cannot perform other operations.
    * *   If a routing policy is in the **Active** state, the routing policy is created.
    *
    * @param request CreateCenRouteMapRequest
    * @return CreateCenRouteMapResponse
   */
  async createCenRouteMap(request: CreateCenRouteMapRequest): Promise<CreateCenRouteMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCenRouteMapWithOptions(request, runtime);
  }

  /**
    * Flow logs are used to capture the information about network traffic between transit routers and between virtual border routers (VBRs). Before you create a flow log, take note of the following items:
    * *   Flow logs are supported only by Enterprise Edition transit routers.
    * *   Only flow logs in some regions can capture the information about network traffic over VBR connections. For more information, see [Limits](~~339822~~).
    * *   Flow logs are used to capture the information about outbound traffic on transit routers. Information about inbound traffic on transit routers is not captured.
    *     For example, an Elastic Compute Service (ECS) instance in the US (Silicon Valley) region accesses an ECS instance in the US (Virginia) region through CEN. After you enable the flow log feature for the transit router in the US (Virginia) region, you can check the log entries about packets sent from the ECS instance in the US (Virginia) region to the ECS instance in the US (Silicon Valley) region. However, packets sent from the ECS instance in the US (Silicon Valley) region to the ECS instance in the US (Virginia) region are not recorded. If you want to record the packets sent from the ECS instance in the US (Silicon Valley) region to the ECS instance in the US (Virginia) region, you must also enable the flow log feature on the transit router that is in the US (Silicon Valley) region.
    * *   `CreateFlowLog` is an asynchronous operation. After you send a request, the system returns a flow log ID and runs the task in the background. You can call the `DescribeFlowLogs` operation to query the status of a flow log.
    *     *   If a flow log is in the **Creating** state, the flow log is being created. In this case, you can query the flow log but cannot perform other operations.
    *     *   If a flow log is in the **Active** state, the flow log is created.
    * # Prerequisites
    * An inter-region connection or a VBR connection is created. For more information, see [CreateTransitRouterPeerAttachment](~~261363~~) or [CreateTransitRouterVbrAttachment](~~261361~~).
    *
    * @param request CreateFlowlogRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateFlowlogResponse
   */
  async createFlowlogWithOptions(request: CreateFlowlogRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowlogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.flowLogName)) {
      query["FlowLogName"] = request.flowLogName;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFlowlog",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFlowlogResponse>(await this.callApi(params, req, runtime), new CreateFlowlogResponse({}));
  }

  /**
    * Flow logs are used to capture the information about network traffic between transit routers and between virtual border routers (VBRs). Before you create a flow log, take note of the following items:
    * *   Flow logs are supported only by Enterprise Edition transit routers.
    * *   Only flow logs in some regions can capture the information about network traffic over VBR connections. For more information, see [Limits](~~339822~~).
    * *   Flow logs are used to capture the information about outbound traffic on transit routers. Information about inbound traffic on transit routers is not captured.
    *     For example, an Elastic Compute Service (ECS) instance in the US (Silicon Valley) region accesses an ECS instance in the US (Virginia) region through CEN. After you enable the flow log feature for the transit router in the US (Virginia) region, you can check the log entries about packets sent from the ECS instance in the US (Virginia) region to the ECS instance in the US (Silicon Valley) region. However, packets sent from the ECS instance in the US (Silicon Valley) region to the ECS instance in the US (Virginia) region are not recorded. If you want to record the packets sent from the ECS instance in the US (Silicon Valley) region to the ECS instance in the US (Virginia) region, you must also enable the flow log feature on the transit router that is in the US (Silicon Valley) region.
    * *   `CreateFlowLog` is an asynchronous operation. After you send a request, the system returns a flow log ID and runs the task in the background. You can call the `DescribeFlowLogs` operation to query the status of a flow log.
    *     *   If a flow log is in the **Creating** state, the flow log is being created. In this case, you can query the flow log but cannot perform other operations.
    *     *   If a flow log is in the **Active** state, the flow log is created.
    * # Prerequisites
    * An inter-region connection or a VBR connection is created. For more information, see [CreateTransitRouterPeerAttachment](~~261363~~) or [CreateTransitRouterVbrAttachment](~~261361~~).
    *
    * @param request CreateFlowlogRequest
    * @return CreateFlowlogResponse
   */
  async createFlowlog(request: CreateFlowlogRequest): Promise<CreateFlowlogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowlogWithOptions(request, runtime);
  }

  /**
    * *   Only Enterprise Edition transit routers support traffic marking policies.
    * *   **CreateTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a traffic marking policy ID and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic marking policy.
    *     *   If a traffic marking policy is in the **Creating** state, the traffic marking policy is being created. You can query the traffic marking policy but cannot perform other operations.
    *     *   If a traffic marking policy is in the **Active** state, the traffic marking policy is created.
    *
    * @param request CreateTrafficMarkingPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTrafficMarkingPolicyResponse
   */
  async createTrafficMarkingPolicyWithOptions(request: CreateTrafficMarkingPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateTrafficMarkingPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.markingDscp)) {
      query["MarkingDscp"] = request.markingDscp;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficMarkingPolicyDescription)) {
      query["TrafficMarkingPolicyDescription"] = request.trafficMarkingPolicyDescription;
    }

    if (!Util.isUnset(request.trafficMarkingPolicyName)) {
      query["TrafficMarkingPolicyName"] = request.trafficMarkingPolicyName;
    }

    if (!Util.isUnset(request.trafficMatchRules)) {
      query["TrafficMatchRules"] = request.trafficMatchRules;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrafficMarkingPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTrafficMarkingPolicyResponse>(await this.callApi(params, req, runtime), new CreateTrafficMarkingPolicyResponse({}));
  }

  /**
    * *   Only Enterprise Edition transit routers support traffic marking policies.
    * *   **CreateTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a traffic marking policy ID and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic marking policy.
    *     *   If a traffic marking policy is in the **Creating** state, the traffic marking policy is being created. You can query the traffic marking policy but cannot perform other operations.
    *     *   If a traffic marking policy is in the **Active** state, the traffic marking policy is created.
    *
    * @param request CreateTrafficMarkingPolicyRequest
    * @return CreateTrafficMarkingPolicyResponse
   */
  async createTrafficMarkingPolicy(request: CreateTrafficMarkingPolicyRequest): Promise<CreateTrafficMarkingPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
    * After you add an aggregate route to a route table of an Enterprise Edition transit router, the Enterprise Edition transit router advertises its routes only to route tables of virtual private clouds (VPCs) that are associated with a route table of the Enterprise Edition transit router and have route synchronization enabled.
    * Perform the following operations before you create an aggregate route. Otherwise, the Enterprise Edition transit router does not advertise routes to VPC route tables:
    * *   Associated forwarding is enabled between the VPCs and the Enterprise Edition transit router. For more information, see [AssociateTransitRouterAttachmentWithRouteTable](~~261242~~).
    * *   Route synchronization is enabled for the VPCs. For more information, see [CreateTransitRouterVpcAttachment](~~261358~~).
    *
    * @param request CreateTransitRouteTableAggregationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTransitRouteTableAggregationResponse
   */
  async createTransitRouteTableAggregationWithOptions(request: CreateTransitRouteTableAggregationRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransitRouteTableAggregationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouteTableAggregationCidr)) {
      query["TransitRouteTableAggregationCidr"] = request.transitRouteTableAggregationCidr;
    }

    if (!Util.isUnset(request.transitRouteTableAggregationDescription)) {
      query["TransitRouteTableAggregationDescription"] = request.transitRouteTableAggregationDescription;
    }

    if (!Util.isUnset(request.transitRouteTableAggregationName)) {
      query["TransitRouteTableAggregationName"] = request.transitRouteTableAggregationName;
    }

    if (!Util.isUnset(request.transitRouteTableAggregationScope)) {
      query["TransitRouteTableAggregationScope"] = request.transitRouteTableAggregationScope;
    }

    if (!Util.isUnset(request.transitRouteTableId)) {
      query["TransitRouteTableId"] = request.transitRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTransitRouteTableAggregation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTransitRouteTableAggregationResponse>(await this.callApi(params, req, runtime), new CreateTransitRouteTableAggregationResponse({}));
  }

  /**
    * After you add an aggregate route to a route table of an Enterprise Edition transit router, the Enterprise Edition transit router advertises its routes only to route tables of virtual private clouds (VPCs) that are associated with a route table of the Enterprise Edition transit router and have route synchronization enabled.
    * Perform the following operations before you create an aggregate route. Otherwise, the Enterprise Edition transit router does not advertise routes to VPC route tables:
    * *   Associated forwarding is enabled between the VPCs and the Enterprise Edition transit router. For more information, see [AssociateTransitRouterAttachmentWithRouteTable](~~261242~~).
    * *   Route synchronization is enabled for the VPCs. For more information, see [CreateTransitRouterVpcAttachment](~~261358~~).
    *
    * @param request CreateTransitRouteTableAggregationRequest
    * @return CreateTransitRouteTableAggregationResponse
   */
  async createTransitRouteTableAggregation(request: CreateTransitRouteTableAggregationRequest): Promise<CreateTransitRouteTableAggregationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransitRouteTableAggregationWithOptions(request, runtime);
  }

  /**
    * *   You can call **CreateTransitRouter** to create an Enterprise Edition transit router. For more information about the regions that support Enterprise Edition transit routers, see [What is CEN?](~~181681~~)
    * *   **CreateTransitRouter** is an asynchronous operation. After you send a request, the transit router ID is returned but the operation is still being performed in the system background. You can call [ListTransitRouters](~~261219~~) to query the status of an Enterprise Edition transit router.
    *     *   If an Enterprise Edition transit router is in the **Creating** state, the Enterprise Edition transit router is being created. In this case, you can query the Enterprise Edition transit router but cannot perform other operations.
    *     *   If an Enterprise Edition transit router is in the **Active** state, the Enterprise Edition transit router is created.
    *
    * @param tmpReq CreateTransitRouterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTransitRouterResponse
   */
  async createTransitRouterWithOptions(tmpReq: CreateTransitRouterRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransitRouterResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTransitRouterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.transitRouterCidrList)) {
      request.transitRouterCidrListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transitRouterCidrList, "TransitRouterCidrList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.supportMulticast)) {
      query["SupportMulticast"] = request.supportMulticast;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterCidrListShrink)) {
      query["TransitRouterCidrList"] = request.transitRouterCidrListShrink;
    }

    if (!Util.isUnset(request.transitRouterDescription)) {
      query["TransitRouterDescription"] = request.transitRouterDescription;
    }

    if (!Util.isUnset(request.transitRouterName)) {
      query["TransitRouterName"] = request.transitRouterName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTransitRouter",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTransitRouterResponse>(await this.callApi(params, req, runtime), new CreateTransitRouterResponse({}));
  }

  /**
    * *   You can call **CreateTransitRouter** to create an Enterprise Edition transit router. For more information about the regions that support Enterprise Edition transit routers, see [What is CEN?](~~181681~~)
    * *   **CreateTransitRouter** is an asynchronous operation. After you send a request, the transit router ID is returned but the operation is still being performed in the system background. You can call [ListTransitRouters](~~261219~~) to query the status of an Enterprise Edition transit router.
    *     *   If an Enterprise Edition transit router is in the **Creating** state, the Enterprise Edition transit router is being created. In this case, you can query the Enterprise Edition transit router but cannot perform other operations.
    *     *   If an Enterprise Edition transit router is in the **Active** state, the Enterprise Edition transit router is created.
    *
    * @param request CreateTransitRouterRequest
    * @return CreateTransitRouterResponse
   */
  async createTransitRouter(request: CreateTransitRouterRequest): Promise<CreateTransitRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransitRouterWithOptions(request, runtime);
  }

  /**
    * You can specify a CIDR block for a transit router. The CIDR block works in a similar way as the CIDR block of the loopback interface on a router. IP addresses within the CIDR block can be assigned to IPsec-VPN connections. For more information, see [Transit router CIDR blocks](~~462635~~).
    * The **CreateTransitRouterCidr** operation can be used to create a CIDR block only after you create a transit router.
    * The CIDR block must meet the following requirements:
    * *   Only Enterprise Edition transit routers support custom CIDR blocks.
    * *   For more information, see [Limits in transit router CIDR blocks](~~462635~~).
    * *   Each transit router supports at most five CIDR blocks. The subnet mask of a CIDR block must be 16 bits to 24 bits in length.
    * *   The following CIDR blocks and their subnets are not supported: 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, and 169.254.0.0/16.
    * *   The CIDR block cannot overlap with the CIDR blocks of the network instances that communicate with each other by using the CEN instance.
    * *   On the same CEN instance, each transit router CIDR block must be unique.
    * *   When you create the first VPN connection after you add a CIDR block for a transit router, three CIDR blocks within the CIDR block are reserved. An IP address is allocated from the remaining CIDR blocks to the IPsec-VPN connection.
    *     You can call the [ListTransitRouterCidrAllocation](~~464173~~) operation to query reserved CIDR blocks and IP addresses allocated to network connections.
    *
    * @param request CreateTransitRouterCidrRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTransitRouterCidrResponse
   */
  async createTransitRouterCidrWithOptions(request: CreateTransitRouterCidrRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransitRouterCidrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.publishCidrRoute)) {
      query["PublishCidrRoute"] = request.publishCidrRoute;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTransitRouterCidr",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTransitRouterCidrResponse>(await this.callApi(params, req, runtime), new CreateTransitRouterCidrResponse({}));
  }

  /**
    * You can specify a CIDR block for a transit router. The CIDR block works in a similar way as the CIDR block of the loopback interface on a router. IP addresses within the CIDR block can be assigned to IPsec-VPN connections. For more information, see [Transit router CIDR blocks](~~462635~~).
    * The **CreateTransitRouterCidr** operation can be used to create a CIDR block only after you create a transit router.
    * The CIDR block must meet the following requirements:
    * *   Only Enterprise Edition transit routers support custom CIDR blocks.
    * *   For more information, see [Limits in transit router CIDR blocks](~~462635~~).
    * *   Each transit router supports at most five CIDR blocks. The subnet mask of a CIDR block must be 16 bits to 24 bits in length.
    * *   The following CIDR blocks and their subnets are not supported: 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, and 169.254.0.0/16.
    * *   The CIDR block cannot overlap with the CIDR blocks of the network instances that communicate with each other by using the CEN instance.
    * *   On the same CEN instance, each transit router CIDR block must be unique.
    * *   When you create the first VPN connection after you add a CIDR block for a transit router, three CIDR blocks within the CIDR block are reserved. An IP address is allocated from the remaining CIDR blocks to the IPsec-VPN connection.
    *     You can call the [ListTransitRouterCidrAllocation](~~464173~~) operation to query reserved CIDR blocks and IP addresses allocated to network connections.
    *
    * @param request CreateTransitRouterCidrRequest
    * @return CreateTransitRouterCidrResponse
   */
  async createTransitRouterCidr(request: CreateTransitRouterCidrRequest): Promise<CreateTransitRouterCidrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransitRouterCidrWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, read the following rules:
    * *   Make sure that an Enterprise Edition transit router is deployed in the region where you want to create the multicast domain, and the multicast feature is enabled for the Enterprise Edition transit router. For more information, see [CreateTransitRouter](~~261169~~).
    *     If an Enterprise Edition transit router was created before you apply for multicast resources, the transit router does not support multicast. You can delete the transit router and create a new one. For more information about how to delete an Enterprise Edition transit router, see [DeleteTransitRouter](~~261218~~).
    * *   When you call **CreateTransitRouterMulticastDomain**, if you set **CenId** and **RegionId**, you do not need to set **TransitRouterId**. If you set **TransitRouterId**, you do not need to set **CenId** or **RegionId**.
    *
    * @param request CreateTransitRouterMulticastDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTransitRouterMulticastDomainResponse
   */
  async createTransitRouterMulticastDomainWithOptions(request: CreateTransitRouterMulticastDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransitRouterMulticastDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainDescription)) {
      query["TransitRouterMulticastDomainDescription"] = request.transitRouterMulticastDomainDescription;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainName)) {
      query["TransitRouterMulticastDomainName"] = request.transitRouterMulticastDomainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTransitRouterMulticastDomain",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTransitRouterMulticastDomainResponse>(await this.callApi(params, req, runtime), new CreateTransitRouterMulticastDomainResponse({}));
  }

  /**
    * Before you call this operation, read the following rules:
    * *   Make sure that an Enterprise Edition transit router is deployed in the region where you want to create the multicast domain, and the multicast feature is enabled for the Enterprise Edition transit router. For more information, see [CreateTransitRouter](~~261169~~).
    *     If an Enterprise Edition transit router was created before you apply for multicast resources, the transit router does not support multicast. You can delete the transit router and create a new one. For more information about how to delete an Enterprise Edition transit router, see [DeleteTransitRouter](~~261218~~).
    * *   When you call **CreateTransitRouterMulticastDomain**, if you set **CenId** and **RegionId**, you do not need to set **TransitRouterId**. If you set **TransitRouterId**, you do not need to set **CenId** or **RegionId**.
    *
    * @param request CreateTransitRouterMulticastDomainRequest
    * @return CreateTransitRouterMulticastDomainResponse
   */
  async createTransitRouterMulticastDomain(request: CreateTransitRouterMulticastDomainRequest): Promise<CreateTransitRouterMulticastDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
    * By default, 1 Kbit/s of bandwidth is provided for inter-region communication between transit routers. This allows you to test the connectivity of inter-region IPv4 networks. To allow services that are deployed in different regions to communicate with each other, you must create an inter-region connection and allocate bandwidth resources to the connection.
    * Enterprise Edition transit routers allow you to allocate bandwidth resources to inter-region connections by using the following methods:
    * *   **Allocate bandwidth resources from a bandwidth plan**:
    * You must purchase a bandwidth plan, and then allocate bandwidth resources from the bandwidth plan to inter-region connections. For more information, see [CreateCenBandwidthPackage](~~65919~~).
    * *   **Use pay-by-data-transfer bandwidth resources**:
    * You can set a maximum bandwidth value for an inter-region connection. Then, you are charged for the amount of data transfer over the connection. For more information, see [Inter-region data transfer](~~337827~~).
    * **CreateTransitRouterPeerAttachment** is an asynchronous operation. After you a request is set, the system returns an inter-region connection ID and runs the task in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of an inter-region connection.
    * *   If an inter-region connection is in the **Attaching** state, the inter-region connection is being created. You can query the inter-region connection but cannot perform other regions.
    * *   If an inter-region connection is in the **Attached** state, the inter-region connection is created.
    *
    * @param request CreateTransitRouterPeerAttachmentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTransitRouterPeerAttachmentResponse
   */
  async createTransitRouterPeerAttachmentWithOptions(request: CreateTransitRouterPeerAttachmentRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransitRouterPeerAttachmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.bandwidthType)) {
      query["BandwidthType"] = request.bandwidthType;
    }

    if (!Util.isUnset(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.defaultLinkType)) {
      query["DefaultLinkType"] = request.defaultLinkType;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.peerTransitRouterId)) {
      query["PeerTransitRouterId"] = request.peerTransitRouterId;
    }

    if (!Util.isUnset(request.peerTransitRouterRegionId)) {
      query["PeerTransitRouterRegionId"] = request.peerTransitRouterRegionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!Util.isUnset(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTransitRouterPeerAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTransitRouterPeerAttachmentResponse>(await this.callApi(params, req, runtime), new CreateTransitRouterPeerAttachmentResponse({}));
  }

  /**
    * By default, 1 Kbit/s of bandwidth is provided for inter-region communication between transit routers. This allows you to test the connectivity of inter-region IPv4 networks. To allow services that are deployed in different regions to communicate with each other, you must create an inter-region connection and allocate bandwidth resources to the connection.
    * Enterprise Edition transit routers allow you to allocate bandwidth resources to inter-region connections by using the following methods:
    * *   **Allocate bandwidth resources from a bandwidth plan**:
    * You must purchase a bandwidth plan, and then allocate bandwidth resources from the bandwidth plan to inter-region connections. For more information, see [CreateCenBandwidthPackage](~~65919~~).
    * *   **Use pay-by-data-transfer bandwidth resources**:
    * You can set a maximum bandwidth value for an inter-region connection. Then, you are charged for the amount of data transfer over the connection. For more information, see [Inter-region data transfer](~~337827~~).
    * **CreateTransitRouterPeerAttachment** is an asynchronous operation. After you a request is set, the system returns an inter-region connection ID and runs the task in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of an inter-region connection.
    * *   If an inter-region connection is in the **Attaching** state, the inter-region connection is being created. You can query the inter-region connection but cannot perform other regions.
    * *   If an inter-region connection is in the **Attached** state, the inter-region connection is created.
    *
    * @param request CreateTransitRouterPeerAttachmentRequest
    * @return CreateTransitRouterPeerAttachmentResponse
   */
  async createTransitRouterPeerAttachment(request: CreateTransitRouterPeerAttachmentRequest): Promise<CreateTransitRouterPeerAttachmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransitRouterPeerAttachmentWithOptions(request, runtime);
  }

  /**
    * *   Only the route tables of Enterprise Edition transit routers can be associated with prefix lists.
    * *   A prefix list can be associated only with one route table of an Enterprise Edition.
    * *   The CIDR blocks in the prefix list cannot overlap with those in the route table of the Enterprise Edition transit router. Otherwise, the prefix list fails to be associated with the route table.
    * *   If the route table of an Enterprise Edition transit router needs to be associated with multiple prefix lists, make sure that the CIDR blocks in the prefix lists do not overlap. Otherwise, the route table fails to be associated with the prefix lists.
    * # Prerequisites
    * *   A prefix list is created. For more information, see [CreateVpcPrefixList](~~437367~~).
    * *   The prefix list is shared with the Alibaba Cloud account that owns the Enterprise Edition transit router if the prefix list and the Enterprise Edition transit router belong to different Alibaba Cloud accounts. For more information about how to share a prefix list with another Alibaba Cloud account, see [Resource sharing overview](~~160622~~) and [API reference for resource sharing](~~193445~~).
    *
    * @param request CreateTransitRouterPrefixListAssociationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTransitRouterPrefixListAssociationResponse
   */
  async createTransitRouterPrefixListAssociationWithOptions(request: CreateTransitRouterPrefixListAssociationRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransitRouterPrefixListAssociationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.nextHop)) {
      query["NextHop"] = request.nextHop;
    }

    if (!Util.isUnset(request.nextHopType)) {
      query["NextHopType"] = request.nextHopType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.ownerUid)) {
      query["OwnerUid"] = request.ownerUid;
    }

    if (!Util.isUnset(request.prefixListId)) {
      query["PrefixListId"] = request.prefixListId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.transitRouterTableId)) {
      query["TransitRouterTableId"] = request.transitRouterTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTransitRouterPrefixListAssociation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTransitRouterPrefixListAssociationResponse>(await this.callApi(params, req, runtime), new CreateTransitRouterPrefixListAssociationResponse({}));
  }

  /**
    * *   Only the route tables of Enterprise Edition transit routers can be associated with prefix lists.
    * *   A prefix list can be associated only with one route table of an Enterprise Edition.
    * *   The CIDR blocks in the prefix list cannot overlap with those in the route table of the Enterprise Edition transit router. Otherwise, the prefix list fails to be associated with the route table.
    * *   If the route table of an Enterprise Edition transit router needs to be associated with multiple prefix lists, make sure that the CIDR blocks in the prefix lists do not overlap. Otherwise, the route table fails to be associated with the prefix lists.
    * # Prerequisites
    * *   A prefix list is created. For more information, see [CreateVpcPrefixList](~~437367~~).
    * *   The prefix list is shared with the Alibaba Cloud account that owns the Enterprise Edition transit router if the prefix list and the Enterprise Edition transit router belong to different Alibaba Cloud accounts. For more information about how to share a prefix list with another Alibaba Cloud account, see [Resource sharing overview](~~160622~~) and [API reference for resource sharing](~~193445~~).
    *
    * @param request CreateTransitRouterPrefixListAssociationRequest
    * @return CreateTransitRouterPrefixListAssociationResponse
   */
  async createTransitRouterPrefixListAssociation(request: CreateTransitRouterPrefixListAssociationRequest): Promise<CreateTransitRouterPrefixListAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransitRouterPrefixListAssociationWithOptions(request, runtime);
  }

  /**
    * **CreateTransitRouterRouteEntry** is an asynchronous operation. After you send a request, the route ID is returned but the operation is still being performed in the system background. You can call **ListTransitRouterRouteEntries** to query the status of a route.
    * *   If a route is in the **Creating** state, the route is being created. In this case, you can query the route but cannot perform other operations.
    * *   If a route is in the **Active** state, the route is created.
    *
    * @param request CreateTransitRouterRouteEntryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTransitRouterRouteEntryResponse
   */
  async createTransitRouterRouteEntryWithOptions(request: CreateTransitRouterRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransitRouterRouteEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryDescription)) {
      query["TransitRouterRouteEntryDescription"] = request.transitRouterRouteEntryDescription;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryDestinationCidrBlock)) {
      query["TransitRouterRouteEntryDestinationCidrBlock"] = request.transitRouterRouteEntryDestinationCidrBlock;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryName)) {
      query["TransitRouterRouteEntryName"] = request.transitRouterRouteEntryName;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryNextHopId)) {
      query["TransitRouterRouteEntryNextHopId"] = request.transitRouterRouteEntryNextHopId;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryNextHopType)) {
      query["TransitRouterRouteEntryNextHopType"] = request.transitRouterRouteEntryNextHopType;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTransitRouterRouteEntry",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTransitRouterRouteEntryResponse>(await this.callApi(params, req, runtime), new CreateTransitRouterRouteEntryResponse({}));
  }

  /**
    * **CreateTransitRouterRouteEntry** is an asynchronous operation. After you send a request, the route ID is returned but the operation is still being performed in the system background. You can call **ListTransitRouterRouteEntries** to query the status of a route.
    * *   If a route is in the **Creating** state, the route is being created. In this case, you can query the route but cannot perform other operations.
    * *   If a route is in the **Active** state, the route is created.
    *
    * @param request CreateTransitRouterRouteEntryRequest
    * @return CreateTransitRouterRouteEntryResponse
   */
  async createTransitRouterRouteEntry(request: CreateTransitRouterRouteEntryRequest): Promise<CreateTransitRouterRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransitRouterRouteEntryWithOptions(request, runtime);
  }

  /**
    * *   Only Enterprise Edition transit routers support custom route tables. For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](~~181681~~)
    * *   **CreateTransitRouterRouteTable** is an asynchronous operation. After you send a request, the route table ID is returned but the operation is still being performed in the system background. You can call **ListTransitRouterRouteTables** to query the status of a route table.
    *     *   If a route table is in the **Creating** state, the route table is being created. In this case, you can query the route table but cannot perform other operations.
    *     *   If a route table is in the **Active** state, the route table is created.
    *
    * @param request CreateTransitRouterRouteTableRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTransitRouterRouteTableResponse
   */
  async createTransitRouterRouteTableWithOptions(request: CreateTransitRouterRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransitRouterRouteTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeTableOptions)) {
      query["RouteTableOptions"] = request.routeTableOptions;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.transitRouterRouteTableDescription)) {
      query["TransitRouterRouteTableDescription"] = request.transitRouterRouteTableDescription;
    }

    if (!Util.isUnset(request.transitRouterRouteTableName)) {
      query["TransitRouterRouteTableName"] = request.transitRouterRouteTableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTransitRouterRouteTable",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTransitRouterRouteTableResponse>(await this.callApi(params, req, runtime), new CreateTransitRouterRouteTableResponse({}));
  }

  /**
    * *   Only Enterprise Edition transit routers support custom route tables. For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](~~181681~~)
    * *   **CreateTransitRouterRouteTable** is an asynchronous operation. After you send a request, the route table ID is returned but the operation is still being performed in the system background. You can call **ListTransitRouterRouteTables** to query the status of a route table.
    *     *   If a route table is in the **Creating** state, the route table is being created. In this case, you can query the route table but cannot perform other operations.
    *     *   If a route table is in the **Active** state, the route table is created.
    *
    * @param request CreateTransitRouterRouteTableRequest
    * @return CreateTransitRouterRouteTableResponse
   */
  async createTransitRouterRouteTable(request: CreateTransitRouterRouteTableRequest): Promise<CreateTransitRouterRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransitRouterRouteTableWithOptions(request, runtime);
  }

  /**
    * *   For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](~~181681~~)
    * *   You can use the following methods to connect a VBR to an Enterprise Edition transit router:
    *     *   If an Enterprise Edition transit router is already created in the region where you want to create a VBR connection, set the **VbrId** and **TransitRouterId** parameters.
    *     *   If no Enterprise Edition transit router is created in the region where you want to create a VBR connection, set the **VbrId**, **CenId**, and **RegionId** parameters. Then, the system automatically creates an Enterprise Edition transit router in the specified region.
    * *   **CreateTransitRouterVbrAttachment** is an asynchronous operation. After you send a request, the system returns a VBR connection ID and runs the task in the background. You can call the **ListTransitRouterVbrAttachments** operation to query the status of a VBR connection.
    *     *   If a VBR connection is in the **Attaching** state, the VBR connection is being created. You can query the VBR connection but cannot perform other operations.
    *     *   If a VBR connection is in the **Attached** state, the VBR connection is created.
    *
    * @param request CreateTransitRouterVbrAttachmentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTransitRouterVbrAttachmentResponse
   */
  async createTransitRouterVbrAttachmentWithOptions(request: CreateTransitRouterVbrAttachmentRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransitRouterVbrAttachmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!Util.isUnset(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.vbrId)) {
      query["VbrId"] = request.vbrId;
    }

    if (!Util.isUnset(request.vbrOwnerId)) {
      query["VbrOwnerId"] = request.vbrOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTransitRouterVbrAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTransitRouterVbrAttachmentResponse>(await this.callApi(params, req, runtime), new CreateTransitRouterVbrAttachmentResponse({}));
  }

  /**
    * *   For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](~~181681~~)
    * *   You can use the following methods to connect a VBR to an Enterprise Edition transit router:
    *     *   If an Enterprise Edition transit router is already created in the region where you want to create a VBR connection, set the **VbrId** and **TransitRouterId** parameters.
    *     *   If no Enterprise Edition transit router is created in the region where you want to create a VBR connection, set the **VbrId**, **CenId**, and **RegionId** parameters. Then, the system automatically creates an Enterprise Edition transit router in the specified region.
    * *   **CreateTransitRouterVbrAttachment** is an asynchronous operation. After you send a request, the system returns a VBR connection ID and runs the task in the background. You can call the **ListTransitRouterVbrAttachments** operation to query the status of a VBR connection.
    *     *   If a VBR connection is in the **Attaching** state, the VBR connection is being created. You can query the VBR connection but cannot perform other operations.
    *     *   If a VBR connection is in the **Attached** state, the VBR connection is created.
    *
    * @param request CreateTransitRouterVbrAttachmentRequest
    * @return CreateTransitRouterVbrAttachmentResponse
   */
  async createTransitRouterVbrAttachment(request: CreateTransitRouterVbrAttachmentRequest): Promise<CreateTransitRouterVbrAttachmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransitRouterVbrAttachmentWithOptions(request, runtime);
  }

  /**
    * *   You can use the following methods to attach a VPC to an Enterprise Edition transit router:
    *     *   If an Enterprise Edition transit router is already created in the region where you want to create a VPC connection, set **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, and **TransitRouterId**.
    *     *   If no Enterprise Edition transit router is created in the region where you want to create a VPC connection, set **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, **CenId**, and **RegionId**. When you create a VPC connection, the system automatically creates an Enterprise Edition transit router in the specified region.
    * *   **CreateTransitRouterVpcAttachment** is an asynchronous operation. After you send a request, the VPC connection ID is returned but the operation is still being performed in the system background. You can call the [ListTransitRouterVpcAttachments](~~261222~~) operation to query the status of a VPC connection.
    *     *   If a VPC connection is in the **Attaching** state, the VPC connection is being created. You can query the VPC connection but cannot perform other operations.
    *     *   If a VPC connection is in the **Attached** state, the VPC connection is created.
    * *   By default, route learning and associated forwarding are disabled between transit router route tables and VPC connections.
    * ## Prerequisites
    * Before you call this operation, make sure that the following requirements are met:
    * *   At least one vSwitch is deployed for the VPC in the zones supported by Enterprise Edition transit routers. Each vSwitch must have at least one idle IP address. For more information, see [Regions and zones supported by Enterprise Edition transit routers](~~181681~~).
    * *   To connect to a network instance that belongs to another Alibaba Cloud account, you must first acquire the required permissions from the account. For more information, see [Acquire permissions to connect to a network instance that belongs to another account](~~181553~~).
    * *   VPC connections incur fees. Take note of the billing rules of VPC connections before you create a VPC connection. For more information, see [Billing](~~189836~~).
    *
    * @param request CreateTransitRouterVpcAttachmentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTransitRouterVpcAttachmentResponse
   */
  async createTransitRouterVpcAttachmentWithOptions(request: CreateTransitRouterVpcAttachmentRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransitRouterVpcAttachmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!Util.isUnset(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcOwnerId)) {
      query["VpcOwnerId"] = request.vpcOwnerId;
    }

    if (!Util.isUnset(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTransitRouterVpcAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTransitRouterVpcAttachmentResponse>(await this.callApi(params, req, runtime), new CreateTransitRouterVpcAttachmentResponse({}));
  }

  /**
    * *   You can use the following methods to attach a VPC to an Enterprise Edition transit router:
    *     *   If an Enterprise Edition transit router is already created in the region where you want to create a VPC connection, set **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, and **TransitRouterId**.
    *     *   If no Enterprise Edition transit router is created in the region where you want to create a VPC connection, set **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, **CenId**, and **RegionId**. When you create a VPC connection, the system automatically creates an Enterprise Edition transit router in the specified region.
    * *   **CreateTransitRouterVpcAttachment** is an asynchronous operation. After you send a request, the VPC connection ID is returned but the operation is still being performed in the system background. You can call the [ListTransitRouterVpcAttachments](~~261222~~) operation to query the status of a VPC connection.
    *     *   If a VPC connection is in the **Attaching** state, the VPC connection is being created. You can query the VPC connection but cannot perform other operations.
    *     *   If a VPC connection is in the **Attached** state, the VPC connection is created.
    * *   By default, route learning and associated forwarding are disabled between transit router route tables and VPC connections.
    * ## Prerequisites
    * Before you call this operation, make sure that the following requirements are met:
    * *   At least one vSwitch is deployed for the VPC in the zones supported by Enterprise Edition transit routers. Each vSwitch must have at least one idle IP address. For more information, see [Regions and zones supported by Enterprise Edition transit routers](~~181681~~).
    * *   To connect to a network instance that belongs to another Alibaba Cloud account, you must first acquire the required permissions from the account. For more information, see [Acquire permissions to connect to a network instance that belongs to another account](~~181553~~).
    * *   VPC connections incur fees. Take note of the billing rules of VPC connections before you create a VPC connection. For more information, see [Billing](~~189836~~).
    *
    * @param request CreateTransitRouterVpcAttachmentRequest
    * @return CreateTransitRouterVpcAttachmentResponse
   */
  async createTransitRouterVpcAttachment(request: CreateTransitRouterVpcAttachmentRequest): Promise<CreateTransitRouterVpcAttachmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransitRouterVpcAttachmentWithOptions(request, runtime);
  }

  /**
    * *   By default, route learning and associated forwarding are disabled between transit router route tables and IPsec-VPN attachments.
    * *   When you call `CreateTransitRouterVpnAttachment`, if you set **CenId** and **RegionId**, you do not need to set **TransitRouterId**. If you set **TransitRouterId** and **RegionId**, you do not need to set **CenId**.
    * ## Prerequisites
    * *   Before you attach an IPsec-VPN connection to a transit router, make sure that at least one IPsec-VPN connection is created in the region where the transit router is deployed. Make sure the IPsec-VPN connection is not associated with a resource. For more information, see [CreateVpnAttachment](~~442455~~).
    * *   If the IPsec-VPN connection to be attached to the transit router belongs to a different Alibaba Cloud account, make sure that the transit router has obtained the required permissions from the IPsec-VPN connection. For more information, see [GrantInstanceToTransitRouter](~~417520~~).
    *
    * @param request CreateTransitRouterVpnAttachmentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTransitRouterVpnAttachmentResponse
   */
  async createTransitRouterVpnAttachmentWithOptions(request: CreateTransitRouterVpnAttachmentRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransitRouterVpnAttachmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!Util.isUnset(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.vpnId)) {
      query["VpnId"] = request.vpnId;
    }

    if (!Util.isUnset(request.vpnOwnerId)) {
      query["VpnOwnerId"] = request.vpnOwnerId;
    }

    if (!Util.isUnset(request.zone)) {
      query["Zone"] = request.zone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTransitRouterVpnAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTransitRouterVpnAttachmentResponse>(await this.callApi(params, req, runtime), new CreateTransitRouterVpnAttachmentResponse({}));
  }

  /**
    * *   By default, route learning and associated forwarding are disabled between transit router route tables and IPsec-VPN attachments.
    * *   When you call `CreateTransitRouterVpnAttachment`, if you set **CenId** and **RegionId**, you do not need to set **TransitRouterId**. If you set **TransitRouterId** and **RegionId**, you do not need to set **CenId**.
    * ## Prerequisites
    * *   Before you attach an IPsec-VPN connection to a transit router, make sure that at least one IPsec-VPN connection is created in the region where the transit router is deployed. Make sure the IPsec-VPN connection is not associated with a resource. For more information, see [CreateVpnAttachment](~~442455~~).
    * *   If the IPsec-VPN connection to be attached to the transit router belongs to a different Alibaba Cloud account, make sure that the transit router has obtained the required permissions from the IPsec-VPN connection. For more information, see [GrantInstanceToTransitRouter](~~417520~~).
    *
    * @param request CreateTransitRouterVpnAttachmentRequest
    * @return CreateTransitRouterVpnAttachmentResponse
   */
  async createTransitRouterVpnAttachment(request: CreateTransitRouterVpnAttachmentRequest): Promise<CreateTransitRouterVpnAttachmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransitRouterVpnAttachmentWithOptions(request, runtime);
  }

  /**
    * `DeactiveFlowLog` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
    * *   If a flow log is in the **Modifying** state, the flow log is being disabled. You can query the flow log but cannot perform other operations.
    * *   If a flow log is in the **Inactive** state, the flow log is disabled.
    *
    * @param request DeactiveFlowLogRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeactiveFlowLogResponse
   */
  async deactiveFlowLogWithOptions(request: DeactiveFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<DeactiveFlowLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeactiveFlowLog",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeactiveFlowLogResponse>(await this.callApi(params, req, runtime), new DeactiveFlowLogResponse({}));
  }

  /**
    * `DeactiveFlowLog` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
    * *   If a flow log is in the **Modifying** state, the flow log is being disabled. You can query the flow log but cannot perform other operations.
    * *   If a flow log is in the **Inactive** state, the flow log is disabled.
    *
    * @param request DeactiveFlowLogRequest
    * @return DeactiveFlowLogResponse
   */
  async deactiveFlowLog(request: DeactiveFlowLogRequest): Promise<DeactiveFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactiveFlowLogWithOptions(request, runtime);
  }

  /**
    * **DeleteCen** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **DescribeCens** operation to query the status of a CEN instance.
    * *   If a CEN instance is in the **Deleting** state, the CEN instance is being deleted. In this case, you can query the CEN instance but cannot perform other operations.
    * *   If a CEN instance cannot be found, the CEN instance is deleted.
    * #### Prerequisites
    * The CEN instance that you want to delete is not associated with a bandwidth plan, and the transit router associated with the CEN instance does not have a network instance connection or a custom route table.
    * *   For more information about how to detach a network instance, see the following topics:
    *     *   [DeleteTransitRouterVpcAttachment](~~261220~~)
    *     *   [DeleteTransitRouterVbrAttachment](~~261223~~)
    *     *   [DeleteTransitRouterVpnAttachment](~~443992~~)
    *     *   [DeleteTransitRouterPeerAttachment](~~261227~~)
    *      >For more information about how to detach network instances from a Basic Edition transit router, see [DetachCenChildInstance](~~65915~~).
    * *   For more information about how to delete a custom route table, see [DeleteTransitRouterRouteTable](~~261235~~).
    * *   For more information about how to disassociate a bandwidth plan from a CEN instance, see [UnassociateCenBandwidthPackage](~~65935~~).
    *
    * @param request DeleteCenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCenResponse
   */
  async deleteCenWithOptions(request: DeleteCenRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCenResponse>(await this.callApi(params, req, runtime), new DeleteCenResponse({}));
  }

  /**
    * **DeleteCen** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **DescribeCens** operation to query the status of a CEN instance.
    * *   If a CEN instance is in the **Deleting** state, the CEN instance is being deleted. In this case, you can query the CEN instance but cannot perform other operations.
    * *   If a CEN instance cannot be found, the CEN instance is deleted.
    * #### Prerequisites
    * The CEN instance that you want to delete is not associated with a bandwidth plan, and the transit router associated with the CEN instance does not have a network instance connection or a custom route table.
    * *   For more information about how to detach a network instance, see the following topics:
    *     *   [DeleteTransitRouterVpcAttachment](~~261220~~)
    *     *   [DeleteTransitRouterVbrAttachment](~~261223~~)
    *     *   [DeleteTransitRouterVpnAttachment](~~443992~~)
    *     *   [DeleteTransitRouterPeerAttachment](~~261227~~)
    *      >For more information about how to detach network instances from a Basic Edition transit router, see [DetachCenChildInstance](~~65915~~).
    * *   For more information about how to delete a custom route table, see [DeleteTransitRouterRouteTable](~~261235~~).
    * *   For more information about how to disassociate a bandwidth plan from a CEN instance, see [UnassociateCenBandwidthPackage](~~65935~~).
    *
    * @param request DeleteCenRequest
    * @return DeleteCenResponse
   */
  async deleteCen(request: DeleteCenRequest): Promise<DeleteCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCenWithOptions(request, runtime);
  }

  async deleteCenBandwidthPackageWithOptions(request: DeleteCenBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCenBandwidthPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCenBandwidthPackage",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCenBandwidthPackageResponse>(await this.callApi(params, req, runtime), new DeleteCenBandwidthPackageResponse({}));
  }

  async deleteCenBandwidthPackage(request: DeleteCenBandwidthPackageRequest): Promise<DeleteCenBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCenBandwidthPackageWithOptions(request, runtime);
  }

  /**
    * *   You can delete routes only from virtual private clouds (VPCs) and virtual border routers (VBRs) whose next hop is an **Enterprise Edition transit router connection**, which is the connection to the network instance.
    * *   **DeleteCenChildInstanceRouteEntryToAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeRouteEntryList** operation to query the status of a route.
    *     *   If a route is in the **Deleting** state, the route is being deleted. You can query the route but cannot perform other operations.
    *     *   If a route cannot be found, the route is deleted.
    *
    * @param request DeleteCenChildInstanceRouteEntryToAttachmentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCenChildInstanceRouteEntryToAttachmentResponse
   */
  async deleteCenChildInstanceRouteEntryToAttachmentWithOptions(request: DeleteCenChildInstanceRouteEntryToAttachmentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCenChildInstanceRouteEntryToAttachmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCenChildInstanceRouteEntryToAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCenChildInstanceRouteEntryToAttachmentResponse>(await this.callApi(params, req, runtime), new DeleteCenChildInstanceRouteEntryToAttachmentResponse({}));
  }

  /**
    * *   You can delete routes only from virtual private clouds (VPCs) and virtual border routers (VBRs) whose next hop is an **Enterprise Edition transit router connection**, which is the connection to the network instance.
    * *   **DeleteCenChildInstanceRouteEntryToAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeRouteEntryList** operation to query the status of a route.
    *     *   If a route is in the **Deleting** state, the route is being deleted. You can query the route but cannot perform other operations.
    *     *   If a route cannot be found, the route is deleted.
    *
    * @param request DeleteCenChildInstanceRouteEntryToAttachmentRequest
    * @return DeleteCenChildInstanceRouteEntryToAttachmentResponse
   */
  async deleteCenChildInstanceRouteEntryToAttachment(request: DeleteCenChildInstanceRouteEntryToAttachmentRequest): Promise<DeleteCenChildInstanceRouteEntryToAttachmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCenChildInstanceRouteEntryToAttachmentWithOptions(request, runtime);
  }

  /**
    * ## Limits
    * *   By default, the DeleteCenChildInstanceRouteEntryToCen operation is unavailable. To call this operation, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    * *   You cannot delete a route entry from an Enterprise Edition transit router by calling the DeleteCenChildInstanceRouteEntryToCen operation.
    *
    * @param request DeleteCenChildInstanceRouteEntryToCenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCenChildInstanceRouteEntryToCenResponse
   */
  async deleteCenChildInstanceRouteEntryToCenWithOptions(request: DeleteCenChildInstanceRouteEntryToCenRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCenChildInstanceRouteEntryToCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.childInstanceAliUid)) {
      query["ChildInstanceAliUid"] = request.childInstanceAliUid;
    }

    if (!Util.isUnset(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCenChildInstanceRouteEntryToCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCenChildInstanceRouteEntryToCenResponse>(await this.callApi(params, req, runtime), new DeleteCenChildInstanceRouteEntryToCenResponse({}));
  }

  /**
    * ## Limits
    * *   By default, the DeleteCenChildInstanceRouteEntryToCen operation is unavailable. To call this operation, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    * *   You cannot delete a route entry from an Enterprise Edition transit router by calling the DeleteCenChildInstanceRouteEntryToCen operation.
    *
    * @param request DeleteCenChildInstanceRouteEntryToCenRequest
    * @return DeleteCenChildInstanceRouteEntryToCenResponse
   */
  async deleteCenChildInstanceRouteEntryToCen(request: DeleteCenChildInstanceRouteEntryToCenRequest): Promise<DeleteCenChildInstanceRouteEntryToCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCenChildInstanceRouteEntryToCenWithOptions(request, runtime);
  }

  /**
    * *   Before you delete a QoS policy, you must delete all queues in the QoS policy except the default queue. For more information, see [DeleteCenInterRegionTrafficQosQueue](~~419062~~).
    * *   **DeleteCenInterRegionTrafficQosPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of a QoS policy.
    *     *   If a QoS policy is in the **Deleting** state, the QoS policy is being deleted. You can query the QoS policy but cannot perform other operations.
    *     *   If a QoS policy cannot be found, the QoS policy is deleted.
    *
    * @param request DeleteCenInterRegionTrafficQosPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCenInterRegionTrafficQosPolicyResponse
   */
  async deleteCenInterRegionTrafficQosPolicyWithOptions(request: DeleteCenInterRegionTrafficQosPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCenInterRegionTrafficQosPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficQosPolicyId)) {
      query["TrafficQosPolicyId"] = request.trafficQosPolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCenInterRegionTrafficQosPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCenInterRegionTrafficQosPolicyResponse>(await this.callApi(params, req, runtime), new DeleteCenInterRegionTrafficQosPolicyResponse({}));
  }

  /**
    * *   Before you delete a QoS policy, you must delete all queues in the QoS policy except the default queue. For more information, see [DeleteCenInterRegionTrafficQosQueue](~~419062~~).
    * *   **DeleteCenInterRegionTrafficQosPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of a QoS policy.
    *     *   If a QoS policy is in the **Deleting** state, the QoS policy is being deleted. You can query the QoS policy but cannot perform other operations.
    *     *   If a QoS policy cannot be found, the QoS policy is deleted.
    *
    * @param request DeleteCenInterRegionTrafficQosPolicyRequest
    * @return DeleteCenInterRegionTrafficQosPolicyResponse
   */
  async deleteCenInterRegionTrafficQosPolicy(request: DeleteCenInterRegionTrafficQosPolicyRequest): Promise<DeleteCenInterRegionTrafficQosPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCenInterRegionTrafficQosPolicyWithOptions(request, runtime);
  }

  /**
    * *   You cannot delete the default queue.
    * *   **DeleteCenInterRegionTrafficQosQueue** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of a queue. If a queue cannot be found, the queue is deleted.
    *
    * @param request DeleteCenInterRegionTrafficQosQueueRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCenInterRegionTrafficQosQueueResponse
   */
  async deleteCenInterRegionTrafficQosQueueWithOptions(request: DeleteCenInterRegionTrafficQosQueueRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCenInterRegionTrafficQosQueueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qosQueueId)) {
      query["QosQueueId"] = request.qosQueueId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCenInterRegionTrafficQosQueue",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCenInterRegionTrafficQosQueueResponse>(await this.callApi(params, req, runtime), new DeleteCenInterRegionTrafficQosQueueResponse({}));
  }

  /**
    * *   You cannot delete the default queue.
    * *   **DeleteCenInterRegionTrafficQosQueue** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of a queue. If a queue cannot be found, the queue is deleted.
    *
    * @param request DeleteCenInterRegionTrafficQosQueueRequest
    * @return DeleteCenInterRegionTrafficQosQueueResponse
   */
  async deleteCenInterRegionTrafficQosQueue(request: DeleteCenInterRegionTrafficQosQueueRequest): Promise<DeleteCenInterRegionTrafficQosQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCenInterRegionTrafficQosQueueWithOptions(request, runtime);
  }

  /**
    * `DeleteCenRouteMap` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeCenRouteMaps` operation to query the status of a routing policy.
    * *   If a routing policy is in the **Deleting** state, the routing policy is being deleted. You can query the routing policy but cannot perform other operations.
    * *   If a routing policy cannot be found, it is deleted.``
    *
    * @param request DeleteCenRouteMapRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCenRouteMapResponse
   */
  async deleteCenRouteMapWithOptions(request: DeleteCenRouteMapRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCenRouteMapResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenRegionId)) {
      query["CenRegionId"] = request.cenRegionId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeMapId)) {
      query["RouteMapId"] = request.routeMapId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCenRouteMap",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCenRouteMapResponse>(await this.callApi(params, req, runtime), new DeleteCenRouteMapResponse({}));
  }

  /**
    * `DeleteCenRouteMap` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeCenRouteMaps` operation to query the status of a routing policy.
    * *   If a routing policy is in the **Deleting** state, the routing policy is being deleted. You can query the routing policy but cannot perform other operations.
    * *   If a routing policy cannot be found, it is deleted.``
    *
    * @param request DeleteCenRouteMapRequest
    * @return DeleteCenRouteMapResponse
   */
  async deleteCenRouteMap(request: DeleteCenRouteMapRequest): Promise<DeleteCenRouteMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCenRouteMapWithOptions(request, runtime);
  }

  /**
    * `DeleteFlowlog` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
    * *   If a flow log is in the **Deleting** state, the flow log is being deleted. In this case, you can query the flow log but cannot perform other operations.
    * *   If a flow log cannot be found, the flow log is deleted.
    *
    * @param request DeleteFlowlogRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteFlowlogResponse
   */
  async deleteFlowlogWithOptions(request: DeleteFlowlogRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowlogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFlowlog",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFlowlogResponse>(await this.callApi(params, req, runtime), new DeleteFlowlogResponse({}));
  }

  /**
    * `DeleteFlowlog` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
    * *   If a flow log is in the **Deleting** state, the flow log is being deleted. In this case, you can query the flow log but cannot perform other operations.
    * *   If a flow log cannot be found, the flow log is deleted.
    *
    * @param request DeleteFlowlogRequest
    * @return DeleteFlowlogResponse
   */
  async deleteFlowlog(request: DeleteFlowlogRequest): Promise<DeleteFlowlogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowlogWithOptions(request, runtime);
  }

  /**
    * **DeleteRouteServiceInCen** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. If the request parameters are invalid, the system returns a request ID, but the cloud service configuration is not deleted. You can call **DescribeRouteServicesInCen** to query the status of the task.
    * *   If a cloud service is in the **Deleting** state, the cloud service configuration is being deleted. In this case, you can only query the cloud service configuration and cannot perform other operations.
    * *   If the specified cloud service configuration cannot be found, the cloud service configuration is deleted.
    *
    * @param request DeleteRouteServiceInCenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteRouteServiceInCenResponse
   */
  async deleteRouteServiceInCenWithOptions(request: DeleteRouteServiceInCenRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRouteServiceInCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessRegionId)) {
      query["AccessRegionId"] = request.accessRegionId;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.host)) {
      query["Host"] = request.host;
    }

    if (!Util.isUnset(request.hostRegionId)) {
      query["HostRegionId"] = request.hostRegionId;
    }

    if (!Util.isUnset(request.hostVpcId)) {
      query["HostVpcId"] = request.hostVpcId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRouteServiceInCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRouteServiceInCenResponse>(await this.callApi(params, req, runtime), new DeleteRouteServiceInCenResponse({}));
  }

  /**
    * **DeleteRouteServiceInCen** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. If the request parameters are invalid, the system returns a request ID, but the cloud service configuration is not deleted. You can call **DescribeRouteServicesInCen** to query the status of the task.
    * *   If a cloud service is in the **Deleting** state, the cloud service configuration is being deleted. In this case, you can only query the cloud service configuration and cannot perform other operations.
    * *   If the specified cloud service configuration cannot be found, the cloud service configuration is deleted.
    *
    * @param request DeleteRouteServiceInCenRequest
    * @return DeleteRouteServiceInCenResponse
   */
  async deleteRouteServiceInCen(request: DeleteRouteServiceInCenRequest): Promise<DeleteRouteServiceInCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRouteServiceInCenWithOptions(request, runtime);
  }

  /**
    * *   The **DeleteTrafficMarkingPolicy** operation is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call **ListTrafficMarkingPolicies** to query the status of a traffic marking policy.
    *     *   If a traffic marking policy is in the **Deleting** state, the traffic marking policy is being deleted. You can query the traffic marking policy, but cannot perform other operations.
    *     *   If a traffic marking policy cannot be found, the traffic marking policy is deleted.
    * *   Before you delete a traffic marking policy, you must delete all traffic classification rules from the policy. For more information, see [RemoveTraficMatchRuleFromTrafficMarkingPolicy](~~419012~~).
    *
    * @param request DeleteTrafficMarkingPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTrafficMarkingPolicyResponse
   */
  async deleteTrafficMarkingPolicyWithOptions(request: DeleteTrafficMarkingPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTrafficMarkingPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrafficMarkingPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTrafficMarkingPolicyResponse>(await this.callApi(params, req, runtime), new DeleteTrafficMarkingPolicyResponse({}));
  }

  /**
    * *   The **DeleteTrafficMarkingPolicy** operation is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call **ListTrafficMarkingPolicies** to query the status of a traffic marking policy.
    *     *   If a traffic marking policy is in the **Deleting** state, the traffic marking policy is being deleted. You can query the traffic marking policy, but cannot perform other operations.
    *     *   If a traffic marking policy cannot be found, the traffic marking policy is deleted.
    * *   Before you delete a traffic marking policy, you must delete all traffic classification rules from the policy. For more information, see [RemoveTraficMatchRuleFromTrafficMarkingPolicy](~~419012~~).
    *
    * @param request DeleteTrafficMarkingPolicyRequest
    * @return DeleteTrafficMarkingPolicyResponse
   */
  async deleteTrafficMarkingPolicy(request: DeleteTrafficMarkingPolicyRequest): Promise<DeleteTrafficMarkingPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
    * *   Before you delete an aggregate route, make sure that your network has a redundant route to prevent service interruptions.
    * *   After an aggregate route is deleted, the aggregate route is automatically withdrawn from virtual private clouds (VPCs). Specific routes that fall within the aggregate route are advertised to the VPCs.
    *
    * @param request DeleteTransitRouteTableAggregationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTransitRouteTableAggregationResponse
   */
  async deleteTransitRouteTableAggregationWithOptions(request: DeleteTransitRouteTableAggregationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTransitRouteTableAggregationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouteTableAggregationCidr)) {
      query["TransitRouteTableAggregationCidr"] = request.transitRouteTableAggregationCidr;
    }

    if (!Util.isUnset(request.transitRouteTableId)) {
      query["TransitRouteTableId"] = request.transitRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTransitRouteTableAggregation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTransitRouteTableAggregationResponse>(await this.callApi(params, req, runtime), new DeleteTransitRouteTableAggregationResponse({}));
  }

  /**
    * *   Before you delete an aggregate route, make sure that your network has a redundant route to prevent service interruptions.
    * *   After an aggregate route is deleted, the aggregate route is automatically withdrawn from virtual private clouds (VPCs). Specific routes that fall within the aggregate route are advertised to the VPCs.
    *
    * @param request DeleteTransitRouteTableAggregationRequest
    * @return DeleteTransitRouteTableAggregationResponse
   */
  async deleteTransitRouteTableAggregation(request: DeleteTransitRouteTableAggregationRequest): Promise<DeleteTransitRouteTableAggregationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTransitRouteTableAggregationWithOptions(request, runtime);
  }

  /**
    * **DeleteTransitRouter** is an asynchronous operation. After you send a request, the **request ID** is returned but the operation is still being performed in the system background. You can call **ListTransitRouters** to query the status of a transit router.
    * *   If a transit router is in the **Deleting** state, the transit router is being deleted. In this case, you can query the transit router but cannot perform other operations.
    * *   If a transit router cannot be found, the transit router is deleted.
    * #### Prerequisites
    * Before you delete a transit router, make sure that the following prerequisites are met:
    * - No network instance connections are created on the transit router. 
    * 	
    *     - For more information about how to delete a virtual private cloud (VPC) connection, see [DeleteTransitRouterVpcAttachment](~~261220~~). 
    *     - For more information about how to delete a virtual border router (VBR) connection, see [DeleteTransitRouterVbrAttachment](~~261223~~). 
    *     - For more information about how to delete a Cloud Connect Network (CCN) connection, see [DetachCenChildInstance](~~65915~~). 
    *     - For more information about how to delete a VPN connection, see [DeleteTransitRouterVpnAttachment](~~443992~~).
    *     - For more information about how to delete an inter-region connection, see [DeleteTransitRouterPeerAttachment](~~261227~~). 
    * - No custom route tables are created on the transit router. For more information about how to delete a custom route table, see [DeleteTransitRouterRouteTable](~~261235~~).
    *
    * @param request DeleteTransitRouterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTransitRouterResponse
   */
  async deleteTransitRouterWithOptions(request: DeleteTransitRouterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTransitRouterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTransitRouter",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTransitRouterResponse>(await this.callApi(params, req, runtime), new DeleteTransitRouterResponse({}));
  }

  /**
    * **DeleteTransitRouter** is an asynchronous operation. After you send a request, the **request ID** is returned but the operation is still being performed in the system background. You can call **ListTransitRouters** to query the status of a transit router.
    * *   If a transit router is in the **Deleting** state, the transit router is being deleted. In this case, you can query the transit router but cannot perform other operations.
    * *   If a transit router cannot be found, the transit router is deleted.
    * #### Prerequisites
    * Before you delete a transit router, make sure that the following prerequisites are met:
    * - No network instance connections are created on the transit router. 
    * 	
    *     - For more information about how to delete a virtual private cloud (VPC) connection, see [DeleteTransitRouterVpcAttachment](~~261220~~). 
    *     - For more information about how to delete a virtual border router (VBR) connection, see [DeleteTransitRouterVbrAttachment](~~261223~~). 
    *     - For more information about how to delete a Cloud Connect Network (CCN) connection, see [DetachCenChildInstance](~~65915~~). 
    *     - For more information about how to delete a VPN connection, see [DeleteTransitRouterVpnAttachment](~~443992~~).
    *     - For more information about how to delete an inter-region connection, see [DeleteTransitRouterPeerAttachment](~~261227~~). 
    * - No custom route tables are created on the transit router. For more information about how to delete a custom route table, see [DeleteTransitRouterRouteTable](~~261235~~).
    *
    * @param request DeleteTransitRouterRequest
    * @return DeleteTransitRouterResponse
   */
  async deleteTransitRouter(request: DeleteTransitRouterRequest): Promise<DeleteTransitRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTransitRouterWithOptions(request, runtime);
  }

  /**
    * If IP addresses within the CIDR block have been allocated to network instances, the CIDR block cannot be deleted.
    *
    * @param request DeleteTransitRouterCidrRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTransitRouterCidrResponse
   */
  async deleteTransitRouterCidrWithOptions(request: DeleteTransitRouterCidrRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTransitRouterCidrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterCidrId)) {
      query["TransitRouterCidrId"] = request.transitRouterCidrId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTransitRouterCidr",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTransitRouterCidrResponse>(await this.callApi(params, req, runtime), new DeleteTransitRouterCidrResponse({}));
  }

  /**
    * If IP addresses within the CIDR block have been allocated to network instances, the CIDR block cannot be deleted.
    *
    * @param request DeleteTransitRouterCidrRequest
    * @return DeleteTransitRouterCidrResponse
   */
  async deleteTransitRouterCidr(request: DeleteTransitRouterCidrRequest): Promise<DeleteTransitRouterCidrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTransitRouterCidrWithOptions(request, runtime);
  }

  /**
    * Before you delete a multicast domain, make sure that the following requirements are met:
    * *   The multicast domain is disassociated from all vSwitches. For more information, see [DisassociateTransitRouterMulticastDomain](~~429774~~).
    * *   All multicast sources and members are removed from the multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupSources](~~429776~~) and [DeregisterTransitRouterMulticastGroupMembers](~~429779~~).
    * *   The multicast domain is not added to other multicast domains as a multicast member. If the multicast domain is added to another multicast domain as a multicast member, you must remove the multicast domain from the other multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupMembers](~~429779~~).
    *
    * @param request DeleteTransitRouterMulticastDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTransitRouterMulticastDomainResponse
   */
  async deleteTransitRouterMulticastDomainWithOptions(request: DeleteTransitRouterMulticastDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTransitRouterMulticastDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTransitRouterMulticastDomain",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTransitRouterMulticastDomainResponse>(await this.callApi(params, req, runtime), new DeleteTransitRouterMulticastDomainResponse({}));
  }

  /**
    * Before you delete a multicast domain, make sure that the following requirements are met:
    * *   The multicast domain is disassociated from all vSwitches. For more information, see [DisassociateTransitRouterMulticastDomain](~~429774~~).
    * *   All multicast sources and members are removed from the multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupSources](~~429776~~) and [DeregisterTransitRouterMulticastGroupMembers](~~429779~~).
    * *   The multicast domain is not added to other multicast domains as a multicast member. If the multicast domain is added to another multicast domain as a multicast member, you must remove the multicast domain from the other multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupMembers](~~429779~~).
    *
    * @param request DeleteTransitRouterMulticastDomainRequest
    * @return DeleteTransitRouterMulticastDomainResponse
   */
  async deleteTransitRouterMulticastDomain(request: DeleteTransitRouterMulticastDomainRequest): Promise<DeleteTransitRouterMulticastDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
    * **DeleteTransitRouterPeerAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call **ListTransitRouterPeerAttachments** to query the status of an inter-region connection.
    * *   If an inter-region connection is in the **Detaching** state, the inter-region connection is being deleted. You can query the inter-region connection but cannot perform other operations.
    * *   If an inter-region connection cannot be found, the inter-region connection is deleted.
    * ## Prerequisites
    * Before you begin, make sure that the Enterprise Edition transit router that you use to create inter-region connections meets the following prerequisites:
    * *   No associated forwarding correlation is established between the inter-region connection and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](~~260944~~).
    * *   No route learning correlation is established between the inter-region connection and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](~~260945~~).
    * *   The route tables of the Enterprise Edition transit router do not contain a custom route entry whose next hop is the network instance connection. For more information about how to delete custom routes from route tables of Enterprise Edition transit routers, see [DeleteTransitRouterRouteEntry](~~261240~~).
    * *   The route table does not contain a route whose next hop is the inter-region connection and that is generated from a prefix list. You can delete routes from a route table by disassociating the route table from the prefix list. For more information, see [DeleteTransitRouterPrefixListAssociation](~~445486~~).
    * *   No quality of service (QoS) policy is configured for the inter-region connection. For more information about how to delete QoS policies, see [DeleteCenInterRegionTrafficQosPolicy](~~427547~~).
    *
    * @param request DeleteTransitRouterPeerAttachmentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTransitRouterPeerAttachmentResponse
   */
  async deleteTransitRouterPeerAttachmentWithOptions(request: DeleteTransitRouterPeerAttachmentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTransitRouterPeerAttachmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTransitRouterPeerAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTransitRouterPeerAttachmentResponse>(await this.callApi(params, req, runtime), new DeleteTransitRouterPeerAttachmentResponse({}));
  }

  /**
    * **DeleteTransitRouterPeerAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call **ListTransitRouterPeerAttachments** to query the status of an inter-region connection.
    * *   If an inter-region connection is in the **Detaching** state, the inter-region connection is being deleted. You can query the inter-region connection but cannot perform other operations.
    * *   If an inter-region connection cannot be found, the inter-region connection is deleted.
    * ## Prerequisites
    * Before you begin, make sure that the Enterprise Edition transit router that you use to create inter-region connections meets the following prerequisites:
    * *   No associated forwarding correlation is established between the inter-region connection and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](~~260944~~).
    * *   No route learning correlation is established between the inter-region connection and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](~~260945~~).
    * *   The route tables of the Enterprise Edition transit router do not contain a custom route entry whose next hop is the network instance connection. For more information about how to delete custom routes from route tables of Enterprise Edition transit routers, see [DeleteTransitRouterRouteEntry](~~261240~~).
    * *   The route table does not contain a route whose next hop is the inter-region connection and that is generated from a prefix list. You can delete routes from a route table by disassociating the route table from the prefix list. For more information, see [DeleteTransitRouterPrefixListAssociation](~~445486~~).
    * *   No quality of service (QoS) policy is configured for the inter-region connection. For more information about how to delete QoS policies, see [DeleteCenInterRegionTrafficQosPolicy](~~427547~~).
    *
    * @param request DeleteTransitRouterPeerAttachmentRequest
    * @return DeleteTransitRouterPeerAttachmentResponse
   */
  async deleteTransitRouterPeerAttachment(request: DeleteTransitRouterPeerAttachmentRequest): Promise<DeleteTransitRouterPeerAttachmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTransitRouterPeerAttachmentWithOptions(request, runtime);
  }

  /**
    * # Usage notes
    * After you disassociate a route table of an Enterprise Edition transit router from a prefix list, the routes that point to the CIDR blocks in the prefix list are automatically withdrawn from the route table. Before you disassociate the route table of an Enterprise Edition transit router from a prefix list, you must migrate workloads that use the routes in case services are interrupted.
    *
    * @param request DeleteTransitRouterPrefixListAssociationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTransitRouterPrefixListAssociationResponse
   */
  async deleteTransitRouterPrefixListAssociationWithOptions(request: DeleteTransitRouterPrefixListAssociationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTransitRouterPrefixListAssociationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.nextHop)) {
      query["NextHop"] = request.nextHop;
    }

    if (!Util.isUnset(request.nextHopType)) {
      query["NextHopType"] = request.nextHopType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prefixListId)) {
      query["PrefixListId"] = request.prefixListId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.transitRouterTableId)) {
      query["TransitRouterTableId"] = request.transitRouterTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTransitRouterPrefixListAssociation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTransitRouterPrefixListAssociationResponse>(await this.callApi(params, req, runtime), new DeleteTransitRouterPrefixListAssociationResponse({}));
  }

  /**
    * # Usage notes
    * After you disassociate a route table of an Enterprise Edition transit router from a prefix list, the routes that point to the CIDR blocks in the prefix list are automatically withdrawn from the route table. Before you disassociate the route table of an Enterprise Edition transit router from a prefix list, you must migrate workloads that use the routes in case services are interrupted.
    *
    * @param request DeleteTransitRouterPrefixListAssociationRequest
    * @return DeleteTransitRouterPrefixListAssociationResponse
   */
  async deleteTransitRouterPrefixListAssociation(request: DeleteTransitRouterPrefixListAssociationRequest): Promise<DeleteTransitRouterPrefixListAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTransitRouterPrefixListAssociationWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If **TransitRouterRouteEntryId** is set, you must not set **TransitRouterRouteTableId** or **TransitRouterRouteEntryDestinationCidrBlock**. Otherwise, parameter conflicts will occur.
    * *   If **TransitRouterRouteEntryId** is not set, you must specify the set parameters based on the type of the next hop:
    *     *   To delete a blackhole route, you must set **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, and **TransitRouterRouteEntryNextHopType**.
    *     *   If the route that you want to delete is not a blackhole route, you must set **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, **TransitRouterRouteEntryNextHopType**, and **TransitRouterRouteEntryNextHopId**.
    * *   **DeleteTransitRouterRouteEntry** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the system background. You can call the **ListTransitRouterRouteEntries** operation to query the status of a route entry.
    *     *   If a route entry is in the **Deleting** state, the route entry is being deleted. You can query the route entry but cannot perform other operations.
    *     *   If a route entry cannot be found, it is deleted.
    * ## Limits
    * You can call this operation to delete only static routes. Automatically learned routes are not supported. You can call the [ListTransitRouterRouteEntries](~~260941~~) operation to query route types.
    *
    * @param request DeleteTransitRouterRouteEntryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTransitRouterRouteEntryResponse
   */
  async deleteTransitRouterRouteEntryWithOptions(request: DeleteTransitRouterRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTransitRouterRouteEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryDestinationCidrBlock)) {
      query["TransitRouterRouteEntryDestinationCidrBlock"] = request.transitRouterRouteEntryDestinationCidrBlock;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryId)) {
      query["TransitRouterRouteEntryId"] = request.transitRouterRouteEntryId;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryNextHopId)) {
      query["TransitRouterRouteEntryNextHopId"] = request.transitRouterRouteEntryNextHopId;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryNextHopType)) {
      query["TransitRouterRouteEntryNextHopType"] = request.transitRouterRouteEntryNextHopType;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTransitRouterRouteEntry",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTransitRouterRouteEntryResponse>(await this.callApi(params, req, runtime), new DeleteTransitRouterRouteEntryResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If **TransitRouterRouteEntryId** is set, you must not set **TransitRouterRouteTableId** or **TransitRouterRouteEntryDestinationCidrBlock**. Otherwise, parameter conflicts will occur.
    * *   If **TransitRouterRouteEntryId** is not set, you must specify the set parameters based on the type of the next hop:
    *     *   To delete a blackhole route, you must set **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, and **TransitRouterRouteEntryNextHopType**.
    *     *   If the route that you want to delete is not a blackhole route, you must set **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, **TransitRouterRouteEntryNextHopType**, and **TransitRouterRouteEntryNextHopId**.
    * *   **DeleteTransitRouterRouteEntry** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the system background. You can call the **ListTransitRouterRouteEntries** operation to query the status of a route entry.
    *     *   If a route entry is in the **Deleting** state, the route entry is being deleted. You can query the route entry but cannot perform other operations.
    *     *   If a route entry cannot be found, it is deleted.
    * ## Limits
    * You can call this operation to delete only static routes. Automatically learned routes are not supported. You can call the [ListTransitRouterRouteEntries](~~260941~~) operation to query route types.
    *
    * @param request DeleteTransitRouterRouteEntryRequest
    * @return DeleteTransitRouterRouteEntryResponse
   */
  async deleteTransitRouterRouteEntry(request: DeleteTransitRouterRouteEntryRequest): Promise<DeleteTransitRouterRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTransitRouterRouteEntryWithOptions(request, runtime);
  }

  /**
    * *   You cannot delete the default route table of an Enterprise Edition transit router.
    * *   **DeleteTransitRouterRouteTable** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTables** operation to query the status of a custom route table.
    *     *   If a custom route table is in the Deleting state, the custom route table is being deleted. In this case, you can query the custom route table but cannot perform other operations.
    *     *   If a custom route table cannot be found, the custom route table is deleted.
    *
    * @param request DeleteTransitRouterRouteTableRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTransitRouterRouteTableResponse
   */
  async deleteTransitRouterRouteTableWithOptions(request: DeleteTransitRouterRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTransitRouterRouteTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTransitRouterRouteTable",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTransitRouterRouteTableResponse>(await this.callApi(params, req, runtime), new DeleteTransitRouterRouteTableResponse({}));
  }

  /**
    * *   You cannot delete the default route table of an Enterprise Edition transit router.
    * *   **DeleteTransitRouterRouteTable** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTables** operation to query the status of a custom route table.
    *     *   If a custom route table is in the Deleting state, the custom route table is being deleted. In this case, you can query the custom route table but cannot perform other operations.
    *     *   If a custom route table cannot be found, the custom route table is deleted.
    *
    * @param request DeleteTransitRouterRouteTableRequest
    * @return DeleteTransitRouterRouteTableResponse
   */
  async deleteTransitRouterRouteTable(request: DeleteTransitRouterRouteTableRequest): Promise<DeleteTransitRouterRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTransitRouterRouteTableWithOptions(request, runtime);
  }

  /**
    * **DeleteTransitRouterVbrAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVbrAttachments** operation to query the status of a VBR connection.
    * *   If a VBR connection is in the **Detaching** state, the VBR connection is being deleted. You can query the VBR connection but cannot perform other operations.
    * *   If a VBR connection cannot be found, the VBR connection is deleted.
    * ## Prerequisites
    * Before you delete a VBR connection for an Enterprise Edition transit router, make sure that the following requirements are met:
    * *   No associated forwarding correlation is established between the VBR connection and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](~~260944~~).
    * *   No route learning correlation is established between the VBR connection and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](~~260945~~).
    * *   The route tables of the Enterprise Edition transit router do not contain a custom route entry whose next hop is the network instance connection. For more information about how to delete custom route entries, see [DeleteTransitRouterRouteEntry](~~261240~~).
    * *   The route tables of the Enterprise Edition transit router do not contain a route whose next hop is the VBR connection and that is generated from a prefix list. You can delete such routes by disassociating the route table from the prefix list. For more information, see [DeleteTransitRouterPrefixListAssociation](~~445486~~).
    *
    * @param request DeleteTransitRouterVbrAttachmentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTransitRouterVbrAttachmentResponse
   */
  async deleteTransitRouterVbrAttachmentWithOptions(request: DeleteTransitRouterVbrAttachmentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTransitRouterVbrAttachmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTransitRouterVbrAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTransitRouterVbrAttachmentResponse>(await this.callApi(params, req, runtime), new DeleteTransitRouterVbrAttachmentResponse({}));
  }

  /**
    * **DeleteTransitRouterVbrAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVbrAttachments** operation to query the status of a VBR connection.
    * *   If a VBR connection is in the **Detaching** state, the VBR connection is being deleted. You can query the VBR connection but cannot perform other operations.
    * *   If a VBR connection cannot be found, the VBR connection is deleted.
    * ## Prerequisites
    * Before you delete a VBR connection for an Enterprise Edition transit router, make sure that the following requirements are met:
    * *   No associated forwarding correlation is established between the VBR connection and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](~~260944~~).
    * *   No route learning correlation is established between the VBR connection and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](~~260945~~).
    * *   The route tables of the Enterprise Edition transit router do not contain a custom route entry whose next hop is the network instance connection. For more information about how to delete custom route entries, see [DeleteTransitRouterRouteEntry](~~261240~~).
    * *   The route tables of the Enterprise Edition transit router do not contain a route whose next hop is the VBR connection and that is generated from a prefix list. You can delete such routes by disassociating the route table from the prefix list. For more information, see [DeleteTransitRouterPrefixListAssociation](~~445486~~).
    *
    * @param request DeleteTransitRouterVbrAttachmentRequest
    * @return DeleteTransitRouterVbrAttachmentResponse
   */
  async deleteTransitRouterVbrAttachment(request: DeleteTransitRouterVbrAttachmentRequest): Promise<DeleteTransitRouterVbrAttachmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTransitRouterVbrAttachmentWithOptions(request, runtime);
  }

  /**
    * **DeleteTransitRouterVpcAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVpcAttachments** operation to query the status of a VPC connection.
    * *   If a VPC connection is in the **Detaching** state, the VPC connection is being deleted. You can query the VPC connection but cannot perform other operations.
    * *   If a VPC connection cannot be found, it is deleted.
    * ## Prerequisites
    * Before you delete a VPC connection, make sure that the following requirements are met:
    * *   No associated forwarding correlation is established between the VPC connection and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](~~260944~~).
    * *   No route learning correlation is established between the VPC connection and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](~~260945~~).
    * *   The route table of the VPC does not contain routes that point to the VPC connection. For more information about how to delete routes from a VPC route table, see [DeleteRouteEntry](~~36013~~).
    * *   The route tables of the Enterprise Edition transit router do not contain a custom route entry whose next hop is the network instance connection. For more information about how to delete custom routes from the route tables of an Enterprise Edition transit router, see [DeleteTransitRouterRouteEntry](~~261240~~).
    * *   The route tables of the Enterprise Edition transit router do not contain a route that is generated from a prefix list and the next hop is the VPC connection. You can delete such routes by disassociating the route table from the prefix list. For more information, see [DeleteTransitRouterPrefixListAssociation](~~445486~~).
    *
    * @param request DeleteTransitRouterVpcAttachmentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTransitRouterVpcAttachmentResponse
   */
  async deleteTransitRouterVpcAttachmentWithOptions(request: DeleteTransitRouterVpcAttachmentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTransitRouterVpcAttachmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTransitRouterVpcAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTransitRouterVpcAttachmentResponse>(await this.callApi(params, req, runtime), new DeleteTransitRouterVpcAttachmentResponse({}));
  }

  /**
    * **DeleteTransitRouterVpcAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVpcAttachments** operation to query the status of a VPC connection.
    * *   If a VPC connection is in the **Detaching** state, the VPC connection is being deleted. You can query the VPC connection but cannot perform other operations.
    * *   If a VPC connection cannot be found, it is deleted.
    * ## Prerequisites
    * Before you delete a VPC connection, make sure that the following requirements are met:
    * *   No associated forwarding correlation is established between the VPC connection and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](~~260944~~).
    * *   No route learning correlation is established between the VPC connection and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](~~260945~~).
    * *   The route table of the VPC does not contain routes that point to the VPC connection. For more information about how to delete routes from a VPC route table, see [DeleteRouteEntry](~~36013~~).
    * *   The route tables of the Enterprise Edition transit router do not contain a custom route entry whose next hop is the network instance connection. For more information about how to delete custom routes from the route tables of an Enterprise Edition transit router, see [DeleteTransitRouterRouteEntry](~~261240~~).
    * *   The route tables of the Enterprise Edition transit router do not contain a route that is generated from a prefix list and the next hop is the VPC connection. You can delete such routes by disassociating the route table from the prefix list. For more information, see [DeleteTransitRouterPrefixListAssociation](~~445486~~).
    *
    * @param request DeleteTransitRouterVpcAttachmentRequest
    * @return DeleteTransitRouterVpcAttachmentResponse
   */
  async deleteTransitRouterVpcAttachment(request: DeleteTransitRouterVpcAttachmentRequest): Promise<DeleteTransitRouterVpcAttachmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTransitRouterVpcAttachmentWithOptions(request, runtime);
  }

  /**
    * Before you delete a VPN attachment, make sure that the following requirements are met:
    * *   No associated forwarding correlation is established between the VPN attachment and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](~~260944~~).
    * *   No route learning correlation is established between the VPn attachment and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](~~260945~~).
    * *   No route in the route table of the Enterprise Edition transit router points to the VPN attachment. For more information, see [DeleteTransitRouterRouteEntry](~~261240~~).
    *
    * @param request DeleteTransitRouterVpnAttachmentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTransitRouterVpnAttachmentResponse
   */
  async deleteTransitRouterVpnAttachmentWithOptions(request: DeleteTransitRouterVpnAttachmentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTransitRouterVpnAttachmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTransitRouterVpnAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTransitRouterVpnAttachmentResponse>(await this.callApi(params, req, runtime), new DeleteTransitRouterVpnAttachmentResponse({}));
  }

  /**
    * Before you delete a VPN attachment, make sure that the following requirements are met:
    * *   No associated forwarding correlation is established between the VPN attachment and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](~~260944~~).
    * *   No route learning correlation is established between the VPn attachment and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](~~260945~~).
    * *   No route in the route table of the Enterprise Edition transit router points to the VPN attachment. For more information, see [DeleteTransitRouterRouteEntry](~~261240~~).
    *
    * @param request DeleteTransitRouterVpnAttachmentRequest
    * @return DeleteTransitRouterVpnAttachmentResponse
   */
  async deleteTransitRouterVpnAttachment(request: DeleteTransitRouterVpnAttachmentRequest): Promise<DeleteTransitRouterVpnAttachmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTransitRouterVpnAttachmentWithOptions(request, runtime);
  }

  /**
    * `RegisterTransitRouterMulticastGroupMembers` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of a multicast member.
    * *   If a multicast member is in the **Deregistering** state, the multicast member is being removed. In this case, you can query the multicast member but cannot perform other operations.
    * *   If a multicast member cannot be found, the multicast member is removed from the multicast group.``
    *
    * @param request DeregisterTransitRouterMulticastGroupMembersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeregisterTransitRouterMulticastGroupMembersResponse
   */
  async deregisterTransitRouterMulticastGroupMembersWithOptions(request: DeregisterTransitRouterMulticastGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<DeregisterTransitRouterMulticastGroupMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.groupIpAddress)) {
      query["GroupIpAddress"] = request.groupIpAddress;
    }

    if (!Util.isUnset(request.networkInterfaceIds)) {
      query["NetworkInterfaceIds"] = request.networkInterfaceIds;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.peerTransitRouterMulticastDomains)) {
      query["PeerTransitRouterMulticastDomains"] = request.peerTransitRouterMulticastDomains;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeregisterTransitRouterMulticastGroupMembers",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeregisterTransitRouterMulticastGroupMembersResponse>(await this.callApi(params, req, runtime), new DeregisterTransitRouterMulticastGroupMembersResponse({}));
  }

  /**
    * `RegisterTransitRouterMulticastGroupMembers` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of a multicast member.
    * *   If a multicast member is in the **Deregistering** state, the multicast member is being removed. In this case, you can query the multicast member but cannot perform other operations.
    * *   If a multicast member cannot be found, the multicast member is removed from the multicast group.``
    *
    * @param request DeregisterTransitRouterMulticastGroupMembersRequest
    * @return DeregisterTransitRouterMulticastGroupMembersResponse
   */
  async deregisterTransitRouterMulticastGroupMembers(request: DeregisterTransitRouterMulticastGroupMembersRequest): Promise<DeregisterTransitRouterMulticastGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deregisterTransitRouterMulticastGroupMembersWithOptions(request, runtime);
  }

  /**
    * `DeregisterTransitRouterMulticastGroupSources` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of a multicast source.
    * *   If a multicast source is in the **Deregistering** state, the multicast source is being deleted. You can query the multicast source but cannot perform other operations.
    * *   If a multicast source cannot be found, the multicast source is deleted.
    *
    * @param request DeregisterTransitRouterMulticastGroupSourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeregisterTransitRouterMulticastGroupSourcesResponse
   */
  async deregisterTransitRouterMulticastGroupSourcesWithOptions(request: DeregisterTransitRouterMulticastGroupSourcesRequest, runtime: $Util.RuntimeOptions): Promise<DeregisterTransitRouterMulticastGroupSourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.groupIpAddress)) {
      query["GroupIpAddress"] = request.groupIpAddress;
    }

    if (!Util.isUnset(request.networkInterfaceIds)) {
      query["NetworkInterfaceIds"] = request.networkInterfaceIds;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeregisterTransitRouterMulticastGroupSources",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeregisterTransitRouterMulticastGroupSourcesResponse>(await this.callApi(params, req, runtime), new DeregisterTransitRouterMulticastGroupSourcesResponse({}));
  }

  /**
    * `DeregisterTransitRouterMulticastGroupSources` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of a multicast source.
    * *   If a multicast source is in the **Deregistering** state, the multicast source is being deleted. You can query the multicast source but cannot perform other operations.
    * *   If a multicast source cannot be found, the multicast source is deleted.
    *
    * @param request DeregisterTransitRouterMulticastGroupSourcesRequest
    * @return DeregisterTransitRouterMulticastGroupSourcesResponse
   */
  async deregisterTransitRouterMulticastGroupSources(request: DeregisterTransitRouterMulticastGroupSourcesRequest): Promise<DeregisterTransitRouterMulticastGroupSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deregisterTransitRouterMulticastGroupSourcesWithOptions(request, runtime);
  }

  async describeCenAttachedChildInstanceAttributeWithOptions(request: DescribeCenAttachedChildInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenAttachedChildInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCenAttachedChildInstanceAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCenAttachedChildInstanceAttributeResponse>(await this.callApi(params, req, runtime), new DescribeCenAttachedChildInstanceAttributeResponse({}));
  }

  async describeCenAttachedChildInstanceAttribute(request: DescribeCenAttachedChildInstanceAttributeRequest): Promise<DescribeCenAttachedChildInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenAttachedChildInstanceAttributeWithOptions(request, runtime);
  }

  /**
    * The time when the network instance was attached to the CEN instance.
    * The time follows the ISO8601 standard in the YYYY-MM-DDThh:mmZ format. The time is displayed in UTC.
    *
    * @param request DescribeCenAttachedChildInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCenAttachedChildInstancesResponse
   */
  async describeCenAttachedChildInstancesWithOptions(request: DescribeCenAttachedChildInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenAttachedChildInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCenAttachedChildInstances",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCenAttachedChildInstancesResponse>(await this.callApi(params, req, runtime), new DescribeCenAttachedChildInstancesResponse({}));
  }

  /**
    * The time when the network instance was attached to the CEN instance.
    * The time follows the ISO8601 standard in the YYYY-MM-DDThh:mmZ format. The time is displayed in UTC.
    *
    * @param request DescribeCenAttachedChildInstancesRequest
    * @return DescribeCenAttachedChildInstancesResponse
   */
  async describeCenAttachedChildInstances(request: DescribeCenAttachedChildInstancesRequest): Promise<DescribeCenAttachedChildInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenAttachedChildInstancesWithOptions(request, runtime);
  }

  async describeCenBandwidthPackagesWithOptions(request: DescribeCenBandwidthPackagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenBandwidthPackagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.includeReservationData)) {
      query["IncludeReservationData"] = request.includeReservationData;
    }

    if (!Util.isUnset(request.isOrKey)) {
      query["IsOrKey"] = request.isOrKey;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCenBandwidthPackages",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCenBandwidthPackagesResponse>(await this.callApi(params, req, runtime), new DescribeCenBandwidthPackagesResponse({}));
  }

  async describeCenBandwidthPackages(request: DescribeCenBandwidthPackagesRequest): Promise<DescribeCenBandwidthPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenBandwidthPackagesWithOptions(request, runtime);
  }

  async describeCenChildInstanceRouteEntriesWithOptions(request: DescribeCenChildInstanceRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenChildInstanceRouteEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!Util.isUnset(request.childInstanceRouteTableId)) {
      query["ChildInstanceRouteTableId"] = request.childInstanceRouteTableId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCenChildInstanceRouteEntries",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCenChildInstanceRouteEntriesResponse>(await this.callApi(params, req, runtime), new DescribeCenChildInstanceRouteEntriesResponse({}));
  }

  async describeCenChildInstanceRouteEntries(request: DescribeCenChildInstanceRouteEntriesRequest): Promise<DescribeCenChildInstanceRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenChildInstanceRouteEntriesWithOptions(request, runtime);
  }

  async describeCenGeographicSpanRemainingBandwidthWithOptions(request: DescribeCenGeographicSpanRemainingBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenGeographicSpanRemainingBandwidthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.geographicRegionAId)) {
      query["GeographicRegionAId"] = request.geographicRegionAId;
    }

    if (!Util.isUnset(request.geographicRegionBId)) {
      query["GeographicRegionBId"] = request.geographicRegionBId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCenGeographicSpanRemainingBandwidth",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCenGeographicSpanRemainingBandwidthResponse>(await this.callApi(params, req, runtime), new DescribeCenGeographicSpanRemainingBandwidthResponse({}));
  }

  async describeCenGeographicSpanRemainingBandwidth(request: DescribeCenGeographicSpanRemainingBandwidthRequest): Promise<DescribeCenGeographicSpanRemainingBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenGeographicSpanRemainingBandwidthWithOptions(request, runtime);
  }

  async describeCenGeographicSpansWithOptions(request: DescribeCenGeographicSpansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenGeographicSpansResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.geographicSpanId)) {
      query["GeographicSpanId"] = request.geographicSpanId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCenGeographicSpans",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCenGeographicSpansResponse>(await this.callApi(params, req, runtime), new DescribeCenGeographicSpansResponse({}));
  }

  async describeCenGeographicSpans(request: DescribeCenGeographicSpansRequest): Promise<DescribeCenGeographicSpansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenGeographicSpansWithOptions(request, runtime);
  }

  async describeCenInterRegionBandwidthLimitsWithOptions(request: DescribeCenInterRegionBandwidthLimitsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenInterRegionBandwidthLimitsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trRegionId)) {
      query["TrRegionId"] = request.trRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCenInterRegionBandwidthLimits",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCenInterRegionBandwidthLimitsResponse>(await this.callApi(params, req, runtime), new DescribeCenInterRegionBandwidthLimitsResponse({}));
  }

  async describeCenInterRegionBandwidthLimits(request: DescribeCenInterRegionBandwidthLimitsRequest): Promise<DescribeCenInterRegionBandwidthLimitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenInterRegionBandwidthLimitsWithOptions(request, runtime);
  }

  async describeCenPrivateZoneRoutesWithOptions(request: DescribeCenPrivateZoneRoutesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenPrivateZoneRoutesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessRegionId)) {
      query["AccessRegionId"] = request.accessRegionId;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.hostRegionId)) {
      query["HostRegionId"] = request.hostRegionId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCenPrivateZoneRoutes",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCenPrivateZoneRoutesResponse>(await this.callApi(params, req, runtime), new DescribeCenPrivateZoneRoutesResponse({}));
  }

  async describeCenPrivateZoneRoutes(request: DescribeCenPrivateZoneRoutesRequest): Promise<DescribeCenPrivateZoneRoutesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenPrivateZoneRoutesWithOptions(request, runtime);
  }

  async describeCenRegionDomainRouteEntriesWithOptions(request: DescribeCenRegionDomainRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenRegionDomainRouteEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenRegionId)) {
      query["CenRegionId"] = request.cenRegionId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCenRegionDomainRouteEntries",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCenRegionDomainRouteEntriesResponse>(await this.callApi(params, req, runtime), new DescribeCenRegionDomainRouteEntriesResponse({}));
  }

  async describeCenRegionDomainRouteEntries(request: DescribeCenRegionDomainRouteEntriesRequest): Promise<DescribeCenRegionDomainRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenRegionDomainRouteEntriesWithOptions(request, runtime);
  }

  async describeCenRouteMapsWithOptions(request: DescribeCenRouteMapsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenRouteMapsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenRegionId)) {
      query["CenRegionId"] = request.cenRegionId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeMapId)) {
      query["RouteMapId"] = request.routeMapId;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    if (!Util.isUnset(request.transmitDirection)) {
      query["TransmitDirection"] = request.transmitDirection;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCenRouteMaps",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCenRouteMapsResponse>(await this.callApi(params, req, runtime), new DescribeCenRouteMapsResponse({}));
  }

  async describeCenRouteMaps(request: DescribeCenRouteMapsRequest): Promise<DescribeCenRouteMapsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenRouteMapsWithOptions(request, runtime);
  }

  async describeCenVbrHealthCheckWithOptions(request: DescribeCenVbrHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCenVbrHealthCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.vbrInstanceId)) {
      query["VbrInstanceId"] = request.vbrInstanceId;
    }

    if (!Util.isUnset(request.vbrInstanceOwnerId)) {
      query["VbrInstanceOwnerId"] = request.vbrInstanceOwnerId;
    }

    if (!Util.isUnset(request.vbrInstanceRegionId)) {
      query["VbrInstanceRegionId"] = request.vbrInstanceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCenVbrHealthCheck",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCenVbrHealthCheckResponse>(await this.callApi(params, req, runtime), new DescribeCenVbrHealthCheckResponse({}));
  }

  async describeCenVbrHealthCheck(request: DescribeCenVbrHealthCheckRequest): Promise<DescribeCenVbrHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCenVbrHealthCheckWithOptions(request, runtime);
  }

  async describeCensWithOptions(request: DescribeCensRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCensResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCens",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCensResponse>(await this.callApi(params, req, runtime), new DescribeCensResponse({}));
  }

  async describeCens(request: DescribeCensRequest): Promise<DescribeCensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCensWithOptions(request, runtime);
  }

  /**
    * The regions that support CEN vary based on the network instance type. To query the regions where you can attach a specified type of network instance to CEN, set the `ProductType` parameter. If you do not set the `ProductType` parameter, the system queries all regions in which you can attach network instances to CEN, regardless of the network instance type.
    *
    * @param request DescribeChildInstanceRegionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeChildInstanceRegionsResponse
   */
  async describeChildInstanceRegionsWithOptions(request: DescribeChildInstanceRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChildInstanceRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChildInstanceRegions",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChildInstanceRegionsResponse>(await this.callApi(params, req, runtime), new DescribeChildInstanceRegionsResponse({}));
  }

  /**
    * The regions that support CEN vary based on the network instance type. To query the regions where you can attach a specified type of network instance to CEN, set the `ProductType` parameter. If you do not set the `ProductType` parameter, the system queries all regions in which you can attach network instances to CEN, regardless of the network instance type.
    *
    * @param request DescribeChildInstanceRegionsRequest
    * @return DescribeChildInstanceRegionsResponse
   */
  async describeChildInstanceRegions(request: DescribeChildInstanceRegionsRequest): Promise<DescribeChildInstanceRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChildInstanceRegionsWithOptions(request, runtime);
  }

  async describeFlowlogsWithOptions(request: DescribeFlowlogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowlogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!Util.isUnset(request.flowLogName)) {
      query["FlowLogName"] = request.flowLogName;
    }

    if (!Util.isUnset(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowlogs",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowlogsResponse>(await this.callApi(params, req, runtime), new DescribeFlowlogsResponse({}));
  }

  async describeFlowlogs(request: DescribeFlowlogsRequest): Promise<DescribeFlowlogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowlogsWithOptions(request, runtime);
  }

  async describeGeographicRegionMembershipWithOptions(request: DescribeGeographicRegionMembershipRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGeographicRegionMembershipResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.geographicRegionId)) {
      query["GeographicRegionId"] = request.geographicRegionId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGeographicRegionMembership",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGeographicRegionMembershipResponse>(await this.callApi(params, req, runtime), new DescribeGeographicRegionMembershipResponse({}));
  }

  async describeGeographicRegionMembership(request: DescribeGeographicRegionMembershipRequest): Promise<DescribeGeographicRegionMembershipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGeographicRegionMembershipWithOptions(request, runtime);
  }

  async describeGrantRulesToCenWithOptions(request: DescribeGrantRulesToCenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGrantRulesToCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceOwnerId)) {
      query["ChildInstanceOwnerId"] = request.childInstanceOwnerId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGrantRulesToCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGrantRulesToCenResponse>(await this.callApi(params, req, runtime), new DescribeGrantRulesToCenResponse({}));
  }

  async describeGrantRulesToCen(request: DescribeGrantRulesToCenRequest): Promise<DescribeGrantRulesToCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGrantRulesToCenWithOptions(request, runtime);
  }

  async describeGrantRulesToResourceWithOptions(request: DescribeGrantRulesToResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGrantRulesToResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGrantRulesToResource",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGrantRulesToResourceResponse>(await this.callApi(params, req, runtime), new DescribeGrantRulesToResourceResponse({}));
  }

  async describeGrantRulesToResource(request: DescribeGrantRulesToResourceRequest): Promise<DescribeGrantRulesToResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGrantRulesToResourceWithOptions(request, runtime);
  }

  async describePublishedRouteEntriesWithOptions(request: DescribePublishedRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePublishedRouteEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!Util.isUnset(request.childInstanceRouteTableId)) {
      query["ChildInstanceRouteTableId"] = request.childInstanceRouteTableId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePublishedRouteEntries",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePublishedRouteEntriesResponse>(await this.callApi(params, req, runtime), new DescribePublishedRouteEntriesResponse({}));
  }

  async describePublishedRouteEntries(request: DescribePublishedRouteEntriesRequest): Promise<DescribePublishedRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePublishedRouteEntriesWithOptions(request, runtime);
  }

  async describeRouteConflictWithOptions(request: DescribeRouteConflictRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRouteConflictResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!Util.isUnset(request.childInstanceRouteTableId)) {
      query["ChildInstanceRouteTableId"] = request.childInstanceRouteTableId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRouteConflict",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRouteConflictResponse>(await this.callApi(params, req, runtime), new DescribeRouteConflictResponse({}));
  }

  async describeRouteConflict(request: DescribeRouteConflictRequest): Promise<DescribeRouteConflictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRouteConflictWithOptions(request, runtime);
  }

  async describeRouteServicesInCenWithOptions(request: DescribeRouteServicesInCenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRouteServicesInCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessRegionId)) {
      query["AccessRegionId"] = request.accessRegionId;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.host)) {
      query["Host"] = request.host;
    }

    if (!Util.isUnset(request.hostRegionId)) {
      query["HostRegionId"] = request.hostRegionId;
    }

    if (!Util.isUnset(request.hostVpcId)) {
      query["HostVpcId"] = request.hostVpcId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRouteServicesInCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRouteServicesInCenResponse>(await this.callApi(params, req, runtime), new DescribeRouteServicesInCenResponse({}));
  }

  async describeRouteServicesInCen(request: DescribeRouteServicesInCenRequest): Promise<DescribeRouteServicesInCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRouteServicesInCenWithOptions(request, runtime);
  }

  /**
    * You can set the **TransitRouteTableId** and **TransitRouteTableAggregationCidr** parameters to specify the aggregate routes that you want to query. If you set only the **TransitRouteTableId** parameter, all aggregate routes in the specified route table are queried.
    *
    * @param request DescribeTransitRouteTableAggregationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeTransitRouteTableAggregationResponse
   */
  async describeTransitRouteTableAggregationWithOptions(request: DescribeTransitRouteTableAggregationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTransitRouteTableAggregationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouteTableAggregationCidr)) {
      query["TransitRouteTableAggregationCidr"] = request.transitRouteTableAggregationCidr;
    }

    if (!Util.isUnset(request.transitRouteTableId)) {
      query["TransitRouteTableId"] = request.transitRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTransitRouteTableAggregation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTransitRouteTableAggregationResponse>(await this.callApi(params, req, runtime), new DescribeTransitRouteTableAggregationResponse({}));
  }

  /**
    * You can set the **TransitRouteTableId** and **TransitRouteTableAggregationCidr** parameters to specify the aggregate routes that you want to query. If you set only the **TransitRouteTableId** parameter, all aggregate routes in the specified route table are queried.
    *
    * @param request DescribeTransitRouteTableAggregationRequest
    * @return DescribeTransitRouteTableAggregationResponse
   */
  async describeTransitRouteTableAggregation(request: DescribeTransitRouteTableAggregationRequest): Promise<DescribeTransitRouteTableAggregationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTransitRouteTableAggregationWithOptions(request, runtime);
  }

  async describeTransitRouteTableAggregationDetailWithOptions(request: DescribeTransitRouteTableAggregationDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTransitRouteTableAggregationDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouteTableAggregationCidr)) {
      query["TransitRouteTableAggregationCidr"] = request.transitRouteTableAggregationCidr;
    }

    if (!Util.isUnset(request.transitRouteTableId)) {
      query["TransitRouteTableId"] = request.transitRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTransitRouteTableAggregationDetail",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTransitRouteTableAggregationDetailResponse>(await this.callApi(params, req, runtime), new DescribeTransitRouteTableAggregationDetailResponse({}));
  }

  async describeTransitRouteTableAggregationDetail(request: DescribeTransitRouteTableAggregationDetailRequest): Promise<DescribeTransitRouteTableAggregationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTransitRouteTableAggregationDetailWithOptions(request, runtime);
  }

  async detachCenChildInstanceWithOptions(request: DetachCenChildInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DetachCenChildInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!Util.isUnset(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceOwnerId)) {
      query["ChildInstanceOwnerId"] = request.childInstanceOwnerId;
    }

    if (!Util.isUnset(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachCenChildInstance",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachCenChildInstanceResponse>(await this.callApi(params, req, runtime), new DetachCenChildInstanceResponse({}));
  }

  async detachCenChildInstance(request: DetachCenChildInstanceRequest): Promise<DetachCenChildInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachCenChildInstanceWithOptions(request, runtime);
  }

  /**
    * **DisableCenVbrHealthCheck** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeCenVbrHealthCheck** operation to query the status of health check configurations. If the health check configurations cannot be found, the health check configurations are deleted.
    *
    * @param request DisableCenVbrHealthCheckRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableCenVbrHealthCheckResponse
   */
  async disableCenVbrHealthCheckWithOptions(request: DisableCenVbrHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<DisableCenVbrHealthCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.vbrInstanceId)) {
      query["VbrInstanceId"] = request.vbrInstanceId;
    }

    if (!Util.isUnset(request.vbrInstanceOwnerId)) {
      query["VbrInstanceOwnerId"] = request.vbrInstanceOwnerId;
    }

    if (!Util.isUnset(request.vbrInstanceRegionId)) {
      query["VbrInstanceRegionId"] = request.vbrInstanceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableCenVbrHealthCheck",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableCenVbrHealthCheckResponse>(await this.callApi(params, req, runtime), new DisableCenVbrHealthCheckResponse({}));
  }

  /**
    * **DisableCenVbrHealthCheck** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeCenVbrHealthCheck** operation to query the status of health check configurations. If the health check configurations cannot be found, the health check configurations are deleted.
    *
    * @param request DisableCenVbrHealthCheckRequest
    * @return DisableCenVbrHealthCheckResponse
   */
  async disableCenVbrHealthCheck(request: DisableCenVbrHealthCheckRequest): Promise<DisableCenVbrHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableCenVbrHealthCheckWithOptions(request, runtime);
  }

  /**
    * **DisableTransitRouterRouteTablePropagation** is an synchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTablePropagations** operation to query the status of a route learning correlation.
    * *   If a route learning correlation is in the **Disabling** state, the route learning correlation is being deleted. You can query the route learning correlation but cannot perform other operations.
    * *   If a route learning correlation cannot be found, the route learning correlation is deleted.
    *
    * @param request DisableTransitRouterRouteTablePropagationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableTransitRouterRouteTablePropagationResponse
   */
  async disableTransitRouterRouteTablePropagationWithOptions(request: DisableTransitRouterRouteTablePropagationRequest, runtime: $Util.RuntimeOptions): Promise<DisableTransitRouterRouteTablePropagationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableTransitRouterRouteTablePropagation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableTransitRouterRouteTablePropagationResponse>(await this.callApi(params, req, runtime), new DisableTransitRouterRouteTablePropagationResponse({}));
  }

  /**
    * **DisableTransitRouterRouteTablePropagation** is an synchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTablePropagations** operation to query the status of a route learning correlation.
    * *   If a route learning correlation is in the **Disabling** state, the route learning correlation is being deleted. You can query the route learning correlation but cannot perform other operations.
    * *   If a route learning correlation cannot be found, the route learning correlation is deleted.
    *
    * @param request DisableTransitRouterRouteTablePropagationRequest
    * @return DisableTransitRouterRouteTablePropagationResponse
   */
  async disableTransitRouterRouteTablePropagation(request: DisableTransitRouterRouteTablePropagationRequest): Promise<DisableTransitRouterRouteTablePropagationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableTransitRouterRouteTablePropagationWithOptions(request, runtime);
  }

  async disassociateTransitRouterMulticastDomainWithOptions(request: DisassociateTransitRouterMulticastDomainRequest, runtime: $Util.RuntimeOptions): Promise<DisassociateTransitRouterMulticastDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!Util.isUnset(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisassociateTransitRouterMulticastDomain",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisassociateTransitRouterMulticastDomainResponse>(await this.callApi(params, req, runtime), new DisassociateTransitRouterMulticastDomainResponse({}));
  }

  async disassociateTransitRouterMulticastDomain(request: DisassociateTransitRouterMulticastDomainRequest): Promise<DisassociateTransitRouterMulticastDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
    * **DissociateTransitRouterAttachmentFromRouteTable** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTableAssociations** operation to query an associated forwarding correlation between a network instance connection and a route table.
    * *   If an associated forwarding correlation is in the **Dissociating** state, the associated forwarding correlation is being deleted. You can query the associated forwarding correlation but cannot perform other operations.
    * *   If an associated forwarding correlation cannot be found, the associated forwarding correlation is deleted.
    *
    * @param request DissociateTransitRouterAttachmentFromRouteTableRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DissociateTransitRouterAttachmentFromRouteTableResponse
   */
  async dissociateTransitRouterAttachmentFromRouteTableWithOptions(request: DissociateTransitRouterAttachmentFromRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<DissociateTransitRouterAttachmentFromRouteTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DissociateTransitRouterAttachmentFromRouteTable",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DissociateTransitRouterAttachmentFromRouteTableResponse>(await this.callApi(params, req, runtime), new DissociateTransitRouterAttachmentFromRouteTableResponse({}));
  }

  /**
    * **DissociateTransitRouterAttachmentFromRouteTable** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTableAssociations** operation to query an associated forwarding correlation between a network instance connection and a route table.
    * *   If an associated forwarding correlation is in the **Dissociating** state, the associated forwarding correlation is being deleted. You can query the associated forwarding correlation but cannot perform other operations.
    * *   If an associated forwarding correlation cannot be found, the associated forwarding correlation is deleted.
    *
    * @param request DissociateTransitRouterAttachmentFromRouteTableRequest
    * @return DissociateTransitRouterAttachmentFromRouteTableResponse
   */
  async dissociateTransitRouterAttachmentFromRouteTable(request: DissociateTransitRouterAttachmentFromRouteTableRequest): Promise<DissociateTransitRouterAttachmentFromRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateTransitRouterAttachmentFromRouteTableWithOptions(request, runtime);
  }

  /**
    * You can enable the health check feature for a VBR to monitor the Express Connect circuit between your data center and Alibaba Cloud. This helps you detect connection issues in a timely manner.
    * Before you use the health check feature, take note of the following information:
    * *   If your VBR uses static routing, you must add a static route for the data center that is connected to the VBR after you configure the health check feature. Set the destination CIDR block to the source IP address of health checks, set the mask length to 32, and set the next hop to the IP address of the VBR on the Alibaba Cloud side.
    * *   If your VBR uses dynamic Border Gateway Protocol (BGP) routing, you do not need to add routes for the data center.
    * *   **EnableCenVbrHealthCheck** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeCenVbrHealthCheck** operation to query the status of health check configurations. If health check configurations are returned, health check is configured or modified.
    *
    * @param request EnableCenVbrHealthCheckRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnableCenVbrHealthCheckResponse
   */
  async enableCenVbrHealthCheckWithOptions(request: EnableCenVbrHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<EnableCenVbrHealthCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckOnly)) {
      query["HealthCheckOnly"] = request.healthCheckOnly;
    }

    if (!Util.isUnset(request.healthCheckSourceIp)) {
      query["HealthCheckSourceIp"] = request.healthCheckSourceIp;
    }

    if (!Util.isUnset(request.healthCheckTargetIp)) {
      query["HealthCheckTargetIp"] = request.healthCheckTargetIp;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.vbrInstanceId)) {
      query["VbrInstanceId"] = request.vbrInstanceId;
    }

    if (!Util.isUnset(request.vbrInstanceOwnerId)) {
      query["VbrInstanceOwnerId"] = request.vbrInstanceOwnerId;
    }

    if (!Util.isUnset(request.vbrInstanceRegionId)) {
      query["VbrInstanceRegionId"] = request.vbrInstanceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableCenVbrHealthCheck",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableCenVbrHealthCheckResponse>(await this.callApi(params, req, runtime), new EnableCenVbrHealthCheckResponse({}));
  }

  /**
    * You can enable the health check feature for a VBR to monitor the Express Connect circuit between your data center and Alibaba Cloud. This helps you detect connection issues in a timely manner.
    * Before you use the health check feature, take note of the following information:
    * *   If your VBR uses static routing, you must add a static route for the data center that is connected to the VBR after you configure the health check feature. Set the destination CIDR block to the source IP address of health checks, set the mask length to 32, and set the next hop to the IP address of the VBR on the Alibaba Cloud side.
    * *   If your VBR uses dynamic Border Gateway Protocol (BGP) routing, you do not need to add routes for the data center.
    * *   **EnableCenVbrHealthCheck** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **DescribeCenVbrHealthCheck** operation to query the status of health check configurations. If health check configurations are returned, health check is configured or modified.
    *
    * @param request EnableCenVbrHealthCheckRequest
    * @return EnableCenVbrHealthCheckResponse
   */
  async enableCenVbrHealthCheck(request: EnableCenVbrHealthCheckRequest): Promise<EnableCenVbrHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableCenVbrHealthCheckWithOptions(request, runtime);
  }

  /**
    * After you establish a network instance connection on a transit router, you can create a route learning correlation for the network instance connection. Then, the routes of the connected network instance are automatically advertised to the route table of the transit router. Before you begin, we recommend that you take note of the following rules:
    * *   You can create route learning correlations only on Enterprise Edition transit routers. For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](~~181681~~)
    * *   **EnableTransitRouterRouteTablePropagation** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTablePropagations** operation to query the route learning status between a network instance connection and a route table.
    *     *   **Enabling** indicates that a route learning correlation is being created between the network instance connection and route table. You can query the route learning correlation but cannot perform other operations.
    *     *   **Active** indicates that the route learning correlation is created between the network instance connection and route table.
    *
    * @param request EnableTransitRouterRouteTablePropagationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnableTransitRouterRouteTablePropagationResponse
   */
  async enableTransitRouterRouteTablePropagationWithOptions(request: EnableTransitRouterRouteTablePropagationRequest, runtime: $Util.RuntimeOptions): Promise<EnableTransitRouterRouteTablePropagationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableTransitRouterRouteTablePropagation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableTransitRouterRouteTablePropagationResponse>(await this.callApi(params, req, runtime), new EnableTransitRouterRouteTablePropagationResponse({}));
  }

  /**
    * After you establish a network instance connection on a transit router, you can create a route learning correlation for the network instance connection. Then, the routes of the connected network instance are automatically advertised to the route table of the transit router. Before you begin, we recommend that you take note of the following rules:
    * *   You can create route learning correlations only on Enterprise Edition transit routers. For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](~~181681~~)
    * *   **EnableTransitRouterRouteTablePropagation** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTablePropagations** operation to query the route learning status between a network instance connection and a route table.
    *     *   **Enabling** indicates that a route learning correlation is being created between the network instance connection and route table. You can query the route learning correlation but cannot perform other operations.
    *     *   **Active** indicates that the route learning correlation is created between the network instance connection and route table.
    *
    * @param request EnableTransitRouterRouteTablePropagationRequest
    * @return EnableTransitRouterRouteTablePropagationResponse
   */
  async enableTransitRouterRouteTablePropagation(request: EnableTransitRouterRouteTablePropagationRequest): Promise<EnableTransitRouterRouteTablePropagationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableTransitRouterRouteTablePropagationWithOptions(request, runtime);
  }

  /**
    * *   `GrantInstanceToTransitRouter` grants transit routers the permissions to connect only to virtual private clouds (VPCs), virtual border routers (VBRs), and IPsec-VPN connections that belong to another Alibaba Cloud account.
    *     If you want to grant transit routers permissions to connect to Cloud Connect Network (CCN) instances, call the [GrantInstanceToCbn](~~126141~~) operation.
    * *   Before you call `GrantInstanceToTransitRouter`, take note of the billing rules, permission limits, and prerequisites on permission management of transit routers. For more information, see [Acquire permissions to connect to a network instance that belongs to another account](~~181553~~).
    *
    * @param request GrantInstanceToTransitRouterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GrantInstanceToTransitRouterResponse
   */
  async grantInstanceToTransitRouterWithOptions(request: GrantInstanceToTransitRouterRequest, runtime: $Util.RuntimeOptions): Promise<GrantInstanceToTransitRouterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GrantInstanceToTransitRouter",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantInstanceToTransitRouterResponse>(await this.callApi(params, req, runtime), new GrantInstanceToTransitRouterResponse({}));
  }

  /**
    * *   `GrantInstanceToTransitRouter` grants transit routers the permissions to connect only to virtual private clouds (VPCs), virtual border routers (VBRs), and IPsec-VPN connections that belong to another Alibaba Cloud account.
    *     If you want to grant transit routers permissions to connect to Cloud Connect Network (CCN) instances, call the [GrantInstanceToCbn](~~126141~~) operation.
    * *   Before you call `GrantInstanceToTransitRouter`, take note of the billing rules, permission limits, and prerequisites on permission management of transit routers. For more information, see [Acquire permissions to connect to a network instance that belongs to another account](~~181553~~).
    *
    * @param request GrantInstanceToTransitRouterRequest
    * @return GrantInstanceToTransitRouterResponse
   */
  async grantInstanceToTransitRouter(request: GrantInstanceToTransitRouterRequest): Promise<GrantInstanceToTransitRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantInstanceToTransitRouterWithOptions(request, runtime);
  }

  async listCenChildInstanceRouteEntriesToAttachmentWithOptions(request: ListCenChildInstanceRouteEntriesToAttachmentRequest, runtime: $Util.RuntimeOptions): Promise<ListCenChildInstanceRouteEntriesToAttachmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.childInstanceRouteTableId)) {
      query["ChildInstanceRouteTableId"] = request.childInstanceRouteTableId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeFilter)) {
      query["RouteFilter"] = request.routeFilter;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCenChildInstanceRouteEntriesToAttachment",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCenChildInstanceRouteEntriesToAttachmentResponse>(await this.callApi(params, req, runtime), new ListCenChildInstanceRouteEntriesToAttachmentResponse({}));
  }

  async listCenChildInstanceRouteEntriesToAttachment(request: ListCenChildInstanceRouteEntriesToAttachmentRequest): Promise<ListCenChildInstanceRouteEntriesToAttachmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCenChildInstanceRouteEntriesToAttachmentWithOptions(request, runtime);
  }

  /**
    * When you call the **ListCenInterRegionTrafficQosPolicies** operation, take note of the following information:
    * *   If you do not set the **TrafficQosPolicyId** parameter, the system returns information about QoS policies based on the values of the **TransitRouterId**, **TransitRouterAttachmentId**, **TrafficQosPolicyName**, and **TrafficQosPolicyDescription** parameters, but does not return information about the queues in the QoS policies. The **TrafficQosQueues** parameter is not included in the response.
    * *   If you specify a QoS policy ID in the **TrafficMarkingPolicyId** parameter, the system returns the information about the QoS policy and the queues. The **TrafficQosQueues** parameter is included in the response.
    *     If the **TrafficQosQueues** parameter contains an empty array, it indicates that the QoS policy contains only the default queue.
    *
    * @param request ListCenInterRegionTrafficQosPoliciesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListCenInterRegionTrafficQosPoliciesResponse
   */
  async listCenInterRegionTrafficQosPoliciesWithOptions(request: ListCenInterRegionTrafficQosPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListCenInterRegionTrafficQosPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficQosPolicyDescription)) {
      query["TrafficQosPolicyDescription"] = request.trafficQosPolicyDescription;
    }

    if (!Util.isUnset(request.trafficQosPolicyId)) {
      query["TrafficQosPolicyId"] = request.trafficQosPolicyId;
    }

    if (!Util.isUnset(request.trafficQosPolicyName)) {
      query["TrafficQosPolicyName"] = request.trafficQosPolicyName;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCenInterRegionTrafficQosPolicies",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCenInterRegionTrafficQosPoliciesResponse>(await this.callApi(params, req, runtime), new ListCenInterRegionTrafficQosPoliciesResponse({}));
  }

  /**
    * When you call the **ListCenInterRegionTrafficQosPolicies** operation, take note of the following information:
    * *   If you do not set the **TrafficQosPolicyId** parameter, the system returns information about QoS policies based on the values of the **TransitRouterId**, **TransitRouterAttachmentId**, **TrafficQosPolicyName**, and **TrafficQosPolicyDescription** parameters, but does not return information about the queues in the QoS policies. The **TrafficQosQueues** parameter is not included in the response.
    * *   If you specify a QoS policy ID in the **TrafficMarkingPolicyId** parameter, the system returns the information about the QoS policy and the queues. The **TrafficQosQueues** parameter is included in the response.
    *     If the **TrafficQosQueues** parameter contains an empty array, it indicates that the QoS policy contains only the default queue.
    *
    * @param request ListCenInterRegionTrafficQosPoliciesRequest
    * @return ListCenInterRegionTrafficQosPoliciesResponse
   */
  async listCenInterRegionTrafficQosPolicies(request: ListCenInterRegionTrafficQosPoliciesRequest): Promise<ListCenInterRegionTrafficQosPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCenInterRegionTrafficQosPoliciesWithOptions(request, runtime);
  }

  async listCenInterRegionTrafficQosQueuesWithOptions(request: ListCenInterRegionTrafficQosQueuesRequest, runtime: $Util.RuntimeOptions): Promise<ListCenInterRegionTrafficQosQueuesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficQosPolicyId)) {
      query["TrafficQosPolicyId"] = request.trafficQosPolicyId;
    }

    if (!Util.isUnset(request.trafficQosQueueDescription)) {
      query["TrafficQosQueueDescription"] = request.trafficQosQueueDescription;
    }

    if (!Util.isUnset(request.trafficQosQueueId)) {
      query["TrafficQosQueueId"] = request.trafficQosQueueId;
    }

    if (!Util.isUnset(request.trafficQosQueueName)) {
      query["TrafficQosQueueName"] = request.trafficQosQueueName;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCenInterRegionTrafficQosQueues",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCenInterRegionTrafficQosQueuesResponse>(await this.callApi(params, req, runtime), new ListCenInterRegionTrafficQosQueuesResponse({}));
  }

  async listCenInterRegionTrafficQosQueues(request: ListCenInterRegionTrafficQosQueuesRequest): Promise<ListCenInterRegionTrafficQosQueuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCenInterRegionTrafficQosQueuesWithOptions(request, runtime);
  }

  /**
    * Before you call `ListGrantVSwitchEnis`, make sure that the VPC is attached to a Cloud Enterprise Network (CEN) instance. For more information, see [CreateTransitRouterVpcAttachment](~~468237~~).
    *
    * @param request ListGrantVSwitchEnisRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListGrantVSwitchEnisResponse
   */
  async listGrantVSwitchEnisWithOptions(request: ListGrantVSwitchEnisRequest, runtime: $Util.RuntimeOptions): Promise<ListGrantVSwitchEnisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!Util.isUnset(request.networkInterfaceName)) {
      query["NetworkInterfaceName"] = request.networkInterfaceName;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.primaryIpAddress)) {
      query["PrimaryIpAddress"] = request.primaryIpAddress;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGrantVSwitchEnis",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGrantVSwitchEnisResponse>(await this.callApi(params, req, runtime), new ListGrantVSwitchEnisResponse({}));
  }

  /**
    * Before you call `ListGrantVSwitchEnis`, make sure that the VPC is attached to a Cloud Enterprise Network (CEN) instance. For more information, see [CreateTransitRouterVpcAttachment](~~468237~~).
    *
    * @param request ListGrantVSwitchEnisRequest
    * @return ListGrantVSwitchEnisResponse
   */
  async listGrantVSwitchEnis(request: ListGrantVSwitchEnisRequest): Promise<ListGrantVSwitchEnisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGrantVSwitchEnisWithOptions(request, runtime);
  }

  /**
    * Before you call the `ListGrantVSwitchesToCen` operation, make sure that the following requirements are met:
    * *   The permissions on the VPC are granted to the CEN instance. For more information, see [GrantInstanceToCen](~~126224~~).
    * *   The VPC is attached to the CEN instance.
    *     *   For more information about how to connect an Enterprise Edition transit router to a VPC, see [CreateTransitRouterVpcAttachment](~~261358~~).
    *     *   For more information about how to connect a Basic Edition transit router to a VPC, see [AttachCenChildInstance](~~65902~~).
    *
    * @param request ListGrantVSwitchesToCenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListGrantVSwitchesToCenResponse
   */
  async listGrantVSwitchesToCenWithOptions(request: ListGrantVSwitchesToCenRequest, runtime: $Util.RuntimeOptions): Promise<ListGrantVSwitchesToCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGrantVSwitchesToCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGrantVSwitchesToCenResponse>(await this.callApi(params, req, runtime), new ListGrantVSwitchesToCenResponse({}));
  }

  /**
    * Before you call the `ListGrantVSwitchesToCen` operation, make sure that the following requirements are met:
    * *   The permissions on the VPC are granted to the CEN instance. For more information, see [GrantInstanceToCen](~~126224~~).
    * *   The VPC is attached to the CEN instance.
    *     *   For more information about how to connect an Enterprise Edition transit router to a VPC, see [CreateTransitRouterVpcAttachment](~~261358~~).
    *     *   For more information about how to connect a Basic Edition transit router to a VPC, see [AttachCenChildInstance](~~65902~~).
    *
    * @param request ListGrantVSwitchesToCenRequest
    * @return ListGrantVSwitchesToCenResponse
   */
  async listGrantVSwitchesToCen(request: ListGrantVSwitchesToCenRequest): Promise<ListGrantVSwitchesToCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGrantVSwitchesToCenWithOptions(request, runtime);
  }

  /**
    * To call this operation, you must set at least one of **ResourceId.N** and **Tag.N.Key**.
    * *   If you set only **ResourceId.N**, the tags that are added to the specified CEN instances are returned.
    * *   If you set only **Tag.N.Key**, the CEN instances that have the specified tags are returned.
    * *   If you set both **ResourceId.N** and **Tag.N.Key**, the specified tags that are added to the specified CEN instances are returned.
    *     *   Make sure that the CEN instance specified by **ResourceId.N** has the tag specified by **Tag.N.Key**. Otherwise, the response returns null.
    *     *   If multiple tag keys are specified, the logical operator among these tag keys is **AND**.
    *
    * @param request ListTagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
    * To call this operation, you must set at least one of **ResourceId.N** and **Tag.N.Key**.
    * *   If you set only **ResourceId.N**, the tags that are added to the specified CEN instances are returned.
    * *   If you set only **Tag.N.Key**, the CEN instances that have the specified tags are returned.
    * *   If you set both **ResourceId.N** and **Tag.N.Key**, the specified tags that are added to the specified CEN instances are returned.
    *     *   Make sure that the CEN instance specified by **ResourceId.N** has the tag specified by **Tag.N.Key**. Otherwise, the response returns null.
    *     *   If multiple tag keys are specified, the logical operator among these tag keys is **AND**.
    *
    * @param request ListTagResourcesRequest
    * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTrafficMarkingPoliciesWithOptions(request: ListTrafficMarkingPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListTrafficMarkingPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficMarkingPolicyDescription)) {
      query["TrafficMarkingPolicyDescription"] = request.trafficMarkingPolicyDescription;
    }

    if (!Util.isUnset(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    if (!Util.isUnset(request.trafficMarkingPolicyName)) {
      query["TrafficMarkingPolicyName"] = request.trafficMarkingPolicyName;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTrafficMarkingPolicies",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTrafficMarkingPoliciesResponse>(await this.callApi(params, req, runtime), new ListTrafficMarkingPoliciesResponse({}));
  }

  async listTrafficMarkingPolicies(request: ListTrafficMarkingPoliciesRequest): Promise<ListTrafficMarkingPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTrafficMarkingPoliciesWithOptions(request, runtime);
  }

  /**
    * *   You can call the **ListTransitRouterAvailableResource** operation to query the zones that support Enterprise Edition transit routers in a specified region.
    *     *   If you do not set **SupportMulticast** to **true**, general-purpose zones that support Enterprise Edition transit routers are queried.
    *     *   If you set **SupportMulticast** to **true**, zones in which Enterprise Edition transit routers support multicast are queried.
    * *   On May 31, 2022, VPC-connected Enterprise Edition transit routers were optimized. Optimized Enterprise Edition transit routers do not require you to specify the primary and secondary zones when you connect VPCs to the Enterprise Edition transit routers. You can specify one or more zones.
    *     *   If your Enterprise Edition transit router has not been optimized, you must specify the primary and secondary zones when you connect a VPC to your Enterprise Edition transit router. After you call **ListTransitRouterAvailableResource**, you can call **MasterZones** and **SlaveZones** to query the primary and secondary zones.
    *     *   If your Enterprise Edition transit router has been optimized, you can specify a zone as needed when you connect a VPC to your Enterprise Edition transit router. After you call **ListTransitRouterAvailableResource**, you can call **AvailableZones** to query the zones.
    * For more information about the optimization, see [Announcement: Optimization on VPC-connected Enterprise Edition transit routers](~~434191~~).
    *
    * @param request ListTransitRouterAvailableResourceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTransitRouterAvailableResourceResponse
   */
  async listTransitRouterAvailableResourceWithOptions(request: ListTransitRouterAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterAvailableResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.supportMulticast)) {
      query["SupportMulticast"] = request.supportMulticast;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterAvailableResource",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterAvailableResourceResponse>(await this.callApi(params, req, runtime), new ListTransitRouterAvailableResourceResponse({}));
  }

  /**
    * *   You can call the **ListTransitRouterAvailableResource** operation to query the zones that support Enterprise Edition transit routers in a specified region.
    *     *   If you do not set **SupportMulticast** to **true**, general-purpose zones that support Enterprise Edition transit routers are queried.
    *     *   If you set **SupportMulticast** to **true**, zones in which Enterprise Edition transit routers support multicast are queried.
    * *   On May 31, 2022, VPC-connected Enterprise Edition transit routers were optimized. Optimized Enterprise Edition transit routers do not require you to specify the primary and secondary zones when you connect VPCs to the Enterprise Edition transit routers. You can specify one or more zones.
    *     *   If your Enterprise Edition transit router has not been optimized, you must specify the primary and secondary zones when you connect a VPC to your Enterprise Edition transit router. After you call **ListTransitRouterAvailableResource**, you can call **MasterZones** and **SlaveZones** to query the primary and secondary zones.
    *     *   If your Enterprise Edition transit router has been optimized, you can specify a zone as needed when you connect a VPC to your Enterprise Edition transit router. After you call **ListTransitRouterAvailableResource**, you can call **AvailableZones** to query the zones.
    * For more information about the optimization, see [Announcement: Optimization on VPC-connected Enterprise Edition transit routers](~~434191~~).
    *
    * @param request ListTransitRouterAvailableResourceRequest
    * @return ListTransitRouterAvailableResourceResponse
   */
  async listTransitRouterAvailableResource(request: ListTransitRouterAvailableResourceRequest): Promise<ListTransitRouterAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterAvailableResourceWithOptions(request, runtime);
  }

  async listTransitRouterCidrWithOptions(request: ListTransitRouterCidrRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterCidrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterCidrId)) {
      query["TransitRouterCidrId"] = request.transitRouterCidrId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterCidr",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterCidrResponse>(await this.callApi(params, req, runtime), new ListTransitRouterCidrResponse({}));
  }

  async listTransitRouterCidr(request: ListTransitRouterCidrRequest): Promise<ListTransitRouterCidrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterCidrWithOptions(request, runtime);
  }

  async listTransitRouterCidrAllocationWithOptions(request: ListTransitRouterCidrAllocationRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterCidrAllocationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.attachmentId)) {
      query["AttachmentId"] = request.attachmentId;
    }

    if (!Util.isUnset(request.attachmentName)) {
      query["AttachmentName"] = request.attachmentName;
    }

    if (!Util.isUnset(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dedicatedOwnerId)) {
      query["DedicatedOwnerId"] = request.dedicatedOwnerId;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterCidrId)) {
      query["TransitRouterCidrId"] = request.transitRouterCidrId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterCidrAllocation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterCidrAllocationResponse>(await this.callApi(params, req, runtime), new ListTransitRouterCidrAllocationResponse({}));
  }

  async listTransitRouterCidrAllocation(request: ListTransitRouterCidrAllocationRequest): Promise<ListTransitRouterCidrAllocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterCidrAllocationWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * Multicast domains can be associated only with vSwitches that are in VPCs. You can call the **ListTransitRouterMulticastDomainAssociations** operation to query whether vSwitches in VPCs are associated with a specified multicast domain.
    *
    * @param request ListTransitRouterMulticastDomainAssociationsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTransitRouterMulticastDomainAssociationsResponse
   */
  async listTransitRouterMulticastDomainAssociationsWithOptions(request: ListTransitRouterMulticastDomainAssociationsRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterMulticastDomainAssociationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!Util.isUnset(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterMulticastDomainAssociations",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterMulticastDomainAssociationsResponse>(await this.callApi(params, req, runtime), new ListTransitRouterMulticastDomainAssociationsResponse({}));
  }

  /**
    * ## Usage notes
    * Multicast domains can be associated only with vSwitches that are in VPCs. You can call the **ListTransitRouterMulticastDomainAssociations** operation to query whether vSwitches in VPCs are associated with a specified multicast domain.
    *
    * @param request ListTransitRouterMulticastDomainAssociationsRequest
    * @return ListTransitRouterMulticastDomainAssociationsResponse
   */
  async listTransitRouterMulticastDomainAssociations(request: ListTransitRouterMulticastDomainAssociationsRequest): Promise<ListTransitRouterMulticastDomainAssociationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterMulticastDomainAssociationsWithOptions(request, runtime);
  }

  async listTransitRouterMulticastDomainVSwitchesWithOptions(request: ListTransitRouterMulticastDomainVSwitchesRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterMulticastDomainVSwitchesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterMulticastDomainVSwitches",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterMulticastDomainVSwitchesResponse>(await this.callApi(params, req, runtime), new ListTransitRouterMulticastDomainVSwitchesResponse({}));
  }

  async listTransitRouterMulticastDomainVSwitches(request: ListTransitRouterMulticastDomainVSwitchesRequest): Promise<ListTransitRouterMulticastDomainVSwitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterMulticastDomainVSwitchesWithOptions(request, runtime);
  }

  async listTransitRouterMulticastDomainsWithOptions(request: ListTransitRouterMulticastDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterMulticastDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterMulticastDomains",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterMulticastDomainsResponse>(await this.callApi(params, req, runtime), new ListTransitRouterMulticastDomainsResponse({}));
  }

  async listTransitRouterMulticastDomains(request: ListTransitRouterMulticastDomainsRequest): Promise<ListTransitRouterMulticastDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterMulticastDomainsWithOptions(request, runtime);
  }

  /**
    * You can call the `ListTransitRouterMulticastGroups` operation to query the multicast sources and members in a multicast domain. Multicast sources and members are also known as multicast resources.
    * *   If you set **GroupIpAddress**, the system queries multicast resources in the multicast domain by multicast group.
    * *   If you set **VSwitchIds**, the system queries multicast resources in the multicast domain by vSwitch.
    * *   If you set **PeerTransitRouterMulticastDomains**, the system queries multicast resources that are also deployed in a different region.
    * *   If you set **ResourceType**, the system queries the multicast resources of the specified type in the multicast domain.
    * *   If you set **ResourceId**, the system queries multicast resources by resource.
    * *   If you set only **TransitRouterMulticastDomainId**, the system queries all the multicast resources in the multicast domain.
    *
    * @param request ListTransitRouterMulticastGroupsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTransitRouterMulticastGroupsResponse
   */
  async listTransitRouterMulticastGroupsWithOptions(request: ListTransitRouterMulticastGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterMulticastGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.groupIpAddress)) {
      query["GroupIpAddress"] = request.groupIpAddress;
    }

    if (!Util.isUnset(request.isGroupMember)) {
      query["IsGroupMember"] = request.isGroupMember;
    }

    if (!Util.isUnset(request.isGroupSource)) {
      query["IsGroupSource"] = request.isGroupSource;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.networkInterfaceIds)) {
      query["NetworkInterfaceIds"] = request.networkInterfaceIds;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.peerTransitRouterMulticastDomains)) {
      query["PeerTransitRouterMulticastDomains"] = request.peerTransitRouterMulticastDomains;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!Util.isUnset(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterMulticastGroups",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterMulticastGroupsResponse>(await this.callApi(params, req, runtime), new ListTransitRouterMulticastGroupsResponse({}));
  }

  /**
    * You can call the `ListTransitRouterMulticastGroups` operation to query the multicast sources and members in a multicast domain. Multicast sources and members are also known as multicast resources.
    * *   If you set **GroupIpAddress**, the system queries multicast resources in the multicast domain by multicast group.
    * *   If you set **VSwitchIds**, the system queries multicast resources in the multicast domain by vSwitch.
    * *   If you set **PeerTransitRouterMulticastDomains**, the system queries multicast resources that are also deployed in a different region.
    * *   If you set **ResourceType**, the system queries the multicast resources of the specified type in the multicast domain.
    * *   If you set **ResourceId**, the system queries multicast resources by resource.
    * *   If you set only **TransitRouterMulticastDomainId**, the system queries all the multicast resources in the multicast domain.
    *
    * @param request ListTransitRouterMulticastGroupsRequest
    * @return ListTransitRouterMulticastGroupsResponse
   */
  async listTransitRouterMulticastGroups(request: ListTransitRouterMulticastGroupsRequest): Promise<ListTransitRouterMulticastGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterMulticastGroupsWithOptions(request, runtime);
  }

  /**
    * You can use the following methods to query inter-region connections on an Enterprise Edition transit router:
    * *   Query all inter-region connections on an Enterprise Edition transit router by specifying the ID of the Enterprise Edition transit router.
    * *   Query all inter-region connections on an Enterprise Edition transit router by specifying the ID of the Cloud Enterprise Network (CEN) instance and the ID of the region where the transit router is deployed.
    *
    * @param request ListTransitRouterPeerAttachmentsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTransitRouterPeerAttachmentsResponse
   */
  async listTransitRouterPeerAttachmentsWithOptions(request: ListTransitRouterPeerAttachmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterPeerAttachmentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterPeerAttachments",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterPeerAttachmentsResponse>(await this.callApi(params, req, runtime), new ListTransitRouterPeerAttachmentsResponse({}));
  }

  /**
    * You can use the following methods to query inter-region connections on an Enterprise Edition transit router:
    * *   Query all inter-region connections on an Enterprise Edition transit router by specifying the ID of the Enterprise Edition transit router.
    * *   Query all inter-region connections on an Enterprise Edition transit router by specifying the ID of the Cloud Enterprise Network (CEN) instance and the ID of the region where the transit router is deployed.
    *
    * @param request ListTransitRouterPeerAttachmentsRequest
    * @return ListTransitRouterPeerAttachmentsResponse
   */
  async listTransitRouterPeerAttachments(request: ListTransitRouterPeerAttachmentsRequest): Promise<ListTransitRouterPeerAttachmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterPeerAttachmentsWithOptions(request, runtime);
  }

  async listTransitRouterPrefixListAssociationWithOptions(request: ListTransitRouterPrefixListAssociationRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterPrefixListAssociationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextHop)) {
      query["NextHop"] = request.nextHop;
    }

    if (!Util.isUnset(request.nextHopInstanceId)) {
      query["NextHopInstanceId"] = request.nextHopInstanceId;
    }

    if (!Util.isUnset(request.nextHopType)) {
      query["NextHopType"] = request.nextHopType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.ownerUid)) {
      query["OwnerUid"] = request.ownerUid;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.prefixListId)) {
      query["PrefixListId"] = request.prefixListId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.transitRouterTableId)) {
      query["TransitRouterTableId"] = request.transitRouterTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterPrefixListAssociation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterPrefixListAssociationResponse>(await this.callApi(params, req, runtime), new ListTransitRouterPrefixListAssociationResponse({}));
  }

  async listTransitRouterPrefixListAssociation(request: ListTransitRouterPrefixListAssociationRequest): Promise<ListTransitRouterPrefixListAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterPrefixListAssociationWithOptions(request, runtime);
  }

  async listTransitRouterRouteEntriesWithOptions(request: ListTransitRouterRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterRouteEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prefixListId)) {
      query["PrefixListId"] = request.prefixListId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeFilter)) {
      query["RouteFilter"] = request.routeFilter;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryDestinationCidrBlock)) {
      query["TransitRouterRouteEntryDestinationCidrBlock"] = request.transitRouterRouteEntryDestinationCidrBlock;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryIds)) {
      query["TransitRouterRouteEntryIds"] = request.transitRouterRouteEntryIds;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryNames)) {
      query["TransitRouterRouteEntryNames"] = request.transitRouterRouteEntryNames;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryNextHopId)) {
      query["TransitRouterRouteEntryNextHopId"] = request.transitRouterRouteEntryNextHopId;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryNextHopResourceId)) {
      query["TransitRouterRouteEntryNextHopResourceId"] = request.transitRouterRouteEntryNextHopResourceId;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryNextHopResourceType)) {
      query["TransitRouterRouteEntryNextHopResourceType"] = request.transitRouterRouteEntryNextHopResourceType;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryNextHopType)) {
      query["TransitRouterRouteEntryNextHopType"] = request.transitRouterRouteEntryNextHopType;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryOriginResourceId)) {
      query["TransitRouterRouteEntryOriginResourceId"] = request.transitRouterRouteEntryOriginResourceId;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryOriginResourceType)) {
      query["TransitRouterRouteEntryOriginResourceType"] = request.transitRouterRouteEntryOriginResourceType;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryStatus)) {
      query["TransitRouterRouteEntryStatus"] = request.transitRouterRouteEntryStatus;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryType)) {
      query["TransitRouterRouteEntryType"] = request.transitRouterRouteEntryType;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterRouteEntries",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterRouteEntriesResponse>(await this.callApi(params, req, runtime), new ListTransitRouterRouteEntriesResponse({}));
  }

  async listTransitRouterRouteEntries(request: ListTransitRouterRouteEntriesRequest): Promise<ListTransitRouterRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterRouteEntriesWithOptions(request, runtime);
  }

  /**
    * When you call **ListTransitRouterRouteTableAssociations**, you must set at least one of **TransitRouterRouteTableId** and **TransitRouterAttachmentId**.
    * *   If you set only **TransitRouterRouteTableId**, the network instance connections that are in associated forwarding correlation with a route table of an Enterprise Edition transit router are queried.
    * *   If you set only **TransitRouterAttachmentId**, the route table of an Enterprise Edition transit router that is in associated forwarding correlation with a network instance connection is queried.
    * *   If you set both **TransitRouterRouteTableId** and **TransitRouterAttachmentId**, the associated forwarding correlations between a specified network instance connection and a specified route table of an Enterprise Edition transit router are queried.
    *     *   If an associated forwarding correlation is created between the network instance connection and the route table of the Enterprise Edition transit router, the information about the associated forwarding correlation is returned.
    *     *   If no associated forwarding correlation is created between the network instance connection and the route table of the Enterprise Edition transit router, **TransitRouterAssociations** in the response is empty.
    *
    * @param request ListTransitRouterRouteTableAssociationsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTransitRouterRouteTableAssociationsResponse
   */
  async listTransitRouterRouteTableAssociationsWithOptions(request: ListTransitRouterRouteTableAssociationsRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterRouteTableAssociationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentResourceId)) {
      query["TransitRouterAttachmentResourceId"] = request.transitRouterAttachmentResourceId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentResourceType)) {
      query["TransitRouterAttachmentResourceType"] = request.transitRouterAttachmentResourceType;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterRouteTableAssociations",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterRouteTableAssociationsResponse>(await this.callApi(params, req, runtime), new ListTransitRouterRouteTableAssociationsResponse({}));
  }

  /**
    * When you call **ListTransitRouterRouteTableAssociations**, you must set at least one of **TransitRouterRouteTableId** and **TransitRouterAttachmentId**.
    * *   If you set only **TransitRouterRouteTableId**, the network instance connections that are in associated forwarding correlation with a route table of an Enterprise Edition transit router are queried.
    * *   If you set only **TransitRouterAttachmentId**, the route table of an Enterprise Edition transit router that is in associated forwarding correlation with a network instance connection is queried.
    * *   If you set both **TransitRouterRouteTableId** and **TransitRouterAttachmentId**, the associated forwarding correlations between a specified network instance connection and a specified route table of an Enterprise Edition transit router are queried.
    *     *   If an associated forwarding correlation is created between the network instance connection and the route table of the Enterprise Edition transit router, the information about the associated forwarding correlation is returned.
    *     *   If no associated forwarding correlation is created between the network instance connection and the route table of the Enterprise Edition transit router, **TransitRouterAssociations** in the response is empty.
    *
    * @param request ListTransitRouterRouteTableAssociationsRequest
    * @return ListTransitRouterRouteTableAssociationsResponse
   */
  async listTransitRouterRouteTableAssociations(request: ListTransitRouterRouteTableAssociationsRequest): Promise<ListTransitRouterRouteTableAssociationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterRouteTableAssociationsWithOptions(request, runtime);
  }

  async listTransitRouterRouteTablePropagationsWithOptions(request: ListTransitRouterRouteTablePropagationsRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterRouteTablePropagationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentResourceId)) {
      query["TransitRouterAttachmentResourceId"] = request.transitRouterAttachmentResourceId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentResourceType)) {
      query["TransitRouterAttachmentResourceType"] = request.transitRouterAttachmentResourceType;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterRouteTablePropagations",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterRouteTablePropagationsResponse>(await this.callApi(params, req, runtime), new ListTransitRouterRouteTablePropagationsResponse({}));
  }

  async listTransitRouterRouteTablePropagations(request: ListTransitRouterRouteTablePropagationsRequest): Promise<ListTransitRouterRouteTablePropagationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterRouteTablePropagationsWithOptions(request, runtime);
  }

  async listTransitRouterRouteTablesWithOptions(request: ListTransitRouterRouteTablesRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterRouteTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeTableOptions)) {
      query["RouteTableOptions"] = request.routeTableOptions;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.transitRouterRouteTableIds)) {
      query["TransitRouterRouteTableIds"] = request.transitRouterRouteTableIds;
    }

    if (!Util.isUnset(request.transitRouterRouteTableNames)) {
      query["TransitRouterRouteTableNames"] = request.transitRouterRouteTableNames;
    }

    if (!Util.isUnset(request.transitRouterRouteTableStatus)) {
      query["TransitRouterRouteTableStatus"] = request.transitRouterRouteTableStatus;
    }

    if (!Util.isUnset(request.transitRouterRouteTableType)) {
      query["TransitRouterRouteTableType"] = request.transitRouterRouteTableType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterRouteTables",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterRouteTablesResponse>(await this.callApi(params, req, runtime), new ListTransitRouterRouteTablesResponse({}));
  }

  async listTransitRouterRouteTables(request: ListTransitRouterRouteTablesRequest): Promise<ListTransitRouterRouteTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterRouteTablesWithOptions(request, runtime);
  }

  /**
    * You can use the following methods to query VBR connections on an Enterprise Edition transit router:
    * *   Specify the ID of the Enterprise Edition transit router.
    * *   Specify the ID of the relevant Cloud Enterprise Network (CEN) instance and the region ID of the Enterprise Edition transit router.
    *
    * @param request ListTransitRouterVbrAttachmentsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTransitRouterVbrAttachmentsResponse
   */
  async listTransitRouterVbrAttachmentsWithOptions(request: ListTransitRouterVbrAttachmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterVbrAttachmentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterVbrAttachments",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterVbrAttachmentsResponse>(await this.callApi(params, req, runtime), new ListTransitRouterVbrAttachmentsResponse({}));
  }

  /**
    * You can use the following methods to query VBR connections on an Enterprise Edition transit router:
    * *   Specify the ID of the Enterprise Edition transit router.
    * *   Specify the ID of the relevant Cloud Enterprise Network (CEN) instance and the region ID of the Enterprise Edition transit router.
    *
    * @param request ListTransitRouterVbrAttachmentsRequest
    * @return ListTransitRouterVbrAttachmentsResponse
   */
  async listTransitRouterVbrAttachments(request: ListTransitRouterVbrAttachmentsRequest): Promise<ListTransitRouterVbrAttachmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterVbrAttachmentsWithOptions(request, runtime);
  }

  /**
    * You can use the following methods to query VPC connections on an Enterprise Edition transit router:
    * *   Specify the ID of the Enterprise Edition transit router.
    * *   Specify the ID of the relevant Cloud Enterprise Network (CEN) instance and the region ID of the Enterprise Edition transit router.
    * *   Specify the ID of the region where the Enterprise Edition transit router is deployed.
    *
    * @param request ListTransitRouterVpcAttachmentsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTransitRouterVpcAttachmentsResponse
   */
  async listTransitRouterVpcAttachmentsWithOptions(request: ListTransitRouterVpcAttachmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterVpcAttachmentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterVpcAttachments",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterVpcAttachmentsResponse>(await this.callApi(params, req, runtime), new ListTransitRouterVpcAttachmentsResponse({}));
  }

  /**
    * You can use the following methods to query VPC connections on an Enterprise Edition transit router:
    * *   Specify the ID of the Enterprise Edition transit router.
    * *   Specify the ID of the relevant Cloud Enterprise Network (CEN) instance and the region ID of the Enterprise Edition transit router.
    * *   Specify the ID of the region where the Enterprise Edition transit router is deployed.
    *
    * @param request ListTransitRouterVpcAttachmentsRequest
    * @return ListTransitRouterVpcAttachmentsResponse
   */
  async listTransitRouterVpcAttachments(request: ListTransitRouterVpcAttachmentsRequest): Promise<ListTransitRouterVpcAttachmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterVpcAttachmentsWithOptions(request, runtime);
  }

  /**
    * When you call the **ListTransitRouterVpnAttachments** operation, take note of the following items:
    * *   If you set only **CenId** and **RegionId**, the VPN attachments in the current region are queried.
    * *   If you set **CenId**, **RegionId**, and **TransitRouterAttachmentId**, only the specified VPN attachment is queried.
    * *   If you set **CenId** and **RegionId**, you do not need to set **TransitRouterId**. If you set **TransitRouterId**, you do not need to set **CenId** or **RegionId**.
    *
    * @param request ListTransitRouterVpnAttachmentsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTransitRouterVpnAttachmentsResponse
   */
  async listTransitRouterVpnAttachmentsWithOptions(request: ListTransitRouterVpnAttachmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRouterVpnAttachmentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouterVpnAttachments",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRouterVpnAttachmentsResponse>(await this.callApi(params, req, runtime), new ListTransitRouterVpnAttachmentsResponse({}));
  }

  /**
    * When you call the **ListTransitRouterVpnAttachments** operation, take note of the following items:
    * *   If you set only **CenId** and **RegionId**, the VPN attachments in the current region are queried.
    * *   If you set **CenId**, **RegionId**, and **TransitRouterAttachmentId**, only the specified VPN attachment is queried.
    * *   If you set **CenId** and **RegionId**, you do not need to set **TransitRouterId**. If you set **TransitRouterId**, you do not need to set **CenId** or **RegionId**.
    *
    * @param request ListTransitRouterVpnAttachmentsRequest
    * @return ListTransitRouterVpnAttachmentsResponse
   */
  async listTransitRouterVpnAttachments(request: ListTransitRouterVpnAttachmentsRequest): Promise<ListTransitRouterVpnAttachmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRouterVpnAttachmentsWithOptions(request, runtime);
  }

  /**
    * You can set the **RegionId** and **TransitRouterId** parameters based on your requirements.
    * *   If you do not set **RegionId** or **TransitRouterId**, the system queries all transit routers that are connected to the specified CEN instance.
    * *   If you set only **RegionId**, the system queries transit routers that are deployed in the specified region.
    * *   If you set only **TransitRouterId**, the system queries the specified transit router.
    * *   If you set both **RegionId** and **TransitRouterId**, the system queries the specified transit router in the specified region.
    *
    * @param request ListTransitRoutersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTransitRoutersResponse
   */
  async listTransitRoutersWithOptions(request: ListTransitRoutersRequest, runtime: $Util.RuntimeOptions): Promise<ListTransitRoutersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.featureFilter)) {
      query["FeatureFilter"] = request.featureFilter;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.transitRouterName)) {
      query["TransitRouterName"] = request.transitRouterName;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTransitRouters",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTransitRoutersResponse>(await this.callApi(params, req, runtime), new ListTransitRoutersResponse({}));
  }

  /**
    * You can set the **RegionId** and **TransitRouterId** parameters based on your requirements.
    * *   If you do not set **RegionId** or **TransitRouterId**, the system queries all transit routers that are connected to the specified CEN instance.
    * *   If you set only **RegionId**, the system queries transit routers that are deployed in the specified region.
    * *   If you set only **TransitRouterId**, the system queries the specified transit router.
    * *   If you set both **RegionId** and **TransitRouterId**, the system queries the specified transit router in the specified region.
    *
    * @param request ListTransitRoutersRequest
    * @return ListTransitRoutersResponse
   */
  async listTransitRouters(request: ListTransitRoutersRequest): Promise<ListTransitRoutersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTransitRoutersWithOptions(request, runtime);
  }

  /**
    * **ModifyCenAttribute** is an asynchronous operation. After you send a request, the system returns the **request ID** but the operation is still being performed in the system background. You can call **DescribeCens** to query the status of a CEN instance.
    * *   If a CEN instance is in the **Modifying** state, the CEN instance is being modified. You can query the CEN instance but cannot perform other operations.
    * *   If a CEN instance is in the **Active** state, the CEN instance is modified.
    *
    * @param request ModifyCenAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyCenAttributeResponse
   */
  async modifyCenAttributeWithOptions(request: ModifyCenAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCenAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.protectionLevel)) {
      query["ProtectionLevel"] = request.protectionLevel;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyCenAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCenAttributeResponse>(await this.callApi(params, req, runtime), new ModifyCenAttributeResponse({}));
  }

  /**
    * **ModifyCenAttribute** is an asynchronous operation. After you send a request, the system returns the **request ID** but the operation is still being performed in the system background. You can call **DescribeCens** to query the status of a CEN instance.
    * *   If a CEN instance is in the **Modifying** state, the CEN instance is being modified. You can query the CEN instance but cannot perform other operations.
    * *   If a CEN instance is in the **Active** state, the CEN instance is modified.
    *
    * @param request ModifyCenAttributeRequest
    * @return ModifyCenAttributeResponse
   */
  async modifyCenAttribute(request: ModifyCenAttributeRequest): Promise<ModifyCenAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCenAttributeWithOptions(request, runtime);
  }

  async modifyCenBandwidthPackageAttributeWithOptions(request: ModifyCenBandwidthPackageAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCenBandwidthPackageAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyCenBandwidthPackageAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCenBandwidthPackageAttributeResponse>(await this.callApi(params, req, runtime), new ModifyCenBandwidthPackageAttributeResponse({}));
  }

  async modifyCenBandwidthPackageAttribute(request: ModifyCenBandwidthPackageAttributeRequest): Promise<ModifyCenBandwidthPackageAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCenBandwidthPackageAttributeWithOptions(request, runtime);
  }

  async modifyCenBandwidthPackageSpecWithOptions(request: ModifyCenBandwidthPackageSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCenBandwidthPackageSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyCenBandwidthPackageSpec",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCenBandwidthPackageSpecResponse>(await this.callApi(params, req, runtime), new ModifyCenBandwidthPackageSpecResponse({}));
  }

  async modifyCenBandwidthPackageSpec(request: ModifyCenBandwidthPackageSpecRequest): Promise<ModifyCenBandwidthPackageSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCenBandwidthPackageSpecWithOptions(request, runtime);
  }

  /**
    * `ModifyCenRouteMap` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeCenRouteMaps` operation to query the status of a routing policy.
    * *   **Modifying**: indicates that the system is modifying the routing policy. You can only query the routing policy, but cannot perform other operations.
    * *   **Active**: indicates that the routing policy is modified.
    *
    * @param request ModifyCenRouteMapRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyCenRouteMapResponse
   */
  async modifyCenRouteMapWithOptions(request: ModifyCenRouteMapRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCenRouteMapResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asPathMatchMode)) {
      query["AsPathMatchMode"] = request.asPathMatchMode;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenRegionId)) {
      query["CenRegionId"] = request.cenRegionId;
    }

    if (!Util.isUnset(request.cidrMatchMode)) {
      query["CidrMatchMode"] = request.cidrMatchMode;
    }

    if (!Util.isUnset(request.communityMatchMode)) {
      query["CommunityMatchMode"] = request.communityMatchMode;
    }

    if (!Util.isUnset(request.communityOperateMode)) {
      query["CommunityOperateMode"] = request.communityOperateMode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destinationChildInstanceTypes)) {
      query["DestinationChildInstanceTypes"] = request.destinationChildInstanceTypes;
    }

    if (!Util.isUnset(request.destinationCidrBlocks)) {
      query["DestinationCidrBlocks"] = request.destinationCidrBlocks;
    }

    if (!Util.isUnset(request.destinationInstanceIds)) {
      query["DestinationInstanceIds"] = request.destinationInstanceIds;
    }

    if (!Util.isUnset(request.destinationInstanceIdsReverseMatch)) {
      query["DestinationInstanceIdsReverseMatch"] = request.destinationInstanceIdsReverseMatch;
    }

    if (!Util.isUnset(request.destinationRouteTableIds)) {
      query["DestinationRouteTableIds"] = request.destinationRouteTableIds;
    }

    if (!Util.isUnset(request.mapResult)) {
      query["MapResult"] = request.mapResult;
    }

    if (!Util.isUnset(request.matchAddressType)) {
      query["MatchAddressType"] = request.matchAddressType;
    }

    if (!Util.isUnset(request.matchAsns)) {
      query["MatchAsns"] = request.matchAsns;
    }

    if (!Util.isUnset(request.matchCommunitySet)) {
      query["MatchCommunitySet"] = request.matchCommunitySet;
    }

    if (!Util.isUnset(request.nextPriority)) {
      query["NextPriority"] = request.nextPriority;
    }

    if (!Util.isUnset(request.operateCommunitySet)) {
      query["OperateCommunitySet"] = request.operateCommunitySet;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.preference)) {
      query["Preference"] = request.preference;
    }

    if (!Util.isUnset(request.prependAsPath)) {
      query["PrependAsPath"] = request.prependAsPath;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeMapId)) {
      query["RouteMapId"] = request.routeMapId;
    }

    if (!Util.isUnset(request.routeTypes)) {
      query["RouteTypes"] = request.routeTypes;
    }

    if (!Util.isUnset(request.sourceChildInstanceTypes)) {
      query["SourceChildInstanceTypes"] = request.sourceChildInstanceTypes;
    }

    if (!Util.isUnset(request.sourceInstanceIds)) {
      query["SourceInstanceIds"] = request.sourceInstanceIds;
    }

    if (!Util.isUnset(request.sourceInstanceIdsReverseMatch)) {
      query["SourceInstanceIdsReverseMatch"] = request.sourceInstanceIdsReverseMatch;
    }

    if (!Util.isUnset(request.sourceRegionIds)) {
      query["SourceRegionIds"] = request.sourceRegionIds;
    }

    if (!Util.isUnset(request.sourceRouteTableIds)) {
      query["SourceRouteTableIds"] = request.sourceRouteTableIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyCenRouteMap",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCenRouteMapResponse>(await this.callApi(params, req, runtime), new ModifyCenRouteMapResponse({}));
  }

  /**
    * `ModifyCenRouteMap` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeCenRouteMaps` operation to query the status of a routing policy.
    * *   **Modifying**: indicates that the system is modifying the routing policy. You can only query the routing policy, but cannot perform other operations.
    * *   **Active**: indicates that the routing policy is modified.
    *
    * @param request ModifyCenRouteMapRequest
    * @return ModifyCenRouteMapResponse
   */
  async modifyCenRouteMap(request: ModifyCenRouteMapRequest): Promise<ModifyCenRouteMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCenRouteMapWithOptions(request, runtime);
  }

  /**
    * `ModifyFlowLogAttribute` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
    * *   If a flow log is in the **Modifying** state, the flow log is being modified. In this case, you can query the flow log but cannot perform other operations.
    * *   If a flow log is in the **Active** state, the flow log is modified.
    *
    * @param request ModifyFlowLogAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyFlowLogAttributeResponse
   */
  async modifyFlowLogAttributeWithOptions(request: ModifyFlowLogAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowLogAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!Util.isUnset(request.flowLogName)) {
      query["FlowLogName"] = request.flowLogName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFlowLogAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFlowLogAttributeResponse>(await this.callApi(params, req, runtime), new ModifyFlowLogAttributeResponse({}));
  }

  /**
    * `ModifyFlowLogAttribute` is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the `DescribeFlowlogs` operation to query the status of a flow log.
    * *   If a flow log is in the **Modifying** state, the flow log is being modified. In this case, you can query the flow log but cannot perform other operations.
    * *   If a flow log is in the **Active** state, the flow log is modified.
    *
    * @param request ModifyFlowLogAttributeRequest
    * @return ModifyFlowLogAttributeResponse
   */
  async modifyFlowLogAttribute(request: ModifyFlowLogAttributeRequest): Promise<ModifyFlowLogAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowLogAttributeWithOptions(request, runtime);
  }

  /**
    * *   Before you modify the CIDR block of a transit router, we recommend that you read the [limits on transit router CIDR blocks](~~462635~~).
    * *   If IP addresses within the CIDR block have been allocated to network instances, you cannot modify the CIDR block.
    * *   When you call **ModifyTransitRouterCidr**, if no parameter of the **PublishCidrRoute** operation is modified, ModifyTransitRouterCidr is a synchronous operation. After you call the operation, the new settings are immediately applied.
    * *   If a parameter of the **PublishCidrRoute** operation is modified, **ModifyTransitRouterCidr** is an asynchronous operation. After you call the operation, the request ID (**RequestId**) is returned but the operation is still being performed in the system background. You can call **ListTransitRouterCidr** to query the status of the CIDR block of the transit router.
    *     *   If the CIDR block of the transit router remains unchanged, the CIDR block is still being modified.
    *     *   If the CIDR block of the transit router is changed to the one that you specify in the request, the CIDR block has been modified.
    *
    * @param request ModifyTransitRouterCidrRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyTransitRouterCidrResponse
   */
  async modifyTransitRouterCidrWithOptions(request: ModifyTransitRouterCidrRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTransitRouterCidrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.publishCidrRoute)) {
      query["PublishCidrRoute"] = request.publishCidrRoute;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterCidrId)) {
      query["TransitRouterCidrId"] = request.transitRouterCidrId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTransitRouterCidr",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTransitRouterCidrResponse>(await this.callApi(params, req, runtime), new ModifyTransitRouterCidrResponse({}));
  }

  /**
    * *   Before you modify the CIDR block of a transit router, we recommend that you read the [limits on transit router CIDR blocks](~~462635~~).
    * *   If IP addresses within the CIDR block have been allocated to network instances, you cannot modify the CIDR block.
    * *   When you call **ModifyTransitRouterCidr**, if no parameter of the **PublishCidrRoute** operation is modified, ModifyTransitRouterCidr is a synchronous operation. After you call the operation, the new settings are immediately applied.
    * *   If a parameter of the **PublishCidrRoute** operation is modified, **ModifyTransitRouterCidr** is an asynchronous operation. After you call the operation, the request ID (**RequestId**) is returned but the operation is still being performed in the system background. You can call **ListTransitRouterCidr** to query the status of the CIDR block of the transit router.
    *     *   If the CIDR block of the transit router remains unchanged, the CIDR block is still being modified.
    *     *   If the CIDR block of the transit router is changed to the one that you specify in the request, the CIDR block has been modified.
    *
    * @param request ModifyTransitRouterCidrRequest
    * @return ModifyTransitRouterCidrResponse
   */
  async modifyTransitRouterCidr(request: ModifyTransitRouterCidrRequest): Promise<ModifyTransitRouterCidrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTransitRouterCidrWithOptions(request, runtime);
  }

  async modifyTransitRouterMulticastDomainWithOptions(request: ModifyTransitRouterMulticastDomainRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTransitRouterMulticastDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainDescription)) {
      query["TransitRouterMulticastDomainDescription"] = request.transitRouterMulticastDomainDescription;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainName)) {
      query["TransitRouterMulticastDomainName"] = request.transitRouterMulticastDomainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTransitRouterMulticastDomain",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTransitRouterMulticastDomainResponse>(await this.callApi(params, req, runtime), new ModifyTransitRouterMulticastDomainResponse({}));
  }

  async modifyTransitRouterMulticastDomain(request: ModifyTransitRouterMulticastDomainRequest): Promise<ModifyTransitRouterMulticastDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTransitRouterMulticastDomainWithOptions(request, runtime);
  }

  /**
    * By default, CEN instances and bandwidth plans are in the default resource group. You can call the `MoveResourceGroup` operation to move CEN instances or bandwidth plans to another resource group.
    *
    * @param request MoveResourceGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
  }

  /**
    * By default, CEN instances and bandwidth plans are in the default resource group. You can call the `MoveResourceGroup` operation to move CEN instances or bandwidth plans to another resource group.
    *
    * @param request MoveResourceGroupRequest
    * @return MoveResourceGroupResponse
   */
  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
    * You can call the `OpenTransitRouterService` operation to activate the transit router feature free of charge. After the `OpenTransitRouterService` operation succeeds, an order is automatically generated. You can use the returned order ID to query the order information in [Alibaba Cloud User Center](https://usercenter2-intl.aliyun.com/billing/#/account/overview).
    *
    * @param request OpenTransitRouterServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OpenTransitRouterServiceResponse
   */
  async openTransitRouterServiceWithOptions(request: OpenTransitRouterServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenTransitRouterServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenTransitRouterService",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenTransitRouterServiceResponse>(await this.callApi(params, req, runtime), new OpenTransitRouterServiceResponse({}));
  }

  /**
    * You can call the `OpenTransitRouterService` operation to activate the transit router feature free of charge. After the `OpenTransitRouterService` operation succeeds, an order is automatically generated. You can use the returned order ID to query the order information in [Alibaba Cloud User Center](https://usercenter2-intl.aliyun.com/billing/#/account/overview).
    *
    * @param request OpenTransitRouterServiceRequest
    * @return OpenTransitRouterServiceResponse
   */
  async openTransitRouterService(request: OpenTransitRouterServiceRequest): Promise<OpenTransitRouterServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openTransitRouterServiceWithOptions(request, runtime);
  }

  /**
    * The following table describes whether routes of different types are advertised to CEN by default. You can call the PublishRouteEntries operation to advertise routes to CEN.
    * |Route|Network instance|Advertised to CEN by default|
    * |---|---|---|
    * |Routes that route network traffic to Elastic Compute Service (ECS) instances|VPC|No|
    * |Routes that route network traffic to VPN gateways|VPC|No|
    * |Routes that route network traffic to high-availability virtual IP addresses (HAVIPs)|VPC|No|
    * |Routes that route network traffic to router interfaces|VPC|No|
    * |Routes that route network traffic to elastic network interfaces (ENIs)|VPC|No|
    * |Routes that route network traffic to IPv6 gateways|VPC|No|
    * |Routes that route network traffic to NAT gateways|VPC|No|
    * |System routes of VPCs|VPC|Yes|
    * |Routes that route network traffic to data centers|VBR|Yes|
    * |Border Gateway Protocol (BGP) routes|VBR|Yes|
    *
    * @param request PublishRouteEntriesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PublishRouteEntriesResponse
   */
  async publishRouteEntriesWithOptions(request: PublishRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<PublishRouteEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!Util.isUnset(request.childInstanceRouteTableId)) {
      query["ChildInstanceRouteTableId"] = request.childInstanceRouteTableId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PublishRouteEntries",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishRouteEntriesResponse>(await this.callApi(params, req, runtime), new PublishRouteEntriesResponse({}));
  }

  /**
    * The following table describes whether routes of different types are advertised to CEN by default. You can call the PublishRouteEntries operation to advertise routes to CEN.
    * |Route|Network instance|Advertised to CEN by default|
    * |---|---|---|
    * |Routes that route network traffic to Elastic Compute Service (ECS) instances|VPC|No|
    * |Routes that route network traffic to VPN gateways|VPC|No|
    * |Routes that route network traffic to high-availability virtual IP addresses (HAVIPs)|VPC|No|
    * |Routes that route network traffic to router interfaces|VPC|No|
    * |Routes that route network traffic to elastic network interfaces (ENIs)|VPC|No|
    * |Routes that route network traffic to IPv6 gateways|VPC|No|
    * |Routes that route network traffic to NAT gateways|VPC|No|
    * |System routes of VPCs|VPC|Yes|
    * |Routes that route network traffic to data centers|VBR|Yes|
    * |Border Gateway Protocol (BGP) routes|VBR|Yes|
    *
    * @param request PublishRouteEntriesRequest
    * @return PublishRouteEntriesResponse
   */
  async publishRouteEntries(request: PublishRouteEntriesRequest): Promise<PublishRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishRouteEntriesWithOptions(request, runtime);
  }

  async refreshTransitRouteTableAggregationWithOptions(request: RefreshTransitRouteTableAggregationRequest, runtime: $Util.RuntimeOptions): Promise<RefreshTransitRouteTableAggregationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouteTableAggregationCidr)) {
      query["TransitRouteTableAggregationCidr"] = request.transitRouteTableAggregationCidr;
    }

    if (!Util.isUnset(request.transitRouteTableId)) {
      query["TransitRouteTableId"] = request.transitRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshTransitRouteTableAggregation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshTransitRouteTableAggregationResponse>(await this.callApi(params, req, runtime), new RefreshTransitRouteTableAggregationResponse({}));
  }

  async refreshTransitRouteTableAggregation(request: RefreshTransitRouteTableAggregationRequest): Promise<RefreshTransitRouteTableAggregationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshTransitRouteTableAggregationWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request RegisterTransitRouterMulticastGroupMembersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RegisterTransitRouterMulticastGroupMembersResponse
   */
  async registerTransitRouterMulticastGroupMembersWithOptions(request: RegisterTransitRouterMulticastGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<RegisterTransitRouterMulticastGroupMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.groupIpAddress)) {
      query["GroupIpAddress"] = request.groupIpAddress;
    }

    if (!Util.isUnset(request.networkInterfaceIds)) {
      query["NetworkInterfaceIds"] = request.networkInterfaceIds;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.peerTransitRouterMulticastDomains)) {
      query["PeerTransitRouterMulticastDomains"] = request.peerTransitRouterMulticastDomains;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterTransitRouterMulticastGroupMembers",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterTransitRouterMulticastGroupMembersResponse>(await this.callApi(params, req, runtime), new RegisterTransitRouterMulticastGroupMembersResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request RegisterTransitRouterMulticastGroupMembersRequest
    * @return RegisterTransitRouterMulticastGroupMembersResponse
   */
  async registerTransitRouterMulticastGroupMembers(request: RegisterTransitRouterMulticastGroupMembersRequest): Promise<RegisterTransitRouterMulticastGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerTransitRouterMulticastGroupMembersWithOptions(request, runtime);
  }

  /**
    * *   You can specify only elastic network interfaces (ENIs) as multicast sources.
    * *   `RegisterTransitRouterMulticastGroupSources` is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call `ListTransitRouterMulticastGroups` to query the status of a multicast source.
    *     *   If a multicast source is in the **Registering** state, the multicast source is being created. You can query the multicast source but cannot perform other operations.
    *     *   If a multicast source is in the **Registered** state, the multicast source is created.
    * ### Prerequisites
    * Before you call `RegisterTransitRouterMulticastGroupSources`, make sure that the vSwitch on which the ENI is created is associated with the multicast domain. For more information, see [AssociateTransitRouterMulticastDomain](~~429778~~).
    *
    * @param request RegisterTransitRouterMulticastGroupSourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RegisterTransitRouterMulticastGroupSourcesResponse
   */
  async registerTransitRouterMulticastGroupSourcesWithOptions(request: RegisterTransitRouterMulticastGroupSourcesRequest, runtime: $Util.RuntimeOptions): Promise<RegisterTransitRouterMulticastGroupSourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.groupIpAddress)) {
      query["GroupIpAddress"] = request.groupIpAddress;
    }

    if (!Util.isUnset(request.networkInterfaceIds)) {
      query["NetworkInterfaceIds"] = request.networkInterfaceIds;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterMulticastDomainId)) {
      query["TransitRouterMulticastDomainId"] = request.transitRouterMulticastDomainId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterTransitRouterMulticastGroupSources",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterTransitRouterMulticastGroupSourcesResponse>(await this.callApi(params, req, runtime), new RegisterTransitRouterMulticastGroupSourcesResponse({}));
  }

  /**
    * *   You can specify only elastic network interfaces (ENIs) as multicast sources.
    * *   `RegisterTransitRouterMulticastGroupSources` is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call `ListTransitRouterMulticastGroups` to query the status of a multicast source.
    *     *   If a multicast source is in the **Registering** state, the multicast source is being created. You can query the multicast source but cannot perform other operations.
    *     *   If a multicast source is in the **Registered** state, the multicast source is created.
    * ### Prerequisites
    * Before you call `RegisterTransitRouterMulticastGroupSources`, make sure that the vSwitch on which the ENI is created is associated with the multicast domain. For more information, see [AssociateTransitRouterMulticastDomain](~~429778~~).
    *
    * @param request RegisterTransitRouterMulticastGroupSourcesRequest
    * @return RegisterTransitRouterMulticastGroupSourcesResponse
   */
  async registerTransitRouterMulticastGroupSources(request: RegisterTransitRouterMulticastGroupSourcesRequest): Promise<RegisterTransitRouterMulticastGroupSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerTransitRouterMulticastGroupSourcesWithOptions(request, runtime);
  }

  /**
    * *   When you call **RemoveTrafficMatchRuleFromTrafficMarkingPolicy**, take note of the following rules:
    *     *   If you specify the ID of a traffic classification rule in the **TrafficMarkRuleIds** parameter, the specified traffic classification rule is deleted.
    *     *   If you do not specify a traffic classification rule ID in the **TrafficMarkRuleIds** parameter, no operation is performed after you call this operation.
    *     If you want to delete a traffic classification rule, you must specify the rule ID before you call this operation.
    * *   **RemoveTrafficMatchRuleFromTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic classification rule.
    *     *   If a traffic classification rule is in the **Deleting** state, the traffic classification rule is being deleted. In this case, you can query the traffic classification rule but cannot perform other operations.
    *     *   If a traffic classification rule cannot be found, the traffic classification rule is deleted.
    *
    * @param request RemoveTrafficMatchRuleFromTrafficMarkingPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse
   */
  async removeTrafficMatchRuleFromTrafficMarkingPolicyWithOptions(request: RemoveTrafficMatchRuleFromTrafficMarkingPolicyRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficMarkRuleIds)) {
      query["TrafficMarkRuleIds"] = request.trafficMarkRuleIds;
    }

    if (!Util.isUnset(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveTrafficMatchRuleFromTrafficMarkingPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse>(await this.callApi(params, req, runtime), new RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse({}));
  }

  /**
    * *   When you call **RemoveTrafficMatchRuleFromTrafficMarkingPolicy**, take note of the following rules:
    *     *   If you specify the ID of a traffic classification rule in the **TrafficMarkRuleIds** parameter, the specified traffic classification rule is deleted.
    *     *   If you do not specify a traffic classification rule ID in the **TrafficMarkRuleIds** parameter, no operation is performed after you call this operation.
    *     If you want to delete a traffic classification rule, you must specify the rule ID before you call this operation.
    * *   **RemoveTrafficMatchRuleFromTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic classification rule.
    *     *   If a traffic classification rule is in the **Deleting** state, the traffic classification rule is being deleted. In this case, you can query the traffic classification rule but cannot perform other operations.
    *     *   If a traffic classification rule cannot be found, the traffic classification rule is deleted.
    *
    * @param request RemoveTrafficMatchRuleFromTrafficMarkingPolicyRequest
    * @return RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse
   */
  async removeTrafficMatchRuleFromTrafficMarkingPolicy(request: RemoveTrafficMatchRuleFromTrafficMarkingPolicyRequest): Promise<RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTrafficMatchRuleFromTrafficMarkingPolicyWithOptions(request, runtime);
  }

  /**
    * @deprecated : RemoveTraficMatchRuleFromTrafficMarkingPolicy is deprecated, please use Cbn::2017-09-12::RemoveTrafficMatchRuleFromTrafficMarkingPolicy instead.
    * # [](#)Precautions
    * The **RemoveTraficMatchRuleFromTrafficMarkingPolicy** operation is deprecated and will be discontinued soon. If you need to delete traffic classification rules from a traffic marking policy, call the [RemoveTrafficMatchRuleFromTrafficMarkingPolicy](~~452726~~) operation.
    *
    * @param request RemoveTraficMatchRuleFromTrafficMarkingPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse
   */
  // Deprecated
  async removeTraficMatchRuleFromTrafficMarkingPolicyWithOptions(request: RemoveTraficMatchRuleFromTrafficMarkingPolicyRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficMarkRuleIds)) {
      query["TrafficMarkRuleIds"] = request.trafficMarkRuleIds;
    }

    if (!Util.isUnset(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveTraficMatchRuleFromTrafficMarkingPolicy",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse>(await this.callApi(params, req, runtime), new RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse({}));
  }

  /**
    * @deprecated : RemoveTraficMatchRuleFromTrafficMarkingPolicy is deprecated, please use Cbn::2017-09-12::RemoveTrafficMatchRuleFromTrafficMarkingPolicy instead.
    * # [](#)Precautions
    * The **RemoveTraficMatchRuleFromTrafficMarkingPolicy** operation is deprecated and will be discontinued soon. If you need to delete traffic classification rules from a traffic marking policy, call the [RemoveTrafficMatchRuleFromTrafficMarkingPolicy](~~452726~~) operation.
    *
    * @param request RemoveTraficMatchRuleFromTrafficMarkingPolicyRequest
    * @return RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse
   */
  // Deprecated
  async removeTraficMatchRuleFromTrafficMarkingPolicy(request: RemoveTraficMatchRuleFromTrafficMarkingPolicyRequest): Promise<RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTraficMatchRuleFromTrafficMarkingPolicyWithOptions(request, runtime);
  }

  async replaceTransitRouterRouteTableAssociationWithOptions(request: ReplaceTransitRouterRouteTableAssociationRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceTransitRouterRouteTableAssociationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReplaceTransitRouterRouteTableAssociation",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReplaceTransitRouterRouteTableAssociationResponse>(await this.callApi(params, req, runtime), new ReplaceTransitRouterRouteTableAssociationResponse({}));
  }

  async replaceTransitRouterRouteTableAssociation(request: ReplaceTransitRouterRouteTableAssociationRequest): Promise<ReplaceTransitRouterRouteTableAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceTransitRouterRouteTableAssociationWithOptions(request, runtime);
  }

  /**
    * Cloud services refer to Alibaba Cloud services that use the 100.64.0.0/10 CIDR block to provide services. These cloud services include Object Storage Service (OSS), Simple Log Service, and Data Transmission Service (DTS). If your on-premises network needs to access a cloud service, you must attach the virtual border router (VBR) or Cloud Connect Network (CCN) instance that is connected to your on-premises network to a Cloud Enterprise Network (CEN) instance. In addition, you must attach a virtual private cloud (VPC) that is deployed in the same region as the cloud service to the CEN instance. This way, your on-premises network can connect to the VPC that is deployed in the same region as the cloud service and access the cloud service through the VPC.
    * *   You can call this operation only for a Basic Edition transit router. An on-premises network associated with a VBR can use CEN to access only a cloud service that is deployed in the same region.
    *     For example, if cloud services are deployed in the China (Beijing) region, only on-premises networks connected to VBRs in the China (Beijing) region can access the cloud services.
    * *   **ResolveAndRouteServiceInCen** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call **DescribeRouteServicesInCen** to query the status of a cloud service.
    *     *   If a cloud service is in the **Creating** state, the connection to the cloud service is being created. In this case, you can query the cloud service but cannot perform other operations.
    *     *   If a cloud service is in the **Active** state, the connection to the cloud service is created.
    *     *   If a cloud service is in the **Failed** state, the connection to the cloud service failed.
    * # [](#)Prerequisites
    * Before you call this operation, make sure that the following conditions are met:
    * *   The VBR or CCN instance to which your on-premises network is connected is attached to a CEN instance.
    * *   A VPC that is deployed in the same region as the cloud service is attached to the CEN instance. For more information, see [AttachCenChildInstance](~~65902~~).
    *
    * @param request ResolveAndRouteServiceInCenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ResolveAndRouteServiceInCenResponse
   */
  async resolveAndRouteServiceInCenWithOptions(request: ResolveAndRouteServiceInCenRequest, runtime: $Util.RuntimeOptions): Promise<ResolveAndRouteServiceInCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessRegionIds)) {
      query["AccessRegionIds"] = request.accessRegionIds;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.host)) {
      query["Host"] = request.host;
    }

    if (!Util.isUnset(request.hostRegionId)) {
      query["HostRegionId"] = request.hostRegionId;
    }

    if (!Util.isUnset(request.hostVpcId)) {
      query["HostVpcId"] = request.hostVpcId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResolveAndRouteServiceInCen",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResolveAndRouteServiceInCenResponse>(await this.callApi(params, req, runtime), new ResolveAndRouteServiceInCenResponse({}));
  }

  /**
    * Cloud services refer to Alibaba Cloud services that use the 100.64.0.0/10 CIDR block to provide services. These cloud services include Object Storage Service (OSS), Simple Log Service, and Data Transmission Service (DTS). If your on-premises network needs to access a cloud service, you must attach the virtual border router (VBR) or Cloud Connect Network (CCN) instance that is connected to your on-premises network to a Cloud Enterprise Network (CEN) instance. In addition, you must attach a virtual private cloud (VPC) that is deployed in the same region as the cloud service to the CEN instance. This way, your on-premises network can connect to the VPC that is deployed in the same region as the cloud service and access the cloud service through the VPC.
    * *   You can call this operation only for a Basic Edition transit router. An on-premises network associated with a VBR can use CEN to access only a cloud service that is deployed in the same region.
    *     For example, if cloud services are deployed in the China (Beijing) region, only on-premises networks connected to VBRs in the China (Beijing) region can access the cloud services.
    * *   **ResolveAndRouteServiceInCen** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call **DescribeRouteServicesInCen** to query the status of a cloud service.
    *     *   If a cloud service is in the **Creating** state, the connection to the cloud service is being created. In this case, you can query the cloud service but cannot perform other operations.
    *     *   If a cloud service is in the **Active** state, the connection to the cloud service is created.
    *     *   If a cloud service is in the **Failed** state, the connection to the cloud service failed.
    * # [](#)Prerequisites
    * Before you call this operation, make sure that the following conditions are met:
    * *   The VBR or CCN instance to which your on-premises network is connected is attached to a CEN instance.
    * *   A VPC that is deployed in the same region as the cloud service is attached to the CEN instance. For more information, see [AttachCenChildInstance](~~65902~~).
    *
    * @param request ResolveAndRouteServiceInCenRequest
    * @return ResolveAndRouteServiceInCenResponse
   */
  async resolveAndRouteServiceInCen(request: ResolveAndRouteServiceInCenRequest): Promise<ResolveAndRouteServiceInCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resolveAndRouteServiceInCenWithOptions(request, runtime);
  }

  /**
    * `RevokeInstanceFromTransitRouter` disallows transit routers only from connecting to virtual private clouds (VPCs), virtual border routers (VBRs), and IPsec-VPN connections.
    * If you want to disallow transit routers from connecting to Cloud Connect Network (CCN) instances, call the [RevokeInstanceFromCbn](~~126142~~) operation.
    * ## [](#)Prerequisite
    * Before you call `RevokeInstanceFromTransitRouter`, you must detach the network instances from the transit router.
    * *   For more information about how to detach VPCs from an Enterprise Edition transit router, see [DeleteTransitRouterVpcAttachment](~~261220~~).
    * *   For more information about how to detach VBRs from an Enterprise Edition transit router, see [DeleteTransitRouterVbrAttachment](~~261223~~).
    * *   For more information about how to detach IPsec-VPN connections from an Enterprise Edition transit router, see [DeleteTransitRouterVpnAttachment](~~443992~~).
    * *   For more information about how to detach network instances from a Basic Edition transit router, see [DetachCenChildInstance](~~65915~~).
    *
    * @param request RevokeInstanceFromTransitRouterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RevokeInstanceFromTransitRouterResponse
   */
  async revokeInstanceFromTransitRouterWithOptions(request: RevokeInstanceFromTransitRouterRequest, runtime: $Util.RuntimeOptions): Promise<RevokeInstanceFromTransitRouterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeInstanceFromTransitRouter",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeInstanceFromTransitRouterResponse>(await this.callApi(params, req, runtime), new RevokeInstanceFromTransitRouterResponse({}));
  }

  /**
    * `RevokeInstanceFromTransitRouter` disallows transit routers only from connecting to virtual private clouds (VPCs), virtual border routers (VBRs), and IPsec-VPN connections.
    * If you want to disallow transit routers from connecting to Cloud Connect Network (CCN) instances, call the [RevokeInstanceFromCbn](~~126142~~) operation.
    * ## [](#)Prerequisite
    * Before you call `RevokeInstanceFromTransitRouter`, you must detach the network instances from the transit router.
    * *   For more information about how to detach VPCs from an Enterprise Edition transit router, see [DeleteTransitRouterVpcAttachment](~~261220~~).
    * *   For more information about how to detach VBRs from an Enterprise Edition transit router, see [DeleteTransitRouterVbrAttachment](~~261223~~).
    * *   For more information about how to detach IPsec-VPN connections from an Enterprise Edition transit router, see [DeleteTransitRouterVpnAttachment](~~443992~~).
    * *   For more information about how to detach network instances from a Basic Edition transit router, see [DetachCenChildInstance](~~65915~~).
    *
    * @param request RevokeInstanceFromTransitRouterRequest
    * @return RevokeInstanceFromTransitRouterResponse
   */
  async revokeInstanceFromTransitRouter(request: RevokeInstanceFromTransitRouterRequest): Promise<RevokeInstanceFromTransitRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeInstanceFromTransitRouterWithOptions(request, runtime);
  }

  /**
    * Alibaba Cloud DNS PrivateZone (PrivateZone) is an Alibaba Cloud private domain name resolution and management service based on Virtual Private Cloud (VPC). After you attach virtual border routers (VBRs) and Cloud Connect Network (CCN) instances to a Cloud Enterprise Network (CEN) instance, you can enable the on-premises networks connected to the VBRs and CCN instances to access PrivateZone through the CEN instance. 
    * #### Usage notes
    * - The on-premises networks connected to VBRs or CCN instances must be deployed in the same region as the PrivateZone service. For example, if the PrivateZone service is deployed in the China (Beijing) region, only on-premises networks connected to VBRs or CCN instances in the China (Beijing) region can access the PrivateZone service. 
    * - **RoutePrivateZoneInCenToVpc** is an asynchronous operation. After you send a request, the **request ID** is returned but the operation is still being performed in the system background. You can call **DescribeCenPrivateZoneRoutes** to query the status of PrivateZone. 
    *     - If PrivateZone is in the **Creating** state, access to PrivateZone is being configured. In this case, you can query PrivateZone configurations but cannot perform other operations. 
    *     - If PrivateZone is in the **Active** state, access to PrivateZone is enabled. 
    *     - If PrivateZone is in the **Failed** state, configurations of access to PrivateZone failed. 
    * #### Prerequisites
    * Before you call **RoutePrivateZoneInCenToVpc**, make sure that the following conditions are met:
    * - PrivateZone is deployed. For more information, see [PrivateZone quick start](~~64627~~).
    * - The following network instances are attached to the same CEN instance: the VPC that is associated with the PrivateZone service, and the VBR and CCN instance that want to access the PrivateZone service. For more information, see [AttachCenChildInstance](~~468684~~). 
    * - If your on-premises network uses a CCN instance to connect to Alibaba Cloud and the account that owns the CCN instance is different from the account that owns the VPC or CEN instance, you must grant the CCN instance required permissions. For more information, see [Grant permissions to CCN](~~181654~~).
    *
    * @param request RoutePrivateZoneInCenToVpcRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RoutePrivateZoneInCenToVpcResponse
   */
  async routePrivateZoneInCenToVpcWithOptions(request: RoutePrivateZoneInCenToVpcRequest, runtime: $Util.RuntimeOptions): Promise<RoutePrivateZoneInCenToVpcResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessRegionId)) {
      query["AccessRegionId"] = request.accessRegionId;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.hostRegionId)) {
      query["HostRegionId"] = request.hostRegionId;
    }

    if (!Util.isUnset(request.hostVpcId)) {
      query["HostVpcId"] = request.hostVpcId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RoutePrivateZoneInCenToVpc",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RoutePrivateZoneInCenToVpcResponse>(await this.callApi(params, req, runtime), new RoutePrivateZoneInCenToVpcResponse({}));
  }

  /**
    * Alibaba Cloud DNS PrivateZone (PrivateZone) is an Alibaba Cloud private domain name resolution and management service based on Virtual Private Cloud (VPC). After you attach virtual border routers (VBRs) and Cloud Connect Network (CCN) instances to a Cloud Enterprise Network (CEN) instance, you can enable the on-premises networks connected to the VBRs and CCN instances to access PrivateZone through the CEN instance. 
    * #### Usage notes
    * - The on-premises networks connected to VBRs or CCN instances must be deployed in the same region as the PrivateZone service. For example, if the PrivateZone service is deployed in the China (Beijing) region, only on-premises networks connected to VBRs or CCN instances in the China (Beijing) region can access the PrivateZone service. 
    * - **RoutePrivateZoneInCenToVpc** is an asynchronous operation. After you send a request, the **request ID** is returned but the operation is still being performed in the system background. You can call **DescribeCenPrivateZoneRoutes** to query the status of PrivateZone. 
    *     - If PrivateZone is in the **Creating** state, access to PrivateZone is being configured. In this case, you can query PrivateZone configurations but cannot perform other operations. 
    *     - If PrivateZone is in the **Active** state, access to PrivateZone is enabled. 
    *     - If PrivateZone is in the **Failed** state, configurations of access to PrivateZone failed. 
    * #### Prerequisites
    * Before you call **RoutePrivateZoneInCenToVpc**, make sure that the following conditions are met:
    * - PrivateZone is deployed. For more information, see [PrivateZone quick start](~~64627~~).
    * - The following network instances are attached to the same CEN instance: the VPC that is associated with the PrivateZone service, and the VBR and CCN instance that want to access the PrivateZone service. For more information, see [AttachCenChildInstance](~~468684~~). 
    * - If your on-premises network uses a CCN instance to connect to Alibaba Cloud and the account that owns the CCN instance is different from the account that owns the VPC or CEN instance, you must grant the CCN instance required permissions. For more information, see [Grant permissions to CCN](~~181654~~).
    *
    * @param request RoutePrivateZoneInCenToVpcRequest
    * @return RoutePrivateZoneInCenToVpcResponse
   */
  async routePrivateZoneInCenToVpc(request: RoutePrivateZoneInCenToVpcRequest): Promise<RoutePrivateZoneInCenToVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.routePrivateZoneInCenToVpcWithOptions(request, runtime);
  }

  async setCenInterRegionBandwidthLimitWithOptions(request: SetCenInterRegionBandwidthLimitRequest, runtime: $Util.RuntimeOptions): Promise<SetCenInterRegionBandwidthLimitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidthLimit)) {
      query["BandwidthLimit"] = request.bandwidthLimit;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.localRegionId)) {
      query["LocalRegionId"] = request.localRegionId;
    }

    if (!Util.isUnset(request.oppositeRegionId)) {
      query["OppositeRegionId"] = request.oppositeRegionId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetCenInterRegionBandwidthLimit",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetCenInterRegionBandwidthLimitResponse>(await this.callApi(params, req, runtime), new SetCenInterRegionBandwidthLimitResponse({}));
  }

  async setCenInterRegionBandwidthLimit(request: SetCenInterRegionBandwidthLimitRequest): Promise<SetCenInterRegionBandwidthLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCenInterRegionBandwidthLimitWithOptions(request, runtime);
  }

  /**
    * *   Each tag consists of a tag key and a tag value. When you add a tag, you must specify the tag key and tag value.
    * *   If you want to add multiple tags to a Cloud Enterprise Network (CEN) instance, each tag key must be unique.
    * *   You can add at most 20 tags to a CEN instance.
    *
    * @param request TagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2017-09-12",
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
    * *   Each tag consists of a tag key and a tag value. When you add a tag, you must specify the tag key and tag value.
    * *   If you want to add multiple tags to a Cloud Enterprise Network (CEN) instance, each tag key must be unique.
    * *   You can add at most 20 tags to a CEN instance.
    *
    * @param request TagResourcesRequest
    * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async tempUpgradeCenBandwidthPackageSpecWithOptions(request: TempUpgradeCenBandwidthPackageSpecRequest, runtime: $Util.RuntimeOptions): Promise<TempUpgradeCenBandwidthPackageSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TempUpgradeCenBandwidthPackageSpec",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TempUpgradeCenBandwidthPackageSpecResponse>(await this.callApi(params, req, runtime), new TempUpgradeCenBandwidthPackageSpecResponse({}));
  }

  async tempUpgradeCenBandwidthPackageSpec(request: TempUpgradeCenBandwidthPackageSpecRequest): Promise<TempUpgradeCenBandwidthPackageSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tempUpgradeCenBandwidthPackageSpecWithOptions(request, runtime);
  }

  /**
    * No inter-region connections are configured in the bandwidth plan. For more information about how to delete inter-region connections, see [SetCenInterRegionBandwidthLimit](~~65942~~).
    *
    * @param request UnassociateCenBandwidthPackageRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UnassociateCenBandwidthPackageResponse
   */
  async unassociateCenBandwidthPackageWithOptions(request: UnassociateCenBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateCenBandwidthPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnassociateCenBandwidthPackage",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnassociateCenBandwidthPackageResponse>(await this.callApi(params, req, runtime), new UnassociateCenBandwidthPackageResponse({}));
  }

  /**
    * No inter-region connections are configured in the bandwidth plan. For more information about how to delete inter-region connections, see [SetCenInterRegionBandwidthLimit](~~65942~~).
    *
    * @param request UnassociateCenBandwidthPackageRequest
    * @return UnassociateCenBandwidthPackageResponse
   */
  async unassociateCenBandwidthPackage(request: UnassociateCenBandwidthPackageRequest): Promise<UnassociateCenBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateCenBandwidthPackageWithOptions(request, runtime);
  }

  async unroutePrivateZoneInCenToVpcWithOptions(request: UnroutePrivateZoneInCenToVpcRequest, runtime: $Util.RuntimeOptions): Promise<UnroutePrivateZoneInCenToVpcResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessRegionId)) {
      query["AccessRegionId"] = request.accessRegionId;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnroutePrivateZoneInCenToVpc",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnroutePrivateZoneInCenToVpcResponse>(await this.callApi(params, req, runtime), new UnroutePrivateZoneInCenToVpcResponse({}));
  }

  async unroutePrivateZoneInCenToVpc(request: UnroutePrivateZoneInCenToVpcRequest): Promise<UnroutePrivateZoneInCenToVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unroutePrivateZoneInCenToVpcWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateCenInterRegionTrafficQosPolicyAttributeWithOptions(request: UpdateCenInterRegionTrafficQosPolicyAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCenInterRegionTrafficQosPolicyAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficQosPolicyDescription)) {
      query["TrafficQosPolicyDescription"] = request.trafficQosPolicyDescription;
    }

    if (!Util.isUnset(request.trafficQosPolicyId)) {
      query["TrafficQosPolicyId"] = request.trafficQosPolicyId;
    }

    if (!Util.isUnset(request.trafficQosPolicyName)) {
      query["TrafficQosPolicyName"] = request.trafficQosPolicyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCenInterRegionTrafficQosPolicyAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCenInterRegionTrafficQosPolicyAttributeResponse>(await this.callApi(params, req, runtime), new UpdateCenInterRegionTrafficQosPolicyAttributeResponse({}));
  }

  async updateCenInterRegionTrafficQosPolicyAttribute(request: UpdateCenInterRegionTrafficQosPolicyAttributeRequest): Promise<UpdateCenInterRegionTrafficQosPolicyAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCenInterRegionTrafficQosPolicyAttributeWithOptions(request, runtime);
  }

  async updateCenInterRegionTrafficQosQueueAttributeWithOptions(request: UpdateCenInterRegionTrafficQosQueueAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCenInterRegionTrafficQosQueueAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.dscps)) {
      query["Dscps"] = request.dscps;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qosQueueDescription)) {
      query["QosQueueDescription"] = request.qosQueueDescription;
    }

    if (!Util.isUnset(request.qosQueueId)) {
      query["QosQueueId"] = request.qosQueueId;
    }

    if (!Util.isUnset(request.qosQueueName)) {
      query["QosQueueName"] = request.qosQueueName;
    }

    if (!Util.isUnset(request.remainBandwidthPercent)) {
      query["RemainBandwidthPercent"] = request.remainBandwidthPercent;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCenInterRegionTrafficQosQueueAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCenInterRegionTrafficQosQueueAttributeResponse>(await this.callApi(params, req, runtime), new UpdateCenInterRegionTrafficQosQueueAttributeResponse({}));
  }

  async updateCenInterRegionTrafficQosQueueAttribute(request: UpdateCenInterRegionTrafficQosQueueAttributeRequest): Promise<UpdateCenInterRegionTrafficQosQueueAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCenInterRegionTrafficQosQueueAttributeWithOptions(request, runtime);
  }

  async updateTrafficMarkingPolicyAttributeWithOptions(request: UpdateTrafficMarkingPolicyAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTrafficMarkingPolicyAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addTrafficMatchRules)) {
      query["AddTrafficMatchRules"] = request.addTrafficMatchRules;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deleteTrafficMatchRules)) {
      query["DeleteTrafficMatchRules"] = request.deleteTrafficMatchRules;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trafficMarkingPolicyDescription)) {
      query["TrafficMarkingPolicyDescription"] = request.trafficMarkingPolicyDescription;
    }

    if (!Util.isUnset(request.trafficMarkingPolicyId)) {
      query["TrafficMarkingPolicyId"] = request.trafficMarkingPolicyId;
    }

    if (!Util.isUnset(request.trafficMarkingPolicyName)) {
      query["TrafficMarkingPolicyName"] = request.trafficMarkingPolicyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTrafficMarkingPolicyAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTrafficMarkingPolicyAttributeResponse>(await this.callApi(params, req, runtime), new UpdateTrafficMarkingPolicyAttributeResponse({}));
  }

  async updateTrafficMarkingPolicyAttribute(request: UpdateTrafficMarkingPolicyAttributeRequest): Promise<UpdateTrafficMarkingPolicyAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTrafficMarkingPolicyAttributeWithOptions(request, runtime);
  }

  /**
    * **UpdateTransitRouter** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouters** operation to query the status of a transit router.
    * *   If a transit router is in the **Modifying** state, the configuration of the transit router is being modified. You can query the transit router but cannot perform other operations.
    * *   If a transit router is in the **Active** state, the configuration of the transit router is modified.
    *
    * @param request UpdateTransitRouterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateTransitRouterResponse
   */
  async updateTransitRouterWithOptions(request: UpdateTransitRouterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTransitRouterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterDescription)) {
      query["TransitRouterDescription"] = request.transitRouterDescription;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.transitRouterName)) {
      query["TransitRouterName"] = request.transitRouterName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTransitRouter",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTransitRouterResponse>(await this.callApi(params, req, runtime), new UpdateTransitRouterResponse({}));
  }

  /**
    * **UpdateTransitRouter** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouters** operation to query the status of a transit router.
    * *   If a transit router is in the **Modifying** state, the configuration of the transit router is being modified. You can query the transit router but cannot perform other operations.
    * *   If a transit router is in the **Active** state, the configuration of the transit router is modified.
    *
    * @param request UpdateTransitRouterRequest
    * @return UpdateTransitRouterResponse
   */
  async updateTransitRouter(request: UpdateTransitRouterRequest): Promise<UpdateTransitRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTransitRouterWithOptions(request, runtime);
  }

  /**
    * **UpdateTransitRouterPeerAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of an inter-region connection.
    * *   If an inter-region connection is in the **Modifying** state, the inter-region connection is being modified. You can query the inter-region connection but cannot perform other operations.
    * *   If an inter-region connection is in the **Attached** state, the inter-region connection is modified.
    *
    * @param request UpdateTransitRouterPeerAttachmentAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateTransitRouterPeerAttachmentAttributeResponse
   */
  async updateTransitRouterPeerAttachmentAttributeWithOptions(request: UpdateTransitRouterPeerAttachmentAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTransitRouterPeerAttachmentAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.bandwidthType)) {
      query["BandwidthType"] = request.bandwidthType;
    }

    if (!Util.isUnset(request.cenBandwidthPackageId)) {
      query["CenBandwidthPackageId"] = request.cenBandwidthPackageId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.defaultLinkType)) {
      query["DefaultLinkType"] = request.defaultLinkType;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTransitRouterPeerAttachmentAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTransitRouterPeerAttachmentAttributeResponse>(await this.callApi(params, req, runtime), new UpdateTransitRouterPeerAttachmentAttributeResponse({}));
  }

  /**
    * **UpdateTransitRouterPeerAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of an inter-region connection.
    * *   If an inter-region connection is in the **Modifying** state, the inter-region connection is being modified. You can query the inter-region connection but cannot perform other operations.
    * *   If an inter-region connection is in the **Attached** state, the inter-region connection is modified.
    *
    * @param request UpdateTransitRouterPeerAttachmentAttributeRequest
    * @return UpdateTransitRouterPeerAttachmentAttributeResponse
   */
  async updateTransitRouterPeerAttachmentAttribute(request: UpdateTransitRouterPeerAttachmentAttributeRequest): Promise<UpdateTransitRouterPeerAttachmentAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTransitRouterPeerAttachmentAttributeWithOptions(request, runtime);
  }

  async updateTransitRouterRouteEntryWithOptions(request: UpdateTransitRouterRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTransitRouterRouteEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryDescription)) {
      query["TransitRouterRouteEntryDescription"] = request.transitRouterRouteEntryDescription;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryId)) {
      query["TransitRouterRouteEntryId"] = request.transitRouterRouteEntryId;
    }

    if (!Util.isUnset(request.transitRouterRouteEntryName)) {
      query["TransitRouterRouteEntryName"] = request.transitRouterRouteEntryName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTransitRouterRouteEntry",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTransitRouterRouteEntryResponse>(await this.callApi(params, req, runtime), new UpdateTransitRouterRouteEntryResponse({}));
  }

  async updateTransitRouterRouteEntry(request: UpdateTransitRouterRouteEntryRequest): Promise<UpdateTransitRouterRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTransitRouterRouteEntryWithOptions(request, runtime);
  }

  async updateTransitRouterRouteTableWithOptions(request: UpdateTransitRouterRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTransitRouterRouteTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeTableOptions)) {
      query["RouteTableOptions"] = request.routeTableOptions;
    }

    if (!Util.isUnset(request.transitRouterRouteTableDescription)) {
      query["TransitRouterRouteTableDescription"] = request.transitRouterRouteTableDescription;
    }

    if (!Util.isUnset(request.transitRouterRouteTableId)) {
      query["TransitRouterRouteTableId"] = request.transitRouterRouteTableId;
    }

    if (!Util.isUnset(request.transitRouterRouteTableName)) {
      query["TransitRouterRouteTableName"] = request.transitRouterRouteTableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTransitRouterRouteTable",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTransitRouterRouteTableResponse>(await this.callApi(params, req, runtime), new UpdateTransitRouterRouteTableResponse({}));
  }

  async updateTransitRouterRouteTable(request: UpdateTransitRouterRouteTableRequest): Promise<UpdateTransitRouterRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTransitRouterRouteTableWithOptions(request, runtime);
  }

  /**
    * **UpdateTransitRouterVbrAttachmentAttribute** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVbrAttachments** operation to query the status of a VBR connection.
    * *   If a VBR connection is in the **Modifying** state, the VBR connection is being modified. You can query the VBR connection but cannot perform other operations.
    * *   If the VBR connection is in the **Attached** state, the VBR connection is modified.
    *
    * @param request UpdateTransitRouterVbrAttachmentAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateTransitRouterVbrAttachmentAttributeResponse
   */
  async updateTransitRouterVbrAttachmentAttributeWithOptions(request: UpdateTransitRouterVbrAttachmentAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTransitRouterVbrAttachmentAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTransitRouterVbrAttachmentAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTransitRouterVbrAttachmentAttributeResponse>(await this.callApi(params, req, runtime), new UpdateTransitRouterVbrAttachmentAttributeResponse({}));
  }

  /**
    * **UpdateTransitRouterVbrAttachmentAttribute** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVbrAttachments** operation to query the status of a VBR connection.
    * *   If a VBR connection is in the **Modifying** state, the VBR connection is being modified. You can query the VBR connection but cannot perform other operations.
    * *   If the VBR connection is in the **Attached** state, the VBR connection is modified.
    *
    * @param request UpdateTransitRouterVbrAttachmentAttributeRequest
    * @return UpdateTransitRouterVbrAttachmentAttributeResponse
   */
  async updateTransitRouterVbrAttachmentAttribute(request: UpdateTransitRouterVbrAttachmentAttributeRequest): Promise<UpdateTransitRouterVbrAttachmentAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTransitRouterVbrAttachmentAttributeWithOptions(request, runtime);
  }

  /**
    * **UpdateTransitRouterVpcAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVpcAttachments** operation to query the status of a VPC connection.
    * *   If a VPC connection is in the **Modifying** state, the VPC connection is being modified. You can query the VPC connection but cannot perform other operations.
    * *   If a VPC connection is in the **Attached** state, the VPC connection is modified.
    *
    * @param request UpdateTransitRouterVpcAttachmentAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateTransitRouterVpcAttachmentAttributeResponse
   */
  async updateTransitRouterVpcAttachmentAttributeWithOptions(request: UpdateTransitRouterVpcAttachmentAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTransitRouterVpcAttachmentAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTransitRouterVpcAttachmentAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTransitRouterVpcAttachmentAttributeResponse>(await this.callApi(params, req, runtime), new UpdateTransitRouterVpcAttachmentAttributeResponse({}));
  }

  /**
    * **UpdateTransitRouterVpcAttachmentAttribute** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVpcAttachments** operation to query the status of a VPC connection.
    * *   If a VPC connection is in the **Modifying** state, the VPC connection is being modified. You can query the VPC connection but cannot perform other operations.
    * *   If a VPC connection is in the **Attached** state, the VPC connection is modified.
    *
    * @param request UpdateTransitRouterVpcAttachmentAttributeRequest
    * @return UpdateTransitRouterVpcAttachmentAttributeResponse
   */
  async updateTransitRouterVpcAttachmentAttribute(request: UpdateTransitRouterVpcAttachmentAttributeRequest): Promise<UpdateTransitRouterVpcAttachmentAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTransitRouterVpcAttachmentAttributeWithOptions(request, runtime);
  }

  /**
    * *   When you add a zone and a vSwitch for a VPC connection, make sure that the vSwitch has at least one idle IP address. When you modify the zones and vSwitches of a VPC connection, the Enterprise Edition transit router creates an elastic network interface (ENI) in the vSwitch. The ENI occupies one IP address in the vSwitch. The ENI forwards traffic between the VPC and the Enterprise Edition transit router.
    * *   **UpdateTransitRouterVpcAttachmentZones** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVpcAttachments** operation to query the status of a VPC connection.
    *     *   If a VPC connection is in the **Modifying** state, the VPC connection is being modified. You can query the VPC connection but cannot perform other operations.
    *     *   If a VPC connection is in the **Attached** state, the VPC connection is modified.
    *
    * @param request UpdateTransitRouterVpcAttachmentZonesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateTransitRouterVpcAttachmentZonesResponse
   */
  async updateTransitRouterVpcAttachmentZonesWithOptions(request: UpdateTransitRouterVpcAttachmentZonesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTransitRouterVpcAttachmentZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addZoneMappings)) {
      query["AddZoneMappings"] = request.addZoneMappings;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.removeZoneMappings)) {
      query["RemoveZoneMappings"] = request.removeZoneMappings;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTransitRouterVpcAttachmentZones",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTransitRouterVpcAttachmentZonesResponse>(await this.callApi(params, req, runtime), new UpdateTransitRouterVpcAttachmentZonesResponse({}));
  }

  /**
    * *   When you add a zone and a vSwitch for a VPC connection, make sure that the vSwitch has at least one idle IP address. When you modify the zones and vSwitches of a VPC connection, the Enterprise Edition transit router creates an elastic network interface (ENI) in the vSwitch. The ENI occupies one IP address in the vSwitch. The ENI forwards traffic between the VPC and the Enterprise Edition transit router.
    * *   **UpdateTransitRouterVpcAttachmentZones** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVpcAttachments** operation to query the status of a VPC connection.
    *     *   If a VPC connection is in the **Modifying** state, the VPC connection is being modified. You can query the VPC connection but cannot perform other operations.
    *     *   If a VPC connection is in the **Attached** state, the VPC connection is modified.
    *
    * @param request UpdateTransitRouterVpcAttachmentZonesRequest
    * @return UpdateTransitRouterVpcAttachmentZonesResponse
   */
  async updateTransitRouterVpcAttachmentZones(request: UpdateTransitRouterVpcAttachmentZonesRequest): Promise<UpdateTransitRouterVpcAttachmentZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTransitRouterVpcAttachmentZonesWithOptions(request, runtime);
  }

  async updateTransitRouterVpnAttachmentAttributeWithOptions(request: UpdateTransitRouterVpnAttachmentAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTransitRouterVpnAttachmentAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPublishRouteEnabled)) {
      query["AutoPublishRouteEnabled"] = request.autoPublishRouteEnabled;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentDescription)) {
      query["TransitRouterAttachmentDescription"] = request.transitRouterAttachmentDescription;
    }

    if (!Util.isUnset(request.transitRouterAttachmentId)) {
      query["TransitRouterAttachmentId"] = request.transitRouterAttachmentId;
    }

    if (!Util.isUnset(request.transitRouterAttachmentName)) {
      query["TransitRouterAttachmentName"] = request.transitRouterAttachmentName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTransitRouterVpnAttachmentAttribute",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTransitRouterVpnAttachmentAttributeResponse>(await this.callApi(params, req, runtime), new UpdateTransitRouterVpnAttachmentAttributeResponse({}));
  }

  async updateTransitRouterVpnAttachmentAttribute(request: UpdateTransitRouterVpnAttachmentAttributeRequest): Promise<UpdateTransitRouterVpnAttachmentAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTransitRouterVpnAttachmentAttributeWithOptions(request, runtime);
  }

  async withdrawPublishedRouteEntriesWithOptions(request: WithdrawPublishedRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<WithdrawPublishedRouteEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.childInstanceId)) {
      query["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceRegionId)) {
      query["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!Util.isUnset(request.childInstanceRouteTableId)) {
      query["ChildInstanceRouteTableId"] = request.childInstanceRouteTableId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      query["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "WithdrawPublishedRouteEntries",
      version: "2017-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<WithdrawPublishedRouteEntriesResponse>(await this.callApi(params, req, runtime), new WithdrawPublishedRouteEntriesResponse({}));
  }

  async withdrawPublishedRouteEntries(request: WithdrawPublishedRouteEntriesRequest): Promise<WithdrawPublishedRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.withdrawPublishedRouteEntriesWithOptions(request, runtime);
  }

}
