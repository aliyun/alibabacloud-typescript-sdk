// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAccessControlListEntryRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  aclId?: string;
  aclEntrys?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      aclId: 'AclId',
      aclEntrys: 'AclEntrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      aclId: 'string',
      aclEntrys: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  backendServers?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      backendServers: 'BackendServers',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      backendServers: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersResponseBody extends $tea.Model {
  loadBalancerId?: string;
  requestId?: string;
  backendServers?: AddBackendServersResponseBodyBackendServers;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      requestId: 'string',
      backendServers: AddBackendServersResponseBodyBackendServers,
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  sourceItems?: string;
  ownerAccount?: string;
  listenerProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      sourceItems: 'SourceItems',
      ownerAccount: 'OwnerAccount',
      listenerProtocol: 'ListenerProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      sourceItems: 'string',
      ownerAccount: 'string',
      listenerProtocol: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  loadBalancerId?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      loadBalancerId: 'LoadBalancerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      loadBalancerId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  VServerGroupId?: string;
  backendServers?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      VServerGroupId: 'VServerGroupId',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      VServerGroupId: 'string',
      backendServers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVServerGroupBackendServersResponseBody extends $tea.Model {
  VServerGroupId?: string;
  requestId?: string;
  backendServers?: AddVServerGroupBackendServersResponseBodyBackendServers;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      requestId: 'RequestId',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      requestId: 'string',
      backendServers: AddVServerGroupBackendServersResponseBodyBackendServers,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  aclName?: string;
  addressIPVersion?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
      resourceGroupId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  loadBalancerId?: string;
  listenerPort?: number;
  domain?: string;
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      domain: 'Domain',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      loadBalancerId: 'string',
      listenerPort: 'number',
      domain: 'string',
      serverCertificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainExtensionResponseBody extends $tea.Model {
  listenerPort?: number;
  requestId?: string;
  domainExtensionId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      requestId: 'RequestId',
      domainExtensionId: 'DomainExtensionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      requestId: 'string',
      domainExtensionId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  addressType?: string;
  internetChargeType?: string;
  bandwidth?: number;
  clientToken?: string;
  loadBalancerName?: string;
  vpcId?: string;
  vSwitchId?: string;
  ownerAccount?: string;
  masterZoneId?: string;
  slaveZoneId?: string;
  loadBalancerSpec?: string;
  resourceGroupId?: string;
  payType?: string;
  pricingCycle?: string;
  duration?: number;
  autoPay?: boolean;
  addressIPVersion?: string;
  address?: string;
  deleteProtection?: string;
  modificationProtectionStatus?: string;
  modificationProtectionReason?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      addressType: 'AddressType',
      internetChargeType: 'InternetChargeType',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      loadBalancerName: 'LoadBalancerName',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      ownerAccount: 'OwnerAccount',
      masterZoneId: 'MasterZoneId',
      slaveZoneId: 'SlaveZoneId',
      loadBalancerSpec: 'LoadBalancerSpec',
      resourceGroupId: 'ResourceGroupId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      duration: 'Duration',
      autoPay: 'AutoPay',
      addressIPVersion: 'AddressIPVersion',
      address: 'Address',
      deleteProtection: 'DeleteProtection',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      modificationProtectionReason: 'ModificationProtectionReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      addressType: 'string',
      internetChargeType: 'string',
      bandwidth: 'number',
      clientToken: 'string',
      loadBalancerName: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      ownerAccount: 'string',
      masterZoneId: 'string',
      slaveZoneId: 'string',
      loadBalancerSpec: 'string',
      resourceGroupId: 'string',
      payType: 'string',
      pricingCycle: 'string',
      duration: 'number',
      autoPay: 'boolean',
      addressIPVersion: 'string',
      address: 'string',
      deleteProtection: 'string',
      modificationProtectionStatus: 'string',
      modificationProtectionReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerResponseBody extends $tea.Model {
  vpcId?: string;
  addressIPVersion?: string;
  vSwitchId?: string;
  requestId?: string;
  loadBalancerName?: string;
  loadBalancerId?: string;
  resourceGroupId?: string;
  address?: string;
  networkType?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      addressIPVersion: 'AddressIPVersion',
      vSwitchId: 'VSwitchId',
      requestId: 'RequestId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerId: 'LoadBalancerId',
      resourceGroupId: 'ResourceGroupId',
      address: 'Address',
      networkType: 'NetworkType',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      addressIPVersion: 'string',
      vSwitchId: 'string',
      requestId: 'string',
      loadBalancerName: 'string',
      loadBalancerId: 'string',
      resourceGroupId: 'string',
      address: 'string',
      networkType: 'string',
      orderId: 'number',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  bandwidth?: number;
  listenerPort?: number;
  backendServerPort?: number;
  XForwardedFor?: string;
  scheduler?: string;
  stickySession?: string;
  stickySessionType?: string;
  cookieTimeout?: number;
  cookie?: string;
  healthCheck?: string;
  healthCheckDomain?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  healthCheckTimeout?: number;
  healthCheckConnectPort?: number;
  healthCheckInterval?: number;
  healthCheckHttpCode?: string;
  ownerAccount?: string;
  VServerGroupId?: string;
  XForwardedFor_SLBIP?: string;
  XForwardedFor_SLBID?: string;
  XForwardedFor_proto?: string;
  gzip?: string;
  aclId?: string;
  aclType?: string;
  aclStatus?: string;
  description?: string;
  listenerForward?: string;
  forwardPort?: number;
  idleTimeout?: number;
  requestTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      bandwidth: 'Bandwidth',
      listenerPort: 'ListenerPort',
      backendServerPort: 'BackendServerPort',
      XForwardedFor: 'XForwardedFor',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      cookieTimeout: 'CookieTimeout',
      cookie: 'Cookie',
      healthCheck: 'HealthCheck',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      ownerAccount: 'OwnerAccount',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_proto: 'XForwardedFor_proto',
      gzip: 'Gzip',
      aclId: 'AclId',
      aclType: 'AclType',
      aclStatus: 'AclStatus',
      description: 'Description',
      listenerForward: 'ListenerForward',
      forwardPort: 'ForwardPort',
      idleTimeout: 'IdleTimeout',
      requestTimeout: 'RequestTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      bandwidth: 'number',
      listenerPort: 'number',
      backendServerPort: 'number',
      XForwardedFor: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      cookieTimeout: 'number',
      cookie: 'string',
      healthCheck: 'string',
      healthCheckDomain: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
      healthCheckTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckInterval: 'number',
      healthCheckHttpCode: 'string',
      ownerAccount: 'string',
      VServerGroupId: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_proto: 'string',
      gzip: 'string',
      aclId: 'string',
      aclType: 'string',
      aclStatus: 'string',
      description: 'string',
      listenerForward: 'string',
      forwardPort: 'number',
      idleTimeout: 'number',
      requestTimeout: 'number',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  bandwidth?: number;
  listenerPort?: number;
  backendServerPort?: number;
  XForwardedFor?: string;
  scheduler?: string;
  stickySession?: string;
  stickySessionType?: string;
  cookieTimeout?: number;
  cookie?: string;
  healthCheck?: string;
  healthCheckDomain?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  healthCheckTimeout?: number;
  healthCheckConnectPort?: number;
  healthCheckInterval?: number;
  healthCheckHttpCode?: string;
  serverCertificateId?: string;
  ownerAccount?: string;
  VServerGroupId?: string;
  CACertificateId?: string;
  XForwardedFor_SLBIP?: string;
  XForwardedFor_SLBID?: string;
  XForwardedFor_proto?: string;
  gzip?: string;
  aclId?: string;
  aclType?: string;
  aclStatus?: string;
  description?: string;
  idleTimeout?: number;
  requestTimeout?: number;
  enableHttp2?: string;
  TLSCipherPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      bandwidth: 'Bandwidth',
      listenerPort: 'ListenerPort',
      backendServerPort: 'BackendServerPort',
      XForwardedFor: 'XForwardedFor',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      cookieTimeout: 'CookieTimeout',
      cookie: 'Cookie',
      healthCheck: 'HealthCheck',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      serverCertificateId: 'ServerCertificateId',
      ownerAccount: 'OwnerAccount',
      VServerGroupId: 'VServerGroupId',
      CACertificateId: 'CACertificateId',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_proto: 'XForwardedFor_proto',
      gzip: 'Gzip',
      aclId: 'AclId',
      aclType: 'AclType',
      aclStatus: 'AclStatus',
      description: 'Description',
      idleTimeout: 'IdleTimeout',
      requestTimeout: 'RequestTimeout',
      enableHttp2: 'EnableHttp2',
      TLSCipherPolicy: 'TLSCipherPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      bandwidth: 'number',
      listenerPort: 'number',
      backendServerPort: 'number',
      XForwardedFor: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      cookieTimeout: 'number',
      cookie: 'string',
      healthCheck: 'string',
      healthCheckDomain: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
      healthCheckTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckInterval: 'number',
      healthCheckHttpCode: 'string',
      serverCertificateId: 'string',
      ownerAccount: 'string',
      VServerGroupId: 'string',
      CACertificateId: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_proto: 'string',
      gzip: 'string',
      aclId: 'string',
      aclType: 'string',
      aclStatus: 'string',
      description: 'string',
      idleTimeout: 'number',
      requestTimeout: 'number',
      enableHttp2: 'string',
      TLSCipherPolicy: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  backendServerPort?: number;
  bandwidth?: number;
  scheduler?: string;
  persistenceTimeout?: number;
  establishedTimeout?: number;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  healthCheckConnectTimeout?: number;
  healthCheckConnectPort?: number;
  healthCheckInterval?: number;
  healthCheckDomain?: string;
  healthCheckURI?: string;
  healthCheckHttpCode?: string;
  healthCheckType?: string;
  ownerAccount?: string;
  VServerGroupId?: string;
  masterSlaveServerGroupId?: string;
  aclId?: string;
  aclType?: string;
  aclStatus?: string;
  description?: string;
  connectionDrain?: string;
  connectionDrainTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      scheduler: 'Scheduler',
      persistenceTimeout: 'PersistenceTimeout',
      establishedTimeout: 'EstablishedTimeout',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckInterval: 'healthCheckInterval',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckURI: 'HealthCheckURI',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckType: 'HealthCheckType',
      ownerAccount: 'OwnerAccount',
      VServerGroupId: 'VServerGroupId',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      aclId: 'AclId',
      aclType: 'AclType',
      aclStatus: 'AclStatus',
      description: 'Description',
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      backendServerPort: 'number',
      bandwidth: 'number',
      scheduler: 'string',
      persistenceTimeout: 'number',
      establishedTimeout: 'number',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckInterval: 'number',
      healthCheckDomain: 'string',
      healthCheckURI: 'string',
      healthCheckHttpCode: 'string',
      healthCheckType: 'string',
      ownerAccount: 'string',
      VServerGroupId: 'string',
      masterSlaveServerGroupId: 'string',
      aclId: 'string',
      aclType: 'string',
      aclStatus: 'string',
      description: 'string',
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  backendServerPort?: number;
  bandwidth?: number;
  scheduler?: string;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  healthCheckConnectTimeout?: number;
  healthCheckConnectPort?: number;
  healthCheckInterval?: number;
  healthCheckReq?: string;
  healthCheckExp?: string;
  ownerAccount?: string;
  VServerGroupId?: string;
  masterSlaveServerGroupId?: string;
  aclId?: string;
  aclType?: string;
  aclStatus?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      scheduler: 'Scheduler',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckInterval: 'healthCheckInterval',
      healthCheckReq: 'healthCheckReq',
      healthCheckExp: 'healthCheckExp',
      ownerAccount: 'OwnerAccount',
      VServerGroupId: 'VServerGroupId',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      aclId: 'AclId',
      aclType: 'AclType',
      aclStatus: 'AclStatus',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      backendServerPort: 'number',
      bandwidth: 'number',
      scheduler: 'string',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthCheckExp: 'string',
      ownerAccount: 'string',
      VServerGroupId: 'string',
      masterSlaveServerGroupId: 'string',
      aclId: 'string',
      aclType: 'string',
      aclStatus: 'string',
      description: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  loadBalancerId?: string;
  masterSlaveServerGroupName?: string;
  masterSlaveBackendServers?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroupName: 'MasterSlaveServerGroupName',
      masterSlaveBackendServers: 'MasterSlaveBackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      loadBalancerId: 'string',
      masterSlaveServerGroupName: 'string',
      masterSlaveBackendServers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasterSlaveServerGroupResponseBody extends $tea.Model {
  masterSlaveServerGroupId?: string;
  requestId?: string;
  masterSlaveBackendServers?: CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServers;
  static names(): { [key: string]: string } {
    return {
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      requestId: 'RequestId',
      masterSlaveBackendServers: 'MasterSlaveBackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveServerGroupId: 'string',
      requestId: 'string',
      masterSlaveBackendServers: CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServers,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  loadBalancerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  ruleList?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      loadBalancerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  accessKeyId?: string;
  name?: string;
  ciphers?: string[];
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      accessKeyId: 'access_key_id',
      name: 'Name',
      ciphers: 'Ciphers',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      accessKeyId: 'string',
      name: 'string',
      ciphers: { 'type': 'array', 'itemType': 'string' },
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTLSCipherPolicyResponseBody extends $tea.Model {
  TLSCipherPolicyId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      TLSCipherPolicyId: 'TLSCipherPolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TLSCipherPolicyId: 'string',
      requestId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  loadBalancerId?: string;
  VServerGroupName?: string;
  backendServers?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      loadBalancerId: 'LoadBalancerId',
      VServerGroupName: 'VServerGroupName',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      loadBalancerId: 'string',
      VServerGroupName: 'string',
      backendServers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVServerGroupResponseBody extends $tea.Model {
  VServerGroupId?: string;
  requestId?: string;
  backendServers?: CreateVServerGroupResponseBodyBackendServers;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      requestId: 'RequestId',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      requestId: 'string',
      backendServers: CreateVServerGroupResponseBodyBackendServers,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  aclId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      aclId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  CACertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      CACertificateId: 'CACertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      CACertificateId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  domainExtensionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      domainExtensionId: 'DomainExtensionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      domainExtensionId: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      ownerAccount: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  masterSlaveServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      masterSlaveServerGroupId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  ruleIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  serverCertificateId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      serverCertificateId: 'ServerCertificateId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      serverCertificateId: 'string',
      ownerAccount: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  accessKeyId?: string;
  TLSCipherPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      accessKeyId: 'access_key_id',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      accessKeyId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  aclId?: string;
  aclEntryComment?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      aclId: 'AclId',
      aclEntryComment: 'AclEntryComment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      aclId: 'string',
      aclEntryComment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBody extends $tea.Model {
  aclId?: string;
  addressIPVersion?: string;
  requestId?: string;
  aclName?: string;
  resourceGroupId?: string;
  aclEntrys?: DescribeAccessControlListAttributeResponseBodyAclEntrys;
  relatedListeners?: DescribeAccessControlListAttributeResponseBodyRelatedListeners;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      addressIPVersion: 'AddressIPVersion',
      requestId: 'RequestId',
      aclName: 'AclName',
      resourceGroupId: 'ResourceGroupId',
      aclEntrys: 'AclEntrys',
      relatedListeners: 'RelatedListeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      addressIPVersion: 'string',
      requestId: 'string',
      aclName: 'string',
      resourceGroupId: 'string',
      aclEntrys: DescribeAccessControlListAttributeResponseBodyAclEntrys,
      relatedListeners: DescribeAccessControlListAttributeResponseBodyRelatedListeners,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  aclName?: string;
  addressIPVersion?: string;
  pageSize?: number;
  pageNumber?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  count?: number;
  acls?: DescribeAccessControlListsResponseBodyAcls;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      count: 'Count',
      acls: 'Acls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      count: 'number',
      acls: DescribeAccessControlListsResponseBodyAcls,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  addressType?: string;
  addressIPVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      addressType: 'AddressType',
      addressIPVersion: 'AddressIPVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      addressType: 'string',
      addressIPVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  requestId?: string;
  availableResources?: DescribeAvailableResourceResponseBodyAvailableResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableResources: 'AvailableResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableResources: DescribeAvailableResourceResponseBodyAvailableResources,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  CACertificateId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      CACertificateId: 'CACertificateId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      CACertificateId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesResponseBody extends $tea.Model {
  requestId?: string;
  CACertificates?: DescribeCACertificatesResponseBodyCACertificates;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      CACertificates: 'CACertificates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      CACertificates: DescribeCACertificatesResponseBodyCACertificates,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  domainExtensionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      domainExtensionId: 'DomainExtensionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      domainExtensionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionAttributeResponseBody extends $tea.Model {
  domain?: string;
  requestId?: string;
  loadBalancerId?: string;
  listenerPort?: number;
  serverCertificateId?: string;
  domainExtensionId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      requestId: 'RequestId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      serverCertificateId: 'ServerCertificateId',
      domainExtensionId: 'DomainExtensionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      requestId: 'string',
      loadBalancerId: 'string',
      listenerPort: 'number',
      serverCertificateId: 'string',
      domainExtensionId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  loadBalancerId?: string;
  listenerPort?: number;
  domainExtensionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      domainExtensionId: 'DomainExtensionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      loadBalancerId: 'string',
      listenerPort: 'number',
      domainExtensionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionsResponseBody extends $tea.Model {
  requestId?: string;
  domainExtensions?: DescribeDomainExtensionsResponseBodyDomainExtensions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainExtensions: 'DomainExtensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainExtensions: DescribeDomainExtensionsResponseBodyDomainExtensions,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  ownerAccount?: string;
  listenerProtocol?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      ownerAccount: 'OwnerAccount',
      listenerProtocol: 'ListenerProtocol',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      ownerAccount: 'string',
      listenerProtocol: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBody extends $tea.Model {
  requestId?: string;
  backendServers?: DescribeHealthStatusResponseBodyBackendServers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backendServers: DescribeHealthStatusResponseBodyBackendServers,
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerAccessControlAttributeResponseBody extends $tea.Model {
  sourceItems?: string;
  accessControlStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceItems: 'SourceItems',
      accessControlStatus: 'AccessControlStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceItems: 'string',
      accessControlStatus: 'string',
      requestId: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBody extends $tea.Model {
  vpcId?: string;
  createTimeStamp?: number;
  createTime?: string;
  loadBalancerId?: string;
  payType?: string;
  addressType?: string;
  networkType?: string;
  addressIPVersion?: string;
  renewalCycUnit?: string;
  requestId?: string;
  bandwidth?: number;
  loadBalancerName?: string;
  address?: string;
  slaveZoneId?: string;
  endTimeStamp?: number;
  masterZoneId?: string;
  loadBalancerSpec?: string;
  autoReleaseTime?: number;
  modificationProtectionReason?: string;
  regionId?: string;
  modificationProtectionStatus?: string;
  endTime?: string;
  vSwitchId?: string;
  loadBalancerStatus?: string;
  resourceGroupId?: string;
  internetChargeType?: string;
  deleteProtection?: string;
  regionIdAlias?: string;
  renewalStatus?: string;
  renewalDuration?: number;
  listenerPorts?: DescribeLoadBalancerAttributeResponseBodyListenerPorts;
  listenerPortsAndProtocal?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal;
  listenerPortsAndProtocol?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol;
  backendServers?: DescribeLoadBalancerAttributeResponseBodyBackendServers;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      createTimeStamp: 'CreateTimeStamp',
      createTime: 'CreateTime',
      loadBalancerId: 'LoadBalancerId',
      payType: 'PayType',
      addressType: 'AddressType',
      networkType: 'NetworkType',
      addressIPVersion: 'AddressIPVersion',
      renewalCycUnit: 'RenewalCycUnit',
      requestId: 'RequestId',
      bandwidth: 'Bandwidth',
      loadBalancerName: 'LoadBalancerName',
      address: 'Address',
      slaveZoneId: 'SlaveZoneId',
      endTimeStamp: 'EndTimeStamp',
      masterZoneId: 'MasterZoneId',
      loadBalancerSpec: 'LoadBalancerSpec',
      autoReleaseTime: 'AutoReleaseTime',
      modificationProtectionReason: 'ModificationProtectionReason',
      regionId: 'RegionId',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      endTime: 'EndTime',
      vSwitchId: 'VSwitchId',
      loadBalancerStatus: 'LoadBalancerStatus',
      resourceGroupId: 'ResourceGroupId',
      internetChargeType: 'InternetChargeType',
      deleteProtection: 'DeleteProtection',
      regionIdAlias: 'RegionIdAlias',
      renewalStatus: 'RenewalStatus',
      renewalDuration: 'RenewalDuration',
      listenerPorts: 'ListenerPorts',
      listenerPortsAndProtocal: 'ListenerPortsAndProtocal',
      listenerPortsAndProtocol: 'ListenerPortsAndProtocol',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      createTimeStamp: 'number',
      createTime: 'string',
      loadBalancerId: 'string',
      payType: 'string',
      addressType: 'string',
      networkType: 'string',
      addressIPVersion: 'string',
      renewalCycUnit: 'string',
      requestId: 'string',
      bandwidth: 'number',
      loadBalancerName: 'string',
      address: 'string',
      slaveZoneId: 'string',
      endTimeStamp: 'number',
      masterZoneId: 'string',
      loadBalancerSpec: 'string',
      autoReleaseTime: 'number',
      modificationProtectionReason: 'string',
      regionId: 'string',
      modificationProtectionStatus: 'string',
      endTime: 'string',
      vSwitchId: 'string',
      loadBalancerStatus: 'string',
      resourceGroupId: 'string',
      internetChargeType: 'string',
      deleteProtection: 'string',
      regionIdAlias: 'string',
      renewalStatus: 'string',
      renewalDuration: 'number',
      listenerPorts: DescribeLoadBalancerAttributeResponseBodyListenerPorts,
      listenerPortsAndProtocal: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal,
      listenerPortsAndProtocol: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol,
      backendServers: DescribeLoadBalancerAttributeResponseBodyBackendServers,
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeResponseBody extends $tea.Model {
  aclType?: string;
  VServerGroupId?: string;
  status?: string;
  cookie?: string;
  gzip?: string;
  healthCheckConnectPort?: number;
  requestId?: string;
  description?: string;
  bandwidth?: number;
  healthCheckTimeout?: number;
  aclStatus?: string;
  backendServerPort?: number;
  cookieTimeout?: number;
  healthCheckDomain?: string;
  unhealthyThreshold?: number;
  forwardPort?: number;
  XForwardedFor_SLBID?: string;
  securityStatus?: string;
  healthCheckHttpCode?: string;
  listenerForward?: string;
  XForwardedFor?: string;
  idleTimeout?: number;
  requestTimeout?: number;
  listenerPort?: number;
  healthCheckInterval?: number;
  healthCheckURI?: string;
  stickySessionType?: string;
  aclId?: string;
  scheduler?: string;
  healthyThreshold?: number;
  XForwardedFor_proto?: string;
  XForwardedFor_SLBIP?: string;
  stickySession?: string;
  healthCheck?: string;
  rules?: DescribeLoadBalancerHTTPListenerAttributeResponseBodyRules;
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      VServerGroupId: 'VServerGroupId',
      status: 'Status',
      cookie: 'Cookie',
      gzip: 'Gzip',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      requestId: 'RequestId',
      description: 'Description',
      bandwidth: 'Bandwidth',
      healthCheckTimeout: 'HealthCheckTimeout',
      aclStatus: 'AclStatus',
      backendServerPort: 'BackendServerPort',
      cookieTimeout: 'CookieTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      unhealthyThreshold: 'UnhealthyThreshold',
      forwardPort: 'ForwardPort',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      securityStatus: 'SecurityStatus',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      listenerForward: 'ListenerForward',
      XForwardedFor: 'XForwardedFor',
      idleTimeout: 'IdleTimeout',
      requestTimeout: 'RequestTimeout',
      listenerPort: 'ListenerPort',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckURI: 'HealthCheckURI',
      stickySessionType: 'StickySessionType',
      aclId: 'AclId',
      scheduler: 'Scheduler',
      healthyThreshold: 'HealthyThreshold',
      XForwardedFor_proto: 'XForwardedFor_proto',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      stickySession: 'StickySession',
      healthCheck: 'HealthCheck',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      VServerGroupId: 'string',
      status: 'string',
      cookie: 'string',
      gzip: 'string',
      healthCheckConnectPort: 'number',
      requestId: 'string',
      description: 'string',
      bandwidth: 'number',
      healthCheckTimeout: 'number',
      aclStatus: 'string',
      backendServerPort: 'number',
      cookieTimeout: 'number',
      healthCheckDomain: 'string',
      unhealthyThreshold: 'number',
      forwardPort: 'number',
      XForwardedFor_SLBID: 'string',
      securityStatus: 'string',
      healthCheckHttpCode: 'string',
      listenerForward: 'string',
      XForwardedFor: 'string',
      idleTimeout: 'number',
      requestTimeout: 'number',
      listenerPort: 'number',
      healthCheckInterval: 'number',
      healthCheckURI: 'string',
      stickySessionType: 'string',
      aclId: 'string',
      scheduler: 'string',
      healthyThreshold: 'number',
      XForwardedFor_proto: 'string',
      XForwardedFor_SLBIP: 'string',
      stickySession: 'string',
      healthCheck: 'string',
      rules: DescribeLoadBalancerHTTPListenerAttributeResponseBodyRules,
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBody extends $tea.Model {
  aclType?: string;
  XForwardedFor_ClientCertClientVerify?: string;
  CACertificateId?: string;
  requestId?: string;
  healthCheckConnectPort?: number;
  backendServerPort?: number;
  cookieTimeout?: number;
  healthCheckDomain?: string;
  XForwardedFor?: string;
  XForwardedFor_ClientCertFingerprint?: string;
  idleTimeout?: number;
  listenerPort?: number;
  healthCheckURI?: string;
  XForwardedFor_SLBPORT?: string;
  stickySessionType?: string;
  scheduler?: string;
  XForwardedFor_proto?: string;
  TLSCipherPolicy?: string;
  status?: string;
  VServerGroupId?: string;
  XForwardedFor_ClientSrcPort?: string;
  cookie?: string;
  gzip?: string;
  enableHttp2?: string;
  bandwidth?: number;
  description?: string;
  healthCheckTimeout?: number;
  aclStatus?: string;
  unhealthyThreshold?: number;
  XForwardedFor_SLBID?: string;
  XForwardedFor_ClientCertSubjectDN?: string;
  securityStatus?: string;
  healthCheckHttpCode?: string;
  requestTimeout?: number;
  healthCheckInterval?: number;
  serverCertificateId?: string;
  aclId?: string;
  XForwardedFor_ClientCertIssuerDN?: string;
  healthyThreshold?: number;
  XForwardedFor_SLBIP?: string;
  stickySession?: string;
  healthCheck?: string;
  rules?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRules;
  domainExtensions?: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensions;
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      XForwardedFor_ClientCertClientVerify: 'XForwardedFor_ClientCertClientVerify',
      CACertificateId: 'CACertificateId',
      requestId: 'RequestId',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      backendServerPort: 'BackendServerPort',
      cookieTimeout: 'CookieTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_ClientCertFingerprint: 'XForwardedFor_ClientCertFingerprint',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      healthCheckURI: 'HealthCheckURI',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      stickySessionType: 'StickySessionType',
      scheduler: 'Scheduler',
      XForwardedFor_proto: 'XForwardedFor_proto',
      TLSCipherPolicy: 'TLSCipherPolicy',
      status: 'Status',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      cookie: 'Cookie',
      gzip: 'Gzip',
      enableHttp2: 'EnableHttp2',
      bandwidth: 'Bandwidth',
      description: 'Description',
      healthCheckTimeout: 'HealthCheckTimeout',
      aclStatus: 'AclStatus',
      unhealthyThreshold: 'UnhealthyThreshold',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_ClientCertSubjectDN: 'XForwardedFor_ClientCertSubjectDN',
      securityStatus: 'SecurityStatus',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      requestTimeout: 'RequestTimeout',
      healthCheckInterval: 'HealthCheckInterval',
      serverCertificateId: 'ServerCertificateId',
      aclId: 'AclId',
      XForwardedFor_ClientCertIssuerDN: 'XForwardedFor_ClientCertIssuerDN',
      healthyThreshold: 'HealthyThreshold',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      stickySession: 'StickySession',
      healthCheck: 'HealthCheck',
      rules: 'Rules',
      domainExtensions: 'DomainExtensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      XForwardedFor_ClientCertClientVerify: 'string',
      CACertificateId: 'string',
      requestId: 'string',
      healthCheckConnectPort: 'number',
      backendServerPort: 'number',
      cookieTimeout: 'number',
      healthCheckDomain: 'string',
      XForwardedFor: 'string',
      XForwardedFor_ClientCertFingerprint: 'string',
      idleTimeout: 'number',
      listenerPort: 'number',
      healthCheckURI: 'string',
      XForwardedFor_SLBPORT: 'string',
      stickySessionType: 'string',
      scheduler: 'string',
      XForwardedFor_proto: 'string',
      TLSCipherPolicy: 'string',
      status: 'string',
      VServerGroupId: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      cookie: 'string',
      gzip: 'string',
      enableHttp2: 'string',
      bandwidth: 'number',
      description: 'string',
      healthCheckTimeout: 'number',
      aclStatus: 'string',
      unhealthyThreshold: 'number',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_ClientCertSubjectDN: 'string',
      securityStatus: 'string',
      healthCheckHttpCode: 'string',
      requestTimeout: 'number',
      healthCheckInterval: 'number',
      serverCertificateId: 'string',
      aclId: 'string',
      XForwardedFor_ClientCertIssuerDN: 'string',
      healthyThreshold: 'number',
      XForwardedFor_SLBIP: 'string',
      stickySession: 'string',
      healthCheck: 'string',
      rules: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRules,
      domainExtensions: DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensions,
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  nextToken?: string;
  maxResults?: number;
  listenerProtocol?: string;
  loadBalancerId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      nextToken: 'string',
      maxResults: 'number',
      listenerProtocol: 'string',
      loadBalancerId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  maxResults?: number;
  listeners?: DescribeLoadBalancerListenersResponseBodyListeners[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      maxResults: 'MaxResults',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      maxResults: 'number',
      listeners: { 'type': 'array', 'itemType': DescribeLoadBalancerListenersResponseBodyListeners },
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

export class DescribeLoadBalancersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  serverId?: string;
  addressIPVersion?: string;
  loadBalancerStatus?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  serverIntranetAddress?: string;
  addressType?: string;
  internetChargeType?: string;
  vpcId?: string;
  vSwitchId?: string;
  networkType?: string;
  address?: string;
  masterZoneId?: string;
  slaveZoneId?: string;
  ownerAccount?: string;
  tags?: string;
  payType?: string;
  resourceGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      serverId: 'ServerId',
      addressIPVersion: 'AddressIPVersion',
      loadBalancerStatus: 'LoadBalancerStatus',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      serverIntranetAddress: 'ServerIntranetAddress',
      addressType: 'AddressType',
      internetChargeType: 'InternetChargeType',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      networkType: 'NetworkType',
      address: 'Address',
      masterZoneId: 'MasterZoneId',
      slaveZoneId: 'SlaveZoneId',
      ownerAccount: 'OwnerAccount',
      tags: 'Tags',
      payType: 'PayType',
      resourceGroupId: 'ResourceGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      serverId: 'string',
      addressIPVersion: 'string',
      loadBalancerStatus: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      serverIntranetAddress: 'string',
      addressType: 'string',
      internetChargeType: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      networkType: 'string',
      address: 'string',
      masterZoneId: 'string',
      slaveZoneId: 'string',
      ownerAccount: 'string',
      tags: 'string',
      payType: 'string',
      resourceGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  loadBalancers?: DescribeLoadBalancersResponseBodyLoadBalancers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      loadBalancers: 'LoadBalancers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      loadBalancers: DescribeLoadBalancersResponseBodyLoadBalancers,
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

export class DescribeLoadBalancerTCPListenerAttributeRequest extends $tea.Model {
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeResponseBody extends $tea.Model {
  VServerGroupId?: string;
  status?: string;
  aclType?: string;
  connectionDrainTimeout?: number;
  requestId?: string;
  healthCheckConnectPort?: number;
  description?: string;
  bandwidth?: number;
  healthCheckType?: string;
  masterSlaveServerGroupId?: string;
  backendServerPort?: number;
  aclStatus?: string;
  healthCheckDomain?: string;
  unhealthyThreshold?: number;
  healthCheckHttpCode?: string;
  persistenceTimeout?: number;
  listenerPort?: number;
  healthCheckInterval?: number;
  healthCheckURI?: string;
  aclId?: string;
  synProxy?: string;
  scheduler?: string;
  establishedTimeout?: number;
  healthCheckConnectTimeout?: number;
  healthyThreshold?: number;
  connectionDrain?: string;
  healthCheckMethod?: string;
  healthCheck?: string;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      status: 'Status',
      aclType: 'AclType',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      requestId: 'RequestId',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      description: 'Description',
      bandwidth: 'Bandwidth',
      healthCheckType: 'HealthCheckType',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      backendServerPort: 'BackendServerPort',
      aclStatus: 'AclStatus',
      healthCheckDomain: 'HealthCheckDomain',
      unhealthyThreshold: 'UnhealthyThreshold',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      persistenceTimeout: 'PersistenceTimeout',
      listenerPort: 'ListenerPort',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckURI: 'HealthCheckURI',
      aclId: 'AclId',
      synProxy: 'SynProxy',
      scheduler: 'Scheduler',
      establishedTimeout: 'EstablishedTimeout',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthyThreshold: 'HealthyThreshold',
      connectionDrain: 'ConnectionDrain',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      status: 'string',
      aclType: 'string',
      connectionDrainTimeout: 'number',
      requestId: 'string',
      healthCheckConnectPort: 'number',
      description: 'string',
      bandwidth: 'number',
      healthCheckType: 'string',
      masterSlaveServerGroupId: 'string',
      backendServerPort: 'number',
      aclStatus: 'string',
      healthCheckDomain: 'string',
      unhealthyThreshold: 'number',
      healthCheckHttpCode: 'string',
      persistenceTimeout: 'number',
      listenerPort: 'number',
      healthCheckInterval: 'number',
      healthCheckURI: 'string',
      aclId: 'string',
      synProxy: 'string',
      scheduler: 'string',
      establishedTimeout: 'number',
      healthCheckConnectTimeout: 'number',
      healthyThreshold: 'number',
      connectionDrain: 'string',
      healthCheckMethod: 'string',
      healthCheck: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerUDPListenerAttributeResponseBody extends $tea.Model {
  VServerGroupId?: string;
  status?: string;
  aclType?: string;
  requestId?: string;
  healthCheckConnectPort?: number;
  description?: string;
  bandwidth?: number;
  masterSlaveServerGroupId?: string;
  backendServerPort?: number;
  aclStatus?: string;
  unhealthyThreshold?: number;
  listenerPort?: number;
  healthCheckInterval?: number;
  healthCheckExp?: string;
  aclId?: string;
  scheduler?: string;
  healthCheckConnectTimeout?: number;
  healthyThreshold?: number;
  healthCheckReq?: string;
  healthCheck?: string;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      status: 'Status',
      aclType: 'AclType',
      requestId: 'RequestId',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      description: 'Description',
      bandwidth: 'Bandwidth',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      backendServerPort: 'BackendServerPort',
      aclStatus: 'AclStatus',
      unhealthyThreshold: 'UnhealthyThreshold',
      listenerPort: 'ListenerPort',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckExp: 'HealthCheckExp',
      aclId: 'AclId',
      scheduler: 'Scheduler',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthyThreshold: 'HealthyThreshold',
      healthCheckReq: 'HealthCheckReq',
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      status: 'string',
      aclType: 'string',
      requestId: 'string',
      healthCheckConnectPort: 'number',
      description: 'string',
      bandwidth: 'number',
      masterSlaveServerGroupId: 'string',
      backendServerPort: 'number',
      aclStatus: 'string',
      unhealthyThreshold: 'number',
      listenerPort: 'number',
      healthCheckInterval: 'number',
      healthCheckExp: 'string',
      aclId: 'string',
      scheduler: 'string',
      healthCheckConnectTimeout: 'number',
      healthyThreshold: 'number',
      healthCheckReq: 'string',
      healthCheck: 'string',
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

export class DescribeMasterSlaveServerGroupAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  masterSlaveServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      masterSlaveServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupAttributeResponseBody extends $tea.Model {
  requestId?: string;
  loadBalancerId?: string;
  masterSlaveServerGroupName?: string;
  masterSlaveServerGroupId?: string;
  masterSlaveBackendServers?: DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroupName: 'MasterSlaveServerGroupName',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      masterSlaveBackendServers: 'MasterSlaveBackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      loadBalancerId: 'string',
      masterSlaveServerGroupName: 'string',
      masterSlaveServerGroupId: 'string',
      masterSlaveBackendServers: DescribeMasterSlaveServerGroupAttributeResponseBodyMasterSlaveBackendServers,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  loadBalancerId?: string;
  includeListener?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      loadBalancerId: 'LoadBalancerId',
      includeListener: 'IncludeListener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      loadBalancerId: 'string',
      includeListener: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBody extends $tea.Model {
  requestId?: string;
  masterSlaveServerGroups?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      masterSlaveServerGroups: 'MasterSlaveServerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      masterSlaveServerGroups: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroups,
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
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

export class DescribeRuleAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleAttributeResponseBody extends $tea.Model {
  healthCheckHttpCode?: string;
  VServerGroupId?: string;
  domain?: string;
  cookie?: string;
  loadBalancerId?: string;
  listenerPort?: string;
  healthCheckInterval?: number;
  url?: string;
  healthCheckURI?: string;
  stickySessionType?: string;
  ruleName?: string;
  ruleId?: string;
  healthCheckConnectPort?: number;
  scheduler?: string;
  requestId?: string;
  healthCheckTimeout?: number;
  listenerSync?: string;
  healthyThreshold?: number;
  cookieTimeout?: number;
  healthCheckDomain?: string;
  unhealthyThreshold?: number;
  stickySession?: string;
  healthCheck?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckHttpCode: 'HealthCheckHttpCode',
      VServerGroupId: 'VServerGroupId',
      domain: 'Domain',
      cookie: 'Cookie',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      healthCheckInterval: 'HealthCheckInterval',
      url: 'Url',
      healthCheckURI: 'HealthCheckURI',
      stickySessionType: 'StickySessionType',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      scheduler: 'Scheduler',
      requestId: 'RequestId',
      healthCheckTimeout: 'HealthCheckTimeout',
      listenerSync: 'ListenerSync',
      healthyThreshold: 'HealthyThreshold',
      cookieTimeout: 'CookieTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      unhealthyThreshold: 'UnhealthyThreshold',
      stickySession: 'StickySession',
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckHttpCode: 'string',
      VServerGroupId: 'string',
      domain: 'string',
      cookie: 'string',
      loadBalancerId: 'string',
      listenerPort: 'string',
      healthCheckInterval: 'number',
      url: 'string',
      healthCheckURI: 'string',
      stickySessionType: 'string',
      ruleName: 'string',
      ruleId: 'string',
      healthCheckConnectPort: 'number',
      scheduler: 'string',
      requestId: 'string',
      healthCheckTimeout: 'number',
      listenerSync: 'string',
      healthyThreshold: 'number',
      cookieTimeout: 'number',
      healthCheckDomain: 'string',
      unhealthyThreshold: 'number',
      stickySession: 'string',
      healthCheck: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  loadBalancerId?: string;
  listenerProtocol?: string;
  listenerPort?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      loadBalancerId: 'LoadBalancerId',
      listenerProtocol: 'ListenerProtocol',
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      loadBalancerId: 'string',
      listenerProtocol: 'string',
      listenerPort: 'number',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  serverCertificateId?: string;
  ownerAccount?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      serverCertificateId: 'ServerCertificateId',
      ownerAccount: 'OwnerAccount',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      serverCertificateId: 'string',
      ownerAccount: 'string',
      resourceGroupId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  loadBalancerId?: string;
  tags?: string;
  distinctKey?: boolean;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      loadBalancerId: 'LoadBalancerId',
      tags: 'Tags',
      distinctKey: 'DistinctKey',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      loadBalancerId: 'string',
      tags: 'string',
      distinctKey: 'boolean',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  tagSets?: DescribeTagsResponseBodyTagSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      tagSets: 'TagSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      tagSets: DescribeTagsResponseBodyTagSets,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupAttributeResponseBody extends $tea.Model {
  VServerGroupId?: string;
  VServerGroupName?: string;
  requestId?: string;
  loadBalancerId?: string;
  backendServers?: DescribeVServerGroupAttributeResponseBodyBackendServers;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
      requestId: 'RequestId',
      loadBalancerId: 'LoadBalancerId',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      VServerGroupName: 'string',
      requestId: 'string',
      loadBalancerId: 'string',
      backendServers: DescribeVServerGroupAttributeResponseBodyBackendServers,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  loadBalancerId?: string;
  includeRule?: boolean;
  includeListener?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      loadBalancerId: 'LoadBalancerId',
      includeRule: 'IncludeRule',
      includeListener: 'IncludeListener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      loadBalancerId: 'string',
      includeRule: 'boolean',
      includeListener: 'boolean',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
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

export class ListTagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
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

export class ListTLSCipherPoliciesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  accessKeyId?: string;
  TLSCipherPolicyId?: string;
  name?: string;
  includeListener?: boolean;
  nextToken?: string;
  maxItems?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      accessKeyId: 'access_key_id',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
      name: 'Name',
      includeListener: 'IncludeListener',
      nextToken: 'NextToken',
      maxItems: 'MaxItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      accessKeyId: 'string',
      TLSCipherPolicyId: 'string',
      name: 'string',
      includeListener: 'boolean',
      nextToken: 'string',
      maxItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTLSCipherPoliciesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  isTruncated?: boolean;
  TLSCipherPolicies?: ListTLSCipherPoliciesResponseBodyTLSCipherPolicies[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      isTruncated: 'IsTruncated',
      TLSCipherPolicies: 'TLSCipherPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      isTruncated: 'boolean',
      TLSCipherPolicies: { 'type': 'array', 'itemType': ListTLSCipherPoliciesResponseBodyTLSCipherPolicies },
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

export class ModifyLoadBalancerInstanceSpecRequest extends $tea.Model {
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  loadBalancerSpec?: string;
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      loadBalancerSpec: 'LoadBalancerSpec',
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      loadBalancerSpec: 'string',
      autoPay: 'boolean',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  internetChargeType?: string;
  bandwidth?: number;
  ownerAccount?: string;
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      internetChargeType: 'InternetChargeType',
      bandwidth: 'Bandwidth',
      ownerAccount: 'OwnerAccount',
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      internetChargeType: 'string',
      bandwidth: 'number',
      ownerAccount: 'string',
      autoPay: 'boolean',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  loadBalancerId?: string;
  payType?: string;
  pricingCycle?: string;
  duration?: number;
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      loadBalancerId: 'LoadBalancerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      duration: 'Duration',
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      loadBalancerId: 'string',
      payType: 'string',
      pricingCycle: 'string',
      duration: 'number',
      autoPay: 'boolean',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  VServerGroupId?: string;
  oldBackendServers?: string;
  newBackendServers?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      VServerGroupId: 'VServerGroupId',
      oldBackendServers: 'OldBackendServers',
      newBackendServers: 'NewBackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      VServerGroupId: 'string',
      oldBackendServers: 'string',
      newBackendServers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVServerGroupBackendServersResponseBody extends $tea.Model {
  VServerGroupId?: string;
  requestId?: string;
  backendServers?: ModifyVServerGroupBackendServersResponseBodyBackendServers;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      requestId: 'RequestId',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      requestId: 'string',
      backendServers: ModifyVServerGroupBackendServersResponseBodyBackendServers,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  aclId?: string;
  aclEntrys?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      aclId: 'AclId',
      aclEntrys: 'AclEntrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      aclId: 'string',
      aclEntrys: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  backendServers?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      backendServers: 'BackendServers',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      backendServers: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersResponseBody extends $tea.Model {
  loadBalancerId?: string;
  requestId?: string;
  backendServers?: RemoveBackendServersResponseBodyBackendServers;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      requestId: 'string',
      backendServers: RemoveBackendServersResponseBodyBackendServers,
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  sourceItems?: string;
  ownerAccount?: string;
  listenerProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      sourceItems: 'SourceItems',
      ownerAccount: 'OwnerAccount',
      listenerProtocol: 'ListenerProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      sourceItems: 'string',
      ownerAccount: 'string',
      listenerProtocol: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  loadBalancerId?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      loadBalancerId: 'LoadBalancerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      loadBalancerId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  VServerGroupId?: string;
  backendServers?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      VServerGroupId: 'VServerGroupId',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      VServerGroupId: 'string',
      backendServers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVServerGroupBackendServersResponseBody extends $tea.Model {
  VServerGroupId?: string;
  requestId?: string;
  backendServers?: RemoveVServerGroupBackendServersResponseBodyBackendServers;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      requestId: 'RequestId',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      requestId: 'string',
      backendServers: RemoveVServerGroupBackendServersResponseBodyBackendServers,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  aclId?: string;
  aclName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      aclId: 'AclId',
      aclName: 'AclName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      aclId: 'string',
      aclName: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  backendServers?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      backendServers: 'BackendServers',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      backendServers: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersResponseBody extends $tea.Model {
  loadBalancerId?: string;
  requestId?: string;
  backendServers?: SetBackendServersResponseBodyBackendServers;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      requestId: 'string',
      backendServers: SetBackendServersResponseBodyBackendServers,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  CACertificateId?: string;
  CACertificateName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      CACertificateId: 'CACertificateId',
      CACertificateName: 'CACertificateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      CACertificateId: 'string',
      CACertificateName: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  domainExtensionId?: string;
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      domainExtensionId: 'DomainExtensionId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      domainExtensionId: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  accessControlStatus?: string;
  ownerAccount?: string;
  listenerProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      accessControlStatus: 'AccessControlStatus',
      ownerAccount: 'OwnerAccount',
      listenerProtocol: 'ListenerProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      accessControlStatus: 'string',
      ownerAccount: 'string',
      listenerProtocol: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  deleteProtection?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      deleteProtection: 'DeleteProtection',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      deleteProtection: 'string',
      ownerAccount: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  bandwidth?: number;
  XForwardedFor?: string;
  scheduler?: string;
  stickySession?: string;
  stickySessionType?: string;
  cookieTimeout?: number;
  cookie?: string;
  healthCheck?: string;
  healthCheckDomain?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  healthCheckTimeout?: number;
  healthCheckInterval?: number;
  healthCheckConnectPort?: number;
  healthCheckHttpCode?: string;
  ownerAccount?: string;
  VServerGroup?: string;
  VServerGroupId?: string;
  XForwardedFor_SLBIP?: string;
  XForwardedFor_SLBID?: string;
  XForwardedFor_proto?: string;
  gzip?: string;
  aclId?: string;
  aclType?: string;
  aclStatus?: string;
  idleTimeout?: number;
  requestTimeout?: number;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      bandwidth: 'Bandwidth',
      XForwardedFor: 'XForwardedFor',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      cookieTimeout: 'CookieTimeout',
      cookie: 'Cookie',
      healthCheck: 'HealthCheck',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      ownerAccount: 'OwnerAccount',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_proto: 'XForwardedFor_proto',
      gzip: 'Gzip',
      aclId: 'AclId',
      aclType: 'AclType',
      aclStatus: 'AclStatus',
      idleTimeout: 'IdleTimeout',
      requestTimeout: 'RequestTimeout',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      bandwidth: 'number',
      XForwardedFor: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      cookieTimeout: 'number',
      cookie: 'string',
      healthCheck: 'string',
      healthCheckDomain: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
      healthCheckTimeout: 'number',
      healthCheckInterval: 'number',
      healthCheckConnectPort: 'number',
      healthCheckHttpCode: 'string',
      ownerAccount: 'string',
      VServerGroup: 'string',
      VServerGroupId: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_proto: 'string',
      gzip: 'string',
      aclId: 'string',
      aclType: 'string',
      aclStatus: 'string',
      idleTimeout: 'number',
      requestTimeout: 'number',
      description: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  bandwidth?: number;
  XForwardedFor?: string;
  scheduler?: string;
  stickySession?: string;
  stickySessionType?: string;
  cookieTimeout?: number;
  cookie?: string;
  healthCheck?: string;
  healthCheckDomain?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  healthCheckTimeout?: number;
  healthCheckInterval?: number;
  healthCheckConnectPort?: number;
  healthCheckHttpCode?: string;
  ownerAccount?: string;
  serverCertificateId?: string;
  CACertificateId?: string;
  VServerGroup?: string;
  VServerGroupId?: string;
  XForwardedFor_SLBIP?: string;
  XForwardedFor_SLBID?: string;
  XForwardedFor_proto?: string;
  gzip?: string;
  aclId?: string;
  aclType?: string;
  aclStatus?: string;
  idleTimeout?: number;
  requestTimeout?: number;
  enableHttp2?: string;
  TLSCipherPolicy?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      bandwidth: 'Bandwidth',
      XForwardedFor: 'XForwardedFor',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      cookieTimeout: 'CookieTimeout',
      cookie: 'Cookie',
      healthCheck: 'HealthCheck',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      ownerAccount: 'OwnerAccount',
      serverCertificateId: 'ServerCertificateId',
      CACertificateId: 'CACertificateId',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_proto: 'XForwardedFor_proto',
      gzip: 'Gzip',
      aclId: 'AclId',
      aclType: 'AclType',
      aclStatus: 'AclStatus',
      idleTimeout: 'IdleTimeout',
      requestTimeout: 'RequestTimeout',
      enableHttp2: 'EnableHttp2',
      TLSCipherPolicy: 'TLSCipherPolicy',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      bandwidth: 'number',
      XForwardedFor: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      cookieTimeout: 'number',
      cookie: 'string',
      healthCheck: 'string',
      healthCheckDomain: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
      healthCheckTimeout: 'number',
      healthCheckInterval: 'number',
      healthCheckConnectPort: 'number',
      healthCheckHttpCode: 'string',
      ownerAccount: 'string',
      serverCertificateId: 'string',
      CACertificateId: 'string',
      VServerGroup: 'string',
      VServerGroupId: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_proto: 'string',
      gzip: 'string',
      aclId: 'string',
      aclType: 'string',
      aclStatus: 'string',
      idleTimeout: 'number',
      requestTimeout: 'number',
      enableHttp2: 'string',
      TLSCipherPolicy: 'string',
      description: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  modificationProtectionStatus?: string;
  ownerAccount?: string;
  modificationProtectionReason?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      ownerAccount: 'OwnerAccount',
      modificationProtectionReason: 'ModificationProtectionReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      modificationProtectionStatus: 'string',
      ownerAccount: 'string',
      modificationProtectionReason: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  loadBalancerName?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      ownerAccount: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  loadBalancerStatus?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerStatus: 'LoadBalancerStatus',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      loadBalancerStatus: 'string',
      ownerAccount: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  bandwidth?: number;
  scheduler?: string;
  persistenceTimeout?: number;
  establishedTimeout?: number;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  healthCheckConnectTimeout?: number;
  healthCheckConnectPort?: number;
  healthCheckInterval?: number;
  healthCheckDomain?: string;
  healthCheckURI?: string;
  healthCheckHttpCode?: string;
  healthCheckType?: string;
  synProxy?: string;
  ownerAccount?: string;
  VServerGroup?: string;
  VServerGroupId?: string;
  masterSlaveServerGroupId?: string;
  masterSlaveServerGroup?: string;
  aclId?: string;
  aclType?: string;
  aclStatus?: string;
  description?: string;
  connectionDrain?: string;
  connectionDrainTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      bandwidth: 'Bandwidth',
      scheduler: 'Scheduler',
      persistenceTimeout: 'PersistenceTimeout',
      establishedTimeout: 'EstablishedTimeout',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckURI: 'HealthCheckURI',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckType: 'HealthCheckType',
      synProxy: 'SynProxy',
      ownerAccount: 'OwnerAccount',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      masterSlaveServerGroup: 'MasterSlaveServerGroup',
      aclId: 'AclId',
      aclType: 'AclType',
      aclStatus: 'AclStatus',
      description: 'Description',
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      bandwidth: 'number',
      scheduler: 'string',
      persistenceTimeout: 'number',
      establishedTimeout: 'number',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckInterval: 'number',
      healthCheckDomain: 'string',
      healthCheckURI: 'string',
      healthCheckHttpCode: 'string',
      healthCheckType: 'string',
      synProxy: 'string',
      ownerAccount: 'string',
      VServerGroup: 'string',
      VServerGroupId: 'string',
      masterSlaveServerGroupId: 'string',
      masterSlaveServerGroup: 'string',
      aclId: 'string',
      aclType: 'string',
      aclStatus: 'string',
      description: 'string',
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  bandwidth?: number;
  scheduler?: string;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  healthCheckConnectTimeout?: number;
  healthCheckConnectPort?: number;
  healthCheckInterval?: number;
  healthCheckReq?: string;
  healthCheckExp?: string;
  ownerAccount?: string;
  VServerGroup?: string;
  VServerGroupId?: string;
  masterSlaveServerGroupId?: string;
  masterSlaveServerGroup?: string;
  aclId?: string;
  aclType?: string;
  aclStatus?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      bandwidth: 'Bandwidth',
      scheduler: 'Scheduler',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'healthCheckReq',
      healthCheckExp: 'healthCheckExp',
      ownerAccount: 'OwnerAccount',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      masterSlaveServerGroup: 'MasterSlaveServerGroup',
      aclId: 'AclId',
      aclType: 'AclType',
      aclStatus: 'AclStatus',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      bandwidth: 'number',
      scheduler: 'string',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthCheckExp: 'string',
      ownerAccount: 'string',
      VServerGroup: 'string',
      VServerGroupId: 'string',
      masterSlaveServerGroupId: 'string',
      masterSlaveServerGroup: 'string',
      aclId: 'string',
      aclType: 'string',
      aclStatus: 'string',
      description: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  ruleId?: string;
  VServerGroupId?: string;
  ruleName?: string;
  listenerSync?: string;
  scheduler?: string;
  stickySession?: string;
  stickySessionType?: string;
  cookieTimeout?: number;
  cookie?: string;
  healthCheck?: string;
  healthCheckDomain?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  healthCheckTimeout?: number;
  healthCheckInterval?: number;
  healthCheckConnectPort?: number;
  healthCheckHttpCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      ruleId: 'RuleId',
      VServerGroupId: 'VServerGroupId',
      ruleName: 'RuleName',
      listenerSync: 'ListenerSync',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      cookieTimeout: 'CookieTimeout',
      cookie: 'Cookie',
      healthCheck: 'HealthCheck',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckHttpCode: 'HealthCheckHttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      ruleId: 'string',
      VServerGroupId: 'string',
      ruleName: 'string',
      listenerSync: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      cookieTimeout: 'number',
      cookie: 'string',
      healthCheck: 'string',
      healthCheckDomain: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
      healthCheckTimeout: 'number',
      healthCheckInterval: 'number',
      healthCheckConnectPort: 'number',
      healthCheckHttpCode: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  serverCertificateId?: string;
  serverCertificateName?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      serverCertificateId: 'ServerCertificateId',
      serverCertificateName: 'ServerCertificateName',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      serverCertificateId: 'string',
      serverCertificateName: 'string',
      ownerAccount: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  accessKeyId?: string;
  TLSCipherPolicyId?: string;
  name?: string;
  TLSVersions?: string[];
  ciphers?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      accessKeyId: 'access_key_id',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
      name: 'Name',
      TLSVersions: 'TLSVersions',
      ciphers: 'Ciphers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      accessKeyId: 'string',
      TLSCipherPolicyId: 'string',
      name: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
      ciphers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTLSCipherPolicyAttributeResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  VServerGroupId?: string;
  VServerGroupName?: string;
  backendServers?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
      VServerGroupId: 'string',
      VServerGroupName: 'string',
      backendServers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVServerGroupAttributeResponseBody extends $tea.Model {
  VServerGroupId?: string;
  VServerGroupName?: string;
  requestId?: string;
  backendServers?: SetVServerGroupAttributeResponseBodyBackendServers;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
      requestId: 'RequestId',
      backendServers: 'BackendServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      VServerGroupName: 'string',
      requestId: 'string',
      backendServers: SetVServerGroupAttributeResponseBodyBackendServers,
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  ownerAccount?: string;
  listenerProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      ownerAccount: 'OwnerAccount',
      listenerProtocol: 'ListenerProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      ownerAccount: 'string',
      listenerProtocol: 'string',
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
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  loadBalancerId?: string;
  listenerPort?: number;
  ownerAccount?: string;
  listenerProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      ownerAccount: 'OwnerAccount',
      listenerProtocol: 'ListenerProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      loadBalancerId: 'string',
      listenerPort: 'number',
      ownerAccount: 'string',
      listenerProtocol: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
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

export class UntagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
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

export class UploadCACertificateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  CACertificate?: string;
  CACertificateName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      CACertificate: 'CACertificate',
      CACertificateName: 'CACertificateName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      CACertificate: 'string',
      CACertificateName: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCACertificateResponseBody extends $tea.Model {
  createTimeStamp?: number;
  requestId?: string;
  expireTime?: string;
  fingerprint?: string;
  createTime?: string;
  commonName?: string;
  resourceGroupId?: string;
  CACertificateName?: string;
  expireTimeStamp?: number;
  CACertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeStamp: 'CreateTimeStamp',
      requestId: 'RequestId',
      expireTime: 'ExpireTime',
      fingerprint: 'Fingerprint',
      createTime: 'CreateTime',
      commonName: 'CommonName',
      resourceGroupId: 'ResourceGroupId',
      CACertificateName: 'CACertificateName',
      expireTimeStamp: 'ExpireTimeStamp',
      CACertificateId: 'CACertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeStamp: 'number',
      requestId: 'string',
      expireTime: 'string',
      fingerprint: 'string',
      createTime: 'string',
      commonName: 'string',
      resourceGroupId: 'string',
      CACertificateName: 'string',
      expireTimeStamp: 'number',
      CACertificateId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aliCloudCertificateId?: string;
  aliCloudCertificateName?: string;
  aliCloudCertificateRegionId?: string;
  serverCertificate?: string;
  privateKey?: string;
  serverCertificateName?: string;
  ownerAccount?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aliCloudCertificateId: 'AliCloudCertificateId',
      aliCloudCertificateName: 'AliCloudCertificateName',
      aliCloudCertificateRegionId: 'AliCloudCertificateRegionId',
      serverCertificate: 'ServerCertificate',
      privateKey: 'PrivateKey',
      serverCertificateName: 'ServerCertificateName',
      ownerAccount: 'OwnerAccount',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aliCloudCertificateId: 'string',
      aliCloudCertificateName: 'string',
      aliCloudCertificateRegionId: 'string',
      serverCertificate: 'string',
      privateKey: 'string',
      serverCertificateName: 'string',
      ownerAccount: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadServerCertificateResponseBody extends $tea.Model {
  aliCloudCertificateName?: string;
  createTimeStamp?: number;
  expireTime?: string;
  createTime?: string;
  serverCertificateId?: string;
  expireTimeStamp?: number;
  regionId?: string;
  requestId?: string;
  fingerprint?: string;
  serverCertificateName?: string;
  commonName?: string;
  resourceGroupId?: string;
  aliCloudCertificateId?: string;
  isAliCloudCertificate?: number;
  subjectAlternativeNames?: UploadServerCertificateResponseBodySubjectAlternativeNames;
  static names(): { [key: string]: string } {
    return {
      aliCloudCertificateName: 'AliCloudCertificateName',
      createTimeStamp: 'CreateTimeStamp',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      serverCertificateId: 'ServerCertificateId',
      expireTimeStamp: 'ExpireTimeStamp',
      regionId: 'RegionId',
      requestId: 'RequestId',
      fingerprint: 'Fingerprint',
      serverCertificateName: 'ServerCertificateName',
      commonName: 'CommonName',
      resourceGroupId: 'ResourceGroupId',
      aliCloudCertificateId: 'AliCloudCertificateId',
      isAliCloudCertificate: 'IsAliCloudCertificate',
      subjectAlternativeNames: 'SubjectAlternativeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliCloudCertificateName: 'string',
      createTimeStamp: 'number',
      expireTime: 'string',
      createTime: 'string',
      serverCertificateId: 'string',
      expireTimeStamp: 'number',
      regionId: 'string',
      requestId: 'string',
      fingerprint: 'string',
      serverCertificateName: 'string',
      commonName: 'string',
      resourceGroupId: 'string',
      aliCloudCertificateId: 'string',
      isAliCloudCertificate: 'number',
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
  type?: string;
  weight?: string;
  description?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      description: 'Description',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'string',
      description: 'string',
      serverId: 'string',
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
  type?: string;
  weight?: number;
  description?: string;
  port?: number;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'number',
      description: 'string',
      port: 'number',
      serverId: 'string',
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
  type?: string;
  weight?: number;
  description?: string;
  port?: number;
  serverId?: string;
  serverType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverType: 'ServerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'number',
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverType: 'string',
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
  ruleName?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      ruleId: 'string',
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
  type?: string;
  weight?: number;
  description?: string;
  port?: number;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'number',
      description: 'string',
      port: 'number',
      serverId: 'string',
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
  listenerPort?: number;
  aclType?: string;
  protocol?: string;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      aclType: 'AclType',
      protocol: 'Protocol',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      aclType: 'string',
      protocol: 'string',
      loadBalancerId: 'string',
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
  addressIPVersion?: string;
  aclName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      addressIPVersion: 'AddressIPVersion',
      aclName: 'AclName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      addressIPVersion: 'string',
      aclName: 'string',
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
  addressType?: string;
  addressIPVersion?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      addressIPVersion: 'AddressIPVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      addressIPVersion: 'string',
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
  slaveZoneId?: string;
  masterZoneId?: string;
  supportResources?: DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResources;
  static names(): { [key: string]: string } {
    return {
      slaveZoneId: 'SlaveZoneId',
      masterZoneId: 'MasterZoneId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slaveZoneId: 'string',
      masterZoneId: 'string',
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
  createTimeStamp?: number;
  expireTime?: string;
  createTime?: string;
  expireTimeStamp?: number;
  CACertificateId?: string;
  regionId?: string;
  fingerprint?: string;
  resourceGroupId?: string;
  commonName?: string;
  CACertificateName?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeStamp: 'CreateTimeStamp',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      expireTimeStamp: 'ExpireTimeStamp',
      CACertificateId: 'CACertificateId',
      regionId: 'RegionId',
      fingerprint: 'Fingerprint',
      resourceGroupId: 'ResourceGroupId',
      commonName: 'CommonName',
      CACertificateName: 'CACertificateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeStamp: 'number',
      expireTime: 'string',
      createTime: 'string',
      expireTimeStamp: 'number',
      CACertificateId: 'string',
      regionId: 'string',
      fingerprint: 'string',
      resourceGroupId: 'string',
      commonName: 'string',
      CACertificateName: 'string',
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
  serverCertificateId?: string;
  domain?: string;
  domainExtensionId?: string;
  static names(): { [key: string]: string } {
    return {
      serverCertificateId: 'ServerCertificateId',
      domain: 'Domain',
      domainExtensionId: 'DomainExtensionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverCertificateId: 'string',
      domain: 'string',
      domainExtensionId: 'string',
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
  protocol?: string;
  serverHealthStatus?: string;
  listenerPort?: number;
  serverIp?: string;
  port?: number;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      serverHealthStatus: 'ServerHealthStatus',
      listenerPort: 'ListenerPort',
      serverIp: 'ServerIp',
      port: 'Port',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      serverHealthStatus: 'string',
      listenerPort: 'number',
      serverIp: 'string',
      port: 'number',
      serverId: 'string',
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
  listenerProtocal?: string;
  listenerPort?: number;
  static names(): { [key: string]: string } {
    return {
      listenerProtocal: 'ListenerProtocal',
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerProtocal: 'string',
      listenerPort: 'number',
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
  listenerPort?: number;
  listenerProtocol?: string;
  listenerForward?: string;
  description?: string;
  forwardPort?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      listenerForward: 'ListenerForward',
      description: 'Description',
      forwardPort: 'ForwardPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      listenerForward: 'string',
      description: 'string',
      forwardPort: 'number',
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

export class DescribeLoadBalancerAttributeResponseBodyBackendServersBackendServer extends $tea.Model {
  type?: string;
  weight?: number;
  description?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      description: 'Description',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'number',
      description: 'string',
      serverId: 'string',
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

export class DescribeLoadBalancerHTTPListenerAttributeResponseBodyRulesRule extends $tea.Model {
  VServerGroupId?: string;
  url?: string;
  domain?: string;
  ruleName?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      url: 'Url',
      domain: 'Domain',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      url: 'string',
      domain: 'string',
      ruleName: 'string',
      ruleId: 'string',
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

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyRulesRule extends $tea.Model {
  VServerGroupId?: string;
  url?: string;
  domain?: string;
  ruleName?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      url: 'Url',
      domain: 'Domain',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      url: 'string',
      domain: 'string',
      ruleName: 'string',
      ruleId: 'string',
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

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBodyDomainExtensionsDomainExtension extends $tea.Model {
  serverCertificateId?: string;
  domain?: string;
  domainExtensionId?: string;
  static names(): { [key: string]: string } {
    return {
      serverCertificateId: 'ServerCertificateId',
      domain: 'Domain',
      domainExtensionId: 'DomainExtensionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverCertificateId: 'string',
      domain: 'string',
      domainExtensionId: 'string',
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

export class DescribeLoadBalancerListenersResponseBodyListenersHTTPListenerConfig extends $tea.Model {
  healthCheckHttpVersion?: string;
  XForwardedFor_ClientSrcPort?: string;
  cookie?: string;
  gzip?: string;
  healthCheckConnectPort?: number;
  healthCheckTimeout?: number;
  healthCheckType?: string;
  cookieTimeout?: number;
  healthCheckDomain?: string;
  unhealthyThreshold?: number;
  XForwardedFor_SLBID?: string;
  forwardPort?: number;
  healthCheckHttpCode?: string;
  listenerForward?: string;
  XForwardedFor?: string;
  idleTimeout?: number;
  requestTimeout?: number;
  healthCheckInterval?: number;
  XForwardedFor_SLBPORT?: string;
  healthCheckURI?: string;
  stickySessionType?: string;
  healthyThreshold?: number;
  XForwardedFor_proto?: string;
  XForwardedFor_SLBIP?: string;
  stickySession?: string;
  healthCheckMethod?: string;
  healthCheck?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      cookie: 'Cookie',
      gzip: 'Gzip',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckType: 'HealthCheckType',
      cookieTimeout: 'CookieTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      unhealthyThreshold: 'UnhealthyThreshold',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      forwardPort: 'ForwardPort',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      listenerForward: 'ListenerForward',
      XForwardedFor: 'XForwardedFor',
      idleTimeout: 'IdleTimeout',
      requestTimeout: 'RequestTimeout',
      healthCheckInterval: 'HealthCheckInterval',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      healthCheckURI: 'HealthCheckURI',
      stickySessionType: 'StickySessionType',
      healthyThreshold: 'HealthyThreshold',
      XForwardedFor_proto: 'XForwardedFor_proto',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      stickySession: 'StickySession',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckHttpVersion: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      cookie: 'string',
      gzip: 'string',
      healthCheckConnectPort: 'number',
      healthCheckTimeout: 'number',
      healthCheckType: 'string',
      cookieTimeout: 'number',
      healthCheckDomain: 'string',
      unhealthyThreshold: 'number',
      XForwardedFor_SLBID: 'string',
      forwardPort: 'number',
      healthCheckHttpCode: 'string',
      listenerForward: 'string',
      XForwardedFor: 'string',
      idleTimeout: 'number',
      requestTimeout: 'number',
      healthCheckInterval: 'number',
      XForwardedFor_SLBPORT: 'string',
      healthCheckURI: 'string',
      stickySessionType: 'string',
      healthyThreshold: 'number',
      XForwardedFor_proto: 'string',
      XForwardedFor_SLBIP: 'string',
      stickySession: 'string',
      healthCheckMethod: 'string',
      healthCheck: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersHTTPSListenerConfig extends $tea.Model {
  XForwardedFor_ClientCertClientVerify?: string;
  healthCheckHttpVersion?: string;
  XForwardedFor_ClientSrcPort?: string;
  cookie?: string;
  gzip?: string;
  enableHttp2?: string;
  CACertificateId?: string;
  healthCheckConnectPort?: number;
  healthCheckTimeout?: number;
  healthCheckType?: string;
  cookieTimeout?: number;
  healthCheckDomain?: string;
  unhealthyThreshold?: number;
  XForwardedFor_SLBID?: string;
  XForwardedFor_ClientCertSubjectDN?: string;
  healthCheckHttpCode?: string;
  XForwardedFor_ClientCertFingerprint?: string;
  XForwardedFor?: string;
  requestTimeout?: number;
  idleTimeout?: number;
  serverCertificateId?: string;
  healthCheckInterval?: number;
  XForwardedFor_SLBPORT?: string;
  healthCheckURI?: string;
  stickySessionType?: string;
  XForwardedFor_ClientCertIssuerDN?: string;
  healthyThreshold?: number;
  XForwardedFor_proto?: string;
  XForwardedFor_SLBIP?: string;
  stickySession?: string;
  healthCheckMethod?: string;
  TLSCipherPolicy?: string;
  healthCheck?: string;
  static names(): { [key: string]: string } {
    return {
      XForwardedFor_ClientCertClientVerify: 'XForwardedFor_ClientCertClientVerify',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      XForwardedFor_ClientSrcPort: 'XForwardedFor_ClientSrcPort',
      cookie: 'Cookie',
      gzip: 'Gzip',
      enableHttp2: 'EnableHttp2',
      CACertificateId: 'CACertificateId',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckType: 'HealthCheckType',
      cookieTimeout: 'CookieTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      unhealthyThreshold: 'UnhealthyThreshold',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_ClientCertSubjectDN: 'XForwardedFor_ClientCertSubjectDN',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      XForwardedFor_ClientCertFingerprint: 'XForwardedFor_ClientCertFingerprint',
      XForwardedFor: 'XForwardedFor',
      requestTimeout: 'RequestTimeout',
      idleTimeout: 'IdleTimeout',
      serverCertificateId: 'ServerCertificateId',
      healthCheckInterval: 'HealthCheckInterval',
      XForwardedFor_SLBPORT: 'XForwardedFor_SLBPORT',
      healthCheckURI: 'HealthCheckURI',
      stickySessionType: 'StickySessionType',
      XForwardedFor_ClientCertIssuerDN: 'XForwardedFor_ClientCertIssuerDN',
      healthyThreshold: 'HealthyThreshold',
      XForwardedFor_proto: 'XForwardedFor_proto',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      stickySession: 'StickySession',
      healthCheckMethod: 'HealthCheckMethod',
      TLSCipherPolicy: 'TLSCipherPolicy',
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedFor_ClientCertClientVerify: 'string',
      healthCheckHttpVersion: 'string',
      XForwardedFor_ClientSrcPort: 'string',
      cookie: 'string',
      gzip: 'string',
      enableHttp2: 'string',
      CACertificateId: 'string',
      healthCheckConnectPort: 'number',
      healthCheckTimeout: 'number',
      healthCheckType: 'string',
      cookieTimeout: 'number',
      healthCheckDomain: 'string',
      unhealthyThreshold: 'number',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_ClientCertSubjectDN: 'string',
      healthCheckHttpCode: 'string',
      XForwardedFor_ClientCertFingerprint: 'string',
      XForwardedFor: 'string',
      requestTimeout: 'number',
      idleTimeout: 'number',
      serverCertificateId: 'string',
      healthCheckInterval: 'number',
      XForwardedFor_SLBPORT: 'string',
      healthCheckURI: 'string',
      stickySessionType: 'string',
      XForwardedFor_ClientCertIssuerDN: 'string',
      healthyThreshold: 'number',
      XForwardedFor_proto: 'string',
      XForwardedFor_SLBIP: 'string',
      stickySession: 'string',
      healthCheckMethod: 'string',
      TLSCipherPolicy: 'string',
      healthCheck: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersTCPListenerConfig extends $tea.Model {
  healthCheckHttpCode?: string;
  connectionDrainTimeout?: number;
  persistenceTimeout?: number;
  healthCheckInterval?: number;
  healthCheckURI?: string;
  healthCheckConnectPort?: number;
  establishedTimeout?: number;
  healthCheckType?: string;
  healthCheckConnectTimeout?: number;
  masterSlaveServerGroupId?: string;
  healthyThreshold?: number;
  healthCheckDomain?: string;
  unhealthyThreshold?: number;
  connectionDrain?: string;
  healthCheckMethod?: string;
  healthCheck?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckHttpCode: 'HealthCheckHttpCode',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      persistenceTimeout: 'PersistenceTimeout',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckURI: 'HealthCheckURI',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      establishedTimeout: 'EstablishedTimeout',
      healthCheckType: 'HealthCheckType',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      healthyThreshold: 'HealthyThreshold',
      healthCheckDomain: 'HealthCheckDomain',
      unhealthyThreshold: 'UnhealthyThreshold',
      connectionDrain: 'ConnectionDrain',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckHttpCode: 'string',
      connectionDrainTimeout: 'number',
      persistenceTimeout: 'number',
      healthCheckInterval: 'number',
      healthCheckURI: 'string',
      healthCheckConnectPort: 'number',
      establishedTimeout: 'number',
      healthCheckType: 'string',
      healthCheckConnectTimeout: 'number',
      masterSlaveServerGroupId: 'string',
      healthyThreshold: 'number',
      healthCheckDomain: 'string',
      unhealthyThreshold: 'number',
      connectionDrain: 'string',
      healthCheckMethod: 'string',
      healthCheck: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListenersUDPListenerConfig extends $tea.Model {
  connectionDrainTimeout?: number;
  healthCheckInterval?: number;
  healthCheckExp?: string;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  masterSlaveServerGroupId?: string;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  connectionDrain?: string;
  healthCheckReq?: string;
  healthCheck?: string;
  static names(): { [key: string]: string } {
    return {
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckExp: 'HealthCheckExp',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
      connectionDrain: 'ConnectionDrain',
      healthCheckReq: 'HealthCheckReq',
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDrainTimeout: 'number',
      healthCheckInterval: 'number',
      healthCheckExp: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      masterSlaveServerGroupId: 'string',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
      connectionDrain: 'string',
      healthCheckReq: 'string',
      healthCheck: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenersResponseBodyListeners extends $tea.Model {
  aclType?: string;
  status?: string;
  VServerGroupId?: string;
  listenerProtocol?: string;
  loadBalancerId?: string;
  listenerPort?: number;
  aclId?: string;
  scheduler?: string;
  bandwidth?: number;
  description?: string;
  aclStatus?: string;
  backendServerPort?: number;
  HTTPListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersHTTPListenerConfig;
  HTTPSListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersHTTPSListenerConfig;
  TCPListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersTCPListenerConfig;
  UDPListenerConfig?: DescribeLoadBalancerListenersResponseBodyListenersUDPListenerConfig;
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      status: 'Status',
      VServerGroupId: 'VServerGroupId',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      listenerPort: 'ListenerPort',
      aclId: 'AclId',
      scheduler: 'Scheduler',
      bandwidth: 'Bandwidth',
      description: 'Description',
      aclStatus: 'AclStatus',
      backendServerPort: 'BackendServerPort',
      HTTPListenerConfig: 'HTTPListenerConfig',
      HTTPSListenerConfig: 'HTTPSListenerConfig',
      TCPListenerConfig: 'TCPListenerConfig',
      UDPListenerConfig: 'UDPListenerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      status: 'string',
      VServerGroupId: 'string',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      listenerPort: 'number',
      aclId: 'string',
      scheduler: 'string',
      bandwidth: 'number',
      description: 'string',
      aclStatus: 'string',
      backendServerPort: 'number',
      HTTPListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersHTTPListenerConfig,
      HTTPSListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersHTTPSListenerConfig,
      TCPListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersTCPListenerConfig,
      UDPListenerConfig: DescribeLoadBalancerListenersResponseBodyListenersUDPListenerConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer extends $tea.Model {
  vpcId?: string;
  createTimeStamp?: number;
  loadBalancerId?: string;
  createTime?: string;
  payType?: string;
  addressType?: string;
  networkType?: string;
  addressIPVersion?: string;
  loadBalancerName?: string;
  bandwidth?: number;
  address?: string;
  slaveZoneId?: string;
  masterZoneId?: string;
  internetChargeTypeAlias?: string;
  loadBalancerSpec?: string;
  regionId?: string;
  modificationProtectionReason?: string;
  modificationProtectionStatus?: string;
  vSwitchId?: string;
  loadBalancerStatus?: string;
  resourceGroupId?: string;
  internetChargeType?: string;
  deleteProtection?: string;
  regionIdAlias?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      createTimeStamp: 'CreateTimeStamp',
      loadBalancerId: 'LoadBalancerId',
      createTime: 'CreateTime',
      payType: 'PayType',
      addressType: 'AddressType',
      networkType: 'NetworkType',
      addressIPVersion: 'AddressIPVersion',
      loadBalancerName: 'LoadBalancerName',
      bandwidth: 'Bandwidth',
      address: 'Address',
      slaveZoneId: 'SlaveZoneId',
      masterZoneId: 'MasterZoneId',
      internetChargeTypeAlias: 'InternetChargeTypeAlias',
      loadBalancerSpec: 'LoadBalancerSpec',
      regionId: 'RegionId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      vSwitchId: 'VSwitchId',
      loadBalancerStatus: 'LoadBalancerStatus',
      resourceGroupId: 'ResourceGroupId',
      internetChargeType: 'InternetChargeType',
      deleteProtection: 'DeleteProtection',
      regionIdAlias: 'RegionIdAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      createTimeStamp: 'number',
      loadBalancerId: 'string',
      createTime: 'string',
      payType: 'string',
      addressType: 'string',
      networkType: 'string',
      addressIPVersion: 'string',
      loadBalancerName: 'string',
      bandwidth: 'number',
      address: 'string',
      slaveZoneId: 'string',
      masterZoneId: 'string',
      internetChargeTypeAlias: 'string',
      loadBalancerSpec: 'string',
      regionId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      vSwitchId: 'string',
      loadBalancerStatus: 'string',
      resourceGroupId: 'string',
      internetChargeType: 'string',
      deleteProtection: 'string',
      regionIdAlias: 'string',
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
  type?: string;
  weight?: number;
  description?: string;
  port?: number;
  serverId?: string;
  serverType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverType: 'ServerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'number',
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverType: 'string',
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
  masterSlaveServerGroupName?: string;
  masterSlaveServerGroupId?: string;
  associatedObjects?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjects;
  static names(): { [key: string]: string } {
    return {
      masterSlaveServerGroupName: 'MasterSlaveServerGroupName',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      associatedObjects: 'AssociatedObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveServerGroupName: 'string',
      masterSlaveServerGroupId: 'string',
      associatedObjects: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjects,
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
  regionEndpoint?: string;
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionEndpoint: 'RegionEndpoint',
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEndpoint: 'string',
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

export class DescribeRulesResponseBodyRulesRule extends $tea.Model {
  healthCheckHttpCode?: string;
  VServerGroupId?: string;
  domain?: string;
  cookie?: string;
  healthCheckInterval?: number;
  url?: string;
  healthCheckURI?: string;
  stickySessionType?: string;
  ruleName?: string;
  ruleId?: string;
  healthCheckConnectPort?: number;
  scheduler?: string;
  healthCheckTimeout?: number;
  listenerSync?: string;
  healthyThreshold?: number;
  cookieTimeout?: number;
  healthCheckDomain?: string;
  unhealthyThreshold?: number;
  stickySession?: string;
  healthCheck?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckHttpCode: 'HealthCheckHttpCode',
      VServerGroupId: 'VServerGroupId',
      domain: 'Domain',
      cookie: 'Cookie',
      healthCheckInterval: 'HealthCheckInterval',
      url: 'Url',
      healthCheckURI: 'HealthCheckURI',
      stickySessionType: 'StickySessionType',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      scheduler: 'Scheduler',
      healthCheckTimeout: 'HealthCheckTimeout',
      listenerSync: 'ListenerSync',
      healthyThreshold: 'HealthyThreshold',
      cookieTimeout: 'CookieTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      unhealthyThreshold: 'UnhealthyThreshold',
      stickySession: 'StickySession',
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckHttpCode: 'string',
      VServerGroupId: 'string',
      domain: 'string',
      cookie: 'string',
      healthCheckInterval: 'number',
      url: 'string',
      healthCheckURI: 'string',
      stickySessionType: 'string',
      ruleName: 'string',
      ruleId: 'string',
      healthCheckConnectPort: 'number',
      scheduler: 'string',
      healthCheckTimeout: 'number',
      listenerSync: 'string',
      healthyThreshold: 'number',
      cookieTimeout: 'number',
      healthCheckDomain: 'string',
      unhealthyThreshold: 'number',
      stickySession: 'string',
      healthCheck: 'string',
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
  createTimeStamp?: number;
  aliCloudCertificateName?: string;
  expireTime?: string;
  createTime?: string;
  serverCertificateId?: string;
  expireTimeStamp?: number;
  regionId?: string;
  serverCertificateName?: string;
  fingerprint?: string;
  commonName?: string;
  resourceGroupId?: string;
  isAliCloudCertificate?: number;
  aliCloudCertificateId?: string;
  subjectAlternativeNames?: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateSubjectAlternativeNames;
  static names(): { [key: string]: string } {
    return {
      createTimeStamp: 'CreateTimeStamp',
      aliCloudCertificateName: 'AliCloudCertificateName',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      serverCertificateId: 'ServerCertificateId',
      expireTimeStamp: 'ExpireTimeStamp',
      regionId: 'RegionId',
      serverCertificateName: 'ServerCertificateName',
      fingerprint: 'Fingerprint',
      commonName: 'CommonName',
      resourceGroupId: 'ResourceGroupId',
      isAliCloudCertificate: 'IsAliCloudCertificate',
      aliCloudCertificateId: 'AliCloudCertificateId',
      subjectAlternativeNames: 'SubjectAlternativeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeStamp: 'number',
      aliCloudCertificateName: 'string',
      expireTime: 'string',
      createTime: 'string',
      serverCertificateId: 'string',
      expireTimeStamp: 'number',
      regionId: 'string',
      serverCertificateName: 'string',
      fingerprint: 'string',
      commonName: 'string',
      resourceGroupId: 'string',
      isAliCloudCertificate: 'number',
      aliCloudCertificateId: 'string',
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
  tagValue?: string;
  instanceCount?: number;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      instanceCount: 'InstanceCount',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      instanceCount: 'number',
      tagKey: 'string',
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
  type?: string;
  weight?: number;
  description?: string;
  port?: number;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'number',
      description: 'string',
      port: 'number',
      serverId: 'string',
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
  url?: string;
  domain?: string;
  ruleName?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      domain: 'Domain',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      domain: 'string',
      ruleName: 'string',
      ruleId: 'string',
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
  VServerGroupId?: string;
  VServerGroupName?: string;
  associatedObjects?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjects;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
      associatedObjects: 'AssociatedObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      VServerGroupName: 'string',
      associatedObjects: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjects,
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
  zoneId?: string;
  localName?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      localName: 'LocalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      localName: 'string',
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
  zoneId?: string;
  localName?: string;
  slaveZones?: DescribeZonesResponseBodyZonesZoneSlaveZones;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      localName: 'LocalName',
      slaveZones: 'SlaveZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      localName: 'string',
      slaveZones: DescribeZonesResponseBodyZonesZoneSlaveZones,
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
  tagValue?: string;
  resourceType?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      resourceType: 'string',
      resourceId: 'string',
      tagKey: 'string',
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

export class ListTLSCipherPoliciesResponseBodyTLSCipherPoliciesRelateListeners extends $tea.Model {
  port?: number;
  protocol?: string;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTLSCipherPoliciesResponseBodyTLSCipherPolicies extends $tea.Model {
  status?: string;
  instanceId?: string;
  name?: string;
  createTime?: number;
  relateListeners?: ListTLSCipherPoliciesResponseBodyTLSCipherPoliciesRelateListeners[];
  TLSVersions?: string[];
  ciphers?: string[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      instanceId: 'InstanceId',
      name: 'Name',
      createTime: 'CreateTime',
      relateListeners: 'RelateListeners',
      TLSVersions: 'TLSVersions',
      ciphers: 'Ciphers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      instanceId: 'string',
      name: 'string',
      createTime: 'number',
      relateListeners: { 'type': 'array', 'itemType': ListTLSCipherPoliciesResponseBodyTLSCipherPoliciesRelateListeners },
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
      ciphers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVServerGroupBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  type?: string;
  weight?: number;
  description?: string;
  port?: number;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'number',
      description: 'string',
      port: 'number',
      serverId: 'string',
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
  type?: string;
  weight?: number;
  description?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      description: 'Description',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'number',
      description: 'string',
      serverId: 'string',
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
  type?: string;
  weight?: number;
  port?: number;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      port: 'Port',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'number',
      port: 'number',
      serverId: 'string',
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
  type?: string;
  weight?: string;
  description?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      description: 'Description',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'string',
      description: 'string',
      serverId: 'string',
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
  type?: string;
  weight?: number;
  description?: string;
  port?: number;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'number',
      description: 'string',
      port: 'number',
      serverId: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddAccessControlListEntryResponse>(await this.doRPCRequest("AddAccessControlListEntry", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddAccessControlListEntryResponse({}));
  }

  async addAccessControlListEntry(request: AddAccessControlListEntryRequest): Promise<AddAccessControlListEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAccessControlListEntryWithOptions(request, runtime);
  }

  async addBackendServersWithOptions(request: AddBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<AddBackendServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddBackendServersResponse>(await this.doRPCRequest("AddBackendServers", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddBackendServersResponse({}));
  }

  async addBackendServers(request: AddBackendServersRequest): Promise<AddBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBackendServersWithOptions(request, runtime);
  }

  async addListenerWhiteListItemWithOptions(request: AddListenerWhiteListItemRequest, runtime: $Util.RuntimeOptions): Promise<AddListenerWhiteListItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddListenerWhiteListItemResponse>(await this.doRPCRequest("AddListenerWhiteListItem", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddListenerWhiteListItemResponse({}));
  }

  async addListenerWhiteListItem(request: AddListenerWhiteListItemRequest): Promise<AddListenerWhiteListItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addListenerWhiteListItemWithOptions(request, runtime);
  }

  async addTagsWithOptions(request: AddTagsRequest, runtime: $Util.RuntimeOptions): Promise<AddTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddTagsResponse>(await this.doRPCRequest("AddTags", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddTagsResponse({}));
  }

  async addTags(request: AddTagsRequest): Promise<AddTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsWithOptions(request, runtime);
  }

  async addVServerGroupBackendServersWithOptions(request: AddVServerGroupBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<AddVServerGroupBackendServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVServerGroupBackendServersResponse>(await this.doRPCRequest("AddVServerGroupBackendServers", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddVServerGroupBackendServersResponse({}));
  }

  async addVServerGroupBackendServers(request: AddVServerGroupBackendServersRequest): Promise<AddVServerGroupBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVServerGroupBackendServersWithOptions(request, runtime);
  }

  async createAccessControlListWithOptions(request: CreateAccessControlListRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessControlListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAccessControlListResponse>(await this.doRPCRequest("CreateAccessControlList", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAccessControlListResponse({}));
  }

  async createAccessControlList(request: CreateAccessControlListRequest): Promise<CreateAccessControlListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessControlListWithOptions(request, runtime);
  }

  async createDomainExtensionWithOptions(request: CreateDomainExtensionRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainExtensionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDomainExtensionResponse>(await this.doRPCRequest("CreateDomainExtension", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDomainExtensionResponse({}));
  }

  async createDomainExtension(request: CreateDomainExtensionRequest): Promise<CreateDomainExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainExtensionWithOptions(request, runtime);
  }

  async createLoadBalancerWithOptions(request: CreateLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLoadBalancerResponse>(await this.doRPCRequest("CreateLoadBalancer", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLoadBalancerResponse({}));
  }

  async createLoadBalancer(request: CreateLoadBalancerRequest): Promise<CreateLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  async createLoadBalancerHTTPListenerWithOptions(request: CreateLoadBalancerHTTPListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerHTTPListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLoadBalancerHTTPListenerResponse>(await this.doRPCRequest("CreateLoadBalancerHTTPListener", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLoadBalancerHTTPListenerResponse({}));
  }

  async createLoadBalancerHTTPListener(request: CreateLoadBalancerHTTPListenerRequest): Promise<CreateLoadBalancerHTTPListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerHTTPListenerWithOptions(request, runtime);
  }

  async createLoadBalancerHTTPSListenerWithOptions(request: CreateLoadBalancerHTTPSListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerHTTPSListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLoadBalancerHTTPSListenerResponse>(await this.doRPCRequest("CreateLoadBalancerHTTPSListener", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLoadBalancerHTTPSListenerResponse({}));
  }

  async createLoadBalancerHTTPSListener(request: CreateLoadBalancerHTTPSListenerRequest): Promise<CreateLoadBalancerHTTPSListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerHTTPSListenerWithOptions(request, runtime);
  }

  async createLoadBalancerTCPListenerWithOptions(request: CreateLoadBalancerTCPListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerTCPListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLoadBalancerTCPListenerResponse>(await this.doRPCRequest("CreateLoadBalancerTCPListener", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLoadBalancerTCPListenerResponse({}));
  }

  async createLoadBalancerTCPListener(request: CreateLoadBalancerTCPListenerRequest): Promise<CreateLoadBalancerTCPListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerTCPListenerWithOptions(request, runtime);
  }

  async createLoadBalancerUDPListenerWithOptions(request: CreateLoadBalancerUDPListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerUDPListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLoadBalancerUDPListenerResponse>(await this.doRPCRequest("CreateLoadBalancerUDPListener", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLoadBalancerUDPListenerResponse({}));
  }

  async createLoadBalancerUDPListener(request: CreateLoadBalancerUDPListenerRequest): Promise<CreateLoadBalancerUDPListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerUDPListenerWithOptions(request, runtime);
  }

  async createMasterSlaveServerGroupWithOptions(request: CreateMasterSlaveServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateMasterSlaveServerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMasterSlaveServerGroupResponse>(await this.doRPCRequest("CreateMasterSlaveServerGroup", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMasterSlaveServerGroupResponse({}));
  }

  async createMasterSlaveServerGroup(request: CreateMasterSlaveServerGroupRequest): Promise<CreateMasterSlaveServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMasterSlaveServerGroupWithOptions(request, runtime);
  }

  async createRulesWithOptions(request: CreateRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRulesResponse>(await this.doRPCRequest("CreateRules", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRulesResponse({}));
  }

  async createRules(request: CreateRulesRequest): Promise<CreateRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRulesWithOptions(request, runtime);
  }

  async createTLSCipherPolicyWithOptions(request: CreateTLSCipherPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateTLSCipherPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTLSCipherPolicyResponse>(await this.doRPCRequest("CreateTLSCipherPolicy", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTLSCipherPolicyResponse({}));
  }

  async createTLSCipherPolicy(request: CreateTLSCipherPolicyRequest): Promise<CreateTLSCipherPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTLSCipherPolicyWithOptions(request, runtime);
  }

  async createVServerGroupWithOptions(request: CreateVServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateVServerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVServerGroupResponse>(await this.doRPCRequest("CreateVServerGroup", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVServerGroupResponse({}));
  }

  async createVServerGroup(request: CreateVServerGroupRequest): Promise<CreateVServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVServerGroupWithOptions(request, runtime);
  }

  async deleteAccessControlListWithOptions(request: DeleteAccessControlListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessControlListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAccessControlListResponse>(await this.doRPCRequest("DeleteAccessControlList", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAccessControlListResponse({}));
  }

  async deleteAccessControlList(request: DeleteAccessControlListRequest): Promise<DeleteAccessControlListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessControlListWithOptions(request, runtime);
  }

  async deleteCACertificateWithOptions(request: DeleteCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCACertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCACertificateResponse>(await this.doRPCRequest("DeleteCACertificate", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCACertificateResponse({}));
  }

  async deleteCACertificate(request: DeleteCACertificateRequest): Promise<DeleteCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCACertificateWithOptions(request, runtime);
  }

  async deleteDomainExtensionWithOptions(request: DeleteDomainExtensionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainExtensionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDomainExtensionResponse>(await this.doRPCRequest("DeleteDomainExtension", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDomainExtensionResponse({}));
  }

  async deleteDomainExtension(request: DeleteDomainExtensionRequest): Promise<DeleteDomainExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainExtensionWithOptions(request, runtime);
  }

  async deleteLoadBalancerWithOptions(request: DeleteLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoadBalancerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLoadBalancerResponse>(await this.doRPCRequest("DeleteLoadBalancer", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLoadBalancerResponse({}));
  }

  async deleteLoadBalancer(request: DeleteLoadBalancerRequest): Promise<DeleteLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoadBalancerWithOptions(request, runtime);
  }

  async deleteLoadBalancerListenerWithOptions(request: DeleteLoadBalancerListenerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoadBalancerListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLoadBalancerListenerResponse>(await this.doRPCRequest("DeleteLoadBalancerListener", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLoadBalancerListenerResponse({}));
  }

  async deleteLoadBalancerListener(request: DeleteLoadBalancerListenerRequest): Promise<DeleteLoadBalancerListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoadBalancerListenerWithOptions(request, runtime);
  }

  async deleteMasterSlaveServerGroupWithOptions(request: DeleteMasterSlaveServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMasterSlaveServerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMasterSlaveServerGroupResponse>(await this.doRPCRequest("DeleteMasterSlaveServerGroup", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMasterSlaveServerGroupResponse({}));
  }

  async deleteMasterSlaveServerGroup(request: DeleteMasterSlaveServerGroupRequest): Promise<DeleteMasterSlaveServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMasterSlaveServerGroupWithOptions(request, runtime);
  }

  async deleteRulesWithOptions(request: DeleteRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRulesResponse>(await this.doRPCRequest("DeleteRules", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRulesResponse({}));
  }

  async deleteRules(request: DeleteRulesRequest): Promise<DeleteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRulesWithOptions(request, runtime);
  }

  async deleteServerCertificateWithOptions(request: DeleteServerCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServerCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteServerCertificateResponse>(await this.doRPCRequest("DeleteServerCertificate", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteServerCertificateResponse({}));
  }

  async deleteServerCertificate(request: DeleteServerCertificateRequest): Promise<DeleteServerCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServerCertificateWithOptions(request, runtime);
  }

  async deleteTLSCipherPolicyWithOptions(request: DeleteTLSCipherPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTLSCipherPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTLSCipherPolicyResponse>(await this.doRPCRequest("DeleteTLSCipherPolicy", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTLSCipherPolicyResponse({}));
  }

  async deleteTLSCipherPolicy(request: DeleteTLSCipherPolicyRequest): Promise<DeleteTLSCipherPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTLSCipherPolicyWithOptions(request, runtime);
  }

  async deleteVServerGroupWithOptions(request: DeleteVServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVServerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVServerGroupResponse>(await this.doRPCRequest("DeleteVServerGroup", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVServerGroupResponse({}));
  }

  async deleteVServerGroup(request: DeleteVServerGroupRequest): Promise<DeleteVServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVServerGroupWithOptions(request, runtime);
  }

  async describeAccessControlListAttributeWithOptions(request: DescribeAccessControlListAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessControlListAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccessControlListAttributeResponse>(await this.doRPCRequest("DescribeAccessControlListAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccessControlListAttributeResponse({}));
  }

  async describeAccessControlListAttribute(request: DescribeAccessControlListAttributeRequest): Promise<DescribeAccessControlListAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessControlListAttributeWithOptions(request, runtime);
  }

  async describeAccessControlListsWithOptions(request: DescribeAccessControlListsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessControlListsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccessControlListsResponse>(await this.doRPCRequest("DescribeAccessControlLists", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccessControlListsResponse({}));
  }

  async describeAccessControlLists(request: DescribeAccessControlListsRequest): Promise<DescribeAccessControlListsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessControlListsWithOptions(request, runtime);
  }

  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.doRPCRequest("DescribeAvailableResource", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableResourceResponse({}));
  }

  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  async describeCACertificatesWithOptions(request: DescribeCACertificatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCACertificatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCACertificatesResponse>(await this.doRPCRequest("DescribeCACertificates", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCACertificatesResponse({}));
  }

  async describeCACertificates(request: DescribeCACertificatesRequest): Promise<DescribeCACertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCACertificatesWithOptions(request, runtime);
  }

  async describeDomainExtensionAttributeWithOptions(request: DescribeDomainExtensionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainExtensionAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainExtensionAttributeResponse>(await this.doRPCRequest("DescribeDomainExtensionAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainExtensionAttributeResponse({}));
  }

  async describeDomainExtensionAttribute(request: DescribeDomainExtensionAttributeRequest): Promise<DescribeDomainExtensionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainExtensionAttributeWithOptions(request, runtime);
  }

  async describeDomainExtensionsWithOptions(request: DescribeDomainExtensionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainExtensionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainExtensionsResponse>(await this.doRPCRequest("DescribeDomainExtensions", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainExtensionsResponse({}));
  }

  async describeDomainExtensions(request: DescribeDomainExtensionsRequest): Promise<DescribeDomainExtensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainExtensionsWithOptions(request, runtime);
  }

  async describeHealthStatusWithOptions(request: DescribeHealthStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHealthStatusResponse>(await this.doRPCRequest("DescribeHealthStatus", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHealthStatusResponse({}));
  }

  async describeHealthStatus(request: DescribeHealthStatusRequest): Promise<DescribeHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthStatusWithOptions(request, runtime);
  }

  async describeListenerAccessControlAttributeWithOptions(request: DescribeListenerAccessControlAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeListenerAccessControlAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeListenerAccessControlAttributeResponse>(await this.doRPCRequest("DescribeListenerAccessControlAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeListenerAccessControlAttributeResponse({}));
  }

  async describeListenerAccessControlAttribute(request: DescribeListenerAccessControlAttributeRequest): Promise<DescribeListenerAccessControlAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeListenerAccessControlAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerAttributeWithOptions(request: DescribeLoadBalancerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLoadBalancerAttributeResponse>(await this.doRPCRequest("DescribeLoadBalancerAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLoadBalancerAttributeResponse({}));
  }

  async describeLoadBalancerAttribute(request: DescribeLoadBalancerAttributeRequest): Promise<DescribeLoadBalancerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerHTTPListenerAttributeWithOptions(request: DescribeLoadBalancerHTTPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerHTTPListenerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLoadBalancerHTTPListenerAttributeResponse>(await this.doRPCRequest("DescribeLoadBalancerHTTPListenerAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLoadBalancerHTTPListenerAttributeResponse({}));
  }

  async describeLoadBalancerHTTPListenerAttribute(request: DescribeLoadBalancerHTTPListenerAttributeRequest): Promise<DescribeLoadBalancerHTTPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerHTTPListenerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerHTTPSListenerAttributeWithOptions(request: DescribeLoadBalancerHTTPSListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerHTTPSListenerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLoadBalancerHTTPSListenerAttributeResponse>(await this.doRPCRequest("DescribeLoadBalancerHTTPSListenerAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLoadBalancerHTTPSListenerAttributeResponse({}));
  }

  async describeLoadBalancerHTTPSListenerAttribute(request: DescribeLoadBalancerHTTPSListenerAttributeRequest): Promise<DescribeLoadBalancerHTTPSListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerHTTPSListenerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerListenersWithOptions(request: DescribeLoadBalancerListenersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerListenersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLoadBalancerListenersResponse>(await this.doRPCRequest("DescribeLoadBalancerListeners", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLoadBalancerListenersResponse({}));
  }

  async describeLoadBalancerListeners(request: DescribeLoadBalancerListenersRequest): Promise<DescribeLoadBalancerListenersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerListenersWithOptions(request, runtime);
  }

  async describeLoadBalancersWithOptions(request: DescribeLoadBalancersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLoadBalancersResponse>(await this.doRPCRequest("DescribeLoadBalancers", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLoadBalancersResponse({}));
  }

  async describeLoadBalancers(request: DescribeLoadBalancersRequest): Promise<DescribeLoadBalancersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancersWithOptions(request, runtime);
  }

  async describeLoadBalancerTCPListenerAttributeWithOptions(request: DescribeLoadBalancerTCPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerTCPListenerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLoadBalancerTCPListenerAttributeResponse>(await this.doRPCRequest("DescribeLoadBalancerTCPListenerAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLoadBalancerTCPListenerAttributeResponse({}));
  }

  async describeLoadBalancerTCPListenerAttribute(request: DescribeLoadBalancerTCPListenerAttributeRequest): Promise<DescribeLoadBalancerTCPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerTCPListenerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerUDPListenerAttributeWithOptions(request: DescribeLoadBalancerUDPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerUDPListenerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLoadBalancerUDPListenerAttributeResponse>(await this.doRPCRequest("DescribeLoadBalancerUDPListenerAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLoadBalancerUDPListenerAttributeResponse({}));
  }

  async describeLoadBalancerUDPListenerAttribute(request: DescribeLoadBalancerUDPListenerAttributeRequest): Promise<DescribeLoadBalancerUDPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerUDPListenerAttributeWithOptions(request, runtime);
  }

  async describeMasterSlaveServerGroupAttributeWithOptions(request: DescribeMasterSlaveServerGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMasterSlaveServerGroupAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMasterSlaveServerGroupAttributeResponse>(await this.doRPCRequest("DescribeMasterSlaveServerGroupAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMasterSlaveServerGroupAttributeResponse({}));
  }

  async describeMasterSlaveServerGroupAttribute(request: DescribeMasterSlaveServerGroupAttributeRequest): Promise<DescribeMasterSlaveServerGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMasterSlaveServerGroupAttributeWithOptions(request, runtime);
  }

  async describeMasterSlaveServerGroupsWithOptions(request: DescribeMasterSlaveServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMasterSlaveServerGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMasterSlaveServerGroupsResponse>(await this.doRPCRequest("DescribeMasterSlaveServerGroups", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMasterSlaveServerGroupsResponse({}));
  }

  async describeMasterSlaveServerGroups(request: DescribeMasterSlaveServerGroupsRequest): Promise<DescribeMasterSlaveServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMasterSlaveServerGroupsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeRuleAttributeWithOptions(request: DescribeRuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRuleAttributeResponse>(await this.doRPCRequest("DescribeRuleAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRuleAttributeResponse({}));
  }

  async describeRuleAttribute(request: DescribeRuleAttributeRequest): Promise<DescribeRuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleAttributeWithOptions(request, runtime);
  }

  async describeRulesWithOptions(request: DescribeRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRulesResponse>(await this.doRPCRequest("DescribeRules", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRulesResponse({}));
  }

  async describeRules(request: DescribeRulesRequest): Promise<DescribeRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRulesWithOptions(request, runtime);
  }

  async describeServerCertificatesWithOptions(request: DescribeServerCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServerCertificatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeServerCertificatesResponse>(await this.doRPCRequest("DescribeServerCertificates", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeServerCertificatesResponse({}));
  }

  async describeServerCertificates(request: DescribeServerCertificatesRequest): Promise<DescribeServerCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServerCertificatesWithOptions(request, runtime);
  }

  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTagsResponse>(await this.doRPCRequest("DescribeTags", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTagsResponse({}));
  }

  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  async describeVServerGroupAttributeWithOptions(request: DescribeVServerGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVServerGroupAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVServerGroupAttributeResponse>(await this.doRPCRequest("DescribeVServerGroupAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVServerGroupAttributeResponse({}));
  }

  async describeVServerGroupAttribute(request: DescribeVServerGroupAttributeRequest): Promise<DescribeVServerGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVServerGroupAttributeWithOptions(request, runtime);
  }

  async describeVServerGroupsWithOptions(request: DescribeVServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVServerGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVServerGroupsResponse>(await this.doRPCRequest("DescribeVServerGroups", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVServerGroupsResponse({}));
  }

  async describeVServerGroups(request: DescribeVServerGroupsRequest): Promise<DescribeVServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVServerGroupsWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeZonesResponse>(await this.doRPCRequest("DescribeZones", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTLSCipherPoliciesWithOptions(request: ListTLSCipherPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListTLSCipherPoliciesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTLSCipherPoliciesResponse>(await this.doRPCRequest("ListTLSCipherPolicies", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListTLSCipherPoliciesResponse({}));
  }

  async listTLSCipherPolicies(request: ListTLSCipherPoliciesRequest): Promise<ListTLSCipherPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTLSCipherPoliciesWithOptions(request, runtime);
  }

  async modifyLoadBalancerInstanceSpecWithOptions(request: ModifyLoadBalancerInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoadBalancerInstanceSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLoadBalancerInstanceSpecResponse>(await this.doRPCRequest("ModifyLoadBalancerInstanceSpec", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLoadBalancerInstanceSpecResponse({}));
  }

  async modifyLoadBalancerInstanceSpec(request: ModifyLoadBalancerInstanceSpecRequest): Promise<ModifyLoadBalancerInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoadBalancerInstanceSpecWithOptions(request, runtime);
  }

  async modifyLoadBalancerInternetSpecWithOptions(request: ModifyLoadBalancerInternetSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoadBalancerInternetSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLoadBalancerInternetSpecResponse>(await this.doRPCRequest("ModifyLoadBalancerInternetSpec", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLoadBalancerInternetSpecResponse({}));
  }

  async modifyLoadBalancerInternetSpec(request: ModifyLoadBalancerInternetSpecRequest): Promise<ModifyLoadBalancerInternetSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoadBalancerInternetSpecWithOptions(request, runtime);
  }

  async modifyLoadBalancerPayTypeWithOptions(request: ModifyLoadBalancerPayTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoadBalancerPayTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLoadBalancerPayTypeResponse>(await this.doRPCRequest("ModifyLoadBalancerPayType", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLoadBalancerPayTypeResponse({}));
  }

  async modifyLoadBalancerPayType(request: ModifyLoadBalancerPayTypeRequest): Promise<ModifyLoadBalancerPayTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoadBalancerPayTypeWithOptions(request, runtime);
  }

  async modifyVServerGroupBackendServersWithOptions(request: ModifyVServerGroupBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVServerGroupBackendServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyVServerGroupBackendServersResponse>(await this.doRPCRequest("ModifyVServerGroupBackendServers", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyVServerGroupBackendServersResponse({}));
  }

  async modifyVServerGroupBackendServers(request: ModifyVServerGroupBackendServersRequest): Promise<ModifyVServerGroupBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVServerGroupBackendServersWithOptions(request, runtime);
  }

  async removeAccessControlListEntryWithOptions(request: RemoveAccessControlListEntryRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAccessControlListEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveAccessControlListEntryResponse>(await this.doRPCRequest("RemoveAccessControlListEntry", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveAccessControlListEntryResponse({}));
  }

  async removeAccessControlListEntry(request: RemoveAccessControlListEntryRequest): Promise<RemoveAccessControlListEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAccessControlListEntryWithOptions(request, runtime);
  }

  async removeBackendServersWithOptions(request: RemoveBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveBackendServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveBackendServersResponse>(await this.doRPCRequest("RemoveBackendServers", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveBackendServersResponse({}));
  }

  async removeBackendServers(request: RemoveBackendServersRequest): Promise<RemoveBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeBackendServersWithOptions(request, runtime);
  }

  async removeListenerWhiteListItemWithOptions(request: RemoveListenerWhiteListItemRequest, runtime: $Util.RuntimeOptions): Promise<RemoveListenerWhiteListItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveListenerWhiteListItemResponse>(await this.doRPCRequest("RemoveListenerWhiteListItem", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveListenerWhiteListItemResponse({}));
  }

  async removeListenerWhiteListItem(request: RemoveListenerWhiteListItemRequest): Promise<RemoveListenerWhiteListItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeListenerWhiteListItemWithOptions(request, runtime);
  }

  async removeTagsWithOptions(request: RemoveTagsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveTagsResponse>(await this.doRPCRequest("RemoveTags", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveTagsResponse({}));
  }

  async removeTags(request: RemoveTagsRequest): Promise<RemoveTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTagsWithOptions(request, runtime);
  }

  async removeVServerGroupBackendServersWithOptions(request: RemoveVServerGroupBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveVServerGroupBackendServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveVServerGroupBackendServersResponse>(await this.doRPCRequest("RemoveVServerGroupBackendServers", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveVServerGroupBackendServersResponse({}));
  }

  async removeVServerGroupBackendServers(request: RemoveVServerGroupBackendServersRequest): Promise<RemoveVServerGroupBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeVServerGroupBackendServersWithOptions(request, runtime);
  }

  async setAccessControlListAttributeWithOptions(request: SetAccessControlListAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetAccessControlListAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetAccessControlListAttributeResponse>(await this.doRPCRequest("SetAccessControlListAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetAccessControlListAttributeResponse({}));
  }

  async setAccessControlListAttribute(request: SetAccessControlListAttributeRequest): Promise<SetAccessControlListAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAccessControlListAttributeWithOptions(request, runtime);
  }

  async setBackendServersWithOptions(request: SetBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<SetBackendServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetBackendServersResponse>(await this.doRPCRequest("SetBackendServers", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetBackendServersResponse({}));
  }

  async setBackendServers(request: SetBackendServersRequest): Promise<SetBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setBackendServersWithOptions(request, runtime);
  }

  async setCACertificateNameWithOptions(request: SetCACertificateNameRequest, runtime: $Util.RuntimeOptions): Promise<SetCACertificateNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetCACertificateNameResponse>(await this.doRPCRequest("SetCACertificateName", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetCACertificateNameResponse({}));
  }

  async setCACertificateName(request: SetCACertificateNameRequest): Promise<SetCACertificateNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCACertificateNameWithOptions(request, runtime);
  }

  async setDomainExtensionAttributeWithOptions(request: SetDomainExtensionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainExtensionAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDomainExtensionAttributeResponse>(await this.doRPCRequest("SetDomainExtensionAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetDomainExtensionAttributeResponse({}));
  }

  async setDomainExtensionAttribute(request: SetDomainExtensionAttributeRequest): Promise<SetDomainExtensionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainExtensionAttributeWithOptions(request, runtime);
  }

  async setListenerAccessControlStatusWithOptions(request: SetListenerAccessControlStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetListenerAccessControlStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetListenerAccessControlStatusResponse>(await this.doRPCRequest("SetListenerAccessControlStatus", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetListenerAccessControlStatusResponse({}));
  }

  async setListenerAccessControlStatus(request: SetListenerAccessControlStatusRequest): Promise<SetListenerAccessControlStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setListenerAccessControlStatusWithOptions(request, runtime);
  }

  async setLoadBalancerDeleteProtectionWithOptions(request: SetLoadBalancerDeleteProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerDeleteProtectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetLoadBalancerDeleteProtectionResponse>(await this.doRPCRequest("SetLoadBalancerDeleteProtection", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetLoadBalancerDeleteProtectionResponse({}));
  }

  async setLoadBalancerDeleteProtection(request: SetLoadBalancerDeleteProtectionRequest): Promise<SetLoadBalancerDeleteProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerDeleteProtectionWithOptions(request, runtime);
  }

  async setLoadBalancerHTTPListenerAttributeWithOptions(request: SetLoadBalancerHTTPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerHTTPListenerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetLoadBalancerHTTPListenerAttributeResponse>(await this.doRPCRequest("SetLoadBalancerHTTPListenerAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetLoadBalancerHTTPListenerAttributeResponse({}));
  }

  async setLoadBalancerHTTPListenerAttribute(request: SetLoadBalancerHTTPListenerAttributeRequest): Promise<SetLoadBalancerHTTPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerHTTPListenerAttributeWithOptions(request, runtime);
  }

  async setLoadBalancerHTTPSListenerAttributeWithOptions(request: SetLoadBalancerHTTPSListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerHTTPSListenerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetLoadBalancerHTTPSListenerAttributeResponse>(await this.doRPCRequest("SetLoadBalancerHTTPSListenerAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetLoadBalancerHTTPSListenerAttributeResponse({}));
  }

  async setLoadBalancerHTTPSListenerAttribute(request: SetLoadBalancerHTTPSListenerAttributeRequest): Promise<SetLoadBalancerHTTPSListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerHTTPSListenerAttributeWithOptions(request, runtime);
  }

  async setLoadBalancerModificationProtectionWithOptions(request: SetLoadBalancerModificationProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerModificationProtectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetLoadBalancerModificationProtectionResponse>(await this.doRPCRequest("SetLoadBalancerModificationProtection", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetLoadBalancerModificationProtectionResponse({}));
  }

  async setLoadBalancerModificationProtection(request: SetLoadBalancerModificationProtectionRequest): Promise<SetLoadBalancerModificationProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerModificationProtectionWithOptions(request, runtime);
  }

  async setLoadBalancerNameWithOptions(request: SetLoadBalancerNameRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetLoadBalancerNameResponse>(await this.doRPCRequest("SetLoadBalancerName", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetLoadBalancerNameResponse({}));
  }

  async setLoadBalancerName(request: SetLoadBalancerNameRequest): Promise<SetLoadBalancerNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerNameWithOptions(request, runtime);
  }

  async setLoadBalancerStatusWithOptions(request: SetLoadBalancerStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetLoadBalancerStatusResponse>(await this.doRPCRequest("SetLoadBalancerStatus", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetLoadBalancerStatusResponse({}));
  }

  async setLoadBalancerStatus(request: SetLoadBalancerStatusRequest): Promise<SetLoadBalancerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerStatusWithOptions(request, runtime);
  }

  async setLoadBalancerTCPListenerAttributeWithOptions(request: SetLoadBalancerTCPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerTCPListenerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetLoadBalancerTCPListenerAttributeResponse>(await this.doRPCRequest("SetLoadBalancerTCPListenerAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetLoadBalancerTCPListenerAttributeResponse({}));
  }

  async setLoadBalancerTCPListenerAttribute(request: SetLoadBalancerTCPListenerAttributeRequest): Promise<SetLoadBalancerTCPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerTCPListenerAttributeWithOptions(request, runtime);
  }

  async setLoadBalancerUDPListenerAttributeWithOptions(request: SetLoadBalancerUDPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerUDPListenerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetLoadBalancerUDPListenerAttributeResponse>(await this.doRPCRequest("SetLoadBalancerUDPListenerAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetLoadBalancerUDPListenerAttributeResponse({}));
  }

  async setLoadBalancerUDPListenerAttribute(request: SetLoadBalancerUDPListenerAttributeRequest): Promise<SetLoadBalancerUDPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerUDPListenerAttributeWithOptions(request, runtime);
  }

  async setRuleWithOptions(request: SetRuleRequest, runtime: $Util.RuntimeOptions): Promise<SetRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetRuleResponse>(await this.doRPCRequest("SetRule", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetRuleResponse({}));
  }

  async setRule(request: SetRuleRequest): Promise<SetRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRuleWithOptions(request, runtime);
  }

  async setServerCertificateNameWithOptions(request: SetServerCertificateNameRequest, runtime: $Util.RuntimeOptions): Promise<SetServerCertificateNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetServerCertificateNameResponse>(await this.doRPCRequest("SetServerCertificateName", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetServerCertificateNameResponse({}));
  }

  async setServerCertificateName(request: SetServerCertificateNameRequest): Promise<SetServerCertificateNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setServerCertificateNameWithOptions(request, runtime);
  }

  async setTLSCipherPolicyAttributeWithOptions(request: SetTLSCipherPolicyAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetTLSCipherPolicyAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetTLSCipherPolicyAttributeResponse>(await this.doRPCRequest("SetTLSCipherPolicyAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetTLSCipherPolicyAttributeResponse({}));
  }

  async setTLSCipherPolicyAttribute(request: SetTLSCipherPolicyAttributeRequest): Promise<SetTLSCipherPolicyAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setTLSCipherPolicyAttributeWithOptions(request, runtime);
  }

  async setVServerGroupAttributeWithOptions(request: SetVServerGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetVServerGroupAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetVServerGroupAttributeResponse>(await this.doRPCRequest("SetVServerGroupAttribute", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetVServerGroupAttributeResponse({}));
  }

  async setVServerGroupAttribute(request: SetVServerGroupAttributeRequest): Promise<SetVServerGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setVServerGroupAttributeWithOptions(request, runtime);
  }

  async startLoadBalancerListenerWithOptions(request: StartLoadBalancerListenerRequest, runtime: $Util.RuntimeOptions): Promise<StartLoadBalancerListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartLoadBalancerListenerResponse>(await this.doRPCRequest("StartLoadBalancerListener", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new StartLoadBalancerListenerResponse({}));
  }

  async startLoadBalancerListener(request: StartLoadBalancerListenerRequest): Promise<StartLoadBalancerListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startLoadBalancerListenerWithOptions(request, runtime);
  }

  async stopLoadBalancerListenerWithOptions(request: StopLoadBalancerListenerRequest, runtime: $Util.RuntimeOptions): Promise<StopLoadBalancerListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopLoadBalancerListenerResponse>(await this.doRPCRequest("StopLoadBalancerListener", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new StopLoadBalancerListenerResponse({}));
  }

  async stopLoadBalancerListener(request: StopLoadBalancerListenerRequest): Promise<StopLoadBalancerListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLoadBalancerListenerWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async uploadCACertificateWithOptions(request: UploadCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<UploadCACertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadCACertificateResponse>(await this.doRPCRequest("UploadCACertificate", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UploadCACertificateResponse({}));
  }

  async uploadCACertificate(request: UploadCACertificateRequest): Promise<UploadCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadCACertificateWithOptions(request, runtime);
  }

  async uploadServerCertificateWithOptions(request: UploadServerCertificateRequest, runtime: $Util.RuntimeOptions): Promise<UploadServerCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadServerCertificateResponse>(await this.doRPCRequest("UploadServerCertificate", "2014-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UploadServerCertificateResponse({}));
  }

  async uploadServerCertificate(request: UploadServerCertificateRequest): Promise<UploadServerCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadServerCertificateWithOptions(request, runtime);
  }

}
