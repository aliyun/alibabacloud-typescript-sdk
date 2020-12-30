// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddHighPriorityIpRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  uisId?: string;
  highPriorityIp?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      uisId: 'UisId',
      highPriorityIp: 'HighPriorityIp',
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
      uisId: 'string',
      highPriorityIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHighPriorityIpResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHighPriorityIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddHighPriorityIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddHighPriorityIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUisNodeIpRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  uisNodeId?: string;
  ipAddrsNum?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      uisNodeId: 'UisNodeId',
      ipAddrsNum: 'IpAddrsNum',
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
      uisNodeId: 'string',
      ipAddrsNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUisNodeIpResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUisNodeIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddUisNodeIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddUisNodeIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDnatEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uisNodeId?: string;
  destinationIp?: string;
  destinationPort?: number;
  originalIp?: string;
  originalPort?: number;
  ipProtocol?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uisNodeId: 'UisNodeId',
      destinationIp: 'DestinationIp',
      destinationPort: 'DestinationPort',
      originalIp: 'OriginalIp',
      originalPort: 'OriginalPort',
      ipProtocol: 'IpProtocol',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uisNodeId: 'string',
      destinationIp: 'string',
      destinationPort: 'number',
      originalIp: 'string',
      originalPort: 'number',
      ipProtocol: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDnatEntryResponseBody extends $tea.Model {
  uisDnatId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      uisDnatId: 'UisDnatId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uisDnatId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDnatEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubConnectionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uisNodeId?: string;
  ip?: string;
  description?: string;
  name?: string;
  greConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uisNodeId: 'UisNodeId',
      ip: 'Ip',
      description: 'Description',
      name: 'Name',
      greConfig: 'GreConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uisNodeId: 'string',
      ip: 'string',
      description: 'string',
      name: 'string',
      greConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubConnectionResponseBody extends $tea.Model {
  requestId?: string;
  uisSubConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uisSubConnectionId: 'UisSubConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uisSubConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSubConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSubConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUisRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  name?: string;
  description?: string;
  instanceChargeType?: string;
  internetChargeType?: string;
  autoPay?: boolean;
  duration?: number;
  pricingCycle?: string;
  bandwidth?: number;
  bandwidthType?: string;
  uisProtocol?: string;
  connectionBandwidth?: number;
  connectionCount?: number;
  serviceRegion?: string;
  accessType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      name: 'Name',
      description: 'Description',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      autoPay: 'AutoPay',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      uisProtocol: 'UisProtocol',
      connectionBandwidth: 'ConnectionBandwidth',
      connectionCount: 'ConnectionCount',
      serviceRegion: 'ServiceRegion',
      accessType: 'AccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      name: 'string',
      description: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      autoPay: 'boolean',
      duration: 'number',
      pricingCycle: 'string',
      bandwidth: 'number',
      bandwidthType: 'string',
      uisProtocol: 'string',
      connectionBandwidth: 'number',
      connectionCount: 'number',
      serviceRegion: 'string',
      accessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUisResponseBody extends $tea.Model {
  requestId?: string;
  uisId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uisId: 'UisId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uisId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUisConnectionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  uisNodeId?: string;
  uisProtocol?: string;
  description?: string;
  name?: string;
  greConfig?: string;
  sslConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      uisNodeId: 'UisNodeId',
      uisProtocol: 'UisProtocol',
      description: 'Description',
      name: 'Name',
      greConfig: 'GreConfig',
      sslConfig: 'SslConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      uisNodeId: 'string',
      uisProtocol: 'string',
      description: 'string',
      name: 'string',
      greConfig: 'string',
      sslConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUisConnectionResponseBody extends $tea.Model {
  uisConnectionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      uisConnectionId: 'UisConnectionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uisConnectionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUisConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUisConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUisConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUisNetworkInterfaceRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uisNodeId?: string;
  vswitchId?: string;
  securityGroupId?: string;
  ipAddress?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uisNodeId: 'UisNodeId',
      vswitchId: 'VswitchId',
      securityGroupId: 'SecurityGroupId',
      ipAddress: 'IpAddress',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uisNodeId: 'string',
      vswitchId: 'string',
      securityGroupId: 'string',
      ipAddress: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUisNetworkInterfaceResponseBody extends $tea.Model {
  uisEniId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      uisEniId: 'UisEniId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uisEniId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUisNetworkInterfaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUisNetworkInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUisNetworkInterfaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUisNodeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  uisId?: string;
  name?: string;
  description?: string;
  uisNodeBandwidth?: number;
  ipAddrsNum?: number;
  uisNodeAreaId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      uisId: 'UisId',
      name: 'Name',
      description: 'Description',
      uisNodeBandwidth: 'UisNodeBandwidth',
      ipAddrsNum: 'IpAddrsNum',
      uisNodeAreaId: 'UisNodeAreaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      uisId: 'string',
      name: 'string',
      description: 'string',
      uisNodeBandwidth: 'number',
      ipAddrsNum: 'number',
      uisNodeAreaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUisNodeResponseBody extends $tea.Model {
  requestId?: string;
  uisNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uisNodeId: 'UisNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uisNodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUisNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUisNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUisNodeResponseBody,
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
  uisNodeId?: string;
  uisDnatId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uisNodeId: 'UisNodeId',
      uisDnatId: 'UisDnatId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uisNodeId: 'string',
      uisDnatId: 'string',
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

export class DeleteHighPriorityIpRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  uisId?: string;
  highPriorityIp?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      uisId: 'UisId',
      highPriorityIp: 'HighPriorityIp',
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
      uisId: 'string',
      highPriorityIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHighPriorityIpResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHighPriorityIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteHighPriorityIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHighPriorityIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubConnectionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uisSubConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uisSubConnectionId: 'UisSubConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uisSubConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubConnectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSubConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSubConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  uisId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      uisId: 'UisId',
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
      uisId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisConnectionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  uisConnectionId?: string;
  uisNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      uisConnectionId: 'UisConnectionId',
      uisNodeId: 'UisNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      uisConnectionId: 'string',
      uisNodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisConnectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUisConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUisConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisNetworkInterfaceRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uisNodeId?: string;
  uisEniId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uisNodeId: 'UisNodeId',
      uisEniId: 'UisEniId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uisNodeId: 'string',
      uisEniId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisNetworkInterfaceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisNetworkInterfaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUisNetworkInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUisNetworkInterfaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisNodeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  uisId?: string;
  uisNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      uisId: 'UisId',
      uisNodeId: 'UisNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      uisId: 'string',
      uisNodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisNodeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUisNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUisNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisNodeIpRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  uisNodeId?: string;
  uisNodeIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      uisNodeId: 'UisNodeId',
      uisNodeIpAddress: 'UisNodeIpAddress',
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
      uisNodeId: 'string',
      uisNodeIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisNodeIpResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUisNodeIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUisNodeIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUisNodeIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAreasRequest extends $tea.Model {
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

export class DescribeAreasResponseBody extends $tea.Model {
  requestId?: string;
  areas?: DescribeAreasResponseBodyAreas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      areas: 'Areas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      areas: DescribeAreasResponseBodyAreas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAreasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAreasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAreasResponseBody,
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
  uisNodeId?: string;
  uisDnatId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      uisNodeId: 'UisNodeId',
      uisDnatId: 'UisDnatId',
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
      uisNodeId: 'string',
      uisDnatId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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
  uisDnatEntries?: DescribeDnatEntriesResponseBodyUisDnatEntries;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      uisDnatEntries: 'UisDnatEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      uisDnatEntries: DescribeDnatEntriesResponseBodyUisDnatEntries,
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

export class DescribeHighPriorityIpRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  uisId?: string;
  highPriorityIp?: string;
  pageNumber?: number;
  pageSize?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      uisId: 'UisId',
      highPriorityIp: 'HighPriorityIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      uisId: 'string',
      highPriorityIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighPriorityIpResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  highPriorityIps?: DescribeHighPriorityIpResponseBodyHighPriorityIps;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      highPriorityIps: 'HighPriorityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      highPriorityIps: DescribeHighPriorityIpResponseBodyHighPriorityIps,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighPriorityIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHighPriorityIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHighPriorityIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighPriorityIpsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  uisId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      uisId: 'UisId',
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
      uisId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighPriorityIpsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  highPriorityIps?: DescribeHighPriorityIpsResponseBodyHighPriorityIps;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      highPriorityIps: 'HighPriorityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      highPriorityIps: DescribeHighPriorityIpsResponseBodyHighPriorityIps,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighPriorityIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHighPriorityIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHighPriorityIpsResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeSubConnectionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uisSubConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uisSubConnectionId: 'UisSubConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uisSubConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubConnectionResponseBody extends $tea.Model {
  customerTunnelIp?: string;
  description?: string;
  localTunnelIp?: string;
  requestId?: string;
  uisId?: string;
  customerIp?: string;
  ip?: string;
  uisNodeId?: string;
  uisSubConnectionId?: string;
  customerSubnet?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      customerTunnelIp: 'CustomerTunnelIp',
      description: 'Description',
      localTunnelIp: 'LocalTunnelIp',
      requestId: 'RequestId',
      uisId: 'UisId',
      customerIp: 'CustomerIp',
      ip: 'Ip',
      uisNodeId: 'UisNodeId',
      uisSubConnectionId: 'UisSubConnectionId',
      customerSubnet: 'CustomerSubnet',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerTunnelIp: 'string',
      description: 'string',
      localTunnelIp: 'string',
      requestId: 'string',
      uisId: 'string',
      customerIp: 'string',
      ip: 'string',
      uisNodeId: 'string',
      uisSubConnectionId: 'string',
      customerSubnet: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSubConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSubConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubConnectionsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uisNodeId?: string;
  IP?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uisNodeId: 'UisNodeId',
      IP: 'IP',
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
      uisNodeId: 'string',
      IP: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubConnectionsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  uisSubConnections?: DescribeSubConnectionsResponseBodyUisSubConnections;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      uisSubConnections: 'UisSubConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      uisSubConnections: DescribeSubConnectionsResponseBodyUisSubConnections,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSubConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSubConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisConnectionsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  uisNodeId?: string;
  uisConnectionId?: string;
  pageNumber?: number;
  pageSize?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      uisNodeId: 'UisNodeId',
      uisConnectionId: 'UisConnectionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      uisNodeId: 'string',
      uisConnectionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisConnectionsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  uisConnections?: DescribeUisConnectionsResponseBodyUisConnections;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      uisConnections: 'UisConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      uisConnections: DescribeUisConnectionsResponseBodyUisConnections,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUisConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUisConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUiseNodeStatusRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uisNodeId?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uisNodeId: 'UisNodeId',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uisNodeId: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUiseNodeStatusResponseBody extends $tea.Model {
  requestId?: string;
  ipStatusList?: DescribeUiseNodeStatusResponseBodyIpStatusList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipStatusList: 'IpStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipStatusList: DescribeUiseNodeStatusResponseBodyIpStatusList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUiseNodeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUiseNodeStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUiseNodeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uisId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uisId: 'UisId',
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
      uisId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisesResponseBody extends $tea.Model {
  totalCount?: number;
  uises?: DescribeUisesResponseBodyUises;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      uises: 'Uises',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      uises: DescribeUisesResponseBodyUises,
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUisesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUisesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisNetworkInterfacesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  uisNodeId?: string;
  uisEniId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      uisNodeId: 'UisNodeId',
      uisEniId: 'UisEniId',
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
      uisNodeId: 'string',
      uisEniId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisNetworkInterfacesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  networkInterfaces?: DescribeUisNetworkInterfacesResponseBodyNetworkInterfaces;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      networkInterfaces: 'NetworkInterfaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      networkInterfaces: DescribeUisNetworkInterfacesResponseBodyNetworkInterfaces,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisNetworkInterfacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUisNetworkInterfacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUisNetworkInterfacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisNodesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  uisId?: string;
  uisNodeId?: string;
  name?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      uisId: 'UisId',
      uisNodeId: 'UisNodeId',
      name: 'Name',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      uisId: 'string',
      uisNodeId: 'string',
      name: 'string',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisNodesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  uisNodeList?: DescribeUisNodesResponseBodyUisNodeList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      uisNodeList: 'UisNodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      uisNodeList: DescribeUisNodesResponseBodyUisNodeList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUisNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUisNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  uisId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      uisId: 'UisId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      uisId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      whitelist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDroppedIpListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uisId?: string;
  chartDate?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uisId: 'UisId',
      chartDate: 'ChartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uisId: 'string',
      chartDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDroppedIpListResponseBody extends $tea.Model {
  requestId?: string;
  droppedIpListUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      droppedIpListUrl: 'DroppedIpListUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      droppedIpListUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDroppedIpListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDroppedIpListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDroppedIpListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDnatEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  uisNodeId?: string;
  uisDnatId?: string;
  destinationIp?: string;
  destinationPort?: number;
  originalIp?: string;
  originalPort?: number;
  ipProtocol?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      uisNodeId: 'UisNodeId',
      uisDnatId: 'UisDnatId',
      destinationIp: 'DestinationIp',
      destinationPort: 'DestinationPort',
      originalIp: 'OriginalIp',
      originalPort: 'OriginalPort',
      ipProtocol: 'IpProtocol',
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
      uisNodeId: 'string',
      uisDnatId: 'string',
      destinationIp: 'string',
      destinationPort: 'number',
      originalIp: 'string',
      originalPort: 'number',
      ipProtocol: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDnatEntryResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDnatEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHighPriorityIpRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  uisId?: string;
  highPriorityIp?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      uisId: 'UisId',
      highPriorityIp: 'HighPriorityIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      uisId: 'string',
      highPriorityIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHighPriorityIpResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHighPriorityIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHighPriorityIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHighPriorityIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubConnectionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uisSubConnectionId?: string;
  description?: string;
  name?: string;
  greConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uisSubConnectionId: 'UisSubConnectionId',
      description: 'Description',
      name: 'Name',
      greConfig: 'GreConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uisSubConnectionId: 'string',
      description: 'string',
      name: 'string',
      greConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubConnectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySubConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySubConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySubConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUisAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  uisId?: string;
  name?: string;
  description?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      uisId: 'UisId',
      name: 'Name',
      description: 'Description',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      uisId: 'string',
      name: 'string',
      description: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUisAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUisAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUisAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUisAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUisConnectionAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  uisNodeId?: string;
  uisConnectionId?: string;
  uisProtocol?: string;
  description?: string;
  name?: string;
  greConfig?: string;
  sslConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      uisNodeId: 'UisNodeId',
      uisConnectionId: 'UisConnectionId',
      uisProtocol: 'UisProtocol',
      description: 'Description',
      name: 'Name',
      greConfig: 'GreConfig',
      sslConfig: 'SslConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      uisNodeId: 'string',
      uisConnectionId: 'string',
      uisProtocol: 'string',
      description: 'string',
      name: 'string',
      greConfig: 'string',
      sslConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUisConnectionAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUisConnectionAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUisConnectionAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUisConnectionAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUisNodeAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  uisId?: string;
  uisNodeId?: string;
  name?: string;
  description?: string;
  uisNodeBandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      uisId: 'UisId',
      uisNodeId: 'UisNodeId',
      name: 'Name',
      description: 'Description',
      uisNodeBandwidth: 'UisNodeBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      uisId: 'string',
      uisNodeId: 'string',
      name: 'string',
      description: 'string',
      uisNodeBandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUisNodeAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUisNodeAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUisNodeAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUisNodeAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWhiteListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  uisId?: string;
  whitelist?: string;
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      uisId: 'UisId',
      whitelist: 'Whitelist',
      modifyMode: 'ModifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      uisId: 'string',
      whitelist: 'string',
      modifyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAreasResponseBodyAreasArea extends $tea.Model {
  localName?: string;
  areaId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      areaId: 'AreaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      areaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAreasResponseBodyAreas extends $tea.Model {
  area?: DescribeAreasResponseBodyAreasArea[];
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: { 'type': 'array', 'itemType': DescribeAreasResponseBodyAreasArea },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnatEntriesResponseBodyUisDnatEntriesUisDnatEntry extends $tea.Model {
  originalPort?: number;
  destinationPort?: number;
  originalIp?: string;
  ipProtocol?: string;
  uisDnatId?: string;
  destinationIp?: string;
  static names(): { [key: string]: string } {
    return {
      originalPort: 'OriginalPort',
      destinationPort: 'DestinationPort',
      originalIp: 'OriginalIp',
      ipProtocol: 'IpProtocol',
      uisDnatId: 'UisDnatId',
      destinationIp: 'DestinationIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPort: 'number',
      destinationPort: 'number',
      originalIp: 'string',
      ipProtocol: 'string',
      uisDnatId: 'string',
      destinationIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnatEntriesResponseBodyUisDnatEntries extends $tea.Model {
  uisDnatEntry?: DescribeDnatEntriesResponseBodyUisDnatEntriesUisDnatEntry[];
  static names(): { [key: string]: string } {
    return {
      uisDnatEntry: 'UisDnatEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uisDnatEntry: { 'type': 'array', 'itemType': DescribeDnatEntriesResponseBodyUisDnatEntriesUisDnatEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighPriorityIpResponseBodyHighPriorityIpsHighPriorityIp extends $tea.Model {
  staticOffAreaId?: string;
  domain?: string;
  dynamicOffAreaId?: string;
  state?: string;
  ip?: string;
  boardAreaId?: string;
  static names(): { [key: string]: string } {
    return {
      staticOffAreaId: 'StaticOffAreaId',
      domain: 'Domain',
      dynamicOffAreaId: 'DynamicOffAreaId',
      state: 'State',
      ip: 'Ip',
      boardAreaId: 'BoardAreaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      staticOffAreaId: 'string',
      domain: 'string',
      dynamicOffAreaId: 'string',
      state: 'string',
      ip: 'string',
      boardAreaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighPriorityIpResponseBodyHighPriorityIps extends $tea.Model {
  highPriorityIp?: DescribeHighPriorityIpResponseBodyHighPriorityIpsHighPriorityIp[];
  static names(): { [key: string]: string } {
    return {
      highPriorityIp: 'HighPriorityIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highPriorityIp: { 'type': 'array', 'itemType': DescribeHighPriorityIpResponseBodyHighPriorityIpsHighPriorityIp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighPriorityIpsResponseBodyHighPriorityIpsHighPriorityIp extends $tea.Model {
  areaId?: string;
  destination?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      destination: 'Destination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      destination: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighPriorityIpsResponseBodyHighPriorityIps extends $tea.Model {
  highPriorityIp?: DescribeHighPriorityIpsResponseBodyHighPriorityIpsHighPriorityIp[];
  static names(): { [key: string]: string } {
    return {
      highPriorityIp: 'HighPriorityIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highPriorityIp: { 'type': 'array', 'itemType': DescribeHighPriorityIpsResponseBodyHighPriorityIpsHighPriorityIp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
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

export class DescribeSubConnectionsResponseBodyUisSubConnectionsUisSubConnection extends $tea.Model {
  uisSubConnectionId?: string;
  description?: string;
  createTime?: number;
  ip?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      uisSubConnectionId: 'UisSubConnectionId',
      description: 'Description',
      createTime: 'CreateTime',
      ip: 'Ip',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uisSubConnectionId: 'string',
      description: 'string',
      createTime: 'number',
      ip: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubConnectionsResponseBodyUisSubConnections extends $tea.Model {
  uisSubConnection?: DescribeSubConnectionsResponseBodyUisSubConnectionsUisSubConnection[];
  static names(): { [key: string]: string } {
    return {
      uisSubConnection: 'UisSubConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uisSubConnection: { 'type': 'array', 'itemType': DescribeSubConnectionsResponseBodyUisSubConnectionsUisSubConnection },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisConnectionsResponseBodyUisConnectionsUisConnection extends $tea.Model {
  greConfig?: string;
  uisId?: string;
  uisNodeId?: string;
  description?: string;
  state?: string;
  uisProtocol?: string;
  name?: string;
  sslConfig?: string;
  uisConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      greConfig: 'GreConfig',
      uisId: 'UisId',
      uisNodeId: 'UisNodeId',
      description: 'Description',
      state: 'State',
      uisProtocol: 'UisProtocol',
      name: 'Name',
      sslConfig: 'SslConfig',
      uisConnectionId: 'UisConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greConfig: 'string',
      uisId: 'string',
      uisNodeId: 'string',
      description: 'string',
      state: 'string',
      uisProtocol: 'string',
      name: 'string',
      sslConfig: 'string',
      uisConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisConnectionsResponseBodyUisConnections extends $tea.Model {
  uisConnection?: DescribeUisConnectionsResponseBodyUisConnectionsUisConnection[];
  static names(): { [key: string]: string } {
    return {
      uisConnection: 'UisConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uisConnection: { 'type': 'array', 'itemType': DescribeUisConnectionsResponseBodyUisConnectionsUisConnection },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUiseNodeStatusResponseBodyIpStatusListIpStatus extends $tea.Model {
  currentConnections?: number;
  ip?: string;
  maxConnections?: number;
  static names(): { [key: string]: string } {
    return {
      currentConnections: 'CurrentConnections',
      ip: 'Ip',
      maxConnections: 'MaxConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentConnections: 'number',
      ip: 'string',
      maxConnections: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUiseNodeStatusResponseBodyIpStatusList extends $tea.Model {
  ipStatus?: DescribeUiseNodeStatusResponseBodyIpStatusListIpStatus[];
  static names(): { [key: string]: string } {
    return {
      ipStatus: 'IpStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipStatus: { 'type': 'array', 'itemType': DescribeUiseNodeStatusResponseBodyIpStatusListIpStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisesResponseBodyUisesUisUserInfo extends $tea.Model {
  clientInfoDBAccount?: string;
  clientInfoDB?: string;
  clientInfoDBPassword?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfoDBAccount: 'ClientInfoDBAccount',
      clientInfoDB: 'ClientInfoDB',
      clientInfoDBPassword: 'ClientInfoDBPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfoDBAccount: 'string',
      clientInfoDB: 'string',
      clientInfoDBPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisesResponseBodyUisesUisUisNodeIds extends $tea.Model {
  uisNodeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      uisNodeIds: 'UisNodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uisNodeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisesResponseBodyUisesUis extends $tea.Model {
  status?: string;
  uisId?: string;
  connectionType?: string;
  bandwidthType?: string;
  createTime?: number;
  chargeType?: string;
  payType?: string;
  userInfo?: DescribeUisesResponseBodyUisesUisUserInfo;
  sslClientCertUrl?: string;
  connectionCount?: number;
  uisNodeIds?: DescribeUisesResponseBodyUisesUisUisNodeIds;
  endTime?: number;
  bandwidth?: number;
  description?: string;
  serviceRegion?: string;
  connectionBandwidth?: number;
  businessStatus?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      uisId: 'UisId',
      connectionType: 'ConnectionType',
      bandwidthType: 'BandwidthType',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      payType: 'PayType',
      userInfo: 'UserInfo',
      sslClientCertUrl: 'SslClientCertUrl',
      connectionCount: 'ConnectionCount',
      uisNodeIds: 'UisNodeIds',
      endTime: 'EndTime',
      bandwidth: 'Bandwidth',
      description: 'Description',
      serviceRegion: 'ServiceRegion',
      connectionBandwidth: 'ConnectionBandwidth',
      businessStatus: 'BusinessStatus',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      uisId: 'string',
      connectionType: 'string',
      bandwidthType: 'string',
      createTime: 'number',
      chargeType: 'string',
      payType: 'string',
      userInfo: DescribeUisesResponseBodyUisesUisUserInfo,
      sslClientCertUrl: 'string',
      connectionCount: 'number',
      uisNodeIds: DescribeUisesResponseBodyUisesUisUisNodeIds,
      endTime: 'number',
      bandwidth: 'number',
      description: 'string',
      serviceRegion: 'string',
      connectionBandwidth: 'number',
      businessStatus: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisesResponseBodyUises extends $tea.Model {
  uis?: DescribeUisesResponseBodyUisesUis[];
  static names(): { [key: string]: string } {
    return {
      uis: 'Uis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uis: { 'type': 'array', 'itemType': DescribeUisesResponseBodyUisesUis },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisNetworkInterfacesResponseBodyNetworkInterfacesNetworkInterface extends $tea.Model {
  uisEniId?: string;
  uisNodeId?: string;
  ipAddress?: string;
  description?: string;
  vswitchId?: string;
  state?: string;
  securityGroupID?: string;
  networkInterfaceId?: string;
  name?: string;
  log?: string;
  static names(): { [key: string]: string } {
    return {
      uisEniId: 'UisEniId',
      uisNodeId: 'UisNodeId',
      ipAddress: 'IpAddress',
      description: 'Description',
      vswitchId: 'VswitchId',
      state: 'State',
      securityGroupID: 'SecurityGroupID',
      networkInterfaceId: 'NetworkInterfaceId',
      name: 'Name',
      log: 'Log',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uisEniId: 'string',
      uisNodeId: 'string',
      ipAddress: 'string',
      description: 'string',
      vswitchId: 'string',
      state: 'string',
      securityGroupID: 'string',
      networkInterfaceId: 'string',
      name: 'string',
      log: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisNetworkInterfacesResponseBodyNetworkInterfaces extends $tea.Model {
  networkInterface?: DescribeUisNetworkInterfacesResponseBodyNetworkInterfacesNetworkInterface[];
  static names(): { [key: string]: string } {
    return {
      networkInterface: 'NetworkInterface',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterface: { 'type': 'array', 'itemType': DescribeUisNetworkInterfacesResponseBodyNetworkInterfacesNetworkInterface },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisNodesResponseBodyUisNodeListUisNode extends $tea.Model {
  status?: string;
  uisId?: string;
  uisNodeActiveIp?: string;
  createTime?: number;
  uisEniIps?: string;
  uisNodeAreaId?: string;
  uisNodeId?: string;
  uisNodeIps?: string;
  description?: string;
  uisNodeBandwidth?: number;
  ipAddrsNum?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      uisId: 'UisId',
      uisNodeActiveIp: 'UisNodeActiveIp',
      createTime: 'CreateTime',
      uisEniIps: 'UisEniIps',
      uisNodeAreaId: 'UisNodeAreaId',
      uisNodeId: 'UisNodeId',
      uisNodeIps: 'UisNodeIps',
      description: 'Description',
      uisNodeBandwidth: 'UisNodeBandwidth',
      ipAddrsNum: 'IpAddrsNum',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      uisId: 'string',
      uisNodeActiveIp: 'string',
      createTime: 'number',
      uisEniIps: 'string',
      uisNodeAreaId: 'string',
      uisNodeId: 'string',
      uisNodeIps: 'string',
      description: 'string',
      uisNodeBandwidth: 'number',
      ipAddrsNum: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUisNodesResponseBodyUisNodeList extends $tea.Model {
  uisNode?: DescribeUisNodesResponseBodyUisNodeListUisNode[];
  static names(): { [key: string]: string } {
    return {
      uisNode: 'UisNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uisNode: { 'type': 'array', 'itemType': DescribeUisNodesResponseBodyUisNodeListUisNode },
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
      'cn-north-2-gov-1': "uis.cn-hangzhou.aliyuncs.com",
      'ap-northeast-1': "uis.aliyuncs.com",
      'ap-northeast-2-pop': "uis.aliyuncs.com",
      'ap-south-1': "uis.aliyuncs.com",
      'ap-southeast-1': "uis.aliyuncs.com",
      'ap-southeast-2': "uis.aliyuncs.com",
      'ap-southeast-3': "uis.aliyuncs.com",
      'ap-southeast-5': "uis.aliyuncs.com",
      'cn-beijing': "uis.aliyuncs.com",
      'cn-beijing-finance-1': "uis.aliyuncs.com",
      'cn-beijing-finance-pop': "uis.aliyuncs.com",
      'cn-beijing-gov-1': "uis.aliyuncs.com",
      'cn-beijing-nu16-b01': "uis.aliyuncs.com",
      'cn-chengdu': "uis.aliyuncs.com",
      'cn-edge-1': "uis.aliyuncs.com",
      'cn-fujian': "uis.aliyuncs.com",
      'cn-haidian-cm12-c01': "uis.aliyuncs.com",
      'cn-hangzhou-bj-b01': "uis.aliyuncs.com",
      'cn-hangzhou-finance': "uis.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "uis.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "uis.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "uis.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "uis.aliyuncs.com",
      'cn-hangzhou-test-306': "uis.aliyuncs.com",
      'cn-hongkong': "uis.aliyuncs.com",
      'cn-hongkong-finance-pop': "uis.aliyuncs.com",
      'cn-huhehaote': "uis.aliyuncs.com",
      'cn-qingdao': "uis.aliyuncs.com",
      'cn-qingdao-nebula': "uis.aliyuncs.com",
      'cn-shanghai': "uis.aliyuncs.com",
      'cn-shanghai-et15-b01': "uis.aliyuncs.com",
      'cn-shanghai-et2-b01': "uis.aliyuncs.com",
      'cn-shanghai-finance-1': "uis.aliyuncs.com",
      'cn-shanghai-inner': "uis.aliyuncs.com",
      'cn-shanghai-internal-test-1': "uis.aliyuncs.com",
      'cn-shenzhen': "uis.aliyuncs.com",
      'cn-shenzhen-finance-1': "uis.aliyuncs.com",
      'cn-shenzhen-inner': "uis.aliyuncs.com",
      'cn-shenzhen-st4-d01': "uis.aliyuncs.com",
      'cn-shenzhen-su18-b01': "uis.aliyuncs.com",
      'cn-wuhan': "uis.aliyuncs.com",
      'cn-yushanfang': "uis.aliyuncs.com",
      'cn-zhangbei-na61-b01': "uis.aliyuncs.com",
      'cn-zhangjiakou': "uis.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "uis.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "uis.aliyuncs.com",
      'eu-central-1': "uis.aliyuncs.com",
      'eu-west-1': "uis.aliyuncs.com",
      'eu-west-1-oxs': "uis.aliyuncs.com",
      'me-east-1': "uis.aliyuncs.com",
      'rus-west-1-pop': "uis.aliyuncs.com",
      'us-east-1': "uis.aliyuncs.com",
      'us-west-1': "uis.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("uis", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addHighPriorityIpWithOptions(request: AddHighPriorityIpRequest, runtime: $Util.RuntimeOptions): Promise<AddHighPriorityIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddHighPriorityIpResponse>(await this.doRPCRequest("AddHighPriorityIp", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new AddHighPriorityIpResponse({}));
  }

  async addHighPriorityIp(request: AddHighPriorityIpRequest): Promise<AddHighPriorityIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addHighPriorityIpWithOptions(request, runtime);
  }

  async addUisNodeIpWithOptions(request: AddUisNodeIpRequest, runtime: $Util.RuntimeOptions): Promise<AddUisNodeIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddUisNodeIpResponse>(await this.doRPCRequest("AddUisNodeIp", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new AddUisNodeIpResponse({}));
  }

  async addUisNodeIp(request: AddUisNodeIpRequest): Promise<AddUisNodeIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUisNodeIpWithOptions(request, runtime);
  }

  async createDnatEntryWithOptions(request: CreateDnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateDnatEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDnatEntryResponse>(await this.doRPCRequest("CreateDnatEntry", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDnatEntryResponse({}));
  }

  async createDnatEntry(request: CreateDnatEntryRequest): Promise<CreateDnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDnatEntryWithOptions(request, runtime);
  }

  async createSubConnectionWithOptions(request: CreateSubConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSubConnectionResponse>(await this.doRPCRequest("CreateSubConnection", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSubConnectionResponse({}));
  }

  async createSubConnection(request: CreateSubConnectionRequest): Promise<CreateSubConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubConnectionWithOptions(request, runtime);
  }

  async createUisWithOptions(request: CreateUisRequest, runtime: $Util.RuntimeOptions): Promise<CreateUisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUisResponse>(await this.doRPCRequest("CreateUis", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUisResponse({}));
  }

  async createUis(request: CreateUisRequest): Promise<CreateUisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUisWithOptions(request, runtime);
  }

  async createUisConnectionWithOptions(request: CreateUisConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateUisConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUisConnectionResponse>(await this.doRPCRequest("CreateUisConnection", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUisConnectionResponse({}));
  }

  async createUisConnection(request: CreateUisConnectionRequest): Promise<CreateUisConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUisConnectionWithOptions(request, runtime);
  }

  async createUisNetworkInterfaceWithOptions(request: CreateUisNetworkInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateUisNetworkInterfaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUisNetworkInterfaceResponse>(await this.doRPCRequest("CreateUisNetworkInterface", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUisNetworkInterfaceResponse({}));
  }

  async createUisNetworkInterface(request: CreateUisNetworkInterfaceRequest): Promise<CreateUisNetworkInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUisNetworkInterfaceWithOptions(request, runtime);
  }

  async createUisNodeWithOptions(request: CreateUisNodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateUisNodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUisNodeResponse>(await this.doRPCRequest("CreateUisNode", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUisNodeResponse({}));
  }

  async createUisNode(request: CreateUisNodeRequest): Promise<CreateUisNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUisNodeWithOptions(request, runtime);
  }

  async deleteDnatEntryWithOptions(request: DeleteDnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDnatEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDnatEntryResponse>(await this.doRPCRequest("DeleteDnatEntry", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDnatEntryResponse({}));
  }

  async deleteDnatEntry(request: DeleteDnatEntryRequest): Promise<DeleteDnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDnatEntryWithOptions(request, runtime);
  }

  async deleteHighPriorityIpWithOptions(request: DeleteHighPriorityIpRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHighPriorityIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHighPriorityIpResponse>(await this.doRPCRequest("DeleteHighPriorityIp", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHighPriorityIpResponse({}));
  }

  async deleteHighPriorityIp(request: DeleteHighPriorityIpRequest): Promise<DeleteHighPriorityIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHighPriorityIpWithOptions(request, runtime);
  }

  async deleteSubConnectionWithOptions(request: DeleteSubConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSubConnectionResponse>(await this.doRPCRequest("DeleteSubConnection", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSubConnectionResponse({}));
  }

  async deleteSubConnection(request: DeleteSubConnectionRequest): Promise<DeleteSubConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubConnectionWithOptions(request, runtime);
  }

  async deleteUisWithOptions(request: DeleteUisRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUisResponse>(await this.doRPCRequest("DeleteUis", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUisResponse({}));
  }

  async deleteUis(request: DeleteUisRequest): Promise<DeleteUisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUisWithOptions(request, runtime);
  }

  async deleteUisConnectionWithOptions(request: DeleteUisConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUisConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUisConnectionResponse>(await this.doRPCRequest("DeleteUisConnection", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUisConnectionResponse({}));
  }

  async deleteUisConnection(request: DeleteUisConnectionRequest): Promise<DeleteUisConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUisConnectionWithOptions(request, runtime);
  }

  async deleteUisNetworkInterfaceWithOptions(request: DeleteUisNetworkInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUisNetworkInterfaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUisNetworkInterfaceResponse>(await this.doRPCRequest("DeleteUisNetworkInterface", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUisNetworkInterfaceResponse({}));
  }

  async deleteUisNetworkInterface(request: DeleteUisNetworkInterfaceRequest): Promise<DeleteUisNetworkInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUisNetworkInterfaceWithOptions(request, runtime);
  }

  async deleteUisNodeWithOptions(request: DeleteUisNodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUisNodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUisNodeResponse>(await this.doRPCRequest("DeleteUisNode", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUisNodeResponse({}));
  }

  async deleteUisNode(request: DeleteUisNodeRequest): Promise<DeleteUisNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUisNodeWithOptions(request, runtime);
  }

  async deleteUisNodeIpWithOptions(request: DeleteUisNodeIpRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUisNodeIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUisNodeIpResponse>(await this.doRPCRequest("DeleteUisNodeIp", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUisNodeIpResponse({}));
  }

  async deleteUisNodeIp(request: DeleteUisNodeIpRequest): Promise<DeleteUisNodeIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUisNodeIpWithOptions(request, runtime);
  }

  async describeAreasWithOptions(request: DescribeAreasRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAreasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAreasResponse>(await this.doRPCRequest("DescribeAreas", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAreasResponse({}));
  }

  async describeAreas(request: DescribeAreasRequest): Promise<DescribeAreasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAreasWithOptions(request, runtime);
  }

  async describeDnatEntriesWithOptions(request: DescribeDnatEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnatEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnatEntriesResponse>(await this.doRPCRequest("DescribeDnatEntries", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnatEntriesResponse({}));
  }

  async describeDnatEntries(request: DescribeDnatEntriesRequest): Promise<DescribeDnatEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnatEntriesWithOptions(request, runtime);
  }

  async describeHighPriorityIpWithOptions(request: DescribeHighPriorityIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHighPriorityIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHighPriorityIpResponse>(await this.doRPCRequest("DescribeHighPriorityIp", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHighPriorityIpResponse({}));
  }

  async describeHighPriorityIp(request: DescribeHighPriorityIpRequest): Promise<DescribeHighPriorityIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHighPriorityIpWithOptions(request, runtime);
  }

  async describeHighPriorityIpsWithOptions(request: DescribeHighPriorityIpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHighPriorityIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHighPriorityIpsResponse>(await this.doRPCRequest("DescribeHighPriorityIps", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHighPriorityIpsResponse({}));
  }

  async describeHighPriorityIps(request: DescribeHighPriorityIpsRequest): Promise<DescribeHighPriorityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHighPriorityIpsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeSubConnectionWithOptions(request: DescribeSubConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSubConnectionResponse>(await this.doRPCRequest("DescribeSubConnection", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSubConnectionResponse({}));
  }

  async describeSubConnection(request: DescribeSubConnectionRequest): Promise<DescribeSubConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubConnectionWithOptions(request, runtime);
  }

  async describeSubConnectionsWithOptions(request: DescribeSubConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubConnectionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSubConnectionsResponse>(await this.doRPCRequest("DescribeSubConnections", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSubConnectionsResponse({}));
  }

  async describeSubConnections(request: DescribeSubConnectionsRequest): Promise<DescribeSubConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubConnectionsWithOptions(request, runtime);
  }

  async describeUisConnectionsWithOptions(request: DescribeUisConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUisConnectionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUisConnectionsResponse>(await this.doRPCRequest("DescribeUisConnections", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUisConnectionsResponse({}));
  }

  async describeUisConnections(request: DescribeUisConnectionsRequest): Promise<DescribeUisConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUisConnectionsWithOptions(request, runtime);
  }

  async describeUiseNodeStatusWithOptions(request: DescribeUiseNodeStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUiseNodeStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUiseNodeStatusResponse>(await this.doRPCRequest("DescribeUiseNodeStatus", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUiseNodeStatusResponse({}));
  }

  async describeUiseNodeStatus(request: DescribeUiseNodeStatusRequest): Promise<DescribeUiseNodeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUiseNodeStatusWithOptions(request, runtime);
  }

  async describeUisesWithOptions(request: DescribeUisesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUisesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUisesResponse>(await this.doRPCRequest("DescribeUises", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUisesResponse({}));
  }

  async describeUises(request: DescribeUisesRequest): Promise<DescribeUisesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUisesWithOptions(request, runtime);
  }

  async describeUisNetworkInterfacesWithOptions(request: DescribeUisNetworkInterfacesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUisNetworkInterfacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUisNetworkInterfacesResponse>(await this.doRPCRequest("DescribeUisNetworkInterfaces", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUisNetworkInterfacesResponse({}));
  }

  async describeUisNetworkInterfaces(request: DescribeUisNetworkInterfacesRequest): Promise<DescribeUisNetworkInterfacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUisNetworkInterfacesWithOptions(request, runtime);
  }

  async describeUisNodesWithOptions(request: DescribeUisNodesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUisNodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUisNodesResponse>(await this.doRPCRequest("DescribeUisNodes", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUisNodesResponse({}));
  }

  async describeUisNodes(request: DescribeUisNodesRequest): Promise<DescribeUisNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUisNodesWithOptions(request, runtime);
  }

  async describeWhiteListWithOptions(request: DescribeWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWhiteListResponse>(await this.doRPCRequest("DescribeWhiteList", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWhiteListResponse({}));
  }

  async describeWhiteList(request: DescribeWhiteListRequest): Promise<DescribeWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWhiteListWithOptions(request, runtime);
  }

  async getDroppedIpListWithOptions(request: GetDroppedIpListRequest, runtime: $Util.RuntimeOptions): Promise<GetDroppedIpListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDroppedIpListResponse>(await this.doRPCRequest("GetDroppedIpList", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetDroppedIpListResponse({}));
  }

  async getDroppedIpList(request: GetDroppedIpListRequest): Promise<GetDroppedIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDroppedIpListWithOptions(request, runtime);
  }

  async modifyDnatEntryWithOptions(request: ModifyDnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDnatEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDnatEntryResponse>(await this.doRPCRequest("ModifyDnatEntry", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDnatEntryResponse({}));
  }

  async modifyDnatEntry(request: ModifyDnatEntryRequest): Promise<ModifyDnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDnatEntryWithOptions(request, runtime);
  }

  async modifyHighPriorityIpWithOptions(request: ModifyHighPriorityIpRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHighPriorityIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHighPriorityIpResponse>(await this.doRPCRequest("ModifyHighPriorityIp", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHighPriorityIpResponse({}));
  }

  async modifyHighPriorityIp(request: ModifyHighPriorityIpRequest): Promise<ModifyHighPriorityIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHighPriorityIpWithOptions(request, runtime);
  }

  async modifySubConnectionWithOptions(request: ModifySubConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ModifySubConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySubConnectionResponse>(await this.doRPCRequest("ModifySubConnection", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySubConnectionResponse({}));
  }

  async modifySubConnection(request: ModifySubConnectionRequest): Promise<ModifySubConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySubConnectionWithOptions(request, runtime);
  }

  async modifyUisAttributeWithOptions(request: ModifyUisAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUisAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyUisAttributeResponse>(await this.doRPCRequest("ModifyUisAttribute", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyUisAttributeResponse({}));
  }

  async modifyUisAttribute(request: ModifyUisAttributeRequest): Promise<ModifyUisAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUisAttributeWithOptions(request, runtime);
  }

  async modifyUisConnectionAttributeWithOptions(request: ModifyUisConnectionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUisConnectionAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyUisConnectionAttributeResponse>(await this.doRPCRequest("ModifyUisConnectionAttribute", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyUisConnectionAttributeResponse({}));
  }

  async modifyUisConnectionAttribute(request: ModifyUisConnectionAttributeRequest): Promise<ModifyUisConnectionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUisConnectionAttributeWithOptions(request, runtime);
  }

  async modifyUisNodeAttributeWithOptions(request: ModifyUisNodeAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUisNodeAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyUisNodeAttributeResponse>(await this.doRPCRequest("ModifyUisNodeAttribute", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyUisNodeAttributeResponse({}));
  }

  async modifyUisNodeAttribute(request: ModifyUisNodeAttributeRequest): Promise<ModifyUisNodeAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUisNodeAttributeWithOptions(request, runtime);
  }

  async modifyWhiteListWithOptions(request: ModifyWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWhiteListResponse>(await this.doRPCRequest("ModifyWhiteList", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWhiteListResponse({}));
  }

  async modifyWhiteList(request: ModifyWhiteListRequest): Promise<ModifyWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWhiteListWithOptions(request, runtime);
  }

}
