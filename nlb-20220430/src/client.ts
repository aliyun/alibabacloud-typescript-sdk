// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddServersToServerGroupRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  serverGroupId?: string;
  servers?: AddServersToServerGroupRequestServers[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serverGroupId: 'ServerGroupId',
      servers: 'Servers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      serverGroupId: 'string',
      servers: { 'type': 'array', 'itemType': AddServersToServerGroupRequestServers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServersToServerGroupResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServersToServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddServersToServerGroupResponseBody;
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
      body: AddServersToServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerRequest extends $tea.Model {
  additionalCertificateIds?: string[];
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalCertificateIds: 'AdditionalCertificateIds',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalCertificateIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateAdditionalCertificatesWithListenerResponseBody;
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
      body: AssociateAdditionalCertificatesWithListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCommonBandwidthPackageToLoadBalancerRequest extends $tea.Model {
  bandwidthPackageId?: string;
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCommonBandwidthPackageToLoadBalancerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCommonBandwidthPackageToLoadBalancerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachCommonBandwidthPackageToLoadBalancerResponseBody;
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
      body: AttachCommonBandwidthPackageToLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelShiftLoadBalancerZonesRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  regionId?: string;
  zoneMappings?: CancelShiftLoadBalancerZonesRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': CancelShiftLoadBalancerZonesRequestZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelShiftLoadBalancerZonesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelShiftLoadBalancerZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelShiftLoadBalancerZonesResponseBody;
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
      body: CancelShiftLoadBalancerZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequest extends $tea.Model {
  alpnEnabled?: boolean;
  alpnPolicy?: string;
  caCertificateIds?: string[];
  caEnabled?: boolean;
  certificateIds?: string[];
  clientToken?: string;
  cps?: number;
  dryRun?: boolean;
  endPort?: number;
  idleTimeout?: number;
  listenerDescription?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  mss?: number;
  proxyProtocolEnabled?: boolean;
  regionId?: string;
  secSensorEnabled?: boolean;
  securityPolicyId?: string;
  serverGroupId?: string;
  startPort?: number;
  tag?: CreateListenerRequestTag[];
  static names(): { [key: string]: string } {
    return {
      alpnEnabled: 'AlpnEnabled',
      alpnPolicy: 'AlpnPolicy',
      caCertificateIds: 'CaCertificateIds',
      caEnabled: 'CaEnabled',
      certificateIds: 'CertificateIds',
      clientToken: 'ClientToken',
      cps: 'Cps',
      dryRun: 'DryRun',
      endPort: 'EndPort',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      mss: 'Mss',
      proxyProtocolEnabled: 'ProxyProtocolEnabled',
      regionId: 'RegionId',
      secSensorEnabled: 'SecSensorEnabled',
      securityPolicyId: 'SecurityPolicyId',
      serverGroupId: 'ServerGroupId',
      startPort: 'StartPort',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpnEnabled: 'boolean',
      alpnPolicy: 'string',
      caCertificateIds: { 'type': 'array', 'itemType': 'string' },
      caEnabled: 'boolean',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      cps: 'number',
      dryRun: 'boolean',
      endPort: 'number',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      mss: 'number',
      proxyProtocolEnabled: 'boolean',
      regionId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
      startPort: 'number',
      tag: { 'type': 'array', 'itemType': CreateListenerRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerResponseBody extends $tea.Model {
  jobId?: string;
  listenerId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      listenerId: 'ListenerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      listenerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateListenerResponseBody;
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
      body: CreateListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequest extends $tea.Model {
  addressIpVersion?: string;
  addressType?: string;
  bandwidthPackageId?: string;
  clientToken?: string;
  deletionProtectionConfig?: CreateLoadBalancerRequestDeletionProtectionConfig;
  dryRun?: boolean;
  loadBalancerBillingConfig?: CreateLoadBalancerRequestLoadBalancerBillingConfig;
  loadBalancerName?: string;
  loadBalancerType?: string;
  modificationProtectionConfig?: CreateLoadBalancerRequestModificationProtectionConfig;
  regionId?: string;
  resourceGroupId?: string;
  tag?: CreateLoadBalancerRequestTag[];
  vpcId?: string;
  zoneMappings?: CreateLoadBalancerRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
      deletionProtectionConfig: 'DeletionProtectionConfig',
      dryRun: 'DryRun',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerType: 'LoadBalancerType',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      clientToken: 'string',
      deletionProtectionConfig: CreateLoadBalancerRequestDeletionProtectionConfig,
      dryRun: 'boolean',
      loadBalancerBillingConfig: CreateLoadBalancerRequestLoadBalancerBillingConfig,
      loadBalancerName: 'string',
      loadBalancerType: 'string',
      modificationProtectionConfig: CreateLoadBalancerRequestModificationProtectionConfig,
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateLoadBalancerRequestTag },
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': CreateLoadBalancerRequestZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerResponseBody extends $tea.Model {
  loadbalancerId?: string;
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loadbalancerId: 'LoadbalancerId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadbalancerId: 'string',
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLoadBalancerResponseBody;
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
      body: CreateLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityPolicyRequest extends $tea.Model {
  ciphers?: string[];
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  securityPolicyName?: string;
  tag?: CreateSecurityPolicyRequestTag[];
  tlsVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyName: 'SecurityPolicyName',
      tag: 'Tag',
      tlsVersions: 'TlsVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      securityPolicyName: 'string',
      tag: { 'type': 'array', 'itemType': CreateSecurityPolicyRequestTag },
      tlsVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityPolicyResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSecurityPolicyResponseBody;
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
      body: CreateSecurityPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupRequest extends $tea.Model {
  addressIPVersion?: string;
  anyPortEnabled?: boolean;
  clientToken?: string;
  connectionDrainEnabled?: boolean;
  connectionDrainTimeout?: number;
  dryRun?: boolean;
  healthCheckConfig?: CreateServerGroupRequestHealthCheckConfig;
  preserveClientIpEnabled?: boolean;
  protocol?: string;
  regionId?: string;
  resourceGroupId?: string;
  scheduler?: string;
  serverGroupName?: string;
  serverGroupType?: string;
  tag?: CreateServerGroupRequestTag[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressIPVersion: 'AddressIPVersion',
      anyPortEnabled: 'AnyPortEnabled',
      clientToken: 'ClientToken',
      connectionDrainEnabled: 'ConnectionDrainEnabled',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
      preserveClientIpEnabled: 'PreserveClientIpEnabled',
      protocol: 'Protocol',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverGroupName: 'ServerGroupName',
      serverGroupType: 'ServerGroupType',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIPVersion: 'string',
      anyPortEnabled: 'boolean',
      clientToken: 'string',
      connectionDrainEnabled: 'boolean',
      connectionDrainTimeout: 'number',
      dryRun: 'boolean',
      healthCheckConfig: CreateServerGroupRequestHealthCheckConfig,
      preserveClientIpEnabled: 'boolean',
      protocol: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scheduler: 'string',
      serverGroupName: 'string',
      serverGroupType: 'string',
      tag: { 'type': 'array', 'itemType': CreateServerGroupRequestTag },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateServerGroupResponseBody;
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
      body: CreateServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListenerRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListenerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteListenerResponseBody;
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
      body: DeleteListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLoadBalancerResponseBody;
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
      body: DeleteLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityPolicyRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityPolicyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSecurityPolicyResponseBody;
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
      body: DeleteSecurityPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerGroupRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerGroupResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteServerGroupResponseBody;
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
      body: DeleteServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  clientToken?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clientToken: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
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
  acceptLanguage?: string;
  clientToken?: string;
  regionId?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clientToken: 'string',
      regionId: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  requestId?: string;
  zones?: DescribeZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZones },
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

export class DetachCommonBandwidthPackageFromLoadBalancerRequest extends $tea.Model {
  bandwidthPackageId?: string;
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCommonBandwidthPackageFromLoadBalancerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCommonBandwidthPackageFromLoadBalancerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetachCommonBandwidthPackageFromLoadBalancerResponseBody;
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
      body: DetachCommonBandwidthPackageFromLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLoadBalancerIpv6InternetRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLoadBalancerIpv6InternetResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLoadBalancerIpv6InternetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableLoadBalancerIpv6InternetResponseBody;
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
      body: DisableLoadBalancerIpv6InternetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateAdditionalCertificatesWithListenerRequest extends $tea.Model {
  additionalCertificateIds?: string[];
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalCertificateIds: 'AdditionalCertificateIds',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalCertificateIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateAdditionalCertificatesWithListenerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateAdditionalCertificatesWithListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisassociateAdditionalCertificatesWithListenerResponseBody;
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
      body: DisassociateAdditionalCertificatesWithListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLoadBalancerIpv6InternetRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLoadBalancerIpv6InternetResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLoadBalancerIpv6InternetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableLoadBalancerIpv6InternetResponseBody;
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
      body: EnableLoadBalancerIpv6InternetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusRequest extends $tea.Model {
  clientToken?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponseBody extends $tea.Model {
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetJobStatusResponseBody;
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
      body: GetJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBody extends $tea.Model {
  alpnEnabled?: boolean;
  alpnPolicy?: string;
  caCertificateIds?: string[];
  caEnabled?: boolean;
  certificateIds?: string[];
  cps?: number;
  endPort?: string;
  idleTimeout?: number;
  listenerDescription?: string;
  listenerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  listenerStatus?: string;
  loadBalancerId?: string;
  mss?: number;
  proxyProtocolEnabled?: boolean;
  regionId?: string;
  requestId?: string;
  secSensorEnabled?: boolean;
  securityPolicyId?: string;
  serverGroupId?: string;
  startPort?: string;
  tags?: GetListenerAttributeResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      alpnEnabled: 'AlpnEnabled',
      alpnPolicy: 'AlpnPolicy',
      caCertificateIds: 'CaCertificateIds',
      caEnabled: 'CaEnabled',
      certificateIds: 'CertificateIds',
      cps: 'Cps',
      endPort: 'EndPort',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      mss: 'Mss',
      proxyProtocolEnabled: 'ProxyProtocolEnabled',
      regionId: 'RegionId',
      requestId: 'RequestId',
      secSensorEnabled: 'SecSensorEnabled',
      securityPolicyId: 'SecurityPolicyId',
      serverGroupId: 'ServerGroupId',
      startPort: 'StartPort',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpnEnabled: 'boolean',
      alpnPolicy: 'string',
      caCertificateIds: { 'type': 'array', 'itemType': 'string' },
      caEnabled: 'boolean',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      cps: 'number',
      endPort: 'string',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      mss: 'number',
      proxyProtocolEnabled: 'boolean',
      regionId: 'string',
      requestId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
      startPort: 'string',
      tags: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetListenerAttributeResponseBody;
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
      body: GetListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusRequest extends $tea.Model {
  listenerId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBody extends $tea.Model {
  listenerHealthStatus?: GetListenerHealthStatusResponseBodyListenerHealthStatus[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      listenerHealthStatus: 'ListenerHealthStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerHealthStatus: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatus },
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

export class GetListenerHealthStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetListenerHealthStatusResponseBody;
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
      body: GetListenerHealthStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBody extends $tea.Model {
  addressIpVersion?: string;
  addressType?: string;
  bandwidthPackageId?: string;
  cps?: number;
  createTime?: string;
  crossZoneEnabled?: boolean;
  DNSName?: string;
  deletionProtectionConfig?: GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig;
  ipv6AddressType?: string;
  loadBalancerBillingConfig?: GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig;
  loadBalancerBusinessStatus?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerStatus?: string;
  loadBalancerType?: string;
  modificationProtectionConfig?: GetLoadBalancerAttributeResponseBodyModificationProtectionConfig;
  operationLocks?: GetLoadBalancerAttributeResponseBodyOperationLocks[];
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  securityGroupIds?: string[];
  tags?: GetLoadBalancerAttributeResponseBodyTags[];
  vpcId?: string;
  zoneMappings?: GetLoadBalancerAttributeResponseBodyZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
      cps: 'Cps',
      createTime: 'CreateTime',
      crossZoneEnabled: 'CrossZoneEnabled',
      DNSName: 'DNSName',
      deletionProtectionConfig: 'DeletionProtectionConfig',
      ipv6AddressType: 'Ipv6AddressType',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerBusinessStatus: 'LoadBalancerBusinessStatus',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      loadBalancerType: 'LoadBalancerType',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      operationLocks: 'OperationLocks',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      tags: 'Tags',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      cps: 'number',
      createTime: 'string',
      crossZoneEnabled: 'boolean',
      DNSName: 'string',
      deletionProtectionConfig: GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig,
      ipv6AddressType: 'string',
      loadBalancerBillingConfig: GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig,
      loadBalancerBusinessStatus: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      loadBalancerType: 'string',
      modificationProtectionConfig: GetLoadBalancerAttributeResponseBodyModificationProtectionConfig,
      operationLocks: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyOperationLocks },
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyTags },
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLoadBalancerAttributeResponseBody;
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
      body: GetLoadBalancerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesRequest extends $tea.Model {
  certType?: string;
  listenerId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      certType: 'CertType',
      listenerId: 'ListenerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certType: 'string',
      listenerId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponseBody extends $tea.Model {
  certificateIds?: string[];
  certificates?: ListListenerCertificatesResponseBodyCertificates[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificateIds: 'CertificateIds',
      certificates: 'Certificates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      certificates: { 'type': 'array', 'itemType': ListListenerCertificatesResponseBodyCertificates },
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

export class ListListenerCertificatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListListenerCertificatesResponseBody;
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
      body: ListListenerCertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersRequest extends $tea.Model {
  listenerIds?: string[];
  listenerProtocol?: string;
  loadBalancerIds?: string[];
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  tag?: ListListenersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      listenerIds: 'ListenerIds',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerIds: 'LoadBalancerIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerIds: { 'type': 'array', 'itemType': 'string' },
      listenerProtocol: 'string',
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': ListListenersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBody extends $tea.Model {
  listeners?: ListListenersResponseBodyListeners[];
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
      listeners: { 'type': 'array', 'itemType': ListListenersResponseBodyListeners },
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

export class ListListenersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListListenersResponseBody;
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
      body: ListListenersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersRequest extends $tea.Model {
  addressIpVersion?: string;
  addressType?: string;
  DNSName?: string;
  ipv6AddressType?: string;
  loadBalancerBusinessStatus?: string;
  loadBalancerIds?: string[];
  loadBalancerNames?: string[];
  loadBalancerStatus?: string;
  loadBalancerType?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  tag?: ListLoadBalancersRequestTag[];
  vpcIds?: string[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      DNSName: 'DNSName',
      ipv6AddressType: 'Ipv6AddressType',
      loadBalancerBusinessStatus: 'LoadBalancerBusinessStatus',
      loadBalancerIds: 'LoadBalancerIds',
      loadBalancerNames: 'LoadBalancerNames',
      loadBalancerStatus: 'LoadBalancerStatus',
      loadBalancerType: 'LoadBalancerType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcIds: 'VpcIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      addressType: 'string',
      DNSName: 'string',
      ipv6AddressType: 'string',
      loadBalancerBusinessStatus: 'string',
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      loadBalancerNames: { 'type': 'array', 'itemType': 'string' },
      loadBalancerStatus: 'string',
      loadBalancerType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListLoadBalancersRequestTag },
      vpcIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBody extends $tea.Model {
  loadBalancers?: ListLoadBalancersResponseBodyLoadBalancers[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancers: 'LoadBalancers',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancers: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancers },
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

export class ListLoadBalancersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLoadBalancersResponseBody;
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
      body: ListLoadBalancersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityPolicyIds?: string[];
  securityPolicyNames?: string[];
  tag?: ListSecurityPolicyRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyIds: 'SecurityPolicyIds',
      securityPolicyNames: 'SecurityPolicyNames',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityPolicyIds: { 'type': 'array', 'itemType': 'string' },
      securityPolicyNames: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListSecurityPolicyRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  securityPolicies?: ListSecurityPolicyResponseBodySecurityPolicies[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      securityPolicies: 'SecurityPolicies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      securityPolicies: { 'type': 'array', 'itemType': ListSecurityPolicyResponseBodySecurityPolicies },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSecurityPolicyResponseBody;
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
      body: ListSecurityPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  serverGroupId?: string;
  serverIds?: string[];
  serverIps?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serverGroupId: 'ServerGroupId',
      serverIds: 'ServerIds',
      serverIps: 'ServerIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serverGroupId: 'string',
      serverIds: { 'type': 'array', 'itemType': 'string' },
      serverIps: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  servers?: ListServerGroupServersResponseBodyServers[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      servers: 'Servers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      servers: { 'type': 'array', 'itemType': ListServerGroupServersResponseBodyServers },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListServerGroupServersResponseBody;
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
      body: ListServerGroupServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  serverGroupIds?: string[];
  serverGroupNames?: string[];
  serverGroupType?: string;
  tag?: ListServerGroupsRequestTag[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverGroupIds: 'ServerGroupIds',
      serverGroupNames: 'ServerGroupNames',
      serverGroupType: 'ServerGroupType',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serverGroupIds: { 'type': 'array', 'itemType': 'string' },
      serverGroupNames: { 'type': 'array', 'itemType': 'string' },
      serverGroupType: 'string',
      tag: { 'type': 'array', 'itemType': ListServerGroupsRequestTag },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  serverGroups?: ListServerGroupsResponseBodyServerGroups[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serverGroups: 'ServerGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serverGroups: { 'type': 'array', 'itemType': ListServerGroupsResponseBodyServerGroups },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListServerGroupsResponseBody;
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
      body: ListServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPolicyRequest extends $tea.Model {
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

export class ListSystemSecurityPolicyResponseBody extends $tea.Model {
  requestId?: string;
  securityPolicies?: ListSystemSecurityPolicyResponseBodySecurityPolicies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPolicies: 'SecurityPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPolicies: { 'type': 'array', 'itemType': ListSystemSecurityPolicyResponseBodySecurityPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSystemSecurityPolicyResponseBody;
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
      body: ListSystemSecurityPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
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

export class LoadBalancerJoinSecurityGroupRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  regionId?: string;
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoadBalancerJoinSecurityGroupResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoadBalancerJoinSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LoadBalancerJoinSecurityGroupResponseBody;
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
      body: LoadBalancerJoinSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoadBalancerLeaveSecurityGroupRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  regionId?: string;
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoadBalancerLeaveSecurityGroupResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoadBalancerLeaveSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LoadBalancerLeaveSecurityGroupResponseBody;
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
      body: LoadBalancerLeaveSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  newResourceGroupId?: string;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
  data?: MoveResourceGroupResponseBodyData;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: MoveResourceGroupResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MoveResourceGroupResponseBody;
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

export class RemoveServersFromServerGroupRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  serverGroupId?: string;
  servers?: RemoveServersFromServerGroupRequestServers[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serverGroupId: 'ServerGroupId',
      servers: 'Servers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      serverGroupId: 'string',
      servers: { 'type': 'array', 'itemType': RemoveServersFromServerGroupRequestServers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServersFromServerGroupResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServersFromServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveServersFromServerGroupResponseBody;
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
      body: RemoveServersFromServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartListenerRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartListenerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartListenerResponseBody;
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
      body: StartListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartShiftLoadBalancerZonesRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  regionId?: string;
  zoneMappings?: StartShiftLoadBalancerZonesRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': StartShiftLoadBalancerZonesRequestZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartShiftLoadBalancerZonesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartShiftLoadBalancerZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartShiftLoadBalancerZonesResponseBody;
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
      body: StartShiftLoadBalancerZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopListenerRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopListenerResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopListenerResponseBody;
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
      body: StopListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
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

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
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

export class UpdateListenerAttributeRequest extends $tea.Model {
  alpnEnabled?: boolean;
  alpnPolicy?: string;
  caCertificateIds?: string[];
  caEnabled?: boolean;
  certificateIds?: string[];
  clientToken?: string;
  cps?: number;
  dryRun?: boolean;
  idleTimeout?: number;
  listenerDescription?: string;
  listenerId?: string;
  mss?: number;
  proxyProtocolEnabled?: boolean;
  regionId?: string;
  secSensorEnabled?: boolean;
  securityPolicyId?: string;
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      alpnEnabled: 'AlpnEnabled',
      alpnPolicy: 'AlpnPolicy',
      caCertificateIds: 'CaCertificateIds',
      caEnabled: 'CaEnabled',
      certificateIds: 'CertificateIds',
      clientToken: 'ClientToken',
      cps: 'Cps',
      dryRun: 'DryRun',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      mss: 'Mss',
      proxyProtocolEnabled: 'ProxyProtocolEnabled',
      regionId: 'RegionId',
      secSensorEnabled: 'SecSensorEnabled',
      securityPolicyId: 'SecurityPolicyId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpnEnabled: 'boolean',
      alpnPolicy: 'string',
      caCertificateIds: { 'type': 'array', 'itemType': 'string' },
      caEnabled: 'boolean',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      cps: 'number',
      dryRun: 'boolean',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      mss: 'number',
      proxyProtocolEnabled: 'boolean',
      regionId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateListenerAttributeResponseBody;
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
      body: UpdateListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAddressTypeConfigRequest extends $tea.Model {
  addressType?: string;
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  regionId?: string;
  zoneMappings?: UpdateLoadBalancerAddressTypeConfigRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': UpdateLoadBalancerAddressTypeConfigRequestZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAddressTypeConfigResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAddressTypeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLoadBalancerAddressTypeConfigResponseBody;
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
      body: UpdateLoadBalancerAddressTypeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAttributeRequest extends $tea.Model {
  clientToken?: string;
  cps?: number;
  crossZoneEnabled?: boolean;
  dryRun?: boolean;
  loadBalancerId?: string;
  loadBalancerName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      cps: 'Cps',
      crossZoneEnabled: 'CrossZoneEnabled',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      cps: 'number',
      crossZoneEnabled: 'boolean',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAttributeResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLoadBalancerAttributeResponseBody;
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
      body: UpdateLoadBalancerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerProtectionRequest extends $tea.Model {
  clientToken?: string;
  deletionProtectionEnabled?: boolean;
  deletionProtectionReason?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  modificationProtectionReason?: string;
  modificationProtectionStatus?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deletionProtectionEnabled: 'DeletionProtectionEnabled',
      deletionProtectionReason: 'DeletionProtectionReason',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deletionProtectionEnabled: 'boolean',
      deletionProtectionReason: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerProtectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerProtectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLoadBalancerProtectionResponseBody;
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
      body: UpdateLoadBalancerProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerZonesRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  regionId?: string;
  zoneMappings?: UpdateLoadBalancerZonesRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': UpdateLoadBalancerZonesRequestZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerZonesResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLoadBalancerZonesResponseBody;
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
      body: UpdateLoadBalancerZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityPolicyAttributeRequest extends $tea.Model {
  ciphers?: string[];
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  securityPolicyId?: string;
  securityPolicyName?: string;
  tlsVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      securityPolicyId: 'SecurityPolicyId',
      securityPolicyName: 'SecurityPolicyName',
      tlsVersions: 'TlsVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      securityPolicyId: 'string',
      securityPolicyName: 'string',
      tlsVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityPolicyAttributeResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityPolicyAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSecurityPolicyAttributeResponseBody;
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
      body: UpdateSecurityPolicyAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeRequest extends $tea.Model {
  clientToken?: string;
  connectionDrainEnabled?: boolean;
  connectionDrainTimeout?: number;
  dryRun?: boolean;
  healthCheckConfig?: UpdateServerGroupAttributeRequestHealthCheckConfig;
  preserveClientIpEnabled?: boolean;
  regionId?: string;
  scheduler?: string;
  serverGroupId?: string;
  serverGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionDrainEnabled: 'ConnectionDrainEnabled',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
      preserveClientIpEnabled: 'PreserveClientIpEnabled',
      regionId: 'RegionId',
      scheduler: 'Scheduler',
      serverGroupId: 'ServerGroupId',
      serverGroupName: 'ServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionDrainEnabled: 'boolean',
      connectionDrainTimeout: 'number',
      dryRun: 'boolean',
      healthCheckConfig: UpdateServerGroupAttributeRequestHealthCheckConfig,
      preserveClientIpEnabled: 'boolean',
      regionId: 'string',
      scheduler: 'string',
      serverGroupId: 'string',
      serverGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateServerGroupAttributeResponseBody;
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
      body: UpdateServerGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupServersAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  serverGroupId?: string;
  servers?: UpdateServerGroupServersAttributeRequestServers[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serverGroupId: 'ServerGroupId',
      servers: 'Servers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      serverGroupId: 'string',
      servers: { 'type': 'array', 'itemType': UpdateServerGroupServersAttributeRequestServers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupServersAttributeResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupServersAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateServerGroupServersAttributeResponseBody;
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
      body: UpdateServerGroupServersAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServersToServerGroupRequestServers extends $tea.Model {
  description?: string;
  port?: number;
  serverId?: string;
  serverIp?: string;
  serverType?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelShiftLoadBalancerZonesRequestZoneMappings extends $tea.Model {
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

export class CreateListenerRequestTag extends $tea.Model {
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

export class CreateLoadBalancerRequestDeletionProtectionConfig extends $tea.Model {
  enabled?: boolean;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestLoadBalancerBillingConfig extends $tea.Model {
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestModificationProtectionConfig extends $tea.Model {
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestTag extends $tea.Model {
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

export class CreateLoadBalancerRequestZoneMappings extends $tea.Model {
  allocationId?: string;
  privateIPv4Address?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      privateIPv4Address: 'PrivateIPv4Address',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      privateIPv4Address: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityPolicyRequestTag extends $tea.Model {
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

export class CreateServerGroupRequestHealthCheckConfig extends $tea.Model {
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckDomain?: string;
  healthCheckEnabled?: boolean;
  healthCheckHttpCode?: string[];
  healthCheckInterval?: number;
  healthCheckType?: string;
  healthCheckUrl?: string;
  healthyThreshold?: number;
  httpCheckMethod?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckType: 'HealthCheckType',
      healthCheckUrl: 'HealthCheckUrl',
      healthyThreshold: 'HealthyThreshold',
      httpCheckMethod: 'HttpCheckMethod',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckHttpCode: { 'type': 'array', 'itemType': 'string' },
      healthCheckInterval: 'number',
      healthCheckType: 'string',
      healthCheckUrl: 'string',
      healthyThreshold: 'number',
      httpCheckMethod: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupRequestTag extends $tea.Model {
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

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
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

export class DescribeZonesResponseBodyZones extends $tea.Model {
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

export class GetListenerAttributeResponseBodyTags extends $tea.Model {
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

export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason extends $tea.Model {
  reasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      reasonCode: 'ReasonCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers extends $tea.Model {
  port?: number;
  reason?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason;
  serverId?: string;
  serverIp?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      reason: 'Reason',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      reason: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason,
      serverId: 'string',
      serverIp: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfos extends $tea.Model {
  heathCheckEnabled?: boolean;
  nonNormalServers?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers[];
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      heathCheckEnabled: 'HeathCheckEnabled',
      nonNormalServers: 'NonNormalServers',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      heathCheckEnabled: 'boolean',
      nonNormalServers: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers },
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyListenerHealthStatus extends $tea.Model {
  listenerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  serverGroupInfos?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfos[];
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      serverGroupInfos: 'ServerGroupInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      serverGroupInfos: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig extends $tea.Model {
  enabled?: boolean;
  enabledTime?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      enabledTime: 'EnabledTime',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      enabledTime: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig extends $tea.Model {
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyModificationProtectionConfig extends $tea.Model {
  enabledTime?: string;
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      enabledTime: 'EnabledTime',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledTime: 'string',
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyOperationLocks extends $tea.Model {
  lockReason?: string;
  lockType?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
      lockType: 'LockType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
      lockType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyTags extends $tea.Model {
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

export class GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses extends $tea.Model {
  allocationId?: string;
  eniId?: string;
  ipv6Address?: string;
  privateIPv4Address?: string;
  privateIPv4HcStatus?: string;
  privateIPv6HcStatus?: string;
  publicIPv4Address?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eniId: 'EniId',
      ipv6Address: 'Ipv6Address',
      privateIPv4Address: 'PrivateIPv4Address',
      privateIPv4HcStatus: 'PrivateIPv4HcStatus',
      privateIPv6HcStatus: 'PrivateIPv6HcStatus',
      publicIPv4Address: 'PublicIPv4Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eniId: 'string',
      ipv6Address: 'string',
      privateIPv4Address: 'string',
      privateIPv4HcStatus: 'string',
      privateIPv6HcStatus: 'string',
      publicIPv4Address: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyZoneMappings extends $tea.Model {
  loadBalancerAddresses?: GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses[];
  status?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerAddresses: 'LoadBalancerAddresses',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerAddresses: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses },
      status: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponseBodyCertificates extends $tea.Model {
  certificateId?: string;
  certificateType?: string;
  isDefault?: boolean;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      certificateType: 'CertificateType',
      isDefault: 'IsDefault',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      certificateType: 'string',
      isDefault: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersRequestTag extends $tea.Model {
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

export class ListListenersResponseBodyListenersTags extends $tea.Model {
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

export class ListListenersResponseBodyListeners extends $tea.Model {
  alpnEnabled?: boolean;
  alpnPolicy?: string;
  caCertificateIds?: string[];
  caEnabled?: boolean;
  certificateIds?: string[];
  cps?: number;
  endPort?: string;
  idleTimeout?: number;
  listenerDescription?: string;
  listenerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  listenerStatus?: string;
  loadBalancerId?: string;
  mss?: number;
  proxyProtocolEnabled?: boolean;
  regionId?: string;
  secSensorEnabled?: boolean;
  securityPolicyId?: string;
  serverGroupId?: string;
  startPort?: string;
  tags?: ListListenersResponseBodyListenersTags[];
  static names(): { [key: string]: string } {
    return {
      alpnEnabled: 'AlpnEnabled',
      alpnPolicy: 'AlpnPolicy',
      caCertificateIds: 'CaCertificateIds',
      caEnabled: 'CaEnabled',
      certificateIds: 'CertificateIds',
      cps: 'Cps',
      endPort: 'EndPort',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      mss: 'Mss',
      proxyProtocolEnabled: 'ProxyProtocolEnabled',
      regionId: 'RegionId',
      secSensorEnabled: 'SecSensorEnabled',
      securityPolicyId: 'SecurityPolicyId',
      serverGroupId: 'ServerGroupId',
      startPort: 'StartPort',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpnEnabled: 'boolean',
      alpnPolicy: 'string',
      caCertificateIds: { 'type': 'array', 'itemType': 'string' },
      caEnabled: 'boolean',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      cps: 'number',
      endPort: 'string',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      mss: 'number',
      proxyProtocolEnabled: 'boolean',
      regionId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
      startPort: 'string',
      tags: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersRequestTag extends $tea.Model {
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

export class ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig extends $tea.Model {
  enabled?: boolean;
  enabledTime?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      enabledTime: 'EnabledTime',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      enabledTime: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig extends $tea.Model {
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig extends $tea.Model {
  enabledTime?: string;
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      enabledTime: 'EnabledTime',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledTime: 'string',
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersOperationLocks extends $tea.Model {
  lockReason?: string;
  lockType?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
      lockType: 'LockType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
      lockType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersTags extends $tea.Model {
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

export class ListLoadBalancersResponseBodyLoadBalancersZoneMappingsLoadBalancerAddresses extends $tea.Model {
  allocationId?: string;
  eniId?: string;
  ipv6Address?: string;
  privateIPv4Address?: string;
  privateIPv4HcStatus?: string;
  privateIPv6HcStatus?: string;
  publicIPv4Address?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eniId: 'EniId',
      ipv6Address: 'Ipv6Address',
      privateIPv4Address: 'PrivateIPv4Address',
      privateIPv4HcStatus: 'PrivateIPv4HcStatus',
      privateIPv6HcStatus: 'PrivateIPv6HcStatus',
      publicIPv4Address: 'PublicIPv4Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eniId: 'string',
      ipv6Address: 'string',
      privateIPv4Address: 'string',
      privateIPv4HcStatus: 'string',
      privateIPv6HcStatus: 'string',
      publicIPv4Address: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersZoneMappings extends $tea.Model {
  loadBalancerAddresses?: ListLoadBalancersResponseBodyLoadBalancersZoneMappingsLoadBalancerAddresses[];
  status?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerAddresses: 'LoadBalancerAddresses',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerAddresses: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersZoneMappingsLoadBalancerAddresses },
      status: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancers extends $tea.Model {
  addressIpVersion?: string;
  addressType?: string;
  bandwidthPackageId?: string;
  createTime?: string;
  crossZoneEnabled?: boolean;
  DNSName?: string;
  deletionProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig;
  ipv6AddressType?: string;
  loadBalancerBillingConfig?: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig;
  loadBalancerBusinessStatus?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerStatus?: string;
  loadBalancerType?: string;
  modificationProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig;
  operationLocks?: ListLoadBalancersResponseBodyLoadBalancersOperationLocks[];
  regionId?: string;
  resourceGroupId?: string;
  securityGroupIds?: string[];
  tags?: ListLoadBalancersResponseBodyLoadBalancersTags[];
  vpcId?: string;
  zoneMappings?: ListLoadBalancersResponseBodyLoadBalancersZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
      createTime: 'CreateTime',
      crossZoneEnabled: 'CrossZoneEnabled',
      DNSName: 'DNSName',
      deletionProtectionConfig: 'DeletionProtectionConfig',
      ipv6AddressType: 'Ipv6AddressType',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerBusinessStatus: 'LoadBalancerBusinessStatus',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      loadBalancerType: 'LoadBalancerType',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      operationLocks: 'OperationLocks',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      tags: 'Tags',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      createTime: 'string',
      crossZoneEnabled: 'boolean',
      DNSName: 'string',
      deletionProtectionConfig: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig,
      ipv6AddressType: 'string',
      loadBalancerBillingConfig: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig,
      loadBalancerBusinessStatus: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      loadBalancerType: 'string',
      modificationProtectionConfig: ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig,
      operationLocks: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersOperationLocks },
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersTags },
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRequestTag extends $tea.Model {
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

export class ListSecurityPolicyResponseBodySecurityPoliciesRelatedListeners extends $tea.Model {
  listenerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyResponseBodySecurityPoliciesTags extends $tea.Model {
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

export class ListSecurityPolicyResponseBodySecurityPolicies extends $tea.Model {
  ciphers?: string;
  regionId?: string;
  relatedListeners?: ListSecurityPolicyResponseBodySecurityPoliciesRelatedListeners[];
  resourceGroupId?: string;
  securityPolicyId?: string;
  securityPolicyName?: string;
  securityPolicyStatus?: string;
  tags?: ListSecurityPolicyResponseBodySecurityPoliciesTags[];
  tlsVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      regionId: 'RegionId',
      relatedListeners: 'RelatedListeners',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyId: 'SecurityPolicyId',
      securityPolicyName: 'SecurityPolicyName',
      securityPolicyStatus: 'SecurityPolicyStatus',
      tags: 'Tags',
      tlsVersion: 'TlsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: 'string',
      regionId: 'string',
      relatedListeners: { 'type': 'array', 'itemType': ListSecurityPolicyResponseBodySecurityPoliciesRelatedListeners },
      resourceGroupId: 'string',
      securityPolicyId: 'string',
      securityPolicyName: 'string',
      securityPolicyStatus: 'string',
      tags: { 'type': 'array', 'itemType': ListSecurityPolicyResponseBodySecurityPoliciesTags },
      tlsVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersResponseBodyServers extends $tea.Model {
  description?: string;
  port?: number;
  serverGroupId?: string;
  serverId?: string;
  serverIp?: string;
  serverType?: string;
  status?: string;
  weight?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverGroupId: 'ServerGroupId',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
      status: 'Status',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverGroupId: 'string',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
      status: 'string',
      weight: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsRequestTag extends $tea.Model {
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

export class ListServerGroupsResponseBodyServerGroupsHealthCheck extends $tea.Model {
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckDomain?: string;
  healthCheckEnabled?: boolean;
  healthCheckHttpCode?: string[];
  healthCheckInterval?: number;
  healthCheckType?: string;
  healthCheckUrl?: string;
  healthyThreshold?: number;
  httpCheckMethod?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckType: 'HealthCheckType',
      healthCheckUrl: 'HealthCheckUrl',
      healthyThreshold: 'HealthyThreshold',
      httpCheckMethod: 'HttpCheckMethod',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckHttpCode: { 'type': 'array', 'itemType': 'string' },
      healthCheckInterval: 'number',
      healthCheckType: 'string',
      healthCheckUrl: 'string',
      healthyThreshold: 'number',
      httpCheckMethod: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBodyServerGroupsTags extends $tea.Model {
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

export class ListServerGroupsResponseBodyServerGroups extends $tea.Model {
  addressIPVersion?: string;
  aliUid?: number;
  anyPortEnabled?: boolean;
  connectionDrainEnabled?: boolean;
  connectionDrainTimeout?: number;
  healthCheck?: ListServerGroupsResponseBodyServerGroupsHealthCheck;
  preserveClientIpEnabled?: boolean;
  protocol?: string;
  regionId?: string;
  relatedLoadBalancerIds?: string[];
  resourceGroupId?: string;
  scheduler?: string;
  serverCount?: number;
  serverGroupId?: string;
  serverGroupName?: string;
  serverGroupStatus?: string;
  serverGroupType?: string;
  tags?: ListServerGroupsResponseBodyServerGroupsTags[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressIPVersion: 'AddressIPVersion',
      aliUid: 'AliUid',
      anyPortEnabled: 'AnyPortEnabled',
      connectionDrainEnabled: 'ConnectionDrainEnabled',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      healthCheck: 'HealthCheck',
      preserveClientIpEnabled: 'PreserveClientIpEnabled',
      protocol: 'Protocol',
      regionId: 'RegionId',
      relatedLoadBalancerIds: 'RelatedLoadBalancerIds',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverCount: 'ServerCount',
      serverGroupId: 'ServerGroupId',
      serverGroupName: 'ServerGroupName',
      serverGroupStatus: 'ServerGroupStatus',
      serverGroupType: 'ServerGroupType',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIPVersion: 'string',
      aliUid: 'number',
      anyPortEnabled: 'boolean',
      connectionDrainEnabled: 'boolean',
      connectionDrainTimeout: 'number',
      healthCheck: ListServerGroupsResponseBodyServerGroupsHealthCheck,
      preserveClientIpEnabled: 'boolean',
      protocol: 'string',
      regionId: 'string',
      relatedLoadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      scheduler: 'string',
      serverCount: 'number',
      serverGroupId: 'string',
      serverGroupName: 'string',
      serverGroupStatus: 'string',
      serverGroupType: 'string',
      tags: { 'type': 'array', 'itemType': ListServerGroupsResponseBodyServerGroupsTags },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPolicyResponseBodySecurityPolicies extends $tea.Model {
  ciphers?: string;
  securityPolicyId?: string;
  securityPolicyName?: string;
  tlsVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      securityPolicyId: 'SecurityPolicyId',
      securityPolicyName: 'SecurityPolicyName',
      tlsVersion: 'TlsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: 'string',
      securityPolicyId: 'string',
      securityPolicyName: 'string',
      tlsVersion: 'string',
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
  aliUid?: number;
  category?: string;
  regionNo?: string;
  resourceId?: string;
  resourceType?: string;
  scope?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      category: 'Category',
      regionNo: 'RegionNo',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      category: 'string',
      regionNo: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyData extends $tea.Model {
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServersFromServerGroupRequestServers extends $tea.Model {
  port?: number;
  serverId?: string;
  serverIp?: string;
  serverType?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartShiftLoadBalancerZonesRequestZoneMappings extends $tea.Model {
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

export class UpdateLoadBalancerAddressTypeConfigRequestZoneMappings extends $tea.Model {
  allocationId?: string;
  eipType?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eipType: 'EipType',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eipType: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerZonesRequestZoneMappings extends $tea.Model {
  allocationId?: string;
  eipType?: string;
  privateIPv4Address?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eipType: 'EipType',
      privateIPv4Address: 'PrivateIPv4Address',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eipType: 'string',
      privateIPv4Address: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeRequestHealthCheckConfig extends $tea.Model {
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckDomain?: string;
  healthCheckEnabled?: boolean;
  healthCheckHttpCode?: string[];
  healthCheckInterval?: number;
  healthCheckType?: string;
  healthCheckUrl?: string;
  healthyThreshold?: number;
  httpCheckMethod?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckType: 'HealthCheckType',
      healthCheckUrl: 'HealthCheckUrl',
      healthyThreshold: 'HealthyThreshold',
      httpCheckMethod: 'HttpCheckMethod',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckHttpCode: { 'type': 'array', 'itemType': 'string' },
      healthCheckInterval: 'number',
      healthCheckType: 'string',
      healthCheckUrl: 'string',
      healthyThreshold: 'number',
      httpCheckMethod: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupServersAttributeRequestServers extends $tea.Model {
  description?: string;
  port?: number;
  serverId?: string;
  serverIp?: string;
  serverType?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
      weight: 'number',
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
    this._endpoint = this.getEndpoint("nlb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addServersToServerGroupWithOptions(request: AddServersToServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddServersToServerGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.servers)) {
      bodyFlat["Servers"] = request.servers;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddServersToServerGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddServersToServerGroupResponse>(await this.callApi(params, req, runtime), new AddServersToServerGroupResponse({}));
  }

  async addServersToServerGroup(request: AddServersToServerGroupRequest): Promise<AddServersToServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addServersToServerGroupWithOptions(request, runtime);
  }

  /**
    * **AssociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](~~615175~~) operation to query the status of the task:
    * *   If the listener is in the **Associating** state, the additional certificates are being associated.
    * *   If the listener is in the **Associated** state, the additional certificates are associated.
    *
    * @param request AssociateAdditionalCertificatesWithListenerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListenerWithOptions(request: AssociateAdditionalCertificatesWithListenerRequest, runtime: $Util.RuntimeOptions): Promise<AssociateAdditionalCertificatesWithListenerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.additionalCertificateIds)) {
      body["AdditionalCertificateIds"] = request.additionalCertificateIds;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AssociateAdditionalCertificatesWithListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateAdditionalCertificatesWithListenerResponse>(await this.callApi(params, req, runtime), new AssociateAdditionalCertificatesWithListenerResponse({}));
  }

  /**
    * **AssociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](~~615175~~) operation to query the status of the task:
    * *   If the listener is in the **Associating** state, the additional certificates are being associated.
    * *   If the listener is in the **Associated** state, the additional certificates are associated.
    *
    * @param request AssociateAdditionalCertificatesWithListenerRequest
    * @return AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListener(request: AssociateAdditionalCertificatesWithListenerRequest): Promise<AssociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  async attachCommonBandwidthPackageToLoadBalancerWithOptions(request: AttachCommonBandwidthPackageToLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<AttachCommonBandwidthPackageToLoadBalancerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bandwidthPackageId)) {
      body["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AttachCommonBandwidthPackageToLoadBalancer",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachCommonBandwidthPackageToLoadBalancerResponse>(await this.callApi(params, req, runtime), new AttachCommonBandwidthPackageToLoadBalancerResponse({}));
  }

  async attachCommonBandwidthPackageToLoadBalancer(request: AttachCommonBandwidthPackageToLoadBalancerRequest): Promise<AttachCommonBandwidthPackageToLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachCommonBandwidthPackageToLoadBalancerWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, the zone of the Network Load Balancer (NLB) instance is removed from the DNS record by using the console or calling the [StartShiftLoadBalancerZones](~~2411999~~) API operation.
    *
    * @param request CancelShiftLoadBalancerZonesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CancelShiftLoadBalancerZonesResponse
   */
  async cancelShiftLoadBalancerZonesWithOptions(request: CancelShiftLoadBalancerZonesRequest, runtime: $Util.RuntimeOptions): Promise<CancelShiftLoadBalancerZonesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneMappings)) {
      body["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelShiftLoadBalancerZones",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelShiftLoadBalancerZonesResponse>(await this.callApi(params, req, runtime), new CancelShiftLoadBalancerZonesResponse({}));
  }

  /**
    * Before you call this operation, the zone of the Network Load Balancer (NLB) instance is removed from the DNS record by using the console or calling the [StartShiftLoadBalancerZones](~~2411999~~) API operation.
    *
    * @param request CancelShiftLoadBalancerZonesRequest
    * @return CancelShiftLoadBalancerZonesResponse
   */
  async cancelShiftLoadBalancerZones(request: CancelShiftLoadBalancerZonesRequest): Promise<CancelShiftLoadBalancerZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelShiftLoadBalancerZonesWithOptions(request, runtime);
  }

  async createListenerWithOptions(request: CreateListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateListenerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alpnEnabled)) {
      body["AlpnEnabled"] = request.alpnEnabled;
    }

    if (!Util.isUnset(request.alpnPolicy)) {
      body["AlpnPolicy"] = request.alpnPolicy;
    }

    if (!Util.isUnset(request.caCertificateIds)) {
      body["CaCertificateIds"] = request.caCertificateIds;
    }

    if (!Util.isUnset(request.caEnabled)) {
      body["CaEnabled"] = request.caEnabled;
    }

    if (!Util.isUnset(request.certificateIds)) {
      body["CertificateIds"] = request.certificateIds;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.cps)) {
      body["Cps"] = request.cps;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endPort)) {
      body["EndPort"] = request.endPort;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      body["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerDescription)) {
      body["ListenerDescription"] = request.listenerDescription;
    }

    if (!Util.isUnset(request.listenerPort)) {
      body["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      body["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.mss)) {
      body["Mss"] = request.mss;
    }

    if (!Util.isUnset(request.proxyProtocolEnabled)) {
      body["ProxyProtocolEnabled"] = request.proxyProtocolEnabled;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.secSensorEnabled)) {
      body["SecSensorEnabled"] = request.secSensorEnabled;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      body["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.startPort)) {
      body["StartPort"] = request.startPort;
    }

    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateListenerResponse>(await this.callApi(params, req, runtime), new CreateListenerResponse({}));
  }

  async createListener(request: CreateListenerRequest): Promise<CreateListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createListenerWithOptions(request, runtime);
  }

  /**
    * *   When you create an NLB instance, the service-linked role AliyunServiceRoleForNlb is automatically created and assigned to you.
    * *   **CreateLoadBalancer** is an asynchronous operation. After you send a request, the system returns an instance ID and runs the task in the background. You can call [GetLoadBalancerAttribute](~~445873~~) to query the status of an NLB instance.
    *     *   If an NLB instance is in the **Provisioning** state, the NLB instance is being created.
    *     *   If an NLB instance is in the **Active** state, the NLB instance is created.
    *
    * @param request CreateLoadBalancerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateLoadBalancerResponse
   */
  async createLoadBalancerWithOptions(request: CreateLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressIpVersion)) {
      body["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!Util.isUnset(request.addressType)) {
      body["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.bandwidthPackageId)) {
      body["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deletionProtectionConfig)) {
      bodyFlat["DeletionProtectionConfig"] = request.deletionProtectionConfig;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerBillingConfig)) {
      bodyFlat["LoadBalancerBillingConfig"] = request.loadBalancerBillingConfig;
    }

    if (!Util.isUnset(request.loadBalancerName)) {
      body["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!Util.isUnset(request.loadBalancerType)) {
      body["LoadBalancerType"] = request.loadBalancerType;
    }

    if (!Util.isUnset(request.modificationProtectionConfig)) {
      bodyFlat["ModificationProtectionConfig"] = request.modificationProtectionConfig;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneMappings)) {
      bodyFlat["ZoneMappings"] = request.zoneMappings;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancer",
      version: "2022-04-30",
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

  /**
    * *   When you create an NLB instance, the service-linked role AliyunServiceRoleForNlb is automatically created and assigned to you.
    * *   **CreateLoadBalancer** is an asynchronous operation. After you send a request, the system returns an instance ID and runs the task in the background. You can call [GetLoadBalancerAttribute](~~445873~~) to query the status of an NLB instance.
    *     *   If an NLB instance is in the **Provisioning** state, the NLB instance is being created.
    *     *   If an NLB instance is in the **Active** state, the NLB instance is created.
    *
    * @param request CreateLoadBalancerRequest
    * @return CreateLoadBalancerResponse
   */
  async createLoadBalancer(request: CreateLoadBalancerRequest): Promise<CreateLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  async createSecurityPolicyWithOptions(request: CreateSecurityPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecurityPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ciphers)) {
      body["Ciphers"] = request.ciphers;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityPolicyName)) {
      body["SecurityPolicyName"] = request.securityPolicyName;
    }

    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.tlsVersions)) {
      body["TlsVersions"] = request.tlsVersions;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecurityPolicy",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSecurityPolicyResponse>(await this.callApi(params, req, runtime), new CreateSecurityPolicyResponse({}));
  }

  async createSecurityPolicy(request: CreateSecurityPolicyRequest): Promise<CreateSecurityPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecurityPolicyWithOptions(request, runtime);
  }

  /**
    * *   **protocol** specifies the protocol used to forward requests to the backend servers.
    * *   NLB instances support only backend server groups that use TCP, UDP, or SSL over TCP.
    * *   **CreateServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](~~445904~~) operation to query the creation status of the task.
    *     *   If the task is in the **Succeeded** status, the server group is created.
    *     *   If the task is in the **Processing** status, the server group is being created.
    *
    * @param request CreateServerGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateServerGroupResponse
   */
  async createServerGroupWithOptions(request: CreateServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateServerGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressIPVersion)) {
      body["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.anyPortEnabled)) {
      body["AnyPortEnabled"] = request.anyPortEnabled;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionDrainEnabled)) {
      body["ConnectionDrainEnabled"] = request.connectionDrainEnabled;
    }

    if (!Util.isUnset(request.connectionDrainTimeout)) {
      body["ConnectionDrainTimeout"] = request.connectionDrainTimeout;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.healthCheckConfig)) {
      bodyFlat["HealthCheckConfig"] = request.healthCheckConfig;
    }

    if (!Util.isUnset(request.preserveClientIpEnabled)) {
      body["PreserveClientIpEnabled"] = request.preserveClientIpEnabled;
    }

    if (!Util.isUnset(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.scheduler)) {
      body["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.serverGroupName)) {
      body["ServerGroupName"] = request.serverGroupName;
    }

    if (!Util.isUnset(request.serverGroupType)) {
      body["ServerGroupType"] = request.serverGroupType;
    }

    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateServerGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServerGroupResponse>(await this.callApi(params, req, runtime), new CreateServerGroupResponse({}));
  }

  /**
    * *   **protocol** specifies the protocol used to forward requests to the backend servers.
    * *   NLB instances support only backend server groups that use TCP, UDP, or SSL over TCP.
    * *   **CreateServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](~~445904~~) operation to query the creation status of the task.
    *     *   If the task is in the **Succeeded** status, the server group is created.
    *     *   If the task is in the **Processing** status, the server group is being created.
    *
    * @param request CreateServerGroupRequest
    * @return CreateServerGroupResponse
   */
  async createServerGroup(request: CreateServerGroupRequest): Promise<CreateServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServerGroupWithOptions(request, runtime);
  }

  async deleteListenerWithOptions(request: DeleteListenerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteListenerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteListenerResponse>(await this.callApi(params, req, runtime), new DeleteListenerResponse({}));
  }

  async deleteListener(request: DeleteListenerRequest): Promise<DeleteListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteListenerWithOptions(request, runtime);
  }

  async deleteLoadBalancerWithOptions(request: DeleteLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoadBalancerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLoadBalancer",
      version: "2022-04-30",
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

  async deleteSecurityPolicyWithOptions(request: DeleteSecurityPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      body["SecurityPolicyId"] = request.securityPolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecurityPolicy",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecurityPolicyResponse>(await this.callApi(params, req, runtime), new DeleteSecurityPolicyResponse({}));
  }

  async deleteSecurityPolicy(request: DeleteSecurityPolicyRequest): Promise<DeleteSecurityPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityPolicyWithOptions(request, runtime);
  }

  /**
    * You can delete server groups that are not associated with listeners.
    *
    * @param request DeleteServerGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteServerGroupResponse
   */
  async deleteServerGroupWithOptions(request: DeleteServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServerGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServerGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServerGroupResponse>(await this.callApi(params, req, runtime), new DeleteServerGroupResponse({}));
  }

  /**
    * You can delete server groups that are not associated with listeners.
    *
    * @param request DeleteServerGroupRequest
    * @return DeleteServerGroupResponse
   */
  async deleteServerGroup(request: DeleteServerGroupRequest): Promise<DeleteServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServerGroupWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2022-04-30",
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
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZones",
      version: "2022-04-30",
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

  async detachCommonBandwidthPackageFromLoadBalancerWithOptions(request: DetachCommonBandwidthPackageFromLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<DetachCommonBandwidthPackageFromLoadBalancerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bandwidthPackageId)) {
      body["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetachCommonBandwidthPackageFromLoadBalancer",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachCommonBandwidthPackageFromLoadBalancerResponse>(await this.callApi(params, req, runtime), new DetachCommonBandwidthPackageFromLoadBalancerResponse({}));
  }

  async detachCommonBandwidthPackageFromLoadBalancer(request: DetachCommonBandwidthPackageFromLoadBalancerRequest): Promise<DetachCommonBandwidthPackageFromLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachCommonBandwidthPackageFromLoadBalancerWithOptions(request, runtime);
  }

  async disableLoadBalancerIpv6InternetWithOptions(request: DisableLoadBalancerIpv6InternetRequest, runtime: $Util.RuntimeOptions): Promise<DisableLoadBalancerIpv6InternetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisableLoadBalancerIpv6Internet",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableLoadBalancerIpv6InternetResponse>(await this.callApi(params, req, runtime), new DisableLoadBalancerIpv6InternetResponse({}));
  }

  async disableLoadBalancerIpv6Internet(request: DisableLoadBalancerIpv6InternetRequest): Promise<DisableLoadBalancerIpv6InternetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableLoadBalancerIpv6InternetWithOptions(request, runtime);
  }

  /**
    * **DisassociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](~~615175~~) operation to query the status of the task:
    * *   If an additional certificate is in the **Dissociating** state, the additional certificate is being disassociated.
    * *   If an additional certificate is in the **Dissociated** state, the additional certificate is disassociated.
    *
    * @param request DisassociateAdditionalCertificatesWithListenerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisassociateAdditionalCertificatesWithListenerResponse
   */
  async disassociateAdditionalCertificatesWithListenerWithOptions(request: DisassociateAdditionalCertificatesWithListenerRequest, runtime: $Util.RuntimeOptions): Promise<DisassociateAdditionalCertificatesWithListenerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.additionalCertificateIds)) {
      body["AdditionalCertificateIds"] = request.additionalCertificateIds;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisassociateAdditionalCertificatesWithListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisassociateAdditionalCertificatesWithListenerResponse>(await this.callApi(params, req, runtime), new DisassociateAdditionalCertificatesWithListenerResponse({}));
  }

  /**
    * **DisassociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](~~615175~~) operation to query the status of the task:
    * *   If an additional certificate is in the **Dissociating** state, the additional certificate is being disassociated.
    * *   If an additional certificate is in the **Dissociated** state, the additional certificate is disassociated.
    *
    * @param request DisassociateAdditionalCertificatesWithListenerRequest
    * @return DisassociateAdditionalCertificatesWithListenerResponse
   */
  async disassociateAdditionalCertificatesWithListener(request: DisassociateAdditionalCertificatesWithListenerRequest): Promise<DisassociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  async enableLoadBalancerIpv6InternetWithOptions(request: EnableLoadBalancerIpv6InternetRequest, runtime: $Util.RuntimeOptions): Promise<EnableLoadBalancerIpv6InternetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableLoadBalancerIpv6Internet",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableLoadBalancerIpv6InternetResponse>(await this.callApi(params, req, runtime), new EnableLoadBalancerIpv6InternetResponse({}));
  }

  async enableLoadBalancerIpv6Internet(request: EnableLoadBalancerIpv6InternetRequest): Promise<EnableLoadBalancerIpv6InternetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableLoadBalancerIpv6InternetWithOptions(request, runtime);
  }

  async getJobStatusWithOptions(request: GetJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetJobStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJobStatus",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobStatusResponse>(await this.callApi(params, req, runtime), new GetJobStatusResponse({}));
  }

  async getJobStatus(request: GetJobStatusRequest): Promise<GetJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobStatusWithOptions(request, runtime);
  }

  async getListenerAttributeWithOptions(request: GetListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetListenerAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetListenerAttributeResponse>(await this.callApi(params, req, runtime), new GetListenerAttributeResponse({}));
  }

  async getListenerAttribute(request: GetListenerAttributeRequest): Promise<GetListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getListenerAttributeWithOptions(request, runtime);
  }

  async getListenerHealthStatusWithOptions(request: GetListenerHealthStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetListenerHealthStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetListenerHealthStatus",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetListenerHealthStatusResponse>(await this.callApi(params, req, runtime), new GetListenerHealthStatusResponse({}));
  }

  async getListenerHealthStatus(request: GetListenerHealthStatusRequest): Promise<GetListenerHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getListenerHealthStatusWithOptions(request, runtime);
  }

  async getLoadBalancerAttributeWithOptions(request: GetLoadBalancerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetLoadBalancerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLoadBalancerAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLoadBalancerAttributeResponse>(await this.callApi(params, req, runtime), new GetLoadBalancerAttributeResponse({}));
  }

  async getLoadBalancerAttribute(request: GetLoadBalancerAttributeRequest): Promise<GetLoadBalancerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoadBalancerAttributeWithOptions(request, runtime);
  }

  async listListenerCertificatesWithOptions(request: ListListenerCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<ListListenerCertificatesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certType)) {
      body["CertType"] = request.certType;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListListenerCertificates",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListListenerCertificatesResponse>(await this.callApi(params, req, runtime), new ListListenerCertificatesResponse({}));
  }

  async listListenerCertificates(request: ListListenerCertificatesRequest): Promise<ListListenerCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenerCertificatesWithOptions(request, runtime);
  }

  async listListenersWithOptions(request: ListListenersRequest, runtime: $Util.RuntimeOptions): Promise<ListListenersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerIds)) {
      query["ListenerIds"] = request.listenerIds;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerIds)) {
      query["LoadBalancerIds"] = request.loadBalancerIds;
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListListeners",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListListenersResponse>(await this.callApi(params, req, runtime), new ListListenersResponse({}));
  }

  async listListeners(request: ListListenersRequest): Promise<ListListenersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenersWithOptions(request, runtime);
  }

  async listLoadBalancersWithOptions(request: ListLoadBalancersRequest, runtime: $Util.RuntimeOptions): Promise<ListLoadBalancersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.DNSName)) {
      query["DNSName"] = request.DNSName;
    }

    if (!Util.isUnset(request.ipv6AddressType)) {
      query["Ipv6AddressType"] = request.ipv6AddressType;
    }

    if (!Util.isUnset(request.loadBalancerBusinessStatus)) {
      query["LoadBalancerBusinessStatus"] = request.loadBalancerBusinessStatus;
    }

    if (!Util.isUnset(request.loadBalancerIds)) {
      query["LoadBalancerIds"] = request.loadBalancerIds;
    }

    if (!Util.isUnset(request.loadBalancerNames)) {
      query["LoadBalancerNames"] = request.loadBalancerNames;
    }

    if (!Util.isUnset(request.loadBalancerStatus)) {
      query["LoadBalancerStatus"] = request.loadBalancerStatus;
    }

    if (!Util.isUnset(request.loadBalancerType)) {
      query["LoadBalancerType"] = request.loadBalancerType;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vpcIds)) {
      query["VpcIds"] = request.vpcIds;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLoadBalancers",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLoadBalancersResponse>(await this.callApi(params, req, runtime), new ListLoadBalancersResponse({}));
  }

  async listLoadBalancers(request: ListLoadBalancersRequest): Promise<ListLoadBalancersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLoadBalancersWithOptions(request, runtime);
  }

  async listSecurityPolicyWithOptions(request: ListSecurityPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ListSecurityPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityPolicyIds)) {
      body["SecurityPolicyIds"] = request.securityPolicyIds;
    }

    if (!Util.isUnset(request.securityPolicyNames)) {
      body["SecurityPolicyNames"] = request.securityPolicyNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSecurityPolicy",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSecurityPolicyResponse>(await this.callApi(params, req, runtime), new ListSecurityPolicyResponse({}));
  }

  async listSecurityPolicy(request: ListSecurityPolicyRequest): Promise<ListSecurityPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecurityPolicyWithOptions(request, runtime);
  }

  async listServerGroupServersWithOptions(request: ListServerGroupServersRequest, runtime: $Util.RuntimeOptions): Promise<ListServerGroupServersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.serverIds)) {
      body["ServerIds"] = request.serverIds;
    }

    if (!Util.isUnset(request.serverIps)) {
      body["ServerIps"] = request.serverIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListServerGroupServers",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServerGroupServersResponse>(await this.callApi(params, req, runtime), new ListServerGroupServersResponse({}));
  }

  async listServerGroupServers(request: ListServerGroupServersRequest): Promise<ListServerGroupServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServerGroupServersWithOptions(request, runtime);
  }

  async listServerGroupsWithOptions(request: ListServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListServerGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serverGroupIds)) {
      body["ServerGroupIds"] = request.serverGroupIds;
    }

    if (!Util.isUnset(request.serverGroupNames)) {
      body["ServerGroupNames"] = request.serverGroupNames;
    }

    if (!Util.isUnset(request.serverGroupType)) {
      body["ServerGroupType"] = request.serverGroupType;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListServerGroups",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServerGroupsResponse>(await this.callApi(params, req, runtime), new ListServerGroupsResponse({}));
  }

  async listServerGroups(request: ListServerGroupsRequest): Promise<ListServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServerGroupsWithOptions(request, runtime);
  }

  async listSystemSecurityPolicyWithOptions(request: ListSystemSecurityPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ListSystemSecurityPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSystemSecurityPolicy",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSystemSecurityPolicyResponse>(await this.callApi(params, req, runtime), new ListSystemSecurityPolicyResponse({}));
  }

  async listSystemSecurityPolicy(request: ListSystemSecurityPolicyRequest): Promise<ListSystemSecurityPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSystemSecurityPolicyWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2022-04-30",
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

  /**
    * *   Make sure that you have created a security group. For more information about how to create a security group, see [CreateSecurityGroup](~~25553~~).
    * *   An NLB instance can be associated with up to four security groups.
    * *   You can query the security groups that are associated with an NLB instance by calling the [GetLoadBalancerAttribute](~~214362~~) operation.
    * *   LoadBalancerJoinSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](~~445904~~) operation to query the status of a task.
    *     *   If the task is in the **Succeeded** state, the security group is associated.
    *     *   If the task is in the **Processing** state, the security group is being associated. In this case, you can perform only query operations.
    *
    * @param request LoadBalancerJoinSecurityGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return LoadBalancerJoinSecurityGroupResponse
   */
  async loadBalancerJoinSecurityGroupWithOptions(request: LoadBalancerJoinSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<LoadBalancerJoinSecurityGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityGroupIds)) {
      body["SecurityGroupIds"] = request.securityGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LoadBalancerJoinSecurityGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LoadBalancerJoinSecurityGroupResponse>(await this.callApi(params, req, runtime), new LoadBalancerJoinSecurityGroupResponse({}));
  }

  /**
    * *   Make sure that you have created a security group. For more information about how to create a security group, see [CreateSecurityGroup](~~25553~~).
    * *   An NLB instance can be associated with up to four security groups.
    * *   You can query the security groups that are associated with an NLB instance by calling the [GetLoadBalancerAttribute](~~214362~~) operation.
    * *   LoadBalancerJoinSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](~~445904~~) operation to query the status of a task.
    *     *   If the task is in the **Succeeded** state, the security group is associated.
    *     *   If the task is in the **Processing** state, the security group is being associated. In this case, you can perform only query operations.
    *
    * @param request LoadBalancerJoinSecurityGroupRequest
    * @return LoadBalancerJoinSecurityGroupResponse
   */
  async loadBalancerJoinSecurityGroup(request: LoadBalancerJoinSecurityGroupRequest): Promise<LoadBalancerJoinSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.loadBalancerJoinSecurityGroupWithOptions(request, runtime);
  }

  /**
    * LoadBalancerLeaveSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](~~445904~~) operation to query the status of a task.
    * *   If the task is in the **Succeeded** state, the security group is disassociated.
    * *   If the task is in the **Processing** state, the security group is being disassociated. In this case, you can perform only query operations.
    *
    * @param request LoadBalancerLeaveSecurityGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return LoadBalancerLeaveSecurityGroupResponse
   */
  async loadBalancerLeaveSecurityGroupWithOptions(request: LoadBalancerLeaveSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<LoadBalancerLeaveSecurityGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityGroupIds)) {
      body["SecurityGroupIds"] = request.securityGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LoadBalancerLeaveSecurityGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LoadBalancerLeaveSecurityGroupResponse>(await this.callApi(params, req, runtime), new LoadBalancerLeaveSecurityGroupResponse({}));
  }

  /**
    * LoadBalancerLeaveSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](~~445904~~) operation to query the status of a task.
    * *   If the task is in the **Succeeded** state, the security group is disassociated.
    * *   If the task is in the **Processing** state, the security group is being disassociated. In this case, you can perform only query operations.
    *
    * @param request LoadBalancerLeaveSecurityGroupRequest
    * @return LoadBalancerLeaveSecurityGroupResponse
   */
  async loadBalancerLeaveSecurityGroup(request: LoadBalancerLeaveSecurityGroupRequest): Promise<LoadBalancerLeaveSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.loadBalancerLeaveSecurityGroupWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2022-04-30",
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

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async removeServersFromServerGroupWithOptions(request: RemoveServersFromServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveServersFromServerGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.servers)) {
      body["Servers"] = request.servers;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveServersFromServerGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveServersFromServerGroupResponse>(await this.callApi(params, req, runtime), new RemoveServersFromServerGroupResponse({}));
  }

  async removeServersFromServerGroup(request: RemoveServersFromServerGroupRequest): Promise<RemoveServersFromServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeServersFromServerGroupWithOptions(request, runtime);
  }

  async startListenerWithOptions(request: StartListenerRequest, runtime: $Util.RuntimeOptions): Promise<StartListenerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartListenerResponse>(await this.callApi(params, req, runtime), new StartListenerResponse({}));
  }

  async startListener(request: StartListenerRequest): Promise<StartListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startListenerWithOptions(request, runtime);
  }

  /**
    * > If a Network Load Balancer (NLB) instance is deployed only in one zone, you cannot remove the NLB instance from the zone.
    *
    * @param request StartShiftLoadBalancerZonesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartShiftLoadBalancerZonesResponse
   */
  async startShiftLoadBalancerZonesWithOptions(request: StartShiftLoadBalancerZonesRequest, runtime: $Util.RuntimeOptions): Promise<StartShiftLoadBalancerZonesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneMappings)) {
      body["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartShiftLoadBalancerZones",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartShiftLoadBalancerZonesResponse>(await this.callApi(params, req, runtime), new StartShiftLoadBalancerZonesResponse({}));
  }

  /**
    * > If a Network Load Balancer (NLB) instance is deployed only in one zone, you cannot remove the NLB instance from the zone.
    *
    * @param request StartShiftLoadBalancerZonesRequest
    * @return StartShiftLoadBalancerZonesResponse
   */
  async startShiftLoadBalancerZones(request: StartShiftLoadBalancerZonesRequest): Promise<StartShiftLoadBalancerZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startShiftLoadBalancerZonesWithOptions(request, runtime);
  }

  async stopListenerWithOptions(request: StopListenerRequest, runtime: $Util.RuntimeOptions): Promise<StopListenerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopListenerResponse>(await this.callApi(params, req, runtime), new StopListenerResponse({}));
  }

  async stopListener(request: StopListenerRequest): Promise<StopListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopListenerWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2022-04-30",
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      body["All"] = request.all;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      bodyFlat["TagKey"] = request.tagKey;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2022-04-30",
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

  async updateListenerAttributeWithOptions(request: UpdateListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateListenerAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alpnEnabled)) {
      body["AlpnEnabled"] = request.alpnEnabled;
    }

    if (!Util.isUnset(request.alpnPolicy)) {
      body["AlpnPolicy"] = request.alpnPolicy;
    }

    if (!Util.isUnset(request.caCertificateIds)) {
      body["CaCertificateIds"] = request.caCertificateIds;
    }

    if (!Util.isUnset(request.caEnabled)) {
      body["CaEnabled"] = request.caEnabled;
    }

    if (!Util.isUnset(request.certificateIds)) {
      body["CertificateIds"] = request.certificateIds;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.cps)) {
      body["Cps"] = request.cps;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      body["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerDescription)) {
      body["ListenerDescription"] = request.listenerDescription;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.mss)) {
      body["Mss"] = request.mss;
    }

    if (!Util.isUnset(request.proxyProtocolEnabled)) {
      body["ProxyProtocolEnabled"] = request.proxyProtocolEnabled;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.secSensorEnabled)) {
      body["SecSensorEnabled"] = request.secSensorEnabled;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      body["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateListenerAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateListenerAttributeResponse>(await this.callApi(params, req, runtime), new UpdateListenerAttributeResponse({}));
  }

  async updateListenerAttribute(request: UpdateListenerAttributeRequest): Promise<UpdateListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateListenerAttributeWithOptions(request, runtime);
  }

  /**
    * *   Make sure that an NLB instance is created. For more information, see [CreateLoadBalancer](~~445868~~).
    * *   You can call the [GetLoadBalancerAttribute](~~445873~~) operation to query the **AddressType** value of an NLB instance after you change the network type.
    * *   **UpdateLoadBalancerAddressTypeConfig** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](~~445904~~) operation to query the task status:
    *     *   If the task is in the **Succeeded** state, the network type of the IPv4 address of the NLB instance is changed.
    *     *   If the task is in the **Processing** state, the network type of the IPv4 address of the NLB instance is being changed. In this case, you can perform only query operations.
    *
    * @param request UpdateLoadBalancerAddressTypeConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateLoadBalancerAddressTypeConfigResponse
   */
  async updateLoadBalancerAddressTypeConfigWithOptions(request: UpdateLoadBalancerAddressTypeConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerAddressTypeConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressType)) {
      body["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneMappings)) {
      body["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoadBalancerAddressTypeConfig",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLoadBalancerAddressTypeConfigResponse>(await this.callApi(params, req, runtime), new UpdateLoadBalancerAddressTypeConfigResponse({}));
  }

  /**
    * *   Make sure that an NLB instance is created. For more information, see [CreateLoadBalancer](~~445868~~).
    * *   You can call the [GetLoadBalancerAttribute](~~445873~~) operation to query the **AddressType** value of an NLB instance after you change the network type.
    * *   **UpdateLoadBalancerAddressTypeConfig** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](~~445904~~) operation to query the task status:
    *     *   If the task is in the **Succeeded** state, the network type of the IPv4 address of the NLB instance is changed.
    *     *   If the task is in the **Processing** state, the network type of the IPv4 address of the NLB instance is being changed. In this case, you can perform only query operations.
    *
    * @param request UpdateLoadBalancerAddressTypeConfigRequest
    * @return UpdateLoadBalancerAddressTypeConfigResponse
   */
  async updateLoadBalancerAddressTypeConfig(request: UpdateLoadBalancerAddressTypeConfigRequest): Promise<UpdateLoadBalancerAddressTypeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerAddressTypeConfigWithOptions(request, runtime);
  }

  async updateLoadBalancerAttributeWithOptions(request: UpdateLoadBalancerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.cps)) {
      body["Cps"] = request.cps;
    }

    if (!Util.isUnset(request.crossZoneEnabled)) {
      body["CrossZoneEnabled"] = request.crossZoneEnabled;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.loadBalancerName)) {
      body["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoadBalancerAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLoadBalancerAttributeResponse>(await this.callApi(params, req, runtime), new UpdateLoadBalancerAttributeResponse({}));
  }

  async updateLoadBalancerAttribute(request: UpdateLoadBalancerAttributeRequest): Promise<UpdateLoadBalancerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerAttributeWithOptions(request, runtime);
  }

  /**
    * > You can call the [GetLoadBalancerAttribute](~~445873~~) operation to query the details about deletion protection and the configuration read-only mode.
    *
    * @param request UpdateLoadBalancerProtectionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateLoadBalancerProtectionResponse
   */
  async updateLoadBalancerProtectionWithOptions(request: UpdateLoadBalancerProtectionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerProtectionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deletionProtectionEnabled)) {
      body["DeletionProtectionEnabled"] = request.deletionProtectionEnabled;
    }

    if (!Util.isUnset(request.deletionProtectionReason)) {
      body["DeletionProtectionReason"] = request.deletionProtectionReason;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.modificationProtectionReason)) {
      body["ModificationProtectionReason"] = request.modificationProtectionReason;
    }

    if (!Util.isUnset(request.modificationProtectionStatus)) {
      body["ModificationProtectionStatus"] = request.modificationProtectionStatus;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoadBalancerProtection",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLoadBalancerProtectionResponse>(await this.callApi(params, req, runtime), new UpdateLoadBalancerProtectionResponse({}));
  }

  /**
    * > You can call the [GetLoadBalancerAttribute](~~445873~~) operation to query the details about deletion protection and the configuration read-only mode.
    *
    * @param request UpdateLoadBalancerProtectionRequest
    * @return UpdateLoadBalancerProtectionResponse
   */
  async updateLoadBalancerProtection(request: UpdateLoadBalancerProtectionRequest): Promise<UpdateLoadBalancerProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerProtectionWithOptions(request, runtime);
  }

  /**
    * When you call this operation, make sure that you specify all the zones of the NLB instance, including the existing zones and new zones. If you do not specify the existing zones, the existing zones are removed.
    * Prerequisites
    * *   An NLB instance is created. For more information, see [CreateLoadBalancer](~~445868~~).
    * *   You can call the [GetLoadBalancerAttribute](~~445873~~) operation to query the zones and zone attributes of an NLB instance.
    * *   **UpdateLoadBalancerZones** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](~~445904~~) operation query to query the status of a task:
    *     *   If the task is in the **Succeeded** state, the zones and zone attributes are modified.
    *     *   If the task is in the **Processing** state, the zones and zone attributes are being modified. In this case, you can perform only query operations.
    *
    * @param request UpdateLoadBalancerZonesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateLoadBalancerZonesResponse
   */
  async updateLoadBalancerZonesWithOptions(request: UpdateLoadBalancerZonesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerZonesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneMappings)) {
      body["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoadBalancerZones",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLoadBalancerZonesResponse>(await this.callApi(params, req, runtime), new UpdateLoadBalancerZonesResponse({}));
  }

  /**
    * When you call this operation, make sure that you specify all the zones of the NLB instance, including the existing zones and new zones. If you do not specify the existing zones, the existing zones are removed.
    * Prerequisites
    * *   An NLB instance is created. For more information, see [CreateLoadBalancer](~~445868~~).
    * *   You can call the [GetLoadBalancerAttribute](~~445873~~) operation to query the zones and zone attributes of an NLB instance.
    * *   **UpdateLoadBalancerZones** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](~~445904~~) operation query to query the status of a task:
    *     *   If the task is in the **Succeeded** state, the zones and zone attributes are modified.
    *     *   If the task is in the **Processing** state, the zones and zone attributes are being modified. In this case, you can perform only query operations.
    *
    * @param request UpdateLoadBalancerZonesRequest
    * @return UpdateLoadBalancerZonesResponse
   */
  async updateLoadBalancerZones(request: UpdateLoadBalancerZonesRequest): Promise<UpdateLoadBalancerZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerZonesWithOptions(request, runtime);
  }

  async updateSecurityPolicyAttributeWithOptions(request: UpdateSecurityPolicyAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecurityPolicyAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ciphers)) {
      body["Ciphers"] = request.ciphers;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      body["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!Util.isUnset(request.securityPolicyName)) {
      body["SecurityPolicyName"] = request.securityPolicyName;
    }

    if (!Util.isUnset(request.tlsVersions)) {
      body["TlsVersions"] = request.tlsVersions;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSecurityPolicyAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSecurityPolicyAttributeResponse>(await this.callApi(params, req, runtime), new UpdateSecurityPolicyAttributeResponse({}));
  }

  async updateSecurityPolicyAttribute(request: UpdateSecurityPolicyAttributeRequest): Promise<UpdateSecurityPolicyAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecurityPolicyAttributeWithOptions(request, runtime);
  }

  async updateServerGroupAttributeWithOptions(request: UpdateServerGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServerGroupAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionDrainEnabled)) {
      body["ConnectionDrainEnabled"] = request.connectionDrainEnabled;
    }

    if (!Util.isUnset(request.connectionDrainTimeout)) {
      body["ConnectionDrainTimeout"] = request.connectionDrainTimeout;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.healthCheckConfig)) {
      bodyFlat["HealthCheckConfig"] = request.healthCheckConfig;
    }

    if (!Util.isUnset(request.preserveClientIpEnabled)) {
      body["PreserveClientIpEnabled"] = request.preserveClientIpEnabled;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scheduler)) {
      body["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.serverGroupName)) {
      body["ServerGroupName"] = request.serverGroupName;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServerGroupAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServerGroupAttributeResponse>(await this.callApi(params, req, runtime), new UpdateServerGroupAttributeResponse({}));
  }

  async updateServerGroupAttribute(request: UpdateServerGroupAttributeRequest): Promise<UpdateServerGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServerGroupAttributeWithOptions(request, runtime);
  }

  /**
    * **UpdateServerGroupServersAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
    * 1.  You can call the [ListServerGroups](~~445895~~) operation to query the status of a server group.
    *     *   If a server group is in the **Configuring** state, the server group is being modified.
    *     *   If a server group is in the **Available** state, the server group is running.
    * 2.  You can call the [ListServerGroupServers](~~445896~~) operation to query the status of a backend server.
    *     *   If a backend server is in the **Configuring** state, it indicates that the backend server is being modified.
    *     *   If a backend server is in the **Available** state, it indicates that the backend server is running.
    *
    * @param request UpdateServerGroupServersAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateServerGroupServersAttributeResponse
   */
  async updateServerGroupServersAttributeWithOptions(request: UpdateServerGroupServersAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServerGroupServersAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.servers)) {
      body["Servers"] = request.servers;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServerGroupServersAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServerGroupServersAttributeResponse>(await this.callApi(params, req, runtime), new UpdateServerGroupServersAttributeResponse({}));
  }

  /**
    * **UpdateServerGroupServersAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
    * 1.  You can call the [ListServerGroups](~~445895~~) operation to query the status of a server group.
    *     *   If a server group is in the **Configuring** state, the server group is being modified.
    *     *   If a server group is in the **Available** state, the server group is running.
    * 2.  You can call the [ListServerGroupServers](~~445896~~) operation to query the status of a backend server.
    *     *   If a backend server is in the **Configuring** state, it indicates that the backend server is being modified.
    *     *   If a backend server is in the **Available** state, it indicates that the backend server is running.
    *
    * @param request UpdateServerGroupServersAttributeRequest
    * @return UpdateServerGroupServersAttributeResponse
   */
  async updateServerGroupServersAttribute(request: UpdateServerGroupServersAttributeRequest): Promise<UpdateServerGroupServersAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServerGroupServersAttributeWithOptions(request, runtime);
  }

}
