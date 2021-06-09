// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GrantSagInstanceToVbrRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  vbrUid?: number;
  vbrInstanceId?: string;
  vbrRegionId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      vbrUid: 'VbrUid',
      vbrInstanceId: 'VbrInstanceId',
      vbrRegionId: 'VbrRegionId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      vbrUid: 'number',
      vbrInstanceId: 'string',
      vbrRegionId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantSagInstanceToVbrResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantSagInstanceToVbrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GrantSagInstanceToVbrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GrantSagInstanceToVbrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagTrafficTopNRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagTrafficTopNResponseBody extends $tea.Model {
  requestId?: string;
  trafficTopN?: DescribeSagTrafficTopNResponseBodyTrafficTopN[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficTopN: 'TrafficTopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficTopN: { 'type': 'array', 'itemType': DescribeSagTrafficTopNResponseBodyTrafficTopN },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagTrafficTopNResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagTrafficTopNResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagTrafficTopNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagVbrRulesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  vbrInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      vbrInstanceId: 'VbrInstanceId',
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
      regionId: 'string',
      smartAGId: 'string',
      vbrInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagVbrRulesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  grantRules?: DescribeGrantSagVbrRulesResponseBodyGrantRules;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      grantRules: 'GrantRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      grantRules: DescribeGrantSagVbrRulesResponseBodyGrantRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagVbrRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGrantSagVbrRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGrantSagVbrRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagStaticRouteListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagStaticRouteListResponseBody extends $tea.Model {
  requestId?: string;
  staticRoutes?: DescribeSagStaticRouteListResponseBodyStaticRoutes[];
  taskStates?: DescribeSagStaticRouteListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      staticRoutes: 'StaticRoutes',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      staticRoutes: { 'type': 'array', 'itemType': DescribeSagStaticRouteListResponseBodyStaticRoutes },
      taskStates: { 'type': 'array', 'itemType': DescribeSagStaticRouteListResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagStaticRouteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagStaticRouteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagStaticRouteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteListResponseBody extends $tea.Model {
  requestId?: string;
  routes?: DescribeSagRouteListResponseBodyRoutes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routes: 'Routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routes: { 'type': 'array', 'itemType': DescribeSagRouteListResponseBodyRoutes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagRouteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagRouteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBasedRoutingsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  pageSize?: number;
  pageNumber?: number;
  smartAGId?: string;
  pbrInstanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      smartAGId: 'SmartAGId',
      pbrInstanceId: 'PbrInstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      smartAGId: 'string',
      pbrInstanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBasedRoutingsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  policyBasedRoutings?: DescribePolicyBasedRoutingsResponseBodyPolicyBasedRoutings;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      policyBasedRoutings: 'PolicyBasedRoutings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      policyBasedRoutings: DescribePolicyBasedRoutingsResponseBodyPolicyBasedRoutings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBasedRoutingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePolicyBasedRoutingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePolicyBasedRoutingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeAccessPointNetworkQualityRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  accessPointIds?: number[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      accessPointIds: 'AccessPointIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      accessPointIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeAccessPointNetworkQualityResponseBody extends $tea.Model {
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

export class ProbeAccessPointNetworkQualityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ProbeAccessPointNetworkQualityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ProbeAccessPointNetworkQualityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagGlobalRouteProtocolRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  routeProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      routeProtocol: 'RouteProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      routeProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagGlobalRouteProtocolResponseBody extends $tea.Model {
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

export class ModifySagGlobalRouteProtocolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagGlobalRouteProtocolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagGlobalRouteProtocolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteDistributionStrategyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  destCidrBlock?: string;
  sourceType?: string;
  routeSource?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      destCidrBlock: 'DestCidrBlock',
      sourceType: 'SourceType',
      routeSource: 'RouteSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      destCidrBlock: 'string',
      sourceType: 'string',
      routeSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteDistributionStrategyResponseBody extends $tea.Model {
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

export class DeleteRouteDistributionStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRouteDistributionStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRouteDistributionStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosCarRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  description?: string;
  regionId?: string;
  qosId?: string;
  priority?: number;
  limitType?: string;
  minBandwidthAbs?: number;
  maxBandwidthAbs?: number;
  minBandwidthPercent?: number;
  maxBandwidthPercent?: number;
  percentSourceType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      description: 'Description',
      regionId: 'RegionId',
      qosId: 'QosId',
      priority: 'Priority',
      limitType: 'LimitType',
      minBandwidthAbs: 'MinBandwidthAbs',
      maxBandwidthAbs: 'MaxBandwidthAbs',
      minBandwidthPercent: 'MinBandwidthPercent',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      percentSourceType: 'PercentSourceType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      description: 'string',
      regionId: 'string',
      qosId: 'string',
      priority: 'number',
      limitType: 'string',
      minBandwidthAbs: 'number',
      maxBandwidthAbs: 'number',
      minBandwidthPercent: 'number',
      maxBandwidthPercent: 'number',
      percentSourceType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosCarResponseBody extends $tea.Model {
  minBandwidthAbs?: number;
  description?: string;
  requestId?: string;
  qosCarId?: string;
  maxBandwidthAbs?: number;
  maxBandwidthPercent?: number;
  priority?: number;
  qosId?: string;
  percentSourceType?: string;
  minBandwidthPercent?: number;
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      minBandwidthAbs: 'MinBandwidthAbs',
      description: 'Description',
      requestId: 'RequestId',
      qosCarId: 'QosCarId',
      maxBandwidthAbs: 'MaxBandwidthAbs',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      priority: 'Priority',
      qosId: 'QosId',
      percentSourceType: 'PercentSourceType',
      minBandwidthPercent: 'MinBandwidthPercent',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minBandwidthAbs: 'number',
      description: 'string',
      requestId: 'string',
      qosCarId: 'string',
      maxBandwidthAbs: 'number',
      maxBandwidthPercent: 'number',
      priority: 'number',
      qosId: 'string',
      percentSourceType: 'string',
      minBandwidthPercent: 'number',
      limitType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosCarResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQosCarResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQosCarResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGDpiAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  dpiEnabled?: boolean;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      dpiEnabled: 'DpiEnabled',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      dpiEnabled: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGDpiAttributeResponseBody extends $tea.Model {
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

export class UpdateSmartAGDpiAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSmartAGDpiAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSmartAGDpiAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearSagRouteableAddressRequest extends $tea.Model {
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  sagId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      sagId: 'SagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      sagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearSagRouteableAddressResponseBody extends $tea.Model {
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

export class ClearSagRouteableAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClearSagRouteableAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClearSagRouteableAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateQosRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  qosId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      qosId: 'QosId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      qosId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateQosResponseBody extends $tea.Model {
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

export class AssociateQosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateQosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateQosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySAGAdminPasswordRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySAGAdminPasswordResponseBody extends $tea.Model {
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

export class ModifySAGAdminPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySAGAdminPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySAGAdminPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeSmartAccessGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  regionId?: string;
  bandWidthSpec?: number;
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      regionId: 'RegionId',
      bandWidthSpec: 'BandWidthSpec',
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      regionId: 'string',
      bandWidthSpec: 'number',
      autoPay: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeSmartAccessGatewayResponseBody extends $tea.Model {
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

export class DowngradeSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DowngradeSmartAccessGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DowngradeSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortRouteProtocolListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortRouteProtocolListResponseBody extends $tea.Model {
  requestId?: string;
  ports?: DescribeSagPortRouteProtocolListResponseBodyPorts[];
  taskStates?: DescribeSagPortRouteProtocolListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ports: 'Ports',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ports: { 'type': 'array', 'itemType': DescribeSagPortRouteProtocolListResponseBodyPorts },
      taskStates: { 'type': 'array', 'itemType': DescribeSagPortRouteProtocolListResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortRouteProtocolListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagPortRouteProtocolListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagPortRouteProtocolListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanSnatRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanSnatResponseBody extends $tea.Model {
  requestId?: string;
  snat?: string;
  taskStates?: DescribeSagWanSnatResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snat: 'Snat',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snat: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagWanSnatResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanSnatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagWanSnatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagWanSnatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagUserDnsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagUserDnsResponseBody extends $tea.Model {
  requestId?: string;
  slaveDns?: string;
  taskStates?: DescribeSagUserDnsResponseBodyTaskStates[];
  masterDns?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slaveDns: 'SlaveDns',
      taskStates: 'TaskStates',
      masterDns: 'MasterDns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slaveDns: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagUserDnsResponseBodyTaskStates },
      masterDns: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagUserDnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagUserDnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagUserDnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointNetworkQualitiesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointNetworkQualitiesResponseBody extends $tea.Model {
  accessPointNetworkQualities?: ListAccessPointNetworkQualitiesResponseBodyAccessPointNetworkQualities[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointNetworkQualities: 'AccessPointNetworkQualities',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointNetworkQualities: { 'type': 'array', 'itemType': ListAccessPointNetworkQualitiesResponseBodyAccessPointNetworkQualities },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointNetworkQualitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAccessPointNetworkQualitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAccessPointNetworkQualitiesResponseBody,
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
  regionId?: string;
  description?: string;
  name?: string;
  activeAging?: number;
  inactiveAging?: number;
  outputType?: string;
  slsRegionId?: string;
  projectName?: string;
  logstoreName?: string;
  netflowServerIp?: string;
  netflowServerPort?: number;
  netflowVersion?: string;
  flowLogId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      description: 'Description',
      name: 'Name',
      activeAging: 'ActiveAging',
      inactiveAging: 'InactiveAging',
      outputType: 'OutputType',
      slsRegionId: 'SlsRegionId',
      projectName: 'ProjectName',
      logstoreName: 'LogstoreName',
      netflowServerIp: 'NetflowServerIp',
      netflowServerPort: 'NetflowServerPort',
      netflowVersion: 'NetflowVersion',
      flowLogId: 'FlowLogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      description: 'string',
      name: 'string',
      activeAging: 'number',
      inactiveAging: 'number',
      outputType: 'string',
      slsRegionId: 'string',
      projectName: 'string',
      logstoreName: 'string',
      netflowServerIp: 'string',
      netflowServerPort: 'number',
      netflowVersion: 'string',
      flowLogId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowLogAttributeResponseBody extends $tea.Model {
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

export class DescribeQosPoliciesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  qosId?: string;
  qosPolicyId?: string;
  description?: string;
  pageSize?: number;
  pageNumber?: number;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      qosId: 'QosId',
      qosPolicyId: 'QosPolicyId',
      description: 'Description',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      qosId: 'string',
      qosPolicyId: 'string',
      description: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBody extends $tea.Model {
  qosPolicies?: DescribeQosPoliciesResponseBodyQosPolicies;
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      qosPolicies: 'QosPolicies',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosPolicies: DescribeQosPoliciesResponseBodyQosPolicies,
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

export class DescribeQosPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeQosPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeQosPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  qosName?: string;
  qosDescription?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      qosName: 'QosName',
      qosDescription: 'QosDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      qosName: 'string',
      qosDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosResponseBody extends $tea.Model {
  requestId?: string;
  qosId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      qosId: 'QosId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      qosId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagECRouteBackupRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  hcIp?: string;
  expressConnectionInterface?: string;
  expressConnectionNexthop?: string;
  routeBackup?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      hcIp: 'HcIp',
      expressConnectionInterface: 'ExpressConnectionInterface',
      expressConnectionNexthop: 'ExpressConnectionNexthop',
      routeBackup: 'RouteBackup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      hcIp: 'string',
      expressConnectionInterface: 'string',
      expressConnectionNexthop: 'string',
      routeBackup: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagECRouteBackupResponseBody extends $tea.Model {
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

export class ModifySagECRouteBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagECRouteBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagECRouteBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportRequest extends $tea.Model {
  smartAGId?: string;
  smartAGSn?: string;
  regionId?: string;
  ownerId?: number;
  ownerAccount?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smartAGId: 'string',
      smartAGSn: 'string',
      regionId: 'string',
      ownerId: 'number',
      ownerAccount: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBody extends $tea.Model {
  requestId?: string;
  diagnoseResult?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      diagnoseResult: 'DiagnoseResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      diagnoseResult: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DiscribeSmartAccessGatewayDiagnosisReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DiscribeSmartAccessGatewayDiagnosisReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoamClientUserRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  originSmartAGId?: string;
  targetSmartAGId?: string;
  originRegionId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      originSmartAGId: 'OriginSmartAGId',
      targetSmartAGId: 'TargetSmartAGId',
      originRegionId: 'OriginRegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      originSmartAGId: 'string',
      targetSmartAGId: 'string',
      originRegionId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoamClientUserResponseBody extends $tea.Model {
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

export class RoamClientUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RoamClientUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RoamClientUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSagStaticRouteRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  portName?: string;
  destinationCidr?: string;
  nextHop?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      portName: 'PortName',
      destinationCidr: 'DestinationCidr',
      nextHop: 'NextHop',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      portName: 'string',
      destinationCidr: 'string',
      nextHop: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSagStaticRouteResponseBody extends $tea.Model {
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

export class CreateSagStaticRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSagStaticRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSagStaticRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBody extends $tea.Model {
  upBandwidth4G?: number;
  description?: string;
  endTime?: number;
  resourceGroupId?: string;
  userCount?: number;
  associatedCcnName?: string;
  maxBandwidth?: string;
  vpnStatus?: string;
  boxControllerIp?: string;
  upBandwidthWan?: number;
  cidrBlock?: string;
  qosIds?: DescribeSmartAccessGatewayAttributeResponseBodyQosIds;
  devices?: DescribeSmartAccessGatewayAttributeResponseBodyDevices;
  name?: string;
  optimizationType?: boolean;
  ipsecStatus?: string;
  routingStrategy?: string;
  associatedCcnId?: string;
  flowLogIds?: DescribeSmartAccessGatewayAttributeResponseBodyFlowLogIds;
  smartAGId?: string;
  instanceType?: string;
  resellerUid?: string;
  securityLockThreshold?: number;
  status?: string;
  requestId?: string;
  createTime?: number;
  dataPlan?: number;
  enableOptimization?: boolean;
  city?: string;
  resellerInstanceId?: string;
  serialNumber?: string;
  backupBoxControllerIp?: string;
  trafficMasterSn?: string;
  accessPointId?: string;
  links?: DescribeSmartAccessGatewayAttributeResponseBodyLinks;
  aclIds?: DescribeSmartAccessGatewayAttributeResponseBodyAclIds;
  applicationBandwidthPackageId?: string;
  applicationBandwidthPackageName?: string;
  accelerateBandwidth?: number;
  applicationBandwidthPackageBussinessStatus?: string;
  applicationBandwidthPackageOperationLocks?: DescribeSmartAccessGatewayAttributeResponseBodyApplicationBandwidthPackageOperationLocks;
  static names(): { [key: string]: string } {
    return {
      upBandwidth4G: 'UpBandwidth4G',
      description: 'Description',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      userCount: 'UserCount',
      associatedCcnName: 'AssociatedCcnName',
      maxBandwidth: 'MaxBandwidth',
      vpnStatus: 'VpnStatus',
      boxControllerIp: 'BoxControllerIp',
      upBandwidthWan: 'UpBandwidthWan',
      cidrBlock: 'CidrBlock',
      qosIds: 'QosIds',
      devices: 'Devices',
      name: 'Name',
      optimizationType: 'OptimizationType',
      ipsecStatus: 'IpsecStatus',
      routingStrategy: 'RoutingStrategy',
      associatedCcnId: 'AssociatedCcnId',
      flowLogIds: 'FlowLogIds',
      smartAGId: 'SmartAGId',
      instanceType: 'InstanceType',
      resellerUid: 'ResellerUid',
      securityLockThreshold: 'SecurityLockThreshold',
      status: 'Status',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      dataPlan: 'DataPlan',
      enableOptimization: 'EnableOptimization',
      city: 'City',
      resellerInstanceId: 'ResellerInstanceId',
      serialNumber: 'SerialNumber',
      backupBoxControllerIp: 'BackupBoxControllerIp',
      trafficMasterSn: 'TrafficMasterSn',
      accessPointId: 'AccessPointId',
      links: 'Links',
      aclIds: 'AclIds',
      applicationBandwidthPackageId: 'ApplicationBandwidthPackageId',
      applicationBandwidthPackageName: 'ApplicationBandwidthPackageName',
      accelerateBandwidth: 'AccelerateBandwidth',
      applicationBandwidthPackageBussinessStatus: 'ApplicationBandwidthPackageBussinessStatus',
      applicationBandwidthPackageOperationLocks: 'ApplicationBandwidthPackageOperationLocks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      upBandwidth4G: 'number',
      description: 'string',
      endTime: 'number',
      resourceGroupId: 'string',
      userCount: 'number',
      associatedCcnName: 'string',
      maxBandwidth: 'string',
      vpnStatus: 'string',
      boxControllerIp: 'string',
      upBandwidthWan: 'number',
      cidrBlock: 'string',
      qosIds: DescribeSmartAccessGatewayAttributeResponseBodyQosIds,
      devices: DescribeSmartAccessGatewayAttributeResponseBodyDevices,
      name: 'string',
      optimizationType: 'boolean',
      ipsecStatus: 'string',
      routingStrategy: 'string',
      associatedCcnId: 'string',
      flowLogIds: DescribeSmartAccessGatewayAttributeResponseBodyFlowLogIds,
      smartAGId: 'string',
      instanceType: 'string',
      resellerUid: 'string',
      securityLockThreshold: 'number',
      status: 'string',
      requestId: 'string',
      createTime: 'number',
      dataPlan: 'number',
      enableOptimization: 'boolean',
      city: 'string',
      resellerInstanceId: 'string',
      serialNumber: 'string',
      backupBoxControllerIp: 'string',
      trafficMasterSn: 'string',
      accessPointId: 'string',
      links: DescribeSmartAccessGatewayAttributeResponseBodyLinks,
      aclIds: DescribeSmartAccessGatewayAttributeResponseBodyAclIds,
      applicationBandwidthPackageId: 'string',
      applicationBandwidthPackageName: 'string',
      accelerateBandwidth: 'number',
      applicationBandwidthPackageBussinessStatus: 'string',
      applicationBandwidthPackageOperationLocks: DescribeSmartAccessGatewayAttributeResponseBodyApplicationBandwidthPackageOperationLocks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSmartAccessGatewayAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSmartAccessGatewayAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudConnectNetworkRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  name?: string;
  description?: string;
  cidrBlock?: string;
  snatCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      cidrBlock: 'CidrBlock',
      snatCidrBlock: 'SnatCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      name: 'string',
      description: 'string',
      cidrBlock: 'string',
      snatCidrBlock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudConnectNetworkResponseBody extends $tea.Model {
  status?: string;
  description?: string;
  requestId?: string;
  ccnId?: string;
  cidrBlock?: string;
  snatCidrBlock?: string;
  name?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      description: 'Description',
      requestId: 'RequestId',
      ccnId: 'CcnId',
      cidrBlock: 'CidrBlock',
      snatCidrBlock: 'SnatCidrBlock',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      description: 'string',
      requestId: 'string',
      ccnId: 'string',
      cidrBlock: 'string',
      snatCidrBlock: 'string',
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudConnectNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCloudConnectNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCloudConnectNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQosPolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  qosId?: string;
  qosPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      qosId: 'QosId',
      qosPolicyId: 'QosPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      qosId: 'string',
      qosPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQosPolicyResponseBody extends $tea.Model {
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

export class DeleteQosPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQosPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQosPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagHaRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  mode?: string;
  portName?: string;
  virtualIp?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      mode: 'Mode',
      portName: 'PortName',
      virtualIp: 'VirtualIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      mode: 'string',
      portName: 'string',
      virtualIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagHaResponseBody extends $tea.Model {
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

export class ModifySagHaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagHaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagHaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHealthCheckRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  hcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      hcInstanceId: 'HcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      hcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHealthCheckResponseBody extends $tea.Model {
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

export class DeleteHealthCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteHealthCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHealthCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeSmartAGWebConfigRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeSmartAGWebConfigResponseBody extends $tea.Model {
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

export class SynchronizeSmartAGWebConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SynchronizeSmartAGWebConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SynchronizeSmartAGWebConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnatEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnatEntryResponseBody extends $tea.Model {
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

export class DeleteSnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSnatEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQosRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  qosId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      qosId: 'QosId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      qosId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQosResponseBody extends $tea.Model {
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

export class DeleteQosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSagCidrRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  cidr?: string;
  smartAGId?: string;
  enableBackup?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      cidr: 'Cidr',
      smartAGId: 'SmartAGId',
      enableBackup: 'EnableBackup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      cidr: 'string',
      smartAGId: 'string',
      enableBackup: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSagCidrResponseBody extends $tea.Model {
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

export class AddSagCidrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSagCidrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSagCidrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSagStaticRouteRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  portName?: string;
  destinationCidr?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      portName: 'PortName',
      destinationCidr: 'DestinationCidr',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      portName: 'string',
      destinationCidr: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSagStaticRouteResponseBody extends $tea.Model {
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

export class DeleteSagStaticRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSagStaticRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSagStaticRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagRulesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
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
      regionId: 'string',
      smartAGId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagRulesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  grantRules?: DescribeGrantSagRulesResponseBodyGrantRules;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      grantRules: 'GrantRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      grantRules: DescribeGrantSagRulesResponseBodyGrantRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGrantSagRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGrantSagRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientsResponseBody extends $tea.Model {
  requestId?: string;
  users?: DescribeUserOnlineClientsResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      users: DescribeUserOnlineClientsResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserOnlineClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserOnlineClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnoseSmartAccessGatewayRequest extends $tea.Model {
  smartAGId?: string;
  smartAGSn?: string;
  regionId?: string;
  ownerId?: number;
  ownerAccount?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smartAGId: 'string',
      smartAGSn: 'string',
      regionId: 'string',
      ownerId: 'number',
      ownerAccount: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnoseSmartAccessGatewayResponseBody extends $tea.Model {
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

export class DiagnoseSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DiagnoseSmartAccessGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DiagnoseSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWifiRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWifiResponseBody extends $tea.Model {
  isEnable?: string;
  requestId?: string;
  isAuth?: string;
  bandwidth?: string;
  channel?: string;
  ssid?: string;
  taskStates?: DescribeSagWifiResponseBodyTaskStates[];
  authenticationType?: string;
  encryptAlgorithm?: string;
  isBroadcast?: string;
  static names(): { [key: string]: string } {
    return {
      isEnable: 'IsEnable',
      requestId: 'RequestId',
      isAuth: 'IsAuth',
      bandwidth: 'Bandwidth',
      channel: 'Channel',
      ssid: 'Ssid',
      taskStates: 'TaskStates',
      authenticationType: 'AuthenticationType',
      encryptAlgorithm: 'EncryptAlgorithm',
      isBroadcast: 'IsBroadcast',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnable: 'string',
      requestId: 'string',
      isAuth: 'string',
      bandwidth: 'string',
      channel: 'string',
      ssid: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagWifiResponseBodyTaskStates },
      authenticationType: 'string',
      encryptAlgorithm: 'string',
      isBroadcast: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWifiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagWifiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagWifiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSerialNumberRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSerialNumberResponseBody extends $tea.Model {
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

export class UnbindSerialNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindSerialNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindSerialNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSAGDeviceInfoRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSAGDeviceInfoResponseBody extends $tea.Model {
  serviceIP?: string;
  controllerState?: string;
  requestId?: string;
  synStatus?: string;
  smartAGType?: string;
  version?: string;
  vpnState?: string;
  startupTime?: string;
  lastConnectedControllerTime?: string;
  static names(): { [key: string]: string } {
    return {
      serviceIP: 'ServiceIP',
      controllerState: 'ControllerState',
      requestId: 'RequestId',
      synStatus: 'SynStatus',
      smartAGType: 'SmartAGType',
      version: 'Version',
      vpnState: 'VpnState',
      startupTime: 'StartupTime',
      lastConnectedControllerTime: 'LastConnectedControllerTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceIP: 'string',
      controllerState: 'string',
      requestId: 'string',
      synStatus: 'string',
      smartAGType: 'string',
      version: 'string',
      vpnState: 'string',
      startupTime: 'string',
      lastConnectedControllerTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSAGDeviceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSAGDeviceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSAGDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowStatisticsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  statisticsDate?: string;
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      statisticsDate: 'StatisticsDate',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      statisticsDate: 'string',
      userNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowStatisticsResponseBody extends $tea.Model {
  sagStatistics?: DescribeUserFlowStatisticsResponseBodySagStatistics;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      sagStatistics: 'SagStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sagStatistics: DescribeUserFlowStatisticsResponseBodySagStatistics,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserFlowStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserFlowStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagLanRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  portName?: string;
  IPType?: string;
  IP?: string;
  mask?: string;
  startIp?: string;
  endIp?: string;
  lease?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      portName: 'PortName',
      IPType: 'IPType',
      IP: 'IP',
      mask: 'Mask',
      startIp: 'StartIp',
      endIp: 'EndIp',
      lease: 'Lease',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      portName: 'string',
      IPType: 'string',
      IP: 'string',
      mask: 'string',
      startIp: 'string',
      endIp: 'string',
      lease: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagLanResponseBody extends $tea.Model {
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

export class ModifySagLanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagLanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagLanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  flowLogId?: string;
  flowLogName?: string;
  description?: string;
  status?: string;
  outputType?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      description: 'Description',
      status: 'Status',
      outputType: 'OutputType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      description: 'string',
      status: 'string',
      outputType: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBody extends $tea.Model {
  totalCount?: number;
  flowLogs?: DescribeFlowLogsResponseBodyFlowLogs;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      flowLogs: 'FlowLogs',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      flowLogs: DescribeFlowLogsResponseBodyFlowLogs,
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayClientUsersRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  userName?: string;
  pageNumber?: number;
  pageSize?: number;
  userMail?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userMail: 'UserMail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      userName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userMail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayClientUsersResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  users?: DescribeSmartAccessGatewayClientUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      users: DescribeSmartAccessGatewayClientUsersResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayClientUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSmartAccessGatewayClientUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSmartAccessGatewayClientUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  hcInstanceId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      hcInstanceId: 'HcInstanceId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      hcInstanceId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckAttributeResponseBody extends $tea.Model {
  srcPort?: number;
  description?: string;
  requestId?: string;
  srcIpAddr?: string;
  createTime?: number;
  failCountThreshold?: number;
  dstPort?: number;
  name?: string;
  probeCount?: number;
  type?: string;
  probeTimeout?: number;
  hcInstanceId?: string;
  rttThreshold?: number;
  probeInterval?: number;
  smartAGId?: string;
  rttFailThreshold?: number;
  dstIpAddr?: string;
  static names(): { [key: string]: string } {
    return {
      srcPort: 'SrcPort',
      description: 'Description',
      requestId: 'RequestId',
      srcIpAddr: 'SrcIpAddr',
      createTime: 'CreateTime',
      failCountThreshold: 'FailCountThreshold',
      dstPort: 'DstPort',
      name: 'Name',
      probeCount: 'ProbeCount',
      type: 'Type',
      probeTimeout: 'ProbeTimeout',
      hcInstanceId: 'HcInstanceId',
      rttThreshold: 'RttThreshold',
      probeInterval: 'ProbeInterval',
      smartAGId: 'SmartAGId',
      rttFailThreshold: 'RttFailThreshold',
      dstIpAddr: 'DstIpAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcPort: 'number',
      description: 'string',
      requestId: 'string',
      srcIpAddr: 'string',
      createTime: 'number',
      failCountThreshold: 'number',
      dstPort: 'number',
      name: 'string',
      probeCount: 'number',
      type: 'string',
      probeTimeout: 'number',
      hcInstanceId: 'string',
      rttThreshold: 'number',
      probeInterval: 'number',
      smartAGId: 'string',
      rttFailThreshold: 'number',
      dstIpAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHealthCheckAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHealthCheckAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQosPolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  qosId?: string;
  qosPolicyId?: string;
  priority?: number;
  sourceCidr?: string;
  destCidr?: string;
  ipProtocol?: string;
  sourcePortRange?: string;
  destPortRange?: string;
  startTime?: string;
  endTime?: string;
  description?: string;
  name?: string;
  dpiSignatureIds?: string[];
  dpiGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      qosId: 'QosId',
      qosPolicyId: 'QosPolicyId',
      priority: 'Priority',
      sourceCidr: 'SourceCidr',
      destCidr: 'DestCidr',
      ipProtocol: 'IpProtocol',
      sourcePortRange: 'SourcePortRange',
      destPortRange: 'DestPortRange',
      startTime: 'StartTime',
      endTime: 'EndTime',
      description: 'Description',
      name: 'Name',
      dpiSignatureIds: 'DpiSignatureIds',
      dpiGroupIds: 'DpiGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      qosId: 'string',
      qosPolicyId: 'string',
      priority: 'number',
      sourceCidr: 'string',
      destCidr: 'string',
      ipProtocol: 'string',
      sourcePortRange: 'string',
      destPortRange: 'string',
      startTime: 'string',
      endTime: 'string',
      description: 'string',
      name: 'string',
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQosPolicyResponseBody extends $tea.Model {
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

export class ModifyQosPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyQosPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyQosPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagExpressConnectInterfaceRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  portName?: string;
  vlan?: string;
  IP?: string;
  mask?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      portName: 'PortName',
      vlan: 'Vlan',
      IP: 'IP',
      mask: 'Mask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      portName: 'string',
      vlan: 'string',
      IP: 'string',
      mask: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagExpressConnectInterfaceResponseBody extends $tea.Model {
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

export class ModifySagExpressConnectInterfaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagExpressConnectInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagExpressConnectInterfaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGAccessPointRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  accessPointId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      accessPointId: 'AccessPointId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      accessPointId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGAccessPointResponseBody extends $tea.Model {
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

export class UpdateSmartAGAccessPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSmartAGAccessPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSmartAGAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSerialNumberRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSerialNumberResponseBody extends $tea.Model {
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

export class BindSerialNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindSerialNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindSerialNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRouteProtocolOspfRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  routerId?: string;
  areaId?: number;
  deadTime?: number;
  helloTime?: number;
  authenticationType?: string;
  md5KeyId?: number;
  md5Key?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      routerId: 'RouterId',
      areaId: 'AreaId',
      deadTime: 'DeadTime',
      helloTime: 'HelloTime',
      authenticationType: 'AuthenticationType',
      md5KeyId: 'Md5KeyId',
      md5Key: 'Md5Key',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      routerId: 'string',
      areaId: 'number',
      deadTime: 'number',
      helloTime: 'number',
      authenticationType: 'string',
      md5KeyId: 'number',
      md5Key: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRouteProtocolOspfResponseBody extends $tea.Model {
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

export class ModifySagRouteProtocolOspfResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagRouteProtocolOspfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagRouteProtocolOspfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnatEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  sagId?: string;
  type?: string;
  externalIp?: string;
  externalPort?: string;
  internalIp?: string;
  ipProtocol?: string;
  internalPort?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      sagId: 'SagId',
      type: 'Type',
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      internalIp: 'InternalIp',
      ipProtocol: 'IpProtocol',
      internalPort: 'InternalPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      sagId: 'string',
      type: 'string',
      externalIp: 'string',
      externalPort: 'string',
      internalIp: 'string',
      ipProtocol: 'string',
      internalPort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnatEntryResponseBody extends $tea.Model {
  requestId?: string;
  dnatEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dnatEntryId: 'DnatEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dnatEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDnatEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSagCidrRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  cidr?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      cidr: 'Cidr',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      cidr: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSagCidrResponseBody extends $tea.Model {
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

export class DeleteSagCidrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSagCidrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSagCidrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolOspfRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolOspfResponseBody extends $tea.Model {
  requestId?: string;
  deadTime?: number;
  md5KeyId?: number;
  areaId?: string;
  routerId?: string;
  helloTime?: number;
  areaType?: string;
  taskStates?: DescribeSagRouteProtocolOspfResponseBodyTaskStates[];
  md5Key?: string;
  authenticationType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deadTime: 'DeadTime',
      md5KeyId: 'Md5KeyId',
      areaId: 'AreaId',
      routerId: 'RouterId',
      helloTime: 'HelloTime',
      areaType: 'AreaType',
      taskStates: 'TaskStates',
      md5Key: 'Md5Key',
      authenticationType: 'AuthenticationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deadTime: 'number',
      md5KeyId: 'number',
      areaId: 'string',
      routerId: 'string',
      helloTime: 'number',
      areaType: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagRouteProtocolOspfResponseBodyTaskStates },
      md5Key: 'string',
      authenticationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolOspfResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagRouteProtocolOspfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagRouteProtocolOspfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteDistributionStrategiesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  sourceType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      sourceType: 'SourceType',
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
      regionId: 'string',
      smartAGId: 'string',
      sourceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteDistributionStrategiesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  strategies?: DescribeRouteDistributionStrategiesResponseBodyStrategies;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      strategies: 'Strategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      strategies: DescribeRouteDistributionStrategiesResponseBodyStrategies,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteDistributionStrategiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRouteDistributionStrategiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRouteDistributionStrategiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagHaRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagHaResponseBody extends $tea.Model {
  requestId?: string;
  mode?: string;
  ports?: DescribeSagHaResponseBodyPorts[];
  taskStates?: DescribeSagHaResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mode: 'Mode',
      ports: 'Ports',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mode: 'string',
      ports: { 'type': 'array', 'itemType': DescribeSagHaResponseBodyPorts },
      taskStates: { 'type': 'array', 'itemType': DescribeSagHaResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagHaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagHaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagHaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddACLRuleRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aclId?: string;
  description?: string;
  direction?: string;
  sourceCidr?: string;
  destCidr?: string;
  ipProtocol?: string;
  sourcePortRange?: string;
  destPortRange?: string;
  policy?: string;
  priority?: number;
  type?: string;
  name?: string;
  dpiSignatureIds?: string[];
  dpiGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aclId: 'AclId',
      description: 'Description',
      direction: 'Direction',
      sourceCidr: 'SourceCidr',
      destCidr: 'DestCidr',
      ipProtocol: 'IpProtocol',
      sourcePortRange: 'SourcePortRange',
      destPortRange: 'DestPortRange',
      policy: 'Policy',
      priority: 'Priority',
      type: 'Type',
      name: 'Name',
      dpiSignatureIds: 'DpiSignatureIds',
      dpiGroupIds: 'DpiGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aclId: 'string',
      description: 'string',
      direction: 'string',
      sourceCidr: 'string',
      destCidr: 'string',
      ipProtocol: 'string',
      sourcePortRange: 'string',
      destPortRange: 'string',
      policy: 'string',
      priority: 'number',
      type: 'string',
      name: 'string',
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddACLRuleResponseBody extends $tea.Model {
  policy?: string;
  description?: string;
  requestId?: string;
  sourcePortRange?: string;
  sourceCidr?: string;
  priority?: number;
  aclId?: string;
  acrId?: string;
  destPortRange?: string;
  direction?: string;
  dpiGroupIds?: AddACLRuleResponseBodyDpiGroupIds;
  name?: string;
  type?: string;
  gmtCreate?: number;
  destCidr?: string;
  dpiSignatureIds?: AddACLRuleResponseBodyDpiSignatureIds;
  ipProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      description: 'Description',
      requestId: 'RequestId',
      sourcePortRange: 'SourcePortRange',
      sourceCidr: 'SourceCidr',
      priority: 'Priority',
      aclId: 'AclId',
      acrId: 'AcrId',
      destPortRange: 'DestPortRange',
      direction: 'Direction',
      dpiGroupIds: 'DpiGroupIds',
      name: 'Name',
      type: 'Type',
      gmtCreate: 'GmtCreate',
      destCidr: 'DestCidr',
      dpiSignatureIds: 'DpiSignatureIds',
      ipProtocol: 'IpProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      description: 'string',
      requestId: 'string',
      sourcePortRange: 'string',
      sourceCidr: 'string',
      priority: 'number',
      aclId: 'string',
      acrId: 'string',
      destPortRange: 'string',
      direction: 'string',
      dpiGroupIds: AddACLRuleResponseBodyDpiGroupIds,
      name: 'string',
      type: 'string',
      gmtCreate: 'number',
      destCidr: 'string',
      dpiSignatureIds: AddACLRuleResponseBodyDpiSignatureIds,
      ipProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddACLRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddACLRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddACLRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateFlowLogRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  flowLogId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      flowLogId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateFlowLogResponseBody extends $tea.Model {
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

export class AssociateFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateFlowLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSmartAccessGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ccnId?: string;
  smartAGId?: string;
  regionId?: string;
  smartAGUid?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ccnId: 'CcnId',
      smartAGId: 'SmartAGId',
      regionId: 'RegionId',
      smartAGUid: 'SmartAGUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ccnId: 'string',
      smartAGId: 'string',
      regionId: 'string',
      smartAGUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSmartAccessGatewayResponseBody extends $tea.Model {
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

export class BindSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindSmartAccessGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateACLRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aclId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aclId: 'AclId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aclId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateACLResponseBody extends $tea.Model {
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

export class DisassociateACLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisassociateACLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisassociateACLResponseBody,
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
  regionId?: string;
  flowLogId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      flowLogId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveFlowLogResponseBody extends $tea.Model {
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

export class ActiveFlowLogRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  flowLogId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      flowLogId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveFlowLogResponseBody extends $tea.Model {
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

export class KickOutClientsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickOutClientsResponseBody extends $tea.Model {
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

export class KickOutClientsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: KickOutClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: KickOutClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteableAddressRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  sagId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      sagId: 'SagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      sagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteableAddressResponseBody extends $tea.Model {
  origin?: string;
  requestId?: string;
  routeableAddress?: string;
  static names(): { [key: string]: string } {
    return {
      origin: 'Origin',
      requestId: 'RequestId',
      routeableAddress: 'RouteableAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      origin: 'string',
      requestId: 'string',
      routeableAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteableAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagRouteableAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagRouteableAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagPortRoleRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  portName?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      portName: 'PortName',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      portName: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagPortRoleResponseBody extends $tea.Model {
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

export class ModifySagPortRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagPortRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagPortRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagWanSnatRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  snat?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      snat: 'Snat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      snat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagWanSnatResponseBody extends $tea.Model {
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

export class ModifySagWanSnatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagWanSnatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagWanSnatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiConfigErrorRequest extends $tea.Model {
  regionId?: string;
  smartAGId?: string;
  dpiConfigType?: string;
  ruleInstanceId?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      dpiConfigType: 'DpiConfigType',
      ruleInstanceId: 'RuleInstanceId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      smartAGId: 'string',
      dpiConfigType: 'string',
      ruleInstanceId: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiConfigErrorResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  total?: number;
  maxResults?: number;
  dpiConfigError?: ListDpiConfigErrorResponseBodyDpiConfigError[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      total: 'Total',
      maxResults: 'MaxResults',
      dpiConfigError: 'DpiConfigError',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
      maxResults: 'number',
      dpiConfigError: { 'type': 'array', 'itemType': ListDpiConfigErrorResponseBodyDpiConfigError },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiConfigErrorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDpiConfigErrorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDpiConfigErrorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteACLRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aclId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aclId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteACLResponseBody extends $tea.Model {
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

export class DeleteACLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteACLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteACLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGEnterpriseCodeRequest extends $tea.Model {
  regionId?: string;
  enterpriseCode?: string;
  smartAGId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      enterpriseCode: 'EnterpriseCode',
      smartAGId: 'SmartAGId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      enterpriseCode: 'string',
      smartAGId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGEnterpriseCodeResponseBody extends $tea.Model {
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

export class UpdateSmartAGEnterpriseCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSmartAGEnterpriseCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSmartAGEnterpriseCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePbrInterfacesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  pbrInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pbrInstanceId: 'PbrInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      pbrInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePbrInterfacesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pbrInterfaces?: DescribePbrInterfacesResponseBodyPbrInterfaces;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pbrInterfaces: 'PbrInterfaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pbrInterfaces: DescribePbrInterfacesResponseBodyPbrInterfaces,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePbrInterfacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePbrInterfacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePbrInterfacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateACLRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aclId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aclId: 'AclId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aclId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateACLResponseBody extends $tea.Model {
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

export class AssociateACLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateACLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateACLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHealthCheckRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  hcInstanceId?: string;
  smartAGId?: string;
  name?: string;
  description?: string;
  type?: string;
  dstIpAddr?: string;
  dstPort?: number;
  srcIpAddr?: string;
  srcPort?: number;
  probeInterval?: number;
  probeCount?: number;
  probeTimeout?: number;
  rttThreshold?: number;
  rttFailThreshold?: number;
  failCountThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      hcInstanceId: 'HcInstanceId',
      smartAGId: 'SmartAGId',
      name: 'Name',
      description: 'Description',
      type: 'Type',
      dstIpAddr: 'DstIpAddr',
      dstPort: 'DstPort',
      srcIpAddr: 'SrcIpAddr',
      srcPort: 'SrcPort',
      probeInterval: 'ProbeInterval',
      probeCount: 'ProbeCount',
      probeTimeout: 'ProbeTimeout',
      rttThreshold: 'RttThreshold',
      rttFailThreshold: 'RttFailThreshold',
      failCountThreshold: 'FailCountThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      hcInstanceId: 'string',
      smartAGId: 'string',
      name: 'string',
      description: 'string',
      type: 'string',
      dstIpAddr: 'string',
      dstPort: 'number',
      srcIpAddr: 'string',
      srcPort: 'number',
      probeInterval: 'number',
      probeCount: 'number',
      probeTimeout: 'number',
      rttThreshold: 'number',
      rttFailThreshold: 'number',
      failCountThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHealthCheckResponseBody extends $tea.Model {
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

export class ModifyHealthCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHealthCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHealthCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseCodeRequest extends $tea.Model {
  regionId?: string;
  enterpriseCode?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      enterpriseCode: 'EnterpriseCode',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      enterpriseCode: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseCodeResponseBody extends $tea.Model {
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

export class CreateEnterpriseCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEnterpriseCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEnterpriseCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aclIds?: string;
  name?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aclIds: 'AclIds',
      name: 'Name',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aclIds: 'string',
      name: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  acls?: DescribeACLsResponseBodyAcls;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      acls: 'Acls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      acls: DescribeACLsResponseBodyAcls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeACLsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeACLsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSmartAccessGatewayClientUserPasswordRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  userName?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      userName: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSmartAccessGatewayClientUserPasswordResponseBody extends $tea.Model {
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

export class ResetSmartAccessGatewayClientUserPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetSmartAccessGatewayClientUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetSmartAccessGatewayClientUserPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockSmartAccessGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockSmartAccessGatewayResponseBody extends $tea.Model {
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

export class UnlockSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnlockSmartAccessGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnlockSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnbindFlowLogSagsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnbindFlowLogSagsResponseBody extends $tea.Model {
  requestId?: string;
  count?: number;
  sags?: DescribeUnbindFlowLogSagsResponseBodySags;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      count: 'Count',
      sags: 'Sags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      count: 'number',
      sags: DescribeUnbindFlowLogSagsResponseBodySags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnbindFlowLogSagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUnbindFlowLogSagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUnbindFlowLogSagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateFlowLogRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  flowLogId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      flowLogId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateFlowLogResponseBody extends $tea.Model {
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

export class DisassociateFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisassociateFlowLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisassociateFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagGlobalRouteProtocolRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagGlobalRouteProtocolResponseBody extends $tea.Model {
  routeProtocol?: string;
  requestId?: string;
  taskStates?: DescribeSagGlobalRouteProtocolResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      routeProtocol: 'RouteProtocol',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeProtocol: 'string',
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagGlobalRouteProtocolResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagGlobalRouteProtocolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagGlobalRouteProtocolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagGlobalRouteProtocolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagExpressConnectInterfaceListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  portName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      portName: 'PortName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      portName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagExpressConnectInterfaceListResponseBody extends $tea.Model {
  interfaces?: DescribeSagExpressConnectInterfaceListResponseBodyInterfaces[];
  requestId?: string;
  taskStates?: DescribeSagExpressConnectInterfaceListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      interfaces: 'Interfaces',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaces: { 'type': 'array', 'itemType': DescribeSagExpressConnectInterfaceListResponseBodyInterfaces },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagExpressConnectInterfaceListResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagExpressConnectInterfaceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagExpressConnectInterfaceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagExpressConnectInterfaceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateACLRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateACLResponseBody extends $tea.Model {
  requestId?: string;
  aclId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aclId: 'AclId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aclId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateACLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateACLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateACLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootSmartAccessGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  regionId?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      regionId: 'RegionId',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      regionId: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootSmartAccessGatewayResponseBody extends $tea.Model {
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

export class RebootSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RebootSmartAccessGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RebootSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagStaticRouteRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  portName?: string;
  destinationCidr?: string;
  nextHop?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      portName: 'PortName',
      destinationCidr: 'DestinationCidr',
      nextHop: 'NextHop',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      portName: 'string',
      destinationCidr: 'string',
      nextHop: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagStaticRouteResponseBody extends $tea.Model {
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

export class ModifySagStaticRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagStaticRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagStaticRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromVbrRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  vbrInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      vbrInstanceId: 'VbrInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      vbrInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromVbrResponseBody extends $tea.Model {
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

export class RevokeInstanceFromVbrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RevokeInstanceFromVbrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RevokeInstanceFromVbrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  name?: string;
  ccnId?: string;
  pageSize?: number;
  pageNumber?: number;
  tag?: DescribeCloudConnectNetworksRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      name: 'Name',
      ccnId: 'CcnId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      name: 'string',
      ccnId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      tag: { 'type': 'array', 'itemType': DescribeCloudConnectNetworksRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBody extends $tea.Model {
  cloudConnectNetworks?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworks;
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      cloudConnectNetworks: 'CloudConnectNetworks',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudConnectNetworks: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworks,
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

export class DescribeCloudConnectNetworksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCloudConnectNetworksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCloudConnectNetworksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLRuleRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aclId?: string;
  acrId?: string;
  description?: string;
  direction?: string;
  sourceCidr?: string;
  destCidr?: string;
  ipProtocol?: string;
  sourcePortRange?: string;
  destPortRange?: string;
  policy?: string;
  priority?: number;
  type?: string;
  name?: string;
  dpiSignatureIds?: string[];
  dpiGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aclId: 'AclId',
      acrId: 'AcrId',
      description: 'Description',
      direction: 'Direction',
      sourceCidr: 'SourceCidr',
      destCidr: 'DestCidr',
      ipProtocol: 'IpProtocol',
      sourcePortRange: 'SourcePortRange',
      destPortRange: 'DestPortRange',
      policy: 'Policy',
      priority: 'Priority',
      type: 'Type',
      name: 'Name',
      dpiSignatureIds: 'DpiSignatureIds',
      dpiGroupIds: 'DpiGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aclId: 'string',
      acrId: 'string',
      description: 'string',
      direction: 'string',
      sourceCidr: 'string',
      destCidr: 'string',
      ipProtocol: 'string',
      sourcePortRange: 'string',
      destPortRange: 'string',
      policy: 'string',
      priority: 'number',
      type: 'string',
      name: 'string',
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLRuleResponseBody extends $tea.Model {
  policy?: string;
  description?: string;
  requestId?: string;
  sourcePortRange?: string;
  sourceCidr?: string;
  priority?: number;
  aclId?: string;
  acrId?: string;
  destPortRange?: string;
  direction?: string;
  dpiGroupIds?: ModifyACLRuleResponseBodyDpiGroupIds;
  name?: string;
  gmtCreate?: number;
  destCidr?: string;
  dpiSignatureIds?: ModifyACLRuleResponseBodyDpiSignatureIds;
  ipProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      description: 'Description',
      requestId: 'RequestId',
      sourcePortRange: 'SourcePortRange',
      sourceCidr: 'SourceCidr',
      priority: 'Priority',
      aclId: 'AclId',
      acrId: 'AcrId',
      destPortRange: 'DestPortRange',
      direction: 'Direction',
      dpiGroupIds: 'DpiGroupIds',
      name: 'Name',
      gmtCreate: 'GmtCreate',
      destCidr: 'DestCidr',
      dpiSignatureIds: 'DpiSignatureIds',
      ipProtocol: 'IpProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      description: 'string',
      requestId: 'string',
      sourcePortRange: 'string',
      sourceCidr: 'string',
      priority: 'number',
      aclId: 'string',
      acrId: 'string',
      destPortRange: 'string',
      direction: 'string',
      dpiGroupIds: ModifyACLRuleResponseBodyDpiGroupIds,
      name: 'string',
      gmtCreate: 'number',
      destCidr: 'string',
      dpiSignatureIds: ModifyACLRuleResponseBodyDpiSignatureIds,
      ipProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyACLRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyACLRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayClientUserRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  userName?: string;
  bandwidth?: number;
  email?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
      bandwidth: 'Bandwidth',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      userName: 'string',
      bandwidth: 'number',
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayClientUserResponseBody extends $tea.Model {
  userName?: string;
  requestId?: string;
  userMail?: string;
  bandwidth?: number;
  clientIp?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      requestId: 'RequestId',
      userMail: 'UserMail',
      bandwidth: 'Bandwidth',
      clientIp: 'ClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      requestId: 'string',
      userMail: 'string',
      bandwidth: 'number',
      clientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayClientUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySmartAccessGatewayClientUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySmartAccessGatewayClientUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagManagementPortRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagManagementPortResponseBody extends $tea.Model {
  requestId?: string;
  gateway?: string;
  IP?: string;
  mask?: string;
  taskStates?: DescribeSagManagementPortResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      gateway: 'Gateway',
      IP: 'IP',
      mask: 'Mask',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      gateway: 'string',
      IP: 'string',
      mask: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagManagementPortResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagManagementPortResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagManagementPortResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagManagementPortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeSmartAccessGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  regionId?: string;
  bandWidthSpec?: number;
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      regionId: 'RegionId',
      bandWidthSpec: 'BandWidthSpec',
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      regionId: 'string',
      bandWidthSpec: 'number',
      autoPay: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeSmartAccessGatewayResponseBody extends $tea.Model {
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

export class UpgradeSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeSmartAccessGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAGDpiAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAGDpiAttributeResponseBody extends $tea.Model {
  logstoreName?: string;
  requestId?: string;
  projectName?: string;
  slsRegion?: string;
  dpiMonitorStatus?: string;
  dpiStatus?: string;
  static names(): { [key: string]: string } {
    return {
      logstoreName: 'LogstoreName',
      requestId: 'RequestId',
      projectName: 'ProjectName',
      slsRegion: 'SlsRegion',
      dpiMonitorStatus: 'DpiMonitorStatus',
      dpiStatus: 'DpiStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstoreName: 'string',
      requestId: 'string',
      projectName: 'string',
      slsRegion: 'string',
      dpiMonitorStatus: 'string',
      dpiStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAGDpiAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSmartAGDpiAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSmartAGDpiAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateQosRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  qosId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      qosId: 'QosId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      qosId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateQosResponseBody extends $tea.Model {
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

export class DisassociateQosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisassociateQosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisassociateQosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouteDistributionStrategyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  hcInstanceId?: string;
  sourceType?: string;
  destCidrBlock?: string;
  routeSource?: string;
  routeDistribution?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      hcInstanceId: 'HcInstanceId',
      sourceType: 'SourceType',
      destCidrBlock: 'DestCidrBlock',
      routeSource: 'RouteSource',
      routeDistribution: 'RouteDistribution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      hcInstanceId: 'string',
      sourceType: 'string',
      destCidrBlock: 'string',
      routeSource: 'string',
      routeDistribution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouteDistributionStrategyResponseBody extends $tea.Model {
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

export class ModifyRouteDistributionStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRouteDistributionStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRouteDistributionStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagPortRouteProtocolRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  portName?: string;
  vlan?: string;
  routeProtocol?: string;
  remoteIp?: string;
  remoteAs?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      portName: 'PortName',
      vlan: 'Vlan',
      routeProtocol: 'RouteProtocol',
      remoteIp: 'RemoteIp',
      remoteAs: 'RemoteAs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      portName: 'string',
      vlan: 'string',
      routeProtocol: 'string',
      remoteIp: 'string',
      remoteAs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagPortRouteProtocolResponseBody extends $tea.Model {
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

export class ModifySagPortRouteProtocolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagPortRouteProtocolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagPortRouteProtocolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSmartAccessGatewayUserRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userName?: string;
  smartAGId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userName: 'UserName',
      smartAGId: 'SmartAGId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userName: 'string',
      smartAGId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSmartAccessGatewayUserResponseBody extends $tea.Model {
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

export class EnableSmartAccessGatewayUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableSmartAccessGatewayUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableSmartAccessGatewayUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQosRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  qosId?: string;
  qosName?: string;
  qosDescription?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      qosId: 'QosId',
      qosName: 'QosName',
      qosDescription: 'QosDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      qosId: 'string',
      qosName: 'string',
      qosDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQosResponseBody extends $tea.Model {
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

export class ModifyQosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyQosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyQosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclAttributeRequest extends $tea.Model {
  regionId?: string;
  aclId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      aclId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclAttributeResponseBody extends $tea.Model {
  requestId?: string;
  aclId?: string;
  errorConfigSmartAGCount?: number;
  aclName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aclId: 'AclId',
      errorConfigSmartAGCount: 'ErrorConfigSmartAGCount',
      aclName: 'AclName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aclId: 'string',
      errorConfigSmartAGCount: 'number',
      aclName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAclAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAclAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanListResponseBody extends $tea.Model {
  requestId?: string;
  wans?: DescribeSagWanListResponseBodyWans[];
  taskStates?: DescribeSagWanListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      wans: 'Wans',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      wans: { 'type': 'array', 'itemType': DescribeSagWanListResponseBodyWans },
      taskStates: { 'type': 'array', 'itemType': DescribeSagWanListResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagWanListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagWanListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGApiUnsupportedFeatureRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  serialNumber?: string;
  openApiName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      serialNumber: 'SerialNumber',
      openApiName: 'OpenApiName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      serialNumber: 'string',
      openApiName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGApiUnsupportedFeatureResponseBody extends $tea.Model {
  requestId?: string;
  features?: ListSmartAGApiUnsupportedFeatureResponseBodyFeatures[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      features: 'Features',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      features: { 'type': 'array', 'itemType': ListSmartAGApiUnsupportedFeatureResponseBodyFeatures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGApiUnsupportedFeatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSmartAGApiUnsupportedFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSmartAGApiUnsupportedFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSmartAGDpiMonitorRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  clientToken?: string;
  dryRun?: boolean;
  slsProjectName?: string;
  slsLogStore?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      slsProjectName: 'SlsProjectName',
      slsLogStore: 'SlsLogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      slsProjectName: 'string',
      slsLogStore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSmartAGDpiMonitorResponseBody extends $tea.Model {
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

export class EnableSmartAGDpiMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableSmartAGDpiMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableSmartAGDpiMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateSmartAccessGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateSmartAccessGatewayResponseBody extends $tea.Model {
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

export class ActivateSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ActivateSmartAccessGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ActivateSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteACLRuleRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aclId?: string;
  acrId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aclId: 'AclId',
      acrId: 'AcrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aclId: 'string',
      acrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteACLRuleResponseBody extends $tea.Model {
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

export class DeleteACLRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteACLRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteACLRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceId?: string;
  resourceType?: string;
  newResourceGroupId?: string;
  regionId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceId: 'string',
      resourceType: 'string',
      newResourceGroupId: 'string',
      regionId: 'string',
      ownerAccount: 'string',
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
  headers: { [key: string]: string };
  body: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagVbrRelationsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  vbrRegionId?: string;
  vbrInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      vbrRegionId: 'VbrRegionId',
      vbrInstanceIds: 'VbrInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      vbrRegionId: 'string',
      vbrInstanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagVbrRelationsResponseBody extends $tea.Model {
  requestId?: string;
  sagVbrRelations?: DescribeSagVbrRelationsResponseBodySagVbrRelations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sagVbrRelations: 'SagVbrRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sagVbrRelations: { 'type': 'array', 'itemType': DescribeSagVbrRelationsResponseBodySagVbrRelations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagVbrRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagVbrRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagVbrRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewayClientUserRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  userName?: string;
  clientIp?: string;
  userMail?: string;
  bandwidth?: number;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
      clientIp: 'ClientIp',
      userMail: 'UserMail',
      bandwidth: 'Bandwidth',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      userName: 'string',
      clientIp: 'string',
      userMail: 'string',
      bandwidth: 'number',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewayClientUserResponseBody extends $tea.Model {
  userName?: string;
  requestId?: string;
  userMail?: string;
  bandwidth?: number;
  clientIp?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      requestId: 'RequestId',
      userMail: 'UserMail',
      bandwidth: 'Bandwidth',
      clientIp: 'ClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      requestId: 'string',
      userMail: 'string',
      bandwidth: 'number',
      clientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewayClientUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSmartAccessGatewayClientUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSmartAccessGatewayClientUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQosAttributeRequest extends $tea.Model {
  regionId?: string;
  qosId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      qosId: 'QosId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      qosId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQosAttributeResponseBody extends $tea.Model {
  qosPolicies?: GetQosAttributeResponseBodyQosPolicies[];
  qosCars?: GetQosAttributeResponseBodyQosCars[];
  requestId?: string;
  errorConfigSmartAGCount?: number;
  qosName?: string;
  qosDescription?: string;
  static names(): { [key: string]: string } {
    return {
      qosPolicies: 'QosPolicies',
      qosCars: 'QosCars',
      requestId: 'RequestId',
      errorConfigSmartAGCount: 'ErrorConfigSmartAGCount',
      qosName: 'QosName',
      qosDescription: 'QosDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosPolicies: { 'type': 'array', 'itemType': GetQosAttributeResponseBodyQosPolicies },
      qosCars: { 'type': 'array', 'itemType': GetQosAttributeResponseBodyQosCars },
      requestId: 'string',
      errorConfigSmartAGCount: 'number',
      qosName: 'string',
      qosDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQosAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQosAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQosAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHealthCheckRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  name?: string;
  description?: string;
  type?: string;
  dstIpAddr?: string;
  dstPort?: number;
  srcIpAddr?: string;
  srcPort?: number;
  probeInterval?: number;
  probeCount?: number;
  probeTimeout?: number;
  rttThreshold?: number;
  rttFailThreshold?: number;
  failCountThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      name: 'Name',
      description: 'Description',
      type: 'Type',
      dstIpAddr: 'DstIpAddr',
      dstPort: 'DstPort',
      srcIpAddr: 'SrcIpAddr',
      srcPort: 'SrcPort',
      probeInterval: 'ProbeInterval',
      probeCount: 'ProbeCount',
      probeTimeout: 'ProbeTimeout',
      rttThreshold: 'RttThreshold',
      rttFailThreshold: 'RttFailThreshold',
      failCountThreshold: 'FailCountThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      name: 'string',
      description: 'string',
      type: 'string',
      dstIpAddr: 'string',
      dstPort: 'number',
      srcIpAddr: 'string',
      srcPort: 'number',
      probeInterval: 'number',
      probeCount: 'number',
      probeTimeout: 'number',
      rttThreshold: 'number',
      rttFailThreshold: 'number',
      failCountThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHealthCheckResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHealthCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateHealthCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHealthCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRemoteAccessRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  serialNumber?: string;
  remoteAccessIp?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      serialNumber: 'SerialNumber',
      remoteAccessIp: 'RemoteAccessIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      serialNumber: 'string',
      remoteAccessIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRemoteAccessResponseBody extends $tea.Model {
  serialNumber?: string;
  requestId?: string;
  message?: string;
  remoteAccessIp?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      requestId: 'RequestId',
      message: 'Message',
      remoteAccessIp: 'RemoteAccessIp',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      requestId: 'string',
      message: 'string',
      remoteAccessIp: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRemoteAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagRemoteAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagRemoteAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSagInstanceFromCcnRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  ccnInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      ccnInstanceId: 'CcnInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      ccnInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSagInstanceFromCcnResponseBody extends $tea.Model {
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

export class RevokeSagInstanceFromCcnResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RevokeSagInstanceFromCcnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RevokeSagInstanceFromCcnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseCodeRequest extends $tea.Model {
  regionId?: string;
  enterpriseCode?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      enterpriseCode: 'EnterpriseCode',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      enterpriseCode: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseCodeResponseBody extends $tea.Model {
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

export class DeleteEnterpriseCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEnterpriseCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEnterpriseCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmartAccessGatewayClientUserRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmartAccessGatewayClientUserResponseBody extends $tea.Model {
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

export class DeleteSmartAccessGatewayClientUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSmartAccessGatewayClientUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSmartAccessGatewayClientUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGByAccessPointRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  pageSize?: number;
  accessPointId?: number;
  pageNumber?: number;
  smartAGStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pageSize: 'PageSize',
      accessPointId: 'AccessPointId',
      pageNumber: 'PageNumber',
      smartAGStatus: 'SmartAGStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      pageSize: 'number',
      accessPointId: 'number',
      pageNumber: 'number',
      smartAGStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGByAccessPointResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  smartAccessGateways?: ListSmartAGByAccessPointResponseBodySmartAccessGateways[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      smartAccessGateways: 'SmartAccessGateways',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      smartAccessGateways: { 'type': 'array', 'itemType': ListSmartAGByAccessPointResponseBodySmartAccessGateways },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGByAccessPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSmartAGByAccessPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSmartAGByAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  associatedCcnId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      associatedCcnId: 'AssociatedCcnId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      associatedCcnId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  grantRules?: DescribeGrantRulesResponseBodyGrantRules;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      grantRules: 'GrantRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      grantRules: DescribeGrantRulesResponseBodyGrantRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGrantRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGrantRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSagExpressConnectInterfaceRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  portName?: string;
  vlan?: string;
  IP?: string;
  mask?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      portName: 'PortName',
      vlan: 'Vlan',
      IP: 'IP',
      mask: 'Mask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      portName: 'string',
      vlan: 'string',
      IP: 'string',
      mask: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSagExpressConnectInterfaceResponseBody extends $tea.Model {
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

export class CreateSagExpressConnectInterfaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSagExpressConnectInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSagExpressConnectInterfaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSmartAccessGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ccnId?: string;
  smartAGId?: string;
  regionId?: string;
  smartAGUid?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ccnId: 'CcnId',
      smartAGId: 'SmartAGId',
      regionId: 'RegionId',
      smartAGUid: 'SmartAGUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ccnId: 'string',
      smartAGId: 'string',
      regionId: 'string',
      smartAGUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSmartAccessGatewayResponseBody extends $tea.Model {
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

export class UnbindSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindSmartAccessGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  maxBandWidth?: number;
  name?: string;
  description?: string;
  period?: number;
  autoPay?: boolean;
  hardWareSpec?: string;
  receiverCountry?: string;
  receiverState?: string;
  receiverCity?: string;
  receiverDistrict?: string;
  receiverTown?: string;
  receiverZip?: string;
  receiverPhone?: string;
  receiverMobile?: string;
  receiverName?: string;
  receiverEmail?: string;
  buyerMessage?: string;
  receiverAddress?: string;
  haType?: string;
  chargeType?: string;
  alreadyHaveSag?: boolean;
  CPEVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      maxBandWidth: 'MaxBandWidth',
      name: 'Name',
      description: 'Description',
      period: 'Period',
      autoPay: 'AutoPay',
      hardWareSpec: 'HardWareSpec',
      receiverCountry: 'ReceiverCountry',
      receiverState: 'ReceiverState',
      receiverCity: 'ReceiverCity',
      receiverDistrict: 'ReceiverDistrict',
      receiverTown: 'ReceiverTown',
      receiverZip: 'ReceiverZip',
      receiverPhone: 'ReceiverPhone',
      receiverMobile: 'ReceiverMobile',
      receiverName: 'ReceiverName',
      receiverEmail: 'ReceiverEmail',
      buyerMessage: 'BuyerMessage',
      receiverAddress: 'ReceiverAddress',
      haType: 'HaType',
      chargeType: 'ChargeType',
      alreadyHaveSag: 'AlreadyHaveSag',
      CPEVersion: 'CPEVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      maxBandWidth: 'number',
      name: 'string',
      description: 'string',
      period: 'number',
      autoPay: 'boolean',
      hardWareSpec: 'string',
      receiverCountry: 'string',
      receiverState: 'string',
      receiverCity: 'string',
      receiverDistrict: 'string',
      receiverTown: 'string',
      receiverZip: 'string',
      receiverPhone: 'string',
      receiverMobile: 'string',
      receiverName: 'string',
      receiverEmail: 'string',
      buyerMessage: 'string',
      receiverAddress: 'string',
      haType: 'string',
      chargeType: 'string',
      alreadyHaveSag: 'boolean',
      CPEVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewayResponseBody extends $tea.Model {
  description?: string;
  requestId?: string;
  orderId?: string;
  smartAGId?: string;
  name?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      orderId: 'OrderId',
      smartAGId: 'SmartAGId',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      orderId: 'string',
      smartAGId: 'string',
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSmartAccessGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowLogRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  flowLogId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      flowLogId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowLogResponseBody extends $tea.Model {
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

export class DeleteFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagOnlineClientStatisticsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGIds: 'SmartAGIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagOnlineClientStatisticsResponseBody extends $tea.Model {
  sagStatistics?: DescribeSagOnlineClientStatisticsResponseBodySagStatistics;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      sagStatistics: 'SagStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sagStatistics: DescribeSagOnlineClientStatisticsResponseBodySagStatistics,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagOnlineClientStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagOnlineClientStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagOnlineClientStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudConnectNetworkRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ccnId?: string;
  name?: string;
  description?: string;
  regionId?: string;
  cidrBlock?: string;
  interworkingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ccnId: 'CcnId',
      name: 'Name',
      description: 'Description',
      regionId: 'RegionId',
      cidrBlock: 'CidrBlock',
      interworkingStatus: 'InterworkingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ccnId: 'string',
      name: 'string',
      description: 'string',
      regionId: 'string',
      cidrBlock: 'string',
      interworkingStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudConnectNetworkResponseBody extends $tea.Model {
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

export class ModifyCloudConnectNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCloudConnectNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCloudConnectNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayUpBandwidthRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  regionId?: string;
  upBandwidthWan?: number;
  upBandwidth4G?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      regionId: 'RegionId',
      upBandwidthWan: 'UpBandwidthWan',
      upBandwidth4G: 'UpBandwidth4G',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      regionId: 'string',
      upBandwidthWan: 'number',
      upBandwidth4G: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayUpBandwidthResponseBody extends $tea.Model {
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

export class ModifySmartAccessGatewayUpBandwidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySmartAccessGatewayUpBandwidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySmartAccessGatewayUpBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantSagInstanceToCcnRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  ccnInstanceId?: string;
  ccnUid?: number;
  grantTrafficService?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      ccnInstanceId: 'CcnInstanceId',
      ccnUid: 'CcnUid',
      grantTrafficService: 'GrantTrafficService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      ccnInstanceId: 'string',
      ccnUid: 'number',
      grantTrafficService: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantSagInstanceToCcnResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantSagInstanceToCcnResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GrantSagInstanceToCcnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GrantSagInstanceToCcnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrchestrateSagECRouteBackupRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrchestrateSagECRouteBackupResponseBody extends $tea.Model {
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

export class OrchestrateSagECRouteBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OrchestrateSagECRouteBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OrchestrateSagECRouteBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  name?: string;
  description?: string;
  cidrBlock?: string;
  regionId?: string;
  securityLockThreshold?: number;
  routingStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      name: 'Name',
      description: 'Description',
      cidrBlock: 'CidrBlock',
      regionId: 'RegionId',
      securityLockThreshold: 'SecurityLockThreshold',
      routingStrategy: 'RoutingStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      name: 'string',
      description: 'string',
      cidrBlock: 'string',
      regionId: 'string',
      securityLockThreshold: 'number',
      routingStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayResponseBody extends $tea.Model {
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

export class ModifySmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySmartAccessGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayVersionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  versionCode?: string;
  regionId?: string;
  serialNumber?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      versionCode: 'VersionCode',
      regionId: 'RegionId',
      serialNumber: 'SerialNumber',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      versionCode: 'string',
      regionId: 'string',
      serialNumber: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayVersionResponseBody extends $tea.Model {
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

export class UpdateSmartAccessGatewayVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSmartAccessGatewayVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSmartAccessGatewayVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagCidrRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  cidr?: string;
  smartAGId?: string;
  enableBackup?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      cidr: 'Cidr',
      smartAGId: 'SmartAGId',
      enableBackup: 'EnableBackup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      cidr: 'string',
      smartAGId: 'string',
      enableBackup: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagCidrResponseBody extends $tea.Model {
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

export class ModifySagCidrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagCidrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagCidrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagDropTopNRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagDropTopNResponseBody extends $tea.Model {
  requestId?: string;
  dropTopN?: DescribeSagDropTopNResponseBodyDropTopN[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dropTopN: 'DropTopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dropTopN: { 'type': 'array', 'itemType': DescribeSagDropTopNResponseBodyDropTopN },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagDropTopNResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagDropTopNResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagDropTopNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagLanListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagLanListResponseBody extends $tea.Model {
  requestId?: string;
  taskStates?: DescribeSagLanListResponseBodyTaskStates[];
  lans?: DescribeSagLanListResponseBodyLans[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskStates: 'TaskStates',
      lans: 'Lans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagLanListResponseBodyTaskStates },
      lans: { 'type': 'array', 'itemType': DescribeSagLanListResponseBodyLans },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagLanListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagLanListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagLanListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePbrRulesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  pbrInstanceId?: string;
  pageSize?: string;
  pageNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pbrInstanceId: 'PbrInstanceId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      pbrInstanceId: 'string',
      pageSize: 'string',
      pageNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePbrRulesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pbrRules?: DescribePbrRulesResponseBodyPbrRules;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pbrRules: 'PbrRules',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pbrRules: DescribePbrRulesResponseBodyPbrRules,
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePbrRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePbrRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePbrRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aclId?: string;
  pageSize?: number;
  pageNumber?: number;
  direction?: string;
  order?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aclId: 'AclId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      direction: 'Direction',
      order: 'Order',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aclId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      direction: 'string',
      order: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  acrs?: DescribeACLAttributeResponseBodyAcrs;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      acrs: 'Acrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      acrs: DescribeACLAttributeResponseBodyAcrs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeACLAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeACLAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSagExpressConnectInterfaceRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  portName?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      portName: 'PortName',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      portName: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSagExpressConnectInterfaceResponseBody extends $tea.Model {
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

export class DeleteSagExpressConnectInterfaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSagExpressConnectInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSagExpressConnectInterfaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseCodeRequest extends $tea.Model {
  regionId?: string;
  enterpriseCode?: string;
  isDefault?: boolean;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      enterpriseCode: 'EnterpriseCode',
      isDefault: 'IsDefault',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      enterpriseCode: 'string',
      isDefault: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseCodeResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  enterpriseCodes?: ListEnterpriseCodeResponseBodyEnterpriseCodes[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      enterpriseCodes: 'EnterpriseCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
      enterpriseCodes: { 'type': 'array', 'itemType': ListEnterpriseCodeResponseBodyEnterpriseCodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEnterpriseCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEnterpriseCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewaySoftwareRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  period?: number;
  autoPay?: boolean;
  chargeType?: string;
  userCount?: number;
  dataPlan?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      period: 'Period',
      autoPay: 'AutoPay',
      chargeType: 'ChargeType',
      userCount: 'UserCount',
      dataPlan: 'DataPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      period: 'number',
      autoPay: 'boolean',
      chargeType: 'string',
      userCount: 'number',
      dataPlan: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewaySoftwareResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  smartAGId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
      smartAGId: 'SmartAGId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
      smartAGId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewaySoftwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSmartAccessGatewaySoftwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSmartAccessGatewaySoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  qosIds?: string;
  qosName?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      qosIds: 'QosIds',
      qosName: 'QosName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      qosIds: 'string',
      qosName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  qoses?: DescribeQosesResponseBodyQoses;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      qoses: 'Qoses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      qoses: DescribeQosesResponseBodyQoses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeQosesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeQosesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeSmartAccessGatewaySoftwareRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  regionId?: string;
  autoPay?: boolean;
  dataPlan?: number;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      regionId: 'RegionId',
      autoPay: 'AutoPay',
      dataPlan: 'DataPlan',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      regionId: 'string',
      autoPay: 'boolean',
      dataPlan: 'number',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeSmartAccessGatewaySoftwareResponseBody extends $tea.Model {
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

export class UpgradeSmartAccessGatewaySoftwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeSmartAccessGatewaySoftwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeSmartAccessGatewaySoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagCurrentDnsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagCurrentDnsResponseBody extends $tea.Model {
  requestId?: string;
  slaveDns?: string;
  masterDns?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slaveDns: 'SlaveDns',
      masterDns: 'MasterDns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slaveDns: 'string',
      masterDns: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagCurrentDnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagCurrentDnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagCurrentDnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  associatedCcnId?: string;
  smartAGId?: string;
  status?: string;
  name?: string;
  pageSize?: number;
  pageNumber?: number;
  serialNumber?: string;
  aclIds?: string;
  unboundAclIds?: string;
  instanceType?: string;
  canAssociateQos?: boolean;
  hardwareType?: string;
  softwareVersion?: string;
  versionComparator?: string;
  businessState?: string;
  resourceGroupId?: string;
  smartAGIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      associatedCcnId: 'AssociatedCcnId',
      smartAGId: 'SmartAGId',
      status: 'Status',
      name: 'Name',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      serialNumber: 'SerialNumber',
      aclIds: 'AclIds',
      unboundAclIds: 'UnboundAclIds',
      instanceType: 'InstanceType',
      canAssociateQos: 'CanAssociateQos',
      hardwareType: 'HardwareType',
      softwareVersion: 'SoftwareVersion',
      versionComparator: 'VersionComparator',
      businessState: 'BusinessState',
      resourceGroupId: 'ResourceGroupId',
      smartAGIds: 'SmartAGIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      associatedCcnId: 'string',
      smartAGId: 'string',
      status: 'string',
      name: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      serialNumber: 'string',
      aclIds: 'string',
      unboundAclIds: 'string',
      instanceType: 'string',
      canAssociateQos: 'boolean',
      hardwareType: 'string',
      softwareVersion: 'string',
      versionComparator: 'string',
      businessState: 'string',
      resourceGroupId: 'string',
      smartAGIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  smartAccessGateways?: DescribeSmartAccessGatewaysResponseBodySmartAccessGateways;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      smartAccessGateways: 'SmartAccessGateways',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      smartAccessGateways: DescribeSmartAccessGatewaysResponseBodySmartAccessGateways,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSmartAccessGatewaysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSmartAccessGatewaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosCarsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  qosId?: string;
  qosCarId?: string;
  order?: string;
  description?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      qosId: 'QosId',
      qosCarId: 'QosCarId',
      order: 'Order',
      description: 'Description',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      qosId: 'string',
      qosCarId: 'string',
      order: 'string',
      description: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosCarsResponseBody extends $tea.Model {
  totalCount?: number;
  qosCars?: DescribeQosCarsResponseBodyQosCars;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      qosCars: 'QosCars',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      qosCars: DescribeQosCarsResponseBodyQosCars,
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosCarsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeQosCarsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeQosCarsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientStatisticsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      userNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientStatisticsResponseBody extends $tea.Model {
  userStatistics?: DescribeUserOnlineClientStatisticsResponseBodyUserStatistics;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      userStatistics: 'UserStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userStatistics: DescribeUserOnlineClientStatisticsResponseBodyUserStatistics,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserOnlineClientStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserOnlineClientStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseCodeRequest extends $tea.Model {
  regionId?: string;
  enterpriseCode?: string;
  isDefault?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      enterpriseCode: 'EnterpriseCode',
      isDefault: 'IsDefault',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      enterpriseCode: 'string',
      isDefault: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseCodeResponseBody extends $tea.Model {
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

export class UpdateEnterpriseCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEnterpriseCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEnterpriseCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindVbrRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  vbrId?: string;
  vbrRegionId?: string;
  smartAGUid?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      vbrId: 'VbrId',
      vbrRegionId: 'VbrRegionId',
      smartAGUid: 'SmartAGUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      vbrId: 'string',
      vbrRegionId: 'string',
      smartAGUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindVbrResponseBody extends $tea.Model {
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

export class BindVbrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindVbrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindVbrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolBgpRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolBgpResponseBody extends $tea.Model {
  holdTime?: number;
  requestId?: string;
  keepAlive?: number;
  localAs?: number;
  routerId?: string;
  taskStates?: DescribeSagRouteProtocolBgpResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      holdTime: 'HoldTime',
      requestId: 'RequestId',
      keepAlive: 'KeepAlive',
      localAs: 'LocalAs',
      routerId: 'RouterId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      holdTime: 'number',
      requestId: 'string',
      keepAlive: 'number',
      localAs: 'number',
      routerId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagRouteProtocolBgpResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolBgpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagRouteProtocolBgpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagRouteProtocolBgpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSmartAccessGatewayUserRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userName?: string;
  smartAGId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userName: 'UserName',
      smartAGId: 'SmartAGId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userName: 'string',
      smartAGId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSmartAccessGatewayUserResponseBody extends $tea.Model {
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

export class DisableSmartAccessGatewayUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableSmartAccessGatewayUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableSmartAccessGatewayUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnatEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  sagId?: string;
  dnatEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      sagId: 'SagId',
      dnatEntryId: 'DnatEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      sagId: 'string',
      dnatEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnatEntryResponseBody extends $tea.Model {
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

export class DeleteDnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDnatEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSagRouteableAddressRequest extends $tea.Model {
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  sagId?: string;
  routeableAddress?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      sagId: 'SagId',
      routeableAddress: 'RouteableAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      sagId: 'string',
      routeableAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSagRouteableAddressResponseBody extends $tea.Model {
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

export class SetSagRouteableAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetSagRouteableAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetSagRouteableAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aclId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aclId: 'AclId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aclId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLResponseBody extends $tea.Model {
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

export class ModifyACLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyACLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyACLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAccessGatewayUseLimitRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAccessGatewayUseLimitResponseBody extends $tea.Model {
  usedAmount?: number;
  requestId?: string;
  totalAmount?: number;
  static names(): { [key: string]: string } {
    return {
      usedAmount: 'UsedAmount',
      requestId: 'RequestId',
      totalAmount: 'TotalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usedAmount: 'number',
      requestId: 'string',
      totalAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAccessGatewayUseLimitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSmartAccessGatewayUseLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSmartAccessGatewayUseLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmartAccessGatewayRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmartAccessGatewayResponseBody extends $tea.Model {
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

export class DeleteSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSmartAccessGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantInstanceToCbnRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  cenUid?: number;
  ccnInstanceId?: string;
  cenInstanceId?: string;
  regionId?: string;
  grantTrafficService?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      cenUid: 'CenUid',
      ccnInstanceId: 'CcnInstanceId',
      cenInstanceId: 'CenInstanceId',
      regionId: 'RegionId',
      grantTrafficService: 'GrantTrafficService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      cenUid: 'number',
      ccnInstanceId: 'string',
      cenInstanceId: 'string',
      regionId: 'string',
      grantTrafficService: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantInstanceToCbnResponseBody extends $tea.Model {
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

export class GrantInstanceToCbnResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GrantInstanceToCbnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GrantInstanceToCbnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSnatEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  cidrBlock?: string;
  snatIp?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      cidrBlock: 'CidrBlock',
      snatIp: 'SnatIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      cidrBlock: 'string',
      snatIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSnatEntryResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSnatEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSmartAGDpiMonitorRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSmartAGDpiMonitorResponseBody extends $tea.Model {
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

export class DisableSmartAGDpiMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableSmartAGDpiMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableSmartAGDpiMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatEntriesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
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
      regionId: 'string',
      smartAGId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatEntriesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  snatEntries?: DescribeSnatEntriesResponseBodySnatEntries;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snatEntries: 'SnatEntries',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      snatEntries: DescribeSnatEntriesResponseBodySnatEntries,
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSnatEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSnatEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClientUserDNSRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  appDNS?: string[];
  recoveredDNS?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      appDNS: 'AppDNS',
      recoveredDNS: 'RecoveredDNS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      appDNS: { 'type': 'array', 'itemType': 'string' },
      recoveredDNS: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClientUserDNSResponseBody extends $tea.Model {
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

export class ModifyClientUserDNSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClientUserDNSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClientUserDNSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRouteProtocolBgpRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  routerId?: string;
  localAs?: number;
  holdTime?: number;
  keepAlive?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      routerId: 'RouterId',
      localAs: 'LocalAs',
      holdTime: 'HoldTime',
      keepAlive: 'KeepAlive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      routerId: 'string',
      localAs: 'number',
      holdTime: 'number',
      keepAlive: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRouteProtocolBgpResponseBody extends $tea.Model {
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

export class ModifySagRouteProtocolBgpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagRouteProtocolBgpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagRouteProtocolBgpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQosCarRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  description?: string;
  regionId?: string;
  qosId?: string;
  qosCarId?: string;
  priority?: number;
  limitType?: string;
  minBandwidthAbs?: number;
  maxBandwidthAbs?: number;
  minBandwidthPercent?: number;
  maxBandwidthPercent?: number;
  percentSourceType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      description: 'Description',
      regionId: 'RegionId',
      qosId: 'QosId',
      qosCarId: 'QosCarId',
      priority: 'Priority',
      limitType: 'LimitType',
      minBandwidthAbs: 'MinBandwidthAbs',
      maxBandwidthAbs: 'MaxBandwidthAbs',
      minBandwidthPercent: 'MinBandwidthPercent',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      percentSourceType: 'PercentSourceType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      description: 'string',
      regionId: 'string',
      qosId: 'string',
      qosCarId: 'string',
      priority: 'number',
      limitType: 'string',
      minBandwidthAbs: 'number',
      maxBandwidthAbs: 'number',
      minBandwidthPercent: 'number',
      maxBandwidthPercent: 'number',
      percentSourceType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQosCarResponseBody extends $tea.Model {
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

export class ModifyQosCarResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyQosCarResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyQosCarResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowLogRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  description?: string;
  name?: string;
  activeAging?: number;
  inactiveAging?: number;
  outputType?: string;
  slsRegionId?: string;
  projectName?: string;
  logstoreName?: string;
  netflowServerIp?: string;
  netflowServerPort?: number;
  netflowVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      description: 'Description',
      name: 'Name',
      activeAging: 'ActiveAging',
      inactiveAging: 'InactiveAging',
      outputType: 'OutputType',
      slsRegionId: 'SlsRegionId',
      projectName: 'ProjectName',
      logstoreName: 'LogstoreName',
      netflowServerIp: 'NetflowServerIp',
      netflowServerPort: 'NetflowServerPort',
      netflowVersion: 'NetflowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      description: 'string',
      name: 'string',
      activeAging: 'number',
      inactiveAging: 'number',
      outputType: 'string',
      slsRegionId: 'string',
      projectName: 'string',
      logstoreName: 'string',
      netflowServerIp: 'string',
      netflowServerPort: 'number',
      netflowVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowLogResponseBody extends $tea.Model {
  requestId?: string;
  flowLogId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowLogId: 'FlowLogId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowLogId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceAutoUpgradePolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  serialNumber?: string;
  cronExpression?: string;
  upgradeType?: string;
  duration?: number;
  timeZone?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      serialNumber: 'SerialNumber',
      cronExpression: 'CronExpression',
      upgradeType: 'UpgradeType',
      duration: 'Duration',
      timeZone: 'TimeZone',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      serialNumber: 'string',
      cronExpression: 'string',
      upgradeType: 'string',
      duration: 'number',
      timeZone: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceAutoUpgradePolicyResponseBody extends $tea.Model {
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

export class ModifyDeviceAutoUpgradePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDeviceAutoUpgradePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDeviceAutoUpgradePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientUserDNSRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientUserDNSResponseBody extends $tea.Model {
  appDNS?: string[];
  requestId?: string;
  recoveredDNS?: string[];
  static names(): { [key: string]: string } {
    return {
      appDNS: 'AppDNS',
      requestId: 'RequestId',
      recoveredDNS: 'RecoveredDNS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDNS: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      recoveredDNS: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientUserDNSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClientUserDNSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClientUserDNSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearSagCipherRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  sagId?: string;
  snNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      sagId: 'SagId',
      snNumber: 'SnNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      sagId: 'string',
      snNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearSagCipherResponseBody extends $tea.Model {
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

export class ClearSagCipherResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClearSagCipherResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClearSagCipherResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWan4GRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWan4GResponseBody extends $tea.Model {
  status?: string;
  trafficState?: string;
  requestId?: string;
  priority?: number;
  ip?: string;
  strength?: string;
  mac?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      trafficState: 'TrafficState',
      requestId: 'RequestId',
      priority: 'Priority',
      ip: 'Ip',
      strength: 'Strength',
      mac: 'Mac',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      trafficState: 'string',
      requestId: 'string',
      priority: 'number',
      ip: 'string',
      strength: 'string',
      mac: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWan4GResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagWan4GResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagWan4GResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagUserDnsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  masterDns?: string;
  slaveDns?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      masterDns: 'MasterDns',
      slaveDns: 'SlaveDns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      masterDns: 'string',
      slaveDns: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagUserDnsResponseBody extends $tea.Model {
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

export class ModifySagUserDnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagUserDnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagUserDnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagManagementPortRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  IP?: string;
  mask?: string;
  gateway?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      IP: 'IP',
      mask: 'Mask',
      gateway: 'Gateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      IP: 'string',
      mask: 'string',
      gateway: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagManagementPortResponseBody extends $tea.Model {
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

export class ModifySagManagementPortResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagManagementPortResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagManagementPortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnatEntriesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  sagId?: string;
  type?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      sagId: 'SagId',
      type: 'Type',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      sagId: 'string',
      type: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnatEntriesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  dnatEntries?: DescribeDnatEntriesResponseBodyDnatEntries;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      dnatEntries: 'DnatEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      dnatEntries: DescribeDnatEntriesResponseBodyDnatEntries,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnatEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnatEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnatEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayVersionsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayVersionsResponseBody extends $tea.Model {
  requestId?: string;
  smartAGVersions?: DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      smartAGVersions: 'SmartAGVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      smartAGVersions: DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSmartAccessGatewayVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSmartAccessGatewayVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromCbnRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ccnInstanceId?: string;
  regionId?: string;
  cenInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ccnInstanceId: 'CcnInstanceId',
      regionId: 'RegionId',
      cenInstanceId: 'CenInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ccnInstanceId: 'string',
      regionId: 'string',
      cenInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromCbnResponseBody extends $tea.Model {
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

export class RevokeInstanceFromCbnResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RevokeInstanceFromCbnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RevokeInstanceFromCbnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRemoteAccessRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  serialNumber?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      serialNumber: 'SerialNumber',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      serialNumber: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRemoteAccessResponseBody extends $tea.Model {
  remoteAccesses?: DescribeSagRemoteAccessResponseBodyRemoteAccesses;
  message?: string;
  requestId?: string;
  smartAGId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      remoteAccesses: 'RemoteAccesses',
      message: 'Message',
      requestId: 'RequestId',
      smartAGId: 'SmartAGId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteAccesses: DescribeSagRemoteAccessResponseBodyRemoteAccesses,
      message: 'string',
      requestId: 'string',
      smartAGId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRemoteAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagRemoteAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagRemoteAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosPolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  description?: string;
  regionId?: string;
  qosId?: string;
  priority?: number;
  sourceCidr?: string;
  destCidr?: string;
  ipProtocol?: string;
  sourcePortRange?: string;
  destPortRange?: string;
  startTime?: string;
  endTime?: string;
  name?: string;
  dpiSignatureIds?: string[];
  dpiGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      description: 'Description',
      regionId: 'RegionId',
      qosId: 'QosId',
      priority: 'Priority',
      sourceCidr: 'SourceCidr',
      destCidr: 'DestCidr',
      ipProtocol: 'IpProtocol',
      sourcePortRange: 'SourcePortRange',
      destPortRange: 'DestPortRange',
      startTime: 'StartTime',
      endTime: 'EndTime',
      name: 'Name',
      dpiSignatureIds: 'DpiSignatureIds',
      dpiGroupIds: 'DpiGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      description: 'string',
      regionId: 'string',
      qosId: 'string',
      priority: 'number',
      sourceCidr: 'string',
      destCidr: 'string',
      ipProtocol: 'string',
      sourcePortRange: 'string',
      destPortRange: 'string',
      startTime: 'string',
      endTime: 'string',
      name: 'string',
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosPolicyResponseBody extends $tea.Model {
  description?: string;
  endTime?: string;
  requestId?: string;
  qosPolicyId?: string;
  sourcePortRange?: string;
  sourceCidr?: string;
  priority?: number;
  startTime?: string;
  destPortRange?: string;
  dpiGroupIds?: CreateQosPolicyResponseBodyDpiGroupIds;
  name?: string;
  destCidr?: string;
  dpiSignatureIds?: CreateQosPolicyResponseBodyDpiSignatureIds;
  qosId?: string;
  ipProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endTime: 'EndTime',
      requestId: 'RequestId',
      qosPolicyId: 'QosPolicyId',
      sourcePortRange: 'SourcePortRange',
      sourceCidr: 'SourceCidr',
      priority: 'Priority',
      startTime: 'StartTime',
      destPortRange: 'DestPortRange',
      dpiGroupIds: 'DpiGroupIds',
      name: 'Name',
      destCidr: 'DestCidr',
      dpiSignatureIds: 'DpiSignatureIds',
      qosId: 'QosId',
      ipProtocol: 'IpProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endTime: 'string',
      requestId: 'string',
      qosPolicyId: 'string',
      sourcePortRange: 'string',
      sourceCidr: 'string',
      priority: 'number',
      startTime: 'string',
      destPortRange: 'string',
      dpiGroupIds: CreateQosPolicyResponseBodyDpiGroupIds,
      name: 'string',
      destCidr: 'string',
      dpiSignatureIds: CreateQosPolicyResponseBodyDpiSignatureIds,
      qosId: 'string',
      ipProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQosPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQosPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagECRouteBackupAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagECRouteBackupAttributeResponseBody extends $tea.Model {
  status?: string;
  hcIp?: string;
  requestId?: string;
  expressConnectionInterface?: string;
  routeBackup?: boolean;
  expressConnectionNexthop?: string;
  sagId?: string;
  cidrs?: DescribeSagECRouteBackupAttributeResponseBodyCidrs;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      hcIp: 'HcIp',
      requestId: 'RequestId',
      expressConnectionInterface: 'ExpressConnectionInterface',
      routeBackup: 'RouteBackup',
      expressConnectionNexthop: 'ExpressConnectionNexthop',
      sagId: 'SagId',
      cidrs: 'Cidrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      hcIp: 'string',
      requestId: 'string',
      expressConnectionInterface: 'string',
      routeBackup: 'boolean',
      expressConnectionNexthop: 'string',
      sagId: 'string',
      cidrs: DescribeSagECRouteBackupAttributeResponseBodyCidrs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagECRouteBackupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagECRouteBackupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagECRouteBackupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogSagsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  flowLogId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      flowLogId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogSagsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  sags?: DescribeFlowLogSagsResponseBodySags;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      sags: 'Sags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      sags: DescribeFlowLogSagsResponseBodySags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogSagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowLogSagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowLogSagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagWifiRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  isEnable?: string;
  SSID?: string;
  isBroadcast?: string;
  channel?: string;
  bandwidth?: string;
  isAuth?: string;
  authenticationType?: string;
  encryptAlgorithm?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      isEnable: 'IsEnable',
      SSID: 'SSID',
      isBroadcast: 'IsBroadcast',
      channel: 'Channel',
      bandwidth: 'Bandwidth',
      isAuth: 'IsAuth',
      authenticationType: 'AuthenticationType',
      encryptAlgorithm: 'EncryptAlgorithm',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      isEnable: 'string',
      SSID: 'string',
      isBroadcast: 'string',
      channel: 'string',
      bandwidth: 'string',
      isAuth: 'string',
      authenticationType: 'string',
      encryptAlgorithm: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagWifiResponseBody extends $tea.Model {
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

export class ModifySagWifiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagWifiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagWifiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagWanRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  portName?: string;
  IPType?: string;
  IP?: string;
  mask?: string;
  gateway?: string;
  username?: string;
  password?: string;
  priority?: number;
  weight?: number;
  ISP?: string;
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      portName: 'PortName',
      IPType: 'IPType',
      IP: 'IP',
      mask: 'Mask',
      gateway: 'Gateway',
      username: 'Username',
      password: 'Password',
      priority: 'Priority',
      weight: 'Weight',
      ISP: 'ISP',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      portName: 'string',
      IPType: 'string',
      IP: 'string',
      mask: 'string',
      gateway: 'string',
      username: 'string',
      password: 'string',
      priority: 'number',
      weight: 'number',
      ISP: 'string',
      bandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagWanResponseBody extends $tea.Model {
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

export class ModifySagWanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySagWanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySagWanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayHaRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayHaResponseBody extends $tea.Model {
  deviceLevelBackupState?: string;
  requestId?: string;
  backupDeviceId?: string;
  linkBackupInfoList?: DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoList;
  smartAGId?: string;
  deviceLevelBackupType?: string;
  mainDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceLevelBackupState: 'DeviceLevelBackupState',
      requestId: 'RequestId',
      backupDeviceId: 'BackupDeviceId',
      linkBackupInfoList: 'LinkBackupInfoList',
      smartAGId: 'SmartAGId',
      deviceLevelBackupType: 'DeviceLevelBackupType',
      mainDeviceId: 'MainDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceLevelBackupState: 'string',
      requestId: 'string',
      backupDeviceId: 'string',
      linkBackupInfoList: DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoList,
      smartAGId: 'string',
      deviceLevelBackupType: 'string',
      mainDeviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayHaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSmartAccessGatewayHaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSmartAccessGatewayHaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudConnectNetworkRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ccnId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ccnId: 'CcnId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ccnId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudConnectNetworkResponseBody extends $tea.Model {
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

export class DeleteCloudConnectNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCloudConnectNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCloudConnectNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeSmartAccessGatewaySoftwareRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  regionId?: string;
  autoPay?: boolean;
  dataPlan?: number;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      regionId: 'RegionId',
      autoPay: 'AutoPay',
      dataPlan: 'DataPlan',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      regionId: 'string',
      autoPay: 'boolean',
      dataPlan: 'number',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeSmartAccessGatewaySoftwareResponseBody extends $tea.Model {
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

export class DowngradeSmartAccessGatewaySoftwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DowngradeSmartAccessGatewaySoftwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DowngradeSmartAccessGatewaySoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      acceptLanguage: 'string',
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

export class DescribeHealthChecksRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  hcInstanceId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      hcInstanceId: 'HcInstanceId',
      name: 'Name',
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
      regionId: 'string',
      smartAGId: 'string',
      hcInstanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthChecksResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  healthChecks?: DescribeHealthChecksResponseBodyHealthChecks;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      healthChecks: 'HealthChecks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      healthChecks: DescribeHealthChecksResponseBodyHealthChecks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthChecksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHealthChecksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHealthChecksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudConnectNetworkUseLimitRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudConnectNetworkUseLimitResponseBody extends $tea.Model {
  usedAmount?: number;
  requestId?: string;
  totalAmount?: number;
  static names(): { [key: string]: string } {
    return {
      usedAmount: 'UsedAmount',
      requestId: 'RequestId',
      totalAmount: 'TotalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usedAmount: 'number',
      requestId: 'string',
      totalAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudConnectNetworkUseLimitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCloudConnectNetworkUseLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCloudConnectNetworkUseLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  pageSize?: number;
  smartAGId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pageSize: 'PageSize',
      smartAGId: 'SmartAGId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      pageSize: 'number',
      smartAGId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointsResponseBody extends $tea.Model {
  accessPoints?: ListAccessPointsResponseBodyAccessPoints[];
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPoints: 'AccessPoints',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPoints: { 'type': 'array', 'itemType': ListAccessPointsResponseBodyAccessPoints },
      totalCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAccessPointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAccessPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQosCarRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  qosId?: string;
  qosCarId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      qosId: 'QosId',
      qosCarId: 'QosCarId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      qosId: 'string',
      qosCarId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQosCarResponseBody extends $tea.Model {
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

export class DeleteQosCarResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQosCarResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQosCarResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceAutoUpgradePolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  serialNumber?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      serialNumber: 'SerialNumber',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      serialNumber: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceAutoUpgradePolicyResponseBody extends $tea.Model {
  upgradeType?: string;
  timeZone?: string;
  serialNumber?: string;
  requestId?: string;
  jitter?: string;
  duration?: string;
  cronExpression?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      upgradeType: 'UpgradeType',
      timeZone: 'TimeZone',
      serialNumber: 'SerialNumber',
      requestId: 'RequestId',
      jitter: 'Jitter',
      duration: 'Duration',
      cronExpression: 'CronExpression',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      upgradeType: 'string',
      timeZone: 'string',
      serialNumber: 'string',
      requestId: 'string',
      jitter: 'string',
      duration: 'string',
      cronExpression: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceAutoUpgradePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceAutoUpgradePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceAutoUpgradePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiSignaturesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  nextToken?: string;
  maxResults?: number;
  dpiGroupId?: string;
  dpiSignatureIds?: string[];
  dpiSignatureNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      dpiGroupId: 'DpiGroupId',
      dpiSignatureIds: 'DpiSignatureIds',
      dpiSignatureNames: 'DpiSignatureNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      dpiGroupId: 'string',
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      dpiSignatureNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiSignaturesResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  requestId?: string;
  dpiSignature?: ListDpiSignaturesResponseBodyDpiSignature[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      dpiSignature: 'DpiSignature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      requestId: 'string',
      dpiSignature: { 'type': 'array', 'itemType': ListDpiSignaturesResponseBodyDpiSignature },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiSignaturesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDpiSignaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDpiSignaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindVbrRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  vbrId?: string;
  vbrRegionId?: string;
  smartAGUid?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      vbrId: 'VbrId',
      vbrRegionId: 'VbrRegionId',
      smartAGUid: 'SmartAGUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      vbrId: 'string',
      vbrRegionId: 'string',
      smartAGUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindVbrResponseBody extends $tea.Model {
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

export class UnbindVbrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindVbrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindVbrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindableSmartAccessGatewaysRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ccnId?: string;
  crossAccount?: boolean;
  pageSize?: number;
  pageNumber?: number;
  smartAGId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ccnId: 'CcnId',
      crossAccount: 'CrossAccount',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      smartAGId: 'SmartAGId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ccnId: 'string',
      crossAccount: 'boolean',
      pageSize: 'number',
      pageNumber: 'number',
      smartAGId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindableSmartAccessGatewaysResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  smartAccessGateways?: DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGateways;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      smartAccessGateways: 'SmartAccessGateways',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      smartAccessGateways: DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGateways,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindableSmartAccessGatewaysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBindableSmartAccessGatewaysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBindableSmartAccessGatewaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortListResponseBody extends $tea.Model {
  requestId?: string;
  ports?: DescribeSagPortListResponseBodyPorts[];
  taskStates?: DescribeSagPortListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ports: 'Ports',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ports: { 'type': 'array', 'itemType': DescribeSagPortListResponseBodyPorts },
      taskStates: { 'type': 'array', 'itemType': DescribeSagPortListResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSagPortListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSagPortListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiGroupsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  nextToken?: string;
  maxResults?: number;
  dpiGroupIds?: string[];
  dpiGroupNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      dpiGroupIds: 'DpiGroupIds',
      dpiGroupNames: 'DpiGroupNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
      dpiGroupNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiGroupsResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  requestId?: string;
  dpiGroup?: ListDpiGroupsResponseBodyDpiGroup[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      dpiGroup: 'DpiGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      requestId: 'string',
      dpiGroup: { 'type': 'array', 'itemType': ListDpiGroupsResponseBodyDpiGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDpiGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDpiGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagTrafficTopNResponseBodyTrafficTopN extends $tea.Model {
  trafficRate?: string;
  instanceId?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      trafficRate: 'TrafficRate',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficRate: 'string',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagVbrRulesResponseBodyGrantRulesGrantRule extends $tea.Model {
  vbrInstanceId?: string;
  vbrUid?: number;
  vbrRegionId?: string;
  createTime?: number;
  smartAGId?: string;
  bound?: boolean;
  instanceId?: string;
  smartAGUid?: number;
  static names(): { [key: string]: string } {
    return {
      vbrInstanceId: 'VbrInstanceId',
      vbrUid: 'VbrUid',
      vbrRegionId: 'VbrRegionId',
      createTime: 'CreateTime',
      smartAGId: 'SmartAGId',
      bound: 'Bound',
      instanceId: 'InstanceId',
      smartAGUid: 'SmartAGUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vbrInstanceId: 'string',
      vbrUid: 'number',
      vbrRegionId: 'string',
      createTime: 'number',
      smartAGId: 'string',
      bound: 'boolean',
      instanceId: 'string',
      smartAGUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagVbrRulesResponseBodyGrantRules extends $tea.Model {
  grantRule?: DescribeGrantSagVbrRulesResponseBodyGrantRulesGrantRule[];
  static names(): { [key: string]: string } {
    return {
      grantRule: 'GrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRule: { 'type': 'array', 'itemType': DescribeGrantSagVbrRulesResponseBodyGrantRulesGrantRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagStaticRouteListResponseBodyStaticRoutes extends $tea.Model {
  nextHop?: string;
  destinationCidr?: string;
  portName?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      nextHop: 'NextHop',
      destinationCidr: 'DestinationCidr',
      portName: 'PortName',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHop: 'string',
      destinationCidr: 'string',
      portName: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagStaticRouteListResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteListResponseBodyRoutes extends $tea.Model {
  nextHop?: string;
  destinationCidr?: string;
  cost?: string;
  portName?: string;
  conflictCidrs?: string[];
  routeProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      nextHop: 'NextHop',
      destinationCidr: 'DestinationCidr',
      cost: 'Cost',
      portName: 'PortName',
      conflictCidrs: 'ConflictCidrs',
      routeProtocol: 'RouteProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHop: 'string',
      destinationCidr: 'string',
      cost: 'string',
      portName: 'string',
      conflictCidrs: { 'type': 'array', 'itemType': 'string' },
      routeProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBasedRoutingsResponseBodyPolicyBasedRoutingsPolicyBasedRouting extends $tea.Model {
  description?: string;
  pbrInstanceId?: string;
  priority?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      pbrInstanceId: 'PbrInstanceId',
      priority: 'Priority',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      pbrInstanceId: 'string',
      priority: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBasedRoutingsResponseBodyPolicyBasedRoutings extends $tea.Model {
  policyBasedRouting?: DescribePolicyBasedRoutingsResponseBodyPolicyBasedRoutingsPolicyBasedRouting[];
  static names(): { [key: string]: string } {
    return {
      policyBasedRouting: 'PolicyBasedRouting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyBasedRouting: { 'type': 'array', 'itemType': DescribePolicyBasedRoutingsResponseBodyPolicyBasedRoutingsPolicyBasedRouting },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortRouteProtocolListResponseBodyPorts extends $tea.Model {
  status?: string;
  remoteIp?: string;
  portName?: string;
  neighborIp?: string;
  routeProtocol?: string;
  remoteAs?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      remoteIp: 'RemoteIp',
      portName: 'PortName',
      neighborIp: 'NeighborIp',
      routeProtocol: 'RouteProtocol',
      remoteAs: 'RemoteAs',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      remoteIp: 'string',
      portName: 'string',
      neighborIp: 'string',
      routeProtocol: 'string',
      remoteAs: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortRouteProtocolListResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanSnatResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagUserDnsResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointNetworkQualitiesResponseBodyAccessPointNetworkQualities extends $tea.Model {
  loss?: string;
  rtt?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      loss: 'Loss',
      rtt: 'Rtt',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loss: 'string',
      rtt: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiSignatureIds extends $tea.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiGroupIds extends $tea.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBodyQosPoliciesQosPolicy extends $tea.Model {
  dpiSignatureIds?: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiSignatureIds;
  ipProtocol?: string;
  qosId?: string;
  priority?: number;
  endTime?: string;
  startTime?: string;
  description?: string;
  destCidr?: string;
  destPortRange?: string;
  qosPolicyId?: string;
  name?: string;
  sourceCidr?: string;
  sourcePortRange?: string;
  dpiGroupIds?: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiGroupIds;
  static names(): { [key: string]: string } {
    return {
      dpiSignatureIds: 'DpiSignatureIds',
      ipProtocol: 'IpProtocol',
      qosId: 'QosId',
      priority: 'Priority',
      endTime: 'EndTime',
      startTime: 'StartTime',
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      qosPolicyId: 'QosPolicyId',
      name: 'Name',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      dpiGroupIds: 'DpiGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureIds: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiSignatureIds,
      ipProtocol: 'string',
      qosId: 'string',
      priority: 'number',
      endTime: 'string',
      startTime: 'string',
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      qosPolicyId: 'string',
      name: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      dpiGroupIds: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiGroupIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBodyQosPolicies extends $tea.Model {
  qosPolicy?: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicy[];
  static names(): { [key: string]: string } {
    return {
      qosPolicy: 'QosPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosPolicy: { 'type': 'array', 'itemType': DescribeQosPoliciesResponseBodyQosPoliciesQosPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsCN extends $tea.Model {
  advice?: string[];
  itemName?: string;
  itemLevel?: string;
  itemType?: string;
  details?: string[];
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      itemName: 'ItemName',
      itemLevel: 'ItemLevel',
      itemType: 'ItemType',
      details: 'Details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: { 'type': 'array', 'itemType': 'string' },
      itemName: 'string',
      itemLevel: 'string',
      itemType: 'string',
      details: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsEN extends $tea.Model {
  advice?: string[];
  itemName?: string;
  itemLevel?: string;
  itemType?: string;
  details?: string[];
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      itemName: 'ItemName',
      itemLevel: 'ItemLevel',
      itemType: 'ItemType',
      details: 'Details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: { 'type': 'array', 'itemType': 'string' },
      itemName: 'string',
      itemLevel: 'string',
      itemType: 'string',
      details: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItems extends $tea.Model {
  type?: string;
  endTime?: number;
  startTime?: number;
  CN?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsCN;
  itemName?: string;
  EN?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsEN;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      endTime: 'EndTime',
      startTime: 'StartTime',
      CN: 'CN',
      itemName: 'ItemName',
      EN: 'EN',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      endTime: 'number',
      startTime: 'number',
      CN: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsCN,
      itemName: 'string',
      EN: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsEN,
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsStatistics extends $tea.Model {
  warning?: number;
  error?: number;
  total?: number;
  info?: number;
  static names(): { [key: string]: string } {
    return {
      warning: 'Warning',
      error: 'Error',
      total: 'Total',
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warning: 'number',
      error: 'number',
      total: 'number',
      info: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetails extends $tea.Model {
  type?: string;
  items?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItems[];
  statistics?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsStatistics;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      items: 'Items',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      items: { 'type': 'array', 'itemType': DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItems },
      statistics: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultLevel extends $tea.Model {
  configuration?: string;
  total?: string;
  biz?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      total: 'Total',
      biz: 'Biz',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: 'string',
      total: 'string',
      biz: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultStatistics extends $tea.Model {
  warning?: number;
  error?: number;
  total?: number;
  info?: number;
  static names(): { [key: string]: string } {
    return {
      warning: 'Warning',
      error: 'Error',
      total: 'Total',
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warning: 'number',
      error: 'number',
      total: 'number',
      info: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResult extends $tea.Model {
  percent?: number;
  SN?: string;
  diagnoseId?: string;
  state?: string;
  userLevel?: string;
  boxVersion?: string;
  instanceId?: string;
  boxType?: string;
  monitorVersion?: string;
  finishedNumber?: number;
  details?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetails[];
  UId?: string;
  endTime?: number;
  startTime?: number;
  parameters?: string;
  storeType?: string;
  reportSLSSuccess?: number;
  totalNumber?: number;
  level?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultLevel;
  statistics?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultStatistics;
  static names(): { [key: string]: string } {
    return {
      percent: 'Percent',
      SN: 'SN',
      diagnoseId: 'DiagnoseId',
      state: 'State',
      userLevel: 'UserLevel',
      boxVersion: 'BoxVersion',
      instanceId: 'InstanceId',
      boxType: 'BoxType',
      monitorVersion: 'MonitorVersion',
      finishedNumber: 'FinishedNumber',
      details: 'Details',
      UId: 'UId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      parameters: 'Parameters',
      storeType: 'StoreType',
      reportSLSSuccess: 'ReportSLSSuccess',
      totalNumber: 'TotalNumber',
      level: 'Level',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percent: 'number',
      SN: 'string',
      diagnoseId: 'string',
      state: 'string',
      userLevel: 'string',
      boxVersion: 'string',
      instanceId: 'string',
      boxType: 'string',
      monitorVersion: 'string',
      finishedNumber: 'number',
      details: { 'type': 'array', 'itemType': DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetails },
      UId: 'string',
      endTime: 'number',
      startTime: 'number',
      parameters: 'string',
      storeType: 'string',
      reportSLSSuccess: 'number',
      totalNumber: 'number',
      level: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultLevel,
      statistics: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyQosIds extends $tea.Model {
  qosId?: string[];
  static names(): { [key: string]: string } {
    return {
      qosId: 'QosId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyDevicesDevice extends $tea.Model {
  serialNumber?: string;
  haState?: string;
  secretKey?: string;
  dpiSignatureDbVersion?: string;
  softwareVersion?: string;
  distributeSkStatus?: number;
  monitorVersion?: string;
  hcState?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      haState: 'HaState',
      secretKey: 'SecretKey',
      dpiSignatureDbVersion: 'DpiSignatureDbVersion',
      softwareVersion: 'SoftwareVersion',
      distributeSkStatus: 'DistributeSkStatus',
      monitorVersion: 'MonitorVersion',
      hcState: 'HcState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      haState: 'string',
      secretKey: 'string',
      dpiSignatureDbVersion: 'string',
      softwareVersion: 'string',
      distributeSkStatus: 'number',
      monitorVersion: 'string',
      hcState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyDevices extends $tea.Model {
  device?: DescribeSmartAccessGatewayAttributeResponseBodyDevicesDevice[];
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayAttributeResponseBodyDevicesDevice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyFlowLogIds extends $tea.Model {
  flowLogId?: string[];
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyLinksLink extends $tea.Model {
  healthCheckTargetIp?: string;
  endTime?: number;
  status?: string;
  type?: string;
  bandwidth?: string;
  relateInstanceRegionId?: string;
  relateInstanceId?: string;
  instanceId?: string;
  commodityType?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckTargetIp: 'HealthCheckTargetIp',
      endTime: 'EndTime',
      status: 'Status',
      type: 'Type',
      bandwidth: 'Bandwidth',
      relateInstanceRegionId: 'RelateInstanceRegionId',
      relateInstanceId: 'RelateInstanceId',
      instanceId: 'InstanceId',
      commodityType: 'CommodityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTargetIp: 'string',
      endTime: 'number',
      status: 'string',
      type: 'string',
      bandwidth: 'string',
      relateInstanceRegionId: 'string',
      relateInstanceId: 'string',
      instanceId: 'string',
      commodityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyLinks extends $tea.Model {
  link?: DescribeSmartAccessGatewayAttributeResponseBodyLinksLink[];
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayAttributeResponseBodyLinksLink },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyAclIds extends $tea.Model {
  aclId?: string[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyApplicationBandwidthPackageOperationLocks extends $tea.Model {
  lockType?: string;
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockType: 'LockType',
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockType: 'string',
      lockReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagRulesResponseBodyGrantRulesGrantRule extends $tea.Model {
  createTime?: number;
  smartAGId?: string;
  grantTrafficService?: boolean;
  instanceId?: string;
  ccnUid?: number;
  ccnInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      smartAGId: 'SmartAGId',
      grantTrafficService: 'GrantTrafficService',
      instanceId: 'InstanceId',
      ccnUid: 'CcnUid',
      ccnInstanceId: 'CcnInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      smartAGId: 'string',
      grantTrafficService: 'boolean',
      instanceId: 'string',
      ccnUid: 'number',
      ccnInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagRulesResponseBodyGrantRules extends $tea.Model {
  grantRule?: DescribeGrantSagRulesResponseBodyGrantRulesGrantRule[];
  static names(): { [key: string]: string } {
    return {
      grantRule: 'GrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRule: { 'type': 'array', 'itemType': DescribeGrantSagRulesResponseBodyGrantRulesGrantRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientsResponseBodyUsersUser extends $tea.Model {
  clientIp?: string;
  onlineTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      onlineTime: 'OnlineTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      onlineTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientsResponseBodyUsers extends $tea.Model {
  user?: DescribeUserOnlineClientsResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': DescribeUserOnlineClientsResponseBodyUsersUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWifiResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowStatisticsResponseBodySagStatisticsStatistics extends $tea.Model {
  totalBytes?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      totalBytes: 'TotalBytes',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalBytes: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowStatisticsResponseBodySagStatistics extends $tea.Model {
  statistics?: DescribeUserFlowStatisticsResponseBodySagStatisticsStatistics[];
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: { 'type': 'array', 'itemType': DescribeUserFlowStatisticsResponseBodySagStatisticsStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBodyFlowLogsFlowLogSetType extends $tea.Model {
  status?: string;
  totalSagNum?: number;
  netflowServerIp?: string;
  projectName?: string;
  slsRegionId?: string;
  activeAging?: number;
  outputType?: string;
  description?: string;
  netflowVersion?: string;
  inactiveAging?: number;
  netflowServerPort?: string;
  name?: string;
  flowLogId?: string;
  logstoreName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      totalSagNum: 'TotalSagNum',
      netflowServerIp: 'NetflowServerIp',
      projectName: 'ProjectName',
      slsRegionId: 'SlsRegionId',
      activeAging: 'ActiveAging',
      outputType: 'OutputType',
      description: 'Description',
      netflowVersion: 'NetflowVersion',
      inactiveAging: 'InactiveAging',
      netflowServerPort: 'NetflowServerPort',
      name: 'Name',
      flowLogId: 'FlowLogId',
      logstoreName: 'LogstoreName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      totalSagNum: 'number',
      netflowServerIp: 'string',
      projectName: 'string',
      slsRegionId: 'string',
      activeAging: 'number',
      outputType: 'string',
      description: 'string',
      netflowVersion: 'string',
      inactiveAging: 'number',
      netflowServerPort: 'string',
      name: 'string',
      flowLogId: 'string',
      logstoreName: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBodyFlowLogs extends $tea.Model {
  flowLogSetType?: DescribeFlowLogsResponseBodyFlowLogsFlowLogSetType[];
  static names(): { [key: string]: string } {
    return {
      flowLogSetType: 'FlowLogSetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogSetType: { 'type': 'array', 'itemType': DescribeFlowLogsResponseBodyFlowLogsFlowLogSetType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayClientUsersResponseBodyUsersUser extends $tea.Model {
  bandwidth?: number;
  state?: number;
  clientIp?: string;
  userName?: string;
  userMail?: string;
  accelerateBandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      state: 'State',
      clientIp: 'ClientIp',
      userName: 'UserName',
      userMail: 'UserMail',
      accelerateBandwidth: 'AccelerateBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      state: 'number',
      clientIp: 'string',
      userName: 'string',
      userMail: 'string',
      accelerateBandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayClientUsersResponseBodyUsers extends $tea.Model {
  user?: DescribeSmartAccessGatewayClientUsersResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayClientUsersResponseBodyUsersUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolOspfResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteDistributionStrategiesResponseBodyStrategiesStrategy extends $tea.Model {
  status?: string;
  strategyPublishStatus?: string;
  routeDistribution?: string;
  createTime?: number;
  smartAGId?: string;
  sourceType?: string;
  isConflict?: boolean;
  destCidrBlock?: string;
  conflictInfo?: string;
  hcInstanceId?: string;
  routeSource?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      strategyPublishStatus: 'StrategyPublishStatus',
      routeDistribution: 'RouteDistribution',
      createTime: 'CreateTime',
      smartAGId: 'SmartAGId',
      sourceType: 'SourceType',
      isConflict: 'IsConflict',
      destCidrBlock: 'DestCidrBlock',
      conflictInfo: 'ConflictInfo',
      hcInstanceId: 'HcInstanceId',
      routeSource: 'RouteSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      strategyPublishStatus: 'string',
      routeDistribution: 'string',
      createTime: 'number',
      smartAGId: 'string',
      sourceType: 'string',
      isConflict: 'boolean',
      destCidrBlock: 'string',
      conflictInfo: 'string',
      hcInstanceId: 'string',
      routeSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteDistributionStrategiesResponseBodyStrategies extends $tea.Model {
  strategy?: DescribeRouteDistributionStrategiesResponseBodyStrategiesStrategy[];
  static names(): { [key: string]: string } {
    return {
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategy: { 'type': 'array', 'itemType': DescribeRouteDistributionStrategiesResponseBodyStrategiesStrategy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagHaResponseBodyPorts extends $tea.Model {
  portName?: string;
  virtualIp?: string;
  static names(): { [key: string]: string } {
    return {
      portName: 'PortName',
      virtualIp: 'VirtualIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portName: 'string',
      virtualIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagHaResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddACLRuleResponseBodyDpiGroupIds extends $tea.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddACLRuleResponseBodyDpiSignatureIds extends $tea.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiConfigErrorResponseBodyDpiConfigErrorRuleConfigErrorList extends $tea.Model {
  dpiSignatureIds?: string[];
  ruleId?: string;
  dpiGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureIds: 'DpiSignatureIds',
      ruleId: 'RuleId',
      dpiGroupIds: 'DpiGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'string',
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiConfigErrorResponseBodyDpiConfigError extends $tea.Model {
  SN?: string;
  smartAGId?: string;
  errorType?: string;
  ruleConfigErrorList?: ListDpiConfigErrorResponseBodyDpiConfigErrorRuleConfigErrorList[];
  static names(): { [key: string]: string } {
    return {
      SN: 'SN',
      smartAGId: 'SmartAGId',
      errorType: 'ErrorType',
      ruleConfigErrorList: 'RuleConfigErrorList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SN: 'string',
      smartAGId: 'string',
      errorType: 'string',
      ruleConfigErrorList: { 'type': 'array', 'itemType': ListDpiConfigErrorResponseBodyDpiConfigErrorRuleConfigErrorList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePbrInterfacesResponseBodyPbrInterfacesPbrInterface extends $tea.Model {
  action?: string;
  interfaceName?: string;
  healthCheckInstanceId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      interfaceName: 'InterfaceName',
      healthCheckInstanceId: 'HealthCheckInstanceId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      interfaceName: 'string',
      healthCheckInstanceId: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePbrInterfacesResponseBodyPbrInterfaces extends $tea.Model {
  pbrInterface?: DescribePbrInterfacesResponseBodyPbrInterfacesPbrInterface[];
  static names(): { [key: string]: string } {
    return {
      pbrInterface: 'PbrInterface',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pbrInterface: { 'type': 'array', 'itemType': DescribePbrInterfacesResponseBodyPbrInterfacesPbrInterface },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLsResponseBodyAclsAcl extends $tea.Model {
  sagCount?: string;
  aclId?: string;
  name?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sagCount: 'SagCount',
      aclId: 'AclId',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sagCount: 'string',
      aclId: 'string',
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLsResponseBodyAcls extends $tea.Model {
  acl?: DescribeACLsResponseBodyAclsAcl[];
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: { 'type': 'array', 'itemType': DescribeACLsResponseBodyAclsAcl },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnbindFlowLogSagsResponseBodySagsSag extends $tea.Model {
  description?: string;
  smartAGId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      smartAGId: 'SmartAGId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      smartAGId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnbindFlowLogSagsResponseBodySags extends $tea.Model {
  sag?: DescribeUnbindFlowLogSagsResponseBodySagsSag[];
  static names(): { [key: string]: string } {
    return {
      sag: 'Sag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sag: { 'type': 'array', 'itemType': DescribeUnbindFlowLogSagsResponseBodySagsSag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagGlobalRouteProtocolResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagExpressConnectInterfaceListResponseBodyInterfaces extends $tea.Model {
  mask?: string;
  vlan?: string;
  IP?: string;
  static names(): { [key: string]: string } {
    return {
      mask: 'Mask',
      vlan: 'Vlan',
      IP: 'IP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mask: 'string',
      vlan: 'string',
      IP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagExpressConnectInterfaceListResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksRequestTag extends $tea.Model {
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

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTagsTag extends $tea.Model {
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

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTags extends $tea.Model {
  tag?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetwork extends $tea.Model {
  createTime?: number;
  associatedCenOwnerId?: string;
  associatedCloudBoxCount?: string;
  tags?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTags;
  interworkingStatus?: string;
  ccnId?: string;
  availableCloudBoxCount?: string;
  cidrBlock?: string;
  description?: string;
  snatCidrBlock?: string;
  associatedCenId?: string;
  name?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      associatedCenOwnerId: 'AssociatedCenOwnerId',
      associatedCloudBoxCount: 'AssociatedCloudBoxCount',
      tags: 'Tags',
      interworkingStatus: 'InterworkingStatus',
      ccnId: 'CcnId',
      availableCloudBoxCount: 'AvailableCloudBoxCount',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      snatCidrBlock: 'SnatCidrBlock',
      associatedCenId: 'AssociatedCenId',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      associatedCenOwnerId: 'string',
      associatedCloudBoxCount: 'string',
      tags: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTags,
      interworkingStatus: 'string',
      ccnId: 'string',
      availableCloudBoxCount: 'string',
      cidrBlock: 'string',
      description: 'string',
      snatCidrBlock: 'string',
      associatedCenId: 'string',
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworks extends $tea.Model {
  cloudConnectNetwork?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetwork[];
  static names(): { [key: string]: string } {
    return {
      cloudConnectNetwork: 'CloudConnectNetwork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudConnectNetwork: { 'type': 'array', 'itemType': DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetwork },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLRuleResponseBodyDpiGroupIds extends $tea.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLRuleResponseBodyDpiSignatureIds extends $tea.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagManagementPortResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanListResponseBodyWans extends $tea.Model {
  weight?: number;
  mask?: string;
  gateway?: string;
  portName?: string;
  IPType?: string;
  priority?: number;
  bandWidth?: number;
  trafficState?: string;
  IP?: string;
  ISP?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'Weight',
      mask: 'Mask',
      gateway: 'Gateway',
      portName: 'PortName',
      IPType: 'IPType',
      priority: 'Priority',
      bandWidth: 'BandWidth',
      trafficState: 'TrafficState',
      IP: 'IP',
      ISP: 'ISP',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weight: 'number',
      mask: 'string',
      gateway: 'string',
      portName: 'string',
      IPType: 'string',
      priority: 'number',
      bandWidth: 'number',
      trafficState: 'string',
      IP: 'string',
      ISP: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanListResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGApiUnsupportedFeatureResponseBodyFeatures extends $tea.Model {
  feature?: string;
  static names(): { [key: string]: string } {
    return {
      feature: 'Feature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagVbrRelationsResponseBodySagVbrRelations extends $tea.Model {
  vbrInstanceId?: string;
  sagUid?: string;
  sagInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      vbrInstanceId: 'VbrInstanceId',
      sagUid: 'SagUid',
      sagInstanceId: 'SagInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vbrInstanceId: 'string',
      sagUid: 'string',
      sagInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQosAttributeResponseBodyQosPolicies extends $tea.Model {
  endTime?: number;
  startTime?: number;
  destCidr?: string;
  destPortRange?: string;
  ipProtocol?: string;
  priority?: number;
  qosPolicieDescription?: string;
  sourceCidr?: string;
  qosPolicieName?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      ipProtocol: 'IpProtocol',
      priority: 'Priority',
      qosPolicieDescription: 'QosPolicieDescription',
      sourceCidr: 'SourceCidr',
      qosPolicieName: 'QosPolicieName',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      destCidr: 'string',
      destPortRange: 'string',
      ipProtocol: 'string',
      priority: 'number',
      qosPolicieDescription: 'string',
      sourceCidr: 'string',
      qosPolicieName: 'string',
      sourcePortRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQosAttributeResponseBodyQosCars extends $tea.Model {
  maxBandwidthAbs?: number;
  qosCarName?: string;
  percentSourceType?: string;
  minBandwidthAbs?: number;
  maxBandwidthPercent?: number;
  qosCarDescription?: string;
  limitType?: string;
  priority?: number;
  minBandwidthPercent?: number;
  qosCarId?: string;
  static names(): { [key: string]: string } {
    return {
      maxBandwidthAbs: 'MaxBandwidthAbs',
      qosCarName: 'QosCarName',
      percentSourceType: 'PercentSourceType',
      minBandwidthAbs: 'MinBandwidthAbs',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      qosCarDescription: 'QosCarDescription',
      limitType: 'LimitType',
      priority: 'Priority',
      minBandwidthPercent: 'MinBandwidthPercent',
      qosCarId: 'QosCarId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxBandwidthAbs: 'number',
      qosCarName: 'string',
      percentSourceType: 'string',
      minBandwidthAbs: 'number',
      maxBandwidthPercent: 'number',
      qosCarDescription: 'string',
      limitType: 'string',
      priority: 'number',
      minBandwidthPercent: 'number',
      qosCarId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGByAccessPointResponseBodySmartAccessGateways extends $tea.Model {
  routingStrategy?: string;
  smartAGName?: string;
  smartAGId?: string;
  smartAGStatus?: string;
  smartAGDescription?: string;
  associatedCcnId?: string;
  hardwareVersion?: string;
  static names(): { [key: string]: string } {
    return {
      routingStrategy: 'RoutingStrategy',
      smartAGName: 'SmartAGName',
      smartAGId: 'SmartAGId',
      smartAGStatus: 'SmartAGStatus',
      smartAGDescription: 'SmartAGDescription',
      associatedCcnId: 'AssociatedCcnId',
      hardwareVersion: 'HardwareVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routingStrategy: 'string',
      smartAGName: 'string',
      smartAGId: 'string',
      smartAGStatus: 'string',
      smartAGDescription: 'string',
      associatedCcnId: 'string',
      hardwareVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesResponseBodyGrantRulesGrantRule extends $tea.Model {
  cenInstanceId?: string;
  cenUid?: number;
  gmtCreate?: number;
  grantRuleId?: string;
  grantTrafficService?: boolean;
  gmtModified?: number;
  ccnUid?: number;
  regionId?: string;
  ccnInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cenInstanceId: 'CenInstanceId',
      cenUid: 'CenUid',
      gmtCreate: 'GmtCreate',
      grantRuleId: 'GrantRuleId',
      grantTrafficService: 'GrantTrafficService',
      gmtModified: 'GmtModified',
      ccnUid: 'CcnUid',
      regionId: 'RegionId',
      ccnInstanceId: 'CcnInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenInstanceId: 'string',
      cenUid: 'number',
      gmtCreate: 'number',
      grantRuleId: 'string',
      grantTrafficService: 'boolean',
      gmtModified: 'number',
      ccnUid: 'number',
      regionId: 'string',
      ccnInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesResponseBodyGrantRules extends $tea.Model {
  grantRule?: DescribeGrantRulesResponseBodyGrantRulesGrantRule[];
  static names(): { [key: string]: string } {
    return {
      grantRule: 'GrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRule: { 'type': 'array', 'itemType': DescribeGrantRulesResponseBodyGrantRulesGrantRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagOnlineClientStatisticsResponseBodySagStatisticsStatistics extends $tea.Model {
  smartAGId?: string;
  onlineCount?: string;
  static names(): { [key: string]: string } {
    return {
      smartAGId: 'SmartAGId',
      onlineCount: 'OnlineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smartAGId: 'string',
      onlineCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagOnlineClientStatisticsResponseBodySagStatistics extends $tea.Model {
  statistics?: DescribeSagOnlineClientStatisticsResponseBodySagStatisticsStatistics[];
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: { 'type': 'array', 'itemType': DescribeSagOnlineClientStatisticsResponseBodySagStatisticsStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagDropTopNResponseBodyDropTopN extends $tea.Model {
  dropRate?: string;
  instanceId?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dropRate: 'DropRate',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dropRate: 'string',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagLanListResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagLanListResponseBodyLans extends $tea.Model {
  lease?: string;
  mask?: string;
  endIp?: string;
  portName?: string;
  startIp?: string;
  IPType?: string;
  IP?: string;
  static names(): { [key: string]: string } {
    return {
      lease: 'Lease',
      mask: 'Mask',
      endIp: 'EndIp',
      portName: 'PortName',
      startIp: 'StartIp',
      IPType: 'IPType',
      IP: 'IP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lease: 'string',
      mask: 'string',
      endIp: 'string',
      portName: 'string',
      startIp: 'string',
      IPType: 'string',
      IP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePbrRulesResponseBodyPbrRulesPbrRule extends $tea.Model {
  dstCidr?: string;
  description?: string;
  pbrRuleId?: string;
  protocol?: string;
  dstPort?: string;
  srcCidr?: string;
  name?: string;
  srcPort?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidr: 'DstCidr',
      description: 'Description',
      pbrRuleId: 'PbrRuleId',
      protocol: 'Protocol',
      dstPort: 'DstPort',
      srcCidr: 'SrcCidr',
      name: 'Name',
      srcPort: 'SrcPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidr: 'string',
      description: 'string',
      pbrRuleId: 'string',
      protocol: 'string',
      dstPort: 'string',
      srcCidr: 'string',
      name: 'string',
      srcPort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePbrRulesResponseBodyPbrRules extends $tea.Model {
  pbrRule?: DescribePbrRulesResponseBodyPbrRulesPbrRule[];
  static names(): { [key: string]: string } {
    return {
      pbrRule: 'PbrRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pbrRule: { 'type': 'array', 'itemType': DescribePbrRulesResponseBodyPbrRulesPbrRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBodyAcrsAcrDpiSignatureIds extends $tea.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBodyAcrsAcrDpiGroupIds extends $tea.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBodyAcrsAcr extends $tea.Model {
  direction?: string;
  type?: string;
  dpiSignatureIds?: DescribeACLAttributeResponseBodyAcrsAcrDpiSignatureIds;
  ipProtocol?: string;
  priority?: number;
  aclId?: string;
  policy?: string;
  description?: string;
  gmtCreate?: number;
  destCidr?: string;
  destPortRange?: string;
  name?: string;
  acrId?: string;
  sourceCidr?: string;
  sourcePortRange?: string;
  dpiGroupIds?: DescribeACLAttributeResponseBodyAcrsAcrDpiGroupIds;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      type: 'Type',
      dpiSignatureIds: 'DpiSignatureIds',
      ipProtocol: 'IpProtocol',
      priority: 'Priority',
      aclId: 'AclId',
      policy: 'Policy',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      name: 'Name',
      acrId: 'AcrId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      dpiGroupIds: 'DpiGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      type: 'string',
      dpiSignatureIds: DescribeACLAttributeResponseBodyAcrsAcrDpiSignatureIds,
      ipProtocol: 'string',
      priority: 'number',
      aclId: 'string',
      policy: 'string',
      description: 'string',
      gmtCreate: 'number',
      destCidr: 'string',
      destPortRange: 'string',
      name: 'string',
      acrId: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      dpiGroupIds: DescribeACLAttributeResponseBodyAcrsAcrDpiGroupIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBodyAcrs extends $tea.Model {
  acr?: DescribeACLAttributeResponseBodyAcrsAcr[];
  static names(): { [key: string]: string } {
    return {
      acr: 'Acr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acr: { 'type': 'array', 'itemType': DescribeACLAttributeResponseBodyAcrsAcr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseCodeResponseBodyEnterpriseCodes extends $tea.Model {
  isDefault?: boolean;
  enterpriseCode?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      enterpriseCode: 'EnterpriseCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      enterpriseCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosesResponseBodyQosesQos extends $tea.Model {
  qosDescription?: string;
  sagCount?: string;
  smartAGIds?: string;
  qosId?: string;
  qosName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      qosDescription: 'QosDescription',
      sagCount: 'SagCount',
      smartAGIds: 'SmartAGIds',
      qosId: 'QosId',
      qosName: 'QosName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosDescription: 'string',
      sagCount: 'string',
      smartAGIds: 'string',
      qosId: 'string',
      qosName: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosesResponseBodyQoses extends $tea.Model {
  qos?: DescribeQosesResponseBodyQosesQos[];
  static names(): { [key: string]: string } {
    return {
      qos: 'Qos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qos: { 'type': 'array', 'itemType': DescribeQosesResponseBodyQosesQos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinksLink extends $tea.Model {
  type?: string;
  status?: string;
  endTime?: number;
  bandwidth?: string;
  relateInstanceRegionId?: string;
  relateInstanceId?: string;
  instanceId?: string;
  commodityType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      endTime: 'EndTime',
      bandwidth: 'Bandwidth',
      relateInstanceRegionId: 'RelateInstanceRegionId',
      relateInstanceId: 'RelateInstanceId',
      instanceId: 'InstanceId',
      commodityType: 'CommodityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      endTime: 'number',
      bandwidth: 'string',
      relateInstanceRegionId: 'string',
      relateInstanceId: 'string',
      instanceId: 'string',
      commodityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinks extends $tea.Model {
  link?: DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinksLink[];
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: { 'type': 'array', 'itemType': DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinksLink },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway extends $tea.Model {
  serialNumber?: string;
  status?: string;
  upBandwidth4G?: number;
  backupStatus?: string;
  idaasApplicationId?: string;
  softwareVersion?: string;
  createTime?: number;
  smartAGId?: string;
  upBandwidthWan?: number;
  city?: string;
  aclIds?: string;
  qosIds?: string;
  cidrBlock?: string;
  description?: string;
  ipsecStatus?: string;
  enterpriseCode?: string;
  dpiStatus?: string;
  associatedCcnId?: string;
  name?: string;
  hardwareVersion?: string;
  idaasId?: string;
  dataPlan?: number;
  associatedCcnName?: string;
  resellerUid?: string;
  dpiMonitorStatus?: string;
  maxBandwidth?: string;
  smartAGUid?: number;
  backupSoftwareVersion?: string;
  endTime?: number;
  resellerInstanceId?: string;
  vpnStatus?: string;
  routingStrategy?: string;
  securityLockThreshold?: number;
  links?: DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinks;
  resourceGroupId?: string;
  userCount?: number;
  accessPointId?: string;
  applicationBandwidthPackageId?: string;
  accelerateBandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      status: 'Status',
      upBandwidth4G: 'UpBandwidth4G',
      backupStatus: 'BackupStatus',
      idaasApplicationId: 'IdaasApplicationId',
      softwareVersion: 'SoftwareVersion',
      createTime: 'CreateTime',
      smartAGId: 'SmartAGId',
      upBandwidthWan: 'UpBandwidthWan',
      city: 'City',
      aclIds: 'AclIds',
      qosIds: 'QosIds',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      ipsecStatus: 'IpsecStatus',
      enterpriseCode: 'EnterpriseCode',
      dpiStatus: 'DpiStatus',
      associatedCcnId: 'AssociatedCcnId',
      name: 'Name',
      hardwareVersion: 'HardwareVersion',
      idaasId: 'IdaasId',
      dataPlan: 'DataPlan',
      associatedCcnName: 'AssociatedCcnName',
      resellerUid: 'ResellerUid',
      dpiMonitorStatus: 'DpiMonitorStatus',
      maxBandwidth: 'MaxBandwidth',
      smartAGUid: 'SmartAGUid',
      backupSoftwareVersion: 'BackupSoftwareVersion',
      endTime: 'EndTime',
      resellerInstanceId: 'ResellerInstanceId',
      vpnStatus: 'VpnStatus',
      routingStrategy: 'RoutingStrategy',
      securityLockThreshold: 'SecurityLockThreshold',
      links: 'Links',
      resourceGroupId: 'ResourceGroupId',
      userCount: 'UserCount',
      accessPointId: 'AccessPointId',
      applicationBandwidthPackageId: 'ApplicationBandwidthPackageId',
      accelerateBandwidth: 'AccelerateBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      status: 'string',
      upBandwidth4G: 'number',
      backupStatus: 'string',
      idaasApplicationId: 'string',
      softwareVersion: 'string',
      createTime: 'number',
      smartAGId: 'string',
      upBandwidthWan: 'number',
      city: 'string',
      aclIds: 'string',
      qosIds: 'string',
      cidrBlock: 'string',
      description: 'string',
      ipsecStatus: 'string',
      enterpriseCode: 'string',
      dpiStatus: 'string',
      associatedCcnId: 'string',
      name: 'string',
      hardwareVersion: 'string',
      idaasId: 'string',
      dataPlan: 'number',
      associatedCcnName: 'string',
      resellerUid: 'string',
      dpiMonitorStatus: 'string',
      maxBandwidth: 'string',
      smartAGUid: 'number',
      backupSoftwareVersion: 'string',
      endTime: 'number',
      resellerInstanceId: 'string',
      vpnStatus: 'string',
      routingStrategy: 'string',
      securityLockThreshold: 'number',
      links: DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinks,
      resourceGroupId: 'string',
      userCount: 'number',
      accessPointId: 'string',
      applicationBandwidthPackageId: 'string',
      accelerateBandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBodySmartAccessGateways extends $tea.Model {
  smartAccessGateway?: DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway[];
  static names(): { [key: string]: string } {
    return {
      smartAccessGateway: 'SmartAccessGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smartAccessGateway: { 'type': 'array', 'itemType': DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosCarsResponseBodyQosCarsQosCar extends $tea.Model {
  maxBandwidthAbs?: number;
  percentSourceType?: string;
  minBandwidthAbs?: number;
  maxBandwidthPercent?: number;
  description?: string;
  qosId?: string;
  limitType?: string;
  priority?: number;
  name?: string;
  minBandwidthPercent?: number;
  qosCarId?: string;
  static names(): { [key: string]: string } {
    return {
      maxBandwidthAbs: 'MaxBandwidthAbs',
      percentSourceType: 'PercentSourceType',
      minBandwidthAbs: 'MinBandwidthAbs',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      description: 'Description',
      qosId: 'QosId',
      limitType: 'LimitType',
      priority: 'Priority',
      name: 'Name',
      minBandwidthPercent: 'MinBandwidthPercent',
      qosCarId: 'QosCarId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxBandwidthAbs: 'number',
      percentSourceType: 'string',
      minBandwidthAbs: 'number',
      maxBandwidthPercent: 'number',
      description: 'string',
      qosId: 'string',
      limitType: 'string',
      priority: 'number',
      name: 'string',
      minBandwidthPercent: 'number',
      qosCarId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosCarsResponseBodyQosCars extends $tea.Model {
  qosCar?: DescribeQosCarsResponseBodyQosCarsQosCar[];
  static names(): { [key: string]: string } {
    return {
      qosCar: 'QosCar',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosCar: { 'type': 'array', 'itemType': DescribeQosCarsResponseBodyQosCarsQosCar },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientStatisticsResponseBodyUserStatisticsStatistics extends $tea.Model {
  onlineCount?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      onlineCount: 'OnlineCount',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineCount: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientStatisticsResponseBodyUserStatistics extends $tea.Model {
  statistics?: DescribeUserOnlineClientStatisticsResponseBodyUserStatisticsStatistics[];
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: { 'type': 'array', 'itemType': DescribeUserOnlineClientStatisticsResponseBodyUserStatisticsStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolBgpResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatEntriesResponseBodySnatEntriesSnatEntry extends $tea.Model {
  cidrBlock?: string;
  createTime?: number;
  instanceId?: string;
  snatIp?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      snatIp: 'SnatIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      createTime: 'number',
      instanceId: 'string',
      snatIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatEntriesResponseBodySnatEntries extends $tea.Model {
  snatEntry?: DescribeSnatEntriesResponseBodySnatEntriesSnatEntry[];
  static names(): { [key: string]: string } {
    return {
      snatEntry: 'SnatEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatEntry: { 'type': 'array', 'itemType': DescribeSnatEntriesResponseBodySnatEntriesSnatEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnatEntriesResponseBodyDnatEntriesDnatEntry extends $tea.Model {
  type?: string;
  sagId?: string;
  internalIp?: string;
  internalPort?: string;
  ipProtocol?: string;
  externalPort?: string;
  dnatEntryId?: string;
  externalIp?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      sagId: 'SagId',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      externalPort: 'ExternalPort',
      dnatEntryId: 'DnatEntryId',
      externalIp: 'ExternalIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      sagId: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      externalPort: 'string',
      dnatEntryId: 'string',
      externalIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnatEntriesResponseBodyDnatEntries extends $tea.Model {
  dnatEntry?: DescribeDnatEntriesResponseBodyDnatEntriesDnatEntry[];
  static names(): { [key: string]: string } {
    return {
      dnatEntry: 'DnatEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnatEntry: { 'type': 'array', 'itemType': DescribeDnatEntriesResponseBodyDnatEntriesDnatEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersionsSmartAGVersion extends $tea.Model {
  type?: string;
  createTime?: number;
  versionName?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      createTime: 'CreateTime',
      versionName: 'VersionName',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      createTime: 'number',
      versionName: 'string',
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersions extends $tea.Model {
  smartAGVersion?: DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersionsSmartAGVersion[];
  static names(): { [key: string]: string } {
    return {
      smartAGVersion: 'SmartAGVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smartAGVersion: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersionsSmartAGVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRemoteAccessResponseBodyRemoteAccessesRemoteAccess extends $tea.Model {
  serialNumber?: string;
  remoteAccessIp?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      remoteAccessIp: 'RemoteAccessIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      remoteAccessIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRemoteAccessResponseBodyRemoteAccesses extends $tea.Model {
  remoteAccess?: DescribeSagRemoteAccessResponseBodyRemoteAccessesRemoteAccess[];
  static names(): { [key: string]: string } {
    return {
      remoteAccess: 'RemoteAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteAccess: { 'type': 'array', 'itemType': DescribeSagRemoteAccessResponseBodyRemoteAccessesRemoteAccess },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosPolicyResponseBodyDpiGroupIds extends $tea.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosPolicyResponseBodyDpiSignatureIds extends $tea.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagECRouteBackupAttributeResponseBodyCidrsCidr extends $tea.Model {
  enableBackup?: boolean;
  cidr?: string;
  static names(): { [key: string]: string } {
    return {
      enableBackup: 'EnableBackup',
      cidr: 'Cidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableBackup: 'boolean',
      cidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagECRouteBackupAttributeResponseBodyCidrs extends $tea.Model {
  cidr?: DescribeSagECRouteBackupAttributeResponseBodyCidrsCidr[];
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: { 'type': 'array', 'itemType': DescribeSagECRouteBackupAttributeResponseBodyCidrsCidr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogSagsResponseBodySagsSag extends $tea.Model {
  description?: string;
  smartAGId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      smartAGId: 'SmartAGId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      smartAGId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogSagsResponseBodySags extends $tea.Model {
  sag?: DescribeFlowLogSagsResponseBodySagsSag[];
  static names(): { [key: string]: string } {
    return {
      sag: 'Sag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sag: { 'type': 'array', 'itemType': DescribeFlowLogSagsResponseBodySagsSag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoListLinkBackupInfoList extends $tea.Model {
  mainLinkId?: string;
  backupLinkState?: string;
  linkLevelBackupState?: string;
  backupLinkId?: string;
  mainLinkState?: string;
  linkLevelBackupType?: string;
  static names(): { [key: string]: string } {
    return {
      mainLinkId: 'MainLinkId',
      backupLinkState: 'BackupLinkState',
      linkLevelBackupState: 'LinkLevelBackupState',
      backupLinkId: 'BackupLinkId',
      mainLinkState: 'MainLinkState',
      linkLevelBackupType: 'LinkLevelBackupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainLinkId: 'string',
      backupLinkState: 'string',
      linkLevelBackupState: 'string',
      backupLinkId: 'string',
      mainLinkState: 'string',
      linkLevelBackupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoList extends $tea.Model {
  linkBackupInfoList?: DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoListLinkBackupInfoList[];
  static names(): { [key: string]: string } {
    return {
      linkBackupInfoList: 'LinkBackupInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linkBackupInfoList: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoListLinkBackupInfoList },
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

export class DescribeHealthChecksResponseBodyHealthChecksHealthCheck extends $tea.Model {
  type?: string;
  probeTimeout?: number;
  status?: string;
  dstIpAddr?: string;
  relationCount?: number;
  rttFailThreshold?: number;
  smartAGId?: string;
  dstPort?: number;
  failCountThreshold?: number;
  rttThreshold?: number;
  srcPort?: number;
  probeCount?: number;
  description?: string;
  srcIpAddr?: string;
  probeInterval?: number;
  name?: string;
  hcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      probeTimeout: 'ProbeTimeout',
      status: 'Status',
      dstIpAddr: 'DstIpAddr',
      relationCount: 'RelationCount',
      rttFailThreshold: 'RttFailThreshold',
      smartAGId: 'SmartAGId',
      dstPort: 'DstPort',
      failCountThreshold: 'FailCountThreshold',
      rttThreshold: 'RttThreshold',
      srcPort: 'SrcPort',
      probeCount: 'ProbeCount',
      description: 'Description',
      srcIpAddr: 'SrcIpAddr',
      probeInterval: 'ProbeInterval',
      name: 'Name',
      hcInstanceId: 'HcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      probeTimeout: 'number',
      status: 'string',
      dstIpAddr: 'string',
      relationCount: 'number',
      rttFailThreshold: 'number',
      smartAGId: 'string',
      dstPort: 'number',
      failCountThreshold: 'number',
      rttThreshold: 'number',
      srcPort: 'number',
      probeCount: 'number',
      description: 'string',
      srcIpAddr: 'string',
      probeInterval: 'number',
      name: 'string',
      hcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthChecksResponseBodyHealthChecks extends $tea.Model {
  healthCheck?: DescribeHealthChecksResponseBodyHealthChecksHealthCheck[];
  static names(): { [key: string]: string } {
    return {
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheck: { 'type': 'array', 'itemType': DescribeHealthChecksResponseBodyHealthChecksHealthCheck },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointsResponseBodyAccessPoints extends $tea.Model {
  longitude?: string;
  activeSmartAGCount?: number;
  inactiveSmartAGCount?: number;
  latitude?: string;
  accessPointId?: number;
  static names(): { [key: string]: string } {
    return {
      longitude: 'Longitude',
      activeSmartAGCount: 'ActiveSmartAGCount',
      inactiveSmartAGCount: 'InactiveSmartAGCount',
      latitude: 'Latitude',
      accessPointId: 'AccessPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      longitude: 'string',
      activeSmartAGCount: 'number',
      inactiveSmartAGCount: 'number',
      latitude: 'string',
      accessPointId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiSignaturesResponseBodyDpiSignature extends $tea.Model {
  dpiSignatureId?: string;
  minSignatureDbVersion?: string;
  dpiGroupId?: string;
  minEngineVersion?: string;
  dpiSignatureName?: string;
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
      minSignatureDbVersion: 'MinSignatureDbVersion',
      dpiGroupId: 'DpiGroupId',
      minEngineVersion: 'MinEngineVersion',
      dpiSignatureName: 'DpiSignatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: 'string',
      minSignatureDbVersion: 'string',
      dpiGroupId: 'string',
      minEngineVersion: 'string',
      dpiSignatureName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway extends $tea.Model {
  smartAGId?: string;
  name?: string;
  smartAGUid?: number;
  static names(): { [key: string]: string } {
    return {
      smartAGId: 'SmartAGId',
      name: 'Name',
      smartAGUid: 'SmartAGUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smartAGId: 'string',
      name: 'string',
      smartAGUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGateways extends $tea.Model {
  smartAccessGateway?: DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway[];
  static names(): { [key: string]: string } {
    return {
      smartAccessGateway: 'SmartAccessGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smartAccessGateway: { 'type': 'array', 'itemType': DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortListResponseBodyPorts extends $tea.Model {
  status?: string;
  portName?: string;
  role?: string;
  mac?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      portName: 'PortName',
      role: 'Role',
      mac: 'Mac',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      portName: 'string',
      role: 'string',
      mac: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortListResponseBodyTaskStates extends $tea.Model {
  errorMessage?: string;
  state?: string;
  errorCode?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      state: 'State',
      errorCode: 'ErrorCode',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      state: 'string',
      errorCode: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiGroupsResponseBodyDpiGroup extends $tea.Model {
  minSignatureDbVersion?: string;
  dpiGroupName?: string;
  dpiGroupId?: string;
  minEngineVersion?: string;
  static names(): { [key: string]: string } {
    return {
      minSignatureDbVersion: 'MinSignatureDbVersion',
      dpiGroupName: 'DpiGroupName',
      dpiGroupId: 'DpiGroupId',
      minEngineVersion: 'MinEngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minSignatureDbVersion: 'string',
      dpiGroupName: 'string',
      dpiGroupId: 'string',
      minEngineVersion: 'string',
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
    this._endpoint = this.getEndpoint("smartag", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async grantSagInstanceToVbrWithOptions(request: GrantSagInstanceToVbrRequest, runtime: $Util.RuntimeOptions): Promise<GrantSagInstanceToVbrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantSagInstanceToVbrResponse>(await this.doRPCRequest("GrantSagInstanceToVbr", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new GrantSagInstanceToVbrResponse({}));
  }

  async grantSagInstanceToVbr(request: GrantSagInstanceToVbrRequest): Promise<GrantSagInstanceToVbrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantSagInstanceToVbrWithOptions(request, runtime);
  }

  async describeSagTrafficTopNWithOptions(request: DescribeSagTrafficTopNRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagTrafficTopNResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagTrafficTopNResponse>(await this.doRPCRequest("DescribeSagTrafficTopN", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagTrafficTopNResponse({}));
  }

  async describeSagTrafficTopN(request: DescribeSagTrafficTopNRequest): Promise<DescribeSagTrafficTopNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagTrafficTopNWithOptions(request, runtime);
  }

  async describeGrantSagVbrRulesWithOptions(request: DescribeGrantSagVbrRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGrantSagVbrRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGrantSagVbrRulesResponse>(await this.doRPCRequest("DescribeGrantSagVbrRules", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGrantSagVbrRulesResponse({}));
  }

  async describeGrantSagVbrRules(request: DescribeGrantSagVbrRulesRequest): Promise<DescribeGrantSagVbrRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGrantSagVbrRulesWithOptions(request, runtime);
  }

  async describeSagStaticRouteListWithOptions(request: DescribeSagStaticRouteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagStaticRouteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagStaticRouteListResponse>(await this.doRPCRequest("DescribeSagStaticRouteList", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagStaticRouteListResponse({}));
  }

  async describeSagStaticRouteList(request: DescribeSagStaticRouteListRequest): Promise<DescribeSagStaticRouteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagStaticRouteListWithOptions(request, runtime);
  }

  async describeSagRouteListWithOptions(request: DescribeSagRouteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagRouteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagRouteListResponse>(await this.doRPCRequest("DescribeSagRouteList", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagRouteListResponse({}));
  }

  async describeSagRouteList(request: DescribeSagRouteListRequest): Promise<DescribeSagRouteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagRouteListWithOptions(request, runtime);
  }

  async describePolicyBasedRoutingsWithOptions(request: DescribePolicyBasedRoutingsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyBasedRoutingsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePolicyBasedRoutingsResponse>(await this.doRPCRequest("DescribePolicyBasedRoutings", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePolicyBasedRoutingsResponse({}));
  }

  async describePolicyBasedRoutings(request: DescribePolicyBasedRoutingsRequest): Promise<DescribePolicyBasedRoutingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyBasedRoutingsWithOptions(request, runtime);
  }

  async probeAccessPointNetworkQualityWithOptions(request: ProbeAccessPointNetworkQualityRequest, runtime: $Util.RuntimeOptions): Promise<ProbeAccessPointNetworkQualityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ProbeAccessPointNetworkQualityResponse>(await this.doRPCRequest("ProbeAccessPointNetworkQuality", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ProbeAccessPointNetworkQualityResponse({}));
  }

  async probeAccessPointNetworkQuality(request: ProbeAccessPointNetworkQualityRequest): Promise<ProbeAccessPointNetworkQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.probeAccessPointNetworkQualityWithOptions(request, runtime);
  }

  async modifySagGlobalRouteProtocolWithOptions(request: ModifySagGlobalRouteProtocolRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagGlobalRouteProtocolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagGlobalRouteProtocolResponse>(await this.doRPCRequest("ModifySagGlobalRouteProtocol", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagGlobalRouteProtocolResponse({}));
  }

  async modifySagGlobalRouteProtocol(request: ModifySagGlobalRouteProtocolRequest): Promise<ModifySagGlobalRouteProtocolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagGlobalRouteProtocolWithOptions(request, runtime);
  }

  async deleteRouteDistributionStrategyWithOptions(request: DeleteRouteDistributionStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRouteDistributionStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRouteDistributionStrategyResponse>(await this.doRPCRequest("DeleteRouteDistributionStrategy", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRouteDistributionStrategyResponse({}));
  }

  async deleteRouteDistributionStrategy(request: DeleteRouteDistributionStrategyRequest): Promise<DeleteRouteDistributionStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRouteDistributionStrategyWithOptions(request, runtime);
  }

  async createQosCarWithOptions(request: CreateQosCarRequest, runtime: $Util.RuntimeOptions): Promise<CreateQosCarResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateQosCarResponse>(await this.doRPCRequest("CreateQosCar", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateQosCarResponse({}));
  }

  async createQosCar(request: CreateQosCarRequest): Promise<CreateQosCarResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQosCarWithOptions(request, runtime);
  }

  async updateSmartAGDpiAttributeWithOptions(request: UpdateSmartAGDpiAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAGDpiAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSmartAGDpiAttributeResponse>(await this.doRPCRequest("UpdateSmartAGDpiAttribute", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSmartAGDpiAttributeResponse({}));
  }

  async updateSmartAGDpiAttribute(request: UpdateSmartAGDpiAttributeRequest): Promise<UpdateSmartAGDpiAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAGDpiAttributeWithOptions(request, runtime);
  }

  async clearSagRouteableAddressWithOptions(request: ClearSagRouteableAddressRequest, runtime: $Util.RuntimeOptions): Promise<ClearSagRouteableAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClearSagRouteableAddressResponse>(await this.doRPCRequest("ClearSagRouteableAddress", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ClearSagRouteableAddressResponse({}));
  }

  async clearSagRouteableAddress(request: ClearSagRouteableAddressRequest): Promise<ClearSagRouteableAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearSagRouteableAddressWithOptions(request, runtime);
  }

  async associateQosWithOptions(request: AssociateQosRequest, runtime: $Util.RuntimeOptions): Promise<AssociateQosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateQosResponse>(await this.doRPCRequest("AssociateQos", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateQosResponse({}));
  }

  async associateQos(request: AssociateQosRequest): Promise<AssociateQosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateQosWithOptions(request, runtime);
  }

  async modifySAGAdminPasswordWithOptions(request: ModifySAGAdminPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifySAGAdminPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySAGAdminPasswordResponse>(await this.doRPCRequest("ModifySAGAdminPassword", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySAGAdminPasswordResponse({}));
  }

  async modifySAGAdminPassword(request: ModifySAGAdminPasswordRequest): Promise<ModifySAGAdminPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySAGAdminPasswordWithOptions(request, runtime);
  }

  async downgradeSmartAccessGatewayWithOptions(request: DowngradeSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DowngradeSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DowngradeSmartAccessGatewayResponse>(await this.doRPCRequest("DowngradeSmartAccessGateway", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DowngradeSmartAccessGatewayResponse({}));
  }

  async downgradeSmartAccessGateway(request: DowngradeSmartAccessGatewayRequest): Promise<DowngradeSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downgradeSmartAccessGatewayWithOptions(request, runtime);
  }

  async describeSagPortRouteProtocolListWithOptions(request: DescribeSagPortRouteProtocolListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagPortRouteProtocolListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagPortRouteProtocolListResponse>(await this.doRPCRequest("DescribeSagPortRouteProtocolList", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagPortRouteProtocolListResponse({}));
  }

  async describeSagPortRouteProtocolList(request: DescribeSagPortRouteProtocolListRequest): Promise<DescribeSagPortRouteProtocolListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagPortRouteProtocolListWithOptions(request, runtime);
  }

  async describeSagWanSnatWithOptions(request: DescribeSagWanSnatRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagWanSnatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagWanSnatResponse>(await this.doRPCRequest("DescribeSagWanSnat", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagWanSnatResponse({}));
  }

  async describeSagWanSnat(request: DescribeSagWanSnatRequest): Promise<DescribeSagWanSnatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagWanSnatWithOptions(request, runtime);
  }

  async describeSagUserDnsWithOptions(request: DescribeSagUserDnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagUserDnsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagUserDnsResponse>(await this.doRPCRequest("DescribeSagUserDns", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagUserDnsResponse({}));
  }

  async describeSagUserDns(request: DescribeSagUserDnsRequest): Promise<DescribeSagUserDnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagUserDnsWithOptions(request, runtime);
  }

  async listAccessPointNetworkQualitiesWithOptions(request: ListAccessPointNetworkQualitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessPointNetworkQualitiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAccessPointNetworkQualitiesResponse>(await this.doRPCRequest("ListAccessPointNetworkQualities", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListAccessPointNetworkQualitiesResponse({}));
  }

  async listAccessPointNetworkQualities(request: ListAccessPointNetworkQualitiesRequest): Promise<ListAccessPointNetworkQualitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessPointNetworkQualitiesWithOptions(request, runtime);
  }

  async modifyFlowLogAttributeWithOptions(request: ModifyFlowLogAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowLogAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowLogAttributeResponse>(await this.doRPCRequest("ModifyFlowLogAttribute", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowLogAttributeResponse({}));
  }

  async modifyFlowLogAttribute(request: ModifyFlowLogAttributeRequest): Promise<ModifyFlowLogAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowLogAttributeWithOptions(request, runtime);
  }

  async describeQosPoliciesWithOptions(request: DescribeQosPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQosPoliciesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeQosPoliciesResponse>(await this.doRPCRequest("DescribeQosPolicies", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeQosPoliciesResponse({}));
  }

  async describeQosPolicies(request: DescribeQosPoliciesRequest): Promise<DescribeQosPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQosPoliciesWithOptions(request, runtime);
  }

  async createQosWithOptions(request: CreateQosRequest, runtime: $Util.RuntimeOptions): Promise<CreateQosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateQosResponse>(await this.doRPCRequest("CreateQos", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateQosResponse({}));
  }

  async createQos(request: CreateQosRequest): Promise<CreateQosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQosWithOptions(request, runtime);
  }

  async modifySagECRouteBackupWithOptions(request: ModifySagECRouteBackupRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagECRouteBackupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagECRouteBackupResponse>(await this.doRPCRequest("ModifySagECRouteBackup", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagECRouteBackupResponse({}));
  }

  async modifySagECRouteBackup(request: ModifySagECRouteBackupRequest): Promise<ModifySagECRouteBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagECRouteBackupWithOptions(request, runtime);
  }

  async discribeSmartAccessGatewayDiagnosisReportWithOptions(request: DiscribeSmartAccessGatewayDiagnosisReportRequest, runtime: $Util.RuntimeOptions): Promise<DiscribeSmartAccessGatewayDiagnosisReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DiscribeSmartAccessGatewayDiagnosisReportResponse>(await this.doRPCRequest("DiscribeSmartAccessGatewayDiagnosisReport", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DiscribeSmartAccessGatewayDiagnosisReportResponse({}));
  }

  async discribeSmartAccessGatewayDiagnosisReport(request: DiscribeSmartAccessGatewayDiagnosisReportRequest): Promise<DiscribeSmartAccessGatewayDiagnosisReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.discribeSmartAccessGatewayDiagnosisReportWithOptions(request, runtime);
  }

  async roamClientUserWithOptions(request: RoamClientUserRequest, runtime: $Util.RuntimeOptions): Promise<RoamClientUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RoamClientUserResponse>(await this.doRPCRequest("RoamClientUser", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new RoamClientUserResponse({}));
  }

  async roamClientUser(request: RoamClientUserRequest): Promise<RoamClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.roamClientUserWithOptions(request, runtime);
  }

  async createSagStaticRouteWithOptions(request: CreateSagStaticRouteRequest, runtime: $Util.RuntimeOptions): Promise<CreateSagStaticRouteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSagStaticRouteResponse>(await this.doRPCRequest("CreateSagStaticRoute", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSagStaticRouteResponse({}));
  }

  async createSagStaticRoute(request: CreateSagStaticRouteRequest): Promise<CreateSagStaticRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSagStaticRouteWithOptions(request, runtime);
  }

  async describeSmartAccessGatewayAttributeWithOptions(request: DescribeSmartAccessGatewayAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartAccessGatewayAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSmartAccessGatewayAttributeResponse>(await this.doRPCRequest("DescribeSmartAccessGatewayAttribute", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSmartAccessGatewayAttributeResponse({}));
  }

  async describeSmartAccessGatewayAttribute(request: DescribeSmartAccessGatewayAttributeRequest): Promise<DescribeSmartAccessGatewayAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartAccessGatewayAttributeWithOptions(request, runtime);
  }

  async createCloudConnectNetworkWithOptions(request: CreateCloudConnectNetworkRequest, runtime: $Util.RuntimeOptions): Promise<CreateCloudConnectNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCloudConnectNetworkResponse>(await this.doRPCRequest("CreateCloudConnectNetwork", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCloudConnectNetworkResponse({}));
  }

  async createCloudConnectNetwork(request: CreateCloudConnectNetworkRequest): Promise<CreateCloudConnectNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCloudConnectNetworkWithOptions(request, runtime);
  }

  async deleteQosPolicyWithOptions(request: DeleteQosPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQosPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteQosPolicyResponse>(await this.doRPCRequest("DeleteQosPolicy", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteQosPolicyResponse({}));
  }

  async deleteQosPolicy(request: DeleteQosPolicyRequest): Promise<DeleteQosPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQosPolicyWithOptions(request, runtime);
  }

  async modifySagHaWithOptions(request: ModifySagHaRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagHaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagHaResponse>(await this.doRPCRequest("ModifySagHa", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagHaResponse({}));
  }

  async modifySagHa(request: ModifySagHaRequest): Promise<ModifySagHaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagHaWithOptions(request, runtime);
  }

  async deleteHealthCheckWithOptions(request: DeleteHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHealthCheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHealthCheckResponse>(await this.doRPCRequest("DeleteHealthCheck", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHealthCheckResponse({}));
  }

  async deleteHealthCheck(request: DeleteHealthCheckRequest): Promise<DeleteHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHealthCheckWithOptions(request, runtime);
  }

  async synchronizeSmartAGWebConfigWithOptions(request: SynchronizeSmartAGWebConfigRequest, runtime: $Util.RuntimeOptions): Promise<SynchronizeSmartAGWebConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SynchronizeSmartAGWebConfigResponse>(await this.doRPCRequest("SynchronizeSmartAGWebConfig", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new SynchronizeSmartAGWebConfigResponse({}));
  }

  async synchronizeSmartAGWebConfig(request: SynchronizeSmartAGWebConfigRequest): Promise<SynchronizeSmartAGWebConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.synchronizeSmartAGWebConfigWithOptions(request, runtime);
  }

  async deleteSnatEntryWithOptions(request: DeleteSnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnatEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSnatEntryResponse>(await this.doRPCRequest("DeleteSnatEntry", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSnatEntryResponse({}));
  }

  async deleteSnatEntry(request: DeleteSnatEntryRequest): Promise<DeleteSnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnatEntryWithOptions(request, runtime);
  }

  async deleteQosWithOptions(request: DeleteQosRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteQosResponse>(await this.doRPCRequest("DeleteQos", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteQosResponse({}));
  }

  async deleteQos(request: DeleteQosRequest): Promise<DeleteQosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQosWithOptions(request, runtime);
  }

  async addSagCidrWithOptions(request: AddSagCidrRequest, runtime: $Util.RuntimeOptions): Promise<AddSagCidrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddSagCidrResponse>(await this.doRPCRequest("AddSagCidr", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new AddSagCidrResponse({}));
  }

  async addSagCidr(request: AddSagCidrRequest): Promise<AddSagCidrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSagCidrWithOptions(request, runtime);
  }

  async deleteSagStaticRouteWithOptions(request: DeleteSagStaticRouteRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSagStaticRouteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSagStaticRouteResponse>(await this.doRPCRequest("DeleteSagStaticRoute", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSagStaticRouteResponse({}));
  }

  async deleteSagStaticRoute(request: DeleteSagStaticRouteRequest): Promise<DeleteSagStaticRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSagStaticRouteWithOptions(request, runtime);
  }

  async describeGrantSagRulesWithOptions(request: DescribeGrantSagRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGrantSagRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGrantSagRulesResponse>(await this.doRPCRequest("DescribeGrantSagRules", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGrantSagRulesResponse({}));
  }

  async describeGrantSagRules(request: DescribeGrantSagRulesRequest): Promise<DescribeGrantSagRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGrantSagRulesWithOptions(request, runtime);
  }

  async describeUserOnlineClientsWithOptions(request: DescribeUserOnlineClientsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserOnlineClientsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserOnlineClientsResponse>(await this.doRPCRequest("DescribeUserOnlineClients", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserOnlineClientsResponse({}));
  }

  async describeUserOnlineClients(request: DescribeUserOnlineClientsRequest): Promise<DescribeUserOnlineClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserOnlineClientsWithOptions(request, runtime);
  }

  async diagnoseSmartAccessGatewayWithOptions(request: DiagnoseSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DiagnoseSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DiagnoseSmartAccessGatewayResponse>(await this.doRPCRequest("DiagnoseSmartAccessGateway", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DiagnoseSmartAccessGatewayResponse({}));
  }

  async diagnoseSmartAccessGateway(request: DiagnoseSmartAccessGatewayRequest): Promise<DiagnoseSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.diagnoseSmartAccessGatewayWithOptions(request, runtime);
  }

  async describeSagWifiWithOptions(request: DescribeSagWifiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagWifiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagWifiResponse>(await this.doRPCRequest("DescribeSagWifi", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagWifiResponse({}));
  }

  async describeSagWifi(request: DescribeSagWifiRequest): Promise<DescribeSagWifiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagWifiWithOptions(request, runtime);
  }

  async unbindSerialNumberWithOptions(request: UnbindSerialNumberRequest, runtime: $Util.RuntimeOptions): Promise<UnbindSerialNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindSerialNumberResponse>(await this.doRPCRequest("UnbindSerialNumber", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindSerialNumberResponse({}));
  }

  async unbindSerialNumber(request: UnbindSerialNumberRequest): Promise<UnbindSerialNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindSerialNumberWithOptions(request, runtime);
  }

  async describeSAGDeviceInfoWithOptions(request: DescribeSAGDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSAGDeviceInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSAGDeviceInfoResponse>(await this.doRPCRequest("DescribeSAGDeviceInfo", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSAGDeviceInfoResponse({}));
  }

  async describeSAGDeviceInfo(request: DescribeSAGDeviceInfoRequest): Promise<DescribeSAGDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSAGDeviceInfoWithOptions(request, runtime);
  }

  async describeUserFlowStatisticsWithOptions(request: DescribeUserFlowStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserFlowStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserFlowStatisticsResponse>(await this.doRPCRequest("DescribeUserFlowStatistics", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserFlowStatisticsResponse({}));
  }

  async describeUserFlowStatistics(request: DescribeUserFlowStatisticsRequest): Promise<DescribeUserFlowStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserFlowStatisticsWithOptions(request, runtime);
  }

  async modifySagLanWithOptions(request: ModifySagLanRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagLanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagLanResponse>(await this.doRPCRequest("ModifySagLan", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagLanResponse({}));
  }

  async modifySagLan(request: ModifySagLanRequest): Promise<ModifySagLanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagLanWithOptions(request, runtime);
  }

  async describeFlowLogsWithOptions(request: DescribeFlowLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowLogsResponse>(await this.doRPCRequest("DescribeFlowLogs", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowLogsResponse({}));
  }

  async describeFlowLogs(request: DescribeFlowLogsRequest): Promise<DescribeFlowLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowLogsWithOptions(request, runtime);
  }

  async describeSmartAccessGatewayClientUsersWithOptions(request: DescribeSmartAccessGatewayClientUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartAccessGatewayClientUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSmartAccessGatewayClientUsersResponse>(await this.doRPCRequest("DescribeSmartAccessGatewayClientUsers", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSmartAccessGatewayClientUsersResponse({}));
  }

  async describeSmartAccessGatewayClientUsers(request: DescribeSmartAccessGatewayClientUsersRequest): Promise<DescribeSmartAccessGatewayClientUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartAccessGatewayClientUsersWithOptions(request, runtime);
  }

  async describeHealthCheckAttributeWithOptions(request: DescribeHealthCheckAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthCheckAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHealthCheckAttributeResponse>(await this.doRPCRequest("DescribeHealthCheckAttribute", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHealthCheckAttributeResponse({}));
  }

  async describeHealthCheckAttribute(request: DescribeHealthCheckAttributeRequest): Promise<DescribeHealthCheckAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthCheckAttributeWithOptions(request, runtime);
  }

  async modifyQosPolicyWithOptions(request: ModifyQosPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyQosPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyQosPolicyResponse>(await this.doRPCRequest("ModifyQosPolicy", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyQosPolicyResponse({}));
  }

  async modifyQosPolicy(request: ModifyQosPolicyRequest): Promise<ModifyQosPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyQosPolicyWithOptions(request, runtime);
  }

  async modifySagExpressConnectInterfaceWithOptions(request: ModifySagExpressConnectInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagExpressConnectInterfaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagExpressConnectInterfaceResponse>(await this.doRPCRequest("ModifySagExpressConnectInterface", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagExpressConnectInterfaceResponse({}));
  }

  async modifySagExpressConnectInterface(request: ModifySagExpressConnectInterfaceRequest): Promise<ModifySagExpressConnectInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagExpressConnectInterfaceWithOptions(request, runtime);
  }

  async updateSmartAGAccessPointWithOptions(request: UpdateSmartAGAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAGAccessPointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSmartAGAccessPointResponse>(await this.doRPCRequest("UpdateSmartAGAccessPoint", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSmartAGAccessPointResponse({}));
  }

  async updateSmartAGAccessPoint(request: UpdateSmartAGAccessPointRequest): Promise<UpdateSmartAGAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAGAccessPointWithOptions(request, runtime);
  }

  async bindSerialNumberWithOptions(request: BindSerialNumberRequest, runtime: $Util.RuntimeOptions): Promise<BindSerialNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindSerialNumberResponse>(await this.doRPCRequest("BindSerialNumber", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new BindSerialNumberResponse({}));
  }

  async bindSerialNumber(request: BindSerialNumberRequest): Promise<BindSerialNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindSerialNumberWithOptions(request, runtime);
  }

  async modifySagRouteProtocolOspfWithOptions(request: ModifySagRouteProtocolOspfRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagRouteProtocolOspfResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagRouteProtocolOspfResponse>(await this.doRPCRequest("ModifySagRouteProtocolOspf", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagRouteProtocolOspfResponse({}));
  }

  async modifySagRouteProtocolOspf(request: ModifySagRouteProtocolOspfRequest): Promise<ModifySagRouteProtocolOspfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagRouteProtocolOspfWithOptions(request, runtime);
  }

  async addDnatEntryWithOptions(request: AddDnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<AddDnatEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDnatEntryResponse>(await this.doRPCRequest("AddDnatEntry", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new AddDnatEntryResponse({}));
  }

  async addDnatEntry(request: AddDnatEntryRequest): Promise<AddDnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDnatEntryWithOptions(request, runtime);
  }

  async deleteSagCidrWithOptions(request: DeleteSagCidrRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSagCidrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSagCidrResponse>(await this.doRPCRequest("DeleteSagCidr", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSagCidrResponse({}));
  }

  async deleteSagCidr(request: DeleteSagCidrRequest): Promise<DeleteSagCidrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSagCidrWithOptions(request, runtime);
  }

  async describeSagRouteProtocolOspfWithOptions(request: DescribeSagRouteProtocolOspfRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagRouteProtocolOspfResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagRouteProtocolOspfResponse>(await this.doRPCRequest("DescribeSagRouteProtocolOspf", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagRouteProtocolOspfResponse({}));
  }

  async describeSagRouteProtocolOspf(request: DescribeSagRouteProtocolOspfRequest): Promise<DescribeSagRouteProtocolOspfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagRouteProtocolOspfWithOptions(request, runtime);
  }

  async describeRouteDistributionStrategiesWithOptions(request: DescribeRouteDistributionStrategiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRouteDistributionStrategiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRouteDistributionStrategiesResponse>(await this.doRPCRequest("DescribeRouteDistributionStrategies", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRouteDistributionStrategiesResponse({}));
  }

  async describeRouteDistributionStrategies(request: DescribeRouteDistributionStrategiesRequest): Promise<DescribeRouteDistributionStrategiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRouteDistributionStrategiesWithOptions(request, runtime);
  }

  async describeSagHaWithOptions(request: DescribeSagHaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagHaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagHaResponse>(await this.doRPCRequest("DescribeSagHa", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagHaResponse({}));
  }

  async describeSagHa(request: DescribeSagHaRequest): Promise<DescribeSagHaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagHaWithOptions(request, runtime);
  }

  async addACLRuleWithOptions(request: AddACLRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddACLRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddACLRuleResponse>(await this.doRPCRequest("AddACLRule", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new AddACLRuleResponse({}));
  }

  async addACLRule(request: AddACLRuleRequest): Promise<AddACLRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addACLRuleWithOptions(request, runtime);
  }

  async associateFlowLogWithOptions(request: AssociateFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<AssociateFlowLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateFlowLogResponse>(await this.doRPCRequest("AssociateFlowLog", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateFlowLogResponse({}));
  }

  async associateFlowLog(request: AssociateFlowLogRequest): Promise<AssociateFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateFlowLogWithOptions(request, runtime);
  }

  async bindSmartAccessGatewayWithOptions(request: BindSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<BindSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindSmartAccessGatewayResponse>(await this.doRPCRequest("BindSmartAccessGateway", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new BindSmartAccessGatewayResponse({}));
  }

  async bindSmartAccessGateway(request: BindSmartAccessGatewayRequest): Promise<BindSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindSmartAccessGatewayWithOptions(request, runtime);
  }

  async disassociateACLWithOptions(request: DisassociateACLRequest, runtime: $Util.RuntimeOptions): Promise<DisassociateACLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisassociateACLResponse>(await this.doRPCRequest("DisassociateACL", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DisassociateACLResponse({}));
  }

  async disassociateACL(request: DisassociateACLRequest): Promise<DisassociateACLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateACLWithOptions(request, runtime);
  }

  async deactiveFlowLogWithOptions(request: DeactiveFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<DeactiveFlowLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeactiveFlowLogResponse>(await this.doRPCRequest("DeactiveFlowLog", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeactiveFlowLogResponse({}));
  }

  async deactiveFlowLog(request: DeactiveFlowLogRequest): Promise<DeactiveFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactiveFlowLogWithOptions(request, runtime);
  }

  async activeFlowLogWithOptions(request: ActiveFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<ActiveFlowLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ActiveFlowLogResponse>(await this.doRPCRequest("ActiveFlowLog", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ActiveFlowLogResponse({}));
  }

  async activeFlowLog(request: ActiveFlowLogRequest): Promise<ActiveFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeFlowLogWithOptions(request, runtime);
  }

  async kickOutClientsWithOptions(request: KickOutClientsRequest, runtime: $Util.RuntimeOptions): Promise<KickOutClientsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<KickOutClientsResponse>(await this.doRPCRequest("KickOutClients", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new KickOutClientsResponse({}));
  }

  async kickOutClients(request: KickOutClientsRequest): Promise<KickOutClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.kickOutClientsWithOptions(request, runtime);
  }

  async describeSagRouteableAddressWithOptions(request: DescribeSagRouteableAddressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagRouteableAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagRouteableAddressResponse>(await this.doRPCRequest("DescribeSagRouteableAddress", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagRouteableAddressResponse({}));
  }

  async describeSagRouteableAddress(request: DescribeSagRouteableAddressRequest): Promise<DescribeSagRouteableAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagRouteableAddressWithOptions(request, runtime);
  }

  async modifySagPortRoleWithOptions(request: ModifySagPortRoleRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagPortRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagPortRoleResponse>(await this.doRPCRequest("ModifySagPortRole", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagPortRoleResponse({}));
  }

  async modifySagPortRole(request: ModifySagPortRoleRequest): Promise<ModifySagPortRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagPortRoleWithOptions(request, runtime);
  }

  async modifySagWanSnatWithOptions(request: ModifySagWanSnatRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagWanSnatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagWanSnatResponse>(await this.doRPCRequest("ModifySagWanSnat", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagWanSnatResponse({}));
  }

  async modifySagWanSnat(request: ModifySagWanSnatRequest): Promise<ModifySagWanSnatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagWanSnatWithOptions(request, runtime);
  }

  async listDpiConfigErrorWithOptions(request: ListDpiConfigErrorRequest, runtime: $Util.RuntimeOptions): Promise<ListDpiConfigErrorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDpiConfigErrorResponse>(await this.doRPCRequest("ListDpiConfigError", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListDpiConfigErrorResponse({}));
  }

  async listDpiConfigError(request: ListDpiConfigErrorRequest): Promise<ListDpiConfigErrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDpiConfigErrorWithOptions(request, runtime);
  }

  async deleteACLWithOptions(request: DeleteACLRequest, runtime: $Util.RuntimeOptions): Promise<DeleteACLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteACLResponse>(await this.doRPCRequest("DeleteACL", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteACLResponse({}));
  }

  async deleteACL(request: DeleteACLRequest): Promise<DeleteACLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteACLWithOptions(request, runtime);
  }

  async updateSmartAGEnterpriseCodeWithOptions(request: UpdateSmartAGEnterpriseCodeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAGEnterpriseCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSmartAGEnterpriseCodeResponse>(await this.doRPCRequest("UpdateSmartAGEnterpriseCode", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSmartAGEnterpriseCodeResponse({}));
  }

  async updateSmartAGEnterpriseCode(request: UpdateSmartAGEnterpriseCodeRequest): Promise<UpdateSmartAGEnterpriseCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAGEnterpriseCodeWithOptions(request, runtime);
  }

  async describePbrInterfacesWithOptions(request: DescribePbrInterfacesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePbrInterfacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePbrInterfacesResponse>(await this.doRPCRequest("DescribePbrInterfaces", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePbrInterfacesResponse({}));
  }

  async describePbrInterfaces(request: DescribePbrInterfacesRequest): Promise<DescribePbrInterfacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePbrInterfacesWithOptions(request, runtime);
  }

  async associateACLWithOptions(request: AssociateACLRequest, runtime: $Util.RuntimeOptions): Promise<AssociateACLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateACLResponse>(await this.doRPCRequest("AssociateACL", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateACLResponse({}));
  }

  async associateACL(request: AssociateACLRequest): Promise<AssociateACLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateACLWithOptions(request, runtime);
  }

  async modifyHealthCheckWithOptions(request: ModifyHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHealthCheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHealthCheckResponse>(await this.doRPCRequest("ModifyHealthCheck", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHealthCheckResponse({}));
  }

  async modifyHealthCheck(request: ModifyHealthCheckRequest): Promise<ModifyHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHealthCheckWithOptions(request, runtime);
  }

  async createEnterpriseCodeWithOptions(request: CreateEnterpriseCodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateEnterpriseCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEnterpriseCodeResponse>(await this.doRPCRequest("CreateEnterpriseCode", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEnterpriseCodeResponse({}));
  }

  async createEnterpriseCode(request: CreateEnterpriseCodeRequest): Promise<CreateEnterpriseCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEnterpriseCodeWithOptions(request, runtime);
  }

  async describeACLsWithOptions(request: DescribeACLsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeACLsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeACLsResponse>(await this.doRPCRequest("DescribeACLs", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeACLsResponse({}));
  }

  async describeACLs(request: DescribeACLsRequest): Promise<DescribeACLsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeACLsWithOptions(request, runtime);
  }

  async resetSmartAccessGatewayClientUserPasswordWithOptions(request: ResetSmartAccessGatewayClientUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetSmartAccessGatewayClientUserPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetSmartAccessGatewayClientUserPasswordResponse>(await this.doRPCRequest("ResetSmartAccessGatewayClientUserPassword", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ResetSmartAccessGatewayClientUserPasswordResponse({}));
  }

  async resetSmartAccessGatewayClientUserPassword(request: ResetSmartAccessGatewayClientUserPasswordRequest): Promise<ResetSmartAccessGatewayClientUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetSmartAccessGatewayClientUserPasswordWithOptions(request, runtime);
  }

  async unlockSmartAccessGatewayWithOptions(request: UnlockSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<UnlockSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnlockSmartAccessGatewayResponse>(await this.doRPCRequest("UnlockSmartAccessGateway", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new UnlockSmartAccessGatewayResponse({}));
  }

  async unlockSmartAccessGateway(request: UnlockSmartAccessGatewayRequest): Promise<UnlockSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockSmartAccessGatewayWithOptions(request, runtime);
  }

  async describeUnbindFlowLogSagsWithOptions(request: DescribeUnbindFlowLogSagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUnbindFlowLogSagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUnbindFlowLogSagsResponse>(await this.doRPCRequest("DescribeUnbindFlowLogSags", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUnbindFlowLogSagsResponse({}));
  }

  async describeUnbindFlowLogSags(request: DescribeUnbindFlowLogSagsRequest): Promise<DescribeUnbindFlowLogSagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUnbindFlowLogSagsWithOptions(request, runtime);
  }

  async disassociateFlowLogWithOptions(request: DisassociateFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<DisassociateFlowLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisassociateFlowLogResponse>(await this.doRPCRequest("DisassociateFlowLog", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DisassociateFlowLogResponse({}));
  }

  async disassociateFlowLog(request: DisassociateFlowLogRequest): Promise<DisassociateFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateFlowLogWithOptions(request, runtime);
  }

  async describeSagGlobalRouteProtocolWithOptions(request: DescribeSagGlobalRouteProtocolRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagGlobalRouteProtocolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagGlobalRouteProtocolResponse>(await this.doRPCRequest("DescribeSagGlobalRouteProtocol", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagGlobalRouteProtocolResponse({}));
  }

  async describeSagGlobalRouteProtocol(request: DescribeSagGlobalRouteProtocolRequest): Promise<DescribeSagGlobalRouteProtocolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagGlobalRouteProtocolWithOptions(request, runtime);
  }

  async describeSagExpressConnectInterfaceListWithOptions(request: DescribeSagExpressConnectInterfaceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagExpressConnectInterfaceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagExpressConnectInterfaceListResponse>(await this.doRPCRequest("DescribeSagExpressConnectInterfaceList", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagExpressConnectInterfaceListResponse({}));
  }

  async describeSagExpressConnectInterfaceList(request: DescribeSagExpressConnectInterfaceListRequest): Promise<DescribeSagExpressConnectInterfaceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagExpressConnectInterfaceListWithOptions(request, runtime);
  }

  async createACLWithOptions(request: CreateACLRequest, runtime: $Util.RuntimeOptions): Promise<CreateACLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateACLResponse>(await this.doRPCRequest("CreateACL", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateACLResponse({}));
  }

  async createACL(request: CreateACLRequest): Promise<CreateACLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createACLWithOptions(request, runtime);
  }

  async rebootSmartAccessGatewayWithOptions(request: RebootSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<RebootSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RebootSmartAccessGatewayResponse>(await this.doRPCRequest("RebootSmartAccessGateway", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new RebootSmartAccessGatewayResponse({}));
  }

  async rebootSmartAccessGateway(request: RebootSmartAccessGatewayRequest): Promise<RebootSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootSmartAccessGatewayWithOptions(request, runtime);
  }

  async modifySagStaticRouteWithOptions(request: ModifySagStaticRouteRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagStaticRouteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagStaticRouteResponse>(await this.doRPCRequest("ModifySagStaticRoute", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagStaticRouteResponse({}));
  }

  async modifySagStaticRoute(request: ModifySagStaticRouteRequest): Promise<ModifySagStaticRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagStaticRouteWithOptions(request, runtime);
  }

  async revokeInstanceFromVbrWithOptions(request: RevokeInstanceFromVbrRequest, runtime: $Util.RuntimeOptions): Promise<RevokeInstanceFromVbrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RevokeInstanceFromVbrResponse>(await this.doRPCRequest("RevokeInstanceFromVbr", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeInstanceFromVbrResponse({}));
  }

  async revokeInstanceFromVbr(request: RevokeInstanceFromVbrRequest): Promise<RevokeInstanceFromVbrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeInstanceFromVbrWithOptions(request, runtime);
  }

  async describeCloudConnectNetworksWithOptions(request: DescribeCloudConnectNetworksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudConnectNetworksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCloudConnectNetworksResponse>(await this.doRPCRequest("DescribeCloudConnectNetworks", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCloudConnectNetworksResponse({}));
  }

  async describeCloudConnectNetworks(request: DescribeCloudConnectNetworksRequest): Promise<DescribeCloudConnectNetworksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudConnectNetworksWithOptions(request, runtime);
  }

  async modifyACLRuleWithOptions(request: ModifyACLRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyACLRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyACLRuleResponse>(await this.doRPCRequest("ModifyACLRule", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyACLRuleResponse({}));
  }

  async modifyACLRule(request: ModifyACLRuleRequest): Promise<ModifyACLRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyACLRuleWithOptions(request, runtime);
  }

  async modifySmartAccessGatewayClientUserWithOptions(request: ModifySmartAccessGatewayClientUserRequest, runtime: $Util.RuntimeOptions): Promise<ModifySmartAccessGatewayClientUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySmartAccessGatewayClientUserResponse>(await this.doRPCRequest("ModifySmartAccessGatewayClientUser", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySmartAccessGatewayClientUserResponse({}));
  }

  async modifySmartAccessGatewayClientUser(request: ModifySmartAccessGatewayClientUserRequest): Promise<ModifySmartAccessGatewayClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySmartAccessGatewayClientUserWithOptions(request, runtime);
  }

  async describeSagManagementPortWithOptions(request: DescribeSagManagementPortRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagManagementPortResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagManagementPortResponse>(await this.doRPCRequest("DescribeSagManagementPort", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagManagementPortResponse({}));
  }

  async describeSagManagementPort(request: DescribeSagManagementPortRequest): Promise<DescribeSagManagementPortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagManagementPortWithOptions(request, runtime);
  }

  async upgradeSmartAccessGatewayWithOptions(request: UpgradeSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeSmartAccessGatewayResponse>(await this.doRPCRequest("UpgradeSmartAccessGateway", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeSmartAccessGatewayResponse({}));
  }

  async upgradeSmartAccessGateway(request: UpgradeSmartAccessGatewayRequest): Promise<UpgradeSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeSmartAccessGatewayWithOptions(request, runtime);
  }

  async getSmartAGDpiAttributeWithOptions(request: GetSmartAGDpiAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetSmartAGDpiAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSmartAGDpiAttributeResponse>(await this.doRPCRequest("GetSmartAGDpiAttribute", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new GetSmartAGDpiAttributeResponse({}));
  }

  async getSmartAGDpiAttribute(request: GetSmartAGDpiAttributeRequest): Promise<GetSmartAGDpiAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSmartAGDpiAttributeWithOptions(request, runtime);
  }

  async disassociateQosWithOptions(request: DisassociateQosRequest, runtime: $Util.RuntimeOptions): Promise<DisassociateQosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisassociateQosResponse>(await this.doRPCRequest("DisassociateQos", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DisassociateQosResponse({}));
  }

  async disassociateQos(request: DisassociateQosRequest): Promise<DisassociateQosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateQosWithOptions(request, runtime);
  }

  async modifyRouteDistributionStrategyWithOptions(request: ModifyRouteDistributionStrategyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRouteDistributionStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyRouteDistributionStrategyResponse>(await this.doRPCRequest("ModifyRouteDistributionStrategy", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyRouteDistributionStrategyResponse({}));
  }

  async modifyRouteDistributionStrategy(request: ModifyRouteDistributionStrategyRequest): Promise<ModifyRouteDistributionStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRouteDistributionStrategyWithOptions(request, runtime);
  }

  async modifySagPortRouteProtocolWithOptions(request: ModifySagPortRouteProtocolRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagPortRouteProtocolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagPortRouteProtocolResponse>(await this.doRPCRequest("ModifySagPortRouteProtocol", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagPortRouteProtocolResponse({}));
  }

  async modifySagPortRouteProtocol(request: ModifySagPortRouteProtocolRequest): Promise<ModifySagPortRouteProtocolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagPortRouteProtocolWithOptions(request, runtime);
  }

  async enableSmartAccessGatewayUserWithOptions(request: EnableSmartAccessGatewayUserRequest, runtime: $Util.RuntimeOptions): Promise<EnableSmartAccessGatewayUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableSmartAccessGatewayUserResponse>(await this.doRPCRequest("EnableSmartAccessGatewayUser", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new EnableSmartAccessGatewayUserResponse({}));
  }

  async enableSmartAccessGatewayUser(request: EnableSmartAccessGatewayUserRequest): Promise<EnableSmartAccessGatewayUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSmartAccessGatewayUserWithOptions(request, runtime);
  }

  async modifyQosWithOptions(request: ModifyQosRequest, runtime: $Util.RuntimeOptions): Promise<ModifyQosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyQosResponse>(await this.doRPCRequest("ModifyQos", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyQosResponse({}));
  }

  async modifyQos(request: ModifyQosRequest): Promise<ModifyQosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyQosWithOptions(request, runtime);
  }

  async getAclAttributeWithOptions(request: GetAclAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetAclAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAclAttributeResponse>(await this.doRPCRequest("GetAclAttribute", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new GetAclAttributeResponse({}));
  }

  async getAclAttribute(request: GetAclAttributeRequest): Promise<GetAclAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAclAttributeWithOptions(request, runtime);
  }

  async describeSagWanListWithOptions(request: DescribeSagWanListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagWanListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagWanListResponse>(await this.doRPCRequest("DescribeSagWanList", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagWanListResponse({}));
  }

  async describeSagWanList(request: DescribeSagWanListRequest): Promise<DescribeSagWanListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagWanListWithOptions(request, runtime);
  }

  async listSmartAGApiUnsupportedFeatureWithOptions(request: ListSmartAGApiUnsupportedFeatureRequest, runtime: $Util.RuntimeOptions): Promise<ListSmartAGApiUnsupportedFeatureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSmartAGApiUnsupportedFeatureResponse>(await this.doRPCRequest("ListSmartAGApiUnsupportedFeature", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListSmartAGApiUnsupportedFeatureResponse({}));
  }

  async listSmartAGApiUnsupportedFeature(request: ListSmartAGApiUnsupportedFeatureRequest): Promise<ListSmartAGApiUnsupportedFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSmartAGApiUnsupportedFeatureWithOptions(request, runtime);
  }

  async enableSmartAGDpiMonitorWithOptions(request: EnableSmartAGDpiMonitorRequest, runtime: $Util.RuntimeOptions): Promise<EnableSmartAGDpiMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableSmartAGDpiMonitorResponse>(await this.doRPCRequest("EnableSmartAGDpiMonitor", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new EnableSmartAGDpiMonitorResponse({}));
  }

  async enableSmartAGDpiMonitor(request: EnableSmartAGDpiMonitorRequest): Promise<EnableSmartAGDpiMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSmartAGDpiMonitorWithOptions(request, runtime);
  }

  async activateSmartAccessGatewayWithOptions(request: ActivateSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<ActivateSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ActivateSmartAccessGatewayResponse>(await this.doRPCRequest("ActivateSmartAccessGateway", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ActivateSmartAccessGatewayResponse({}));
  }

  async activateSmartAccessGateway(request: ActivateSmartAccessGatewayRequest): Promise<ActivateSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateSmartAccessGatewayWithOptions(request, runtime);
  }

  async deleteACLRuleWithOptions(request: DeleteACLRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteACLRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteACLRuleResponse>(await this.doRPCRequest("DeleteACLRule", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteACLRuleResponse({}));
  }

  async deleteACLRule(request: DeleteACLRuleRequest): Promise<DeleteACLRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteACLRuleWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.doRPCRequest("MoveResourceGroup", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new MoveResourceGroupResponse({}));
  }

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async describeSagVbrRelationsWithOptions(request: DescribeSagVbrRelationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagVbrRelationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagVbrRelationsResponse>(await this.doRPCRequest("DescribeSagVbrRelations", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagVbrRelationsResponse({}));
  }

  async describeSagVbrRelations(request: DescribeSagVbrRelationsRequest): Promise<DescribeSagVbrRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagVbrRelationsWithOptions(request, runtime);
  }

  async createSmartAccessGatewayClientUserWithOptions(request: CreateSmartAccessGatewayClientUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateSmartAccessGatewayClientUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSmartAccessGatewayClientUserResponse>(await this.doRPCRequest("CreateSmartAccessGatewayClientUser", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSmartAccessGatewayClientUserResponse({}));
  }

  async createSmartAccessGatewayClientUser(request: CreateSmartAccessGatewayClientUserRequest): Promise<CreateSmartAccessGatewayClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSmartAccessGatewayClientUserWithOptions(request, runtime);
  }

  async getQosAttributeWithOptions(request: GetQosAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetQosAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQosAttributeResponse>(await this.doRPCRequest("GetQosAttribute", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new GetQosAttributeResponse({}));
  }

  async getQosAttribute(request: GetQosAttributeRequest): Promise<GetQosAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQosAttributeWithOptions(request, runtime);
  }

  async createHealthCheckWithOptions(request: CreateHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<CreateHealthCheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateHealthCheckResponse>(await this.doRPCRequest("CreateHealthCheck", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateHealthCheckResponse({}));
  }

  async createHealthCheck(request: CreateHealthCheckRequest): Promise<CreateHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHealthCheckWithOptions(request, runtime);
  }

  async modifySagRemoteAccessWithOptions(request: ModifySagRemoteAccessRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagRemoteAccessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagRemoteAccessResponse>(await this.doRPCRequest("ModifySagRemoteAccess", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagRemoteAccessResponse({}));
  }

  async modifySagRemoteAccess(request: ModifySagRemoteAccessRequest): Promise<ModifySagRemoteAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagRemoteAccessWithOptions(request, runtime);
  }

  async revokeSagInstanceFromCcnWithOptions(request: RevokeSagInstanceFromCcnRequest, runtime: $Util.RuntimeOptions): Promise<RevokeSagInstanceFromCcnResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RevokeSagInstanceFromCcnResponse>(await this.doRPCRequest("RevokeSagInstanceFromCcn", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeSagInstanceFromCcnResponse({}));
  }

  async revokeSagInstanceFromCcn(request: RevokeSagInstanceFromCcnRequest): Promise<RevokeSagInstanceFromCcnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeSagInstanceFromCcnWithOptions(request, runtime);
  }

  async deleteEnterpriseCodeWithOptions(request: DeleteEnterpriseCodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEnterpriseCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEnterpriseCodeResponse>(await this.doRPCRequest("DeleteEnterpriseCode", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEnterpriseCodeResponse({}));
  }

  async deleteEnterpriseCode(request: DeleteEnterpriseCodeRequest): Promise<DeleteEnterpriseCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEnterpriseCodeWithOptions(request, runtime);
  }

  async deleteSmartAccessGatewayClientUserWithOptions(request: DeleteSmartAccessGatewayClientUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmartAccessGatewayClientUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSmartAccessGatewayClientUserResponse>(await this.doRPCRequest("DeleteSmartAccessGatewayClientUser", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSmartAccessGatewayClientUserResponse({}));
  }

  async deleteSmartAccessGatewayClientUser(request: DeleteSmartAccessGatewayClientUserRequest): Promise<DeleteSmartAccessGatewayClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmartAccessGatewayClientUserWithOptions(request, runtime);
  }

  async listSmartAGByAccessPointWithOptions(request: ListSmartAGByAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<ListSmartAGByAccessPointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSmartAGByAccessPointResponse>(await this.doRPCRequest("ListSmartAGByAccessPoint", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListSmartAGByAccessPointResponse({}));
  }

  async listSmartAGByAccessPoint(request: ListSmartAGByAccessPointRequest): Promise<ListSmartAGByAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSmartAGByAccessPointWithOptions(request, runtime);
  }

  async describeGrantRulesWithOptions(request: DescribeGrantRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGrantRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGrantRulesResponse>(await this.doRPCRequest("DescribeGrantRules", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGrantRulesResponse({}));
  }

  async describeGrantRules(request: DescribeGrantRulesRequest): Promise<DescribeGrantRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGrantRulesWithOptions(request, runtime);
  }

  async createSagExpressConnectInterfaceWithOptions(request: CreateSagExpressConnectInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateSagExpressConnectInterfaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSagExpressConnectInterfaceResponse>(await this.doRPCRequest("CreateSagExpressConnectInterface", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSagExpressConnectInterfaceResponse({}));
  }

  async createSagExpressConnectInterface(request: CreateSagExpressConnectInterfaceRequest): Promise<CreateSagExpressConnectInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSagExpressConnectInterfaceWithOptions(request, runtime);
  }

  async unbindSmartAccessGatewayWithOptions(request: UnbindSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<UnbindSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindSmartAccessGatewayResponse>(await this.doRPCRequest("UnbindSmartAccessGateway", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindSmartAccessGatewayResponse({}));
  }

  async unbindSmartAccessGateway(request: UnbindSmartAccessGatewayRequest): Promise<UnbindSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindSmartAccessGatewayWithOptions(request, runtime);
  }

  async createSmartAccessGatewayWithOptions(request: CreateSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<CreateSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSmartAccessGatewayResponse>(await this.doRPCRequest("CreateSmartAccessGateway", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSmartAccessGatewayResponse({}));
  }

  async createSmartAccessGateway(request: CreateSmartAccessGatewayRequest): Promise<CreateSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSmartAccessGatewayWithOptions(request, runtime);
  }

  async deleteFlowLogWithOptions(request: DeleteFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowLogResponse>(await this.doRPCRequest("DeleteFlowLog", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowLogResponse({}));
  }

  async deleteFlowLog(request: DeleteFlowLogRequest): Promise<DeleteFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowLogWithOptions(request, runtime);
  }

  async describeSagOnlineClientStatisticsWithOptions(request: DescribeSagOnlineClientStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagOnlineClientStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagOnlineClientStatisticsResponse>(await this.doRPCRequest("DescribeSagOnlineClientStatistics", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagOnlineClientStatisticsResponse({}));
  }

  async describeSagOnlineClientStatistics(request: DescribeSagOnlineClientStatisticsRequest): Promise<DescribeSagOnlineClientStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagOnlineClientStatisticsWithOptions(request, runtime);
  }

  async modifyCloudConnectNetworkWithOptions(request: ModifyCloudConnectNetworkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCloudConnectNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCloudConnectNetworkResponse>(await this.doRPCRequest("ModifyCloudConnectNetwork", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCloudConnectNetworkResponse({}));
  }

  async modifyCloudConnectNetwork(request: ModifyCloudConnectNetworkRequest): Promise<ModifyCloudConnectNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCloudConnectNetworkWithOptions(request, runtime);
  }

  async modifySmartAccessGatewayUpBandwidthWithOptions(request: ModifySmartAccessGatewayUpBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifySmartAccessGatewayUpBandwidthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySmartAccessGatewayUpBandwidthResponse>(await this.doRPCRequest("ModifySmartAccessGatewayUpBandwidth", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySmartAccessGatewayUpBandwidthResponse({}));
  }

  async modifySmartAccessGatewayUpBandwidth(request: ModifySmartAccessGatewayUpBandwidthRequest): Promise<ModifySmartAccessGatewayUpBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySmartAccessGatewayUpBandwidthWithOptions(request, runtime);
  }

  async grantSagInstanceToCcnWithOptions(request: GrantSagInstanceToCcnRequest, runtime: $Util.RuntimeOptions): Promise<GrantSagInstanceToCcnResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantSagInstanceToCcnResponse>(await this.doRPCRequest("GrantSagInstanceToCcn", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new GrantSagInstanceToCcnResponse({}));
  }

  async grantSagInstanceToCcn(request: GrantSagInstanceToCcnRequest): Promise<GrantSagInstanceToCcnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantSagInstanceToCcnWithOptions(request, runtime);
  }

  async orchestrateSagECRouteBackupWithOptions(request: OrchestrateSagECRouteBackupRequest, runtime: $Util.RuntimeOptions): Promise<OrchestrateSagECRouteBackupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OrchestrateSagECRouteBackupResponse>(await this.doRPCRequest("OrchestrateSagECRouteBackup", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new OrchestrateSagECRouteBackupResponse({}));
  }

  async orchestrateSagECRouteBackup(request: OrchestrateSagECRouteBackupRequest): Promise<OrchestrateSagECRouteBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.orchestrateSagECRouteBackupWithOptions(request, runtime);
  }

  async modifySmartAccessGatewayWithOptions(request: ModifySmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<ModifySmartAccessGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySmartAccessGatewayResponse>(await this.doRPCRequest("ModifySmartAccessGateway", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySmartAccessGatewayResponse({}));
  }

  async modifySmartAccessGateway(request: ModifySmartAccessGatewayRequest): Promise<ModifySmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySmartAccessGatewayWithOptions(request, runtime);
  }

  async updateSmartAccessGatewayVersionWithOptions(request: UpdateSmartAccessGatewayVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAccessGatewayVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSmartAccessGatewayVersionResponse>(await this.doRPCRequest("UpdateSmartAccessGatewayVersion", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSmartAccessGatewayVersionResponse({}));
  }

  async updateSmartAccessGatewayVersion(request: UpdateSmartAccessGatewayVersionRequest): Promise<UpdateSmartAccessGatewayVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayVersionWithOptions(request, runtime);
  }

  async modifySagCidrWithOptions(request: ModifySagCidrRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagCidrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagCidrResponse>(await this.doRPCRequest("ModifySagCidr", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagCidrResponse({}));
  }

  async modifySagCidr(request: ModifySagCidrRequest): Promise<ModifySagCidrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagCidrWithOptions(request, runtime);
  }

  async describeSagDropTopNWithOptions(request: DescribeSagDropTopNRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagDropTopNResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagDropTopNResponse>(await this.doRPCRequest("DescribeSagDropTopN", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagDropTopNResponse({}));
  }

  async describeSagDropTopN(request: DescribeSagDropTopNRequest): Promise<DescribeSagDropTopNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagDropTopNWithOptions(request, runtime);
  }

  async describeSagLanListWithOptions(request: DescribeSagLanListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagLanListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagLanListResponse>(await this.doRPCRequest("DescribeSagLanList", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagLanListResponse({}));
  }

  async describeSagLanList(request: DescribeSagLanListRequest): Promise<DescribeSagLanListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagLanListWithOptions(request, runtime);
  }

  async describePbrRulesWithOptions(request: DescribePbrRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePbrRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePbrRulesResponse>(await this.doRPCRequest("DescribePbrRules", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePbrRulesResponse({}));
  }

  async describePbrRules(request: DescribePbrRulesRequest): Promise<DescribePbrRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePbrRulesWithOptions(request, runtime);
  }

  async describeACLAttributeWithOptions(request: DescribeACLAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeACLAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeACLAttributeResponse>(await this.doRPCRequest("DescribeACLAttribute", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeACLAttributeResponse({}));
  }

  async describeACLAttribute(request: DescribeACLAttributeRequest): Promise<DescribeACLAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeACLAttributeWithOptions(request, runtime);
  }

  async deleteSagExpressConnectInterfaceWithOptions(request: DeleteSagExpressConnectInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSagExpressConnectInterfaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSagExpressConnectInterfaceResponse>(await this.doRPCRequest("DeleteSagExpressConnectInterface", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSagExpressConnectInterfaceResponse({}));
  }

  async deleteSagExpressConnectInterface(request: DeleteSagExpressConnectInterfaceRequest): Promise<DeleteSagExpressConnectInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSagExpressConnectInterfaceWithOptions(request, runtime);
  }

  async listEnterpriseCodeWithOptions(request: ListEnterpriseCodeRequest, runtime: $Util.RuntimeOptions): Promise<ListEnterpriseCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEnterpriseCodeResponse>(await this.doRPCRequest("ListEnterpriseCode", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListEnterpriseCodeResponse({}));
  }

  async listEnterpriseCode(request: ListEnterpriseCodeRequest): Promise<ListEnterpriseCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnterpriseCodeWithOptions(request, runtime);
  }

  async createSmartAccessGatewaySoftwareWithOptions(request: CreateSmartAccessGatewaySoftwareRequest, runtime: $Util.RuntimeOptions): Promise<CreateSmartAccessGatewaySoftwareResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSmartAccessGatewaySoftwareResponse>(await this.doRPCRequest("CreateSmartAccessGatewaySoftware", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSmartAccessGatewaySoftwareResponse({}));
  }

  async createSmartAccessGatewaySoftware(request: CreateSmartAccessGatewaySoftwareRequest): Promise<CreateSmartAccessGatewaySoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSmartAccessGatewaySoftwareWithOptions(request, runtime);
  }

  async describeQosesWithOptions(request: DescribeQosesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQosesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeQosesResponse>(await this.doRPCRequest("DescribeQoses", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeQosesResponse({}));
  }

  async describeQoses(request: DescribeQosesRequest): Promise<DescribeQosesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQosesWithOptions(request, runtime);
  }

  async upgradeSmartAccessGatewaySoftwareWithOptions(request: UpgradeSmartAccessGatewaySoftwareRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeSmartAccessGatewaySoftwareResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeSmartAccessGatewaySoftwareResponse>(await this.doRPCRequest("UpgradeSmartAccessGatewaySoftware", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeSmartAccessGatewaySoftwareResponse({}));
  }

  async upgradeSmartAccessGatewaySoftware(request: UpgradeSmartAccessGatewaySoftwareRequest): Promise<UpgradeSmartAccessGatewaySoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeSmartAccessGatewaySoftwareWithOptions(request, runtime);
  }

  async describeSagCurrentDnsWithOptions(request: DescribeSagCurrentDnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagCurrentDnsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagCurrentDnsResponse>(await this.doRPCRequest("DescribeSagCurrentDns", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagCurrentDnsResponse({}));
  }

  async describeSagCurrentDns(request: DescribeSagCurrentDnsRequest): Promise<DescribeSagCurrentDnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagCurrentDnsWithOptions(request, runtime);
  }

  async describeSmartAccessGatewaysWithOptions(request: DescribeSmartAccessGatewaysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartAccessGatewaysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSmartAccessGatewaysResponse>(await this.doRPCRequest("DescribeSmartAccessGateways", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSmartAccessGatewaysResponse({}));
  }

  async describeSmartAccessGateways(request: DescribeSmartAccessGatewaysRequest): Promise<DescribeSmartAccessGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartAccessGatewaysWithOptions(request, runtime);
  }

  async describeQosCarsWithOptions(request: DescribeQosCarsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQosCarsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeQosCarsResponse>(await this.doRPCRequest("DescribeQosCars", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeQosCarsResponse({}));
  }

  async describeQosCars(request: DescribeQosCarsRequest): Promise<DescribeQosCarsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQosCarsWithOptions(request, runtime);
  }

  async describeUserOnlineClientStatisticsWithOptions(request: DescribeUserOnlineClientStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserOnlineClientStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserOnlineClientStatisticsResponse>(await this.doRPCRequest("DescribeUserOnlineClientStatistics", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserOnlineClientStatisticsResponse({}));
  }

  async describeUserOnlineClientStatistics(request: DescribeUserOnlineClientStatisticsRequest): Promise<DescribeUserOnlineClientStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserOnlineClientStatisticsWithOptions(request, runtime);
  }

  async updateEnterpriseCodeWithOptions(request: UpdateEnterpriseCodeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEnterpriseCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEnterpriseCodeResponse>(await this.doRPCRequest("UpdateEnterpriseCode", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEnterpriseCodeResponse({}));
  }

  async updateEnterpriseCode(request: UpdateEnterpriseCodeRequest): Promise<UpdateEnterpriseCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEnterpriseCodeWithOptions(request, runtime);
  }

  async bindVbrWithOptions(request: BindVbrRequest, runtime: $Util.RuntimeOptions): Promise<BindVbrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindVbrResponse>(await this.doRPCRequest("BindVbr", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new BindVbrResponse({}));
  }

  async bindVbr(request: BindVbrRequest): Promise<BindVbrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindVbrWithOptions(request, runtime);
  }

  async describeSagRouteProtocolBgpWithOptions(request: DescribeSagRouteProtocolBgpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagRouteProtocolBgpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagRouteProtocolBgpResponse>(await this.doRPCRequest("DescribeSagRouteProtocolBgp", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagRouteProtocolBgpResponse({}));
  }

  async describeSagRouteProtocolBgp(request: DescribeSagRouteProtocolBgpRequest): Promise<DescribeSagRouteProtocolBgpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagRouteProtocolBgpWithOptions(request, runtime);
  }

  async disableSmartAccessGatewayUserWithOptions(request: DisableSmartAccessGatewayUserRequest, runtime: $Util.RuntimeOptions): Promise<DisableSmartAccessGatewayUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableSmartAccessGatewayUserResponse>(await this.doRPCRequest("DisableSmartAccessGatewayUser", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DisableSmartAccessGatewayUserResponse({}));
  }

  async disableSmartAccessGatewayUser(request: DisableSmartAccessGatewayUserRequest): Promise<DisableSmartAccessGatewayUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSmartAccessGatewayUserWithOptions(request, runtime);
  }

  async deleteDnatEntryWithOptions(request: DeleteDnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDnatEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDnatEntryResponse>(await this.doRPCRequest("DeleteDnatEntry", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDnatEntryResponse({}));
  }

  async deleteDnatEntry(request: DeleteDnatEntryRequest): Promise<DeleteDnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDnatEntryWithOptions(request, runtime);
  }

  async setSagRouteableAddressWithOptions(request: SetSagRouteableAddressRequest, runtime: $Util.RuntimeOptions): Promise<SetSagRouteableAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetSagRouteableAddressResponse>(await this.doRPCRequest("SetSagRouteableAddress", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new SetSagRouteableAddressResponse({}));
  }

  async setSagRouteableAddress(request: SetSagRouteableAddressRequest): Promise<SetSagRouteableAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSagRouteableAddressWithOptions(request, runtime);
  }

  async modifyACLWithOptions(request: ModifyACLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyACLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyACLResponse>(await this.doRPCRequest("ModifyACL", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyACLResponse({}));
  }

  async modifyACL(request: ModifyACLRequest): Promise<ModifyACLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyACLWithOptions(request, runtime);
  }

  async getSmartAccessGatewayUseLimitWithOptions(request: GetSmartAccessGatewayUseLimitRequest, runtime: $Util.RuntimeOptions): Promise<GetSmartAccessGatewayUseLimitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSmartAccessGatewayUseLimitResponse>(await this.doRPCRequest("GetSmartAccessGatewayUseLimit", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new GetSmartAccessGatewayUseLimitResponse({}));
  }

  async getSmartAccessGatewayUseLimit(request: GetSmartAccessGatewayUseLimitRequest): Promise<GetSmartAccessGatewayUseLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSmartAccessGatewayUseLimitWithOptions(request, runtime);
  }

  async deleteSmartAccessGatewayWithOptions(request: DeleteSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSmartAccessGatewayResponse>(await this.doRPCRequest("DeleteSmartAccessGateway", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSmartAccessGatewayResponse({}));
  }

  async deleteSmartAccessGateway(request: DeleteSmartAccessGatewayRequest): Promise<DeleteSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmartAccessGatewayWithOptions(request, runtime);
  }

  async grantInstanceToCbnWithOptions(request: GrantInstanceToCbnRequest, runtime: $Util.RuntimeOptions): Promise<GrantInstanceToCbnResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantInstanceToCbnResponse>(await this.doRPCRequest("GrantInstanceToCbn", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new GrantInstanceToCbnResponse({}));
  }

  async grantInstanceToCbn(request: GrantInstanceToCbnRequest): Promise<GrantInstanceToCbnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantInstanceToCbnWithOptions(request, runtime);
  }

  async addSnatEntryWithOptions(request: AddSnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<AddSnatEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddSnatEntryResponse>(await this.doRPCRequest("AddSnatEntry", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new AddSnatEntryResponse({}));
  }

  async addSnatEntry(request: AddSnatEntryRequest): Promise<AddSnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSnatEntryWithOptions(request, runtime);
  }

  async disableSmartAGDpiMonitorWithOptions(request: DisableSmartAGDpiMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DisableSmartAGDpiMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableSmartAGDpiMonitorResponse>(await this.doRPCRequest("DisableSmartAGDpiMonitor", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DisableSmartAGDpiMonitorResponse({}));
  }

  async disableSmartAGDpiMonitor(request: DisableSmartAGDpiMonitorRequest): Promise<DisableSmartAGDpiMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSmartAGDpiMonitorWithOptions(request, runtime);
  }

  async describeSnatEntriesWithOptions(request: DescribeSnatEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnatEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSnatEntriesResponse>(await this.doRPCRequest("DescribeSnatEntries", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSnatEntriesResponse({}));
  }

  async describeSnatEntries(request: DescribeSnatEntriesRequest): Promise<DescribeSnatEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnatEntriesWithOptions(request, runtime);
  }

  async modifyClientUserDNSWithOptions(request: ModifyClientUserDNSRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClientUserDNSResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClientUserDNSResponse>(await this.doRPCRequest("ModifyClientUserDNS", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClientUserDNSResponse({}));
  }

  async modifyClientUserDNS(request: ModifyClientUserDNSRequest): Promise<ModifyClientUserDNSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClientUserDNSWithOptions(request, runtime);
  }

  async modifySagRouteProtocolBgpWithOptions(request: ModifySagRouteProtocolBgpRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagRouteProtocolBgpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagRouteProtocolBgpResponse>(await this.doRPCRequest("ModifySagRouteProtocolBgp", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagRouteProtocolBgpResponse({}));
  }

  async modifySagRouteProtocolBgp(request: ModifySagRouteProtocolBgpRequest): Promise<ModifySagRouteProtocolBgpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagRouteProtocolBgpWithOptions(request, runtime);
  }

  async modifyQosCarWithOptions(request: ModifyQosCarRequest, runtime: $Util.RuntimeOptions): Promise<ModifyQosCarResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyQosCarResponse>(await this.doRPCRequest("ModifyQosCar", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyQosCarResponse({}));
  }

  async modifyQosCar(request: ModifyQosCarRequest): Promise<ModifyQosCarResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyQosCarWithOptions(request, runtime);
  }

  async createFlowLogWithOptions(request: CreateFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowLogResponse>(await this.doRPCRequest("CreateFlowLog", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowLogResponse({}));
  }

  async createFlowLog(request: CreateFlowLogRequest): Promise<CreateFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowLogWithOptions(request, runtime);
  }

  async modifyDeviceAutoUpgradePolicyWithOptions(request: ModifyDeviceAutoUpgradePolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceAutoUpgradePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDeviceAutoUpgradePolicyResponse>(await this.doRPCRequest("ModifyDeviceAutoUpgradePolicy", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDeviceAutoUpgradePolicyResponse({}));
  }

  async modifyDeviceAutoUpgradePolicy(request: ModifyDeviceAutoUpgradePolicyRequest): Promise<ModifyDeviceAutoUpgradePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceAutoUpgradePolicyWithOptions(request, runtime);
  }

  async describeClientUserDNSWithOptions(request: DescribeClientUserDNSRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientUserDNSResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClientUserDNSResponse>(await this.doRPCRequest("DescribeClientUserDNS", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClientUserDNSResponse({}));
  }

  async describeClientUserDNS(request: DescribeClientUserDNSRequest): Promise<DescribeClientUserDNSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientUserDNSWithOptions(request, runtime);
  }

  async clearSagCipherWithOptions(request: ClearSagCipherRequest, runtime: $Util.RuntimeOptions): Promise<ClearSagCipherResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClearSagCipherResponse>(await this.doRPCRequest("ClearSagCipher", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ClearSagCipherResponse({}));
  }

  async clearSagCipher(request: ClearSagCipherRequest): Promise<ClearSagCipherResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearSagCipherWithOptions(request, runtime);
  }

  async describeSagWan4GWithOptions(request: DescribeSagWan4GRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagWan4GResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagWan4GResponse>(await this.doRPCRequest("DescribeSagWan4G", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagWan4GResponse({}));
  }

  async describeSagWan4G(request: DescribeSagWan4GRequest): Promise<DescribeSagWan4GResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagWan4GWithOptions(request, runtime);
  }

  async modifySagUserDnsWithOptions(request: ModifySagUserDnsRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagUserDnsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagUserDnsResponse>(await this.doRPCRequest("ModifySagUserDns", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagUserDnsResponse({}));
  }

  async modifySagUserDns(request: ModifySagUserDnsRequest): Promise<ModifySagUserDnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagUserDnsWithOptions(request, runtime);
  }

  async modifySagManagementPortWithOptions(request: ModifySagManagementPortRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagManagementPortResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagManagementPortResponse>(await this.doRPCRequest("ModifySagManagementPort", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagManagementPortResponse({}));
  }

  async modifySagManagementPort(request: ModifySagManagementPortRequest): Promise<ModifySagManagementPortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagManagementPortWithOptions(request, runtime);
  }

  async describeDnatEntriesWithOptions(request: DescribeDnatEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnatEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnatEntriesResponse>(await this.doRPCRequest("DescribeDnatEntries", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnatEntriesResponse({}));
  }

  async describeDnatEntries(request: DescribeDnatEntriesRequest): Promise<DescribeDnatEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnatEntriesWithOptions(request, runtime);
  }

  async describeSmartAccessGatewayVersionsWithOptions(request: DescribeSmartAccessGatewayVersionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartAccessGatewayVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSmartAccessGatewayVersionsResponse>(await this.doRPCRequest("DescribeSmartAccessGatewayVersions", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSmartAccessGatewayVersionsResponse({}));
  }

  async describeSmartAccessGatewayVersions(request: DescribeSmartAccessGatewayVersionsRequest): Promise<DescribeSmartAccessGatewayVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartAccessGatewayVersionsWithOptions(request, runtime);
  }

  async revokeInstanceFromCbnWithOptions(request: RevokeInstanceFromCbnRequest, runtime: $Util.RuntimeOptions): Promise<RevokeInstanceFromCbnResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RevokeInstanceFromCbnResponse>(await this.doRPCRequest("RevokeInstanceFromCbn", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeInstanceFromCbnResponse({}));
  }

  async revokeInstanceFromCbn(request: RevokeInstanceFromCbnRequest): Promise<RevokeInstanceFromCbnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeInstanceFromCbnWithOptions(request, runtime);
  }

  async describeSagRemoteAccessWithOptions(request: DescribeSagRemoteAccessRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagRemoteAccessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagRemoteAccessResponse>(await this.doRPCRequest("DescribeSagRemoteAccess", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagRemoteAccessResponse({}));
  }

  async describeSagRemoteAccess(request: DescribeSagRemoteAccessRequest): Promise<DescribeSagRemoteAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagRemoteAccessWithOptions(request, runtime);
  }

  async createQosPolicyWithOptions(request: CreateQosPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateQosPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateQosPolicyResponse>(await this.doRPCRequest("CreateQosPolicy", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateQosPolicyResponse({}));
  }

  async createQosPolicy(request: CreateQosPolicyRequest): Promise<CreateQosPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQosPolicyWithOptions(request, runtime);
  }

  async describeSagECRouteBackupAttributeWithOptions(request: DescribeSagECRouteBackupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagECRouteBackupAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagECRouteBackupAttributeResponse>(await this.doRPCRequest("DescribeSagECRouteBackupAttribute", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagECRouteBackupAttributeResponse({}));
  }

  async describeSagECRouteBackupAttribute(request: DescribeSagECRouteBackupAttributeRequest): Promise<DescribeSagECRouteBackupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagECRouteBackupAttributeWithOptions(request, runtime);
  }

  async describeFlowLogSagsWithOptions(request: DescribeFlowLogSagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowLogSagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowLogSagsResponse>(await this.doRPCRequest("DescribeFlowLogSags", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowLogSagsResponse({}));
  }

  async describeFlowLogSags(request: DescribeFlowLogSagsRequest): Promise<DescribeFlowLogSagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowLogSagsWithOptions(request, runtime);
  }

  async modifySagWifiWithOptions(request: ModifySagWifiRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagWifiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagWifiResponse>(await this.doRPCRequest("ModifySagWifi", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagWifiResponse({}));
  }

  async modifySagWifi(request: ModifySagWifiRequest): Promise<ModifySagWifiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagWifiWithOptions(request, runtime);
  }

  async modifySagWanWithOptions(request: ModifySagWanRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagWanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySagWanResponse>(await this.doRPCRequest("ModifySagWan", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySagWanResponse({}));
  }

  async modifySagWan(request: ModifySagWanRequest): Promise<ModifySagWanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagWanWithOptions(request, runtime);
  }

  async describeSmartAccessGatewayHaWithOptions(request: DescribeSmartAccessGatewayHaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartAccessGatewayHaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSmartAccessGatewayHaResponse>(await this.doRPCRequest("DescribeSmartAccessGatewayHa", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSmartAccessGatewayHaResponse({}));
  }

  async describeSmartAccessGatewayHa(request: DescribeSmartAccessGatewayHaRequest): Promise<DescribeSmartAccessGatewayHaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartAccessGatewayHaWithOptions(request, runtime);
  }

  async deleteCloudConnectNetworkWithOptions(request: DeleteCloudConnectNetworkRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCloudConnectNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCloudConnectNetworkResponse>(await this.doRPCRequest("DeleteCloudConnectNetwork", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCloudConnectNetworkResponse({}));
  }

  async deleteCloudConnectNetwork(request: DeleteCloudConnectNetworkRequest): Promise<DeleteCloudConnectNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCloudConnectNetworkWithOptions(request, runtime);
  }

  async downgradeSmartAccessGatewaySoftwareWithOptions(request: DowngradeSmartAccessGatewaySoftwareRequest, runtime: $Util.RuntimeOptions): Promise<DowngradeSmartAccessGatewaySoftwareResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DowngradeSmartAccessGatewaySoftwareResponse>(await this.doRPCRequest("DowngradeSmartAccessGatewaySoftware", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DowngradeSmartAccessGatewaySoftwareResponse({}));
  }

  async downgradeSmartAccessGatewaySoftware(request: DowngradeSmartAccessGatewaySoftwareRequest): Promise<DowngradeSmartAccessGatewaySoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downgradeSmartAccessGatewaySoftwareWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeHealthChecksWithOptions(request: DescribeHealthChecksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthChecksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHealthChecksResponse>(await this.doRPCRequest("DescribeHealthChecks", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHealthChecksResponse({}));
  }

  async describeHealthChecks(request: DescribeHealthChecksRequest): Promise<DescribeHealthChecksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthChecksWithOptions(request, runtime);
  }

  async getCloudConnectNetworkUseLimitWithOptions(request: GetCloudConnectNetworkUseLimitRequest, runtime: $Util.RuntimeOptions): Promise<GetCloudConnectNetworkUseLimitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCloudConnectNetworkUseLimitResponse>(await this.doRPCRequest("GetCloudConnectNetworkUseLimit", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new GetCloudConnectNetworkUseLimitResponse({}));
  }

  async getCloudConnectNetworkUseLimit(request: GetCloudConnectNetworkUseLimitRequest): Promise<GetCloudConnectNetworkUseLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCloudConnectNetworkUseLimitWithOptions(request, runtime);
  }

  async listAccessPointsWithOptions(request: ListAccessPointsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessPointsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAccessPointsResponse>(await this.doRPCRequest("ListAccessPoints", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListAccessPointsResponse({}));
  }

  async listAccessPoints(request: ListAccessPointsRequest): Promise<ListAccessPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessPointsWithOptions(request, runtime);
  }

  async deleteQosCarWithOptions(request: DeleteQosCarRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQosCarResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteQosCarResponse>(await this.doRPCRequest("DeleteQosCar", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteQosCarResponse({}));
  }

  async deleteQosCar(request: DeleteQosCarRequest): Promise<DeleteQosCarResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQosCarWithOptions(request, runtime);
  }

  async describeDeviceAutoUpgradePolicyWithOptions(request: DescribeDeviceAutoUpgradePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceAutoUpgradePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceAutoUpgradePolicyResponse>(await this.doRPCRequest("DescribeDeviceAutoUpgradePolicy", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceAutoUpgradePolicyResponse({}));
  }

  async describeDeviceAutoUpgradePolicy(request: DescribeDeviceAutoUpgradePolicyRequest): Promise<DescribeDeviceAutoUpgradePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceAutoUpgradePolicyWithOptions(request, runtime);
  }

  async listDpiSignaturesWithOptions(request: ListDpiSignaturesRequest, runtime: $Util.RuntimeOptions): Promise<ListDpiSignaturesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDpiSignaturesResponse>(await this.doRPCRequest("ListDpiSignatures", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListDpiSignaturesResponse({}));
  }

  async listDpiSignatures(request: ListDpiSignaturesRequest): Promise<ListDpiSignaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDpiSignaturesWithOptions(request, runtime);
  }

  async unbindVbrWithOptions(request: UnbindVbrRequest, runtime: $Util.RuntimeOptions): Promise<UnbindVbrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindVbrResponse>(await this.doRPCRequest("UnbindVbr", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindVbrResponse({}));
  }

  async unbindVbr(request: UnbindVbrRequest): Promise<UnbindVbrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindVbrWithOptions(request, runtime);
  }

  async describeBindableSmartAccessGatewaysWithOptions(request: DescribeBindableSmartAccessGatewaysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBindableSmartAccessGatewaysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBindableSmartAccessGatewaysResponse>(await this.doRPCRequest("DescribeBindableSmartAccessGateways", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBindableSmartAccessGatewaysResponse({}));
  }

  async describeBindableSmartAccessGateways(request: DescribeBindableSmartAccessGatewaysRequest): Promise<DescribeBindableSmartAccessGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBindableSmartAccessGatewaysWithOptions(request, runtime);
  }

  async describeSagPortListWithOptions(request: DescribeSagPortListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagPortListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSagPortListResponse>(await this.doRPCRequest("DescribeSagPortList", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSagPortListResponse({}));
  }

  async describeSagPortList(request: DescribeSagPortListRequest): Promise<DescribeSagPortListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagPortListWithOptions(request, runtime);
  }

  async listDpiGroupsWithOptions(request: ListDpiGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListDpiGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDpiGroupsResponse>(await this.doRPCRequest("ListDpiGroups", "2018-03-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListDpiGroupsResponse({}));
  }

  async listDpiGroups(request: ListDpiGroupsRequest): Promise<ListDpiGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDpiGroupsWithOptions(request, runtime);
  }

}
