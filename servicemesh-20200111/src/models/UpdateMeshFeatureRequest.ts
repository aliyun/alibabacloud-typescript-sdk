// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMeshFeatureRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable access log collection. Valid values:
   * 
   * *   `true`: enables access log collection.
   * *   `false`: disables access log collection.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  accessLogEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable access logging. Valid values:
   * 
   * *   `""`: disables access logging.
   * *   `/dev/stdout`: enables access logging. Access logs are written to /dev/stdout.
   * 
   * @example
   * “”
   */
  accessLogFile?: string;
  /**
   * @remarks
   * The custom format of access logs. To set this parameter, make sure that you have enabled access log collection. The value must be a JSON string. The following key names must be contained: authority_for, bytes_received, bytes_sent, downstream_local_address, downstream_remote_address, duration, istio_policy_status, method, path, protocol, requested_server_name, response_code, response_flags, route_name, start_time, trace_id, upstream_cluster, upstream_host, upstream_local_address, upstream_service_time, upstream_transport_failure_reason, user_agent, and x_forwarded_for.
   * 
   * @example
   * {"authority_for":"%REQ(:AUTHORITY)%","bytes_received":"%BYTES_RECEIVED%","bytes_sent":"%BYTES_SENT%","downstream_local_address":"%DOWNSTREAM_LOCAL_ADDRESS%","downstream_remote_address":"%DOWNSTREAM_REMOTE_ADDRESS%","duration":"%DURATION%","istio_policy_status":"%DYNAMIC_METADATA(istio.mixer:status)%","method":"%REQ(:METHOD)%","path":"%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%","protocol":"%PROTOCOL%","request_id":"%REQ(X-REQUEST-ID)%","requested_server_name":"%REQUESTED_SERVER_NAME%","response_code":"%RESPONSE_CODE%","response_flags":"%RESPONSE_FLAGS%","route_name":"%ROUTE_NAME%","start_time":"%START_TIME%","trace_id":"%REQ(X-B3-TRACEID)%","upstream_cluster":"%UPSTREAM_CLUSTER%","upstream_host":"%UPSTREAM_HOST%","upstream_local_address":"%UPSTREAM_LOCAL_ADDRESS%","upstream_service_time":"%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%","upstream_transport_failure_reason":"%UPSTREAM_TRANSPORT_FAILURE_REASON%","user_agent":"%REQ(USER-AGENT)%","x_forwarded_for":"%REQ(X-FORWARDED-FOR)%"}
   */
  accessLogFormat?: string;
  /**
   * @remarks
   * Specifies whether to enable the collection of access logs of ASM gateways to Simple Log Service.
   * 
   * @example
   * false
   */
  accessLogGatewayEnabled?: boolean;
  /**
   * @remarks
   * The retention period for the access logs of the sidecar proxy. Unit: day. The logs are collected by using Log Service. For example, `30` indicates 30 days.
   * 
   * @example
   * 30
   */
  accessLogGatewayLifecycle?: number;
  /**
   * @remarks
   * The custom project on which the Log Service collects logs.
   * 
   * @example
   * mesh-log-cf245a429b6ff4b6e97f20797758e****
   */
  accessLogProject?: string;
  /**
   * @remarks
   * Specifies whether to enable gRPC Access Log Service (ALS) for Envoy. Valid values:
   * 
   * *   `true`: enables gRPC ALS for Envoy.
   * *   `false`: disables gRPC ALS for Envoy.
   * 
   * Default value: `false`.
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
   * Specifies whether to enable the collection of access logs of sidecar proxies to Simple Log Service.
   * 
   * @example
   * false
   */
  accessLogSidecarEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic diagnostics for the ASM instance. If you enable this feature, the ASM instance is automatically diagnosed when you modify Istio resources in the ASM instance.
   * 
   * @example
   * 30
   */
  accessLogSidecarLifecycle?: number;
  /**
   * @remarks
   * The name of the Log Service project that is used for mesh audit.
   * 
   * Default value: `mesh-log-{ASM instance ID}`.
   * 
   * @example
   * mesh-log-c08ba3fd1e64xxb0f8cc1ad8****
   */
  auditProject?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic sidecar proxy injection by using pod annotations. Valid values:
   * 
   * *   `true`: enables automatic sidecar proxy injection by using pod annotations.
   * *   `false`: disables automatic sidecar proxy injection by using pod annotations.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoInjectionPolicyEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Kubernetes API of clusters on the data plane to access Istio resources. To use this feature, the version of the ASM instance must be V1.9.7.93 or later.
   * 
   * @example
   * false
   */
  CRAggregationEnabled?: boolean;
  /**
   * @remarks
   * The certificate chain from the CA certificate to the root certificate. At least two certificates are included in the chain.
   * 
   * @example
   * Base64 encoded PEM cert chain.
   */
  certChain?: string;
  /**
   * @remarks
   * Specifies whether to enable the feature of controlling the OPA injection scope. Valid values:
   * 
   * *   `true`: enables the feature.
   * *   `false`: disables the feature.
   * 
   * @example
   * standard
   */
  clusterSpec?: string;
  /**
   * @remarks
   * Specifies whether to enable the Container Network Interface (CNI) plug-in. Valid values:
   * 
   * *   `true`: enables the CNI plug-in.
   * *   `false`: disables the CNI plug-in.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  cniEnabled?: boolean;
  /**
   * @remarks
   * The namespaces to be excluded for the CNI plug-in.
   * 
   * @example
   * kube-system
   */
  cniExcludeNamespaces?: string;
  /**
   * @remarks
   * Specifies whether to delay application container startup until the sidecar proxy container is started in a pod.
   * 
   * @example
   * 2
   */
  concurrency?: number;
  /**
   * @remarks
   * Specifies whether to enable the external service registry. Valid values:
   * 
   * *   `true`: enables the external service registry.
   * *   `false`: disables the external service registry.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  configSourceEnabled?: boolean;
  /**
   * @remarks
   * The instance ID of the Nacos registry.
   * 
   * @example
   * mse-cn-tl326******
   */
  configSourceNacosID?: string;
  /**
   * @remarks
   * Specifies whether to use a custom Prometheus instance. Valid values:
   * 
   * *   `true`: uses a custom Prometheus instance.
   * *   `false`: does not use a custom Prometheus instance.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  customizedPrometheus?: boolean;
  /**
   * @remarks
   * Specifies whether to use a self-managed Zipkin system to collect tracing data. Valid values:
   * 
   * *   `true`: uses a self-managed Zipkin system.
   * *   `false`: does not use a self-managed Zipkin system.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  customizedZipkin?: boolean;
  /**
   * @remarks
   * Specifies whether to enable DNS proxy. Valid values:
   * 
   * *   `true`: enables the DNS proxy feature.
   * *   `false`: disables the DNS proxy feature.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  DNSProxyingEnabled?: boolean;
  /**
   * @remarks
   * Specifies the default scheduling configurations that ASM delivers to components on the data plane. You can configure `nodeSelector` and `tolerations` in the JSON format.
   * 
   * > 
   * 
   * *   Modifying the value of this parameter is a high-risk operation. The modification will cause all components on the data plane of ASM to restart. Exercise caution before modifying the value of this parameter.
   * 
   * *   The configurations specified by this parameter do not apply to ASM gateways. You can configure gateway-specific scheduling on ASM gateways.
   * 
   * @example
   * {"tolerations":[{"key":"test-taints", "operator":"Exists", "effect":"NoSchedule"}], "nodeSelector":{"kubernetes.io/hostname":"test-nodes"}}
   */
  defaultComponentsScheduleConfig?: string;
  /**
   * @remarks
   * The label selectors used to specify the namespaces of the clusters on the data plane for selective service discovery.
   * 
   * @example
   * [{"matchExpressions":[{"key":"asm-discovery","operator":"Exists"}]}]
   */
  discoverySelectors?: string;
  /**
   * @remarks
   * Specifies whether to enable Dubbo Filter. Valid values:
   * 
   * *   `true`: enables Dubbo Filter.
   * *   `false`: disables Dubbo Filter.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  dubboFilterEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the mesh audit feature. To enable this feature, make sure that you have activated [Log Service](https://sls.console.aliyun.com/). Valid values:
   * 
   * *   `true`: enables the mesh audit feature.
   * *   `false`: disables the mesh audit feature.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  enableAudit?: boolean;
  /**
   * @remarks
   * The ports for which outbound traffic is redirected to the sidecar proxy.
   * 
   * @example
   * true
   */
  enableAutoDiagnosis?: boolean;
  /**
   * @remarks
   * Specifies the authentication token of an ARMS Prometheus instance when the Mesh Topology feature is enabled and ARMS Prometheus is used to collect monitoring metrics. The token is used to allow Mesh Topology to access the ARMS Prometheus instance. The token is in the JSON format. The key in the JSON object is the ID of the cluster on the data plane, and the value is the authentication token of the ARMS Prometheus instance deployed in the cluster.
   * 
   * @example
   * true
   */
  enableBootstrapXdsAgent?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the rollback feature for Istio resources.
   * 
   * @example
   * false
   */
  enableCRHistory?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic sidecar proxy injection for all namespaces. Valid values:
   * 
   * *   `true`: enables automatic sidecar proxy injection for all namespaces.
   * *   `false`: disables automatic sidecar proxy injection for all namespaces.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  enableNamespacesByDefault?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Secret Discovery Service (SDS). Valid values:
   * 
   * *   `true`: enables SDS.
   * *   `false`: disables SDS.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  enableSDSServer?: boolean;
  /**
   * @remarks
   * The IP addresses of external services to which traffic is not intercepted.
   * 
   * @example
   * 100.100.XXX.XXX
   */
  excludeIPRanges?: string;
  /**
   * @remarks
   * The ports for which inbound traffic is not redirected to the sidecar proxy. Separate multiple ports with commas (,).
   * 
   * @example
   * 80,81
   */
  excludeInboundPorts?: string;
  /**
   * @remarks
   * The ports for which outbound traffic is not redirected to the sidecar proxy. Separate multiple ports with commas (,).
   * 
   * @example
   * 80,81
   */
  excludeOutboundPorts?: string;
  /**
   * @remarks
   * The updated certificate authority (CA) certificate. You can modify this parameter only if you use a custom certificate when you create an ASM instance.
   * 
   * @example
   * Base64 encoded PEM certificate.
   */
  existingCaCert?: string;
  /**
   * @remarks
   * The updated CA certificate key. You can modify this parameter only if you use a custom certificate when you create an ASM instance.
   * 
   * @example
   * Base64 encoded PEM
   *  private key.
   */
  existingCaKey?: string;
  /**
   * @remarks
   * The updated root certificate. You can modify this parameter only if you use a custom certificate when you create a Service Mesh (ASM) instance.
   * 
   * @example
   * Base64 encoded PEM certificate.
   */
  existingRootCaCert?: string;
  /**
   * @remarks
   * Specifies whether to enable gateway configuration filtering. Valid values:
   * 
   * *   `true`: enables gateway configuration filtering.
   * *   `false`: disables gateway configuration filtering.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  filterGatewayClusterConfig?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Gateway API. Valid values:
   * 
   * *   `true`: enables Gateway API.
   * *   `false`: disables Gateway API.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  gatewayAPIEnabled?: boolean;
  /**
   * @remarks
   * Other metrics of the sidecar proxy on the data plane.
   * 
   * @example
   * true
   */
  holdApplicationUntilProxyStarts?: boolean;
  /**
   * @remarks
   * Specifies whether to support HTTP 1.0. Valid values:
   * 
   * *   `true`: supports HTTP 1.0.
   * *   `false`: does not support HTTP 1.0.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  http10Enabled?: boolean;
  /**
   * @remarks
   * The IP addresses of external services to which traffic is intercepted.
   * 
   * @example
   * *
   */
  includeIPRanges?: string;
  /**
   * @remarks
   * The ports for which inbound traffic is redirected to the sidecar proxy.
   * 
   * @example
   * 80,81
   */
  includeInboundPorts?: string;
  /**
   * @remarks
   * The log level of the sidecar proxy on the data plane. Log levels include `none`, `error`, `warn`, `info`, and `debug`. The levels correspond to different amounts of information reported by the logs. For example, none-level logs report the least information, while debug-level logs report the most information.
   * 
   * @example
   * 8000,8001
   */
  includeOutboundPorts?: string;
  /**
   * @remarks
   * Specifies whether to create a Classic Load Balancer (CLB) instance for accessing Mesh Topology of Service Mesh (ASM).
   * 
   * @example
   * false
   */
  integrateKiali?: boolean;
  /**
   * @remarks
   * Specifies whether to load the bootstrap configuration before the sidecar proxy is started.
   * 
   * @example
   * TPROXY
   */
  interceptionMode?: string;
  /**
   * @remarks
   * Specifies the default scheduling configurations that ASM delivers to components on the data plane. You can configure `nodeSelector` and tolerations in the JSON format.
   * 
   * > *   Modifying the value of this parameter is a high-risk operation. The modification will cause all components on the data plane of ASM to restart. Exercise caution before modifying the value of this parameter.
   * >*   The configurations specified by this parameter do not apply to the ASM gateway. You can configure gateway-specific scheduling on the ASM gateway.
   * 
   * @example
   * {"c31e3b******5634b":"token_example"}
   */
  kialiArmsAuthTokens?: string;
  /**
   * @remarks
   * Specifies whether to enable the Mesh Topology feature. To enable this feature, make sure that you have enabled Prometheus monitoring. If Prometheus monitoring is disabled, the Mesh Topology feature must be disabled. Valid values:````
   * 
   * *   `true`: enables the Mesh Topology feature.
   * *   `false`: disables the Mesh Topology feature.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  kialiEnabled?: boolean;
  /**
   * @remarks
   * Specifies Classic Load Balancer (CLB) instances by using annotations when the Mesh Topology feature is enabled. These CLB instances are used to access the Mesh Topology feature in different clusters.
   * 
   * This parameter is a JSON-encoded string. The key in the JSON object is the ID of a cluster on the data plane, and the value is the annotation content of the Mesh Topology service in the cluster.
   * 
   * For more information about how to configure CLB instances by using annotations, see [Add annotations to the YAML file of a Service to configure CLB instances](https://www.alibabacloud.com/help/container-service-for-kubernetes/latest/use-annotations-to-configure-load-balancing-1).
   * 
   * @example
   * {"c31e3b******5634b":{"service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type":"intranet"}}
   */
  kialiServiceAnnotations?: string;
  /**
   * @remarks
   * The labels for isolated workloads.
   * 
   * @example
   * name=xx,region=xx
   */
  labelsForOffloadedWorkloads?: string;
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
   * The configurations of cross-region load balancing. Valid values:
   * 
   * *   `failover`: the configurations of cross-region failover. Example:
   * 
   * <!---->
   * 
   *     failover: [// Cross-region failover configurations of the struct type. 
   *             {
   *                 // If a service fails in the China (Beijing) region, the traffic is redirected to the same service in the China (Hangzhou) region. 
   *                 from: "cn-beijing", 
   *                 to: "cn-hangzhou",
   *             }
   *         ]
   * 
   * *   `distribute`: the configurations of cross-region traffic distribution. Example:
   * 
   * <!---->
   * 
   *     distribute: [// Cross-region traffic distribution configurations of the struct type. 
   *             {
   *                 // For traffic that is routed to the China (Beijing) region, 70% of the traffic is allocated to the China (Beijing) region and the rest of the traffic is redirected to the China (Hangzhou) region. 
   *                 "from": "cn-beijing",
   *                 "to": {
   *                     "cn-beijing": 70,
   *                     "cn-hangzhou": 30,
   *                 }
   *             }
   *         ]
   * 
   * @example
   * {"failover":[{"from":"cn-hangzhou","to":"cn-shanghai"}]}
   */
  localityLBConf?: string;
  /**
   * @remarks
   * Specifies whether to enable cross-region load balancing. Valid values:
   * 
   * *   `true`: enables cross-region load balancing.
   * *   `false`: disables cross-region load balancing.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  localityLoadBalancing?: boolean;
  /**
   * @remarks
   * The number of worker threads used by the sidecar proxy on the data plane.
   * 
   * @example
   * info
   */
  logLevel?: string;
  /**
   * @remarks
   * Specifies whether to enable Microservices Engine (MSE). Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  MSEEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Transport Layer Security (TLS) acceleration based on MultiBuffer.
   * 
   * @example
   * false
   */
  multiBufferEnabled?: boolean;
  /**
   * @remarks
   * The pull-request latency. By default, this parameter is left empty.
   * 
   * @example
   * 0.02s
   */
  multiBufferPollDelay?: string;
  /**
   * @remarks
   * Specifies whether to enable MySQL Filter. Valid values:
   * 
   * *   `true`: enables MySQL Filter.
   * *   `false`: disables MySQL Filter.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  mysqlFilterEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to clear feature labels on nodes when NFD is disabled.
   * 
   * This parameter is valid only when the `NFDEnabled` parameter is set to `false`.
   * 
   * @example
   * false
   */
  NFDEnabled?: boolean;
  /**
   * @remarks
   * The minimum number of CPU cores requested by the proxy service that exports Tracing Analysis data. For example, `1000m` indicates one CPU core.
   * 
   * @example
   * false
   */
  NFDLabelPruned?: boolean;
  /**
   * @remarks
   * The maximum size of the memory that is available to the pod that injects OPA proxies into application pods. For example, `1024Mi` indicates 1024 MB.
   * 
   * @example
   * 1000m
   */
  OPAInjectorCPULimit?: string;
  /**
   * @remarks
   * The minimum size of the memory requested by the pod that injects OPA proxies into application pods. For example, `50 Mi` indicates 50 MB.
   * 
   * @example
   * 80m
   */
  OPAInjectorCPURequirement?: string;
  /**
   * @remarks
   * Specifies whether to create a CLB instance for accessing the ASM mesh topology.
   * 
   * @example
   * 1024Mi
   */
  OPAInjectorMemoryLimit?: string;
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the pod that injects OPA proxies into application pods. For example, `1000m` indicates one CPU core.
   * 
   * @example
   * 50Mi
   */
  OPAInjectorMemoryRequirement?: string;
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the OPA proxy container.
   * 
   * @example
   * 2
   */
  OPALimitCPU?: string;
  /**
   * @remarks
   * The maximum size of the memory that is available to the OPA proxy container.
   * 
   * @example
   * 1024Mi
   */
  OPALimitMemory?: string;
  /**
   * @remarks
   * The log level of the OPA proxy container.
   * 
   * *   `info`: outputs all information.
   * *   `debug`: outputs debugging and error information.
   * *   `error`: outputs only error information.
   * 
   * @example
   * info
   */
  OPALogLevel?: string;
  /**
   * @remarks
   * The number of CPU cores that are requested by the OPA proxy container.
   * 
   * @example
   * 1
   */
  OPARequestCPU?: string;
  /**
   * @remarks
   * The size of the memory that is requested by the OPA proxy container.
   * 
   * @example
   * 512Mi
   */
  OPARequestMemory?: string;
  /**
   * @remarks
   * The minimum number of CPU cores requested by the pod that injects OPA proxies into application pods. For example, `1000m` indicates one CPU core.
   * 
   * @example
   * false
   */
  OPAScopeInjected?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the OPA plug-in. Valid values:
   * 
   * *   `true`: enables the OPA plug-in.
   * *   `false`: disables the OPA plug-in.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  opaEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to install the Open Policy Agent (OPA) plug-in. Valid values:
   * 
   * *   `true`: installs the OPA plug-in.
   * *   `false`: does not install the OPA plug-in.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  openAgentPolicy?: boolean;
  /**
   * @remarks
   * The policy for accessing external services. Valid values:
   * 
   * *   `ALLOW_ANY`: allows access to all external services.
   * *   `REGISTRY_ONLY`: allows access to only the external services that are defined in the ServiceEntry of the ASM instance.
   * 
   * @example
   * ALLOW_ANY
   */
  outboundTrafficPolicy?: string;
  /**
   * @remarks
   * Specifies whether to support HTTP/3.
   * 
   * @example
   * false
   */
  pilotEnableQuicListeners?: boolean;
  /**
   * @remarks
   * The endpoint of Prometheus monitoring. If you use ARMS Prometheus, set this parameter to the endpoint of Prometheus provided by ARMS.
   * 
   * @example
   * http://prometheus:9090
   */
  prometheusUrl?: string;
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the istio-init container.
   * 
   * @example
   * 2000m
   */
  proxyInitCPUResourceLimit?: string;
  /**
   * @remarks
   * The number of CPU cores that are requested by the istio-init container.
   * 
   * @example
   * 10m
   */
  proxyInitCPUResourceRequest?: string;
  /**
   * @remarks
   * The maximum size of the memory that is available to the istio-init container.
   * 
   * @example
   * 1024Mi
   */
  proxyInitMemoryResourceLimit?: string;
  /**
   * @remarks
   * The size of the memory that is requested by the istio-init container.
   * 
   * @example
   * 10Mi
   */
  proxyInitMemoryResourceRequest?: string;
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the sidecar proxy container.
   * 
   * @example
   * 2000m
   */
  proxyLimitCPU?: string;
  /**
   * @remarks
   * The maximum size of the memory that is available to the sidecar proxy container.
   * 
   * @example
   * 1024Mi
   */
  proxyLimitMemory?: string;
  /**
   * @remarks
   * The number of CPU cores that are requested by the sidecar proxy container.
   * 
   * @example
   * 100m
   */
  proxyRequestCPU?: string;
  /**
   * @remarks
   * The size of the memory that is requested by the sidecar proxy container.
   * 
   * @example
   * 128Mi
   */
  proxyRequestMemory?: string;
  /**
   * @remarks
   * The mode in which the sidecar proxy intercepts inbound traffic. Valid values:
   * 
   * *   `REDIRECT`: The sidecar proxy intercepts inbound traffic in the REDIRECT mode.
   * *   `TPROXY`: The sidecar proxy intercepts inbound traffic in the TPROXY mode.
   * 
   * @example
   * {"inclusionRegexps":".*adaptive_concurrency.*"}
   */
  proxyStatsMatcher?: string;
  /**
   * @remarks
   * Specifies whether to enable Redis Filter. Valid values:
   * 
   * *   `true`: enables Redis Filter.
   * *   `false`: disables Redis Filter.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  redisFilterEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable SMC optimization.
   * 
   * @example
   * false
   */
  SMCEnabled?: boolean;
  /**
   * @remarks
   * The ID of the ASM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the pod where a sidecar proxy injector resides.
   * 
   * @example
   * 4000m
   */
  sidecarInjectorLimitCPU?: string;
  /**
   * @remarks
   * The maximum size of the memory that is available to the pod where a sidecar proxy injector resides.
   * 
   * @example
   * 2048Mi
   */
  sidecarInjectorLimitMemory?: string;
  /**
   * @remarks
   * The number of CPU cores that are requested by the pod where a sidecar proxy injector resides.
   * 
   * @example
   * 1000m
   */
  sidecarInjectorRequestCPU?: string;
  /**
   * @remarks
   * The size of the memory that is requested by the pod where a sidecar proxy injector resides.
   * 
   * @example
   * 512Mi
   */
  sidecarInjectorRequestMemory?: string;
  /**
   * @remarks
   * Other configurations of automatic sidecar proxy injection, in the YAML format.
   * 
   * @example
   * {"injectedAnnotations":{"test/istio-init":"runtime/default2","test/istio-proxy":"runtime/default"},"replicaCount":2,"nodeSelector":{"beta.kubernetes.io/os":"linux"}}
   */
  sidecarInjectorWebhookAsYaml?: string;
  /**
   * @remarks
   * Specifies whether to enable Prometheus monitoring. We recommend that you enable [ARMS Prometheus](https://arms.console.aliyun.com/). Valid values:
   * 
   * *   `true`: enables Prometheus monitoring.
   * *   `false`: disables Prometheus monitoring.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  telemetry?: boolean;
  /**
   * @remarks
   * The maximum period of time that the sidecar proxy waits for requests to be processed before the proxy is stopped. For example, if you want to specify a period of 5 seconds, set this parameter to 5s.
   * 
   * @example
   * 5s
   */
  terminationDrainDuration?: string;
  /**
   * @remarks
   * Specifies whether to enable Thrift Filter. Valid values:
   * 
   * *   `true`: enables Thrift Filter.
   * *   `false`: disables Thrift Filter.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  thriftFilterEnabled?: boolean;
  /**
   * @remarks
   * The custom tag of Tracing Analysis. Specify this parameter in the JSON format.
   * 
   *     {
   *         "name1": CustomTag,
   *         "name2": CustomTag
   *     }
   * 
   * Tag key: literal, header, or environment.
   * 
   *     {
   *         "literal": {
   *             "value": "Fixed value"
   *         }
   *         "header": {
   *             "name": "Header name"
   *             "defaultValue": "Default value that is used if the specified header does not exist"
   *         }
   *         "environment": {
   *             "name": "Environment variable name"
   *             "defaultValue": "Default value that is used if the specified environment variable does not exist"
   *         }
   *     }
   * 
   * @example
   * {"mytag": {"literal":{"value":"test"}}}
   */
  traceCustomTags?: string;
  /**
   * @remarks
   * The maximum length of the request path contained in the HttpUrl span tag. Default value: `256`.
   * 
   * @example
   * 256
   */
  traceMaxPathTagLength?: string;
  /**
   * @remarks
   * The sampling percentage of Tracing Analysis.
   * 
   * @example
   * 100
   */
  traceSampling?: number;
  /**
   * @remarks
   * Specifies whether to enable Managed Service for OpenTelemetry. (Before you enable [Managed Service for OpenTelemetry](https://tracing-analysis.console.aliyun.com/), make sure that you have activated it.) Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  tracing?: boolean;
  /**
   * @remarks
   * The maximum size of the memory that is available to the proxy service that exports Tracing Analysis data. For example, `1Mi` indicates 1 MB.
   * 
   * @example
   * 1000Mi
   */
  tracingOnExtZipkinLimitCPU?: string;
  /**
   * @remarks
   * The retention period for the access logs of the ingress gateway. Unit: day. The logs are collected by using Log Service. For example, `30` indicates 30 days.
   * 
   * @example
   * 1024Mi
   */
  tracingOnExtZipkinLimitMemory?: string;
  /**
   * @remarks
   * The number of replicas that are available to the proxy service that exports Managed Service for OpenTelemetry data.
   * 
   * @example
   * 2
   */
  tracingOnExtZipkinReplicaCount?: string;
  /**
   * @remarks
   * The minimum size of the memory requested by the proxy service that exports Tracing Analysis data. For example, `1Mi` indicates 1 MB.
   * 
   * @example
   * 200m
   */
  tracingOnExtZipkinRequestCPU?: string;
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the proxy service that exports Tracing Analysis data. For example, `1000m` indicates one CPU core.
   * 
   * @example
   * 200Mi
   */
  tracingOnExtZipkinRequestMemory?: string;
  /**
   * @remarks
   * Specifies whether to enable WebAssembly Filter. Valid values:
   * 
   * *   `true`: enables WebAssembly Filter.
   * *   `false`: disables WebAssembly Filter.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
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
      certChain: 'CertChain',
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
      existingCaCert: 'ExistingCaCert',
      existingCaKey: 'ExistingCaKey',
      existingRootCaCert: 'ExistingRootCaCert',
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
      labelsForOffloadedWorkloads: 'LabelsForOffloadedWorkloads',
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
      pilotEnableQuicListeners: 'PilotEnableQuicListeners',
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
      SMCEnabled: 'SMCEnabled',
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
      tracingOnExtZipkinReplicaCount: 'TracingOnExtZipkinReplicaCount',
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
      certChain: 'string',
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
      existingCaCert: 'string',
      existingCaKey: 'string',
      existingRootCaCert: 'string',
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
      labelsForOffloadedWorkloads: 'string',
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
      pilotEnableQuicListeners: 'boolean',
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
      SMCEnabled: 'boolean',
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
      tracingOnExtZipkinReplicaCount: 'string',
      tracingOnExtZipkinRequestCPU: 'string',
      tracingOnExtZipkinRequestMemory: 'string',
      webAssemblyFilterEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

