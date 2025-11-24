// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceScopeSidecarConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The number of worker threads to run in Istio Proxy.
   * 
   * @example
   * 2
   */
  concurrency?: number;
  /**
   * @remarks
   * Specifies whether to enable the core dump feature for the sidecar proxy containers. Valid values:
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
   * The range of IP addresses that are allowed to access external services. (`global.proxy.excludelPRanges`)
   * 
   * @example
   * 172.16.0.0/12
   */
  excludeIPRanges?: string;
  /**
   * @remarks
   * The port that the inbound traffic of the sidecar proxy does not pass through.
   * 
   * @example
   * 82
   */
  excludeInboundPorts?: string;
  /**
   * @remarks
   * The port that the outbound traffic of the sidecar proxy does not pass through.
   * 
   * @example
   * 81
   */
  excludeOutboundPorts?: string;
  /**
   * @remarks
   * Specifies whether applications can be started only after Istio Proxy starts. Valid values:
   * 
   * *   `true`: Applications can be started only after Istio Proxy starts.
   * *   `false`: Applications can be started before Istio Proxy starts.
   * 
   * @example
   * true
   */
  holdApplicationUntilProxyStarts?: boolean;
  /**
   * @remarks
   * The range of IP addresses that are denied to access external services. (`global.proxy.includelPRanges`)
   * 
   * @example
   * *
   */
  includeIPRanges?: string;
  /**
   * @remarks
   * The port that the inbound traffic of the sidecar proxy passes through.
   * 
   * @example
   * 83
   */
  includeInboundPorts?: string;
  /**
   * @remarks
   * The port that the outbound traffic of the sidecar proxy passes through.
   * 
   * @example
   * 84
   */
  includeOutboundPorts?: string;
  /**
   * @remarks
   * The mode in which the sidecar proxy intercepts inbound traffic. Valid values:
   * 
   * *   `REDIRECT`: The sidecar proxy intercepts inbound traffic in the REDIRECT mode.
   * *   `TPROXY`: The sidecar proxy intercepts inbound traffic in the TPROXY mode.
   * 
   * @example
   * TPROXY
   */
  interceptionMode?: string;
  /**
   * @remarks
   * Specifies whether to enable the Domain Name System (DNS) proxy feature. Valid values:
   * 
   * *   `true`: The DNS proxy feature is enabled.
   * *   `false`: The DNS proxy feature is disabled.
   * 
   * @example
   * true
   */
  istioDNSProxyEnabled?: boolean;
  /**
   * @remarks
   * The lifecycle of the sidecar proxy.
   * 
   * @example
   * {"postStart":{"exec":{"command":["pilot-agent","wait"]}},"preStop":{"exec":{"command":["/bin/sh","-c","sleep 15"]}}}
   */
  lifecycle?: string;
  /**
   * @remarks
   * The log level. Valid values: `info`, `debug`, `tracing`, and `error`.
   * 
   * @example
   * info
   */
  logLevel?: string;
  /**
   * @remarks
   * The namespace for which you want to update the sidecar proxy configurations.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The post-start parameters of Istio Proxy.
   * 
   * @example
   * {"exec":{"command":["pilot-agent","wait"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The pre-close parameters of Istio Proxy.
   * 
   * @example
   * {"exec":{"command":["/bin/sh","-c","sleep 15"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * Specifies whether to enable the privileged mode in the security context of the sidecar proxy containers. Valid values:
   * 
   * *   `true`: enables the privileged mode. This means that the sidecar proxy containers run in privileged mode.
   * *   `false`: does not enable the privileged mode.
   * 
   * @example
   * false
   */
  privileged?: boolean;
  /**
   * @remarks
   * The maximum number of reclaimed CPU cores provided by Container Service for Kubernetes (ACK) that are available to the istio-init container. Reclaimed resources, including CPU cores and memory, are resources that can be dynamically overcommitted. This configuration item is used to set the maximum number of CPU cores that are available to the istio-init container in a pod labeled with `koordinator.sh/qosClass`. Unit: millicore.
   * 
   * @example
   * 2000
   */
  proxyInitAckSloCPUResourceLimit?: string;
  /**
   * @remarks
   * The minimum number of reclaimed CPU cores provided by ACK that the istio-init container requires at runtime. This configuration item is used to set the minimum number of reclaimed CPU cores for the istio-init container in a pod labeled with `koordinator.sh/qosClass`. Unit: millicore.
   * 
   * @example
   * 100
   */
  proxyInitAckSloCPUResourceRequest?: string;
  /**
   * @remarks
   * The maximum size of reclaimed memory resources provided by ACK that are available to the istio-init container. This configuration item is used to set the maximum size of memory that is available to the istio-init container in a pod labeled with `koordinator.sh/qosClass`.
   * 
   * @example
   * 2048Mi
   */
  proxyInitAckSloMemoryResourceLimit?: string;
  /**
   * @remarks
   * The minimum size of reclaimed memory provided by ACK that the istio-init container requires at runtime. This configuration item is used to set the minimum size of reclaimed memory for the istio-init container in a pod labeled with `koordinator.sh/qosClass`.
   * 
   * @example
   * 128Mi
   */
  proxyInitAckSloMemoryResourceRequest?: string;
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the sidecar proxy init container.
   * 
   * @example
   * 2000 m
   */
  proxyInitCPUResourceLimit?: string;
  /**
   * @remarks
   * The minimum number of CPU cores that are requested by the sidecar proxy init container.
   * 
   * @example
   * 60 m
   */
  proxyInitCPUResourceRequest?: string;
  /**
   * @remarks
   * The maximum size of memory that is available to the sidecar proxy init container.
   * 
   * @example
   * 50 Mi
   */
  proxyInitMemoryResourceLimit?: string;
  /**
   * @remarks
   * The minimum size of memory that is requested by the sidecar proxy init container.
   * 
   * @example
   * 30 Mi
   */
  proxyInitMemoryResourceRequest?: string;
  /**
   * @remarks
   * The environment variables that are added to a sidecar proxy. The environment variables are represented as JSON objects. The keys and values in the JSON objects represent the keys and values added to the environment variables of the sidecar proxy.
   * 
   * @example
   * {"EXIT_ON_ZERO_ACTIVE_CONNECTIONS":"true"}
   */
  proxyMetadata?: string;
  /**
   * @remarks
   * The monitoring metrics for data collected by Envoy proxies. The value is in the JSON format.
   * 
   * @example
   * { "inclusionPrefixes": [ "cluster.outbound", "cluster_manager", "listener_manager", "server", "cluster.xds-grpc" ], "inclusionRegexps": [ "listener.*.downstream_cx_total", "listener.*.downstream_cx_active" ] }
   */
  proxyStatsMatcher?: string;
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
   * 1
   */
  readinessInitialDelaySeconds?: number;
  /**
   * @remarks
   * The interval between two readiness checks of a sidecar proxy container. Unit: seconds.
   * 
   * @example
   * 2
   */
  readinessPeriodSeconds?: number;
  /**
   * @remarks
   * Indicates the runtime parameters of Envoy proxy processes in the sidecar proxy container. This parameter is a serialized JSON string. The keys and values of a JSON object are the keys and the values of a Envoy Runtime Parameter respectively.
   * 
   * Valid values:
   * 
   * *   global_downstream_max_connections: indicates that the limits on the number of connections from downstream to Envoy.
   * 
   * @example
   * {"overload.global_downstream_max_connections":"65536"}
   */
  runtimeValues?: string;
  /**
   * @remarks
   * Specifies whether to enable Shared Memory Communications over Remote Direct Memory Access (SMC-R) optimization. The SMC-R optimization feature uses Alibaba Cloud Linux 3 and elastic remote direct memory access (eRDMA) network devices, which optimizes cross-node communication.
   * 
   * @example
   * false
   */
  SMCEnabled?: boolean;
  scaledSidecarResourceShrink?: string;
  /**
   * @remarks
   * The ID of the ASM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ca04bc38979214bf2882be79d39b4****
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * The maximum number of reclaimed CPU cores provided by ACK that are available to the sidecar proxy container. This configuration item is used to set the maximum number of CPU cores that are available to the sidecar proxy container in a pod labeled with `koordinator.sh/qosClass`. Unit: millicore.
   * 
   * @example
   * 2000
   */
  sidecarProxyAckSloCPUResourceLimit?: string;
  /**
   * @remarks
   * The minimum number of reclaimed CPU cores provided by ACK that the sidecar proxy container requires at runtime. This configuration item is used to set the minimum number of reclaimed CPU cores for the sidecar proxy container in a pod labeled with `koordinator.sh/qosClass`. Unit: millicore.
   * 
   * @example
   * 100
   */
  sidecarProxyAckSloCPUResourceRequest?: string;
  /**
   * @remarks
   * The maximum size of reclaimed memory resources provided by ACK that are available to the sidecar proxy container. This configuration item is used to set the maximum size of memory that is available to the sidecar proxy container in a pod labeled with `koordinator.sh/qosClass`.
   * 
   * @example
   * 2048Mi
   */
  sidecarProxyAckSloMemoryResourceLimit?: string;
  /**
   * @remarks
   * The minimum size of reclaimed memory provided by ACK that the sidecar proxy container requires at runtime. This configuration item is used to set the minimum size of reclaimed memory for the sidecar proxy container in a pod labeled with `koordinator.sh/qosClass`.
   * 
   * @example
   * 128Mi
   */
  sidecarProxyAckSloMemoryResourceRequest?: string;
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the sidecar proxy container.
   * 
   * @example
   * 2000 m
   */
  sidecarProxyCPUResourceLimit?: string;
  /**
   * @remarks
   * The minimum number of CPU cores that are requested by the sidecar proxy container.
   * 
   * @example
   * 60 m
   */
  sidecarProxyCPUResourceRequest?: string;
  /**
   * @remarks
   * The maximum size of memory that is available to the sidecar proxy container.
   * 
   * @example
   * 50 Mi
   */
  sidecarProxyMemoryResourceLimit?: string;
  /**
   * @remarks
   * The minimum size of memory that is requested by the sidecar proxy container.
   * 
   * @example
   * 30 Mi
   */
  sidecarProxyMemoryResourceRequest?: string;
  /**
   * @remarks
   * The maximum period of time that the sidecar proxy waits for a request to end.
   * 
   * @example
   * 6s
   */
  terminationDrainDuration?: string;
  /**
   * @remarks
   * The custom configurations of Tracing Analysis. The configurations must be serialized into JSON strings. The configurations contain the following parameters:
   * 
   * *   `sampling`: The sampling rate, which is of the DOUBLE type.
   * 
   * *   `custom_tags`: The custom tags added to reported spans, which are of the MAP type. The key of a tag is of the string type. The value of a tag is in the JSON format. A custom tag can belong to one of the following types:
   * 
   *     *   `literal`: The tag value is a fixed value in the JSON format. This tag must contain the `value` field that specifies a literal. Example: `{"value":"test"}`.
   *     *   `header`: The tag value is a request header in the JSON format. This tag must contain the `name` field and `defaultValue` field.The name field indicates the name of the request header. The defaultValue field indicates the default value that is used when no request header is available. Example: `{"name":"test","defaultValue":"test"}`.
   *     *   `environment`: The tag value is an environment variable in the JSON format. This tag must contain the `name` field and `defaultValue` field. The name field indicates the name of the environment variable. The defaultValue field indicates the environment variable that is used when no environment variable is available. Example: `{"name":"test","defaultValue":"test"}`.
   * 
   * @example
   * {"sampling":99.8,"custom_tags":{"test":{"literal":{"value":"testnamespace"}}}}
   */
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
      runtimeValues: 'RuntimeValues',
      SMCEnabled: 'SMCEnabled',
      scaledSidecarResourceShrink: 'ScaledSidecarResource',
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
      runtimeValues: 'string',
      SMCEnabled: 'boolean',
      scaledSidecarResourceShrink: 'string',
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

