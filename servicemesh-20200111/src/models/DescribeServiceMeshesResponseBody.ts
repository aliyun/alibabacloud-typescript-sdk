// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceMeshesResponseBodyServiceMeshesEndpoints extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is used to access the API server over the internal network.
   * 
   * @example
   * https://192.168.xx.xx:6443
   */
  intranetApiServerEndpoint?: string;
  /**
   * @remarks
   * The endpoint that is used to access Istio Pilot from the internal network.
   * 
   * @example
   * 192.168.xx.xx:15011
   */
  intranetPilotEndpoint?: string;
  /**
   * @remarks
   * The endpoint that is used to access the API server over the Internet.
   * 
   * @example
   * https://123.56.xx.xx:6443
   */
  publicApiServerEndpoint?: string;
  /**
   * @remarks
   * The public endpoint of the Pilot of the ASM instance.
   * 
   * @example
   * xx.xx.xx.xx
   */
  publicPilotEndpoint?: string;
  /**
   * @remarks
   * The endpoint of the reverse tunnel (Deprecated).
   * 
   * @example
   * none
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesServiceMeshInfo extends $dara.Model {
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
   * test
   */
  name?: string;
  /**
   * @remarks
   * The edition of the ASM instance before ASM is available for commercial use. Valid values:
   * 
   * *   `Pro`: Professional Edition
   * *   `Default`: Standard Edition
   * 
   * @example
   * Pro
   */
  profile?: string;
  /**
   * @remarks
   * The region ID of the ASM instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the ASM instance.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * The state of the ASM instance.
   * 
   * @example
   * success
   */
  state?: string;
  /**
   * @remarks
   * The time when the ASM instance was last modified.
   * 
   * @example
   * 2020-04-21T09:42:20+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The version number of the ASM instance.
   * 
   * @example
   * 1
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

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecLoadBalancer extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigExtraConfigurationPlayground extends $dara.Model {
  /**
   * @remarks
   * The ID of the ASM Playground scenario.
   * 
   * @example
   * ewmaLb
   */
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

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigExtraConfiguration extends $dara.Model {
  /**
   * @remarks
   * The configurations of the ASM Playground (valid only for ASM Playground instances).
   */
  playground?: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigExtraConfigurationPlayground;
  static names(): { [key: string]: string } {
    return {
      playground: 'Playground',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playground: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigExtraConfigurationPlayground,
    };
  }

  validate() {
    if(this.playground && typeof (this.playground as any).validate === 'function') {
      (this.playground as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigPilot extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the support for HTTP 1.0 is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  http10Enabled?: boolean;
  /**
   * @remarks
   * The sampling rate when Managed Service for OpenTelemetry is enabled.
   * 
   * @example
   * 0.2
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjectorInitCNIConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether elevated privileges are required for the istio-init container when you perform traffic redirection for the istio-proxy container. Valid values:
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
   * The namespaces in which the CNI plug-in does not check the pods.
   * 
   * @example
   * default,foo
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

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjector extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic sidecar proxy injection is enabled by using annotations.
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
   * The initial configurations of Container Network Interface (CNI).
   */
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

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfig extends $dara.Model {
  /**
   * @remarks
   * The extended configurations of the ASM instance.
   */
  extraConfiguration?: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigExtraConfiguration;
  /**
   * @remarks
   * Indicates whether nearby access is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  mtls?: boolean;
  /**
   * @remarks
   * The outbound traffic policy. Valid values:
   * 
   * *   `ALLOW_ANY`: Outbound traffic to an external service is allowed.
   * *   `REGISTRY_ONLY`: Outbound traffic is allowed to only external services that are defined in the service registry of the ASM instance.
   * 
   * @example
   * ALLOW_ANY
   */
  outboundTrafficPolicy?: string;
  /**
   * @remarks
   * The configurations of the control plane.
   */
  pilot?: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigPilot;
  /**
   * @remarks
   * The configurations of sidecar proxy injection.
   */
  sidecarInjector?: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjector;
  /**
   * @remarks
   * Indicates whether mutual Transport Layer Security (mTLS) is strictly enforced.
   * 
   * @example
   * true
   */
  strictMtls?: boolean;
  /**
   * @remarks
   * Indicates whether Prometheus monitoring is enabled. We recommend that you use Managed Service for Prometheus. Valid values:
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
   * Indicates whether the tracing feature is enabled. This feature can be enabled only after Managed Service for OpenTelemetry is activated. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  tracing?: boolean;
  static names(): { [key: string]: string } {
    return {
      extraConfiguration: 'ExtraConfiguration',
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
      extraConfiguration: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigExtraConfiguration,
      mtls: 'boolean',
      outboundTrafficPolicy: 'string',
      pilot: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigPilot,
      sidecarInjector: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfigSidecarInjector,
      strictMtls: 'boolean',
      telemetry: 'boolean',
      tracing: 'boolean',
    };
  }

  validate() {
    if(this.extraConfiguration && typeof (this.extraConfiguration as any).validate === 'function') {
      (this.extraConfiguration as any).validate();
    }
    if(this.pilot && typeof (this.pilot as any).validate === 'function') {
      (this.pilot as any).validate();
    }
    if(this.sidecarInjector && typeof (this.sidecarInjector as any).validate === 'function') {
      (this.sidecarInjector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshesSpecNetwork extends $dara.Model {
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-2ze384sxttxbctnj****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches.
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

export class DescribeServiceMeshesResponseBodyServiceMeshesSpec extends $dara.Model {
  /**
   * @remarks
   * The information about load balancing.
   */
  loadBalancer?: DescribeServiceMeshesResponseBodyServiceMeshesSpecLoadBalancer;
  /**
   * @remarks
   * The configurations of the ASM instance.
   */
  meshConfig?: DescribeServiceMeshesResponseBodyServiceMeshesSpecMeshConfig;
  /**
   * @remarks
   * The network configurations of the ASM instance.
   */
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

export class DescribeServiceMeshesResponseBodyServiceMeshesTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * yahaha
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBodyServiceMeshes extends $dara.Model {
  /**
   * @remarks
   * The edition of the ASM instance. Valid values:
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
   * The information about all endpoints of the ASM instance.
   */
  endpoints?: DescribeServiceMeshesResponseBodyServiceMeshesEndpoints;
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
   * The basic information about the ASM instances.
   */
  serviceMeshInfo?: DescribeServiceMeshesResponseBodyServiceMeshesServiceMeshInfo;
  /**
   * @remarks
   * The specifications of the ASM instance.
   */
  spec?: DescribeServiceMeshesResponseBodyServiceMeshesSpec;
  /**
   * @remarks
   * The details about the tags.
   */
  tag?: DescribeServiceMeshesResponseBodyServiceMeshesTag[];
  /**
   * @remarks
   * Indicates whether the ASM instance can be upgraded.
   * 
   * @example
   * false
   */
  upgradable?: boolean;
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
      upgradable: 'Upgradable',
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
      upgradable: 'boolean',
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
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the ASM instance.
   */
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

  validate() {
    if(Array.isArray(this.serviceMeshes)) {
      $dara.Model.validateArray(this.serviceMeshes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

