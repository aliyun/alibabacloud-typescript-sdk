// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceMeshDetailResponseBodyServiceMeshEndpoints extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is used to access the API server from the internal network.
   * 
   * @example
   * https://``192.168.**.**``:6443
   */
  intranetApiServerEndpoint?: string;
  /**
   * @remarks
   * The endpoint that is used to access Istio Pilot from the internal network (Intranet) during canary release.
   * 
   * @example
   * ``192.168.**.**``:15011
   */
  intranetCanaryPilotEndpoint?: string;
  /**
   * @remarks
   * The endpoint that is used to access Istio Pilot from the internal network.
   * 
   * @example
   * ``192.168.**.**``:15011
   */
  intranetPilotEndpoint?: string;
  /**
   * @remarks
   * The endpoint that is used to access the API server over the Internet.
   * 
   * @example
   * https://``123.56.**.**``:6443
   */
  publicApiServerEndpoint?: string;
  /**
   * @remarks
   * The endpoint that is used to expose Istio Pilot to the public network (Internet) during canary release.
   * 
   * @example
   * ``182.92.**.**``:15011
   */
  publicCanaryPilotEndpoint?: string;
  /**
   * @remarks
   * The endpoint that is used to expose Istio Pilot to the Internet.
   * 
   * @example
   * ``182.92.**.**``:15011
   */
  publicPilotEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      intranetApiServerEndpoint: 'IntranetApiServerEndpoint',
      intranetCanaryPilotEndpoint: 'IntranetCanaryPilotEndpoint',
      intranetPilotEndpoint: 'IntranetPilotEndpoint',
      publicApiServerEndpoint: 'PublicApiServerEndpoint',
      publicCanaryPilotEndpoint: 'PublicCanaryPilotEndpoint',
      publicPilotEndpoint: 'PublicPilotEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetApiServerEndpoint: 'string',
      intranetCanaryPilotEndpoint: 'string',
      intranetPilotEndpoint: 'string',
      publicApiServerEndpoint: 'string',
      publicCanaryPilotEndpoint: 'string',
      publicPilotEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshServiceMeshInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the ASM instance was created.
   * 
   * @example
   * 2020-04-21T09:42:20+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the ASM instance.
   * 
   * @example
   * mesh1
   */
  name?: string;
  /**
   * @remarks
   * The edition of the ASM instance. Valid values:
   * 
   * *   `Default`: Standard Edition
   * *   `Pro`: Enterprise Edition and Ultimate Edition
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The ID of the region in which the ASM instance resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * @example
   * c08ba3fd1e6484b0f8cc1ad8fe10d****
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * The state of the ASM instance.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The time when the ASM instance was last modified.
   * 
   * @example
   * 2020-06-03T14:48:54+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The version of the ASM instance.
   * 
   * @example
   * v1.7.4.0-gfb34ba99-aliyun
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecLoadBalancer extends $dara.Model {
  /**
   * @remarks
   * The ID of the CLB instance that is used when the API server is exposed to the Internet.
   * 
   * @example
   * lb-2zekaak10uxds44vx****
   */
  apiServerLoadbalancerId?: string;
  /**
   * @remarks
   * Indicates whether the API server is exposed to the Internet. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  apiServerPublicEip?: boolean;
  /**
   * @remarks
   * The ID of the endpoint that is used to expose API server to the Internet.
   * 
   * @example
   * eip-wz9gtwau6b2aklgjk****
   */
  apiServerPublicEipId?: string;
  /**
   * @remarks
   * The ID of the Classic Load Balancer (CLB) instance that is used during the canary release of Istio Pilot.
   * 
   * @example
   * lb-2zesa8qs8kbkj9jkl****
   */
  canaryPilotLoadBalancerId?: string;
  /**
   * @remarks
   * The ID of the endpoint that is used to expose Istio Pilot to the Internet during canary release.
   * 
   * @example
   * eip-wz9gtwau6b2aklgjk****
   */
  canaryPilotPublicEipId?: string;
  /**
   * @remarks
   * Indicates whether Istio Pilot is exposed to the Internet. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  pilotPublicEip?: boolean;
  /**
   * @remarks
   * The ID of the endpoint that is used to expose Istio Pilot to the Internet.
   * 
   * @example
   * eip-wz9gtwau6b2aklgjk****
   */
  pilotPublicEipId?: string;
  /**
   * @remarks
   * The ID of the Classic Load Balancer (CLB) instance that is used when Istio Pilot is exposed to the Internet.
   * 
   * @example
   * lb-2zesa8qs8kbkj9jkl****
   */
  pilotPublicLoadbalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      apiServerLoadbalancerId: 'ApiServerLoadbalancerId',
      apiServerPublicEip: 'ApiServerPublicEip',
      apiServerPublicEipId: 'ApiServerPublicEipId',
      canaryPilotLoadBalancerId: 'CanaryPilotLoadBalancerId',
      canaryPilotPublicEipId: 'CanaryPilotPublicEipId',
      pilotPublicEip: 'PilotPublicEip',
      pilotPublicEipId: 'PilotPublicEipId',
      pilotPublicLoadbalancerId: 'PilotPublicLoadbalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServerLoadbalancerId: 'string',
      apiServerPublicEip: 'boolean',
      apiServerPublicEipId: 'string',
      canaryPilotLoadBalancerId: 'string',
      canaryPilotPublicEipId: 'string',
      pilotPublicEip: 'boolean',
      pilotPublicEipId: 'string',
      pilotPublicLoadbalancerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAccessLog extends $dara.Model {
  /**
   * @remarks
   * Indicates whether access log collection is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the Simple Log Service project that stores access logs.
   * 
   * @example
   * k8s-log-b7b05d08670e41ca8c8fc0b7718f*****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAudit extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an audit project exists in the ASM instance. Valid values:
   * 
   * *   `audit_project_exist`: An audit project exists.
   * *   `audit_project_not_exist`: No audit project exists.
   * 
   * @example
   * audit_project_not_exist
   */
  auditProjectStatus?: string;
  /**
   * @remarks
   * Indicates whether mesh audit is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the Simple Log Service project that is used for mesh audit.
   * 
   * @example
   * audit-project
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigControlPlaneLogInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the collection of control plane logs is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time to live (TTL) of the collected control-plane logs. Unit: day.
   * 
   * @example
   * 30
   */
  logTTL?: number;
  /**
   * @remarks
   * The name of the Simple Log Service project that stores control plane logs.
   * 
   * @example
   * mesh-log-cbeb85a09161b4a26ab73e0ac****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigEdition extends $dara.Model {
  /**
   * @remarks
   * The version of the Istiod image.
   * 
   * @example
   * v1.9.7.1-3-gb3f1ab3c9c-pro-aliyun
   */
  istiodImageTag?: string;
  /**
   * @remarks
   * The name of the edition.
   * 
   * @example
   * Pro
   */
  name?: string;
  /**
   * @remarks
   * The version of the Istio Proxy image.
   * 
   * @example
   * v1.9.7.1-3-gb3f1ab3c9c-pro-aliyun
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAccessLogExtraConf extends $dara.Model {
  /**
   * @remarks
   * Indicates whether gateway log collection is enabled.
   * 
   * @example
   * true
   */
  gatewayEnabled?: boolean;
  /**
   * @remarks
   * The retention period for the access logs of the ingress gateway. Unit: day. The logs are collected by using Simple Log Service. For example, the value 30 indicates that the logs are retained for 30 days.
   * 
   * @example
   * 30
   */
  gatewayLifecycle?: number;
  /**
   * @remarks
   * Indicates whether sidecar log collection is enabled.
   * 
   * @example
   * true
   */
  sidecarEnabled?: boolean;
  /**
   * @remarks
   * The retention period for the access logs of sidecar proxies. Unit: day. The logs are collected by using Simple Log Service. For example, the value 30 indicates that the logs are retained for 30 days.
   * 
   * @example
   * 30
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressHpaCpu extends $dara.Model {
  /**
   * @remarks
   * The expected CPU utilization when HPA is enabled. Valid values: 1 to 100. If the CPU utilization exceeds this value, the number of pod replicas increases. If the CPU utilization is less than this value, the number of pod replicas decreases.
   * 
   * @example
   * 80
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressHpaMemory extends $dara.Model {
  /**
   * @remarks
   * The expected memory usage when HPA is enabled. Valid values: 1 to 100. If the memory usage exceeds this value, the number of pod replicas increases. If the memory usage is less than this value, the number of pod replicas decreases.
   * 
   * @example
   * 80
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressResources extends $dara.Model {
  /**
   * @remarks
   * The resources that are available to the egress gateway.
   * 
   * @example
   * {"cpu":"200m", "memory": "512Mi"}
   */
  limits?: { [key: string]: any };
  /**
   * @remarks
   * The resources that are requested by the egress gateway.
   * 
   * @example
   * {"cpu":"100m", "memory": "256Mi"}
   */
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

  validate() {
    if(this.limits) {
      $dara.Model.validateMap(this.limits);
    }
    if(this.requests) {
      $dara.Model.validateMap(this.requests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Horizontal Pod Autoscaling (HPA) is enabled for the egress gateway.
   * 
   * @example
   * true
   */
  egressAutoscaleEnabled?: boolean;
  /**
   * @remarks
   * The CPU resource configurations of the egress gateway when HPA is enabled.
   */
  egressHpaCpu?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressHpaCpu;
  /**
   * @remarks
   * The memory resource configurations of the egress gateway when HPA is enabled.
   */
  egressHpaMemory?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressHpaMemory;
  /**
   * @remarks
   * The maximum number of egress gateway pod replicas when HPA is enabled.
   * 
   * @example
   * 2
   */
  egressMaxReplica?: number;
  /**
   * @remarks
   * The minimum number of egress gateway pod replicas when HPA is enabled.
   * 
   * @example
   * 1
   */
  egressMinReplica?: number;
  /**
   * @remarks
   * The number of the egress gateway pod replicas.
   * 
   * @example
   * 2
   */
  egressReplicaCount?: number;
  /**
   * @remarks
   * The resource configurations of the egress gateway that is used by adaptive xDS optimization.
   */
  egressResources?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfigurationEgressResources;
  /**
   * @remarks
   * Indicates whether adaptive xDS optimization is enabled.
   * 
   * @example
   * true
   */
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

  validate() {
    if(this.egressHpaCpu && typeof (this.egressHpaCpu as any).validate === 'function') {
      (this.egressHpaCpu as any).validate();
    }
    if(this.egressHpaMemory && typeof (this.egressHpaMemory as any).validate === 'function') {
      (this.egressHpaMemory as any).validate();
    }
    if(this.egressResources && typeof (this.egressResources as any).validate === 'function') {
      (this.egressResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAutoDiagnosis extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic diagnostics is enabled for the ASM instance. If you enable this feature, the ASM instance is automatically diagnosed 5 minutes after you modify an Istio resource.
   * 
   * @example
   * true
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationCRAggregationConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Istio resources can be accessed by using the Kubernetes API on the data plane.
   * 
   * @example
   * true
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationIstioCRHistory extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the rollback feature for Istio resources is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationIstiodExtraConfiguration extends $dara.Model {
  /**
   * @remarks
   * The labels for isolated workloads.
   * 
   * @example
   * name=xx,region=xx
   */
  labelsForOffloadedWorkloads?: string;
  /**
   * @example
   * false
   */
  pilotEnableQuicListeners?: boolean;
  static names(): { [key: string]: string } {
    return {
      labelsForOffloadedWorkloads: 'LabelsForOffloadedWorkloads',
      pilotEnableQuicListeners: 'PilotEnableQuicListeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelsForOffloadedWorkloads: 'string',
      pilotEnableQuicListeners: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartExec extends $dara.Model {
  /**
   * @remarks
   * The executed commands. The value is a string that consists of JSON arrays.
   */
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

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartHttpGetHttpHeaders extends $dara.Model {
  /**
   * @remarks
   * The name of the HTTP request header.
   * 
   * @example
   * key
   */
  name?: string;
  /**
   * @remarks
   * The value of the HTTP request header.
   * 
   * @example
   * value
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartHttpGet extends $dara.Model {
  /**
   * @remarks
   * The URL of the request.
   * 
   * @example
   * 127.xx.xx.1
   */
  host?: string;
  /**
   * @remarks
   * The HTTP request headers.
   */
  httpHeaders?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartHttpGetHttpHeaders[];
  /**
   * @remarks
   * The port number of the request.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The request method. Valid values: `http` and `https`.
   * 
   * @example
   * http
   */
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

  validate() {
    if(Array.isArray(this.httpHeaders)) {
      $dara.Model.validateArray(this.httpHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartTcpSocket extends $dara.Model {
  /**
   * @remarks
   * The URL of the TCP socket request.
   * 
   * @example
   * 127.xx.xx.1
   */
  host?: string;
  /**
   * @remarks
   * The port number of the TCP socket request.
   * 
   * @example
   * 888
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStart extends $dara.Model {
  /**
   * @remarks
   * The post-start script.
   */
  exec?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartExec;
  /**
   * @remarks
   * The HTTP GET request that is sent before the instance stops.
   */
  httpGet?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStartHttpGet;
  /**
   * @remarks
   * The TCP socket request that is sent.
   */
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

  validate() {
    if(this.exec && typeof (this.exec as any).validate === 'function') {
      (this.exec as any).validate();
    }
    if(this.httpGet && typeof (this.httpGet as any).validate === 'function') {
      (this.httpGet as any).validate();
    }
    if(this.tcpSocket && typeof (this.tcpSocket as any).validate === 'function') {
      (this.tcpSocket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopExec extends $dara.Model {
  /**
   * @remarks
   * The executed commands. The value is a string that consists of JSON arrays.
   */
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

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopHttpGetHttpHeaders extends $dara.Model {
  /**
   * @remarks
   * The name of the HTTP request header.
   * 
   * @example
   * key
   */
  name?: string;
  /**
   * @remarks
   * The value of the HTTP request header.
   * 
   * @example
   * value
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopHttpGet extends $dara.Model {
  /**
   * @remarks
   * The URL of the request.
   * 
   * @example
   * 127.xx.xx.1
   */
  host?: string;
  /**
   * @remarks
   * The HTTP request headers.
   */
  httpHeaders?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopHttpGetHttpHeaders[];
  /**
   * @remarks
   * The port number of the request.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The request method. Valid values: `http` and `https`.
   * 
   * @example
   * http
   */
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

  validate() {
    if(Array.isArray(this.httpHeaders)) {
      $dara.Model.validateArray(this.httpHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopTcpSocket extends $dara.Model {
  /**
   * @remarks
   * The URL of the request.
   * 
   * @example
   * 127.xx.xx.1
   */
  host?: string;
  /**
   * @remarks
   * The port number of the request.
   * 
   * @example
   * 888
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStop extends $dara.Model {
  /**
   * @remarks
   * The pre-close script.
   */
  exec?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopExec;
  /**
   * @remarks
   * The HTTP GET request that is sent before the instance stops.
   */
  httpGet?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePreStopHttpGet;
  /**
   * @remarks
   * The TCP socket request that is sent.
   */
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

  validate() {
    if(this.exec && typeof (this.exec as any).validate === 'function') {
      (this.exec as any).validate();
    }
    if(this.httpGet && typeof (this.httpGet as any).validate === 'function') {
      (this.httpGet as any).validate();
    }
    if(this.tcpSocket && typeof (this.tcpSocket as any).validate === 'function') {
      (this.tcpSocket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecycle extends $dara.Model {
  /**
   * @remarks
   * The post-start parameters.
   */
  postStart?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecyclePostStart;
  /**
   * @remarks
   * The pre-close parameters.
   */
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

  validate() {
    if(this.postStart && typeof (this.postStart as any).validate === 'function') {
      (this.postStart as any).validate();
    }
    if(this.preStop && typeof (this.preStop as any).validate === 'function') {
      (this.preStop as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationMultiBuffer extends $dara.Model {
  /**
   * @remarks
   * Indicates whether MultiBuffer-based TLS acceleration is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The pull-request latency.
   * 
   * @example
   * 0.02s
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationNFDConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether NFD is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether feature labels on nodes are cleared when NFD is disabled.
   * 
   * @example
   * true
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationOPAScopeInjection extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the feature of controlling the OPA injection scope is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationPlayground extends $dara.Model {
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationSidecarProxyInitResourceLimit extends $dara.Model {
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the istio-init container.
   * 
   * @example
   * 2000m
   */
  resourceCPULimit?: string;
  /**
   * @remarks
   * The maximum size of the memory that is available to the istio-init container.
   * 
   * @example
   * 1024Mi
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationSidecarProxyInitResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores that are requested by the istio-init container.
   * 
   * @example
   * 10m
   */
  resourceCPURequest?: string;
  /**
   * @remarks
   * The size of the memory that is requested by the istio-init container.
   * 
   * @example
   * 10Mi
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfiguration extends $dara.Model {
  /**
   * @remarks
   * The configurations of additional features for access log collection.
   */
  accessLogExtraConf?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAccessLogExtraConf;
  /**
   * @remarks
   * The configurations of adaptive xDS optimization.
   */
  adaptiveXdsConfiguration?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAdaptiveXdsConfiguration;
  /**
   * @remarks
   * The configurations of automatic diagnostics for the ASM instance.
   */
  autoDiagnosis?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationAutoDiagnosis;
  /**
   * @remarks
   * Access to Istio resources by using the Kubernetes API on the data plane.
   */
  CRAggregationConfiguration?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationCRAggregationConfiguration;
  /**
   * @remarks
   * Indicates whether the Kubernetes API of clusters on the data plane can be used to access Istio resources. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  CRAggregationEnabled?: boolean;
  /**
   * @remarks
   * The label selectors used to specify the namespaces of the clusters on the data plane. The control plane discovers and processes only application services in the specified namespaces.
   */
  discoverySelectors?: { [key: string]: any }[];
  /**
   * @remarks
   * The configurations of the rollback feature for Istio resources.
   */
  istioCRHistory?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationIstioCRHistory;
  /**
   * @remarks
   * Additional configurations for Istiod.
   */
  istiodExtraConfiguration?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationIstiodExtraConfiguration;
  /**
   * @remarks
   * The lifecycle of Istio Proxy.
   */
  lifecycle?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecycle;
  /**
   * @remarks
   * The information about Transport Layer Security (TLS) acceleration based on MultiBuffer.
   */
  multiBuffer?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationMultiBuffer;
  /**
   * @remarks
   * The configurations of Node Feature Discovery (NFD).
   */
  NFDConfiguration?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationNFDConfiguration;
  /**
   * @remarks
   * The configurations of the feature of controlling the OPA injection scope.
   */
  OPAScopeInjection?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationOPAScopeInjection;
  playground?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationPlayground;
  /**
   * @remarks
   * The resource limits on the istio-init container.
   */
  sidecarProxyInitResourceLimit?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationSidecarProxyInitResourceLimit;
  /**
   * @remarks
   * The resources that are required by the istio-init container.
   */
  sidecarProxyInitResourceRequest?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationSidecarProxyInitResourceRequest;
  /**
   * @remarks
   * The maximum period of time that Istio Proxy waits for a request to end.
   * 
   * @example
   * 5s
   */
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
      istiodExtraConfiguration: 'IstiodExtraConfiguration',
      lifecycle: 'Lifecycle',
      multiBuffer: 'MultiBuffer',
      NFDConfiguration: 'NFDConfiguration',
      OPAScopeInjection: 'OPAScopeInjection',
      playground: 'Playground',
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
      istiodExtraConfiguration: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationIstiodExtraConfiguration,
      lifecycle: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationLifecycle,
      multiBuffer: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationMultiBuffer,
      NFDConfiguration: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationNFDConfiguration,
      OPAScopeInjection: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationOPAScopeInjection,
      playground: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationPlayground,
      sidecarProxyInitResourceLimit: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationSidecarProxyInitResourceLimit,
      sidecarProxyInitResourceRequest: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfigurationSidecarProxyInitResourceRequest,
      terminationDrainDuration: 'string',
    };
  }

  validate() {
    if(this.accessLogExtraConf && typeof (this.accessLogExtraConf as any).validate === 'function') {
      (this.accessLogExtraConf as any).validate();
    }
    if(this.adaptiveXdsConfiguration && typeof (this.adaptiveXdsConfiguration as any).validate === 'function') {
      (this.adaptiveXdsConfiguration as any).validate();
    }
    if(this.autoDiagnosis && typeof (this.autoDiagnosis as any).validate === 'function') {
      (this.autoDiagnosis as any).validate();
    }
    if(this.CRAggregationConfiguration && typeof (this.CRAggregationConfiguration as any).validate === 'function') {
      (this.CRAggregationConfiguration as any).validate();
    }
    if(Array.isArray(this.discoverySelectors)) {
      $dara.Model.validateArray(this.discoverySelectors);
    }
    if(this.istioCRHistory && typeof (this.istioCRHistory as any).validate === 'function') {
      (this.istioCRHistory as any).validate();
    }
    if(this.istiodExtraConfiguration && typeof (this.istiodExtraConfiguration as any).validate === 'function') {
      (this.istiodExtraConfiguration as any).validate();
    }
    if(this.lifecycle && typeof (this.lifecycle as any).validate === 'function') {
      (this.lifecycle as any).validate();
    }
    if(this.multiBuffer && typeof (this.multiBuffer as any).validate === 'function') {
      (this.multiBuffer as any).validate();
    }
    if(this.NFDConfiguration && typeof (this.NFDConfiguration as any).validate === 'function') {
      (this.NFDConfiguration as any).validate();
    }
    if(this.OPAScopeInjection && typeof (this.OPAScopeInjection as any).validate === 'function') {
      (this.OPAScopeInjection as any).validate();
    }
    if(this.playground && typeof (this.playground as any).validate === 'function') {
      (this.playground as any).validate();
    }
    if(this.sidecarProxyInitResourceLimit && typeof (this.sidecarProxyInitResourceLimit as any).validate === 'function') {
      (this.sidecarProxyInitResourceLimit as any).validate();
    }
    if(this.sidecarProxyInitResourceRequest && typeof (this.sidecarProxyInitResourceRequest as any).validate === 'function') {
      (this.sidecarProxyInitResourceRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigK8sNewAPIsSupport extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Gateway API is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigKiali extends $dara.Model {
  /**
   * @remarks
   * Indicates whether mesh topology is enabled. Mesh topology can be enabled only when Prometheus monitoring is enabled. If Prometheus monitoring is disabled, you must set this parameter to `false`.`` Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The endpoint of the mesh topology service.
   * 
   * @example
   * http://``1.2.**.**``:20001
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigLocalityLB extends $dara.Model {
  /**
   * @remarks
   * The configurations of cross-region traffic distribution.
   * 
   * >  Either `Failover` or Distribute can be set. If you set `Distribute`, you cannot set Failover.
   * 
   * @example
   * [{"from":"cn-shanghai","to":{"cn-hangzhou/*":50,"cn-shanghai/*":25,"cn-zhangjiakou/*":25}},{"from":"cn-hangzhou","to":{"cn-hangzhou/*":50,"cn-shanghai/*":25,"cn-zhangjiakou/*":25}}]
   */
  distribute?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether cross-region load balancing is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The configurations of cross-region failover.
   * 
   * >  Either Failover or `Distribute` can be set. If you set `Failover`, you cannot set `Distribute`.
   * 
   * @example
   * {"failover":[{"from":"cn-hangzhou","to":"cn-shanghai"}]}
   */
  failover?: { [key: string]: any };
  failoverPriority?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      distribute: 'Distribute',
      enabled: 'Enabled',
      failover: 'Failover',
      failoverPriority: 'FailoverPriority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distribute: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enabled: 'boolean',
      failover: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      failoverPriority: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.distribute) {
      $dara.Model.validateMap(this.distribute);
    }
    if(this.failover) {
      $dara.Model.validateMap(this.failover);
    }
    if(this.failoverPriority) {
      $dara.Model.validateMap(this.failoverPriority);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigMSE extends $dara.Model {
  /**
   * @remarks
   * Indicates whether MSE is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigOPA extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the OPA plug-in is installed. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the OPA proxy container.
   * 
   * @example
   * 1
   */
  limitCPU?: string;
  /**
   * @remarks
   * The maximum size of the memory that is available to the OPA proxy container.
   * 
   * @example
   * 512Mi
   */
  limitMemory?: string;
  /**
   * @remarks
   * The level of the logs to be generated for OPA.
   * 
   * @example
   * info
   */
  logLevel?: string;
  /**
   * @remarks
   * The number of CPU cores that are requested by the OPA proxy container.
   * 
   * @example
   * 2
   */
  requestCPU?: string;
  /**
   * @remarks
   * The size of the memory that is requested by OPA.
   * 
   * @example
   * 1024Mi
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilotConfigSource extends $dara.Model {
  /**
   * @remarks
   * Indicates whether communication is allowed between external services and services in the mesh. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the Nacos instance that provides external service information.
   * 
   * @example
   * mse-cn-tl326******
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilotFeature extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Secret Discovery Service (SDS) is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  enableSDSServer?: boolean;
  /**
   * @remarks
   * Indicates whether gateway configuration filtering is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilot extends $dara.Model {
  /**
   * @remarks
   * The configurations of communication between external services and services in the mesh.
   */
  configSource?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilotConfigSource;
  /**
   * @remarks
   * The configurations of Pilot features.
   */
  feature?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilotFeature;
  /**
   * @remarks
   * Indicates whether HTTP/1.0 is supported. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  http10Enabled?: boolean;
  /**
   * @remarks
   * The sampling percentage of tracing analysis.
   * 
   * @example
   * 100
   */
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

  validate() {
    if(this.configSource && typeof (this.configSource as any).validate === 'function') {
      (this.configSource as any).validate();
    }
    if(this.feature && typeof (this.feature as any).validate === 'function') {
      (this.feature as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPrometheus extends $dara.Model {
  /**
   * @remarks
   * The endpoint of Prometheus monitoring. If you use a custom Prometheus instance, this parameter is populated by the system.
   * 
   * @example
   * http://prometheus:9090
   */
  externalUrl?: string;
  /**
   * @remarks
   * Indicates whether a custom Prometheus instance is used. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProtocolSupport extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Dubbo Filter is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  dubboFilterEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether MySQL Filter is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  mysqlFilterEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether Redis Filter is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  redisFilterEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether Thrift Filter is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProxy extends $dara.Model {
  /**
   * @remarks
   * The path to the file that stores the access logs of sidecar proxies.
   * 
   * @example
   * /dev/stdout
   */
  accessLogFile?: string;
  /**
   * @remarks
   * The format of the access logs of sidecar proxies.
   * 
   * @example
   * {"authority_for":"%REQ(:AUTHORITY)%","bytes_received":"%BYTES_RECEIVED%","bytes_sent":"%BYTES_SENT%","downstream_local_address":"%DOWNSTREAM_LOCAL_ADDRESS%","downstream_remote_address":"%DOWNSTREAM_REMOTE_ADDRESS%","duration":"%DURATION%","istio_policy_status":"%DYNAMIC_METADATA(istio.mixer:status)%","method":"%REQ(:METHOD)%","path":"%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%","protocol":"%PROTOCOL%","request_id":"%REQ(X-REQUEST-ID)%","requested_server_name":"%REQUESTED_SERVER_NAME%","response_code":"%RESPONSE_CODE%","response_flags":"%RESPONSE_FLAGS%","route_name":"%ROUTE_NAME%","start_time":"%START_TIME%","trace_id":"%REQ(X-B3-TRACEID)%","upstream_cluster":"%UPSTREAM_CLUSTER%","upstream_host":"%UPSTREAM_HOST%","upstream_local_address":"%UPSTREAM_LOCAL_ADDRESS%","upstream_service_time":"%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%","upstream_transport_failure_reason":"%UPSTREAM_TRANSPORT_FAILURE_REASON%","user_agent":"%REQ(USER-AGENT)%","x_forwarded_for":"%REQ(X-FORWARDED-FOR)%"}
   */
  accessLogFormat?: string;
  /**
   * @remarks
   * Indicates whether gRPC Access Log Service (ALS) for Envoy is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  accessLogServiceEnabled?: boolean;
  /**
   * @remarks
   * The endpoint of gRPC ALS for Envoy.
   * 
   * @example
   * 0.0.0.0
   */
  accessLogServiceHost?: string;
  /**
   * @remarks
   * The port of gRPC ALS for Envoy.
   * 
   * @example
   * 9999
   */
  accessLogServicePort?: number;
  /**
   * @remarks
   * The trusted domain.
   * 
   * @example
   * cluster.domain
   */
  clusterDomain?: string;
  /**
   * @remarks
   * Indicates whether the Domain Name System (DNS) proxy feature is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  enableDNSProxying?: boolean;
  /**
   * @remarks
   * The maximum number of CPU cores.
   * 
   * @example
   * 2000m
   */
  limitCPU?: string;
  /**
   * @remarks
   * The maximum size of the memory.
   * 
   * @example
   * 1024Mi
   */
  limitMemory?: string;
  /**
   * @remarks
   * The number of CPU cores that are requested.
   * 
   * @example
   * 100m
   */
  requestCPU?: string;
  /**
   * @remarks
   * The size of the memory that is requested.
   * 
   * @example
   * 128Mi
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjectorInitCNIConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the CNI plug-in is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The namespaces to exclude. The CNI plug-in ignores pods in the excluded namespaces.
   * 
   * @example
   * kube-system,istio-system
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjector extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic sidecar proxy injection can be enabled by using pod annotations. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  autoInjectionPolicyEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether automatic sidecar proxy injection is enabled for all namespaces. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  enableNamespacesByDefault?: boolean;
  /**
   * @remarks
   * The configurations of Container Network Interface (CNI).
   */
  initCNIConfiguration?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjectorInitCNIConfiguration;
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the pod where the sidecar injector resides.
   * 
   * @example
   * 4000m
   */
  limitCPU?: string;
  /**
   * @remarks
   * The maximum size of the memory that is available to the pod where the sidecar injector resides.
   * 
   * @example
   * 2048Mi
   */
  limitMemory?: string;
  /**
   * @remarks
   * The number of CPU cores that are requested by the pod where the sidecar injector resides.
   * 
   * @example
   * 1000m
   */
  requestCPU?: string;
  /**
   * @remarks
   * The size of the memory that is requested by the pod where the sidecar injector resides.
   * 
   * @example
   * 512Mi
   */
  requestMemory?: string;
  /**
   * @remarks
   * The number of component replicas that are used for sidecar proxy injection. Default value: `1`.
   * 
   * @example
   * 1
   */
  sidecarInjectorNum?: number;
  /**
   * @remarks
   * Other configurations of automatic sidecar proxy injection, in the YAML format. For more information, see [Enable automatic sidecar proxy injection](https://help.aliyun.com/document_detail/186136.html).
   * 
   * @example
   * {"injectedAnnotations":{"test/istio-init":"runtime/default2","test/istio-proxy":"runtime/default"},"replicaCount":2,"nodeSelector":{"beta.kubernetes.io/os":"linux"}}
   */
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

  validate() {
    if(this.initCNIConfiguration && typeof (this.initCNIConfiguration as any).validate === 'function') {
      (this.initCNIConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigWebAssemblyFilterDeployment extends $dara.Model {
  /**
   * @remarks
   * Indicates whether WebAssembly Filter is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfig extends $dara.Model {
  /**
   * @remarks
   * The configurations of access log collection.
   */
  accessLog?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAccessLog;
  /**
   * @remarks
   * The information about mesh audit.
   */
  audit?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigAudit;
  /**
   * @remarks
   * The configurations of control-plane log collection.
   */
  controlPlaneLogInfo?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigControlPlaneLogInfo;
  /**
   * @remarks
   * Indicates whether a custom Zipkin system is used. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  customizedZipkin?: boolean;
  /**
   * @remarks
   * The information about the edition.
   */
  edition?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigEdition;
  /**
   * @remarks
   * Indicates whether the feature that routes traffic to the nearest instance is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  enableLocalityLB?: boolean;
  /**
   * @remarks
   * The IP ranges in CIDR form to be excluded from redirection to sidecar proxies in the ASM instance.
   * 
   * @example
   * 172.16.0.0
   */
  excludeIPRanges?: string;
  /**
   * @remarks
   * The inbound ports to be excluded from redirection to sidecar proxies in the ASM instance.
   * 
   * @example
   * 80,81
   */
  excludeInboundPorts?: string;
  /**
   * @remarks
   * The outbound ports to be excluded from redirection to sidecar proxies in the ASM instance.
   * 
   * @example
   * 80,81
   */
  excludeOutboundPorts?: string;
  /**
   * @remarks
   * The configurations of additional features for the ASM instance.
   */
  extraConfiguration?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigExtraConfiguration;
  /**
   * @remarks
   * The IP ranges in CIDR form to redirect to the sidecar proxies in the ASM instance.
   * 
   * @example
   * 192.168.0.0/16
   */
  includeIPRanges?: string;
  /**
   * @remarks
   * The information about the Kubernetes API.
   */
  k8sNewAPIsSupport?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigK8sNewAPIsSupport;
  /**
   * @remarks
   * The configurations of mesh topology.
   */
  kiali?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigKiali;
  /**
   * @remarks
   * The configurations of cross-region load balancing.
   */
  localityLB?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigLocalityLB;
  /**
   * @remarks
   * The configurations of Microservices Engine (MSE).
   */
  MSE?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigMSE;
  /**
   * @remarks
   * The information about the Open Policy Agent (OPA) plug-in.
   */
  OPA?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigOPA;
  /**
   * @remarks
   * The outbound traffic policy. Valid values:
   * 
   * *   `ALLOW_ANY`: Outbound traffic to all external services is allowed.
   * *   `REGISTRY_ONLY`: Outbound traffic is allowed to only external services that are defined in the service registry of the ASM instance.
   * 
   * @example
   * ALLOW_ANY
   */
  outboundTrafficPolicy?: string;
  /**
   * @remarks
   * The Pilot configurations.
   */
  pilot?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPilot;
  /**
   * @remarks
   * The configurations of Prometheus monitoring.
   */
  prometheus?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigPrometheus;
  /**
   * @remarks
   * The configurations of protocol support.
   */
  protocolSupport?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProtocolSupport;
  /**
   * @remarks
   * The proxy configurations.
   */
  proxy?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigProxy;
  /**
   * @remarks
   * The configurations of the sidecar injector.
   */
  sidecarInjector?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfigSidecarInjector;
  /**
   * @remarks
   * Indicates whether Prometheus monitoring is enabled. We recommend that you use [Managed Service for Prometheus](https://arms.console.aliyun.com/). Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  telemetry?: boolean;
  /**
   * @remarks
   * Indicates whether tracing analysis is enabled. This feature can be enabled only after [Managed Service for OpenTelemetry](https://tracing-analysis.console.aliyun.com/) is activated. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  tracing?: boolean;
  /**
   * @remarks
   * The configurations of WebAssembly Filter.
   */
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

  validate() {
    if(this.accessLog && typeof (this.accessLog as any).validate === 'function') {
      (this.accessLog as any).validate();
    }
    if(this.audit && typeof (this.audit as any).validate === 'function') {
      (this.audit as any).validate();
    }
    if(this.controlPlaneLogInfo && typeof (this.controlPlaneLogInfo as any).validate === 'function') {
      (this.controlPlaneLogInfo as any).validate();
    }
    if(this.edition && typeof (this.edition as any).validate === 'function') {
      (this.edition as any).validate();
    }
    if(this.extraConfiguration && typeof (this.extraConfiguration as any).validate === 'function') {
      (this.extraConfiguration as any).validate();
    }
    if(this.k8sNewAPIsSupport && typeof (this.k8sNewAPIsSupport as any).validate === 'function') {
      (this.k8sNewAPIsSupport as any).validate();
    }
    if(this.kiali && typeof (this.kiali as any).validate === 'function') {
      (this.kiali as any).validate();
    }
    if(this.localityLB && typeof (this.localityLB as any).validate === 'function') {
      (this.localityLB as any).validate();
    }
    if(this.MSE && typeof (this.MSE as any).validate === 'function') {
      (this.MSE as any).validate();
    }
    if(this.OPA && typeof (this.OPA as any).validate === 'function') {
      (this.OPA as any).validate();
    }
    if(this.pilot && typeof (this.pilot as any).validate === 'function') {
      (this.pilot as any).validate();
    }
    if(this.prometheus && typeof (this.prometheus as any).validate === 'function') {
      (this.prometheus as any).validate();
    }
    if(this.protocolSupport && typeof (this.protocolSupport as any).validate === 'function') {
      (this.protocolSupport as any).validate();
    }
    if(this.proxy && typeof (this.proxy as any).validate === 'function') {
      (this.proxy as any).validate();
    }
    if(this.sidecarInjector && typeof (this.sidecarInjector as any).validate === 'function') {
      (this.sidecarInjector as any).validate();
    }
    if(this.webAssemblyFilterDeployment && typeof (this.webAssemblyFilterDeployment as any).validate === 'function') {
      (this.webAssemblyFilterDeployment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpecNetwork extends $dara.Model {
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-2ze384sxttxbctnj****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The virtual switches (vSwitches).
   */
  vSwitches?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-2zew0rajjkmxy2369****
   */
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

  validate() {
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMeshSpec extends $dara.Model {
  /**
   * @remarks
   * The information about the load balancer.
   */
  loadBalancer?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecLoadBalancer;
  /**
   * @remarks
   * The configurations of the ASM instance.
   */
  meshConfig?: DescribeServiceMeshDetailResponseBodyServiceMeshSpecMeshConfig;
  /**
   * @remarks
   * The network configurations of the ASM instance.
   */
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

  validate() {
    if(this.loadBalancer && typeof (this.loadBalancer as any).validate === 'function') {
      (this.loadBalancer as any).validate();
    }
    if(this.meshConfig && typeof (this.meshConfig as any).validate === 'function') {
      (this.meshConfig as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBodyServiceMesh extends $dara.Model {
  /**
   * @remarks
   * The specification of the ASM instance. Valid values:
   * 
   * *   `standard`: Standard Edition
   * *   `enterprise`: Enterprise Edition
   * *   `ultimate`: Ultimate Edition
   * 
   * @example
   * standard
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The clusters.
   */
  clusters?: string[];
  /**
   * @remarks
   * The endpoints of the ASM instance.
   */
  endpoints?: DescribeServiceMeshDetailResponseBodyServiceMeshEndpoints;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service instance for which the ASM instance is created.
   * 
   * @example
   * cc3e96f249d124eb38b72718ec5*****
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud service for which the ASM instance is created. Valid values:
   * 
   * *   `ackone`: The ASM instance is created for Alibaba Cloud Distributed Cloud Container Platform (ACK One).
   * *   An empty value indicates that the ASM instance is created by the user.
   * 
   * @example
   * ackone
   */
  ownerType?: string;
  /**
   * @remarks
   * The basic information about the ASM instance.
   */
  serviceMeshInfo?: DescribeServiceMeshDetailResponseBodyServiceMeshServiceMeshInfo;
  /**
   * @remarks
   * The specifications of the ASM instance.
   */
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

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    if(this.endpoints && typeof (this.endpoints as any).validate === 'function') {
      (this.endpoints as any).validate();
    }
    if(this.serviceMeshInfo && typeof (this.serviceMeshInfo as any).validate === 'function') {
      (this.serviceMeshInfo as any).validate();
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11fd0027-c27e-41bb-a565-75583054****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the ASM instance.
   */
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

  validate() {
    if(this.serviceMesh && typeof (this.serviceMesh as any).validate === 'function') {
      (this.serviceMesh as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

