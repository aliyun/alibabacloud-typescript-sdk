// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPCUtil from '@alicloud/rpc-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetServiceRegistrySourceRequest extends $tea.Model {
  serviceMeshId: string;
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

export class GetServiceRegistrySourceResponse extends $tea.Model {
  requestId: string;
  result: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceRegistrySourceRequest extends $tea.Model {
  serviceMeshId: string;
  config: { [key: string]: any };
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
  serviceMeshId: string;
  configShrink: string;
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

export class SetServiceRegistrySourceResponse extends $tea.Model {
  requestId: string;
  result: string;
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

export class GetAutoInjectionLabelSyncStatusRequest extends $tea.Model {
  serviceMeshId: string;
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

export class GetAutoInjectionLabelSyncStatusResponse extends $tea.Model {
  requestId: string;
  status: string;
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

export class AddVmAppToMeshRequest extends $tea.Model {
  serviceMeshId: string;
  namespace: string;
  serviceName: string;
  ips: string;
  ports: string;
  labels: string;
  annotations?: string;
  serviceAccount?: string;
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
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVmAppToMeshResponse extends $tea.Model {
  requestId: string;
  data: string;
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

export class GetVmAppMeshInfoRequest extends $tea.Model {
  serviceMeshId: string;
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

export class GetVmAppMeshInfoResponse extends $tea.Model {
  requestId: string;
  data: string;
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

export class GetVmMetaRequest extends $tea.Model {
  serviceMeshId: string;
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

export class GetVmMetaResponse extends $tea.Model {
  requestId: string;
  vmMetaInfo: GetVmMetaResponseVmMetaInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vmMetaInfo: 'VmMetaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vmMetaInfo: GetVmMetaResponseVmMetaInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVmAppFromMeshRequest extends $tea.Model {
  serviceMeshId: string;
  namespace: string;
  serviceName: string;
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

export class RemoveVmAppFromMeshResponse extends $tea.Model {
  requestId: string;
  data: string;
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

export class GetRegisteredServiceEndpointsRequest extends $tea.Model {
  serviceMeshId: string;
  namespace: string;
  name: string;
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

export class GetRegisteredServiceEndpointsResponse extends $tea.Model {
  requestId: string;
  serviceEndpoints: GetRegisteredServiceEndpointsResponseServiceEndpoints[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceEndpoints: 'ServiceEndpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceEndpoints: { 'type': 'array', 'itemType': GetRegisteredServiceEndpointsResponseServiceEndpoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMeshSlbRequest extends $tea.Model {
  serviceMeshId: string;
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

export class GetServiceMeshSlbResponse extends $tea.Model {
  requestId: string;
  data: GetServiceMeshSlbResponseData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetServiceMeshSlbResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServicesRequest extends $tea.Model {
  serviceMeshId: string;
  namespace: string;
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

export class GetRegisteredServicesResponse extends $tea.Model {
  requestId: string;
  services: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      services: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisRequest extends $tea.Model {
  serviceMeshId: string;
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

export class GetDiagnosisResponse extends $tea.Model {
  requestId: string;
  result: string;
  runAt: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      runAt: 'RunAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      runAt: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceNamespacesRequest extends $tea.Model {
  serviceMeshId: string;
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

export class GetRegisteredServiceNamespacesResponse extends $tea.Model {
  requestId: string;
  namespaces: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      namespaces: 'Namespaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDiagnosisRequest extends $tea.Model {
  serviceMeshId: string;
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

export class RunDiagnosisResponse extends $tea.Model {
  requestId: string;
  result: string;
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

export class RemoveClusterFromServiceMeshRequest extends $tea.Model {
  serviceMeshId: string;
  clusterId: string;
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

export class RemoveClusterFromServiceMeshResponse extends $tea.Model {
  requestId: string;
  code: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClusterIntoServiceMeshRequest extends $tea.Model {
  serviceMeshId: string;
  clusterId: string;
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

export class AddClusterIntoServiceMeshResponse extends $tea.Model {
  requestId: string;
  code: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioInjectionConfigRequest extends $tea.Model {
  serviceMeshId: string;
  namespace: string;
  enableIstioInjection: boolean;
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

export class UpdateIstioInjectionConfigResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterAccessLogDashboardsRequest extends $tea.Model {
  k8sClusterId: string;
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

export class DescribeGuestClusterAccessLogDashboardsResponse extends $tea.Model {
  requestId: string;
  k8sClusterId: string;
  dashboards: DescribeGuestClusterAccessLogDashboardsResponseDashboards[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      k8sClusterId: 'K8sClusterId',
      dashboards: 'Dashboards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      k8sClusterId: 'string',
      dashboards: { 'type': 'array', 'itemType': DescribeGuestClusterAccessLogDashboardsResponseDashboards },
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

export class DescribeClusterPrometheusResponse extends $tea.Model {
  requestId: string;
  prometheus: string;
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

export class DescribeClusterGrafanaRequest extends $tea.Model {
  serviceMeshId: string;
  k8sClusterId: string;
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

export class DescribeClusterGrafanaResponse extends $tea.Model {
  requestId: string;
  dashboards: DescribeClusterGrafanaResponseDashboards[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dashboards: 'Dashboards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dashboards: { 'type': 'array', 'itemType': DescribeClusterGrafanaResponseDashboards },
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

export class DescribeCensResponse extends $tea.Model {
  requestId: string;
  clusters: string[];
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

export class DescribeClustersInServiceMeshRequest extends $tea.Model {
  serviceMeshId: string;
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

export class DescribeClustersInServiceMeshResponse extends $tea.Model {
  requestId: string;
  clusters: DescribeClustersInServiceMeshResponseClusters[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusters: { 'type': 'array', 'itemType': DescribeClustersInServiceMeshResponseClusters },
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

export class DescribeIngressGatewaysResponse extends $tea.Model {
  requestId: string;
  ingressGateways: { [key: string]: any }[];
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

export class DescribeUpgradeVersionRequest extends $tea.Model {
  serviceMeshId: string;
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

export class DescribeUpgradeVersionResponse extends $tea.Model {
  requestId: string;
  version: DescribeUpgradeVersionResponseVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      version: DescribeUpgradeVersionResponseVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMeshFeatureRequest extends $tea.Model {
  serviceMeshId: string;
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
  enableAudit?: boolean;
  auditProject?: string;
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
      enableAudit: 'EnableAudit',
      auditProject: 'AuditProject',
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
      enableAudit: 'boolean',
      auditProject: 'string',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMeshFeatureResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMeshVersionRequest extends $tea.Model {
  serviceMeshId: string;
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

export class UpgradeMeshVersionResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponse extends $tea.Model {
  requestId: string;
  serviceMeshes: DescribeServiceMeshesResponseServiceMeshes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceMeshes: 'ServiceMeshes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceMeshes: { 'type': 'array', 'itemType': DescribeServiceMeshesResponseServiceMeshes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailRequest extends $tea.Model {
  serviceMeshId: string;
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

export class DescribeServiceMeshDetailResponse extends $tea.Model {
  requestId: string;
  serviceMesh: DescribeServiceMeshDetailResponseServiceMesh;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceMesh: 'ServiceMesh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceMesh: DescribeServiceMeshDetailResponseServiceMesh,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshKubeconfigRequest extends $tea.Model {
  serviceMeshId: string;
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

export class DescribeServiceMeshKubeconfigResponse extends $tea.Model {
  kubeconfig: string;
  requestId: string;
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

export class CreateServiceMeshRequest extends $tea.Model {
  regionId: string;
  istioVersion?: string;
  vpcId: string;
  apiServerPublicEip?: boolean;
  pilotPublicEip?: boolean;
  tracing?: boolean;
  name?: string;
  vSwitches: string;
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
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      istioVersion: 'IstioVersion',
      vpcId: 'VpcId',
      apiServerPublicEip: 'ApiServerPublicEip',
      pilotPublicEip: 'PilotPublicEip',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      istioVersion: 'string',
      vpcId: 'string',
      apiServerPublicEip: 'boolean',
      pilotPublicEip: 'boolean',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceMeshResponse extends $tea.Model {
  requestId: string;
  serviceMeshId: string;
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

export class DeleteServiceMeshRequest extends $tea.Model {
  serviceMeshId: string;
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

export class DeleteServiceMeshResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmMetaResponseVmMetaInfo extends $tea.Model {
  rootCertPath: string;
  rootCertContent: string;
  keyPath: string;
  keyContent: string;
  certChainPath: string;
  certChainContent: string;
  envoyEnvPath: string;
  envoyEnvContent: string;
  hostsPath: string;
  hostsContent: string;
  tokenPath: string;
  tokenContent: string;
  static names(): { [key: string]: string } {
    return {
      rootCertPath: 'RootCertPath',
      rootCertContent: 'RootCertContent',
      keyPath: 'KeyPath',
      keyContent: 'KeyContent',
      certChainPath: 'CertChainPath',
      certChainContent: 'CertChainContent',
      envoyEnvPath: 'EnvoyEnvPath',
      envoyEnvContent: 'EnvoyEnvContent',
      hostsPath: 'HostsPath',
      hostsContent: 'HostsContent',
      tokenPath: 'TokenPath',
      tokenContent: 'TokenContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rootCertPath: 'string',
      rootCertContent: 'string',
      keyPath: 'string',
      keyContent: 'string',
      certChainPath: 'string',
      certChainContent: 'string',
      envoyEnvPath: 'string',
      envoyEnvContent: 'string',
      hostsPath: 'string',
      hostsContent: 'string',
      tokenPath: 'string',
      tokenContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceEndpointsResponseServiceEndpoints extends $tea.Model {
  address: string;
  clusterId: string;
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

export class GetServiceMeshSlbResponseData extends $tea.Model {
  loadBalancerId: string;
  status: string;
  serverHealthStatus: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      status: 'Status',
      serverHealthStatus: 'ServerHealthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      status: 'string',
      serverHealthStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestClusterAccessLogDashboardsResponseDashboards extends $tea.Model {
  title: string;
  url: string;
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

export class DescribeClusterGrafanaResponseDashboards extends $tea.Model {
  url: string;
  title: string;
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

export class DescribeClustersInServiceMeshResponseClustersAccessLogDashboards extends $tea.Model {
  title: string;
  url: string;
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

export class DescribeClustersInServiceMeshResponseClusters extends $tea.Model {
  clusterId: string;
  clusterType: string;
  creationTime: string;
  errorMessage: string;
  name: string;
  regionId: string;
  state: string;
  updateTime: string;
  version: string;
  vpcId: string;
  sgId: string;
  clusterDomain: string;
  accessLogDashboards: DescribeClustersInServiceMeshResponseClustersAccessLogDashboards[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      name: 'Name',
      regionId: 'RegionId',
      state: 'State',
      updateTime: 'UpdateTime',
      version: 'Version',
      vpcId: 'VpcId',
      sgId: 'SgId',
      clusterDomain: 'ClusterDomain',
      accessLogDashboards: 'AccessLogDashboards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      creationTime: 'string',
      errorMessage: 'string',
      name: 'string',
      regionId: 'string',
      state: 'string',
      updateTime: 'string',
      version: 'string',
      vpcId: 'string',
      sgId: 'string',
      clusterDomain: 'string',
      accessLogDashboards: { 'type': 'array', 'itemType': DescribeClustersInServiceMeshResponseClustersAccessLogDashboards },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpgradeVersionResponseVersion extends $tea.Model {
  istioVersion: string;
  istioOperatorVersion: string;
  kubernetesVersion: string;
  static names(): { [key: string]: string } {
    return {
      istioVersion: 'IstioVersion',
      istioOperatorVersion: 'IstioOperatorVersion',
      kubernetesVersion: 'KubernetesVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioVersion: 'string',
      istioOperatorVersion: 'string',
      kubernetesVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseServiceMeshesEndpoints extends $tea.Model {
  intranetApiServerEndpoint: string;
  intranetPilotEndpoint: string;
  publicApiServerEndpoint: string;
  publicPilotEndpoint: string;
  reverseTunnelEndpoint: string;
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

export class DescribeServiceMeshesResponseServiceMeshesServiceMeshInfo extends $tea.Model {
  creationTime: string;
  errorMessage: string;
  name: string;
  regionId: string;
  serviceMeshId: string;
  state: string;
  updateTime: string;
  version: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      name: 'Name',
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

export class DescribeServiceMeshesResponseServiceMeshesSpecLoadBalancer extends $tea.Model {
  apiServerLoadbalancerId: string;
  apiServerPublicEip: boolean;
  pilotPublicEip: boolean;
  pilotPublicLoadbalancerId: string;
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

export class DescribeServiceMeshesResponseServiceMeshesSpecMeshConfigPilot extends $tea.Model {
  traceSampling: number;
  http10Enabled: boolean;
  static names(): { [key: string]: string } {
    return {
      traceSampling: 'TraceSampling',
      http10Enabled: 'Http10Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceSampling: 'number',
      http10Enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseServiceMeshesSpecMeshConfigSidecarInjectorInitCNIConfiguration extends $tea.Model {
  enabled: boolean;
  excludeNamespaces: string;
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

export class DescribeServiceMeshesResponseServiceMeshesSpecMeshConfigSidecarInjector extends $tea.Model {
  enableNamespacesByDefault: boolean;
  autoInjectionPolicyEnabled: boolean;
  initCNIConfiguration: DescribeServiceMeshesResponseServiceMeshesSpecMeshConfigSidecarInjectorInitCNIConfiguration;
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
      initCNIConfiguration: DescribeServiceMeshesResponseServiceMeshesSpecMeshConfigSidecarInjectorInitCNIConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseServiceMeshesSpecMeshConfig extends $tea.Model {
  mtls: boolean;
  outboundTrafficPolicy: string;
  strictMtls: boolean;
  tracing: boolean;
  telemetry: boolean;
  pilot: DescribeServiceMeshesResponseServiceMeshesSpecMeshConfigPilot;
  sidecarInjector: DescribeServiceMeshesResponseServiceMeshesSpecMeshConfigSidecarInjector;
  static names(): { [key: string]: string } {
    return {
      mtls: 'Mtls',
      outboundTrafficPolicy: 'OutboundTrafficPolicy',
      strictMtls: 'StrictMtls',
      tracing: 'Tracing',
      telemetry: 'Telemetry',
      pilot: 'Pilot',
      sidecarInjector: 'SidecarInjector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mtls: 'boolean',
      outboundTrafficPolicy: 'string',
      strictMtls: 'boolean',
      tracing: 'boolean',
      telemetry: 'boolean',
      pilot: DescribeServiceMeshesResponseServiceMeshesSpecMeshConfigPilot,
      sidecarInjector: DescribeServiceMeshesResponseServiceMeshesSpecMeshConfigSidecarInjector,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseServiceMeshesSpecNetwork extends $tea.Model {
  securityGroupId: string;
  vpcId: string;
  vSwitches: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vpcId: 'string',
      vSwitches: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseServiceMeshesSpec extends $tea.Model {
  loadBalancer: DescribeServiceMeshesResponseServiceMeshesSpecLoadBalancer;
  meshConfig: DescribeServiceMeshesResponseServiceMeshesSpecMeshConfig;
  network: DescribeServiceMeshesResponseServiceMeshesSpecNetwork;
  static names(): { [key: string]: string } {
    return {
      loadBalancer: 'LoadBalancer',
      meshConfig: 'MeshConfig',
      network: 'Network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancer: DescribeServiceMeshesResponseServiceMeshesSpecLoadBalancer,
      meshConfig: DescribeServiceMeshesResponseServiceMeshesSpecMeshConfig,
      network: DescribeServiceMeshesResponseServiceMeshesSpecNetwork,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseServiceMeshes extends $tea.Model {
  endpoints: DescribeServiceMeshesResponseServiceMeshesEndpoints;
  serviceMeshInfo: DescribeServiceMeshesResponseServiceMeshesServiceMeshInfo;
  spec: DescribeServiceMeshesResponseServiceMeshesSpec;
  clusters: string[];
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
      endpoints: DescribeServiceMeshesResponseServiceMeshesEndpoints,
      serviceMeshInfo: DescribeServiceMeshesResponseServiceMeshesServiceMeshInfo,
      spec: DescribeServiceMeshesResponseServiceMeshesSpec,
      clusters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseServiceMeshEndpoints extends $tea.Model {
  intranetApiServerEndpoint: string;
  intranetPilotEndpoint: string;
  publicApiServerEndpoint: string;
  publicPilotEndpoint: string;
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

export class DescribeServiceMeshDetailResponseServiceMeshServiceMeshInfo extends $tea.Model {
  creationTime: string;
  errorMessage: string;
  name: string;
  regionId: string;
  serviceMeshId: string;
  state: string;
  updateTime: string;
  version: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      name: 'Name',
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

export class DescribeServiceMeshDetailResponseServiceMeshSpecLoadBalancer extends $tea.Model {
  apiServerLoadbalancerId: string;
  apiServerPublicEip: boolean;
  pilotPublicEip: boolean;
  pilotPublicLoadbalancerId: string;
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

export class DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigPilot extends $tea.Model {
  traceSampling: number;
  http10Enabled: boolean;
  static names(): { [key: string]: string } {
    return {
      traceSampling: 'TraceSampling',
      http10Enabled: 'Http10Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceSampling: 'number',
      http10Enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigOPA extends $tea.Model {
  enabled: boolean;
  logLevel: string;
  requestCPU: string;
  requestMemory: string;
  limitCPU: string;
  limitMemory: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      logLevel: 'LogLevel',
      requestCPU: 'RequestCPU',
      requestMemory: 'RequestMemory',
      limitCPU: 'LimitCPU',
      limitMemory: 'LimitMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      logLevel: 'string',
      requestCPU: 'string',
      requestMemory: 'string',
      limitCPU: 'string',
      limitMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigAudit extends $tea.Model {
  enabled: boolean;
  project: string;
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

export class DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigProxy extends $tea.Model {
  clusterDomain: string;
  requestCPU: string;
  requestMemory: string;
  limitCPU: string;
  limitMemory: string;
  static names(): { [key: string]: string } {
    return {
      clusterDomain: 'ClusterDomain',
      requestCPU: 'RequestCPU',
      requestMemory: 'RequestMemory',
      limitCPU: 'LimitCPU',
      limitMemory: 'LimitMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDomain: 'string',
      requestCPU: 'string',
      requestMemory: 'string',
      limitCPU: 'string',
      limitMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigSidecarInjectorInitCNIConfiguration extends $tea.Model {
  enabled: boolean;
  excludeNamespaces: string;
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

export class DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigSidecarInjector extends $tea.Model {
  enableNamespacesByDefault: boolean;
  autoInjectionPolicyEnabled: boolean;
  requestCPU: string;
  requestMemory: string;
  limitCPU: string;
  limitMemory: string;
  sidecarInjectorWebhookAsYaml: string;
  initCNIConfiguration: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigSidecarInjectorInitCNIConfiguration;
  static names(): { [key: string]: string } {
    return {
      enableNamespacesByDefault: 'EnableNamespacesByDefault',
      autoInjectionPolicyEnabled: 'AutoInjectionPolicyEnabled',
      requestCPU: 'RequestCPU',
      requestMemory: 'RequestMemory',
      limitCPU: 'LimitCPU',
      limitMemory: 'LimitMemory',
      sidecarInjectorWebhookAsYaml: 'SidecarInjectorWebhookAsYaml',
      initCNIConfiguration: 'InitCNIConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableNamespacesByDefault: 'boolean',
      autoInjectionPolicyEnabled: 'boolean',
      requestCPU: 'string',
      requestMemory: 'string',
      limitCPU: 'string',
      limitMemory: 'string',
      sidecarInjectorWebhookAsYaml: 'string',
      initCNIConfiguration: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigSidecarInjectorInitCNIConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigKiali extends $tea.Model {
  enabled: boolean;
  url: string;
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

export class DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigPrometheus extends $tea.Model {
  useExternal: boolean;
  externalUrl: string;
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

export class DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigAccessLog extends $tea.Model {
  enabled: boolean;
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

export class DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfig extends $tea.Model {
  enableLocalityLB: boolean;
  telemetry: boolean;
  tracing: boolean;
  customizedZipkin: boolean;
  outboundTrafficPolicy: string;
  includeIPRanges: string;
  edition: string;
  pilot: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigPilot;
  OPA: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigOPA;
  audit: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigAudit;
  proxy: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigProxy;
  sidecarInjector: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigSidecarInjector;
  kiali: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigKiali;
  prometheus: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigPrometheus;
  accessLog: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigAccessLog;
  static names(): { [key: string]: string } {
    return {
      enableLocalityLB: 'EnableLocalityLB',
      telemetry: 'Telemetry',
      tracing: 'Tracing',
      customizedZipkin: 'CustomizedZipkin',
      outboundTrafficPolicy: 'OutboundTrafficPolicy',
      includeIPRanges: 'IncludeIPRanges',
      edition: 'Edition',
      pilot: 'Pilot',
      OPA: 'OPA',
      audit: 'Audit',
      proxy: 'Proxy',
      sidecarInjector: 'SidecarInjector',
      kiali: 'Kiali',
      prometheus: 'Prometheus',
      accessLog: 'AccessLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableLocalityLB: 'boolean',
      telemetry: 'boolean',
      tracing: 'boolean',
      customizedZipkin: 'boolean',
      outboundTrafficPolicy: 'string',
      includeIPRanges: 'string',
      edition: 'string',
      pilot: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigPilot,
      OPA: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigOPA,
      audit: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigAudit,
      proxy: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigProxy,
      sidecarInjector: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigSidecarInjector,
      kiali: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigKiali,
      prometheus: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigPrometheus,
      accessLog: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfigAccessLog,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseServiceMeshSpecNetwork extends $tea.Model {
  securityGroupId: string;
  vpcId: string;
  vSwitches: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vpcId: 'string',
      vSwitches: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseServiceMeshSpec extends $tea.Model {
  loadBalancer: DescribeServiceMeshDetailResponseServiceMeshSpecLoadBalancer;
  meshConfig: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfig;
  network: DescribeServiceMeshDetailResponseServiceMeshSpecNetwork;
  static names(): { [key: string]: string } {
    return {
      loadBalancer: 'LoadBalancer',
      meshConfig: 'MeshConfig',
      network: 'Network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancer: DescribeServiceMeshDetailResponseServiceMeshSpecLoadBalancer,
      meshConfig: DescribeServiceMeshDetailResponseServiceMeshSpecMeshConfig,
      network: DescribeServiceMeshDetailResponseServiceMeshSpecNetwork,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseServiceMesh extends $tea.Model {
  endpoints: DescribeServiceMeshDetailResponseServiceMeshEndpoints;
  serviceMeshInfo: DescribeServiceMeshDetailResponseServiceMeshServiceMeshInfo;
  spec: DescribeServiceMeshDetailResponseServiceMeshSpec;
  clusters: string[];
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
      endpoints: DescribeServiceMeshDetailResponseServiceMeshEndpoints,
      serviceMeshInfo: DescribeServiceMeshDetailResponseServiceMeshServiceMeshInfo,
      spec: DescribeServiceMeshDetailResponseServiceMeshSpec,
      clusters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("servicemesh", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async getServiceRegistrySourceWithOptions(request: GetServiceRegistrySourceRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceRegistrySourceResponse> {
    Util.validateModel(request);
    return $tea.cast<GetServiceRegistrySourceResponse>(await this.doRequest("GetServiceRegistrySource", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new GetServiceRegistrySourceResponse({}));
  }

  async getServiceRegistrySource(request: GetServiceRegistrySourceRequest): Promise<GetServiceRegistrySourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceRegistrySourceWithOptions(request, runtime);
  }

  async setServiceRegistrySourceWithOptions(tmp: SetServiceRegistrySourceRequest, runtime: $Util.RuntimeOptions): Promise<SetServiceRegistrySourceResponse> {
    Util.validateModel(tmp);
    let request = new SetServiceRegistrySourceShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.config)) {
      request.configShrink = Util.toJSONString(tmp.config);
    }

    return $tea.cast<SetServiceRegistrySourceResponse>(await this.doRequest("SetServiceRegistrySource", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new SetServiceRegistrySourceResponse({}));
  }

  async setServiceRegistrySource(request: SetServiceRegistrySourceRequest): Promise<SetServiceRegistrySourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setServiceRegistrySourceWithOptions(request, runtime);
  }

  async getAutoInjectionLabelSyncStatusWithOptions(request: GetAutoInjectionLabelSyncStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetAutoInjectionLabelSyncStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAutoInjectionLabelSyncStatusResponse>(await this.doRequest("GetAutoInjectionLabelSyncStatus", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new GetAutoInjectionLabelSyncStatusResponse({}));
  }

  async getAutoInjectionLabelSyncStatus(request: GetAutoInjectionLabelSyncStatusRequest): Promise<GetAutoInjectionLabelSyncStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutoInjectionLabelSyncStatusWithOptions(request, runtime);
  }

  async addVmAppToMeshWithOptions(request: AddVmAppToMeshRequest, runtime: $Util.RuntimeOptions): Promise<AddVmAppToMeshResponse> {
    Util.validateModel(request);
    return $tea.cast<AddVmAppToMeshResponse>(await this.doRequest("AddVmAppToMesh", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new AddVmAppToMeshResponse({}));
  }

  async addVmAppToMesh(request: AddVmAppToMeshRequest): Promise<AddVmAppToMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVmAppToMeshWithOptions(request, runtime);
  }

  async getVmAppMeshInfoWithOptions(request: GetVmAppMeshInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetVmAppMeshInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<GetVmAppMeshInfoResponse>(await this.doRequest("GetVmAppMeshInfo", "HTTPS", "GET", "2020-01-11", "AK", $tea.toMap(request), null, runtime), new GetVmAppMeshInfoResponse({}));
  }

  async getVmAppMeshInfo(request: GetVmAppMeshInfoRequest): Promise<GetVmAppMeshInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVmAppMeshInfoWithOptions(request, runtime);
  }

  async getVmMetaWithOptions(request: GetVmMetaRequest, runtime: $Util.RuntimeOptions): Promise<GetVmMetaResponse> {
    Util.validateModel(request);
    return $tea.cast<GetVmMetaResponse>(await this.doRequest("GetVmMeta", "HTTPS", "GET", "2020-01-11", "AK", $tea.toMap(request), null, runtime), new GetVmMetaResponse({}));
  }

  async getVmMeta(request: GetVmMetaRequest): Promise<GetVmMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVmMetaWithOptions(request, runtime);
  }

  async removeVmAppFromMeshWithOptions(request: RemoveVmAppFromMeshRequest, runtime: $Util.RuntimeOptions): Promise<RemoveVmAppFromMeshResponse> {
    Util.validateModel(request);
    return $tea.cast<RemoveVmAppFromMeshResponse>(await this.doRequest("RemoveVmAppFromMesh", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new RemoveVmAppFromMeshResponse({}));
  }

  async removeVmAppFromMesh(request: RemoveVmAppFromMeshRequest): Promise<RemoveVmAppFromMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeVmAppFromMeshWithOptions(request, runtime);
  }

  async getRegisteredServiceEndpointsWithOptions(request: GetRegisteredServiceEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<GetRegisteredServiceEndpointsResponse> {
    Util.validateModel(request);
    return $tea.cast<GetRegisteredServiceEndpointsResponse>(await this.doRequest("GetRegisteredServiceEndpoints", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new GetRegisteredServiceEndpointsResponse({}));
  }

  async getRegisteredServiceEndpoints(request: GetRegisteredServiceEndpointsRequest): Promise<GetRegisteredServiceEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegisteredServiceEndpointsWithOptions(request, runtime);
  }

  async getServiceMeshSlbWithOptions(request: GetServiceMeshSlbRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceMeshSlbResponse> {
    Util.validateModel(request);
    return $tea.cast<GetServiceMeshSlbResponse>(await this.doRequest("GetServiceMeshSlb", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new GetServiceMeshSlbResponse({}));
  }

  async getServiceMeshSlb(request: GetServiceMeshSlbRequest): Promise<GetServiceMeshSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceMeshSlbWithOptions(request, runtime);
  }

  async getRegisteredServicesWithOptions(request: GetRegisteredServicesRequest, runtime: $Util.RuntimeOptions): Promise<GetRegisteredServicesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetRegisteredServicesResponse>(await this.doRequest("GetRegisteredServices", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new GetRegisteredServicesResponse({}));
  }

  async getRegisteredServices(request: GetRegisteredServicesRequest): Promise<GetRegisteredServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegisteredServicesWithOptions(request, runtime);
  }

  async getDiagnosisWithOptions(request: GetDiagnosisRequest, runtime: $Util.RuntimeOptions): Promise<GetDiagnosisResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDiagnosisResponse>(await this.doRequest("GetDiagnosis", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new GetDiagnosisResponse({}));
  }

  async getDiagnosis(request: GetDiagnosisRequest): Promise<GetDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiagnosisWithOptions(request, runtime);
  }

  async getRegisteredServiceNamespacesWithOptions(request: GetRegisteredServiceNamespacesRequest, runtime: $Util.RuntimeOptions): Promise<GetRegisteredServiceNamespacesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetRegisteredServiceNamespacesResponse>(await this.doRequest("GetRegisteredServiceNamespaces", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new GetRegisteredServiceNamespacesResponse({}));
  }

  async getRegisteredServiceNamespaces(request: GetRegisteredServiceNamespacesRequest): Promise<GetRegisteredServiceNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegisteredServiceNamespacesWithOptions(request, runtime);
  }

  async runDiagnosisWithOptions(request: RunDiagnosisRequest, runtime: $Util.RuntimeOptions): Promise<RunDiagnosisResponse> {
    Util.validateModel(request);
    return $tea.cast<RunDiagnosisResponse>(await this.doRequest("RunDiagnosis", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new RunDiagnosisResponse({}));
  }

  async runDiagnosis(request: RunDiagnosisRequest): Promise<RunDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runDiagnosisWithOptions(request, runtime);
  }

  async removeClusterFromServiceMeshWithOptions(request: RemoveClusterFromServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<RemoveClusterFromServiceMeshResponse> {
    Util.validateModel(request);
    return $tea.cast<RemoveClusterFromServiceMeshResponse>(await this.doRequest("RemoveClusterFromServiceMesh", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new RemoveClusterFromServiceMeshResponse({}));
  }

  async removeClusterFromServiceMesh(request: RemoveClusterFromServiceMeshRequest): Promise<RemoveClusterFromServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeClusterFromServiceMeshWithOptions(request, runtime);
  }

  async addClusterIntoServiceMeshWithOptions(request: AddClusterIntoServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<AddClusterIntoServiceMeshResponse> {
    Util.validateModel(request);
    return $tea.cast<AddClusterIntoServiceMeshResponse>(await this.doRequest("AddClusterIntoServiceMesh", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new AddClusterIntoServiceMeshResponse({}));
  }

  async addClusterIntoServiceMesh(request: AddClusterIntoServiceMeshRequest): Promise<AddClusterIntoServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addClusterIntoServiceMeshWithOptions(request, runtime);
  }

  async updateIstioInjectionConfigWithOptions(request: UpdateIstioInjectionConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIstioInjectionConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateIstioInjectionConfigResponse>(await this.doRequest("UpdateIstioInjectionConfig", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new UpdateIstioInjectionConfigResponse({}));
  }

  async updateIstioInjectionConfig(request: UpdateIstioInjectionConfigRequest): Promise<UpdateIstioInjectionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIstioInjectionConfigWithOptions(request, runtime);
  }

  async describeGuestClusterAccessLogDashboardsWithOptions(request: DescribeGuestClusterAccessLogDashboardsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGuestClusterAccessLogDashboardsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeGuestClusterAccessLogDashboardsResponse>(await this.doRequest("DescribeGuestClusterAccessLogDashboards", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new DescribeGuestClusterAccessLogDashboardsResponse({}));
  }

  async describeGuestClusterAccessLogDashboards(request: DescribeGuestClusterAccessLogDashboardsRequest): Promise<DescribeGuestClusterAccessLogDashboardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGuestClusterAccessLogDashboardsWithOptions(request, runtime);
  }

  async describeClusterPrometheusWithOptions(request: DescribeClusterPrometheusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterPrometheusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeClusterPrometheusResponse>(await this.doRequest("DescribeClusterPrometheus", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new DescribeClusterPrometheusResponse({}));
  }

  async describeClusterPrometheus(request: DescribeClusterPrometheusRequest): Promise<DescribeClusterPrometheusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterPrometheusWithOptions(request, runtime);
  }

  async describeClusterGrafanaWithOptions(request: DescribeClusterGrafanaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterGrafanaResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeClusterGrafanaResponse>(await this.doRequest("DescribeClusterGrafana", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new DescribeClusterGrafanaResponse({}));
  }

  async describeClusterGrafana(request: DescribeClusterGrafanaRequest): Promise<DescribeClusterGrafanaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterGrafanaWithOptions(request, runtime);
  }

  async describeCensWithOptions(request: DescribeCensRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCensResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCensResponse>(await this.doRequest("DescribeCens", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new DescribeCensResponse({}));
  }

  async describeCens(request: DescribeCensRequest): Promise<DescribeCensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCensWithOptions(request, runtime);
  }

  async describeClustersInServiceMeshWithOptions(request: DescribeClustersInServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClustersInServiceMeshResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeClustersInServiceMeshResponse>(await this.doRequest("DescribeClustersInServiceMesh", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new DescribeClustersInServiceMeshResponse({}));
  }

  async describeClustersInServiceMesh(request: DescribeClustersInServiceMeshRequest): Promise<DescribeClustersInServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClustersInServiceMeshWithOptions(request, runtime);
  }

  async describeIngressGatewaysWithOptions(request: DescribeIngressGatewaysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIngressGatewaysResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeIngressGatewaysResponse>(await this.doRequest("DescribeIngressGateways", "HTTPS", "GET", "2020-01-11", "AK", $tea.toMap(request), null, runtime), new DescribeIngressGatewaysResponse({}));
  }

  async describeIngressGateways(request: DescribeIngressGatewaysRequest): Promise<DescribeIngressGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIngressGatewaysWithOptions(request, runtime);
  }

  async describeUpgradeVersionWithOptions(request: DescribeUpgradeVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpgradeVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeUpgradeVersionResponse>(await this.doRequest("DescribeUpgradeVersion", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new DescribeUpgradeVersionResponse({}));
  }

  async describeUpgradeVersion(request: DescribeUpgradeVersionRequest): Promise<DescribeUpgradeVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpgradeVersionWithOptions(request, runtime);
  }

  async updateMeshFeatureWithOptions(request: UpdateMeshFeatureRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMeshFeatureResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateMeshFeatureResponse>(await this.doRequest("UpdateMeshFeature", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new UpdateMeshFeatureResponse({}));
  }

  async updateMeshFeature(request: UpdateMeshFeatureRequest): Promise<UpdateMeshFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMeshFeatureWithOptions(request, runtime);
  }

  async upgradeMeshVersionWithOptions(request: UpgradeMeshVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeMeshVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<UpgradeMeshVersionResponse>(await this.doRequest("UpgradeMeshVersion", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new UpgradeMeshVersionResponse({}));
  }

  async upgradeMeshVersion(request: UpgradeMeshVersionRequest): Promise<UpgradeMeshVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeMeshVersionWithOptions(request, runtime);
  }

  async describeServiceMeshesWithOptions(request: DescribeServiceMeshesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeServiceMeshesResponse>(await this.doRequest("DescribeServiceMeshes", "HTTPS", "GET", "2020-01-11", "AK", $tea.toMap(request), null, runtime), new DescribeServiceMeshesResponse({}));
  }

  async describeServiceMeshes(request: DescribeServiceMeshesRequest): Promise<DescribeServiceMeshesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshesWithOptions(request, runtime);
  }

  async describeServiceMeshDetailWithOptions(request: DescribeServiceMeshDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeServiceMeshDetailResponse>(await this.doRequest("DescribeServiceMeshDetail", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new DescribeServiceMeshDetailResponse({}));
  }

  async describeServiceMeshDetail(request: DescribeServiceMeshDetailRequest): Promise<DescribeServiceMeshDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshDetailWithOptions(request, runtime);
  }

  async describeServiceMeshKubeconfigWithOptions(request: DescribeServiceMeshKubeconfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMeshKubeconfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeServiceMeshKubeconfigResponse>(await this.doRequest("DescribeServiceMeshKubeconfig", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new DescribeServiceMeshKubeconfigResponse({}));
  }

  async describeServiceMeshKubeconfig(request: DescribeServiceMeshKubeconfigRequest): Promise<DescribeServiceMeshKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceMeshKubeconfigWithOptions(request, runtime);
  }

  async createServiceMeshWithOptions(request: CreateServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceMeshResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateServiceMeshResponse>(await this.doRequest("CreateServiceMesh", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new CreateServiceMeshResponse({}));
  }

  async createServiceMesh(request: CreateServiceMeshRequest): Promise<CreateServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceMeshWithOptions(request, runtime);
  }

  async deleteServiceMeshWithOptions(request: DeleteServiceMeshRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceMeshResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteServiceMeshResponse>(await this.doRequest("DeleteServiceMesh", "HTTPS", "POST", "2020-01-11", "AK", null, $tea.toMap(request), runtime), new DeleteServiceMeshResponse({}));
  }

  async deleteServiceMesh(request: DeleteServiceMeshRequest): Promise<DeleteServiceMeshResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceMeshWithOptions(request, runtime);
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

}
