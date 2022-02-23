// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAccessControlListEntryRequest extends $tea.Model {
  aclEntrys?: string;
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclEntrys: 'AclEntrys',
      aclId: 'AclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntrys: 'string',
      aclId: 'string',
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

export class AddAccessControlListEntryResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccessControlListEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddAccessControlListEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddAccessControlListEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersRequest extends $tea.Model {
  backendServers?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      loadBalancerId: 'string',
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

export class AddBackendServersResponseBody extends $tea.Model {
  backendServers?: AddBackendServersResponseBodyBackendServers;
  loadBalancerId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: AddBackendServersResponseBodyBackendServers,
      loadBalancerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddBackendServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddListenerWhiteListItemRequest extends $tea.Model {
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sourceItems?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceItems: 'SourceItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceItems: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddListenerWhiteListItemResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddListenerWhiteListItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddListenerWhiteListItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddListenerWhiteListItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsRequest extends $tea.Model {
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVServerGroupBackendServersRequest extends $tea.Model {
  backendServers?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVServerGroupBackendServersResponseBody extends $tea.Model {
  backendServers?: AddVServerGroupBackendServersResponseBodyBackendServers;
  requestId?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: AddVServerGroupBackendServersResponseBodyBackendServers,
      requestId: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVServerGroupBackendServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddVServerGroupBackendServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVServerGroupBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessControlListRequest extends $tea.Model {
  aclName?: string;
  addressIPVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclName: 'string',
      addressIPVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessControlListResponseBody extends $tea.Model {
  aclId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessControlListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAccessControlListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAccessControlListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainExtensionRequest extends $tea.Model {
  domain?: string;
  listenerPort?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainExtensionResponseBody extends $tea.Model {
  domainExtensionId?: string;
  listenerPort?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainExtensionId: 'DomainExtensionId',
      listenerPort: 'ListenerPort',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensionId: 'string',
      listenerPort: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainExtensionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDomainExtensionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDomainExtensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequest extends $tea.Model {
  address?: string;
  addressIPVersion?: string;
  addressType?: string;
  autoPay?: boolean;
  bandwidth?: number;
  clientToken?: string;
  deleteProtection?: string;
  duration?: number;
  internetChargeType?: string;
  loadBalancerName?: string;
  loadBalancerSpec?: string;
  masterZoneId?: string;
  modificationProtectionReason?: string;
  modificationProtectionStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
  payType?: string;
  pricingCycle?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  slaveZoneId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      deleteProtection: 'DeleteProtection',
      duration: 'Duration',
      internetChargeType: 'InternetChargeType',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      masterZoneId: 'MasterZoneId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      slaveZoneId: 'SlaveZoneId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      autoPay: 'boolean',
      bandwidth: 'number',
      clientToken: 'string',
      deleteProtection: 'string',
      duration: 'number',
      internetChargeType: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      masterZoneId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      slaveZoneId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerResponseBody extends $tea.Model {
  address?: string;
  addressIPVersion?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  networkType?: string;
  orderId?: number;
  requestId?: string;
  resourceGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      networkType: 'NetworkType',
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      networkType: 'string',
      orderId: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLoadBalancerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPListenerRequest extends $tea.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  backendServerPort?: number;
  bandwidth?: number;
  cookie?: string;
  cookieTimeout?: number;
  description?: string;
  forwardPort?: number;
  gzip?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  listenerForward?: string;
  listenerPort?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  requestTimeout?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduler?: string;
  stickySession?: string;
  stickySessionType?: string;
  unhealthyThreshold?: number;
  VServerGroupId?: string;
  XForwardedFor?: string;
  XForwardedFor_SLBID?: string;
  XForwardedFor_SLBIP?: string;
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      forwardPort: 'ForwardPort',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      requestTimeout: 'RequestTimeout',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      forwardPort: 'number',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      requestTimeout: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLoadBalancerHTTPListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLoadBalancerHTTPListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPSListenerRequest extends $tea.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  backendServerPort?: number;
  bandwidth?: number;
  CACertificateId?: string;
  cookie?: string;
  cookieTimeout?: number;
  description?: string;
  enableHttp2?: string;
  gzip?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  requestTimeout?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduler?: string;
  serverCertificateId?: string;
  stickySession?: string;
  stickySessionType?: string;
  TLSCipherPolicy?: string;
  unhealthyThreshold?: number;
  VServerGroupId?: string;
  XForwardedFor?: string;
  XForwardedFor_SLBID?: string;
  XForwardedFor_SLBIP?: string;
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      CACertificateId: 'CACertificateId',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      enableHttp2: 'EnableHttp2',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      requestTimeout: 'RequestTimeout',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      serverCertificateId: 'ServerCertificateId',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      TLSCipherPolicy: 'TLSCipherPolicy',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      CACertificateId: 'string',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      enableHttp2: 'string',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      requestTimeout: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      serverCertificateId: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      TLSCipherPolicy: 'string',
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPSListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPSListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLoadBalancerHTTPSListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLoadBalancerHTTPSListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerTCPListenerRequest extends $tea.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  backendServerPort?: number;
  bandwidth?: number;
  connectionDrain?: string;
  connectionDrainTimeout?: number;
  description?: string;
  establishedTimeout?: number;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckType?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  persistenceTimeout?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduler?: string;
  unhealthyThreshold?: number;
  VServerGroupId?: string;
  healthCheckInterval?: number;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      description: 'Description',
      establishedTimeout: 'EstablishedTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      persistenceTimeout: 'PersistenceTimeout',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      healthCheckInterval: 'healthCheckInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      description: 'string',
      establishedTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      masterSlaveServerGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      persistenceTimeout: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      healthCheckInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerTCPListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerTCPListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLoadBalancerTCPListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLoadBalancerTCPListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerUDPListenerRequest extends $tea.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  backendServerPort?: number;
  bandwidth?: number;
  description?: string;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthyThreshold?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduler?: string;
  unhealthyThreshold?: number;
  VServerGroupId?: string;
  healthCheckExp?: string;
  healthCheckInterval?: number;
  healthCheckReq?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      description: 'Description',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      healthCheckExp: 'healthCheckExp',
      healthCheckInterval: 'healthCheckInterval',
      healthCheckReq: 'healthCheckReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      description: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      masterSlaveServerGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      healthCheckExp: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerUDPListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerUDPListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLoadBalancerUDPListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLoadBalancerUDPListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasterSlaveServerGroupRequest extends $tea.Model {
  loadBalancerId?: string;
  masterSlaveBackendServers?: string;
  masterSlaveServerGroupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      masterSlaveBackendServers: 'MasterSlaveBackendServers',
      masterSlaveServerGroupName: 'MasterSlaveServerGroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      masterSlaveBackendServers: 'string',
      masterSlaveServerGroupName: 'string',
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

export class CreateMasterSlaveServerGroupResponseBody extends $tea.Model {
  masterSlaveBackendServers?: CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServers;
  masterSlaveServerGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      masterSlaveBackendServers: 'MasterSlaveBackendServers',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveBackendServers: CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServers,
      masterSlaveServerGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasterSlaveServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMasterSlaveServerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMasterSlaveServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequest extends $tea.Model {
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ruleList?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponseBody extends $tea.Model {
  requestId?: string;
  rules?: CreateRulesResponseBodyRules;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: CreateRulesResponseBodyRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTLSCipherPolicyRequest extends $tea.Model {
  ciphers?: string[];
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTLSCipherPolicyResponseBody extends $tea.Model {
  requestId?: string;
  TLSCipherPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      TLSCipherPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTLSCipherPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTLSCipherPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTLSCipherPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVServerGroupRequest extends $tea.Model {
  backendServers?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVServerGroupResponseBody extends $tea.Model {
  backendServers?: CreateVServerGroupResponseBodyBackendServers;
  requestId?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: CreateVServerGroupResponseBodyBackendServers,
      requestId: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVServerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessControlListRequest extends $tea.Model {
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
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

export class DeleteAccessControlListResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessControlListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAccessControlListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAccessControlListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCACertificateRequest extends $tea.Model {
  CACertificateId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
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

export class DeleteCACertificateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCACertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCACertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCACertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainExtensionRequest extends $tea.Model {
  domainExtensionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainExtensionId: 'DomainExtensionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensionId: 'string',
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

export class DeleteDomainExtensionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainExtensionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDomainExtensionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDomainExtensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerRequest extends $tea.Model {
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
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

export class DeleteLoadBalancerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLoadBalancerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerListenerRequest extends $tea.Model {
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
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

export class DeleteLoadBalancerListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLoadBalancerListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLoadBalancerListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMasterSlaveServerGroupRequest extends $tea.Model {
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveServerGroupId: 'string',
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

export class DeleteMasterSlaveServerGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMasterSlaveServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMasterSlaveServerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMasterSlaveServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRulesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ruleIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRulesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerCertificateRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerCertificateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteServerCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServerCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTLSCipherPolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  TLSCipherPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      TLSCipherPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTLSCipherPolicyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTLSCipherPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTLSCipherPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTLSCipherPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVServerGroupRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVServerGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVServerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeRequest extends $tea.Model {
  aclEntryComment?: string;
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclEntryComment: 'AclEntryComment',
      aclId: 'AclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryComment: 'string',
      aclId: 'string',
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

export class DescribeAccessControlListAttributeResponseBody extends $tea.Model {
  aclEntrys?: DescribeAccessControlListAttributeResponseBodyAclEntrys;
  aclId?: string;
  aclName?: string;
  addressIPVersion?: string;
  relatedListeners?: DescribeAccessControlListAttributeResponseBodyRelatedListeners;
  requestId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntrys: 'AclEntrys',
      aclId: 'AclId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      relatedListeners: 'RelatedListeners',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntrys: DescribeAccessControlListAttributeResponseBodyAclEntrys,
      aclId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
      relatedListeners: DescribeAccessControlListAttributeResponseBodyRelatedListeners,
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccessControlListAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccessControlListAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsRequest extends $tea.Model {
  aclName?: string;
  addressIPVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclName: 'string',
      addressIPVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponseBody extends $tea.Model {
  acls?: DescribeAccessControlListsResponseBodyAcls;
  count?: number;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      count: 'Count',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: DescribeAccessControlListsResponseBodyAcls,
      count: 'number',
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

export class DescribeAccessControlListsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccessControlListsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccessControlListsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  addressIPVersion?: string;
  addressType?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIPVersion: 'string',
      addressType: 'string',
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

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  availableResources?: DescribeAvailableResourceResponseBodyAvailableResources;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: DescribeAvailableResourceResponseBodyAvailableResources,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesRequest extends $tea.Model {
  CACertificateId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesResponseBody extends $tea.Model {
  CACertificates?: DescribeCACertificatesResponseBodyCACertificates;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificates: 'CACertificates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificates: DescribeCACertificatesResponseBodyCACertificates,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCACertificatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCACertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionAttributeRequest extends $tea.Model {
  domainExtensionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainExtensionId: 'DomainExtensionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensionId: 'string',
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

export class DescribeDomainExtensionAttributeResponseBody extends $tea.Model {
  domain?: string;
  domainExtensionId?: string;
  listenerPort?: number;
  loadBalancerId?: string;
  requestId?: string;
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      domainExtensionId: 'DomainExtensionId',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      domainExtensionId: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      requestId: 'string',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainExtensionAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainExtensionAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionsRequest extends $tea.Model {
  domainExtensionId?: string;
  listenerPort?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainExtensionId: 'DomainExtensionId',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensionId: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
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

export class DescribeDomainExtensionsResponseBody extends $tea.Model {
  domainExtensions?: DescribeDomainExtensionsResponseBodyDomainExtensions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainExtensions: 'DomainExtensions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensions: DescribeDomainExtensionsResponseBodyDomainExtensions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainExtensionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainExtensionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusRequest extends $tea.Model {
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
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

export class DescribeHealthStatusResponseBody extends $tea.Model {
  backendServers?: DescribeHealthStatusResponseBodyBackendServers;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: DescribeHealthStatusResponseBodyBackendServers,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHealthStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHealthStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerAccessControlAttributeRequest extends $tea.Model {
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
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

export class DescribeListenerAccessControlAttributeResponseBody extends $tea.Model {
  accessControlStatus?: string;
  requestId?: string;
  sourceItems?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlStatus: 'AccessControlStatus',
      requestId: 'RequestId',
      sourceItems: 'SourceItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlStatus: 'string',
      requestId: 'string',
      sourceItems: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerAccessControlAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeListenerAccessControlAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeListenerAccessControlAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeRequest extends $tea.Model {
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
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

export class DescribeLoadBalancerAttributeResponseBody extends $tea.Model {
  address?: string;
  addressIPVersion?: string;
  addressType?: string;
  autoReleaseTime?: number;
  backendServers?: DescribeLoadBalancerAttributeResponseBodyBackendServers;
  bandwidth?: number;
  createTime?: string;
  createTimeStamp?: number;
  deleteProtection?: string;
  endTime?: string;
  endTimeStamp?: number;
  internetChargeType?: string;
  listenerPorts?: DescribeLoadBalancerAttributeResponseBodyListenerPorts;
  listenerPortsAndProtocal?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal;
  listenerPortsAndProtocol?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerSpec?: string;
  loadBalancerStatus?: string;
  masterZoneId?: string;
  modificationProtectionReason?: string;
  modificationProtectionStatus?: string;
  networkType?: string;
  payType?: string;
  regionId?: string;
  regionIdAlias?: string;
  renewalCycUnit?: string;
  renewalDuration?: number;
  renewalStatus?: string;
  requestId?: string;
  resourceGroupId?: string;
  slaveZoneId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      autoReleaseTime: 'AutoReleaseTime',
      backendServers: 'BackendServers',
      bandwidth: 'Bandwidth',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      deleteProtection: 'DeleteProtection',
      endTime: 'EndTime',
      endTimeStamp: 'EndTimeStamp',
      internetChargeType: 'InternetChargeType',
      listenerPorts: 'ListenerPorts',
      listenerPortsAndProtocal: 'ListenerPortsAndProtocal',
      listenerPortsAndProtocol: 'ListenerPortsAndProtocol',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      loadBalancerStatus: 'LoadBalancerStatus',
      masterZoneId: 'MasterZoneId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      networkType: 'NetworkType',
      payType: 'PayType',
      regionId: 'RegionId',
      regionIdAlias: 'RegionIdAlias',
      renewalCycUnit: 'RenewalCycUnit',
      renewalDuration: 'RenewalDuration',
      renewalStatus: 'RenewalStatus',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      slaveZoneId: 'SlaveZoneId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      autoReleaseTime: 'number',
      backendServers: DescribeLoadBalancerAttributeResponseBodyBackendServers,
      bandwidth: 'number',
      createTime: 'string',
      createTimeStamp: 'number',
      deleteProtection: 'string',
      endTime: 'string',
      endTimeStamp: 'number',
      internetChargeType: 'string',
      listenerPorts: DescribeLoadBalancerAttributeResponseBodyListenerPorts,
      listenerPortsAndProtocal: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal,
      listenerPortsAndProtocol: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol,
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      loadBalancerStatus: 'string',
      masterZoneId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      networkType: 'string',
      payType: 'string',
      regionId: 'string',
      regionIdAlias: 'string',
      renewalCycUnit: 'string',
      renewalDuration: 'number',
      renewalStatus: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      slaveZoneId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLoadBalancerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLoadBalancerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeRequest extends $tea.Model {
  listenerPort?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      loadBalancerId: 'string',
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

export class DescribeLoadBalancerHTTPListenerAttributeResponseBody extends $tea.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  backendServerPort?: number;
  bandwidth?: number;
  cookie?: string;
  cookieTimeout?: number;
  description?: string;
  forwardPort?: number;
  gzip?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  listenerForward?: string;
  listenerPort?: number;
  requestId?: string;
  requestTimeout?: number;
  rules?: DescribeLoadBalancerHTTPListenerAttributeResponseBodyRules;
  scheduler?: string;
  securityStatus?: string;
  status?: string;
  stickySession?: string;
  stickySessionType?: string;
  unhealthyThreshold?: number;
  VServerGroupId?: string;
  XForwardedFor?: string;
  XForwardedFor_SLBID?: string;
  XForwardedFor_SLBIP?: string;
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      forwardPort: 'ForwardPort',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      requestId: 'RequestId',
      requestTimeout: 'RequestTimeout',
      rules: 'Rules',
      scheduler: 'Scheduler',
      securityStatus: 'SecurityStatus',
      status: 'Status',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      forwardPort: 'number',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      requestId: 'string',
      requestTimeout: 'number',
      rules: DescribeLoadBalancerHTTPListenerAttributeResponseBodyRules,
      scheduler: 'string',
      securityStatus: 'string',
      status: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLoadBalancerHTTPListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLoadBalancerHTTPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeRequest extends $tea.Model {
  listenerPort?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      loadBalancerId: 'string',
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

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBody extends $tea.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  backendServerPort?: number;
  bandwidth?: number;
  CACertificateId?: string;
  cookie?: string;
  cookieTimeout?: number;
  description?: string;
  domainExtensions?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensions;
  enableHttp2?: string;
  gzip?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  listenerPort?: number;
  requestId?: string;
  requestTimeout?: number;
  rules?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRules;
  scheduler?: string;
  securityStatus?: string;
  serverCertificateId?: string;
  status?: string;
  stickySession?: string;
  stickySessionType?: string;
  TLSCipherPolicy?: string;
  unhealthyThreshold?: number;
  VServerGroupId?: string;
  XForwardedFor?: string;
  XForwardedFor_ClientCertClientVerify?: string;
  XForwardedFor_ClientCertFingerprint?: string;
  XForwardedFor_ClientCertIssuerDN?: string;
  XForwardedFor_ClientCertSubjectDN?: string;
  XForwardedFor_ClientSrcPort?: string;
  XForwardedFor_SLBID?: string;
  XForwardedFor_SLBIP?: string;
  XForwardedFor_SLBPORT?: string;
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      CACertificateId: 'CACertificateId',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      domainExtensions: 'DomainExtensions',
      enableHttp2: 'EnableHttp2',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      requestId: 'RequestId',
      requestTimeout: 'RequestTimeout',
      rules: 'Rules',
      scheduler: 'Scheduler',
      securityStatus: 'SecurityStatus',
      serverCertificateId: 'ServerCertificateId',
      status: 'Status',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      TLSCipherPolicy: 'TLSCipherPolicy',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientCertClientVerify: 'XForwardedFor_ClientCertClientVerify',
      XForwardedFor_ClientCertFingerprint: 'XForwardedFor_ClientCertFingerprint',
      XForwardedFor_ClientCertIssuerDN: 'XForwardedFor_ClientCertIssuerDN',
      XForwardedFor_ClientCertSubjectDN: 'XForwardedFor_ClientCertSubjectDN',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      CACertificateId: 'string',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      domainExtensions: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensions,
      enableHttp2: 'string',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      requestId: 'string',
      requestTimeout: 'number',
      rules: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRules,
      scheduler: 'string',
      securityStatus: 'string',
      serverCertificateId: 'string',
      status: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      TLSCipherPolicy: 'string',
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_ClientCertClientVerify: 'string',
      XForwardedFor_ClientCertFingerprint: 'string',
      XForwardedFor_ClientCertIssuerDN: 'string',
      XForwardedFor_ClientCertSubjectDN: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLoadBalancerHTTPSListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLoadBalancerHTTPSListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersRequest extends $tea.Model {
  listenerProtocol?: string;
  loadBalancerId?: string[];
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerProtocol: 'string',
      loadBalancerId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
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

export class DescribeLoadBalancerListenersResponseBody extends $tea.Model {
  listeners?: DescribeLoadBalancerListenersResponseBodyListeners[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': DescribeLoadBalancerListenersResponseBodyListeners },
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

export class DescribeLoadBalancerListenersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLoadBalancerListenersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLoadBalancerListenersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeRequest extends $tea.Model {
  listenerPort?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      loadBalancerId: 'string',
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

export class DescribeLoadBalancerTCPListenerAttributeResponseBody extends $tea.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  backendServerPort?: number;
  bandwidth?: number;
  connectionDrain?: string;
  connectionDrainTimeout?: number;
  description?: string;
  establishedTimeout?: number;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckType?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  listenerPort?: number;
  masterSlaveServerGroupId?: string;
  persistenceTimeout?: number;
  requestId?: string;
  scheduler?: string;
  status?: string;
  synProxy?: string;
  unhealthyThreshold?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      description: 'Description',
      establishedTimeout: 'EstablishedTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      persistenceTimeout: 'PersistenceTimeout',
      requestId: 'RequestId',
      scheduler: 'Scheduler',
      status: 'Status',
      synProxy: 'SynProxy',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      description: 'string',
      establishedTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      masterSlaveServerGroupId: 'string',
      persistenceTimeout: 'number',
      requestId: 'string',
      scheduler: 'string',
      status: 'string',
      synProxy: 'string',
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLoadBalancerTCPListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLoadBalancerTCPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerUDPListenerAttributeRequest extends $tea.Model {
  listenerPort?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      loadBalancerId: 'string',
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

export class DescribeLoadBalancerUDPListenerAttributeResponseBody extends $tea.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  backendServerPort?: number;
  bandwidth?: number;
  description?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckExp?: string;
  healthCheckInterval?: number;
  healthCheckReq?: string;
  healthyThreshold?: number;
  listenerPort?: number;
  masterSlaveServerGroupId?: string;
  requestId?: string;
  scheduler?: string;
  status?: string;
  unhealthyThreshold?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      description: 'Description',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckExp: 'HealthCheckExp',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      requestId: 'RequestId',
      scheduler: 'Scheduler',
      status: 'Status',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      description: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckExp: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      masterSlaveServerGroupId: 'string',
      requestId: 'string',
      scheduler: 'string',
      status: 'string',
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerUDPListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLoadBalancerUDPListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLoadBalancerUDPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersRequest extends $tea.Model {
  address?: string;
  addressIPVersion?: string;
  addressType?: string;
  internetChargeType?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerStatus?: string;
  masterZoneId?: string;
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  payType?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serverId?: string;
  serverIntranetAddress?: string;
  slaveZoneId?: string;
  tags?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      internetChargeType: 'InternetChargeType',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      masterZoneId: 'MasterZoneId',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverId: 'ServerId',
      serverIntranetAddress: 'ServerIntranetAddress',
      slaveZoneId: 'SlaveZoneId',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      internetChargeType: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      masterZoneId: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      payType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverId: 'string',
      serverIntranetAddress: 'string',
      slaveZoneId: 'string',
      tags: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBody extends $tea.Model {
  loadBalancers?: DescribeLoadBalancersResponseBodyLoadBalancers;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancers: 'LoadBalancers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancers: DescribeLoadBalancersResponseBodyLoadBalancers,
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

export class DescribeLoadBalancersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLoadBalancersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLoadBalancersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupAttributeRequest extends $tea.Model {
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveServerGroupId: 'string',
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

export class DescribeMasterSlaveServerGroupAttributeResponseBody extends $tea.Model {
  loadBalancerId?: string;
  masterSlaveBackendServers?: DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServers;
  masterSlaveServerGroupId?: string;
  masterSlaveServerGroupName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      masterSlaveBackendServers: 'MasterSlaveBackendServers',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      masterSlaveServerGroupName: 'MasterSlaveServerGroupName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      masterSlaveBackendServers: DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServers,
      masterSlaveServerGroupId: 'string',
      masterSlaveServerGroupName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMasterSlaveServerGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMasterSlaveServerGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsRequest extends $tea.Model {
  includeListener?: boolean;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      includeListener: 'IncludeListener',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeListener: 'boolean',
      loadBalancerId: 'string',
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

export class DescribeMasterSlaveServerGroupsResponseBody extends $tea.Model {
  masterSlaveServerGroups?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroups;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      masterSlaveServerGroups: 'MasterSlaveServerGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveServerGroups: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroups,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMasterSlaveServerGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMasterSlaveServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
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

export class DescribeRuleAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleAttributeResponseBody extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  domain?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  listenerPort?: string;
  listenerSync?: string;
  loadBalancerId?: string;
  requestId?: string;
  ruleId?: string;
  ruleName?: string;
  scheduler?: string;
  stickySession?: string;
  stickySessionType?: string;
  unhealthyThreshold?: number;
  url?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      domain: 'Domain',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      listenerSync: 'ListenerSync',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      url: 'Url',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      domain: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'string',
      listenerSync: 'string',
      loadBalancerId: 'string',
      requestId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      url: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRuleAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRuleAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesRequest extends $tea.Model {
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
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

export class DescribeRulesResponseBody extends $tea.Model {
  requestId?: string;
  rules?: DescribeRulesResponseBodyRules;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: DescribeRulesResponseBodyRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBody extends $tea.Model {
  requestId?: string;
  serverCertificates?: DescribeServerCertificatesResponseBodyServerCertificates;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverCertificates: 'ServerCertificates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverCertificates: DescribeServerCertificatesResponseBodyServerCertificates,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeServerCertificatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeServerCertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsRequest extends $tea.Model {
  distinctKey?: boolean;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      distinctKey: 'DistinctKey',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distinctKey: 'boolean',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tagSets?: DescribeTagsResponseBodyTagSets;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagSets: 'TagSets',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagSets: DescribeTagsResponseBodyTagSets,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupAttributeResponseBody extends $tea.Model {
  backendServers?: DescribeVServerGroupAttributeResponseBodyBackendServers;
  loadBalancerId?: string;
  requestId?: string;
  VServerGroupId?: string;
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: DescribeVServerGroupAttributeResponseBodyBackendServers,
      loadBalancerId: 'string',
      requestId: 'string',
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVServerGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVServerGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsRequest extends $tea.Model {
  includeListener?: boolean;
  includeRule?: boolean;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      includeListener: 'IncludeListener',
      includeRule: 'IncludeRule',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeListener: 'boolean',
      includeRule: 'boolean',
      loadBalancerId: 'string',
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

export class DescribeVServerGroupsResponseBody extends $tea.Model {
  requestId?: string;
  VServerGroups?: DescribeVServerGroupsResponseBodyVServerGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      VServerGroups: 'VServerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      VServerGroups: DescribeVServerGroupsResponseBodyVServerGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVServerGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListTLSCipherPoliciesRequest extends $tea.Model {
  includeListener?: boolean;
  maxItems?: number;
  name?: string;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  TLSCipherPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      includeListener: 'IncludeListener',
      maxItems: 'MaxItems',
      name: 'Name',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeListener: 'boolean',
      maxItems: 'number',
      name: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      TLSCipherPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTLSCipherPoliciesResponseBody extends $tea.Model {
  isTruncated?: boolean;
  nextToken?: string;
  requestId?: string;
  TLSCipherPolicies?: ListTLSCipherPoliciesResponseBodyTLSCipherPolicies[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      TLSCipherPolicies: 'TLSCipherPolicies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      nextToken: 'string',
      requestId: 'string',
      TLSCipherPolicies: { 'type': 'array', 'itemType': ListTLSCipherPoliciesResponseBodyTLSCipherPolicies },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTLSCipherPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTLSCipherPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTLSCipherPoliciesResponseBody,
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

export class ModifyLoadBalancerInstanceSpecRequest extends $tea.Model {
  autoPay?: boolean;
  loadBalancerId?: string;
  loadBalancerSpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerSpec: 'LoadBalancerSpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      loadBalancerId: 'string',
      loadBalancerSpec: 'string',
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

export class ModifyLoadBalancerInstanceSpecResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerInstanceSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLoadBalancerInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLoadBalancerInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerInternetSpecRequest extends $tea.Model {
  autoPay?: boolean;
  bandwidth?: number;
  internetChargeType?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bandwidth: 'number',
      internetChargeType: 'string',
      loadBalancerId: 'string',
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

export class ModifyLoadBalancerInternetSpecResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerInternetSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLoadBalancerInternetSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLoadBalancerInternetSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerPayTypeRequest extends $tea.Model {
  autoPay?: boolean;
  duration?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  payType?: string;
  pricingCycle?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      duration: 'Duration',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      duration: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerPayTypeResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerPayTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLoadBalancerPayTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLoadBalancerPayTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVServerGroupBackendServersRequest extends $tea.Model {
  newBackendServers?: string;
  oldBackendServers?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      newBackendServers: 'NewBackendServers',
      oldBackendServers: 'OldBackendServers',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newBackendServers: 'string',
      oldBackendServers: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVServerGroupBackendServersResponseBody extends $tea.Model {
  backendServers?: ModifyVServerGroupBackendServersResponseBodyBackendServers;
  requestId?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: ModifyVServerGroupBackendServersResponseBodyBackendServers,
      requestId: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVServerGroupBackendServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyVServerGroupBackendServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVServerGroupBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAccessControlListEntryRequest extends $tea.Model {
  aclEntrys?: string;
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclEntrys: 'AclEntrys',
      aclId: 'AclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntrys: 'string',
      aclId: 'string',
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

export class RemoveAccessControlListEntryResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAccessControlListEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveAccessControlListEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveAccessControlListEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersRequest extends $tea.Model {
  backendServers?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      loadBalancerId: 'string',
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

export class RemoveBackendServersResponseBody extends $tea.Model {
  backendServers?: RemoveBackendServersResponseBodyBackendServers;
  loadBalancerId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: RemoveBackendServersResponseBodyBackendServers,
      loadBalancerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveBackendServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveListenerWhiteListItemRequest extends $tea.Model {
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sourceItems?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceItems: 'SourceItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceItems: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveListenerWhiteListItemResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveListenerWhiteListItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveListenerWhiteListItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveListenerWhiteListItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsRequest extends $tea.Model {
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVServerGroupBackendServersRequest extends $tea.Model {
  backendServers?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVServerGroupBackendServersResponseBody extends $tea.Model {
  backendServers?: RemoveVServerGroupBackendServersResponseBodyBackendServers;
  requestId?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: RemoveVServerGroupBackendServersResponseBodyBackendServers,
      requestId: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVServerGroupBackendServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveVServerGroupBackendServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveVServerGroupBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccessControlListAttributeRequest extends $tea.Model {
  aclId?: string;
  aclName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
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

export class SetAccessControlListAttributeResponseBody extends $tea.Model {
  aclId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccessControlListAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetAccessControlListAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAccessControlListAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersRequest extends $tea.Model {
  backendServers?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      loadBalancerId: 'string',
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

export class SetBackendServersResponseBody extends $tea.Model {
  backendServers?: SetBackendServersResponseBodyBackendServers;
  loadBalancerId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: SetBackendServersResponseBodyBackendServers,
      loadBalancerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetBackendServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCACertificateNameRequest extends $tea.Model {
  CACertificateId?: string;
  CACertificateName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      CACertificateName: 'CACertificateName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      CACertificateName: 'string',
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

export class SetCACertificateNameResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCACertificateNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetCACertificateNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetCACertificateNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainExtensionAttributeRequest extends $tea.Model {
  domainExtensionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domainExtensionId: 'DomainExtensionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainExtensionAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainExtensionAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDomainExtensionAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDomainExtensionAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetListenerAccessControlStatusRequest extends $tea.Model {
  accessControlStatus?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessControlStatus: 'AccessControlStatus',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlStatus: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
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

export class SetListenerAccessControlStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetListenerAccessControlStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetListenerAccessControlStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetListenerAccessControlStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerDeleteProtectionRequest extends $tea.Model {
  deleteProtection?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      deleteProtection: 'DeleteProtection',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteProtection: 'string',
      loadBalancerId: 'string',
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

export class SetLoadBalancerDeleteProtectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerDeleteProtectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetLoadBalancerDeleteProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetLoadBalancerDeleteProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPListenerAttributeRequest extends $tea.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  bandwidth?: number;
  cookie?: string;
  cookieTimeout?: number;
  description?: string;
  gzip?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  requestTimeout?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduler?: string;
  stickySession?: string;
  stickySessionType?: string;
  unhealthyThreshold?: number;
  VServerGroup?: string;
  VServerGroupId?: string;
  XForwardedFor?: string;
  XForwardedFor_SLBID?: string;
  XForwardedFor_SLBIP?: string;
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      bandwidth: 'Bandwidth',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      requestTimeout: 'RequestTimeout',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      bandwidth: 'number',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      requestTimeout: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      VServerGroup: 'string',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPListenerAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetLoadBalancerHTTPListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetLoadBalancerHTTPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPSListenerAttributeRequest extends $tea.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  bandwidth?: number;
  CACertificateId?: string;
  cookie?: string;
  cookieTimeout?: number;
  description?: string;
  enableHttp2?: string;
  gzip?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  requestTimeout?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduler?: string;
  serverCertificateId?: string;
  stickySession?: string;
  stickySessionType?: string;
  TLSCipherPolicy?: string;
  unhealthyThreshold?: number;
  VServerGroup?: string;
  VServerGroupId?: string;
  XForwardedFor?: string;
  XForwardedFor_SLBID?: string;
  XForwardedFor_SLBIP?: string;
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      bandwidth: 'Bandwidth',
      CACertificateId: 'CACertificateId',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      enableHttp2: 'EnableHttp2',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      requestTimeout: 'RequestTimeout',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      serverCertificateId: 'ServerCertificateId',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      TLSCipherPolicy: 'TLSCipherPolicy',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      bandwidth: 'number',
      CACertificateId: 'string',
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      enableHttp2: 'string',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      requestTimeout: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      serverCertificateId: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      TLSCipherPolicy: 'string',
      unhealthyThreshold: 'number',
      VServerGroup: 'string',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPSListenerAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPSListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetLoadBalancerHTTPSListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetLoadBalancerHTTPSListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerModificationProtectionRequest extends $tea.Model {
  loadBalancerId?: string;
  modificationProtectionReason?: string;
  modificationProtectionStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
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

export class SetLoadBalancerModificationProtectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerModificationProtectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetLoadBalancerModificationProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetLoadBalancerModificationProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerNameRequest extends $tea.Model {
  loadBalancerId?: string;
  loadBalancerName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerName: 'string',
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

export class SetLoadBalancerNameResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetLoadBalancerNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetLoadBalancerNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerStatusRequest extends $tea.Model {
  loadBalancerId?: string;
  loadBalancerStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      loadBalancerStatus: 'LoadBalancerStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerStatus: 'string',
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

export class SetLoadBalancerStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetLoadBalancerStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetLoadBalancerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerTCPListenerAttributeRequest extends $tea.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  bandwidth?: number;
  connectionDrain?: string;
  connectionDrainTimeout?: number;
  description?: string;
  establishedTimeout?: number;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckType?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  masterSlaveServerGroup?: string;
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  persistenceTimeout?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduler?: string;
  synProxy?: string;
  unhealthyThreshold?: number;
  VServerGroup?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      bandwidth: 'Bandwidth',
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      description: 'Description',
      establishedTimeout: 'EstablishedTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroup: 'MasterSlaveServerGroup',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      persistenceTimeout: 'PersistenceTimeout',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      synProxy: 'SynProxy',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      bandwidth: 'number',
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      description: 'string',
      establishedTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      masterSlaveServerGroup: 'string',
      masterSlaveServerGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      persistenceTimeout: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      synProxy: 'string',
      unhealthyThreshold: 'number',
      VServerGroup: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerTCPListenerAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerTCPListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetLoadBalancerTCPListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetLoadBalancerTCPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerUDPListenerAttributeRequest extends $tea.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  bandwidth?: number;
  description?: string;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckInterval?: number;
  healthyThreshold?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  masterSlaveServerGroup?: string;
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduler?: string;
  unhealthyThreshold?: number;
  VServerGroup?: string;
  VServerGroupId?: string;
  healthCheckExp?: string;
  healthCheckReq?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      bandwidth: 'Bandwidth',
      description: 'Description',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckInterval: 'HealthCheckInterval',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroup: 'MasterSlaveServerGroup',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
      healthCheckExp: 'healthCheckExp',
      healthCheckReq: 'healthCheckReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      bandwidth: 'number',
      description: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckInterval: 'number',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      masterSlaveServerGroup: 'string',
      masterSlaveServerGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      unhealthyThreshold: 'number',
      VServerGroup: 'string',
      VServerGroupId: 'string',
      healthCheckExp: 'string',
      healthCheckReq: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerUDPListenerAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerUDPListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetLoadBalancerUDPListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetLoadBalancerUDPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRuleRequest extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  listenerSync?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ruleId?: string;
  ruleName?: string;
  scheduler?: string;
  stickySession?: string;
  stickySessionType?: string;
  unhealthyThreshold?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerSync: 'ListenerSync',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerSync: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleId: 'string',
      ruleName: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServerCertificateNameRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serverCertificateId?: string;
  serverCertificateName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificateId: 'ServerCertificateId',
      serverCertificateName: 'ServerCertificateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificateId: 'string',
      serverCertificateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServerCertificateNameResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServerCertificateNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetServerCertificateNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetServerCertificateNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTLSCipherPolicyAttributeRequest extends $tea.Model {
  ciphers?: string[];
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  TLSCipherPolicyId?: string;
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      TLSCipherPolicyId: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTLSCipherPolicyAttributeResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTLSCipherPolicyAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetTLSCipherPolicyAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetTLSCipherPolicyAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVServerGroupAttributeRequest extends $tea.Model {
  backendServers?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  VServerGroupId?: string;
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVServerGroupAttributeResponseBody extends $tea.Model {
  backendServers?: SetVServerGroupAttributeResponseBodyBackendServers;
  requestId?: string;
  VServerGroupId?: string;
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: SetVServerGroupAttributeResponseBodyBackendServers,
      requestId: 'string',
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVServerGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetVServerGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetVServerGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLoadBalancerListenerRequest extends $tea.Model {
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
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

export class StartLoadBalancerListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLoadBalancerListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartLoadBalancerListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartLoadBalancerListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLoadBalancerListenerRequest extends $tea.Model {
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
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

export class StopLoadBalancerListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLoadBalancerListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopLoadBalancerListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopLoadBalancerListenerResponseBody,
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

export class UploadCACertificateRequest extends $tea.Model {
  CACertificate?: string;
  CACertificateName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      CACertificate: 'CACertificate',
      CACertificateName: 'CACertificateName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificate: 'string',
      CACertificateName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCACertificateResponseBody extends $tea.Model {
  CACertificateId?: string;
  CACertificateName?: string;
  commonName?: string;
  createTime?: string;
  createTimeStamp?: number;
  expireTime?: string;
  expireTimeStamp?: number;
  fingerprint?: string;
  requestId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      CACertificateName: 'CACertificateName',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      expireTime: 'ExpireTime',
      expireTimeStamp: 'ExpireTimeStamp',
      fingerprint: 'Fingerprint',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      CACertificateName: 'string',
      commonName: 'string',
      createTime: 'string',
      createTimeStamp: 'number',
      expireTime: 'string',
      expireTimeStamp: 'number',
      fingerprint: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCACertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadCACertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadCACertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadServerCertificateRequest extends $tea.Model {
  aliCloudCertificateId?: string;
  aliCloudCertificateName?: string;
  aliCloudCertificateRegionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  privateKey?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serverCertificate?: string;
  serverCertificateName?: string;
  static names(): { [key: string]: string } {
    return {
      aliCloudCertificateId: 'AliCloudCertificateId',
      aliCloudCertificateName: 'AliCloudCertificateName',
      aliCloudCertificateRegionId: 'AliCloudCertificateRegionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privateKey: 'PrivateKey',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificate: 'ServerCertificate',
      serverCertificateName: 'ServerCertificateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliCloudCertificateId: 'string',
      aliCloudCertificateName: 'string',
      aliCloudCertificateRegionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privateKey: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificate: 'string',
      serverCertificateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadServerCertificateResponseBody extends $tea.Model {
  aliCloudCertificateId?: string;
  aliCloudCertificateName?: string;
  commonName?: string;
  createTime?: string;
  createTimeStamp?: number;
  expireTime?: string;
  expireTimeStamp?: number;
  fingerprint?: string;
  isAliCloudCertificate?: number;
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  serverCertificateId?: string;
  serverCertificateName?: string;
  subjectAlternativeNames?: UploadServerCertificateResponseBodySubjectAlternativeNames;
  static names(): { [key: string]: string } {
    return {
      aliCloudCertificateId: 'AliCloudCertificateId',
      aliCloudCertificateName: 'AliCloudCertificateName',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      expireTime: 'ExpireTime',
      expireTimeStamp: 'ExpireTimeStamp',
      fingerprint: 'Fingerprint',
      isAliCloudCertificate: 'IsAliCloudCertificate',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      serverCertificateId: 'ServerCertificateId',
      serverCertificateName: 'ServerCertificateName',
      subjectAlternativeNames: 'SubjectAlternativeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliCloudCertificateId: 'string',
      aliCloudCertificateName: 'string',
      commonName: 'string',
      createTime: 'string',
      createTimeStamp: 'number',
      expireTime: 'string',
      expireTimeStamp: 'number',
      fingerprint: 'string',
      isAliCloudCertificate: 'number',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      serverCertificateId: 'string',
      serverCertificateName: 'string',
      subjectAlternativeNames: UploadServerCertificateResponseBodySubjectAlternativeNames,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadServerCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadServerCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadServerCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  description?: string;
  serverId?: string;
  type?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      serverId: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: AddBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': AddBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVServerGroupBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  description?: string;
  port?: number;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVServerGroupBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: AddVServerGroupBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': AddVServerGroupBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer extends $tea.Model {
  description?: string;
  port?: number;
  serverId?: string;
  serverType?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverType: 'ServerType',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverType: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServers extends $tea.Model {
  masterSlaveBackendServer?: CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer[];
  static names(): { [key: string]: string } {
    return {
      masterSlaveBackendServer: 'MasterSlaveBackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveBackendServer: { 'type': 'array', 'itemType': CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponseBodyRulesRule extends $tea.Model {
  ruleId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponseBodyRules extends $tea.Model {
  rule?: CreateRulesResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': CreateRulesResponseBodyRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVServerGroupResponseBodyBackendServersBackendServer extends $tea.Model {
  description?: string;
  port?: number;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVServerGroupResponseBodyBackendServers extends $tea.Model {
  backendServer?: CreateVServerGroupResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': CreateVServerGroupResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry extends $tea.Model {
  aclEntryComment?: string;
  aclEntryIP?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryComment: 'AclEntryComment',
      aclEntryIP: 'AclEntryIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryComment: 'string',
      aclEntryIP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBodyAclEntrys extends $tea.Model {
  aclEntry?: DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry[];
  static names(): { [key: string]: string } {
    return {
      aclEntry: 'AclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntry: { 'type': 'array', 'itemType': DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBodyRelatedListenersRelatedListener extends $tea.Model {
  aclType?: string;
  listenerPort?: number;
  loadBalancerId?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBodyRelatedListeners extends $tea.Model {
  relatedListener?: DescribeAccessControlListAttributeResponseBodyRelatedListenersRelatedListener[];
  static names(): { [key: string]: string } {
    return {
      relatedListener: 'RelatedListener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedListener: { 'type': 'array', 'itemType': DescribeAccessControlListAttributeResponseBodyRelatedListenersRelatedListener },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponseBodyAclsAcl extends $tea.Model {
  aclId?: string;
  aclName?: string;
  addressIPVersion?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponseBodyAcls extends $tea.Model {
  acl?: DescribeAccessControlListsResponseBodyAclsAcl[];
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: { 'type': 'array', 'itemType': DescribeAccessControlListsResponseBodyAclsAcl },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResourcesSupportResource extends $tea.Model {
  addressIPVersion?: string;
  addressType?: string;
  static names(): { [key: string]: string } {
    return {
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIPVersion: 'string',
      addressType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResources extends $tea.Model {
  supportResource?: DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResourcesSupportResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResource extends $tea.Model {
  masterZoneId?: string;
  slaveZoneId?: string;
  supportResources?: DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResources;
  static names(): { [key: string]: string } {
    return {
      masterZoneId: 'MasterZoneId',
      slaveZoneId: 'SlaveZoneId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterZoneId: 'string',
      slaveZoneId: 'string',
      supportResources: DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableResources extends $tea.Model {
  availableResource?: DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesResponseBodyCACertificatesCACertificate extends $tea.Model {
  CACertificateId?: string;
  CACertificateName?: string;
  commonName?: string;
  createTime?: string;
  createTimeStamp?: number;
  expireTime?: string;
  expireTimeStamp?: number;
  fingerprint?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      CACertificateName: 'CACertificateName',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      expireTime: 'ExpireTime',
      expireTimeStamp: 'ExpireTimeStamp',
      fingerprint: 'Fingerprint',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      CACertificateName: 'string',
      commonName: 'string',
      createTime: 'string',
      createTimeStamp: 'number',
      expireTime: 'string',
      expireTimeStamp: 'number',
      fingerprint: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesResponseBodyCACertificates extends $tea.Model {
  CACertificate?: DescribeCACertificatesResponseBodyCACertificatesCACertificate[];
  static names(): { [key: string]: string } {
    return {
      CACertificate: 'CACertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificate: { 'type': 'array', 'itemType': DescribeCACertificatesResponseBodyCACertificatesCACertificate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionsResponseBodyDomainExtensionsDomainExtension extends $tea.Model {
  domain?: string;
  domainExtensionId?: string;
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      domainExtensionId: 'DomainExtensionId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      domainExtensionId: 'string',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionsResponseBodyDomainExtensions extends $tea.Model {
  domainExtension?: DescribeDomainExtensionsResponseBodyDomainExtensionsDomainExtension[];
  static names(): { [key: string]: string } {
    return {
      domainExtension: 'DomainExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtension: { 'type': 'array', 'itemType': DescribeDomainExtensionsResponseBodyDomainExtensionsDomainExtension },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyBackendServersBackendServer extends $tea.Model {
  listenerPort?: number;
  port?: number;
  protocol?: string;
  serverHealthStatus?: string;
  serverId?: string;
  serverIp?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      port: 'Port',
      protocol: 'Protocol',
      serverHealthStatus: 'ServerHealthStatus',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      port: 'number',
      protocol: 'string',
      serverHealthStatus: 'string',
      serverId: 'string',
      serverIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyBackendServers extends $tea.Model {
  backendServer?: DescribeHealthStatusResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': DescribeHealthStatusResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyBackendServersBackendServer extends $tea.Model {
  description?: string;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyBackendServers extends $tea.Model {
  backendServer?: DescribeLoadBalancerAttributeResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPorts extends $tea.Model {
  listenerPort?: number[];
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocalListenerPortAndProtocal extends $tea.Model {
  listenerPort?: number;
  listenerProtocal?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocal: 'ListenerProtocal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal extends $tea.Model {
  listenerPortAndProtocal?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocalListenerPortAndProtocal[];
  static names(): { [key: string]: string } {
    return {
      listenerPortAndProtocal: 'ListenerPortAndProtocal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPortAndProtocal: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocalListenerPortAndProtocal },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocolListenerPortAndProtocol extends $tea.Model {
  description?: string;
  forwardPort?: number;
  listenerForward?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      forwardPort: 'ForwardPort',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      forwardPort: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol extends $tea.Model {
  listenerPortAndProtocol?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocolListenerPortAndProtocol[];
  static names(): { [key: string]: string } {
    return {
      listenerPortAndProtocol: 'ListenerPortAndProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPortAndProtocol: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocolListenerPortAndProtocol },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeResponseBodyRulesRule extends $tea.Model {
  domain?: string;
  ruleId?: string;
  ruleName?: string;
  url?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      url: 'Url',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ruleId: 'string',
      ruleName: 'string',
      url: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeResponseBodyRules extends $tea.Model {
  rule?: DescribeLoadBalancerHTTPListenerAttributeResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeLoadBalancerHTTPListenerAttributeResponseBodyRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensionsDomainExtension extends $tea.Model {
  domain?: string;
  domainExtensionId?: string;
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      domainExtensionId: 'DomainExtensionId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      domainExtensionId: 'string',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensions extends $tea.Model {
  domainExtension?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensionsDomainExtension[];
  static names(): { [key: string]: string } {
    return {
      domainExtension: 'DomainExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtension: { 'type': 'array', 'itemType': DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensionsDomainExtension },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRulesRule extends $tea.Model {
  domain?: string;
  ruleId?: string;
  ruleName?: string;
  url?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      url: 'Url',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ruleId: 'string',
      ruleName: 'string',
      url: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRules extends $tea.Model {
  rule?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersHTTPListenerConfig extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  forwardPort?: number;
  gzip?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckHttpVersion?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckType?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  listenerForward?: string;
  requestTimeout?: number;
  stickySession?: string;
  stickySessionType?: string;
  unhealthyThreshold?: number;
  XForwardedFor?: string;
  XForwardedFor_ClientSrcPort?: string;
  XForwardedFor_SLBID?: string;
  XForwardedFor_SLBIP?: string;
  XForwardedFor_SLBPORT?: string;
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      forwardPort: 'ForwardPort',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerForward: 'ListenerForward',
      requestTimeout: 'RequestTimeout',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      forwardPort: 'number',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerForward: 'string',
      requestTimeout: 'number',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      XForwardedFor: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersHTTPSListenerConfig extends $tea.Model {
  CACertificateId?: string;
  cookie?: string;
  cookieTimeout?: number;
  enableHttp2?: string;
  gzip?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckHttpVersion?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckType?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  requestTimeout?: number;
  serverCertificateId?: string;
  stickySession?: string;
  stickySessionType?: string;
  TLSCipherPolicy?: string;
  unhealthyThreshold?: number;
  XForwardedFor?: string;
  XForwardedFor_ClientCertClientVerify?: string;
  XForwardedFor_ClientCertFingerprint?: string;
  XForwardedFor_ClientCertIssuerDN?: string;
  XForwardedFor_ClientCertSubjectDN?: string;
  XForwardedFor_ClientSrcPort?: string;
  XForwardedFor_SLBID?: string;
  XForwardedFor_SLBIP?: string;
  XForwardedFor_SLBPORT?: string;
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      enableHttp2: 'EnableHttp2',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      requestTimeout: 'RequestTimeout',
      serverCertificateId: 'ServerCertificateId',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      TLSCipherPolicy: 'TLSCipherPolicy',
      unhealthyThreshold: 'UnhealthyThreshold',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientCertClientVerify: 'XForwardedFor_ClientCertClientVerify',
      XForwardedFor_ClientCertFingerprint: 'XForwardedFor_ClientCertFingerprint',
      XForwardedFor_ClientCertIssuerDN: 'XForwardedFor_ClientCertIssuerDN',
      XForwardedFor_ClientCertSubjectDN: 'XForwardedFor_ClientCertSubjectDN',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      cookie: 'string',
      cookieTimeout: 'number',
      enableHttp2: 'string',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      requestTimeout: 'number',
      serverCertificateId: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      TLSCipherPolicy: 'string',
      unhealthyThreshold: 'number',
      XForwardedFor: 'string',
      XForwardedFor_ClientCertClientVerify: 'string',
      XForwardedFor_ClientCertFingerprint: 'string',
      XForwardedFor_ClientCertIssuerDN: 'string',
      XForwardedFor_ClientCertSubjectDN: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBPORT: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersTCPListenerConfig extends $tea.Model {
  connectionDrain?: string;
  connectionDrainTimeout?: number;
  establishedTimeout?: number;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckType?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  masterSlaveServerGroupId?: string;
  persistenceTimeout?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      establishedTimeout: 'EstablishedTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      persistenceTimeout: 'PersistenceTimeout',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      establishedTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      masterSlaveServerGroupId: 'string',
      persistenceTimeout: 'number',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersUDPListenerConfig extends $tea.Model {
  connectionDrain?: string;
  connectionDrainTimeout?: number;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckExp?: string;
  healthCheckInterval?: number;
  healthCheckReq?: string;
  healthyThreshold?: number;
  masterSlaveServerGroupId?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckExp: 'HealthCheckExp',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthyThreshold: 'HealthyThreshold',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckExp: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthyThreshold: 'number',
      masterSlaveServerGroupId: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListeners extends $tea.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  backendServerPort?: number;
  bandwidth?: number;
  description?: string;
  HTTPListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersHTTPListenerConfig;
  HTTPSListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersHTTPSListenerConfig;
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  scheduler?: string;
  status?: string;
  TCPListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersTCPListenerConfig;
  UDPListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersUDPListenerConfig;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      description: 'Description',
      HTTPListenerConfig: 'HTTPListenerConfig',
      HTTPSListenerConfig: 'HTTPSListenerConfig',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      scheduler: 'Scheduler',
      status: 'Status',
      TCPListenerConfig: 'TCPListenerConfig',
      UDPListenerConfig: 'UDPListenerConfig',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      description: 'string',
      HTTPListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersHTTPListenerConfig,
      HTTPSListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersHTTPSListenerConfig,
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      scheduler: 'string',
      status: 'string',
      TCPListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersTCPListenerConfig,
      UDPListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersUDPListenerConfig,
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTagsTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTags extends $tea.Model {
  tag?: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer extends $tea.Model {
  address?: string;
  addressIPVersion?: string;
  addressType?: string;
  bandwidth?: number;
  createTime?: string;
  createTimeStamp?: number;
  deleteProtection?: string;
  internetChargeType?: string;
  internetChargeTypeAlias?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerSpec?: string;
  loadBalancerStatus?: string;
  masterZoneId?: string;
  modificationProtectionReason?: string;
  modificationProtectionStatus?: string;
  networkType?: string;
  payType?: string;
  regionId?: string;
  regionIdAlias?: string;
  resourceGroupId?: string;
  slaveZoneId?: string;
  tags?: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTags;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      bandwidth: 'Bandwidth',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      deleteProtection: 'DeleteProtection',
      internetChargeType: 'InternetChargeType',
      internetChargeTypeAlias: 'InternetChargeTypeAlias',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      loadBalancerStatus: 'LoadBalancerStatus',
      masterZoneId: 'MasterZoneId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      networkType: 'NetworkType',
      payType: 'PayType',
      regionId: 'RegionId',
      regionIdAlias: 'RegionIdAlias',
      resourceGroupId: 'ResourceGroupId',
      slaveZoneId: 'SlaveZoneId',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      bandwidth: 'number',
      createTime: 'string',
      createTimeStamp: 'number',
      deleteProtection: 'string',
      internetChargeType: 'string',
      internetChargeTypeAlias: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      loadBalancerStatus: 'string',
      masterZoneId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      networkType: 'string',
      payType: 'string',
      regionId: 'string',
      regionIdAlias: 'string',
      resourceGroupId: 'string',
      slaveZoneId: 'string',
      tags: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTags,
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBodyLoadBalancers extends $tea.Model {
  loadBalancer?: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer[];
  static names(): { [key: string]: string } {
    return {
      loadBalancer: 'LoadBalancer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancer: { 'type': 'array', 'itemType': DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer extends $tea.Model {
  description?: string;
  port?: number;
  serverId?: string;
  serverType?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverType: 'ServerType',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverType: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServers extends $tea.Model {
  masterSlaveBackendServer?: DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer[];
  static names(): { [key: string]: string } {
    return {
      masterSlaveBackendServer: 'MasterSlaveBackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveBackendServer: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListenersListener extends $tea.Model {
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListeners extends $tea.Model {
  listener?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListenersListener[];
  static names(): { [key: string]: string } {
    return {
      listener: 'Listener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listener: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListenersListener },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjects extends $tea.Model {
  listeners?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListeners;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListeners,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroup extends $tea.Model {
  associatedObjects?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjects;
  masterSlaveServerGroupId?: string;
  masterSlaveServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      associatedObjects: 'AssociatedObjects',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      masterSlaveServerGroupName: 'MasterSlaveServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedObjects: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjects,
      masterSlaveServerGroupId: 'string',
      masterSlaveServerGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroups extends $tea.Model {
  masterSlaveServerGroup?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroup[];
  static names(): { [key: string]: string } {
    return {
      masterSlaveServerGroup: 'MasterSlaveServerGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveServerGroup: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroup },
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

export class DescribeRulesResponseBodyRulesRule extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  domain?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  listenerSync?: string;
  ruleId?: string;
  ruleName?: string;
  scheduler?: string;
  stickySession?: string;
  stickySessionType?: string;
  unhealthyThreshold?: number;
  url?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      domain: 'Domain',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerSync: 'ListenerSync',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      url: 'Url',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      domain: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerSync: 'string',
      ruleId: 'string',
      ruleName: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      url: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBodyRules extends $tea.Model {
  rule?: DescribeRulesResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeRulesResponseBodyRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateSubjectAlternativeNames extends $tea.Model {
  subjectAlternativeName?: string[];
  static names(): { [key: string]: string } {
    return {
      subjectAlternativeName: 'SubjectAlternativeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subjectAlternativeName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBodyServerCertificatesServerCertificate extends $tea.Model {
  aliCloudCertificateId?: string;
  aliCloudCertificateName?: string;
  commonName?: string;
  createTime?: string;
  createTimeStamp?: number;
  expireTime?: string;
  expireTimeStamp?: number;
  fingerprint?: string;
  isAliCloudCertificate?: number;
  regionId?: string;
  resourceGroupId?: string;
  serverCertificateId?: string;
  serverCertificateName?: string;
  subjectAlternativeNames?: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateSubjectAlternativeNames;
  static names(): { [key: string]: string } {
    return {
      aliCloudCertificateId: 'AliCloudCertificateId',
      aliCloudCertificateName: 'AliCloudCertificateName',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      expireTime: 'ExpireTime',
      expireTimeStamp: 'ExpireTimeStamp',
      fingerprint: 'Fingerprint',
      isAliCloudCertificate: 'IsAliCloudCertificate',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverCertificateId: 'ServerCertificateId',
      serverCertificateName: 'ServerCertificateName',
      subjectAlternativeNames: 'SubjectAlternativeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliCloudCertificateId: 'string',
      aliCloudCertificateName: 'string',
      commonName: 'string',
      createTime: 'string',
      createTimeStamp: 'number',
      expireTime: 'string',
      expireTimeStamp: 'number',
      fingerprint: 'string',
      isAliCloudCertificate: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serverCertificateId: 'string',
      serverCertificateName: 'string',
      subjectAlternativeNames: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateSubjectAlternativeNames,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBodyServerCertificates extends $tea.Model {
  serverCertificate?: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificate[];
  static names(): { [key: string]: string } {
    return {
      serverCertificate: 'ServerCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverCertificate: { 'type': 'array', 'itemType': DescribeServerCertificatesResponseBodyServerCertificatesServerCertificate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTagSetsTagSet extends $tea.Model {
  instanceCount?: number;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'number',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTagSets extends $tea.Model {
  tagSet?: DescribeTagsResponseBodyTagSetsTagSet[];
  static names(): { [key: string]: string } {
    return {
      tagSet: 'TagSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagSet: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTagSetsTagSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupAttributeResponseBodyBackendServersBackendServer extends $tea.Model {
  description?: string;
  port?: number;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupAttributeResponseBodyBackendServers extends $tea.Model {
  backendServer?: DescribeVServerGroupAttributeResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': DescribeVServerGroupAttributeResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListenersListener extends $tea.Model {
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListeners extends $tea.Model {
  listener?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListenersListener[];
  static names(): { [key: string]: string } {
    return {
      listener: 'Listener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listener: { 'type': 'array', 'itemType': DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListenersListener },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRulesRule extends $tea.Model {
  domain?: string;
  ruleId?: string;
  ruleName?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ruleId: 'string',
      ruleName: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRules extends $tea.Model {
  rule?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjects extends $tea.Model {
  listeners?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListeners;
  rules?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRules;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListeners,
      rules: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroup extends $tea.Model {
  associatedObjects?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjects;
  serverCount?: number;
  VServerGroupId?: string;
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      associatedObjects: 'AssociatedObjects',
      serverCount: 'ServerCount',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedObjects: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjects,
      serverCount: 'number',
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroups extends $tea.Model {
  VServerGroup?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroup[];
  static names(): { [key: string]: string } {
    return {
      VServerGroup: 'VServerGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroup: { 'type': 'array', 'itemType': DescribeVServerGroupsResponseBodyVServerGroupsVServerGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneSlaveZonesSlaveZone extends $tea.Model {
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

export class DescribeZonesResponseBodyZonesZoneSlaveZones extends $tea.Model {
  slaveZone?: DescribeZonesResponseBodyZonesZoneSlaveZonesSlaveZone[];
  static names(): { [key: string]: string } {
    return {
      slaveZone: 'SlaveZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slaveZone: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZoneSlaveZonesSlaveZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZone extends $tea.Model {
  localName?: string;
  slaveZones?: DescribeZonesResponseBodyZonesZoneSlaveZones;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      slaveZones: 'SlaveZones',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      slaveZones: DescribeZonesResponseBodyZonesZoneSlaveZones,
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

export class ListTLSCipherPoliciesResponseBodyTLSCipherPoliciesRelateListeners extends $tea.Model {
  loadBalancerId?: string;
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTLSCipherPoliciesResponseBodyTLSCipherPolicies extends $tea.Model {
  ciphers?: string[];
  createTime?: number;
  instanceId?: string;
  name?: string;
  relateListeners?: ListTLSCipherPoliciesResponseBodyTLSCipherPoliciesRelateListeners[];
  status?: string;
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      name: 'Name',
      relateListeners: 'RelateListeners',
      status: 'Status',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      instanceId: 'string',
      name: 'string',
      relateListeners: { 'type': 'array', 'itemType': ListTLSCipherPoliciesResponseBodyTLSCipherPoliciesRelateListeners },
      status: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
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

export class ModifyVServerGroupBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  description?: string;
  port?: number;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVServerGroupBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: ModifyVServerGroupBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': ModifyVServerGroupBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  description?: string;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: RemoveBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': RemoveBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVServerGroupBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  port?: number;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVServerGroupBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: RemoveVServerGroupBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': RemoveVServerGroupBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  description?: string;
  serverId?: string;
  type?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      serverId: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: SetBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': SetBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVServerGroupAttributeResponseBodyBackendServersBackendServer extends $tea.Model {
  description?: string;
  port?: number;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVServerGroupAttributeResponseBodyBackendServers extends $tea.Model {
  backendServer?: SetVServerGroupAttributeResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': SetVServerGroupAttributeResponseBodyBackendServersBackendServer },
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

export class UploadServerCertificateResponseBodySubjectAlternativeNames extends $tea.Model {
  subjectAlternativeName?: string[];
  static names(): { [key: string]: string } {
    return {
      subjectAlternativeName: 'SubjectAlternativeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subjectAlternativeName: { 'type': 'array', 'itemType': 'string' },
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
      'cn-qingdao': "slb.aliyuncs.com",
      'cn-beijing': "slb.aliyuncs.com",
      'cn-hangzhou': "slb.aliyuncs.com",
      'cn-shanghai': "slb.aliyuncs.com",
      'cn-shenzhen': "slb.aliyuncs.com",
      'cn-hongkong': "slb.aliyuncs.com",
      'ap-southeast-1': "slb.aliyuncs.com",
      'us-west-1': "slb.aliyuncs.com",
      'us-east-1': "slb.aliyuncs.com",
      'cn-shanghai-finance-1': "slb.aliyuncs.com",
      'cn-shenzhen-finance-1': "slb.aliyuncs.com",
      'cn-north-2-gov-1': "slb.aliyuncs.com",
      'ap-northeast-2-pop': "slb.aliyuncs.com",
      'cn-beijing-finance-1': "slb.aliyuncs.com",
      'cn-beijing-finance-pop': "slb.aliyuncs.com",
      'cn-beijing-gov-1': "slb.aliyuncs.com",
      'cn-beijing-nu16-b01': "slb.aliyuncs.com",
      'cn-edge-1': "slb.aliyuncs.com",
      'cn-fujian': "slb.aliyuncs.com",
      'cn-haidian-cm12-c01': "slb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "slb.aliyuncs.com",
      'cn-hangzhou-finance': "slb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "slb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "slb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "slb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "slb.aliyuncs.com",
      'cn-hangzhou-test-306': "slb.aliyuncs.com",
      'cn-hongkong-finance-pop': "slb.aliyuncs.com",
      'cn-huhehaote-nebula-1': "slb-api.cn-qingdao-nebula.aliyuncs.com",
      'cn-shanghai-et15-b01': "slb.aliyuncs.com",
      'cn-shanghai-et2-b01': "slb.aliyuncs.com",
      'cn-shanghai-inner': "slb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "slb.aliyuncs.com",
      'cn-shenzhen-inner': "slb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "slb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "slb.aliyuncs.com",
      'cn-wuhan': "slb.aliyuncs.com",
      'cn-yushanfang': "slb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "slb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "slb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "slb.aliyuncs.com",
      'eu-west-1-oxs': "slb.aliyuncs.com",
      'rus-west-1-pop': "slb.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("slb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addAccessControlListEntryWithOptions(request: AddAccessControlListEntryRequest, runtime: $Util.RuntimeOptions): Promise<AddAccessControlListEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclEntrys)) {
      query["AclEntrys"] = request.aclEntrys;
    }

    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "AddAccessControlListEntry",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAccessControlListEntryResponse>(await this.callApi(params, req, runtime), new AddAccessControlListEntryResponse({}));
  }

  async addAccessControlListEntry(request: AddAccessControlListEntryRequest): Promise<AddAccessControlListEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAccessControlListEntryWithOptions(request, runtime);
  }

  async addBackendServersWithOptions(request: AddBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<AddBackendServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "AddBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddBackendServersResponse>(await this.callApi(params, req, runtime), new AddBackendServersResponse({}));
  }

  async addBackendServers(request: AddBackendServersRequest): Promise<AddBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBackendServersWithOptions(request, runtime);
  }

  async addListenerWhiteListItemWithOptions(request: AddListenerWhiteListItemRequest, runtime: $Util.RuntimeOptions): Promise<AddListenerWhiteListItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!Util.isUnset(request.sourceItems)) {
      query["SourceItems"] = request.sourceItems;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddListenerWhiteListItem",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddListenerWhiteListItemResponse>(await this.callApi(params, req, runtime), new AddListenerWhiteListItemResponse({}));
  }

  async addListenerWhiteListItem(request: AddListenerWhiteListItemRequest): Promise<AddListenerWhiteListItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addListenerWhiteListItemWithOptions(request, runtime);
  }

  async addTagsWithOptions(request: AddTagsRequest, runtime: $Util.RuntimeOptions): Promise<AddTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTags",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTagsResponse>(await this.callApi(params, req, runtime), new AddTagsResponse({}));
  }

  async addTags(request: AddTagsRequest): Promise<AddTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsWithOptions(request, runtime);
  }

  async addVServerGroupBackendServersWithOptions(request: AddVServerGroupBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<AddVServerGroupBackendServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
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

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddVServerGroupBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddVServerGroupBackendServersResponse>(await this.callApi(params, req, runtime), new AddVServerGroupBackendServersResponse({}));
  }

  async addVServerGroupBackendServers(request: AddVServerGroupBackendServersRequest): Promise<AddVServerGroupBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVServerGroupBackendServersWithOptions(request, runtime);
  }

  async createAccessControlListWithOptions(request: CreateAccessControlListRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessControlListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "CreateAccessControlList",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccessControlListResponse>(await this.callApi(params, req, runtime), new CreateAccessControlListResponse({}));
  }

  async createAccessControlList(request: CreateAccessControlListRequest): Promise<CreateAccessControlListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessControlListWithOptions(request, runtime);
  }

  async createDomainExtensionWithOptions(request: CreateDomainExtensionRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainExtensionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomainExtension",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainExtensionResponse>(await this.callApi(params, req, runtime), new CreateDomainExtensionResponse({}));
  }

  async createDomainExtension(request: CreateDomainExtensionRequest): Promise<CreateDomainExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainExtensionWithOptions(request, runtime);
  }

  async createLoadBalancerWithOptions(request: CreateLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deleteProtection)) {
      query["DeleteProtection"] = request.deleteProtection;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!Util.isUnset(request.loadBalancerSpec)) {
      query["LoadBalancerSpec"] = request.loadBalancerSpec;
    }

    if (!Util.isUnset(request.masterZoneId)) {
      query["MasterZoneId"] = request.masterZoneId;
    }

    if (!Util.isUnset(request.modificationProtectionReason)) {
      query["ModificationProtectionReason"] = request.modificationProtectionReason;
    }

    if (!Util.isUnset(request.modificationProtectionStatus)) {
      query["ModificationProtectionStatus"] = request.modificationProtectionStatus;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!Util.isUnset(request.slaveZoneId)) {
      query["SlaveZoneId"] = request.slaveZoneId;
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
      action: "CreateLoadBalancer",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerResponse({}));
  }

  async createLoadBalancer(request: CreateLoadBalancerRequest): Promise<CreateLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  async createLoadBalancerHTTPListenerWithOptions(request: CreateLoadBalancerHTTPListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerHTTPListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!Util.isUnset(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.forwardPort)) {
      query["ForwardPort"] = request.forwardPort;
    }

    if (!Util.isUnset(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerForward)) {
      query["ListenerForward"] = request.listenerForward;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!Util.isUnset(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBID)) {
      query["XForwardedFor_SLBID"] = request.XForwardedFor_SLBID;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBIP)) {
      query["XForwardedFor_SLBIP"] = request.XForwardedFor_SLBIP;
    }

    if (!Util.isUnset(request.XForwardedFor_proto)) {
      query["XForwardedFor_proto"] = request.XForwardedFor_proto;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancerHTTPListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerHTTPListenerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerHTTPListenerResponse({}));
  }

  async createLoadBalancerHTTPListener(request: CreateLoadBalancerHTTPListenerRequest): Promise<CreateLoadBalancerHTTPListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerHTTPListenerWithOptions(request, runtime);
  }

  async createLoadBalancerHTTPSListenerWithOptions(request: CreateLoadBalancerHTTPSListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerHTTPSListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
    }

    if (!Util.isUnset(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!Util.isUnset(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableHttp2)) {
      query["EnableHttp2"] = request.enableHttp2;
    }

    if (!Util.isUnset(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!Util.isUnset(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!Util.isUnset(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!Util.isUnset(request.TLSCipherPolicy)) {
      query["TLSCipherPolicy"] = request.TLSCipherPolicy;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBID)) {
      query["XForwardedFor_SLBID"] = request.XForwardedFor_SLBID;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBIP)) {
      query["XForwardedFor_SLBIP"] = request.XForwardedFor_SLBIP;
    }

    if (!Util.isUnset(request.XForwardedFor_proto)) {
      query["XForwardedFor_proto"] = request.XForwardedFor_proto;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancerHTTPSListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerHTTPSListenerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerHTTPSListenerResponse({}));
  }

  async createLoadBalancerHTTPSListener(request: CreateLoadBalancerHTTPSListenerRequest): Promise<CreateLoadBalancerHTTPSListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerHTTPSListenerWithOptions(request, runtime);
  }

  async createLoadBalancerTCPListenerWithOptions(request: CreateLoadBalancerTCPListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerTCPListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.connectionDrain)) {
      query["ConnectionDrain"] = request.connectionDrain;
    }

    if (!Util.isUnset(request.connectionDrainTimeout)) {
      query["ConnectionDrainTimeout"] = request.connectionDrainTimeout;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.establishedTimeout)) {
      query["EstablishedTimeout"] = request.establishedTimeout;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckType)) {
      query["HealthCheckType"] = request.healthCheckType;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.persistenceTimeout)) {
      query["PersistenceTimeout"] = request.persistenceTimeout;
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

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["healthCheckInterval"] = request.healthCheckInterval;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancerTCPListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerTCPListenerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerTCPListenerResponse({}));
  }

  async createLoadBalancerTCPListener(request: CreateLoadBalancerTCPListenerRequest): Promise<CreateLoadBalancerTCPListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerTCPListenerWithOptions(request, runtime);
  }

  async createLoadBalancerUDPListenerWithOptions(request: CreateLoadBalancerUDPListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerUDPListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
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

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.healthCheckExp)) {
      query["healthCheckExp"] = request.healthCheckExp;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["healthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckReq)) {
      query["healthCheckReq"] = request.healthCheckReq;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancerUDPListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerUDPListenerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerUDPListenerResponse({}));
  }

  async createLoadBalancerUDPListener(request: CreateLoadBalancerUDPListenerRequest): Promise<CreateLoadBalancerUDPListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerUDPListenerWithOptions(request, runtime);
  }

  async createMasterSlaveServerGroupWithOptions(request: CreateMasterSlaveServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateMasterSlaveServerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.masterSlaveBackendServers)) {
      query["MasterSlaveBackendServers"] = request.masterSlaveBackendServers;
    }

    if (!Util.isUnset(request.masterSlaveServerGroupName)) {
      query["MasterSlaveServerGroupName"] = request.masterSlaveServerGroupName;
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
      action: "CreateMasterSlaveServerGroup",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMasterSlaveServerGroupResponse>(await this.callApi(params, req, runtime), new CreateMasterSlaveServerGroupResponse({}));
  }

  async createMasterSlaveServerGroup(request: CreateMasterSlaveServerGroupRequest): Promise<CreateMasterSlaveServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMasterSlaveServerGroupWithOptions(request, runtime);
  }

  async createRulesWithOptions(request: CreateRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!Util.isUnset(request.ruleList)) {
      query["RuleList"] = request.ruleList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRules",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRulesResponse>(await this.callApi(params, req, runtime), new CreateRulesResponse({}));
  }

  async createRules(request: CreateRulesRequest): Promise<CreateRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRulesWithOptions(request, runtime);
  }

  async createTLSCipherPolicyWithOptions(request: CreateTLSCipherPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateTLSCipherPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ciphers)) {
      query["Ciphers"] = request.ciphers;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.TLSVersions)) {
      query["TLSVersions"] = request.TLSVersions;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTLSCipherPolicy",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTLSCipherPolicyResponse>(await this.callApi(params, req, runtime), new CreateTLSCipherPolicyResponse({}));
  }

  async createTLSCipherPolicy(request: CreateTLSCipherPolicyRequest): Promise<CreateTLSCipherPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTLSCipherPolicyWithOptions(request, runtime);
  }

  async createVServerGroupWithOptions(request: CreateVServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateVServerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!Util.isUnset(request.VServerGroupName)) {
      query["VServerGroupName"] = request.VServerGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVServerGroup",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVServerGroupResponse>(await this.callApi(params, req, runtime), new CreateVServerGroupResponse({}));
  }

  async createVServerGroup(request: CreateVServerGroupRequest): Promise<CreateVServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVServerGroupWithOptions(request, runtime);
  }

  async deleteAccessControlListWithOptions(request: DeleteAccessControlListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessControlListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "DeleteAccessControlList",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccessControlListResponse>(await this.callApi(params, req, runtime), new DeleteAccessControlListResponse({}));
  }

  async deleteAccessControlList(request: DeleteAccessControlListRequest): Promise<DeleteAccessControlListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessControlListWithOptions(request, runtime);
  }

  async deleteCACertificateWithOptions(request: DeleteCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCACertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
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
      action: "DeleteCACertificate",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCACertificateResponse>(await this.callApi(params, req, runtime), new DeleteCACertificateResponse({}));
  }

  async deleteCACertificate(request: DeleteCACertificateRequest): Promise<DeleteCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCACertificateWithOptions(request, runtime);
  }

  async deleteDomainExtensionWithOptions(request: DeleteDomainExtensionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainExtensionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainExtensionId)) {
      query["DomainExtensionId"] = request.domainExtensionId;
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
      action: "DeleteDomainExtension",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainExtensionResponse>(await this.callApi(params, req, runtime), new DeleteDomainExtensionResponse({}));
  }

  async deleteDomainExtension(request: DeleteDomainExtensionRequest): Promise<DeleteDomainExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainExtensionWithOptions(request, runtime);
  }

  async deleteLoadBalancerWithOptions(request: DeleteLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoadBalancerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DeleteLoadBalancer",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLoadBalancerResponse>(await this.callApi(params, req, runtime), new DeleteLoadBalancerResponse({}));
  }

  async deleteLoadBalancer(request: DeleteLoadBalancerRequest): Promise<DeleteLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoadBalancerWithOptions(request, runtime);
  }

  async deleteLoadBalancerListenerWithOptions(request: DeleteLoadBalancerListenerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoadBalancerListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DeleteLoadBalancerListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLoadBalancerListenerResponse>(await this.callApi(params, req, runtime), new DeleteLoadBalancerListenerResponse({}));
  }

  async deleteLoadBalancerListener(request: DeleteLoadBalancerListenerRequest): Promise<DeleteLoadBalancerListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoadBalancerListenerWithOptions(request, runtime);
  }

  async deleteMasterSlaveServerGroupWithOptions(request: DeleteMasterSlaveServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMasterSlaveServerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
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
      action: "DeleteMasterSlaveServerGroup",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMasterSlaveServerGroupResponse>(await this.callApi(params, req, runtime), new DeleteMasterSlaveServerGroupResponse({}));
  }

  async deleteMasterSlaveServerGroup(request: DeleteMasterSlaveServerGroupRequest): Promise<DeleteMasterSlaveServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMasterSlaveServerGroupWithOptions(request, runtime);
  }

  async deleteRulesWithOptions(request: DeleteRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRulesResponse> {
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

    if (!Util.isUnset(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRules",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRulesResponse>(await this.callApi(params, req, runtime), new DeleteRulesResponse({}));
  }

  async deleteRules(request: DeleteRulesRequest): Promise<DeleteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRulesWithOptions(request, runtime);
  }

  async deleteServerCertificateWithOptions(request: DeleteServerCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServerCertificateResponse> {
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

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServerCertificate",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServerCertificateResponse>(await this.callApi(params, req, runtime), new DeleteServerCertificateResponse({}));
  }

  async deleteServerCertificate(request: DeleteServerCertificateRequest): Promise<DeleteServerCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServerCertificateWithOptions(request, runtime);
  }

  async deleteTLSCipherPolicyWithOptions(request: DeleteTLSCipherPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTLSCipherPolicyResponse> {
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

    if (!Util.isUnset(request.TLSCipherPolicyId)) {
      query["TLSCipherPolicyId"] = request.TLSCipherPolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTLSCipherPolicy",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTLSCipherPolicyResponse>(await this.callApi(params, req, runtime), new DeleteTLSCipherPolicyResponse({}));
  }

  async deleteTLSCipherPolicy(request: DeleteTLSCipherPolicyRequest): Promise<DeleteTLSCipherPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTLSCipherPolicyWithOptions(request, runtime);
  }

  async deleteVServerGroupWithOptions(request: DeleteVServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVServerGroupResponse> {
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

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVServerGroup",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVServerGroupResponse>(await this.callApi(params, req, runtime), new DeleteVServerGroupResponse({}));
  }

  async deleteVServerGroup(request: DeleteVServerGroupRequest): Promise<DeleteVServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVServerGroupWithOptions(request, runtime);
  }

  async describeAccessControlListAttributeWithOptions(request: DescribeAccessControlListAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessControlListAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclEntryComment)) {
      query["AclEntryComment"] = request.aclEntryComment;
    }

    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "DescribeAccessControlListAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccessControlListAttributeResponse>(await this.callApi(params, req, runtime), new DescribeAccessControlListAttributeResponse({}));
  }

  async describeAccessControlListAttribute(request: DescribeAccessControlListAttributeRequest): Promise<DescribeAccessControlListAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessControlListAttributeWithOptions(request, runtime);
  }

  async describeAccessControlListsWithOptions(request: DescribeAccessControlListsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessControlListsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "DescribeAccessControlLists",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccessControlListsResponse>(await this.callApi(params, req, runtime), new DescribeAccessControlListsResponse({}));
  }

  async describeAccessControlLists(request: DescribeAccessControlListsRequest): Promise<DescribeAccessControlListsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessControlListsWithOptions(request, runtime);
  }

  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
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
      action: "DescribeAvailableResource",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.callApi(params, req, runtime), new DescribeAvailableResourceResponse({}));
  }

  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  async describeCACertificatesWithOptions(request: DescribeCACertificatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCACertificatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "DescribeCACertificates",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCACertificatesResponse>(await this.callApi(params, req, runtime), new DescribeCACertificatesResponse({}));
  }

  async describeCACertificates(request: DescribeCACertificatesRequest): Promise<DescribeCACertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCACertificatesWithOptions(request, runtime);
  }

  async describeDomainExtensionAttributeWithOptions(request: DescribeDomainExtensionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainExtensionAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainExtensionId)) {
      query["DomainExtensionId"] = request.domainExtensionId;
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
      action: "DescribeDomainExtensionAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainExtensionAttributeResponse>(await this.callApi(params, req, runtime), new DescribeDomainExtensionAttributeResponse({}));
  }

  async describeDomainExtensionAttribute(request: DescribeDomainExtensionAttributeRequest): Promise<DescribeDomainExtensionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainExtensionAttributeWithOptions(request, runtime);
  }

  async describeDomainExtensionsWithOptions(request: DescribeDomainExtensionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainExtensionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainExtensionId)) {
      query["DomainExtensionId"] = request.domainExtensionId;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeDomainExtensions",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainExtensionsResponse>(await this.callApi(params, req, runtime), new DescribeDomainExtensionsResponse({}));
  }

  async describeDomainExtensions(request: DescribeDomainExtensionsRequest): Promise<DescribeDomainExtensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainExtensionsWithOptions(request, runtime);
  }

  async describeHealthStatusWithOptions(request: DescribeHealthStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeHealthStatus",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHealthStatusResponse>(await this.callApi(params, req, runtime), new DescribeHealthStatusResponse({}));
  }

  async describeHealthStatus(request: DescribeHealthStatusRequest): Promise<DescribeHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthStatusWithOptions(request, runtime);
  }

  async describeListenerAccessControlAttributeWithOptions(request: DescribeListenerAccessControlAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeListenerAccessControlAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeListenerAccessControlAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeListenerAccessControlAttributeResponse>(await this.callApi(params, req, runtime), new DescribeListenerAccessControlAttributeResponse({}));
  }

  async describeListenerAccessControlAttribute(request: DescribeListenerAccessControlAttributeRequest): Promise<DescribeListenerAccessControlAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeListenerAccessControlAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerAttributeWithOptions(request: DescribeLoadBalancerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeLoadBalancerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerAttributeResponse({}));
  }

  async describeLoadBalancerAttribute(request: DescribeLoadBalancerAttributeRequest): Promise<DescribeLoadBalancerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerHTTPListenerAttributeWithOptions(request: DescribeLoadBalancerHTTPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerHTTPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeLoadBalancerHTTPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerHTTPListenerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerHTTPListenerAttributeResponse({}));
  }

  async describeLoadBalancerHTTPListenerAttribute(request: DescribeLoadBalancerHTTPListenerAttributeRequest): Promise<DescribeLoadBalancerHTTPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerHTTPListenerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerHTTPSListenerAttributeWithOptions(request: DescribeLoadBalancerHTTPSListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerHTTPSListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeLoadBalancerHTTPSListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerHTTPSListenerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerHTTPSListenerAttributeResponse({}));
  }

  async describeLoadBalancerHTTPSListenerAttribute(request: DescribeLoadBalancerHTTPSListenerAttributeRequest): Promise<DescribeLoadBalancerHTTPSListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerHTTPSListenerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerListenersWithOptions(request: DescribeLoadBalancerListenersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerListenersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancerListeners",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerListenersResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerListenersResponse({}));
  }

  async describeLoadBalancerListeners(request: DescribeLoadBalancerListenersRequest): Promise<DescribeLoadBalancerListenersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerListenersWithOptions(request, runtime);
  }

  async describeLoadBalancerTCPListenerAttributeWithOptions(request: DescribeLoadBalancerTCPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerTCPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeLoadBalancerTCPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerTCPListenerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerTCPListenerAttributeResponse({}));
  }

  async describeLoadBalancerTCPListenerAttribute(request: DescribeLoadBalancerTCPListenerAttributeRequest): Promise<DescribeLoadBalancerTCPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerTCPListenerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerUDPListenerAttributeWithOptions(request: DescribeLoadBalancerUDPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerUDPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeLoadBalancerUDPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerUDPListenerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerUDPListenerAttributeResponse({}));
  }

  async describeLoadBalancerUDPListenerAttribute(request: DescribeLoadBalancerUDPListenerAttributeRequest): Promise<DescribeLoadBalancerUDPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerUDPListenerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancersWithOptions(request: DescribeLoadBalancersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!Util.isUnset(request.loadBalancerStatus)) {
      query["LoadBalancerStatus"] = request.loadBalancerStatus;
    }

    if (!Util.isUnset(request.masterZoneId)) {
      query["MasterZoneId"] = request.masterZoneId;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
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

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    if (!Util.isUnset(request.serverIntranetAddress)) {
      query["ServerIntranetAddress"] = request.serverIntranetAddress;
    }

    if (!Util.isUnset(request.slaveZoneId)) {
      query["SlaveZoneId"] = request.slaveZoneId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
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
      action: "DescribeLoadBalancers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancersResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancersResponse({}));
  }

  async describeLoadBalancers(request: DescribeLoadBalancersRequest): Promise<DescribeLoadBalancersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancersWithOptions(request, runtime);
  }

  async describeMasterSlaveServerGroupAttributeWithOptions(request: DescribeMasterSlaveServerGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMasterSlaveServerGroupAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
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
      action: "DescribeMasterSlaveServerGroupAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMasterSlaveServerGroupAttributeResponse>(await this.callApi(params, req, runtime), new DescribeMasterSlaveServerGroupAttributeResponse({}));
  }

  async describeMasterSlaveServerGroupAttribute(request: DescribeMasterSlaveServerGroupAttributeRequest): Promise<DescribeMasterSlaveServerGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMasterSlaveServerGroupAttributeWithOptions(request, runtime);
  }

  async describeMasterSlaveServerGroupsWithOptions(request: DescribeMasterSlaveServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMasterSlaveServerGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeListener)) {
      query["IncludeListener"] = request.includeListener;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeMasterSlaveServerGroups",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMasterSlaveServerGroupsResponse>(await this.callApi(params, req, runtime), new DescribeMasterSlaveServerGroupsResponse({}));
  }

  async describeMasterSlaveServerGroups(request: DescribeMasterSlaveServerGroupsRequest): Promise<DescribeMasterSlaveServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMasterSlaveServerGroupsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
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
      action: "DescribeRegions",
      version: "2014-05-15",
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

  async describeRuleAttributeWithOptions(request: DescribeRuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleAttributeResponse> {
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

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleAttributeResponse>(await this.callApi(params, req, runtime), new DescribeRuleAttributeResponse({}));
  }

  async describeRuleAttribute(request: DescribeRuleAttributeRequest): Promise<DescribeRuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleAttributeWithOptions(request, runtime);
  }

  async describeRulesWithOptions(request: DescribeRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeRules",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRulesResponse>(await this.callApi(params, req, runtime), new DescribeRulesResponse({}));
  }

  async describeRules(request: DescribeRulesRequest): Promise<DescribeRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRulesWithOptions(request, runtime);
  }

  async describeServerCertificatesWithOptions(request: DescribeServerCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServerCertificatesResponse> {
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServerCertificates",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServerCertificatesResponse>(await this.callApi(params, req, runtime), new DescribeServerCertificatesResponse({}));
  }

  async describeServerCertificates(request: DescribeServerCertificatesRequest): Promise<DescribeServerCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServerCertificatesWithOptions(request, runtime);
  }

  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.distinctKey)) {
      query["DistinctKey"] = request.distinctKey;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTags",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagsResponse>(await this.callApi(params, req, runtime), new DescribeTagsResponse({}));
  }

  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  async describeVServerGroupAttributeWithOptions(request: DescribeVServerGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVServerGroupAttributeResponse> {
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

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVServerGroupAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVServerGroupAttributeResponse>(await this.callApi(params, req, runtime), new DescribeVServerGroupAttributeResponse({}));
  }

  async describeVServerGroupAttribute(request: DescribeVServerGroupAttributeRequest): Promise<DescribeVServerGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVServerGroupAttributeWithOptions(request, runtime);
  }

  async describeVServerGroupsWithOptions(request: DescribeVServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVServerGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeListener)) {
      query["IncludeListener"] = request.includeListener;
    }

    if (!Util.isUnset(request.includeRule)) {
      query["IncludeRule"] = request.includeRule;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "DescribeVServerGroups",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVServerGroupsResponse>(await this.callApi(params, req, runtime), new DescribeVServerGroupsResponse({}));
  }

  async describeVServerGroups(request: DescribeVServerGroupsRequest): Promise<DescribeVServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVServerGroupsWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZones",
      version: "2014-05-15",
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

  async listTLSCipherPoliciesWithOptions(request: ListTLSCipherPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListTLSCipherPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeListener)) {
      query["IncludeListener"] = request.includeListener;
    }

    if (!Util.isUnset(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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

    if (!Util.isUnset(request.TLSCipherPolicyId)) {
      query["TLSCipherPolicyId"] = request.TLSCipherPolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTLSCipherPolicies",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTLSCipherPoliciesResponse>(await this.callApi(params, req, runtime), new ListTLSCipherPoliciesResponse({}));
  }

  async listTLSCipherPolicies(request: ListTLSCipherPoliciesRequest): Promise<ListTLSCipherPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTLSCipherPoliciesWithOptions(request, runtime);
  }

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
      version: "2014-05-15",
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

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyLoadBalancerInstanceSpecWithOptions(request: ModifyLoadBalancerInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoadBalancerInstanceSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.loadBalancerSpec)) {
      query["LoadBalancerSpec"] = request.loadBalancerSpec;
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
      action: "ModifyLoadBalancerInstanceSpec",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLoadBalancerInstanceSpecResponse>(await this.callApi(params, req, runtime), new ModifyLoadBalancerInstanceSpecResponse({}));
  }

  async modifyLoadBalancerInstanceSpec(request: ModifyLoadBalancerInstanceSpecRequest): Promise<ModifyLoadBalancerInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoadBalancerInstanceSpecWithOptions(request, runtime);
  }

  async modifyLoadBalancerInternetSpecWithOptions(request: ModifyLoadBalancerInternetSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoadBalancerInternetSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "ModifyLoadBalancerInternetSpec",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLoadBalancerInternetSpecResponse>(await this.callApi(params, req, runtime), new ModifyLoadBalancerInternetSpecResponse({}));
  }

  async modifyLoadBalancerInternetSpec(request: ModifyLoadBalancerInternetSpecRequest): Promise<ModifyLoadBalancerInternetSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoadBalancerInternetSpecWithOptions(request, runtime);
  }

  async modifyLoadBalancerPayTypeWithOptions(request: ModifyLoadBalancerPayTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoadBalancerPayTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
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
      action: "ModifyLoadBalancerPayType",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLoadBalancerPayTypeResponse>(await this.callApi(params, req, runtime), new ModifyLoadBalancerPayTypeResponse({}));
  }

  async modifyLoadBalancerPayType(request: ModifyLoadBalancerPayTypeRequest): Promise<ModifyLoadBalancerPayTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoadBalancerPayTypeWithOptions(request, runtime);
  }

  async modifyVServerGroupBackendServersWithOptions(request: ModifyVServerGroupBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVServerGroupBackendServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newBackendServers)) {
      query["NewBackendServers"] = request.newBackendServers;
    }

    if (!Util.isUnset(request.oldBackendServers)) {
      query["OldBackendServers"] = request.oldBackendServers;
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

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVServerGroupBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVServerGroupBackendServersResponse>(await this.callApi(params, req, runtime), new ModifyVServerGroupBackendServersResponse({}));
  }

  async modifyVServerGroupBackendServers(request: ModifyVServerGroupBackendServersRequest): Promise<ModifyVServerGroupBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVServerGroupBackendServersWithOptions(request, runtime);
  }

  async removeAccessControlListEntryWithOptions(request: RemoveAccessControlListEntryRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAccessControlListEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclEntrys)) {
      query["AclEntrys"] = request.aclEntrys;
    }

    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "RemoveAccessControlListEntry",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveAccessControlListEntryResponse>(await this.callApi(params, req, runtime), new RemoveAccessControlListEntryResponse({}));
  }

  async removeAccessControlListEntry(request: RemoveAccessControlListEntryRequest): Promise<RemoveAccessControlListEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAccessControlListEntryWithOptions(request, runtime);
  }

  async removeBackendServersWithOptions(request: RemoveBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveBackendServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "RemoveBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveBackendServersResponse>(await this.callApi(params, req, runtime), new RemoveBackendServersResponse({}));
  }

  async removeBackendServers(request: RemoveBackendServersRequest): Promise<RemoveBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeBackendServersWithOptions(request, runtime);
  }

  async removeListenerWhiteListItemWithOptions(request: RemoveListenerWhiteListItemRequest, runtime: $Util.RuntimeOptions): Promise<RemoveListenerWhiteListItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!Util.isUnset(request.sourceItems)) {
      query["SourceItems"] = request.sourceItems;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveListenerWhiteListItem",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveListenerWhiteListItemResponse>(await this.callApi(params, req, runtime), new RemoveListenerWhiteListItemResponse({}));
  }

  async removeListenerWhiteListItem(request: RemoveListenerWhiteListItemRequest): Promise<RemoveListenerWhiteListItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeListenerWhiteListItemWithOptions(request, runtime);
  }

  async removeTagsWithOptions(request: RemoveTagsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveTags",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveTagsResponse>(await this.callApi(params, req, runtime), new RemoveTagsResponse({}));
  }

  async removeTags(request: RemoveTagsRequest): Promise<RemoveTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTagsWithOptions(request, runtime);
  }

  async removeVServerGroupBackendServersWithOptions(request: RemoveVServerGroupBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveVServerGroupBackendServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
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

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveVServerGroupBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveVServerGroupBackendServersResponse>(await this.callApi(params, req, runtime), new RemoveVServerGroupBackendServersResponse({}));
  }

  async removeVServerGroupBackendServers(request: RemoveVServerGroupBackendServersRequest): Promise<RemoveVServerGroupBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeVServerGroupBackendServersWithOptions(request, runtime);
  }

  async setAccessControlListAttributeWithOptions(request: SetAccessControlListAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetAccessControlListAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
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
      action: "SetAccessControlListAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAccessControlListAttributeResponse>(await this.callApi(params, req, runtime), new SetAccessControlListAttributeResponse({}));
  }

  async setAccessControlListAttribute(request: SetAccessControlListAttributeRequest): Promise<SetAccessControlListAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAccessControlListAttributeWithOptions(request, runtime);
  }

  async setBackendServersWithOptions(request: SetBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<SetBackendServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "SetBackendServers",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetBackendServersResponse>(await this.callApi(params, req, runtime), new SetBackendServersResponse({}));
  }

  async setBackendServers(request: SetBackendServersRequest): Promise<SetBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setBackendServersWithOptions(request, runtime);
  }

  async setCACertificateNameWithOptions(request: SetCACertificateNameRequest, runtime: $Util.RuntimeOptions): Promise<SetCACertificateNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
    }

    if (!Util.isUnset(request.CACertificateName)) {
      query["CACertificateName"] = request.CACertificateName;
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
      action: "SetCACertificateName",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetCACertificateNameResponse>(await this.callApi(params, req, runtime), new SetCACertificateNameResponse({}));
  }

  async setCACertificateName(request: SetCACertificateNameRequest): Promise<SetCACertificateNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCACertificateNameWithOptions(request, runtime);
  }

  async setDomainExtensionAttributeWithOptions(request: SetDomainExtensionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainExtensionAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainExtensionId)) {
      query["DomainExtensionId"] = request.domainExtensionId;
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

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomainExtensionAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDomainExtensionAttributeResponse>(await this.callApi(params, req, runtime), new SetDomainExtensionAttributeResponse({}));
  }

  async setDomainExtensionAttribute(request: SetDomainExtensionAttributeRequest): Promise<SetDomainExtensionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainExtensionAttributeWithOptions(request, runtime);
  }

  async setListenerAccessControlStatusWithOptions(request: SetListenerAccessControlStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetListenerAccessControlStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessControlStatus)) {
      query["AccessControlStatus"] = request.accessControlStatus;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "SetListenerAccessControlStatus",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetListenerAccessControlStatusResponse>(await this.callApi(params, req, runtime), new SetListenerAccessControlStatusResponse({}));
  }

  async setListenerAccessControlStatus(request: SetListenerAccessControlStatusRequest): Promise<SetListenerAccessControlStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setListenerAccessControlStatusWithOptions(request, runtime);
  }

  async setLoadBalancerDeleteProtectionWithOptions(request: SetLoadBalancerDeleteProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerDeleteProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deleteProtection)) {
      query["DeleteProtection"] = request.deleteProtection;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "SetLoadBalancerDeleteProtection",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerDeleteProtectionResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerDeleteProtectionResponse({}));
  }

  async setLoadBalancerDeleteProtection(request: SetLoadBalancerDeleteProtectionRequest): Promise<SetLoadBalancerDeleteProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerDeleteProtectionWithOptions(request, runtime);
  }

  async setLoadBalancerHTTPListenerAttributeWithOptions(request: SetLoadBalancerHTTPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerHTTPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!Util.isUnset(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!Util.isUnset(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroup)) {
      query["VServerGroup"] = request.VServerGroup;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBID)) {
      query["XForwardedFor_SLBID"] = request.XForwardedFor_SLBID;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBIP)) {
      query["XForwardedFor_SLBIP"] = request.XForwardedFor_SLBIP;
    }

    if (!Util.isUnset(request.XForwardedFor_proto)) {
      query["XForwardedFor_proto"] = request.XForwardedFor_proto;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerHTTPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerHTTPListenerAttributeResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerHTTPListenerAttributeResponse({}));
  }

  async setLoadBalancerHTTPListenerAttribute(request: SetLoadBalancerHTTPListenerAttributeRequest): Promise<SetLoadBalancerHTTPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerHTTPListenerAttributeWithOptions(request, runtime);
  }

  async setLoadBalancerHTTPSListenerAttributeWithOptions(request: SetLoadBalancerHTTPSListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerHTTPSListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.CACertificateId)) {
      query["CACertificateId"] = request.CACertificateId;
    }

    if (!Util.isUnset(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!Util.isUnset(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableHttp2)) {
      query["EnableHttp2"] = request.enableHttp2;
    }

    if (!Util.isUnset(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!Util.isUnset(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!Util.isUnset(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!Util.isUnset(request.TLSCipherPolicy)) {
      query["TLSCipherPolicy"] = request.TLSCipherPolicy;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroup)) {
      query["VServerGroup"] = request.VServerGroup;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBID)) {
      query["XForwardedFor_SLBID"] = request.XForwardedFor_SLBID;
    }

    if (!Util.isUnset(request.XForwardedFor_SLBIP)) {
      query["XForwardedFor_SLBIP"] = request.XForwardedFor_SLBIP;
    }

    if (!Util.isUnset(request.XForwardedFor_proto)) {
      query["XForwardedFor_proto"] = request.XForwardedFor_proto;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerHTTPSListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerHTTPSListenerAttributeResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerHTTPSListenerAttributeResponse({}));
  }

  async setLoadBalancerHTTPSListenerAttribute(request: SetLoadBalancerHTTPSListenerAttributeRequest): Promise<SetLoadBalancerHTTPSListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerHTTPSListenerAttributeWithOptions(request, runtime);
  }

  async setLoadBalancerModificationProtectionWithOptions(request: SetLoadBalancerModificationProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerModificationProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.modificationProtectionReason)) {
      query["ModificationProtectionReason"] = request.modificationProtectionReason;
    }

    if (!Util.isUnset(request.modificationProtectionStatus)) {
      query["ModificationProtectionStatus"] = request.modificationProtectionStatus;
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
      action: "SetLoadBalancerModificationProtection",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerModificationProtectionResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerModificationProtectionResponse({}));
  }

  async setLoadBalancerModificationProtection(request: SetLoadBalancerModificationProtectionRequest): Promise<SetLoadBalancerModificationProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerModificationProtectionWithOptions(request, runtime);
  }

  async setLoadBalancerNameWithOptions(request: SetLoadBalancerNameRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
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
      action: "SetLoadBalancerName",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerNameResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerNameResponse({}));
  }

  async setLoadBalancerName(request: SetLoadBalancerNameRequest): Promise<SetLoadBalancerNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerNameWithOptions(request, runtime);
  }

  async setLoadBalancerStatusWithOptions(request: SetLoadBalancerStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.loadBalancerStatus)) {
      query["LoadBalancerStatus"] = request.loadBalancerStatus;
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
      action: "SetLoadBalancerStatus",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerStatusResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerStatusResponse({}));
  }

  async setLoadBalancerStatus(request: SetLoadBalancerStatusRequest): Promise<SetLoadBalancerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerStatusWithOptions(request, runtime);
  }

  async setLoadBalancerTCPListenerAttributeWithOptions(request: SetLoadBalancerTCPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerTCPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.connectionDrain)) {
      query["ConnectionDrain"] = request.connectionDrain;
    }

    if (!Util.isUnset(request.connectionDrainTimeout)) {
      query["ConnectionDrainTimeout"] = request.connectionDrainTimeout;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.establishedTimeout)) {
      query["EstablishedTimeout"] = request.establishedTimeout;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckType)) {
      query["HealthCheckType"] = request.healthCheckType;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.masterSlaveServerGroup)) {
      query["MasterSlaveServerGroup"] = request.masterSlaveServerGroup;
    }

    if (!Util.isUnset(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.persistenceTimeout)) {
      query["PersistenceTimeout"] = request.persistenceTimeout;
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

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.synProxy)) {
      query["SynProxy"] = request.synProxy;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroup)) {
      query["VServerGroup"] = request.VServerGroup;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerTCPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerTCPListenerAttributeResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerTCPListenerAttributeResponse({}));
  }

  async setLoadBalancerTCPListenerAttribute(request: SetLoadBalancerTCPListenerAttributeRequest): Promise<SetLoadBalancerTCPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerTCPListenerAttributeWithOptions(request, runtime);
  }

  async setLoadBalancerUDPListenerAttributeWithOptions(request: SetLoadBalancerUDPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerUDPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclStatus)) {
      query["AclStatus"] = request.aclStatus;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.masterSlaveServerGroup)) {
      query["MasterSlaveServerGroup"] = request.masterSlaveServerGroup;
    }

    if (!Util.isUnset(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
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

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroup)) {
      query["VServerGroup"] = request.VServerGroup;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.healthCheckExp)) {
      query["healthCheckExp"] = request.healthCheckExp;
    }

    if (!Util.isUnset(request.healthCheckReq)) {
      query["healthCheckReq"] = request.healthCheckReq;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerUDPListenerAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerUDPListenerAttributeResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerUDPListenerAttributeResponse({}));
  }

  async setLoadBalancerUDPListenerAttribute(request: SetLoadBalancerUDPListenerAttributeRequest): Promise<SetLoadBalancerUDPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerUDPListenerAttributeWithOptions(request, runtime);
  }

  async setRuleWithOptions(request: SetRuleRequest, runtime: $Util.RuntimeOptions): Promise<SetRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!Util.isUnset(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerSync)) {
      query["ListenerSync"] = request.listenerSync;
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

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!Util.isUnset(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetRule",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetRuleResponse>(await this.callApi(params, req, runtime), new SetRuleResponse({}));
  }

  async setRule(request: SetRuleRequest): Promise<SetRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRuleWithOptions(request, runtime);
  }

  async setServerCertificateNameWithOptions(request: SetServerCertificateNameRequest, runtime: $Util.RuntimeOptions): Promise<SetServerCertificateNameResponse> {
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

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!Util.isUnset(request.serverCertificateName)) {
      query["ServerCertificateName"] = request.serverCertificateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetServerCertificateName",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetServerCertificateNameResponse>(await this.callApi(params, req, runtime), new SetServerCertificateNameResponse({}));
  }

  async setServerCertificateName(request: SetServerCertificateNameRequest): Promise<SetServerCertificateNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setServerCertificateNameWithOptions(request, runtime);
  }

  async setTLSCipherPolicyAttributeWithOptions(request: SetTLSCipherPolicyAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetTLSCipherPolicyAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ciphers)) {
      query["Ciphers"] = request.ciphers;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.TLSCipherPolicyId)) {
      query["TLSCipherPolicyId"] = request.TLSCipherPolicyId;
    }

    if (!Util.isUnset(request.TLSVersions)) {
      query["TLSVersions"] = request.TLSVersions;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetTLSCipherPolicyAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetTLSCipherPolicyAttributeResponse>(await this.callApi(params, req, runtime), new SetTLSCipherPolicyAttributeResponse({}));
  }

  async setTLSCipherPolicyAttribute(request: SetTLSCipherPolicyAttributeRequest): Promise<SetTLSCipherPolicyAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setTLSCipherPolicyAttributeWithOptions(request, runtime);
  }

  async setVServerGroupAttributeWithOptions(request: SetVServerGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetVServerGroupAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
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

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.VServerGroupName)) {
      query["VServerGroupName"] = request.VServerGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetVServerGroupAttribute",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetVServerGroupAttributeResponse>(await this.callApi(params, req, runtime), new SetVServerGroupAttributeResponse({}));
  }

  async setVServerGroupAttribute(request: SetVServerGroupAttributeRequest): Promise<SetVServerGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setVServerGroupAttributeWithOptions(request, runtime);
  }

  async startLoadBalancerListenerWithOptions(request: StartLoadBalancerListenerRequest, runtime: $Util.RuntimeOptions): Promise<StartLoadBalancerListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "StartLoadBalancerListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartLoadBalancerListenerResponse>(await this.callApi(params, req, runtime), new StartLoadBalancerListenerResponse({}));
  }

  async startLoadBalancerListener(request: StartLoadBalancerListenerRequest): Promise<StartLoadBalancerListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startLoadBalancerListenerWithOptions(request, runtime);
  }

  async stopLoadBalancerListenerWithOptions(request: StopLoadBalancerListenerRequest, runtime: $Util.RuntimeOptions): Promise<StopLoadBalancerListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
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
      action: "StopLoadBalancerListener",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopLoadBalancerListenerResponse>(await this.callApi(params, req, runtime), new StopLoadBalancerListenerResponse({}));
  }

  async stopLoadBalancerListener(request: StopLoadBalancerListenerRequest): Promise<StopLoadBalancerListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLoadBalancerListenerWithOptions(request, runtime);
  }

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
      version: "2014-05-15",
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

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
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
      version: "2014-05-15",
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

  async uploadCACertificateWithOptions(request: UploadCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<UploadCACertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.CACertificate)) {
      query["CACertificate"] = request.CACertificate;
    }

    if (!Util.isUnset(request.CACertificateName)) {
      query["CACertificateName"] = request.CACertificateName;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "UploadCACertificate",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadCACertificateResponse>(await this.callApi(params, req, runtime), new UploadCACertificateResponse({}));
  }

  async uploadCACertificate(request: UploadCACertificateRequest): Promise<UploadCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadCACertificateWithOptions(request, runtime);
  }

  async uploadServerCertificateWithOptions(request: UploadServerCertificateRequest, runtime: $Util.RuntimeOptions): Promise<UploadServerCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliCloudCertificateId)) {
      query["AliCloudCertificateId"] = request.aliCloudCertificateId;
    }

    if (!Util.isUnset(request.aliCloudCertificateName)) {
      query["AliCloudCertificateName"] = request.aliCloudCertificateName;
    }

    if (!Util.isUnset(request.aliCloudCertificateRegionId)) {
      query["AliCloudCertificateRegionId"] = request.aliCloudCertificateRegionId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!Util.isUnset(request.serverCertificate)) {
      query["ServerCertificate"] = request.serverCertificate;
    }

    if (!Util.isUnset(request.serverCertificateName)) {
      query["ServerCertificateName"] = request.serverCertificateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadServerCertificate",
      version: "2014-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadServerCertificateResponse>(await this.callApi(params, req, runtime), new UploadServerCertificateResponse({}));
  }

  async uploadServerCertificate(request: UploadServerCertificateRequest): Promise<UploadServerCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadServerCertificateWithOptions(request, runtime);
  }

}
