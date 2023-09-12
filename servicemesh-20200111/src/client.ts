// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class SecretCreateRecordValue extends $tea.Model {
  state?: string;
  clusterId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      clusterId: 'ClusterId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      clusterId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SecretDeleteRecordValue extends $tea.Model {
  state?: string;
  clusterId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      clusterId: 'ClusterId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      clusterId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CCMVersionsValue extends $tea.Model {
  queryState?: string;
  version?: string;
  SLBGracefulDrainSupport?: boolean;
  clusterId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      queryState: 'QueryState',
      version: 'Version',
      SLBGracefulDrainSupport: 'SLBGracefulDrainSupport',
      clusterId: 'ClusterId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryState: 'string',
      version: 'string',
      SLBGracefulDrainSupport: 'boolean',
      clusterId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDetailGatewayStatusRecordValue extends $tea.Model {
  status?: string;
  message?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClusterIntoServiceMeshRequest extends $tea.Model {
  clusterId?: string;
  ignoreNamespaceCheck?: boolean;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreNamespaceCheck: 'IgnoreNamespaceCheck',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreNamespaceCheck: 'boolean',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClusterIntoServiceMeshResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClusterIntoServiceMeshResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddClusterIntoServiceMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddClusterIntoServiceMeshResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVMIntoServiceMeshRequest extends $tea.Model {
  ecsId?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsId: 'EcsId',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsId: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVMIntoServiceMeshResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVMIntoServiceMeshResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddVMIntoServiceMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddVMIntoServiceMeshResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateASMGatewayRequest extends $tea.Model {
  body?: string;
  istioGatewayName?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      istioGatewayName: 'IstioGatewayName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      istioGatewayName: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateASMGatewayResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateASMGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateASMGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateASMGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewaySecretRequest extends $tea.Model {
  cert?: string;
  istioGatewayName?: string;
  key?: string;
  secretName?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      istioGatewayName: 'IstioGatewayName',
      key: 'Key',
      secretName: 'SecretName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      istioGatewayName: 'string',
      key: 'string',
      secretName: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewaySecretResponseBody extends $tea.Model {
  requestId?: string;
  secretCreateRecord?: { [key: string]: SecretCreateRecordValue };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretCreateRecord: 'SecretCreateRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretCreateRecord: { 'type': 'map', 'keyType': 'string', 'valueType': SecretCreateRecordValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewaySecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGatewaySecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGatewaySecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayDomainsRequest extends $tea.Model {
  credential?: string;
  forceHttps?: boolean;
  hosts?: string;
  istioGatewayName?: string;
  limit?: string;
  namespace?: string;
  number?: number;
  portName?: string;
  protocol?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      credential: 'Credential',
      forceHttps: 'ForceHttps',
      hosts: 'Hosts',
      istioGatewayName: 'IstioGatewayName',
      limit: 'Limit',
      namespace: 'Namespace',
      number: 'Number',
      portName: 'PortName',
      protocol: 'Protocol',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credential: 'string',
      forceHttps: 'boolean',
      hosts: 'string',
      istioGatewayName: 'string',
      limit: 'string',
      namespace: 'string',
      number: 'number',
      portName: 'string',
      protocol: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayDomainsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIstioGatewayDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIstioGatewayDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequest extends $tea.Model {
  description?: string;
  gatewayRoute?: CreateIstioGatewayRoutesRequestGatewayRoute;
  istioGatewayName?: string;
  priority?: number;
  serviceMeshId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gatewayRoute: 'GatewayRoute',
      istioGatewayName: 'IstioGatewayName',
      priority: 'Priority',
      serviceMeshId: 'ServiceMeshId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayRoute: CreateIstioGatewayRoutesRequestGatewayRoute,
      istioGatewayName: 'string',
      priority: 'number',
      serviceMeshId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesShrinkRequest extends $tea.Model {
  description?: string;
  gatewayRouteShrink?: string;
  istioGatewayName?: string;
  priority?: number;
  serviceMeshId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gatewayRouteShrink: 'GatewayRoute',
      istioGatewayName: 'IstioGatewayName',
      priority: 'Priority',
      serviceMeshId: 'ServiceMeshId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayRouteShrink: 'string',
      istioGatewayName: 'string',
      priority: 'number',
      serviceMeshId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIstioGatewayRoutesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIstioGatewayRoutesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceMeshRequest extends $tea.Model {
  accessLogEnabled?: boolean;
  accessLogFile?: string;
  accessLogFormat?: string;
  accessLogProject?: string;
  accessLogServiceEnabled?: boolean;
  accessLogServiceHost?: string;
  accessLogServicePort?: number;
  apiServerLoadBalancerSpec?: string;
  apiServerPublicEip?: boolean;
  auditProject?: string;
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  CRAggregationEnabled?: boolean;
  chargeType?: string;
  clusterSpec?: string;
  configSourceEnabled?: boolean;
  configSourceNacosID?: string;
  controlPlaneLogEnabled?: boolean;
  controlPlaneLogProject?: string;
  customizedPrometheus?: boolean;
  customizedZipkin?: boolean;
  DNSProxyingEnabled?: boolean;
  dubboFilterEnabled?: boolean;
  edition?: string;
  enableAmbient?: boolean;
  enableAudit?: boolean;
  enableCRHistory?: boolean;
  enableSDSServer?: boolean;
  excludeIPRanges?: string;
  excludeInboundPorts?: string;
  excludeOutboundPorts?: string;
  existingCaCert?: string;
  existingCaKey?: string;
  existingCaType?: string;
  existingRootCaCert?: string;
  existingRootCaKey?: string;
  filterGatewayClusterConfig?: boolean;
  gatewayAPIEnabled?: boolean;
  guestCluster?: string;
  includeIPRanges?: string;
  istioVersion?: string;
  kialiEnabled?: boolean;
  localityLBConf?: string;
  localityLoadBalancing?: boolean;
  MSEEnabled?: boolean;
  multiBufferEnabled?: boolean;
  multiBufferPollDelay?: string;
  mysqlFilterEnabled?: boolean;
  name?: string;
  OPALimitCPU?: string;
  OPALimitMemory?: string;
  OPALogLevel?: string;
  OPARequestCPU?: string;
  OPARequestMemory?: string;
  opaEnabled?: boolean;
  openAgentPolicy?: boolean;
  period?: number;
  pilotLoadBalancerSpec?: string;
  prometheusUrl?: string;
  proxyLimitCPU?: string;
  proxyLimitMemory?: string;
  proxyRequestCPU?: string;
  proxyRequestMemory?: string;
  redisFilterEnabled?: boolean;
  regionId?: string;
  tag?: CreateServiceMeshRequestTag[];
  telemetry?: boolean;
  thriftFilterEnabled?: boolean;
  traceSampling?: number;
  tracing?: boolean;
  useExistingCA?: boolean;
  vSwitches?: string;
  vpcId?: string;
  webAssemblyFilterEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessLogEnabled: 'AccessLogEnabled',
      accessLogFile: 'AccessLogFile',
      accessLogFormat: 'AccessLogFormat',
      accessLogProject: 'AccessLogProject',
      accessLogServiceEnabled: 'AccessLogServiceEnabled',
      accessLogServiceHost: 'AccessLogServiceHost',
      accessLogServicePort: 'AccessLogServicePort',
      apiServerLoadBalancerSpec: 'ApiServerLoadBalancerSpec',
      apiServerPublicEip: 'ApiServerPublicEip',
      auditProject: 'AuditProject',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      CRAggregationEnabled: 'CRAggregationEnabled',
      chargeType: 'ChargeType',
      clusterSpec: 'ClusterSpec',
      configSourceEnabled: 'ConfigSourceEnabled',
      configSourceNacosID: 'ConfigSourceNacosID',
      controlPlaneLogEnabled: 'ControlPlaneLogEnabled',
      controlPlaneLogProject: 'ControlPlaneLogProject',
      customizedPrometheus: 'CustomizedPrometheus',
      customizedZipkin: 'CustomizedZipkin',
      DNSProxyingEnabled: 'DNSProxyingEnabled',
      dubboFilterEnabled: 'DubboFilterEnabled',
      edition: 'Edition',
      enableAmbient: 'EnableAmbient',
      enableAudit: 'EnableAudit',
      enableCRHistory: 'EnableCRHistory',
      enableSDSServer: 'EnableSDSServer',
      excludeIPRanges: 'ExcludeIPRanges',
      excludeInboundPorts: 'ExcludeInboundPorts',
      excludeOutboundPorts: 'ExcludeOutboundPorts',
      existingCaCert: 'ExistingCaCert',
      existingCaKey: 'ExistingCaKey',
      existingCaType: 'ExistingCaType',
      existingRootCaCert: 'ExistingRootCaCert',
      existingRootCaKey: 'ExistingRootCaKey',
      filterGatewayClusterConfig: 'FilterGatewayClusterConfig',
      gatewayAPIEnabled: 'GatewayAPIEnabled',
      guestCluster: 'GuestCluster',
      includeIPRanges: 'IncludeIPRanges',
      istioVersion: 'IstioVersion',
      kialiEnabled: 'KialiEnabled',
      localityLBConf: 'LocalityLBConf',
      localityLoadBalancing: 'LocalityLoadBalancing',
      MSEEnabled: 'MSEEnabled',
      multiBufferEnabled: 'MultiBufferEnabled',
      multiBufferPollDelay: 'MultiBufferPollDelay',
      mysqlFilterEnabled: 'MysqlFilterEnabled',
      name: 'Name',
      OPALimitCPU: 'OPALimitCPU',
      OPALimitMemory: 'OPALimitMemory',
      OPALogLevel: 'OPALogLevel',
      OPARequestCPU: 'OPARequestCPU',
      OPARequestMemory: 'OPARequestMemory',
      opaEnabled: 'OpaEnabled',
      openAgentPolicy: 'OpenAgentPolicy',
      period: 'Period',
      pilotLoadBalancerSpec: 'PilotLoadBalancerSpec',
      prometheusUrl: 'PrometheusUrl',
      proxyLimitCPU: 'ProxyLimitCPU',
      proxyLimitMemory: 'ProxyLimitMemory',
      proxyRequestCPU: 'ProxyRequestCPU',
      proxyRequestMemory: 'ProxyRequestMemory',
      redisFilterEnabled: 'RedisFilterEnabled',
      regionId: 'RegionId',
      tag: 'Tag',
      telemetry: 'Telemetry',
      thriftFilterEnabled: 'ThriftFilterEnabled',
      traceSampling: 'TraceSampling',
      tracing: 'Tracing',
      useExistingCA: 'UseExistingCA',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
      webAssemblyFilterEnabled: 'WebAssemblyFilterEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogEnabled: 'boolean',
      accessLogFile: 'string',
      accessLogFormat: 'string',
      accessLogProject: 'string',
      accessLogServiceEnabled: 'boolean',
      accessLogServiceHost: 'string',
      accessLogServicePort: 'number',
      apiServerLoadBalancerSpec: 'string',
      apiServerPublicEip: 'boolean',
      auditProject: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      CRAggregationEnabled: 'boolean',
      chargeType: 'string',
      clusterSpec: 'string',
      configSourceEnabled: 'boolean',
      configSourceNacosID: 'string',
      controlPlaneLogEnabled: 'boolean',
      controlPlaneLogProject: 'string',
      customizedPrometheus: 'boolean',
      customizedZipkin: 'boolean',
      DNSProxyingEnabled: 'boolean',
      dubboFilterEnabled: 'boolean',
      edition: 'string',
      enableAmbient: 'boolean',
      enableAudit: 'boolean',
      enableCRHistory: 'boolean',
      enableSDSServer: 'boolean',
      excludeIPRanges: 'string',
      excludeInboundPorts: 'string',
      excludeOutboundPorts: 'string',
      existingCaCert: 'string',
      existingCaKey: 'string',
      existingCaType: 'string',
      existingRootCaCert: 'string',
      existingRootCaKey: 'string',
      filterGatewayClusterConfig: 'boolean',
      gatewayAPIEnabled: 'boolean',
      guestCluster: 'string',
      includeIPRanges: 'string',
      istioVersion: 'string',
      kialiEnabled: 'boolean',
      localityLBConf: 'string',
      localityLoadBalancing: 'boolean',
      MSEEnabled: 'boolean',
      multiBufferEnabled: 'boolean',
      multiBufferPollDelay: 'string',
      mysqlFilterEnabled: 'boolean',
      name: 'string',
      OPALimitCPU: 'string',
      OPALimitMemory: 'string',
      OPALogLevel: 'string',
      OPARequestCPU: 'string',
      OPARequestMemory: 'string',
      opaEnabled: 'boolean',
      openAgentPolicy: 'boolean',
      period: 'number',
      pilotLoadBalancerSpec: 'string',
      prometheusUrl: 'string',
      proxyLimitCPU: 'string',
      proxyLimitMemory: 'string',
      proxyRequestCPU: 'string',
      proxyRequestMemory: 'string',
      redisFilterEnabled: 'boolean',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceMeshRequestTag },
      telemetry: 'boolean',
      thriftFilterEnabled: 'boolean',
      traceSampling: 'number',
      tracing: 'boolean',
      useExistingCA: 'boolean',
      vSwitches: 'string',
      vpcId: 'string',
      webAssemblyFilterEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceMeshResponseBody extends $tea.Model {
  requestId?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceMeshResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateServiceMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceMeshResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSwimLaneRequest extends $tea.Model {
  groupName?: string;
  labelSelectorKey?: string;
  labelSelectorValue?: string;
  serviceMeshId?: string;
  servicesList?: string;
  swimLaneName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      labelSelectorKey: 'LabelSelectorKey',
      labelSelectorValue: 'LabelSelectorValue',
      serviceMeshId: 'ServiceMeshId',
      servicesList: 'ServicesList',
      swimLaneName: 'SwimLaneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      labelSelectorKey: 'string',
      labelSelectorValue: 'string',
      serviceMeshId: 'string',
      servicesList: 'string',
      swimLaneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSwimLaneResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSwimLaneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSwimLaneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSwimLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSwimLaneGroupRequest extends $tea.Model {
  groupName?: string;
  ingressGatewayName?: string;
  ingressType?: string;
  isPermissive?: boolean;
  routeHeader?: string;
  serviceMeshId?: string;
  servicesList?: string;
  traceHeader?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      ingressGatewayName: 'IngressGatewayName',
      ingressType: 'IngressType',
      isPermissive: 'IsPermissive',
      routeHeader: 'RouteHeader',
      serviceMeshId: 'ServiceMeshId',
      servicesList: 'ServicesList',
      traceHeader: 'TraceHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ingressGatewayName: 'string',
      ingressType: 'string',
      isPermissive: 'boolean',
      routeHeader: 'string',
      serviceMeshId: 'string',
      servicesList: 'string',
      traceHeader: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSwimLaneGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSwimLaneGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSwimLaneGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSwimLaneGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayRouteRequest extends $tea.Model {
  istioGatewayName?: string;
  routeName?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      istioGatewayName: 'IstioGatewayName',
      routeName: 'RouteName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioGatewayName: 'string',
      routeName: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayRouteResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGatewayRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewaySecretRequest extends $tea.Model {
  istioGatewayName?: string;
  secretName?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      istioGatewayName: 'IstioGatewayName',
      secretName: 'SecretName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioGatewayName: 'string',
      secretName: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewaySecretResponseBody extends $tea.Model {
  requestId?: string;
  secretDeleteRecord?: { [key: string]: SecretDeleteRecordValue };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretDeleteRecord: 'SecretDeleteRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretDeleteRecord: { 'type': 'map', 'keyType': 'string', 'valueType': SecretDeleteRecordValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewaySecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGatewaySecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewaySecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIstioGatewayDomainsRequest extends $tea.Model {
  hosts?: string;
  istioGatewayName?: string;
  limit?: string;
  namespace?: string;
  portName?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      istioGatewayName: 'IstioGatewayName',
      limit: 'Limit',
      namespace: 'Namespace',
      portName: 'PortName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: 'string',
      istioGatewayName: 'string',
      limit: 'string',
      namespace: 'string',
      portName: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIstioGatewayDomainsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIstioGatewayDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteIstioGatewayDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIstioGatewayDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceMeshRequest extends $tea.Model {
  force?: boolean;
  retainResources?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      retainResources: 'RetainResources',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      retainResources: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceMeshResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceMeshResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteServiceMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceMeshResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimLaneRequest extends $tea.Model {
  groupName?: string;
  serviceMeshId?: string;
  swimLaneName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      serviceMeshId: 'ServiceMeshId',
      swimLaneName: 'SwimLaneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      serviceMeshId: 'string',
      swimLaneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimLaneResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimLaneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSwimLaneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSwimLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimLaneGroupRequest extends $tea.Model {
  groupName?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimLaneGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimLaneGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSwimLaneGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSwimLaneGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeASMGatewayImportedServicesRequest extends $tea.Model {
  ASMGatewayName?: string;
  serviceMeshId?: string;
  serviceNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      ASMGatewayName: 'ASMGatewayName',
      serviceMeshId: 'ServiceMeshId',
      serviceNamespace: 'ServiceNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASMGatewayName: 'string',
      serviceMeshId: 'string',
      serviceNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeASMGatewayImportedServicesResponseBody extends $tea.Model {
  importedServices?: DescribeASMGatewayImportedServicesResponseBodyImportedServices[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      importedServices: 'ImportedServices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importedServices: { 'type': 'array', 'itemType': DescribeASMGatewayImportedServicesResponseBodyImportedServices },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeASMGatewayImportedServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeASMGatewayImportedServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeASMGatewayImportedServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCCMVersionRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCCMVersionResponseBody extends $tea.Model {
  CCMVersions?: { [key: string]: CCMVersionsValue };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      CCMVersions: 'CCMVersions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CCMVersions: { 'type': 'map', 'keyType': 'string', 'valueType': CCMVersionsValue },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCCMVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCCMVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCCMVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBody extends $tea.Model {
  clusters?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCensResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeClusterGrafanaRequest extends $tea.Model {
  k8sClusterId?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusterId: 'K8sClusterId',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterId: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterGrafanaResponseBody extends $tea.Model {
  dashboards?: DescribeClusterGrafanaResponseBodyDashboards[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dashboards: 'Dashboards',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboards: { 'type': 'array', 'itemType': DescribeClusterGrafanaResponseBodyDashboards },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterGrafanaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterGrafanaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterGrafanaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterPrometheusRequest extends $tea.Model {
  k8sClusterId?: string;
  k8sClusterRegionId?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusterId: 'K8sClusterId',
      k8sClusterRegionId: 'K8sClusterRegionId',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterId: 'string',
      k8sClusterRegionId: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterPrometheusResponseBody extends $tea.Model {
  prometheus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheus: 'Prometheus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterPrometheusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterPrometheusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterPrometheusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersInServiceMeshRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersInServiceMeshResponseBody extends $tea.Model {
  clusters?: DescribeClustersInServiceMeshResponseBodyClusters[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeClustersInServiceMeshResponseBodyClusters },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersInServiceMeshResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClustersInServiceMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClustersInServiceMeshResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrTemplatesRequest extends $tea.Model {
  istioVersion?: string;
  kind?: string;
  static names(): { [key: string]: string } {
    return {
      istioVersion: 'IstioVersion',
      kind: 'Kind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioVersion: 'string',
      kind: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  templates?: DescribeCrTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeCrTemplatesResponseBodyTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCrTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCrTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipResourcesRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipResourcesResponseBody extends $tea.Model {
  eipList?: DescribeEipResourcesResponseBodyEipList[];
  pageResult?: DescribeEipResourcesResponseBodyPageResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eipList: 'EipList',
      pageResult: 'PageResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipList: { 'type': 'array', 'itemType': DescribeEipResourcesResponseBodyEipList },
      pageResult: DescribeEipResourcesResponseBodyPageResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEipResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEipResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaySecretDetailsRequest extends $tea.Model {
  istioGatewayName?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      istioGatewayName: 'IstioGatewayName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioGatewayName: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaySecretDetailsResponseBody extends $tea.Model {
  gatewaySecretDetails?: DescribeGatewaySecretDetailsResponseBodyGatewaySecretDetails[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewaySecretDetails: 'GatewaySecretDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewaySecretDetails: { 'type': 'array', 'itemType': DescribeGatewaySecretDetailsResponseBodyGatewaySecretDetails },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaySecretDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGatewaySecretDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewaySecretDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterAccessLogDashboardsRequest extends $tea.Model {
  k8sClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusterId: 'K8sClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterAccessLogDashboardsResponseBody extends $tea.Model {
  dashboards?: DescribeGuestClusterAccessLogDashboardsResponseBodyDashboards[];
  k8sClusterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dashboards: 'Dashboards',
      k8sClusterId: 'K8sClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboards: { 'type': 'array', 'itemType': DescribeGuestClusterAccessLogDashboardsResponseBodyDashboards },
      k8sClusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterAccessLogDashboardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGuestClusterAccessLogDashboardsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGuestClusterAccessLogDashboardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterNamespacesRequest extends $tea.Model {
  guestClusterID?: string;
  serviceMeshId?: string;
  showNsLabels?: boolean;
  static names(): { [key: string]: string } {
    return {
      guestClusterID: 'GuestClusterID',
      serviceMeshId: 'ServiceMeshId',
      showNsLabels: 'ShowNsLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guestClusterID: 'string',
      serviceMeshId: 'string',
      showNsLabels: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterNamespacesResponseBody extends $tea.Model {
  nsLabels?: { [key: string]: any };
  nsList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nsLabels: 'NsLabels',
      nsList: 'NsList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nsLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nsList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterNamespacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGuestClusterNamespacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGuestClusterNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterPodsRequest extends $tea.Model {
  guestClusterID?: string;
  namespace?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      guestClusterID: 'GuestClusterID',
      namespace: 'Namespace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guestClusterID: 'string',
      namespace: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterPodsResponseBody extends $tea.Model {
  podList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      podList: 'PodList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      podList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterPodsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGuestClusterPodsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGuestClusterPodsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportedServicesDetailRequest extends $tea.Model {
  ASMGatewayName?: string;
  serviceMeshId?: string;
  serviceNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      ASMGatewayName: 'ASMGatewayName',
      serviceMeshId: 'ServiceMeshId',
      serviceNamespace: 'ServiceNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASMGatewayName: 'string',
      serviceMeshId: 'string',
      serviceNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportedServicesDetailResponseBody extends $tea.Model {
  details?: DescribeImportedServicesDetailResponseBodyDetails[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': DescribeImportedServicesDetailResponseBodyDetails },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportedServicesDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeImportedServicesDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeImportedServicesDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayDomainsRequest extends $tea.Model {
  istioGatewayName?: string;
  limit?: string;
  namespace?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      istioGatewayName: 'IstioGatewayName',
      limit: 'Limit',
      namespace: 'Namespace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioGatewayName: 'string',
      limit: 'string',
      namespace: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayDomainsResponseBody extends $tea.Model {
  gatewaySecretDetails?: DescribeIstioGatewayDomainsResponseBodyGatewaySecretDetails[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewaySecretDetails: 'GatewaySecretDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewaySecretDetails: { 'type': 'array', 'itemType': DescribeIstioGatewayDomainsResponseBodyGatewaySecretDetails },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIstioGatewayDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIstioGatewayDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailRequest extends $tea.Model {
  istioGatewayName?: string;
  routeName?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      istioGatewayName: 'IstioGatewayName',
      routeName: 'RouteName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioGatewayName: 'string',
      routeName: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBody extends $tea.Model {
  description?: string;
  namespace?: string;
  priority?: number;
  requestId?: string;
  routeDetail?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetail;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      namespace: 'Namespace',
      priority: 'Priority',
      requestId: 'RequestId',
      routeDetail: 'RouteDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      namespace: 'string',
      priority: 'number',
      requestId: 'string',
      routeDetail: DescribeIstioGatewayRouteDetailResponseBodyRouteDetail,
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIstioGatewayRouteDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIstioGatewayRouteDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRoutesRequest extends $tea.Model {
  istioGatewayName?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      istioGatewayName: 'IstioGatewayName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioGatewayName: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRoutesResponseBody extends $tea.Model {
  managementRoutes?: DescribeIstioGatewayRoutesResponseBodyManagementRoutes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      managementRoutes: 'ManagementRoutes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managementRoutes: { 'type': 'array', 'itemType': DescribeIstioGatewayRoutesResponseBodyManagementRoutes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRoutesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIstioGatewayRoutesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIstioGatewayRoutesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetadataResponseBody extends $tea.Model {
  metaData?: DescribeMetadataResponseBodyMetaData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metaData: 'MetaData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaData: DescribeMetadataResponseBodyMetaData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetadataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMetadataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMetadataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigRequest extends $tea.Model {
  namespace?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBody extends $tea.Model {
  configPatches?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatches;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configPatches: 'ConfigPatches',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configPatches: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatches,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNamespaceScopeSidecarConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNamespaceScopeSidecarConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodesInstanceTypeRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodesInstanceTypeResponseBody extends $tea.Model {
  instanceTypes?: DescribeNodesInstanceTypeResponseBodyInstanceTypes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: { 'type': 'array', 'itemType': DescribeNodesInstanceTypeResponseBodyInstanceTypes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodesInstanceTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNodesInstanceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNodesInstanceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReusableSlbRequest extends $tea.Model {
  k8sClusterId?: string;
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusterId: 'K8sClusterId',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterId: 'string',
      networkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReusableSlbResponseBody extends $tea.Model {
  requestId?: string;
  reusableSlbList?: DescribeReusableSlbResponseBodyReusableSlbList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      reusableSlbList: 'ReusableSlbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reusableSlbList: { 'type': 'array', 'itemType': DescribeReusableSlbResponseBodyReusableSlbList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReusableSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeReusableSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeReusableSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshAdditionalStatusRequest extends $tea.Model {
  checkMode?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      checkMode: 'CheckMode',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkMode: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshAdditionalStatusResponseBody extends $tea.Model {
  clusterStatus?: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatus;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterStatus: 'ClusterStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStatus: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatus,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshAdditionalStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServiceMeshAdditionalStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceMeshAdditionalStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshClustersRequest extends $tea.Model {
  limit?: number;
  offset?: number;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      offset: 'Offset',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      offset: 'number',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshClustersResponseBody extends $tea.Model {
  clusters?: DescribeServiceMeshClustersResponseBodyClusters[];
  numberOfClusters?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      numberOfClusters: 'NumberOfClusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeServiceMeshClustersResponseBodyClusters },
      numberOfClusters: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServiceMeshClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceMeshClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBody extends $tea.Model {
  requestId?: string;
  serviceMesh?: DescribeServiceMeshDetailResponseBodyServiceMesh;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceMesh: 'ServiceMesh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceMesh: DescribeServiceMeshDetailResponseBodyServiceMesh,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServiceMeshDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceMeshDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshKubeconfigRequest extends $tea.Model {
  privateIpAddress?: boolean;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: 'boolean',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshKubeconfigResponseBody extends $tea.Model {
  expireTime?: string;
  kubeconfig?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      kubeconfig: 'Kubeconfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      kubeconfig: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshKubeconfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServiceMeshKubeconfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceMeshKubeconfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshLogsRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshLogsResponseBody extends $tea.Model {
  logs?: DescribeServiceMeshLogsResponseBodyLogs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': DescribeServiceMeshLogsResponseBodyLogs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServiceMeshLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceMeshLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshProxyStatusRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshProxyStatusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  proxyStatus?: DescribeServiceMeshProxyStatusResponseBodyProxyStatus[];
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      proxyStatus: 'ProxyStatus',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      proxyStatus: { 'type': 'array', 'itemType': DescribeServiceMeshProxyStatusResponseBodyProxyStatus },
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshProxyStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServiceMeshProxyStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceMeshProxyStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshUpgradeStatusRequest extends $tea.Model {
  allIstioGatewayFullNames?: string;
  guestClusterIds?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      allIstioGatewayFullNames: 'AllIstioGatewayFullNames',
      guestClusterIds: 'GuestClusterIds',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allIstioGatewayFullNames: 'string',
      guestClusterIds: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshUpgradeStatusResponseBody extends $tea.Model {
  requestId?: string;
  upgradeDetail?: DescribeServiceMeshUpgradeStatusResponseBodyUpgradeDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      upgradeDetail: 'UpgradeDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      upgradeDetail: DescribeServiceMeshUpgradeStatusResponseBodyUpgradeDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshUpgradeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServiceMeshUpgradeStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceMeshUpgradeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshVMsRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshVMsResponseBody extends $tea.Model {
  requestId?: string;
  VMs?: DescribeServiceMeshVMsResponseBodyVMs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      VMs: 'VMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      VMs: { 'type': 'array', 'itemType': DescribeServiceMeshVMsResponseBodyVMs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshVMsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServiceMeshVMsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceMeshVMsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesRequest extends $tea.Model {
  tag?: DescribeServiceMeshesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeServiceMeshesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBody extends $tea.Model {
  requestId?: string;
  serviceMeshes?: DescribeServiceMeshesResponseBodyServiceMeshes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceMeshes: 'ServiceMeshes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceMeshes: { 'type': 'array', 'itemType': DescribeServiceMeshesResponseBodyServiceMeshes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServiceMeshesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceMeshesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpgradeVersionRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpgradeVersionResponseBody extends $tea.Model {
  requestId?: string;
  version?: DescribeUpgradeVersionResponseBodyVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      version: DescribeUpgradeVersionResponseBodyVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpgradeVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUpgradeVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUpgradeVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserPermissionsRequest extends $tea.Model {
  subAccountUserId?: string;
  static names(): { [key: string]: string } {
    return {
      subAccountUserId: 'SubAccountUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subAccountUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserPermissionsResponseBody extends $tea.Model {
  permissions?: DescribeUserPermissionsResponseBodyPermissions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': DescribeUserPermissionsResponseBodyPermissions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserPermissionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersWithPermissionsRequest extends $tea.Model {
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersWithPermissionsResponseBody extends $tea.Model {
  requestId?: string;
  UIDs?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      UIDs: 'UIDs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      UIDs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersWithPermissionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUsersWithPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsersWithPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVMsInServiceMeshRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVMsInServiceMeshResponseBody extends $tea.Model {
  requestId?: string;
  VMs?: DescribeVMsInServiceMeshResponseBodyVMs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      VMs: 'VMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      VMs: { 'type': 'array', 'itemType': DescribeVMsInServiceMeshResponseBodyVMs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVMsInServiceMeshResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVMsInServiceMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVMsInServiceMeshResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesRequest extends $tea.Model {
  regionId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  vSwitches?: DescribeVSwitchesResponseBodyVSwitches[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vSwitches: { 'type': 'array', 'itemType': DescribeVSwitchesResponseBodyVSwitches },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVSwitchesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVSwitchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionsResponseBody extends $tea.Model {
  requestId?: string;
  versionInfo?: DescribeVersionsResponseBodyVersionInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionInfo: 'VersionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionInfo: { 'type': 'array', 'itemType': DescribeVersionsResponseBodyVersionInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsRequest extends $tea.Model {
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

export class DescribeVpcsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  vpcs?: DescribeVpcsResponseBodyVpcs[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vpcs: { 'type': 'array', 'itemType': DescribeVpcsResponseBodyVpcs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVpcsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaCertRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaCertResponseBody extends $tea.Model {
  caCert?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      caCert: 'CaCert',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCert: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaCertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCaCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCaCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentBySelectorRequest extends $tea.Model {
  guestCluster?: string;
  labelSelector?: { [key: string]: string };
  limit?: number;
  mark?: string;
  nameSpace?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      guestCluster: 'GuestCluster',
      labelSelector: 'LabelSelector',
      limit: 'Limit',
      mark: 'Mark',
      nameSpace: 'NameSpace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guestCluster: 'string',
      labelSelector: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      limit: 'number',
      mark: 'string',
      nameSpace: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentBySelectorShrinkRequest extends $tea.Model {
  guestCluster?: string;
  labelSelectorShrink?: string;
  limit?: number;
  mark?: string;
  nameSpace?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      guestCluster: 'GuestCluster',
      labelSelectorShrink: 'LabelSelector',
      limit: 'Limit',
      mark: 'Mark',
      nameSpace: 'NameSpace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guestCluster: 'string',
      labelSelectorShrink: 'string',
      limit: 'number',
      mark: 'string',
      nameSpace: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentBySelectorResponseBody extends $tea.Model {
  deploymentNameList?: Buffer[];
  mark?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentNameList: 'DeploymentNameList',
      mark: 'Mark',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentNameList: { 'type': 'array', 'itemType': 'Buffer' },
      mark: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentBySelectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeploymentBySelectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeploymentBySelectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGrafanaDashboardUrlRequest extends $tea.Model {
  k8sClusterId?: string;
  serviceMeshId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusterId: 'K8sClusterId',
      serviceMeshId: 'ServiceMeshId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterId: 'string',
      serviceMeshId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGrafanaDashboardUrlResponseBody extends $tea.Model {
  dashboards?: GetGrafanaDashboardUrlResponseBodyDashboards[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dashboards: 'Dashboards',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboards: { 'type': 'array', 'itemType': GetGrafanaDashboardUrlResponseBodyDashboards },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGrafanaDashboardUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGrafanaDashboardUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGrafanaDashboardUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceEndpointsRequest extends $tea.Model {
  clusterIds?: string;
  name?: string;
  namespace?: string;
  serviceMeshId?: string;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      name: 'Name',
      namespace: 'Namespace',
      serviceMeshId: 'ServiceMeshId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: 'string',
      name: 'string',
      namespace: 'string',
      serviceMeshId: 'string',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceEndpointsResponseBody extends $tea.Model {
  endPointSlice?: GetRegisteredServiceEndpointsResponseBodyEndPointSlice;
  requestId?: string;
  serviceEndpoints?: GetRegisteredServiceEndpointsResponseBodyServiceEndpoints[];
  static names(): { [key: string]: string } {
    return {
      endPointSlice: 'EndPointSlice',
      requestId: 'RequestId',
      serviceEndpoints: 'ServiceEndpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPointSlice: GetRegisteredServiceEndpointsResponseBodyEndPointSlice,
      requestId: 'string',
      serviceEndpoints: { 'type': 'array', 'itemType': GetRegisteredServiceEndpointsResponseBodyServiceEndpoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceEndpointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRegisteredServiceEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRegisteredServiceEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceNamespacesRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceNamespacesResponseBody extends $tea.Model {
  namespaces?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceNamespacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRegisteredServiceNamespacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRegisteredServiceNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimLaneDetailRequest extends $tea.Model {
  groupName?: string;
  serviceMeshId?: string;
  swimLaneName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      serviceMeshId: 'ServiceMeshId',
      swimLaneName: 'SwimLaneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      serviceMeshId: 'string',
      swimLaneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimLaneDetailResponseBody extends $tea.Model {
  ingressRule?: string;
  ingressService?: string;
  labelSelectorKey?: string;
  labelSelectorValue?: string;
  requestId?: string;
  servicesList?: string;
  static names(): { [key: string]: string } {
    return {
      ingressRule: 'IngressRule',
      ingressService: 'IngressService',
      labelSelectorKey: 'LabelSelectorKey',
      labelSelectorValue: 'LabelSelectorValue',
      requestId: 'RequestId',
      servicesList: 'ServicesList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressRule: 'string',
      ingressService: 'string',
      labelSelectorKey: 'string',
      labelSelectorValue: 'string',
      requestId: 'string',
      servicesList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimLaneDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSwimLaneDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSwimLaneDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimLaneGroupListRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimLaneGroupListResponseBody extends $tea.Model {
  requestId?: string;
  swimLaneGroupList?: GetSwimLaneGroupListResponseBodySwimLaneGroupList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      swimLaneGroupList: 'SwimLaneGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      swimLaneGroupList: { 'type': 'array', 'itemType': GetSwimLaneGroupListResponseBodySwimLaneGroupList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimLaneGroupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSwimLaneGroupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSwimLaneGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimLaneListRequest extends $tea.Model {
  groupName?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimLaneListResponseBody extends $tea.Model {
  requestId?: string;
  swimLaneList?: GetSwimLaneListResponseBodySwimLaneList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      swimLaneList: 'SwimLaneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      swimLaneList: { 'type': 'array', 'itemType': GetSwimLaneListResponseBodySwimLaneList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimLaneListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSwimLaneListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSwimLaneListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmAppMeshInfoRequest extends $tea.Model {
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmAppMeshInfoResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmAppMeshInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVmAppMeshInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVmAppMeshInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmMetaRequest extends $tea.Model {
  namespace?: string;
  serviceAccount?: string;
  serviceMeshId?: string;
  trustDomain?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      serviceAccount: 'ServiceAccount',
      serviceMeshId: 'ServiceMeshId',
      trustDomain: 'TrustDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      serviceAccount: 'string',
      serviceMeshId: 'string',
      trustDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmMetaResponseBody extends $tea.Model {
  requestId?: string;
  vmMetaInfo?: GetVmMetaResponseBodyVmMetaInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vmMetaInfo: 'VmMetaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vmMetaInfo: GetVmMetaResponseBodyVmMetaInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVmMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVmMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPermissionsRequest extends $tea.Model {
  permissions?: string;
  subAccountUserId?: string;
  subAccountUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      subAccountUserId: 'SubAccountUserId',
      subAccountUserIds: 'SubAccountUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: 'string',
      subAccountUserId: 'string',
      subAccountUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPermissionsShrinkRequest extends $tea.Model {
  permissions?: string;
  subAccountUserId?: string;
  subAccountUserIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      subAccountUserId: 'SubAccountUserId',
      subAccountUserIdsShrink: 'SubAccountUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: 'string',
      subAccountUserId: 'string',
      subAccountUserIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPermissionsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPermissionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GrantUserPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GrantUserPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyApiServerEipResourceRequest extends $tea.Model {
  apiServerEipId?: string;
  operation?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      apiServerEipId: 'ApiServerEipId',
      operation: 'Operation',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServerEipId: 'string',
      operation: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiServerEipResourceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiServerEipResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyApiServerEipResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyApiServerEipResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceMeshNameRequest extends $tea.Model {
  name?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceMeshNameResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceMeshNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyServiceMeshNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyServiceMeshNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReActivateAuditRequest extends $tea.Model {
  enableAudit?: boolean;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      enableAudit: 'EnableAudit',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAudit: 'boolean',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReActivateAuditResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReActivateAuditResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReActivateAuditResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReActivateAuditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterFromServiceMeshRequest extends $tea.Model {
  clusterId?: string;
  reserveNamespace?: boolean;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      reserveNamespace: 'ReserveNamespace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      reserveNamespace: 'boolean',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterFromServiceMeshResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterFromServiceMeshResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveClusterFromServiceMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveClusterFromServiceMeshResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVMFromServiceMeshRequest extends $tea.Model {
  ecsId?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsId: 'EcsId',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsId: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVMFromServiceMeshResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVMFromServiceMeshResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveVMFromServiceMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveVMFromServiceMeshResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeKubeconfigRequest extends $tea.Model {
  privateIpAddress?: boolean;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: 'boolean',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeKubeconfigResponseBody extends $tea.Model {
  kubeconfig?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kubeconfig: 'Kubeconfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeconfig: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeKubeconfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RevokeKubeconfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeKubeconfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

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

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
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
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

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

export class UpdateASMGatewayRequest extends $tea.Model {
  body?: string;
  istioGatewayName?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      istioGatewayName: 'IstioGatewayName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      istioGatewayName: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateASMGatewayResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateASMGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateASMGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateASMGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateASMGatewayImportedServicesRequest extends $tea.Model {
  ASMGatewayName?: string;
  serviceMeshId?: string;
  serviceNames?: string;
  serviceNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      ASMGatewayName: 'ASMGatewayName',
      serviceMeshId: 'ServiceMeshId',
      serviceNames: 'ServiceNames',
      serviceNamespace: 'ServiceNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASMGatewayName: 'string',
      serviceMeshId: 'string',
      serviceNames: 'string',
      serviceNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateASMGatewayImportedServicesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateASMGatewayImportedServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateASMGatewayImportedServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateASMGatewayImportedServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateASMNamespaceFromGuestClusterRequest extends $tea.Model {
  k8sClusterId?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusterId: 'K8sClusterId',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterId: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateASMNamespaceFromGuestClusterResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateASMNamespaceFromGuestClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateASMNamespaceFromGuestClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateASMNamespaceFromGuestClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateControlPlaneLogConfigRequest extends $tea.Model {
  enabled?: boolean;
  logTTLInDay?: number;
  project?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      logTTLInDay: 'LogTTLInDay',
      project: 'Project',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      logTTLInDay: 'number',
      project: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateControlPlaneLogConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateControlPlaneLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateControlPlaneLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateControlPlaneLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequest extends $tea.Model {
  description?: string;
  gatewayRoute?: UpdateIstioGatewayRoutesRequestGatewayRoute;
  istioGatewayName?: string;
  priority?: number;
  serviceMeshId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gatewayRoute: 'GatewayRoute',
      istioGatewayName: 'IstioGatewayName',
      priority: 'Priority',
      serviceMeshId: 'ServiceMeshId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayRoute: UpdateIstioGatewayRoutesRequestGatewayRoute,
      istioGatewayName: 'string',
      priority: 'number',
      serviceMeshId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesShrinkRequest extends $tea.Model {
  description?: string;
  gatewayRouteShrink?: string;
  istioGatewayName?: string;
  priority?: number;
  serviceMeshId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gatewayRouteShrink: 'GatewayRoute',
      istioGatewayName: 'IstioGatewayName',
      priority: 'Priority',
      serviceMeshId: 'ServiceMeshId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayRouteShrink: 'string',
      istioGatewayName: 'string',
      priority: 'number',
      serviceMeshId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateIstioGatewayRoutesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIstioGatewayRoutesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioInjectionConfigRequest extends $tea.Model {
  dataPlaneMode?: string;
  enableIstioInjection?: boolean;
  enableSidecarSetInjection?: boolean;
  istioRev?: string;
  namespace?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPlaneMode: 'DataPlaneMode',
      enableIstioInjection: 'EnableIstioInjection',
      enableSidecarSetInjection: 'EnableSidecarSetInjection',
      istioRev: 'IstioRev',
      namespace: 'Namespace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPlaneMode: 'string',
      enableIstioInjection: 'boolean',
      enableSidecarSetInjection: 'boolean',
      istioRev: 'string',
      namespace: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioInjectionConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioInjectionConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateIstioInjectionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIstioInjectionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioRouteAdditionalStatusRequest extends $tea.Model {
  description?: string;
  istioGatewayName?: string;
  priority?: number;
  routeName?: string;
  serviceMeshId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      istioGatewayName: 'IstioGatewayName',
      priority: 'Priority',
      routeName: 'RouteName',
      serviceMeshId: 'ServiceMeshId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      istioGatewayName: 'string',
      priority: 'number',
      routeName: 'string',
      serviceMeshId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioRouteAdditionalStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioRouteAdditionalStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateIstioRouteAdditionalStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIstioRouteAdditionalStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMeshCRAggregationRequest extends $tea.Model {
  CPULimit?: string;
  CPURequirement?: string;
  enabled?: boolean;
  memoryLimit?: string;
  memoryRequirement?: string;
  serviceMeshId?: string;
  usePublicApiServer?: boolean;
  static names(): { [key: string]: string } {
    return {
      CPULimit: 'CPULimit',
      CPURequirement: 'CPURequirement',
      enabled: 'Enabled',
      memoryLimit: 'MemoryLimit',
      memoryRequirement: 'MemoryRequirement',
      serviceMeshId: 'ServiceMeshId',
      usePublicApiServer: 'UsePublicApiServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPULimit: 'string',
      CPURequirement: 'string',
      enabled: 'boolean',
      memoryLimit: 'string',
      memoryRequirement: 'string',
      serviceMeshId: 'string',
      usePublicApiServer: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMeshCRAggregationResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMeshCRAggregationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMeshCRAggregationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMeshCRAggregationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMeshFeatureRequest extends $tea.Model {
  accessLogEnabled?: boolean;
  accessLogFile?: string;
  accessLogFormat?: string;
  accessLogGatewayEnabled?: boolean;
  accessLogGatewayLifecycle?: number;
  accessLogProject?: string;
  accessLogServiceEnabled?: boolean;
  accessLogServiceHost?: string;
  accessLogServicePort?: number;
  accessLogSidecarEnabled?: boolean;
  accessLogSidecarLifecycle?: number;
  auditProject?: string;
  autoInjectionPolicyEnabled?: boolean;
  CRAggregationEnabled?: boolean;
  clusterSpec?: string;
  cniEnabled?: boolean;
  cniExcludeNamespaces?: string;
  concurrency?: number;
  configSourceEnabled?: boolean;
  configSourceNacosID?: string;
  customizedPrometheus?: boolean;
  customizedZipkin?: boolean;
  DNSProxyingEnabled?: boolean;
  defaultComponentsScheduleConfig?: string;
  discoverySelectors?: string;
  dubboFilterEnabled?: boolean;
  enableAudit?: boolean;
  enableAutoDiagnosis?: boolean;
  enableBootstrapXdsAgent?: boolean;
  enableCRHistory?: boolean;
  enableNamespacesByDefault?: boolean;
  enableSDSServer?: boolean;
  excludeIPRanges?: string;
  excludeInboundPorts?: string;
  excludeOutboundPorts?: string;
  filterGatewayClusterConfig?: boolean;
  gatewayAPIEnabled?: boolean;
  holdApplicationUntilProxyStarts?: boolean;
  http10Enabled?: boolean;
  includeIPRanges?: string;
  includeInboundPorts?: string;
  includeOutboundPorts?: string;
  integrateKiali?: boolean;
  interceptionMode?: string;
  kialiArmsAuthTokens?: string;
  kialiEnabled?: boolean;
  kialiServiceAnnotations?: string;
  lifecycle?: string;
  localityLBConf?: string;
  localityLoadBalancing?: boolean;
  logLevel?: string;
  MSEEnabled?: boolean;
  multiBufferEnabled?: boolean;
  multiBufferPollDelay?: string;
  mysqlFilterEnabled?: boolean;
  NFDEnabled?: boolean;
  NFDLabelPruned?: boolean;
  OPAInjectorCPULimit?: string;
  OPAInjectorCPURequirement?: string;
  OPAInjectorMemoryLimit?: string;
  OPAInjectorMemoryRequirement?: string;
  OPALimitCPU?: string;
  OPALimitMemory?: string;
  OPALogLevel?: string;
  OPARequestCPU?: string;
  OPARequestMemory?: string;
  OPAScopeInjected?: boolean;
  opaEnabled?: boolean;
  openAgentPolicy?: boolean;
  outboundTrafficPolicy?: string;
  prometheusUrl?: string;
  proxyInitCPUResourceLimit?: string;
  proxyInitCPUResourceRequest?: string;
  proxyInitMemoryResourceLimit?: string;
  proxyInitMemoryResourceRequest?: string;
  proxyLimitCPU?: string;
  proxyLimitMemory?: string;
  proxyRequestCPU?: string;
  proxyRequestMemory?: string;
  proxyStatsMatcher?: string;
  redisFilterEnabled?: boolean;
  serviceMeshId?: string;
  sidecarInjectorLimitCPU?: string;
  sidecarInjectorLimitMemory?: string;
  sidecarInjectorRequestCPU?: string;
  sidecarInjectorRequestMemory?: string;
  sidecarInjectorWebhookAsYaml?: string;
  telemetry?: boolean;
  terminationDrainDuration?: string;
  thriftFilterEnabled?: boolean;
  traceCustomTags?: string;
  traceMaxPathTagLength?: string;
  traceSampling?: number;
  tracing?: boolean;
  tracingOnExtZipkinLimitCPU?: string;
  tracingOnExtZipkinLimitMemory?: string;
  tracingOnExtZipkinRequestCPU?: string;
  tracingOnExtZipkinRequestMemory?: string;
  webAssemblyFilterEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessLogEnabled: 'AccessLogEnabled',
      accessLogFile: 'AccessLogFile',
      accessLogFormat: 'AccessLogFormat',
      accessLogGatewayEnabled: 'AccessLogGatewayEnabled',
      accessLogGatewayLifecycle: 'AccessLogGatewayLifecycle',
      accessLogProject: 'AccessLogProject',
      accessLogServiceEnabled: 'AccessLogServiceEnabled',
      accessLogServiceHost: 'AccessLogServiceHost',
      accessLogServicePort: 'AccessLogServicePort',
      accessLogSidecarEnabled: 'AccessLogSidecarEnabled',
      accessLogSidecarLifecycle: 'AccessLogSidecarLifecycle',
      auditProject: 'AuditProject',
      autoInjectionPolicyEnabled: 'AutoInjectionPolicyEnabled',
      CRAggregationEnabled: 'CRAggregationEnabled',
      clusterSpec: 'ClusterSpec',
      cniEnabled: 'CniEnabled',
      cniExcludeNamespaces: 'CniExcludeNamespaces',
      concurrency: 'Concurrency',
      configSourceEnabled: 'ConfigSourceEnabled',
      configSourceNacosID: 'ConfigSourceNacosID',
      customizedPrometheus: 'CustomizedPrometheus',
      customizedZipkin: 'CustomizedZipkin',
      DNSProxyingEnabled: 'DNSProxyingEnabled',
      defaultComponentsScheduleConfig: 'DefaultComponentsScheduleConfig',
      discoverySelectors: 'DiscoverySelectors',
      dubboFilterEnabled: 'DubboFilterEnabled',
      enableAudit: 'EnableAudit',
      enableAutoDiagnosis: 'EnableAutoDiagnosis',
      enableBootstrapXdsAgent: 'EnableBootstrapXdsAgent',
      enableCRHistory: 'EnableCRHistory',
      enableNamespacesByDefault: 'EnableNamespacesByDefault',
      enableSDSServer: 'EnableSDSServer',
      excludeIPRanges: 'ExcludeIPRanges',
      excludeInboundPorts: 'ExcludeInboundPorts',
      excludeOutboundPorts: 'ExcludeOutboundPorts',
      filterGatewayClusterConfig: 'FilterGatewayClusterConfig',
      gatewayAPIEnabled: 'GatewayAPIEnabled',
      holdApplicationUntilProxyStarts: 'HoldApplicationUntilProxyStarts',
      http10Enabled: 'Http10Enabled',
      includeIPRanges: 'IncludeIPRanges',
      includeInboundPorts: 'IncludeInboundPorts',
      includeOutboundPorts: 'IncludeOutboundPorts',
      integrateKiali: 'IntegrateKiali',
      interceptionMode: 'InterceptionMode',
      kialiArmsAuthTokens: 'KialiArmsAuthTokens',
      kialiEnabled: 'KialiEnabled',
      kialiServiceAnnotations: 'KialiServiceAnnotations',
      lifecycle: 'Lifecycle',
      localityLBConf: 'LocalityLBConf',
      localityLoadBalancing: 'LocalityLoadBalancing',
      logLevel: 'LogLevel',
      MSEEnabled: 'MSEEnabled',
      multiBufferEnabled: 'MultiBufferEnabled',
      multiBufferPollDelay: 'MultiBufferPollDelay',
      mysqlFilterEnabled: 'MysqlFilterEnabled',
      NFDEnabled: 'NFDEnabled',
      NFDLabelPruned: 'NFDLabelPruned',
      OPAInjectorCPULimit: 'OPAInjectorCPULimit',
      OPAInjectorCPURequirement: 'OPAInjectorCPURequirement',
      OPAInjectorMemoryLimit: 'OPAInjectorMemoryLimit',
      OPAInjectorMemoryRequirement: 'OPAInjectorMemoryRequirement',
      OPALimitCPU: 'OPALimitCPU',
      OPALimitMemory: 'OPALimitMemory',
      OPALogLevel: 'OPALogLevel',
      OPARequestCPU: 'OPARequestCPU',
      OPARequestMemory: 'OPARequestMemory',
      OPAScopeInjected: 'OPAScopeInjected',
      opaEnabled: 'OpaEnabled',
      openAgentPolicy: 'OpenAgentPolicy',
      outboundTrafficPolicy: 'OutboundTrafficPolicy',
      prometheusUrl: 'PrometheusUrl',
      proxyInitCPUResourceLimit: 'ProxyInitCPUResourceLimit',
      proxyInitCPUResourceRequest: 'ProxyInitCPUResourceRequest',
      proxyInitMemoryResourceLimit: 'ProxyInitMemoryResourceLimit',
      proxyInitMemoryResourceRequest: 'ProxyInitMemoryResourceRequest',
      proxyLimitCPU: 'ProxyLimitCPU',
      proxyLimitMemory: 'ProxyLimitMemory',
      proxyRequestCPU: 'ProxyRequestCPU',
      proxyRequestMemory: 'ProxyRequestMemory',
      proxyStatsMatcher: 'ProxyStatsMatcher',
      redisFilterEnabled: 'RedisFilterEnabled',
      serviceMeshId: 'ServiceMeshId',
      sidecarInjectorLimitCPU: 'SidecarInjectorLimitCPU',
      sidecarInjectorLimitMemory: 'SidecarInjectorLimitMemory',
      sidecarInjectorRequestCPU: 'SidecarInjectorRequestCPU',
      sidecarInjectorRequestMemory: 'SidecarInjectorRequestMemory',
      sidecarInjectorWebhookAsYaml: 'SidecarInjectorWebhookAsYaml',
      telemetry: 'Telemetry',
      terminationDrainDuration: 'TerminationDrainDuration',
      thriftFilterEnabled: 'ThriftFilterEnabled',
      traceCustomTags: 'TraceCustomTags',
      traceMaxPathTagLength: 'TraceMaxPathTagLength',
      traceSampling: 'TraceSampling',
      tracing: 'Tracing',
      tracingOnExtZipkinLimitCPU: 'TracingOnExtZipkinLimitCPU',
      tracingOnExtZipkinLimitMemory: 'TracingOnExtZipkinLimitMemory',
      tracingOnExtZipkinRequestCPU: 'TracingOnExtZipkinRequestCPU',
      tracingOnExtZipkinRequestMemory: 'TracingOnExtZipkinRequestMemory',
      webAssemblyFilterEnabled: 'WebAssemblyFilterEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogEnabled: 'boolean',
      accessLogFile: 'string',
      accessLogFormat: 'string',
      accessLogGatewayEnabled: 'boolean',
      accessLogGatewayLifecycle: 'number',
      accessLogProject: 'string',
      accessLogServiceEnabled: 'boolean',
      accessLogServiceHost: 'string',
      accessLogServicePort: 'number',
      accessLogSidecarEnabled: 'boolean',
      accessLogSidecarLifecycle: 'number',
      auditProject: 'string',
      autoInjectionPolicyEnabled: 'boolean',
      CRAggregationEnabled: 'boolean',
      clusterSpec: 'string',
      cniEnabled: 'boolean',
      cniExcludeNamespaces: 'string',
      concurrency: 'number',
      configSourceEnabled: 'boolean',
      configSourceNacosID: 'string',
      customizedPrometheus: 'boolean',
      customizedZipkin: 'boolean',
      DNSProxyingEnabled: 'boolean',
      defaultComponentsScheduleConfig: 'string',
      discoverySelectors: 'string',
      dubboFilterEnabled: 'boolean',
      enableAudit: 'boolean',
      enableAutoDiagnosis: 'boolean',
      enableBootstrapXdsAgent: 'boolean',
      enableCRHistory: 'boolean',
      enableNamespacesByDefault: 'boolean',
      enableSDSServer: 'boolean',
      excludeIPRanges: 'string',
      excludeInboundPorts: 'string',
      excludeOutboundPorts: 'string',
      filterGatewayClusterConfig: 'boolean',
      gatewayAPIEnabled: 'boolean',
      holdApplicationUntilProxyStarts: 'boolean',
      http10Enabled: 'boolean',
      includeIPRanges: 'string',
      includeInboundPorts: 'string',
      includeOutboundPorts: 'string',
      integrateKiali: 'boolean',
      interceptionMode: 'string',
      kialiArmsAuthTokens: 'string',
      kialiEnabled: 'boolean',
      kialiServiceAnnotations: 'string',
      lifecycle: 'string',
      localityLBConf: 'string',
      localityLoadBalancing: 'boolean',
      logLevel: 'string',
      MSEEnabled: 'boolean',
      multiBufferEnabled: 'boolean',
      multiBufferPollDelay: 'string',
      mysqlFilterEnabled: 'boolean',
      NFDEnabled: 'boolean',
      NFDLabelPruned: 'boolean',
      OPAInjectorCPULimit: 'string',
      OPAInjectorCPURequirement: 'string',
      OPAInjectorMemoryLimit: 'string',
      OPAInjectorMemoryRequirement: 'string',
      OPALimitCPU: 'string',
      OPALimitMemory: 'string',
      OPALogLevel: 'string',
      OPARequestCPU: 'string',
      OPARequestMemory: 'string',
      OPAScopeInjected: 'boolean',
      opaEnabled: 'boolean',
      openAgentPolicy: 'boolean',
      outboundTrafficPolicy: 'string',
      prometheusUrl: 'string',
      proxyInitCPUResourceLimit: 'string',
      proxyInitCPUResourceRequest: 'string',
      proxyInitMemoryResourceLimit: 'string',
      proxyInitMemoryResourceRequest: 'string',
      proxyLimitCPU: 'string',
      proxyLimitMemory: 'string',
      proxyRequestCPU: 'string',
      proxyRequestMemory: 'string',
      proxyStatsMatcher: 'string',
      redisFilterEnabled: 'boolean',
      serviceMeshId: 'string',
      sidecarInjectorLimitCPU: 'string',
      sidecarInjectorLimitMemory: 'string',
      sidecarInjectorRequestCPU: 'string',
      sidecarInjectorRequestMemory: 'string',
      sidecarInjectorWebhookAsYaml: 'string',
      telemetry: 'boolean',
      terminationDrainDuration: 'string',
      thriftFilterEnabled: 'boolean',
      traceCustomTags: 'string',
      traceMaxPathTagLength: 'string',
      traceSampling: 'number',
      tracing: 'boolean',
      tracingOnExtZipkinLimitCPU: 'string',
      tracingOnExtZipkinLimitMemory: 'string',
      tracingOnExtZipkinRequestCPU: 'string',
      tracingOnExtZipkinRequestMemory: 'string',
      webAssemblyFilterEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMeshFeatureResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMeshFeatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMeshFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMeshFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceScopeSidecarConfigRequest extends $tea.Model {
  concurrency?: number;
  enableCoreDump?: boolean;
  excludeIPRanges?: string;
  excludeInboundPorts?: string;
  excludeOutboundPorts?: string;
  holdApplicationUntilProxyStarts?: boolean;
  includeIPRanges?: string;
  includeInboundPorts?: string;
  includeOutboundPorts?: string;
  interceptionMode?: string;
  istioDNSProxyEnabled?: boolean;
  lifecycle?: string;
  logLevel?: string;
  namespace?: string;
  postStart?: string;
  preStop?: string;
  privileged?: boolean;
  proxyInitAckSloCPUResourceLimit?: string;
  proxyInitAckSloCPUResourceRequest?: string;
  proxyInitAckSloMemoryResourceLimit?: string;
  proxyInitAckSloMemoryResourceRequest?: string;
  proxyInitCPUResourceLimit?: string;
  proxyInitCPUResourceRequest?: string;
  proxyInitMemoryResourceLimit?: string;
  proxyInitMemoryResourceRequest?: string;
  proxyMetadata?: string;
  proxyStatsMatcher?: string;
  readinessFailureThreshold?: number;
  readinessInitialDelaySeconds?: number;
  readinessPeriodSeconds?: number;
  serviceMeshId?: string;
  sidecarProxyAckSloCPUResourceLimit?: string;
  sidecarProxyAckSloCPUResourceRequest?: string;
  sidecarProxyAckSloMemoryResourceLimit?: string;
  sidecarProxyAckSloMemoryResourceRequest?: string;
  sidecarProxyCPUResourceLimit?: string;
  sidecarProxyCPUResourceRequest?: string;
  sidecarProxyMemoryResourceLimit?: string;
  sidecarProxyMemoryResourceRequest?: string;
  terminationDrainDuration?: string;
  tracing?: string;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      enableCoreDump: 'EnableCoreDump',
      excludeIPRanges: 'ExcludeIPRanges',
      excludeInboundPorts: 'ExcludeInboundPorts',
      excludeOutboundPorts: 'ExcludeOutboundPorts',
      holdApplicationUntilProxyStarts: 'HoldApplicationUntilProxyStarts',
      includeIPRanges: 'IncludeIPRanges',
      includeInboundPorts: 'IncludeInboundPorts',
      includeOutboundPorts: 'IncludeOutboundPorts',
      interceptionMode: 'InterceptionMode',
      istioDNSProxyEnabled: 'IstioDNSProxyEnabled',
      lifecycle: 'Lifecycle',
      logLevel: 'LogLevel',
      namespace: 'Namespace',
      postStart: 'PostStart',
      preStop: 'PreStop',
      privileged: 'Privileged',
      proxyInitAckSloCPUResourceLimit: 'ProxyInitAckSloCPUResourceLimit',
      proxyInitAckSloCPUResourceRequest: 'ProxyInitAckSloCPUResourceRequest',
      proxyInitAckSloMemoryResourceLimit: 'ProxyInitAckSloMemoryResourceLimit',
      proxyInitAckSloMemoryResourceRequest: 'ProxyInitAckSloMemoryResourceRequest',
      proxyInitCPUResourceLimit: 'ProxyInitCPUResourceLimit',
      proxyInitCPUResourceRequest: 'ProxyInitCPUResourceRequest',
      proxyInitMemoryResourceLimit: 'ProxyInitMemoryResourceLimit',
      proxyInitMemoryResourceRequest: 'ProxyInitMemoryResourceRequest',
      proxyMetadata: 'ProxyMetadata',
      proxyStatsMatcher: 'ProxyStatsMatcher',
      readinessFailureThreshold: 'ReadinessFailureThreshold',
      readinessInitialDelaySeconds: 'ReadinessInitialDelaySeconds',
      readinessPeriodSeconds: 'ReadinessPeriodSeconds',
      serviceMeshId: 'ServiceMeshId',
      sidecarProxyAckSloCPUResourceLimit: 'SidecarProxyAckSloCPUResourceLimit',
      sidecarProxyAckSloCPUResourceRequest: 'SidecarProxyAckSloCPUResourceRequest',
      sidecarProxyAckSloMemoryResourceLimit: 'SidecarProxyAckSloMemoryResourceLimit',
      sidecarProxyAckSloMemoryResourceRequest: 'SidecarProxyAckSloMemoryResourceRequest',
      sidecarProxyCPUResourceLimit: 'SidecarProxyCPUResourceLimit',
      sidecarProxyCPUResourceRequest: 'SidecarProxyCPUResourceRequest',
      sidecarProxyMemoryResourceLimit: 'SidecarProxyMemoryResourceLimit',
      sidecarProxyMemoryResourceRequest: 'SidecarProxyMemoryResourceRequest',
      terminationDrainDuration: 'TerminationDrainDuration',
      tracing: 'Tracing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      enableCoreDump: 'boolean',
      excludeIPRanges: 'string',
      excludeInboundPorts: 'string',
      excludeOutboundPorts: 'string',
      holdApplicationUntilProxyStarts: 'boolean',
      includeIPRanges: 'string',
      includeInboundPorts: 'string',
      includeOutboundPorts: 'string',
      interceptionMode: 'string',
      istioDNSProxyEnabled: 'boolean',
      lifecycle: 'string',
      logLevel: 'string',
      namespace: 'string',
      postStart: 'string',
      preStop: 'string',
      privileged: 'boolean',
      proxyInitAckSloCPUResourceLimit: 'string',
      proxyInitAckSloCPUResourceRequest: 'string',
      proxyInitAckSloMemoryResourceLimit: 'string',
      proxyInitAckSloMemoryResourceRequest: 'string',
      proxyInitCPUResourceLimit: 'string',
      proxyInitCPUResourceRequest: 'string',
      proxyInitMemoryResourceLimit: 'string',
      proxyInitMemoryResourceRequest: 'string',
      proxyMetadata: 'string',
      proxyStatsMatcher: 'string',
      readinessFailureThreshold: 'number',
      readinessInitialDelaySeconds: 'number',
      readinessPeriodSeconds: 'number',
      serviceMeshId: 'string',
      sidecarProxyAckSloCPUResourceLimit: 'string',
      sidecarProxyAckSloCPUResourceRequest: 'string',
      sidecarProxyAckSloMemoryResourceLimit: 'string',
      sidecarProxyAckSloMemoryResourceRequest: 'string',
      sidecarProxyCPUResourceLimit: 'string',
      sidecarProxyCPUResourceRequest: 'string',
      sidecarProxyMemoryResourceLimit: 'string',
      sidecarProxyMemoryResourceRequest: 'string',
      terminationDrainDuration: 'string',
      tracing: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceScopeSidecarConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceScopeSidecarConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateNamespaceScopeSidecarConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNamespaceScopeSidecarConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimLaneRequest extends $tea.Model {
  groupName?: string;
  labelSelectorKey?: string;
  labelSelectorValue?: string;
  serviceMeshId?: string;
  servicesList?: string;
  swimLaneName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      labelSelectorKey: 'LabelSelectorKey',
      labelSelectorValue: 'LabelSelectorValue',
      serviceMeshId: 'ServiceMeshId',
      servicesList: 'ServicesList',
      swimLaneName: 'SwimLaneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      labelSelectorKey: 'string',
      labelSelectorValue: 'string',
      serviceMeshId: 'string',
      servicesList: 'string',
      swimLaneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimLaneResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimLaneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSwimLaneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSwimLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimLaneGroupRequest extends $tea.Model {
  fallbackTarget?: string;
  groupName?: string;
  serviceMeshId?: string;
  servicesList?: string;
  static names(): { [key: string]: string } {
    return {
      fallbackTarget: 'FallbackTarget',
      groupName: 'GroupName',
      serviceMeshId: 'ServiceMeshId',
      servicesList: 'ServicesList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fallbackTarget: 'string',
      groupName: 'string',
      serviceMeshId: 'string',
      servicesList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimLaneGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimLaneGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSwimLaneGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSwimLaneGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMeshEditionPartiallyRequest extends $tea.Model {
  ASMGatewayContinue?: boolean;
  expectedVersion?: string;
  preCheck?: boolean;
  serviceMeshId?: string;
  switchToPro?: boolean;
  upgradeGatewayRecords?: string;
  static names(): { [key: string]: string } {
    return {
      ASMGatewayContinue: 'ASMGatewayContinue',
      expectedVersion: 'ExpectedVersion',
      preCheck: 'PreCheck',
      serviceMeshId: 'ServiceMeshId',
      switchToPro: 'SwitchToPro',
      upgradeGatewayRecords: 'UpgradeGatewayRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASMGatewayContinue: 'boolean',
      expectedVersion: 'string',
      preCheck: 'boolean',
      serviceMeshId: 'string',
      switchToPro: 'boolean',
      upgradeGatewayRecords: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMeshEditionPartiallyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMeshEditionPartiallyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeMeshEditionPartiallyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeMeshEditionPartiallyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMeshVersionRequest extends $tea.Model {
  preCheck?: boolean;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      preCheck: 'PreCheck',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheck: 'boolean',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMeshVersionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMeshVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeMeshVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeMeshVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsDelegate extends $tea.Model {
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbortPercentage extends $tea.Model {
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbort extends $tea.Model {
  httpStatus?: number;
  percentage?: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbortPercentage;
  static names(): { [key: string]: string } {
    return {
      httpStatus: 'HttpStatus',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatus: 'number',
      percentage: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbortPercentage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelayPercentage extends $tea.Model {
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelay extends $tea.Model {
  fixedDelay?: string;
  percentage?: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelayPercentage;
  static names(): { [key: string]: string } {
    return {
      fixedDelay: 'FixedDelay',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedDelay: 'string',
      percentage: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelayPercentage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFault extends $tea.Model {
  abort?: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbort;
  delay?: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelay;
  static names(): { [key: string]: string } {
    return {
      abort: 'Abort',
      delay: 'Delay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abort: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbort,
      delay: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelay,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsHTTPRedirect extends $tea.Model {
  authority?: string;
  redirectCode?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      authority: 'Authority',
      redirectCode: 'RedirectCode',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authority: 'string',
      redirectCode: 'number',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirror extends $tea.Model {
  host?: string;
  subset?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      subset: 'Subset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      subset: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirrorPercentage extends $tea.Model {
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetriesRetryRemoteLocalities extends $tea.Model {
  value?: boolean;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetries extends $tea.Model {
  attempts?: number;
  perTryTimeout?: string;
  retryOn?: string;
  retryRemoteLocalities?: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetriesRetryRemoteLocalities;
  static names(): { [key: string]: string } {
    return {
      attempts: 'Attempts',
      perTryTimeout: 'PerTryTimeout',
      retryOn: 'RetryOn',
      retryRemoteLocalities: 'RetryRemoteLocalities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempts: 'number',
      perTryTimeout: 'string',
      retryOn: 'string',
      retryRemoteLocalities: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetriesRetryRemoteLocalities,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRewrite extends $tea.Model {
  authority?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      authority: 'Authority',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authority: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptions extends $tea.Model {
  delegate?: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsDelegate;
  fault?: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFault;
  HTTPRedirect?: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsHTTPRedirect;
  mirror?: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirror;
  mirrorPercentage?: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirrorPercentage;
  retries?: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetries;
  rewrite?: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRewrite;
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      delegate: 'Delegate',
      fault: 'Fault',
      HTTPRedirect: 'HTTPRedirect',
      mirror: 'Mirror',
      mirrorPercentage: 'MirrorPercentage',
      retries: 'Retries',
      rewrite: 'Rewrite',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegate: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsDelegate,
      fault: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFault,
      HTTPRedirect: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsHTTPRedirect,
      mirror: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirror,
      mirrorPercentage: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirrorPercentage,
      retries: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetries,
      rewrite: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRewrite,
      timeout: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteMatchRequestHeaders extends $tea.Model {
  matchingContent?: string;
  matchingMode?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      matchingContent: 'MatchingContent',
      matchingMode: 'MatchingMode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingContent: 'string',
      matchingMode: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteMatchRequestTLSMatchAttributes extends $tea.Model {
  SNIHosts?: string[];
  TLSPort?: number;
  static names(): { [key: string]: string } {
    return {
      SNIHosts: 'SNIHosts',
      TLSPort: 'TLSPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SNIHosts: { 'type': 'array', 'itemType': 'string' },
      TLSPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteMatchRequestURI extends $tea.Model {
  matchingContent?: string;
  matchingMode?: string;
  static names(): { [key: string]: string } {
    return {
      matchingContent: 'MatchingContent',
      matchingMode: 'MatchingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingContent: 'string',
      matchingMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteMatchRequest extends $tea.Model {
  headers?: CreateIstioGatewayRoutesRequestGatewayRouteMatchRequestHeaders[];
  ports?: number[];
  TLSMatchAttributes?: CreateIstioGatewayRoutesRequestGatewayRouteMatchRequestTLSMatchAttributes[];
  URI?: CreateIstioGatewayRoutesRequestGatewayRouteMatchRequestURI;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      ports: 'Ports',
      TLSMatchAttributes: 'TLSMatchAttributes',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': CreateIstioGatewayRoutesRequestGatewayRouteMatchRequestHeaders },
      ports: { 'type': 'array', 'itemType': 'number' },
      TLSMatchAttributes: { 'type': 'array', 'itemType': CreateIstioGatewayRoutesRequestGatewayRouteMatchRequestTLSMatchAttributes },
      URI: CreateIstioGatewayRoutesRequestGatewayRouteMatchRequestURI,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestinationPort extends $tea.Model {
  number?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestination extends $tea.Model {
  host?: string;
  port?: CreateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestinationPort;
  subset?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
      subset: 'Subset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: CreateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestinationPort,
      subset: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRouteRouteDestinations extends $tea.Model {
  destination?: CreateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestination;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: CreateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestination,
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIstioGatewayRoutesRequestGatewayRoute extends $tea.Model {
  domains?: string[];
  HTTPAdvancedOptions?: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptions;
  matchRequest?: CreateIstioGatewayRoutesRequestGatewayRouteMatchRequest;
  namespace?: string;
  rawVSRoute?: any;
  routeDestinations?: CreateIstioGatewayRoutesRequestGatewayRouteRouteDestinations[];
  routeName?: string;
  routeType?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      HTTPAdvancedOptions: 'HTTPAdvancedOptions',
      matchRequest: 'MatchRequest',
      namespace: 'Namespace',
      rawVSRoute: 'RawVSRoute',
      routeDestinations: 'RouteDestinations',
      routeName: 'RouteName',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      HTTPAdvancedOptions: CreateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptions,
      matchRequest: CreateIstioGatewayRoutesRequestGatewayRouteMatchRequest,
      namespace: 'string',
      rawVSRoute: 'any',
      routeDestinations: { 'type': 'array', 'itemType': CreateIstioGatewayRoutesRequestGatewayRouteRouteDestinations },
      routeName: 'string',
      routeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceMeshRequestTag extends $tea.Model {
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

export class DescribeASMGatewayImportedServicesResponseBodyImportedServices extends $tea.Model {
  serviceName?: string;
  serviceNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
      serviceNamespace: 'ServiceNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
      serviceNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterGrafanaResponseBodyDashboards extends $tea.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersInServiceMeshResponseBodyClustersAccessLogDashboards extends $tea.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersInServiceMeshResponseBodyClusters extends $tea.Model {
  accessLogDashboards?: DescribeClustersInServiceMeshResponseBodyClustersAccessLogDashboards[];
  clusterDomain?: string;
  clusterId?: string;
  clusterType?: string;
  creationTime?: string;
  errorMessage?: string;
  logtailInstalledState?: string;
  name?: string;
  regionId?: string;
  sgId?: string;
  state?: string;
  updateTime?: string;
  version?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogDashboards: 'AccessLogDashboards',
      clusterDomain: 'ClusterDomain',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      logtailInstalledState: 'LogtailInstalledState',
      name: 'Name',
      regionId: 'RegionId',
      sgId: 'SgId',
      state: 'State',
      updateTime: 'UpdateTime',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogDashboards: { 'type': 'array', 'itemType': DescribeClustersInServiceMeshResponseBodyClustersAccessLogDashboards },
      clusterDomain: 'string',
      clusterId: 'string',
      clusterType: 'string',
      creationTime: 'string',
      errorMessage: 'string',
      logtailInstalledState: 'string',
      name: 'string',
      regionId: 'string',
      sgId: 'string',
      state: 'string',
      updateTime: 'string',
      version: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrTemplatesResponseBodyTemplates extends $tea.Model {
  chineseName?: string;
  englishName?: string;
  yaml?: string;
  static names(): { [key: string]: string } {
    return {
      chineseName: 'ChineseName',
      englishName: 'EnglishName',
      yaml: 'Yaml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseName: 'string',
      englishName: 'string',
      yaml: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipResourcesResponseBodyEipList extends $tea.Model {
  allocationId?: string;
  instanceType?: string;
  ipAddress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      instanceType: 'InstanceType',
      ipAddress: 'IpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      instanceType: 'string',
      ipAddress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipResourcesResponseBodyPageResult extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaySecretDetailsResponseBodyGatewaySecretDetails extends $tea.Model {
  expiredTime?: string;
  gatewayName?: string;
  issueTime?: string;
  message?: string;
  SNI?: string;
  secretName?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      gatewayName: 'GatewayName',
      issueTime: 'IssueTime',
      message: 'Message',
      SNI: 'SNI',
      secretName: 'SecretName',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      gatewayName: 'string',
      issueTime: 'string',
      message: 'string',
      SNI: 'string',
      secretName: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterAccessLogDashboardsResponseBodyDashboards extends $tea.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportedServicesDetailResponseBodyDetailsPorts extends $tea.Model {
  name?: string;
  nodePort?: number;
  port?: number;
  protocol?: string;
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nodePort: 'NodePort',
      port: 'Port',
      protocol: 'Protocol',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nodePort: 'number',
      port: 'number',
      protocol: 'string',
      targetPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportedServicesDetailResponseBodyDetails extends $tea.Model {
  clusterIds?: string[];
  labels?: { [key: string]: string };
  namespace?: string;
  ports?: DescribeImportedServicesDetailResponseBodyDetailsPorts[];
  serviceName?: string;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      labels: 'Labels',
      namespace: 'Namespace',
      ports: 'Ports',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: { 'type': 'array', 'itemType': 'string' },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      namespace: 'string',
      ports: { 'type': 'array', 'itemType': DescribeImportedServicesDetailResponseBodyDetailsPorts },
      serviceName: 'string',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayDomainsResponseBodyGatewaySecretDetails extends $tea.Model {
  credentialName?: string;
  detail?: string;
  domains?: string[];
  gatewayCRName?: string;
  namespace?: string;
  portName?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      credentialName: 'CredentialName',
      detail: 'Detail',
      domains: 'Domains',
      gatewayCRName: 'GatewayCRName',
      namespace: 'Namespace',
      portName: 'PortName',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialName: 'string',
      detail: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
      gatewayCRName: 'string',
      namespace: 'string',
      portName: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsDelegate extends $tea.Model {
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultAbortPercentage extends $tea.Model {
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultAbort extends $tea.Model {
  httpStatus?: number;
  percentage?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultAbortPercentage;
  static names(): { [key: string]: string } {
    return {
      httpStatus: 'HttpStatus',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatus: 'number',
      percentage: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultAbortPercentage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultDelayPercentage extends $tea.Model {
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultDelay extends $tea.Model {
  exponentialDelay?: string;
  fixedDelay?: string;
  percentage?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultDelayPercentage;
  static names(): { [key: string]: string } {
    return {
      exponentialDelay: 'ExponentialDelay',
      fixedDelay: 'FixedDelay',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exponentialDelay: 'string',
      fixedDelay: 'string',
      percentage: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultDelayPercentage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFault extends $tea.Model {
  abort?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultAbort;
  delay?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultDelay;
  static names(): { [key: string]: string } {
    return {
      abort: 'Abort',
      delay: 'Delay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abort: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultAbort,
      delay: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultDelay,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsHTTPRedirect extends $tea.Model {
  authority?: string;
  redirectCode?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      authority: 'Authority',
      redirectCode: 'RedirectCode',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authority: 'string',
      redirectCode: 'number',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsMirror extends $tea.Model {
  host?: string;
  subset?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      subset: 'Subset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      subset: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsMirrorPercentage extends $tea.Model {
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRetriesRetryRemoteLocalities extends $tea.Model {
  value?: boolean;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRetries extends $tea.Model {
  attempts?: number;
  perTryTimeout?: string;
  retryOn?: string;
  retryRemoteLocalities?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRetriesRetryRemoteLocalities;
  static names(): { [key: string]: string } {
    return {
      attempts: 'Attempts',
      perTryTimeout: 'PerTryTimeout',
      retryOn: 'RetryOn',
      retryRemoteLocalities: 'RetryRemoteLocalities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempts: 'number',
      perTryTimeout: 'string',
      retryOn: 'string',
      retryRemoteLocalities: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRetriesRetryRemoteLocalities,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRewrite extends $tea.Model {
  authority?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      authority: 'Authority',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authority: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptions extends $tea.Model {
  delegate?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsDelegate;
  fault?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFault;
  HTTPRedirect?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsHTTPRedirect;
  mirror?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsMirror;
  mirrorPercentage?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsMirrorPercentage;
  retries?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRetries;
  rewrite?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRewrite;
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      delegate: 'Delegate',
      fault: 'Fault',
      HTTPRedirect: 'HTTPRedirect',
      mirror: 'Mirror',
      mirrorPercentage: 'MirrorPercentage',
      retries: 'Retries',
      rewrite: 'Rewrite',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegate: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsDelegate,
      fault: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFault,
      HTTPRedirect: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsHTTPRedirect,
      mirror: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsMirror,
      mirrorPercentage: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsMirrorPercentage,
      retries: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRetries,
      rewrite: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRewrite,
      timeout: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestHeaders extends $tea.Model {
  matchingContent?: string;
  matchingMode?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      matchingContent: 'MatchingContent',
      matchingMode: 'MatchingMode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingContent: 'string',
      matchingMode: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestTLSMatchAttributes extends $tea.Model {
  SNIHosts?: string[];
  TLSPort?: number;
  static names(): { [key: string]: string } {
    return {
      SNIHosts: 'SNIHosts',
      TLSPort: 'TLSPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SNIHosts: { 'type': 'array', 'itemType': 'string' },
      TLSPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestURI extends $tea.Model {
  matchingContent?: string;
  matchingMode?: string;
  static names(): { [key: string]: string } {
    return {
      matchingContent: 'MatchingContent',
      matchingMode: 'MatchingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingContent: 'string',
      matchingMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequest extends $tea.Model {
  headers?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestHeaders[];
  ports?: number[];
  TLSMatchAttributes?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestTLSMatchAttributes[];
  URI?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestURI;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      ports: 'Ports',
      TLSMatchAttributes: 'TLSMatchAttributes',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestHeaders },
      ports: { 'type': 'array', 'itemType': 'number' },
      TLSMatchAttributes: { 'type': 'array', 'itemType': DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestTLSMatchAttributes },
      URI: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestURI,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsDestinationPort extends $tea.Model {
  number?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsDestination extends $tea.Model {
  host?: string;
  port?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsDestinationPort;
  subset?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
      subset: 'Subset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsDestinationPort,
      subset: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeadersRequest extends $tea.Model {
  add?: { [key: string]: any };
  remove?: string[];
  set?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
      remove: 'Remove',
      set: 'Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      remove: { 'type': 'array', 'itemType': 'string' },
      set: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeadersResponse extends $tea.Model {
  add?: { [key: string]: any };
  remove?: string[];
  set?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
      remove: 'Remove',
      set: 'Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      remove: { 'type': 'array', 'itemType': 'string' },
      set: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeaders extends $tea.Model {
  request?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeadersRequest;
  response?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeadersResponse;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
      response: 'Response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeadersRequest,
      response: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeadersResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinations extends $tea.Model {
  destination?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsDestination;
  headers?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeaders;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      headers: 'Headers',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsDestination,
      headers: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeaders,
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetail extends $tea.Model {
  domains?: string[];
  HTTPAdvancedOptions?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptions;
  hasUnsafeFeatures?: boolean;
  matchRequest?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequest;
  rawVSRoute?: string;
  routeDestinations?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinations[];
  routeName?: string;
  routeType?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      HTTPAdvancedOptions: 'HTTPAdvancedOptions',
      hasUnsafeFeatures: 'HasUnsafeFeatures',
      matchRequest: 'MatchRequest',
      rawVSRoute: 'RawVSRoute',
      routeDestinations: 'RouteDestinations',
      routeName: 'RouteName',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      HTTPAdvancedOptions: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptions,
      hasUnsafeFeatures: 'boolean',
      matchRequest: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequest,
      rawVSRoute: 'string',
      routeDestinations: { 'type': 'array', 'itemType': DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinations },
      routeName: 'string',
      routeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRoutesResponseBodyManagementRoutes extends $tea.Model {
  ASMGatewayName?: string;
  description?: string;
  destinationHost?: string[];
  destinationSubSet?: string[];
  namespace?: string;
  priority?: number;
  routeName?: string;
  routePath?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      ASMGatewayName: 'ASMGatewayName',
      description: 'Description',
      destinationHost: 'DestinationHost',
      destinationSubSet: 'DestinationSubSet',
      namespace: 'Namespace',
      priority: 'Priority',
      routeName: 'RouteName',
      routePath: 'RoutePath',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASMGatewayName: 'string',
      description: 'string',
      destinationHost: { 'type': 'array', 'itemType': 'string' },
      destinationSubSet: { 'type': 'array', 'itemType': 'string' },
      namespace: 'string',
      priority: 'number',
      routeName: 'string',
      routePath: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetadataResponseBodyMetaDataProEdition extends $tea.Model {
  currentVersion?: string;
  versionCrds?: { [key: string]: any }[];
  versionRegistry?: { [key: string]: any }[];
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      currentVersion: 'CurrentVersion',
      versionCrds: 'VersionCrds',
      versionRegistry: 'VersionRegistry',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersion: 'string',
      versionCrds: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      versionRegistry: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetadataResponseBodyMetaData extends $tea.Model {
  currentVersion?: string;
  proEdition?: DescribeMetadataResponseBodyMetaDataProEdition;
  regions?: string[];
  versionCrds?: { [key: string]: any }[];
  versionRegistry?: { [key: string]: any }[];
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      currentVersion: 'CurrentVersion',
      proEdition: 'ProEdition',
      regions: 'Regions',
      versionCrds: 'VersionCrds',
      versionRegistry: 'VersionRegistry',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersion: 'string',
      proEdition: DescribeMetadataResponseBodyMetaDataProEdition,
      regions: { 'type': 'array', 'itemType': 'string' },
      versionCrds: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      versionRegistry: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesProxyStatsMatcher extends $tea.Model {
  inclusionPrefixes?: string[];
  inclusionRegexps?: string[];
  inclusionSuffixes?: string[];
  static names(): { [key: string]: string } {
    return {
      inclusionPrefixes: 'InclusionPrefixes',
      inclusionRegexps: 'InclusionRegexps',
      inclusionSuffixes: 'InclusionSuffixes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inclusionPrefixes: { 'type': 'array', 'itemType': 'string' },
      inclusionRegexps: { 'type': 'array', 'itemType': 'string' },
      inclusionSuffixes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyAckSloResource extends $tea.Model {
  limits?: { [key: string]: string };
  requests?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      limits: 'Limits',
      requests: 'Requests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limits: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      requests: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitAckSloResource extends $tea.Model {
  limits?: { [key: string]: string };
  requests?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      limits: 'Limits',
      requests: 'Requests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limits: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      requests: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitResourceLimit extends $tea.Model {
  resourceCPULimit?: string;
  resourceMemoryLimit?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCPULimit: 'ResourceCPULimit',
      resourceMemoryLimit: 'ResourceMemoryLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCPULimit: 'string',
      resourceMemoryLimit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitResourceRequest extends $tea.Model {
  resourceCPURequest?: string;
  resourceMemoryRequest?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCPURequest: 'ResourceCPURequest',
      resourceMemoryRequest: 'ResourceMemoryRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCPURequest: 'string',
      resourceMemoryRequest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyResourceLimit extends $tea.Model {
  resourceCPULimit?: string;
  resourceMemoryLimit?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCPULimit: 'ResourceCPULimit',
      resourceMemoryLimit: 'ResourceMemoryLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCPULimit: 'string',
      resourceMemoryLimit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyResourceRequest extends $tea.Model {
  resourceCPURequest?: string;
  resourceMemoryRequest?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCPURequest: 'ResourceCPURequest',
      resourceMemoryRequest: 'ResourceMemoryRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCPURequest: 'string',
      resourceMemoryRequest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesTracing extends $tea.Model {
  customTags?: { [key: string]: any };
  maxPathTagLength?: number;
  sampling?: number;
  static names(): { [key: string]: string } {
    return {
      customTags: 'CustomTags',
      maxPathTagLength: 'MaxPathTagLength',
      sampling: 'Sampling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maxPathTagLength: 'number',
      sampling: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatches extends $tea.Model {
  concurrency?: number;
  enableCoreDump?: boolean;
  excludeInboundPorts?: string;
  excludeOutboundIPRanges?: string;
  excludeOutboundPorts?: string;
  holdApplicationUntilProxyStarts?: boolean;
  includeInboundPorts?: string;
  includeOutboundIPRanges?: string;
  includeOutboundPorts?: string;
  interceptionMode?: string;
  istioDNSProxyEnabled?: boolean;
  lifecycleStr?: string;
  logLevel?: string;
  privileged?: boolean;
  proxyMetadata?: { [key: string]: string };
  proxyStatsMatcher?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesProxyStatsMatcher;
  readinessFailureThreshold?: number;
  readinessInitialDelaySeconds?: number;
  readinessPeriodSeconds?: number;
  sidecarProxyAckSloResource?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyAckSloResource;
  sidecarProxyInitAckSloResource?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitAckSloResource;
  sidecarProxyInitResourceLimit?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitResourceLimit;
  sidecarProxyInitResourceRequest?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitResourceRequest;
  sidecarProxyResourceLimit?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyResourceLimit;
  sidecarProxyResourceRequest?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyResourceRequest;
  terminationDrainDuration?: string;
  tracing?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesTracing;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      enableCoreDump: 'EnableCoreDump',
      excludeInboundPorts: 'ExcludeInboundPorts',
      excludeOutboundIPRanges: 'ExcludeOutboundIPRanges',
      excludeOutboundPorts: 'ExcludeOutboundPorts',
      holdApplicationUntilProxyStarts: 'HoldApplicationUntilProxyStarts',
      includeInboundPorts: 'IncludeInboundPorts',
      includeOutboundIPRanges: 'IncludeOutboundIPRanges',
      includeOutboundPorts: 'IncludeOutboundPorts',
      interceptionMode: 'InterceptionMode',
      istioDNSProxyEnabled: 'IstioDNSProxyEnabled',
      lifecycleStr: 'LifecycleStr',
      logLevel: 'LogLevel',
      privileged: 'Privileged',
      proxyMetadata: 'ProxyMetadata',
      proxyStatsMatcher: 'ProxyStatsMatcher',
      readinessFailureThreshold: 'ReadinessFailureThreshold',
      readinessInitialDelaySeconds: 'ReadinessInitialDelaySeconds',
      readinessPeriodSeconds: 'ReadinessPeriodSeconds',
      sidecarProxyAckSloResource: 'SidecarProxyAckSloResource',
      sidecarProxyInitAckSloResource: 'SidecarProxyInitAckSloResource',
      sidecarProxyInitResourceLimit: 'SidecarProxyInitResourceLimit',
      sidecarProxyInitResourceRequest: 'SidecarProxyInitResourceRequest',
      sidecarProxyResourceLimit: 'SidecarProxyResourceLimit',
      sidecarProxyResourceRequest: 'SidecarProxyResourceRequest',
      terminationDrainDuration: 'TerminationDrainDuration',
      tracing: 'Tracing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      enableCoreDump: 'boolean',
      excludeInboundPorts: 'string',
      excludeOutboundIPRanges: 'string',
      excludeOutboundPorts: 'string',
      holdApplicationUntilProxyStarts: 'boolean',
      includeInboundPorts: 'string',
      includeOutboundIPRanges: 'string',
      includeOutboundPorts: 'string',
      interceptionMode: 'string',
      istioDNSProxyEnabled: 'boolean',
      lifecycleStr: 'string',
      logLevel: 'string',
      privileged: 'boolean',
      proxyMetadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proxyStatsMatcher: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesProxyStatsMatcher,
      readinessFailureThreshold: 'number',
      readinessInitialDelaySeconds: 'number',
      readinessPeriodSeconds: 'number',
      sidecarProxyAckSloResource: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyAckSloResource,
      sidecarProxyInitAckSloResource: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitAckSloResource,
      sidecarProxyInitResourceLimit: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitResourceLimit,
      sidecarProxyInitResourceRequest: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitResourceRequest,
      sidecarProxyResourceLimit: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyResourceLimit,
      sidecarProxyResourceRequest: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyResourceRequest,
      terminationDrainDuration: 'string',
      tracing: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesTracing,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodesInstanceTypeResponseBodyInstanceTypes extends $tea.Model {
  key?: string;
  multiBufferEnabled?: boolean;
  nodeType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      multiBufferEnabled: 'MultiBufferEnabled',
      nodeType: 'NodeType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      multiBufferEnabled: 'boolean',
      nodeType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReusableSlbResponseBodyReusableSlbList extends $tea.Model {
  loadBalancerId?: string;
  loadBalancerName?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusApiServerLoadBalancerStatus extends $tea.Model {
  locked?: boolean;
  payType?: string;
  reused?: boolean;
  SLBBackEndServerNumStatus?: string;
  SLBExistStatus?: string;
  static names(): { [key: string]: string } {
    return {
      locked: 'Locked',
      payType: 'PayType',
      reused: 'Reused',
      SLBBackEndServerNumStatus: 'SLBBackEndServerNumStatus',
      SLBExistStatus: 'SLBExistStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locked: 'boolean',
      payType: 'string',
      reused: 'boolean',
      SLBBackEndServerNumStatus: 'string',
      SLBExistStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusCanaryPilotLoadBalancerStatus extends $tea.Model {
  locked?: boolean;
  payType?: string;
  reused?: boolean;
  SLBBackEndServerNumStatus?: string;
  SLBExistStatus?: string;
  static names(): { [key: string]: string } {
    return {
      locked: 'Locked',
      payType: 'PayType',
      reused: 'Reused',
      SLBBackEndServerNumStatus: 'SLBBackEndServerNumStatus',
      SLBExistStatus: 'SLBExistStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locked: 'boolean',
      payType: 'string',
      reused: 'boolean',
      SLBBackEndServerNumStatus: 'string',
      SLBExistStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusPilotLoadBalancerStatus extends $tea.Model {
  locked?: boolean;
  payType?: string;
  reused?: boolean;
  SLBBackEndServerNumStatus?: string;
  SLBExistStatus?: string;
  static names(): { [key: string]: string } {
    return {
      locked: 'Locked',
      payType: 'PayType',
      reused: 'Reused',
      SLBBackEndServerNumStatus: 'SLBBackEndServerNumStatus',
      SLBExistStatus: 'SLBExistStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locked: 'boolean',
      payType: 'string',
      reused: 'boolean',
      SLBBackEndServerNumStatus: 'string',
      SLBExistStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshAdditionalStatusResponseBodyClusterStatus extends $tea.Model {
  accessLogProjectStatus?: string;
  apiServerEIPStatus?: string;
  apiServerLoadBalancerStatus?: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusApiServerLoadBalancerStatus;
  auditProjectStatus?: string;
  canaryPilotLoadBalancerStatus?: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusCanaryPilotLoadBalancerStatus;
  controlPlaneProjectStatus?: string;
  logtailStatusRecord?: { [key: string]: any };
  pilotLoadBalancerStatus?: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusPilotLoadBalancerStatus;
  RAMApplicationStatus?: string;
  sgStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogProjectStatus: 'AccessLogProjectStatus',
      apiServerEIPStatus: 'ApiServerEIPStatus',
      apiServerLoadBalancerStatus: 'ApiServerLoadBalancerStatus',
      auditProjectStatus: 'AuditProjectStatus',
      canaryPilotLoadBalancerStatus: 'CanaryPilotLoadBalancerStatus',
      controlPlaneProjectStatus: 'ControlPlaneProjectStatus',
      logtailStatusRecord: 'LogtailStatusRecord',
      pilotLoadBalancerStatus: 'PilotLoadBalancerStatus',
      RAMApplicationStatus: 'RAMApplicationStatus',
      sgStatus: 'SgStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogProjectStatus: 'string',
      apiServerEIPStatus: 'string',
      apiServerLoadBalancerStatus: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusApiServerLoadBalancerStatus,
      auditProjectStatus: 'string',
      canaryPilotLoadBalancerStatus: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusCanaryPilotLoadBalancerStatus,
      controlPlaneProjectStatus: 'string',
      logtailStatusRecord: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pilotLoadBalancerStatus: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusPilotLoadBalancerStatus,
      RAMApplicationStatus: 'string',
      sgStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshClustersResponseBodyClusters extends $tea.Model {
  clusterDomain?: string;
  clusterId?: string;
  clusterType?: string;
  creationTime?: string;
  errorMessage?: string;
  forbiddenFlag?: number;
  forbiddenInfo?: string;
  name?: string;
  regionId?: string;
  serviceMeshId?: string;
  sgId?: string;
  state?: string;
  updateTime?: string;
  version?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterDomain: 'ClusterDomain',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      forbiddenFlag: 'ForbiddenFlag',
      forbiddenInfo: 'ForbiddenInfo',
      name: 'Name',
      regionId: 'RegionId',
      serviceMeshId: 'ServiceMeshId',
      sgId: 'SgId',
      state: 'State',
      updateTime: 'UpdateTime',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDomain: 'string',
      clusterId: 'string',
      clusterType: 'string',
      creationTime: 'string',
      errorMessage: 'string',
      forbiddenFlag: 'number',
      forbiddenInfo: 'string',
      name: 'string',
      regionId: 'string',
      serviceMeshId: 'string',
      sgId: 'string',
      state: 'string',
      updateTime: 'string',
      version: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshEndpoints extends $tea.Model {
  intranetApiServerEndpoint?: string;
  intranetPilotEndpoint?: string;
  publicApiServerEndpoint?: string;
  publicPilotEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      intranetApiServerEndpoint: 'IntranetApiServerEndpoint',
      intranetPilotEndpoint: 'IntranetPilotEndpoint',
      publicApiServerEndpoint: 'PublicApiServerEndpoint',
      publicPilotEndpoint: 'PublicPilotEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetApiServerEndpoint: 'string',
      intranetPilotEndpoint: 'string',
      publicApiServerEndpoint: 'string',
      publicPilotEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshServiceMeshInfo extends $tea.Model {
  creationTime?: string;
  errorMessage?: string;
  name?: string;
  profile?: string;
  regionId?: string;
  serviceMeshId?: string;
  state?: string;
  updateTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      name: 'Name',
      profile: 'Profile',
      regionId: 'RegionId',
      serviceMeshId: 'ServiceMeshId',
      state: 'State',
      updateTime: 'UpdateTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      errorMessage: 'string',
      name: 'string',
      profile: 'string',
      regionId: 'string',
      serviceMeshId: 'string',
      state: 'string',
      updateTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecLoadBalancer extends $tea.Model {
  apiServerLoadbalancerId?: string;
  apiServerPublicEip?: boolean;
  pilotPublicEip?: boolean;
  pilotPublicLoadbalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      apiServerLoadbalancerId: 'ApiServerLoadbalancerId',
      apiServerPublicEip: 'ApiServerPublicEip',
      pilotPublicEip: 'PilotPublicEip',
      pilotPublicLoadbalancerId: 'PilotPublicLoadbalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServerLoadbalancerId: 'string',
      apiServerPublicEip: 'boolean',
      pilotPublicEip: 'boolean',
      pilotPublicLoadbalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAccessLog extends $tea.Model {
  enabled?: boolean;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAudit extends $tea.Model {
  auditProjectStatus?: string;
  enabled?: boolean;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      auditProjectStatus: 'AuditProjectStatus',
      enabled: 'Enabled',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditProjectStatus: 'string',
      enabled: 'boolean',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigControlPlaneLogInfo extends $tea.Model {
  enabled?: boolean;
  logTTL?: number;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      logTTL: 'LogTTL',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      logTTL: 'number',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigEdition extends $tea.Model {
  istiodImageTag?: string;
  name?: string;
  proxyImageTag?: string;
  static names(): { [key: string]: string } {
    return {
      istiodImageTag: 'IstiodImageTag',
      name: 'Name',
      proxyImageTag: 'ProxyImageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istiodImageTag: 'string',
      name: 'string',
      proxyImageTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAccessLogExtraConf extends $tea.Model {
  gatewayEnabled?: boolean;
  gatewayLifecycle?: number;
  sidecarEnabled?: boolean;
  sidecarLifecycle?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayEnabled: 'GatewayEnabled',
      gatewayLifecycle: 'GatewayLifecycle',
      sidecarEnabled: 'SidecarEnabled',
      sidecarLifecycle: 'SidecarLifecycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayEnabled: 'boolean',
      gatewayLifecycle: 'number',
      sidecarEnabled: 'boolean',
      sidecarLifecycle: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressHpaCpu extends $tea.Model {
  targetAverageUtilization?: number;
  static names(): { [key: string]: string } {
    return {
      targetAverageUtilization: 'TargetAverageUtilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetAverageUtilization: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressHpaMemory extends $tea.Model {
  targetAverageUtilization?: number;
  static names(): { [key: string]: string } {
    return {
      targetAverageUtilization: 'TargetAverageUtilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetAverageUtilization: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressResources extends $tea.Model {
  limits?: { [key: string]: any };
  requests?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      limits: 'Limits',
      requests: 'Requests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limits: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requests: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfiguration extends $tea.Model {
  egressAutoscaleEnabled?: boolean;
  egressHpaCpu?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressHpaCpu;
  egressHpaMemory?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressHpaMemory;
  egressMaxReplica?: number;
  egressMinReplica?: number;
  egressReplicaCount?: number;
  egressResources?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressResources;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      egressAutoscaleEnabled: 'EgressAutoscaleEnabled',
      egressHpaCpu: 'EgressHpaCpu',
      egressHpaMemory: 'EgressHpaMemory',
      egressMaxReplica: 'EgressMaxReplica',
      egressMinReplica: 'EgressMinReplica',
      egressReplicaCount: 'EgressReplicaCount',
      egressResources: 'EgressResources',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressAutoscaleEnabled: 'boolean',
      egressHpaCpu: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressHpaCpu,
      egressHpaMemory: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressHpaMemory,
      egressMaxReplica: 'number',
      egressMinReplica: 'number',
      egressReplicaCount: 'number',
      egressResources: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressResources,
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAutoDiagnosis extends $tea.Model {
  autoDiagnosisEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoDiagnosisEnabled: 'AutoDiagnosisEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDiagnosisEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationCRAggregationConfiguration extends $tea.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationIstioCRHistory extends $tea.Model {
  enableHistory?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableHistory: 'EnableHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableHistory: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartExec extends $tea.Model {
  command?: string[];
  static names(): { [key: string]: string } {
    return {
      command: 'command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartHttpGetHttpHeaders extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartHttpGet extends $tea.Model {
  host?: string;
  httpHeaders?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartHttpGetHttpHeaders[];
  port?: string;
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      httpHeaders: 'httpHeaders',
      port: 'port',
      scheme: 'scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpHeaders: { 'type': 'array', 'itemType': DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartHttpGetHttpHeaders },
      port: 'string',
      scheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartTcpSocket extends $tea.Model {
  host?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStart extends $tea.Model {
  exec?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartExec;
  httpGet?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartHttpGet;
  tcpSocket?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartTcpSocket;
  static names(): { [key: string]: string } {
    return {
      exec: 'exec',
      httpGet: 'httpGet',
      tcpSocket: 'tcpSocket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartExec,
      httpGet: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartHttpGet,
      tcpSocket: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartTcpSocket,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopExec extends $tea.Model {
  command?: string[];
  static names(): { [key: string]: string } {
    return {
      command: 'command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopHttpGetHttpHeaders extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopHttpGet extends $tea.Model {
  host?: string;
  httpHeaders?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopHttpGetHttpHeaders[];
  port?: string;
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      httpHeaders: 'httpHeaders',
      port: 'port',
      scheme: 'scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpHeaders: { 'type': 'array', 'itemType': DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopHttpGetHttpHeaders },
      port: 'string',
      scheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopTcpSocket extends $tea.Model {
  host?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStop extends $tea.Model {
  exec?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopExec;
  httpGet?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopHttpGet;
  tcpSocket?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopTcpSocket;
  static names(): { [key: string]: string } {
    return {
      exec: 'exec',
      httpGet: 'httpGet',
      tcpSocket: 'tcpSocket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopExec,
      httpGet: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopHttpGet,
      tcpSocket: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopTcpSocket,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecycle extends $tea.Model {
  postStart?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStart;
  preStop?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStop;
  static names(): { [key: string]: string } {
    return {
      postStart: 'postStart',
      preStop: 'preStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postStart: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStart,
      preStop: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStop,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationMultiBuffer extends $tea.Model {
  enabled?: boolean;
  pollDelay?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      pollDelay: 'PollDelay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      pollDelay: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationNFDConfiguration extends $tea.Model {
  enabled?: boolean;
  NFDLabelPruned?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      NFDLabelPruned: 'NFDLabelPruned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      NFDLabelPruned: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationOPAScopeInjection extends $tea.Model {
  OPAScopeInjected?: boolean;
  static names(): { [key: string]: string } {
    return {
      OPAScopeInjected: 'OPAScopeInjected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OPAScopeInjected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationSidecarProxyInitResourceLimit extends $tea.Model {
  resourceCPULimit?: string;
  resourceMemoryLimit?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCPULimit: 'ResourceCPULimit',
      resourceMemoryLimit: 'ResourceMemoryLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCPULimit: 'string',
      resourceMemoryLimit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationSidecarProxyInitResourceRequest extends $tea.Model {
  resourceCPURequest?: string;
  resourceMemoryRequest?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCPURequest: 'ResourceCPURequest',
      resourceMemoryRequest: 'ResourceMemoryRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCPURequest: 'string',
      resourceMemoryRequest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfiguration extends $tea.Model {
  accessLogExtraConf?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAccessLogExtraConf;
  adaptiveXdsConfiguration?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfiguration;
  autoDiagnosis?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAutoDiagnosis;
  CRAggregationConfiguration?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationCRAggregationConfiguration;
  CRAggregationEnabled?: boolean;
  discoverySelectors?: { [key: string]: any }[];
  istioCRHistory?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationIstioCRHistory;
  lifecycle?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecycle;
  multiBuffer?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationMultiBuffer;
  NFDConfiguration?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationNFDConfiguration;
  OPAScopeInjection?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationOPAScopeInjection;
  sidecarProxyInitResourceLimit?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationSidecarProxyInitResourceLimit;
  sidecarProxyInitResourceRequest?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationSidecarProxyInitResourceRequest;
  terminationDrainDuration?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogExtraConf: 'AccessLogExtraConf',
      adaptiveXdsConfiguration: 'AdaptiveXdsConfiguration',
      autoDiagnosis: 'AutoDiagnosis',
      CRAggregationConfiguration: 'CRAggregationConfiguration',
      CRAggregationEnabled: 'CRAggregationEnabled',
      discoverySelectors: 'DiscoverySelectors',
      istioCRHistory: 'IstioCRHistory',
      lifecycle: 'Lifecycle',
      multiBuffer: 'MultiBuffer',
      NFDConfiguration: 'NFDConfiguration',
      OPAScopeInjection: 'OPAScopeInjection',
      sidecarProxyInitResourceLimit: 'SidecarProxyInitResourceLimit',
      sidecarProxyInitResourceRequest: 'SidecarProxyInitResourceRequest',
      terminationDrainDuration: 'TerminationDrainDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogExtraConf: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAccessLogExtraConf,
      adaptiveXdsConfiguration: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfiguration,
      autoDiagnosis: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAutoDiagnosis,
      CRAggregationConfiguration: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationCRAggregationConfiguration,
      CRAggregationEnabled: 'boolean',
      discoverySelectors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      istioCRHistory: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationIstioCRHistory,
      lifecycle: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecycle,
      multiBuffer: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationMultiBuffer,
      NFDConfiguration: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationNFDConfiguration,
      OPAScopeInjection: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationOPAScopeInjection,
      sidecarProxyInitResourceLimit: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationSidecarProxyInitResourceLimit,
      sidecarProxyInitResourceRequest: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationSidecarProxyInitResourceRequest,
      terminationDrainDuration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigK8sNewAPIsSupport extends $tea.Model {
  gatewayAPIEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      gatewayAPIEnabled: 'GatewayAPIEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayAPIEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigKiali extends $tea.Model {
  enabled?: boolean;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigLocalityLB extends $tea.Model {
  distribute?: { [key: string]: any };
  enabled?: boolean;
  failover?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      distribute: 'Distribute',
      enabled: 'Enabled',
      failover: 'Failover',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distribute: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enabled: 'boolean',
      failover: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigMSE extends $tea.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigOPA extends $tea.Model {
  enabled?: boolean;
  limitCPU?: string;
  limitMemory?: string;
  logLevel?: string;
  requestCPU?: string;
  requestMemory?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      limitCPU: 'LimitCPU',
      limitMemory: 'LimitMemory',
      logLevel: 'LogLevel',
      requestCPU: 'RequestCPU',
      requestMemory: 'RequestMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      limitCPU: 'string',
      limitMemory: 'string',
      logLevel: 'string',
      requestCPU: 'string',
      requestMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilotConfigSource extends $tea.Model {
  enabled?: boolean;
  nacosID?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      nacosID: 'NacosID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      nacosID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilotFeature extends $tea.Model {
  enableSDSServer?: boolean;
  filterGatewayClusterConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableSDSServer: 'EnableSDSServer',
      filterGatewayClusterConfig: 'FilterGatewayClusterConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSDSServer: 'boolean',
      filterGatewayClusterConfig: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilot extends $tea.Model {
  configSource?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilotConfigSource;
  feature?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilotFeature;
  http10Enabled?: boolean;
  traceSampling?: number;
  static names(): { [key: string]: string } {
    return {
      configSource: 'ConfigSource',
      feature: 'Feature',
      http10Enabled: 'Http10Enabled',
      traceSampling: 'TraceSampling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSource: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilotConfigSource,
      feature: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilotFeature,
      http10Enabled: 'boolean',
      traceSampling: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPrometheus extends $tea.Model {
  externalUrl?: string;
  useExternal?: boolean;
  static names(): { [key: string]: string } {
    return {
      externalUrl: 'ExternalUrl',
      useExternal: 'UseExternal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalUrl: 'string',
      useExternal: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProtocolSupport extends $tea.Model {
  dubboFilterEnabled?: boolean;
  mysqlFilterEnabled?: boolean;
  redisFilterEnabled?: boolean;
  thriftFilterEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      dubboFilterEnabled: 'DubboFilterEnabled',
      mysqlFilterEnabled: 'MysqlFilterEnabled',
      redisFilterEnabled: 'RedisFilterEnabled',
      thriftFilterEnabled: 'ThriftFilterEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboFilterEnabled: 'boolean',
      mysqlFilterEnabled: 'boolean',
      redisFilterEnabled: 'boolean',
      thriftFilterEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProxy extends $tea.Model {
  accessLogFile?: string;
  accessLogFormat?: string;
  accessLogServiceEnabled?: boolean;
  accessLogServiceHost?: string;
  accessLogServicePort?: number;
  clusterDomain?: string;
  enableDNSProxying?: boolean;
  limitCPU?: string;
  limitMemory?: string;
  requestCPU?: string;
  requestMemory?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogFile: 'AccessLogFile',
      accessLogFormat: 'AccessLogFormat',
      accessLogServiceEnabled: 'AccessLogServiceEnabled',
      accessLogServiceHost: 'AccessLogServiceHost',
      accessLogServicePort: 'AccessLogServicePort',
      clusterDomain: 'ClusterDomain',
      enableDNSProxying: 'EnableDNSProxying',
      limitCPU: 'LimitCPU',
      limitMemory: 'LimitMemory',
      requestCPU: 'RequestCPU',
      requestMemory: 'RequestMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogFile: 'string',
      accessLogFormat: 'string',
      accessLogServiceEnabled: 'boolean',
      accessLogServiceHost: 'string',
      accessLogServicePort: 'number',
      clusterDomain: 'string',
      enableDNSProxying: 'boolean',
      limitCPU: 'string',
      limitMemory: 'string',
      requestCPU: 'string',
      requestMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjectorInitCNIConfiguration extends $tea.Model {
  enabled?: boolean;
  excludeNamespaces?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      excludeNamespaces: 'ExcludeNamespaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      excludeNamespaces: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjector extends $tea.Model {
  autoInjectionPolicyEnabled?: boolean;
  enableNamespacesByDefault?: boolean;
  initCNIConfiguration?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjectorInitCNIConfiguration;
  limitCPU?: string;
  limitMemory?: string;
  requestCPU?: string;
  requestMemory?: string;
  sidecarInjectorNum?: number;
  sidecarInjectorWebhookAsYaml?: string;
  static names(): { [key: string]: string } {
    return {
      autoInjectionPolicyEnabled: 'AutoInjectionPolicyEnabled',
      enableNamespacesByDefault: 'EnableNamespacesByDefault',
      initCNIConfiguration: 'InitCNIConfiguration',
      limitCPU: 'LimitCPU',
      limitMemory: 'LimitMemory',
      requestCPU: 'RequestCPU',
      requestMemory: 'RequestMemory',
      sidecarInjectorNum: 'SidecarInjectorNum',
      sidecarInjectorWebhookAsYaml: 'SidecarInjectorWebhookAsYaml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInjectionPolicyEnabled: 'boolean',
      enableNamespacesByDefault: 'boolean',
      initCNIConfiguration: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjectorInitCNIConfiguration,
      limitCPU: 'string',
      limitMemory: 'string',
      requestCPU: 'string',
      requestMemory: 'string',
      sidecarInjectorNum: 'number',
      sidecarInjectorWebhookAsYaml: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigWebAssemblyFilterDeployment extends $tea.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfig extends $tea.Model {
  accessLog?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAccessLog;
  audit?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAudit;
  controlPlaneLogInfo?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigControlPlaneLogInfo;
  customizedZipkin?: boolean;
  edition?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigEdition;
  enableLocalityLB?: boolean;
  excludeIPRanges?: string;
  excludeInboundPorts?: string;
  excludeOutboundPorts?: string;
  extraConfiguration?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfiguration;
  includeIPRanges?: string;
  k8sNewAPIsSupport?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigK8sNewAPIsSupport;
  kiali?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigKiali;
  localityLB?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigLocalityLB;
  MSE?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigMSE;
  OPA?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigOPA;
  outboundTrafficPolicy?: string;
  pilot?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilot;
  prometheus?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPrometheus;
  protocolSupport?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProtocolSupport;
  proxy?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProxy;
  sidecarInjector?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjector;
  telemetry?: boolean;
  tracing?: boolean;
  webAssemblyFilterDeployment?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigWebAssemblyFilterDeployment;
  static names(): { [key: string]: string } {
    return {
      accessLog: 'AccessLog',
      audit: 'Audit',
      controlPlaneLogInfo: 'ControlPlaneLogInfo',
      customizedZipkin: 'CustomizedZipkin',
      edition: 'Edition',
      enableLocalityLB: 'EnableLocalityLB',
      excludeIPRanges: 'ExcludeIPRanges',
      excludeInboundPorts: 'ExcludeInboundPorts',
      excludeOutboundPorts: 'ExcludeOutboundPorts',
      extraConfiguration: 'ExtraConfiguration',
      includeIPRanges: 'IncludeIPRanges',
      k8sNewAPIsSupport: 'K8sNewAPIsSupport',
      kiali: 'Kiali',
      localityLB: 'LocalityLB',
      MSE: 'MSE',
      OPA: 'OPA',
      outboundTrafficPolicy: 'OutboundTrafficPolicy',
      pilot: 'Pilot',
      prometheus: 'Prometheus',
      protocolSupport: 'ProtocolSupport',
      proxy: 'Proxy',
      sidecarInjector: 'SidecarInjector',
      telemetry: 'Telemetry',
      tracing: 'Tracing',
      webAssemblyFilterDeployment: 'WebAssemblyFilterDeployment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLog: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAccessLog,
      audit: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAudit,
      controlPlaneLogInfo: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigControlPlaneLogInfo,
      customizedZipkin: 'boolean',
      edition: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigEdition,
      enableLocalityLB: 'boolean',
      excludeIPRanges: 'string',
      excludeInboundPorts: 'string',
      excludeOutboundPorts: 'string',
      extraConfiguration: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfiguration,
      includeIPRanges: 'string',
      k8sNewAPIsSupport: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigK8sNewAPIsSupport,
      kiali: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigKiali,
      localityLB: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigLocalityLB,
      MSE: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigMSE,
      OPA: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigOPA,
      outboundTrafficPolicy: 'string',
      pilot: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilot,
      prometheus: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPrometheus,
      protocolSupport: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProtocolSupport,
      proxy: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProxy,
      sidecarInjector: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjector,
      telemetry: 'boolean',
      tracing: 'boolean',
      webAssemblyFilterDeployment: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigWebAssemblyFilterDeployment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecNetwork extends $tea.Model {
  securityGroupId?: string;
  vSwitches?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpec extends $tea.Model {
  loadBalancer?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecLoadBalancer;
  meshConfig?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfig;
  network?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecNetwork;
  static names(): { [key: string]: string } {
    return {
      loadBalancer: 'LoadBalancer',
      meshConfig: 'MeshConfig',
      network: 'Network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancer: DescribeServiceMeshDetailResponseBodyServiceMeshSpecLoadBalancer,
      meshConfig: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfig,
      network: DescribeServiceMeshDetailResponseBodyServiceMeshSpecNetwork,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMesh extends $tea.Model {
  clusterSpec?: string;
  clusters?: string[];
  endpoints?: DescribeServiceMeshDetailResponseBodyServiceMeshEndpoints;
  ownerId?: string;
  ownerType?: string;
  serviceMeshInfo?: DescribeServiceMeshDetailResponseBodyServiceMeshServiceMeshInfo;
  spec?: DescribeServiceMeshDetailResponseBodyServiceMeshSpec;
  static names(): { [key: string]: string } {
    return {
      clusterSpec: 'ClusterSpec',
      clusters: 'Clusters',
      endpoints: 'Endpoints',
      ownerId: 'OwnerId',
      ownerType: 'OwnerType',
      serviceMeshInfo: 'ServiceMeshInfo',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSpec: 'string',
      clusters: { 'type': 'array', 'itemType': 'string' },
      endpoints: DescribeServiceMeshDetailResponseBodyServiceMeshEndpoints,
      ownerId: 'string',
      ownerType: 'string',
      serviceMeshInfo: DescribeServiceMeshDetailResponseBodyServiceMeshServiceMeshInfo,
      spec: DescribeServiceMeshDetailResponseBodyServiceMeshSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshLogsResponseBodyLogs extends $tea.Model {
  creationTime?: string;
  log?: string;
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      log: 'Log',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      log: 'string',
      serviceMeshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshProxyStatusResponseBodyProxyStatus extends $tea.Model {
  clusterSynced?: string;
  endpointPercent?: string;
  endpointSynced?: string;
  istioVersion?: string;
  listenerSynced?: string;
  proxyId?: string;
  proxyVersion?: string;
  routeSynced?: string;
  static names(): { [key: string]: string } {
    return {
      clusterSynced: 'ClusterSynced',
      endpointPercent: 'EndpointPercent',
      endpointSynced: 'EndpointSynced',
      istioVersion: 'IstioVersion',
      listenerSynced: 'ListenerSynced',
      proxyId: 'ProxyId',
      proxyVersion: 'ProxyVersion',
      routeSynced: 'RouteSynced',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSynced: 'string',
      endpointPercent: 'string',
      endpointSynced: 'string',
      istioVersion: 'string',
      listenerSynced: 'string',
      proxyId: 'string',
      proxyVersion: 'string',
      routeSynced: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshUpgradeStatusResponseBodyUpgradeDetail extends $tea.Model {
  finishedGatewaysNum?: number;
  gatewayStatusRecord?: { [key: string]: UpgradeDetailGatewayStatusRecordValue };
  meshStatus?: string;
  totalGatewaysNum?: number;
  static names(): { [key: string]: string } {
    return {
      finishedGatewaysNum: 'FinishedGatewaysNum',
      gatewayStatusRecord: 'GatewayStatusRecord',
      meshStatus: 'MeshStatus',
      totalGatewaysNum: 'TotalGatewaysNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedGatewaysNum: 'number',
      gatewayStatusRecord: { 'type': 'map', 'keyType': 'string', 'valueType': UpgradeDetailGatewayStatusRecordValue },
      meshStatus: 'string',
      totalGatewaysNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshVMsResponseBodyVMs extends $tea.Model {
  hasTag?: boolean;
  hostName?: string;
  instanceId?: string;
  ipAddress?: string;
  region?: string;
  securityGroupIds?: string;
  serviceMeshId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      hasTag: 'HasTag',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      ipAddress: 'IpAddress',
      region: 'Region',
      securityGroupIds: 'SecurityGroupIds',
      serviceMeshId: 'ServiceMeshId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasTag: 'boolean',
      hostName: 'string',
      instanceId: 'string',
      ipAddress: 'string',
      region: 'string',
      securityGroupIds: 'string',
      serviceMeshId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesRequestTag extends $tea.Model {
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

export class DescribeServiceMeshesResponseBodyServiceMeshesEndpoints extends $tea.Model {
  intranetApiServerEndpoint?: string;
  intranetPilotEndpoint?: string;
  publicApiServerEndpoint?: string;
  publicPilotEndpoint?: string;
  reverseTunnelEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      intranetApiServerEndpoint: 'IntranetApiServerEndpoint',
      intranetPilotEndpoint: 'IntranetPilotEndpoint',
      publicApiServerEndpoint: 'PublicApiServerEndpoint',
      publicPilotEndpoint: 'PublicPilotEndpoint',
      reverseTunnelEndpoint: 'ReverseTunnelEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetApiServerEndpoint: 'string',
      intranetPilotEndpoint: 'string',
      publicApiServerEndpoint: 'string',
      publicPilotEndpoint: 'string',
      reverseTunnelEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesServiceMeshInfo extends $tea.Model {
  creationTime?: string;
  errorMessage?: string;
  name?: string;
  profile?: string;
  regionId?: string;
  serviceMeshId?: string;
  state?: string;
  updateTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      name: 'Name',
      profile: 'Profile',
      regionId: 'RegionId',
      serviceMeshId: 'ServiceMeshId',
      state: 'State',
      updateTime: 'UpdateTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      errorMessage: 'string',
      name: 'string',
      profile: 'string',
      regionId: 'string',
      serviceMeshId: 'string',
      state: 'string',
      updateTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecLoadBalancer extends $tea.Model {
  apiServerLoadbalancerId?: string;
  apiServerPublicEip?: boolean;
  pilotPublicEip?: boolean;
  pilotPublicLoadbalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      apiServerLoadbalancerId: 'ApiServerLoadbalancerId',
      apiServerPublicEip: 'ApiServerPublicEip',
      pilotPublicEip: 'PilotPublicEip',
      pilotPublicLoadbalancerId: 'PilotPublicLoadbalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServerLoadbalancerId: 'string',
      apiServerPublicEip: 'boolean',
      pilotPublicEip: 'boolean',
      pilotPublicLoadbalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigPilot extends $tea.Model {
  http10Enabled?: boolean;
  traceSampling?: number;
  static names(): { [key: string]: string } {
    return {
      http10Enabled: 'Http10Enabled',
      traceSampling: 'TraceSampling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http10Enabled: 'boolean',
      traceSampling: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjectorInitCNIConfiguration extends $tea.Model {
  enabled?: boolean;
  excludeNamespaces?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      excludeNamespaces: 'ExcludeNamespaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      excludeNamespaces: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjector extends $tea.Model {
  autoInjectionPolicyEnabled?: boolean;
  enableNamespacesByDefault?: boolean;
  initCNIConfiguration?: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjectorInitCNIConfiguration;
  static names(): { [key: string]: string } {
    return {
      autoInjectionPolicyEnabled: 'AutoInjectionPolicyEnabled',
      enableNamespacesByDefault: 'EnableNamespacesByDefault',
      initCNIConfiguration: 'InitCNIConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInjectionPolicyEnabled: 'boolean',
      enableNamespacesByDefault: 'boolean',
      initCNIConfiguration: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjectorInitCNIConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfig extends $tea.Model {
  mtls?: boolean;
  outboundTrafficPolicy?: string;
  pilot?: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigPilot;
  sidecarInjector?: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjector;
  strictMtls?: boolean;
  telemetry?: boolean;
  tracing?: boolean;
  static names(): { [key: string]: string } {
    return {
      mtls: 'Mtls',
      outboundTrafficPolicy: 'OutboundTrafficPolicy',
      pilot: 'Pilot',
      sidecarInjector: 'SidecarInjector',
      strictMtls: 'StrictMtls',
      telemetry: 'Telemetry',
      tracing: 'Tracing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mtls: 'boolean',
      outboundTrafficPolicy: 'string',
      pilot: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigPilot,
      sidecarInjector: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjector,
      strictMtls: 'boolean',
      telemetry: 'boolean',
      tracing: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecNetwork extends $tea.Model {
  securityGroupId?: string;
  vSwitches?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpec extends $tea.Model {
  loadBalancer?: DescribeServiceMeshesResponseBodyServiceMeshesSpecLoadBalancer;
  meshConfig?: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfig;
  network?: DescribeServiceMeshesResponseBodyServiceMeshesSpecNetwork;
  static names(): { [key: string]: string } {
    return {
      loadBalancer: 'LoadBalancer',
      meshConfig: 'MeshConfig',
      network: 'Network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancer: DescribeServiceMeshesResponseBodyServiceMeshesSpecLoadBalancer,
      meshConfig: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfig,
      network: DescribeServiceMeshesResponseBodyServiceMeshesSpecNetwork,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesTag extends $tea.Model {
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

export class DescribeServiceMeshesResponseBodyServiceMeshes extends $tea.Model {
  clusterSpec?: string;
  clusters?: string[];
  endpoints?: DescribeServiceMeshesResponseBodyServiceMeshesEndpoints;
  ownerId?: string;
  ownerType?: string;
  serviceMeshInfo?: DescribeServiceMeshesResponseBodyServiceMeshesServiceMeshInfo;
  spec?: DescribeServiceMeshesResponseBodyServiceMeshesSpec;
  tag?: DescribeServiceMeshesResponseBodyServiceMeshesTag[];
  static names(): { [key: string]: string } {
    return {
      clusterSpec: 'ClusterSpec',
      clusters: 'Clusters',
      endpoints: 'Endpoints',
      ownerId: 'OwnerId',
      ownerType: 'OwnerType',
      serviceMeshInfo: 'ServiceMeshInfo',
      spec: 'Spec',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSpec: 'string',
      clusters: { 'type': 'array', 'itemType': 'string' },
      endpoints: DescribeServiceMeshesResponseBodyServiceMeshesEndpoints,
      ownerId: 'string',
      ownerType: 'string',
      serviceMeshInfo: DescribeServiceMeshesResponseBodyServiceMeshesServiceMeshInfo,
      spec: DescribeServiceMeshesResponseBodyServiceMeshesSpec,
      tag: { 'type': 'array', 'itemType': DescribeServiceMeshesResponseBodyServiceMeshesTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpgradeVersionResponseBodyVersion extends $tea.Model {
  istioOperatorVersion?: string;
  istioVersion?: string;
  kubernetesVersion?: string;
  static names(): { [key: string]: string } {
    return {
      istioOperatorVersion: 'IstioOperatorVersion',
      istioVersion: 'IstioVersion',
      kubernetesVersion: 'KubernetesVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioOperatorVersion: 'string',
      istioVersion: 'string',
      kubernetesVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserPermissionsResponseBodyPermissions extends $tea.Model {
  isRamRole?: string;
  parentId?: string;
  resourceId?: string;
  resourceType?: string;
  roleName?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      isRamRole: 'IsRamRole',
      parentId: 'ParentId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      roleName: 'RoleName',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isRamRole: 'string',
      parentId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      roleName: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVMsInServiceMeshResponseBodyVMs extends $tea.Model {
  hasTag?: boolean;
  hostName?: string;
  instanceId?: string;
  ipAddress?: string;
  region?: string;
  securityGroupIds?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      hasTag: 'HasTag',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      ipAddress: 'IpAddress',
      region: 'Region',
      securityGroupIds: 'SecurityGroupIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasTag: 'boolean',
      hostName: 'string',
      instanceId: 'string',
      ipAddress: 'string',
      region: 'string',
      securityGroupIds: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitches extends $tea.Model {
  isDefault?: boolean;
  status?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      status: 'string',
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

export class DescribeVersionsResponseBodyVersionInfo extends $tea.Model {
  edition?: string;
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcs extends $tea.Model {
  isDefault?: boolean;
  status?: string;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      status: 'Status',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      status: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGrafanaDashboardUrlResponseBodyDashboards extends $tea.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceEndpointsResponseBodyEndPointSliceEndpointsDetails extends $tea.Model {
  address?: string;
  hostname?: string;
  podName?: string;
  ports?: number[];
  region?: string;
  sidecarInjected?: boolean;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      hostname: 'Hostname',
      podName: 'PodName',
      ports: 'Ports',
      region: 'Region',
      sidecarInjected: 'SidecarInjected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      hostname: 'string',
      podName: 'string',
      ports: { 'type': 'array', 'itemType': 'number' },
      region: 'string',
      sidecarInjected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceEndpointsResponseBodyEndPointSlice extends $tea.Model {
  endpointsDetails?: GetRegisteredServiceEndpointsResponseBodyEndPointSliceEndpointsDetails[];
  location?: string;
  namespace?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      endpointsDetails: 'EndpointsDetails',
      location: 'Location',
      namespace: 'Namespace',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointsDetails: { 'type': 'array', 'itemType': GetRegisteredServiceEndpointsResponseBodyEndPointSliceEndpointsDetails },
      location: 'string',
      namespace: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceEndpointsResponseBodyServiceEndpoints extends $tea.Model {
  address?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimLaneGroupListResponseBodySwimLaneGroupList extends $tea.Model {
  fallbackTarget?: string;
  groupName?: string;
  ingressGatewayName?: string;
  ingressType?: string;
  isPermissive?: boolean;
  routeHeader?: string;
  serviceList?: string;
  swimLaneLabels?: string;
  traceHeader?: string;
  static names(): { [key: string]: string } {
    return {
      fallbackTarget: 'FallbackTarget',
      groupName: 'GroupName',
      ingressGatewayName: 'IngressGatewayName',
      ingressType: 'IngressType',
      isPermissive: 'IsPermissive',
      routeHeader: 'RouteHeader',
      serviceList: 'ServiceList',
      swimLaneLabels: 'SwimLaneLabels',
      traceHeader: 'TraceHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fallbackTarget: 'string',
      groupName: 'string',
      ingressGatewayName: 'string',
      ingressType: 'string',
      isPermissive: 'boolean',
      routeHeader: 'string',
      serviceList: 'string',
      swimLaneLabels: 'string',
      traceHeader: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimLaneListResponseBodySwimLaneList extends $tea.Model {
  groupName?: string;
  ingressRule?: string;
  ingressService?: string;
  labelSelectorKey?: string;
  labelSelectorValue?: string;
  name?: string;
  serviceList?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      ingressRule: 'IngressRule',
      ingressService: 'IngressService',
      labelSelectorKey: 'LabelSelectorKey',
      labelSelectorValue: 'LabelSelectorValue',
      name: 'Name',
      serviceList: 'ServiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ingressRule: 'string',
      ingressService: 'string',
      labelSelectorKey: 'string',
      labelSelectorValue: 'string',
      name: 'string',
      serviceList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmMetaResponseBodyVmMetaInfo extends $tea.Model {
  envoyEnvContent?: string;
  hostsContent?: string;
  tokenContent?: string;
  static names(): { [key: string]: string } {
    return {
      envoyEnvContent: 'EnvoyEnvContent',
      hostsContent: 'HostsContent',
      tokenContent: 'TokenContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envoyEnvContent: 'string',
      hostsContent: 'string',
      tokenContent: 'string',
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsDelegate extends $tea.Model {
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbortPercentage extends $tea.Model {
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbort extends $tea.Model {
  httpStatus?: number;
  percentage?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbortPercentage;
  static names(): { [key: string]: string } {
    return {
      httpStatus: 'HttpStatus',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatus: 'number',
      percentage: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbortPercentage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelayPercentage extends $tea.Model {
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelay extends $tea.Model {
  fixedDelay?: string;
  percentage?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelayPercentage;
  static names(): { [key: string]: string } {
    return {
      fixedDelay: 'FixedDelay',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedDelay: 'string',
      percentage: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelayPercentage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFault extends $tea.Model {
  abort?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbort;
  delay?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelay;
  static names(): { [key: string]: string } {
    return {
      abort: 'Abort',
      delay: 'Delay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abort: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbort,
      delay: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelay,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsHTTPRedirect extends $tea.Model {
  authority?: string;
  redirectCode?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      authority: 'Authority',
      redirectCode: 'RedirectCode',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authority: 'string',
      redirectCode: 'number',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirror extends $tea.Model {
  host?: string;
  subset?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      subset: 'Subset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      subset: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirrorPercentage extends $tea.Model {
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetriesRetryRemoteLocalities extends $tea.Model {
  value?: boolean;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetries extends $tea.Model {
  attempts?: number;
  perTryTimeout?: string;
  retryOn?: string;
  retryRemoteLocalities?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetriesRetryRemoteLocalities;
  static names(): { [key: string]: string } {
    return {
      attempts: 'Attempts',
      perTryTimeout: 'PerTryTimeout',
      retryOn: 'RetryOn',
      retryRemoteLocalities: 'RetryRemoteLocalities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempts: 'number',
      perTryTimeout: 'string',
      retryOn: 'string',
      retryRemoteLocalities: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetriesRetryRemoteLocalities,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRewrite extends $tea.Model {
  authority?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      authority: 'Authority',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authority: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptions extends $tea.Model {
  delegate?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsDelegate;
  fault?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFault;
  HTTPRedirect?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsHTTPRedirect;
  mirror?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirror;
  mirrorPercentage?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirrorPercentage;
  retries?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetries;
  rewrite?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRewrite;
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      delegate: 'Delegate',
      fault: 'Fault',
      HTTPRedirect: 'HTTPRedirect',
      mirror: 'Mirror',
      mirrorPercentage: 'MirrorPercentage',
      retries: 'Retries',
      rewrite: 'Rewrite',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegate: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsDelegate,
      fault: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFault,
      HTTPRedirect: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsHTTPRedirect,
      mirror: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirror,
      mirrorPercentage: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirrorPercentage,
      retries: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetries,
      rewrite: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRewrite,
      timeout: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestHeaders extends $tea.Model {
  matchingContent?: string;
  matchingMode?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      matchingContent: 'MatchingContent',
      matchingMode: 'MatchingMode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingContent: 'string',
      matchingMode: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestTLSMatchAttributes extends $tea.Model {
  SNIHosts?: string[];
  TLSPort?: number;
  static names(): { [key: string]: string } {
    return {
      SNIHosts: 'SNIHosts',
      TLSPort: 'TLSPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SNIHosts: { 'type': 'array', 'itemType': 'string' },
      TLSPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestURI extends $tea.Model {
  matchingContent?: string;
  matchingMode?: string;
  static names(): { [key: string]: string } {
    return {
      matchingContent: 'MatchingContent',
      matchingMode: 'MatchingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingContent: 'string',
      matchingMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequest extends $tea.Model {
  headers?: UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestHeaders[];
  ports?: number[];
  TLSMatchAttributes?: UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestTLSMatchAttributes[];
  URI?: UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestURI;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      ports: 'Ports',
      TLSMatchAttributes: 'TLSMatchAttributes',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestHeaders },
      ports: { 'type': 'array', 'itemType': 'number' },
      TLSMatchAttributes: { 'type': 'array', 'itemType': UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestTLSMatchAttributes },
      URI: UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestURI,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestinationPort extends $tea.Model {
  number?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestination extends $tea.Model {
  host?: string;
  port?: UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestinationPort;
  subset?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
      subset: 'Subset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestinationPort,
      subset: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinations extends $tea.Model {
  destination?: UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestination;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestination,
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRoute extends $tea.Model {
  domains?: string[];
  HTTPAdvancedOptions?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptions;
  matchRequest?: UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequest;
  namespace?: string;
  rawVSRoute?: any;
  routeDestinations?: UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinations[];
  routeName?: string;
  routeType?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      HTTPAdvancedOptions: 'HTTPAdvancedOptions',
      matchRequest: 'MatchRequest',
      namespace: 'Namespace',
      rawVSRoute: 'RawVSRoute',
      routeDestinations: 'RouteDestinations',
      routeName: 'RouteName',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      HTTPAdvancedOptions: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptions,
      matchRequest: UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequest,
      namespace: 'string',
      rawVSRoute: 'any',
      routeDestinations: { 'type': 'array', 'itemType': UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinations },
      routeName: 'string',
      routeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("servicemesh", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addClusterIntoServiceMeshWithOptions(request: AddClusterIntoServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<AddClusterIntoServiceMeshResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.ignoreNamespaceCheck)) {
      body["IgnoreNamespaceCheck"] = request.ignoreNamespaceCheck;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddClusterIntoServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddClusterIntoServiceMeshResponse>(await this.callApi(params, req, runtime), new AddClusterIntoServiceMeshResponse({}));
  }

  async addClusterIntoServiceMesh(request: AddClusterIntoServiceMeshRequest): Promise<AddClusterIntoServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addClusterIntoServiceMeshWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request AddVMIntoServiceMeshRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddVMIntoServiceMeshResponse
   */
  // Deprecated
  async addVMIntoServiceMeshWithOptions(request: AddVMIntoServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<AddVMIntoServiceMeshResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ecsId)) {
      query["EcsId"] = request.ecsId;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddVMIntoServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddVMIntoServiceMeshResponse>(await this.callApi(params, req, runtime), new AddVMIntoServiceMeshResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request AddVMIntoServiceMeshRequest
    * @return AddVMIntoServiceMeshResponse
   */
  // Deprecated
  async addVMIntoServiceMesh(request: AddVMIntoServiceMeshRequest): Promise<AddVMIntoServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVMIntoServiceMeshWithOptions(request, runtime);
  }

  async createASMGatewayWithOptions(request: CreateASMGatewayRequest, runtime: $Util.RuntimeOptions): Promise<CreateASMGatewayResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateASMGateway",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateASMGatewayResponse>(await this.callApi(params, req, runtime), new CreateASMGatewayResponse({}));
  }

  async createASMGateway(request: CreateASMGatewayRequest): Promise<CreateASMGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createASMGatewayWithOptions(request, runtime);
  }

  async createGatewaySecretWithOptions(request: CreateGatewaySecretRequest, runtime: $Util.RuntimeOptions): Promise<CreateGatewaySecretResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cert)) {
      body["Cert"] = request.cert;
    }

    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.key)) {
      body["Key"] = request.key;
    }

    if (!Util.isUnset(request.secretName)) {
      body["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGatewaySecret",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewaySecretResponse>(await this.callApi(params, req, runtime), new CreateGatewaySecretResponse({}));
  }

  async createGatewaySecret(request: CreateGatewaySecretRequest): Promise<CreateGatewaySecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGatewaySecretWithOptions(request, runtime);
  }

  async createIstioGatewayDomainsWithOptions(request: CreateIstioGatewayDomainsRequest, runtime: $Util.RuntimeOptions): Promise<CreateIstioGatewayDomainsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.credential)) {
      body["Credential"] = request.credential;
    }

    if (!Util.isUnset(request.forceHttps)) {
      body["ForceHttps"] = request.forceHttps;
    }

    if (!Util.isUnset(request.hosts)) {
      body["Hosts"] = request.hosts;
    }

    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.number)) {
      body["Number"] = request.number;
    }

    if (!Util.isUnset(request.portName)) {
      body["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIstioGatewayDomains",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIstioGatewayDomainsResponse>(await this.callApi(params, req, runtime), new CreateIstioGatewayDomainsResponse({}));
  }

  async createIstioGatewayDomains(request: CreateIstioGatewayDomainsRequest): Promise<CreateIstioGatewayDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIstioGatewayDomainsWithOptions(request, runtime);
  }

  async createIstioGatewayRoutesWithOptions(tmpReq: CreateIstioGatewayRoutesRequest, runtime: $Util.RuntimeOptions): Promise<CreateIstioGatewayRoutesResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateIstioGatewayRoutesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.gatewayRoute)) {
      request.gatewayRouteShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.gatewayRoute, "GatewayRoute", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.gatewayRouteShrink)) {
      body["GatewayRoute"] = request.gatewayRouteShrink;
    }

    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIstioGatewayRoutes",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIstioGatewayRoutesResponse>(await this.callApi(params, req, runtime), new CreateIstioGatewayRoutesResponse({}));
  }

  async createIstioGatewayRoutes(request: CreateIstioGatewayRoutesRequest): Promise<CreateIstioGatewayRoutesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIstioGatewayRoutesWithOptions(request, runtime);
  }

  async createServiceMeshWithOptions(request: CreateServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceMeshResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessLogEnabled)) {
      body["AccessLogEnabled"] = request.accessLogEnabled;
    }

    if (!Util.isUnset(request.accessLogFile)) {
      body["AccessLogFile"] = request.accessLogFile;
    }

    if (!Util.isUnset(request.accessLogFormat)) {
      body["AccessLogFormat"] = request.accessLogFormat;
    }

    if (!Util.isUnset(request.accessLogProject)) {
      body["AccessLogProject"] = request.accessLogProject;
    }

    if (!Util.isUnset(request.accessLogServiceEnabled)) {
      body["AccessLogServiceEnabled"] = request.accessLogServiceEnabled;
    }

    if (!Util.isUnset(request.accessLogServiceHost)) {
      body["AccessLogServiceHost"] = request.accessLogServiceHost;
    }

    if (!Util.isUnset(request.accessLogServicePort)) {
      body["AccessLogServicePort"] = request.accessLogServicePort;
    }

    if (!Util.isUnset(request.apiServerLoadBalancerSpec)) {
      body["ApiServerLoadBalancerSpec"] = request.apiServerLoadBalancerSpec;
    }

    if (!Util.isUnset(request.apiServerPublicEip)) {
      body["ApiServerPublicEip"] = request.apiServerPublicEip;
    }

    if (!Util.isUnset(request.auditProject)) {
      body["AuditProject"] = request.auditProject;
    }

    if (!Util.isUnset(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      body["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.CRAggregationEnabled)) {
      body["CRAggregationEnabled"] = request.CRAggregationEnabled;
    }

    if (!Util.isUnset(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.clusterSpec)) {
      body["ClusterSpec"] = request.clusterSpec;
    }

    if (!Util.isUnset(request.configSourceEnabled)) {
      body["ConfigSourceEnabled"] = request.configSourceEnabled;
    }

    if (!Util.isUnset(request.configSourceNacosID)) {
      body["ConfigSourceNacosID"] = request.configSourceNacosID;
    }

    if (!Util.isUnset(request.controlPlaneLogEnabled)) {
      body["ControlPlaneLogEnabled"] = request.controlPlaneLogEnabled;
    }

    if (!Util.isUnset(request.controlPlaneLogProject)) {
      body["ControlPlaneLogProject"] = request.controlPlaneLogProject;
    }

    if (!Util.isUnset(request.customizedPrometheus)) {
      body["CustomizedPrometheus"] = request.customizedPrometheus;
    }

    if (!Util.isUnset(request.customizedZipkin)) {
      body["CustomizedZipkin"] = request.customizedZipkin;
    }

    if (!Util.isUnset(request.DNSProxyingEnabled)) {
      body["DNSProxyingEnabled"] = request.DNSProxyingEnabled;
    }

    if (!Util.isUnset(request.dubboFilterEnabled)) {
      body["DubboFilterEnabled"] = request.dubboFilterEnabled;
    }

    if (!Util.isUnset(request.edition)) {
      body["Edition"] = request.edition;
    }

    if (!Util.isUnset(request.enableAmbient)) {
      body["EnableAmbient"] = request.enableAmbient;
    }

    if (!Util.isUnset(request.enableAudit)) {
      body["EnableAudit"] = request.enableAudit;
    }

    if (!Util.isUnset(request.enableCRHistory)) {
      body["EnableCRHistory"] = request.enableCRHistory;
    }

    if (!Util.isUnset(request.enableSDSServer)) {
      body["EnableSDSServer"] = request.enableSDSServer;
    }

    if (!Util.isUnset(request.excludeIPRanges)) {
      body["ExcludeIPRanges"] = request.excludeIPRanges;
    }

    if (!Util.isUnset(request.excludeInboundPorts)) {
      body["ExcludeInboundPorts"] = request.excludeInboundPorts;
    }

    if (!Util.isUnset(request.excludeOutboundPorts)) {
      body["ExcludeOutboundPorts"] = request.excludeOutboundPorts;
    }

    if (!Util.isUnset(request.existingCaCert)) {
      body["ExistingCaCert"] = request.existingCaCert;
    }

    if (!Util.isUnset(request.existingCaKey)) {
      body["ExistingCaKey"] = request.existingCaKey;
    }

    if (!Util.isUnset(request.existingCaType)) {
      body["ExistingCaType"] = request.existingCaType;
    }

    if (!Util.isUnset(request.existingRootCaCert)) {
      body["ExistingRootCaCert"] = request.existingRootCaCert;
    }

    if (!Util.isUnset(request.existingRootCaKey)) {
      body["ExistingRootCaKey"] = request.existingRootCaKey;
    }

    if (!Util.isUnset(request.filterGatewayClusterConfig)) {
      body["FilterGatewayClusterConfig"] = request.filterGatewayClusterConfig;
    }

    if (!Util.isUnset(request.gatewayAPIEnabled)) {
      body["GatewayAPIEnabled"] = request.gatewayAPIEnabled;
    }

    if (!Util.isUnset(request.guestCluster)) {
      body["GuestCluster"] = request.guestCluster;
    }

    if (!Util.isUnset(request.includeIPRanges)) {
      body["IncludeIPRanges"] = request.includeIPRanges;
    }

    if (!Util.isUnset(request.istioVersion)) {
      body["IstioVersion"] = request.istioVersion;
    }

    if (!Util.isUnset(request.kialiEnabled)) {
      body["KialiEnabled"] = request.kialiEnabled;
    }

    if (!Util.isUnset(request.localityLBConf)) {
      body["LocalityLBConf"] = request.localityLBConf;
    }

    if (!Util.isUnset(request.localityLoadBalancing)) {
      body["LocalityLoadBalancing"] = request.localityLoadBalancing;
    }

    if (!Util.isUnset(request.MSEEnabled)) {
      body["MSEEnabled"] = request.MSEEnabled;
    }

    if (!Util.isUnset(request.multiBufferEnabled)) {
      body["MultiBufferEnabled"] = request.multiBufferEnabled;
    }

    if (!Util.isUnset(request.multiBufferPollDelay)) {
      body["MultiBufferPollDelay"] = request.multiBufferPollDelay;
    }

    if (!Util.isUnset(request.mysqlFilterEnabled)) {
      body["MysqlFilterEnabled"] = request.mysqlFilterEnabled;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.OPALimitCPU)) {
      body["OPALimitCPU"] = request.OPALimitCPU;
    }

    if (!Util.isUnset(request.OPALimitMemory)) {
      body["OPALimitMemory"] = request.OPALimitMemory;
    }

    if (!Util.isUnset(request.OPALogLevel)) {
      body["OPALogLevel"] = request.OPALogLevel;
    }

    if (!Util.isUnset(request.OPARequestCPU)) {
      body["OPARequestCPU"] = request.OPARequestCPU;
    }

    if (!Util.isUnset(request.OPARequestMemory)) {
      body["OPARequestMemory"] = request.OPARequestMemory;
    }

    if (!Util.isUnset(request.opaEnabled)) {
      body["OpaEnabled"] = request.opaEnabled;
    }

    if (!Util.isUnset(request.openAgentPolicy)) {
      body["OpenAgentPolicy"] = request.openAgentPolicy;
    }

    if (!Util.isUnset(request.period)) {
      body["Period"] = request.period;
    }

    if (!Util.isUnset(request.pilotLoadBalancerSpec)) {
      body["PilotLoadBalancerSpec"] = request.pilotLoadBalancerSpec;
    }

    if (!Util.isUnset(request.prometheusUrl)) {
      body["PrometheusUrl"] = request.prometheusUrl;
    }

    if (!Util.isUnset(request.proxyLimitCPU)) {
      body["ProxyLimitCPU"] = request.proxyLimitCPU;
    }

    if (!Util.isUnset(request.proxyLimitMemory)) {
      body["ProxyLimitMemory"] = request.proxyLimitMemory;
    }

    if (!Util.isUnset(request.proxyRequestCPU)) {
      body["ProxyRequestCPU"] = request.proxyRequestCPU;
    }

    if (!Util.isUnset(request.proxyRequestMemory)) {
      body["ProxyRequestMemory"] = request.proxyRequestMemory;
    }

    if (!Util.isUnset(request.redisFilterEnabled)) {
      body["RedisFilterEnabled"] = request.redisFilterEnabled;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.telemetry)) {
      body["Telemetry"] = request.telemetry;
    }

    if (!Util.isUnset(request.thriftFilterEnabled)) {
      body["ThriftFilterEnabled"] = request.thriftFilterEnabled;
    }

    if (!Util.isUnset(request.traceSampling)) {
      body["TraceSampling"] = request.traceSampling;
    }

    if (!Util.isUnset(request.tracing)) {
      body["Tracing"] = request.tracing;
    }

    if (!Util.isUnset(request.useExistingCA)) {
      body["UseExistingCA"] = request.useExistingCA;
    }

    if (!Util.isUnset(request.vSwitches)) {
      body["VSwitches"] = request.vSwitches;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.webAssemblyFilterEnabled)) {
      body["WebAssemblyFilterEnabled"] = request.webAssemblyFilterEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceMeshResponse>(await this.callApi(params, req, runtime), new CreateServiceMeshResponse({}));
  }

  async createServiceMesh(request: CreateServiceMeshRequest): Promise<CreateServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceMeshWithOptions(request, runtime);
  }

  async createSwimLaneWithOptions(request: CreateSwimLaneRequest, runtime: $Util.RuntimeOptions): Promise<CreateSwimLaneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.labelSelectorKey)) {
      body["LabelSelectorKey"] = request.labelSelectorKey;
    }

    if (!Util.isUnset(request.labelSelectorValue)) {
      body["LabelSelectorValue"] = request.labelSelectorValue;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.servicesList)) {
      body["ServicesList"] = request.servicesList;
    }

    if (!Util.isUnset(request.swimLaneName)) {
      body["SwimLaneName"] = request.swimLaneName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSwimLane",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSwimLaneResponse>(await this.callApi(params, req, runtime), new CreateSwimLaneResponse({}));
  }

  async createSwimLane(request: CreateSwimLaneRequest): Promise<CreateSwimLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSwimLaneWithOptions(request, runtime);
  }

  async createSwimLaneGroupWithOptions(request: CreateSwimLaneGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateSwimLaneGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.ingressGatewayName)) {
      body["IngressGatewayName"] = request.ingressGatewayName;
    }

    if (!Util.isUnset(request.ingressType)) {
      body["IngressType"] = request.ingressType;
    }

    if (!Util.isUnset(request.isPermissive)) {
      body["IsPermissive"] = request.isPermissive;
    }

    if (!Util.isUnset(request.routeHeader)) {
      body["RouteHeader"] = request.routeHeader;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.servicesList)) {
      body["ServicesList"] = request.servicesList;
    }

    if (!Util.isUnset(request.traceHeader)) {
      body["TraceHeader"] = request.traceHeader;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSwimLaneGroup",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSwimLaneGroupResponse>(await this.callApi(params, req, runtime), new CreateSwimLaneGroupResponse({}));
  }

  async createSwimLaneGroup(request: CreateSwimLaneGroupRequest): Promise<CreateSwimLaneGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSwimLaneGroupWithOptions(request, runtime);
  }

  async deleteGatewayRouteWithOptions(request: DeleteGatewayRouteRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayRouteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.routeName)) {
      body["RouteName"] = request.routeName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayRoute",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayRouteResponse>(await this.callApi(params, req, runtime), new DeleteGatewayRouteResponse({}));
  }

  async deleteGatewayRoute(request: DeleteGatewayRouteRequest): Promise<DeleteGatewayRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayRouteWithOptions(request, runtime);
  }

  async deleteGatewaySecretWithOptions(request: DeleteGatewaySecretRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewaySecretResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.secretName)) {
      body["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewaySecret",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewaySecretResponse>(await this.callApi(params, req, runtime), new DeleteGatewaySecretResponse({}));
  }

  async deleteGatewaySecret(request: DeleteGatewaySecretRequest): Promise<DeleteGatewaySecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewaySecretWithOptions(request, runtime);
  }

  async deleteIstioGatewayDomainsWithOptions(request: DeleteIstioGatewayDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIstioGatewayDomainsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hosts)) {
      body["Hosts"] = request.hosts;
    }

    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.portName)) {
      body["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIstioGatewayDomains",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIstioGatewayDomainsResponse>(await this.callApi(params, req, runtime), new DeleteIstioGatewayDomainsResponse({}));
  }

  async deleteIstioGatewayDomains(request: DeleteIstioGatewayDomainsRequest): Promise<DeleteIstioGatewayDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIstioGatewayDomainsWithOptions(request, runtime);
  }

  async deleteServiceMeshWithOptions(request: DeleteServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceMeshResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      body["Force"] = request.force;
    }

    if (!Util.isUnset(request.retainResources)) {
      body["RetainResources"] = request.retainResources;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceMeshResponse>(await this.callApi(params, req, runtime), new DeleteServiceMeshResponse({}));
  }

  async deleteServiceMesh(request: DeleteServiceMeshRequest): Promise<DeleteServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceMeshWithOptions(request, runtime);
  }

  async deleteSwimLaneWithOptions(request: DeleteSwimLaneRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSwimLaneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.swimLaneName)) {
      body["SwimLaneName"] = request.swimLaneName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSwimLane",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSwimLaneResponse>(await this.callApi(params, req, runtime), new DeleteSwimLaneResponse({}));
  }

  async deleteSwimLane(request: DeleteSwimLaneRequest): Promise<DeleteSwimLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSwimLaneWithOptions(request, runtime);
  }

  async deleteSwimLaneGroupWithOptions(request: DeleteSwimLaneGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSwimLaneGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSwimLaneGroup",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSwimLaneGroupResponse>(await this.callApi(params, req, runtime), new DeleteSwimLaneGroupResponse({}));
  }

  async deleteSwimLaneGroup(request: DeleteSwimLaneGroupRequest): Promise<DeleteSwimLaneGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSwimLaneGroupWithOptions(request, runtime);
  }

  async describeASMGatewayImportedServicesWithOptions(request: DescribeASMGatewayImportedServicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeASMGatewayImportedServicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ASMGatewayName)) {
      body["ASMGatewayName"] = request.ASMGatewayName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.serviceNamespace)) {
      body["ServiceNamespace"] = request.serviceNamespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeASMGatewayImportedServices",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeASMGatewayImportedServicesResponse>(await this.callApi(params, req, runtime), new DescribeASMGatewayImportedServicesResponse({}));
  }

  async describeASMGatewayImportedServices(request: DescribeASMGatewayImportedServicesRequest): Promise<DescribeASMGatewayImportedServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeASMGatewayImportedServicesWithOptions(request, runtime);
  }

  async describeCCMVersionWithOptions(request: DescribeCCMVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCCMVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCCMVersion",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCCMVersionResponse>(await this.callApi(params, req, runtime), new DescribeCCMVersionResponse({}));
  }

  async describeCCMVersion(request: DescribeCCMVersionRequest): Promise<DescribeCCMVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCCMVersionWithOptions(request, runtime);
  }

  async describeCensWithOptions(request: DescribeCensRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCensResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCens",
      version: "2020-01-11",
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

  async describeClusterGrafanaWithOptions(request: DescribeClusterGrafanaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterGrafanaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.k8sClusterId)) {
      query["K8sClusterId"] = request.k8sClusterId;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterGrafana",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterGrafanaResponse>(await this.callApi(params, req, runtime), new DescribeClusterGrafanaResponse({}));
  }

  async describeClusterGrafana(request: DescribeClusterGrafanaRequest): Promise<DescribeClusterGrafanaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterGrafanaWithOptions(request, runtime);
  }

  async describeClusterPrometheusWithOptions(request: DescribeClusterPrometheusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterPrometheusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.k8sClusterId)) {
      query["K8sClusterId"] = request.k8sClusterId;
    }

    if (!Util.isUnset(request.k8sClusterRegionId)) {
      query["K8sClusterRegionId"] = request.k8sClusterRegionId;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterPrometheus",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterPrometheusResponse>(await this.callApi(params, req, runtime), new DescribeClusterPrometheusResponse({}));
  }

  async describeClusterPrometheus(request: DescribeClusterPrometheusRequest): Promise<DescribeClusterPrometheusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterPrometheusWithOptions(request, runtime);
  }

  async describeClustersInServiceMeshWithOptions(request: DescribeClustersInServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClustersInServiceMeshResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClustersInServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClustersInServiceMeshResponse>(await this.callApi(params, req, runtime), new DescribeClustersInServiceMeshResponse({}));
  }

  async describeClustersInServiceMesh(request: DescribeClustersInServiceMeshRequest): Promise<DescribeClustersInServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClustersInServiceMeshWithOptions(request, runtime);
  }

  async describeCrTemplatesWithOptions(request: DescribeCrTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCrTemplatesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.istioVersion)) {
      body["IstioVersion"] = request.istioVersion;
    }

    if (!Util.isUnset(request.kind)) {
      body["Kind"] = request.kind;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCrTemplates",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCrTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeCrTemplatesResponse({}));
  }

  async describeCrTemplates(request: DescribeCrTemplatesRequest): Promise<DescribeCrTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCrTemplatesWithOptions(request, runtime);
  }

  async describeEipResourcesWithOptions(request: DescribeEipResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEipResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEipResources",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEipResourcesResponse>(await this.callApi(params, req, runtime), new DescribeEipResourcesResponse({}));
  }

  async describeEipResources(request: DescribeEipResourcesRequest): Promise<DescribeEipResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEipResourcesWithOptions(request, runtime);
  }

  async describeGatewaySecretDetailsWithOptions(request: DescribeGatewaySecretDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewaySecretDetailsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewaySecretDetails",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewaySecretDetailsResponse>(await this.callApi(params, req, runtime), new DescribeGatewaySecretDetailsResponse({}));
  }

  async describeGatewaySecretDetails(request: DescribeGatewaySecretDetailsRequest): Promise<DescribeGatewaySecretDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewaySecretDetailsWithOptions(request, runtime);
  }

  async describeGuestClusterAccessLogDashboardsWithOptions(request: DescribeGuestClusterAccessLogDashboardsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGuestClusterAccessLogDashboardsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.k8sClusterId)) {
      body["K8sClusterId"] = request.k8sClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGuestClusterAccessLogDashboards",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGuestClusterAccessLogDashboardsResponse>(await this.callApi(params, req, runtime), new DescribeGuestClusterAccessLogDashboardsResponse({}));
  }

  async describeGuestClusterAccessLogDashboards(request: DescribeGuestClusterAccessLogDashboardsRequest): Promise<DescribeGuestClusterAccessLogDashboardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGuestClusterAccessLogDashboardsWithOptions(request, runtime);
  }

  async describeGuestClusterNamespacesWithOptions(request: DescribeGuestClusterNamespacesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGuestClusterNamespacesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.guestClusterID)) {
      body["GuestClusterID"] = request.guestClusterID;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.showNsLabels)) {
      body["ShowNsLabels"] = request.showNsLabels;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGuestClusterNamespaces",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGuestClusterNamespacesResponse>(await this.callApi(params, req, runtime), new DescribeGuestClusterNamespacesResponse({}));
  }

  async describeGuestClusterNamespaces(request: DescribeGuestClusterNamespacesRequest): Promise<DescribeGuestClusterNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGuestClusterNamespacesWithOptions(request, runtime);
  }

  async describeGuestClusterPodsWithOptions(request: DescribeGuestClusterPodsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGuestClusterPodsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.guestClusterID)) {
      body["GuestClusterID"] = request.guestClusterID;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGuestClusterPods",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGuestClusterPodsResponse>(await this.callApi(params, req, runtime), new DescribeGuestClusterPodsResponse({}));
  }

  async describeGuestClusterPods(request: DescribeGuestClusterPodsRequest): Promise<DescribeGuestClusterPodsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGuestClusterPodsWithOptions(request, runtime);
  }

  async describeImportedServicesDetailWithOptions(request: DescribeImportedServicesDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImportedServicesDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ASMGatewayName)) {
      body["ASMGatewayName"] = request.ASMGatewayName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.serviceNamespace)) {
      body["ServiceNamespace"] = request.serviceNamespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImportedServicesDetail",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImportedServicesDetailResponse>(await this.callApi(params, req, runtime), new DescribeImportedServicesDetailResponse({}));
  }

  async describeImportedServicesDetail(request: DescribeImportedServicesDetailRequest): Promise<DescribeImportedServicesDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImportedServicesDetailWithOptions(request, runtime);
  }

  async describeIstioGatewayDomainsWithOptions(request: DescribeIstioGatewayDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIstioGatewayDomainsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIstioGatewayDomains",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIstioGatewayDomainsResponse>(await this.callApi(params, req, runtime), new DescribeIstioGatewayDomainsResponse({}));
  }

  async describeIstioGatewayDomains(request: DescribeIstioGatewayDomainsRequest): Promise<DescribeIstioGatewayDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIstioGatewayDomainsWithOptions(request, runtime);
  }

  async describeIstioGatewayRouteDetailWithOptions(request: DescribeIstioGatewayRouteDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIstioGatewayRouteDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.routeName)) {
      body["RouteName"] = request.routeName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIstioGatewayRouteDetail",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIstioGatewayRouteDetailResponse>(await this.callApi(params, req, runtime), new DescribeIstioGatewayRouteDetailResponse({}));
  }

  async describeIstioGatewayRouteDetail(request: DescribeIstioGatewayRouteDetailRequest): Promise<DescribeIstioGatewayRouteDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIstioGatewayRouteDetailWithOptions(request, runtime);
  }

  async describeIstioGatewayRoutesWithOptions(request: DescribeIstioGatewayRoutesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIstioGatewayRoutesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIstioGatewayRoutes",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIstioGatewayRoutesResponse>(await this.callApi(params, req, runtime), new DescribeIstioGatewayRoutesResponse({}));
  }

  async describeIstioGatewayRoutes(request: DescribeIstioGatewayRoutesRequest): Promise<DescribeIstioGatewayRoutesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIstioGatewayRoutesWithOptions(request, runtime);
  }

  async describeMetadataWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeMetadataResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeMetadata",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetadataResponse>(await this.callApi(params, req, runtime), new DescribeMetadataResponse({}));
  }

  async describeMetadata(): Promise<DescribeMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetadataWithOptions(runtime);
  }

  async describeNamespaceScopeSidecarConfigWithOptions(request: DescribeNamespaceScopeSidecarConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNamespaceScopeSidecarConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespaceScopeSidecarConfig",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespaceScopeSidecarConfigResponse>(await this.callApi(params, req, runtime), new DescribeNamespaceScopeSidecarConfigResponse({}));
  }

  async describeNamespaceScopeSidecarConfig(request: DescribeNamespaceScopeSidecarConfigRequest): Promise<DescribeNamespaceScopeSidecarConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNamespaceScopeSidecarConfigWithOptions(request, runtime);
  }

  async describeNodesInstanceTypeWithOptions(request: DescribeNodesInstanceTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNodesInstanceTypeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNodesInstanceType",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNodesInstanceTypeResponse>(await this.callApi(params, req, runtime), new DescribeNodesInstanceTypeResponse({}));
  }

  async describeNodesInstanceType(request: DescribeNodesInstanceTypeRequest): Promise<DescribeNodesInstanceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodesInstanceTypeWithOptions(request, runtime);
  }

  async describeReusableSlbWithOptions(request: DescribeReusableSlbRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReusableSlbResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.k8sClusterId)) {
      body["K8sClusterId"] = request.k8sClusterId;
    }

    if (!Util.isUnset(request.networkType)) {
      body["NetworkType"] = request.networkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeReusableSlb",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeReusableSlbResponse>(await this.callApi(params, req, runtime), new DescribeReusableSlbResponse({}));
  }

  async describeReusableSlb(request: DescribeReusableSlbRequest): Promise<DescribeReusableSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReusableSlbWithOptions(request, runtime);
  }

  async describeServiceMeshAdditionalStatusWithOptions(request: DescribeServiceMeshAdditionalStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshAdditionalStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkMode)) {
      body["CheckMode"] = request.checkMode;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceMeshAdditionalStatus",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceMeshAdditionalStatusResponse>(await this.callApi(params, req, runtime), new DescribeServiceMeshAdditionalStatusResponse({}));
  }

  async describeServiceMeshAdditionalStatus(request: DescribeServiceMeshAdditionalStatusRequest): Promise<DescribeServiceMeshAdditionalStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshAdditionalStatusWithOptions(request, runtime);
  }

  async describeServiceMeshClustersWithOptions(request: DescribeServiceMeshClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.offset)) {
      body["Offset"] = request.offset;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceMeshClusters",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceMeshClustersResponse>(await this.callApi(params, req, runtime), new DescribeServiceMeshClustersResponse({}));
  }

  async describeServiceMeshClusters(request: DescribeServiceMeshClustersRequest): Promise<DescribeServiceMeshClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshClustersWithOptions(request, runtime);
  }

  async describeServiceMeshDetailWithOptions(request: DescribeServiceMeshDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceMeshDetail",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceMeshDetailResponse>(await this.callApi(params, req, runtime), new DescribeServiceMeshDetailResponse({}));
  }

  async describeServiceMeshDetail(request: DescribeServiceMeshDetailRequest): Promise<DescribeServiceMeshDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshDetailWithOptions(request, runtime);
  }

  async describeServiceMeshKubeconfigWithOptions(request: DescribeServiceMeshKubeconfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshKubeconfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceMeshKubeconfig",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceMeshKubeconfigResponse>(await this.callApi(params, req, runtime), new DescribeServiceMeshKubeconfigResponse({}));
  }

  async describeServiceMeshKubeconfig(request: DescribeServiceMeshKubeconfigRequest): Promise<DescribeServiceMeshKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshKubeconfigWithOptions(request, runtime);
  }

  async describeServiceMeshLogsWithOptions(request: DescribeServiceMeshLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshLogsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceMeshLogs",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceMeshLogsResponse>(await this.callApi(params, req, runtime), new DescribeServiceMeshLogsResponse({}));
  }

  async describeServiceMeshLogs(request: DescribeServiceMeshLogsRequest): Promise<DescribeServiceMeshLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshLogsWithOptions(request, runtime);
  }

  async describeServiceMeshProxyStatusWithOptions(request: DescribeServiceMeshProxyStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshProxyStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceMeshProxyStatus",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceMeshProxyStatusResponse>(await this.callApi(params, req, runtime), new DescribeServiceMeshProxyStatusResponse({}));
  }

  async describeServiceMeshProxyStatus(request: DescribeServiceMeshProxyStatusRequest): Promise<DescribeServiceMeshProxyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshProxyStatusWithOptions(request, runtime);
  }

  async describeServiceMeshUpgradeStatusWithOptions(request: DescribeServiceMeshUpgradeStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshUpgradeStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allIstioGatewayFullNames)) {
      body["AllIstioGatewayFullNames"] = request.allIstioGatewayFullNames;
    }

    if (!Util.isUnset(request.guestClusterIds)) {
      body["GuestClusterIds"] = request.guestClusterIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceMeshUpgradeStatus",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceMeshUpgradeStatusResponse>(await this.callApi(params, req, runtime), new DescribeServiceMeshUpgradeStatusResponse({}));
  }

  async describeServiceMeshUpgradeStatus(request: DescribeServiceMeshUpgradeStatusRequest): Promise<DescribeServiceMeshUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshUpgradeStatusWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request DescribeServiceMeshVMsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeServiceMeshVMsResponse
   */
  // Deprecated
  async describeServiceMeshVMsWithOptions(request: DescribeServiceMeshVMsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshVMsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceMeshVMs",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceMeshVMsResponse>(await this.callApi(params, req, runtime), new DescribeServiceMeshVMsResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request DescribeServiceMeshVMsRequest
    * @return DescribeServiceMeshVMsResponse
   */
  // Deprecated
  async describeServiceMeshVMs(request: DescribeServiceMeshVMsRequest): Promise<DescribeServiceMeshVMsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshVMsWithOptions(request, runtime);
  }

  async describeServiceMeshesWithOptions(request: DescribeServiceMeshesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceMeshes",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceMeshesResponse>(await this.callApi(params, req, runtime), new DescribeServiceMeshesResponse({}));
  }

  async describeServiceMeshes(request: DescribeServiceMeshesRequest): Promise<DescribeServiceMeshesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshesWithOptions(request, runtime);
  }

  async describeUpgradeVersionWithOptions(request: DescribeUpgradeVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpgradeVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUpgradeVersion",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUpgradeVersionResponse>(await this.callApi(params, req, runtime), new DescribeUpgradeVersionResponse({}));
  }

  async describeUpgradeVersion(request: DescribeUpgradeVersionRequest): Promise<DescribeUpgradeVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpgradeVersionWithOptions(request, runtime);
  }

  async describeUserPermissionsWithOptions(request: DescribeUserPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserPermissionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.subAccountUserId)) {
      body["SubAccountUserId"] = request.subAccountUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserPermissions",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserPermissionsResponse>(await this.callApi(params, req, runtime), new DescribeUserPermissionsResponse({}));
  }

  async describeUserPermissions(request: DescribeUserPermissionsRequest): Promise<DescribeUserPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserPermissionsWithOptions(request, runtime);
  }

  async describeUsersWithPermissionsWithOptions(request: DescribeUsersWithPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUsersWithPermissionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userType)) {
      body["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUsersWithPermissions",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUsersWithPermissionsResponse>(await this.callApi(params, req, runtime), new DescribeUsersWithPermissionsResponse({}));
  }

  async describeUsersWithPermissions(request: DescribeUsersWithPermissionsRequest): Promise<DescribeUsersWithPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsersWithPermissionsWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request DescribeVMsInServiceMeshRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeVMsInServiceMeshResponse
   */
  // Deprecated
  async describeVMsInServiceMeshWithOptions(request: DescribeVMsInServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVMsInServiceMeshResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVMsInServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVMsInServiceMeshResponse>(await this.callApi(params, req, runtime), new DescribeVMsInServiceMeshResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request DescribeVMsInServiceMeshRequest
    * @return DescribeVMsInServiceMeshResponse
   */
  // Deprecated
  async describeVMsInServiceMesh(request: DescribeVMsInServiceMeshRequest): Promise<DescribeVMsInServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVMsInServiceMeshWithOptions(request, runtime);
  }

  async describeVSwitchesWithOptions(request: DescribeVSwitchesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVSwitchesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVSwitches",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVSwitchesResponse>(await this.callApi(params, req, runtime), new DescribeVSwitchesResponse({}));
  }

  async describeVSwitches(request: DescribeVSwitchesRequest): Promise<DescribeVSwitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  async describeVersionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeVersionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeVersions",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVersionsResponse>(await this.callApi(params, req, runtime), new DescribeVersionsResponse({}));
  }

  async describeVersions(): Promise<DescribeVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVersionsWithOptions(runtime);
  }

  async describeVpcsWithOptions(request: DescribeVpcsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcs",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcsResponse>(await this.callApi(params, req, runtime), new DescribeVpcsResponse({}));
  }

  async describeVpcs(request: DescribeVpcsRequest): Promise<DescribeVpcsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcsWithOptions(request, runtime);
  }

  async getCaCertWithOptions(request: GetCaCertRequest, runtime: $Util.RuntimeOptions): Promise<GetCaCertResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCaCert",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCaCertResponse>(await this.callApi(params, req, runtime), new GetCaCertResponse({}));
  }

  async getCaCert(request: GetCaCertRequest): Promise<GetCaCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCaCertWithOptions(request, runtime);
  }

  async getDeploymentBySelectorWithOptions(tmpReq: GetDeploymentBySelectorRequest, runtime: $Util.RuntimeOptions): Promise<GetDeploymentBySelectorResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDeploymentBySelectorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "LabelSelector", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.guestCluster)) {
      body["GuestCluster"] = request.guestCluster;
    }

    if (!Util.isUnset(request.labelSelectorShrink)) {
      body["LabelSelector"] = request.labelSelectorShrink;
    }

    if (!Util.isUnset(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.mark)) {
      body["Mark"] = request.mark;
    }

    if (!Util.isUnset(request.nameSpace)) {
      body["NameSpace"] = request.nameSpace;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDeploymentBySelector",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeploymentBySelectorResponse>(await this.callApi(params, req, runtime), new GetDeploymentBySelectorResponse({}));
  }

  async getDeploymentBySelector(request: GetDeploymentBySelectorRequest): Promise<GetDeploymentBySelectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeploymentBySelectorWithOptions(request, runtime);
  }

  async getGrafanaDashboardUrlWithOptions(request: GetGrafanaDashboardUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetGrafanaDashboardUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.k8sClusterId)) {
      body["K8sClusterId"] = request.k8sClusterId;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetGrafanaDashboardUrl",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGrafanaDashboardUrlResponse>(await this.callApi(params, req, runtime), new GetGrafanaDashboardUrlResponse({}));
  }

  async getGrafanaDashboardUrl(request: GetGrafanaDashboardUrlRequest): Promise<GetGrafanaDashboardUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGrafanaDashboardUrlWithOptions(request, runtime);
  }

  async getRegisteredServiceEndpointsWithOptions(request: GetRegisteredServiceEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<GetRegisteredServiceEndpointsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterIds)) {
      body["ClusterIds"] = request.clusterIds;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.serviceType)) {
      body["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRegisteredServiceEndpoints",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRegisteredServiceEndpointsResponse>(await this.callApi(params, req, runtime), new GetRegisteredServiceEndpointsResponse({}));
  }

  async getRegisteredServiceEndpoints(request: GetRegisteredServiceEndpointsRequest): Promise<GetRegisteredServiceEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegisteredServiceEndpointsWithOptions(request, runtime);
  }

  async getRegisteredServiceNamespacesWithOptions(request: GetRegisteredServiceNamespacesRequest, runtime: $Util.RuntimeOptions): Promise<GetRegisteredServiceNamespacesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRegisteredServiceNamespaces",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRegisteredServiceNamespacesResponse>(await this.callApi(params, req, runtime), new GetRegisteredServiceNamespacesResponse({}));
  }

  async getRegisteredServiceNamespaces(request: GetRegisteredServiceNamespacesRequest): Promise<GetRegisteredServiceNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegisteredServiceNamespacesWithOptions(request, runtime);
  }

  async getSwimLaneDetailWithOptions(request: GetSwimLaneDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetSwimLaneDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.swimLaneName)) {
      body["SwimLaneName"] = request.swimLaneName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSwimLaneDetail",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSwimLaneDetailResponse>(await this.callApi(params, req, runtime), new GetSwimLaneDetailResponse({}));
  }

  async getSwimLaneDetail(request: GetSwimLaneDetailRequest): Promise<GetSwimLaneDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSwimLaneDetailWithOptions(request, runtime);
  }

  async getSwimLaneGroupListWithOptions(request: GetSwimLaneGroupListRequest, runtime: $Util.RuntimeOptions): Promise<GetSwimLaneGroupListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSwimLaneGroupList",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSwimLaneGroupListResponse>(await this.callApi(params, req, runtime), new GetSwimLaneGroupListResponse({}));
  }

  async getSwimLaneGroupList(request: GetSwimLaneGroupListRequest): Promise<GetSwimLaneGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSwimLaneGroupListWithOptions(request, runtime);
  }

  async getSwimLaneListWithOptions(request: GetSwimLaneListRequest, runtime: $Util.RuntimeOptions): Promise<GetSwimLaneListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSwimLaneList",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSwimLaneListResponse>(await this.callApi(params, req, runtime), new GetSwimLaneListResponse({}));
  }

  async getSwimLaneList(request: GetSwimLaneListRequest): Promise<GetSwimLaneListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSwimLaneListWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request GetVmAppMeshInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetVmAppMeshInfoResponse
   */
  // Deprecated
  async getVmAppMeshInfoWithOptions(request: GetVmAppMeshInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetVmAppMeshInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVmAppMeshInfo",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVmAppMeshInfoResponse>(await this.callApi(params, req, runtime), new GetVmAppMeshInfoResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request GetVmAppMeshInfoRequest
    * @return GetVmAppMeshInfoResponse
   */
  // Deprecated
  async getVmAppMeshInfo(request: GetVmAppMeshInfoRequest): Promise<GetVmAppMeshInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVmAppMeshInfoWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request GetVmMetaRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetVmMetaResponse
   */
  // Deprecated
  async getVmMetaWithOptions(request: GetVmMetaRequest, runtime: $Util.RuntimeOptions): Promise<GetVmMetaResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVmMeta",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVmMetaResponse>(await this.callApi(params, req, runtime), new GetVmMetaResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request GetVmMetaRequest
    * @return GetVmMetaResponse
   */
  // Deprecated
  async getVmMeta(request: GetVmMetaRequest): Promise<GetVmMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVmMetaWithOptions(request, runtime);
  }

  async grantUserPermissionsWithOptions(tmpReq: GrantUserPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<GrantUserPermissionsResponse> {
    Util.validateModel(tmpReq);
    let request = new GrantUserPermissionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.subAccountUserIds)) {
      request.subAccountUserIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subAccountUserIds, "SubAccountUserIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.permissions)) {
      body["Permissions"] = request.permissions;
    }

    if (!Util.isUnset(request.subAccountUserId)) {
      body["SubAccountUserId"] = request.subAccountUserId;
    }

    if (!Util.isUnset(request.subAccountUserIdsShrink)) {
      body["SubAccountUserIds"] = request.subAccountUserIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GrantUserPermissions",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantUserPermissionsResponse>(await this.callApi(params, req, runtime), new GrantUserPermissionsResponse({}));
  }

  async grantUserPermissions(request: GrantUserPermissionsRequest): Promise<GrantUserPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantUserPermissionsWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      version: "2020-01-11",
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

  async modifyApiServerEipResourceWithOptions(request: ModifyApiServerEipResourceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiServerEipResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiServerEipId)) {
      body["ApiServerEipId"] = request.apiServerEipId;
    }

    if (!Util.isUnset(request.operation)) {
      body["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApiServerEipResource",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyApiServerEipResourceResponse>(await this.callApi(params, req, runtime), new ModifyApiServerEipResourceResponse({}));
  }

  async modifyApiServerEipResource(request: ModifyApiServerEipResourceRequest): Promise<ModifyApiServerEipResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiServerEipResourceWithOptions(request, runtime);
  }

  async modifyServiceMeshNameWithOptions(request: ModifyServiceMeshNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyServiceMeshNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyServiceMeshName",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyServiceMeshNameResponse>(await this.callApi(params, req, runtime), new ModifyServiceMeshNameResponse({}));
  }

  async modifyServiceMeshName(request: ModifyServiceMeshNameRequest): Promise<ModifyServiceMeshNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyServiceMeshNameWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, make sure that you understand the billing methods of Log Service. For more information, visit the [pricing page](https://www.aliyun.com/price/product?spm=5176.10695662.1119587.4.194c6a67rcPWQH#/sls/detail).
    *
    * @param request ReActivateAuditRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ReActivateAuditResponse
   */
  async reActivateAuditWithOptions(request: ReActivateAuditRequest, runtime: $Util.RuntimeOptions): Promise<ReActivateAuditResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enableAudit)) {
      body["EnableAudit"] = request.enableAudit;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReActivateAudit",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReActivateAuditResponse>(await this.callApi(params, req, runtime), new ReActivateAuditResponse({}));
  }

  /**
    * Before you call this operation, make sure that you understand the billing methods of Log Service. For more information, visit the [pricing page](https://www.aliyun.com/price/product?spm=5176.10695662.1119587.4.194c6a67rcPWQH#/sls/detail).
    *
    * @param request ReActivateAuditRequest
    * @return ReActivateAuditResponse
   */
  async reActivateAudit(request: ReActivateAuditRequest): Promise<ReActivateAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reActivateAuditWithOptions(request, runtime);
  }

  async removeClusterFromServiceMeshWithOptions(request: RemoveClusterFromServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<RemoveClusterFromServiceMeshResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.reserveNamespace)) {
      body["ReserveNamespace"] = request.reserveNamespace;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveClusterFromServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveClusterFromServiceMeshResponse>(await this.callApi(params, req, runtime), new RemoveClusterFromServiceMeshResponse({}));
  }

  async removeClusterFromServiceMesh(request: RemoveClusterFromServiceMeshRequest): Promise<RemoveClusterFromServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeClusterFromServiceMeshWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request RemoveVMFromServiceMeshRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveVMFromServiceMeshResponse
   */
  // Deprecated
  async removeVMFromServiceMeshWithOptions(request: RemoveVMFromServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<RemoveVMFromServiceMeshResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ecsId)) {
      query["EcsId"] = request.ecsId;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveVMFromServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveVMFromServiceMeshResponse>(await this.callApi(params, req, runtime), new RemoveVMFromServiceMeshResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request RemoveVMFromServiceMeshRequest
    * @return RemoveVMFromServiceMeshResponse
   */
  // Deprecated
  async removeVMFromServiceMesh(request: RemoveVMFromServiceMeshRequest): Promise<RemoveVMFromServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeVMFromServiceMeshWithOptions(request, runtime);
  }

  async revokeKubeconfigWithOptions(request: RevokeKubeconfigRequest, runtime: $Util.RuntimeOptions): Promise<RevokeKubeconfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.privateIpAddress)) {
      body["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevokeKubeconfig",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeKubeconfigResponse>(await this.callApi(params, req, runtime), new RevokeKubeconfigResponse({}));
  }

  async revokeKubeconfig(request: RevokeKubeconfigRequest): Promise<RevokeKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeKubeconfigWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "TagResources",
      version: "2020-01-11",
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "UntagResources",
      version: "2020-01-11",
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

  async updateASMGatewayWithOptions(request: UpdateASMGatewayRequest, runtime: $Util.RuntimeOptions): Promise<UpdateASMGatewayResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateASMGateway",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateASMGatewayResponse>(await this.callApi(params, req, runtime), new UpdateASMGatewayResponse({}));
  }

  async updateASMGateway(request: UpdateASMGatewayRequest): Promise<UpdateASMGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateASMGatewayWithOptions(request, runtime);
  }

  async updateASMGatewayImportedServicesWithOptions(request: UpdateASMGatewayImportedServicesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateASMGatewayImportedServicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ASMGatewayName)) {
      body["ASMGatewayName"] = request.ASMGatewayName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.serviceNames)) {
      body["ServiceNames"] = request.serviceNames;
    }

    if (!Util.isUnset(request.serviceNamespace)) {
      body["ServiceNamespace"] = request.serviceNamespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateASMGatewayImportedServices",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateASMGatewayImportedServicesResponse>(await this.callApi(params, req, runtime), new UpdateASMGatewayImportedServicesResponse({}));
  }

  async updateASMGatewayImportedServices(request: UpdateASMGatewayImportedServicesRequest): Promise<UpdateASMGatewayImportedServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateASMGatewayImportedServicesWithOptions(request, runtime);
  }

  async updateASMNamespaceFromGuestClusterWithOptions(request: UpdateASMNamespaceFromGuestClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateASMNamespaceFromGuestClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.k8sClusterId)) {
      body["K8sClusterId"] = request.k8sClusterId;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateASMNamespaceFromGuestCluster",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateASMNamespaceFromGuestClusterResponse>(await this.callApi(params, req, runtime), new UpdateASMNamespaceFromGuestClusterResponse({}));
  }

  async updateASMNamespaceFromGuestCluster(request: UpdateASMNamespaceFromGuestClusterRequest): Promise<UpdateASMNamespaceFromGuestClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateASMNamespaceFromGuestClusterWithOptions(request, runtime);
  }

  async updateControlPlaneLogConfigWithOptions(request: UpdateControlPlaneLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateControlPlaneLogConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enabled)) {
      body["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.logTTLInDay)) {
      body["LogTTLInDay"] = request.logTTLInDay;
    }

    if (!Util.isUnset(request.project)) {
      body["Project"] = request.project;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateControlPlaneLogConfig",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateControlPlaneLogConfigResponse>(await this.callApi(params, req, runtime), new UpdateControlPlaneLogConfigResponse({}));
  }

  async updateControlPlaneLogConfig(request: UpdateControlPlaneLogConfigRequest): Promise<UpdateControlPlaneLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateControlPlaneLogConfigWithOptions(request, runtime);
  }

  async updateIstioGatewayRoutesWithOptions(tmpReq: UpdateIstioGatewayRoutesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIstioGatewayRoutesResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateIstioGatewayRoutesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.gatewayRoute)) {
      request.gatewayRouteShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.gatewayRoute, "GatewayRoute", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.gatewayRouteShrink)) {
      body["GatewayRoute"] = request.gatewayRouteShrink;
    }

    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIstioGatewayRoutes",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIstioGatewayRoutesResponse>(await this.callApi(params, req, runtime), new UpdateIstioGatewayRoutesResponse({}));
  }

  async updateIstioGatewayRoutes(request: UpdateIstioGatewayRoutesRequest): Promise<UpdateIstioGatewayRoutesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIstioGatewayRoutesWithOptions(request, runtime);
  }

  async updateIstioInjectionConfigWithOptions(request: UpdateIstioInjectionConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIstioInjectionConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataPlaneMode)) {
      body["DataPlaneMode"] = request.dataPlaneMode;
    }

    if (!Util.isUnset(request.enableIstioInjection)) {
      body["EnableIstioInjection"] = request.enableIstioInjection;
    }

    if (!Util.isUnset(request.enableSidecarSetInjection)) {
      body["EnableSidecarSetInjection"] = request.enableSidecarSetInjection;
    }

    if (!Util.isUnset(request.istioRev)) {
      body["IstioRev"] = request.istioRev;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIstioInjectionConfig",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIstioInjectionConfigResponse>(await this.callApi(params, req, runtime), new UpdateIstioInjectionConfigResponse({}));
  }

  async updateIstioInjectionConfig(request: UpdateIstioInjectionConfigRequest): Promise<UpdateIstioInjectionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIstioInjectionConfigWithOptions(request, runtime);
  }

  async updateIstioRouteAdditionalStatusWithOptions(request: UpdateIstioRouteAdditionalStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIstioRouteAdditionalStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.routeName)) {
      query["RouteName"] = request.routeName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIstioRouteAdditionalStatus",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIstioRouteAdditionalStatusResponse>(await this.callApi(params, req, runtime), new UpdateIstioRouteAdditionalStatusResponse({}));
  }

  async updateIstioRouteAdditionalStatus(request: UpdateIstioRouteAdditionalStatusRequest): Promise<UpdateIstioRouteAdditionalStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIstioRouteAdditionalStatusWithOptions(request, runtime);
  }

  async updateMeshCRAggregationWithOptions(request: UpdateMeshCRAggregationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMeshCRAggregationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.CPULimit)) {
      body["CPULimit"] = request.CPULimit;
    }

    if (!Util.isUnset(request.CPURequirement)) {
      body["CPURequirement"] = request.CPURequirement;
    }

    if (!Util.isUnset(request.enabled)) {
      body["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.memoryLimit)) {
      body["MemoryLimit"] = request.memoryLimit;
    }

    if (!Util.isUnset(request.memoryRequirement)) {
      body["MemoryRequirement"] = request.memoryRequirement;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.usePublicApiServer)) {
      body["UsePublicApiServer"] = request.usePublicApiServer;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMeshCRAggregation",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMeshCRAggregationResponse>(await this.callApi(params, req, runtime), new UpdateMeshCRAggregationResponse({}));
  }

  async updateMeshCRAggregation(request: UpdateMeshCRAggregationRequest): Promise<UpdateMeshCRAggregationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMeshCRAggregationWithOptions(request, runtime);
  }

  async updateMeshFeatureWithOptions(request: UpdateMeshFeatureRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMeshFeatureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessLogGatewayEnabled)) {
      query["AccessLogGatewayEnabled"] = request.accessLogGatewayEnabled;
    }

    if (!Util.isUnset(request.accessLogSidecarEnabled)) {
      query["AccessLogSidecarEnabled"] = request.accessLogSidecarEnabled;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessLogEnabled)) {
      body["AccessLogEnabled"] = request.accessLogEnabled;
    }

    if (!Util.isUnset(request.accessLogFile)) {
      body["AccessLogFile"] = request.accessLogFile;
    }

    if (!Util.isUnset(request.accessLogFormat)) {
      body["AccessLogFormat"] = request.accessLogFormat;
    }

    if (!Util.isUnset(request.accessLogGatewayLifecycle)) {
      body["AccessLogGatewayLifecycle"] = request.accessLogGatewayLifecycle;
    }

    if (!Util.isUnset(request.accessLogProject)) {
      body["AccessLogProject"] = request.accessLogProject;
    }

    if (!Util.isUnset(request.accessLogServiceEnabled)) {
      body["AccessLogServiceEnabled"] = request.accessLogServiceEnabled;
    }

    if (!Util.isUnset(request.accessLogServiceHost)) {
      body["AccessLogServiceHost"] = request.accessLogServiceHost;
    }

    if (!Util.isUnset(request.accessLogServicePort)) {
      body["AccessLogServicePort"] = request.accessLogServicePort;
    }

    if (!Util.isUnset(request.accessLogSidecarLifecycle)) {
      body["AccessLogSidecarLifecycle"] = request.accessLogSidecarLifecycle;
    }

    if (!Util.isUnset(request.auditProject)) {
      body["AuditProject"] = request.auditProject;
    }

    if (!Util.isUnset(request.autoInjectionPolicyEnabled)) {
      body["AutoInjectionPolicyEnabled"] = request.autoInjectionPolicyEnabled;
    }

    if (!Util.isUnset(request.CRAggregationEnabled)) {
      body["CRAggregationEnabled"] = request.CRAggregationEnabled;
    }

    if (!Util.isUnset(request.clusterSpec)) {
      body["ClusterSpec"] = request.clusterSpec;
    }

    if (!Util.isUnset(request.cniEnabled)) {
      body["CniEnabled"] = request.cniEnabled;
    }

    if (!Util.isUnset(request.cniExcludeNamespaces)) {
      body["CniExcludeNamespaces"] = request.cniExcludeNamespaces;
    }

    if (!Util.isUnset(request.concurrency)) {
      body["Concurrency"] = request.concurrency;
    }

    if (!Util.isUnset(request.configSourceEnabled)) {
      body["ConfigSourceEnabled"] = request.configSourceEnabled;
    }

    if (!Util.isUnset(request.configSourceNacosID)) {
      body["ConfigSourceNacosID"] = request.configSourceNacosID;
    }

    if (!Util.isUnset(request.customizedPrometheus)) {
      body["CustomizedPrometheus"] = request.customizedPrometheus;
    }

    if (!Util.isUnset(request.customizedZipkin)) {
      body["CustomizedZipkin"] = request.customizedZipkin;
    }

    if (!Util.isUnset(request.DNSProxyingEnabled)) {
      body["DNSProxyingEnabled"] = request.DNSProxyingEnabled;
    }

    if (!Util.isUnset(request.defaultComponentsScheduleConfig)) {
      body["DefaultComponentsScheduleConfig"] = request.defaultComponentsScheduleConfig;
    }

    if (!Util.isUnset(request.discoverySelectors)) {
      body["DiscoverySelectors"] = request.discoverySelectors;
    }

    if (!Util.isUnset(request.dubboFilterEnabled)) {
      body["DubboFilterEnabled"] = request.dubboFilterEnabled;
    }

    if (!Util.isUnset(request.enableAudit)) {
      body["EnableAudit"] = request.enableAudit;
    }

    if (!Util.isUnset(request.enableAutoDiagnosis)) {
      body["EnableAutoDiagnosis"] = request.enableAutoDiagnosis;
    }

    if (!Util.isUnset(request.enableBootstrapXdsAgent)) {
      body["EnableBootstrapXdsAgent"] = request.enableBootstrapXdsAgent;
    }

    if (!Util.isUnset(request.enableCRHistory)) {
      body["EnableCRHistory"] = request.enableCRHistory;
    }

    if (!Util.isUnset(request.enableNamespacesByDefault)) {
      body["EnableNamespacesByDefault"] = request.enableNamespacesByDefault;
    }

    if (!Util.isUnset(request.enableSDSServer)) {
      body["EnableSDSServer"] = request.enableSDSServer;
    }

    if (!Util.isUnset(request.excludeIPRanges)) {
      body["ExcludeIPRanges"] = request.excludeIPRanges;
    }

    if (!Util.isUnset(request.excludeInboundPorts)) {
      body["ExcludeInboundPorts"] = request.excludeInboundPorts;
    }

    if (!Util.isUnset(request.excludeOutboundPorts)) {
      body["ExcludeOutboundPorts"] = request.excludeOutboundPorts;
    }

    if (!Util.isUnset(request.filterGatewayClusterConfig)) {
      body["FilterGatewayClusterConfig"] = request.filterGatewayClusterConfig;
    }

    if (!Util.isUnset(request.gatewayAPIEnabled)) {
      body["GatewayAPIEnabled"] = request.gatewayAPIEnabled;
    }

    if (!Util.isUnset(request.holdApplicationUntilProxyStarts)) {
      body["HoldApplicationUntilProxyStarts"] = request.holdApplicationUntilProxyStarts;
    }

    if (!Util.isUnset(request.http10Enabled)) {
      body["Http10Enabled"] = request.http10Enabled;
    }

    if (!Util.isUnset(request.includeIPRanges)) {
      body["IncludeIPRanges"] = request.includeIPRanges;
    }

    if (!Util.isUnset(request.includeInboundPorts)) {
      body["IncludeInboundPorts"] = request.includeInboundPorts;
    }

    if (!Util.isUnset(request.includeOutboundPorts)) {
      body["IncludeOutboundPorts"] = request.includeOutboundPorts;
    }

    if (!Util.isUnset(request.integrateKiali)) {
      body["IntegrateKiali"] = request.integrateKiali;
    }

    if (!Util.isUnset(request.interceptionMode)) {
      body["InterceptionMode"] = request.interceptionMode;
    }

    if (!Util.isUnset(request.kialiArmsAuthTokens)) {
      body["KialiArmsAuthTokens"] = request.kialiArmsAuthTokens;
    }

    if (!Util.isUnset(request.kialiEnabled)) {
      body["KialiEnabled"] = request.kialiEnabled;
    }

    if (!Util.isUnset(request.kialiServiceAnnotations)) {
      body["KialiServiceAnnotations"] = request.kialiServiceAnnotations;
    }

    if (!Util.isUnset(request.lifecycle)) {
      body["Lifecycle"] = request.lifecycle;
    }

    if (!Util.isUnset(request.localityLBConf)) {
      body["LocalityLBConf"] = request.localityLBConf;
    }

    if (!Util.isUnset(request.localityLoadBalancing)) {
      body["LocalityLoadBalancing"] = request.localityLoadBalancing;
    }

    if (!Util.isUnset(request.logLevel)) {
      body["LogLevel"] = request.logLevel;
    }

    if (!Util.isUnset(request.MSEEnabled)) {
      body["MSEEnabled"] = request.MSEEnabled;
    }

    if (!Util.isUnset(request.multiBufferEnabled)) {
      body["MultiBufferEnabled"] = request.multiBufferEnabled;
    }

    if (!Util.isUnset(request.multiBufferPollDelay)) {
      body["MultiBufferPollDelay"] = request.multiBufferPollDelay;
    }

    if (!Util.isUnset(request.mysqlFilterEnabled)) {
      body["MysqlFilterEnabled"] = request.mysqlFilterEnabled;
    }

    if (!Util.isUnset(request.NFDEnabled)) {
      body["NFDEnabled"] = request.NFDEnabled;
    }

    if (!Util.isUnset(request.NFDLabelPruned)) {
      body["NFDLabelPruned"] = request.NFDLabelPruned;
    }

    if (!Util.isUnset(request.OPAInjectorCPULimit)) {
      body["OPAInjectorCPULimit"] = request.OPAInjectorCPULimit;
    }

    if (!Util.isUnset(request.OPAInjectorCPURequirement)) {
      body["OPAInjectorCPURequirement"] = request.OPAInjectorCPURequirement;
    }

    if (!Util.isUnset(request.OPAInjectorMemoryLimit)) {
      body["OPAInjectorMemoryLimit"] = request.OPAInjectorMemoryLimit;
    }

    if (!Util.isUnset(request.OPAInjectorMemoryRequirement)) {
      body["OPAInjectorMemoryRequirement"] = request.OPAInjectorMemoryRequirement;
    }

    if (!Util.isUnset(request.OPALimitCPU)) {
      body["OPALimitCPU"] = request.OPALimitCPU;
    }

    if (!Util.isUnset(request.OPALimitMemory)) {
      body["OPALimitMemory"] = request.OPALimitMemory;
    }

    if (!Util.isUnset(request.OPALogLevel)) {
      body["OPALogLevel"] = request.OPALogLevel;
    }

    if (!Util.isUnset(request.OPARequestCPU)) {
      body["OPARequestCPU"] = request.OPARequestCPU;
    }

    if (!Util.isUnset(request.OPARequestMemory)) {
      body["OPARequestMemory"] = request.OPARequestMemory;
    }

    if (!Util.isUnset(request.OPAScopeInjected)) {
      body["OPAScopeInjected"] = request.OPAScopeInjected;
    }

    if (!Util.isUnset(request.opaEnabled)) {
      body["OpaEnabled"] = request.opaEnabled;
    }

    if (!Util.isUnset(request.openAgentPolicy)) {
      body["OpenAgentPolicy"] = request.openAgentPolicy;
    }

    if (!Util.isUnset(request.outboundTrafficPolicy)) {
      body["OutboundTrafficPolicy"] = request.outboundTrafficPolicy;
    }

    if (!Util.isUnset(request.prometheusUrl)) {
      body["PrometheusUrl"] = request.prometheusUrl;
    }

    if (!Util.isUnset(request.proxyInitCPUResourceLimit)) {
      body["ProxyInitCPUResourceLimit"] = request.proxyInitCPUResourceLimit;
    }

    if (!Util.isUnset(request.proxyInitCPUResourceRequest)) {
      body["ProxyInitCPUResourceRequest"] = request.proxyInitCPUResourceRequest;
    }

    if (!Util.isUnset(request.proxyInitMemoryResourceLimit)) {
      body["ProxyInitMemoryResourceLimit"] = request.proxyInitMemoryResourceLimit;
    }

    if (!Util.isUnset(request.proxyInitMemoryResourceRequest)) {
      body["ProxyInitMemoryResourceRequest"] = request.proxyInitMemoryResourceRequest;
    }

    if (!Util.isUnset(request.proxyLimitCPU)) {
      body["ProxyLimitCPU"] = request.proxyLimitCPU;
    }

    if (!Util.isUnset(request.proxyLimitMemory)) {
      body["ProxyLimitMemory"] = request.proxyLimitMemory;
    }

    if (!Util.isUnset(request.proxyRequestCPU)) {
      body["ProxyRequestCPU"] = request.proxyRequestCPU;
    }

    if (!Util.isUnset(request.proxyRequestMemory)) {
      body["ProxyRequestMemory"] = request.proxyRequestMemory;
    }

    if (!Util.isUnset(request.proxyStatsMatcher)) {
      body["ProxyStatsMatcher"] = request.proxyStatsMatcher;
    }

    if (!Util.isUnset(request.redisFilterEnabled)) {
      body["RedisFilterEnabled"] = request.redisFilterEnabled;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.sidecarInjectorLimitCPU)) {
      body["SidecarInjectorLimitCPU"] = request.sidecarInjectorLimitCPU;
    }

    if (!Util.isUnset(request.sidecarInjectorLimitMemory)) {
      body["SidecarInjectorLimitMemory"] = request.sidecarInjectorLimitMemory;
    }

    if (!Util.isUnset(request.sidecarInjectorRequestCPU)) {
      body["SidecarInjectorRequestCPU"] = request.sidecarInjectorRequestCPU;
    }

    if (!Util.isUnset(request.sidecarInjectorRequestMemory)) {
      body["SidecarInjectorRequestMemory"] = request.sidecarInjectorRequestMemory;
    }

    if (!Util.isUnset(request.sidecarInjectorWebhookAsYaml)) {
      body["SidecarInjectorWebhookAsYaml"] = request.sidecarInjectorWebhookAsYaml;
    }

    if (!Util.isUnset(request.telemetry)) {
      body["Telemetry"] = request.telemetry;
    }

    if (!Util.isUnset(request.terminationDrainDuration)) {
      body["TerminationDrainDuration"] = request.terminationDrainDuration;
    }

    if (!Util.isUnset(request.thriftFilterEnabled)) {
      body["ThriftFilterEnabled"] = request.thriftFilterEnabled;
    }

    if (!Util.isUnset(request.traceCustomTags)) {
      body["TraceCustomTags"] = request.traceCustomTags;
    }

    if (!Util.isUnset(request.traceMaxPathTagLength)) {
      body["TraceMaxPathTagLength"] = request.traceMaxPathTagLength;
    }

    if (!Util.isUnset(request.traceSampling)) {
      body["TraceSampling"] = request.traceSampling;
    }

    if (!Util.isUnset(request.tracing)) {
      body["Tracing"] = request.tracing;
    }

    if (!Util.isUnset(request.tracingOnExtZipkinLimitCPU)) {
      body["TracingOnExtZipkinLimitCPU"] = request.tracingOnExtZipkinLimitCPU;
    }

    if (!Util.isUnset(request.tracingOnExtZipkinLimitMemory)) {
      body["TracingOnExtZipkinLimitMemory"] = request.tracingOnExtZipkinLimitMemory;
    }

    if (!Util.isUnset(request.tracingOnExtZipkinRequestCPU)) {
      body["TracingOnExtZipkinRequestCPU"] = request.tracingOnExtZipkinRequestCPU;
    }

    if (!Util.isUnset(request.tracingOnExtZipkinRequestMemory)) {
      body["TracingOnExtZipkinRequestMemory"] = request.tracingOnExtZipkinRequestMemory;
    }

    if (!Util.isUnset(request.webAssemblyFilterEnabled)) {
      body["WebAssemblyFilterEnabled"] = request.webAssemblyFilterEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMeshFeature",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMeshFeatureResponse>(await this.callApi(params, req, runtime), new UpdateMeshFeatureResponse({}));
  }

  async updateMeshFeature(request: UpdateMeshFeatureRequest): Promise<UpdateMeshFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMeshFeatureWithOptions(request, runtime);
  }

  async updateNamespaceScopeSidecarConfigWithOptions(request: UpdateNamespaceScopeSidecarConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNamespaceScopeSidecarConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.concurrency)) {
      body["Concurrency"] = request.concurrency;
    }

    if (!Util.isUnset(request.enableCoreDump)) {
      body["EnableCoreDump"] = request.enableCoreDump;
    }

    if (!Util.isUnset(request.excludeIPRanges)) {
      body["ExcludeIPRanges"] = request.excludeIPRanges;
    }

    if (!Util.isUnset(request.excludeInboundPorts)) {
      body["ExcludeInboundPorts"] = request.excludeInboundPorts;
    }

    if (!Util.isUnset(request.excludeOutboundPorts)) {
      body["ExcludeOutboundPorts"] = request.excludeOutboundPorts;
    }

    if (!Util.isUnset(request.holdApplicationUntilProxyStarts)) {
      body["HoldApplicationUntilProxyStarts"] = request.holdApplicationUntilProxyStarts;
    }

    if (!Util.isUnset(request.includeIPRanges)) {
      body["IncludeIPRanges"] = request.includeIPRanges;
    }

    if (!Util.isUnset(request.includeInboundPorts)) {
      body["IncludeInboundPorts"] = request.includeInboundPorts;
    }

    if (!Util.isUnset(request.includeOutboundPorts)) {
      body["IncludeOutboundPorts"] = request.includeOutboundPorts;
    }

    if (!Util.isUnset(request.interceptionMode)) {
      body["InterceptionMode"] = request.interceptionMode;
    }

    if (!Util.isUnset(request.istioDNSProxyEnabled)) {
      body["IstioDNSProxyEnabled"] = request.istioDNSProxyEnabled;
    }

    if (!Util.isUnset(request.lifecycle)) {
      body["Lifecycle"] = request.lifecycle;
    }

    if (!Util.isUnset(request.logLevel)) {
      body["LogLevel"] = request.logLevel;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.postStart)) {
      body["PostStart"] = request.postStart;
    }

    if (!Util.isUnset(request.preStop)) {
      body["PreStop"] = request.preStop;
    }

    if (!Util.isUnset(request.privileged)) {
      body["Privileged"] = request.privileged;
    }

    if (!Util.isUnset(request.proxyInitAckSloCPUResourceLimit)) {
      body["ProxyInitAckSloCPUResourceLimit"] = request.proxyInitAckSloCPUResourceLimit;
    }

    if (!Util.isUnset(request.proxyInitAckSloCPUResourceRequest)) {
      body["ProxyInitAckSloCPUResourceRequest"] = request.proxyInitAckSloCPUResourceRequest;
    }

    if (!Util.isUnset(request.proxyInitAckSloMemoryResourceLimit)) {
      body["ProxyInitAckSloMemoryResourceLimit"] = request.proxyInitAckSloMemoryResourceLimit;
    }

    if (!Util.isUnset(request.proxyInitAckSloMemoryResourceRequest)) {
      body["ProxyInitAckSloMemoryResourceRequest"] = request.proxyInitAckSloMemoryResourceRequest;
    }

    if (!Util.isUnset(request.proxyInitCPUResourceLimit)) {
      body["ProxyInitCPUResourceLimit"] = request.proxyInitCPUResourceLimit;
    }

    if (!Util.isUnset(request.proxyInitCPUResourceRequest)) {
      body["ProxyInitCPUResourceRequest"] = request.proxyInitCPUResourceRequest;
    }

    if (!Util.isUnset(request.proxyInitMemoryResourceLimit)) {
      body["ProxyInitMemoryResourceLimit"] = request.proxyInitMemoryResourceLimit;
    }

    if (!Util.isUnset(request.proxyInitMemoryResourceRequest)) {
      body["ProxyInitMemoryResourceRequest"] = request.proxyInitMemoryResourceRequest;
    }

    if (!Util.isUnset(request.proxyMetadata)) {
      body["ProxyMetadata"] = request.proxyMetadata;
    }

    if (!Util.isUnset(request.proxyStatsMatcher)) {
      body["ProxyStatsMatcher"] = request.proxyStatsMatcher;
    }

    if (!Util.isUnset(request.readinessFailureThreshold)) {
      body["ReadinessFailureThreshold"] = request.readinessFailureThreshold;
    }

    if (!Util.isUnset(request.readinessInitialDelaySeconds)) {
      body["ReadinessInitialDelaySeconds"] = request.readinessInitialDelaySeconds;
    }

    if (!Util.isUnset(request.readinessPeriodSeconds)) {
      body["ReadinessPeriodSeconds"] = request.readinessPeriodSeconds;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.sidecarProxyAckSloCPUResourceLimit)) {
      body["SidecarProxyAckSloCPUResourceLimit"] = request.sidecarProxyAckSloCPUResourceLimit;
    }

    if (!Util.isUnset(request.sidecarProxyAckSloCPUResourceRequest)) {
      body["SidecarProxyAckSloCPUResourceRequest"] = request.sidecarProxyAckSloCPUResourceRequest;
    }

    if (!Util.isUnset(request.sidecarProxyAckSloMemoryResourceLimit)) {
      body["SidecarProxyAckSloMemoryResourceLimit"] = request.sidecarProxyAckSloMemoryResourceLimit;
    }

    if (!Util.isUnset(request.sidecarProxyAckSloMemoryResourceRequest)) {
      body["SidecarProxyAckSloMemoryResourceRequest"] = request.sidecarProxyAckSloMemoryResourceRequest;
    }

    if (!Util.isUnset(request.sidecarProxyCPUResourceLimit)) {
      body["SidecarProxyCPUResourceLimit"] = request.sidecarProxyCPUResourceLimit;
    }

    if (!Util.isUnset(request.sidecarProxyCPUResourceRequest)) {
      body["SidecarProxyCPUResourceRequest"] = request.sidecarProxyCPUResourceRequest;
    }

    if (!Util.isUnset(request.sidecarProxyMemoryResourceLimit)) {
      body["SidecarProxyMemoryResourceLimit"] = request.sidecarProxyMemoryResourceLimit;
    }

    if (!Util.isUnset(request.sidecarProxyMemoryResourceRequest)) {
      body["SidecarProxyMemoryResourceRequest"] = request.sidecarProxyMemoryResourceRequest;
    }

    if (!Util.isUnset(request.terminationDrainDuration)) {
      body["TerminationDrainDuration"] = request.terminationDrainDuration;
    }

    if (!Util.isUnset(request.tracing)) {
      body["Tracing"] = request.tracing;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNamespaceScopeSidecarConfig",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNamespaceScopeSidecarConfigResponse>(await this.callApi(params, req, runtime), new UpdateNamespaceScopeSidecarConfigResponse({}));
  }

  async updateNamespaceScopeSidecarConfig(request: UpdateNamespaceScopeSidecarConfigRequest): Promise<UpdateNamespaceScopeSidecarConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNamespaceScopeSidecarConfigWithOptions(request, runtime);
  }

  async updateSwimLaneWithOptions(request: UpdateSwimLaneRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSwimLaneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.labelSelectorKey)) {
      body["LabelSelectorKey"] = request.labelSelectorKey;
    }

    if (!Util.isUnset(request.labelSelectorValue)) {
      body["LabelSelectorValue"] = request.labelSelectorValue;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.servicesList)) {
      body["ServicesList"] = request.servicesList;
    }

    if (!Util.isUnset(request.swimLaneName)) {
      body["SwimLaneName"] = request.swimLaneName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSwimLane",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSwimLaneResponse>(await this.callApi(params, req, runtime), new UpdateSwimLaneResponse({}));
  }

  async updateSwimLane(request: UpdateSwimLaneRequest): Promise<UpdateSwimLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSwimLaneWithOptions(request, runtime);
  }

  async updateSwimLaneGroupWithOptions(request: UpdateSwimLaneGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSwimLaneGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fallbackTarget)) {
      body["FallbackTarget"] = request.fallbackTarget;
    }

    if (!Util.isUnset(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.servicesList)) {
      body["ServicesList"] = request.servicesList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSwimLaneGroup",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSwimLaneGroupResponse>(await this.callApi(params, req, runtime), new UpdateSwimLaneGroupResponse({}));
  }

  async updateSwimLaneGroup(request: UpdateSwimLaneGroupRequest): Promise<UpdateSwimLaneGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSwimLaneGroupWithOptions(request, runtime);
  }

  async upgradeMeshEditionPartiallyWithOptions(request: UpgradeMeshEditionPartiallyRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeMeshEditionPartiallyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ASMGatewayContinue)) {
      body["ASMGatewayContinue"] = request.ASMGatewayContinue;
    }

    if (!Util.isUnset(request.expectedVersion)) {
      body["ExpectedVersion"] = request.expectedVersion;
    }

    if (!Util.isUnset(request.preCheck)) {
      body["PreCheck"] = request.preCheck;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!Util.isUnset(request.switchToPro)) {
      body["SwitchToPro"] = request.switchToPro;
    }

    if (!Util.isUnset(request.upgradeGatewayRecords)) {
      body["UpgradeGatewayRecords"] = request.upgradeGatewayRecords;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeMeshEditionPartially",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeMeshEditionPartiallyResponse>(await this.callApi(params, req, runtime), new UpgradeMeshEditionPartiallyResponse({}));
  }

  async upgradeMeshEditionPartially(request: UpgradeMeshEditionPartiallyRequest): Promise<UpgradeMeshEditionPartiallyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeMeshEditionPartiallyWithOptions(request, runtime);
  }

  async upgradeMeshVersionWithOptions(request: UpgradeMeshVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeMeshVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.preCheck)) {
      query["PreCheck"] = request.preCheck;
    }

    if (!Util.isUnset(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeMeshVersion",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeMeshVersionResponse>(await this.callApi(params, req, runtime), new UpgradeMeshVersionResponse({}));
  }

  async upgradeMeshVersion(request: UpgradeMeshVersionRequest): Promise<UpgradeMeshVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeMeshVersionWithOptions(request, runtime);
  }

}
