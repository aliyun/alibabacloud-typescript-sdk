// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddEntriesToAclRequest extends $tea.Model {
  aclEntries?: AddEntriesToAclRequestAclEntries[];
  aclId?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      aclId: 'AclId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': AddEntriesToAclRequestAclEntries },
      aclId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEntriesToAclResponseBody extends $tea.Model {
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

export class AddEntriesToAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddEntriesToAclResponseBody;
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
      body: AddEntriesToAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServersToServerGroupRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  serverGroupId?: string;
  servers?: AddServersToServerGroupRequestServers[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      serverGroupId: 'ServerGroupId',
      servers: 'Servers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
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

export class ApplyHealthCheckTemplateToServerGroupRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  healthCheckTemplateId?: string;
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      healthCheckTemplateId: 'HealthCheckTemplateId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      healthCheckTemplateId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyHealthCheckTemplateToServerGroupResponseBody extends $tea.Model {
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

export class ApplyHealthCheckTemplateToServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyHealthCheckTemplateToServerGroupResponseBody;
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
      body: ApplyHealthCheckTemplateToServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAclsWithListenerRequest extends $tea.Model {
  aclIds?: string[];
  aclType?: string;
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      aclType: 'AclType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      aclType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAclsWithListenerResponseBody extends $tea.Model {
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

export class AssociateAclsWithListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateAclsWithListenerResponseBody;
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
      body: AssociateAclsWithListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerRequest extends $tea.Model {
  certificates?: AssociateAdditionalCertificatesWithListenerRequestCertificates[];
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': AssociateAdditionalCertificatesWithListenerRequestCertificates },
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
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
  zoneMappings?: CancelShiftLoadBalancerZonesRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
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

export class CreateAScriptsRequest extends $tea.Model {
  AScripts?: CreateAScriptsRequestAScripts[];
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      AScripts: 'AScripts',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScripts: { 'type': 'array', 'itemType': CreateAScriptsRequestAScripts },
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAScriptsResponseBody extends $tea.Model {
  AScriptIds?: CreateAScriptsResponseBodyAScriptIds[];
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AScriptIds: 'AScriptIds',
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptIds: { 'type': 'array', 'itemType': CreateAScriptsResponseBodyAScriptIds },
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAScriptsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAScriptsResponseBody;
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
      body: CreateAScriptsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclRequest extends $tea.Model {
  aclName?: string;
  clientToken?: string;
  dryRun?: boolean;
  resourceGroupId?: string;
  tag?: CreateAclRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aclName: 'AclName',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclName: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateAclRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclResponseBody extends $tea.Model {
  aclId?: string;
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAclResponseBody;
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
      body: CreateAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHealthCheckTemplateRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  healthCheckCodes?: string[];
  healthCheckConnectPort?: number;
  healthCheckHost?: string;
  healthCheckHttpVersion?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckPath?: string;
  healthCheckProtocol?: string;
  healthCheckTemplateName?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  tag?: CreateHealthCheckTemplateRequestTag[];
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckHost: 'HealthCheckHost',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTemplateName: 'HealthCheckTemplateName',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      tag: 'Tag',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckConnectPort: 'number',
      healthCheckHost: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTemplateName: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      tag: { 'type': 'array', 'itemType': CreateHealthCheckTemplateRequestTag },
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHealthCheckTemplateResponseBody extends $tea.Model {
  healthCheckTemplateId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckTemplateId: 'HealthCheckTemplateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTemplateId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHealthCheckTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateHealthCheckTemplateResponseBody;
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
      body: CreateHealthCheckTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequest extends $tea.Model {
  caCertificates?: CreateListenerRequestCaCertificates[];
  caEnabled?: boolean;
  certificates?: CreateListenerRequestCertificates[];
  clientToken?: string;
  defaultActions?: CreateListenerRequestDefaultActions[];
  dryRun?: boolean;
  gzipEnabled?: boolean;
  http2Enabled?: boolean;
  idleTimeout?: number;
  listenerDescription?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  quicConfig?: CreateListenerRequestQuicConfig;
  requestTimeout?: number;
  securityPolicyId?: string;
  tag?: CreateListenerRequestTag[];
  XForwardedForConfig?: CreateListenerRequestXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      caCertificates: 'CaCertificates',
      caEnabled: 'CaEnabled',
      certificates: 'Certificates',
      clientToken: 'ClientToken',
      defaultActions: 'DefaultActions',
      dryRun: 'DryRun',
      gzipEnabled: 'GzipEnabled',
      http2Enabled: 'Http2Enabled',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      quicConfig: 'QuicConfig',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      tag: 'Tag',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertificates: { 'type': 'array', 'itemType': CreateListenerRequestCaCertificates },
      caEnabled: 'boolean',
      certificates: { 'type': 'array', 'itemType': CreateListenerRequestCertificates },
      clientToken: 'string',
      defaultActions: { 'type': 'array', 'itemType': CreateListenerRequestDefaultActions },
      dryRun: 'boolean',
      gzipEnabled: 'boolean',
      http2Enabled: 'boolean',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      quicConfig: CreateListenerRequestQuicConfig,
      requestTimeout: 'number',
      securityPolicyId: 'string',
      tag: { 'type': 'array', 'itemType': CreateListenerRequestTag },
      XForwardedForConfig: CreateListenerRequestXForwardedForConfig,
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
  addressAllocatedMode?: string;
  addressIpVersion?: string;
  addressType?: string;
  clientToken?: string;
  deletionProtectionEnabled?: boolean;
  dryRun?: boolean;
  loadBalancerBillingConfig?: CreateLoadBalancerRequestLoadBalancerBillingConfig;
  loadBalancerEdition?: string;
  loadBalancerName?: string;
  modificationProtectionConfig?: CreateLoadBalancerRequestModificationProtectionConfig;
  resourceGroupId?: string;
  tag?: CreateLoadBalancerRequestTag[];
  vpcId?: string;
  zoneMappings?: CreateLoadBalancerRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressAllocatedMode: 'AddressAllocatedMode',
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      clientToken: 'ClientToken',
      deletionProtectionEnabled: 'DeletionProtectionEnabled',
      dryRun: 'DryRun',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerEdition: 'LoadBalancerEdition',
      loadBalancerName: 'LoadBalancerName',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressAllocatedMode: 'string',
      addressIpVersion: 'string',
      addressType: 'string',
      clientToken: 'string',
      deletionProtectionEnabled: 'boolean',
      dryRun: 'boolean',
      loadBalancerBillingConfig: CreateLoadBalancerRequestLoadBalancerBillingConfig,
      loadBalancerEdition: 'string',
      loadBalancerName: 'string',
      modificationProtectionConfig: CreateLoadBalancerRequestModificationProtectionConfig,
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
  loadBalancerId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
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

export class CreateRuleRequest extends $tea.Model {
  clientToken?: string;
  direction?: string;
  dryRun?: boolean;
  listenerId?: string;
  priority?: number;
  ruleActions?: CreateRuleRequestRuleActions[];
  ruleConditions?: CreateRuleRequestRuleConditions[];
  ruleName?: string;
  tag?: CreateRuleRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      direction: 'Direction',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleName: 'RuleName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      direction: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': CreateRuleRequestRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': CreateRuleRequestRuleConditions },
      ruleName: 'string',
      tag: { 'type': 'array', 'itemType': CreateRuleRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRuleResponseBody;
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
      body: CreateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  rules?: CreateRulesRequestRules[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      rules: { 'type': 'array', 'itemType': CreateRulesRequestRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  ruleIds?: CreateRulesResponseBodyRuleIds[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      ruleIds: { 'type': 'array', 'itemType': CreateRulesResponseBodyRuleIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRulesResponseBody;
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
      body: CreateRulesResponseBody,
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
  resourceGroupId?: string;
  securityPolicyName?: string;
  TLSVersions?: string[];
  tag?: CreateSecurityPolicyRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyName: 'SecurityPolicyName',
      TLSVersions: 'TLSVersions',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      resourceGroupId: 'string',
      securityPolicyName: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateSecurityPolicyRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityPolicyResponseBody extends $tea.Model {
  requestId?: string;
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  clientToken?: string;
  dryRun?: boolean;
  healthCheckConfig?: CreateServerGroupRequestHealthCheckConfig;
  protocol?: string;
  resourceGroupId?: string;
  scheduler?: string;
  serverGroupName?: string;
  serverGroupType?: string;
  serviceName?: string;
  stickySessionConfig?: CreateServerGroupRequestStickySessionConfig;
  tag?: CreateServerGroupRequestTag[];
  uchConfig?: CreateServerGroupRequestUchConfig;
  upstreamKeepaliveEnabled?: boolean;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
      protocol: 'Protocol',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverGroupName: 'ServerGroupName',
      serverGroupType: 'ServerGroupType',
      serviceName: 'ServiceName',
      stickySessionConfig: 'StickySessionConfig',
      tag: 'Tag',
      uchConfig: 'UchConfig',
      upstreamKeepaliveEnabled: 'UpstreamKeepaliveEnabled',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      healthCheckConfig: CreateServerGroupRequestHealthCheckConfig,
      protocol: 'string',
      resourceGroupId: 'string',
      scheduler: 'string',
      serverGroupName: 'string',
      serverGroupType: 'string',
      serviceName: 'string',
      stickySessionConfig: CreateServerGroupRequestStickySessionConfig,
      tag: { 'type': 'array', 'itemType': CreateServerGroupRequestTag },
      uchConfig: CreateServerGroupRequestUchConfig,
      upstreamKeepaliveEnabled: 'boolean',
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

export class DeleteAScriptsRequest extends $tea.Model {
  AScriptIds?: string[];
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      AScriptIds: 'AScriptIds',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAScriptsResponseBody extends $tea.Model {
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

export class DeleteAScriptsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAScriptsResponseBody;
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
      body: DeleteAScriptsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclRequest extends $tea.Model {
  aclId?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclResponseBody extends $tea.Model {
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

export class DeleteAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAclResponseBody;
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
      body: DeleteAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHealthCheckTemplatesRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  healthCheckTemplateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      healthCheckTemplateIds: 'HealthCheckTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      healthCheckTemplateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHealthCheckTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHealthCheckTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteHealthCheckTemplatesResponseBody;
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
      body: DeleteHealthCheckTemplatesResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
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

export class DeleteRuleRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBody extends $tea.Model {
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

export class DeleteRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRuleResponseBody;
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
      body: DeleteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRulesRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ruleIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRulesResponseBody extends $tea.Model {
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

export class DeleteRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRulesResponseBody;
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
      body: DeleteRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityPolicyRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
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
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
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
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
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
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
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

export class DisableDeletionProtectionRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDeletionProtectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDeletionProtectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableDeletionProtectionResponseBody;
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
      body: DisableDeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLoadBalancerAccessLogRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLoadBalancerAccessLogResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLoadBalancerAccessLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableLoadBalancerAccessLogResponseBody;
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
      body: DisableLoadBalancerAccessLogResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLoadBalancerIpv6InternetResponseBody extends $tea.Model {
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

export class DissociateAclsFromListenerRequest extends $tea.Model {
  aclIds?: string[];
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAclsFromListenerResponseBody extends $tea.Model {
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

export class DissociateAclsFromListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DissociateAclsFromListenerResponseBody;
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
      body: DissociateAclsFromListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAdditionalCertificatesFromListenerRequest extends $tea.Model {
  certificates?: DissociateAdditionalCertificatesFromListenerRequestCertificates[];
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': DissociateAdditionalCertificatesFromListenerRequestCertificates },
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAdditionalCertificatesFromListenerResponseBody extends $tea.Model {
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

export class DissociateAdditionalCertificatesFromListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DissociateAdditionalCertificatesFromListenerResponseBody;
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
      body: DissociateAdditionalCertificatesFromListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDeletionProtectionRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDeletionProtectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDeletionProtectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableDeletionProtectionResponseBody;
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
      body: EnableDeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLoadBalancerAccessLogRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerId?: string;
  logProject?: string;
  logStore?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      logProject: 'LogProject',
      logStore: 'LogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      logProject: 'string',
      logStore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLoadBalancerAccessLogResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLoadBalancerAccessLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableLoadBalancerAccessLogResponseBody;
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
      body: EnableLoadBalancerAccessLogResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLoadBalancerIpv6InternetResponseBody extends $tea.Model {
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

export class GetHealthCheckTemplateAttributeRequest extends $tea.Model {
  healthCheckTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckTemplateId: 'HealthCheckTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthCheckTemplateAttributeResponseBody extends $tea.Model {
  healthCheckCodes?: string[];
  healthCheckConnectPort?: number;
  healthCheckHost?: string;
  healthCheckHttpVersion?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckPath?: string;
  healthCheckProtocol?: string;
  healthCheckTemplateId?: string;
  healthCheckTemplateName?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  requestId?: string;
  tags?: GetHealthCheckTemplateAttributeResponseBodyTags[];
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckHost: 'HealthCheckHost',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTemplateId: 'HealthCheckTemplateId',
      healthCheckTemplateName: 'HealthCheckTemplateName',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      requestId: 'RequestId',
      tags: 'Tags',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckConnectPort: 'number',
      healthCheckHost: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTemplateId: 'string',
      healthCheckTemplateName: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': GetHealthCheckTemplateAttributeResponseBodyTags },
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthCheckTemplateAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHealthCheckTemplateAttributeResponseBody;
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
      body: GetHealthCheckTemplateAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeRequest extends $tea.Model {
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBody extends $tea.Model {
  aclConfig?: GetListenerAttributeResponseBodyAclConfig;
  caCertificates?: GetListenerAttributeResponseBodyCaCertificates[];
  caEnabled?: boolean;
  certificates?: GetListenerAttributeResponseBodyCertificates[];
  defaultActions?: GetListenerAttributeResponseBodyDefaultActions[];
  gzipEnabled?: boolean;
  http2Enabled?: boolean;
  idleTimeout?: number;
  listenerDescription?: string;
  listenerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  listenerStatus?: string;
  loadBalancerId?: string;
  logConfig?: GetListenerAttributeResponseBodyLogConfig;
  quicConfig?: GetListenerAttributeResponseBodyQuicConfig;
  requestId?: string;
  requestTimeout?: number;
  securityPolicyId?: string;
  tags?: GetListenerAttributeResponseBodyTags[];
  XForwardedForConfig?: GetListenerAttributeResponseBodyXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      aclConfig: 'AclConfig',
      caCertificates: 'CaCertificates',
      caEnabled: 'CaEnabled',
      certificates: 'Certificates',
      defaultActions: 'DefaultActions',
      gzipEnabled: 'GzipEnabled',
      http2Enabled: 'Http2Enabled',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      logConfig: 'LogConfig',
      quicConfig: 'QuicConfig',
      requestId: 'RequestId',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      tags: 'Tags',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclConfig: GetListenerAttributeResponseBodyAclConfig,
      caCertificates: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyCaCertificates },
      caEnabled: 'boolean',
      certificates: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyCertificates },
      defaultActions: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyDefaultActions },
      gzipEnabled: 'boolean',
      http2Enabled: 'boolean',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      logConfig: GetListenerAttributeResponseBodyLogConfig,
      quicConfig: GetListenerAttributeResponseBodyQuicConfig,
      requestId: 'string',
      requestTimeout: 'number',
      securityPolicyId: 'string',
      tags: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyTags },
      XForwardedForConfig: GetListenerAttributeResponseBodyXForwardedForConfig,
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
  includeRule?: boolean;
  listenerId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      includeRule: 'IncludeRule',
      listenerId: 'ListenerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeRule: 'boolean',
      listenerId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBody extends $tea.Model {
  listenerHealthStatus?: GetListenerHealthStatusResponseBodyListenerHealthStatus[];
  nextToken?: string;
  requestId?: string;
  ruleHealthStatus?: GetListenerHealthStatusResponseBodyRuleHealthStatus[];
  static names(): { [key: string]: string } {
    return {
      listenerHealthStatus: 'ListenerHealthStatus',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      ruleHealthStatus: 'RuleHealthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerHealthStatus: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatus },
      nextToken: 'string',
      requestId: 'string',
      ruleHealthStatus: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyRuleHealthStatus },
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
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBody extends $tea.Model {
  accessLogConfig?: GetLoadBalancerAttributeResponseBodyAccessLogConfig;
  addressAllocatedMode?: string;
  addressIpVersion?: string;
  addressType?: string;
  bandwidthPackageId?: string;
  createTime?: string;
  DNSName?: string;
  deletionProtectionConfig?: GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig;
  ipv6AddressType?: string;
  loadBalancerBillingConfig?: GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig;
  loadBalancerBussinessStatus?: string;
  loadBalancerEdition?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerOperationLocks?: GetLoadBalancerAttributeResponseBodyLoadBalancerOperationLocks[];
  loadBalancerStatus?: string;
  modificationProtectionConfig?: GetLoadBalancerAttributeResponseBodyModificationProtectionConfig;
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  tags?: GetLoadBalancerAttributeResponseBodyTags[];
  vpcId?: string;
  zoneMappings?: GetLoadBalancerAttributeResponseBodyZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      accessLogConfig: 'AccessLogConfig',
      addressAllocatedMode: 'AddressAllocatedMode',
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
      createTime: 'CreateTime',
      DNSName: 'DNSName',
      deletionProtectionConfig: 'DeletionProtectionConfig',
      ipv6AddressType: 'Ipv6AddressType',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerBussinessStatus: 'LoadBalancerBussinessStatus',
      loadBalancerEdition: 'LoadBalancerEdition',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerOperationLocks: 'LoadBalancerOperationLocks',
      loadBalancerStatus: 'LoadBalancerStatus',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogConfig: GetLoadBalancerAttributeResponseBodyAccessLogConfig,
      addressAllocatedMode: 'string',
      addressIpVersion: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      createTime: 'string',
      DNSName: 'string',
      deletionProtectionConfig: GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig,
      ipv6AddressType: 'string',
      loadBalancerBillingConfig: GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig,
      loadBalancerBussinessStatus: 'string',
      loadBalancerEdition: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerOperationLocks: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyLoadBalancerOperationLocks },
      loadBalancerStatus: 'string',
      modificationProtectionConfig: GetLoadBalancerAttributeResponseBodyModificationProtectionConfig,
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
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

export class ListAScriptsRequest extends $tea.Model {
  AScriptIds?: string[];
  AScriptNames?: string[];
  listenerIds?: string[];
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      AScriptIds: 'AScriptIds',
      AScriptNames: 'AScriptNames',
      listenerIds: 'ListenerIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptIds: { 'type': 'array', 'itemType': 'string' },
      AScriptNames: { 'type': 'array', 'itemType': 'string' },
      listenerIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAScriptsResponseBody extends $tea.Model {
  AScripts?: ListAScriptsResponseBodyAScripts[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      AScripts: 'AScripts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScripts: { 'type': 'array', 'itemType': ListAScriptsResponseBodyAScripts },
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

export class ListAScriptsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAScriptsResponseBody;
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
      body: ListAScriptsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclEntriesRequest extends $tea.Model {
  aclId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclEntriesResponseBody extends $tea.Model {
  aclEntries?: ListAclEntriesResponseBodyAclEntries[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': ListAclEntriesResponseBodyAclEntries },
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

export class ListAclEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAclEntriesResponseBody;
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
      body: ListAclEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclRelationsRequest extends $tea.Model {
  aclIds?: string[];
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclRelationsResponseBody extends $tea.Model {
  aclRelations?: ListAclRelationsResponseBodyAclRelations[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclRelations: 'AclRelations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRelations: { 'type': 'array', 'itemType': ListAclRelationsResponseBodyAclRelations },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAclRelationsResponseBody;
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
      body: ListAclRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsRequest extends $tea.Model {
  aclIds?: string[];
  aclNames?: string[];
  maxResults?: number;
  nextToken?: string;
  resourceGroupId?: string;
  tag?: ListAclsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      aclNames: 'AclNames',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      aclNames: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListAclsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsResponseBody extends $tea.Model {
  acls?: ListAclsResponseBodyAcls[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: { 'type': 'array', 'itemType': ListAclsResponseBodyAcls },
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

export class ListAclsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAclsResponseBody;
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
      body: ListAclsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsynJobsRequest extends $tea.Model {
  apiName?: string;
  beginTime?: number;
  endTime?: number;
  jobIds?: string[];
  maxResults?: number;
  nextToken?: string;
  resourceIds?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      jobIds: 'JobIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      beginTime: 'number',
      endTime: 'number',
      jobIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsynJobsResponseBody extends $tea.Model {
  jobs?: ListAsynJobsResponseBodyJobs[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListAsynJobsResponseBodyJobs },
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

export class ListAsynJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAsynJobsResponseBody;
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
      body: ListAsynJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHealthCheckTemplatesRequest extends $tea.Model {
  healthCheckTemplateIds?: string[];
  healthCheckTemplateNames?: string[];
  maxResults?: number;
  nextToken?: string;
  tag?: ListHealthCheckTemplatesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      healthCheckTemplateIds: 'HealthCheckTemplateIds',
      healthCheckTemplateNames: 'HealthCheckTemplateNames',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTemplateIds: { 'type': 'array', 'itemType': 'string' },
      healthCheckTemplateNames: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      tag: { 'type': 'array', 'itemType': ListHealthCheckTemplatesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHealthCheckTemplatesResponseBody extends $tea.Model {
  healthCheckTemplates?: ListHealthCheckTemplatesResponseBodyHealthCheckTemplates[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckTemplates: 'HealthCheckTemplates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTemplates: { 'type': 'array', 'itemType': ListHealthCheckTemplatesResponseBodyHealthCheckTemplates },
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

export class ListHealthCheckTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListHealthCheckTemplatesResponseBody;
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
      body: ListHealthCheckTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesRequest extends $tea.Model {
  certificateType?: string;
  listenerId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      certificateType: 'CertificateType',
      listenerId: 'ListenerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateType: 'string',
      listenerId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponseBody extends $tea.Model {
  certificates?: ListListenerCertificatesResponseBodyCertificates[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  tag?: ListListenersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      listenerIds: 'ListenerIds',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerIds: 'LoadBalancerIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
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
  loadBalancerBussinessStatus?: string;
  loadBalancerIds?: string[];
  loadBalancerNames?: string[];
  loadBalancerStatus?: string;
  maxResults?: number;
  nextToken?: string;
  payType?: string;
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
      loadBalancerBussinessStatus: 'LoadBalancerBussinessStatus',
      loadBalancerIds: 'LoadBalancerIds',
      loadBalancerNames: 'LoadBalancerNames',
      loadBalancerStatus: 'LoadBalancerStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      payType: 'PayType',
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
      loadBalancerBussinessStatus: 'string',
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      loadBalancerNames: { 'type': 'array', 'itemType': 'string' },
      loadBalancerStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      payType: 'string',
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

export class ListRulesRequest extends $tea.Model {
  direction?: string;
  listenerIds?: string[];
  loadBalancerIds?: string[];
  maxResults?: number;
  nextToken?: string;
  ruleIds?: string[];
  tag?: ListRulesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      listenerIds: 'ListenerIds',
      loadBalancerIds: 'LoadBalancerIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ruleIds: 'RuleIds',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      listenerIds: { 'type': 'array', 'itemType': 'string' },
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListRulesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  rules?: ListRulesResponseBodyRules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListRulesResponseBodyRules },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRulesResponseBody;
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
      body: ListRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPoliciesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  resourceGroupId?: string;
  securityPolicyIds?: string[];
  securityPolicyNames?: string[];
  tag?: ListSecurityPoliciesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
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
      resourceGroupId: 'string',
      securityPolicyIds: { 'type': 'array', 'itemType': 'string' },
      securityPolicyNames: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListSecurityPoliciesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPoliciesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  securityPolicies?: ListSecurityPoliciesResponseBodySecurityPolicies[];
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
      securityPolicies: { 'type': 'array', 'itemType': ListSecurityPoliciesResponseBodySecurityPolicies },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSecurityPoliciesResponseBody;
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
      body: ListSecurityPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRelationsRequest extends $tea.Model {
  securityPolicyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      securityPolicyIds: 'SecurityPolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityPolicyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRelationsResponseBody extends $tea.Model {
  requestId?: string;
  secrityPolicyRelations?: ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secrityPolicyRelations: 'SecrityPolicyRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secrityPolicyRelations: { 'type': 'array', 'itemType': ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSecurityPolicyRelationsResponseBody;
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
      body: ListSecurityPolicyRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  serverGroupId?: string;
  serverIds?: string[];
  tag?: ListServerGroupServersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      serverGroupId: 'ServerGroupId',
      serverIds: 'ServerIds',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      serverGroupId: 'string',
      serverIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListServerGroupServersRequestTag },
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

export class ListSystemSecurityPoliciesResponseBody extends $tea.Model {
  requestId?: string;
  securityPolicies?: ListSystemSecurityPoliciesResponseBodySecurityPolicies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPolicies: 'SecurityPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPolicies: { 'type': 'array', 'itemType': ListSystemSecurityPoliciesResponseBodySecurityPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSystemSecurityPoliciesResponseBody;
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
      body: ListSystemSecurityPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  category?: string;
  keyword?: string;
  maxResults?: number;
  nextToken?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  tagKeys?: ListTagKeysResponseBodyTagKeys[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyTagKeys },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagKeysResponseBody;
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
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
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
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
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

export class ListTagValuesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  tagValues?: string[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagValues: 'TagValues',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagValuesResponseBody;
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
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  newResourceGroupId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      resourceId: 'string',
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

export class RemoveEntriesFromAclRequest extends $tea.Model {
  aclId?: string;
  clientToken?: string;
  dryRun?: boolean;
  entries?: string[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      entries: 'Entries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      entries: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntriesFromAclResponseBody extends $tea.Model {
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

export class RemoveEntriesFromAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveEntriesFromAclResponseBody;
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
      body: RemoveEntriesFromAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServersFromServerGroupRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  serverGroupId?: string;
  servers?: RemoveServersFromServerGroupRequestServers[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      serverGroupId: 'ServerGroupId',
      servers: 'Servers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
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

export class ReplaceServersInServerGroupRequest extends $tea.Model {
  addedServers?: ReplaceServersInServerGroupRequestAddedServers[];
  clientToken?: string;
  dryRun?: boolean;
  removedServers?: ReplaceServersInServerGroupRequestRemovedServers[];
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      addedServers: 'AddedServers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      removedServers: 'RemovedServers',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedServers: { 'type': 'array', 'itemType': ReplaceServersInServerGroupRequestAddedServers },
      clientToken: 'string',
      dryRun: 'boolean',
      removedServers: { 'type': 'array', 'itemType': ReplaceServersInServerGroupRequestRemovedServers },
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceServersInServerGroupResponseBody extends $tea.Model {
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

export class ReplaceServersInServerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReplaceServersInServerGroupResponseBody;
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
      body: ReplaceServersInServerGroupResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
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
  zoneMappings?: StartShiftLoadBalancerZonesRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
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
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

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

export class UnTagResourcesRequest extends $tea.Model {
  all?: boolean;
  resourceId?: string[];
  resourceType?: string;
  tag?: UnTagResourcesRequestTag[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': UnTagResourcesRequestTag },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnTagResourcesResponseBody;
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
      body: UnTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAScriptsRequest extends $tea.Model {
  AScripts?: UpdateAScriptsRequestAScripts[];
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      AScripts: 'AScripts',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScripts: { 'type': 'array', 'itemType': UpdateAScriptsRequestAScripts },
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAScriptsResponseBody extends $tea.Model {
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

export class UpdateAScriptsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAScriptsResponseBody;
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
      body: UpdateAScriptsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclAttributeRequest extends $tea.Model {
  aclId?: string;
  aclName?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAclAttributeResponseBody;
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
      body: UpdateAclAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHealthCheckTemplateAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  healthCheckCodes?: string[];
  healthCheckConnectPort?: number;
  healthCheckHost?: string;
  healthCheckHttpVersion?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckPath?: string;
  healthCheckProtocol?: string;
  healthCheckTemplateId?: string;
  healthCheckTemplateName?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckHost: 'HealthCheckHost',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTemplateId: 'HealthCheckTemplateId',
      healthCheckTemplateName: 'HealthCheckTemplateName',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckConnectPort: 'number',
      healthCheckHost: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTemplateId: 'string',
      healthCheckTemplateName: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHealthCheckTemplateAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHealthCheckTemplateAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateHealthCheckTemplateAttributeResponseBody;
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
      body: UpdateHealthCheckTemplateAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequest extends $tea.Model {
  caCertificates?: UpdateListenerAttributeRequestCaCertificates[];
  caEnabled?: boolean;
  certificates?: UpdateListenerAttributeRequestCertificates[];
  clientToken?: string;
  defaultActions?: UpdateListenerAttributeRequestDefaultActions[];
  dryRun?: boolean;
  gzipEnabled?: boolean;
  http2Enabled?: boolean;
  idleTimeout?: number;
  listenerDescription?: string;
  listenerId?: string;
  quicConfig?: UpdateListenerAttributeRequestQuicConfig;
  requestTimeout?: number;
  securityPolicyId?: string;
  XForwardedForConfig?: UpdateListenerAttributeRequestXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      caCertificates: 'CaCertificates',
      caEnabled: 'CaEnabled',
      certificates: 'Certificates',
      clientToken: 'ClientToken',
      defaultActions: 'DefaultActions',
      dryRun: 'DryRun',
      gzipEnabled: 'GzipEnabled',
      http2Enabled: 'Http2Enabled',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      quicConfig: 'QuicConfig',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertificates: { 'type': 'array', 'itemType': UpdateListenerAttributeRequestCaCertificates },
      caEnabled: 'boolean',
      certificates: { 'type': 'array', 'itemType': UpdateListenerAttributeRequestCertificates },
      clientToken: 'string',
      defaultActions: { 'type': 'array', 'itemType': UpdateListenerAttributeRequestDefaultActions },
      dryRun: 'boolean',
      gzipEnabled: 'boolean',
      http2Enabled: 'boolean',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      quicConfig: UpdateListenerAttributeRequestQuicConfig,
      requestTimeout: 'number',
      securityPolicyId: 'string',
      XForwardedForConfig: UpdateListenerAttributeRequestXForwardedForConfig,
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

export class UpdateListenerLogConfigRequest extends $tea.Model {
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  accessLogTracingConfig?: UpdateListenerLogConfigRequestAccessLogTracingConfig;
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      accessLogTracingConfig: 'AccessLogTracingConfig',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      accessLogTracingConfig: UpdateListenerLogConfigRequestAccessLogTracingConfig,
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerLogConfigResponseBody extends $tea.Model {
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

export class UpdateListenerLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateListenerLogConfigResponseBody;
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
      body: UpdateListenerLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAddressTypeConfigRequest extends $tea.Model {
  addressType?: string;
  clientToken?: string;
  dryRun?: string;
  loadBalancerId?: string;
  zoneMappings?: UpdateLoadBalancerAddressTypeConfigRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      clientToken: 'string',
      dryRun: 'string',
      loadBalancerId: 'string',
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
  dryRun?: boolean;
  loadBalancerId?: string;
  loadBalancerName?: string;
  modificationProtectionConfig?: UpdateLoadBalancerAttributeRequestModificationProtectionConfig;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      modificationProtectionConfig: 'ModificationProtectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      modificationProtectionConfig: UpdateLoadBalancerAttributeRequestModificationProtectionConfig,
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

export class UpdateLoadBalancerEditionRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  loadBalancerEdition?: string;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerEdition: 'LoadBalancerEdition',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerEdition: 'string',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerEditionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerEditionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLoadBalancerEditionResponseBody;
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
      body: UpdateLoadBalancerEditionResponseBody,
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
  zoneMappings?: UpdateLoadBalancerZonesRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
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

export class UpdateRuleAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  priority?: number;
  ruleActions?: UpdateRuleAttributeRequestRuleActions[];
  ruleConditions?: UpdateRuleAttributeRequestRuleConditions[];
  ruleId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleConditions },
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeResponseBody extends $tea.Model {
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

export class UpdateRuleAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateRuleAttributeResponseBody;
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
      body: UpdateRuleAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  rules?: UpdateRulesAttributeRequestRules[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      rules: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeResponseBody extends $tea.Model {
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

export class UpdateRulesAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateRulesAttributeResponseBody;
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
      body: UpdateRulesAttributeResponseBody,
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
  securityPolicyId?: string;
  securityPolicyName?: string;
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      securityPolicyId: 'SecurityPolicyId',
      securityPolicyName: 'SecurityPolicyName',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      securityPolicyId: 'string',
      securityPolicyName: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityPolicyAttributeResponseBody extends $tea.Model {
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
  dryRun?: boolean;
  healthCheckConfig?: UpdateServerGroupAttributeRequestHealthCheckConfig;
  scheduler?: string;
  serverGroupId?: string;
  serverGroupName?: string;
  serviceName?: string;
  stickySessionConfig?: UpdateServerGroupAttributeRequestStickySessionConfig;
  uchConfig?: UpdateServerGroupAttributeRequestUchConfig;
  upstreamKeepaliveEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
      scheduler: 'Scheduler',
      serverGroupId: 'ServerGroupId',
      serverGroupName: 'ServerGroupName',
      serviceName: 'ServiceName',
      stickySessionConfig: 'StickySessionConfig',
      uchConfig: 'UchConfig',
      upstreamKeepaliveEnabled: 'UpstreamKeepaliveEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      healthCheckConfig: UpdateServerGroupAttributeRequestHealthCheckConfig,
      scheduler: 'string',
      serverGroupId: 'string',
      serverGroupName: 'string',
      serviceName: 'string',
      stickySessionConfig: UpdateServerGroupAttributeRequestStickySessionConfig,
      uchConfig: UpdateServerGroupAttributeRequestUchConfig,
      upstreamKeepaliveEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeResponseBody extends $tea.Model {
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
  serverGroupId?: string;
  servers?: UpdateServerGroupServersAttributeRequestServers[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      serverGroupId: 'ServerGroupId',
      servers: 'Servers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
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

export class AddEntriesToAclRequestAclEntries extends $tea.Model {
  description?: string;
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServersToServerGroupRequestServers extends $tea.Model {
  description?: string;
  port?: number;
  remoteIpEnabled?: boolean;
  serverId?: string;
  serverIp?: string;
  serverType?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      remoteIpEnabled: 'RemoteIpEnabled',
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
      remoteIpEnabled: 'boolean',
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

export class AssociateAdditionalCertificatesWithListenerRequestCertificates extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
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

export class CreateAScriptsRequestAScripts extends $tea.Model {
  AScriptName?: string;
  enabled?: boolean;
  scriptContent?: string;
  static names(): { [key: string]: string } {
    return {
      AScriptName: 'AScriptName',
      enabled: 'Enabled',
      scriptContent: 'ScriptContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptName: 'string',
      enabled: 'boolean',
      scriptContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAScriptsResponseBodyAScriptIds extends $tea.Model {
  AScriptId?: string;
  static names(): { [key: string]: string } {
    return {
      AScriptId: 'AScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclRequestTag extends $tea.Model {
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

export class CreateHealthCheckTemplateRequestTag extends $tea.Model {
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

export class CreateListenerRequestCaCertificates extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestCertificates extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestDefaultActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestDefaultActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: CreateListenerRequestDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': CreateListenerRequestDefaultActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestDefaultActions extends $tea.Model {
  forwardGroupConfig?: CreateListenerRequestDefaultActionsForwardGroupConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: CreateListenerRequestDefaultActionsForwardGroupConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestQuicConfig extends $tea.Model {
  quicListenerId?: string;
  quicUpgradeEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      quicListenerId: 'QuicListenerId',
      quicUpgradeEnabled: 'QuicUpgradeEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quicListenerId: 'string',
      quicUpgradeEnabled: 'boolean',
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

export class CreateListenerRequestXForwardedForConfig extends $tea.Model {
  XForwardedForClientCertClientVerifyAlias?: string;
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  XForwardedForClientCertFingerprintAlias?: string;
  XForwardedForClientCertFingerprintEnabled?: boolean;
  XForwardedForClientCertIssuerDNAlias?: string;
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  XForwardedForClientCertSubjectDNAlias?: string;
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  XForwardedForClientSourceIpsEnabled?: boolean;
  XForwardedForClientSourceIpsTrusted?: string;
  XForwardedForClientSrcPortEnabled?: boolean;
  XForwardedForEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XForwardedForSLBIdEnabled?: boolean;
  XForwardedForSLBPortEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'XForwardedForClientCertClientVerifyAlias',
      XForwardedForClientCertClientVerifyEnabled: 'XForwardedForClientCertClientVerifyEnabled',
      XForwardedForClientCertFingerprintAlias: 'XForwardedForClientCertFingerprintAlias',
      XForwardedForClientCertFingerprintEnabled: 'XForwardedForClientCertFingerprintEnabled',
      XForwardedForClientCertIssuerDNAlias: 'XForwardedForClientCertIssuerDNAlias',
      XForwardedForClientCertIssuerDNEnabled: 'XForwardedForClientCertIssuerDNEnabled',
      XForwardedForClientCertSubjectDNAlias: 'XForwardedForClientCertSubjectDNAlias',
      XForwardedForClientCertSubjectDNEnabled: 'XForwardedForClientCertSubjectDNEnabled',
      XForwardedForClientSourceIpsEnabled: 'XForwardedForClientSourceIpsEnabled',
      XForwardedForClientSourceIpsTrusted: 'XForwardedForClientSourceIpsTrusted',
      XForwardedForClientSrcPortEnabled: 'XForwardedForClientSrcPortEnabled',
      XForwardedForEnabled: 'XForwardedForEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForSLBIdEnabled: 'XForwardedForSLBIdEnabled',
      XForwardedForSLBPortEnabled: 'XForwardedForSLBPortEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'string',
      XForwardedForClientCertClientVerifyEnabled: 'boolean',
      XForwardedForClientCertFingerprintAlias: 'string',
      XForwardedForClientCertFingerprintEnabled: 'boolean',
      XForwardedForClientCertIssuerDNAlias: 'string',
      XForwardedForClientCertIssuerDNEnabled: 'boolean',
      XForwardedForClientCertSubjectDNAlias: 'string',
      XForwardedForClientCertSubjectDNEnabled: 'boolean',
      XForwardedForClientSourceIpsEnabled: 'boolean',
      XForwardedForClientSourceIpsTrusted: 'string',
      XForwardedForClientSrcPortEnabled: 'boolean',
      XForwardedForEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForSLBIdEnabled: 'boolean',
      XForwardedForSLBPortEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestLoadBalancerBillingConfig extends $tea.Model {
  bandwidthPackageId?: string;
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
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
  intranetAddress?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      intranetAddress: 'IntranetAddress',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      intranetAddress: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsCorsConfig extends $tea.Model {
  allowCredentials?: string;
  allowHeaders?: string[];
  allowMethods?: string[];
  allowOrigin?: string[];
  exposeHeaders?: string[];
  maxAge?: number;
  static names(): { [key: string]: string } {
    return {
      allowCredentials: 'AllowCredentials',
      allowHeaders: 'AllowHeaders',
      allowMethods: 'AllowMethods',
      allowOrigin: 'AllowOrigin',
      exposeHeaders: 'ExposeHeaders',
      maxAge: 'MaxAge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCredentials: 'string',
      allowHeaders: { 'type': 'array', 'itemType': 'string' },
      allowMethods: { 'type': 'array', 'itemType': 'string' },
      allowOrigin: { 'type': 'array', 'itemType': 'string' },
      exposeHeaders: { 'type': 'array', 'itemType': 'string' },
      maxAge: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsFixedResponseConfig extends $tea.Model {
  content?: string;
  contentType?: string;
  httpCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      httpCode: 'HttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      httpCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsForwardGroupConfigServerGroupStickySession extends $tea.Model {
  enabled?: boolean;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsForwardGroupConfig extends $tea.Model {
  serverGroupStickySession?: CreateRuleRequestRuleActionsForwardGroupConfigServerGroupStickySession;
  serverGroupTuples?: CreateRuleRequestRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: CreateRuleRequestRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': CreateRuleRequestRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsInsertHeaderConfig extends $tea.Model {
  key?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsRedirectConfig extends $tea.Model {
  host?: string;
  httpCode?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpCode: 'HttpCode',
      path: 'Path',
      port: 'Port',
      protocol: 'Protocol',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpCode: 'string',
      path: 'string',
      port: 'string',
      protocol: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsRemoveHeaderConfig extends $tea.Model {
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsRewriteConfig extends $tea.Model {
  host?: string;
  path?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      path: 'Path',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      path: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsTrafficLimitConfig extends $tea.Model {
  perIpQps?: number;
  QPS?: number;
  static names(): { [key: string]: string } {
    return {
      perIpQps: 'PerIpQps',
      QPS: 'QPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perIpQps: 'number',
      QPS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig extends $tea.Model {
  serverGroupTuples?: CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActionsTrafficMirrorConfig extends $tea.Model {
  mirrorGroupConfig?: CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      mirrorGroupConfig: 'MirrorGroupConfig',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mirrorGroupConfig: CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig,
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleActions extends $tea.Model {
  corsConfig?: CreateRuleRequestRuleActionsCorsConfig;
  fixedResponseConfig?: CreateRuleRequestRuleActionsFixedResponseConfig;
  forwardGroupConfig?: CreateRuleRequestRuleActionsForwardGroupConfig;
  insertHeaderConfig?: CreateRuleRequestRuleActionsInsertHeaderConfig;
  order?: number;
  redirectConfig?: CreateRuleRequestRuleActionsRedirectConfig;
  removeHeaderConfig?: CreateRuleRequestRuleActionsRemoveHeaderConfig;
  rewriteConfig?: CreateRuleRequestRuleActionsRewriteConfig;
  trafficLimitConfig?: CreateRuleRequestRuleActionsTrafficLimitConfig;
  trafficMirrorConfig?: CreateRuleRequestRuleActionsTrafficMirrorConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      corsConfig: 'CorsConfig',
      fixedResponseConfig: 'FixedResponseConfig',
      forwardGroupConfig: 'ForwardGroupConfig',
      insertHeaderConfig: 'InsertHeaderConfig',
      order: 'Order',
      redirectConfig: 'RedirectConfig',
      removeHeaderConfig: 'RemoveHeaderConfig',
      rewriteConfig: 'RewriteConfig',
      trafficLimitConfig: 'TrafficLimitConfig',
      trafficMirrorConfig: 'TrafficMirrorConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corsConfig: CreateRuleRequestRuleActionsCorsConfig,
      fixedResponseConfig: CreateRuleRequestRuleActionsFixedResponseConfig,
      forwardGroupConfig: CreateRuleRequestRuleActionsForwardGroupConfig,
      insertHeaderConfig: CreateRuleRequestRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: CreateRuleRequestRuleActionsRedirectConfig,
      removeHeaderConfig: CreateRuleRequestRuleActionsRemoveHeaderConfig,
      rewriteConfig: CreateRuleRequestRuleActionsRewriteConfig,
      trafficLimitConfig: CreateRuleRequestRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: CreateRuleRequestRuleActionsTrafficMirrorConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsCookieConfigValues extends $tea.Model {
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

export class CreateRuleRequestRuleConditionsCookieConfig extends $tea.Model {
  values?: CreateRuleRequestRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRuleRequestRuleConditionsCookieConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsHostConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsMethodConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsPathConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsQueryStringConfigValues extends $tea.Model {
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

export class CreateRuleRequestRuleConditionsQueryStringConfig extends $tea.Model {
  values?: CreateRuleRequestRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRuleRequestRuleConditionsQueryStringConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsResponseHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsResponseStatusCodeConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditionsSourceIpConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestRuleConditions extends $tea.Model {
  cookieConfig?: CreateRuleRequestRuleConditionsCookieConfig;
  headerConfig?: CreateRuleRequestRuleConditionsHeaderConfig;
  hostConfig?: CreateRuleRequestRuleConditionsHostConfig;
  methodConfig?: CreateRuleRequestRuleConditionsMethodConfig;
  pathConfig?: CreateRuleRequestRuleConditionsPathConfig;
  queryStringConfig?: CreateRuleRequestRuleConditionsQueryStringConfig;
  responseHeaderConfig?: CreateRuleRequestRuleConditionsResponseHeaderConfig;
  responseStatusCodeConfig?: CreateRuleRequestRuleConditionsResponseStatusCodeConfig;
  sourceIpConfig?: CreateRuleRequestRuleConditionsSourceIpConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cookieConfig: 'CookieConfig',
      headerConfig: 'HeaderConfig',
      hostConfig: 'HostConfig',
      methodConfig: 'MethodConfig',
      pathConfig: 'PathConfig',
      queryStringConfig: 'QueryStringConfig',
      responseHeaderConfig: 'ResponseHeaderConfig',
      responseStatusCodeConfig: 'ResponseStatusCodeConfig',
      sourceIpConfig: 'SourceIpConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieConfig: CreateRuleRequestRuleConditionsCookieConfig,
      headerConfig: CreateRuleRequestRuleConditionsHeaderConfig,
      hostConfig: CreateRuleRequestRuleConditionsHostConfig,
      methodConfig: CreateRuleRequestRuleConditionsMethodConfig,
      pathConfig: CreateRuleRequestRuleConditionsPathConfig,
      queryStringConfig: CreateRuleRequestRuleConditionsQueryStringConfig,
      responseHeaderConfig: CreateRuleRequestRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: CreateRuleRequestRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: CreateRuleRequestRuleConditionsSourceIpConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestTag extends $tea.Model {
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

export class CreateRulesRequestRulesRuleActionsCorsConfig extends $tea.Model {
  allowCredentials?: string;
  allowHeaders?: string[];
  allowMethods?: string[];
  allowOrigin?: string[];
  exposeHeaders?: string[];
  maxAge?: number;
  static names(): { [key: string]: string } {
    return {
      allowCredentials: 'AllowCredentials',
      allowHeaders: 'AllowHeaders',
      allowMethods: 'AllowMethods',
      allowOrigin: 'AllowOrigin',
      exposeHeaders: 'ExposeHeaders',
      maxAge: 'MaxAge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCredentials: 'string',
      allowHeaders: { 'type': 'array', 'itemType': 'string' },
      allowMethods: { 'type': 'array', 'itemType': 'string' },
      allowOrigin: { 'type': 'array', 'itemType': 'string' },
      exposeHeaders: { 'type': 'array', 'itemType': 'string' },
      maxAge: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsFixedResponseConfig extends $tea.Model {
  content?: string;
  contentType?: string;
  httpCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      httpCode: 'HttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      httpCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession extends $tea.Model {
  enabled?: boolean;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsForwardGroupConfig extends $tea.Model {
  serverGroupStickySession?: CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession;
  serverGroupTuples?: CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsInsertHeaderConfig extends $tea.Model {
  key?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsRedirectConfig extends $tea.Model {
  host?: string;
  httpCode?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpCode: 'HttpCode',
      path: 'Path',
      port: 'Port',
      protocol: 'Protocol',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpCode: 'string',
      path: 'string',
      port: 'string',
      protocol: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsRemoveHeaderConfig extends $tea.Model {
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsRewriteConfig extends $tea.Model {
  host?: string;
  path?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      path: 'Path',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      path: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsTrafficLimitConfig extends $tea.Model {
  perIpQps?: number;
  QPS?: number;
  static names(): { [key: string]: string } {
    return {
      perIpQps: 'PerIpQps',
      QPS: 'QPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perIpQps: 'number',
      QPS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig extends $tea.Model {
  serverGroupTuples?: CreateRulesRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsTrafficMirrorConfig extends $tea.Model {
  mirrorGroupConfig?: CreateRulesRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      mirrorGroupConfig: 'MirrorGroupConfig',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mirrorGroupConfig: CreateRulesRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig,
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActions extends $tea.Model {
  corsConfig?: CreateRulesRequestRulesRuleActionsCorsConfig;
  fixedResponseConfig?: CreateRulesRequestRulesRuleActionsFixedResponseConfig;
  forwardGroupConfig?: CreateRulesRequestRulesRuleActionsForwardGroupConfig;
  insertHeaderConfig?: CreateRulesRequestRulesRuleActionsInsertHeaderConfig;
  order?: number;
  redirectConfig?: CreateRulesRequestRulesRuleActionsRedirectConfig;
  removeHeaderConfig?: CreateRulesRequestRulesRuleActionsRemoveHeaderConfig;
  rewriteConfig?: CreateRulesRequestRulesRuleActionsRewriteConfig;
  trafficLimitConfig?: CreateRulesRequestRulesRuleActionsTrafficLimitConfig;
  trafficMirrorConfig?: CreateRulesRequestRulesRuleActionsTrafficMirrorConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      corsConfig: 'CorsConfig',
      fixedResponseConfig: 'FixedResponseConfig',
      forwardGroupConfig: 'ForwardGroupConfig',
      insertHeaderConfig: 'InsertHeaderConfig',
      order: 'Order',
      redirectConfig: 'RedirectConfig',
      removeHeaderConfig: 'RemoveHeaderConfig',
      rewriteConfig: 'RewriteConfig',
      trafficLimitConfig: 'TrafficLimitConfig',
      trafficMirrorConfig: 'TrafficMirrorConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corsConfig: CreateRulesRequestRulesRuleActionsCorsConfig,
      fixedResponseConfig: CreateRulesRequestRulesRuleActionsFixedResponseConfig,
      forwardGroupConfig: CreateRulesRequestRulesRuleActionsForwardGroupConfig,
      insertHeaderConfig: CreateRulesRequestRulesRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: CreateRulesRequestRulesRuleActionsRedirectConfig,
      removeHeaderConfig: CreateRulesRequestRulesRuleActionsRemoveHeaderConfig,
      rewriteConfig: CreateRulesRequestRulesRuleActionsRewriteConfig,
      trafficLimitConfig: CreateRulesRequestRulesRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: CreateRulesRequestRulesRuleActionsTrafficMirrorConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsCookieConfigValues extends $tea.Model {
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

export class CreateRulesRequestRulesRuleConditionsCookieConfig extends $tea.Model {
  values?: CreateRulesRequestRulesRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleConditionsCookieConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsHostConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsMethodConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsPathConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsQueryStringConfigValues extends $tea.Model {
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

export class CreateRulesRequestRulesRuleConditionsQueryStringConfig extends $tea.Model {
  values?: CreateRulesRequestRulesRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleConditionsQueryStringConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsResponseHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsResponseStatusCodeConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsSourceIpConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditions extends $tea.Model {
  cookieConfig?: CreateRulesRequestRulesRuleConditionsCookieConfig;
  headerConfig?: CreateRulesRequestRulesRuleConditionsHeaderConfig;
  hostConfig?: CreateRulesRequestRulesRuleConditionsHostConfig;
  methodConfig?: CreateRulesRequestRulesRuleConditionsMethodConfig;
  pathConfig?: CreateRulesRequestRulesRuleConditionsPathConfig;
  queryStringConfig?: CreateRulesRequestRulesRuleConditionsQueryStringConfig;
  responseHeaderConfig?: CreateRulesRequestRulesRuleConditionsResponseHeaderConfig;
  responseStatusCodeConfig?: CreateRulesRequestRulesRuleConditionsResponseStatusCodeConfig;
  sourceIpConfig?: CreateRulesRequestRulesRuleConditionsSourceIpConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cookieConfig: 'CookieConfig',
      headerConfig: 'HeaderConfig',
      hostConfig: 'HostConfig',
      methodConfig: 'MethodConfig',
      pathConfig: 'PathConfig',
      queryStringConfig: 'QueryStringConfig',
      responseHeaderConfig: 'ResponseHeaderConfig',
      responseStatusCodeConfig: 'ResponseStatusCodeConfig',
      sourceIpConfig: 'SourceIpConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieConfig: CreateRulesRequestRulesRuleConditionsCookieConfig,
      headerConfig: CreateRulesRequestRulesRuleConditionsHeaderConfig,
      hostConfig: CreateRulesRequestRulesRuleConditionsHostConfig,
      methodConfig: CreateRulesRequestRulesRuleConditionsMethodConfig,
      pathConfig: CreateRulesRequestRulesRuleConditionsPathConfig,
      queryStringConfig: CreateRulesRequestRulesRuleConditionsQueryStringConfig,
      responseHeaderConfig: CreateRulesRequestRulesRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: CreateRulesRequestRulesRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: CreateRulesRequestRulesRuleConditionsSourceIpConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesTag extends $tea.Model {
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

export class CreateRulesRequestRules extends $tea.Model {
  direction?: string;
  priority?: number;
  ruleActions?: CreateRulesRequestRulesRuleActions[];
  ruleConditions?: CreateRulesRequestRulesRuleConditions[];
  ruleName?: string;
  tag?: CreateRulesRequestRulesTag[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleName: 'RuleName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleConditions },
      ruleName: 'string',
      tag: { 'type': 'array', 'itemType': CreateRulesRequestRulesTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponseBodyRuleIds extends $tea.Model {
  priority?: number;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      priority: 'Priority',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priority: 'number',
      ruleId: 'string',
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
  healthCheckCodes?: string[];
  healthCheckConnectPort?: number;
  healthCheckEnabled?: boolean;
  healthCheckHost?: string;
  healthCheckHttpVersion?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckPath?: string;
  healthCheckProtocol?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHost: 'HealthCheckHost',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckConnectPort: 'number',
      healthCheckEnabled: 'boolean',
      healthCheckHost: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupRequestStickySessionConfig extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  stickySessionEnabled?: boolean;
  stickySessionType?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      stickySessionEnabled: 'StickySessionEnabled',
      stickySessionType: 'StickySessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      stickySessionEnabled: 'boolean',
      stickySessionType: 'string',
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

export class CreateServerGroupRequestUchConfig extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class DissociateAdditionalCertificatesFromListenerRequestCertificates extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthCheckTemplateAttributeResponseBodyTags extends $tea.Model {
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

export class GetListenerAttributeResponseBodyAclConfigAclRelations extends $tea.Model {
  aclId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyAclConfig extends $tea.Model {
  aclRelations?: GetListenerAttributeResponseBodyAclConfigAclRelations[];
  aclType?: string;
  static names(): { [key: string]: string } {
    return {
      aclRelations: 'AclRelations',
      aclType: 'AclType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRelations: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyAclConfigAclRelations },
      aclType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyCaCertificates extends $tea.Model {
  certificateId?: string;
  isDefault?: boolean;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      isDefault: 'IsDefault',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      isDefault: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyCertificates extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyDefaultActions extends $tea.Model {
  forwardGroupConfig?: GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig extends $tea.Model {
  tracingEnabled?: boolean;
  tracingSample?: number;
  tracingType?: string;
  static names(): { [key: string]: string } {
    return {
      tracingEnabled: 'TracingEnabled',
      tracingSample: 'TracingSample',
      tracingType: 'TracingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tracingEnabled: 'boolean',
      tracingSample: 'number',
      tracingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyLogConfig extends $tea.Model {
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  accessLogTracingConfig?: GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig;
  static names(): { [key: string]: string } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      accessLogTracingConfig: 'AccessLogTracingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      accessLogTracingConfig: GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyQuicConfig extends $tea.Model {
  quicListenerId?: string;
  quicUpgradeEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      quicListenerId: 'QuicListenerId',
      quicUpgradeEnabled: 'QuicUpgradeEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quicListenerId: 'string',
      quicUpgradeEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyTags extends $tea.Model {
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

export class GetListenerAttributeResponseBodyXForwardedForConfig extends $tea.Model {
  XForwardedForClientCertClientVerifyAlias?: string;
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  XForwardedForClientCertFingerprintAlias?: string;
  XForwardedForClientCertFingerprintEnabled?: boolean;
  XForwardedForClientCertIssuerDNAlias?: string;
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  XForwardedForClientCertSubjectDNAlias?: string;
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  XForwardedForClientSourceIpsEnabled?: boolean;
  XForwardedForClientSourceIpsTrusted?: string;
  XForwardedForClientSrcPortEnabled?: boolean;
  XForwardedForEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XForwardedForSLBIdEnabled?: boolean;
  XForwardedForSLBPortEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'XForwardedForClientCertClientVerifyAlias',
      XForwardedForClientCertClientVerifyEnabled: 'XForwardedForClientCertClientVerifyEnabled',
      XForwardedForClientCertFingerprintAlias: 'XForwardedForClientCertFingerprintAlias',
      XForwardedForClientCertFingerprintEnabled: 'XForwardedForClientCertFingerprintEnabled',
      XForwardedForClientCertIssuerDNAlias: 'XForwardedForClientCertIssuerDNAlias',
      XForwardedForClientCertIssuerDNEnabled: 'XForwardedForClientCertIssuerDNEnabled',
      XForwardedForClientCertSubjectDNAlias: 'XForwardedForClientCertSubjectDNAlias',
      XForwardedForClientCertSubjectDNEnabled: 'XForwardedForClientCertSubjectDNEnabled',
      XForwardedForClientSourceIpsEnabled: 'XForwardedForClientSourceIpsEnabled',
      XForwardedForClientSourceIpsTrusted: 'XForwardedForClientSourceIpsTrusted',
      XForwardedForClientSrcPortEnabled: 'XForwardedForClientSrcPortEnabled',
      XForwardedForEnabled: 'XForwardedForEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForSLBIdEnabled: 'XForwardedForSLBIdEnabled',
      XForwardedForSLBPortEnabled: 'XForwardedForSLBPortEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'string',
      XForwardedForClientCertClientVerifyEnabled: 'boolean',
      XForwardedForClientCertFingerprintAlias: 'string',
      XForwardedForClientCertFingerprintEnabled: 'boolean',
      XForwardedForClientCertIssuerDNAlias: 'string',
      XForwardedForClientCertIssuerDNEnabled: 'boolean',
      XForwardedForClientCertSubjectDNAlias: 'string',
      XForwardedForClientCertSubjectDNEnabled: 'boolean',
      XForwardedForClientSourceIpsEnabled: 'boolean',
      XForwardedForClientSourceIpsTrusted: 'string',
      XForwardedForClientSrcPortEnabled: 'boolean',
      XForwardedForEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForSLBIdEnabled: 'boolean',
      XForwardedForSLBPortEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason extends $tea.Model {
  actualResponse?: string;
  expectedResponse?: string;
  reasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      actualResponse: 'ActualResponse',
      expectedResponse: 'ExpectedResponse',
      reasonCode: 'ReasonCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualResponse: 'string',
      expectedResponse: 'string',
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
  actionType?: string;
  healthCheckEnabled?: string;
  nonNormalServers?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers[];
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      healthCheckEnabled: 'HealthCheckEnabled',
      nonNormalServers: 'NonNormalServers',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      healthCheckEnabled: 'string',
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

export class GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServersReason extends $tea.Model {
  actualResponse?: string;
  expectedResponse?: string;
  reasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      actualResponse: 'ActualResponse',
      expectedResponse: 'ExpectedResponse',
      reasonCode: 'ReasonCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualResponse: 'string',
      expectedResponse: 'string',
      reasonCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServers extends $tea.Model {
  port?: number;
  reason?: GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServersReason;
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
      reason: GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServersReason,
      serverId: 'string',
      serverIp: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfos extends $tea.Model {
  actionType?: string;
  healthCheckEnabled?: string;
  nonNormalServers?: GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServers[];
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      healthCheckEnabled: 'HealthCheckEnabled',
      nonNormalServers: 'NonNormalServers',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      healthCheckEnabled: 'string',
      nonNormalServers: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServers },
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyRuleHealthStatus extends $tea.Model {
  ruleId?: string;
  serverGroupInfos?: GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfos[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      serverGroupInfos: 'ServerGroupInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      serverGroupInfos: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyAccessLogConfig extends $tea.Model {
  logProject?: string;
  logStore?: string;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      logStore: 'LogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      logStore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig extends $tea.Model {
  enabled?: boolean;
  enabledTime?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      enabledTime: 'EnabledTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      enabledTime: 'string',
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

export class GetLoadBalancerAttributeResponseBodyLoadBalancerOperationLocks extends $tea.Model {
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

export class GetLoadBalancerAttributeResponseBodyModificationProtectionConfig extends $tea.Model {
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

export class GetLoadBalancerAttributeResponseBodyTags extends $tea.Model {
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

export class GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses extends $tea.Model {
  address?: string;
  allocationId?: string;
  eipType?: string;
  intranetAddress?: string;
  ipv6Address?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      allocationId: 'AllocationId',
      eipType: 'EipType',
      intranetAddress: 'IntranetAddress',
      ipv6Address: 'Ipv6Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      allocationId: 'string',
      eipType: 'string',
      intranetAddress: 'string',
      ipv6Address: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyZoneMappings extends $tea.Model {
  loadBalancerAddresses?: GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses[];
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerAddresses: 'LoadBalancerAddresses',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerAddresses: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses },
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAScriptsResponseBodyAScripts extends $tea.Model {
  AScriptId?: string;
  AScriptName?: string;
  AScriptStatus?: string;
  enabled?: boolean;
  listenerId?: string;
  loadBalancerId?: string;
  scriptContent?: string;
  static names(): { [key: string]: string } {
    return {
      AScriptId: 'AScriptId',
      AScriptName: 'AScriptName',
      AScriptStatus: 'AScriptStatus',
      enabled: 'Enabled',
      listenerId: 'ListenerId',
      loadBalancerId: 'LoadBalancerId',
      scriptContent: 'ScriptContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptId: 'string',
      AScriptName: 'string',
      AScriptStatus: 'string',
      enabled: 'boolean',
      listenerId: 'string',
      loadBalancerId: 'string',
      scriptContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclEntriesResponseBodyAclEntries extends $tea.Model {
  description?: string;
  entry?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entry: 'Entry',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entry: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclRelationsResponseBodyAclRelationsRelatedListeners extends $tea.Model {
  listenerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclRelationsResponseBodyAclRelations extends $tea.Model {
  aclId?: string;
  relatedListeners?: ListAclRelationsResponseBodyAclRelationsRelatedListeners[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      relatedListeners: 'RelatedListeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      relatedListeners: { 'type': 'array', 'itemType': ListAclRelationsResponseBodyAclRelationsRelatedListeners },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsRequestTag extends $tea.Model {
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

export class ListAclsResponseBodyAclsTags extends $tea.Model {
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

export class ListAclsResponseBodyAcls extends $tea.Model {
  aclId?: string;
  aclName?: string;
  aclStatus?: string;
  addressIPVersion?: string;
  configManagedEnabled?: boolean;
  createTime?: string;
  resourceGroupId?: string;
  tags?: ListAclsResponseBodyAclsTags[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      aclStatus: 'AclStatus',
      addressIPVersion: 'AddressIPVersion',
      configManagedEnabled: 'ConfigManagedEnabled',
      createTime: 'CreateTime',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      aclStatus: 'string',
      addressIPVersion: 'string',
      configManagedEnabled: 'boolean',
      createTime: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListAclsResponseBodyAclsTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsynJobsResponseBodyJobs extends $tea.Model {
  apiName?: string;
  createTime?: number;
  errorCode?: string;
  errorMessage?: string;
  id?: string;
  modifyTime?: number;
  operateType?: string;
  resourceId?: string;
  resourceType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      id: 'Id',
      modifyTime: 'ModifyTime',
      operateType: 'OperateType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      createTime: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      id: 'string',
      modifyTime: 'number',
      operateType: 'string',
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHealthCheckTemplatesRequestTag extends $tea.Model {
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

export class ListHealthCheckTemplatesResponseBodyHealthCheckTemplatesTags extends $tea.Model {
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

export class ListHealthCheckTemplatesResponseBodyHealthCheckTemplates extends $tea.Model {
  healthCheckCodes?: string[];
  healthCheckConnectPort?: number;
  healthCheckHost?: string;
  healthCheckHttpVersion?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckPath?: string;
  healthCheckProtocol?: string;
  healthCheckTemplateId?: string;
  healthCheckTemplateName?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  tags?: ListHealthCheckTemplatesResponseBodyHealthCheckTemplatesTags[];
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckHost: 'HealthCheckHost',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTemplateId: 'HealthCheckTemplateId',
      healthCheckTemplateName: 'HealthCheckTemplateName',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      tags: 'Tags',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckConnectPort: 'number',
      healthCheckHost: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTemplateId: 'string',
      healthCheckTemplateName: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      tags: { 'type': 'array', 'itemType': ListHealthCheckTemplatesResponseBodyHealthCheckTemplatesTags },
      unhealthyThreshold: 'number',
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

export class ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersDefaultActions extends $tea.Model {
  forwardGroupConfig?: ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig extends $tea.Model {
  tracingEnabled?: boolean;
  tracingSample?: number;
  tracingType?: string;
  static names(): { [key: string]: string } {
    return {
      tracingEnabled: 'TracingEnabled',
      tracingSample: 'TracingSample',
      tracingType: 'TracingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tracingEnabled: 'boolean',
      tracingSample: 'number',
      tracingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersLogConfig extends $tea.Model {
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  accessLogTracingConfig?: ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig;
  static names(): { [key: string]: string } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      accessLogTracingConfig: 'AccessLogTracingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      accessLogTracingConfig: ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersQuicConfig extends $tea.Model {
  quicListenerId?: string;
  quicUpgradeEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      quicListenerId: 'QuicListenerId',
      quicUpgradeEnabled: 'QuicUpgradeEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quicListenerId: 'string',
      quicUpgradeEnabled: 'boolean',
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

export class ListListenersResponseBodyListenersXForwardedForConfig extends $tea.Model {
  XForwardedForClientCertClientVerifyAlias?: string;
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  XForwardedForClientCertFingerprintAlias?: string;
  XForwardedForClientCertFingerprintEnabled?: boolean;
  XForwardedForClientCertIssuerDNAlias?: string;
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  XForwardedForClientCertSubjectDNAlias?: string;
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  XForwardedForClientSourceIpsEnabled?: boolean;
  XForwardedForClientSourceIpsTrusted?: string;
  XForwardedForClientSrcPortEnabled?: boolean;
  XForwardedForEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XForwardedForSLBIdEnabled?: boolean;
  XForwardedForSLBPortEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'XForwardedForClientCertClientVerifyAlias',
      XForwardedForClientCertClientVerifyEnabled: 'XForwardedForClientCertClientVerifyEnabled',
      XForwardedForClientCertFingerprintAlias: 'XForwardedForClientCertFingerprintAlias',
      XForwardedForClientCertFingerprintEnabled: 'XForwardedForClientCertFingerprintEnabled',
      XForwardedForClientCertIssuerDNAlias: 'XForwardedForClientCertIssuerDNAlias',
      XForwardedForClientCertIssuerDNEnabled: 'XForwardedForClientCertIssuerDNEnabled',
      XForwardedForClientCertSubjectDNAlias: 'XForwardedForClientCertSubjectDNAlias',
      XForwardedForClientCertSubjectDNEnabled: 'XForwardedForClientCertSubjectDNEnabled',
      XForwardedForClientSourceIpsEnabled: 'XForwardedForClientSourceIpsEnabled',
      XForwardedForClientSourceIpsTrusted: 'XForwardedForClientSourceIpsTrusted',
      XForwardedForClientSrcPortEnabled: 'XForwardedForClientSrcPortEnabled',
      XForwardedForEnabled: 'XForwardedForEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForSLBIdEnabled: 'XForwardedForSLBIdEnabled',
      XForwardedForSLBPortEnabled: 'XForwardedForSLBPortEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'string',
      XForwardedForClientCertClientVerifyEnabled: 'boolean',
      XForwardedForClientCertFingerprintAlias: 'string',
      XForwardedForClientCertFingerprintEnabled: 'boolean',
      XForwardedForClientCertIssuerDNAlias: 'string',
      XForwardedForClientCertIssuerDNEnabled: 'boolean',
      XForwardedForClientCertSubjectDNAlias: 'string',
      XForwardedForClientCertSubjectDNEnabled: 'boolean',
      XForwardedForClientSourceIpsEnabled: 'boolean',
      XForwardedForClientSourceIpsTrusted: 'string',
      XForwardedForClientSrcPortEnabled: 'boolean',
      XForwardedForEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForSLBIdEnabled: 'boolean',
      XForwardedForSLBPortEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListeners extends $tea.Model {
  defaultActions?: ListListenersResponseBodyListenersDefaultActions[];
  gzipEnabled?: boolean;
  http2Enabled?: boolean;
  idleTimeout?: number;
  listenerDescription?: string;
  listenerId?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  listenerStatus?: string;
  loadBalancerId?: string;
  logConfig?: ListListenersResponseBodyListenersLogConfig;
  quicConfig?: ListListenersResponseBodyListenersQuicConfig;
  requestTimeout?: number;
  securityPolicyId?: string;
  tags?: ListListenersResponseBodyListenersTags[];
  XForwardedForConfig?: ListListenersResponseBodyListenersXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      defaultActions: 'DefaultActions',
      gzipEnabled: 'GzipEnabled',
      http2Enabled: 'Http2Enabled',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      logConfig: 'LogConfig',
      quicConfig: 'QuicConfig',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      tags: 'Tags',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultActions: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersDefaultActions },
      gzipEnabled: 'boolean',
      http2Enabled: 'boolean',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      logConfig: ListListenersResponseBodyListenersLogConfig,
      quicConfig: ListListenersResponseBodyListenersQuicConfig,
      requestTimeout: 'number',
      securityPolicyId: 'string',
      tags: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersTags },
      XForwardedForConfig: ListListenersResponseBodyListenersXForwardedForConfig,
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

export class ListLoadBalancersResponseBodyLoadBalancersAccessLogConfig extends $tea.Model {
  logProject?: string;
  logStore?: string;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      logStore: 'LogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      logStore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig extends $tea.Model {
  enabled?: boolean;
  enabledTime?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      enabledTime: 'EnabledTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      enabledTime: 'string',
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

export class ListLoadBalancersResponseBodyLoadBalancersLoadBalancerOperationLocks extends $tea.Model {
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

export class ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig extends $tea.Model {
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

export class ListLoadBalancersResponseBodyLoadBalancers extends $tea.Model {
  accessLogConfig?: ListLoadBalancersResponseBodyLoadBalancersAccessLogConfig;
  addressAllocatedMode?: string;
  addressIpVersion?: string;
  addressType?: string;
  bandwidthPackageId?: string;
  createTime?: string;
  DNSName?: string;
  deletionProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig;
  ipv6AddressType?: string;
  loadBalancerBillingConfig?: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig;
  loadBalancerBussinessStatus?: string;
  loadBalancerEdition?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerOperationLocks?: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerOperationLocks[];
  loadBalancerStatus?: string;
  modificationProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig;
  resourceGroupId?: string;
  tags?: ListLoadBalancersResponseBodyLoadBalancersTags[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogConfig: 'AccessLogConfig',
      addressAllocatedMode: 'AddressAllocatedMode',
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
      createTime: 'CreateTime',
      DNSName: 'DNSName',
      deletionProtectionConfig: 'DeletionProtectionConfig',
      ipv6AddressType: 'Ipv6AddressType',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerBussinessStatus: 'LoadBalancerBussinessStatus',
      loadBalancerEdition: 'LoadBalancerEdition',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerOperationLocks: 'LoadBalancerOperationLocks',
      loadBalancerStatus: 'LoadBalancerStatus',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogConfig: ListLoadBalancersResponseBodyLoadBalancersAccessLogConfig,
      addressAllocatedMode: 'string',
      addressIpVersion: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      createTime: 'string',
      DNSName: 'string',
      deletionProtectionConfig: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig,
      ipv6AddressType: 'string',
      loadBalancerBillingConfig: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig,
      loadBalancerBussinessStatus: 'string',
      loadBalancerEdition: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerOperationLocks: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersLoadBalancerOperationLocks },
      loadBalancerStatus: 'string',
      modificationProtectionConfig: ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig,
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersTags },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesRequestTag extends $tea.Model {
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

export class ListRulesResponseBodyRulesRuleActionsCorsConfig extends $tea.Model {
  allowCredentials?: string;
  allowHeaders?: string[];
  allowMethods?: string[];
  allowOrigin?: string[];
  exposeHeaders?: string[];
  maxAge?: number;
  static names(): { [key: string]: string } {
    return {
      allowCredentials: 'AllowCredentials',
      allowHeaders: 'AllowHeaders',
      allowMethods: 'AllowMethods',
      allowOrigin: 'AllowOrigin',
      exposeHeaders: 'ExposeHeaders',
      maxAge: 'MaxAge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCredentials: 'string',
      allowHeaders: { 'type': 'array', 'itemType': 'string' },
      allowMethods: { 'type': 'array', 'itemType': 'string' },
      allowOrigin: { 'type': 'array', 'itemType': 'string' },
      exposeHeaders: { 'type': 'array', 'itemType': 'string' },
      maxAge: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsFixedResponseConfig extends $tea.Model {
  content?: string;
  contentType?: string;
  httpCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      httpCode: 'HttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      httpCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupStickySession extends $tea.Model {
  enabled?: boolean;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsForwardGroupConfig extends $tea.Model {
  serverGroupStickySession?: ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupStickySession;
  serverGroupTuples?: ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig extends $tea.Model {
  key?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsRedirectConfig extends $tea.Model {
  host?: string;
  httpCode?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpCode: 'HttpCode',
      path: 'Path',
      port: 'Port',
      protocol: 'Protocol',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpCode: 'string',
      path: 'string',
      port: 'string',
      protocol: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsRemoveHeaderConfig extends $tea.Model {
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsRewriteConfig extends $tea.Model {
  host?: string;
  path?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      path: 'Path',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      path: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsTrafficLimitConfig extends $tea.Model {
  perIpQps?: number;
  QPS?: number;
  static names(): { [key: string]: string } {
    return {
      perIpQps: 'PerIpQps',
      QPS: 'QPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perIpQps: 'number',
      QPS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig extends $tea.Model {
  serverGroupTuples?: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfig extends $tea.Model {
  mirrorGroupConfig?: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      mirrorGroupConfig: 'MirrorGroupConfig',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mirrorGroupConfig: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig,
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleActions extends $tea.Model {
  corsConfig?: ListRulesResponseBodyRulesRuleActionsCorsConfig;
  fixedResponseConfig?: ListRulesResponseBodyRulesRuleActionsFixedResponseConfig;
  forwardGroupConfig?: ListRulesResponseBodyRulesRuleActionsForwardGroupConfig;
  insertHeaderConfig?: ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig;
  order?: number;
  redirectConfig?: ListRulesResponseBodyRulesRuleActionsRedirectConfig;
  removeHeaderConfig?: ListRulesResponseBodyRulesRuleActionsRemoveHeaderConfig;
  rewriteConfig?: ListRulesResponseBodyRulesRuleActionsRewriteConfig;
  trafficLimitConfig?: ListRulesResponseBodyRulesRuleActionsTrafficLimitConfig;
  trafficMirrorConfig?: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      corsConfig: 'CorsConfig',
      fixedResponseConfig: 'FixedResponseConfig',
      forwardGroupConfig: 'ForwardGroupConfig',
      insertHeaderConfig: 'InsertHeaderConfig',
      order: 'Order',
      redirectConfig: 'RedirectConfig',
      removeHeaderConfig: 'RemoveHeaderConfig',
      rewriteConfig: 'RewriteConfig',
      trafficLimitConfig: 'TrafficLimitConfig',
      trafficMirrorConfig: 'TrafficMirrorConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corsConfig: ListRulesResponseBodyRulesRuleActionsCorsConfig,
      fixedResponseConfig: ListRulesResponseBodyRulesRuleActionsFixedResponseConfig,
      forwardGroupConfig: ListRulesResponseBodyRulesRuleActionsForwardGroupConfig,
      insertHeaderConfig: ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: ListRulesResponseBodyRulesRuleActionsRedirectConfig,
      removeHeaderConfig: ListRulesResponseBodyRulesRuleActionsRemoveHeaderConfig,
      rewriteConfig: ListRulesResponseBodyRulesRuleActionsRewriteConfig,
      trafficLimitConfig: ListRulesResponseBodyRulesRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsCookieConfigValues extends $tea.Model {
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

export class ListRulesResponseBodyRulesRuleConditionsCookieConfig extends $tea.Model {
  values?: ListRulesResponseBodyRulesRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleConditionsCookieConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsHostConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsMethodConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsPathConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsQueryStringConfigValues extends $tea.Model {
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

export class ListRulesResponseBodyRulesRuleConditionsQueryStringConfig extends $tea.Model {
  values?: ListRulesResponseBodyRulesRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleConditionsQueryStringConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsResponseHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsResponseStatusCodeConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditionsSourceIpConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesRuleConditions extends $tea.Model {
  cookieConfig?: ListRulesResponseBodyRulesRuleConditionsCookieConfig;
  headerConfig?: ListRulesResponseBodyRulesRuleConditionsHeaderConfig;
  hostConfig?: ListRulesResponseBodyRulesRuleConditionsHostConfig;
  methodConfig?: ListRulesResponseBodyRulesRuleConditionsMethodConfig;
  pathConfig?: ListRulesResponseBodyRulesRuleConditionsPathConfig;
  queryStringConfig?: ListRulesResponseBodyRulesRuleConditionsQueryStringConfig;
  responseHeaderConfig?: ListRulesResponseBodyRulesRuleConditionsResponseHeaderConfig;
  responseStatusCodeConfig?: ListRulesResponseBodyRulesRuleConditionsResponseStatusCodeConfig;
  sourceIpConfig?: ListRulesResponseBodyRulesRuleConditionsSourceIpConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cookieConfig: 'CookieConfig',
      headerConfig: 'HeaderConfig',
      hostConfig: 'HostConfig',
      methodConfig: 'MethodConfig',
      pathConfig: 'PathConfig',
      queryStringConfig: 'QueryStringConfig',
      responseHeaderConfig: 'ResponseHeaderConfig',
      responseStatusCodeConfig: 'ResponseStatusCodeConfig',
      sourceIpConfig: 'SourceIpConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieConfig: ListRulesResponseBodyRulesRuleConditionsCookieConfig,
      headerConfig: ListRulesResponseBodyRulesRuleConditionsHeaderConfig,
      hostConfig: ListRulesResponseBodyRulesRuleConditionsHostConfig,
      methodConfig: ListRulesResponseBodyRulesRuleConditionsMethodConfig,
      pathConfig: ListRulesResponseBodyRulesRuleConditionsPathConfig,
      queryStringConfig: ListRulesResponseBodyRulesRuleConditionsQueryStringConfig,
      responseHeaderConfig: ListRulesResponseBodyRulesRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: ListRulesResponseBodyRulesRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: ListRulesResponseBodyRulesRuleConditionsSourceIpConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRulesTags extends $tea.Model {
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

export class ListRulesResponseBodyRules extends $tea.Model {
  direction?: string;
  listenerId?: string;
  loadBalancerId?: string;
  priority?: number;
  ruleActions?: ListRulesResponseBodyRulesRuleActions[];
  ruleConditions?: ListRulesResponseBodyRulesRuleConditions[];
  ruleId?: string;
  ruleName?: string;
  ruleStatus?: string;
  tags?: ListRulesResponseBodyRulesTags[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      listenerId: 'ListenerId',
      loadBalancerId: 'LoadBalancerId',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      listenerId: 'string',
      loadBalancerId: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleConditions },
      ruleId: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
      tags: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPoliciesRequestTag extends $tea.Model {
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

export class ListSecurityPoliciesResponseBodySecurityPoliciesTags extends $tea.Model {
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

export class ListSecurityPoliciesResponseBodySecurityPolicies extends $tea.Model {
  ciphers?: string[];
  createTime?: string;
  resourceGroupId?: string;
  securityPolicyId?: string;
  securityPolicyName?: string;
  securityPolicyStatus?: string;
  TLSVersions?: string[];
  tags?: ListSecurityPoliciesResponseBodySecurityPoliciesTags[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      createTime: 'CreateTime',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyId: 'SecurityPolicyId',
      securityPolicyName: 'SecurityPolicyName',
      securityPolicyStatus: 'SecurityPolicyStatus',
      TLSVersions: 'TLSVersions',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      resourceGroupId: 'string',
      securityPolicyId: 'string',
      securityPolicyName: 'string',
      securityPolicyStatus: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListSecurityPoliciesResponseBodySecurityPoliciesTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRelationsResponseBodySecrityPolicyRelationsRelatedListeners extends $tea.Model {
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

export class ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations extends $tea.Model {
  relatedListeners?: ListSecurityPolicyRelationsResponseBodySecrityPolicyRelationsRelatedListeners[];
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      relatedListeners: 'RelatedListeners',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedListeners: { 'type': 'array', 'itemType': ListSecurityPolicyRelationsResponseBodySecrityPolicyRelationsRelatedListeners },
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersRequestTag extends $tea.Model {
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

export class ListServerGroupServersResponseBodyServers extends $tea.Model {
  description?: string;
  port?: number;
  remoteIpEnabled?: boolean;
  serverGroupId?: string;
  serverId?: string;
  serverIp?: string;
  serverType?: string;
  status?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      remoteIpEnabled: 'RemoteIpEnabled',
      serverGroupId: 'ServerGroupId',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
      status: 'Status',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      remoteIpEnabled: 'boolean',
      serverGroupId: 'string',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
      status: 'string',
      weight: 'number',
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

export class ListServerGroupsResponseBodyServerGroupsHealthCheckConfig extends $tea.Model {
  healthCheckCodes?: string[];
  healthCheckConnectPort?: number;
  healthCheckEnabled?: boolean;
  healthCheckHost?: string;
  healthCheckHttpVersion?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckPath?: string;
  healthCheckProtocol?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHost: 'HealthCheckHost',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckConnectPort: 'number',
      healthCheckEnabled: 'boolean',
      healthCheckHost: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBodyServerGroupsStickySessionConfig extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  stickySessionEnabled?: boolean;
  stickySessionType?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      stickySessionEnabled: 'StickySessionEnabled',
      stickySessionType: 'StickySessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      stickySessionEnabled: 'boolean',
      stickySessionType: 'string',
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

export class ListServerGroupsResponseBodyServerGroupsUchConfig extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBodyServerGroups extends $tea.Model {
  configManagedEnabled?: boolean;
  createTime?: string;
  healthCheckConfig?: ListServerGroupsResponseBodyServerGroupsHealthCheckConfig;
  ipv6Enabled?: boolean;
  protocol?: string;
  relatedLoadBalancerIds?: string[];
  resourceGroupId?: string;
  scheduler?: string;
  serverCount?: number;
  serverGroupId?: string;
  serverGroupName?: string;
  serverGroupStatus?: string;
  serverGroupType?: string;
  serviceName?: string;
  stickySessionConfig?: ListServerGroupsResponseBodyServerGroupsStickySessionConfig;
  tags?: ListServerGroupsResponseBodyServerGroupsTags[];
  uchConfig?: ListServerGroupsResponseBodyServerGroupsUchConfig;
  upstreamKeepaliveEnabled?: boolean;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      configManagedEnabled: 'ConfigManagedEnabled',
      createTime: 'CreateTime',
      healthCheckConfig: 'HealthCheckConfig',
      ipv6Enabled: 'Ipv6Enabled',
      protocol: 'Protocol',
      relatedLoadBalancerIds: 'RelatedLoadBalancerIds',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverCount: 'ServerCount',
      serverGroupId: 'ServerGroupId',
      serverGroupName: 'ServerGroupName',
      serverGroupStatus: 'ServerGroupStatus',
      serverGroupType: 'ServerGroupType',
      serviceName: 'ServiceName',
      stickySessionConfig: 'StickySessionConfig',
      tags: 'Tags',
      uchConfig: 'UchConfig',
      upstreamKeepaliveEnabled: 'UpstreamKeepaliveEnabled',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configManagedEnabled: 'boolean',
      createTime: 'string',
      healthCheckConfig: ListServerGroupsResponseBodyServerGroupsHealthCheckConfig,
      ipv6Enabled: 'boolean',
      protocol: 'string',
      relatedLoadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      scheduler: 'string',
      serverCount: 'number',
      serverGroupId: 'string',
      serverGroupName: 'string',
      serverGroupStatus: 'string',
      serverGroupType: 'string',
      serviceName: 'string',
      stickySessionConfig: ListServerGroupsResponseBodyServerGroupsStickySessionConfig,
      tags: { 'type': 'array', 'itemType': ListServerGroupsResponseBodyServerGroupsTags },
      uchConfig: ListServerGroupsResponseBodyServerGroupsUchConfig,
      upstreamKeepaliveEnabled: 'boolean',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPoliciesResponseBodySecurityPolicies extends $tea.Model {
  ciphers?: string[];
  securityPolicyId?: string;
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      securityPolicyId: 'SecurityPolicyId',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      securityPolicyId: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyTagKeys extends $tea.Model {
  category?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      tagKey: 'string',
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

export class ReplaceServersInServerGroupRequestAddedServers extends $tea.Model {
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

export class ReplaceServersInServerGroupRequestRemovedServers extends $tea.Model {
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

export class UnTagResourcesRequestTag extends $tea.Model {
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

export class UpdateAScriptsRequestAScripts extends $tea.Model {
  AScriptId?: string;
  AScriptName?: string;
  enabled?: boolean;
  scriptContent?: string;
  static names(): { [key: string]: string } {
    return {
      AScriptId: 'AScriptId',
      AScriptName: 'AScriptName',
      enabled: 'Enabled',
      scriptContent: 'ScriptContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptId: 'string',
      AScriptName: 'string',
      enabled: 'boolean',
      scriptContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestCaCertificates extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestCertificates extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestDefaultActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: UpdateListenerAttributeRequestDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateListenerAttributeRequestDefaultActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestDefaultActions extends $tea.Model {
  forwardGroupConfig?: UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestQuicConfig extends $tea.Model {
  quicListenerId?: string;
  quicUpgradeEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      quicListenerId: 'QuicListenerId',
      quicUpgradeEnabled: 'QuicUpgradeEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quicListenerId: 'string',
      quicUpgradeEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestXForwardedForConfig extends $tea.Model {
  XForwardedForClientCertClientVerifyAlias?: string;
  XForwardedForClientCertClientVerifyEnabled?: boolean;
  XForwardedForClientCertFingerprintAlias?: string;
  XForwardedForClientCertFingerprintEnabled?: boolean;
  XForwardedForClientCertIssuerDNAlias?: string;
  XForwardedForClientCertIssuerDNEnabled?: boolean;
  XForwardedForClientCertSubjectDNAlias?: string;
  XForwardedForClientCertSubjectDNEnabled?: boolean;
  XForwardedForClientSourceIpsEnabled?: boolean;
  XForwardedForClientSourceIpsTrusted?: string;
  XForwardedForClientSrcPortEnabled?: boolean;
  XForwardedForEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XForwardedForSLBIdEnabled?: boolean;
  XForwardedForSLBPortEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'XForwardedForClientCertClientVerifyAlias',
      XForwardedForClientCertClientVerifyEnabled: 'XForwardedForClientCertClientVerifyEnabled',
      XForwardedForClientCertFingerprintAlias: 'XForwardedForClientCertFingerprintAlias',
      XForwardedForClientCertFingerprintEnabled: 'XForwardedForClientCertFingerprintEnabled',
      XForwardedForClientCertIssuerDNAlias: 'XForwardedForClientCertIssuerDNAlias',
      XForwardedForClientCertIssuerDNEnabled: 'XForwardedForClientCertIssuerDNEnabled',
      XForwardedForClientCertSubjectDNAlias: 'XForwardedForClientCertSubjectDNAlias',
      XForwardedForClientCertSubjectDNEnabled: 'XForwardedForClientCertSubjectDNEnabled',
      XForwardedForClientSourceIpsEnabled: 'XForwardedForClientSourceIpsEnabled',
      XForwardedForClientSourceIpsTrusted: 'XForwardedForClientSourceIpsTrusted',
      XForwardedForClientSrcPortEnabled: 'XForwardedForClientSrcPortEnabled',
      XForwardedForEnabled: 'XForwardedForEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForSLBIdEnabled: 'XForwardedForSLBIdEnabled',
      XForwardedForSLBPortEnabled: 'XForwardedForSLBPortEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForClientCertClientVerifyAlias: 'string',
      XForwardedForClientCertClientVerifyEnabled: 'boolean',
      XForwardedForClientCertFingerprintAlias: 'string',
      XForwardedForClientCertFingerprintEnabled: 'boolean',
      XForwardedForClientCertIssuerDNAlias: 'string',
      XForwardedForClientCertIssuerDNEnabled: 'boolean',
      XForwardedForClientCertSubjectDNAlias: 'string',
      XForwardedForClientCertSubjectDNEnabled: 'boolean',
      XForwardedForClientSourceIpsEnabled: 'boolean',
      XForwardedForClientSourceIpsTrusted: 'string',
      XForwardedForClientSrcPortEnabled: 'boolean',
      XForwardedForEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForSLBIdEnabled: 'boolean',
      XForwardedForSLBPortEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerLogConfigRequestAccessLogTracingConfig extends $tea.Model {
  tracingEnabled?: boolean;
  tracingSample?: number;
  tracingType?: string;
  static names(): { [key: string]: string } {
    return {
      tracingEnabled: 'TracingEnabled',
      tracingSample: 'TracingSample',
      tracingType: 'TracingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tracingEnabled: 'boolean',
      tracingSample: 'number',
      tracingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAddressTypeConfigRequestZoneMappings extends $tea.Model {
  allocationId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAttributeRequestModificationProtectionConfig extends $tea.Model {
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

export class UpdateLoadBalancerZonesRequestZoneMappings extends $tea.Model {
  intranetAddress?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      intranetAddress: 'IntranetAddress',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetAddress: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsCorsConfig extends $tea.Model {
  allowCredentials?: string;
  allowHeaders?: string[];
  allowMethods?: string[];
  allowOrigin?: string[];
  exposeHeaders?: string[];
  maxAge?: number;
  static names(): { [key: string]: string } {
    return {
      allowCredentials: 'AllowCredentials',
      allowHeaders: 'AllowHeaders',
      allowMethods: 'AllowMethods',
      allowOrigin: 'AllowOrigin',
      exposeHeaders: 'ExposeHeaders',
      maxAge: 'MaxAge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCredentials: 'string',
      allowHeaders: { 'type': 'array', 'itemType': 'string' },
      allowMethods: { 'type': 'array', 'itemType': 'string' },
      allowOrigin: { 'type': 'array', 'itemType': 'string' },
      exposeHeaders: { 'type': 'array', 'itemType': 'string' },
      maxAge: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsFixedResponseConfig extends $tea.Model {
  content?: string;
  contentType?: string;
  httpCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      httpCode: 'HttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      httpCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupStickySession extends $tea.Model {
  enabled?: boolean;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsForwardGroupConfig extends $tea.Model {
  serverGroupStickySession?: UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupStickySession;
  serverGroupTuples?: UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig extends $tea.Model {
  coverEnabled?: boolean;
  key?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      coverEnabled: 'CoverEnabled',
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverEnabled: 'boolean',
      key: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsRedirectConfig extends $tea.Model {
  host?: string;
  httpCode?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpCode: 'HttpCode',
      path: 'Path',
      port: 'Port',
      protocol: 'Protocol',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpCode: 'string',
      path: 'string',
      port: 'string',
      protocol: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsRemoveHeaderConfig extends $tea.Model {
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsRewriteConfig extends $tea.Model {
  host?: string;
  path?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      path: 'Path',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      path: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsTrafficLimitConfig extends $tea.Model {
  perIpQps?: number;
  QPS?: number;
  static names(): { [key: string]: string } {
    return {
      perIpQps: 'PerIpQps',
      QPS: 'QPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perIpQps: 'number',
      QPS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig extends $tea.Model {
  serverGroupTuples?: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfig extends $tea.Model {
  mirrorGroupConfig?: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      mirrorGroupConfig: 'MirrorGroupConfig',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mirrorGroupConfig: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig,
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleActions extends $tea.Model {
  corsConfig?: UpdateRuleAttributeRequestRuleActionsCorsConfig;
  fixedResponseConfig?: UpdateRuleAttributeRequestRuleActionsFixedResponseConfig;
  forwardGroupConfig?: UpdateRuleAttributeRequestRuleActionsForwardGroupConfig;
  insertHeaderConfig?: UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig;
  order?: number;
  redirectConfig?: UpdateRuleAttributeRequestRuleActionsRedirectConfig;
  removeHeaderConfig?: UpdateRuleAttributeRequestRuleActionsRemoveHeaderConfig;
  rewriteConfig?: UpdateRuleAttributeRequestRuleActionsRewriteConfig;
  trafficLimitConfig?: UpdateRuleAttributeRequestRuleActionsTrafficLimitConfig;
  trafficMirrorConfig?: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      corsConfig: 'CorsConfig',
      fixedResponseConfig: 'FixedResponseConfig',
      forwardGroupConfig: 'ForwardGroupConfig',
      insertHeaderConfig: 'InsertHeaderConfig',
      order: 'Order',
      redirectConfig: 'RedirectConfig',
      removeHeaderConfig: 'RemoveHeaderConfig',
      rewriteConfig: 'RewriteConfig',
      trafficLimitConfig: 'TrafficLimitConfig',
      trafficMirrorConfig: 'TrafficMirrorConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corsConfig: UpdateRuleAttributeRequestRuleActionsCorsConfig,
      fixedResponseConfig: UpdateRuleAttributeRequestRuleActionsFixedResponseConfig,
      forwardGroupConfig: UpdateRuleAttributeRequestRuleActionsForwardGroupConfig,
      insertHeaderConfig: UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: UpdateRuleAttributeRequestRuleActionsRedirectConfig,
      removeHeaderConfig: UpdateRuleAttributeRequestRuleActionsRemoveHeaderConfig,
      rewriteConfig: UpdateRuleAttributeRequestRuleActionsRewriteConfig,
      trafficLimitConfig: UpdateRuleAttributeRequestRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsCookieConfigValues extends $tea.Model {
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

export class UpdateRuleAttributeRequestRuleConditionsCookieConfig extends $tea.Model {
  values?: UpdateRuleAttributeRequestRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleConditionsCookieConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsHostConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsMethodConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsPathConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues extends $tea.Model {
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

export class UpdateRuleAttributeRequestRuleConditionsQueryStringConfig extends $tea.Model {
  values?: UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsResponseHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsResponseStatusCodeConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditionsSourceIpConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleAttributeRequestRuleConditions extends $tea.Model {
  cookieConfig?: UpdateRuleAttributeRequestRuleConditionsCookieConfig;
  headerConfig?: UpdateRuleAttributeRequestRuleConditionsHeaderConfig;
  hostConfig?: UpdateRuleAttributeRequestRuleConditionsHostConfig;
  methodConfig?: UpdateRuleAttributeRequestRuleConditionsMethodConfig;
  pathConfig?: UpdateRuleAttributeRequestRuleConditionsPathConfig;
  queryStringConfig?: UpdateRuleAttributeRequestRuleConditionsQueryStringConfig;
  responseHeaderConfig?: UpdateRuleAttributeRequestRuleConditionsResponseHeaderConfig;
  responseStatusCodeConfig?: UpdateRuleAttributeRequestRuleConditionsResponseStatusCodeConfig;
  sourceIpConfig?: UpdateRuleAttributeRequestRuleConditionsSourceIpConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cookieConfig: 'CookieConfig',
      headerConfig: 'HeaderConfig',
      hostConfig: 'HostConfig',
      methodConfig: 'MethodConfig',
      pathConfig: 'PathConfig',
      queryStringConfig: 'QueryStringConfig',
      responseHeaderConfig: 'ResponseHeaderConfig',
      responseStatusCodeConfig: 'ResponseStatusCodeConfig',
      sourceIpConfig: 'SourceIpConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieConfig: UpdateRuleAttributeRequestRuleConditionsCookieConfig,
      headerConfig: UpdateRuleAttributeRequestRuleConditionsHeaderConfig,
      hostConfig: UpdateRuleAttributeRequestRuleConditionsHostConfig,
      methodConfig: UpdateRuleAttributeRequestRuleConditionsMethodConfig,
      pathConfig: UpdateRuleAttributeRequestRuleConditionsPathConfig,
      queryStringConfig: UpdateRuleAttributeRequestRuleConditionsQueryStringConfig,
      responseHeaderConfig: UpdateRuleAttributeRequestRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: UpdateRuleAttributeRequestRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: UpdateRuleAttributeRequestRuleConditionsSourceIpConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActionsCorsConfig extends $tea.Model {
  allowCredentials?: string;
  allowHeaders?: string[];
  allowMethods?: string[];
  allowOrigin?: string[];
  exposeHeaders?: string[];
  maxAge?: number;
  static names(): { [key: string]: string } {
    return {
      allowCredentials: 'AllowCredentials',
      allowHeaders: 'AllowHeaders',
      allowMethods: 'AllowMethods',
      allowOrigin: 'AllowOrigin',
      exposeHeaders: 'ExposeHeaders',
      maxAge: 'MaxAge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCredentials: 'string',
      allowHeaders: { 'type': 'array', 'itemType': 'string' },
      allowMethods: { 'type': 'array', 'itemType': 'string' },
      allowOrigin: { 'type': 'array', 'itemType': 'string' },
      exposeHeaders: { 'type': 'array', 'itemType': 'string' },
      maxAge: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActionsFixedResponseConfig extends $tea.Model {
  content?: string;
  contentType?: string;
  httpCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      httpCode: 'HttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      httpCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession extends $tea.Model {
  enabled?: boolean;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfig extends $tea.Model {
  serverGroupStickySession?: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession;
  serverGroupTuples?: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActionsInsertHeaderConfig extends $tea.Model {
  coverEnabled?: boolean;
  key?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      coverEnabled: 'CoverEnabled',
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverEnabled: 'boolean',
      key: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActionsRedirectConfig extends $tea.Model {
  host?: string;
  httpCode?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpCode: 'HttpCode',
      path: 'Path',
      port: 'Port',
      protocol: 'Protocol',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpCode: 'string',
      path: 'string',
      port: 'string',
      protocol: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActionsRemoveHeaderConfig extends $tea.Model {
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActionsRewriteConfig extends $tea.Model {
  host?: string;
  path?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      path: 'Path',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      path: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActionsTrafficLimitConfig extends $tea.Model {
  perIpQps?: number;
  QPS?: number;
  static names(): { [key: string]: string } {
    return {
      perIpQps: 'PerIpQps',
      QPS: 'QPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perIpQps: 'number',
      QPS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples extends $tea.Model {
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig extends $tea.Model {
  serverGroupTuples?: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfig extends $tea.Model {
  mirrorGroupConfig?: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      mirrorGroupConfig: 'MirrorGroupConfig',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mirrorGroupConfig: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig,
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleActions extends $tea.Model {
  corsConfig?: UpdateRulesAttributeRequestRulesRuleActionsCorsConfig;
  fixedResponseConfig?: UpdateRulesAttributeRequestRulesRuleActionsFixedResponseConfig;
  forwardGroupConfig?: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfig;
  insertHeaderConfig?: UpdateRulesAttributeRequestRulesRuleActionsInsertHeaderConfig;
  order?: number;
  redirectConfig?: UpdateRulesAttributeRequestRulesRuleActionsRedirectConfig;
  removeHeaderConfig?: UpdateRulesAttributeRequestRulesRuleActionsRemoveHeaderConfig;
  rewriteConfig?: UpdateRulesAttributeRequestRulesRuleActionsRewriteConfig;
  trafficLimitConfig?: UpdateRulesAttributeRequestRulesRuleActionsTrafficLimitConfig;
  trafficMirrorConfig?: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      corsConfig: 'CorsConfig',
      fixedResponseConfig: 'FixedResponseConfig',
      forwardGroupConfig: 'ForwardGroupConfig',
      insertHeaderConfig: 'InsertHeaderConfig',
      order: 'Order',
      redirectConfig: 'RedirectConfig',
      removeHeaderConfig: 'RemoveHeaderConfig',
      rewriteConfig: 'RewriteConfig',
      trafficLimitConfig: 'TrafficLimitConfig',
      trafficMirrorConfig: 'TrafficMirrorConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corsConfig: UpdateRulesAttributeRequestRulesRuleActionsCorsConfig,
      fixedResponseConfig: UpdateRulesAttributeRequestRulesRuleActionsFixedResponseConfig,
      forwardGroupConfig: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfig,
      insertHeaderConfig: UpdateRulesAttributeRequestRulesRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: UpdateRulesAttributeRequestRulesRuleActionsRedirectConfig,
      removeHeaderConfig: UpdateRulesAttributeRequestRulesRuleActionsRemoveHeaderConfig,
      rewriteConfig: UpdateRulesAttributeRequestRulesRuleActionsRewriteConfig,
      trafficLimitConfig: UpdateRulesAttributeRequestRulesRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleConditionsCookieConfigValues extends $tea.Model {
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

export class UpdateRulesAttributeRequestRulesRuleConditionsCookieConfig extends $tea.Model {
  values?: UpdateRulesAttributeRequestRulesRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleConditionsCookieConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleConditionsHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleConditionsHostConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleConditionsMethodConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleConditionsPathConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfigValues extends $tea.Model {
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

export class UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfig extends $tea.Model {
  values?: UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfigValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleConditionsResponseHeaderConfig extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleConditionsResponseStatusCodeConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleConditionsSourceIpConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRulesRuleConditions extends $tea.Model {
  cookieConfig?: UpdateRulesAttributeRequestRulesRuleConditionsCookieConfig;
  headerConfig?: UpdateRulesAttributeRequestRulesRuleConditionsHeaderConfig;
  hostConfig?: UpdateRulesAttributeRequestRulesRuleConditionsHostConfig;
  methodConfig?: UpdateRulesAttributeRequestRulesRuleConditionsMethodConfig;
  pathConfig?: UpdateRulesAttributeRequestRulesRuleConditionsPathConfig;
  queryStringConfig?: UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfig;
  responseHeaderConfig?: UpdateRulesAttributeRequestRulesRuleConditionsResponseHeaderConfig;
  responseStatusCodeConfig?: UpdateRulesAttributeRequestRulesRuleConditionsResponseStatusCodeConfig;
  sourceIpConfig?: UpdateRulesAttributeRequestRulesRuleConditionsSourceIpConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cookieConfig: 'CookieConfig',
      headerConfig: 'HeaderConfig',
      hostConfig: 'HostConfig',
      methodConfig: 'MethodConfig',
      pathConfig: 'PathConfig',
      queryStringConfig: 'QueryStringConfig',
      responseHeaderConfig: 'ResponseHeaderConfig',
      responseStatusCodeConfig: 'ResponseStatusCodeConfig',
      sourceIpConfig: 'SourceIpConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieConfig: UpdateRulesAttributeRequestRulesRuleConditionsCookieConfig,
      headerConfig: UpdateRulesAttributeRequestRulesRuleConditionsHeaderConfig,
      hostConfig: UpdateRulesAttributeRequestRulesRuleConditionsHostConfig,
      methodConfig: UpdateRulesAttributeRequestRulesRuleConditionsMethodConfig,
      pathConfig: UpdateRulesAttributeRequestRulesRuleConditionsPathConfig,
      queryStringConfig: UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfig,
      responseHeaderConfig: UpdateRulesAttributeRequestRulesRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: UpdateRulesAttributeRequestRulesRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: UpdateRulesAttributeRequestRulesRuleConditionsSourceIpConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRulesAttributeRequestRules extends $tea.Model {
  priority?: number;
  ruleActions?: UpdateRulesAttributeRequestRulesRuleActions[];
  ruleConditions?: UpdateRulesAttributeRequestRulesRuleConditions[];
  ruleId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleConditions },
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeRequestHealthCheckConfig extends $tea.Model {
  healthCheckCodes?: string[];
  healthCheckConnectPort?: number;
  healthCheckEnabled?: boolean;
  healthCheckHost?: string;
  healthCheckHttpVersion?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckPath?: string;
  healthCheckProtocol?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHost: 'HealthCheckHost',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckConnectPort: 'number',
      healthCheckEnabled: 'boolean',
      healthCheckHost: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeRequestStickySessionConfig extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  stickySessionEnabled?: boolean;
  stickySessionType?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      stickySessionEnabled: 'StickySessionEnabled',
      stickySessionType: 'StickySessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      stickySessionEnabled: 'boolean',
      stickySessionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeRequestUchConfig extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
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
    this._endpoint = this.getEndpoint("alb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
    * *   Each ACL can contain IP addresses or CIDR blocks. Take note of the following limits on ACLs:
    *     *   The maximum number of IP entries that can be added to an ACL with each Alibaba Cloud account at a time: 20
    *     *   The maximum number of IP entries that each ACL can contain: 1,000
    * *   **AddEntriesToAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAclEntries](~~213616~~) operation to query the status of the task.
    *     *   If the ACL is in the **Adding** state, the IP entries are being added.
    *     *   If the ACL is in the **Available** state, the IP entries are added.
    *
    * @param request AddEntriesToAclRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddEntriesToAclResponse
   */
  async addEntriesToAclWithOptions(request: AddEntriesToAclRequest, runtime: $Util.RuntimeOptions): Promise<AddEntriesToAclResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclEntries)) {
      query["AclEntries"] = request.aclEntries;
    }

    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddEntriesToAcl",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddEntriesToAclResponse>(await this.callApi(params, req, runtime), new AddEntriesToAclResponse({}));
  }

  /**
    * *   Each ACL can contain IP addresses or CIDR blocks. Take note of the following limits on ACLs:
    *     *   The maximum number of IP entries that can be added to an ACL with each Alibaba Cloud account at a time: 20
    *     *   The maximum number of IP entries that each ACL can contain: 1,000
    * *   **AddEntriesToAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAclEntries](~~213616~~) operation to query the status of the task.
    *     *   If the ACL is in the **Adding** state, the IP entries are being added.
    *     *   If the ACL is in the **Available** state, the IP entries are added.
    *
    * @param request AddEntriesToAclRequest
    * @return AddEntriesToAclResponse
   */
  async addEntriesToAcl(request: AddEntriesToAclRequest): Promise<AddEntriesToAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEntriesToAclWithOptions(request, runtime);
  }

  /**
    * **AddServersToServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
    * 1.  You can call the [ListServerGroups](~~213627~~) operation to query the status of a server group.
    * *   If a server group is in the **Configuring** state, it indicates that the server group is being modified.
    * *   If a server group is in the **Available** state, it indicates that the server group is running.
    * 2.  You can call the [ListServerGroupServers](~~213628~~) operation to query the status of a backend server.
    * *   If a backend server is in the **Adding** state, it indicates that the backend server is being added to a server group.
    * *   If a backend server is in the **Available** state, it indicates that the server is running.
    *
    * @param request AddServersToServerGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddServersToServerGroupResponse
   */
  async addServersToServerGroupWithOptions(request: AddServersToServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddServersToServerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.servers)) {
      query["Servers"] = request.servers;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddServersToServerGroup",
      version: "2020-06-16",
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

  /**
    * **AddServersToServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
    * 1.  You can call the [ListServerGroups](~~213627~~) operation to query the status of a server group.
    * *   If a server group is in the **Configuring** state, it indicates that the server group is being modified.
    * *   If a server group is in the **Available** state, it indicates that the server group is running.
    * 2.  You can call the [ListServerGroupServers](~~213628~~) operation to query the status of a backend server.
    * *   If a backend server is in the **Adding** state, it indicates that the backend server is being added to a server group.
    * *   If a backend server is in the **Available** state, it indicates that the server is running.
    *
    * @param request AddServersToServerGroupRequest
    * @return AddServersToServerGroupResponse
   */
  async addServersToServerGroup(request: AddServersToServerGroupRequest): Promise<AddServersToServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addServersToServerGroupWithOptions(request, runtime);
  }

  async applyHealthCheckTemplateToServerGroupWithOptions(request: ApplyHealthCheckTemplateToServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<ApplyHealthCheckTemplateToServerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.healthCheckTemplateId)) {
      query["HealthCheckTemplateId"] = request.healthCheckTemplateId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyHealthCheckTemplateToServerGroup",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyHealthCheckTemplateToServerGroupResponse>(await this.callApi(params, req, runtime), new ApplyHealthCheckTemplateToServerGroupResponse({}));
  }

  async applyHealthCheckTemplateToServerGroup(request: ApplyHealthCheckTemplateToServerGroupRequest): Promise<ApplyHealthCheckTemplateToServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyHealthCheckTemplateToServerGroupWithOptions(request, runtime);
  }

  /**
    * **DeleteDhcpOptionsSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAclRelations](~~213618~~) operation to query the status of the task.
    * *   If an ACL is in the **Associating** state, the ACL is being associated with a listener.
    * *   If an ACL is in the **Associated** state, the ACL is associated with a listener.
    *
    * @param request AssociateAclsWithListenerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AssociateAclsWithListenerResponse
   */
  async associateAclsWithListenerWithOptions(request: AssociateAclsWithListenerRequest, runtime: $Util.RuntimeOptions): Promise<AssociateAclsWithListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateAclsWithListener",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateAclsWithListenerResponse>(await this.callApi(params, req, runtime), new AssociateAclsWithListenerResponse({}));
  }

  /**
    * **DeleteDhcpOptionsSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAclRelations](~~213618~~) operation to query the status of the task.
    * *   If an ACL is in the **Associating** state, the ACL is being associated with a listener.
    * *   If an ACL is in the **Associated** state, the ACL is associated with a listener.
    *
    * @param request AssociateAclsWithListenerRequest
    * @return AssociateAclsWithListenerResponse
   */
  async associateAclsWithListener(request: AssociateAclsWithListenerRequest): Promise<AssociateAclsWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAclsWithListenerWithOptions(request, runtime);
  }

  /**
    * **AssociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetListenerAttribute](~~2254865~~) operation to query the status of the task:
    * *   If the HTTPS or QUIC listener is in the **Associating** state, the additional certificates are being associated.
    * *   If the HTTPS or QUIC listener is in the **Associated** state, the additional certificates are associated.
    *
    * @param request AssociateAdditionalCertificatesWithListenerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListenerWithOptions(request: AssociateAdditionalCertificatesWithListenerRequest, runtime: $Util.RuntimeOptions): Promise<AssociateAdditionalCertificatesWithListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateAdditionalCertificatesWithListener",
      version: "2020-06-16",
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
    * **AssociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetListenerAttribute](~~2254865~~) operation to query the status of the task:
    * *   If the HTTPS or QUIC listener is in the **Associating** state, the additional certificates are being associated.
    * *   If the HTTPS or QUIC listener is in the **Associated** state, the additional certificates are associated.
    *
    * @param request AssociateAdditionalCertificatesWithListenerRequest
    * @return AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListener(request: AssociateAdditionalCertificatesWithListenerRequest): Promise<AssociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  /**
    * **AttachCommonBandwidthPackageToLoadBalancer** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetLoadBalancerAttribute](~~214362~~) to query the status of the task.
    * *   If the ALB instance is in the **Configuring** state, the EIP bandwidth plan is being associated with the ALB instance.
    * *   If the ALB instance is in the **Active** state, the EIP bandwidth plan is associated with the ALB instance.
    *
    * @param request AttachCommonBandwidthPackageToLoadBalancerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AttachCommonBandwidthPackageToLoadBalancerResponse
   */
  async attachCommonBandwidthPackageToLoadBalancerWithOptions(request: AttachCommonBandwidthPackageToLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<AttachCommonBandwidthPackageToLoadBalancerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

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
      action: "AttachCommonBandwidthPackageToLoadBalancer",
      version: "2020-06-16",
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

  /**
    * **AttachCommonBandwidthPackageToLoadBalancer** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetLoadBalancerAttribute](~~214362~~) to query the status of the task.
    * *   If the ALB instance is in the **Configuring** state, the EIP bandwidth plan is being associated with the ALB instance.
    * *   If the ALB instance is in the **Active** state, the EIP bandwidth plan is associated with the ALB instance.
    *
    * @param request AttachCommonBandwidthPackageToLoadBalancerRequest
    * @return AttachCommonBandwidthPackageToLoadBalancerResponse
   */
  async attachCommonBandwidthPackageToLoadBalancer(request: AttachCommonBandwidthPackageToLoadBalancerRequest): Promise<AttachCommonBandwidthPackageToLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachCommonBandwidthPackageToLoadBalancerWithOptions(request, runtime);
  }

  /**
    * This operation is supported only by Application Load Balancer (ALB) instances that use static IP addresses. Before you call this operation, you must call the StartShiftLoadBalancerZones operation to remove the zone from the ALB instance.
    *
    * @param request CancelShiftLoadBalancerZonesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CancelShiftLoadBalancerZonesResponse
   */
  async cancelShiftLoadBalancerZonesWithOptions(request: CancelShiftLoadBalancerZonesRequest, runtime: $Util.RuntimeOptions): Promise<CancelShiftLoadBalancerZonesResponse> {
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

    if (!Util.isUnset(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelShiftLoadBalancerZones",
      version: "2020-06-16",
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
    * This operation is supported only by Application Load Balancer (ALB) instances that use static IP addresses. Before you call this operation, you must call the StartShiftLoadBalancerZones operation to remove the zone from the ALB instance.
    *
    * @param request CancelShiftLoadBalancerZonesRequest
    * @return CancelShiftLoadBalancerZonesResponse
   */
  async cancelShiftLoadBalancerZones(request: CancelShiftLoadBalancerZonesRequest): Promise<CancelShiftLoadBalancerZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelShiftLoadBalancerZonesWithOptions(request, runtime);
  }

  /**
    * ### Prerequisites
    * *   A standard or WAF-enabled Application Load Balancer (ALB) instance is created. For more information, see [CreateLoadBalancer](~~214358~~).
    * *   By default, the feature to create and manage AScript rules is unavailable. Log on to the [Quota Center console](https://quotas.console.aliyun.com/white-list-products/alb/quotas?spm=a2c4g.11186623.0.0.6e8834f6IFiF2I). On the **Privileges** page, enter the quota ID `slb_user_visible_gray_label/ascript` and apply for the quota.
    * ### Usage notes
    * *   **CreateAScripts** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAScripts](~~472574~~) operation to query the status of the task:
    *     *   If an AScript rule is in the **Creating** state, the AScript rule is being created.
    *     *   If an AScript rule is in the **Available** state, the AScript rule is created.
    * *   In the following table, the value of **N** is **1**.
    *
    * @param request CreateAScriptsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateAScriptsResponse
   */
  async createAScriptsWithOptions(request: CreateAScriptsRequest, runtime: $Util.RuntimeOptions): Promise<CreateAScriptsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.AScripts)) {
      query["AScripts"] = request.AScripts;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAScripts",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAScriptsResponse>(await this.callApi(params, req, runtime), new CreateAScriptsResponse({}));
  }

  /**
    * ### Prerequisites
    * *   A standard or WAF-enabled Application Load Balancer (ALB) instance is created. For more information, see [CreateLoadBalancer](~~214358~~).
    * *   By default, the feature to create and manage AScript rules is unavailable. Log on to the [Quota Center console](https://quotas.console.aliyun.com/white-list-products/alb/quotas?spm=a2c4g.11186623.0.0.6e8834f6IFiF2I). On the **Privileges** page, enter the quota ID `slb_user_visible_gray_label/ascript` and apply for the quota.
    * ### Usage notes
    * *   **CreateAScripts** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAScripts](~~472574~~) operation to query the status of the task:
    *     *   If an AScript rule is in the **Creating** state, the AScript rule is being created.
    *     *   If an AScript rule is in the **Available** state, the AScript rule is created.
    * *   In the following table, the value of **N** is **1**.
    *
    * @param request CreateAScriptsRequest
    * @return CreateAScriptsResponse
   */
  async createAScripts(request: CreateAScriptsRequest): Promise<CreateAScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAScriptsWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * The **CreateAcl** operation is asynchronous. After you send a request, the system returns a request ID. However, the operation is still being performed in the system background. You can call the [ListAcls](~~213617~~) operation to query the status of an ACL:
    * *   If an ACL is in the **Creating** state, the ACL is being created.
    * *   If an ACL is in the **Available** state, the ACL is created.
    *
    * @param request CreateAclRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateAclResponse
   */
  async createAclWithOptions(request: CreateAclRequest, runtime: $Util.RuntimeOptions): Promise<CreateAclResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAcl",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAclResponse>(await this.callApi(params, req, runtime), new CreateAclResponse({}));
  }

  /**
    * ## Usage notes
    * The **CreateAcl** operation is asynchronous. After you send a request, the system returns a request ID. However, the operation is still being performed in the system background. You can call the [ListAcls](~~213617~~) operation to query the status of an ACL:
    * *   If an ACL is in the **Creating** state, the ACL is being created.
    * *   If an ACL is in the **Available** state, the ACL is created.
    *
    * @param request CreateAclRequest
    * @return CreateAclResponse
   */
  async createAcl(request: CreateAclRequest): Promise<CreateAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAclWithOptions(request, runtime);
  }

  async createHealthCheckTemplateWithOptions(request: CreateHealthCheckTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateHealthCheckTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.healthCheckCodes)) {
      query["HealthCheckCodes"] = request.healthCheckCodes;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckHost)) {
      query["HealthCheckHost"] = request.healthCheckHost;
    }

    if (!Util.isUnset(request.healthCheckHttpVersion)) {
      query["HealthCheckHttpVersion"] = request.healthCheckHttpVersion;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckPath)) {
      query["HealthCheckPath"] = request.healthCheckPath;
    }

    if (!Util.isUnset(request.healthCheckProtocol)) {
      query["HealthCheckProtocol"] = request.healthCheckProtocol;
    }

    if (!Util.isUnset(request.healthCheckTemplateName)) {
      query["HealthCheckTemplateName"] = request.healthCheckTemplateName;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHealthCheckTemplate",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHealthCheckTemplateResponse>(await this.callApi(params, req, runtime), new CreateHealthCheckTemplateResponse({}));
  }

  async createHealthCheckTemplate(request: CreateHealthCheckTemplateRequest): Promise<CreateHealthCheckTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHealthCheckTemplateWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * **CreateListener** is an asynchronous operation. After you call this operation, the system returns a request ID. However, the operation is still being performed in the background. You can call the [GetListenerAttribute](~~214353~~) operation to query the status of the HTTP, HTTPS, or QUIC listener.
    * *   If the HTTP, HTTPS, or QUIC listener is in the **Provisioning** state, it indicates that the listener is being created.
    * *   If the HTTP, HTTPS, or QUIC listener is in the **Running** state, it indicates that the listener has been created successfully.
    *
    * @param request CreateListenerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateListenerResponse
   */
  async createListenerWithOptions(request: CreateListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caCertificates)) {
      query["CaCertificates"] = request.caCertificates;
    }

    if (!Util.isUnset(request.caEnabled)) {
      query["CaEnabled"] = request.caEnabled;
    }

    if (!Util.isUnset(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.defaultActions)) {
      query["DefaultActions"] = request.defaultActions;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.gzipEnabled)) {
      query["GzipEnabled"] = request.gzipEnabled;
    }

    if (!Util.isUnset(request.http2Enabled)) {
      query["Http2Enabled"] = request.http2Enabled;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerDescription)) {
      query["ListenerDescription"] = request.listenerDescription;
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

    if (!Util.isUnset(request.quicConfig)) {
      query["QuicConfig"] = request.quicConfig;
    }

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.XForwardedForConfig)) {
      query["XForwardedForConfig"] = request.XForwardedForConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateListener",
      version: "2020-06-16",
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

  /**
    * ## Usage notes
    * **CreateListener** is an asynchronous operation. After you call this operation, the system returns a request ID. However, the operation is still being performed in the background. You can call the [GetListenerAttribute](~~214353~~) operation to query the status of the HTTP, HTTPS, or QUIC listener.
    * *   If the HTTP, HTTPS, or QUIC listener is in the **Provisioning** state, it indicates that the listener is being created.
    * *   If the HTTP, HTTPS, or QUIC listener is in the **Running** state, it indicates that the listener has been created successfully.
    *
    * @param request CreateListenerRequest
    * @return CreateListenerResponse
   */
  async createListener(request: CreateListenerRequest): Promise<CreateListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createListenerWithOptions(request, runtime);
  }

  /**
    * **CreateLoadBalancer** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](~~214362~~) operation to query the status of an ALB instance.
    * *   If an ALB instance is in the **Provisioning** state, it indicates that the ALB instance is being created.
    * *   If an ALB instance is in the **Active** state, it indicates that the ALB instance is created.
    *
    * @param request CreateLoadBalancerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateLoadBalancerResponse
   */
  async createLoadBalancerWithOptions(request: CreateLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressAllocatedMode)) {
      query["AddressAllocatedMode"] = request.addressAllocatedMode;
    }

    if (!Util.isUnset(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deletionProtectionEnabled)) {
      query["DeletionProtectionEnabled"] = request.deletionProtectionEnabled;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerBillingConfig)) {
      query["LoadBalancerBillingConfig"] = request.loadBalancerBillingConfig;
    }

    if (!Util.isUnset(request.loadBalancerEdition)) {
      query["LoadBalancerEdition"] = request.loadBalancerEdition;
    }

    if (!Util.isUnset(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!Util.isUnset(request.modificationProtectionConfig)) {
      query["ModificationProtectionConfig"] = request.modificationProtectionConfig;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancer",
      version: "2020-06-16",
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
    * **CreateLoadBalancer** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](~~214362~~) operation to query the status of an ALB instance.
    * *   If an ALB instance is in the **Provisioning** state, it indicates that the ALB instance is being created.
    * *   If an ALB instance is in the **Active** state, it indicates that the ALB instance is created.
    *
    * @param request CreateLoadBalancerRequest
    * @return CreateLoadBalancerResponse
   */
  async createLoadBalancer(request: CreateLoadBalancerRequest): Promise<CreateLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  /**
    * Take note of the following limits:
    * *   When you configure the **Redirect** action, you can use the default value only for the **HttpCode** parameter. Do not use the default values for the other parameters.
    * *   If you specify the **Rewrite** action together with other actions in a forwarding rule, make sure that the **ForwardGroup** action is specified.
    * *   **CreateRule** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](~~214379~~) operation to query the status of a forwarding rule.
    *     *   If a forwarding rule is in the **Provisioning** state, the forwarding rule is being created.
    *     *   If a forwarding rule is in the **Available** state, the forwarding rule is created.
    * *   You can set **RuleConditions** and **RuleActions** to add conditions and actions to a forwarding rule. The limits on conditions and actions are:
    *     *   Limits on conditions: 5 for a basic Application Load Balancer (ALB) instance, 10 for a standard ALB instance, and 10 for a WAF-enabled ALB instance.
    *     *   Limits on actions: 3 for a basic ALB instance, 5 for a standard ALB instance, and 5 for a WAF-enabled ALB instance.
    *
    * @param request CreateRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateRuleResponse
   */
  async createRuleWithOptions(request: CreateRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.ruleActions)) {
      query["RuleActions"] = request.ruleActions;
    }

    if (!Util.isUnset(request.ruleConditions)) {
      query["RuleConditions"] = request.ruleConditions;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRule",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRuleResponse>(await this.callApi(params, req, runtime), new CreateRuleResponse({}));
  }

  /**
    * Take note of the following limits:
    * *   When you configure the **Redirect** action, you can use the default value only for the **HttpCode** parameter. Do not use the default values for the other parameters.
    * *   If you specify the **Rewrite** action together with other actions in a forwarding rule, make sure that the **ForwardGroup** action is specified.
    * *   **CreateRule** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](~~214379~~) operation to query the status of a forwarding rule.
    *     *   If a forwarding rule is in the **Provisioning** state, the forwarding rule is being created.
    *     *   If a forwarding rule is in the **Available** state, the forwarding rule is created.
    * *   You can set **RuleConditions** and **RuleActions** to add conditions and actions to a forwarding rule. The limits on conditions and actions are:
    *     *   Limits on conditions: 5 for a basic Application Load Balancer (ALB) instance, 10 for a standard ALB instance, and 10 for a WAF-enabled ALB instance.
    *     *   Limits on actions: 3 for a basic ALB instance, 5 for a standard ALB instance, and 5 for a WAF-enabled ALB instance.
    *
    * @param request CreateRuleRequest
    * @return CreateRuleResponse
   */
  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  /**
    * When you call this operation, take note of the following limits:
    * *   When you configure the **Redirect** action, you can use the default value for the **HttpCode** parameter but you cannot use the default values for all of the other parameters.
    * *   If you specify the **Rewrite** action and other actions in a forwarding rule, make sure that one of the actions is **ForwardGroup**.
    * *   **CreateRules** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](~~214379~~) operation to query the status of forwarding rules.
    *     *   If forwarding rules are in the **Provisioning** state, the forwarding rules are being created.
    *     *   If forwarding rules are in the **Available** state, the forwarding rules have been created.
    * *   You can set **RuleConditions** and **RuleActions** to add conditions and actions to a forwarding rule. Take note of the following limits on the number of conditions and the number of actions in each forwarding rule:
    *     *   Limits on conditions: You can specify at most 5 conditions if you use a basic Application Load Balancer (ALB) instance, at most 10 conditions if you use a standard ALB instance, and at most 10 conditions if you use a WAF-enabled ALB instance.
    *     *   Limits on actions: You can specify at most 3 actions if you use a basic ALB instance, at most 5 actions if you use a standard ALB instance, and at most 10 actions if you use a WAF-enabled ALB instance.
    *
    * @param request CreateRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateRulesResponse
   */
  async createRulesWithOptions(request: CreateRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateRulesResponse> {
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

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRules",
      version: "2020-06-16",
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

  /**
    * When you call this operation, take note of the following limits:
    * *   When you configure the **Redirect** action, you can use the default value for the **HttpCode** parameter but you cannot use the default values for all of the other parameters.
    * *   If you specify the **Rewrite** action and other actions in a forwarding rule, make sure that one of the actions is **ForwardGroup**.
    * *   **CreateRules** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](~~214379~~) operation to query the status of forwarding rules.
    *     *   If forwarding rules are in the **Provisioning** state, the forwarding rules are being created.
    *     *   If forwarding rules are in the **Available** state, the forwarding rules have been created.
    * *   You can set **RuleConditions** and **RuleActions** to add conditions and actions to a forwarding rule. Take note of the following limits on the number of conditions and the number of actions in each forwarding rule:
    *     *   Limits on conditions: You can specify at most 5 conditions if you use a basic Application Load Balancer (ALB) instance, at most 10 conditions if you use a standard ALB instance, and at most 10 conditions if you use a WAF-enabled ALB instance.
    *     *   Limits on actions: You can specify at most 3 actions if you use a basic ALB instance, at most 5 actions if you use a standard ALB instance, and at most 10 actions if you use a WAF-enabled ALB instance.
    *
    * @param request CreateRulesRequest
    * @return CreateRulesResponse
   */
  async createRules(request: CreateRulesRequest): Promise<CreateRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRulesWithOptions(request, runtime);
  }

  async createSecurityPolicyWithOptions(request: CreateSecurityPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecurityPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ciphers)) {
      query["Ciphers"] = request.ciphers;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityPolicyName)) {
      query["SecurityPolicyName"] = request.securityPolicyName;
    }

    if (!Util.isUnset(request.TLSVersions)) {
      query["TLSVersions"] = request.TLSVersions;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecurityPolicy",
      version: "2020-06-16",
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
    * **CreateServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [ListServerGroups](~~213627~~) to query the status of a server group.
    * *   If a server group is in the **Creating** state, it indicates that the server group is being created.
    * *   If a server group is in the **Available** state, it indicates that the server group is created.
    *
    * @param request CreateServerGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateServerGroupResponse
   */
  async createServerGroupWithOptions(request: CreateServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateServerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.healthCheckConfig)) {
      query["HealthCheckConfig"] = request.healthCheckConfig;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.serverGroupName)) {
      query["ServerGroupName"] = request.serverGroupName;
    }

    if (!Util.isUnset(request.serverGroupType)) {
      query["ServerGroupType"] = request.serverGroupType;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.stickySessionConfig)) {
      query["StickySessionConfig"] = request.stickySessionConfig;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.uchConfig)) {
      query["UchConfig"] = request.uchConfig;
    }

    if (!Util.isUnset(request.upstreamKeepaliveEnabled)) {
      query["UpstreamKeepaliveEnabled"] = request.upstreamKeepaliveEnabled;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateServerGroup",
      version: "2020-06-16",
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
    * **CreateServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [ListServerGroups](~~213627~~) to query the status of a server group.
    * *   If a server group is in the **Creating** state, it indicates that the server group is being created.
    * *   If a server group is in the **Available** state, it indicates that the server group is created.
    *
    * @param request CreateServerGroupRequest
    * @return CreateServerGroupResponse
   */
  async createServerGroup(request: CreateServerGroupRequest): Promise<CreateServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServerGroupWithOptions(request, runtime);
  }

  /**
    * **DeleteAScripts** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAScripts](~~472574~~) operation to query the status of the task:
    * *   If an AScript rule is in the **Deleting** state, the AScript rule is being deleted.
    * *   If an AScript rule cannot be found, the AScript rule is deleted.
    *
    * @param request DeleteAScriptsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteAScriptsResponse
   */
  async deleteAScriptsWithOptions(request: DeleteAScriptsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAScriptsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.AScriptIds)) {
      query["AScriptIds"] = request.AScriptIds;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAScripts",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAScriptsResponse>(await this.callApi(params, req, runtime), new DeleteAScriptsResponse({}));
  }

  /**
    * **DeleteAScripts** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAScripts](~~472574~~) operation to query the status of the task:
    * *   If an AScript rule is in the **Deleting** state, the AScript rule is being deleted.
    * *   If an AScript rule cannot be found, the AScript rule is deleted.
    *
    * @param request DeleteAScriptsRequest
    * @return DeleteAScriptsResponse
   */
  async deleteAScripts(request: DeleteAScriptsRequest): Promise<DeleteAScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAScriptsWithOptions(request, runtime);
  }

  /**
    * **DeleteAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAcls](~~213617~~) operation to query the status of the task.
    * *   If the ACL is in the **Deleting** state, the ACL is being deleted.
    * *   If the ACL cannot be found, the ACL is deleted.
    *
    * @param request DeleteAclRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteAclResponse
   */
  async deleteAclWithOptions(request: DeleteAclRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAclResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAcl",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAclResponse>(await this.callApi(params, req, runtime), new DeleteAclResponse({}));
  }

  /**
    * **DeleteAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAcls](~~213617~~) operation to query the status of the task.
    * *   If the ACL is in the **Deleting** state, the ACL is being deleted.
    * *   If the ACL cannot be found, the ACL is deleted.
    *
    * @param request DeleteAclRequest
    * @return DeleteAclResponse
   */
  async deleteAcl(request: DeleteAclRequest): Promise<DeleteAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAclWithOptions(request, runtime);
  }

  async deleteHealthCheckTemplatesWithOptions(request: DeleteHealthCheckTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHealthCheckTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.healthCheckTemplateIds)) {
      query["HealthCheckTemplateIds"] = request.healthCheckTemplateIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHealthCheckTemplates",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHealthCheckTemplatesResponse>(await this.callApi(params, req, runtime), new DeleteHealthCheckTemplatesResponse({}));
  }

  async deleteHealthCheckTemplates(request: DeleteHealthCheckTemplatesRequest): Promise<DeleteHealthCheckTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHealthCheckTemplatesWithOptions(request, runtime);
  }

  /**
    * **DeleteListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetListenerAttribute](~~2254865~~) to query the status of the task.
    * *   If the listener is in the **Deleting** state, the listener is being deleted.
    * *   If the listener cannot be found, the listener is deleted.
    *
    * @param request DeleteListenerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteListenerResponse
   */
  async deleteListenerWithOptions(request: DeleteListenerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteListenerResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteListener",
      version: "2020-06-16",
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

  /**
    * **DeleteListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetListenerAttribute](~~2254865~~) to query the status of the task.
    * *   If the listener is in the **Deleting** state, the listener is being deleted.
    * *   If the listener cannot be found, the listener is deleted.
    *
    * @param request DeleteListenerRequest
    * @return DeleteListenerResponse
   */
  async deleteListener(request: DeleteListenerRequest): Promise<DeleteListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteListenerWithOptions(request, runtime);
  }

  /**
    * **DeleteLoadBalancer** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetLoadBalancerAttribute](~~214362~~) to query the status of the task.
    * *   If an ALB instance is in the **Deleting** state, the ALB instance is being deleted.
    * *   If an ALB instance cannot be found, the ALB instance is deleted.
    *
    * @param request DeleteLoadBalancerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteLoadBalancerResponse
   */
  async deleteLoadBalancerWithOptions(request: DeleteLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoadBalancerResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLoadBalancer",
      version: "2020-06-16",
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

  /**
    * **DeleteLoadBalancer** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetLoadBalancerAttribute](~~214362~~) to query the status of the task.
    * *   If an ALB instance is in the **Deleting** state, the ALB instance is being deleted.
    * *   If an ALB instance cannot be found, the ALB instance is deleted.
    *
    * @param request DeleteLoadBalancerRequest
    * @return DeleteLoadBalancerResponse
   */
  async deleteLoadBalancer(request: DeleteLoadBalancerRequest): Promise<DeleteLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoadBalancerWithOptions(request, runtime);
  }

  /**
    * **DeleteRule** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](~~214379~~) operation to query the status of a forwarding rule:
    * *   If the forwarding rule is in the **Deleting** state, the forwarding rule is being deleted.
    * *   If the forwarding rule cannot be found, the forwarding rule is deleted.
    *
    * @param request DeleteRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteRuleResponse
   */
  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRule",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRuleResponse>(await this.callApi(params, req, runtime), new DeleteRuleResponse({}));
  }

  /**
    * **DeleteRule** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](~~214379~~) operation to query the status of a forwarding rule:
    * *   If the forwarding rule is in the **Deleting** state, the forwarding rule is being deleted.
    * *   If the forwarding rule cannot be found, the forwarding rule is deleted.
    *
    * @param request DeleteRuleRequest
    * @return DeleteRuleResponse
   */
  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  /**
    * **DeleteRules** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](~~214379~~) operation to query the status of forwarding rules.
    * *   If the forwarding rules are in the **Deleting** state, the forwarding rules are being deleted.
    * *   If the forwarding rules cannot be found, the forwarding rules are deleted.
    *
    * @param request DeleteRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteRulesResponse
   */
  async deleteRulesWithOptions(request: DeleteRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRules",
      version: "2020-06-16",
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

  /**
    * **DeleteRules** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](~~214379~~) operation to query the status of forwarding rules.
    * *   If the forwarding rules are in the **Deleting** state, the forwarding rules are being deleted.
    * *   If the forwarding rules cannot be found, the forwarding rules are deleted.
    *
    * @param request DeleteRulesRequest
    * @return DeleteRulesResponse
   */
  async deleteRules(request: DeleteRulesRequest): Promise<DeleteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRulesWithOptions(request, runtime);
  }

  async deleteSecurityPolicyWithOptions(request: DeleteSecurityPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecurityPolicy",
      version: "2020-06-16",
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
    * **DeleteServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListServerGroups](~~213627~~) operation to query the status of the task.
    * *   If a server group is in the **Deleting** state, it indicates that the server group is being deleted.
    * *   If a specified server group cannot be found, it indicates that the server group has been deleted.
    *
    * @param request DeleteServerGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteServerGroupResponse
   */
  async deleteServerGroupWithOptions(request: DeleteServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServerGroup",
      version: "2020-06-16",
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
    * **DeleteServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListServerGroups](~~213627~~) operation to query the status of the task.
    * *   If a server group is in the **Deleting** state, it indicates that the server group is being deleted.
    * *   If a specified server group cannot be found, it indicates that the server group has been deleted.
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2020-06-16",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZones",
      version: "2020-06-16",
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

  /**
    * **DetachCommonBandwidthPackageFromLoadBalancer** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](~~214359~~) operation to query the status of the task.
    * *   If an ALB instance is in the **Configuring** state, the EIP bandwidth plan is being disassociated from the ALB instance.
    * *   If an ALB instance is in the **Active** state, the EIP bandwidth plan is disassociated from the ALB instance.
    *
    * @param request DetachCommonBandwidthPackageFromLoadBalancerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DetachCommonBandwidthPackageFromLoadBalancerResponse
   */
  async detachCommonBandwidthPackageFromLoadBalancerWithOptions(request: DetachCommonBandwidthPackageFromLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<DetachCommonBandwidthPackageFromLoadBalancerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

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
      action: "DetachCommonBandwidthPackageFromLoadBalancer",
      version: "2020-06-16",
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

  /**
    * **DetachCommonBandwidthPackageFromLoadBalancer** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](~~214359~~) operation to query the status of the task.
    * *   If an ALB instance is in the **Configuring** state, the EIP bandwidth plan is being disassociated from the ALB instance.
    * *   If an ALB instance is in the **Active** state, the EIP bandwidth plan is disassociated from the ALB instance.
    *
    * @param request DetachCommonBandwidthPackageFromLoadBalancerRequest
    * @return DetachCommonBandwidthPackageFromLoadBalancerResponse
   */
  async detachCommonBandwidthPackageFromLoadBalancer(request: DetachCommonBandwidthPackageFromLoadBalancerRequest): Promise<DetachCommonBandwidthPackageFromLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachCommonBandwidthPackageFromLoadBalancerWithOptions(request, runtime);
  }

  async disableDeletionProtectionWithOptions(request: DisableDeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<DisableDeletionProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableDeletionProtection",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableDeletionProtectionResponse>(await this.callApi(params, req, runtime), new DisableDeletionProtectionResponse({}));
  }

  async disableDeletionProtection(request: DisableDeletionProtectionRequest): Promise<DisableDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDeletionProtectionWithOptions(request, runtime);
  }

  async disableLoadBalancerAccessLogWithOptions(request: DisableLoadBalancerAccessLogRequest, runtime: $Util.RuntimeOptions): Promise<DisableLoadBalancerAccessLogResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableLoadBalancerAccessLog",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableLoadBalancerAccessLogResponse>(await this.callApi(params, req, runtime), new DisableLoadBalancerAccessLogResponse({}));
  }

  async disableLoadBalancerAccessLog(request: DisableLoadBalancerAccessLogRequest): Promise<DisableLoadBalancerAccessLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableLoadBalancerAccessLogWithOptions(request, runtime);
  }

  /**
    * ### Prerequisites
    * An ALB instance is created and IPv4/IPv6 dual stack is enabled for the instance. You can call the [CreateLoadBalancer](~~214358~~) operation and set **AddressIpVersion** to **DualStack** to create a dual-stack ALB instance.
    * > If you set **AddressIpVersion** to **DualStack**:
    * *   If you set **AddressType** to **Internet**, the ALB instance uses a public IPv4 IP address and a private IPv6 address.
    * *   If you set **AddressType** to **Intranet**, the ALB instance uses a private IPv4 IP address and a private IPv6 address.
    * ### Description
    * *   After the DisableLoadBalancerIpv6Internet operation is called, the value of **Ipv6AddressType** is changed to **Intranet** and the type of the IPv6 address of the ALB instance is changed from public to private. If you upgrade the instance or the instance scales elastic network interfaces (ENIs) along with workloads, private IPv6 addresses are automatically enabled for the instance and the new ENIs. You can call the [GetLoadBalancerAttribute](~~214362~~) operation to query the value of **Ipv6AddressType**.
    * *   **DisableLoadBalancerIpv6Internet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](~~214362~~) operation to query the status of the task.
    *     *   If the ALB instance is in the **Configuring** state, the network type of the IPv6 address that is used by the ALB instance is being changed.
    *     *   If the ALB instance is in the **Active** state, the network type of the IPv6 address that is used by the ALB instance is changed.
    *
    * @param request DisableLoadBalancerIpv6InternetRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableLoadBalancerIpv6InternetResponse
   */
  async disableLoadBalancerIpv6InternetWithOptions(request: DisableLoadBalancerIpv6InternetRequest, runtime: $Util.RuntimeOptions): Promise<DisableLoadBalancerIpv6InternetResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableLoadBalancerIpv6Internet",
      version: "2020-06-16",
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

  /**
    * ### Prerequisites
    * An ALB instance is created and IPv4/IPv6 dual stack is enabled for the instance. You can call the [CreateLoadBalancer](~~214358~~) operation and set **AddressIpVersion** to **DualStack** to create a dual-stack ALB instance.
    * > If you set **AddressIpVersion** to **DualStack**:
    * *   If you set **AddressType** to **Internet**, the ALB instance uses a public IPv4 IP address and a private IPv6 address.
    * *   If you set **AddressType** to **Intranet**, the ALB instance uses a private IPv4 IP address and a private IPv6 address.
    * ### Description
    * *   After the DisableLoadBalancerIpv6Internet operation is called, the value of **Ipv6AddressType** is changed to **Intranet** and the type of the IPv6 address of the ALB instance is changed from public to private. If you upgrade the instance or the instance scales elastic network interfaces (ENIs) along with workloads, private IPv6 addresses are automatically enabled for the instance and the new ENIs. You can call the [GetLoadBalancerAttribute](~~214362~~) operation to query the value of **Ipv6AddressType**.
    * *   **DisableLoadBalancerIpv6Internet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](~~214362~~) operation to query the status of the task.
    *     *   If the ALB instance is in the **Configuring** state, the network type of the IPv6 address that is used by the ALB instance is being changed.
    *     *   If the ALB instance is in the **Active** state, the network type of the IPv6 address that is used by the ALB instance is changed.
    *
    * @param request DisableLoadBalancerIpv6InternetRequest
    * @return DisableLoadBalancerIpv6InternetResponse
   */
  async disableLoadBalancerIpv6Internet(request: DisableLoadBalancerIpv6InternetRequest): Promise<DisableLoadBalancerIpv6InternetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableLoadBalancerIpv6InternetWithOptions(request, runtime);
  }

  /**
    * **DeleteDhcpOptionsSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAclRelations](~~213618~~) operation to query the status of the task.
    * *   If an ACL is in the **Dissociating** state, the ACL is being disassociated from the listener.
    * *   If an ACL is in the **Dissociated** state, the ACL is disassociated from the listener.
    *
    * @param request DissociateAclsFromListenerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DissociateAclsFromListenerResponse
   */
  async dissociateAclsFromListenerWithOptions(request: DissociateAclsFromListenerRequest, runtime: $Util.RuntimeOptions): Promise<DissociateAclsFromListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DissociateAclsFromListener",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DissociateAclsFromListenerResponse>(await this.callApi(params, req, runtime), new DissociateAclsFromListenerResponse({}));
  }

  /**
    * **DeleteDhcpOptionsSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAclRelations](~~213618~~) operation to query the status of the task.
    * *   If an ACL is in the **Dissociating** state, the ACL is being disassociated from the listener.
    * *   If an ACL is in the **Dissociated** state, the ACL is disassociated from the listener.
    *
    * @param request DissociateAclsFromListenerRequest
    * @return DissociateAclsFromListenerResponse
   */
  async dissociateAclsFromListener(request: DissociateAclsFromListenerRequest): Promise<DissociateAclsFromListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateAclsFromListenerWithOptions(request, runtime);
  }

  /**
    * **DissociateAdditionalCertificatesFromListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](~~214354~~) operation to query the status of the task. - If an additional certificate is in the **Dissociating** state, the additional certificate is being disassociated. - If an additional certificate is in the **Dissociated** state, the additional certificate is disassociated.
    *
    * @param request DissociateAdditionalCertificatesFromListenerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DissociateAdditionalCertificatesFromListenerResponse
   */
  async dissociateAdditionalCertificatesFromListenerWithOptions(request: DissociateAdditionalCertificatesFromListenerRequest, runtime: $Util.RuntimeOptions): Promise<DissociateAdditionalCertificatesFromListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DissociateAdditionalCertificatesFromListener",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DissociateAdditionalCertificatesFromListenerResponse>(await this.callApi(params, req, runtime), new DissociateAdditionalCertificatesFromListenerResponse({}));
  }

  /**
    * **DissociateAdditionalCertificatesFromListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](~~214354~~) operation to query the status of the task. - If an additional certificate is in the **Dissociating** state, the additional certificate is being disassociated. - If an additional certificate is in the **Dissociated** state, the additional certificate is disassociated.
    *
    * @param request DissociateAdditionalCertificatesFromListenerRequest
    * @return DissociateAdditionalCertificatesFromListenerResponse
   */
  async dissociateAdditionalCertificatesFromListener(request: DissociateAdditionalCertificatesFromListenerRequest): Promise<DissociateAdditionalCertificatesFromListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateAdditionalCertificatesFromListenerWithOptions(request, runtime);
  }

  async enableDeletionProtectionWithOptions(request: EnableDeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<EnableDeletionProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableDeletionProtection",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableDeletionProtectionResponse>(await this.callApi(params, req, runtime), new EnableDeletionProtectionResponse({}));
  }

  async enableDeletionProtection(request: EnableDeletionProtectionRequest): Promise<EnableDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableDeletionProtectionWithOptions(request, runtime);
  }

  async enableLoadBalancerAccessLogWithOptions(request: EnableLoadBalancerAccessLogRequest, runtime: $Util.RuntimeOptions): Promise<EnableLoadBalancerAccessLogResponse> {
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

    if (!Util.isUnset(request.logProject)) {
      query["LogProject"] = request.logProject;
    }

    if (!Util.isUnset(request.logStore)) {
      query["LogStore"] = request.logStore;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableLoadBalancerAccessLog",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableLoadBalancerAccessLogResponse>(await this.callApi(params, req, runtime), new EnableLoadBalancerAccessLogResponse({}));
  }

  async enableLoadBalancerAccessLog(request: EnableLoadBalancerAccessLogRequest): Promise<EnableLoadBalancerAccessLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableLoadBalancerAccessLogWithOptions(request, runtime);
  }

  /**
    * ### Prerequisites
    * An ALB instance is created and IPv4/IPv6 dual stack is enabled for the instance. You can call the [CreateLoadBalancer](~~214358~~) operation and set **AddressIpVersion** to **DualStack** to create a dual-stack ALB instance.
    * > If you set **AddressIpVersion** to **DualStack**:
    * *   If you set **AddressType** to **Internet**, the ALB instance uses a public IPv4 IP address and a private IPv6 address.
    * *   If you set **AddressType** to **Intranet**, the ALB instance uses a private IPv4 IP address and a private IPv6 address.
    * ### Description
    * *   After the EnableLoadBalancerIpv6Internet operation is called, the value of **Ipv6AddressType** is changed to **Internet** and the type of the IPv6 address of the ALB instance is changed from private to public. If you upgrade the instance or the instance scales elastic network interfaces (ENIs) along with workloads, public IPv6 addresses are automatically enabled for the instance and the new ENIs. You can call the [GetLoadBalancerAttribute](~~214362~~) operation to query the value of **Ipv6AddressType**.
    * *   **EnableLoadBalancerIpv6Internet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](~~214362~~) operation to query the status of the task.
    *     *   If the ALB instance is in the **Configuring** state, the network type of the IPv6 address that is used by the ALB instance is being changed.
    *     *   If the ALB instance is in the **Active** state, the network type of the IPv6 address that is used by the ALB instance is changed.
    *
    * @param request EnableLoadBalancerIpv6InternetRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnableLoadBalancerIpv6InternetResponse
   */
  async enableLoadBalancerIpv6InternetWithOptions(request: EnableLoadBalancerIpv6InternetRequest, runtime: $Util.RuntimeOptions): Promise<EnableLoadBalancerIpv6InternetResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableLoadBalancerIpv6Internet",
      version: "2020-06-16",
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

  /**
    * ### Prerequisites
    * An ALB instance is created and IPv4/IPv6 dual stack is enabled for the instance. You can call the [CreateLoadBalancer](~~214358~~) operation and set **AddressIpVersion** to **DualStack** to create a dual-stack ALB instance.
    * > If you set **AddressIpVersion** to **DualStack**:
    * *   If you set **AddressType** to **Internet**, the ALB instance uses a public IPv4 IP address and a private IPv6 address.
    * *   If you set **AddressType** to **Intranet**, the ALB instance uses a private IPv4 IP address and a private IPv6 address.
    * ### Description
    * *   After the EnableLoadBalancerIpv6Internet operation is called, the value of **Ipv6AddressType** is changed to **Internet** and the type of the IPv6 address of the ALB instance is changed from private to public. If you upgrade the instance or the instance scales elastic network interfaces (ENIs) along with workloads, public IPv6 addresses are automatically enabled for the instance and the new ENIs. You can call the [GetLoadBalancerAttribute](~~214362~~) operation to query the value of **Ipv6AddressType**.
    * *   **EnableLoadBalancerIpv6Internet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](~~214362~~) operation to query the status of the task.
    *     *   If the ALB instance is in the **Configuring** state, the network type of the IPv6 address that is used by the ALB instance is being changed.
    *     *   If the ALB instance is in the **Active** state, the network type of the IPv6 address that is used by the ALB instance is changed.
    *
    * @param request EnableLoadBalancerIpv6InternetRequest
    * @return EnableLoadBalancerIpv6InternetResponse
   */
  async enableLoadBalancerIpv6Internet(request: EnableLoadBalancerIpv6InternetRequest): Promise<EnableLoadBalancerIpv6InternetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableLoadBalancerIpv6InternetWithOptions(request, runtime);
  }

  async getHealthCheckTemplateAttributeWithOptions(request: GetHealthCheckTemplateAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetHealthCheckTemplateAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.healthCheckTemplateId)) {
      query["HealthCheckTemplateId"] = request.healthCheckTemplateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHealthCheckTemplateAttribute",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHealthCheckTemplateAttributeResponse>(await this.callApi(params, req, runtime), new GetHealthCheckTemplateAttributeResponse({}));
  }

  async getHealthCheckTemplateAttribute(request: GetHealthCheckTemplateAttributeRequest): Promise<GetHealthCheckTemplateAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHealthCheckTemplateAttributeWithOptions(request, runtime);
  }

  async getListenerAttributeWithOptions(request: GetListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetListenerAttribute",
      version: "2020-06-16",
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
    if (!Util.isUnset(request.includeRule)) {
      query["IncludeRule"] = request.includeRule;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetListenerHealthStatus",
      version: "2020-06-16",
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
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLoadBalancerAttribute",
      version: "2020-06-16",
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

  async listAScriptsWithOptions(request: ListAScriptsRequest, runtime: $Util.RuntimeOptions): Promise<ListAScriptsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.AScriptIds)) {
      query["AScriptIds"] = request.AScriptIds;
    }

    if (!Util.isUnset(request.AScriptNames)) {
      query["AScriptNames"] = request.AScriptNames;
    }

    if (!Util.isUnset(request.listenerIds)) {
      query["ListenerIds"] = request.listenerIds;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAScripts",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAScriptsResponse>(await this.callApi(params, req, runtime), new ListAScriptsResponse({}));
  }

  async listAScripts(request: ListAScriptsRequest): Promise<ListAScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAScriptsWithOptions(request, runtime);
  }

  async listAclEntriesWithOptions(request: ListAclEntriesRequest, runtime: $Util.RuntimeOptions): Promise<ListAclEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAclEntries",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAclEntriesResponse>(await this.callApi(params, req, runtime), new ListAclEntriesResponse({}));
  }

  async listAclEntries(request: ListAclEntriesRequest): Promise<ListAclEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAclEntriesWithOptions(request, runtime);
  }

  async listAclRelationsWithOptions(request: ListAclRelationsRequest, runtime: $Util.RuntimeOptions): Promise<ListAclRelationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAclRelations",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAclRelationsResponse>(await this.callApi(params, req, runtime), new ListAclRelationsResponse({}));
  }

  async listAclRelations(request: ListAclRelationsRequest): Promise<ListAclRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAclRelationsWithOptions(request, runtime);
  }

  async listAclsWithOptions(request: ListAclsRequest, runtime: $Util.RuntimeOptions): Promise<ListAclsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!Util.isUnset(request.aclNames)) {
      query["AclNames"] = request.aclNames;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAcls",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAclsResponse>(await this.callApi(params, req, runtime), new ListAclsResponse({}));
  }

  async listAcls(request: ListAclsRequest): Promise<ListAclsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAclsWithOptions(request, runtime);
  }

  async listAsynJobsWithOptions(request: ListAsynJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListAsynJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAsynJobs",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAsynJobsResponse>(await this.callApi(params, req, runtime), new ListAsynJobsResponse({}));
  }

  async listAsynJobs(request: ListAsynJobsRequest): Promise<ListAsynJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAsynJobsWithOptions(request, runtime);
  }

  async listHealthCheckTemplatesWithOptions(request: ListHealthCheckTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListHealthCheckTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.healthCheckTemplateIds)) {
      query["HealthCheckTemplateIds"] = request.healthCheckTemplateIds;
    }

    if (!Util.isUnset(request.healthCheckTemplateNames)) {
      query["HealthCheckTemplateNames"] = request.healthCheckTemplateNames;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHealthCheckTemplates",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHealthCheckTemplatesResponse>(await this.callApi(params, req, runtime), new ListHealthCheckTemplatesResponse({}));
  }

  async listHealthCheckTemplates(request: ListHealthCheckTemplatesRequest): Promise<ListHealthCheckTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHealthCheckTemplatesWithOptions(request, runtime);
  }

  async listListenerCertificatesWithOptions(request: ListListenerCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<ListListenerCertificatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateType)) {
      query["CertificateType"] = request.certificateType;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListListenerCertificates",
      version: "2020-06-16",
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListListeners",
      version: "2020-06-16",
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

    if (!Util.isUnset(request.loadBalancerBussinessStatus)) {
      query["LoadBalancerBussinessStatus"] = request.loadBalancerBussinessStatus;
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

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
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
      version: "2020-06-16",
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

  async listRulesWithOptions(request: ListRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.listenerIds)) {
      query["ListenerIds"] = request.listenerIds;
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

    if (!Util.isUnset(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRules",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRulesResponse>(await this.callApi(params, req, runtime), new ListRulesResponse({}));
  }

  async listRules(request: ListRulesRequest): Promise<ListRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  async listSecurityPoliciesWithOptions(request: ListSecurityPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListSecurityPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityPolicyIds)) {
      query["SecurityPolicyIds"] = request.securityPolicyIds;
    }

    if (!Util.isUnset(request.securityPolicyNames)) {
      query["SecurityPolicyNames"] = request.securityPolicyNames;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecurityPolicies",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSecurityPoliciesResponse>(await this.callApi(params, req, runtime), new ListSecurityPoliciesResponse({}));
  }

  async listSecurityPolicies(request: ListSecurityPoliciesRequest): Promise<ListSecurityPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecurityPoliciesWithOptions(request, runtime);
  }

  async listSecurityPolicyRelationsWithOptions(request: ListSecurityPolicyRelationsRequest, runtime: $Util.RuntimeOptions): Promise<ListSecurityPolicyRelationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityPolicyIds)) {
      query["SecurityPolicyIds"] = request.securityPolicyIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecurityPolicyRelations",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSecurityPolicyRelationsResponse>(await this.callApi(params, req, runtime), new ListSecurityPolicyRelationsResponse({}));
  }

  async listSecurityPolicyRelations(request: ListSecurityPolicyRelationsRequest): Promise<ListSecurityPolicyRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecurityPolicyRelationsWithOptions(request, runtime);
  }

  async listServerGroupServersWithOptions(request: ListServerGroupServersRequest, runtime: $Util.RuntimeOptions): Promise<ListServerGroupServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.serverIds)) {
      query["ServerIds"] = request.serverIds;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServerGroupServers",
      version: "2020-06-16",
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
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serverGroupIds)) {
      query["ServerGroupIds"] = request.serverGroupIds;
    }

    if (!Util.isUnset(request.serverGroupNames)) {
      query["ServerGroupNames"] = request.serverGroupNames;
    }

    if (!Util.isUnset(request.serverGroupType)) {
      query["ServerGroupType"] = request.serverGroupType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServerGroups",
      version: "2020-06-16",
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

  async listSystemSecurityPoliciesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListSystemSecurityPoliciesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListSystemSecurityPolicies",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSystemSecurityPoliciesResponse>(await this.callApi(params, req, runtime), new ListSystemSecurityPoliciesResponse({}));
  }

  async listSystemSecurityPolicies(): Promise<ListSystemSecurityPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSystemSecurityPoliciesWithOptions(runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagKeys",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2020-06-16",
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

  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      action: "ListTagValues",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
  }

  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2020-06-16",
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

  /**
    * **RemoveEntriesFromAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAclEntries](~~213616~~) operation to query the status of the task.
    * *   If an ACL is in the **Removing** state, the entries are being removed.
    * *   If an ACL cannot be found, the entries are removed.
    *
    * @param request RemoveEntriesFromAclRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveEntriesFromAclResponse
   */
  async removeEntriesFromAclWithOptions(request: RemoveEntriesFromAclRequest, runtime: $Util.RuntimeOptions): Promise<RemoveEntriesFromAclResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.entries)) {
      query["Entries"] = request.entries;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveEntriesFromAcl",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveEntriesFromAclResponse>(await this.callApi(params, req, runtime), new RemoveEntriesFromAclResponse({}));
  }

  /**
    * **RemoveEntriesFromAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAclEntries](~~213616~~) operation to query the status of the task.
    * *   If an ACL is in the **Removing** state, the entries are being removed.
    * *   If an ACL cannot be found, the entries are removed.
    *
    * @param request RemoveEntriesFromAclRequest
    * @return RemoveEntriesFromAclResponse
   */
  async removeEntriesFromAcl(request: RemoveEntriesFromAclRequest): Promise<RemoveEntriesFromAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeEntriesFromAclWithOptions(request, runtime);
  }

  /**
    * **RemoveServersFromServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
    * 1.  You can call the [ListServerGroups](~~213627~~) operation to query the status of a server group.
    *     *   If a server group is in the **Configuring** state, it indicates that the server group is being modified.
    *     *   If a server group is in the **Available** state, it indicates that the server group is running.
    * 2.  You can call the [ListServerGroupServers](~~213628~~) operation to query the status of a backend server.
    *     *   If a backend server is in the **Removing** state, the server is being removed from the server group.
    *     *   If a backend server cannot be found, the server is no longer in the server group.
    *
    * @param request RemoveServersFromServerGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveServersFromServerGroupResponse
   */
  async removeServersFromServerGroupWithOptions(request: RemoveServersFromServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveServersFromServerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.servers)) {
      query["Servers"] = request.servers;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveServersFromServerGroup",
      version: "2020-06-16",
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

  /**
    * **RemoveServersFromServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
    * 1.  You can call the [ListServerGroups](~~213627~~) operation to query the status of a server group.
    *     *   If a server group is in the **Configuring** state, it indicates that the server group is being modified.
    *     *   If a server group is in the **Available** state, it indicates that the server group is running.
    * 2.  You can call the [ListServerGroupServers](~~213628~~) operation to query the status of a backend server.
    *     *   If a backend server is in the **Removing** state, the server is being removed from the server group.
    *     *   If a backend server cannot be found, the server is no longer in the server group.
    *
    * @param request RemoveServersFromServerGroupRequest
    * @return RemoveServersFromServerGroupResponse
   */
  async removeServersFromServerGroup(request: RemoveServersFromServerGroupRequest): Promise<RemoveServersFromServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeServersFromServerGroupWithOptions(request, runtime);
  }

  /**
    * **ReplaceServersInServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
    * 1.  You can call the [ListServerGroups](~~213627~~) operation to query the status of a server group.
    *     *   If a server group is in the **Configuring** state, it indicates that the server group is being modified.
    *     *   If a server group is in the **Available** state, it indicates that the server group is running.
    * 2.  You can call the [ListServerGroupServers](~~213628~~) operation to query the status of a backend server.
    *     *   If a backend server is in the **Replacing** state, it indicates that the server is being removed from the server group and a new server is added to the server group.
    *     *   If a backend server is in the \\*\\*Available\\*\\* state, it indicates that the server is running.
    *
    * @param request ReplaceServersInServerGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ReplaceServersInServerGroupResponse
   */
  async replaceServersInServerGroupWithOptions(request: ReplaceServersInServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceServersInServerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addedServers)) {
      query["AddedServers"] = request.addedServers;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.removedServers)) {
      query["RemovedServers"] = request.removedServers;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReplaceServersInServerGroup",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReplaceServersInServerGroupResponse>(await this.callApi(params, req, runtime), new ReplaceServersInServerGroupResponse({}));
  }

  /**
    * **ReplaceServersInServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
    * 1.  You can call the [ListServerGroups](~~213627~~) operation to query the status of a server group.
    *     *   If a server group is in the **Configuring** state, it indicates that the server group is being modified.
    *     *   If a server group is in the **Available** state, it indicates that the server group is running.
    * 2.  You can call the [ListServerGroupServers](~~213628~~) operation to query the status of a backend server.
    *     *   If a backend server is in the **Replacing** state, it indicates that the server is being removed from the server group and a new server is added to the server group.
    *     *   If a backend server is in the \\*\\*Available\\*\\* state, it indicates that the server is running.
    *
    * @param request ReplaceServersInServerGroupRequest
    * @return ReplaceServersInServerGroupResponse
   */
  async replaceServersInServerGroup(request: ReplaceServersInServerGroupRequest): Promise<ReplaceServersInServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceServersInServerGroupWithOptions(request, runtime);
  }

  /**
    * **StartListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetListenerAttribute](~~2254865~~) to query the status of the task.
    * *   If a listener is in the **Configuring** state, the listener is being enabled.
    * *   If a listener is in the **Running** state, the listener is enabled.
    *
    * @param request StartListenerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartListenerResponse
   */
  async startListenerWithOptions(request: StartListenerRequest, runtime: $Util.RuntimeOptions): Promise<StartListenerResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartListener",
      version: "2020-06-16",
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

  /**
    * **StartListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetListenerAttribute](~~2254865~~) to query the status of the task.
    * *   If a listener is in the **Configuring** state, the listener is being enabled.
    * *   If a listener is in the **Running** state, the listener is enabled.
    *
    * @param request StartListenerRequest
    * @return StartListenerResponse
   */
  async startListener(request: StartListenerRequest): Promise<StartListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startListenerWithOptions(request, runtime);
  }

  /**
    * This operation is supported by Application Load Balancer (ALB) instances that use static IP addresses. The zone cannot be removed if the ALB instance has only one available zone.
    *
    * @param request StartShiftLoadBalancerZonesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartShiftLoadBalancerZonesResponse
   */
  async startShiftLoadBalancerZonesWithOptions(request: StartShiftLoadBalancerZonesRequest, runtime: $Util.RuntimeOptions): Promise<StartShiftLoadBalancerZonesResponse> {
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

    if (!Util.isUnset(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartShiftLoadBalancerZones",
      version: "2020-06-16",
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
    * This operation is supported by Application Load Balancer (ALB) instances that use static IP addresses. The zone cannot be removed if the ALB instance has only one available zone.
    *
    * @param request StartShiftLoadBalancerZonesRequest
    * @return StartShiftLoadBalancerZonesResponse
   */
  async startShiftLoadBalancerZones(request: StartShiftLoadBalancerZonesRequest): Promise<StartShiftLoadBalancerZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startShiftLoadBalancerZonesWithOptions(request, runtime);
  }

  /**
    * **StopListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetListenerAttribute](~~2254865~~) operation to query the status of the task:
    * *   If a listener is in the **Configuring** state, the listener is being disabled.
    * *   If a listener is in the **Stopped** state, the listener is disabled.
    *
    * @param request StopListenerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopListenerResponse
   */
  async stopListenerWithOptions(request: StopListenerRequest, runtime: $Util.RuntimeOptions): Promise<StopListenerResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopListener",
      version: "2020-06-16",
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

  /**
    * **StopListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetListenerAttribute](~~2254865~~) operation to query the status of the task:
    * *   If a listener is in the **Configuring** state, the listener is being disabled.
    * *   If a listener is in the **Stopped** state, the listener is disabled.
    *
    * @param request StopListenerRequest
    * @return StopListenerResponse
   */
  async stopListener(request: StopListenerRequest): Promise<StopListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopListenerWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2020-06-16",
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

  async unTagResourcesWithOptions(request: UnTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UnTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnTagResources",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnTagResourcesResponse>(await this.callApi(params, req, runtime), new UnTagResourcesResponse({}));
  }

  async unTagResources(request: UnTagResourcesRequest): Promise<UnTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  /**
    * *   **UpdateAScripts** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAScripts](~~472574~~) operation to query the status of the task.
    *     *   If an AScript rule is in the **Configuring** state, the AScript rule is being updated.
    *     *   If an AScript rule is in the **Available** state, the AScript rule is updated.
    * *   In the following table, the maximum value of **N** is **4**.
    *
    * @param request UpdateAScriptsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateAScriptsResponse
   */
  async updateAScriptsWithOptions(request: UpdateAScriptsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAScriptsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.AScripts)) {
      query["AScripts"] = request.AScripts;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAScripts",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAScriptsResponse>(await this.callApi(params, req, runtime), new UpdateAScriptsResponse({}));
  }

  /**
    * *   **UpdateAScripts** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListAScripts](~~472574~~) operation to query the status of the task.
    *     *   If an AScript rule is in the **Configuring** state, the AScript rule is being updated.
    *     *   If an AScript rule is in the **Available** state, the AScript rule is updated.
    * *   In the following table, the maximum value of **N** is **4**.
    *
    * @param request UpdateAScriptsRequest
    * @return UpdateAScriptsResponse
   */
  async updateAScripts(request: UpdateAScriptsRequest): Promise<UpdateAScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAScriptsWithOptions(request, runtime);
  }

  async updateAclAttributeWithOptions(request: UpdateAclAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAclAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAclAttribute",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAclAttributeResponse>(await this.callApi(params, req, runtime), new UpdateAclAttributeResponse({}));
  }

  async updateAclAttribute(request: UpdateAclAttributeRequest): Promise<UpdateAclAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAclAttributeWithOptions(request, runtime);
  }

  async updateHealthCheckTemplateAttributeWithOptions(request: UpdateHealthCheckTemplateAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateHealthCheckTemplateAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.healthCheckCodes)) {
      query["HealthCheckCodes"] = request.healthCheckCodes;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckHost)) {
      query["HealthCheckHost"] = request.healthCheckHost;
    }

    if (!Util.isUnset(request.healthCheckHttpVersion)) {
      query["HealthCheckHttpVersion"] = request.healthCheckHttpVersion;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckPath)) {
      query["HealthCheckPath"] = request.healthCheckPath;
    }

    if (!Util.isUnset(request.healthCheckProtocol)) {
      query["HealthCheckProtocol"] = request.healthCheckProtocol;
    }

    if (!Util.isUnset(request.healthCheckTemplateId)) {
      query["HealthCheckTemplateId"] = request.healthCheckTemplateId;
    }

    if (!Util.isUnset(request.healthCheckTemplateName)) {
      query["HealthCheckTemplateName"] = request.healthCheckTemplateName;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHealthCheckTemplateAttribute",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHealthCheckTemplateAttributeResponse>(await this.callApi(params, req, runtime), new UpdateHealthCheckTemplateAttributeResponse({}));
  }

  async updateHealthCheckTemplateAttribute(request: UpdateHealthCheckTemplateAttributeRequest): Promise<UpdateHealthCheckTemplateAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateHealthCheckTemplateAttributeWithOptions(request, runtime);
  }

  /**
    * **UpdateListenerAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetListenerAttribute](~~2254865~~) operation to query the status of the task.
    * *   If a listener is in the **Configuring** state, the configuration of the listener is being modified.
    * *   If a listener is in the **Running** state, the configuration of the listener is modified.
    *
    * @param request UpdateListenerAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateListenerAttributeResponse
   */
  async updateListenerAttributeWithOptions(request: UpdateListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caCertificates)) {
      query["CaCertificates"] = request.caCertificates;
    }

    if (!Util.isUnset(request.caEnabled)) {
      query["CaEnabled"] = request.caEnabled;
    }

    if (!Util.isUnset(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.defaultActions)) {
      query["DefaultActions"] = request.defaultActions;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.gzipEnabled)) {
      query["GzipEnabled"] = request.gzipEnabled;
    }

    if (!Util.isUnset(request.http2Enabled)) {
      query["Http2Enabled"] = request.http2Enabled;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerDescription)) {
      query["ListenerDescription"] = request.listenerDescription;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.quicConfig)) {
      query["QuicConfig"] = request.quicConfig;
    }

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!Util.isUnset(request.XForwardedForConfig)) {
      query["XForwardedForConfig"] = request.XForwardedForConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateListenerAttribute",
      version: "2020-06-16",
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

  /**
    * **UpdateListenerAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetListenerAttribute](~~2254865~~) operation to query the status of the task.
    * *   If a listener is in the **Configuring** state, the configuration of the listener is being modified.
    * *   If a listener is in the **Running** state, the configuration of the listener is modified.
    *
    * @param request UpdateListenerAttributeRequest
    * @return UpdateListenerAttributeResponse
   */
  async updateListenerAttribute(request: UpdateListenerAttributeRequest): Promise<UpdateListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateListenerAttributeWithOptions(request, runtime);
  }

  /**
    * **UpdateListenerLogConfig** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetListenerAttribute](~~2254865~~) to query the status of the task:
    * *   If a listener is in the **Configuring** state, the log configuration of the listener is being modified.
    * *   If a listener is in the **Running** state, the log configuration of the listener is modified.
    * > You can update the log configuration of a listener only after you enable the access log feature.
    *
    * @param request UpdateListenerLogConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateListenerLogConfigResponse
   */
  async updateListenerLogConfigWithOptions(request: UpdateListenerLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateListenerLogConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessLogRecordCustomizedHeadersEnabled)) {
      query["AccessLogRecordCustomizedHeadersEnabled"] = request.accessLogRecordCustomizedHeadersEnabled;
    }

    if (!Util.isUnset(request.accessLogTracingConfig)) {
      query["AccessLogTracingConfig"] = request.accessLogTracingConfig;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateListenerLogConfig",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateListenerLogConfigResponse>(await this.callApi(params, req, runtime), new UpdateListenerLogConfigResponse({}));
  }

  /**
    * **UpdateListenerLogConfig** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetListenerAttribute](~~2254865~~) to query the status of the task:
    * *   If a listener is in the **Configuring** state, the log configuration of the listener is being modified.
    * *   If a listener is in the **Running** state, the log configuration of the listener is modified.
    * > You can update the log configuration of a listener only after you enable the access log feature.
    *
    * @param request UpdateListenerLogConfigRequest
    * @return UpdateListenerLogConfigResponse
   */
  async updateListenerLogConfig(request: UpdateListenerLogConfigRequest): Promise<UpdateListenerLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateListenerLogConfigWithOptions(request, runtime);
  }

  /**
    * ## Prerequisites
    * *   An ALB instance is created. For more information about how to create an ALB instance, see [CreateLoadBalancer](~~214358~~).
    * *   If you want to change the network type from internal-facing to Internet-facing, you must first create an elastic IP address (EIP). For more information, see [AllocateEipAddress](~~120192~~).
    * ## Usage notes
    * **UpdateLoadBalancerAddressTypeConfig** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](~~214362~~) operation to query the status of the task.
    * *   If an ALB instance is in the **Configuring** state, the network type is being changed.
    * *   If an ALB instance is in the **Active** state, the network type has been changed.
    *
    * @param request UpdateLoadBalancerAddressTypeConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateLoadBalancerAddressTypeConfigResponse
   */
  async updateLoadBalancerAddressTypeConfigWithOptions(request: UpdateLoadBalancerAddressTypeConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerAddressTypeConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoadBalancerAddressTypeConfig",
      version: "2020-06-16",
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
    * ## Prerequisites
    * *   An ALB instance is created. For more information about how to create an ALB instance, see [CreateLoadBalancer](~~214358~~).
    * *   If you want to change the network type from internal-facing to Internet-facing, you must first create an elastic IP address (EIP). For more information, see [AllocateEipAddress](~~120192~~).
    * ## Usage notes
    * **UpdateLoadBalancerAddressTypeConfig** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetLoadBalancerAttribute](~~214362~~) operation to query the status of the task.
    * *   If an ALB instance is in the **Configuring** state, the network type is being changed.
    * *   If an ALB instance is in the **Active** state, the network type has been changed.
    *
    * @param request UpdateLoadBalancerAddressTypeConfigRequest
    * @return UpdateLoadBalancerAddressTypeConfigResponse
   */
  async updateLoadBalancerAddressTypeConfig(request: UpdateLoadBalancerAddressTypeConfigRequest): Promise<UpdateLoadBalancerAddressTypeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerAddressTypeConfigWithOptions(request, runtime);
  }

  /**
    * **UpdateLoadBalancerAttribute** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call [GetLoadBalancerAttribute](~~214362~~) to query the status of the task.
    * *   If the ALB instance is in the **Configuring** state, the ALB instance is being modified.
    * *   If the ALB instance is in the **Active** state, the ALB instance is modified.
    *
    * @param request UpdateLoadBalancerAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateLoadBalancerAttributeResponse
   */
  async updateLoadBalancerAttributeWithOptions(request: UpdateLoadBalancerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerAttributeResponse> {
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

    if (!Util.isUnset(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!Util.isUnset(request.modificationProtectionConfig)) {
      query["ModificationProtectionConfig"] = request.modificationProtectionConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoadBalancerAttribute",
      version: "2020-06-16",
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

  /**
    * **UpdateLoadBalancerAttribute** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call [GetLoadBalancerAttribute](~~214362~~) to query the status of the task.
    * *   If the ALB instance is in the **Configuring** state, the ALB instance is being modified.
    * *   If the ALB instance is in the **Active** state, the ALB instance is modified.
    *
    * @param request UpdateLoadBalancerAttributeRequest
    * @return UpdateLoadBalancerAttributeResponse
   */
  async updateLoadBalancerAttribute(request: UpdateLoadBalancerAttributeRequest): Promise<UpdateLoadBalancerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerAttributeWithOptions(request, runtime);
  }

  /**
    * ##
    * *   You can upgrade a basic ALB instance to a standard ALB instance or a WAF-enabled ALB instance but you cannot downgrade a standard ALB instance or a WAF-enabled ALB instance to a basic ALB instance. For more information, see [Upgrade an ALB instance](~~214654~~).
    * *   **UpdateLoadBalancerEdition** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetLoadBalancerAttribute](~~214362~~) to query the status of the task.
    *     *   If the ALB instance is in the **Configuring** state, the edition of the ALB instance is being modified.
    *     *   If the ALB instance is in the **Active** state, the edition of the ALB instance has been modified.
    *
    * @param request UpdateLoadBalancerEditionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateLoadBalancerEditionResponse
   */
  async updateLoadBalancerEditionWithOptions(request: UpdateLoadBalancerEditionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerEditionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerEdition)) {
      query["LoadBalancerEdition"] = request.loadBalancerEdition;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoadBalancerEdition",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLoadBalancerEditionResponse>(await this.callApi(params, req, runtime), new UpdateLoadBalancerEditionResponse({}));
  }

  /**
    * ##
    * *   You can upgrade a basic ALB instance to a standard ALB instance or a WAF-enabled ALB instance but you cannot downgrade a standard ALB instance or a WAF-enabled ALB instance to a basic ALB instance. For more information, see [Upgrade an ALB instance](~~214654~~).
    * *   **UpdateLoadBalancerEdition** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetLoadBalancerAttribute](~~214362~~) to query the status of the task.
    *     *   If the ALB instance is in the **Configuring** state, the edition of the ALB instance is being modified.
    *     *   If the ALB instance is in the **Active** state, the edition of the ALB instance has been modified.
    *
    * @param request UpdateLoadBalancerEditionRequest
    * @return UpdateLoadBalancerEditionResponse
   */
  async updateLoadBalancerEdition(request: UpdateLoadBalancerEditionRequest): Promise<UpdateLoadBalancerEditionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerEditionWithOptions(request, runtime);
  }

  /**
    * **UpdateLoadBalancerZones** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetLoadBalancerAttribute](~~214362~~) to query the status of the task.
    * *   If an ALB instance is in the **Configuring** state, the zones are being modified.
    * *   If an ALB instance is in the **Active** state, the zones are modified.
    * > You may be charged after you call UpdateLoadBalancerZones.
    *
    * @param request UpdateLoadBalancerZonesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateLoadBalancerZonesResponse
   */
  async updateLoadBalancerZonesWithOptions(request: UpdateLoadBalancerZonesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerZonesResponse> {
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

    if (!Util.isUnset(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoadBalancerZones",
      version: "2020-06-16",
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
    * **UpdateLoadBalancerZones** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetLoadBalancerAttribute](~~214362~~) to query the status of the task.
    * *   If an ALB instance is in the **Configuring** state, the zones are being modified.
    * *   If an ALB instance is in the **Active** state, the zones are modified.
    * > You may be charged after you call UpdateLoadBalancerZones.
    *
    * @param request UpdateLoadBalancerZonesRequest
    * @return UpdateLoadBalancerZonesResponse
   */
  async updateLoadBalancerZones(request: UpdateLoadBalancerZonesRequest): Promise<UpdateLoadBalancerZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerZonesWithOptions(request, runtime);
  }

  /**
    * *   **UpdateRuleAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](~~214379~~) operation to query the status of a forwarding rule:
    *     *   If a forwarding rule is in the **Configuring** state, the forwarding rule is being updated.
    *     *   If a forwarding rule is in the **Available** state, the forwarding rule is updated.
    * *   You can set **RuleConditions** and **RuleActions** to add conditions and actions to a forwarding rule. Take note of the following limits on the number of conditions and the number of actions in each forwarding rule:
    *     *   Number of conditions: You can specify at most 5 for a basic Application Load Balancer (ALB) instance, at most 10 for a standard ALB instance, and at most 10 for a WAF-enabled ALB instance.
    *     *   Number of actions: You can specify at most 3 for a basic ALB instance, at most 5 for a standard ALB instance, and at most 5 for a WAF-enabled ALB instance.
    *
    * @param request UpdateRuleAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateRuleAttributeResponse
   */
  async updateRuleAttributeWithOptions(request: UpdateRuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.ruleActions)) {
      query["RuleActions"] = request.ruleActions;
    }

    if (!Util.isUnset(request.ruleConditions)) {
      query["RuleConditions"] = request.ruleConditions;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRuleAttribute",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRuleAttributeResponse>(await this.callApi(params, req, runtime), new UpdateRuleAttributeResponse({}));
  }

  /**
    * *   **UpdateRuleAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](~~214379~~) operation to query the status of a forwarding rule:
    *     *   If a forwarding rule is in the **Configuring** state, the forwarding rule is being updated.
    *     *   If a forwarding rule is in the **Available** state, the forwarding rule is updated.
    * *   You can set **RuleConditions** and **RuleActions** to add conditions and actions to a forwarding rule. Take note of the following limits on the number of conditions and the number of actions in each forwarding rule:
    *     *   Number of conditions: You can specify at most 5 for a basic Application Load Balancer (ALB) instance, at most 10 for a standard ALB instance, and at most 10 for a WAF-enabled ALB instance.
    *     *   Number of actions: You can specify at most 3 for a basic ALB instance, at most 5 for a standard ALB instance, and at most 5 for a WAF-enabled ALB instance.
    *
    * @param request UpdateRuleAttributeRequest
    * @return UpdateRuleAttributeResponse
   */
  async updateRuleAttribute(request: UpdateRuleAttributeRequest): Promise<UpdateRuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleAttributeWithOptions(request, runtime);
  }

  /**
    * **UpdateRulesAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](~~214379~~) operation to query the status of the task.
    * *   If a forwarding rule is in the **Configuring** state, the forwarding rule is being updated.
    * *   If a forwarding rule is in the **Available** state, the forwarding rule is updated.
    * *   You can set **RuleConditions** and **RuleActions** to add conditions and actions to a forwarding rule. Take note of the following limits on the maximum number of conditions and the maximum number of actions in each forwarding rule:
    *     *   Limits on conditions: 5 for a basic Application Load Balancer (ALB) instance, 10 for a standard ALB instance, and 10 for a WAF-enabled ALB instance.
    *     *   Limits on actions: 3 for a basic ALB instance, 5 for a standard ALB instance, and 5 for a WAF-enabled ALB instance.
    *
    * @param request UpdateRulesAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateRulesAttributeResponse
   */
  async updateRulesAttributeWithOptions(request: UpdateRulesAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRulesAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRulesAttribute",
      version: "2020-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRulesAttributeResponse>(await this.callApi(params, req, runtime), new UpdateRulesAttributeResponse({}));
  }

  /**
    * **UpdateRulesAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListRules](~~214379~~) operation to query the status of the task.
    * *   If a forwarding rule is in the **Configuring** state, the forwarding rule is being updated.
    * *   If a forwarding rule is in the **Available** state, the forwarding rule is updated.
    * *   You can set **RuleConditions** and **RuleActions** to add conditions and actions to a forwarding rule. Take note of the following limits on the maximum number of conditions and the maximum number of actions in each forwarding rule:
    *     *   Limits on conditions: 5 for a basic Application Load Balancer (ALB) instance, 10 for a standard ALB instance, and 10 for a WAF-enabled ALB instance.
    *     *   Limits on actions: 3 for a basic ALB instance, 5 for a standard ALB instance, and 5 for a WAF-enabled ALB instance.
    *
    * @param request UpdateRulesAttributeRequest
    * @return UpdateRulesAttributeResponse
   */
  async updateRulesAttribute(request: UpdateRulesAttributeRequest): Promise<UpdateRulesAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRulesAttributeWithOptions(request, runtime);
  }

  /**
    * ##
    * **UpdateSecurityPolicyAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [ListSecurityPolicies](~~213609~~) to query the status of the task.
    * *   If a security policy is in the **Configuring** state, the security policy is being updated.
    * *   If a security policy is in the **Available** state, the security policy is updated.
    *
    * @param request UpdateSecurityPolicyAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateSecurityPolicyAttributeResponse
   */
  async updateSecurityPolicyAttributeWithOptions(request: UpdateSecurityPolicyAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecurityPolicyAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ciphers)) {
      query["Ciphers"] = request.ciphers;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!Util.isUnset(request.securityPolicyName)) {
      query["SecurityPolicyName"] = request.securityPolicyName;
    }

    if (!Util.isUnset(request.TLSVersions)) {
      query["TLSVersions"] = request.TLSVersions;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSecurityPolicyAttribute",
      version: "2020-06-16",
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

  /**
    * ##
    * **UpdateSecurityPolicyAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [ListSecurityPolicies](~~213609~~) to query the status of the task.
    * *   If a security policy is in the **Configuring** state, the security policy is being updated.
    * *   If a security policy is in the **Available** state, the security policy is updated.
    *
    * @param request UpdateSecurityPolicyAttributeRequest
    * @return UpdateSecurityPolicyAttributeResponse
   */
  async updateSecurityPolicyAttribute(request: UpdateSecurityPolicyAttributeRequest): Promise<UpdateSecurityPolicyAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecurityPolicyAttributeWithOptions(request, runtime);
  }

  /**
    * ## Description
    * **UpdateServerGroupAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListServerGroups](~~213627~~) operation to query the status of a server group:
    * *   If a server group is in the **Configuring** state, the configuration of the server group is being modified.
    * *   If a server group is in the **Available** state, the configuration of the server group is modified.
    *
    * @param request UpdateServerGroupAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateServerGroupAttributeResponse
   */
  async updateServerGroupAttributeWithOptions(request: UpdateServerGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServerGroupAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.healthCheckConfig)) {
      query["HealthCheckConfig"] = request.healthCheckConfig;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.serverGroupName)) {
      query["ServerGroupName"] = request.serverGroupName;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.stickySessionConfig)) {
      query["StickySessionConfig"] = request.stickySessionConfig;
    }

    if (!Util.isUnset(request.uchConfig)) {
      query["UchConfig"] = request.uchConfig;
    }

    if (!Util.isUnset(request.upstreamKeepaliveEnabled)) {
      query["UpstreamKeepaliveEnabled"] = request.upstreamKeepaliveEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServerGroupAttribute",
      version: "2020-06-16",
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

  /**
    * ## Description
    * **UpdateServerGroupAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListServerGroups](~~213627~~) operation to query the status of a server group:
    * *   If a server group is in the **Configuring** state, the configuration of the server group is being modified.
    * *   If a server group is in the **Available** state, the configuration of the server group is modified.
    *
    * @param request UpdateServerGroupAttributeRequest
    * @return UpdateServerGroupAttributeResponse
   */
  async updateServerGroupAttribute(request: UpdateServerGroupAttributeRequest): Promise<UpdateServerGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServerGroupAttributeWithOptions(request, runtime);
  }

  /**
    * **UpdateServerGroupServersAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
    * 1.  You can call the [ListServerGroups](~~213627~~) operation to query the status of a server group.
    *     *   If a server group is in the **Configuring** state, it indicates that the server group is being modified.
    *     *   If a server group is in the **Available** state, it indicates that the server group is running.
    * 2.  You can call the [ListServerGroupServers](~~213628~~) operation to query the status of a backend server.
    *     *   If a backend server is in the **Configuring** state, it indicates that the backend server is being modified.
    *     *   If a backend server is in the **Available** state, it indicates that the backend server is running.
    *
    * @param request UpdateServerGroupServersAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateServerGroupServersAttributeResponse
   */
  async updateServerGroupServersAttributeWithOptions(request: UpdateServerGroupServersAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServerGroupServersAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      query["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.servers)) {
      query["Servers"] = request.servers;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServerGroupServersAttribute",
      version: "2020-06-16",
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
    * 1.  You can call the [ListServerGroups](~~213627~~) operation to query the status of a server group.
    *     *   If a server group is in the **Configuring** state, it indicates that the server group is being modified.
    *     *   If a server group is in the **Available** state, it indicates that the server group is running.
    * 2.  You can call the [ListServerGroupServers](~~213628~~) operation to query the status of a backend server.
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
