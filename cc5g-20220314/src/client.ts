// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddDNSAuthorizationRuleRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  destinationIp?: string;
  dryRun?: boolean;
  name?: string;
  sourceDNSIp?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      destinationIp: 'DestinationIp',
      dryRun: 'DryRun',
      name: 'Name',
      sourceDNSIp: 'SourceDNSIp',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      destinationIp: 'string',
      dryRun: 'boolean',
      name: 'string',
      sourceDNSIp: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDNSAuthorizationRuleResponseBody extends $tea.Model {
  authorizationRuleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDNSAuthorizationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDNSAuthorizationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDNSAuthorizationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachVpcToNetLinkRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  netLinkId?: string;
  regionId?: string;
  vSwitches?: string[];
  vpcId?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      netLinkId: 'NetLinkId',
      regionId: 'RegionId',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      netLinkId: 'string',
      regionId: 'string',
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachVpcToNetLinkResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachVpcToNetLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachVpcToNetLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachVpcToNetLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthorizationRuleRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  destination?: string;
  destinationType?: string;
  dryRun?: boolean;
  name?: string;
  policy?: string;
  sourceCidr?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      destination: 'Destination',
      destinationType: 'DestinationType',
      dryRun: 'DryRun',
      name: 'Name',
      policy: 'Policy',
      sourceCidr: 'SourceCidr',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      destination: 'string',
      destinationType: 'string',
      dryRun: 'boolean',
      name: 'string',
      policy: 'string',
      sourceCidr: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthorizationRuleResponseBody extends $tea.Model {
  authorizationRuleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthorizationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAuthorizationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAuthorizationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWirelessCloudConnectorRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  dryRun?: boolean;
  ISP?: string;
  name?: string;
  netLinks?: CreateWirelessCloudConnectorRequestNetLinks[];
  regionId?: string;
  useCase?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      ISP: 'ISP',
      name: 'Name',
      netLinks: 'NetLinks',
      regionId: 'RegionId',
      useCase: 'UseCase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      ISP: 'string',
      name: 'string',
      netLinks: { 'type': 'array', 'itemType': CreateWirelessCloudConnectorRequestNetLinks },
      regionId: 'string',
      useCase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWirelessCloudConnectorResponseBody extends $tea.Model {
  requestId?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWirelessCloudConnectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateWirelessCloudConnectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateWirelessCloudConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthorizationRuleRequest extends $tea.Model {
  authorizationRuleId?: string;
  clientToken?: string;
  dryRun?: boolean;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthorizationRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthorizationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAuthorizationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAuthorizationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWirelessCloudConnectorRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWirelessCloudConnectorResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWirelessCloudConnectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteWirelessCloudConnectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWirelessCloudConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVpcFromNetLinkRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  netLinkId?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      netLinkId: 'NetLinkId',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      netLinkId: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVpcFromNetLinkResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVpcFromNetLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachVpcFromNetLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachVpcFromNetLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWirelessCloudConnectorRequest extends $tea.Model {
  regionId?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWirelessCloudConnectorResponseBody extends $tea.Model {
  cardCount?: string;
  createTime?: string;
  dataPackageId?: string;
  dataPackageType?: string;
  description?: string;
  name?: string;
  netLinks?: GetWirelessCloudConnectorResponseBodyNetLinks[];
  regionId?: string;
  requestId?: string;
  status?: string;
  useCase?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      cardCount: 'CardCount',
      createTime: 'CreateTime',
      dataPackageId: 'DataPackageId',
      dataPackageType: 'DataPackageType',
      description: 'Description',
      name: 'Name',
      netLinks: 'NetLinks',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
      useCase: 'UseCase',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardCount: 'string',
      createTime: 'string',
      dataPackageId: 'string',
      dataPackageType: 'string',
      description: 'string',
      name: 'string',
      netLinks: { 'type': 'array', 'itemType': GetWirelessCloudConnectorResponseBodyNetLinks },
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      useCase: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWirelessCloudConnectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWirelessCloudConnectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWirelessCloudConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationRulesRequest extends $tea.Model {
  authorizationRuleIds?: string[];
  destination?: string;
  destinationType?: string;
  dns?: boolean;
  maxResults?: number;
  names?: string[];
  nextToken?: string;
  policy?: string;
  statuses?: string[];
  type?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleIds: 'AuthorizationRuleIds',
      destination: 'Destination',
      destinationType: 'DestinationType',
      dns: 'Dns',
      maxResults: 'MaxResults',
      names: 'Names',
      nextToken: 'NextToken',
      policy: 'Policy',
      statuses: 'Statuses',
      type: 'Type',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleIds: { 'type': 'array', 'itemType': 'string' },
      destination: 'string',
      destinationType: 'string',
      dns: 'boolean',
      maxResults: 'number',
      names: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      policy: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationRulesResponseBody extends $tea.Model {
  authorizationRules?: ListAuthorizationRulesResponseBodyAuthorizationRules[];
  maxResults?: string;
  nextToken?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRules: 'AuthorizationRules',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRules: { 'type': 'array', 'itemType': ListAuthorizationRulesResponseBodyAuthorizationRules },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAuthorizationRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAuthorizationRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardsRequest extends $tea.Model {
  apn?: string;
  destinationType?: string;
  iccids?: string[];
  ipAddress?: string;
  lock?: boolean;
  maxResults?: number;
  netLinkId?: string;
  nextToken?: string;
  online?: boolean;
  statuses?: string[];
  vpcId?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      apn: 'Apn',
      destinationType: 'DestinationType',
      iccids: 'Iccids',
      ipAddress: 'IpAddress',
      lock: 'Lock',
      maxResults: 'MaxResults',
      netLinkId: 'NetLinkId',
      nextToken: 'NextToken',
      online: 'Online',
      statuses: 'Statuses',
      vpcId: 'VpcId',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apn: 'string',
      destinationType: 'string',
      iccids: { 'type': 'array', 'itemType': 'string' },
      ipAddress: 'string',
      lock: 'boolean',
      maxResults: 'number',
      netLinkId: 'string',
      nextToken: 'string',
      online: 'boolean',
      statuses: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardsResponseBody extends $tea.Model {
  cards?: ListCardsResponseBodyCards[];
  maxResults?: string;
  nextToken?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      cards: 'Cards',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cards: { 'type': 'array', 'itemType': ListCardsResponseBodyCards },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCardsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPackagesRequest extends $tea.Model {
  dataPackageIds?: string[];
  maxResults?: number;
  names?: string[];
  nextToken?: string;
  statuses?: string[];
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPackageIds: 'DataPackageIds',
      maxResults: 'MaxResults',
      names: 'Names',
      nextToken: 'NextToken',
      statuses: 'Statuses',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPackageIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      names: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPackagesResponseBody extends $tea.Model {
  dataPackages?: ListDataPackagesResponseBodyDataPackages[];
  maxResults?: string;
  nextToken?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      dataPackages: 'DataPackages',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPackages: { 'type': 'array', 'itemType': ListDataPackagesResponseBodyDataPackages },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrdersRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  orderAction?: string;
  orderIds?: string[];
  statuses?: string[];
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderAction: 'OrderAction',
      orderIds: 'OrderIds',
      statuses: 'Statuses',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      orderAction: 'string',
      orderIds: { 'type': 'array', 'itemType': 'string' },
      statuses: { 'type': 'array', 'itemType': 'string' },
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrdersResponseBody extends $tea.Model {
  maxResults?: string;
  nextToken?: string;
  orders?: ListOrdersResponseBodyOrders[];
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orders: 'Orders',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      orders: { 'type': 'array', 'itemType': ListOrdersResponseBodyOrders },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrdersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  regions?: ListRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWirelessCloudConnectorsRequest extends $tea.Model {
  maxResults?: number;
  names?: string[];
  nextToken?: string;
  regionId?: string;
  statuses?: string[];
  wirelessCloudConnectorIds?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      names: 'Names',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      statuses: 'Statuses',
      wirelessCloudConnectorIds: 'WirelessCloudConnectorIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      names: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      regionId: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
      wirelessCloudConnectorIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWirelessCloudConnectorsResponseBody extends $tea.Model {
  maxResults?: string;
  nextToken?: string;
  requestId?: string;
  totalCount?: string;
  wirelessCloudConnectors?: ListWirelessCloudConnectorsResponseBodyWirelessCloudConnectors[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      wirelessCloudConnectors: 'WirelessCloudConnectors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
      wirelessCloudConnectors: { 'type': 'array', 'itemType': ListWirelessCloudConnectorsResponseBodyWirelessCloudConnectors },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWirelessCloudConnectorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListWirelessCloudConnectorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListWirelessCloudConnectorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZonesRequest extends $tea.Model {
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

export class ListZonesResponseBody extends $tea.Model {
  requestId?: string;
  zones?: ListZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': ListZonesResponseBodyZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCc5gServiceRequest extends $tea.Model {
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

export class OpenCc5gServiceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCc5gServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenCc5gServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenCc5gServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthorizationRuleRequest extends $tea.Model {
  authorizationRuleId?: string;
  clientToken?: string;
  description?: string;
  destination?: string;
  dryRun?: boolean;
  name?: string;
  policy?: string;
  sourceCidr?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      clientToken: 'ClientToken',
      description: 'Description',
      destination: 'Destination',
      dryRun: 'DryRun',
      name: 'Name',
      policy: 'Policy',
      sourceCidr: 'SourceCidr',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      clientToken: 'string',
      description: 'string',
      destination: 'string',
      dryRun: 'boolean',
      name: 'string',
      policy: 'string',
      sourceCidr: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthorizationRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthorizationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAuthorizationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAuthorizationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCardRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  dryRun?: boolean;
  iccid?: string;
  name?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      iccid: 'Iccid',
      name: 'Name',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      iccid: 'string',
      name: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCardResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDNSAuthorizationRuleRequest extends $tea.Model {
  authorizationRuleId?: string;
  clientToken?: string;
  description?: string;
  destinationIp?: string;
  dryRun?: boolean;
  name?: string;
  sourceDNSIp?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      clientToken: 'ClientToken',
      description: 'Description',
      destinationIp: 'DestinationIp',
      dryRun: 'DryRun',
      name: 'Name',
      sourceDNSIp: 'SourceDNSIp',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      clientToken: 'string',
      description: 'string',
      destinationIp: 'string',
      dryRun: 'boolean',
      name: 'string',
      sourceDNSIp: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDNSAuthorizationRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDNSAuthorizationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDNSAuthorizationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDNSAuthorizationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWirelessCloudConnectorRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  dryRun?: boolean;
  name?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      name: 'Name',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      name: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWirelessCloudConnectorResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWirelessCloudConnectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateWirelessCloudConnectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateWirelessCloudConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWirelessCloudConnectorRequestNetLinks extends $tea.Model {
  APN?: string;
  regionId?: string;
  vSwitchs?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      regionId: 'RegionId',
      vSwitchs: 'VSwitchs',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APN: 'string',
      regionId: 'string',
      vSwitchs: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWirelessCloudConnectorResponseBodyNetLinks extends $tea.Model {
  APN?: string;
  createTime?: string;
  description?: string;
  ISP?: string;
  name?: string;
  netLinkId?: string;
  regionId?: string;
  status?: string;
  vSwitchs?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      createTime: 'CreateTime',
      description: 'Description',
      ISP: 'ISP',
      name: 'Name',
      netLinkId: 'NetLinkId',
      regionId: 'RegionId',
      status: 'Status',
      vSwitchs: 'VSwitchs',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APN: 'string',
      createTime: 'string',
      description: 'string',
      ISP: 'string',
      name: 'string',
      netLinkId: 'string',
      regionId: 'string',
      status: 'string',
      vSwitchs: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationRulesResponseBodyAuthorizationRules extends $tea.Model {
  authorizationRuleId?: string;
  createTime?: string;
  description?: string;
  destination?: string;
  destinationType?: string;
  dns?: string;
  name?: string;
  policy?: string;
  sourceCidr?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      createTime: 'CreateTime',
      description: 'Description',
      destination: 'Destination',
      destinationType: 'DestinationType',
      dns: 'Dns',
      name: 'Name',
      policy: 'Policy',
      sourceCidr: 'SourceCidr',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      createTime: 'string',
      description: 'string',
      destination: 'string',
      destinationType: 'string',
      dns: 'string',
      name: 'string',
      policy: 'string',
      sourceCidr: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardsResponseBodyCards extends $tea.Model {
  APN?: string;
  activatedTime?: string;
  description?: string;
  ISP?: string;
  iccid?: string;
  imei?: string;
  imsi?: string;
  ipAddress?: string;
  lock?: boolean;
  name?: string;
  netType?: string;
  orderId?: string;
  spec?: string;
  status?: string;
  usageDataMonth?: number;
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      activatedTime: 'ActivatedTime',
      description: 'Description',
      ISP: 'ISP',
      iccid: 'Iccid',
      imei: 'Imei',
      imsi: 'Imsi',
      ipAddress: 'IpAddress',
      lock: 'Lock',
      name: 'Name',
      netType: 'NetType',
      orderId: 'OrderId',
      spec: 'Spec',
      status: 'Status',
      usageDataMonth: 'UsageDataMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APN: 'string',
      activatedTime: 'string',
      description: 'string',
      ISP: 'string',
      iccid: 'string',
      imei: 'string',
      imsi: 'string',
      ipAddress: 'string',
      lock: 'boolean',
      name: 'string',
      netType: 'string',
      orderId: 'string',
      spec: 'string',
      status: 'string',
      usageDataMonth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPackagesResponseBodyDataPackages extends $tea.Model {
  cardCount?: string;
  createTime?: string;
  dataPackageId?: string;
  expiredTime?: string;
  ISP?: string;
  name?: string;
  size?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cardCount: 'CardCount',
      createTime: 'CreateTime',
      dataPackageId: 'DataPackageId',
      expiredTime: 'ExpiredTime',
      ISP: 'ISP',
      name: 'Name',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardCount: 'string',
      createTime: 'string',
      dataPackageId: 'string',
      expiredTime: 'string',
      ISP: 'string',
      name: 'string',
      size: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrdersResponseBodyOrders extends $tea.Model {
  action?: string;
  cardCount?: string;
  cardNetType?: string;
  cardType?: string;
  contactName?: string;
  contactPhone?: string;
  createTime?: string;
  description?: string;
  logisticsId?: string;
  logisticsStatus?: string;
  logisticsType?: string;
  logisticsUpdateTime?: string;
  orderId?: string;
  payTime?: string;
  postAddress?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      cardCount: 'CardCount',
      cardNetType: 'CardNetType',
      cardType: 'CardType',
      contactName: 'ContactName',
      contactPhone: 'ContactPhone',
      createTime: 'CreateTime',
      description: 'Description',
      logisticsId: 'LogisticsId',
      logisticsStatus: 'LogisticsStatus',
      logisticsType: 'LogisticsType',
      logisticsUpdateTime: 'LogisticsUpdateTime',
      orderId: 'OrderId',
      payTime: 'PayTime',
      postAddress: 'PostAddress',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      cardCount: 'string',
      cardNetType: 'string',
      cardType: 'string',
      contactName: 'string',
      contactPhone: 'string',
      createTime: 'string',
      description: 'string',
      logisticsId: 'string',
      logisticsStatus: 'string',
      logisticsType: 'string',
      logisticsUpdateTime: 'string',
      orderId: 'string',
      payTime: 'string',
      postAddress: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegions extends $tea.Model {
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

export class ListWirelessCloudConnectorsResponseBodyWirelessCloudConnectors extends $tea.Model {
  cardCount?: string;
  createTime?: string;
  dataPackageId?: string;
  dataPackageType?: string;
  description?: string;
  name?: string;
  regionId?: string;
  status?: string;
  useCase?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      cardCount: 'CardCount',
      createTime: 'CreateTime',
      dataPackageId: 'DataPackageId',
      dataPackageType: 'DataPackageType',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      status: 'Status',
      useCase: 'UseCase',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardCount: 'string',
      createTime: 'string',
      dataPackageId: 'string',
      dataPackageType: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      useCase: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZonesResponseBodyZones extends $tea.Model {
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cc5g", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addDNSAuthorizationRuleWithOptions(request: AddDNSAuthorizationRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddDNSAuthorizationRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destinationIp)) {
      query["DestinationIp"] = request.destinationIp;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.sourceDNSIp)) {
      query["SourceDNSIp"] = request.sourceDNSIp;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorId)) {
      query["WirelessCloudConnectorId"] = request.wirelessCloudConnectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDNSAuthorizationRule",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDNSAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new AddDNSAuthorizationRuleResponse({}));
  }

  async addDNSAuthorizationRule(request: AddDNSAuthorizationRuleRequest): Promise<AddDNSAuthorizationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDNSAuthorizationRuleWithOptions(request, runtime);
  }

  async attachVpcToNetLinkWithOptions(request: AttachVpcToNetLinkRequest, runtime: $Util.RuntimeOptions): Promise<AttachVpcToNetLinkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.netLinkId)) {
      query["NetLinkId"] = request.netLinkId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vSwitches)) {
      query["VSwitches"] = request.vSwitches;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorId)) {
      query["WirelessCloudConnectorId"] = request.wirelessCloudConnectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachVpcToNetLink",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachVpcToNetLinkResponse>(await this.callApi(params, req, runtime), new AttachVpcToNetLinkResponse({}));
  }

  async attachVpcToNetLink(request: AttachVpcToNetLinkRequest): Promise<AttachVpcToNetLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachVpcToNetLinkWithOptions(request, runtime);
  }

  async createAuthorizationRuleWithOptions(request: CreateAuthorizationRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateAuthorizationRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.sourceCidr)) {
      query["SourceCidr"] = request.sourceCidr;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorId)) {
      query["WirelessCloudConnectorId"] = request.wirelessCloudConnectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAuthorizationRule",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new CreateAuthorizationRuleResponse({}));
  }

  async createAuthorizationRule(request: CreateAuthorizationRuleRequest): Promise<CreateAuthorizationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAuthorizationRuleWithOptions(request, runtime);
  }

  async createWirelessCloudConnectorWithOptions(request: CreateWirelessCloudConnectorRequest, runtime: $Util.RuntimeOptions): Promise<CreateWirelessCloudConnectorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ISP)) {
      query["ISP"] = request.ISP;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.netLinks)) {
      query["NetLinks"] = request.netLinks;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.useCase)) {
      query["UseCase"] = request.useCase;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWirelessCloudConnector",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWirelessCloudConnectorResponse>(await this.callApi(params, req, runtime), new CreateWirelessCloudConnectorResponse({}));
  }

  async createWirelessCloudConnector(request: CreateWirelessCloudConnectorRequest): Promise<CreateWirelessCloudConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWirelessCloudConnectorWithOptions(request, runtime);
  }

  async deleteAuthorizationRuleWithOptions(request: DeleteAuthorizationRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAuthorizationRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorId)) {
      query["WirelessCloudConnectorId"] = request.wirelessCloudConnectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAuthorizationRule",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new DeleteAuthorizationRuleResponse({}));
  }

  async deleteAuthorizationRule(request: DeleteAuthorizationRuleRequest): Promise<DeleteAuthorizationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAuthorizationRuleWithOptions(request, runtime);
  }

  async deleteWirelessCloudConnectorWithOptions(request: DeleteWirelessCloudConnectorRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWirelessCloudConnectorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorId)) {
      query["WirelessCloudConnectorId"] = request.wirelessCloudConnectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWirelessCloudConnector",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWirelessCloudConnectorResponse>(await this.callApi(params, req, runtime), new DeleteWirelessCloudConnectorResponse({}));
  }

  async deleteWirelessCloudConnector(request: DeleteWirelessCloudConnectorRequest): Promise<DeleteWirelessCloudConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWirelessCloudConnectorWithOptions(request, runtime);
  }

  async detachVpcFromNetLinkWithOptions(request: DetachVpcFromNetLinkRequest, runtime: $Util.RuntimeOptions): Promise<DetachVpcFromNetLinkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.netLinkId)) {
      query["NetLinkId"] = request.netLinkId;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorId)) {
      query["WirelessCloudConnectorId"] = request.wirelessCloudConnectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachVpcFromNetLink",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachVpcFromNetLinkResponse>(await this.callApi(params, req, runtime), new DetachVpcFromNetLinkResponse({}));
  }

  async detachVpcFromNetLink(request: DetachVpcFromNetLinkRequest): Promise<DetachVpcFromNetLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachVpcFromNetLinkWithOptions(request, runtime);
  }

  async getWirelessCloudConnectorWithOptions(request: GetWirelessCloudConnectorRequest, runtime: $Util.RuntimeOptions): Promise<GetWirelessCloudConnectorResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWirelessCloudConnector",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWirelessCloudConnectorResponse>(await this.callApi(params, req, runtime), new GetWirelessCloudConnectorResponse({}));
  }

  async getWirelessCloudConnector(request: GetWirelessCloudConnectorRequest): Promise<GetWirelessCloudConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWirelessCloudConnectorWithOptions(request, runtime);
  }

  async listAuthorizationRulesWithOptions(request: ListAuthorizationRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListAuthorizationRulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAuthorizationRules",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAuthorizationRulesResponse>(await this.callApi(params, req, runtime), new ListAuthorizationRulesResponse({}));
  }

  async listAuthorizationRules(request: ListAuthorizationRulesRequest): Promise<ListAuthorizationRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthorizationRulesWithOptions(request, runtime);
  }

  async listCardsWithOptions(request: ListCardsRequest, runtime: $Util.RuntimeOptions): Promise<ListCardsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCards",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCardsResponse>(await this.callApi(params, req, runtime), new ListCardsResponse({}));
  }

  async listCards(request: ListCardsRequest): Promise<ListCardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCardsWithOptions(request, runtime);
  }

  async listDataPackagesWithOptions(request: ListDataPackagesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataPackagesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataPackages",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataPackagesResponse>(await this.callApi(params, req, runtime), new ListDataPackagesResponse({}));
  }

  async listDataPackages(request: ListDataPackagesRequest): Promise<ListDataPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataPackagesWithOptions(request, runtime);
  }

  async listOrdersWithOptions(request: ListOrdersRequest, runtime: $Util.RuntimeOptions): Promise<ListOrdersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOrders",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOrdersResponse>(await this.callApi(params, req, runtime), new ListOrdersResponse({}));
  }

  async listOrders(request: ListOrdersRequest): Promise<ListOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrdersWithOptions(request, runtime);
  }

  async listRegionsWithOptions(request: ListRegionsRequest, runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRegions",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(request: ListRegionsRequest): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(request, runtime);
  }

  async listWirelessCloudConnectorsWithOptions(request: ListWirelessCloudConnectorsRequest, runtime: $Util.RuntimeOptions): Promise<ListWirelessCloudConnectorsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWirelessCloudConnectors",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWirelessCloudConnectorsResponse>(await this.callApi(params, req, runtime), new ListWirelessCloudConnectorsResponse({}));
  }

  async listWirelessCloudConnectors(request: ListWirelessCloudConnectorsRequest): Promise<ListWirelessCloudConnectorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWirelessCloudConnectorsWithOptions(request, runtime);
  }

  async listZonesWithOptions(request: ListZonesRequest, runtime: $Util.RuntimeOptions): Promise<ListZonesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListZones",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListZonesResponse>(await this.callApi(params, req, runtime), new ListZonesResponse({}));
  }

  async listZones(request: ListZonesRequest): Promise<ListZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listZonesWithOptions(request, runtime);
  }

  async openCc5gServiceWithOptions(request: OpenCc5gServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenCc5gServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenCc5gService",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenCc5gServiceResponse>(await this.callApi(params, req, runtime), new OpenCc5gServiceResponse({}));
  }

  async openCc5gService(request: OpenCc5gServiceRequest): Promise<OpenCc5gServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCc5gServiceWithOptions(request, runtime);
  }

  async updateAuthorizationRuleWithOptions(request: UpdateAuthorizationRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAuthorizationRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.sourceCidr)) {
      query["SourceCidr"] = request.sourceCidr;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorId)) {
      query["WirelessCloudConnectorId"] = request.wirelessCloudConnectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAuthorizationRule",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new UpdateAuthorizationRuleResponse({}));
  }

  async updateAuthorizationRule(request: UpdateAuthorizationRuleRequest): Promise<UpdateAuthorizationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAuthorizationRuleWithOptions(request, runtime);
  }

  async updateCardWithOptions(request: UpdateCardRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorId)) {
      query["WirelessCloudConnectorId"] = request.wirelessCloudConnectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCard",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCardResponse>(await this.callApi(params, req, runtime), new UpdateCardResponse({}));
  }

  async updateCard(request: UpdateCardRequest): Promise<UpdateCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCardWithOptions(request, runtime);
  }

  async updateDNSAuthorizationRuleWithOptions(request: UpdateDNSAuthorizationRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDNSAuthorizationRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destinationIp)) {
      query["DestinationIp"] = request.destinationIp;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.sourceDNSIp)) {
      query["SourceDNSIp"] = request.sourceDNSIp;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorId)) {
      query["WirelessCloudConnectorId"] = request.wirelessCloudConnectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDNSAuthorizationRule",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDNSAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new UpdateDNSAuthorizationRuleResponse({}));
  }

  async updateDNSAuthorizationRule(request: UpdateDNSAuthorizationRuleRequest): Promise<UpdateDNSAuthorizationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDNSAuthorizationRuleWithOptions(request, runtime);
  }

  async updateWirelessCloudConnectorWithOptions(request: UpdateWirelessCloudConnectorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWirelessCloudConnectorResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.wirelessCloudConnectorId)) {
      query["WirelessCloudConnectorId"] = request.wirelessCloudConnectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWirelessCloudConnector",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWirelessCloudConnectorResponse>(await this.callApi(params, req, runtime), new UpdateWirelessCloudConnectorResponse({}));
  }

  async updateWirelessCloudConnector(request: UpdateWirelessCloudConnectorRequest): Promise<UpdateWirelessCloudConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWirelessCloudConnectorWithOptions(request, runtime);
  }

}
