// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesProxyStatsMatcher extends $dara.Model {
  /**
   * @remarks
   * The prefixes of the custom Envoy statistics that are reported by the sidecar proxy.
   */
  inclusionPrefixes?: string[];
  /**
   * @remarks
   * The regular expressions for specifying the custom Envoy statistics that are reported by the sidecar proxy.
   */
  inclusionRegexps?: string[];
  /**
   * @remarks
   * The suffixes of the custom Envoy statistics that are reported by the sidecar proxy.
   */
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

  validate() {
    if(Array.isArray(this.inclusionPrefixes)) {
      $dara.Model.validateArray(this.inclusionPrefixes);
    }
    if(Array.isArray(this.inclusionRegexps)) {
      $dara.Model.validateArray(this.inclusionRegexps);
    }
    if(Array.isArray(this.inclusionSuffixes)) {
      $dara.Model.validateArray(this.inclusionSuffixes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSMCConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the SMC-R optimization feature is enabled. The SMC-R optimization feature uses Alibaba Cloud Linux 3 and elastic remote direct memory access (eRDMA) network devices, which optimizes cross-node communication.
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

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesScaledSidecarResource extends $dara.Model {
  containerRef?: string;
  resourceCalculationStrategy?: string;
  resourcePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      containerRef: 'ContainerRef',
      resourceCalculationStrategy: 'ResourceCalculationStrategy',
      resourcePercentage: 'ResourcePercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerRef: 'string',
      resourceCalculationStrategy: 'string',
      resourcePercentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyAckSloResource extends $dara.Model {
  /**
   * @remarks
   * The maximum size of reclaimed ACK resources that are available to the sidecar proxy container. This configuration item indicates the maximum size of resources that are available to the sidecar proxy container in a pod labeled with `koordinator.sh/qosClass`. The object can contain the following two types of keys, which indicate two types of resources:
   * 
   * *   `kubernetes.io/batch-cpu`: CPU resources that can be dynamically overcommitted. Unit: millicore.
   * *   `kubernetes.io/batch-memory`: memory resources that can be dynamically overcommitted.
   */
  limits?: { [key: string]: string };
  /**
   * @remarks
   * The minimum size of reclaimed ACK resources that the sidecar proxy container needs to use at runtime. This configuration item indicates the minimum size of reclaimed ACK resources for the sidecar proxy container in a pod labeled with `koordinator.sh/qosClass`. The object can contain the following two types of keys, which indicate two types of resources:
   * 
   * *   `kubernetes.io/batch-cpu`: CPU resources that can be dynamically overcommitted. Unit: millicore.
   * *   `kubernetes.io/batch-memory`: memory resources that can be dynamically overcommitted.
   */
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

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitAckSloResource extends $dara.Model {
  /**
   * @remarks
   * The maximum size of reclaimed ACK resources that are available to the istio-init container. This configuration item indicates the maximum size of resources that are available to the istio-init container in a pod labeled with `koordinator.sh/qosClass`. The object can contain the following two types of keys, which indicate two types of resources:
   * 
   * *   `kubernetes.io/batch-cpu`: CPU resources that can be dynamically overcommitted. Unit: millicore.
   * *   `kubernetes.io/batch-memory`: memory resources that can be dynamically overcommitted.
   */
  limits?: { [key: string]: string };
  /**
   * @remarks
   * The minimum size of reclaimed ACK resources that the istio-init container needs to use at runtime. This configuration item indicates the minimum size of reclaimed ACK resources for the istio-init container in a pod labeled with `koordinator.sh/qosClass`. The object can contain the following two types of keys, which indicate two types of resources:
   * 
   * *   `kubernetes.io/batch-cpu`: CPU resources that can be dynamically overcommitted. Unit: millicore.
   * *   `kubernetes.io/batch-memory`: memory resources that can be dynamically overcommitted.
   */
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

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitResourceLimit extends $dara.Model {
  /**
   * @remarks
   * The maximum number of CPU cores.
   * 
   * @example
   * 2000 m
   */
  resourceCPULimit?: string;
  /**
   * @remarks
   * The maximum size of the memory.
   * 
   * @example
   * 50 Mi
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

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum number of CPU cores.
   * 
   * @example
   * 60 m
   */
  resourceCPURequest?: string;
  /**
   * @remarks
   * The minimum size of the memory.
   * 
   * @example
   * 30 Mi
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

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyResourceLimit extends $dara.Model {
  /**
   * @remarks
   * The maximum number of CPU cores.
   * 
   * @example
   * 2000 m
   */
  resourceCPULimit?: string;
  /**
   * @remarks
   * The maximum size of the memory.
   * 
   * @example
   * 50 Mi
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

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum number of CPU cores.
   * 
   * @example
   * 60 m
   */
  resourceCPURequest?: string;
  /**
   * @remarks
   * The minimum size of the memory.
   * 
   * @example
   * 30 Mi
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

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesTracing extends $dara.Model {
  /**
   * @remarks
   * The custom tags added to reported spans. The key of a tag is of the string type. The value of a tag is in the JSON format. A custom tag can belong to one of the following types:
   * 
   * *   `literal`: The tag value is a fixed value in the JSON format. This tag must contain the `value` field that specifies a literal. Example: `{"value":"test"}`.
   * *   `header`: The tag value is a request header in the JSON format. This tag must contain the `name` field and the `defaultValue` field. The name field indicates the name of the request header. The defaultValue field indicates the default value that is used when no request header is available. Example: `{"name":"test","defaultValue":"test"}`.
   * *   `environment`: The tag value is an environment variable in the JSON format. This tag must contain the `name` field and the `defaultValue` field. The name field indicates the name of the environment variable. The defaultValue field indicates the environment variable that is used when no environment variable is available. Example: `{"name":"test","defaultValue":"test"}`.
   * 
   * @example
   * {"test":{"literal":{"value":"test"}}}
   */
  customTags?: { [key: string]: any };
  /**
   * @remarks
   * The maximum tag length.
   * 
   * @example
   * 10
   */
  maxPathTagLength?: number;
  /**
   * @remarks
   * The sampling rate.
   * 
   * @example
   * 99.8
   */
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

  validate() {
    if(this.customTags) {
      $dara.Model.validateMap(this.customTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatches extends $dara.Model {
  /**
   * @remarks
   * The number of worker threads to run in the istio-proxy container.
   * 
   * @example
   * 2
   */
  concurrency?: number;
  /**
   * @remarks
   * Indicates whether the core dump feature is enabled for the sidecar proxy containers. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  enableCoreDump?: boolean;
  /**
   * @remarks
   * The inbound ports to be excluded from redirection to the sidecar proxy in the ASM instance.
   * 
   * @example
   * 82
   */
  excludeInboundPorts?: string;
  /**
   * @remarks
   * The outbound IP ranges in CIDR form to be excluded from redirection to the sidecar proxy in the ASM instance.
   * 
   * @example
   * 192.168.1.3/31
   */
  excludeOutboundIPRanges?: string;
  /**
   * @remarks
   * The outbound ports to be excluded from redirection to the sidecar proxy in the ASM instance.
   * 
   * @example
   * 81
   */
  excludeOutboundPorts?: string;
  /**
   * @remarks
   * Indicates whether applications can be started only after the istio-proxy container starts. Valid values:
   * 
   * *   `true`: Applications can be started only after the istio-proxy container starts.
   * *   `false`: Applications can be started before the istio-proxy container starts.
   * 
   * @example
   * true
   */
  holdApplicationUntilProxyStarts?: boolean;
  /**
   * @remarks
   * The inbound ports for which traffic is to be redirected to the sidecar proxy in the ASM instance.
   * 
   * @example
   * 83
   */
  includeInboundPorts?: string;
  /**
   * @remarks
   * The outbound IP ranges in CIDR form for which traffic is to be redirected to the sidecar proxy in the ASM instance.
   * 
   * @example
   * 192.168.1.4/31
   */
  includeOutboundIPRanges?: string;
  /**
   * @remarks
   * The outbound ports for which traffic is to be redirected to the sidecar proxy in the ASM instance.
   * 
   * @example
   * 84
   */
  includeOutboundPorts?: string;
  /**
   * @remarks
   * The mode in which the sidecar proxy intercepts inbound traffic. Valid values:
   * 
   * *   `REDIRECT` (default): In this mode, source IP addresses are lost during traffic redirection to the sidecar proxy.
   * *   `TPROXY`: In this mode, both the source and destination IP addresses and ports are preserved.
   * 
   * @example
   * TPROXY
   */
  interceptionMode?: string;
  /**
   * @remarks
   * Indicates whether the Domain Name System (DNS) proxy feature is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  istioDNSProxyEnabled?: boolean;
  /**
   * @remarks
   * The JSON string that describes the lifecycle of the sidecar proxy.
   * 
   * @example
   * {"postStart":{"exec":{"command":["pilot-agent","wait"]}},"preStop":{"exec":{"command":["/bin/sh","-c","sleep 15"]}}}
   */
  lifecycleStr?: string;
  /**
   * @remarks
   * The log level. Valid values: `info`, `debug`, `trace`, and `error`.
   * 
   * @example
   * info
   */
  logLevel?: string;
  /**
   * @remarks
   * Indicates whether the privileged mode is enabled in the security context of the sidecar proxy containers. Valid values:
   * 
   * *   `true`: The privileged mode is enabled, that is, the sidecar proxy containers run in privileged mode.
   * *   `false`: The privileged mode is not enabled.
   * 
   * @example
   * false
   */
  privileged?: boolean;
  proxyMetadata?: { [key: string]: string };
  /**
   * @remarks
   * The custom Envoy statistics that are reported by the sidecar proxy.
   */
  proxyStatsMatcher?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesProxyStatsMatcher;
  /**
   * @remarks
   * The number of readiness check failures required before marking a sidecar proxy container as not ready.
   * 
   * @example
   * 5
   */
  readinessFailureThreshold?: number;
  /**
   * @remarks
   * The amount of time to wait before the first readiness check of a sidecar proxy container is performed. Unit: seconds.
   * 
   * @example
   * 2
   */
  readinessInitialDelaySeconds?: number;
  /**
   * @remarks
   * The interval between two readiness checks of a sidecar proxy container. Unit: seconds.
   * 
   * @example
   * 3
   */
  readinessPeriodSeconds?: number;
  /**
   * @remarks
   * Indicates the runtime parameters of Envoy proxy processes in the sidecar proxy container.
   */
  runtimeValues?: { [key: string]: string };
  /**
   * @remarks
   * The configurations of the Shared Memory Communications over Remote Direct Memory Access (SMC-R) optimization feature.
   */
  SMCConfiguration?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSMCConfiguration;
  scaledSidecarResource?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesScaledSidecarResource;
  /**
   * @remarks
   * The maximum size of reclaimed ACK resources that are available to the sidecar proxy container. This configuration item indicates the maximum size of resources that are available to the sidecar proxy container in a pod labeled with `koordinator.sh/qosClass`.
   */
  sidecarProxyAckSloResource?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyAckSloResource;
  /**
   * @remarks
   * The reclaimed Container Service for Kubernetes (ACK) resources for the istio-init container. This configuration item indicates the resources of the istio-init container in a pod labeled with `koordinator.sh/qosClass`. Reclaimed ACK resources are resources that can be dynamically overcommitted.
   */
  sidecarProxyInitAckSloResource?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitAckSloResource;
  /**
   * @remarks
   * The maximum size of resources that are available to the istio-init container in the pod into which the sidecar proxy is injected. The istio-init container is used in this topic.
   */
  sidecarProxyInitResourceLimit?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitResourceLimit;
  /**
   * @remarks
   * The minimum size of resources that are required by the istio-init container.
   */
  sidecarProxyInitResourceRequest?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyInitResourceRequest;
  /**
   * @remarks
   * The maximum size of resources that are available to the sidecar proxy container.
   */
  sidecarProxyResourceLimit?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyResourceLimit;
  /**
   * @remarks
   * The minimum size of resources that are required by the sidecar proxy container.
   */
  sidecarProxyResourceRequest?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSidecarProxyResourceRequest;
  /**
   * @remarks
   * The maximum period of time allowed for connections to complete on sidecar proxy shutdown.
   * 
   * @example
   * 6s
   */
  terminationDrainDuration?: string;
  /**
   * @remarks
   * The custom configurations of Tracing Analysis.
   */
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
      runtimeValues: 'RuntimeValues',
      SMCConfiguration: 'SMCConfiguration',
      scaledSidecarResource: 'ScaledSidecarResource',
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
      runtimeValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      SMCConfiguration: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesSMCConfiguration,
      scaledSidecarResource: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatchesScaledSidecarResource,
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

  validate() {
    if(this.proxyMetadata) {
      $dara.Model.validateMap(this.proxyMetadata);
    }
    if(this.proxyStatsMatcher && typeof (this.proxyStatsMatcher as any).validate === 'function') {
      (this.proxyStatsMatcher as any).validate();
    }
    if(this.runtimeValues) {
      $dara.Model.validateMap(this.runtimeValues);
    }
    if(this.SMCConfiguration && typeof (this.SMCConfiguration as any).validate === 'function') {
      (this.SMCConfiguration as any).validate();
    }
    if(this.scaledSidecarResource && typeof (this.scaledSidecarResource as any).validate === 'function') {
      (this.scaledSidecarResource as any).validate();
    }
    if(this.sidecarProxyAckSloResource && typeof (this.sidecarProxyAckSloResource as any).validate === 'function') {
      (this.sidecarProxyAckSloResource as any).validate();
    }
    if(this.sidecarProxyInitAckSloResource && typeof (this.sidecarProxyInitAckSloResource as any).validate === 'function') {
      (this.sidecarProxyInitAckSloResource as any).validate();
    }
    if(this.sidecarProxyInitResourceLimit && typeof (this.sidecarProxyInitResourceLimit as any).validate === 'function') {
      (this.sidecarProxyInitResourceLimit as any).validate();
    }
    if(this.sidecarProxyInitResourceRequest && typeof (this.sidecarProxyInitResourceRequest as any).validate === 'function') {
      (this.sidecarProxyInitResourceRequest as any).validate();
    }
    if(this.sidecarProxyResourceLimit && typeof (this.sidecarProxyResourceLimit as any).validate === 'function') {
      (this.sidecarProxyResourceLimit as any).validate();
    }
    if(this.sidecarProxyResourceRequest && typeof (this.sidecarProxyResourceRequest as any).validate === 'function') {
      (this.sidecarProxyResourceRequest as any).validate();
    }
    if(this.tracing && typeof (this.tracing as any).validate === 'function') {
      (this.tracing as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceScopeSidecarConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The namespace-level sidecar configurations.
   */
  configPatches?: DescribeNamespaceScopeSidecarConfigResponseBodyConfigPatches;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31d3a0f0-07ed-4f6e-9004-1804498c****
   */
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

  validate() {
    if(this.configPatches && typeof (this.configPatches as any).validate === 'function') {
      (this.configPatches as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

