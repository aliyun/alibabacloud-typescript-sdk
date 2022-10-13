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
  statusCode: number;
  body: AddDNSAuthorizationRuleResponseBody;
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
  statusCode: number;
  body: AttachVpcToNetLinkResponseBody;
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
  destinationPort?: string;
  destinationType?: string;
  dryRun?: boolean;
  name?: string;
  policy?: string;
  protocol?: string;
  sourceCidr?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      destination: 'Destination',
      destinationPort: 'DestinationPort',
      destinationType: 'DestinationType',
      dryRun: 'DryRun',
      name: 'Name',
      policy: 'Policy',
      protocol: 'Protocol',
      sourceCidr: 'SourceCidr',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      destination: 'string',
      destinationPort: 'string',
      destinationType: 'string',
      dryRun: 'boolean',
      name: 'string',
      policy: 'string',
      protocol: 'string',
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
  statusCode: number;
  body: CreateAuthorizationRuleResponseBody;
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
      body: CreateAuthorizationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchOperateCardsTaskRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  dryRun?: boolean;
  effectType?: string;
  iccids?: string[];
  iccidsOssFilePath?: string;
  name?: string;
  operateType?: string;
  regionId?: string;
  threshold?: number;
  wirelessCloudConnectorIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      effectType: 'EffectType',
      iccids: 'Iccids',
      iccidsOssFilePath: 'IccidsOssFilePath',
      name: 'Name',
      operateType: 'OperateType',
      regionId: 'RegionId',
      threshold: 'Threshold',
      wirelessCloudConnectorIds: 'WirelessCloudConnectorIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      effectType: 'string',
      iccids: { 'type': 'array', 'itemType': 'string' },
      iccidsOssFilePath: 'string',
      name: 'string',
      operateType: 'string',
      regionId: 'string',
      threshold: 'number',
      wirelessCloudConnectorIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchOperateCardsTaskResponseBody extends $tea.Model {
  batchOperateCardsTaskId?: string;
  operateResultOssFilePath?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      batchOperateCardsTaskId: 'BatchOperateCardsTaskId',
      operateResultOssFilePath: 'OperateResultOssFilePath',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOperateCardsTaskId: 'string',
      operateResultOssFilePath: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchOperateCardsTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBatchOperateCardsTaskResponseBody;
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
      body: CreateBatchOperateCardsTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIoTCloudConnectorBackhaulRouteRequest extends $tea.Model {
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

export class CreateIoTCloudConnectorBackhaulRouteResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIoTCloudConnectorBackhaulRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIoTCloudConnectorBackhaulRouteResponseBody;
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
      body: CreateIoTCloudConnectorBackhaulRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWirelessCloudConnectorRequest extends $tea.Model {
  businessType?: string;
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
      businessType: 'BusinessType',
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
      businessType: 'string',
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
  statusCode: number;
  body: CreateWirelessCloudConnectorResponseBody;
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
  statusCode: number;
  body: DeleteAuthorizationRuleResponseBody;
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
      body: DeleteAuthorizationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBatchOperateCardsTaskRequest extends $tea.Model {
  batchOperateCardsTaskId?: string;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      batchOperateCardsTaskId: 'BatchOperateCardsTaskId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOperateCardsTaskId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBatchOperateCardsTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBatchOperateCardsTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteBatchOperateCardsTaskResponseBody;
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
      body: DeleteBatchOperateCardsTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIoTCloudConnectorBackhaulRouteRequest extends $tea.Model {
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

export class DeleteIoTCloudConnectorBackhaulRouteResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIoTCloudConnectorBackhaulRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteIoTCloudConnectorBackhaulRouteResponseBody;
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
      body: DeleteIoTCloudConnectorBackhaulRouteResponseBody,
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
  statusCode: number;
  body: DeleteWirelessCloudConnectorResponseBody;
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
  statusCode: number;
  body: DetachVpcFromNetLinkResponseBody;
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
      body: DetachVpcFromNetLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailCardsRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  iccids?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      iccids: 'Iccids',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      iccids: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailCardsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailCardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FailCardsResponseBody;
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
      body: FailCardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardRequest extends $tea.Model {
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardResponseBody extends $tea.Model {
  APN?: string;
  activatedTime?: string;
  alarmThreshold?: number;
  cloudConnectorId?: string;
  description?: string;
  ISP?: string;
  iccid?: string;
  imei?: string;
  imsi?: string;
  ipAddress?: string;
  limitThreshold?: number;
  lock?: string;
  msisdn?: string;
  name?: string;
  netType?: string;
  orderId?: string;
  requestId?: string;
  simStatus?: string;
  spec?: string;
  status?: string;
  stopThreshold?: number;
  usageDataMonth?: number;
  usageDataTotal?: number;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      activatedTime: 'ActivatedTime',
      alarmThreshold: 'AlarmThreshold',
      cloudConnectorId: 'CloudConnectorId',
      description: 'Description',
      ISP: 'ISP',
      iccid: 'Iccid',
      imei: 'Imei',
      imsi: 'Imsi',
      ipAddress: 'IpAddress',
      limitThreshold: 'LimitThreshold',
      lock: 'Lock',
      msisdn: 'Msisdn',
      name: 'Name',
      netType: 'NetType',
      orderId: 'OrderId',
      requestId: 'RequestId',
      simStatus: 'SimStatus',
      spec: 'Spec',
      status: 'Status',
      stopThreshold: 'StopThreshold',
      usageDataMonth: 'UsageDataMonth',
      usageDataTotal: 'UsageDataTotal',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APN: 'string',
      activatedTime: 'string',
      alarmThreshold: 'number',
      cloudConnectorId: 'string',
      description: 'string',
      ISP: 'string',
      iccid: 'string',
      imei: 'string',
      imsi: 'string',
      ipAddress: 'string',
      limitThreshold: 'number',
      lock: 'string',
      msisdn: 'string',
      name: 'string',
      netType: 'string',
      orderId: 'string',
      requestId: 'string',
      simStatus: 'string',
      spec: 'string',
      status: 'string',
      stopThreshold: 'number',
      usageDataMonth: 'number',
      usageDataTotal: 'number',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCardResponseBody;
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
      body: GetCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardLockReasonRequest extends $tea.Model {
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardLockReasonResponseBody extends $tea.Model {
  lockReason?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardLockReasonResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCardLockReasonResponseBody;
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
      body: GetCardLockReasonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreateCustomerInformationRequest extends $tea.Model {
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

export class GetCreateCustomerInformationResponseBody extends $tea.Model {
  canBuyCard?: string;
  requestId?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      canBuyCard: 'CanBuyCard',
      requestId: 'RequestId',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBuyCard: 'string',
      requestId: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreateCustomerInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCreateCustomerInformationResponseBody;
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
      body: GetCreateCustomerInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnoseResultForSingleCardRequest extends $tea.Model {
  diagnoseTaskId?: string;
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseTaskId: 'DiagnoseTaskId',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseTaskId: 'string',
      regionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnoseResultForSingleCardResponseBody extends $tea.Model {
  beginTime?: number;
  cardIp?: string;
  destination?: string;
  destinationType?: string;
  diagnoseItem?: GetDiagnoseResultForSingleCardResponseBodyDiagnoseItem[];
  endTime?: number;
  errorResult?: GetDiagnoseResultForSingleCardResponseBodyErrorResult[];
  iccId?: string;
  requestId?: string;
  status?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      cardIp: 'CardIp',
      destination: 'Destination',
      destinationType: 'DestinationType',
      diagnoseItem: 'DiagnoseItem',
      endTime: 'EndTime',
      errorResult: 'ErrorResult',
      iccId: 'IccId',
      requestId: 'RequestId',
      status: 'Status',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      cardIp: 'string',
      destination: 'string',
      destinationType: 'string',
      diagnoseItem: { 'type': 'array', 'itemType': GetDiagnoseResultForSingleCardResponseBodyDiagnoseItem },
      endTime: 'number',
      errorResult: { 'type': 'array', 'itemType': GetDiagnoseResultForSingleCardResponseBodyErrorResult },
      iccId: 'string',
      requestId: 'string',
      status: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnoseResultForSingleCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDiagnoseResultForSingleCardResponseBody;
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
      body: GetDiagnoseResultForSingleCardResponseBody,
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
  businessType?: string;
  cardCount?: string;
  createTime?: string;
  dataPackageId?: string;
  dataPackageType?: string;
  description?: string;
  features?: string[];
  name?: string;
  netLinks?: GetWirelessCloudConnectorResponseBodyNetLinks[];
  regionId?: string;
  requestId?: string;
  serviceType?: string;
  status?: string;
  useCase?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      cardCount: 'CardCount',
      createTime: 'CreateTime',
      dataPackageId: 'DataPackageId',
      dataPackageType: 'DataPackageType',
      description: 'Description',
      features: 'Features',
      name: 'Name',
      netLinks: 'NetLinks',
      regionId: 'RegionId',
      requestId: 'RequestId',
      serviceType: 'ServiceType',
      status: 'Status',
      useCase: 'UseCase',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      cardCount: 'string',
      createTime: 'string',
      dataPackageId: 'string',
      dataPackageType: 'string',
      description: 'string',
      features: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      netLinks: { 'type': 'array', 'itemType': GetWirelessCloudConnectorResponseBodyNetLinks },
      regionId: 'string',
      requestId: 'string',
      serviceType: 'string',
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
  statusCode: number;
  body: GetWirelessCloudConnectorResponseBody;
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
      body: GetWirelessCloudConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantNetLinkRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  grantAliUid?: number;
  netLinkId?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      grantAliUid: 'GrantAliUid',
      netLinkId: 'NetLinkId',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      grantAliUid: 'number',
      netLinkId: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantNetLinkResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantNetLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GrantNetLinkResponseBody;
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
      body: GrantNetLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAPNsRequest extends $tea.Model {
  APN?: string;
  ISP?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      ISP: 'ISP',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APN: 'string',
      ISP: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAPNsResponseBody extends $tea.Model {
  APNs?: ListAPNsResponseBodyAPNs[];
  maxResults?: string;
  nextToken?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      APNs: 'APNs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APNs: { 'type': 'array', 'itemType': ListAPNsResponseBodyAPNs },
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

export class ListAPNsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAPNsResponseBody;
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
      body: ListAPNsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationRulesRequest extends $tea.Model {
  authorizationRuleIds?: string[];
  destination?: string;
  destinationPort?: string;
  destinationType?: string;
  dns?: boolean;
  maxResults?: number;
  names?: string[];
  nextToken?: string;
  policy?: string;
  protocol?: string;
  statuses?: string[];
  type?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleIds: 'AuthorizationRuleIds',
      destination: 'Destination',
      destinationPort: 'DestinationPort',
      destinationType: 'DestinationType',
      dns: 'Dns',
      maxResults: 'MaxResults',
      names: 'Names',
      nextToken: 'NextToken',
      policy: 'Policy',
      protocol: 'Protocol',
      statuses: 'Statuses',
      type: 'Type',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleIds: { 'type': 'array', 'itemType': 'string' },
      destination: 'string',
      destinationPort: 'string',
      destinationType: 'string',
      dns: 'boolean',
      maxResults: 'number',
      names: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      policy: 'string',
      protocol: 'string',
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
  statusCode: number;
  body: ListAuthorizationRulesResponseBody;
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
      body: ListAuthorizationRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchOperateCardsTasksRequest extends $tea.Model {
  batchOperateCardsTaskIds?: string[];
  maxResults?: number;
  names?: string[];
  nextToken?: string;
  regionId?: string;
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      batchOperateCardsTaskIds: 'BatchOperateCardsTaskIds',
      maxResults: 'MaxResults',
      names: 'Names',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOperateCardsTaskIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      names: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      regionId: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchOperateCardsTasksResponseBody extends $tea.Model {
  batchOperateCardsTasks?: ListBatchOperateCardsTasksResponseBodyBatchOperateCardsTasks[];
  maxResults?: string;
  nextToken?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      batchOperateCardsTasks: 'BatchOperateCardsTasks',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOperateCardsTasks: { 'type': 'array', 'itemType': ListBatchOperateCardsTasksResponseBodyBatchOperateCardsTasks },
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

export class ListBatchOperateCardsTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListBatchOperateCardsTasksResponseBody;
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
      body: ListBatchOperateCardsTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardsRequest extends $tea.Model {
  apn?: string;
  iccid?: string;
  iccids?: string[];
  ipAddress?: string;
  lock?: boolean;
  maxResults?: number;
  msisdn?: string;
  netLinkId?: string;
  nextToken?: string;
  online?: boolean;
  statuses?: string[];
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      apn: 'Apn',
      iccid: 'Iccid',
      iccids: 'Iccids',
      ipAddress: 'IpAddress',
      lock: 'Lock',
      maxResults: 'MaxResults',
      msisdn: 'Msisdn',
      netLinkId: 'NetLinkId',
      nextToken: 'NextToken',
      online: 'Online',
      statuses: 'Statuses',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apn: 'string',
      iccid: 'string',
      iccids: { 'type': 'array', 'itemType': 'string' },
      ipAddress: 'string',
      lock: 'boolean',
      maxResults: 'number',
      msisdn: 'string',
      netLinkId: 'string',
      nextToken: 'string',
      online: 'boolean',
      statuses: { 'type': 'array', 'itemType': 'string' },
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
  statusCode: number;
  body: ListCardsResponseBody;
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
  statusCode: number;
  body: ListDataPackagesResponseBody;
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
      body: ListDataPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseInfoForSingleCardRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionNo?: string;
  source?: string;
  sourceType?: string;
  status?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionNo: 'RegionNo',
      source: 'Source',
      sourceType: 'SourceType',
      status: 'Status',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionNo: 'string',
      source: 'string',
      sourceType: 'string',
      status: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseInfoForSingleCardResponseBody extends $tea.Model {
  diagnoseInfo?: ListDiagnoseInfoForSingleCardResponseBodyDiagnoseInfo[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      diagnoseInfo: 'DiagnoseInfo',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseInfo: { 'type': 'array', 'itemType': ListDiagnoseInfoForSingleCardResponseBodyDiagnoseInfo },
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

export class ListDiagnoseInfoForSingleCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDiagnoseInfoForSingleCardResponseBody;
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
      body: ListDiagnoseInfoForSingleCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorBackhaulRouteRequest extends $tea.Model {
  netLinkId?: string;
  regionId?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      netLinkId: 'NetLinkId',
      regionId: 'RegionId',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netLinkId: 'string',
      regionId: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorBackhaulRouteResponseBody extends $tea.Model {
  netLinkId?: string;
  requestId?: string;
  routes?: ListIoTCloudConnectorBackhaulRouteResponseBodyRoutes[];
  static names(): { [key: string]: string } {
    return {
      netLinkId: 'NetLinkId',
      requestId: 'RequestId',
      routes: 'Routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netLinkId: 'string',
      requestId: 'string',
      routes: { 'type': 'array', 'itemType': ListIoTCloudConnectorBackhaulRouteResponseBodyRoutes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorBackhaulRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIoTCloudConnectorBackhaulRouteResponseBody;
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
      body: ListIoTCloudConnectorBackhaulRouteResponseBody,
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
  statusCode: number;
  body: ListOrdersResponseBody;
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
  statusCode: number;
  body: ListRegionsResponseBody;
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
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWirelessCloudConnectorsRequest extends $tea.Model {
  businessType?: string;
  isInGroup?: string;
  maxResults?: number;
  names?: string[];
  nextToken?: string;
  regionId?: string;
  statuses?: string[];
  wirelessCloudConnectorGroupId?: string;
  wirelessCloudConnectorIds?: string[];
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      isInGroup: 'IsInGroup',
      maxResults: 'MaxResults',
      names: 'Names',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      statuses: 'Statuses',
      wirelessCloudConnectorGroupId: 'WirelessCloudConnectorGroupId',
      wirelessCloudConnectorIds: 'WirelessCloudConnectorIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      isInGroup: 'string',
      maxResults: 'number',
      names: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      regionId: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
      wirelessCloudConnectorGroupId: 'string',
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
  statusCode: number;
  body: ListWirelessCloudConnectorsResponseBody;
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
  statusCode: number;
  body: ListZonesResponseBody;
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
      body: ListZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockCardsRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  iccids?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      iccids: 'Iccids',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      iccids: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockCardsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockCardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LockCardsResponseBody;
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
      body: LockCardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWirelessCloudConnectorFeatureRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  featureName?: string;
  featureValue?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      featureName: 'FeatureName',
      featureValue: 'FeatureValue',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      featureName: 'string',
      featureValue: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWirelessCloudConnectorFeatureResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWirelessCloudConnectorFeatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyWirelessCloudConnectorFeatureResponseBody;
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
      body: ModifyWirelessCloudConnectorFeatureResponseBody,
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
  statusCode: number;
  body: OpenCc5gServiceResponseBody;
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
      body: OpenCc5gServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeCardsRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  iccids?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      iccids: 'Iccids',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      iccids: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeCardsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeCardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResumeCardsResponseBody;
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
      body: ResumeCardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeNetLinkRequest extends $tea.Model {
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

export class RevokeNetLinkResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeNetLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RevokeNetLinkResponseBody;
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
      body: RevokeNetLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCardsRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  iccids?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      iccids: 'Iccids',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      iccids: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCardsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopCardsResponseBody;
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
      body: StopCardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDiagnoseTaskForSingleCardRequest extends $tea.Model {
  beginTime?: number;
  destination?: string;
  endTime?: number;
  regionNo?: string;
  resourceUid?: number;
  source?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      destination: 'Destination',
      endTime: 'EndTime',
      regionNo: 'RegionNo',
      resourceUid: 'ResourceUid',
      source: 'Source',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      destination: 'string',
      endTime: 'number',
      regionNo: 'string',
      resourceUid: 'number',
      source: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDiagnoseTaskForSingleCardResponseBody extends $tea.Model {
  diagnoseTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseTaskId: 'DiagnoseTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDiagnoseTaskForSingleCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitDiagnoseTaskForSingleCardResponseBody;
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
      body: SubmitDiagnoseTaskForSingleCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchWirelessCloudConnectorToBusinessRequest extends $tea.Model {
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

export class SwitchWirelessCloudConnectorToBusinessResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchWirelessCloudConnectorToBusinessResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SwitchWirelessCloudConnectorToBusinessResponseBody;
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
      body: SwitchWirelessCloudConnectorToBusinessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockCardsRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  iccids?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      iccids: 'Iccids',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      iccids: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockCardsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockCardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnlockCardsResponseBody;
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
      body: UnlockCardsResponseBody,
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
  destinationPort?: string;
  dryRun?: boolean;
  name?: string;
  policy?: string;
  protocol?: string;
  sourceCidr?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      clientToken: 'ClientToken',
      description: 'Description',
      destination: 'Destination',
      destinationPort: 'DestinationPort',
      dryRun: 'DryRun',
      name: 'Name',
      policy: 'Policy',
      protocol: 'Protocol',
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
      destinationPort: 'string',
      dryRun: 'boolean',
      name: 'string',
      policy: 'string',
      protocol: 'string',
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
  statusCode: number;
  body: UpdateAuthorizationRuleResponseBody;
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
      body: UpdateAuthorizationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchOperateCardsTaskRequest extends $tea.Model {
  batchOperateCardsTaskId?: string;
  clientToken?: string;
  description?: string;
  dryRun?: boolean;
  effectType?: string;
  iccids?: string[];
  iccidsOssFilePath?: string;
  name?: string;
  operateType?: string;
  regionId?: string;
  threshold?: number;
  wirelessCloudConnectorIds?: string[];
  static names(): { [key: string]: string } {
    return {
      batchOperateCardsTaskId: 'BatchOperateCardsTaskId',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      effectType: 'EffectType',
      iccids: 'Iccids',
      iccidsOssFilePath: 'IccidsOssFilePath',
      name: 'Name',
      operateType: 'OperateType',
      regionId: 'RegionId',
      threshold: 'Threshold',
      wirelessCloudConnectorIds: 'WirelessCloudConnectorIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOperateCardsTaskId: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      effectType: 'string',
      iccids: { 'type': 'array', 'itemType': 'string' },
      iccidsOssFilePath: 'string',
      name: 'string',
      operateType: 'string',
      regionId: 'string',
      threshold: 'number',
      wirelessCloudConnectorIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchOperateCardsTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchOperateCardsTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateBatchOperateCardsTaskResponseBody;
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
      body: UpdateBatchOperateCardsTaskResponseBody,
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
  statusCode: number;
  body: UpdateCardResponseBody;
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
  statusCode: number;
  body: UpdateDNSAuthorizationRuleResponseBody;
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
  statusCode: number;
  body: UpdateWirelessCloudConnectorResponseBody;
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

export class GetDiagnoseResultForSingleCardResponseBodyDiagnoseItem extends $tea.Model {
  part?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      part: 'Part',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      part: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnoseResultForSingleCardResponseBodyErrorResult extends $tea.Model {
  errorDesc?: string;
  errorLevel?: string;
  errorPart?: string;
  errorSuggestion?: string;
  static names(): { [key: string]: string } {
    return {
      errorDesc: 'ErrorDesc',
      errorLevel: 'ErrorLevel',
      errorPart: 'ErrorPart',
      errorSuggestion: 'ErrorSuggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDesc: 'string',
      errorLevel: 'string',
      errorPart: 'string',
      errorSuggestion: 'string',
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
  grantAliUid?: string;
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
      grantAliUid: 'GrantAliUid',
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
      grantAliUid: 'string',
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

export class ListAPNsResponseBodyAPNs extends $tea.Model {
  APN?: string;
  description?: string;
  ISP?: string;
  name?: string;
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      description: 'Description',
      ISP: 'ISP',
      name: 'Name',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APN: 'string',
      description: 'string',
      ISP: 'string',
      name: 'string',
      zones: { 'type': 'array', 'itemType': 'string' },
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
  destinationPort?: string;
  destinationType?: string;
  dns?: boolean;
  name?: string;
  policy?: string;
  protocol?: string;
  sourceCidr?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      createTime: 'CreateTime',
      description: 'Description',
      destination: 'Destination',
      destinationPort: 'DestinationPort',
      destinationType: 'DestinationType',
      dns: 'Dns',
      name: 'Name',
      policy: 'Policy',
      protocol: 'Protocol',
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
      destinationPort: 'string',
      destinationType: 'string',
      dns: 'boolean',
      name: 'string',
      policy: 'string',
      protocol: 'string',
      sourceCidr: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchOperateCardsTasksResponseBodyBatchOperateCardsTasksWirelessCloudConnectors extends $tea.Model {
  status?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchOperateCardsTasksResponseBodyBatchOperateCardsTasks extends $tea.Model {
  batchOperateCardsTaskId?: string;
  createTime?: string;
  description?: string;
  effectType?: string;
  iccidsOssFilePath?: string;
  name?: string;
  operateResultOssFilePath?: string;
  operateType?: string;
  status?: string;
  threshold?: string;
  wirelessCloudConnectors?: ListBatchOperateCardsTasksResponseBodyBatchOperateCardsTasksWirelessCloudConnectors[];
  static names(): { [key: string]: string } {
    return {
      batchOperateCardsTaskId: 'BatchOperateCardsTaskId',
      createTime: 'CreateTime',
      description: 'Description',
      effectType: 'EffectType',
      iccidsOssFilePath: 'IccidsOssFilePath',
      name: 'Name',
      operateResultOssFilePath: 'OperateResultOssFilePath',
      operateType: 'OperateType',
      status: 'Status',
      threshold: 'Threshold',
      wirelessCloudConnectors: 'WirelessCloudConnectors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOperateCardsTaskId: 'string',
      createTime: 'string',
      description: 'string',
      effectType: 'string',
      iccidsOssFilePath: 'string',
      name: 'string',
      operateResultOssFilePath: 'string',
      operateType: 'string',
      status: 'string',
      threshold: 'string',
      wirelessCloudConnectors: { 'type': 'array', 'itemType': ListBatchOperateCardsTasksResponseBodyBatchOperateCardsTasksWirelessCloudConnectors },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardsResponseBodyCards extends $tea.Model {
  APN?: string;
  activatedTime?: string;
  businessStatus?: string;
  description?: string;
  ISP?: string;
  iccid?: string;
  imei?: string;
  imsi?: string;
  ipAddress?: string;
  lock?: boolean;
  msisdn?: string;
  name?: string;
  netType?: string;
  orderId?: string;
  spec?: string;
  status?: string;
  usageDataMonth?: number;
  usageDataTotal?: string;
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      activatedTime: 'ActivatedTime',
      businessStatus: 'BusinessStatus',
      description: 'Description',
      ISP: 'ISP',
      iccid: 'Iccid',
      imei: 'Imei',
      imsi: 'Imsi',
      ipAddress: 'IpAddress',
      lock: 'Lock',
      msisdn: 'Msisdn',
      name: 'Name',
      netType: 'NetType',
      orderId: 'OrderId',
      spec: 'Spec',
      status: 'Status',
      usageDataMonth: 'UsageDataMonth',
      usageDataTotal: 'UsageDataTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APN: 'string',
      activatedTime: 'string',
      businessStatus: 'string',
      description: 'string',
      ISP: 'string',
      iccid: 'string',
      imei: 'string',
      imsi: 'string',
      ipAddress: 'string',
      lock: 'boolean',
      msisdn: 'string',
      name: 'string',
      netType: 'string',
      orderId: 'string',
      spec: 'string',
      status: 'string',
      usageDataMonth: 'number',
      usageDataTotal: 'string',
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

export class ListDiagnoseInfoForSingleCardResponseBodyDiagnoseInfo extends $tea.Model {
  beginTime?: number;
  cardIp?: string;
  destination?: string;
  destinationType?: string;
  diagnoseTaskId?: string;
  diagnoseTime?: number;
  endTime?: number;
  iccId?: string;
  source?: string;
  sourceType?: string;
  status?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      cardIp: 'CardIp',
      destination: 'Destination',
      destinationType: 'DestinationType',
      diagnoseTaskId: 'DiagnoseTaskId',
      diagnoseTime: 'DiagnoseTime',
      endTime: 'EndTime',
      iccId: 'IccId',
      source: 'Source',
      sourceType: 'SourceType',
      status: 'Status',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      cardIp: 'string',
      destination: 'string',
      destinationType: 'string',
      diagnoseTaskId: 'string',
      diagnoseTime: 'number',
      endTime: 'number',
      iccId: 'string',
      source: 'string',
      sourceType: 'string',
      status: 'string',
      wirelessCloudConnectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorBackhaulRouteResponseBodyRoutes extends $tea.Model {
  description?: string;
  destinationCidrBlock?: string;
  nextHopId?: string;
  nextHopType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrBlock: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
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
  businessType?: string;
  cardCount?: string;
  createTime?: string;
  dataPackageId?: string;
  dataPackageType?: string;
  description?: string;
  name?: string;
  regionId?: string;
  serviceType?: string;
  status?: string;
  useCase?: string;
  wirelessCloudConnectorGroupId?: string;
  wirelessCloudConnectorId?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      cardCount: 'CardCount',
      createTime: 'CreateTime',
      dataPackageId: 'DataPackageId',
      dataPackageType: 'DataPackageType',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      serviceType: 'ServiceType',
      status: 'Status',
      useCase: 'UseCase',
      wirelessCloudConnectorGroupId: 'WirelessCloudConnectorGroupId',
      wirelessCloudConnectorId: 'WirelessCloudConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      cardCount: 'string',
      createTime: 'string',
      dataPackageId: 'string',
      dataPackageType: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      serviceType: 'string',
      status: 'string',
      useCase: 'string',
      wirelessCloudConnectorGroupId: 'string',
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

    if (!Util.isUnset(request.destinationPort)) {
      query["DestinationPort"] = request.destinationPort;
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

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
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

  async createBatchOperateCardsTaskWithOptions(request: CreateBatchOperateCardsTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateBatchOperateCardsTaskResponse> {
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

    if (!Util.isUnset(request.effectType)) {
      query["EffectType"] = request.effectType;
    }

    if (!Util.isUnset(request.iccids)) {
      query["Iccids"] = request.iccids;
    }

    if (!Util.isUnset(request.iccidsOssFilePath)) {
      query["IccidsOssFilePath"] = request.iccidsOssFilePath;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorIds)) {
      query["WirelessCloudConnectorIds"] = request.wirelessCloudConnectorIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBatchOperateCardsTask",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBatchOperateCardsTaskResponse>(await this.callApi(params, req, runtime), new CreateBatchOperateCardsTaskResponse({}));
  }

  async createBatchOperateCardsTask(request: CreateBatchOperateCardsTaskRequest): Promise<CreateBatchOperateCardsTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBatchOperateCardsTaskWithOptions(request, runtime);
  }

  async createIoTCloudConnectorBackhaulRouteWithOptions(request: CreateIoTCloudConnectorBackhaulRouteRequest, runtime: $Util.RuntimeOptions): Promise<CreateIoTCloudConnectorBackhaulRouteResponse> {
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
      action: "CreateIoTCloudConnectorBackhaulRoute",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIoTCloudConnectorBackhaulRouteResponse>(await this.callApi(params, req, runtime), new CreateIoTCloudConnectorBackhaulRouteResponse({}));
  }

  async createIoTCloudConnectorBackhaulRoute(request: CreateIoTCloudConnectorBackhaulRouteRequest): Promise<CreateIoTCloudConnectorBackhaulRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIoTCloudConnectorBackhaulRouteWithOptions(request, runtime);
  }

  async createWirelessCloudConnectorWithOptions(request: CreateWirelessCloudConnectorRequest, runtime: $Util.RuntimeOptions): Promise<CreateWirelessCloudConnectorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
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

  async deleteBatchOperateCardsTaskWithOptions(request: DeleteBatchOperateCardsTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBatchOperateCardsTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.batchOperateCardsTaskId)) {
      query["BatchOperateCardsTaskId"] = request.batchOperateCardsTaskId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBatchOperateCardsTask",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBatchOperateCardsTaskResponse>(await this.callApi(params, req, runtime), new DeleteBatchOperateCardsTaskResponse({}));
  }

  async deleteBatchOperateCardsTask(request: DeleteBatchOperateCardsTaskRequest): Promise<DeleteBatchOperateCardsTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBatchOperateCardsTaskWithOptions(request, runtime);
  }

  async deleteIoTCloudConnectorBackhaulRouteWithOptions(request: DeleteIoTCloudConnectorBackhaulRouteRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIoTCloudConnectorBackhaulRouteResponse> {
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
      action: "DeleteIoTCloudConnectorBackhaulRoute",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIoTCloudConnectorBackhaulRouteResponse>(await this.callApi(params, req, runtime), new DeleteIoTCloudConnectorBackhaulRouteResponse({}));
  }

  async deleteIoTCloudConnectorBackhaulRoute(request: DeleteIoTCloudConnectorBackhaulRouteRequest): Promise<DeleteIoTCloudConnectorBackhaulRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIoTCloudConnectorBackhaulRouteWithOptions(request, runtime);
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

  async failCardsWithOptions(request: FailCardsRequest, runtime: $Util.RuntimeOptions): Promise<FailCardsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.iccids)) {
      query["Iccids"] = request.iccids;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FailCards",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FailCardsResponse>(await this.callApi(params, req, runtime), new FailCardsResponse({}));
  }

  async failCards(request: FailCardsRequest): Promise<FailCardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.failCardsWithOptions(request, runtime);
  }

  async getCardWithOptions(request: GetCardRequest, runtime: $Util.RuntimeOptions): Promise<GetCardResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCard",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCardResponse>(await this.callApi(params, req, runtime), new GetCardResponse({}));
  }

  async getCard(request: GetCardRequest): Promise<GetCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCardWithOptions(request, runtime);
  }

  async getCardLockReasonWithOptions(request: GetCardLockReasonRequest, runtime: $Util.RuntimeOptions): Promise<GetCardLockReasonResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCardLockReason",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCardLockReasonResponse>(await this.callApi(params, req, runtime), new GetCardLockReasonResponse({}));
  }

  async getCardLockReason(request: GetCardLockReasonRequest): Promise<GetCardLockReasonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCardLockReasonWithOptions(request, runtime);
  }

  async getCreateCustomerInformationWithOptions(request: GetCreateCustomerInformationRequest, runtime: $Util.RuntimeOptions): Promise<GetCreateCustomerInformationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCreateCustomerInformation",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCreateCustomerInformationResponse>(await this.callApi(params, req, runtime), new GetCreateCustomerInformationResponse({}));
  }

  async getCreateCustomerInformation(request: GetCreateCustomerInformationRequest): Promise<GetCreateCustomerInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCreateCustomerInformationWithOptions(request, runtime);
  }

  async getDiagnoseResultForSingleCardWithOptions(request: GetDiagnoseResultForSingleCardRequest, runtime: $Util.RuntimeOptions): Promise<GetDiagnoseResultForSingleCardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diagnoseTaskId)) {
      query["DiagnoseTaskId"] = request.diagnoseTaskId;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDiagnoseResultForSingleCard",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDiagnoseResultForSingleCardResponse>(await this.callApi(params, req, runtime), new GetDiagnoseResultForSingleCardResponse({}));
  }

  async getDiagnoseResultForSingleCard(request: GetDiagnoseResultForSingleCardRequest): Promise<GetDiagnoseResultForSingleCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiagnoseResultForSingleCardWithOptions(request, runtime);
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

  async grantNetLinkWithOptions(request: GrantNetLinkRequest, runtime: $Util.RuntimeOptions): Promise<GrantNetLinkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.grantAliUid)) {
      query["GrantAliUid"] = request.grantAliUid;
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
      action: "GrantNetLink",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantNetLinkResponse>(await this.callApi(params, req, runtime), new GrantNetLinkResponse({}));
  }

  async grantNetLink(request: GrantNetLinkRequest): Promise<GrantNetLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantNetLinkWithOptions(request, runtime);
  }

  async listAPNsWithOptions(request: ListAPNsRequest, runtime: $Util.RuntimeOptions): Promise<ListAPNsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAPNs",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAPNsResponse>(await this.callApi(params, req, runtime), new ListAPNsResponse({}));
  }

  async listAPNs(request: ListAPNsRequest): Promise<ListAPNsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAPNsWithOptions(request, runtime);
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

  async listBatchOperateCardsTasksWithOptions(request: ListBatchOperateCardsTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListBatchOperateCardsTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBatchOperateCardsTasks",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBatchOperateCardsTasksResponse>(await this.callApi(params, req, runtime), new ListBatchOperateCardsTasksResponse({}));
  }

  async listBatchOperateCardsTasks(request: ListBatchOperateCardsTasksRequest): Promise<ListBatchOperateCardsTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBatchOperateCardsTasksWithOptions(request, runtime);
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

  async listDiagnoseInfoForSingleCardWithOptions(request: ListDiagnoseInfoForSingleCardRequest, runtime: $Util.RuntimeOptions): Promise<ListDiagnoseInfoForSingleCardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorId)) {
      query["WirelessCloudConnectorId"] = request.wirelessCloudConnectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDiagnoseInfoForSingleCard",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDiagnoseInfoForSingleCardResponse>(await this.callApi(params, req, runtime), new ListDiagnoseInfoForSingleCardResponse({}));
  }

  async listDiagnoseInfoForSingleCard(request: ListDiagnoseInfoForSingleCardRequest): Promise<ListDiagnoseInfoForSingleCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDiagnoseInfoForSingleCardWithOptions(request, runtime);
  }

  async listIoTCloudConnectorBackhaulRouteWithOptions(request: ListIoTCloudConnectorBackhaulRouteRequest, runtime: $Util.RuntimeOptions): Promise<ListIoTCloudConnectorBackhaulRouteResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIoTCloudConnectorBackhaulRoute",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIoTCloudConnectorBackhaulRouteResponse>(await this.callApi(params, req, runtime), new ListIoTCloudConnectorBackhaulRouteResponse({}));
  }

  async listIoTCloudConnectorBackhaulRoute(request: ListIoTCloudConnectorBackhaulRouteRequest): Promise<ListIoTCloudConnectorBackhaulRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIoTCloudConnectorBackhaulRouteWithOptions(request, runtime);
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

  async lockCardsWithOptions(request: LockCardsRequest, runtime: $Util.RuntimeOptions): Promise<LockCardsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.iccids)) {
      query["Iccids"] = request.iccids;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LockCards",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LockCardsResponse>(await this.callApi(params, req, runtime), new LockCardsResponse({}));
  }

  async lockCards(request: LockCardsRequest): Promise<LockCardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockCardsWithOptions(request, runtime);
  }

  async modifyWirelessCloudConnectorFeatureWithOptions(request: ModifyWirelessCloudConnectorFeatureRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWirelessCloudConnectorFeatureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.featureName)) {
      query["FeatureName"] = request.featureName;
    }

    if (!Util.isUnset(request.featureValue)) {
      query["FeatureValue"] = request.featureValue;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorId)) {
      query["WirelessCloudConnectorId"] = request.wirelessCloudConnectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWirelessCloudConnectorFeature",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWirelessCloudConnectorFeatureResponse>(await this.callApi(params, req, runtime), new ModifyWirelessCloudConnectorFeatureResponse({}));
  }

  async modifyWirelessCloudConnectorFeature(request: ModifyWirelessCloudConnectorFeatureRequest): Promise<ModifyWirelessCloudConnectorFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWirelessCloudConnectorFeatureWithOptions(request, runtime);
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

  async resumeCardsWithOptions(request: ResumeCardsRequest, runtime: $Util.RuntimeOptions): Promise<ResumeCardsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.iccids)) {
      query["Iccids"] = request.iccids;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResumeCards",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeCardsResponse>(await this.callApi(params, req, runtime), new ResumeCardsResponse({}));
  }

  async resumeCards(request: ResumeCardsRequest): Promise<ResumeCardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeCardsWithOptions(request, runtime);
  }

  async revokeNetLinkWithOptions(request: RevokeNetLinkRequest, runtime: $Util.RuntimeOptions): Promise<RevokeNetLinkResponse> {
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
      action: "RevokeNetLink",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeNetLinkResponse>(await this.callApi(params, req, runtime), new RevokeNetLinkResponse({}));
  }

  async revokeNetLink(request: RevokeNetLinkRequest): Promise<RevokeNetLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeNetLinkWithOptions(request, runtime);
  }

  async stopCardsWithOptions(request: StopCardsRequest, runtime: $Util.RuntimeOptions): Promise<StopCardsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.iccids)) {
      query["Iccids"] = request.iccids;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopCards",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopCardsResponse>(await this.callApi(params, req, runtime), new StopCardsResponse({}));
  }

  async stopCards(request: StopCardsRequest): Promise<StopCardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopCardsWithOptions(request, runtime);
  }

  async submitDiagnoseTaskForSingleCardWithOptions(request: SubmitDiagnoseTaskForSingleCardRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDiagnoseTaskForSingleCardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorId)) {
      query["WirelessCloudConnectorId"] = request.wirelessCloudConnectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDiagnoseTaskForSingleCard",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitDiagnoseTaskForSingleCardResponse>(await this.callApi(params, req, runtime), new SubmitDiagnoseTaskForSingleCardResponse({}));
  }

  async submitDiagnoseTaskForSingleCard(request: SubmitDiagnoseTaskForSingleCardRequest): Promise<SubmitDiagnoseTaskForSingleCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDiagnoseTaskForSingleCardWithOptions(request, runtime);
  }

  async switchWirelessCloudConnectorToBusinessWithOptions(request: SwitchWirelessCloudConnectorToBusinessRequest, runtime: $Util.RuntimeOptions): Promise<SwitchWirelessCloudConnectorToBusinessResponse> {
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
      action: "SwitchWirelessCloudConnectorToBusiness",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchWirelessCloudConnectorToBusinessResponse>(await this.callApi(params, req, runtime), new SwitchWirelessCloudConnectorToBusinessResponse({}));
  }

  async switchWirelessCloudConnectorToBusiness(request: SwitchWirelessCloudConnectorToBusinessRequest): Promise<SwitchWirelessCloudConnectorToBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchWirelessCloudConnectorToBusinessWithOptions(request, runtime);
  }

  async unlockCardsWithOptions(request: UnlockCardsRequest, runtime: $Util.RuntimeOptions): Promise<UnlockCardsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.iccids)) {
      query["Iccids"] = request.iccids;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnlockCards",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnlockCardsResponse>(await this.callApi(params, req, runtime), new UnlockCardsResponse({}));
  }

  async unlockCards(request: UnlockCardsRequest): Promise<UnlockCardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockCardsWithOptions(request, runtime);
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

    if (!Util.isUnset(request.destinationPort)) {
      query["DestinationPort"] = request.destinationPort;
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

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
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

  async updateBatchOperateCardsTaskWithOptions(request: UpdateBatchOperateCardsTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBatchOperateCardsTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.batchOperateCardsTaskId)) {
      query["BatchOperateCardsTaskId"] = request.batchOperateCardsTaskId;
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

    if (!Util.isUnset(request.effectType)) {
      query["EffectType"] = request.effectType;
    }

    if (!Util.isUnset(request.iccids)) {
      query["Iccids"] = request.iccids;
    }

    if (!Util.isUnset(request.iccidsOssFilePath)) {
      query["IccidsOssFilePath"] = request.iccidsOssFilePath;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!Util.isUnset(request.wirelessCloudConnectorIds)) {
      query["WirelessCloudConnectorIds"] = request.wirelessCloudConnectorIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBatchOperateCardsTask",
      version: "2022-03-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBatchOperateCardsTaskResponse>(await this.callApi(params, req, runtime), new UpdateBatchOperateCardsTaskResponse({}));
  }

  async updateBatchOperateCardsTask(request: UpdateBatchOperateCardsTaskRequest): Promise<UpdateBatchOperateCardsTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBatchOperateCardsTaskWithOptions(request, runtime);
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
