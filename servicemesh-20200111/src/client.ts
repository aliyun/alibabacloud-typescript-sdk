// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddClusterIntoServiceMeshRequest extends $tea.Model {
  serviceMeshId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClusterIntoServiceMeshResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClusterIntoServiceMeshResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddClusterIntoServiceMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddClusterIntoServiceMeshResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVmAppToMeshRequest extends $tea.Model {
  serviceMeshId?: string;
  namespace?: string;
  serviceName?: string;
  ips?: string;
  ports?: string;
  labels?: string;
  annotations?: string;
  serviceAccount?: string;
  useWorkload?: boolean;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      namespace: 'Namespace',
      serviceName: 'ServiceName',
      ips: 'Ips',
      ports: 'Ports',
      labels: 'Labels',
      annotations: 'Annotations',
      serviceAccount: 'ServiceAccount',
      useWorkload: 'UseWorkload',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      namespace: 'string',
      serviceName: 'string',
      ips: 'string',
      ports: 'string',
      labels: 'string',
      annotations: 'string',
      serviceAccount: 'string',
      useWorkload: 'boolean',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVmAppToMeshResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVmAppToMeshResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddVmAppToMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVmAppToMeshResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceMeshRequest extends $tea.Model {
  regionId?: string;
  istioVersion?: string;
  vpcId?: string;
  apiServerPublicEip?: boolean;
  pilotPublicEip?: boolean;
  strictMTLS?: boolean;
  outboundTrafficPolicy?: string;
  tracing?: boolean;
  name?: string;
  vSwitches?: string;
  traceSampling?: number;
  localityLoadBalancing?: boolean;
  telemetry?: boolean;
  openAgentPolicy?: boolean;
  OPALogLevel?: string;
  OPARequestCPU?: string;
  OPARequestMemory?: string;
  OPALimitCPU?: string;
  OPALimitMemory?: string;
  enableAudit?: boolean;
  auditProject?: string;
  CADisableSecretAutoGeneration?: boolean;
  CAListenedNamespaces?: string;
  appNamespaces?: string;
  clusterDomain?: string;
  proxyRequestCPU?: string;
  proxyRequestMemory?: string;
  proxyLimitCPU?: string;
  proxyLimitMemory?: string;
  includeIPRanges?: string;
  excludeIPRanges?: string;
  excludeOutboundPorts?: string;
  excludeInboundPorts?: string;
  opaEnabled?: boolean;
  kialiEnabled?: boolean;
  accessLogEnabled?: boolean;
  customizedPrometheus?: boolean;
  prometheusUrl?: string;
  redisFilterEnabled?: boolean;
  mysqlFilterEnabled?: boolean;
  thriftFilterEnabled?: boolean;
  webAssemblyFilterEnabled?: boolean;
  MSEEnabled?: boolean;
  DNSProxyingEnabled?: boolean;
  edition?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      istioVersion: 'IstioVersion',
      vpcId: 'VpcId',
      apiServerPublicEip: 'ApiServerPublicEip',
      pilotPublicEip: 'PilotPublicEip',
      strictMTLS: 'StrictMTLS',
      outboundTrafficPolicy: 'OutboundTrafficPolicy',
      tracing: 'Tracing',
      name: 'Name',
      vSwitches: 'VSwitches',
      traceSampling: 'TraceSampling',
      localityLoadBalancing: 'LocalityLoadBalancing',
      telemetry: 'Telemetry',
      openAgentPolicy: 'OpenAgentPolicy',
      OPALogLevel: 'OPALogLevel',
      OPARequestCPU: 'OPARequestCPU',
      OPARequestMemory: 'OPARequestMemory',
      OPALimitCPU: 'OPALimitCPU',
      OPALimitMemory: 'OPALimitMemory',
      enableAudit: 'EnableAudit',
      auditProject: 'AuditProject',
      CADisableSecretAutoGeneration: 'CADisableSecretAutoGeneration',
      CAListenedNamespaces: 'CAListenedNamespaces',
      appNamespaces: 'AppNamespaces',
      clusterDomain: 'ClusterDomain',
      proxyRequestCPU: 'ProxyRequestCPU',
      proxyRequestMemory: 'ProxyRequestMemory',
      proxyLimitCPU: 'ProxyLimitCPU',
      proxyLimitMemory: 'ProxyLimitMemory',
      includeIPRanges: 'IncludeIPRanges',
      excludeIPRanges: 'ExcludeIPRanges',
      excludeOutboundPorts: 'ExcludeOutboundPorts',
      excludeInboundPorts: 'ExcludeInboundPorts',
      opaEnabled: 'OpaEnabled',
      kialiEnabled: 'KialiEnabled',
      accessLogEnabled: 'AccessLogEnabled',
      customizedPrometheus: 'CustomizedPrometheus',
      prometheusUrl: 'PrometheusUrl',
      redisFilterEnabled: 'RedisFilterEnabled',
      mysqlFilterEnabled: 'MysqlFilterEnabled',
      thriftFilterEnabled: 'ThriftFilterEnabled',
      webAssemblyFilterEnabled: 'WebAssemblyFilterEnabled',
      MSEEnabled: 'MSEEnabled',
      DNSProxyingEnabled: 'DNSProxyingEnabled',
      edition: 'Edition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      istioVersion: 'string',
      vpcId: 'string',
      apiServerPublicEip: 'boolean',
      pilotPublicEip: 'boolean',
      strictMTLS: 'boolean',
      outboundTrafficPolicy: 'string',
      tracing: 'boolean',
      name: 'string',
      vSwitches: 'string',
      traceSampling: 'number',
      localityLoadBalancing: 'boolean',
      telemetry: 'boolean',
      openAgentPolicy: 'boolean',
      OPALogLevel: 'string',
      OPARequestCPU: 'string',
      OPARequestMemory: 'string',
      OPALimitCPU: 'string',
      OPALimitMemory: 'string',
      enableAudit: 'boolean',
      auditProject: 'string',
      CADisableSecretAutoGeneration: 'boolean',
      CAListenedNamespaces: 'string',
      appNamespaces: 'string',
      clusterDomain: 'string',
      proxyRequestCPU: 'string',
      proxyRequestMemory: 'string',
      proxyLimitCPU: 'string',
      proxyLimitMemory: 'string',
      includeIPRanges: 'string',
      excludeIPRanges: 'string',
      excludeOutboundPorts: 'string',
      excludeInboundPorts: 'string',
      opaEnabled: 'boolean',
      kialiEnabled: 'boolean',
      accessLogEnabled: 'boolean',
      customizedPrometheus: 'boolean',
      prometheusUrl: 'string',
      redisFilterEnabled: 'boolean',
      mysqlFilterEnabled: 'boolean',
      thriftFilterEnabled: 'boolean',
      webAssemblyFilterEnabled: 'boolean',
      MSEEnabled: 'boolean',
      DNSProxyingEnabled: 'boolean',
      edition: 'string',
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
  body: CreateServiceMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceMeshResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceMeshRequest extends $tea.Model {
  serviceMeshId?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      force: 'boolean',
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
  body: DeleteServiceMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServiceMeshResponseBody,
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
  requestId?: string;
  clusters?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCensResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCensResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterGrafanaRequest extends $tea.Model {
  serviceMeshId?: string;
  k8sClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      k8sClusterId: 'K8sClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      k8sClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterGrafanaResponseBody extends $tea.Model {
  requestId?: string;
  dashboards?: DescribeClusterGrafanaResponseBodyDashboards[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dashboards: 'Dashboards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dashboards: { 'type': 'array', 'itemType': DescribeClusterGrafanaResponseBodyDashboards },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterGrafanaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterGrafanaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterGrafanaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterPrometheusRequest extends $tea.Model {
  serviceMeshId?: string;
  k8sClusterId?: string;
  k8sClusterRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      k8sClusterId: 'K8sClusterId',
      k8sClusterRegionId: 'K8sClusterRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      k8sClusterId: 'string',
      k8sClusterRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterPrometheusResponseBody extends $tea.Model {
  requestId?: string;
  prometheus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prometheus: 'Prometheus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prometheus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterPrometheusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterPrometheusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  clusters?: DescribeClustersInServiceMeshResponseBodyClusters[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusters: { 'type': 'array', 'itemType': DescribeClustersInServiceMeshResponseBodyClusters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersInServiceMeshResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClustersInServiceMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClustersInServiceMeshResponseBody,
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
  requestId?: string;
  dashboards?: DescribeGuestClusterAccessLogDashboardsResponseBodyDashboards[];
  k8sClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dashboards: 'Dashboards',
      k8sClusterId: 'K8sClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dashboards: { 'type': 'array', 'itemType': DescribeGuestClusterAccessLogDashboardsResponseBodyDashboards },
      k8sClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterAccessLogDashboardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGuestClusterAccessLogDashboardsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGuestClusterAccessLogDashboardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressGatewaysRequest extends $tea.Model {
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

export class DescribeIngressGatewaysResponseBody extends $tea.Model {
  requestId?: string;
  ingressGateways?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ingressGateways: 'IngressGateways',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ingressGateways: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressGatewaysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIngressGatewaysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIngressGatewaysResponseBody,
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
  body: DescribeServiceMeshDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeServiceMeshDetailResponseBody,
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
  body: DescribeServiceMeshesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeServiceMeshesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshKubeconfigRequest extends $tea.Model {
  serviceMeshId?: string;
  privateIpAddress?: boolean;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      privateIpAddress: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshKubeconfigResponseBody extends $tea.Model {
  requestId?: string;
  kubeconfig?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      kubeconfig: 'Kubeconfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      kubeconfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshKubeconfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeServiceMeshKubeconfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeServiceMeshKubeconfigResponseBody,
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
  body: DescribeUpgradeVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUpgradeVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoInjectionLabelSyncStatusRequest extends $tea.Model {
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

export class GetAutoInjectionLabelSyncStatusResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoInjectionLabelSyncStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAutoInjectionLabelSyncStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAutoInjectionLabelSyncStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisRequest extends $tea.Model {
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

export class GetDiagnosisResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  runAt?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      runAt: 'RunAt',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      runAt: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDiagnosisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceEndpointsRequest extends $tea.Model {
  serviceMeshId?: string;
  namespace?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      namespace: 'Namespace',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      namespace: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceEndpointsResponseBody extends $tea.Model {
  serviceEndpoints?: GetRegisteredServiceEndpointsResponseBodyServiceEndpoints[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceEndpoints: 'ServiceEndpoints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceEndpoints: { 'type': 'array', 'itemType': GetRegisteredServiceEndpointsResponseBodyServiceEndpoints },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceEndpointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRegisteredServiceEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetRegisteredServiceNamespacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRegisteredServiceNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServicesRequest extends $tea.Model {
  serviceMeshId?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServicesResponseBody extends $tea.Model {
  services?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      services: 'Services',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRegisteredServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRegisteredServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMeshSlbRequest extends $tea.Model {
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

export class GetServiceMeshSlbResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetServiceMeshSlbResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetServiceMeshSlbResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMeshSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceMeshSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceMeshSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRegistrySourceRequest extends $tea.Model {
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

export class GetServiceRegistrySourceResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRegistrySourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceRegistrySourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceRegistrySourceResponseBody,
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
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmAppMeshInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVmAppMeshInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVmAppMeshInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmMetaRequest extends $tea.Model {
  serviceMeshId?: string;
  trustDomain?: string;
  namespace?: string;
  serviceAccount?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      trustDomain: 'TrustDomain',
      namespace: 'Namespace',
      serviceAccount: 'ServiceAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      trustDomain: 'string',
      namespace: 'string',
      serviceAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmMetaResponseBody extends $tea.Model {
  vmMetaInfo?: GetVmMetaResponseBodyVmMetaInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      vmMetaInfo: 'VmMetaInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vmMetaInfo: GetVmMetaResponseBodyVmMetaInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVmMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVmMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeASMRoleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeASMRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitializeASMRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitializeASMRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterFromServiceMeshRequest extends $tea.Model {
  serviceMeshId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterFromServiceMeshResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterFromServiceMeshResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveClusterFromServiceMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveClusterFromServiceMeshResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVmAppFromMeshRequest extends $tea.Model {
  serviceMeshId?: string;
  namespace?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      namespace: 'Namespace',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      namespace: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVmAppFromMeshResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVmAppFromMeshResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveVmAppFromMeshResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveVmAppFromMeshResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDiagnosisRequest extends $tea.Model {
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

export class RunDiagnosisResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDiagnosisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunDiagnosisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceRegistrySourceRequest extends $tea.Model {
  serviceMeshId?: string;
  config?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceRegistrySourceShrinkRequest extends $tea.Model {
  serviceMeshId?: string;
  configShrink?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      configShrink: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      configShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceRegistrySourceResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceRegistrySourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetServiceRegistrySourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetServiceRegistrySourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioInjectionConfigRequest extends $tea.Model {
  serviceMeshId?: string;
  namespace?: string;
  enableIstioInjection?: boolean;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      namespace: 'Namespace',
      enableIstioInjection: 'EnableIstioInjection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      namespace: 'string',
      enableIstioInjection: 'boolean',
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
  body: UpdateIstioInjectionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIstioInjectionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMeshFeatureRequest extends $tea.Model {
  serviceMeshId?: string;
  tracing?: boolean;
  traceSampling?: number;
  localityLoadBalancing?: boolean;
  telemetry?: boolean;
  openAgentPolicy?: boolean;
  OPALogLevel?: string;
  OPARequestCPU?: string;
  OPARequestMemory?: string;
  OPALimitCPU?: string;
  OPALimitMemory?: string;
  pilotPublicEip?: boolean;
  enableAudit?: boolean;
  auditProject?: string;
  CADisableSecretAutoGeneration?: boolean;
  CAListenedNamespaces?: string;
  appNamespaces?: string;
  clusterDomain?: string;
  customizedZipkin?: boolean;
  outboundTrafficPolicy?: string;
  proxyRequestCPU?: string;
  proxyRequestMemory?: string;
  proxyLimitCPU?: string;
  proxyLimitMemory?: string;
  includeIPRanges?: string;
  enableNamespacesByDefault?: boolean;
  autoInjectionPolicyEnabled?: boolean;
  sidecarInjectorRequestCPU?: string;
  sidecarInjectorRequestMemory?: string;
  sidecarInjectorLimitCPU?: string;
  sidecarInjectorLimitMemory?: string;
  sidecarInjectorWebhookAsYaml?: string;
  cniEnabled?: boolean;
  cniExcludeNamespaces?: string;
  opaEnabled?: boolean;
  http10Enabled?: boolean;
  kialiEnabled?: boolean;
  customizedPrometheus?: boolean;
  prometheusUrl?: string;
  accessLogEnabled?: boolean;
  MSEEnabled?: boolean;
  redisFilterEnabled?: boolean;
  mysqlFilterEnabled?: boolean;
  thriftFilterEnabled?: boolean;
  webAssemblyFilterEnabled?: boolean;
  DNSProxyingEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
      tracing: 'Tracing',
      traceSampling: 'TraceSampling',
      localityLoadBalancing: 'LocalityLoadBalancing',
      telemetry: 'Telemetry',
      openAgentPolicy: 'OpenAgentPolicy',
      OPALogLevel: 'OPALogLevel',
      OPARequestCPU: 'OPARequestCPU',
      OPARequestMemory: 'OPARequestMemory',
      OPALimitCPU: 'OPALimitCPU',
      OPALimitMemory: 'OPALimitMemory',
      pilotPublicEip: 'PilotPublicEip',
      enableAudit: 'EnableAudit',
      auditProject: 'AuditProject',
      CADisableSecretAutoGeneration: 'CADisableSecretAutoGeneration',
      CAListenedNamespaces: 'CAListenedNamespaces',
      appNamespaces: 'AppNamespaces',
      clusterDomain: 'ClusterDomain',
      customizedZipkin: 'CustomizedZipkin',
      outboundTrafficPolicy: 'OutboundTrafficPolicy',
      proxyRequestCPU: 'ProxyRequestCPU',
      proxyRequestMemory: 'ProxyRequestMemory',
      proxyLimitCPU: 'ProxyLimitCPU',
      proxyLimitMemory: 'ProxyLimitMemory',
      includeIPRanges: 'IncludeIPRanges',
      enableNamespacesByDefault: 'EnableNamespacesByDefault',
      autoInjectionPolicyEnabled: 'AutoInjectionPolicyEnabled',
      sidecarInjectorRequestCPU: 'SidecarInjectorRequestCPU',
      sidecarInjectorRequestMemory: 'SidecarInjectorRequestMemory',
      sidecarInjectorLimitCPU: 'SidecarInjectorLimitCPU',
      sidecarInjectorLimitMemory: 'SidecarInjectorLimitMemory',
      sidecarInjectorWebhookAsYaml: 'SidecarInjectorWebhookAsYaml',
      cniEnabled: 'CniEnabled',
      cniExcludeNamespaces: 'CniExcludeNamespaces',
      opaEnabled: 'OpaEnabled',
      http10Enabled: 'Http10Enabled',
      kialiEnabled: 'KialiEnabled',
      customizedPrometheus: 'CustomizedPrometheus',
      prometheusUrl: 'PrometheusUrl',
      accessLogEnabled: 'AccessLogEnabled',
      MSEEnabled: 'MSEEnabled',
      redisFilterEnabled: 'RedisFilterEnabled',
      mysqlFilterEnabled: 'MysqlFilterEnabled',
      thriftFilterEnabled: 'ThriftFilterEnabled',
      webAssemblyFilterEnabled: 'WebAssemblyFilterEnabled',
      DNSProxyingEnabled: 'DNSProxyingEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMeshId: 'string',
      tracing: 'boolean',
      traceSampling: 'number',
      localityLoadBalancing: 'boolean',
      telemetry: 'boolean',
      openAgentPolicy: 'boolean',
      OPALogLevel: 'string',
      OPARequestCPU: 'string',
      OPARequestMemory: 'string',
      OPALimitCPU: 'string',
      OPALimitMemory: 'string',
      pilotPublicEip: 'boolean',
      enableAudit: 'boolean',
      auditProject: 'string',
      CADisableSecretAutoGeneration: 'boolean',
      CAListenedNamespaces: 'string',
      appNamespaces: 'string',
      clusterDomain: 'string',
      customizedZipkin: 'boolean',
      outboundTrafficPolicy: 'string',
      proxyRequestCPU: 'string',
      proxyRequestMemory: 'string',
      proxyLimitCPU: 'string',
      proxyLimitMemory: 'string',
      includeIPRanges: 'string',
      enableNamespacesByDefault: 'boolean',
      autoInjectionPolicyEnabled: 'boolean',
      sidecarInjectorRequestCPU: 'string',
      sidecarInjectorRequestMemory: 'string',
      sidecarInjectorLimitCPU: 'string',
      sidecarInjectorLimitMemory: 'string',
      sidecarInjectorWebhookAsYaml: 'string',
      cniEnabled: 'boolean',
      cniExcludeNamespaces: 'string',
      opaEnabled: 'boolean',
      http10Enabled: 'boolean',
      kialiEnabled: 'boolean',
      customizedPrometheus: 'boolean',
      prometheusUrl: 'string',
      accessLogEnabled: 'boolean',
      MSEEnabled: 'boolean',
      redisFilterEnabled: 'boolean',
      mysqlFilterEnabled: 'boolean',
      thriftFilterEnabled: 'boolean',
      webAssemblyFilterEnabled: 'boolean',
      DNSProxyingEnabled: 'boolean',
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
  body: UpdateMeshFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMeshFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMeshVersionRequest extends $tea.Model {
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
  body: UpgradeMeshVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeMeshVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterGrafanaResponseBodyDashboards extends $tea.Model {
  url?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersInServiceMeshResponseBodyClustersAccessLogDashboards extends $tea.Model {
  url?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersInServiceMeshResponseBodyClusters extends $tea.Model {
  sgId?: string;
  vpcId?: string;
  creationTime?: string;
  updateTime?: string;
  errorMessage?: string;
  state?: string;
  accessLogDashboards?: DescribeClustersInServiceMeshResponseBodyClustersAccessLogDashboards[];
  regionId?: string;
  clusterDomain?: string;
  version?: string;
  clusterType?: string;
  name?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      sgId: 'SgId',
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      updateTime: 'UpdateTime',
      errorMessage: 'ErrorMessage',
      state: 'State',
      accessLogDashboards: 'AccessLogDashboards',
      regionId: 'RegionId',
      clusterDomain: 'ClusterDomain',
      version: 'Version',
      clusterType: 'ClusterType',
      name: 'Name',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sgId: 'string',
      vpcId: 'string',
      creationTime: 'string',
      updateTime: 'string',
      errorMessage: 'string',
      state: 'string',
      accessLogDashboards: { 'type': 'array', 'itemType': DescribeClustersInServiceMeshResponseBodyClustersAccessLogDashboards },
      regionId: 'string',
      clusterDomain: 'string',
      version: 'string',
      clusterType: 'string',
      name: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterAccessLogDashboardsResponseBodyDashboards extends $tea.Model {
  url?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshEndpoints extends $tea.Model {
  intranetPilotEndpoint?: string;
  publicPilotEndpoint?: string;
  intranetApiServerEndpoint?: string;
  publicApiServerEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      intranetPilotEndpoint: 'IntranetPilotEndpoint',
      publicPilotEndpoint: 'PublicPilotEndpoint',
      intranetApiServerEndpoint: 'IntranetApiServerEndpoint',
      publicApiServerEndpoint: 'PublicApiServerEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetPilotEndpoint: 'string',
      publicPilotEndpoint: 'string',
      intranetApiServerEndpoint: 'string',
      publicApiServerEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshServiceMeshInfo extends $tea.Model {
  profile?: string;
  creationTime?: string;
  updateTime?: string;
  errorMessage?: string;
  version?: string;
  state?: string;
  serviceMeshId?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      profile: 'Profile',
      creationTime: 'CreationTime',
      updateTime: 'UpdateTime',
      errorMessage: 'ErrorMessage',
      version: 'Version',
      state: 'State',
      serviceMeshId: 'ServiceMeshId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profile: 'string',
      creationTime: 'string',
      updateTime: 'string',
      errorMessage: 'string',
      version: 'string',
      state: 'string',
      serviceMeshId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecNetwork extends $tea.Model {
  vpcId?: string;
  securityGroupId?: string;
  vSwitches?: string[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      securityGroupId: 'SecurityGroupId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      securityGroupId: 'string',
      vSwitches: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecLoadBalancer extends $tea.Model {
  pilotPublicEip?: boolean;
  pilotPublicLoadbalancerId?: string;
  apiServerLoadbalancerId?: string;
  apiServerPublicEip?: boolean;
  static names(): { [key: string]: string } {
    return {
      pilotPublicEip: 'PilotPublicEip',
      pilotPublicLoadbalancerId: 'PilotPublicLoadbalancerId',
      apiServerLoadbalancerId: 'ApiServerLoadbalancerId',
      apiServerPublicEip: 'ApiServerPublicEip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pilotPublicEip: 'boolean',
      pilotPublicLoadbalancerId: 'string',
      apiServerLoadbalancerId: 'string',
      apiServerPublicEip: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigOPA extends $tea.Model {
  requestMemory?: string;
  logLevel?: string;
  enabled?: boolean;
  limitMemory?: string;
  requestCPU?: string;
  limitCPU?: string;
  static names(): { [key: string]: string } {
    return {
      requestMemory: 'RequestMemory',
      logLevel: 'LogLevel',
      enabled: 'Enabled',
      limitMemory: 'LimitMemory',
      requestCPU: 'RequestCPU',
      limitCPU: 'LimitCPU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestMemory: 'string',
      logLevel: 'string',
      enabled: 'boolean',
      limitMemory: 'string',
      requestCPU: 'string',
      limitCPU: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPrometheus extends $tea.Model {
  useExternal?: boolean;
  externalUrl?: string;
  static names(): { [key: string]: string } {
    return {
      useExternal: 'UseExternal',
      externalUrl: 'ExternalUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      useExternal: 'boolean',
      externalUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAccessLog extends $tea.Model {
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

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilot extends $tea.Model {
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

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjectorInitCNIConfiguration extends $tea.Model {
  excludeNamespaces?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      excludeNamespaces: 'ExcludeNamespaces',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeNamespaces: 'string',
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjector extends $tea.Model {
  enableNamespacesByDefault?: boolean;
  requestMemory?: string;
  limitMemory?: string;
  requestCPU?: string;
  autoInjectionPolicyEnabled?: boolean;
  limitCPU?: string;
  initCNIConfiguration?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjectorInitCNIConfiguration;
  sidecarInjectorWebhookAsYaml?: string;
  static names(): { [key: string]: string } {
    return {
      enableNamespacesByDefault: 'EnableNamespacesByDefault',
      requestMemory: 'RequestMemory',
      limitMemory: 'LimitMemory',
      requestCPU: 'RequestCPU',
      autoInjectionPolicyEnabled: 'AutoInjectionPolicyEnabled',
      limitCPU: 'LimitCPU',
      initCNIConfiguration: 'InitCNIConfiguration',
      sidecarInjectorWebhookAsYaml: 'SidecarInjectorWebhookAsYaml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableNamespacesByDefault: 'boolean',
      requestMemory: 'string',
      limitMemory: 'string',
      requestCPU: 'string',
      autoInjectionPolicyEnabled: 'boolean',
      limitCPU: 'string',
      initCNIConfiguration: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjectorInitCNIConfiguration,
      sidecarInjectorWebhookAsYaml: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProtocolSupport extends $tea.Model {
  mysqlFilterEnabled?: boolean;
  redisFilterEnabled?: boolean;
  thriftFilterEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      mysqlFilterEnabled: 'MysqlFilterEnabled',
      redisFilterEnabled: 'RedisFilterEnabled',
      thriftFilterEnabled: 'ThriftFilterEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mysqlFilterEnabled: 'boolean',
      redisFilterEnabled: 'boolean',
      thriftFilterEnabled: 'boolean',
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

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAudit extends $tea.Model {
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

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProxy extends $tea.Model {
  requestMemory?: string;
  clusterDomain?: string;
  limitMemory?: string;
  requestCPU?: string;
  enableDNSProxying?: boolean;
  limitCPU?: string;
  static names(): { [key: string]: string } {
    return {
      requestMemory: 'RequestMemory',
      clusterDomain: 'ClusterDomain',
      limitMemory: 'LimitMemory',
      requestCPU: 'RequestCPU',
      enableDNSProxying: 'EnableDNSProxying',
      limitCPU: 'LimitCPU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestMemory: 'string',
      clusterDomain: 'string',
      limitMemory: 'string',
      requestCPU: 'string',
      enableDNSProxying: 'boolean',
      limitCPU: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfig extends $tea.Model {
  OPA?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigOPA;
  prometheus?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPrometheus;
  accessLog?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAccessLog;
  pilot?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilot;
  MSE?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigMSE;
  customizedZipkin?: boolean;
  sidecarInjector?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjector;
  includeIPRanges?: string;
  telemetry?: boolean;
  edition?: string;
  protocolSupport?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProtocolSupport;
  outboundTrafficPolicy?: string;
  kiali?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigKiali;
  tracing?: boolean;
  webAssemblyFilterDeployment?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigWebAssemblyFilterDeployment;
  enableLocalityLB?: boolean;
  audit?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAudit;
  proxy?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProxy;
  static names(): { [key: string]: string } {
    return {
      OPA: 'OPA',
      prometheus: 'Prometheus',
      accessLog: 'AccessLog',
      pilot: 'Pilot',
      MSE: 'MSE',
      customizedZipkin: 'CustomizedZipkin',
      sidecarInjector: 'SidecarInjector',
      includeIPRanges: 'IncludeIPRanges',
      telemetry: 'Telemetry',
      edition: 'Edition',
      protocolSupport: 'ProtocolSupport',
      outboundTrafficPolicy: 'OutboundTrafficPolicy',
      kiali: 'Kiali',
      tracing: 'Tracing',
      webAssemblyFilterDeployment: 'WebAssemblyFilterDeployment',
      enableLocalityLB: 'EnableLocalityLB',
      audit: 'Audit',
      proxy: 'Proxy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OPA: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigOPA,
      prometheus: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPrometheus,
      accessLog: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAccessLog,
      pilot: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilot,
      MSE: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigMSE,
      customizedZipkin: 'boolean',
      sidecarInjector: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjector,
      includeIPRanges: 'string',
      telemetry: 'boolean',
      edition: 'string',
      protocolSupport: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProtocolSupport,
      outboundTrafficPolicy: 'string',
      kiali: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigKiali,
      tracing: 'boolean',
      webAssemblyFilterDeployment: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigWebAssemblyFilterDeployment,
      enableLocalityLB: 'boolean',
      audit: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAudit,
      proxy: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProxy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpec extends $tea.Model {
  network?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecNetwork;
  loadBalancer?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecLoadBalancer;
  meshConfig?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfig;
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
      loadBalancer: 'LoadBalancer',
      meshConfig: 'MeshConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: DescribeServiceMeshDetailResponseBodyServiceMeshSpecNetwork,
      loadBalancer: DescribeServiceMeshDetailResponseBodyServiceMeshSpecLoadBalancer,
      meshConfig: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMesh extends $tea.Model {
  endpoints?: DescribeServiceMeshDetailResponseBodyServiceMeshEndpoints;
  serviceMeshInfo?: DescribeServiceMeshDetailResponseBodyServiceMeshServiceMeshInfo;
  spec?: DescribeServiceMeshDetailResponseBodyServiceMeshSpec;
  clusters?: string[];
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      serviceMeshInfo: 'ServiceMeshInfo',
      spec: 'Spec',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: DescribeServiceMeshDetailResponseBodyServiceMeshEndpoints,
      serviceMeshInfo: DescribeServiceMeshDetailResponseBodyServiceMeshServiceMeshInfo,
      spec: DescribeServiceMeshDetailResponseBodyServiceMeshSpec,
      clusters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesEndpoints extends $tea.Model {
  intranetPilotEndpoint?: string;
  reverseTunnelEndpoint?: string;
  publicPilotEndpoint?: string;
  intranetApiServerEndpoint?: string;
  publicApiServerEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      intranetPilotEndpoint: 'IntranetPilotEndpoint',
      reverseTunnelEndpoint: 'ReverseTunnelEndpoint',
      publicPilotEndpoint: 'PublicPilotEndpoint',
      intranetApiServerEndpoint: 'IntranetApiServerEndpoint',
      publicApiServerEndpoint: 'PublicApiServerEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetPilotEndpoint: 'string',
      reverseTunnelEndpoint: 'string',
      publicPilotEndpoint: 'string',
      intranetApiServerEndpoint: 'string',
      publicApiServerEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesServiceMeshInfo extends $tea.Model {
  profile?: string;
  creationTime?: string;
  updateTime?: string;
  errorMessage?: string;
  version?: string;
  state?: string;
  serviceMeshId?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      profile: 'Profile',
      creationTime: 'CreationTime',
      updateTime: 'UpdateTime',
      errorMessage: 'ErrorMessage',
      version: 'Version',
      state: 'State',
      serviceMeshId: 'ServiceMeshId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profile: 'string',
      creationTime: 'string',
      updateTime: 'string',
      errorMessage: 'string',
      version: 'string',
      state: 'string',
      serviceMeshId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecNetwork extends $tea.Model {
  vpcId?: string;
  securityGroupId?: string;
  vSwitches?: string[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      securityGroupId: 'SecurityGroupId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      securityGroupId: 'string',
      vSwitches: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecLoadBalancer extends $tea.Model {
  pilotPublicEip?: boolean;
  pilotPublicLoadbalancerId?: string;
  apiServerLoadbalancerId?: string;
  apiServerPublicEip?: boolean;
  static names(): { [key: string]: string } {
    return {
      pilotPublicEip: 'PilotPublicEip',
      pilotPublicLoadbalancerId: 'PilotPublicLoadbalancerId',
      apiServerLoadbalancerId: 'ApiServerLoadbalancerId',
      apiServerPublicEip: 'ApiServerPublicEip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pilotPublicEip: 'boolean',
      pilotPublicLoadbalancerId: 'string',
      apiServerLoadbalancerId: 'string',
      apiServerPublicEip: 'boolean',
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
  excludeNamespaces?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      excludeNamespaces: 'ExcludeNamespaces',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeNamespaces: 'string',
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjector extends $tea.Model {
  enableNamespacesByDefault?: boolean;
  autoInjectionPolicyEnabled?: boolean;
  initCNIConfiguration?: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjectorInitCNIConfiguration;
  static names(): { [key: string]: string } {
    return {
      enableNamespacesByDefault: 'EnableNamespacesByDefault',
      autoInjectionPolicyEnabled: 'AutoInjectionPolicyEnabled',
      initCNIConfiguration: 'InitCNIConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableNamespacesByDefault: 'boolean',
      autoInjectionPolicyEnabled: 'boolean',
      initCNIConfiguration: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjectorInitCNIConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfig extends $tea.Model {
  telemetry?: boolean;
  outboundTrafficPolicy?: string;
  tracing?: boolean;
  strictMtls?: boolean;
  pilot?: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigPilot;
  mtls?: boolean;
  sidecarInjector?: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjector;
  static names(): { [key: string]: string } {
    return {
      telemetry: 'Telemetry',
      outboundTrafficPolicy: 'OutboundTrafficPolicy',
      tracing: 'Tracing',
      strictMtls: 'StrictMtls',
      pilot: 'Pilot',
      mtls: 'Mtls',
      sidecarInjector: 'SidecarInjector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      telemetry: 'boolean',
      outboundTrafficPolicy: 'string',
      tracing: 'boolean',
      strictMtls: 'boolean',
      pilot: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigPilot,
      mtls: 'boolean',
      sidecarInjector: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjector,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpec extends $tea.Model {
  network?: DescribeServiceMeshesResponseBodyServiceMeshesSpecNetwork;
  loadBalancer?: DescribeServiceMeshesResponseBodyServiceMeshesSpecLoadBalancer;
  meshConfig?: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfig;
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
      loadBalancer: 'LoadBalancer',
      meshConfig: 'MeshConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: DescribeServiceMeshesResponseBodyServiceMeshesSpecNetwork,
      loadBalancer: DescribeServiceMeshesResponseBodyServiceMeshesSpecLoadBalancer,
      meshConfig: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshes extends $tea.Model {
  endpoints?: DescribeServiceMeshesResponseBodyServiceMeshesEndpoints;
  serviceMeshInfo?: DescribeServiceMeshesResponseBodyServiceMeshesServiceMeshInfo;
  spec?: DescribeServiceMeshesResponseBodyServiceMeshesSpec;
  clusters?: string[];
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      serviceMeshInfo: 'ServiceMeshInfo',
      spec: 'Spec',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: DescribeServiceMeshesResponseBodyServiceMeshesEndpoints,
      serviceMeshInfo: DescribeServiceMeshesResponseBodyServiceMeshesServiceMeshInfo,
      spec: DescribeServiceMeshesResponseBodyServiceMeshesSpec,
      clusters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpgradeVersionResponseBodyVersion extends $tea.Model {
  kubernetesVersion?: string;
  istioOperatorVersion?: string;
  istioVersion?: string;
  static names(): { [key: string]: string } {
    return {
      kubernetesVersion: 'KubernetesVersion',
      istioOperatorVersion: 'IstioOperatorVersion',
      istioVersion: 'IstioVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubernetesVersion: 'string',
      istioOperatorVersion: 'string',
      istioVersion: 'string',
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

export class GetServiceMeshSlbResponseBodyData extends $tea.Model {
  status?: string;
  serverHealthStatus?: string;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      serverHealthStatus: 'ServerHealthStatus',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      serverHealthStatus: 'string',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmMetaResponseBodyVmMetaInfo extends $tea.Model {
  tokenPath?: string;
  hostsContent?: string;
  envoyEnvPath?: string;
  tokenContent?: string;
  certChainPath?: string;
  rootCertContent?: string;
  keyContent?: string;
  rootCertPath?: string;
  certChainContent?: string;
  hostsPath?: string;
  keyPath?: string;
  envoyEnvContent?: string;
  static names(): { [key: string]: string } {
    return {
      tokenPath: 'TokenPath',
      hostsContent: 'HostsContent',
      envoyEnvPath: 'EnvoyEnvPath',
      tokenContent: 'TokenContent',
      certChainPath: 'CertChainPath',
      rootCertContent: 'RootCertContent',
      keyContent: 'KeyContent',
      rootCertPath: 'RootCertPath',
      certChainContent: 'CertChainContent',
      hostsPath: 'HostsPath',
      keyPath: 'KeyPath',
      envoyEnvContent: 'EnvoyEnvContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokenPath: 'string',
      hostsContent: 'string',
      envoyEnvPath: 'string',
      tokenContent: 'string',
      certChainPath: 'string',
      rootCertContent: 'string',
      keyContent: 'string',
      rootCertPath: 'string',
      certChainContent: 'string',
      hostsPath: 'string',
      keyPath: 'string',
      envoyEnvContent: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddClusterIntoServiceMeshResponse>(await this.doRPCRequest("AddClusterIntoServiceMesh", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new AddClusterIntoServiceMeshResponse({}));
  }

  async addClusterIntoServiceMesh(request: AddClusterIntoServiceMeshRequest): Promise<AddClusterIntoServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addClusterIntoServiceMeshWithOptions(request, runtime);
  }

  async addVmAppToMeshWithOptions(request: AddVmAppToMeshRequest, runtime: $Util.RuntimeOptions): Promise<AddVmAppToMeshResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVmAppToMeshResponse>(await this.doRPCRequest("AddVmAppToMesh", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new AddVmAppToMeshResponse({}));
  }

  async addVmAppToMesh(request: AddVmAppToMeshRequest): Promise<AddVmAppToMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVmAppToMeshWithOptions(request, runtime);
  }

  async createServiceMeshWithOptions(request: CreateServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceMeshResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServiceMeshResponse>(await this.doRPCRequest("CreateServiceMesh", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServiceMeshResponse({}));
  }

  async createServiceMesh(request: CreateServiceMeshRequest): Promise<CreateServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceMeshWithOptions(request, runtime);
  }

  async deleteServiceMeshWithOptions(request: DeleteServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceMeshResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteServiceMeshResponse>(await this.doRPCRequest("DeleteServiceMesh", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteServiceMeshResponse({}));
  }

  async deleteServiceMesh(request: DeleteServiceMeshRequest): Promise<DeleteServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceMeshWithOptions(request, runtime);
  }

  async describeCensWithOptions(request: DescribeCensRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCensResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCensResponse>(await this.doRPCRequest("DescribeCens", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCensResponse({}));
  }

  async describeCens(request: DescribeCensRequest): Promise<DescribeCensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCensWithOptions(request, runtime);
  }

  async describeClusterGrafanaWithOptions(request: DescribeClusterGrafanaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterGrafanaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterGrafanaResponse>(await this.doRPCRequest("DescribeClusterGrafana", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterGrafanaResponse({}));
  }

  async describeClusterGrafana(request: DescribeClusterGrafanaRequest): Promise<DescribeClusterGrafanaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterGrafanaWithOptions(request, runtime);
  }

  async describeClusterPrometheusWithOptions(request: DescribeClusterPrometheusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterPrometheusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterPrometheusResponse>(await this.doRPCRequest("DescribeClusterPrometheus", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterPrometheusResponse({}));
  }

  async describeClusterPrometheus(request: DescribeClusterPrometheusRequest): Promise<DescribeClusterPrometheusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterPrometheusWithOptions(request, runtime);
  }

  async describeClustersInServiceMeshWithOptions(request: DescribeClustersInServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClustersInServiceMeshResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClustersInServiceMeshResponse>(await this.doRPCRequest("DescribeClustersInServiceMesh", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClustersInServiceMeshResponse({}));
  }

  async describeClustersInServiceMesh(request: DescribeClustersInServiceMeshRequest): Promise<DescribeClustersInServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClustersInServiceMeshWithOptions(request, runtime);
  }

  async describeGuestClusterAccessLogDashboardsWithOptions(request: DescribeGuestClusterAccessLogDashboardsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGuestClusterAccessLogDashboardsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGuestClusterAccessLogDashboardsResponse>(await this.doRPCRequest("DescribeGuestClusterAccessLogDashboards", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGuestClusterAccessLogDashboardsResponse({}));
  }

  async describeGuestClusterAccessLogDashboards(request: DescribeGuestClusterAccessLogDashboardsRequest): Promise<DescribeGuestClusterAccessLogDashboardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGuestClusterAccessLogDashboardsWithOptions(request, runtime);
  }

  async describeIngressGatewaysWithOptions(request: DescribeIngressGatewaysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIngressGatewaysResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeIngressGatewaysResponse>(await this.doRPCRequest("DescribeIngressGateways", "2020-01-11", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeIngressGatewaysResponse({}));
  }

  async describeIngressGateways(request: DescribeIngressGatewaysRequest): Promise<DescribeIngressGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIngressGatewaysWithOptions(request, runtime);
  }

  async describeServiceMeshDetailWithOptions(request: DescribeServiceMeshDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeServiceMeshDetailResponse>(await this.doRPCRequest("DescribeServiceMeshDetail", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeServiceMeshDetailResponse({}));
  }

  async describeServiceMeshDetail(request: DescribeServiceMeshDetailRequest): Promise<DescribeServiceMeshDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshDetailWithOptions(request, runtime);
  }

  async describeServiceMeshesWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeServiceMeshesResponse>(await this.doRPCRequest("DescribeServiceMeshes", "2020-01-11", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeServiceMeshesResponse({}));
  }

  async describeServiceMeshes(): Promise<DescribeServiceMeshesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshesWithOptions(runtime);
  }

  async describeServiceMeshKubeconfigWithOptions(request: DescribeServiceMeshKubeconfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshKubeconfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeServiceMeshKubeconfigResponse>(await this.doRPCRequest("DescribeServiceMeshKubeconfig", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeServiceMeshKubeconfigResponse({}));
  }

  async describeServiceMeshKubeconfig(request: DescribeServiceMeshKubeconfigRequest): Promise<DescribeServiceMeshKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshKubeconfigWithOptions(request, runtime);
  }

  async describeUpgradeVersionWithOptions(request: DescribeUpgradeVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpgradeVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUpgradeVersionResponse>(await this.doRPCRequest("DescribeUpgradeVersion", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUpgradeVersionResponse({}));
  }

  async describeUpgradeVersion(request: DescribeUpgradeVersionRequest): Promise<DescribeUpgradeVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpgradeVersionWithOptions(request, runtime);
  }

  async getAutoInjectionLabelSyncStatusWithOptions(request: GetAutoInjectionLabelSyncStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetAutoInjectionLabelSyncStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAutoInjectionLabelSyncStatusResponse>(await this.doRPCRequest("GetAutoInjectionLabelSyncStatus", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetAutoInjectionLabelSyncStatusResponse({}));
  }

  async getAutoInjectionLabelSyncStatus(request: GetAutoInjectionLabelSyncStatusRequest): Promise<GetAutoInjectionLabelSyncStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutoInjectionLabelSyncStatusWithOptions(request, runtime);
  }

  async getDiagnosisWithOptions(request: GetDiagnosisRequest, runtime: $Util.RuntimeOptions): Promise<GetDiagnosisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDiagnosisResponse>(await this.doRPCRequest("GetDiagnosis", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetDiagnosisResponse({}));
  }

  async getDiagnosis(request: GetDiagnosisRequest): Promise<GetDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiagnosisWithOptions(request, runtime);
  }

  async getRegisteredServiceEndpointsWithOptions(request: GetRegisteredServiceEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<GetRegisteredServiceEndpointsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRegisteredServiceEndpointsResponse>(await this.doRPCRequest("GetRegisteredServiceEndpoints", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetRegisteredServiceEndpointsResponse({}));
  }

  async getRegisteredServiceEndpoints(request: GetRegisteredServiceEndpointsRequest): Promise<GetRegisteredServiceEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegisteredServiceEndpointsWithOptions(request, runtime);
  }

  async getRegisteredServiceNamespacesWithOptions(request: GetRegisteredServiceNamespacesRequest, runtime: $Util.RuntimeOptions): Promise<GetRegisteredServiceNamespacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRegisteredServiceNamespacesResponse>(await this.doRPCRequest("GetRegisteredServiceNamespaces", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetRegisteredServiceNamespacesResponse({}));
  }

  async getRegisteredServiceNamespaces(request: GetRegisteredServiceNamespacesRequest): Promise<GetRegisteredServiceNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegisteredServiceNamespacesWithOptions(request, runtime);
  }

  async getRegisteredServicesWithOptions(request: GetRegisteredServicesRequest, runtime: $Util.RuntimeOptions): Promise<GetRegisteredServicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRegisteredServicesResponse>(await this.doRPCRequest("GetRegisteredServices", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetRegisteredServicesResponse({}));
  }

  async getRegisteredServices(request: GetRegisteredServicesRequest): Promise<GetRegisteredServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegisteredServicesWithOptions(request, runtime);
  }

  async getServiceMeshSlbWithOptions(request: GetServiceMeshSlbRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceMeshSlbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetServiceMeshSlbResponse>(await this.doRPCRequest("GetServiceMeshSlb", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetServiceMeshSlbResponse({}));
  }

  async getServiceMeshSlb(request: GetServiceMeshSlbRequest): Promise<GetServiceMeshSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceMeshSlbWithOptions(request, runtime);
  }

  async getServiceRegistrySourceWithOptions(request: GetServiceRegistrySourceRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceRegistrySourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetServiceRegistrySourceResponse>(await this.doRPCRequest("GetServiceRegistrySource", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetServiceRegistrySourceResponse({}));
  }

  async getServiceRegistrySource(request: GetServiceRegistrySourceRequest): Promise<GetServiceRegistrySourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceRegistrySourceWithOptions(request, runtime);
  }

  async getVmAppMeshInfoWithOptions(request: GetVmAppMeshInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetVmAppMeshInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetVmAppMeshInfoResponse>(await this.doRPCRequest("GetVmAppMeshInfo", "2020-01-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetVmAppMeshInfoResponse({}));
  }

  async getVmAppMeshInfo(request: GetVmAppMeshInfoRequest): Promise<GetVmAppMeshInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVmAppMeshInfoWithOptions(request, runtime);
  }

  async getVmMetaWithOptions(request: GetVmMetaRequest, runtime: $Util.RuntimeOptions): Promise<GetVmMetaResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetVmMetaResponse>(await this.doRPCRequest("GetVmMeta", "2020-01-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetVmMetaResponse({}));
  }

  async getVmMeta(request: GetVmMetaRequest): Promise<GetVmMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVmMetaWithOptions(request, runtime);
  }

  async initializeASMRoleWithOptions(runtime: $Util.RuntimeOptions): Promise<InitializeASMRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<InitializeASMRoleResponse>(await this.doRPCRequest("InitializeASMRole", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new InitializeASMRoleResponse({}));
  }

  async initializeASMRole(): Promise<InitializeASMRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeASMRoleWithOptions(runtime);
  }

  async removeClusterFromServiceMeshWithOptions(request: RemoveClusterFromServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<RemoveClusterFromServiceMeshResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveClusterFromServiceMeshResponse>(await this.doRPCRequest("RemoveClusterFromServiceMesh", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveClusterFromServiceMeshResponse({}));
  }

  async removeClusterFromServiceMesh(request: RemoveClusterFromServiceMeshRequest): Promise<RemoveClusterFromServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeClusterFromServiceMeshWithOptions(request, runtime);
  }

  async removeVmAppFromMeshWithOptions(request: RemoveVmAppFromMeshRequest, runtime: $Util.RuntimeOptions): Promise<RemoveVmAppFromMeshResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveVmAppFromMeshResponse>(await this.doRPCRequest("RemoveVmAppFromMesh", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveVmAppFromMeshResponse({}));
  }

  async removeVmAppFromMesh(request: RemoveVmAppFromMeshRequest): Promise<RemoveVmAppFromMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeVmAppFromMeshWithOptions(request, runtime);
  }

  async runDiagnosisWithOptions(request: RunDiagnosisRequest, runtime: $Util.RuntimeOptions): Promise<RunDiagnosisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunDiagnosisResponse>(await this.doRPCRequest("RunDiagnosis", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new RunDiagnosisResponse({}));
  }

  async runDiagnosis(request: RunDiagnosisRequest): Promise<RunDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runDiagnosisWithOptions(request, runtime);
  }

  async setServiceRegistrySourceWithOptions(tmpReq: SetServiceRegistrySourceRequest, runtime: $Util.RuntimeOptions): Promise<SetServiceRegistrySourceResponse> {
    Util.validateModel(tmpReq);
    let request = new SetServiceRegistrySourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetServiceRegistrySourceResponse>(await this.doRPCRequest("SetServiceRegistrySource", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new SetServiceRegistrySourceResponse({}));
  }

  async setServiceRegistrySource(request: SetServiceRegistrySourceRequest): Promise<SetServiceRegistrySourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setServiceRegistrySourceWithOptions(request, runtime);
  }

  async updateIstioInjectionConfigWithOptions(request: UpdateIstioInjectionConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIstioInjectionConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateIstioInjectionConfigResponse>(await this.doRPCRequest("UpdateIstioInjectionConfig", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateIstioInjectionConfigResponse({}));
  }

  async updateIstioInjectionConfig(request: UpdateIstioInjectionConfigRequest): Promise<UpdateIstioInjectionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIstioInjectionConfigWithOptions(request, runtime);
  }

  async updateMeshFeatureWithOptions(request: UpdateMeshFeatureRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMeshFeatureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateMeshFeatureResponse>(await this.doRPCRequest("UpdateMeshFeature", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateMeshFeatureResponse({}));
  }

  async updateMeshFeature(request: UpdateMeshFeatureRequest): Promise<UpdateMeshFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMeshFeatureWithOptions(request, runtime);
  }

  async upgradeMeshVersionWithOptions(request: UpgradeMeshVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeMeshVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeMeshVersionResponse>(await this.doRPCRequest("UpgradeMeshVersion", "2020-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeMeshVersionResponse({}));
  }

  async upgradeMeshVersion(request: UpgradeMeshVersionRequest): Promise<UpgradeMeshVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeMeshVersionWithOptions(request, runtime);
  }

}
